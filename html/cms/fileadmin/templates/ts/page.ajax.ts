ajax = PAGE 
ajax {
	typeNum = 3
	
	config {
		disableAllHeaderCode = 1
		additionalHeaders = Content-Type: application/json
		xhtml_cleaning = 0
		debug = 0
	}
	
	10 < styles.content.get

}

[globalVar = GP:type = 3]
	tt_content.stdWrap.innerWrap >
[global]
