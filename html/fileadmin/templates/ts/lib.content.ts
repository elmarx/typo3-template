[globalVar = GP:tx_ttnews|tt_news > 0] && [globalVar = TSFE:id = {$plugin.tt_news.singlePid}]
lib.content < plugin.tt_news
lib.content {
	code >
	code = SINGLE
}
[else]
lib.content < styles.content.get
[global]
