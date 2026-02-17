$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'

    init_title((lang == 'CH' ? '云璃成绩' : 'Yunli Endgame') + ' ' + txt.PAGE_TITLE[lang])

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 26px;'><br>" + txt.game_img[lang] + VER_SR + "</b></color>")
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Home_Lang)
    $('h3 .lang').hide()
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

    $('body').on('click', '._menu_', function () {
        popLinks(lang)
    })

    var tip = {
        CH: "玩家为角色付出的一切努力都值得被记录<br>源自我对云璃的热爱，这里保存着顶尖玩家为云璃创造的成绩<br>这是云璃的过去与未来，是她在星穹铁道留下的足迹",
        EN: "All efforts made by players deserve to be acknowledged.<br>Originated from my love for Yunli, this page documents Yunli's performance under the hands of the most skilled players.<br>This is Yunli's past and future, the trails she left behind in the world of Star Rail.",
    }

    var template = [
        [
            {
                CH: '阵容',
                EN: 'Team',
                width: '40%'
            },
            {
                CH: '视频',
                EN: 'Video',
                width: '30%'
            },
            {
                CH: '作者',
                EN: 'By',
                width: '30%'
            }
        ],
        [
            {
                CH: '金数',
                EN: '5⭐',
                width: '14%'
            },
            {
                CH: '阵容',
                EN: 'Team',
                width: '40%'
            },
            {
                CH: '视频',
                EN: 'Video',
                width: '23%'
            },
            {
                CH: '作者',
                EN: 'By',
                width: '23%'
            }
        ],
        [
            {
                CH: '阵容',
                EN: 'Team',
                width: '40%'
            },
            {
                CH: '视频',
                EN: 'Video',
                width: '30%'
            },
            {
                CH: '作者',
                EN: 'By',
                width: '30%'
            }
        ],
        [
            {
                CH: '分数',
                EN: 'Score',
                width: '14%'
            },
            {
                CH: '阵容',
                EN: 'Team',
                width: '40%'
            },
            {
                CH: '视频',
                EN: 'Video',
                width: '23%'
            },
            {
                CH: '作者',
                EN: 'By',
                width: '23%'
            }
        ],
        [
            {
                CH: '行动值',
                EN: 'Action Value',
                width: '14%'
            },
            {
                CH: '阵容',
                EN: 'Team',
                width: '40%'
            },
            {
                CH: '视频',
                EN: 'Video',
                width: '23%'
            },
            {
                CH: '作者',
                EN: 'By',
                width: '23%'
            }
        ],
    ]

    var part_1 = {
        div: [
            {
                p: (lang == 'CH') ? '混沌回忆 双人0轮' : 'MoC Duo 0 Cycle',
                class: 'name'
            },
            {
                p: '＋',
                class: 'show toggle'
            },
            {
                p: '−',
                class: 'hide toggle'
            },
            {
                div: rnd(_chaos_duo, 'chaos', template[0]),
                class: 'card_content hide'
            }
        ],
        class: 'card card_1'
    }

    var part_1_ = {
        div: [
            {
                p: (lang == 'CH') ? '混沌回忆 双人0轮' : 'MoC Duo 0 Cycle',
                class: 'name',
                style: {
                    'margin-bottom': '35px',
                    'margin-top': '15px'
                }
            },
            {
                div: rnd(_chaos_duo, 'chaos', template[0]),
                class: 'card_content'
            }
        ],
        class: 'card card_1'
    }

    var part_2 = {
        div: [
            {
                p: (lang == 'CH') ? '混沌回忆 低金0轮' : 'MoC Low Cost 0 Cycle',
                class: 'name'
            },
            {
                p: '＋',
                class: 'show toggle'
            },
            {
                p: '−',
                class: 'hide toggle'
            },
            {
                div: rnd(_chaos_low, 'chaos', template[1]),
                class: 'card_content hide'
            }
        ],
        class: 'card card_2'
    }

    var part_2_ = {
        div: [
            {
                p: (lang == 'CH') ? '混沌回忆 低金0轮' : 'MoC Low Cost 0 Cycle',
                class: 'name',
                style: {
                    'margin-bottom': '35px',
                    'margin-top': '15px'
                }
            },
            {
                div: rnd(_chaos_low, 'chaos', template[1]),
                class: 'card_content'
            }
        ],
        class: 'card card_2'
    }

    var part_3 = {
        div: [
            {
                p: (lang == 'CH') ? '混沌回忆 0行动值' : 'MoC 0 Action Value',
                class: 'name'
            },
            {
                p: '＋',
                class: 'show toggle'
            },
            {
                p: '−',
                class: 'hide toggle'
            },
            {
                div: rnd(_pf, 'chaos', template[2]),
                class: 'card_content hide'
            }
        ],
        class: 'card card_1'
    }

    var part_3_ = {
        div: [
            {
                p: (lang == 'CH') ? '混沌回忆 0行动值' : 'MoC 0 Action Value',
                class: 'name',
                style: {
                    'margin-bottom': '35px',
                    'margin-top': '15px'
                }
            },
            {
                div: rnd(_pf, 'chaos', template[2]),
                class: 'card_content'
            }
        ],
        class: 'card card_1'
    }

    var part_4 = {
        div: [
            {
                p: (lang == 'CH') ? '末日幻影' : 'Apocalyptic Shadow',
                class: 'name'
            },
            {
                p: '＋',
                class: 'show toggle'
            },
            {
                p: '−',
                class: 'hide toggle'
            },
            {
                div: rnd(_as, 'shadow', template[3]),
                class: 'card_content hide'
            }
        ],
        class: 'card card_3'
    }

    var part_4_ = {
        div: [
            {
                p: (lang == 'CH') ? '末日幻影' : 'Apocalyptic Shadow',
                class: 'name',
                style: {
                    'margin-bottom': '35px',
                    'margin-top': '15px'
                }
            },
            {
                div: rnd(_as, 'shadow', template[3]),
                class: 'card_content'
            }
        ],
        class: 'card card_3'
    }

    var part_5 = {
        div: [
            {
                p: (lang == 'CH') ? '异相仲裁' : 'Anomaly Arbitration',
                class: 'name'
            },
            {
                p: '＋',
                class: 'show toggle'
            },
            {
                p: '−',
                class: 'hide toggle'
            },
            {
                div: rnd(_ar, 'arbitration', [template[4], template[4]]),
                class: 'card_content hide'
            }
        ],
        class: 'card card_3'
    }

    var part_5_ = {
        div: [
            {
                p: (lang == 'CH') ? '异相仲裁' : 'Anomaly Arbitration',
                class: 'name',
                style: {
                    'margin-bottom': '35px',
                    'margin-top': '15px'
                }
            },
            {
                div: rnd(_ar, 'arbitration', [template[4], template[4]]),
                class: 'card_content'
            }
        ],
        class: 'card card_3'
    }

    var parts = []
    if (!lazy) {
        if (avid == '1') {
            parts = [part_1]
        } else if (avid == '2') {
            parts = [part_2]
        } else if (avid == '3') {
            parts = [part_3]
        } else if (avid == '4') {
            parts = [part_4]
        } else if (avid == '5') {
            parts = [part_5]
        } else {
            parts = [part_5, part_2, part_4, part_1, part_3]
        }
    } else {
        if (avid == '1') {
            parts = [part_1_, part_5, part_2, part_4, part_3]
        } else if (avid == '2') {
            parts = [part_2_, part_5, part_4, part_1, part_3]
        } else if (avid == '3') {
            parts = [part_3_, part_5, part_2, part_4, part_1]
        } else if (avid == '4') {
            parts = [part_4_, part_5, part_2, part_1, part_3]
        } else if (avid == '5') {
            parts = [part_5_, part_2, part_4, part_1, part_3]
        } else {
            parts = [part_5, part_2, part_4, part_1, part_3]
        }
    }

    $('container').render({
        template: {
            div: [
                {
                    p: (lang == "CH" ? '云璃成绩' : 'Yunli Endgame'),
                    class: 'sch_2'
                },
                {
                    p: tip[lang],
                    class: 'avd tip2',
                    style: {
                        margin: '0 8px 14px',
                        'font-weight': 'normal',
                        'text-align': 'center',
                        'line-height': '1.7'
                    }
                },
                {
                    p: txt.Chart_Subtitle[lang],
                    class: 'avd avd_1',
                    style: {
                        'color': '#0066FF',
                        'font-weight': 'bold',
                        'text-align': 'center',
                        'margin-bottom': '13px',
                        'margin-top': '13px'
                    }
                },
                {
                    div: parts,
                    class: 'blessing_card_area'
                }
            ],
            class: 'content'
        }
    })

    if (lazy) $('.hide').hide()
    if (!lazy) $('.show').hide()
    $('body').on('click', '.toggle', function () {
        $(this).toggle()
        $(this).siblings('.show').toggle()
        $(this).siblings('.hide').toggle()
    })

    $('body').addClass(bg_name)

    console.log("FINISH")

    function rnd(data_0, lk, tpl) {
        if (lazy) {
            var data = data_0
        }
        else {
            var data = data_0.slice(-2)
        }
        var out = []
        for (const ind in data) {
            var phase_data = data[data.length - ind - 1]
            if (phase_data.Upper && phase_data.Upper.length) {
                out.push({
                    div: divs(phase_data, 'Upper', lk, tpl)
                })
            }
            if (phase_data.Lower && phase_data.Lower.length) {
                out.push({
                    div: divs(phase_data, 'Lower', lk, tpl)
                })
            }
            if (phase_data.Easy && phase_data.Easy.length) {
                out.push({
                    div: divs(phase_data, 'Easy', lk, tpl[0])
                })
            }
            if (phase_data.Hard && phase_data.Hard.length) {
                out.push({
                    div: divs(phase_data, 'Hard', lk, tpl[1])
                })
            }
        }
        return out
    }

    function divs(phase_data, half, lk, tpl) {
        var title = {
            Upper: {
                CH: ' 上半',
                EN: ' First Half'
            },
            Lower: {
                CH: ' 下半',
                EN: ' Second Half'
            },
            Easy: {
                CH: ` 普通 <color style='color:#FFD780'>0轮</color>`,
                EN: ` Ordinary <color style='color:#FFD780'>0 Cycle</color>`
            },
            Hard: {
                CH: ' 绝境',
                EN: ' Zugzwang'
            }
        }
        var entries = phase_data[half]
        var boss = _monsters[phase_data._id] ? _monsters[phase_data._id][half] : []
        if (!boss) boss = []
        var elems = _monsters[phase_data._id] ? _monsters[phase_data._id]['Elem' + half] : []
        if (!elems) elems = []
        var images = []
        if ((half == 'Easy') || (half == 'Hard')) {
            boss.forEach(function (t) {
                images.push({
                    div: [
                        {
                            img: '/images/' + t.Icon,
                            class: 'boss_img'
                        },
                        {
                            p: t.HP.toString(),
                            when: t.HPCount == 1,
                            class: 'hp'
                        },
                        {
                            p: t.HP + '×' + t.HPCount,
                            when: t.HPCount != 1,
                            class: 'hp'
                        }
                    ]
                })
            })
        } else {
            boss.forEach(function (t) {
                images.push({
                    img: '/images/' + t,
                    class: 'boss_img',
                })
            })
        }
        var elements = []
        elems.forEach(function (t) {
            elements.push({
                img: '/images/Element/' + t + '.png',
                class: 'elem'
            })
        })
        var firstrow = []
        tpl.forEach(function (t) {
            firstrow.push({
                th: t[lang],
                style: {
                    width: t.width
                }
            })
        })
        var tbl = [
            {
                tr: firstrow
            }
        ]
        entries.forEach(function (t) {
            var chars = []
            t.Char.forEach(function (u) {
                chars.push({
                    a: `/sr/char/${u}`,
                    t: {
                        img: `/images/avataricon/avatar/${u}.png`,
                        style: {
                            width: '100%'
                        }
                    },
                    class: 'avatar_img hover-shadow',
                    attr: {
                        target: '_blank',
                    }
                })
            })
            if (t.V) {
                var score_data = {
                    td: [
                        (t.Score ? t.Score.toString() : '').replaceAll('+', "<color style='color:#eee'>+</color>"),
                        {
                            p: t.V,
                            style: {
                                'font-size': '0.7em',
                                'margin': '0',
                                'color': '#eee'
                            }
                        }
                    ],
                    when: t.Score != undefined,
                    style: {
                        'text-align': 'center',
                        color: 'rgb(255, 136, 119)',
                        'font-weight': 'bold',
                        'font-size': '1.3em'
                    }
                }
            } else {
                var score_data = {
                    td: [
                        (t.Score ? t.Score.toString() : '').replaceAll('+', "<color style='color:#eee'>+</color>"),
                        {
                            p: t.Note,
                            style: {
                                'font-size': '0.7em',
                                'margin': '0',
                                color: 'rgb(153, 255, 255)'
                            },
                            when: t.Note && t.Note.length,
                        }
                    ],
                    when: t.Score != undefined,
                    style: {
                        'text-align': 'center',
                        color: '#f29e38',
                        'font-weight': 'bold',
                        'font-size': '1.3em'
                    }
                }
            }
            tbl.push({
                tr: [
                    score_data,
                    {
                        td: [
                            {
                                div: chars,
                                class: 'avatar_img_wrap'
                            }
                        ],
                    },
                    {
                        td: {
                            a: (window.innerWidth > 500) ? `//www.bilibili.com/video/${t.Vid}` : `//player.bilibili.com/player.html?bvid=${t.Vid}`,
                            t: {
                                span: '<u>' + t.Vid + '</u>',
                                style: {
                                    'color': '#eee'
                                }
                            },
                            attr: {
                                target: '_blank',
                                class: 'hover-shadow'
                            }
                        },
                        style: {
                            'text-align': 'center'
                        }
                    },
                    {
                        td: t.Authors.join('<br>'),
                        style: {
                            'text-align': 'center'
                        }
                    }
                ]
            })
        })
        var out = [
            {   
                a: `/sr/${lk}/${phase_data._id}`,
                t: [
                    {
                        p: phase_data.Ver + title[half][lang],
                        class: 'ver_text',
                    },
                    {
                        div: images,
                        class: 'boss_img_wrap'
                    },
                    {
                        div: elements,
                        class: 'elem_img_wrap'
                    }
                ],
                class: 'top_wrap hover-shadow',
                attr: {
                    target: '_blank',
                }
            },
            {
                div: {
                    table: tbl,
                    class: 'table'
                },
                class: 'table_wrap'
            }
        ]
        return out
    }

})