plugin.tt_news {
	templateFile = {$filepaths.templates}tt_news.html
	dontUseBackPid = 1
	excludeAlreadyDisplayedNews = 0
	noNewsToListMsg_stdWrap.wrap = <p>|</p>
	
	displaySingle {
		subheader_stdWrap.wrap = <div class="news-single-subheader">|</div>
			image {
			file.maxW = 250
			file.maxH = 300
			#imageLinkWrap = 0
		}
	}

	# define rendering of LATEST mode
	displayLatest {
		subheader_stdWrap.cObject >
		
			subheader_stdWrap {
			stripHtml = 1
			crop = 70 | ... | 1
			ifEmpty.field = bodytext
			required = 1
		}
		/*
		   image {
			file.maxW = 60
			file.maxH = 60
			imageLinkWrap = 0
		}
		*/
	}

	# rendering of LIST mode
	displayList {
		
		subheader_stdWrap {
			crop >
			required = 1
			wrap >
			append >
		}
		content_stdWrap {
			wrap = <div class="news-list-content">|</div>
			required = 1
		}
		image {
			file.maxW = 175
			file.maxH = 175
			imageLinkWrap = 0
		}

	}

	# Override some of the text labels for tt_news with our own text.
	# See EXT:tt_news/pi/locallang.xml for all language labels
	_LOCAL_LANG.de {
		# Remove the header that tt_news adds by default above the LATEST listing
		latestHeader =
		
# replace the word 'more' after article text in news list or latest with '>>'
		more = Mehr
	}

	# Date & time formats for news display. The easiest way to change them is by changing the values
	# of the constants in TypoScript template ROOT in the root folder of the TypoScript Templates.
	# There are configuration options for various types of news display. If you want, you can modify
	# each separately according to your own preferences.
	
	archiveTitleCObject {
		10.strftime = %Y-%B
	}
	getRelatedCObject.10 {
		default.20.strftime = {$plugin.tt_news.dateformat} {$plugin.tt_news.timeformat}
		1.20.strftime = {$plugin.tt_news.dateformat} {$plugin.tt_news.timeformat}
		2.20.strftime = {$plugin.tt_news.dateformat} {$plugin.tt_news.timeformat}
	}
	displaySingle {
		date_stdWrap.strftime = {$plugin.tt_news.dateformat}
		time_stdWrap.strftime = {$plugin.tt_news.timeformat}
		age_stdWrap.age = Minuten| Stunden| Tage| Jahr(e)
	}
	displayLatest {
		date_stdWrap.strftime = {$plugin.tt_news.dateformat}
		time_stdWrap.strftime = {$plugin.tt_news.timeformat}
	}
	displayList {
		date_stdWrap.strftime = {$plugin.tt_news.dateformat}
		time_stdWrap.strftime = {$plugin.tt_news.timeformat}
	}
}
