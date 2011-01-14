#!/usr/bin/env python3
import os
import sys
import re
import subprocess
import tempfile
import hashlib

TYPO3_VERSION = "4.4.6"
TYPO3_X_VERSION = re.sub(r'\d+$', 'x', TYPO3_VERSION)
GROUP = "www-data"

def generate_pw():
    makepasswd = subprocess.Popen("makepasswd", stdout=subprocess.PIPE)
    return re.sub(r'\n$', '', makepasswd.stdout.read().decode())

def md5(value):
    m = hashlib.md5()
    m.update(value.encode())
    return m.hexdigest()

def replace_in_file(pattern, replace, filename):
    f = open(filename, 'r')
    temp = tempfile.TemporaryFile('w+')
    for line in f.readlines():
        if re.match(pattern, line):
            temp.write(replace)
        else:
            temp.write(line)
    f.close()

    temp.seek(0)

    f = open(filename, 'w')
    for line in temp.readlines():
        f.write(line)

    f.close()

# are we in our typo3template folder?
if not os.path.isdir('html'):
    sys.exit()

# download typo3 src
if not os.path.isdir('typo3_src-%s' % (TYPO3_VERSION)):
    os.system("wget -qO - http://prdownloads.sourceforge.net/typo3/typo3_src-%s.tar.gz?download | tar xzf -" % (TYPO3_VERSION))

# download typo3 dummy
if not os.path.isdir('html/typo3conf'):
    os.system("wget -qO - http://prdownloads.sourceforge.net/typo3/dummy-%s.tar.gz?download | tar xzf - -C html/ --strip 1" % (TYPO3_VERSION))

# create the proper symlinks
try:
    os.symlink("typo3_src-%s" % TYPO3_VERSION, "typo3_src-%s" % (TYPO3_X_VERSION))
except:
    pass
os.unlink("html/typo3_src")
os.symlink("../typo3_src-%s" % (TYPO3_X_VERSION), "html/typo3_src")

# cleanup typo3 folder
for i in [os.path.join('html', x) for x in ['clear.gif', 'INSTALL.txt', 'README.txt', 'RELEASE_NOTES.txt']]:
    try:
        os.unlink(i)
    except:
        pass

try:
    os.rename("html/_.htaccess", "html/.htaccess")
except:
    pass

# make the typical typo3 folders writeable
for i in ['fileadmin', 'typo3conf', 'typo3temp', 'uploads']:
    os.system("chgrp -R %s %s" % (GROUP, os.path.join('html', i)))
    os.system("chmod -R g+w %s" % (os.path.join('html', i)))

# touch enable_install_tool
open('html/typo3conf/TOUCH_ENABLE_INSTALL', 'w').close()

installpw = generate_pw()

replace_in_file(r"\$TYPO3_CONF_VARS\['BE'\]\['installToolPassword'\] =", "$TYPO3_CONF_VARS['BE']['installToolPassword'] = '%s';\n" % (md5(installpw)), 'html/typo3conf/localconf.php')




f = open('doc/accounts', 'w')
f.write("""
Installtool:
%s

admin
%s
""" % (installpw, generate_pw()))
f.close()
