$(function() {

    var anniversary = 0
    var quest_allow = 1
    var cur_time = Date.now()
    var keqing_birthday = Date.parse('2025-11-20T00:00:00+08:00')
    var show_yhb = (cur_time >= keqing_birthday)
    console.log(cur_time)
    if ((cur_time >= Date.parse('2025-10-08T04:00:00+08:00')) && (cur_time <= Date.parse('2025-12-21T04:00:00+08:00'))) anniversary = 1
    
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'
    var bg_name = $('#NOLAZY').val() ? 'bg_2' : 'bg'

    var cookie_lang = "CH"
    document.cookie.split(";").forEach(function (c) { 
        if ((c.includes('lang=')) && !(c.includes('session'))) {
            cookie_lang = c.substring(c.indexOf('lang=') + 5, c.indexOf('lang=') + 7)
        }
    });
    var AVAILABLE_LANG = ["CH", "EN", "RU", "JP", "KR", "DE", "FR", "SP", "PT"]
    var is_ru = 0
    var param_lang = $('#LANG').val().toUpperCase()
    if (param_lang == "ES") param_lang = "SP"
    var store_lang = param_lang
    if (!AVAILABLE_LANG.includes(store_lang)) {
        store_lang = "CH"
    }
    var lang3 = "CH"
    if (param_lang) {
        var DATE = new Date()
        document.cookie = 'lang=' + store_lang + ';expires=' + new Date(DATE.getTime() + 8640000000).toUTCString() + ';path=/'
        lang3 = store_lang
    } else {
        lang3 = cookie_lang
    }
    var lang2 = lang3
    if ((lang2 != "CH") && (lang2 != "EN") && (lang2 != "RU")) lang2 = "EN"
    var lang = lang2
    if (lang == "RU") lang = "EN"
    var meow = April_1st ? ((lang == 'CH') ? '喵' : '~') : ''
    var meow2 = April_1st ? ((lang == 'CH') ? '帕' : '~') : ''

    function start_cntd() {
        countdown_ver_1 = ""
        countdown_time_1 = 0
        countdown_ver_2 = ""
        countdown_time_2 = 0
        countdown_note_1 = ""
        countdown_note_2 = ""
        if (SR_DATES[VER_SR] && GI_DATES[VER_GI]) {
            countdown_ver_1 = GI_DATES[VER_GI][0]
            countdown_time_1 = GI_DATES[VER_GI][1]
            countdown_ver_2 = SR_DATES[VER_SR][0]
            countdown_time_2 = SR_DATES[VER_SR][1]
            if (GI_DATES[VER_GI][2] != undefined) countdown_note_1 = "<br>" + GI_DATES[VER_GI][2][(lang == 'CH') ? 0 : 1]
            if (SR_DATES[VER_SR][2] != undefined) countdown_note_2 = "<br>" + SR_DATES[VER_SR][2][(lang == 'CH') ? 0 : 1]
            cntd_0()
            setInterval(cntd_0, 1000)
        } else {
            $('.cntd_wrap').remove()
        }
    }

    function cntd_0() {
        cntd(countdown_time_1, countdown_ver_1, '.c1_b', '.c1_a', 1600135200000, (lang == 'CH') ? '刻晴' : 'Keqing', countdown_note_1)
        cntd(countdown_time_2, countdown_ver_2, '.c2_b', '.c2_a', 1722394800000, (lang == 'CH') ? '云璃' : 'Yunli', countdown_note_2)
    }

    function cntd(a, c, b, div2, birthday_stamp, char_name, _note) {
        var now = Date.now()
        var diff = a - now
        var age_d = parseInt((now - birthday_stamp) / 86400000)
        if (age_d % 100 == 0) age_d = "<color style='color:#DD0000'>" + age_d + '</color>'
        if (anniversary && (div2 == '.c1_a')) {
            if (now >= keqing_birthday) {
                var age_s = parseInt((now - keqing_birthday) / 86400000)
                if (age_s == 0) {
                    $(div2).html({
                        CH: `刻晴生日快乐！`,
                        EN: `Happy Birthday, Keqing!`
                    }[lang])
                } else {
                    $(div2).html({
                        CH: `${char_name}生日 : <b><color style='color:#DD0000'>${age_s}</color></b> 天前`,
                        EN: `${char_name}'s birthday: <b><color style='color:#DD0000'>${age_s}</color></b> days ago`
                    }[lang])
                }
            } else {
                var age_s = parseInt((keqing_birthday - now) / 86400000)
                $(div2).html({
                    CH: `${char_name}生日 : <b><color style='color:#DD0000'>${age_s}</color></b> 天后`,
                    EN: `${char_name}'s birthday: In <b><color style='color:#DD0000'>${age_s}</color></b> days`
                }[lang])
            }
        } else {
            $(div2).html((lang == 'CH') ? `${char_name} : <b>${age_d}</b> 天` : `${char_name}: <b>${age_d}</b> days old`)
        }
        if (a == 0) {
            $(b).html(c + " " + (lang == 'CH' ? '时间未知' : 'Time unknown') + _note)
            $(b + '_').html(c + " " + (lang == 'CH' ? '时间未知' : 'Time unknown') + _note)
            return
        } else if (diff < 0) {
            $(b).html(c + " " + (lang == 'CH' ? '00:00:00' : '00:00:00') + _note)
            $(b + '_').html(c + " " + (lang == 'CH' ? '00:00:00' : '00:00:00') + _note)
            return
        }
        var show = process_time(diff)
        $(b).html(c + " " + show + _note)
        $(b + '_').html(c + " " + show + _note)
        $('.fntd_time').each(function (i, t) {
            $(this).html(process_time_2(parseInt($(this).attr('data-id')) - now))
        })
    }

    function process_time(diff) {
        var days = Math.floor(diff / 86400000)
        diff -= days * 86400000
        var hours = Math.floor(diff / 3600000)
        diff -= hours * 3600000
        var minutes = Math.floor(diff / 60000)
        diff -= minutes * 60000
        var seconds = Math.floor(diff / 1000)
        if (hours < 10) hours = "0" + hours
        if (minutes < 10) minutes = "0" + minutes
        if (seconds < 10) seconds = "0" + seconds
        if (!days) {
            return hours + ":" + minutes + ":" + seconds
        } else {
            if (days < 10) days = "0" + days
            return days + ":" + hours + ":" + minutes + ":" + seconds
        }
    }

    function process_time_2(diff) {
        var days = Math.floor(diff / 86400000)
        diff -= days * 86400000
        var hours = Math.floor(diff / 3600000)
        diff -= hours * 3600000
        var minutes = Math.floor(diff / 60000)
        if (!days) {
            return hours + (lang == 'CH' ? '小时 ' : "h ")// + minutes + (lang == 'CH' ? '分' : "m")
        } else {
            return days + (lang == 'CH' ? '天 ' : "d ")// + hours + (lang == 'CH' ? '小时' : "h")
        }
    }

    function start_fntd(start_timestamp, time_list, output_table, offset, birthday_stamp, birthday_image, char_name) {

        var _now = Date.now()

        var age_d = parseInt((_now - birthday_stamp) / 86400000)
        if (age_d % 100 == 0) age_d = "<color style='color:#FF9999'>" + age_d + '</color>'
        $(output_table + '_1').render({
            img: birthday_image
        })
        $(output_table + '_2').render({
            p: (lang == 'CH') ? `${char_name} : <b>${age_d}</b> 天` : `${char_name}: <b>${age_d}</b> days old`
        })
        
        var data_list = []
        var cumulated_stamp = start_timestamp
        for (const ver_data of time_list) {
            var custom_offset = 0
            if (ver_data.V != '4.0') {
                data_list.push({
                    stamp: cumulated_stamp + offset[0] * 3600000,
                    time: new Date(cumulated_stamp + offset[0] * 3600000).toISOString().substring(0, 10),
                    text: "<color style='color:rgb(255, 172, 255'><b>" + ver_data.V + '</b></color>' + (lang == 'CH' ? ' 测试服' : ' Beta')
                })  
            }
            data_list.push({
                stamp: cumulated_stamp + offset[1] * 3600000,
                time: new Date(cumulated_stamp + offset[1] * 3600000).toISOString().substring(0, 10),
                text: "<color style='color:rgb(255, 172, 255'><b>" + ver_data.V + '</b></color>' + (lang == 'CH' ? ' 角色立绘' : ' Drip Marketing')
            })
            cumulated_stamp += ver_data.D * 86400000
            data_list.push({
                stamp: cumulated_stamp,
                time: new Date(cumulated_stamp).toISOString().substring(0, 10),
                text: "<color style='color:rgb(255, 172, 255'><b>" + ver_data.V + '</b></color>' + (lang == 'CH' ? ' 开启' : ' Live')
            })
            data_list.push({
                stamp: cumulated_stamp + offset[2] * 3600000,
                time: new Date(cumulated_stamp + offset[2] * 3600000).toISOString().substring(0, 10),
                text: "<color style='color:rgb(255, 172, 255'><b>" + ver_data.V + '</b></color>' + (lang == 'CH' ? ' 前瞻特别节目' : ' Special Program')
            })
        }
        data_list.sort(compare)
        for (const data_entry of data_list) {
            if (data_entry.stamp < _now) continue
            $(output_table).render({
                tr: [
                    {
                        td: data_entry.time,
                        style: {
                            'text-align': 'right'
                        }
                    },
                    {
                        td: '',
                        class: 'fntd_time',
                        a: {
                            'data-id': data_entry.stamp
                        },
                        style: {
                            'text-align': 'center'
                        }
                    },
                    {
                        td: data_entry.text,
                    }
                ]
            })
        }

    }

    function compare(a, b) {
        return a.stamp - b.stamp
    }

    document.title = txt.PAGE_TITLE[lang]

    if (lang == 'EN') {$('body').css('font-family', "'Segoe UI', sans-serif")}
    else {$('body').css('font-family', "'Microsoft YaHei', sans-serif")}

    default_game = 'GI'
    document.cookie.split(";").forEach(function (c) { 
        if ((c.includes('game=')) && !(c.includes('session'))) {
            default_game = c.substring(c.indexOf('game=') + 5, c.indexOf('game=') + 7)
        }
    });

    var cur_select = 1
    var l = didyouknow.length
    var r = -1
    var GAME = default_game
    var GAME_DATE = $("#GAME").val()
    
    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_GI + " / " + VER_SR + "</b></color>")
    
    var imgpre = $('#IMGPRE').val()
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

    $('h3 .lang').html(txt.Home_Lang_)
    $('.lang').hide()

    $('container').render({
        div: [
            {
                section: [
                    {
                        schedule: txt.Home_Sections[0][lang],
                        a: {
                            'data-id': 1,
                            'class': GAME == 'GI' ? 'active' : ''
                        },
                        style: {
                            'display': 'flex',
                            'justify-content': 'center',
                            'flex-direction': 'column',
                            'line-height': '1.7'
                        }
                    },
                    {
                        schedule: txt.Home_Sections[1][lang],
                        a: {
                            'data-id': 2,
                            'class': GAME == 'SR' ? 'active' : ''
                        },
                        style: {
                            'display': 'flex',
                            'justify-content': 'center',
                            'flex-direction': 'column',
                            'line-height': '1.7'
                        }
                    },
                    {
                        schedule: txt.Home_Sections[2][lang],
                        a: {
                            'data-id': 3
                        },
                        style: {
                            'display': 'flex',
                            'justify-content': 'center',
                            'flex-direction': 'column',
                            'line-height': '1.7',
                            'border': '1.6px solid rgb(112, 48, 160)'
                        },
                        id: 'date_schedule'
                    },
                ],
                class: 'home_select'
            },
            {
                div: [
                    {
                        div: [
                            {
                                div: {
                                    img: '/images/emote/Keqing/1.png'
                                },
                                class: 'cntd_emote'
                            },
                            {
                                div: {
                                    p: '',
                                    class: 'c1_a',
                                },
                                class: 'c_a_w'
                            },
                            {
                                div: {
                                    img: '/homdgcat-res/UI/birthday-cake2.png'
                                },
                                class: 'cntd_emote_small',
                                when: anniversary
                            },
                        ],
                        class: 'countdown_small c1 c_f'
                    },
                    {
                        div: [
                            {
                                div: {
                                    img: '/images/emote/Yunli/1.png'
                                },
                                class: 'cntd_emote'
                            },
                            {
                                div: {
                                    p: '',
                                    class: 'c2_a',
                                },
                                class: 'c_a_w'
                            },
                        ],
                        class: 'countdown_small c2 c_f'
                    },
                    {
                        p: '',
                        class: 'countdown c1 c1_b',
                        when: 0
                    },
                    {
                        p: '',
                        class: 'countdown c2 c2_b',
                        when: 0
                    }
                ],
                class: 'cntd_wrap'
            },
            {
                div: [
                    {
                        section: [
                            {
                                schedule: {
                                    a: '/gi/boss',
                                    t: {
                                        span: (lang == 'CH') ? '怪物解析' : 'Boss Guides',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                            {
                                schedule: {
                                    a: '/gi/change',
                                    t: {
                                        span: (lang == 'CH') ? '改动汇总' : 'Track Updates',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                            {
                                schedule: {
                                    a: '/gi/future',
                                    t: {
                                        span: (lang == 'CH') ? '未来情报' : 'Future Info',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                            {
                                schedule: {
                                    a: '/gi/formulae',
                                    t: {
                                        span: '公式大全',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                when: lang == 'CH',
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                            {
                                schedule: {
                                    a: '/gi/readable',
                                    t: {
                                        span: (lang == 'CH') ? '阅读物搜索' : 'Readables Search',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                            {
                                schedule: {
                                    a: '/gi/search',
                                    t: {
                                        span: (lang == 'CH') ? '文本+剧情搜索' : 'Text+Dialogue Search',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                            {
                                schedule: {
                                    a: '/gi/quests',
                                    t: {
                                        span: (lang == 'CH') ? '剧情记录' : 'Quest Logs',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                when: quest_allow,
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #7030A0',
                                }
                            },
                        ]
                    },
                    {
                        section: [
                            {
                                schedule: {
                                    a: '/keq',
                                    t: {
                                        span: '妮可少女的刻晴足迹',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #7030a0',
                                }
                            },
                            {
                                schedule: {
                                    a: '/yhb',
                                    t: {
                                        span: '刻晴生贺：玉衡杯重现',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        },
                                    },
                                },
                                when: show_yhb,
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #CC0000',
                                },
                            },
                        ],
                        when: lang == 'CH',
                    }
                ],
                class: 'd1',
                style: {
                    'justify-content': 'center'
                }
            },
            {
                div: [
                    {
                        section: [
                            {
                                schedule: {
                                    a: '/sr/boss',
                                    t: {
                                        span: (lang == 'CH') ? '怪物解析' : 'Boss Guides',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                            {
                                schedule: {
                                    a: '/sr/change',
                                    t: {
                                        span: (lang == 'CH') ? '改动汇总' : 'Track Updates',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                            {
                                schedule: {
                                    a: '/sr/future',
                                    t: {
                                        span: (lang == 'CH') ? '未来情报' : 'Future Info',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                            {
                                schedule: {
                                    a: '/sr/formulae',
                                    t: {
                                        span: '公式大全',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                when: lang == 'CH',
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                            {
                                schedule: {
                                    a: '/sr/readable',
                                    t: {
                                        span: (lang == 'CH') ? '阅读物搜索' : 'Readables Search',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                            {
                                schedule: {
                                    a: '/sr/search',
                                    t: {
                                        span: (lang == 'CH') ? '文本+剧情搜索' : 'Text+Dialogue Search',
                                        style: {
                                            'margin': 'auto',
                                            'font-weight': 'bold',
                                        }
                                    }
                                },
                                class: 'hover-shadow panel',
                                style: {
                                    width: 'max-content',
                                    border: '2px solid #f29e38',
                                }
                            },
                        ]
                    },
                ],
                class: 'd2',
                style: {
                    'justify-content': 'center'
                }
            },
            {
                section: {
                    a: `[[Link]]`,
                    t: [
                        {
                            div: [
                                {
                                    img: `[[Icon]]`,
                                    a: {
                                        loading: lazy
                                    },
                                    when: !April_1st
                                },
                                {
                                    img: '/homdgcat-res/Avatar/April1stOthers.png',
                                    a: {
                                        loading: lazy
                                    },
                                    when: April_1st
                                }
                            ],
                            class: 'new_image_wrapper_1'
                        },
                        {
                            div: [
                                {
                                    img: `/homdgcat-res/UI/[[Elem]].png`,
                                    class: 'attr_img_1',
                                    a: {
                                        loading: lazy
                                    },
                                    when: function (p) {
                                        return p.data.Elem && p.data.Elem.length && (p.data.Elem != 'None')
                                    }
                                },
                                {
                                    img: `/homdgcat-res/AvatarSkill/[[Type]].png`,
                                    class: 'attr_img_1',
                                    a: {
                                        loading: lazy
                                    },
                                    when: function (p) {
                                        return p.data.Type.length
                                    }
                                },
                                {
                                    img: '/images/GCG_UI/3004.png',
                                    class: 'attr_img_1',
                                    a: {
                                        loading: lazy
                                    },
                                    when: function (p) {
                                        return !p.data.Type.length
                                    }
                                }
                            ],
                            class: 'new_attr'
                        },
                        {
                            p: `[[Name/${lang3}]]${meow}`,
                            class: 'new_text',
                            style: {
                                color: function (d) {
                                    return (d.data.Rarity == 5) ? '#df903b' : '#ffacff'
                                }
                            }
                        }
                    ],
                    class: 'new_block hover-shadow',
                    data: NEW_GI,
                    attr: {
                        target: '_blank'
                    }
                },
                class: 'n1'
            },
            {
                section: {
                    a: `[[Link]]`,
                    t: [
                        {
                            div: [
                                {
                                    img: `[[Icon]]`,
                                    a: {
                                        loading: lazy
                                    },
                                    when: !April_1st
                                },
                                {
                                    img: '/images/avataricon/April1stOthers.png',
                                    a: {
                                        loading: lazy
                                    },
                                    when: April_1st
                                }
                            ],
                            class: 'new_image_wrapper_2'
                        },
                        {
                            div: [
                                {
                                    img: `/images/Element/[[Elem]].png`,
                                    class: 'attr_img_2',
                                    a: {
                                        loading: lazy
                                    },
                                    when: 'Elem'
                                },
                                {
                                    img: `/images/Paths/[[Type]].png`,
                                    class: 'attr_img_2',
                                    a: {
                                        loading: lazy
                                    }
                                }
                            ],
                            class: 'new_attr'
                        },
                        {
                            p: `[[Name/${(lang3 == 'RU') ? 'EN' : lang3}]]${meow2}`,
                            class: 'new_text',
                            style: {
                                color: function (d) {
                                    return (d.data.Rarity == 5) ? '#df903b' : '#ffacff'
                                }
                            }
                        }
                    ],
                    class: 'new_block hover-shadow',
                    data: NEW_SR,
                    attr: {
                        target: '_blank'
                    }
                },
                class: 'n2'
            },
            {
                div: [],
                class: 'below'
            },
            {
                div: [
                    {
                        div: [
                            {
                                p: (lang == 'CH') ? '原神' : 'Genshin Impact',
                                class: 'dir_head',
                                style: {
                                    margin: '15px 5px 0'
                                }
                            },
                            {
                                p: '',
                                class: 'c1_ dir_subhead'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'age_sub_1 table_gi_1'
                                    },
                                    {
                                        div: '',
                                        class: 'age_sub_2 table_gi_2'
                                    },
                                    {
                                        div: {
                                            img: '/homdgcat-res/UI/birthday-cake2.png'
                                        },
                                        class: 'cntd_emote_small',
                                        when: anniversary
                                    },
                                ],
                                class: 'age'
                            },
                            {
                                table: [],
                                class: 'ctable table_gi'
                            }
                        ],
                        class: 'futd_gi futds',
                        when: GAME_DATE != "SR_DATE"
                    },
                    {
                        div: [
                            {
                                p: (lang == 'CH') ? '星穹铁道' : 'Star Rail',
                                class: 'dir_head',
                                style: {
                                    margin: '15px 5px 0'
                                }
                            },
                            {
                                p: '',
                                class: 'c2_ dir_subhead'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'age_sub_1 table_sr_1'
                                    },
                                    {
                                        div: '',
                                        class: 'age_sub_2 table_sr_2'
                                    },
                                ],
                                class: 'age'
                            },
                            {
                                table: [],
                                class: 'ctable table_sr'
                            }
                        ],
                        class: 'futd_sr futds',
                        when: GAME_DATE != "GI_DATE"
                    }
                ],
                class: 'futd'
            }
        ],
        class: 'content'
    })

    // Used to be -41 (18:00 on Monday); now it's 127 (18:00 on the next Monday)
    start_fntd(GI_Stamp, GI_Times, '.table_gi', [7, 127, -279], 1600135200000, '/images/emote/Keqing/1.png', (lang == 'CH') ? '刻晴' : 'Keqing') 
    start_fntd(SR_Stamp, SR_Times, '.table_sr', [-25, -359, -279.5], 1722394800000, '/images/emote/Yunli/1.png', (lang == 'CH') ? '云璃' : 'Yunli')
    start_cntd()

    if (GAME == 'GI') renderGI()
    if (GAME == 'SR') renderSR()
    if (GAME_DATE) {
        renderAbout()
        $('.home_select schedule').removeClass('active')
        $('#date_schedule').addClass('active')
    }

    $('body').addClass(bg_name)

    function renderGI() {
        $('.c2').hide()
        $('.c1').show()
        $('.d2').hide()
        $('.d1').show()
        $('.n2').hide()
        $('.n1').show()
        $('.futd').hide()
        $('.below').css('background-color', '')
        $('.below').show().empty()
        $('.below').render({
            template: {
                div : function (d) {
                    for (const item of GI) {
                        if (!item.Title[lang2]) return
                        if ((item.when != undefined) && !item.when) continue
                        $(d.container).render({
                            a: item.Href[lang],
                            t: {
                                div: {
                                    span: item.Title[lang2],
                                    style: {
                                        color: item.emphasize ? '#FFD780' : ''
                                    }
                                },
                                class: 'dir_head'
                            },
                            class: 'dir hover-shadow',
                        })
                    }
                },  
                class: 'dir_wrap'
            }
        })
        var DATE = new Date()
        document.cookie = 'game=GI;expires=' + new Date(DATE.getTime() + 8640000000).toUTCString() + ';path=/'
    }

    function renderSR() {
        $('.c1').hide()
        $('.c2').show()
        $('.d1').hide()
        $('.d2').show()
        $('.n1').hide()
        $('.n2').show()
        $('.futd').hide()
        $('.below').css('background-color', '')
        $('.below').show().empty().render({
            template: {
                div : {
                    a: function (k) {
                        if (k.data.Disable) return 'javascript:void(0)'
                        return k.data.Href[lang]
                    },
                    t: [
                        {
                            div: {
                                span: `[[Title/${lang}]]`,
                            },
                            class: 'dir_head'
                        },
                        /*{
                            div: {
                                span: `[[Link/${lang}]]`,
                            },
                            class: 'dir_link',
                            when: function (k) {
                                return k.data.Link
                            }
                        }*/
                    ],
                    class: 'dir hover-shadow',
                    data: SR
                },
                class: 'dir_wrap'
            }
        })
        var DATE = new Date()
        document.cookie = 'game=SR;expires=' + new Date(DATE.getTime() + 8640000000).toUTCString() + ';path=/'
    }

    function renderAbout() {
        $('.c2').hide()
        $('.c1').hide()
        $('.d2').hide()
        $('.d1').hide()
        $('.n2').hide()
        $('.n1').hide()
        $('.futd').show()
        $('.below').css('background-color', 'transparent')
        $('.below').hide()
        console.log("FINISH")
    }

    $('body').on('click', '.home_select schedule', function () {
        if($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        cur_select = $(this).attr('data-id')
        switch (cur_select) {
            default:
                renderGI();
                GAME = 'GI'
                break;
            case '2':
                renderSR();
                GAME = 'SR'
                break;
            case '3':
                renderAbout();
                break;
        }
        $('h3 .lang').html(txt.Home_Lang_)
    })

    $('body').on('click', '.didyouknow', function() {
        didyouknow_()
    })

})