$(function () {

    var imgpre = $('#IMGPRE').val()

    init_title((lang == "CH" ? '跃迁卡池' : 'Gacha Banners') + ' ' + txt.PAGE_TITLE[lang])

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

    var selected = ''

    var phase_desc = [
        {
            CH: '第 ? 期',
            EN: 'Phase ?'
        },
        {
            CH: '第一期',
            EN: 'Phase 1'
        },
        {
            CH: '第二期',
            EN: 'Phase 2'
        },
        {
            CH: '第三期',
            EN: 'Phase 3'
        }
    ]
    
    var _button = {
        CH: '搜索',
        EN: 'Search',
    }

    var tip = {
        CH: '点击角色可搜索卡池，再次点击重置',
        EN: 'Click on a character to filter banners. Click again to reset.',
    }

    $('container').render({
        template: {
            div: [
                {
                    p: (lang == "CH" ? '跃迁卡池' : 'Gacha Banners'),
                    class: 'sch_2'
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
                                span: _button[lang],
                                class: 'desc'
                            },
                            class: 'but'
                        }
                    ],
                    class: 'input_wrap'
                },
                {
                    p: tip[lang],
                    class: 'avd tip2',
                    style: {
                        margin: '18px 8px 14px',
                        'font-weight': 'normal',
                        'text-align': 'center',
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
                    div: [],
                    class: 'pics search'
                },
                {
                    div: [],
                    class: 'blessing_card_area'
                }
            ],
            class: 'content'
        }
    })

    for (const ver_data of _banners) {
        var avatars = ''
        ver_data.P.forEach(function (p, i) {
            for (const t of p.A.concat(p.B)) {
                avatars += ' ' + t.N
            }
        })
        $('.blessing_card_area').render({
            div: [
                {
                    p: VER_SR.includes(ver_data.V) ? VER_SR : ver_data.V,
                    class: 'name'
                },
                {
                    div: function (d) {
                        ver_data.P.forEach(function (p, i) {
                            $(d.container).render({
                                div: [
                                    {
                                        p: phase_desc[p.I][lang],
                                        class: 'desc'
                                    },
                                    {
                                        div: picdata(p.A, 5),
                                        class: 'pics',
                                        when: p.A && p.A.length
                                    },
                                    {
                                        div: picdata(p.B, 4),
                                        class: 'pics',
                                        when: p.B && p.B.length
                                    }
                                ],
                                class: 'phase'
                            })
                        })
                    },
                    class: 'phases'
                }
            ],
            class: 'card' + avatars
        })
    }

    $('.tip2').hide()

    $('body').addClass(bg_name)
    $('.search').hide()

    function picdata(data, star) {
        var ret = []
        for (const v of data) {
            ret.push({
                div: '/gi/char/' + v.N,
                t: {
                    div: [
                        {
                            img: '/images/avataricon/avatar/' + v.N + '.png',
                        },
                        {
                            span: v.X.toString(),
                            class: 'num num_' + star,
                            when: v.N != 999
                        }
                    ],
                    class: 'icon icon_' + star
                },
                class: 'pic hover-shadow',
                a: {
                    'data-id': v.N,
                    'data-num': v.X
                }
            })
        }
        return ret
    }

    $('body').on('click', '.pic', function () {
        if ($(this).attr('data-id') == selected) {
            clear_select()
        } else {
            selected = $(this).attr('data-id')
            do_select()
        }
    })

    function clear_select() {
        selected = ''
        $('.card').show()
        $('.search').empty().hide()
        $('#INPUT').val('')
        $('.tip2').hide()
        $('.avd_1').show()
    }

    function do_select() {
        $('.tip2').show()
        $('.avd_1').hide()
        $('.card').hide()
        $('.' + selected).show()
        $('.search').empty().show().render({
            template: {
                div: '/gi/char/' + selected,
                t: {
                    div: [
                        {
                            img: '/images/avataricon/avatar/' + selected + '.png',
                        }
                    ],
                    class: 'icon icon_5'
                },
                class: 'pic hover-shadow',
                a: {
                    'data-id': selected
                }
            }
        })
        $('.num').show()
    }

    $('body').on('click', '.content', function (p) {
        console.log(p.target)
        if ($(p.target).parents('.pic').length) return
        if ($(p.target).hasClass('pic')) return
        if ($(p.target).parents('.input_wrap').length) return
        if ($(p.target).hasClass('input_wrap')) return
        $('.num').toggle()
    })

    $('body').on('click', '.but', function () {
        var input_text = $('#INPUT').val()
        if (!input_text.length) return
        for (const [i, j] of Object.entries(_index)) {
            if (i.replaceAll(' ', '').toUpperCase().includes(input_text.replaceAll(' ', '').toUpperCase())) {
                if (selected == j) {
                    clear_select()
                    return
                }
                selected = j
                do_select()
                return
            }
        }
    })

    $('body').on('click', '.title', function () {
        $('.card:first-child').toggle()
        $('.card').toggle()
        $('.input_wrap').toggle()
    })

    console.log("FINISH")

})