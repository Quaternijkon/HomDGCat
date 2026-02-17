$(function () {

    var imgpre = $('#IMGPRE').val()

    init_title((lang == 'CH' ? '效果和名词' : 'Effects & Nouns') + ' ' + txt.PAGE_TITLE[lang])

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
    script_computer.src = '/data/' + lang3 + '/EMS.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    var tip = {
        CH: "效果包括增益效果、负面效果等<br>名词是游戏内具有<u>下划线</u>的词，点击可以查看名词解释",
        EN: "Effects include Buffs and Debuffs.<br>Nouns are <u>underlined</u> words in the game that, when clicked, display their explanations.",
    }

    var desc_buff = {
        CH: "<color style='color:#97ffb7'>增益</color> ",
        EN: "<color style='color:#97ffb7'>Buff</color> "
    }

    var desc_debuff = {
        CH: "<color style='color:#ff8877'>负面</color> ",
        EN: "<color style='color:#ff8877'>Debuff</color> "
    }

    var desc_other = {
        CH: "其他 ",
        EN: "Other "
    }

    var desc_cannotdispel = {
        CH: "<color style='color:#ff8877'>不可解除</color> ",
        EN: "<color style='color:#ff8877'>Unremovable</color> "
    }

    var desc_candispel = {
        CH: "<color style='color:#97ffb7'>可解除</color> ",
        EN: "<color style='color:#97ffb7'>Removable</color> "
    }

    function begin() {

        $('container').render({
            template: {
                div: [
                    {
                        p: (lang == 'CH' ? '效果和名词' : 'Effects & Nouns'),
                        class: 'sch_2'
                    },
                    {
                        p: tip[lang],
                        class: 'avd tip2',
                        style: {
                            margin: '18px 8px 14px',
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
                        div: [
                            {
                                div: [
                                    {
                                        p: (lang == 'CH') ? '角色效果' : 'Character Effects',
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
                                        div: '',
                                        class: 'card_content hide as'
                                    }
                                ],
                                class: 'card card_1'
                            },
                            {
                                div: [
                                    {
                                        p: (lang == 'CH') ? '怪物效果' : 'Monster Effects',
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
                                        div: '',
                                        class: 'card_content hide ms'
                                    }
                                ],
                                class: 'card card_1'
                            },
                            /*{
                                div: [
                                    {
                                        p: (lang == 'CH') ? '其他效果' : 'Other Effects',
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
                                        div: '',
                                        class: 'card_content hide st'
                                    }
                                ],
                                class: 'card card_2'
                            },*/
                            {
                                div: [
                                    {
                                        p: (lang == 'CH') ? '名词' : 'Nouns',
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
                                        div: '',
                                        class: 'card_content hide ee'
                                    }
                                ],
                                class: 'card card_1'
                            },
                        ],
                        class: 'blessing_card_area'
                    }
                ],
                class: 'content'
            }
        })
    
        _as.forEach(function (t) {
            if (_forbid.includes(t._id)) return
            if (typeof t.Name == 'string') $('.as').render(status(t))
        })
    
        _ms.forEach(function (t) {
            if (_forbid.includes(t._id)) return
            if (typeof t.Name == 'string') $('.ms').render(status(t))
        })
    
        /*_st.forEach(function (t) {
            if (typeof t.Name == 'string') $('.st').render(status(t))
        })*/
    
        _ee.forEach(function (t) {
            if (_forbid.includes(t._id)) return
            if (typeof t.Name == 'string') $('.ee').render(extraeffect(t))
        })

        $('body').addClass(bg_name)

        $('.hide').hide()

    }

    function status(dat) {
        var ret = "<b><color style='color:#FFD780'>" + dat.Name + "</color></b><br>" + dat.Desc
        var oth = '<br>'
        if (dat.Type) {
            oth += ((dat.Type == 1) ? desc_buff[lang] : desc_debuff[lang])
        } else {
            oth += desc_other[lang]
        }
        oth += ((dat.CD) ? desc_candispel[lang] : desc_cannotdispel[lang])
        return {
            p: ret.replaceAll('<color>', "<color style='color:#f29e38'>").replaceAll('\n', '<br>') + oth,
            class: 'desc'
        }
    }

    function extraeffect(dat) {
        var ret = "<b><color style='color:#FFD780'>" + dat.Name + '</color></b><br>' + dat.Desc
        return {
            p: ret.replaceAll('<color>', "<color style='color:#f29e38'>").replaceAll('\n', '<br>'),
            class: 'desc'
        }
    }
    $('body').on('click', '.toggle', function () {
        $(this).toggle()
        $(this).siblings('.show').toggle()
        $(this).siblings('.hide').toggle()
    })

})