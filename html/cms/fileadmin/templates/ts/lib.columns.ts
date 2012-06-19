[globalVar = GP:tx_ttnews|tt_news > 0] && [globalVar = TSFE:id = {$plugin.tt_news.singlePid}]
lib.content < plugin.tt_news
lib.content {
	code >
	code = SINGLE
}
[else]
lib.content < styles.content.get
[global]

lib.col0 < styles.content.get

lib.col1 < styles.content.get
lib.col1.select.where = colPos = 1

lib.col2 < styles.content.get
lib.col2.select.where = colPos = 2

lib.col3 < styles.content.get
lib.col3.select.where = colPos = 3

lib.col4 < styles.content.get
lib.col4.select.where = colPos = 4
