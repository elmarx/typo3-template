plugin.tx_indexedsearch {
	search.rootPidList = 1 

	_DEFAULT_PI_VARS {
		type = 1
		lang = 0
	}

	templateFile = {$filepaths.templates}indexed_search.html

		show {
			rules = 0
			advancedSearchLink = 0
		}

	search.targetPid >
	search.targetPid = {$plugin.tx_indexedsearch.searchpageID}
}
