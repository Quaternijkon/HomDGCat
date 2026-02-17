$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()

    init_title((lang == 'CH' ? '活动' : 'Events') + ' ' + txt.PAGE_TITLE[lang])

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
    script_computer.src = '/data/' + lang3 + '/Event.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {
        isNew = _ver[0]
        $('container').render({
            template: {
                div: [
                    {
                        section: '',
                        class: 'rar'
                    },
                    {
                        hr: ''
                    },
                    {
                        div: [],
                        class: 'area'
                    }
                ],
                class: 'content'
            }
        })

        var select_vers = {}
        for (const ii of _ver) {
            select_vers[ii] = ii
        }

        $('.rar').render({
            select: '',
            options: select_vers,
            class: 'load-ver-select'
        },)
    
        renderEvents()

        $('body').addClass(bg_name)
    }

    $('body').on('change', '.load-ver-select', function () {
        isNew = $(this).val()
        renderEvents()
    });

    function renderEvents() {
        $('.area').empty()
        _event.forEach(function (t, i) {
            if (t.Ver != isNew) return
            $('.area').render({
                div: [
                    {
                        p: t.Name,
                        class: 'event-name'
                    },
                    {
                        p: t.Desc,
                        class: 'event-desc',
                        when: t.Desc && t.Desc.length
                    },
                    {
                        div: {
                            img: function (k) {
                                if (_item[k.data].Icon.includes('AvatarIcon')) return imgpre + 'images/avataricon/' + _item[k.data].Icon.replace('SpriteOutput/AvatarIcon/', '')
                                return imgpre + 'images/itemicon/' + _item[k.data].Icon
                            },
                            data: t.Reward,
                            class: 'hover-shadow-',
                            a: {
                                'data-id': function (k) {
                                    return k.data
                                }
                            }
                        },
                        class: 'event-reward',
                        when: t.Reward && t.Reward.length
                    },
                    {
                        hr: '',
                        style: {
                            'margin-top': '20px'
                        },
                        when: t.Story && t.Story.length
                    },
                    {
                        div: {
                            span: '＋' + txt.Event_Story[lang] + '＋',
                            class: 'plus',
                            a: {
                                'data-id': t._id
                            }
                        },
                        class: 'event-sel',
                        when: t.Story && t.Story.length
                    },
                    {
                        p: t.Story,
                        class: 'event-story es-' + t._id,
                        style: {
                            display: 'none'
                        },
                        when: t.Story && t.Story.length
                    },
                    {
                        hr: '',
                        when: t.Tutorial && t.Tutorial.length
                    },
                    {
                        div: {
                            span: '＋' + txt.Event_Tutorial[lang] + '＋',
                            class: 'info',
                            a: {
                                'data-id': t._id
                            }
                        },
                        class: 'event-sel',
                        when: t.Tutorial && t.Tutorial.length
                    },
                    {
                        div: function (o) {
                            if (!t.Tutorial) return
                            t.Tutorial.forEach(function (l) {
                                $(o.container).render({
                                    p: _tut[l].Name,
                                    style: {
                                        width: '100%',
                                        'font-weight': 'bold',
                                        'text-align': 'center',
                                        'font-size': '1.2em'
                                    }
                                })
                                _tut[l].Tuts.forEach(function (m) {
                                    $(o.container).render({
                                        div: [
                                            {
                                                img: imgpre + 'images/tutorialpic/' + m.Img,
                                                class: 'tut_img'
                                            },
                                            {
                                                p: m.Desc.replaceAll("#", "</color>").replaceAll("@", "<color style='color:#f29e38;'>"),
                                                class: 'tut_p'
                                            }
                                        ],
                                        class: 'tut',
                                    },)
                                })
                            })
                        },
                        class: 'event-tut fs-' + t._id,
                        style: {
                            display: 'none'
                        }
                    },
                ],
                class: 'a_section'
            })
        })
    }

    $('body').on('click', '.plus', function () {
        var id = $(this).attr('data-id')
        var T = $('.es-' + id)
        if (T.css('display') == 'none') {
            T.show()
            $(this).html($(this).html().replaceAll('＋', "−"))
        } else {
            T.hide()
            $(this).html($(this).html().replaceAll('−', "＋"))
        }
    })

    $('body').on('click', '.info', function () {
        var id = $(this).attr('data-id')
        var T = $('.fs-' + id)
        if (T.css('display') == 'none') {
            T.show()
            $(this).html($(this).html().replaceAll('＋', "−"))
        } else {
            T.hide()
            $(this).html($(this).html().replaceAll('−', "＋"))
        }
    })

    $('body').on('click', '.hover-shadow-', function () {
        popItem($(this).attr('data-id'))
    })

    function popItem(y) {
        this_item = _item[y]
        if (this_item.Link) {
            window.location.href = `/sr/item/${this_item._id}`
            return
        }
        poplayer({
            header: VER_SR + txt.Affix[lang],
            width: '90%',
            template: [
                {
                    img: function (u) {
                        if (this_item.Pic.includes('LightConeMaxFigures')) {
                            return imgpre + 'images/lightconemaxfigures/' + this_item.Pic.replace('SpriteOutput/LightConeMaxFigures', '')
                        }
                        if (this_item.Pic.includes('AvatarIcon')) {
                            return imgpre + 'images/avataricon/' + this_item.Pic.replace('SpriteOutput/AvatarIcon/', '')
                        }
                        if (this_item.Pic.includes('LightCone')) {
                            return imgpre + 'images/lightconemaxfigures/' + this_item.Pic.replace('LightCone/', '')
                        }
                        return imgpre + 'images/itemfigures/' + this_item.Pic
                    },
                    class: 'icon',
                    when: (this_item.Pic != undefined) && (this_item.Pic != "") && !(this_item.Pic.includes('SpriteOutput') && !this_item.Pic.includes('LightConeMaxFigures') && !this_item.Pic.includes('AvatarIcon'))
                },
                {
                    p: this_item.Name,
                    class: 'name',
                    style: {
                        'font-size': '1.2em'
                    }
                },
                {
                    p: this_item.Desc,
                    class: 'desc',
                    style: {
                        'text-align': 'center'
                    }
                },
                {
                    hr: '',
                    style: {
                        'border-color': '#bbbbbb',
                        margin: '20px auto 15px'
                    }
                },
                {
                    p: this_item.Story,
                    class: 'desc'
                },
                {
                    hr: '',
                    style: {
                        'border-color': '#bbbbbb',
                        margin: '20px auto 15px'
                    },
                    when: this_item.Src
                },
                {
                    div: {
                        p: function (k) {
                            return k.data
                        },
                        class: 'desc',
                        data: this_item.Src,
                        when: this_item.Src
                    },
                }
            ],
        })
    }

})