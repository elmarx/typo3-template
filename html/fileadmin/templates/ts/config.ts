config {
		// Administrator settings
		admPanel = {$config.adminPanel}
		debug = {$config.debug}

		doctype = xhtml_strict

		// Character sets
		renderCharset = utf-8
		metaCharset = utf-8

		// Cache settings
		cache_period = 43200
		sendCacheHeaders = 1

		// URL Settings
		tx_realurl_enable = 1

		// Language Settings
		uniqueLinkVars = 1
		linkVars = L
		sys_language_uid = 0
		sys_language_overlay = 1
		sys_language_mode = content_fallback
		language = de
		locale_all = de_DE.UTF-8
		htmlTag_langKey = de

		// Link settings
		# absRefPrefix = /
		prefixLocalAnchors = all

		// Remove targets from links
		intTarget = 
		extTarget = 

		// Indexed Search
		index_enable = 1
		index_externals = 1

		// Code cleaning
		disablePrefixComment = 1

		// Move default CSS and JS to external file  
		removeDefaultJS = external
		inlineStyle2TempFile = 1

		// Protect mail addresses from spamming
		spamProtectEmailAddresses = -3
		spamProtectEmailAddresses_atSubst = @<span style = "display:none;">remove-this.</span>

		// Comment in the <head> tag
		headerComment (

		)

		meaningfulTempFilePrefix = 100
}

# Set baseURL setting for http or https
config.baseURL = http://{$config.domain}/
[globalString = IENV:TYPO3_SITE_URL = https://{$config.domain}/]
config.baseURL = https://{$config.domain}/
[global]
