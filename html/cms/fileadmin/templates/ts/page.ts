page = PAGE    
page {
		# Regular pages always have typeNum = 0
		typeNum = 0

		# Add the icon that will appear in front of the url in the browser
		# This icon will also be used for the bookmark menu in browsers
		shortcutIcon = {$filepaths.images}favicon.ico

		# Add a TEMPLATE object to the page
		# We use the template autoparser extension to easily replace parts of the HTML template by dynamic TypoScript objects
		10 = TEMPLATE
		10 {
				# Use the HTML template from the automake template plugin
				template =< plugin.tx_automaketemplate_pi1

				# Use the <body> subpart
				workOnSubpart = DOCUMENT_BODY

				# Link content and page blocks to id's that have been enabled in the
				# automaketemplate template in the extension_configuration sysfolder
				subparts {    
						mainMenu < lib.mainMenu
						searchForm < lib.searchForm

						t3content < lib.content
						border < lib.border
						left < lib.left
						right < lib.right
						#footer < lib.editableFooter
				}
		}

		config.index_enable = 1

		includeJS {

		}

		includeJSlibs {
				jquery = {$filepaths.scripts}jquery-1.4.x.min.js
		}

		includeCSS {
				1 = {$filepaths.css}main.css
		}

}

[globalVar = LIT:1 = {$config.showPageTitle}]
page.10.subparts.pagetitle = TEXT
page.10.subparts.pagetitle.data = page : title
page.10.subparts.pagetitle.wrap = <h2>|</h2>
[global]

[browser = msie]
page.includeCSS.msie = {$filepaths.css}fix_ie.css
[global]

page.meta {
# Use the meta tag 'description' from the constants as default value
# If the meta field description in the page properties is filled, then this will override the default.
		description = {$plugin.meta.description}
		description.override.field = description

		author = {$plugin.meta.author}
		author.override.field = author

		keywords = {$plugin.meta.keywords}
		keywords.override.field = keywords

		robots.value = {$plugin.meta.robots}
		revisit = {$plugin.meta.revisit}
		copyright = {$plugin.meta.copyright}
}

