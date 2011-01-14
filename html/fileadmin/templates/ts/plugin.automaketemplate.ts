# Configuring the Auto-Parser for main template:
plugin.tx_automaketemplate_pi1 {

		# Read the template file
		content = FILE
		content.file = {$filepaths.templates}{$plugin.tx_automaketemplate_pi1.templatefile}

		elements {
				BODY.all = 1
				BODY.all.subpartMarker = DOCUMENT_BODY
				HEAD.all = 1
				HEAD.all.subpartMarker = DOCUMENT_HEADER

				DIV.id {
						mainMenu = 1
						searchForm = 1
						pagetitle = 1
						footer = 1

						t3content = 1
						border = 1
						left = 1
						right = 1
				}

				SPAN.id {
				}


				H1.all = 1

				# Remove some tags from HTML head section (because TYPO3 will add these dynamically)
				HEAD.rmTagSections = title,meta,link
		}

		# Prefix all relative paths in the HTML template with this value
		relPathPrefix = {$filepaths.templates}
}
