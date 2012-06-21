lib.loginBox < plugin.tx_felogin_pi1
lib.loginBox {
    templateFile = {$filepaths.templates}felogin.html
    redirectMode = login
    redirectPageLogin = {$contentpage.restrictedHomePid}
}
