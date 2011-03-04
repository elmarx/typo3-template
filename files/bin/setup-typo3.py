#!/usr/bin/env python3
import os
import sys
import re
import subprocess
import tempfile
import hashlib

TYPO3_VERSION = "4.5.2"
TYPO3_DOWNLOAD_URL = "http://prdownloads.sourceforge.net/typo3/"
TYPO3_X_VERSION = re.sub(r'\d+$', 'x', TYPO3_VERSION)
GROUP = "www-data"

def generate_pw():
    pw = subprocess.Popen(["pwgen", '8', '1'], stdout=subprocess.PIPE)
    return re.sub(r'\n$', '', pw.stdout.read().decode())

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
if not os.path.isdir('html/cms'):
    sys.exit()

# download typo3 src
if not os.path.isdir('files/typo3_src-%s' % (TYPO3_VERSION)):
    os.system("wget -qO - %(url)stypo3_src-%(version)s.tar.gz | tar xzf - -C files" % { 'url': TYPO3_DOWNLOAD_URL, 'version': TYPO3_VERSION })

# download typo3 dummy
if not os.path.exists('html/cms/typo3conf/localconf.php'):
    os.system("wget -qO - %(url)s/dummy-%(version)s.tar.gz | tar xzf - -C html/cms/ --strip 1" % { 'url': TYPO3_DOWNLOAD_URL, 'version': TYPO3_VERSION })

# create the proper symlinks
try:
    os.symlink("files/typo3_src-%s" % TYPO3_VERSION, "files/typo3_src-%s" % (TYPO3_X_VERSION))
except:
    pass
try:
    os.unlink("html/cms/typo3_src")
except:
    pass
os.symlink("../files/typo3_src-%s" % (TYPO3_X_VERSION), "html/cms/typo3_src")

# cleanup typo3 folder
for i in [os.path.join('html/cms', x) for x in ['clear.gif', 'INSTALL.txt', 'README.txt', 'RELEASE_NOTES.txt']]:
    try:
        os.unlink(i)
    except:
        pass

try:
    os.rename("html/cms/_.htaccess", "html/cms/.htaccess")
except:
    pass

# make the typical typo3 folders writeable
for i in ['fileadmin', 'typo3conf', 'typo3temp', 'uploads']:
    os.system("chgrp -R %s %s" % (GROUP, os.path.join('html/cms', i)))
    os.system("chmod -R g+w %s" % (os.path.join('html/cms', i)))

# touch enable_install_tool
open('html/cms/typo3conf/ENABLE_INSTALL_TOOL', 'w').close()

installpw = generate_pw()

replace_in_file(r"\$TYPO3_CONF_VARS\['BE'\]\['installToolPassword'\] =", "$TYPO3_CONF_VARS['BE']['installToolPassword'] = '%s';\n" % (md5(installpw)), 'html/cms/typo3conf/localconf.php')


# todo:
# set dpi
# set gdlib png
# set forceCharset = utf-8


f = open('files/doc/accounts', 'w')
f.write("""
Installtool:
%s

admin
%s
""" % (installpw, generate_pw()))
f.close()
