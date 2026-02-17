$(function () {

    var avid = $('#AVID').val()
    init_title((lang == 'CH' ? '任务' : 'Quest Logs') + ' ' + computer_.MiscText.PAGE_TITLE[lang])
    cur_coordinate = 0

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Title[lang] + "<color style='font-size: 26px;'><br>" + computer_.MiscText.game_img[lang] + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`))
    $('h3 .tlsub').hide()
    $('h3 .links').render([
        {
            img: '/images/menu.png',
            class: '_menu_'
        },
        {
            img: '/images/translate.png',
            class: '_translate_'
        }
    ]);
    if (!avid && window.location.hash) avid = window.location.hash.replace('#_', '')
    if (window.location.hash) window.location.hash = ''

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/quests/' + avid + '.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    var ojb = document.getElementsByClassName("scroller")
    ojb[0].addEventListener("scroll", update)

    var mf = 0

    function begin() {

        $('.content').remove()
        $('container').render({
            div: {
                div: [
                    {
                        div: [
                            {
                                img: '/images/Misc/Back.png',
                                style: {
                                    width: '40px',
                                    height: '40px'
                                },
                                class: 'switch_1',
                            },
                            {
                                img: '/images/Misc/Switch.png',
                                style: {
                                    width: '40px',
                                    height: '40px'
                                },
                                class: 'switch_2'
                            },
                        ],
                        class: 'switch'
                    },
                    {
                        div: {
                            div: [
                                {
                                    div: {
                                        img: '/images/ChapterIcon/' + _chapter_info.Pic + '.png',
                                    },
                                    when: _chapter_info.Pic != "",
                                    class: 'weapon_left'
                                },
                                {
                                    div: {
                                        img: '/images/ChapterIcon/' + _chapter_info.Icon + '.png',
                                    },
                                    when: (_chapter_info.Pic == "") && (_chapter_info.Icon != ""),
                                    class: 'weapon_left'
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    p: _chapter_info.Num,
                                                    style: {
                                                        'font-weight': 'bold',
                                                        'text-align': 'center',
                                                        'font-size': '1.2em'
                                                    },
                                                    when: _chapter_info.Num != "",
                                                    class: 'weapon_title'
                                                },
                                                {
                                                    p: _chapter_info.Title ? _chapter_info.Title : (`ID ${_chapter_info._id}`),
                                                    style: {
                                                        'font-weight': 'bold',
                                                        'text-align': 'center',
                                                        'font-size': '1.5em'
                                                    },
                                                    class: 'weapon_title'
                                                },
                                                {
                                                    p: _chapter_info.ImageTitle,
                                                    style: {
                                                        'font-weight': 'bold',
                                                        'text-align': 'center',
                                                        'font-size': '1em'
                                                    },
                                                    when: _chapter_info.ImageTitle != "",
                                                    class: 'weapon_title'
                                                },
                                                {
                                                    p: computer_.MiscText.Computer_Show[lang],
                                                    class: 'mon_head_ tag_span',
                                                    style: {
                                                        'margin-top': '0px',
                                                        'margin-bottom': '15px',
                                                        color: 'rgb(255, 172, 255)'
                                                    }
                                                },
                                                {
                                                    p: function (k) {
                                                        var len = _line_count.length
                                                        _line_count.forEach(function (t, i) {
                                                            if (len > 25 && t.Count < 5 && !(isFinite(t.ID) && parseInt(t.ID) >= 1000 && parseInt(t.ID) <= 2000)) return
                                                            $(k.container).render({
                                                                span: function (k) {
                                                                    return '<color style=\'color:#df903b\'>' + t.Name.toString().replaceAll('_0', `<img class='sps' src='/images/Misc/Traveler${mf.toString()}.png'>`).replaceAll('_1005', `<img class='sps' src='/images/Misc/Paimon.png'>`) + '</color> ' + t.Count
                                                                },
                                                                class: 'tag_span'
                                                            })
                                                        })
                                                    },
                                                    class: 'mon_head_',
                                                    style: {
                                                        'margin-top': '10px',
                                                        'margin-bottom': '10px'
                                                    }
                                                },
                                                {
                                                    p: _chapter_info.Intro,
                                                    when: _chapter_info.Intro.length,
                                                    style: {
                                                        'text-align': 'center',
                                                        'margin-bottom': '20px'
                                                    }
                                                },
                                            ]
                                        },
                                    ],
                                    class: 'weapon_right'
                                }
                            ],
                            class: 'a_section_content mon_head'
                        },
                        class: 'a_section',
                        style: {
                            padding: '10px',
                            'margin-right': '0'
                        }
                    },
                ],
                class: 'mon_body content_flag'
            },
            class: 'content'
        })
        $('.area_2').remove()
        $('container').render({
            divv: '',
            class: 'area_2'
        })
        $('.area_2').hide()

        switch_title(_chapter_info.Title)

        _quest_list.forEach(function (t, ind) {
            $('.content_flag').render({
                div: [
                    {
                        p: t.Name ? t.Name : `ID ${t._id}`,
                        class: 'event-name'
                    },
                    {
                        p: t.Desc,
                        class: 'event-desc'
                    },
                    {
                        div: {
                            img: '/images/GCG_UI/JUMP.png',
                            style: {
                                'width': '20px',
                                'height': '20px'
                            }
                        },
                        style: {
                            display: 'flex',
                            'justify-content': 'center',
                            'margin-bottom': '10px'
                        }
                    }
                ],
                class: 'a_section hover-shadow click-pop',
                a: {
                    'data-id': t._id.toString(),
                    'data-ind': (ind + 1).toString(),
                }
            })
        })

        $('body').addClass(bg_name)

    }

    $('body').on('click', '.switch_2', function () {
        mf = 1 - mf
        begin()
    })

    $('body').on('click', '.switch_1', function () {
        window.location.href = '/gi/quests'
    })

    $('body').on('click', '.click-pop', function (e) {
        popTalks($(this).attr('data-id'), $(this).attr('data-ind'))
    })

    function popTalks(dat_id, dat_ind) {
        poplayer_([
            {
                div: function (l) {
                    var _QUE = _quest_list[parseInt(dat_ind) - 1]
                    $(l.container).render({
                        div: [
                            {
                                p: _QUE.Name ? _QUE.Name : `ID ${_QUE._id}`,
                                class: 'event-name'
                            },
                            {
                                p: _QUE.Desc,
                                class: 'event-desc'
                            }
                        ],
                        class: 'a_section'
                    })
                    _quest_subs[dat_id].forEach(function (m) {
                        if (!m.Desc && !m.Step && !m.Tip && !m.Talks.length) return
                        $(l.container).render({
                            div: [
                                {
                                    div: {
                                        p: m.Desc ? m.Desc : `???`
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    p: [
                                                        {
                                                            img: '/images/Misc/Star.png',
                                                            class: 'sps_3'
                                                        },
                                                        m.Step
                                                    ],
                                                    when: (m.Step != undefined) && m.Step.length
                                                },
                                                {
                                                    p: [
                                                        {
                                                            img: '/images/Misc/Star.png',
                                                            class: 'sps_3'
                                                        },
                                                        m.Tips
                                                    ],
                                                    when: (m.Tips != undefined) && m.Tips.length
                                                },
                                            ],
                                            style: {
                                                margin: '-15px 0 0'
                                            },
                                            when: ((m.Step != undefined) && m.Step.length) || ((m.Tips != undefined) && m.Tips.length)
                                        },
                                        {
                                            div: function (k) {
                                                if (m.Talks && m.Talks.length) {
                                                    m.Talks.forEach(function (i) {
                                                        if (_talks[i] && _talks[i].length) {
                                                            $(k.container).render({
                                                                hr: ''
                                                            })
                                                            _talks[i].forEach(function (j) {
                                                                if (j.N) {
                                                                    $(k.container).render({
                                                                        p: '<b>' + j.N.toString().replaceAll('_0', `<img class='sps_4' src='/images/Misc/Traveler${mf.toString()}.png'>`).replaceAll('_1005', `<img class='sps_4' src='/images/Misc/Paimon.png'>`) + '</b><br>' + process(j.T).replaceAll('{NICKNAME}', `<img class='sps_4' src='/images/Misc/Traveler${mf.toString()}.png'>`).replaceAll("#", "").replaceAll("\\n", "<br>")
                                                                    })
                                                                } else {
                                                                    $(k.container).render({
                                                                        p: process(j.T).replaceAll('{NICKNAME}', `<img class='sps_4' src='/images/Misc/Traveler${mf.toString()}.png'>`).replaceAll("#", "").replaceAll("\\n", "<br>"),
                                                                        style: {
                                                                            color: '#FFD780',
                                                                            //'font-weight': 'bold'
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            },
                                            when: m.Talks && m.Talks.length
                                        }
                                    ],
                                    class: 'a_section_content talk_section'
                                }
                            ],
                            class: 'a_section',
                            style: {
                                padding: '0'
                            }
                        })
                    })
                },
                style: {
                    margin: '0',
                    display: 'flex',
                    'justify-content': 'center',
                    'flex-wrap': 'wrap',
                    'margin-bottom': '60px'
                }
            }
        ], dat_id)
    }

    function process(s) {
        if (!s.length) return s
        if (s.substring(0, 1) != "#") return s
        var check = mf ? '{M#' : '{F#'
        var dell = mf ? '{F#' : '{M#'
        if (!s.includes(check)) return s
        var t = s
        while (t.includes(check)) {
            var start = t.indexOf(check)
            var end = start + t.substring(start).indexOf('}')
            t = t.substring(0, start) + t.substring(start + 3, end) + t.substring(end + 1)
        }
        while (t.includes(dell)) {
            var start = t.indexOf(dell)
            var end = start + t.substring(start).indexOf('}')
            t = t.substring(0, start) + t.substring(end + 1)
        }
        return t.substring(1)
    }

    function poplayer_(T, h) {
        cur_coordinate = $('.scroller').scrollTop()
        $('.area_2').empty().render([
            {
                section: {
                    p: computer_.MiscText.Back[lang],
                    style: {
                        margin: '0'
                    }
                },
                class: 'mon_head back_',
                a: {
                    id: 'back_1',
                },
            },
            {
                section: [
                    {
                        p: computer_.MiscText.Back[lang],
                        style: {
                            margin: '0'
                        }
                    },
                    {
                        closeicon: '✕'
                    }
                ],
                class: 'mon_head back_',
                a: {
                    id: 'back_2',
                },
            },
        ])
        $('.area_2').render(T)
        $('.area_2').show()
        $('.content').hide()
        console.log(cur_coordinate)
        $('.scroller').scrollTop($('h3').height())
        window.location.hash = '_' + h
        $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`))
    }

    function update() {
        var ele = document.getElementById('back_1')
        if (!ele) return
        var vo = ele.getBoundingClientRect()
        var top = vo.top
        if (top < 0) {
            $('#back_2').show()
        } else {
            $('#back_2').hide()
        }
    }

    function returnMain() {
        $('.area_2').empty().hide()
        $('.content').show()
        $('.scroller').scrollTop(cur_coordinate)
        window.location.hash = ''
        $('h3 .tlsub').html(`<a class='translate_' href='?lang=CH${window.location.hash}'><b>中文</b></a> | <a class='translate_' href='?lang=EN${window.location.hash}'><b>English</b></a> | <a class='translate_' href='?lang=JP${window.location.hash}'><b>日本語</b></a> | <a class='translate_' href='?lang=KR${window.location.hash}'><b>한국인</b></a>`)
    }

    window.onhashchange = function() {
        if (!window.location.hash.includes("_")) {
            returnMain()
        }
    }

    $('body').on('click', '.back_', returnMain)

})