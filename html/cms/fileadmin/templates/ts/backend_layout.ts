# plugin.tx_automaketemplate_pi1 settings
temp.template = CASE
temp.template {
    key.field = backend_layout
    key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide

    default < plugin.tx_automaketemplate_pi1

    2 < plugin.tx_automaketemplate_pi1
    2 {
        content.file = {$filepaths.templates}x_template.html 

        elements {
            DIV.id {
                x = 1
            }
        }
    }
}

# page.10 settings (primarily subpart assignments)
temp.page10 = CASE
temp.page10 {
    key.field = backend_layout
    key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide

    default < page.10

    2 < page.10
    2.subparts {
        x < lib.col1
    }
}

# finally, copy the objects back to the original objects
plugin.tx_automaketemplate_pi1 < temp.template
page.10 < temp.page10
