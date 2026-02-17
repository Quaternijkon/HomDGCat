$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()

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

    var js_file = {
        '1': '/BlessingDU.js',
        '2': '/BlessingDU31.js'
    }

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang3 + js_file[avid]
    document.head.append(script_computer)
    script_computer.onload = begin

    var index = 0

    var name_ = {
        "CH": "差分宇宙",
        "EN": "Divergent Universe",
        "JP": "階差宇宙",
        "KR": "차분화 우주",
    }

    var TitanName = {
        "CH": "金血祝颂",
        "EN": "Golden Blood's Boonss",
    }

    var EffectName = {
        "CH": "命途特性",
        "EN": "Path Traits",
    }

    var ProtocolName = {
        "CH": "阈值协议",
        "EN": "Protocols",
    }

    init_title(name_[lang3] + (avid == '2' ? ' 3.8' : '2.7') + ' ' + txt.PAGE_TITLE[lang])

    function begin() {
        ml = 0
        cur_star = 4
        cur_path = _blessingtypes[_blessingtypes.length - 1]._id

        $('container').render({
            template: {
                div: [
                    {
                        p: name_[lang3] + (avid == '2' ? ' 3.8' : '2.7'),
                        style: {
                            'text-align': 'center',
                            'font-weight': 'bold',
                            'font-size': '1.6em',
                            'margin-bottom': '-10px',
                            'margin-top': '15px',
                        }
                    },
                    {
                        section: [
                            {
                                schedule: txt.DU_Select[0][lang],
                                event: {
                                    click: function (d) {
                                        Select_1()
                                        $(d.sender).siblings('schedule').removeClass('active')
                                        $(d.sender).addClass('active')
                                    }
                                },
                                style: {
                                    'margin-left': '5px',
                                    'margin-right': '5px'
                                }
                            },
                            {
                                schedule: txt.DU_Select[1][lang],
                                event: {
                                    click: function (d) {
                                        Select_2()
                                        $(d.sender).siblings('schedule').removeClass('active')
                                        $(d.sender).addClass('active')
                                    }
                                },
                                style: {
                                    'margin-left': '5px',
                                    'margin-right': '5px'
                                },
                                class: (avid == '2') ? '' : 'active'
                            },
                            {
                                schedule: EffectName[lang],
                                event: {
                                    click: function (d) {
                                        Select_Effect()
                                        $(d.sender).siblings('schedule').removeClass('active')
                                        $(d.sender).addClass('active')
                                    }
                                },
                                style: {
                                    'margin-left': '5px',
                                    'margin-right': '5px'
                                },
                                when: avid == '2'
                            },
                            {
                                schedule: TitanName[lang],
                                event: {
                                    click: function (d) {
                                        Select_Titan()
                                        $(d.sender).siblings('schedule').removeClass('active')
                                        $(d.sender).addClass('active')
                                    }
                                },
                                style: {
                                    'margin-left': '5px',
                                    'margin-right': '5px'
                                },
                                class: 'active',
                                when: avid == '2'
                            },
                            {
                                schedule: txt.DU_Select[2][lang],
                                event: {
                                    click: function (d) {
                                        Select_3()
                                        $(d.sender).siblings('schedule').removeClass('active')
                                        $(d.sender).addClass('active')
                                    }
                                },
                                style: {
                                    'margin-left': '5px',
                                    'margin-right': '5px'
                                }
                            },
                            {
                                schedule: ProtocolName[lang],
                                event: {
                                    click: function (d) {
                                        Select_Protocol()
                                        $(d.sender).siblings('schedule').removeClass('active')
                                        $(d.sender).addClass('active')
                                    }
                                },
                                style: {
                                    'margin-left': '5px',
                                    'margin-right': '5px'
                                },
                                when: avid == '2'
                            },
                        ],
                        style: {
                            'margin-left': '8px',
                            'margin-right': '8px'
                        }
                    },
                    {
                        hr: '',
                        style: {
                            'margin-bottom': '0px'
                        }
                    },
                    {
                        div: '',
                        class: 'free'
                    }
                ],
                class: 'content'
            }
        })

        $('body').addClass(bg_name)

        if (avid == '2') Select_Titan()
        else Select_2()

    }

    function Select_1() {
        
        var now = Date.now()
        for (const i in _weekly) {
            var t = _weekly[i]
            var t1 = Date.parse(t.Time1.replaceAll('/', '-') + 'T04:00:00.000+08:00')
            var t2 = Date.parse(t.Time2.replaceAll('/', '-') + 'T04:00:00.000+08:00')
            if (t1 <= now && now < t2) {
                index = parseInt(i)
            }
        }
        
        $('.free').empty().render({
            template: [
                {
                    div: [
                        {
                            span: '◁',
                            class: 'v_l'
                        },
                        {
                            span: '▷',
                            class: 'v_r'
                        },
                    ],
                    class: 'ver'
                },
                {
                    div: '',
                    class: 'weekly_area'
                }
            ]
        })

        writeVer()

    }

    $('body').on('click', '.v_r', function () {
        index += 1
        writeVer()
    })

    $('body').on('click', '.v_l', function () {
        index -= 1
        writeVer()
    })

    function writeVer() {

        console.log(index)

        var this_data = _weekly[mod(index, _weekly.length)]

        $('.weekly_area').empty().render({
            template: [
                {
                    p: this_data.Name,
                    class: 'ver_text_name'
                },
                {
                    p: this_data.Time1 + ' - ' + this_data.Time2,
                    class: 'ver_text_time'
                },
                {
                    div: '',
                    class: 'extra_desc'
                },
                {
                    div: [],
                    class: 'mon m_3',
                    style: {
                        'margin-bottom': '20px'
                    }
                },
                {
                    div: [],
                    class: 'blessing_card_area',
                    style: {
                        'justify-content': 'center',
                    },
                    a: {
                        id: 'A'
                    }
                },
                {
                    div: [],
                    class: 'blessing_card_area',
                    style: {
                        'justify-content': 'center',
                    },
                    a: {
                        id: 'B'
                    }
                },
            ]
        })

        this_data.Titans.forEach(function (u) {
            var t = _titan[u[0]]
            $('#A').render({
                template: {
                    div: [
                        {
                            img: '/images/RogueBuff/' + t.Img,
                            class: 'icon'
                        },
                        {
                            p: t.Titan,
                            class: 'name'
                        },
                        {
                            p: '<b>' + t.Blessings[u[1]].Name + '</b><br>' + t.Blessings[u[1]].Desc,
                            class: 'desc'
                        }
                    ],
                    class: 'curio_2'
                }
            })
        })

        this_data.Curios.forEach(function (u) {
            var t = _curio[u]
            $('#A').render({
                template: {
                    div: [
                        {
                            img: imgpre + 'images/Miracle/' + t.Icon,
                            class: 'icon'
                        },
                        {
                            p: t.Name,
                            class: 'name'
                        },
                        {
                            p: t.Desc,
                            class: 'desc'
                        },
                    ],
                    class: 'curio_2'
                }
            })
        })

        this_data.Desc.forEach(function (u) {
            $('.extra_desc').render({
                p: u,
                class: 'desc',
            })
        })

        this_data.Blessings.forEach(function (u) {
            var t = _blessing[u]
            $('#B').render({
                template: {
                    div: [
                        {
                            img: imgpre + 'images/RogueBuff' + t.Icon,
                            class: 'icon'
                        },
                        {
                            p: t.Name,
                            class: 'name'
                        },
                        {
                            div: function (w) {
                                for (const [k, v] of Object.entries(t.Need)) {
                                    $(w.container).render({
                                        div: [
                                            {
                                                img: imgpre + `images/Paths` + _blessingtypes[parseInt(k) - 120].Icon,
                                                style: {
                                                    height: '30px'
                                                }
                                            },
                                            {
                                                div: {
                                                    span: v.toString(),
                                                    style: {
                                                        'font-size': '18px',
                                                        'font-weight': 'bold',
                                                        'margin-left': '5px'
                                                    }
                                                },
                                                style: {
                                                    height: '30px',
                                                }
                                            }
                                        ],
                                        class: 'needsub'
                                    })
                                }
                            },
                            class: 'need',
                            when: t.Need
                        },
                        {
                            p: conc(t.Desc),
                            class: 'desc normal'
                        },
                        {
                            p: effc(t.Effects),
                            class: 'desc extra',
                            style: {
                                display: 'none'
                            },
                            when: t.Effects.length
                        }
                    ],
                    class: 'curio_2',
                    a: {
                        'data-id': '1'
                    },
                    style: (t.Effects && t.Effects.length) ? { cursor: 'pointer' } : {}
                }
            })
        })
        this_data.Monster3.forEach(function (u) {
            $('.m_3').render({
                template: {
                    div: [
                        {
                            img: (window.innerWidth < 600) ? (imgpre + 'images/' + _mon[u].Icon) : (imgpre + 'images/' + _mon[u].Figure),
                            class: 'monimg'
                        },
                        {
                            span: {
                                img: function (k) {
                                    return imgpre + 'images/Element/' + k.data + '.png'
                                },
                                class: 'elem_modify',
                                data: _mon[u].Weak
                            },
                            class: 'monelem'
                        },
                    ],
                    class: 'moneach'
                }
            })
        })

    }

    function Select_2() {
        cur_star = 4
        $('.free').empty().render({
            template: [
                {
                    section: function (k) {
                        _blessingtypes.forEach(function (t) {
                            if (!t.Icon) return
                            $(k.container).render({
                                schedule: {
                                    img: `/images/Paths/` + t.Icon
                                },
                                event: {
                                    click: function (d) {
                                        if ($(d.sender).hasClass('active')) {
                                            return;
                                        }
                                        $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                                        cur_path = t._id
                                        blessingRender();
                                    }
                                },
                            })
                        })
                    },
                    class: 'path'
                },
                {
                    hr: '',
                    style: {
                        'margin-bottom': '0px'
                    }
                },
                {
                    section: [
                        {
                            schedule: '★',
                            a: {
                                'data-id': 1
                            }
                        },
                        {
                            schedule: '★★',
                            a: {
                                'data-id': 2
                            }
                        },
                        {
                            schedule: '★★★',
                            a: {
                                'data-id': 3
                            }
                        },
                        {
                            schedule: '★★★★',
                            a: {
                                'data-id': 4
                            },
                            class: 'active'
                        }
                    ],
                    class: 'star'
                },
                {
                    hr: '',
                    style: {
                        'margin-bottom': '0px'
                    }
                },
                {
                    div: [],
                    class: 'blessing_card_area'
                }
            ]
        })

        $('.path schedule:last-child').addClass('active')
        blessingRender()

    }

    function Select_3() {
        cur_star = 5
        $('.free').empty().render({
            template: [
                {
                    section: [
                        {
                            schedule: '★',
                            a: {
                                'data-id': 1
                            }
                        },
                        {
                            schedule: '★★',
                            a: {
                                'data-id': 2
                            }
                        },
                        {
                            schedule: '★★★',
                            a: {
                                'data-id': 3
                            }
                        },
                        {
                            schedule: '★★★★',
                            a: {
                                'data-id': 5
                            },
                            class: 'active'
                        },
                        {
                            schedule: 'X',
                            a: {
                                'data-id': 4
                            }
                        }
                    ],
                    class: 'star',
                    style: {
                        'margin-bottom': '0'
                    }
                },
                {
                    div: '',
                    class: 'miracle_card_area'
                },
            ]
        })
        curioRender();
    }

    function Select_Titan() {

        $('.free').empty().render({
            template: [
                {
                    div: [],
                    class: 'blessing_card_area'
                }
            ]
        })
        titanRender()

    }

    function Select_Protocol() {

        $('.free').empty().render({
            template: [
                {
                    div: [],
                    class: 'blessing_card_area'
                }
            ]
        })
        protocolRender()

    }

    function Select_Effect() {

        $('.free').empty().render({
            template: [
                {
                    div: [],
                    class: 'blessing_card_area'
                }
            ]
        })
        effectRender()

    }

    $('body').on('click', '.star schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        cur_star = parseInt($(this).attr('data-id'))
        blessingRender();
        curioRender();
    })

    function blessingRender() {
        $('.blessing_card_area').empty()
        _blessing.forEach(function (t) {
            if (t.Path == cur_path && t.Rarity == cur_star) {
                $('.blessing_card_area').render({
                    template: {
                        div: [
                            {
                                img: imgpre + 'images/RogueBuff' + t.Icon,
                                class: 'icon'
                            },
                            {
                                p: t.Name,
                                class: 'name'
                            },
                            {
                                div: function (w) {
                                    for (const [k, v] of Object.entries(t.Need)) {
                                        $(w.container).render({
                                            div: [
                                                {
                                                    img: imgpre + `images/Paths` + _blessingtypes[parseInt(k) - 120].Icon,
                                                    style: {
                                                        height: '30px'
                                                    }
                                                },
                                                {
                                                    div: {
                                                        span: v.toString(),
                                                        style: {
                                                            'font-size': '18px',
                                                            'font-weight': 'bold',
                                                            'margin-left': '5px'
                                                        }
                                                    },
                                                    style: {
                                                        height: '30px',
                                                    }
                                                }
                                            ],
                                            class: 'needsub'
                                        })
                                    }
                                },
                                class: 'need',
                                when: t.Need
                            },
                            {
                                p: conc(t.Desc),
                                class: 'desc normal'
                            },
                            {
                                p: effc(t.Effects),
                                class: 'desc extra',
                                style: {
                                    display: 'none'
                                },
                                when: t.Effects.length
                            }
                        ],
                        class: 'curio',
                        a: {
                            'data-id': '1'
                        },
                        style: (t.Effects && t.Effects.length) ? { cursor: 'pointer' } : {}
                    }
                })
            }
        })
    }

    function curioRender() {
        $('.miracle_card_area').empty()
        _curio.forEach(function (t) {
            if (t.Type != cur_star) return
            $('.miracle_card_area').render({
                template: {
                    div: [
                        {
                            img: imgpre + 'images/Miracle/' + t.Icon,
                            class: 'icon'
                        },
                        {
                            p: t.Name,
                            class: 'name'
                        },
                        {
                            p: t.Desc,
                            class: 'desc'
                        },
                    ],
                    class: 'curio curio_11',
                    style: {
                        cursor: 'pointer'
                    }
                }
            })
        })
    }

    function titanRender() {
        $('.blessing_card_area').empty()
        _titan.forEach(function (t) {
            $('.blessing_card_area').render({
                template: {
                    div: [
                        {
                            div: {
                                img: '/images/RogueBuff/' + t.Img,
                            },
                            class: 'titan_img'
                        },
                        {
                            p: t.Titan,
                            class: 'name',
                            style: {
                                margin: '15px 0 0'
                            }
                        },
                        {
                            p: t.Avatar,
                            class: 'name',
                            style: {
                                margin: '0'
                            }
                        },
                        {
                            div: {
                                p: function (d) {
                                    return '<b>' + d.data.Name + '</b><br>' + d.data.Desc
                                },
                                data: t.Blessings,
                                class: 'desc'
                            },
                            class: 'titan_blessings'
                        }
                    ],
                    class: 'curio_3'
                }
            })
        })
    }

    function protocolRender() {
        $('.blessing_card_area').empty()
        _protocols.forEach(function (t) {
            $('.blessing_card_area').render({
                template: {
                    div: [
                        {
                            p: t._id.toString(),
                            class: 'name',
                            style: {
                                margin: '15px 0 0'
                            }
                        },
                        {
                            p: t.Desc,
                            class: 'desc'
                        }
                    ],
                    class: 'curio_3'
                }
            })
        })
    }

    function effectRender() {
        _keyword.forEach(function (t) {
            $('.blessing_card_area').render({
                template: {
                    div: [
                        {
                            img: imgpre + 'images/Paths/' + t.Icon + '.png',
                            class: 'icon'
                        },
                        {
                            p: '<b>' + t.E1.Name + '</b><br>' + t.E1.Desc,
                            class: 'desc normal'
                        },
                        {
                            p: '<b>' + t.E2.Name + '</b><br>' + t.E2.Desc,
                            class: 'desc normal'
                        },
                    ],
                    class: 'curio',
                }
            })
        })
    }

    function conc(l) {
        out = ''
        l.forEach(function (t) {
            out += t + "<div style='height:10px;'></div>"
        })
        return out
    }

    function effc(l) {
        out = ''
        l.forEach(function (t) {
            out += '<b>' + _blessingextra[t].Name + '</b><br>' + _blessingextra[t].Desc + "<div style='height:10px;'></div>"
        })
        return out
    }

    $('body').on('click', '.curio, .curio_2', function (e) {
        if ($(e.target).hasClass('info')) {return}
        e.stopPropagation()
        var iss = $(this).attr('data-id')
        if (iss == '1') {
            $(this).attr('data-id', '2')
            $(this).find('.extra').show()
        } else {
            $(this).attr('data-id', '1')
            $(this).find('.extra').hide()
        }
    })

    $('body').on('mouseenter', '.infou', function () {
        var tp = $(this).parent()
        var iss = tp.parent().attr('data-id')
        if (iss == '1') {
            tp.siblings('.extra').show()
        }
    })

    $('body').on('mouseleave', '.infou', function () {
        var tp = $(this).parent()
        var iss = tp.parent().attr('data-id')
        if (iss == '1') {
            tp.siblings('.extra').hide()
        }
    })

    $('body').on('click', 'popmask', function (e) {
        if ($(e.target).prop('tagName') == 'POPMASK') {
            POP.close()
        }
        e.stopPropagation()
    })

})