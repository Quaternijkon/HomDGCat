$(function () {

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.PAGE_TITLE[lang]
    var avid = $('#AVID').val()

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Title[lang] + "<color style='font-size: 26px;'><br>" + computer_.MiscText.game_img[lang] + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_);
    $('h3 .tlsub').hide()
    $('h3 .links').render([
        {
            img: imgpre + 'images/menu.png',
            class: '_menu_'
        },
        {
            img: imgpre + 'images/translate.png',
            class: '_translate_'
        }
    ]);

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    _DATA = []
    loading = 1
    _DATA_2 = []
    loading_2 = 1

    begin()

    function begin() {
        
        _choice_1 = (lang == 'CH') ? '搜索文本' : 'Search Text'
        _choice_2 = (lang == 'CH') ? '搜索对话' : 'Search Dialogues'
        _choice_3 = (lang == 'CH') ? '剧情记录' : 'Quest Logs'
        _choice_4 = (lang == 'CH') ? '阅读物搜索' : 'Readables Search'

        _title = (lang == 'CH') ? '原神 文本+剧情搜索' : 'GI Text+Dialogue Search'
        _button = (lang == 'CH') ? '搜索' : 'Search'
        _hits = (lang == 'CH') ? '找到 # 条文本' : 'Found # results'
        _hits_initial = (lang == 'CH') ? '加载中...' : 'Loading data...'
        _hits_finish = (lang == 'CH') ? '加载完成' : 'Loading finished'
        
        _button_name = (lang == 'CH') ? '搜索说话人名' : 'Search Speaker'
        _button_text = (lang == 'CH') ? '搜索对话内容' : 'Search Content'
        
        _up = (lang == 'CH') ? '上一句' : 'Previous Sentence'
        _down = (lang == 'CH') ? '下一句' : 'Next Sentence'

        $('container').render({
            div: [
                {
                    p: _title,
                    class: 'ttl',
                    style: {
                        'text-align': 'center',
                        'font-weight': 'bold',
                        'padding-top': '15px',
                        'margin-bottom': '15px',
                    }
                },
                {
                    div: [
                        {
                            schedule: _choice_4,
                            class: 'choice_4',
                            style: {
                                border: '2px solid #F29E38'
                            }
                        },
                        {
                            schedule: _choice_1,
                            class: 'choice_1'
                        },
                        {
                            schedule: _choice_2,
                            class: 'choice_2'
                        },
                        {
                            schedule: _choice_3,
                            class: 'choice_3',
                            style: {
                                border: '2px solid #F29E38'
                            }
                        },
                    ],
                    class: 'choice'
                },
                {
                    div: [
                        {
                            input: '',
                            a: {
                                type: 'text',
                                id: 'INPUT'
                            },
                        },
                        {
                            span: {
                                span: _button
                            },
                            class: 'but'
                        }
                    ],
                    class: 'input_wrap grp_1'
                },
                {
                    p: {
                        CH: '可以根据中文、英文、hash 搜索',
                        EN: 'Search via Chinese, English or hash.'
                    }[lang],
                    class: 'grp_1',
                    style: {
                        'text-align': 'center'
                    }
                },
                {
                    p: _hits_initial,
                    class: 'hits grp_1'
                },
                {
                    div: '',
                    class: 'results grp_1'
                },
                {
                    div: [
                        {
                            input: '',
                            a: {
                                type: 'text',
                                id: 'INPUT_2'
                            },
                        }
                    ],
                    class: 'input_wrap_2 grp_2'
                },
                {
                    div: [
                        {
                            span: {
                                span: _button_name
                            },
                            class: 'but_2'
                        },
                        {
                            span: {
                                span: _button_text
                            },
                            class: 'but_3'
                        }
                    ],
                    class: 'input_wrap_2 grp_2',
                    style: {
                        'margin-top': '13px'
                    }
                },
                {
                    p: _hits_initial,
                    class: 'hits_2 grp_2'
                },
                {
                    div: '',
                    class: 'results_2 grp_2'
                }
            ],
            class: 'content'
        })

        if (avid == '2') activate_2()
        else {
            $('.grp_1').hide()
            $('.grp_2').hide()
        }

        $('body').addClass(bg_name)

    }

    $('body').on('click', '.choice_1', activate_1)

    $('body').on('click', '.choice_2', activate_2)

    $('body').on('click', '.choice_3', function () {
        window.open('/gi/quests', '_blank')
    })

    $('body').on('click', '.choice_4', function () {
        window.open('/gi/readable', '_blank')
    })

    function activate_1() {
        if ($('.choice_1').hasClass('active')) return
        $('.grp_1').show()
        $('.grp_2').hide()
        if (loading == 1) {
            loading = 2
            fetch('/TextMap/GI.json')
                .then(x => x.json())
                .then(y => {
                    _DATA = y
                    loading = 0
                    $('.hits').html(_hits_finish)
                })
        }
        $('.choice_1').addClass('active')
        $('.choice_2').removeClass('active')
    }
    
    function activate_2() {
        if ($('.choice_2').hasClass('active')) return
        $('.grp_1').hide()
        $('.grp_2').show()
        if (loading_2 == 1) {
            loading_2 = 2
            fetch(`/TextMap/GI_Talk_${lang}.json`)
                .then(x => x.json())
                .then(y => {
                    _DATA_2 = y
                    loading_2 = 0
                    $('.hits_2').html(_hits_finish)
                })
        }
        $('.choice_1').removeClass('active')
        $('.choice_2').addClass('active')
    }

    $('body').on('click', '.but', function () {
        if (loading) return
        $('.results').empty()
        var hits = 0
        var s = $('#INPUT').val()
        if (!s) return
        for (const dat of _DATA) {
            var a = (dat.H && dat.H.toString().includes(s))
            var b = (dat.C && dat.C.includes(s))
            var c = (dat.E && dat.E.includes(s))
            if (a || b || c) {
                show(dat)
                hits++
            }
        }
        shownumber(hits)
    })

    $('body').on('click', '.but_2', function () {
        search_dialogue('S')
    })

    $('body').on('click', '.but_3', function () {
        search_dialogue('T')
    })
    
    function search_dialogue(K) {
        if (loading_2) return
        $('.results_2').empty()
        var hits = 0
        var s = $('#INPUT_2').val()
        if (!s) return
        for (const dat_index in _DATA_2) {
            if (_DATA_2[dat_index][K].includes(s)) {
                show_2(dat_index)
                hits++
            }
        }
        shownumber_2(hits)
    }

    function show(d) {
        $('.results').render({
            div: [
                {
                    p: d.H.toString(),
                },
                {
                    p: text(d.C).replaceAll('\\n', '<br>'),
                },
                {
                    p: text(d.E).replaceAll('\\n', '<br>'),
                }
            ],
            class: 'result_single'
        })
    }

    function text_2(_index) {
        var d = _DATA_2[parseInt(_index)]
        console.log(_index)
        var ret = d.I.toString()
        if (d.S) ret += '<br><b>' + d.S + '</b>'
        if (d.T) ret += '<br>' + d.T
        return ret
    }

    function show_2(_index) {
        $('.results_2').render({
            div: [
                {
                    button: '↑↑',
                    class: '_up',
                    a: {
                        'data-id': parseInt(_index) - 1
                    }
                },
                {
                    p: text_2(_index),
                },
                {
                    button: '↓↓',
                    class: '_down',
                    a: {
                        'data-id': parseInt(_index) + 1
                    }
                },
            ],
            class: 'result_single'
        })
    }

    $('body').on('click', '._up', function () {
        var this_index = parseInt($(this).attr('data-id'))
        $('<p>' + text_2(this_index) + '</p>').insertAfter(this)
        $(this).attr('data-id', this_index - 1)
    })

    $('body').on('click', '._down', function () {
        var this_index = parseInt($(this).attr('data-id'))
        $('<p>' + text_2(this_index) + '</p>').insertBefore(this)
        $(this).attr('data-id', this_index + 1)
    })

    function text(t) {
        if (!t) return ''
        var temp = t
        while (temp.includes('<color=')) {
            var start = temp.indexOf('<color=')
            var end = temp.indexOf('>', start)
            var color = temp.substring(start + 7, end)
            if (color == "#FFFFFFFF") temp = temp.replaceAll(temp.substring(start, end + 1), `<color style='color:${color};background-color:#27363E'>`)
            else temp = temp.replaceAll(temp.substring(start, end + 1), `<color style='color:${color}'>`)
        }
        return temp
    }

    function shownumber(n) {
        $('.hits').html(_hits.replace("#", n.toString()))
    }

    function shownumber_2(n) {
        $('.hits_2').html(_hits.replace("#", n.toString()))
    }

})