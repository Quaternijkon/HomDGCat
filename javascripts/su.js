$(function () {

    var imgpre = $('#IMGPRE').val()

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

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang3 + '/SU26.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    var index = 0

    var name_ = {
        "CH": "模拟宇宙：不可知域",
        "EN": "Simulated Universe: Unknowable Domain",
    }

    init_title(name_[lang] + ' ' + txt.PAGE_TITLE[lang])

    function begin() {
        ml = 0
        cur_star = 2

        $('container').render({
            template: {
                div: [
                    {
                        p: name_[lang],
                        style: {
                            'text-align': 'center',
                            'font-weight': 'bold',
                            'margin-bottom': '-10px',
                            'margin-top': '15px',
                        },
                        class: 'ttl'
                    },
                    {
                        p: txt.Chart_Subtitle[lang],
                        class: 'avd story',
                        style: {
                            'color': 'rgb(0, 102, 255)',
                            'font-weight': 'bold',
                            'text-align': 'center',
                            'margin': '20px 0 -6px'
                        }
                    },
                    {
                        section: [
                            {
                                schedule: txt.SU_Select[0][lang],
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
                                },
                                class: 'active'
                            },
                            {
                                schedule: txt.SU_Select[1][lang],
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
                                }
                            },
                            {
                                schedule: txt.SU_Select[2][lang],
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
                                schedule: txt.SU_Select[3][lang],
                                event: {
                                    click: function (d) {
                                        Select_4()
                                        $(d.sender).siblings('schedule').removeClass('active')
                                        $(d.sender).addClass('active')
                                    }
                                },
                                style: {
                                    'margin-left': '5px',
                                    'margin-right': '5px'
                                }
                            },
                        ],
                        style: {
                            'margin-left': '8px',
                            'margin-right': '8px',
                            'margin-bottom': '6px'
                        }
                    },
                    {
                        hr: '',
                        style: {
                            'margin': '0px'
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

        Select_1()

    }

    function Select_1() {
        $('.free').empty().render({
            template: [
                {
                    div: '',
                    class: 'miracle_card_area'
                },
            ]
        })
        scepterRender();
    }

    function Select_2() {
        $('.free').empty().render({
            template: [
                {
                    section: [
                        {
                            schedule: '★★',
                            a: {
                                'data-id': 2
                            },
                            class: (cur_star == 2) ? 'active' : ''
                        },
                        {
                            schedule: '★★★',
                            a: {
                                'data-id': 4
                            },
                            class: (cur_star == 4) ? 'active' : ''
                        }
                    ],
                    class: 'star'
                },
                {
                    hr: '',
                    style: {
                        'margin': '0px',
                    }
                },
                {
                    div: [],
                    class: 'blessing_card_area'
                }
            ]
        })
        componentRender()

    }

    function Select_3() {
        $('.free').empty().render({
            template: [
                {
                    div: '',
                    class: 'miracle_card_area'
                },
            ]
        })
        curioRender();
    }

    function Select_4() {
        $('.free').empty().render({
            template: [
                {
                    div: '',
                    class: 'miracle_card_area'
                },
            ]
        })
        conundrumRender();
    }
    
    $('body').on('click', '.ml', function () {
        ml = 1 - ml
        if (ml) {
            $('.simple').show()
        } else {
            $('.simple').hide()
        }
    })

    $('body').on('click', '.star schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        cur_star = parseInt($(this).attr('data-id'))
        componentRender();
        curioRender();
    })

    function scepterRender() {
        $('.miracle_card_area').empty()
        _scepters.forEach(function (t) {
            $('.miracle_card_area').render({
                template: {
                    div: [
                        {
                            img: imgpre + 'images/' + t.Icon,
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
                        {
                            p: t.Unit,
                            class: 'desc'
                        },
                        {
                            p: effc(t.ExtraEffect),
                            class: 'desc extra',
                            style: {
                                display: 'none'
                            },
                            when: t.ExtraEffect.length
                        }
                    ],
                    class: 'curio',
                    style: {
                        cursor: t.ExtraEffect.length ? 'pointer': ''
                    },
                    a: {
                        'data-id': t.MazeBuff
                    }
                }
            })
        })
    }

    function componentRender() {
        $('.blessing_card_area').empty()
        _components.forEach(function (t) {
            if (t.Rarity == cur_star) {
                $('.blessing_card_area').render({
                    template: {
                        div: [
                            {
                                img: '/images/' + t.Icon,
                                class: 'icon_small'
                            },
                            {
                                p: t.Name,
                                class: 'name',
                                when: t.Name.length
                            },
                            {
                                p: t.Desc,
                                class: 'desc normal'
                            },
                            {
                                p: effc(t.ExtraEffect),
                                class: 'desc extra',
                                style: {
                                    display: 'none'
                                },
                                when: t.ExtraEffect.length
                            }
                        ],
                        class: 'curio',
                        a: {
                            'data-id': t.MazeBuff
                        },
                        style: {
                            cursor: t.ExtraEffect.length ? 'pointer': ''
                        }
                    }
                })
            }
        })
    }

    function curioRender() {
        $('.miracle_card_area').empty()
        _miracles.forEach(function (t) {
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
                        {
                            p: t.Story,
                            class: 'story',
                            style: {
                                'border-top': '1px solid #eee',
                                'margin-bottom': '5px',
                                'padding-top': '15px'
                            },
                        }
                    ],
                    class: 'curio',
                    style: {
                        cursor: 'pointer'
                    }
                }
            })
        })
    }

    function conundrumRender() {
        $('.miracle_card_area').empty()
        _difficulty.forEach(function (t) {
            $('.miracle_card_area').render({
                template: {
                    div: [
                        {
                            p: t._id.toString(),
                            class: 'name',
                            style: {
                                margin: '10px 0'
                            }
                        },
                        {
                            p: t.Desc,
                            class: 'desc'
                        }
                    ],
                    class: 'curio',
                }
            })
        })
    }

    function effc(id_list) {
        var ret = []
        id_list.forEach(function (t) {
            ret.push('<b>' + _extra_effect[t].Name + '</b><br>' + _extra_effect[t].Desc)
        })
        return ret.join('<br>')
    }

    $('body').on('click', '.curio', function () {
        $(this).find('.extra').toggle()
        $('.story').toggle()
        $('.avd').show()
    })

})