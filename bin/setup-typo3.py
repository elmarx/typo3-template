#!/usr/bin/env python3
import os

TYPO3_VERSION = "4.4.6"
GROUP = "www-data"

os.system("wget -qO - http://prdownloads.sourceforge.net/typo3/typo3_src-%s.tar.gz?download | tar xzf -" % (TYPO3_VERSION))
os.system("wget -qO - http://prdownloads.sourceforge.net/typo3/dummy-%s.tar.gz?download | tar xzf - -C html/ --strip 1" % (TYPO3_VERSION))

# TODO: derive 4.4.x from TYPO3_VERSION
os.symlink("typo3_src-%s" % TYPO3_VERSION, "typo3_src-4.4.x")
os.unlink("html/typo3_src")
os.symlink("../typo3_src-4.4.x", "html/typo3_src")

# cleanup typo3 folder
for i in ['clear.gif', 'INSTALL.txt', 'README.txt', 'RELEASE_NOTES.txt']:
    os.unlink(os.path.join("html", i))

os.rename("html/_.htaccess", "html/.htaccess")

for i in ['fileadmin', 'typo3conf', 'typo3temp', 'uploads']:
    os.system("chgrp -R %s %s" % (GROUP, os.path.join('html', i)))
    os.system("chmod -R g+w %s" % (os.path.join('html', i)))
