lib.languageSelection = COA
lib.languageSelection {
    40 = TEXT
    40 {
        lang.en = English
        lang.de = Deutsch
    }

    50 = HMENU
    50 {
        special = language
        special.value = 0,1

        1 = TMENU
        1 {
            noBlur = 1
            NO = 1

            NO {
                wrapItemAndSub = <li class="german">|</li>||<li class="english">|</li>
                ATagParams = title="Deutsch"||title="English"
                stdWrap.cObject = TEXT
                stdWrap.cObject {
                    value = Deutsch
            }

            ACT < .NO
        }
        wrap = <ul>|</ul> 
    }
    
}
