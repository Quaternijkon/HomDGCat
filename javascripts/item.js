$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()
    init_title((lang == 'CH' ? '物品' : 'Items') + ' ' + txt.PAGE_TITLE[lang])
    if (!avid && window.location.hash) avid = window.location.hash.replace('#_', '')
    if (window.location.hash) window.location.hash = ''
    cur_coordinate = 0

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 26px;'><br>" + txt.game_img[lang] + VER_SR + "</b></color>")
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Home_Lang.replaceAll("'>", `${window.location.hash}'>`))
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

    var rarity_color = {
        1: "#919299",
        2: "#3c7c77",
        3: "#4174bd",
        4: "#7c54bc",
        5: "#d1a96a"
    }

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang3 + '/Item.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    var ojb = document.getElementsByTagName("container")
    ojb[0].addEventListener("scroll", update)
    
    function begin() {
        isNew = _ver[0]
        I_TYPE = '3'

        var op = {}
        _ver.forEach(function (o, k) {
            if (!k) {
                var name_ = {
                    "CH": "全部",
                    "EN": "All"
                }[lang]
            } else {
                var name_ = o
            }
            op[name_] = o
        })

        $('container').render({
            template: [
                {
                    div: [
                        {
                            section: [
                                {
                                    schedule: {
                                        img: imgpre + 'images/itemicon/900001.png',
                                    },
                                    class: (I_TYPE == '1') ? 'active' : '',
                                    a: {
                                        'data-id': '1',
                                        title: (lang == 'CH') ? '货币' : 'Currencies'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'images/itemicon/avatarhead/IconHead_202002.png',
                                    },
                                    class: (I_TYPE == '2') ? 'active' : '',
                                    a: {
                                        'data-id': '2',
                                        title: (lang == 'CH') ? '头像' : 'Profile Pictures'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'images/itemicon/110183.png',
                                    },
                                    class: (I_TYPE == '3') ? 'active' : '',
                                    a: {
                                        'data-id': '3',
                                        title: (lang == 'CH') ? '培养素材' : 'Materials'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'images/itemicon/chatbubble/220006.png',
                                    },
                                    class: (I_TYPE == '9') ? 'active' : '',
                                    a: {
                                        'data-id': '9',
                                        title: (lang == 'CH') ? '对话框' : 'Chat Bubbles'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'images/itemicon/401003.png',
                                    },
                                    class: (I_TYPE == '7') ? 'active' : '',
                                    a: {
                                        'data-id': '7',
                                        title: (lang == 'CH') ? '消耗品' : 'Consumables'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'images/itemicon/pet/251001.png',
                                    },
                                    class: (I_TYPE == '8') ? 'active' : '',
                                    a: {
                                        'data-id': '8',
                                        title: (lang == 'CH') ? '宠物' : 'Pets'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'images/itemicon/300011.png',
                                    },
                                    class: (I_TYPE == '6') ? 'active' : '',
                                    a: {
                                        'data-id': '6',
                                        title: (lang == 'CH') ? '礼包' : 'Gifts'
                                    }
                                },
                            ],
                            class: 'a_w_r'
                        },
                        {
                            hr: ''
                        },
                        {
                            section: {
                                select: '',
                                options: op,
                                class: 'rerr'
                            },
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
                },
                {
                    divv: '',
                    class: 'area_2'
                }
            ]
        })

        renderItems()

        if (avid) {
            for (const [t, dat] of Object.entries(_item)) {
                for (const id_ in dat) {
                    if (dat[id_]._id == avid) {
                        I_TYPE = t
                        popItem(parseInt(id_) + 1)
                    }
                }
            }
        }

        $('body').addClass(bg_name)
    }

    $('body').on('click', '.a_w_r schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        I_TYPE = $(this).attr('data-id')
        renderItems()
    })
    $('body').on('change', '.rerr', function () {
        isNew = $(this).val()
        renderItems()
    })

    function renderItems() {

        $('.area').empty()

        if (isNew == "All") {
            _ver.forEach(function (t, i) {
                if (i) {
                    renderItem(t)
                }
            })
        } else {
            renderItem(isNew)
        }

    }

    function renderItem(vvv) {
        _item[I_TYPE].forEach(function (t, i) {
            if (vvv != t.Ver) return
            $('.area').render({
                div: [
                    {
                        div: {
                            img: imgpre + 'images/itemicon/' + (t.Icon.includes('SpriteOutput') ? 'IconAvatarDetail.png' : t.Icon),
                            class: 'item-icon',
                            when: (t.Icon != undefined) && (t.Icon != '')
                        },
                        class: 'item-up',
                    },
                    {
                        div: {
                            p: t.Name.length ? t.Name : '???',
                            class: 'item-name'
                        },
                        class: 'item-down'
                    }
                ],
                class: 'item-card hover-shadow',
                style: {
                    'background-image': `linear-gradient(180deg, ${rarity_color[t.Rarity]}, #fff)`
                },
                a: {
                    'data-id': i + 1
                }
            })
        })
    }

    $('body').on('click', '.item-card', function () {
        popItem(parseInt($(this).attr('data-id')))
    })

    function popItem(y) {
        this_item = _item[I_TYPE][y - 1]
        switch_title(this_item.Name)
        poplayer_([
            {
                div: {
                    div: [
                        {
                            img: this_item.Pic.includes('LightConeMaxFigures') ? (imgpre + 'images/lightconemaxfigures/' + this_item.Pic.replace('SpriteOutput/LightConeMaxFigures', '')) : (this_item.Pic.includes('AvatarIcon') ? (imgpre + 'images/avataricon/' + this_item.Pic.replace('SpriteOutput/AvatarIcon/', '')) : (imgpre + 'images/itemfigures/' + this_item.Pic)),
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
                                'border-color': '#eeeeee',
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
                                'border-color': '#eeeeee',
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
                        },
                    ],
                    class: 'a_section',
                    style: {
                        'padding-top': '25px',
                        'padding-bottom': '10px',
                        'margin-bottom': '10px',
                    }
                },
                class: 'mon_body'
            }
        ], this_item._id)
    }

    function poplayer_(T, h) {
        cur_coordinate = $('.scroller').scrollTop()
        $('.area_2').empty().render([
            {
                section: {
                    p: txt.Back[lang],
                    style: {
                        margin: '0'
                    }
                },
                event: {
                    click: returnMain
                },
                class: 'mon_head',
                a: {
                    id: 'back_1',
                },
            },
            {
                section: [
                    {
                        p: txt.Back[lang],
                        style: {
                            margin: '0'
                        }
                    },
                    {
                        closeicon: '✕'
                    }
                ],
                event: {
                    click: returnMain
                },
                class: 'mon_head',
                a: {
                    id: 'back_2',
                },
            },
        ])
        $('.area_2').render(T)
        $('.area_2').show()
        $('.content').hide()
        console.log(cur_coordinate)
        $('container').scrollTop($('h3').height())
        window.location.hash = '_' + h
        $('h3 .lang').html(txt.Home_Lang.replaceAll("'>", `${window.location.hash}'>`))
    }

    function returnMain() {
        $('.area_2').empty().hide()
        $('.content').show()
        $('.scroller').scrollTop(cur_coordinate)
        window.location.hash = ''
        $('h3 .lang').html(`<a class='translate_' href='?lang=CH${window.location.hash}'><b>中文</b></a> | <a class='translate_' href='?lang=EN${window.location.hash}'><b>English</b></a> | <a class='translate_' href='?lang=JP${window.location.hash}'><b>日本語</b></a> | <a class='translate_' href='?lang=KR${window.location.hash}'><b>한국인</b></a>`)
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

    window.onhashchange = function() {
        if (!window.location.hash.includes("_")) {
            returnMain()
        }
    }

    $('body').on('click', '._menu_', function () {
        popLinks(lang)
    })

})