$(function () {

    var imgpre = $('#IMGPRE').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'
    var avid = $('#AVID').val()
    init_title(computer_.MiscText.PAGE_TITLE[lang])
    if (!avid && window.location.hash) avid = window.location.hash.replace('#_', '')
    if (window.location.hash) window.location.hash = ''
    cur_coordinate = 0

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Title[lang] + "<color style='font-size: 26px;'><br>" + computer_.MiscText.game_img[lang] + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`));
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

    var rarity_color = {
        0: "#919299",
        1: "#919299",
        2: "#3c7c77",
        3: "#4174bd",
        4: "#7c54bc",
        5: "#d1a96a"
    }

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/item.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    var ojb = document.getElementsByClassName("scroller")
    ojb[0].addEventListener("scroll", update)

    function begin() {

        I_TYPE = '1'

        $('container').render({
            template: [
                {
                    div: [
                        {
                            section: [
                                {
                                    schedule: {
                                        img: imgpre + 'homdgcat-res/Avatar/UI_AvatarIcon_72158_Circle.png',
                                    },
                                    class: (I_TYPE == '11') ? 'active' : '',
                                    a: {
                                        'data-id': '11',
                                        title: (lang == 'CH') ? '头像' : 'Profile Pictures'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_220104.png',
                                    },
                                    class: (I_TYPE == '12') ? 'active' : '',
                                    a: {
                                        'data-id': '12',
                                        title: (lang == 'CH') ? '小道具' : 'Gadgets'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_113002.png',
                                    },
                                    class: (I_TYPE == '1') ? 'active' : '',
                                    a: {
                                        'data-id': '1',
                                        title: (lang == 'CH') ? '角色突破素材' : 'Character Level-Up Materials'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_112040.png',
                                    },
                                    class: (I_TYPE == '2') ? 'active' : '',
                                    a: {
                                        'data-id': '2',
                                        title: (lang == 'CH') ? '角色与武器培养素材' : 'Character and Weapon Enhancement Materials'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_104312.png',
                                    },
                                    class: (I_TYPE == '3') ? 'active' : '',
                                    a: {
                                        'data-id': '3',
                                        title: (lang == 'CH') ? '角色天赋素材' : 'Character Talent Materials'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_114020.png',
                                    },
                                    class: (I_TYPE == '4') ? 'active' : '',
                                    a: {
                                        'data-id': '4',
                                        title: (lang == 'CH') ? '武器突破素材' : 'Weapon Ascension Materials'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_100058.png',
                                    },
                                    class: (I_TYPE == '5') ? 'active' : '',
                                    a: {
                                        'data-id': '5',
                                        title: (lang == 'CH') ? '地方特产' : 'Local Specialities'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'homdgcat-res/Mat/UI_NameCardIcon_Keqing.png',
                                    },
                                    class: (I_TYPE == '6') ? 'active' : '',
                                    a: {
                                        'data-id': '6',
                                        title: (lang == 'CH') ? '名片' : 'Namecards'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_108126.png',
                                    },
                                    class: (I_TYPE == '7') ? 'active' : '',
                                    a: {
                                        'data-id': '7',
                                        title: (lang == 'CH') ? '消耗品' : 'Consumables'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_110014.png',
                                    },
                                    class: (I_TYPE == '8') ? 'active' : '',
                                    a: {
                                        'data-id': '8',
                                        title: (lang == 'CH') ? '烹饪食材' : 'Cooking Ingredients'
                                    }
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'homdgcat-res/Mat/UI_TraceEffectIcon_Keqing.png',
                                    },
                                    class: (I_TYPE == '10') ? 'active' : '',
                                    a: {
                                        'data-id': '10',
                                        title: (lang == 'CH') ? '绘想游迹' : 'Envisaged Echoes'
                                    }
                                }
                            ],
                            class: 'a_w_r'
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
            ],
        })

        if (avid) {
            if (index_material_1[avid] != undefined) {
                I_TYPE = 1
                popItem(index_material_1[avid] + 1)
            } else if (index_material_2[avid] != undefined) {
                I_TYPE = 2
                popItem(index_material_2[avid] + 1)
            } else if (index_material_3[avid] != undefined) {
                I_TYPE = 3
                popItem(index_material_3[avid] + 1)
            } else if (index_material_4[avid] != undefined) {
                I_TYPE = 4
                popItem(index_material_4[avid] + 1)
            } else if (index_ingre_2[avid] != undefined) {
                I_TYPE = 5
                popItem(index_ingre_2[avid] + 1)
            } else if (index_namecard[avid] != undefined) {
                I_TYPE = 6
                popItem(index_namecard[avid] + 1)
            } else if (index_food[avid] != undefined) {
                I_TYPE = 7
                popItem(index_food[avid] + 1)
            } else if (index_ingre_1[avid] != undefined) {
                I_TYPE = 8
                popItem(index_ingre_1[avid] + 1)
            } else if (index_trail[avid] != undefined) {
                I_TYPE = 10
                popItem(index_trail[avid] + 1)
            } else if (index_pfp[avid] != undefined) {
                I_TYPE = 11
                popItem(index_pfp[avid] + 1)
            } else if (index_widget[avid] != undefined) {
                I_TYPE = 12
                popItem(index_widget[avid] + 1)
            } 
        }

        renderItems()

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

    function renderItems() {

        $('.area').empty()

        _items[parseInt(I_TYPE)].forEach(function (t, i) {
            $('.area').render({
                div: [
                    {
                        div: {
                            img: imgpre + ((t.Pic && (!t.Pic.includes("_P"))) ? ('homdgcat-res/Avatar/' + t.Pic + '.png') : ('homdgcat-res/Mat/' + t.Icon + '.png')),
                            class: 'item-icon',
                            event: {
                                error: function (d) {
                                    $(d.sender).hide()
                                }
                            },
                            a: {
                                loading: lazy
                            }
                        },
                        class: 'item-up',
                    },
                    {
                        div: {
                            p: t.Name.length ? t.Name : '???',
                            class: 'item-name'
                        },
                        class: 'item-down'
                    },
                    {
                        img: imgpre + 'images/food_buffs/' + _BUFFICON[t.Buff] + '.png',
                        class: 'buff-icon',
                        when: t.Buff != undefined
                    },
                ],
                class: 'item-card hover-shadow',
                style: {
                    'background-image': `linear-gradient(180deg, ${rarity_color[t.R]}, #fff)`
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
        this_item = _items[parseInt(I_TYPE)][y - 1]
        switch_title(this_item.Name)
        poplayer_({
            div: {
                div: [
                    {
                        img: imgpre + (this_item.Pic ? ('homdgcat-res/Avatar/' + this_item.Pic + '.png') : ('homdgcat-res/Mat/' + this_item.Icon + '.png')),
                        class: this_item.Pic ? 'icon' : 'icon2',
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
                    },
                    {
                        hr: '',
                        style: {
                            'border-color': '#eeeeee',
                            margin: '20px auto 15px'
                        },
                        when: this_item.Eff != undefined
                    },
                    {
                        p: this_item.Eff,
                        class: 'desc',
                        when: this_item.Eff != undefined
                    },
                    {
                        hr: '',
                        style: {
                            'border-color': '#eeeeee',
                            margin: '20px auto 15px'
                        },
                        when: this_item.Type != undefined
                    },
                    {
                        div: {
                            p: function (k) {
                                return k.data
                            },
                            class: 'desc',
                            data: this_item.Type
                        },
                        when: this_item.Type != undefined
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
                            data: this_item.Src
                        },
                        when: this_item.Src
                    },
                    {
                        hr: '',
                        style: {
                            'border-color': '#eeeeee',
                            margin: '20px auto 15px'
                        },
                        when: this_item.Recipe
                    },
                    {
                        div: '',
                        class: 'center_div recipe',
                        when: this_item.Recipe
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
        }, this_item._id)

        if (this_item.Recipe) {
            var this_recipe = _CR[this_item.Recipe]
            for (var j = 0; j < this_recipe.length; j += 2) {
                $('.recipe').render({
                    div: [
                        {
                            img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_' + this_recipe[j] + '.png'
                        },
                        {
                            span: this_recipe[j + 1].toString(),
                            class: 'monicon_num'
                        }
                    ],
                    class: 'recipe-icon item-jump hover-shadow',
                    a: {
                        'data-id': this_recipe[j]
                    }
                })
            }
        }

        if (this_item.AI) {
            $('.recipe').render({
                div: [
                    {
                        img: imgpre + 'homdgcat-res/Avatar/' + this_item.AI + '.png',
                    },
                ],
                class: 'recipe-icon avatar-jump hover-shadow',
                a: {
                    'data-id': this_item.Avatar
                }
            })
        }

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
                        p: computer_.MiscText.Back[lang],
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
        $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`))
    }

    function returnMain() {
        $('.area_2').empty().hide()
        $('.content').show()
        $('.scroller').scrollTop(cur_coordinate)
        window.location.hash = ''
        $('h3 .tlsub').html(`<a class='translate_' href='?lang=CH${window.location.hash}'><b>中文</b></a> | <a class='translate_' href='?lang=EN${window.location.hash}'><b>English</b></a> | <a class='translate_' href='?lang=JP${window.location.hash}'><b>日本語</b></a> | <a class='translate_' href='?lang=KR${window.location.hash}'><b>한국인</b></a> | <a class='translate_' href='?lang=RU${window.location.hash}'><b>Русский</b></a>`)
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

    $('body').on('click', '.item-jump', function () {
        window.location.href = `/gi/item/${$(this).attr('data-id')}`
    })

    $('body').on('click', '.avatar-jump', function () {
        window.location.href = `/gi/char/${$(this).attr('data-id')}`
    })

})