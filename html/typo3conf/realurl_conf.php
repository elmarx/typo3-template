<?php
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = array(
    '_DEFAULT' =>
    array(
        'init' =>
        array(
            'enableCHashCache' => true,
            'appendMissingSlash' => 'ifNotFile,redirect',
            'adminJumpToBackend' => true,
            'enableUrlDecodeCache' => true,
            'enableUrlEncodeCache' => true,
            'emptyUrlReturnValue' => '/',
        ),
        'pagePath' =>
        array(
            'type' => 'user',
            'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
            'spaceCharacter' => '-',
            'languageGetVar' => 'L',
            'rootpage_id' => '1',
        ),
        'fixedPostVars' => array(
            'search' => array(
                array(
                    'GETvar' => 'tx_indexedsearch[ext]',
                    'valueMap' => array(
                        'extended' => 1,
                    )
                )
            ),
            'SEARCH_PID' => 'search',
        ),
        'postVarSets' => array(
            '_DEFAULT' => array(
                'lookup' => array(
                    array(
                        'GETvar' => 'tx_a21glossary[uid]',
                        'lookUpTable' => array(
                            'table' => 'tx_a21glossary_main',
                            'id_field' => 'uid',
                            'alias_field' => 'short',
                            'useUniqueCache' => true,
                            'useUniqueCache_conf' => array(
                                'strtolower' => true,
                                'spaceCharacter' => '-'
                            )
                        )
                    )
                ),
                'back-to' => array(
                    array(
                        'GETvar' => 'tx_a21glossary[back]',
                        'lookUpTable' => array(
                            'table' => 'pages',
                            'id_field' => 'uid',
                            'alias_field' => 'title',
                            'useUniqueCache' => true,
                            'useUniqueCache_conf' => array(
                                'strtolower' => true,
                                'spaceCharacter' => '-'
                            )
                        )
                    )
                ),
                // news archive parameters
                'archive' => array(
                    array(
                        'GETvar' => 'tx_ttnews[year]',
                    ),
                    array(
                        'GETvar' => 'tx_ttnews[month]',
                        'valueMap' => array(
                            'january' => '01',
                            'february' => '02',
                            'march' => '03',
                            'april' => '04',
                            'may' => '05',
                            'june' => '06',
                            'july' => '07',
                            'august' => '08',
                            'september' => '09',
                            'october' => '10',
                            'november' => '11',
                            'december' => '12',
                        )
                    ),
                ),
                // news pagebrowser
                'browse' => array(
                    array(
                        'GETvar' => 'tx_ttnews[pointer]',
                    ),
                ),
                // news categories
                'select_category' => array(
                    array(
                        'GETvar' => 'tx_ttnews[cat]',
                    ),
                ),
                // news articles and searchwords
                'article' => array(
                    array(
                        'GETvar' => 'tx_ttnews[tt_news]',
                        'lookUpTable' => array(
                            'table' => 'tt_news',
                            'id_field' => 'uid',
                            'alias_field' => 'title',
                            'addWhereClause' => ' AND NOT deleted',
                            'useUniqueCache' => 1,
                            'useUniqueCache_conf' => array(
                                'strtolower' => 1,
                                'spaceCharacter' => '-',
                            ),
                        ),
                    ),
                    array(
                        'GETvar' => 'tx_ttnews[swords]',
                    ),
                ),
            ),
        ),
        'fileName' =>
        array(
            'defaultToHTMLsuffixOnPrev' => 0,
            'acceptHTMLsuffix' => 1,
            'index' =>
            array(
                'print' =>
                array(
                    'keyValues' =>
                    array(
                        'type' => 98,
                    ),
                ),
                'rss.xml' => array(
                    'keyValues' => array(
                        'type' => 100,
                    ),
                ),
                'rss091.xml' => array(
                    'keyValues' => array(
                        'type' => 101,
                    ),
                ),
                'rdf.xml' => array(
                    'keyValues' => array(
                        'type' => 102,
                    ),
                ),
                'atom.xml' => array(
                    'keyValues' => array(
                        'type' => 103,
                    ),
                ),
            ),
        ),
        'preVars' =>
        array(
            0 =>
            array(
                'GETvar' => 'L',
                'valueMap' =>
                array(
                    'de' => '0',
                    'de' => '',
                ),
                'noMatch' => 'bypass',
            ),
        ),
    ),
);
?>
