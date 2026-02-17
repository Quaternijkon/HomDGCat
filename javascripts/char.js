$(function () {

    var anniversary = 0
    var cur_time = Date.now()
    console.log(cur_time)
    if ((cur_time >= 1750906800000) && (cur_time <= 1755165600000)) anniversary = 1

    var download_cd = 0

    var ehe = ((lang == 'CH') ? '妮可少女 玉衡杯数据库 yuhengcup.wiki <b>' : 'homdgcat.wiki | t.me/homdgcat <b>')
    if (April_1st) {
        ehe = ((lang == 'CH') ? '铌钶钞钕 库据数杯衡玉 yuhengcup.wiki <b>' : 'homdgcat.wiki | t.me/homdgcat <b>')
    }
    var meow = April_1st ? ((lang == 'CH') ? '帕' : '~') : ''
    var meow2 = April_1st ? ((lang == 'CH') ? '喵喵喵' : ' Meow Meow~') : ''
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'

    var no_skillicon = []
    shotting = 0
    showing_c = 0
    show_servant_block = 1
    cur_coordinate = 0

    $('h3 .lang').html(`<a class='translate_' href='?lang=CH${window.location.hash}'><b>中文</b></a> | <a class='translate_' href='?lang=EN${window.location.hash}'><b>English</b></a> | <a class='translate_' href='?lang=JP${window.location.hash}'><b>日本語</b></a> | <a class='translate_' href='?lang=KR${window.location.hash}'><b>한국인</b></a>`)

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()
    if (!avid && window.location.hash) avid = window.location.hash.replace('#_', '')
    if (window.location.hash) window.location.hash = ''

    init_title(txt.PAGE_TITLE[lang])

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 26px;'><br>" + txt.game_img[lang] + VER_SR + "</b></color>")
    $('h3 .subtitle').html(txt.Subtitle[lang]);
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

    var _yes = '✔'
    var _no = ''
    var exp = [
        112510,
        177910,
        206920,
        389390,
        822140,
        1326050,
        2763000,
    ]
    var emote_num = 23
    var unused_emotes = [5, 6, 7, 9, 17, 18]

    function start_cntd() {
        countdown_ver = ""
        countdown_time = 0
        countdown_note = ""
        if (SR_DATES[VER_SR]) {
            countdown_ver = SR_DATES[VER_SR][0]
            countdown_time = SR_DATES[VER_SR][1]
            if (SR_DATES[VER_SR][2] != undefined) countdown_note = "<br>" + SR_DATES[VER_SR][2][(lang == 'CH') ? 0 : 1]
            cntd()
            setInterval(cntd, 1000)
        } else {
            $('.countdown').hide()
        }
    }

    function cntd() {
        var now = Date.now()
        var diff = countdown_time - now
        var age_d = parseInt((now - 1722394800000) / 86400000)
        if ((age_d % 100 == 0) || anniversary) age_d = "<color style='color:#DD0000'>" + age_d + '</color>'
        $('.c2_a').html((lang == 'CH') ? `云璃 : <b>${age_d}</b> 天` : `Yunli: <b>${age_d}</b> days old`)
        if (anniversary) {
            var birthday_difference = 1753930800000 - now
            if (birthday_difference > 0) {
                var birthday_days = parseInt(birthday_difference / 86400000)
                var birthday_hours = parseInt((birthday_difference - birthday_days * 86400000) / 3600000)
                var birthday_mins = parseInt((birthday_difference - birthday_days * 86400000 - birthday_hours * 3600000) / 60000)
                $('.anni_p_1').html(birthday_days.toString() + ((lang == 'CH') ? 'd' : 'd'))
                $('.anni_p_2').html(birthday_hours.toString() + ((lang == 'CH') ? 'h' : 'h'))
                $('.anni_p_3').html(birthday_days.toString() + ((lang == 'CH') ? '天' : 'd') + ' ' + birthday_hours.toString() + ((lang == 'CH') ? '小时' : 'h') + ' ' + birthday_mins.toString() + ((lang == 'CH') ? '分' : 'm'))
            }
        }
        if (countdown_time == 0) {
            $('.countdown').html(countdown_ver + " " + (lang == 'CH' ? '时间未知' : 'Time unknown') + countdown_note)
            return
        }
        if (diff < 0) {
            $('.countdown').html(countdown_ver + " " + (lang == 'CH' ? '00:00:00' : '00:00:00') + countdown_note)
            return
        }
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
            $('.countdown').html(countdown_ver + " " + hours + ":" + minutes + ":" + seconds + countdown_note)
        } else {
            if (days < 10) days = "0" + days
            $('.countdown').html(countdown_ver + " " + days + ":" + hours + ":" + minutes + ":" + seconds + countdown_note)
        }
    }

    var emote_block = {
        div: {
            div: [
                {
                    div: '',
                    class: 'as_left_2 keq_emote_div'
                },
                {
                    div: [
                        {
                            p: txt.TIT[lang],
                            class: 'as_left_name',
                            style: {
                                'font-weight': 'bold'
                            }
                        },
                        {
                            p: {
                                CH: '<a href="https://yuhengcup.wiki" target="_blank">yuhengcup.wiki</a> | <a href="https://space.bilibili.com/3546567522912510" target="_blank">b站@妮可少女</a>',
                                EN: '<a href="https://homdgcat.wiki" target="_blank">homdgcat.wiki</a> | <a href="http://t.me/homdgcat" target="_blank">t.me/homdgcat</a>'
                            }[lang],
                            class: 'as_left_name'
                        }
                    ],
                    class: 'as_right_2'
                }
            ],
            class: 'as_2'
        },
        class: 'a_section'
    }

    $('body').on('click', '._menu_', function () {
        popLinks(lang)
    })

    var this_avatar = {}
    var this_weapon = 0
    var this_relic = 0
    var cur_avatar_page = 2

    var this_avatar_vers = 0
    var this_avatar_cur_ver = 0

    var this_weapon_vers = 0
    var this_weapon_cur_ver = 0
    
    var global_var_weapon_rarity = 5

    var global_var_avatar_rarity = 5
    var global_var_avatar_element = {
        Phys: 0,
        Quantum: 0,
        Imaginary: 0,
        Ice: 0,
        Wind: 0,
        Fire: 0,
        Elec: 0,
    }
    var global_var_type = {
        Destruction: 0,
        Harmony: 0,
        Remembrance: 0,
        Erudition: 0,
        Hunt: 0,
        Preservation: 0,
        Abundance: 0,
        Nihility: 0,
    }

    if (anniversary) {
        $('body').on('click', render_anni)
        setInterval(render_anni_2, 1500)
    }

    function render_anni() {
        if ((this_avatar._id != 1221) && (this_avatar._id != 12210)) return
        $('.anni_mark').remove()
        $('.mon_body .a_section, .mon_body .a_section_small').each(function () {
            if ($(this).hasClass('no_char')) return
            $(this).render({
                div: [
                    {
                        img: '/homdgcat-res/UI/birthday-cake2.png'
                    },
                ],
                class: 'anni anni_mark',
                style: {
                    margin: '0'
                }
            })
        })
    }

    function render_anni_2() {
        if ((this_avatar._id != 1221) && (this_avatar._id != 12210)) return
        $('.head_left').each(function () {
            var rand_list = [
                '/images/emote/Yunli/1.png',
                '/images/emote/Yunli/2.png',
                '/images/emote/Yunli/3.png',
            ]
            var rand = rand_list[Math.floor(Math.random() * rand_list.length)]
            $(this).attr('src', rand)
        })
    }

    var pic_index = []
    var pic_show = 0
    var vid_show = 0
    if (lang == 'CH') {
        fetch('/Char/HSR.json')
            .then(x => x.json())
            .then(y => {
                pic_index = y
                if (check_pic_dl()) {
                    $('.pic_dl').css('display', 'flex')
                }
            })
    }

    var check_interval = 0
    var unchanged = 1
    
    var _relicitem = {}

    var loaded = []

    var diffCH = new Diff.Diff()
    diffCH.tokenize = function (v) {
        return v.split(/([^\x00-\x7F×])|(<br>)/)
    }
    var diffEN = new Diff.Diff()
    diffEN.tokenize = function (v) {
        return v.split(/( )|(<br>)/)
    }

    var ojb = document.getElementsByTagName("container")
    ojb[0].addEventListener("scroll", update)

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang3 + '/Avatar.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {
        
        Object.keys(_avatarskilltree).forEach(function (t) {
            loaded.push(parseInt(t))
        })
        Object.keys(_weapondesc).forEach(function (t) {
            loaded.push(parseInt(t))
        })
        console.log(loaded)
        
        cl_show = 0 
        if ($("#UPDATE").val()) {
            if ($("#UPDATE").val() == 1 || $("#UPDATE").val() == 3 || $("#UPDATE").val() == 17) {
                cl_show = 1
            }
        }
        up_show = 0 
        if ($("#UPDATE").val() && ($("#UPDATE").val() == 2 || $("#UPDATE").val() == 41)) {
            up_show = 1
        }
        hn_show = 0
        boss_show = 0
        if ($("#UPDATE").val() && ($("#UPDATE").val() == 7 || $("#UPDATE").val() == 11)) {
            boss_show = 1
        }
        boss_show_name = {
            CH: '怪物解析',
            EN: 'Boss Guides'
        }
        ann_show = 0 
        if ($("#UPDATE").val() && ($("#UPDATE").val() == 1221)) {
            ann_show = 1
        }

        var is_show_hn = 0
        for (const [temp_1, temp_2] of Object.entries(_changelog2)) {
            is_show_hn += temp_2.length
        }

        $('container').render({
            template: [
                {
                    div: [
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
                                {
                                    div: {
                                        img: '/homdgcat-res/UI/birthday-cake2.png'
                                    },
                                    class: 'cntd_emote_small',
                                    when: anniversary
                                },
                            ],
                            class: 'c2 c_f',
                            when: ($('#UPDATE').val() != 11) && ($('#UPDATE').val() != 17) && ($('#UPDATE').val() != 41)
                        },
                        /*{
                            p: '-',
                            class: 'countdown',
                            when: ($('#UPDATE').val() != 11) && ($('#UPDATE').val() != 17) && ($('#UPDATE').val() != 41)
                        },*/
                        {
                            section: [
                                {
                                    schedule: boss_show_name[lang],
                                    click: function (p) {
                                        renderBoss()
                                        boss_show = 1 - boss_show
                                        up_show = 0
                                        hn_show = 0
                                        cl_show = 0
                                        pic_show = 0
                                        vid_show = 0
                                        $('.up_all').hide()
                                        $('.hn_all').hide()
                                        $('.cl_all').hide()
                                        hide_pic()
                                        hide_vid()
                                        hide_ann()
                                        if (boss_show) {
                                            show_boss()
                                        } else {
                                            hide_boss()
                                        }
                                    },
                                    style: {
                                        width: 'max-content',
                                        padding: '10px 20px',
                                        'font-weight': 'bold',
                                        border: '2px solid #df903b',
                                        'background-color': boss_show ? '#27363E' : 'transparent',
                                        'color': boss_show ? '#eee' : '#000',
                                    },
                                    class: '__boss'
                                },
                                {
                                    schedule: txt.Changelog[lang],
                                    click: function (p) {
                                        renderCL($('.changelog select').val() || 0)
                                        cl_show = 1 - cl_show
                                        up_show = 0
                                        hn_show = 0
                                        boss_show = 0
                                        pic_show = 0
                                        vid_show = 0
                                        $('.up_all').hide()
                                        $('.hn_all').hide()
                                        $('.boss_all').hide()
                                        hide_pic()
                                        hide_vid()
                                        hide_ann()
                                        if (cl_show) {
                                            show_cl()
                                        } else {
                                            hide_cl()
                                        }
                                    },
                                    style: {
                                        width: 'max-content',
                                        padding: '10px 20px',
                                        'font-weight': 'bold',
                                        border: '2px solid #df903b',
                                        'background-color': cl_show ? '#27363E' : 'transparent',
                                        'color': cl_show ? '#eee' : '#000',
                                    },
                                    class: '__cl'
                                },
                                {
                                    schedule: txt.Upcoming[lang],
                                    click: function (p) {
                                        renderUp()
                                        up_show = 1 - up_show
                                        cl_show = 0
                                        hn_show = 0
                                        boss_show = 0
                                        pic_show = 0
                                        vid_show = 0
                                        $('.cl_all').hide()
                                        $('.hn_all').hide()
                                        $('.boss_all').hide()
                                        hide_pic()
                                        hide_vid()
                                        hide_ann()
                                        if (up_show) {
                                            show_up()
                                        } else {
                                            hide_up()
                                        }
                                    },
                                    style: {
                                        width: 'max-content',
                                        padding: '10px 20px',
                                        'font-weight': 'bold',
                                        border: '2px solid #df903b',
                                        'background-color': up_show ? '#27363E' : 'transparent',
                                        'color': up_show ? '#eee' : '#000',
                                    },
                                    class: '__up'
                                },
                                {
                                    schedule: txt.HNotes[lang],
                                    click: function (p) {
                                        renderHN()
                                        hn_show = 1 - hn_show
                                        cl_show = 0
                                        up_show = 0
                                        boss_show = 0
                                        pic_show = 0
                                        vid_show = 0
                                        $('.up_all').hide()
                                        $('.cl_all').hide()
                                        $('.boss_all').hide()
                                        hide_pic()
                                        hide_vid()
                                        hide_ann()
                                        if (hn_show) {
                                            show_hn()
                                        } else {
                                            hide_hn()
                                        }
                                    },
                                    style: {
                                        width: 'max-content',
                                        padding: '10px 20px',
                                        'font-weight': 'bold',
                                        border: '2px solid #df903b',
                                        'background-color': hn_show ? '#27363E' : 'transparent',
                                        'color': hn_show ? '#eee' : '#000',
                                    },
                                    class: '__hn',
                                    when: is_show_hn
                                },
                            ],
                            class: 'cl'
                        },
                        {
                            section: [
                                {
                                    schedule: '下载技能长图',
                                    click: function (p) {
                                        pic_show = 1 - pic_show
                                        cl_show = 0
                                        up_show = 0
                                        hn_show = 0
                                        boss_show = 0
                                        vid_show = 0
                                        $('.up_all').hide()
                                        $('.cl_all').hide()
                                        $('.hn_all').hide()
                                        $('.boss_all').hide()
                                        hide_vid()
                                        hide_ann()
                                        if (pic_show) {
                                            show_pic()
                                        } else {
                                            hide_pic()
                                        }
                                    },
                                    style: {
                                        width: 'max-content',
                                        padding: '10px 20px',
                                        'font-weight': 'bold',
                                        border: '2px solid #df903b',
                                        'background-color': pic_show ? '#27363E' : 'transparent',
                                        'color': pic_show ? '#eee' : '#000',
                                    },
                                    class: '__pic',
                                    when: lang == 'CH'
                                },
                                {
                                    schedule: (lang == 'CH') ? '实机演示' : 'Showcase Videos',
                                    click: function (p) {
                                        vid_show = 1 - vid_show
                                        pic_show = 0
                                        cl_show = 0
                                        up_show = 0
                                        hn_show = 0
                                        boss_show = 0
                                        $('.up_all').hide()
                                        $('.cl_all').hide()
                                        $('.hn_all').hide()
                                        $('.boss_all').hide()
                                        hide_pic()
                                        hide_ann()
                                        if (vid_show) {
                                            show_vid()
                                        } else {
                                            hide_vid()
                                        }
                                    },
                                    style: {
                                        width: 'max-content',
                                        padding: '10px 20px',
                                        'font-weight': 'bold',
                                        border: '2px solid #df903b',
                                        'background-color': vid_show ? '#27363E' : 'transparent',
                                        'color': vid_show ? '#eee' : '#000',
                                    },
                                    class: '__vid',
                                    when: _vid_index.length
                                },
                            ],
                            class: 'cl2',
                        },
                        {
                            section: [
                                {
                                    schedule: (lang == 'CH') ? '云璃一周年' : 'Yunli 1st Anniversary',
                                    click: function (p) {
                                        renderAnn()
                                        ann_show = 1 - ann_show
                                        vid_show = 0
                                        pic_show = 0
                                        cl_show = 0
                                        up_show = 0
                                        hn_show = 0
                                        boss_show = 0
                                        $('.up_all').hide()
                                        $('.cl_all').hide()
                                        $('.hn_all').hide()
                                        $('.boss_all').hide()
                                        hide_pic()
                                        hide_vid()
                                        if (ann_show) {
                                            show_ann()
                                        } else {
                                            hide_ann()
                                        }
                                    },
                                    style: {
                                        width: 'max-content',
                                        padding: '10px 20px',
                                        'font-weight': 'bold',
                                        border: '2px solid #dd0000',
                                        'background-color': ann_show ? '#27363E' : 'transparent',
                                        'color': ann_show ? '#eee' : '#000',
                                    },
                                    class: '__ann',
                                    when: anniversary_show
                                },
                            ],
                            class: 'cl3',
                        },
                        {
                            div: [
                                {
                                    div: {
                                        select: '',
                                        options: cl_select,
                                        style: {
                                            border: '2px solid black',
                                            'border-radius': '5px'
                                        }
                                    },
                                    class: 'changelog'
                                },
                                {
                                    div: [],
                                    class: 'cl_data',
                                    style: {
                                        'margin-top': '16px'
                                    }
                                }
                            ],
                            class: 'cl_all',
                            style: {
                                display: cl_show ? '' : 'none',
                            }
                        },
                        {
                            div: [
                                {
                                    div: [],
                                    class: 'up_data',
                                    style: {
                                        'margin-top': '-4px'
                                    }
                                }
                            ],
                            class: 'up_all',
                            style: {
                                display: up_show ? '' : 'none'
                            }
                        },
                        {
                            div: [
                                {
                                    div: [],
                                    class: 'hn_data',
                                    style: {
                                        'margin-top': '-4px'
                                    }
                                }
                            ],
                            class: 'hn_all',
                            style: {
                                display: hn_show ? '' : 'none'
                            }
                        },
                        {
                            div: [
                                {
                                    div: [],
                                    class: 'boss_data',
                                    style: {
                                        'margin-top': '-4px'
                                    }
                                }
                            ],
                            class: 'boss_all',
                            style: {
                                display: boss_show ? '' : 'none'
                            }
                        },
                        {
                            div: [
                                {
                                    div: [],
                                    class: 'pic_data',
                                    style: {
                                        'margin-top': '-4px'
                                    }
                                }
                            ],
                            class: 'pic_all',
                            style: {
                                display: 'none'
                            }
                        },
                        {
                            div: [
                                {
                                    div: [],
                                    class: 'vid_data',
                                    style: {
                                        'margin-top': '-4px'
                                    }
                                }
                            ],
                            class: 'vid_all',
                            style: {
                                display: 'none'
                            }
                        },
                        {
                            div: [
                                {
                                    div: [],
                                    class: 'ann_data',
                                    style: {
                                        'margin-top': '-4px'
                                    }
                                }
                            ],
                            class: 'ann_all',
                            style: {
                                display: ann_show ? '' : 'none'
                            }
                        },
                        {
                            hr: '',
                            style: {
                                margin: '0 0 20px',
                            },
                            id: 'point1'
                        },
                        {
                            section: [
                                {
                                    schedule: {
                                        img: imgpre + 'images/Misc/IconAvatarDetail.png',
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                    class: 'active _a'
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'images/Misc/IconAvatarLightCone.png',
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                    class: '_w'
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'images/Misc/IconRelicBody.png',
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                    class: '_r1'
                                },
                                {
                                    schedule: {
                                        img: imgpre + 'images/Misc/IconAvatarRelic.png',
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                    class: '_r2'
                                }
                            ],
                            class: 'a_w_r select_parts select_parts_size_1'
                        },
                        {
                            div: [],
                            class: 'area_pre'
                        },
                        {
                            div: [],
                            class: 'area'
                        }
                    ],
                    class: 'content'
                },
                {
                    popbodyy: '',
                    a: {
                        id: 'content_2'
                    },
                    class: 'content_2',
                    style: {
                        'min-height': lazy ? '' : '0'
                    }
                },
            ]
        })

        start_cntd()

        $('.content_2').hide()
        
        if ($("#UPDATE").val() == 3 || $("#UPDATE").val() == 11 || $("#UPDATE").val() == 17 || $("#UPDATE").val() == 41) {
            $('#point1').hide()
            $('.a_w_r').hide()
            $('.rar').hide()
            $('.area').hide()
            $('.area_pre').hide()
            $('.content').css('padding-bottom', '0px')
            $('.content').css('min-height', '0px')
        }
    
        if (avid) {
            avid = avid.replaceAll("_", "").replaceAll("-", "").replaceAll(" ", "").replaceAll("'", "").replaceAll("·", "").toUpperCase()
            if (avid == "CHANGE" || avid == "UPDATE") {
                renderCL($('.changelog select').val() || 0)
                cl_show = 1
                show_cl()
            }
            if (avid == "HIDDEN" || avid == "UPCOMING" || avid == "TEST" || avid == "FUTURE") {
                renderUp()
                up_show = 1
                show_up()
            }
            if (avid == "BOSS") {
                renderBoss()
                boss_show = 1
                show_boss()
            }
            if (_search_avatar[avid] != undefined) {
                popAvatar(_search_avatar[avid])
            } else if (_search_weapon[avid] != undefined) {
                popWeapon(_search_weapon[avid])
            } else if (_search_relic[avid] != undefined) {
                popRelic(_search_relic[avid])
            }
        }
    
        listAvatar()

        if (cl_show) {
            renderCL($('.changelog select').val() || 0)
            console.log("FINISH")
        }
        if (up_show) {
            renderUp()
            console.log("FINISH")
        }
        if (boss_show) {
            renderBoss()
            console.log("FINISH")
        }
        if (ann_show) {
            renderAnn()
            console.log("FINISH")
        }

        $('body').addClass(bg_name)

        if ($("#UPDATE").val() == 3 || $("#UPDATE").val() == 11|| $("#UPDATE").val() == 17 || $("#UPDATE").val() == 41) a_section_white()
        if (!lazy) a_section_white()
    }

    function renderCL(v) {
        switch_title(txt.Changelog[lang])
        $('.cl_data').empty().render(emote_block)
        rotate()
        var vn = cl_vers[v]
        var vo = cl_vers[v - 1] ? cl_vers[v - 1] : "v1"

        var added = _changelog_veradd[vn] ? _changelog_veradd[vn] : []
        added.forEach(function (t, j) {
            if (t.Priority) {
                ver_addfunction(t, j)
            }
        })
        var change_filename = (lang == 'CH') ? '改动汇总' : 'Changes Compilation'
        $('.cl_data').render({
            div: {
                schedule: (lang == 'CH') ? '下载' : 'Download',
                click: function (l) {
                    download(`/Char/HSR/${change_filename}/${VER_SR}.png`, `${VER_SR} ${change_filename}`)
                },
                style: {
                    width: 'max-content',
                    padding: '10px 20px',
                    'font-weight': 'bold',
                    border: '2px solid #eee',
                    'background-color': '#27363E',
                    'color': '#eee'
                },
                class: 'hover-shadow',
            },
            style: {
                width: '100%',
                display: 'flex',
                'justify-content': 'center'
            }
        })
        var relic_change = _changelog_relic[vn] ? _changelog_relic[vn] : []
        relic_change.forEach(function (t, j) {
            var img_icon = imgpre + 'images/itemicon/' + t.Icon
            $('.cl_data').render({
                div: [
                    {
                        div: [
                            {
                                img: img_icon,
                                class: 'head_left_',
                                a: {
                                    loading: lazy
                                }
                            },
                            {
                                p: t.Name + `<span id='3_${j}' style='white-space:pre;'></span>`,
                                style: {
                                    'margin-left': '10px'
                                },
                                class: 'head_right hr_0',
                            }
                        ],
                        class: 'a_section_head head_withimg'
                    },
                    {
                        div: [
                            {
                                p: function (k) {
                                    var piece_num = k.data.substring(0, 4)
                                    var data_left = k.data.substring(4)
                                    var index = data_left.indexOf('<br>@↓↓#')
                                    var data_old = data_left.substring(0, index)
                                    var data_new = data_left.substring(index + 8)
                                    var construct = piece_num + dif(data_old, data_new, 20)
                                    return construct.replaceAll("#", "</b></color><br>").replaceAll("@", "<color style='color:#f29e38'><b>").replaceAll("$", "#")
                                },
                                data: t.Changes,
                                style: {
                                    'margin-top': '0px'
                                },
                                when: t.Changes && t.Changes.length
                            },
                            {
                                p: function (k) {
                                    return dif(t.Old, t.New, -1).replaceAll("$", "#")
                                },
                                style: {
                                    'margin-top': '0px'
                                },
                                when: !(t.Changes && t.Changes.length)
                            }
                        ],
                        class: 'a_section_content',
                        style: {
                            
                        }
                    },
                ],
                class: 'a_section_skill'
            })
            $(`#3_${j}`).html(plus(t.Changes ? t.Changes.length : t.Num))
        })
        
        _diff_weapon.forEach(function (i, j) {
            var tname = _weapon[_search_weapon[i]].Name
            var ticon = _weapon[_search_weapon[i]].Pic
            var shows_1 = _changelog_avatar[i] ? _changelog_avatar[i][vn] : []
            if (!shows_1) shows_1 = []
            var shows = shows_1.concat(d_weapon(_weapon[_search_weapon[i]], vo, vn))
            if (!shows.length) return
            $('.cl_data').render({
                div: [
                    {
                        div: [
                            {
                                img: imgpre + `images/lightconemediumicon/${ticon}`,
                                class: 'head_left_',
                                style: {
                                    width: 'auto'
                                },
                                a: {
                                    loading: lazy
                                }
                            },
                            {
                                p: tname + `<span id='2_${j}' style='white-space:pre;'></span>`,
                                style: {
                                    'margin-left': '10px'
                                },
                                class: 'head_right hr_0',
                            }
                        ],
                        class: 'a_section_head head_withimg'
                    },
                    {
                        div: {
                            p: function (k) {
                                return ppics(k.data.replaceAll("#", "</color> ").replaceAll("@", "<color style='color:#f29e38'>").replaceAll("``", "<color style='color:#f29e38'><b>").replaceAll("`", "</b></color><br>").replaceAll("$", "#"))
                            },
                            data: shows,
                            style: {
                                'margin-top': '20px'
                            }
                        },
                        class: 'a_section_content',
                        style: {
                            
                        }
                    },
                ],
                class: 'a_section_skill'
            })
            $(`#2_${j}`).html(plus(shows.length))
        })

        _diff_avatar.forEach(function (i, j) {
            var tname = _avatar[_search_avatar[i]].Name
            var tcolor = _avatar[_search_avatar[i]].Element
            var ticon = _avatar[_search_avatar[i]].Icon.replaceAll("avatarshopicon", "avataricon").replaceAll("/Avatar/", "/avatar/")
            var shows_1 = _changelog_avatar[i] ? _changelog_avatar[i][vn] : []
            if (!shows_1) shows_1 = []
            var shows = shows_1.concat(d_avatar(_avatar[_search_avatar[i]], vo, vn))
            if (!shows.length) return
            $('.cl_data').render({
                div: [
                    {
                        div: [
                            {
                                img: imgpre + `images/${ticon}.png`,
                                class: 'head_left_',
                                style: {
                                    width: 'auto'
                                },
                                a: {
                                    loading: lazy
                                }
                            },
                            {
                                p: tname + `<span id='1_${j}' style='white-space:pre;'></span>`,
                                style: {
                                    color: tcolor ? ('#' + elemcolor[tcolor]) : '',
                                    'margin-left': '10px'
                                },
                                class: 'head_right hr_0',
                            }
                        ],
                        class: 'a_section_head head_withimg'
                    },
                    {
                        div: {
                            p: function (k) {
                                return ppics(k.data.replaceAll("#", "</color> ").replaceAll("@", "<color style='color:#f29e38'>").replaceAll("``", "<color style='color:#f29e38'><b>").replaceAll("`", "</b></color><br>").replaceAll("$", "#"))
                            },
                            data: shows,
                            style: {
                                'margin-top': '20px'
                            }
                        },
                        class: 'a_section_content',
                        style: {
                            
                        }
                    },
                ],
                class: 'a_section_skill'
            })
            $(`#1_${j}`).html(plus(shows.length))
        })
        
        var added = _changelog_veradd[vn] ? _changelog_veradd[vn] : []
        added.forEach(function (t, j) {
            if (t.Priority) return
            ver_addfunction(t, j)
        })
    }

    function ver_addfunction (t, j) {
        var img_icon = t.Icon ? (imgpre + 'images/' + t.Icon) : (imgpre + 'images/GCG_UI/Monster.png')
        if (!t._id) {
            $('.cl_data').render({
                div: [
                    {
                        div: [
                            {
                                img: img_icon,
                                class: 'head_left_',
                                style: {
                                    'width': 'auto'
                                },
                                a: {
                                    loading: lazy
                                }
                            },
                            {
                                p: t.Name + `<span id='3_${j}' style='white-space:pre;'></span>`,
                                style: {
                                    'margin-left': '10px'
                                },
                                class: 'head_right hr_0',
                            }
                        ],
                        class: 'a_section_head head_withimg'
                    },
                    {
                        div: {
                            p: function (k) {
                                return k.data.replaceAll("#", "</color> ").replaceAll("@", "<color style='color:#f29e38'>").replaceAll("``", "<color style='color:#f29e38'><b>").replaceAll("`", "</b></color><br>").replaceAll("$", "#")
                            },
                            data: t.Notes,
                            style: {
                                'margin-top': '20px'
                            }
                        },
                        class: 'a_section_content',
                        style: {
                            
                        }
                    },
                ],
                class: 'a_section_skill'
            })
            $(`#3_${j}`).html(plus(t.Notes.length))
        } else {
            $('.cl_data').render({
                div: [
                    {
                        div: [
                            {
                                img: img_icon,
                                class: 'head_left_',
                                style: {
                                    'height': 'auto'
                                },
                                a: {
                                    loading: lazy
                                }
                            },
                            {
                                p: t.Name + `<span id='4_${j}' style='white-space:pre;'></span>`,
                                style: {
                                    'margin-left': '10px'
                                },
                                class: 'head_right hr_0',
                            }
                        ],
                        class: 'a_section_head head_withimg'
                    },
                    {
                        div: [
                            {
                                p: '<b>ID ' + t._id + '</b>',
                                style: {
                                    'margin-top': '5px'
                                },
                            },
                            {
                                p: t.HP ? (`<img src="${imgpre + 'images/Misc/_HPBIG.png'}" class="climg_"> <b>` + t.HP[0] + `</b> <color style='color:#f29e38'><color style="margin-left:5px;margin-right:5px">→</color></color> <b>` + t.HP[1] + '</b>') : '',
                                style: {
                                    'margin-top': '5px'
                                },
                                when: t.HP
                            },
                            {
                                p: t.SPD ? (`<img src="${imgpre + 'images/Misc/_SPDBIG.png'}" class="climg_"> <b>` + (t.SPD[0] * 1.2).toFixed(0) + `</b> <color style='color:#f29e38'><color style="margin-left:5px;margin-right:5px">→</color></color> <b>` + (t.SPD[1] * 1.2).toFixed(0) + '</b><color style="margin-left:8px">(Lv82)</color>') : '',
                                style: {
                                    'margin-top': '5px'
                                },
                                when: t.SPD && (t.Rank == 1)
                            },
                            {
                                p: t.SPD ? (`<img src="${imgpre + 'images/Misc/_SPDBIG.png'}" class="climg_"> <b>` + (t.SPD[0] * 1.32).toFixed(0) + `</b> <color style='color:#f29e38'><color style="margin-left:5px;margin-right:5px">→</color></color> <b>` + (t.SPD[1] * 1.32).toFixed(0) + '</b><color style="margin-left:8px">(Lv95)</color>') : '',
                                style: {
                                    'margin-top': '5px'
                                },
                                when: t.SPD && (t.Rank != 0)
                            },
                            {
                                p: function (o) {
                                    if (!t.Stance) return
                                    if (!t.Stance.length) return
                                    var out_o = ""
                                    t.Stance[0][1].forEach(function (s) {
                                        out_o += `<img src="${imgpre}images/Element/${s}.png" class="climg_">`
                                    })
                                    out_o += ' <b>' + (t.Stance[0][0] * 10).toFixed(0) + '</b> '
                                    var out_n = ""
                                    t.Stance[1][1].forEach(function (s) {
                                        out_n += `<img src="${imgpre}images/Element/${s}.png" class="climg_">`
                                    })
                                    out_n += ' <b>' + (t.Stance[1][0] * 10).toFixed(0) + '</b> '
                                    return out_o + ` <color style='color:#f29e38'><color style="margin-left:5px;margin-right:5px">→</color></color> ` + out_n
                                },
                                style: {
                                    'margin-top': '5px'
                                },
                                when: t.Stance
                            }
                        ],
                        class: 'a_section_content',
                        style: {
                            
                        }
                    },
                ],
                class: 'a_section_skill'
            })
            var cnt_ = 0
            if (t.HP) cnt_ += 1
            if (t.SPD) cnt_ += 1
            if (t.Stance) cnt_ += 1
            $(`#4_${j}`).html(plus(cnt_))
        }
    }

    function d_avatar(av_data, vo, vn) {
        var oo = {}
        var nn = {}
        var out = []
        var skill_list = av_data.Skills
        if (av_data.ExtraSkills && av_data.ExtraSkills.length) {
            skill_list = av_data.ExtraSkills.concat(skill_list)
        }
        if (av_data.BydSkills && av_data.BydSkills.length) {
            skill_list = av_data.BydSkills.concat(skill_list)
        }
        for (it in skill_list) {
            id = skill_list[it]
            oo = _avatarskill[id][vo]
            nn = _avatarskill[id][vn]
            var this_contents = ""

            if (!oo) {
                oo = {
                    "Name": "",
                    "MaxLevel": 9,
                    "Type": "",
                    "Tag": "",
                    "Desc": "",
                    "Params": [
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                    ],
                    "BP": 0,
                    "SPAdd": 0,
                    "AttackType": "Normal",
                    "Stance": [
                        0.0,
                        0.0,
                        0.0
                    ],
                    "Icon": ""
                }
            }
            if (!nn) {
                nn = {
                    "Name": "",
                    "MaxLevel": 9,
                    "Type": "",
                    "Tag": "",
                    "Desc": "",
                    "Params": [
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                    ],
                    "BP": 0,
                    "SPAdd": 0,
                    "AttackType": "Normal",
                    "Stance": [
                        0.0,
                        0.0,
                        0.0
                    ],
                    "Icon": ""
                }
            }

            var obp = oo.BP ? oo.BP : 0
            var nbp = nn.BP ? nn.BP : 0
            if (obp != nbp) {
                this_contents += `<br><img src="${imgpre + 'images/Misc/PointBPFull.png'}" class="climg">` + ((obp >= 0) ? ('+' + obp) : obp) + ` @<color style="margin-left:5px;margin-right:5px">→</color># <img src="${imgpre + 'images/Misc/PointBPFull.png'}" class="climg">` + ((nbp >= 0) ? ('+' + nbp) : nbp)
            }

            var ospa = oo.SPAdd ? oo.SPAdd : 0
            var nspa = nn.SPAdd ? nn.SPAdd : 0
            if (ospa != nspa) {
                this_contents += `<br><img src="${imgpre + 'images/AddProp/IconEnergyRecovery.png'}" class="climg">` + ((ospa >= 0) ? ('+' + ospa) : ospa) + ` @<color style="margin-left:5px;margin-right:5px">→</color># <img src="${imgpre + 'images/AddProp/IconEnergyRecovery.png'}" class="climg">` + ((nspa >= 0) ? ('+' + nspa) : nspa)
            }

            var ospn = oo.SPNeed ? oo.SPNeed : 0
            var nspn = nn.SPNeed ? nn.SPNeed : 0
            if (ospn != nspn) {
                this_contents += `<br><img src="${imgpre + 'images/AddProp/IconEnergyLimit.png'}" class="climg">` + ospn + ` @<color style="margin-left:5px;margin-right:5px">→</color># <img src="${imgpre + 'images/AddProp/IconEnergyLimit.png'}" class="climg">` + nspn
            }

            var ost = av_skill_stance(av_data, oo)
            var nst = av_skill_stance(av_data, nn)
            if (ost != nst) {
                this_contents += `<br><img src="${imgpre}images/Element/${av_data.Element}.png" class="climg_">` + ost + ` @<color style="margin-left:5px;margin-right:5px">→</color># <img src="${imgpre}images/Element/${av_data.Element}.png" class="climg_">` + nst
            }

            var odesc = av_skill_desc(oo)
            var ndesc = av_skill_desc(nn)
            if (odesc != ndesc) {
                this_contents += "<br>" + dif(odesc, ndesc, 20)
                var o_splitted = splitted(oo)
                var n_splitted = splitted(nn)
                for (const s of n_splitted) {
                    if (!o_splitted.includes(s)) {
                        //this_contents += '<br>' + s.replaceAll("<color style='color:#f29e38;'>", "<color style='color:$00cc00;'>").replaceAll("<color style='color:#f29e38;'>", "<color style='color:$00cc00;'>")
                    }
                }
            }

            if (this_contents.length) {
                out.push('<b>@' + nn.Name + '# ' + nn.Type + '</b>' + this_contents)
            }
        }
        var o_t = _avatarskilltree[av_data._id][vo]
        var n_t = _avatarskilltree[av_data._id][vn]
        if (!o_t.Tree4 || !Object.keys(o_t.Tree4).length) o_t.Tree4 = {
            Name: '',
            Desc: ''
        }
        if (!n_t.Tree4 || !Object.keys(n_t.Tree4).length) n_t.Tree4 = {
            Name: '',
            Desc: ''
        }
        var o_add = av_skilltree_addprop(o_t.Add)
        var n_add = av_skilltree_addprop(n_t.Add)
        if (o_add != n_add) {
            out.push(dif(o_add, n_add, 0))
        }
        oo = o_t.Tree1.Desc.replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
        nn = n_t.Tree1.Desc.replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
        if (oo != nn) {
            out.push('<b>@' + n_t.Tree1.Name + '# T1' + '</b><br>' + dif(oo, nn, 16))
        }
        oo = o_t.Tree2.Desc.replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
        nn = n_t.Tree2.Desc.replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
        if (oo != nn) {
            out.push('<b>@' + n_t.Tree2.Name + '# T2' + '</b><br>' + dif(oo, nn, 16))
        }
        oo = o_t.Tree3.Desc.replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
        nn = n_t.Tree3.Desc.replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
        if (oo != nn) {
            out.push('<b>@' + n_t.Tree3.Name + '# T3' + '</b><br>' + dif(oo, nn, 16))
        }
        oo = o_t.Tree4.Desc.replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
        nn = n_t.Tree4.Desc.replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
        if (oo != nn) {
            out.push('<b>@' + n_t.Tree4.Name + '# T3' + '</b><br>' + dif(oo, nn, 16))
        }
        for (it in av_data.Ranks) {
            id = av_data.Ranks[it]
            oo = _avatarrank[id][vo].Desc.replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
            nn = _avatarrank[id][vn].Desc.replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
            if (oo != nn) {
                out.push('<b>@' + _avatarrank[id][vn].Name + '# E' + (parseInt(it) + 1) + '</b><br>' + dif(oo, nn, 16))
            }
        }
        return out
    }

    function av_skill_desc(S) {
        var recommendLV = 1
        if (S.MaxLevel == 15) recommendLV = 10
        if (S.MaxLevel == 9) recommendLV = 6
        if (S.MaxLevel == 10) recommendLV = 6
        var out = param(S.Desc, S.Params ? S.Params[recommendLV - 1] : [])
        var ind = out.indexOf("<br><br><color style='color:#f29e38;'><b>")
        if (ind == -1) ind = out.length - 1
        return out.substring(0, ind)
    }

    function splitted(S) {
        var recommendLV = 1
        if (S.MaxLevel == 15) recommendLV = 10
        if (S.MaxLevel == 9) recommendLV = 6
        if (S.MaxLevel == 10) recommendLV = 6
        var out = param(S.Desc, S.Params ? S.Params[recommendLV - 1] : [])
        return out.split('<br><br>').slice(1)
    }

    function av_skill_stance(avd, S) {
        if (S.Stance) {
            var stance_0 = S.Stance[0] * 10
            var stance_1 = S.Stance[1] * 10
            var stance_2 = S.Stance[2] * 10
            if (!Number.isInteger(stance_0)) {
                stance_0 = (stance_0 * 3).toFixed(0) + "/3"
            }
            if (!Number.isInteger(stance_1)) {
                stance_1 = (stance_1 * 3).toFixed(0) + "/3"
            }
            if (!Number.isInteger(stance_2)) {
                stance_2 = (stance_2 * 3).toFixed(0) + "/3"
            }
            var stanceshow = '-' + (stance_0 ? ('| ' + txt.Avatar_StanceBreak_Specific[0][lang3] + "<color style='color:#" + elemcolor[avd.Element] + "'><b>" + stance_0 + '</b></color> ') : '') + (stance_1 ? ('| ' + txt.Avatar_StanceBreak_Specific[1][lang3] + "<color style='color:#" + elemcolor[avd.Element] + "'><b>" + stance_1 + '</b></color> ') : '') + (stance_2 ? ('| ' + txt.Avatar_StanceBreak_Specific[2][lang3] + "<color style='color:#" + elemcolor[avd.Element] + "'><b>" + stance_2 + '</b></color> ') : '')
        } else {
            var stanceshow = ''
        }
        return stanceshow.replace("-| ", "")
    }

    function av_skilltree_addprop(addprops) {
        var out = ""
        for (const [p, x] of Object.entries(addprops)) {
            if (p == 'SpeedDelta') {
                var xshow = '+' + x.toFixed(1) + '<color style="margin-right:5px;"></color>'
            } else {
                var xshow = '+' + (x * 100).toFixed(1) + '%' + '<color style="margin-right:5px;"></color>'
            }
            out += `<img src='${imgpre}images/AddProp/${_propiconname[p]}' class='climg' style='margin-left:0;margin-right:-5px'> ${xshow}`
        }
        return out
    }

    function d_weapon(wpn_data, vo, vn) {
        var o_s = _weaponskill[wpn_data._id][vo]
        var n_s = _weaponskill[wpn_data._id][vn]
        var o_d = "-"
        var n_d = "-"
        for (i in o_s.Desc) {
            o_d += '<br>' + o_s.Desc[i]
        }
        for (i in n_s.Desc) {
            n_d += '<br>' + n_s.Desc[i]
        }
        o_d = o_d.replace("-<br>", "").replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
        n_d = n_d.replace("-<br>", "").replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#").replaceAll("<u>", "").replaceAll("</u>", "")
        if (o_d != n_d) {
            return ['@<b>' + n_s.Name + '</b>#<br>' + dif(o_d, n_d, 16)]
        }
        return []
    }

    $('body').on('change', '.changelog select', function () {
        renderCL($('.changelog select').val())
    })

    $('body').on('click', '.zhankai', function () {
        $(this).siblings('.a_section_content').toggle()
    })

    function renderUp() {
        switch_title(txt.Upcoming[lang])
        $('.up_data').empty().render(emote_block)
        rotate()
        _hidden.forEach(function (t, i) {
            $('.up_data').render({
                div: [
                    {
                        div: [
                            {
                                p: t.Name,
                                style: {
                                    color: t.Color ? ('#' + elemcolor[t.Color]) : '',
                                    'text-align': 'center'
                                }
                            },
                            {
                                p: t.Date + '<br><color style="font-size:1em;color:#FFD780;">' + ehe + ((lang == 'CH') ? t.Ver.replaceAll('Live', '正式服') : t.Ver) + '</b></color>',
                                style: {
                                    'font-size': '0.8em',
                                    'font-weight': 'normal',
                                    width: '100%',
                                    'text-align': 'center',
                                    'margin-top': '5px',
                                },
                            },
                            {
                                p: {
                                    img: imgpre + 'images/GCG_UI/Monster.png',
                                    height: '1.2em',
                                    a: {
                                        loading: lazy
                                    }
                                },
                                when: t.Mon,
                                style: {
                                    'width': '100%',
                                    'text-align': 'center',
                                    'margin-top': '10px',
                                    'margin-bottom': '-10px'
                                }
                            },
                            {
                                div: {
                                    p: '＋',
                                },
                                style: {
                                    'width': '100%',
                                    'display': 'flex',
                                    'justify-content': 'center',
                                    cursor: 'pointer',
                                    'margin-top': '-5px',
                                    'margin-bottom': '-5px',
                                    'font-size': '1.4em'
                                },
                                class: 'show_up',
                                when: $("#UPDATE").val() != 41,
                                a: {
                                    'data-id': '_' + i,
                                    'data-show': 'no'
                                }
                            }
                        ],
                        class: 'a_section_head head_withimg',
                        style: {
                            'justify-content': 'center',
                        }
                    },
                    {
                        div: function (k) {
                            var has_pic = 0
                            if (t.Figures && t.Figures.length) {
                                has_pic = 1
                                $(k.container).render({
                                    template: {
                                        div: {
                                            img: function (l) {
                                                return imgpre + 'images/' + l.data + '.png'
                                            },
                                            data: t.Figures,
                                            class: 'figure',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        class: 'figure_wrap'
                                    }
                                })
                            }
                            if (t.Pics && t.Pics.length) {
                                has_pic = 1
                                $(k.container).render({
                                    template: {
                                        div: {
                                            img: function (l) {
                                                return imgpre + 'images/' + l.data + '.png'
                                            },
                                            data: t.Pics,
                                            class: 'figure_2',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        class: 'figure_wrap'
                                    }
                                })
                            }
                            if (!has_pic && !t.NoEmote) {
                                var emote = Math.ceil(Math.random() * emote_num)
                                while (unused_emotes.includes(emote)) {
                                    emote = Math.ceil(Math.random() * emote_num)
                                }
                                $(k.container).render({
                                    template: {
                                        div: {
                                            img: imgpre + 'images/emote/Yunli/' + emote + '.png',
                                            class: 'emote',
                                            a: {
                                                loading: lazy
                                            },
                                        },
                                        class: 'figure_wrap',
                                    }
                                })
                            }
                            t.Notes.forEach(function (t) {
                                if (t.Hidden) return
                                $(k.container).render({
                                    template: {
                                        p: custom_string(t, 'ffd780'),
                                        style: {
                                            'margin': '15px 0'
                                        }
                                    }
                                })
                            })
                        },
                        class: 'a_section_content s_' + i,
                        style: {
                            'display': ($("#UPDATE").val() != 41) ? 'none' : ''
                        }
                    },
                ],
                class: 'a_section',
                style: {
                    display: t.Hidden ? 'none' : ''
                }
            })
        })
    }

    $('body').on('click', '.emote', function () {
        var emote = Math.ceil(Math.random() * emote_num)
        while (unused_emotes.includes(emote)) {
            emote = Math.ceil(Math.random() * emote_num)
        }
        this.src = '/images/emote/Yunli/' + emote + '.png'
        
    })

    function renderHN() {
        switch_title(txt.HNotes[lang])
        $('.hn_data').empty().render(emote_block)
        rotate()
        for (const [i, t] of Object.entries(_changelog2)) {
            if (!t.length) continue
            if (_search_avatar[i] != undefined) {
                var tname = _avatar[_search_avatar[i]].Name
                var tcolor = _avatar[_search_avatar[i]].Element
                var ticon = _avatar[_search_avatar[i]].Path
            } else if (_search_weapon[i] != undefined) {
                var tname = _weapon[_search_weapon[i]].Name
                var tcolor = ''
                var ticon = _weapon[_search_weapon[i]].Path
            } else if (_search_relic[i] != undefined) {
                var tname = _relic[_search_relic[i]].Name
                var tcolor = ''
                var ticon = (parseInt(i) > 200) ? 'IconAvatarRelic' : 'IconRelicBody'
            } else {
                continue
            }
            $('.hn_data').render({
                div: [
                    {
                        div: [
                            {
                                img: imgpre + `images/Paths/${ticon}.png`,
                                class: 'head_left_',
                                a: {
                                    loading: lazy
                                }
                            },
                            {
                                p: tname + `<span style='white-space:pre;'>${plus(t.length)}</span>`,
                                style: {
                                    color: tcolor ? ('#' + elemcolor[tcolor]) : '',
                                    'margin-left': '10px'
                                },
                                class: 'head_right hr_0',
                            }
                        ],
                        class: 'a_section_head head_withimg zhankai'
                    },
                    {
                        div: {
                            ul: {
                                li: function (k) {
                                    return custom_string(k.data, 'ffd780')
                                },
                                data: t,
                                style: {
                                    'margin-top': '10px'
                                }
                            },
                        },
                        class: 'a_section_content',
                        style: {
                            display: 'none'
                        }
                    },
                ],
                class: 'a_section'
            })
        }
    }

    function renderBoss() {
        switch_title(boss_show_name[lang])
        $('.boss_data').empty().render(emote_block)
        rotate()
        _bossguide.forEach(function (t, i) {
            var boss_mons = []
            t.Monsters.forEach(function (sm_mon) {
                var smid = sm_mon._id
                var summon_elem_contents = []
                sm_mon.Weak.forEach(function (k) {
                    summon_elem_contents.push({
                        img: '/images/Element/' + k + '.png',
                        class: 'statpageicon_small',
                        style: {
                            margin: '0'
                        }
                    })
                })
                var st = sm_mon.Stance.toFixed(0) + (sm_mon.StanceCount ? ('×' + sm_mon.StanceCount) : '')
                var s = '<color style="color:#f29e38">' + sm_mon.HP.toFixed(0) + '</color>'
                if (sm_mon.HPCount && sm_mon.HPCount > 1) {
                    s += ' ×' + sm_mon.HPCount
                }
                var this_summon = {
                    a: '/sr/monster/' + smid,
                    t: [
                        {
                            div: {
                                img: '/images/' + sm_mon.Figure,
                                class: 'summon_icon'
                            },
                            style: {
                                width: '100%',
                                display: 'flex',
                                'justify-content': 'center',
                                margin: '0'
                            }
                        },
                        {
                            div: summon_elem_contents.concat({
                                span: st,
                                class: 'summon_elem_span'
                            }),
                            class: 'summon_elem',
                            a: {
                                'data-id': smid
                            }
                        },
                        {
                            p: s,
                            class: 'summon_name',
                            a: {
                                'data-id': smid
                            }
                        }
                    ],
                    class: 'summon_panel hover-shadow',
                    attr: {
                        target: '_blank',
                        'data-id': smid,
                    }
                }
                boss_mons.push(this_summon)
            })
            var boss_notes = [
                {
                    div: boss_mons,
                    class: 'summon_wrap summon_wrap_' + i,
                    style: {
                        display: 'flex',
                        'flex-wrap': 'wrap',
                        width: '100%',
                        'justify-content': 'center',
                        'margin': '15px 0 0'
                    }
                },
            ]
            t.Notes.forEach(function (note) {
                var descs = []
                if (note.Title && note.Title.length) {
                    descs.push(`<color style="color:$ffd780"><b>${note.Title}</b></color>`)
                }
                if (note.Desc && note.Desc.length) {
                    descs.push(note.Desc)
                }
                if (note.DescList && note.DescList.length) {
                    descs = descs.concat(note.DescList)
                }
                boss_notes.push({
                    p: descs.join("<br>").replaceAll("#", "</color>").replaceAll("@", "<color style='color:#FFD780;'>").replaceAll("$", "#"),
                    style: {
                        margin: '15px 0'
                    },
                    class: 'boss_desc'
                })
            })
            $('.boss_data').render({
                div: [
                    {
                        div: [
                            {
                                p: t.Name,
                                style: {
                                    'text-align': 'center',
                                    'margin-top': '5px'
                                }
                            },
                            {
                                div: {
                                    img: '/images/' + t.Icon,
                                },
                                class: 'boss_icon',
                                style: {
                                    margin: '15px 0 0'
                                }
                            },
                            {
                                p: '<color style="color:#FFACFF;">' + ehe + '</b></color>',
                                style: {
                                    'font-size': '0.8em',
                                    'font-weight': 'normal',
                                    width: '100%',
                                    'text-align': 'center',
                                    'margin-top': '15px',
                                },
                            },
                            {
                                div: {
                                    p: '＋',
                                },
                                style: {
                                    'width': '100%',
                                    'display': 'flex',
                                    'justify-content': 'center',
                                    cursor: 'pointer',
                                    'margin-top': '0px',
                                    'margin-bottom': '-5px',
                                    'font-size': '1.4em'
                                },
                                class: 'show_up',
                                a: {
                                    'data-id': '_' + i,
                                    'data-show': 'no'
                                },
                                when: (window.innerWidth < 1000)
                            }
                        ],
                        class: 'a_section_head head_withimg',
                        style: {
                            'justify-content': 'center',
                        }
                    },
                    {
                        div: boss_notes,
                        class: 'a_section_content s_' + i,
                        style: {
                            'display': (window.innerWidth < 1000) ? 'none' : '',
                            'margin-top': '-12px',
                        }
                    },
                ],
                class: (window.innerWidth < 1000) ? 'a_section' : 'a_section_small',
                style: {
                    display: t.Hidden ? 'none' : ''
                }
            })
        })
    }

    function renderAnn() {
        switch_title((lang == 'CH') ? '云璃一周年' : 'Yunli 1st Anniversary')
        $('.ann_data').empty().render(emote_block)
        rotate()
        $('.ann_data').render({
            div: [
                {
                    div: '111',
                    class: 'a_section_head',
                    style: {
                        'text-align': 'center'
                    }
                },
                {
                    div: '222',
                    class: 'a_section_content',
                    style: {
                        'text-align': 'center'
                    }
                }
            ],
            class: 'a_section'
        })
    }

    $('body').on('click', '.show_up', function () {
        var shows = $(this).attr('data-show')
        var jd = $(this).attr('data-id')
        if (shows == 'no') {
            $(this).attr('data-show', 'yes')
            $('.s' + jd).show()
        } else {
            $(this).attr('data-show', 'no')
            $('.s' + jd).hide()
        }
    })

    $('body').on('click', '.a_w_r schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        if ($(this).hasClass('_a')) {
            a_w_r = 1
            listAvatar()
            $('.rar').show()
        } else if ($(this).hasClass('_w')) {
            a_w_r = 2
            listWeapon()
            $('.rar').show()
        } else if ($(this).hasClass('_r1')) {
            a_w_r = 3
            listRelic(1)
            $('.rar').hide()
        } else {
            a_w_r = 4
            listRelic(2)
            $('.rar').hide()
        }
    })

    function listAvatar() {
        $('.area_pre').empty().render({
            template: [
                {
                    section: [
                        {
                            schedule: {
                                span: '5★'
                            },
                            a: {
                                'data-id': 5
                            },
                            class: (global_var_avatar_rarity == 5) ? 'active' : ''
                        },
                        {
                            schedule: {
                                span: '4★'
                            },
                            a: {
                                'data-id': 4
                            },
                            class: (global_var_avatar_rarity == 4) ? 'active' : ''
                        },
                    ],
                    class: 'avatar-rarity select_parts select_parts_size_2'
                },
                {
                    section: [
                        {
                            schedule: {
                                img: '/images/Element/Phys.png'
                            },
                            a: {
                                'data-id': 'Phys'
                            },
                        },
                        {
                            schedule: {
                                img: '/images/Element/Quantum.png'
                            },
                            a: {
                                'data-id': 'Quantum'
                            },
                        },
                        {
                            schedule: {
                                img: '/images/Element/Imaginary.png'
                            },
                            a: {
                                'data-id': 'Imaginary'
                            },
                        },
                        {
                            schedule: {
                                img: '/images/Element/Ice.png'
                            },
                            a: {
                                'data-id': 'Ice'
                            },
                        },
                        {
                            schedule: {
                                img: '/images/Element/Wind.png'
                            },
                            a: {
                                'data-id': 'Wind'
                            },
                        },
                        {
                            schedule: {
                                img: '/images/Element/Fire.png'
                            },
                            a: {
                                'data-id': 'Fire'
                            },
                        },
                        {
                            schedule: {
                                img: '/images/Element/Elec.png'
                            },
                            a: {
                                'data-id': 'Elec'
                            },
                        },
                    ],
                    class: 'avatar-elem select_parts select_parts_size_3'
                },
                {
                    section: [
                        {
                            schedule: {
                                img: '/images/Paths/Destruction.png'
                            },
                            a: {
                                'data-id': 'Destruction'
                            },
                            class: global_var_type.Destruction ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Harmony.png'
                            },
                            a: {
                                'data-id': 'Harmony'
                            },
                            class: global_var_type.Harmony ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Remembrance.png'
                            },
                            a: {
                                'data-id': 'Remembrance'
                            },
                            class: global_var_type.Remembrance ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Erudition.png'
                            },
                            a: {
                                'data-id': 'Erudition'
                            },
                            class: global_var_type.Erudition ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Hunt.png'
                            },
                            a: {
                                'data-id': 'Hunt'
                            },
                            class: global_var_type.Hunt ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Preservation.png'
                            },
                            a: {
                                'data-id': 'Preservation'
                            },
                            class: global_var_type.Preservation ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Abundance.png'
                            },
                            a: {
                                'data-id': 'Abundance'
                            },
                            class: global_var_type.Abundance ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Nihility.png'
                            },
                            a: {
                                'data-id': 'Nihility'
                            },
                            class: global_var_type.Nihility ? 'active' : ''
                        },
                    ],
                    class: 'avatar-type select_parts select_parts_size_4'
                },
            ]
        })
        $('.area').empty()
        _avatar.forEach(function (t, i) {
            var stats = t.Stats
            if (!stats) {
                stats = {
                    HP: 0,
                    ATK: 0,
                    DEF: 0,
                    SPD: 0,
                    Aggro: 0
                }
            }
            $('.area').render({
                template: {
                    div: [
                        {
                            p: t.Ver ? t.Ver : '???',
                            style: {
                                'font-weight': 'bold'
                            },
                            class: 'av'
                        },
                        {
                            img: no_skillicon.includes(t._id) ? (imgpre + `images/avatarshopicon/999.png`) : (imgpre + `images/${t.Icon.replaceAll('/Avatar/', '/avatar/')}.png`),
                            class: 'avatar-head',
                            event: {
                                error: function (d) {
                                    $(d.sender).remove()
                                }
                            },
                            a: {
                                loading: lazy
                            },
                            when: (window.innerWidth > 500) && !April_1st
                        },
                        {
                            img: '/images/avatarshopicon/April1stOthers.png',
                            class: 'avatar-head',
                            event: {
                                error: function (d) {
                                    $(d.sender).remove()
                                }
                            },
                            a: {
                                loading: lazy
                            },
                            when: (window.innerWidth > 500) && April_1st
                        },
                        {
                            div: {
                                img: no_skillicon.includes(t._id) ? (imgpre + `images/avataricon/avatar/999.png`) : (imgpre + `images/${t.Icon.replaceAll('/Avatar/', '/avatar/').replaceAll('avatarshopicon', 'avataricon')}.png`),
                            },
                            class: 'avatar-head-slim',
                            event: {
                                error: function (d) {
                                    $(d.sender).remove()
                                }
                            },
                            a: {
                                loading: lazy
                            },
                            when: (window.innerWidth <= 500) && !April_1st
                        },
                        {
                            div: {
                                img: '/images/avataricon/April1stOthers.png',
                            },
                            class: 'avatar-head-slim',
                            event: {
                                error: function (d) {
                                    $(d.sender).remove()
                                }
                            },
                            a: {
                                loading: lazy
                            },
                            when: (window.innerWidth <= 500) && April_1st
                        },
                        {
                            p: t.Name,
                            style: {
                                'font-weight': 'bold',
                                color: '#' + elemcolor[t.Element]
                            },
                            class: 'avatar-name av',
                            when: !April_1st
                        },
                        {
                            p: (((lang == 'CH') && (t._id == 1221)) ? '璃宝' : t.Name) + meow,
                            style: {
                                'font-weight': 'bold',
                                color: '#' + elemcolor[t.Element]
                            },
                            class: 'avatar-name av',
                            when: April_1st
                        },
                        {
                            a: '/sr/char/' + t._id,
                            t: [
                                {
                                    img: imgpre + 'images/Element/' + t.Element + '.png',
                                    style: {
                                        width: window.innerWidth <= 500 ? '28px' : '22%',
                                        'max-width': '35px',
                                        margin: window.innerWidth <= 500 ? '0px 3px' : '0px 5px',
                                    },
                                    a: {
                                        loading: lazy
                                    }
                                },
                                {
                                    img: imgpre + 'images/Paths/' + t.Path + '.png',
                                    style: {
                                        width: window.innerWidth <= 500 ? '28px' : '22%',
                                        'max-width': '35px',
                                        margin: window.innerWidth <= 500 ? '0px 3px' : '0px 5px',
                                    },
                                    when: t.Path != undefined,
                                    a: {
                                        loading: lazy
                                    }
                                },
                            ],
                            style: {
                                display: 'flex',
                                'justify-content': 'center',
                                'flex-wrap': 'wrap',
                                'margin-top': '10px',
                                'margin-bottom': '10px'
                            }
                        },
                        {
                            p: [
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_HP.png',
                                            class: 'avatar-staticon',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        stats.HP.toFixed(0)
                                    ],
                                    class: 'avatar-stat stat_fin'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_ATK.png',
                                            class: 'avatar-staticon',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        stats.ATK.toFixed(0)
                                    ],
                                    class: 'avatar-stat stat_fin'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_DEF.png',
                                            class: 'avatar-staticon',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        stats.DEF.toFixed(0)
                                    ],
                                    class: 'avatar-stat stat_fin'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_SPD.png',
                                            class: 'avatar-staticon',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        stats.SPD.toFixed(0)
                                    ],
                                    class: 'avatar-stat stat_fin'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_ENERGY.png',
                                            class: 'avatar-staticon',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        (t.SP ? t.SP : 0).toFixed(0)
                                    ],
                                    class: 'avatar-stat stat_fin'
                                }
                            ],
                            when: t.Stats
                        },
                        {
                            div: [
                                {
                                    img: '/homdgcat-res/UI/birthday-cake2.png'
                                },
                                {
                                    p: '',
                                    class: 'anni_p anni_p_1'
                                },
                                {
                                    p: '',
                                    class: 'anni_p anni_p_2'
                                },
                            ],
                            class: 'anni',
                            when: anniversary && ((t._id == 1221) || (t._id == 12210)),
                        }
                    ],
                    class: (window.innerWidth <= 500 ? 'avatar-card-slim' : 'avatar-card') +  ' avatar-card-avatar hover-shadow rar-' + (t.Rarity ? t.Rarity : '6'),
                    click: function (p) {
                        cur_coordinate = $('container').scrollTop()
                        if (t.Add) {
                            popAvatar_2(i)
                        } else {
                            popAvatar(i)
                        }
                        $('container').scrollTop($('h3').height())
                    },
                    a: {
                        'data-rarity': t.Rarity,
                        'data-type': t.Path,
                        'data-elem': t.Element,
                    }
                }
            })
        })
        update_avatar()
    }

    function listWeapon() {
        $('.area_pre').empty().render({
            template: [
                {
                    section: [
                        {
                            schedule: {
                                span: '5★'
                            },
                            a: {
                                'data-id': 5
                            },
                            class: (global_var_weapon_rarity == 5) ? 'active' : ''
                        },
                        {
                            schedule: {
                                span: '4★'
                            },
                            a: {
                                'data-id': 4
                            },
                            class: (global_var_weapon_rarity == 4) ? 'active' : ''
                        },
                        {
                            schedule: {
                                span: '3★'
                            },
                            a: {
                                'data-id': 3
                            },
                            class: (global_var_weapon_rarity == 3) ? 'active' : ''
                        },
                    ],
                    class: 'weapon-rarity select_parts select_parts_size_2'
                },
                {
                    section: [
                        {
                            schedule: {
                                img: '/images/Paths/Destruction.png'
                            },
                            a: {
                                'data-id': 'Destruction'
                            },
                            class: global_var_type.Destruction ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Harmony.png'
                            },
                            a: {
                                'data-id': 'Harmony'
                            },
                            class: global_var_type.Harmony ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Remembrance.png'
                            },
                            a: {
                                'data-id': 'Remembrance'
                            },
                            class: global_var_type.Remembrance ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Erudition.png'
                            },
                            a: {
                                'data-id': 'Erudition'
                            },
                            class: global_var_type.Erudition ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Hunt.png'
                            },
                            a: {
                                'data-id': 'Hunt'
                            },
                            class: global_var_type.Hunt ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Preservation.png'
                            },
                            a: {
                                'data-id': 'Preservation'
                            },
                            class: global_var_type.Preservation ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Abundance.png'
                            },
                            a: {
                                'data-id': 'Abundance'
                            },
                            class: global_var_type.Abundance ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/images/Paths/Nihility.png'
                            },
                            a: {
                                'data-id': 'Nihility'
                            },
                            class: global_var_type.Nihility ? 'active' : ''
                        },
                    ],
                    class: 'avatar-type select_parts select_parts_size_4'
                },
            ]
        })
        $('.area').empty()
        _weapon.forEach(function (t, i) {
            var stats = t.Stats
            if (!stats) {
                stats = {
                    HP: 0,
                    ATK: 0,
                    DEF: 0
                }
            }
            $('.area').render({
                template: {
                    div: [
                        {
                            p: t.Name,
                            style: {
                                'font-weight': 'bold',
                                'margin-top': '12px'
                            },
                            class: 'avatar-name av',
                        },
                        {
                            p: 'ID ' + t._id,
                            class: 'relic_id',
                        },
                        {
                            img: imgpre + `images/lightconemediumicon/${t.Pic}`,
                            class: 'weapon-head',
                            event: {
                                error: function (d) {
                                    $(d.sender).remove()
                                }
                            },
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            div: [
                                {
                                    img: imgpre + 'images/Paths/' + t.Path + '.png',
                                    style: {
                                        width: '30%',
                                        'max-width': '48px',
                                        margin: '0px',
                                    },
                                    when: t.Path != undefined,
                                    a: {
                                        loading: lazy
                                    }
                                },
                            ],
                            style: {
                                display: 'flex',
                                'justify-content': 'center',
                                'flex-wrap': 'wrap',
                                'margin-top': '10px',
                                'margin-bottom': '10px'
                            }
                        },
                        {
                            p: [
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_HP.png',
                                            class: 'avatar-staticon',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        stats.HP.toFixed(0)
                                    ],
                                    class: 'avatar-stat stat_fin'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_ATK.png',
                                            class: 'avatar-staticon',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        stats.ATK.toFixed(0)
                                    ],
                                    class: 'avatar-stat stat_fin'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_DEF.png',
                                            class: 'avatar-staticon',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        stats.DEF.toFixed(0)
                                    ],
                                    class: 'avatar-stat stat_fin'
                                },
                            ],
                            when: t.Stats
                        },
                    ],
                    class: 'avatar-card hover-shadow avatar-card-weapon rar-' + (t.Rarity ? t.Rarity : '6'),
                    click: function (p) {
                        cur_coordinate = $('container').scrollTop()
                        popWeapon(i)
                        $('container').scrollTop($('h3').height())
                    },
                    a: {
                        'data-rarity': t.Rarity,
                        'data-type': t.Path,
                    }
                }
            })
        })
        update_weapon()
    }

    function listRelic(tp) {
        $('.area').empty()
        $('.area_pre').empty()
        _relic.forEach(function (t, i) {
            if (t.Skills.length == tp) return
            var skill_show = []
            t.Skills.forEach(function (j, i) {
                skill_show.push({
                    p: "<b><color style='color:#f29d38'>" + ((i + 1) * 2) + "P</color></b> " + j,
                    class: 'desc',
                },)
            })
            $('.area').render({
                template: {
                    div: [
                        {
                            img: imgpre + 'images/itemfigures/' + t.Icon,
                            event: {
                                error: function (d) {
                                    $(d.sender).remove()
                                }
                            },
                            class: 'icon',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            p: 'ID ' + t._id.toString(),
                            class: 'relic_id'
                        },
                        {
                            p: t.Name,
                            class: 'name'
                        },
                    ].concat(skill_show),
                    class: 'curio hover-shadow',
                    click: function (p) {
                        cur_coordinate = $('container').scrollTop()
                        popRelic(i)
                        $('container').scrollTop($('h3').height())
                    }
                }
            })
        })
    }

    $('body').on('click', '.weapon-rarity schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        global_var_weapon_rarity = $(this).attr('data-id')
        update_weapon()
        $('.weapon-rarity schedule').removeClass('active')
        $(`.weapon-rarity schedule[data-id=${global_var_weapon_rarity}]`).addClass('active')
    })

    $('body').on('click', '.avatar-rarity schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        global_var_avatar_rarity = $(this).attr('data-id')
        update_avatar()
        $('.avatar-rarity schedule').removeClass('active')
        $(`.avatar-rarity schedule[data-id=${global_var_avatar_rarity}]`).addClass('active')
    })

    $('body').on('click', '.avatar-elem schedule', function () {
        var this_id = $(this).attr('data-id')
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            global_var_avatar_element[this_id] = 0
        } else {
            $(this).addClass('active')
            global_var_avatar_element[this_id] = 1
        }
        update_avatar()
    })

    $('body').on('click', '.avatar-type schedule', function () {
        var this_id = $(this).attr('data-id')
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            global_var_type[this_id] = 0
        } else {
            $(this).addClass('active')
            global_var_type[this_id] = 1
        }
        update_avatar()
        update_weapon()
    })

    function update_avatar() {

        $('.avatar-card-avatar').hide()
        var query_string = `.avatar-card-avatar[data-rarity=${global_var_avatar_rarity}]`

        var query_list_1 = []
        for (const [a, b] of Object.entries(global_var_avatar_element)) {
            if (b) query_list_1.push(`[data-elem='${a}']`)
        }
        if (!query_list_1.length) query_list_1.push('')

        var query_list_2 = []
        for (const [a, b] of Object.entries(global_var_type)) {
            if (b) query_list_2.push(`[data-type='${a}']`)
        }
        if (!query_list_2.length) query_list_2.push('')

        for (const a of query_list_1) {
            for (const b of query_list_2) {
                $(`${query_string}${a}${b}`).show()
            }
        }

    }

    function update_weapon() {
        
        $('.avatar-card-weapon').hide()
        var query_string = `.avatar-card-weapon[data-rarity=${global_var_weapon_rarity}]`

        var query_list_2 = []
        for (const [a, b] of Object.entries(global_var_type)) {
            if (b) query_list_2.push(`[data-type='${a}']`)
        }
        if (!query_list_2.length) query_list_2.push('')

        for (const b of query_list_2) {
            $(`${query_string}${b}`).show()
        }

    }

    function popAvatar(ai) {
        this_avatar = _avatar[ai]
        if (this_avatar.Add) {
            popAvatar_2(ai)
            return
        }
        unchanged = 1
        cur_level = 80
        cur_promote = 1
        cur_avatar_page = 3
        switch_title(this_avatar.Name)
        $('.content').hide()
        $('.content_2').empty().render({
            template: [
                {
                    section: {
                        p: txt.Back[lang]
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
                            p: txt.Back[lang]
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
                {
                    section: function (k) {
                        txt.Avatar_Head.forEach(function (t, i) {
                            if (!i) return
                            $(k.container).render({
                                schedule: t[lang3],
                                class: 'mon_head_option' + ((t.ID != 3) ? '' : ' active'),
                                a: {
                                    'data-id': t.ID,
                                    'data-tu': t.EN,
                                    'id': (t.ID == 1221) ? 'to_mtc' : '',
                                },
                                event: {
                                    click: function (d) {
                                        if ($(d.sender).hasClass('active')) {
                                            return;
                                        }
                                        $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                                        poptyp = parseInt($(d.sender).attr('data-id'))
                                        renderAvatar(poptyp)
                                    }
                                },
                            })
                        })
                    },
                    class: 'mon_head delll',
                    style: {
                        'margin-bottom': '15px'
                    }
                },
                {
                    div: '',
                    class: 'mon_body'
                },
            ]
        })
        $('.content_2').show()
        window.location.hash = '_' + this_avatar._id
        $('h3 .lang').html(`<a class='translate_' href='?lang=CH${window.location.hash}'><b>中文</b></a> | <a class='translate_' href='?lang=EN${window.location.hash}'><b>English</b></a> | <a class='translate_' href='?lang=JP${window.location.hash}'><b>日本語</b></a> | <a class='translate_' href='?lang=KR${window.location.hash}'><b>한국인</b></a>`)
        renderAvatar(cur_avatar_page)
        if (!loaded.includes(this_avatar._id)) {
            let script_computer_a = document.createElement('script')
            script_computer_a.src = '/data/' + lang3 + '/Avatar/' + this_avatar._id + '.js'
            document.head.append(script_computer_a)
            script_computer_a.onload = function () {
                loaded.push(this_avatar._id)
                _avatarskill = {..._avatarskill, ..._avatarskill_}
                _avatarskilltree = {..._avatarskilltree, ..._avatarskilltree_}
                _avatarrank = {..._avatarrank, ..._avatarrank_}
                _story = {..._story, ..._story_}
                _voice = {..._voice, ..._voice_}
                _notes = {..._notes, ..._notes_}
                _adiff = {..._adiff, ..._adiff_}
                _mtc = {..._mtc, ..._mtc_}
            }
        }
    }

    function renderAvatar(i) {
        clearInterval(check_interval)
        $('.lt').hide()
        if (i > 2) {
            if (loaded.includes(this_avatar._id)) {
                renderAvatarAfter(i)
            } else {
                var cnt = 0
                $('.mon_body').css('background-color', '#27363e')
                $('.mon_body').css('min-height', '1600px')
                check_interval = setInterval(function () {
                    cnt += 1
                    if (cnt >= 7) {
                        $('.lt').show()
                    }
                    if (loaded.includes(this_avatar._id)) {
                        $('.mon_body').css('background-color', 'transparent')
                        $('.mon_body').css('min-height', '0')
                        $('.lt').hide()
                        clearInterval(check_interval)
                        renderAvatarAfter(i)
                    }
                }, 200)
            }
        } else {
            renderAvatarAfter(i)
        }
    }

    function check_pic_dl() {
        if (lang == 'CH') {
            for (const r of pic_index) {
                if (r.N == this_avatar.Name) {
                    if (r.V[0] == VER_SR) {
                        return 1
                    }
                }
            }
        }
        if (!lazy) return 1
        return 0
    }

    function renderAvatarAfter(i) {
        if (unchanged) {
            this_avatar_vers = getVerAvatar(this_avatar.V)
            this_avatar_cur_ver = this_avatar_vers[1]
        }
        cur_avatar_page = i
        var mats = this_avatar.Mat
        if (!mats) {
            mats = [112003, 112003, 112003, 112003]
        }
        var stats = this_avatar.Stats
        if (!stats) {
            stats = {
                HP: 0,
                ATK: 0,
                DEF: 0,
                SPD: 0,
                Aggro: 0
            }
        }
        var cv = this_avatar.CV
        if (!cv) {
            cv = [{}, {}, {}, {}]
        }
        $('.mon_body').empty()
        if (anniversary && ((this_avatar._id == 1221) || (this_avatar._id == 12210)) && (i == 3 || i == 2)) {
            $('.mon_body').render({
                div: [
                    {
                        div: [
                            {
                                p: (lang == 'CH') ? '璃宝一周年' : "Yunli's 1st Anniversary"
                            },
                            {
                                p: '',
                                class: 'anni_p_3',
                                style: {
                                    'color': '#f29e38'
                                }
                            }
                        ],
                        class: 'a_section_head',
                        style: {
                            'text-align': 'center',
                        }
                    }
                ],
                class: 'a_section'
            })
        }
        if (i == 2 || i == 10 || i == 8 || i == 3 || i == 4 || i == 5) {
            var after_1 = aft1(stats)
        }
        if (i == 2 || i == 10) {
            $('.mon_body').render([
                {
                    div: [
                        {
                            div: {
                                p: this_avatar.Name,
                                style: {
                                    'text-align': 'center',
                                    color: "#" + elemcolor[this_avatar.Element],
                                    'margin-top': '20px'
                                }
                            },
                            class: 'a_section_head'
                        },
                        {
                            div: [
                                {
                                    p: 'ID ' + this_avatar._id,
                                    style: {
                                        'text-align': 'center',
                                        'font-size': '0.8em',
                                        'font-weight': 'bold',
                                        'margin-top': '4px',
                                        'margin-bottom': '-4px'
                                    }
                                },
                                {
                                    p: '★ ★ ★ ★ ★',
                                    style: {
                                        width: '100%',
                                        'text-align': 'center',
                                        'font-size': '20px',
                                        margin: '0 auto',
                                    },
                                    when: this_avatar.Rarity == 5
                                },
                                {
                                    p: '★ ★ ★ ★',
                                    style: {
                                        width: '100%',
                                        'text-align': 'center',
                                        'font-size': '20px',
                                        margin: '0 auto',
                                    },
                                    when: this_avatar.Rarity == 4
                                },
                                {
                                    div: [],
                                    class: 'gacha gacha_1',
                                },
                                {
                                    div: [
                                        {
                                            img: imgpre + 'images/Element/' + this_avatar.Element + '.png',
                                            style: {
                                                width: '13%',
                                                'max-width': '48px',
                                                margin: '0px 5px',
                                            },
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        {
                                            img: imgpre + 'images/Paths/' + this_avatar.Path + '.png',
                                            style: {
                                                width: '13%',
                                                'max-width': '48px',
                                                margin: '0px 5px',
                                            },
                                            when : this_avatar.Path != undefined,
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                    ],
                                    style: {
                                        display: 'flex',
                                        'justify-content': 'center',
                                        'flex-wrap': 'wrap',
                                        'margin-top': '0px',
                                        'margin-bottom': '10px'
                                    }
                                },
                                {
                                    div: {
                                        p: this_avatar.Camp ? _camp[this_avatar.Camp] : '',
                                        style: {
                                            'font-weight': 'bold',
                                            'text-align': 'center'
                                        },
                                        when: this_avatar.Camp
                                    }
                                },
                                {
                                    div: {
                                        p: this_avatar.Desc ? this_avatar.Desc : '',
                                        style: {
                                            'text-align': 'center'
                                        },
                                        when: Boolean(this_avatar.Desc)
                                    }
                                },
                            ],
                            class: 'a_section_content',
                            style: {
                                'overflow-x': 'hidden',
                                'margin-top': '-12px'
                            }
                        },
                    ],
                    class: 'a_section'
                },
                {
                    div: [
                        {
                            div: {
                                p: txt.Avatar_Stats[lang],
                            },
                            class: 'a_section_head',
                            style: {
                                'text-align': 'center',
                                'padding-top': '6px',
                                color: "#" + elemcolor[this_avatar.Element],
                            }
                        },
                        after_1
                    ],
                    class: 'a_section after_1',
                },
                {
                    div: [
                        {
                            div: {
                                p: txt.Avatar_Mats[lang],
                            },
                            class: 'a_section_head',
                            style: {
                                'text-align': 'center',
                                'padding-top': '6px',
                                color: "#" + elemcolor[this_avatar.Element],
                            }
                        }
                    ],
                    class: 'a_section after_2',
                    when: this_avatar.Mat
                },
                {
                    div: [
                        {
                            div: {
                                p: txt.Avatar_CV[lang],
                            },
                            class: 'a_section_head',
                            style: {
                                'text-align': 'center',
                                'padding-top': '6px',
                                color: "#" + elemcolor[this_avatar.Element],
                            }
                        }
                    ],
                    class: 'a_section after_4',
                    when: (i != 10)
                },
            ])
        }
        if (i > 2) {
            $('.mon_body').render([
                {  
                    div: [
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            div: {
                                                img: no_skillicon.includes(this_avatar._id) ? (imgpre + `images/avataricon/avatar/999.png`) : (imgpre + `images/${this_avatar.Icon.replaceAll('/Avatar/', '/avatar/').replaceAll('avatarshopicon', 'avataricon')}.png`),
                                                event: {
                                                    error: function (d) {
                                                        $('.as_left').remove()
                                                    }
                                                },
                                                a: {
                                                    loading: lazy
                                                },
                                                class: 'avataricon',
                                                style: {
                                                    width: '80%',
                                                    display: 'block',
                                                    'margin-left': '10%',
                                                    'margin-right': '10%',
                                                }
                                            },
                                            class: 'as_left dissolve'
                                        },
                                        {
                                            div: [
                                                {
                                                    p: this_avatar.Name,
                                                    style: {
                                                        'text-align': 'center',
                                                        margin: '5px 10px',
                                                        color: "#" + elemcolor[this_avatar.Element],
                                                        'font-weight': 'bold',
                                                        'font-size': '1.2em',
                                                    }
                                                },
                                                {
                                                    span: {
                                                        select: '',
                                                        options: this_avatar_vers[0]
                                                    },
                                                    class: 'stat_ver_choose',
                                                    style: {
                                                        display: 'flex',
                                                        'justify-content': 'center'
                                                    },
                                                    when: !((i == 7) || (i == 8) || (i == 9) || (i == 1221))
                                                },
                                                {
                                                    span: [
                                                        {
                                                            select: '',
                                                            options: {
                                                                "1": 1,
                                                                "20": 2,
                                                                "30": 3,
                                                                "40": 4,
                                                                "50": 5,
                                                                "60": 6,
                                                                "70": 7,
                                                                "80": 8
                                                            },
                                                            id: 'lv_low',
                                                            class: 'watch',
                                                        },
                                                        {
                                                            span: ' → '
                                                        },
                                                        {
                                                            select: '',
                                                            options: {
                                                                "1": 1,
                                                                "20": 2,
                                                                "30": 3,
                                                                "40": 4,
                                                                "50": 5,
                                                                "60": 6,
                                                                "70": 7,
                                                                "80": 8
                                                            },
                                                            id: 'lv_high',
                                                            class: 'watch',
                                                        }
                                                    ],
                                                    class: 'mat_calc_choose',
                                                    style: {
                                                        display: 'flex',
                                                        'justify-content': 'center'
                                                    },
                                                    when: (i == 1221)
                                                }
                                            ],
                                            class: 'as_right'
                                        },
                                    ],
                                    class: 'as'
                                },
                                {
                                    div: {
                                        span: '下载技能长图',
                                        style: {
                                            padding: '5px 10px',
                                            border: '2px solid #f29e38',
                                            'border-radius': '5px'
                                        },
                                        class: 'hover-shadow',
                                        click: function () {
                                            download(`/Char/HSR/${this_avatar.Name}/${VER_SR}.png`, `${VER_SR} ${this_avatar.Name}`)
                                        }
                                    },
                                    style: {
                                        width: '100%',
                                        display: check_pic_dl() ? 'flex' : 'none',
                                        'justify-content': 'center',
                                        'font-weight': 'bold',
                                        'margin-top': '20px',
                                        'margin-bottom': '5px',
                                    },
                                    class: 'pic_dl',
                                    when: (i == 3) || (i == 10)
                                },
                                {
                                    div: [],
                                    class: 'gacha gacha_2 dissolve',
                                },
                            ],
                            class: 'after_1 stat_ver_choose_wrap a_section_content',
                            a: {
                                id: 'special'
                            }
                        }
                    ],
                    class: 'a_section'
                },
                emote_block
            ])
            if (i <= 5) {
                $('.after_1').render(after_1)
            }
            rotate()
        }
        if (i == 3 || i == 10) {
            var skill_id = (this_avatar._id > 8000) ? ((this_avatar._id % 2 == 1) ? this_avatar._id : this_avatar._id - 1) : this_avatar._id
            if ((skill_id < 8000) && (skill_id > 1000)) skill_id = 1000 + skill_id % 1000
            if (this_avatar.Servant && show_servant_block) {
                $('.mon_body').render({
                    div: [
                        {
                            div: [
                                {
                                    p: this_avatar.Servant.Name,
                                    style: {
                                        'text-align': 'center',
                                        margin: '0px',
                                        width: '100%',
                                        color: "#" + elemcolor[this_avatar.Element],
                                        'font-weight': 'bold',
                                        'font-size': '1.2em',
                                    }
                                },
                                {
                                    div: {
                                        img: '/images/' + this_avatar.Servant.Icon,
                                        a: {
                                            loading: lazy
                                        },
                                        style: {
                                            height: '100%'
                                        },
                                        event: {
                                            error: function (d) {
                                                $(d.sender).remove()
                                            }
                                        },
                                    },
                                    class: 'servant_pic_container'
                                },
                                {
                                    div: {
                                        div: [
                                            {
                                                img: imgpre + 'images/Misc/IconMonsterTaunted.png',
                                                class: 'special',
                                                a: {
                                                    loading: lazy
                                                },
                                            },
                                            {
                                                span: ' <b>' + this_avatar.Servant.Aggro.toString() + '</b> '
                                            }
                                        ],
                                        class: 'addprop',
                                    },
                                    class: 'avatar_stats mon_head',
                                    style: {
                                        'margin-bottom': '10px'
                                    }
                                },
                            ],
                            class: 'a_section_content',
                        }
                    ],
                    class: 'a_section c_0 c_1'
                })
            }
            var skill_list = this_avatar.Skills
            if (this_avatar.ExtraSkills && this_avatar.ExtraSkills.length) {
                skill_list = this_avatar.ExtraSkills.concat(skill_list)
            }
            if (this_avatar.BydSkills && this_avatar.BydSkills.length) {
                skill_list = this_avatar.BydSkills.concat(skill_list)
            }
            skill_list.forEach(function (s, i) {
                var S = _avatarskill[s][this_avatar_cur_ver]
                if (!S) return
                var recommendLV = 1
                if (S.MaxLevel == 15) recommendLV = 10
                if (S.MaxLevel == 9) recommendLV = 6
                if (S.MaxLevel == 10) recommendLV = 6
                if (S.Stance) {
                    var stance_0 = (S.Stance[0] * 10)
                    var stance_1 = (S.Stance[1] * 10)
                    var stance_2 = (S.Stance[2] * 10)
                    if (!Number.isInteger(stance_0)) {
                        stance_0 = (stance_0 * 3).toFixed(0) + "/3"
                    }
                    if (!Number.isInteger(stance_1)) {
                        stance_1 = (stance_1 * 3).toFixed(0) + "/3"
                    }
                    if (!Number.isInteger(stance_2)) {
                        stance_2 = (stance_2 * 3).toFixed(0) + "/3"
                    }
                    var stanceshow = `<img class='elem_' src='${imgpre}images/Element/${this_avatar.Element}.png'>-` + ((stance_0 != '0') ? ('| ' + txt.Avatar_StanceBreak_Specific[0][lang3] + "<color style='color:#" + elemcolor[this_avatar.Element] + "'><b>" + stance_0 + '</b></color> ') : '') + ((stance_1 != '0') ? ('| ' + txt.Avatar_StanceBreak_Specific[1][lang3] + "<color style='color:#" + elemcolor[this_avatar.Element] + "'><b>" + stance_1 + '</b></color> ') : '') + ((stance_2 != 0) ? ('| ' + txt.Avatar_StanceBreak_Specific[2][lang3] + "<color style='color:#" + elemcolor[this_avatar.Element] + "'><b>" + stance_2 + '</b></color> ') : '')
                } else {
                    var stanceshow = ''
                }
                if ((s == this_avatar.Skills[0]) && (i != 0)) {
                    $('.mon_body').render(emote_block)
                }
                if (this_avatar.ExtraSkills && this_avatar.ExtraSkills.length && (s == this_avatar.ExtraSkills[0]) && (i != 0)) {
                    $('.mon_body').render(emote_block)
                }
                var vid_shows = []
                var do_vid = _vid[s] != undefined
                if (do_vid) {
                    vid_shows.push({
                        p: (lang == 'CH') ? '角色实机演示' : 'Showcases',
                        class: 'vid_panel vid_ui'
                    })
                    _vid[s].forEach(function (vu) {
                        vid_shows.push({
                            a: vu.Path,
                            t: {
                                p: vu.Name + ' ' + vu.Size + 'M'
                            },
                            attr: {
                                target: '_blank'
                            },
                            class: 'vid_panel vid_vid hover-shadow'
                        })
                    })
                }
                $('.mon_body').render({
                    div: [
                        {
                            div: [
                                {
                                    img: imgpre + 'images/skillicons/avatar/' + skill_id + '/' + S.Icon + ((S.SPNeed != undefined) ? '_on.png' : '.png'),
                                    class: 'head_left',
                                    when: (S.Icon != undefined) && !no_skillicon.includes(this_avatar._id),
                                    event: {
                                        error: function (d) {
                                            $(d.sender).parent().render({
                                                template: {
                                                    img: imgpre + 'images/skillicons/avatar/' + skill_id + '/' + S.Icon + '.png',
                                                    class: 'head_left',
                                                    when: (S.Icon != undefined) && !no_skillicon.includes(this_avatar._id),
                                                    event: {
                                                        error: function (d) {
                                                            $(d.sender).siblings('p').removeClass('head_right').removeClass('hr_1')
                                                            $(d.sender).remove()
                                                        }
                                                    },
                                                    a: {
                                                        loading: lazy
                                                    }
                                                }
                                            })
                                            $(d.sender).remove()
                                        }
                                    },
                                    a: {
                                        loading: lazy
                                    }
                                },
                                {
                                    p: S.Name + meow2,
                                    class: ((S.Icon != undefined) && !no_skillicon.includes(this_avatar._id)) ? 'head_right hr_1' : '',
                                    style: {
                                        color: "#" + elemcolor[this_avatar.Element]
                                    }
                                },
                            ],
                            class: 'a_section_head head_withimg'
                        },
                        {
                            div: [
                                {
                                    p: [
                                        {
                                            span: S.Type ? S.Type : '',
                                            class: 'sbp',
                                            style: {
                                                'font-weight': 'bold',
                                                //color: "#f29e38"
                                            },
                                            when: Boolean(S.Type),
                                        },
                                        /*{
                                            span: S.Tag ? S.Tag : '',
                                            class: 'sbp',
                                            style: {
                                                'font-weight': 'bold',
                                                //color: "#f29e38"
                                            },
                                            when: Boolean(S.Tag)
                                        },*/
                                        {
                                            span: [
                                                {
                                                    img: imgpre + 'images/Misc/PointBPFull.png',
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: (S.BP > 0) ? ('+' + S.BP) : (S.BP ? S.BP.toString() : '')
                                                }
                                            ],
                                            class: 'sbp',
                                            when: S.BP,
                                        },
                                        {
                                            span: [
                                                {
                                                    img: imgpre + 'images/AddProp/IconEnergyLimit.png',
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: S.SPNeed ? S.SPNeed.toFixed(0) : ''
                                                }
                                            ],
                                            class: 'sbp',
                                            when: S.SPNeed
                                        },
                                        {
                                            span: [
                                                {
                                                    img: imgpre + 'images/AddProp/IconEnergyRecovery.png',
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: (S.SPAdd > 0) ? ('+' + S.SPAdd) : (S.SPAdd ? S.SPAdd.toString() : '')
                                                }
                                            ],
                                            class: 'sbp',
                                            when: S.SPAdd
                                        },
                                        {
                                            span: [
                                                {
                                                    img: imgpre + 'images/AddProp/IconEnergyRecovery.png',
                                                    style: {
                                                        opacity: '0'
                                                    },
                                                    a: {
                                                        loading: lazy
                                                    }
                                                }
                                            ],
                                            class: 'sbp',
                                            when: (!S.SPAdd) && (!S.SPNeed) && (!S.BP)
                                        },
                                    ],
                                    style: {
                                        'margin-bottom': '12px',
                                        'margin-top': '-10px'
                                    },
                                    when: (S.Type != "") && !S.Type.includes("dev")
                                },
                                {
                                    p: param(S.Desc, S.Params ? S.Params[recommendLV - 1] : []),
                                    class: 'sd sd-' + s
                                },
                                {
                                    div: function (b) {
                                        if (!(S.EE && S.EE.length)) return ''
                                        S.EE.forEach(function (c) {
                                            if (!_ee[c]) {
                                                $(b.container).render({
                                                    p: c.toString()
                                                })
                                            } else {
                                                $(b.container).render({
                                                    p: '<b>' + _ee[c].N + '</b><br>' + _ee[c].D
                                                })
                                            }
                                        })
                                    },
                                    when: S.EE && S.EE.length
                                },
                                {
                                    p: stanceshow.replaceAll("-|", " "),
                                    when: S.Stance && (S.Stance[0] + S.Stance[1] + S.Stance[2]),
                                    style: {
                                        'margin-top': '10px'
                                    }
                                },
                                {
                                    div: [
                                        {
                                            span: 'Lv' + recommendLV,
                                            style: {
                                                'margin-right': '8px',
                                                'font-weight': 'bold'
                                            },
                                            class: 'ld-' + s
                                        },
                                        {
                                            span: {
                                                span: '▲',
                                                style: {
                                                    'font-size': '16px',
                                                    'line-height': '24px'
                                                }
                                            },
                                            class: 'up',
                                            a: {
                                                'data-id': s,
                                                'data-max': S.MaxLevel
                                            }
                                        },
                                        {
                                            span: {
                                                span: '▼',
                                                style: {
                                                    'font-size': '16px',
                                                    'line-height': '24px'
                                                }
                                            },
                                            class: 'down',
                                            a: {
                                                'data-id': s,
                                            }
                                        },
                                    ],
                                    class: 'control',
                                    when: S.MaxLevel > 1
                                },
                                {
                                    div: vid_shows,
                                    class: 'vid_area',
                                    when: do_vid
                                }
                            ],
                            class: 'a_section_content',
                            a: {
                                'data-id': s,
                                'data-lv': recommendLV
                            }
                        }
                    ],
                    class: 'a_section_skill ' + (_servant_skills.includes(s) ? 'c_0 c_1' : 'c_0 c_2')
                })
            })
            $('.mon_body').render(emote_block)
        }
        if (i == 4 || i == 3 || i == 10) {
            var skill_id = (this_avatar._id > 8000) ? ((this_avatar._id % 2 == 1) ? this_avatar._id : this_avatar._id - 1) : this_avatar._id
            if ((skill_id < 8000) && (skill_id > 1000)) skill_id = 1000 + skill_id % 1000
            ST = _avatarskilltree[this_avatar._id][this_avatar_cur_ver]
            var show_4 = 0
            if (!ST.Tree4) ST.Tree4 = {}
            else {
                if (Object.keys(ST.Tree4).length) show_4 = 1
            }
            $('.mon_body').render([
                {
                    div: [
                        {
                            div: [
                                {
                                    img: imgpre + 'images/Misc/_ADD.png',
                                    class: 'head_left',
                                    a: {
                                        loading: lazy
                                    }
                                },
                                {
                                    p: txt.AddProp[lang] + meow2,
                                    class: 'head_right hr_1',
                                    style: {
                                        color: "#" + elemcolor[this_avatar.Element]
                                    }
                                },
                            ],
                            class: 'a_section_head head_withimg'
                        },
                        {
                            div: {
                                div: [
                                    {
                                        img: function (k) {
                                            return imgpre + 'images/AddProp/' + _propiconname[k.data]
                                        },
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                    {
                                        span: function (k) {
                                            if (k.data == 'SpeedDelta') return ' +<b>' + ST.Add[k.data].toFixed(1) + '</b> ' + _propname[k.data]
                                            return ' +<b>' + (ST.Add[k.data] * 100).toFixed(1) + '%</b> ' + _propname[k.data]
                                        },
                                    }
                                ],
                                data: ST.Add ? Object.keys(ST.Add) : [],
                                class: 'addprop'
                            },
                            class: 'a_section_content mon_head',
                            style: {
                                'margin-bottom': '20px',
                                'margin-top': '-10px'
                            }
                        }
                    ],
                    class: 'a_section_skill c_0 c_2',
                    when: ST.Add
                },
                {
                    div: [
                        {
                            div: [
                                {
                                    img: imgpre + 'images/skillicons/avatar/' + skill_id + '/' + ST.Tree1.Icon + '.png',
                                    class: 'head_left',
                                    when: (ST.Tree1.Icon != undefined) && !no_skillicon.includes(this_avatar._id),
                                    event: {
                                        error: function (d) {
                                            $(d.sender).siblings('p').removeClass('head_right').removeClass('hr_1')
                                            $(d.sender).remove()
                                        }
                                    },
                                    a: {
                                        loading: lazy
                                    }
                                },
                                {
                                    p: ST.Tree1.Name + meow2,
                                    class: ((ST.Tree1.Icon != undefined) && !no_skillicon.includes(this_avatar._id)) ? 'head_right hr_1' : '',
                                    style: {
                                        color: "#" + elemcolor[this_avatar.Element]
                                    }
                                },
                            ],
                            class: 'a_section_head head_withimg'
                        },
                        {
                            div: function (b) {
                                var S = ST.Tree1
                                $(b.container).render({
                                    p: S.Desc,
                                })
                                if (S.EE && S.EE.length) {
                                    S.EE.forEach(function (c) {
                                        if (!_ee[c]) {
                                            $(b.container).render({
                                                p: c.toString()
                                            })
                                        } else {
                                            $(b.container).render({
                                                p: '<b>' + _ee[c].N + '</b><br>' + _ee[c].D
                                            })
                                        }
                                    })
                                }
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section_skill c_0 c_2',
                },
                {
                    div: [
                        {
                            div: [
                                {
                                    img: imgpre + 'images/skillicons/avatar/' + skill_id + '/' + ST.Tree2.Icon + '.png',
                                    class: 'head_left',
                                    when: (ST.Tree2.Icon != undefined) && !no_skillicon.includes(this_avatar._id),
                                    event: {
                                        error: function (d) {
                                            $(d.sender).siblings('p').removeClass('head_right').removeClass('hr_1')
                                            $(d.sender).remove()
                                        }
                                    },
                                    a: {
                                        loading: lazy
                                    }
                                },
                                {
                                    p: ST.Tree2.Name + meow2,
                                    class: ((ST.Tree2.Icon != undefined) && !no_skillicon.includes(this_avatar._id)) ? 'head_right hr_1' : '',
                                    style: {
                                        color: "#" + elemcolor[this_avatar.Element]
                                    }
                                },
                            ],
                            class: 'a_section_head head_withimg'
                        },
                        {
                            div: function (b) {
                                var S = ST.Tree2
                                $(b.container).render({
                                    p: S.Desc,
                                })
                                if (S.EE && S.EE.length) {
                                    S.EE.forEach(function (c) {
                                        if (!_ee[c]) {
                                            $(b.container).render({
                                                p: c.toString()
                                            })
                                        } else {
                                            $(b.container).render({
                                                p: '<b>' + _ee[c].N + '</b><br>' + _ee[c].D
                                            })
                                        }
                                    })
                                }
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section_skill c_0 c_2',
                },
                {
                    div: [
                        {
                            div: [
                                {
                                    img: imgpre + 'images/skillicons/avatar/' + skill_id + '/' + ST.Tree3.Icon + '.png',
                                    class: 'head_left',
                                    when: (ST.Tree3.Icon != undefined) && !no_skillicon.includes(this_avatar._id),
                                    event: {
                                        error: function (d) {
                                            $(d.sender).siblings('p').removeClass('head_right').removeClass('hr_1')
                                            $(d.sender).remove()
                                        }
                                    },
                                    a: {
                                        loading: lazy
                                    }
                                },
                                {
                                    p: ST.Tree3.Name + meow2,
                                    class: ((ST.Tree3.Icon != undefined) && !no_skillicon.includes(this_avatar._id)) ? 'head_right hr_1' : '',
                                    style: {
                                        color: "#" + elemcolor[this_avatar.Element]
                                    }
                                },
                            ],
                            class: 'a_section_head head_withimg'
                        },
                        {
                            div: function (b) {
                                var S = ST.Tree3
                                $(b.container).render({
                                    p: S.Desc,
                                })
                                if (S.EE && S.EE.length) {
                                    S.EE.forEach(function (c) {
                                        if (!_ee[c]) {
                                            $(b.container).render({
                                                p: c.toString()
                                            })
                                        } else {
                                            $(b.container).render({
                                                p: '<b>' + _ee[c].N + '</b><br>' + _ee[c].D
                                            })
                                        }
                                    })
                                }
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section_skill c_0 c_2',
                },
                {
                    div: [
                        {
                            div: [
                                {
                                    img: imgpre + 'images/skillicons/avatar/' + skill_id + '/' + ST.Tree4.Icon + '.png',
                                    class: 'head_left',
                                    when: (ST.Tree4.Icon != undefined) && !no_skillicon.includes(this_avatar._id),
                                    event: {
                                        error: function (d) {
                                            $(d.sender).siblings('p').removeClass('head_right').removeClass('hr_1')
                                            $(d.sender).remove()
                                        }
                                    },
                                    a: {
                                        loading: lazy
                                    }
                                },
                                {
                                    p: ST.Tree4.Name + meow2,
                                    class: ((ST.Tree4.Icon != undefined) && !no_skillicon.includes(this_avatar._id)) ? 'head_right hr_1' : '',
                                    style: {
                                        color: "#" + elemcolor[this_avatar.Element]
                                    }
                                },
                            ],
                            class: 'a_section_head head_withimg'
                        },
                        {
                            div: function (b) {
                                var S = ST.Tree4
                                $(b.container).render({
                                    p: S.Desc,
                                })
                                if (S.EE && S.EE.length) {
                                    S.EE.forEach(function (c) {
                                        if (!_ee[c]) {
                                            $(b.container).render({
                                                p: c.toString()
                                            })
                                        } else {
                                            $(b.container).render({
                                                p: '<b>' + _ee[c].N + '</b><br>' + _ee[c].D
                                            })
                                        }
                                    })
                                }
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section_skill c_0 c_2 tree4',
                    when: show_4
                }
            ])
            $('.mon_body').render(emote_block)
            this_avatar.Ranks.forEach(function (s, i) {
                var S = _avatarrank[s]
                var skill_id = (this_avatar._id > 8000) ? ((this_avatar._id % 2 == 1) ? this_avatar._id : this_avatar._id - 1) : this_avatar._id
                if ((skill_id < 8000) && (skill_id > 1000)) skill_id = 1000 + skill_id % 1000
                var use_avatar_id = this_avatar._id
                if ((use_avatar_id < 8000) && (use_avatar_id > 1000)) use_avatar_id = 1000 + use_avatar_id % 1000
                $('.mon_body').render({
                    div: [
                        {
                            div: {
                                img: imgpre + 'images/rank/_dependencies/textures/' + use_avatar_id + '/' + use_avatar_id + '_Rank_' + (i + 1) + '.png',
                                style: {
                                    width: '100%'
                                },
                                event: {
                                    error: function (d) {
                                        $(d.sender).parent().siblings('.rank_down').removeClass('rank_down').addClass('rank_none')
                                        $(d.sender).parent().remove()
                                        //$(d.sender).parent().render({ img: '/images/rank/_dependencies/textures/999/999_Rank_' + (i + 1) + '.png', style: { width: '100%' } })
                                        //$(d.sender).remove()
                                    }
                                },
                                a: {
                                    loading: lazy
                                }
                            },
                            class: 'rank_up',
                            when: (this_avatar.Rarity != undefined) && !no_skillicon.includes(this_avatar._id)
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            img: imgpre + 'images/skillicons/avatar/' + skill_id + '/' + S[this_avatar_cur_ver].Icon + '.png',
                                            class: 'head_left',
                                            when: (S[this_avatar_cur_ver].Icon != undefined) && !no_skillicon.includes(this_avatar._id),
                                            event: {
                                                error: function (d) {
                                                    $(d.sender).siblings('p').removeClass('head_right').removeClass('hr_1')
                                                    $(d.sender).remove()
                                                }
                                            },
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        {
                                            p: S[this_avatar_cur_ver].Rank + ' ' + S[this_avatar_cur_ver].Name + meow2,
                                            class: ((S[this_avatar_cur_ver].Icon != undefined) && !no_skillicon.includes(this_avatar._id)) ? 'head_right hr_1' : '',
                                            style: {
                                                color: "#" + elemcolor[this_avatar.Element]
                                            }
                                        },
                                    ],
                                    class: 'a_section_head head_withimg'
                                },
                                {
                                    div: function (b) {
                                        var G = S[this_avatar_cur_ver]
                                        $(b.container).render({
                                            p: G.Desc,
                                        })
                                        if (G.EE && G.EE.length) {
                                            G.EE.forEach(function (c) {
                                                if (!_ee[c]) {
                                                    $(b.container).render({
                                                        p: c.toString()
                                                    })
                                                } else {
                                                    $(b.container).render({
                                                        p: '<b>' + _ee[c].N + '</b><br>' + _ee[c].D
                                                    })
                                                }
                                            })
                                        }
                                    },
                                    class: 'a_section_content'
                                }
                            ],
                            class: 'rank_down',
                            style: {
                                width: ((this_avatar.Rarity != undefined) && !no_skillicon.includes(this_avatar._id)) ? '' : '100%'
                            }
                        }
                    ],
                    class: 'a_section_skill c_0 c_3',
                    style: {
                        display: 'flex',
                        'flex-wrap': 'wrap',
                        'justify-content': 'center'
                    }
                })
            })
        }
        if (i == 7) {
            $('.mon_body').render({
                div: [
                    {
                        div: {
                            p: txt.Avatar_Story[lang] + `[[_id]]`
                        },
                        class: 'a_section_head',
                        style: {
                            color: "#" + elemcolor[this_avatar.Element]
                        }
                    },
                    {
                        div: {
                            p: `[[Story]]`
                        },
                        class: 'a_section_content'
                    }
                ],
                class: 'a_section',
                data: _story[this_avatar._id]
            })
        }
        if (i == 8) {
            $('.mon_body').render({
                div: [
                    {
                        div: {
                            p: txt.Avatar_CV[lang],
                        },
                        class: 'a_section_head',
                        style: {
                            'text-align': 'center',
                            'padding-top': '6px',
                            color: "#" + elemcolor[this_avatar.Element],
                        }
                    }
                ],
                class: 'a_section after_4',
            },)
            $('.mon_body').render({
                div: [
                    {
                        div: {
                            p: `[[Title]]`
                        },
                        class: 'a_section_head',
                        style: {
                            color: "#" + elemcolor[this_avatar.Element]
                        }
                    },
                    {
                        div: [
                            {
                                p: [
                                    '🔊',
                                    {
                                        span: 'CN',
                                        a: {
                                            'data-id': function (b) {
                                                return 'Chinese(PRC)/cn_' + b.data._id + '.wav'
                                            }
                                        }
                                    },
                                    {
                                        span: 'EN',
                                        a: {
                                            'data-id': function (b) {
                                                return 'English/en_' + b.data._id + '.wav'
                                            }
                                        }
                                    },
                                    {
                                        span: 'JP',
                                        a: {
                                            'data-id': function (b) {
                                                return 'Japanese/jp_' + b.data._id + '.wav'
                                            }
                                        }
                                    },
                                    {
                                        span: 'KR',
                                        a: {
                                            'data-id': function (b) {
                                                return 'Korean/kr_' + b.data._id + '.wav'
                                            }
                                        }
                                    }
                                ],
                                when: function (b) {
                                    return 0
                                    return b.data._id && b.data._id.length
                                },
                                class: 'voice',
                            },
                            {
                                p: `[[Voice]]`
                            },
                        ],
                        class: 'a_section_content',
                        style: {
                            'margin-top': '0px'
                        }
                    }
                ],
                class: 'a_section_small',
                style: {
                    'margin': '4px 0'
                },
                data: _voice[this_avatar._id]
            })
        }
        if (i == 6) {
            var vn = this_avatar_cur_ver
            var vo = ''
            var vo_index = this_avatar.V.indexOf(vn) - 1
            if (vo_index < 0) {
                $('.mon_body').render({
                    div: [
                        {
                            div: {
                                p: txt.Changelog[lang3]
                            },
                            class: 'a_section_head',
                            style: {
                                color: "#" + elemcolor[this_avatar.Element]
                            }
                        },
                        {
                            div: {
                                p: ' ',
                                style: {
                                    'margin-top': '20px'
                                }
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section',
                })
            } else {
                vo = this_avatar.V[vo_index]
                var shows_1 = _adiff[this_avatar._id] ? _adiff[this_avatar._id][vn] : []
                if (!shows_1) shows_1 = []
                $('.mon_body').render({
                    div: [
                        {
                            div: {
                                p: txt.Changelog[lang3]
                            },
                            class: 'a_section_head',
                            style: {
                                color: "#" + elemcolor[this_avatar.Element]
                            }
                        },
                        {
                            div: {
                                p: function (k) {
                                    return ppics(k.data.replaceAll("#", "</color> ").replaceAll("@", "<color style='color:#f29e38'>").replaceAll("``", "<color style='color:#f29e38'><b>").replaceAll("`", "</b></color><br>").replaceAll("$", "#"))
                                },
                                data: [`<b>${vo} @→# ${vn}<b>`].concat(shows_1, d_avatar(this_avatar, vo, vn)),
                                style: {
                                    'margin-top': '20px'
                                }
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section',
                })
            }
            
        }
        if (i == 9) {
            $('.mon_body').render({
                div: [
                    {
                        div: {
                            p: txt.HNotes[lang3]
                        },
                        class: 'a_section_head',
                        style: {
                            color: "#" + elemcolor[this_avatar.Element]
                        }
                    },
                    {
                        div: {
                            p: function (u) {
                                return custom_string(u.data, 'ffd780')
                            },
                            data: _notes[this_avatar._id] ? _notes[this_avatar._id] : _changelog2[this_avatar._id],
                            style: {
                                'margin-top': '15px'
                            }
                        },
                        class: 'a_section_content'
                    }
                ],
                class: 'a_section',
            })
        }
        if (i == 2 || i == 10 || i == 8 || i == 3) {
            var fu = setInterval(function () {
                if (loaded.includes(this_avatar._id)) {
                    if (i == 2 || i == 10 || i == 3) {
                        $('.gacha').render({
                            img: no_skillicon.includes(this_avatar._id) ? (imgpre + 'images/avatardrawcard/999.png') : (imgpre + 'images/' + this_avatar.Pic),
                            event: {
                                error: function (d) {
                                    $(d.sender).remove()
                                },
                                load: function (d) {
                                    console.log("FINISH_2")
                                }
                            },
                            style: {
                                width: '100%'
                            },
                            a: {
                                loading: lazy
                            }
                        })
                        $('.as_left').remove()
                        console.log("FINISH")
                    }
                    var mats_list = [
                        {
                            div: [
                                {
                                    a: '/sr/item/' + (mats[0] - 2),
                                    t: [
                                        {   
                                            img: imgpre + "images/" + _item[mats[0] - 2].Icon,
                                            event: {
                                                error: function (d) {
                                                    $(d.sender).hide()
                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                }
                                            },
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        {
                                            span: '56',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 5) && (this_avatar._id < 8000)
                                        },
                                        {
                                            span: '40',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 4) || (this_avatar._id > 8000)
                                        },
                                    ],
                                    class: 'mat_a hover-shadow',
                                },
                                {
                                    a: '/sr/item/' + (mats[0] - 1),
                                    t: [
                                        {   
                                            img: imgpre + "images/" + _item[mats[0] - 1].Icon,
                                            event: {
                                                error: function (d) {
                                                    $(d.sender).hide()
                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                }
                                            },
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        {
                                            span: '71',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 5) && (this_avatar._id < 8000)
                                        },
                                        {
                                            span: (this_avatar.Path == 'Remembrance') ? '52' : '55',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 4) || (this_avatar._id > 8000)
                                        },
                                    ],
                                    class: 'mat_a hover-shadow',
                                },
                                {
                                    a: '/sr/item/' + (mats[0]),
                                    t: [
                                        {   
                                            img: imgpre + "images/" + _item[mats[0]].Icon,
                                            event: {
                                                error: function (d) {
                                                    $(d.sender).hide()
                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                }
                                            },
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        {
                                            span: '73',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 5) && (this_avatar._id < 8000)
                                        },
                                        {
                                            span: (this_avatar.Path == 'Remembrance') ? '55' : '54',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 4) || (this_avatar._id > 8000)
                                        },
                                    ],
                                    class: 'mat_a hover-shadow',
                                },
                            ],
                            class: 'avatar_mat',
                        },
                        {
                            div: [
                                {
                                    a: '/sr/item/' + (mats[1]),
                                    t: [
                                        {   
                                            img: imgpre + "images/" + _item[mats[1]].Icon,
                                            event: {
                                                error: function (d) {
                                                    $(d.sender).hide()
                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                }
                                            },
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        {
                                            span: '65',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 5) && (this_avatar._id < 8000)
                                        },
                                        {
                                            span: '50',
                                            class: 'mat_num',
                                            when: this_avatar.Rarity == 4
                                        },
                                        {
                                            span: '28',
                                            class: 'mat_num',
                                            when: this_avatar._id > 8000
                                        },
                                    ],
                                    class: 'mat_a hover-shadow',
                                },
                            ],
                            class: 'avatar_mat',
                        },
                        {
                            div: [
                                {
                                    a: '/sr/item/' + (mats[2] - 2),
                                    t: [
                                        {   
                                            img: imgpre + "images/" + _item[mats[2] - 2].Icon,
                                            event: {
                                                error: function (d) {
                                                    $(d.sender).hide()
                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                }
                                            },
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        {
                                            span: '18',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 5) && (this_avatar._id < 8000)
                                        },
                                        {
                                            span: (this_avatar.Path == 'Remembrance') ? '9' : '12',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 4) || (this_avatar._id > 8000)
                                        },
                                    ],
                                    class: 'mat_a hover-shadow',
                                },
                                {
                                    a: '/sr/item/' + (mats[2] - 1),
                                    t: [
                                        {   
                                            img: imgpre + "images/" + _item[mats[2] - 1].Icon,
                                            event: {
                                                error: function (d) {
                                                    $(d.sender).hide()
                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                }
                                            },
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        {
                                            span: '69',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 5) && (this_avatar._id < 8000)
                                        },
                                        {
                                            span: (this_avatar.Path == 'Remembrance') ? '53' : '54',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 4) || (this_avatar._id > 8000)
                                        },
                                    ],
                                    class: 'mat_a hover-shadow',
                                },
                                {
                                    a: '/sr/item/' + (mats[2]),
                                    t: [
                                        {   
                                            img: imgpre + "images/" + _item[mats[2]].Icon,
                                            event: {
                                                error: function (d) {
                                                    $(d.sender).hide()
                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                }
                                            },
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        {
                                            span: '139',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 5) && (this_avatar._id < 8000)
                                        },
                                        {
                                            span: (this_avatar.Path == 'Remembrance') ? '105' : '105',
                                            class: 'mat_num',
                                            when: (this_avatar.Rarity == 4) || (this_avatar._id > 8000)
                                        },
                                    ],
                                    class: 'mat_a hover-shadow',
                                }
                            ],
                            class: 'avatar_mat',
                        },
                        {
                            div: [
                                {
                                    a: '/sr/item/' + (mats[3]),
                                    t: [
                                        {   
                                            img: imgpre + "images/" + _item[mats[3]].Icon,
                                            event: {
                                                error: function (d) {
                                                    $(d.sender).hide()
                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                }
                                            },
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        {
                                            span: '12',
                                            class: 'mat_num',
                                            when: this_avatar.Rarity == 5
                                        },
                                        {
                                            span: '12',
                                            class: 'mat_num',
                                            when: this_avatar.Rarity == 4
                                        },
                                    ],
                                    class: 'mat_a hover-shadow',
                                },
                            ],
                            class: 'avatar_mat',
                        },
                    ]
                    $('.after_2').render({
                        div: mats_list,
                        class: 'a_section_content',
                        style: {
                            'overflow-x': 'hidden',
                            display: 'flex',
                            'justify-content': 'center',
                            'flex-wrap': 'wrap',
                        }
                    })
                    if (i == 3 || i == 10) {
                        $('.after_1').render({
                            div: mats_list,
                            class: 'a_section_content',
                            style: {
                                'overflow-x': 'hidden',
                                display: 'flex',
                                'justify-content': 'center',
                                'flex-wrap': 'wrap',
                                'margin': '15px 0 10px'
                            },
                            a: {
                                id: 'skill_mat'
                            }
                        })
                        $('.after_1').render({
                            div: {
                                span: txt.Avatar_Head[4][lang3],
                                style: {
                                    padding: '5px 10px',
                                    border: '2px solid #f29e38',
                                    'border-radius': '5px'
                                },
                                class: 'hover-shadow',
                                click: function () {
                                    $('#to_mtc').click()
                                    $('container').scrollTop($('h3').height())
                                }
                            },
                            style: {
                                width: '100%',
                                display: 'flex',
                                'justify-content': 'center',
                                'font-weight': 'bold',
                                'margin-top': '0',
                                'margin-bottom': '5px',
                            },
                            class: 'to_mtc'
                        })
                    }
                    $('.after_3').render({
                        div: {
                            p: this_avatar.ISD ? this_avatar.ISD : ''
                        },
                        class: 'a_section_content',
                    })
                    $('.after_4').render({
                        div: [
                            {
                                div: [
                                    {
                                        p: 'CN',
                                        style: {
                                            'font-size': '13px',
                                            color: '#eeeeee'
                                        }
                                    },
                                    {
                                        p: cv[0],
                                        style: {
                                            'font-weight': 'bold'
                                        }
                                    }
                                ],
                                style: {
                                    margin: '10px'
                                }
                            },
                            {
                                div: [
                                    {
                                        p: 'EN',
                                        style: {
                                            'font-size': '13px',
                                            color: '#eeeeee'
                                        }
                                    },
                                    {
                                        p: cv[1],
                                        style: {
                                            'font-weight': 'bold'
                                        }
                                    }
                                ],
                                style: {
                                    margin: '10px'
                                }
                            },
                            {
                                div: [
                                    {
                                        p: 'JP',
                                        style: {
                                            'font-size': '13px',
                                            color: '#eeeeee'
                                        }
                                    },
                                    {
                                        p: cv[2],
                                        style: {
                                            'font-weight': 'bold'
                                        }
                                    }
                                ],
                                style: {
                                    margin: '10px'
                                }
                            },
                            {
                                div: [
                                    {
                                        p: 'KR',
                                        style: {
                                            'font-size': '13px',
                                            color: '#eeeeee'
                                        }
                                    },
                                    {
                                        p: cv[3],
                                        style: {
                                            'font-weight': 'bold'
                                        }
                                    }
                                ],
                                style: {
                                    margin: '10px'
                                }
                            }
                        ],
                        class: 'a_section_content mon_head',
                        style: {
                            'padding-bottom': '10px',
                            'text-align': 'center'
                        },
                        when: this_avatar.CV
                    })
                    clearInterval(fu)
                }
            }, 200)
        }
        if (i == 1221) {
            $('.mon_body').render({
                template: [
                    {
                        div: {
                            div: [
                                {
                                    div: {
                                        table: '',
                                        class: 'mtc_skill'
                                    },
                                    class: 'mtc_1'
                                },
                                {
                                    div: '',
                                    class: 'mtc_1 mtc_result'
                                }
                            ],
                            class: 'a_section_content',
                            style: {
                                display: 'flex',
                                'flex-wrap': 'wrap'
                            }
                        },
                        class: 'a_section'
                    },
                ]
            })
            _mtc[this_avatar._id].Skills.forEach(function (t, k) {
                var this_skill_options = {}
                for (var b = 1; b <= t.Level; b++) {
                    this_skill_options[b.toString()] = b
                }
                $('.mtc_skill').render({
                    tr: [
                        {
                            td: {
                                p: t.Name
                            },
                            class: 'mtc_upper',
                        },
                        {
                            td: {
                                div: [
                                    {
                                        select: '',
                                        options: this_skill_options,
                                        id: 'skill_low_' + k,
                                        class: 'watch',
                                    },
                                    {
                                        span: ' → ',
                                        class: 'arrow'
                                    },
                                    {
                                        select: '',
                                        options: this_skill_options,
                                        id: 'skill_high_' + k,
                                        class: 'watch',
                                    }
                                ],
                                style: {
                                    margin: '0',
                                }
                            },
                            class: 'mtc_lower'
                        }
                    ],
                })
                $('#skill_low_' + k).val(1)
                $('#skill_high_' + k).val(t.Level)
            })
            _mtc[this_avatar._id].Traces.forEach(function (t, k) {
                $('.mtc_skill').render({
                    tr: [
                        {
                            td: {
                                p: t.Name
                            },
                            class: 'mtc_upper',
                        },
                        {
                            td: _yes,
                            class: 'mtc_lower watch_2',
                            id: 'trace_' + k,
                            a: {
                                'data-id': '1'
                            }
                        }
                    ],
                })
            })
            _mtc[this_avatar._id].Points.forEach(function (t, k) {
                $('.mtc_skill').render({
                    tr: [
                        {
                            td: {
                                p: t.Name
                            },
                            class: 'mtc_upper',
                        },
                        {
                            td: _yes,
                            class: 'mtc_lower watch_2',
                            id: 'point_' + k,
                            a: {
                                'data-id': '1'
                            }
                        }
                    ],
                })
            })
            $('#lv_low').val('1')
            $('#lv_high').val('8')
            refresh_ctm()
        }
        $('.stat_ver_choose select').val(this_avatar_cur_ver)
        rotate()
        if (anniversary && ((this_avatar._id == 1221) || (this_avatar._id == 12210))) render_anni()
    }

    function aft1(stats) {
        return {
            div: [
                {
                    div: [
                        {
                            img: imgpre + 'images/Misc/_HP.png',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: ' <b>' + stats.HP.toFixed(1) + '</b> '
                        }
                    ],
                    class: 'addprop'
                },
                {
                    div: [
                        {
                            img: imgpre + 'images/Misc/_ATK.png',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: ' <b>' + stats.ATK.toFixed(2) + '</b> '
                        }
                    ],
                    class: 'addprop'
                },
                {
                    div: [
                        {
                            img: imgpre + 'images/Misc/_DEF.png',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: ' <b>' + stats.DEF.toFixed(2) + '</b> '
                        }
                    ],
                    class: 'addprop'
                },
                {
                    div: [
                        {
                            img: imgpre + 'images/Misc/_SPD.png',
                            class: 'special_2',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: ' <b>' + stats.SPD.toFixed(0) + '</b> '
                        }
                    ],
                    class: 'addprop'
                },
                {
                    div: [
                        {
                            img: imgpre + 'images/Misc/_ENERGY.png',
                            class: 'special_2',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: ' <b>' + this_avatar.SP.toFixed(0) + '</b> '
                        }
                    ],
                    class: 'addprop'
                },
            ],
            class: 'a_section_content mon_head avatar_stats',
            a: {
                id: 'stats_upper'
            },
            style: {
                'justify-content': 'center'
            }
        }
    }

    function popAvatar_2(ai) {

        this_avatar = _avatar[ai]
        switch_title(this_avatar.Name)
        $('.content').hide()
        $('.content_2').empty().render({
            template: [
                {
                    section: {
                        p: txt.Back[lang]
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
                            p: txt.Back[lang]
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
                {
                    div: '',
                    class: 'mon_body'
                },
            ]
        })
        $('.content_2').show()
        window.location.hash = '_' + this_avatar._id
        $('h3 .lang').html(`<a class='translate_' href='?lang=CH${window.location.hash}'><b>中文</b></a> | <a class='translate_' href='?lang=EN${window.location.hash}'><b>English</b></a> | <a class='translate_' href='?lang=JP${window.location.hash}'><b>日本語</b></a> | <a class='translate_' href='?lang=KR${window.location.hash}'><b>한국인</b></a>`)
        renderAvatarAfter_2()

    }

    function renderAvatarAfter_2() {

        var after_1 = aft1(this_avatar.Stats)
        var mats_list = []

        this_avatar.Mats.forEach(function (mat_grp) {
            var this_mat_stuff = []
            mat_grp.forEach(function (mat_data) {
                this_mat_stuff.push({
                    a: '/sr/item/' + mat_data.ID,
                    t: [
                        {   
                            img: "/images/itemicon/" + mat_data.ID + '.png',
                            event: {
                                error: function (d) {
                                    $(d.sender).hide()
                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                }
                            },
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: mat_data.Num.toString(),
                            class: 'mat_num',
                        }
                    ],
                    class: 'mat_a hover-shadow',
                },)
            })
            mats_list.push({
                div: this_mat_stuff,
                class: 'avatar_mat'
            })
        })

        $('.mon_body').render({
            template: [
                {
                    div: [
                        {
                            div: [
                                {
                                    p: this_avatar.Name,
                                    style: {
                                        'text-align': 'center',
                                        margin: '5px 10px',
                                        color: "#" + elemcolor[this_avatar.Element],
                                        'font-weight': 'bold',
                                        'font-size': '1.2em',
                                    }
                                },
                                {
                                    p: (this_avatar.Desc ? this_avatar.Desc : '').replaceAll('#', '</color>').replaceAll('@', "<color style='color:#FFD780;'>").replaceAll('$', '#'),
                                    style: {
                                        'text-align': 'center',
                                        margin: '-8px auto 8px',
                                        width: '100%',
                                        'font-size': '0.9em',
                                        'font-weight': 'bold'
                                    },
                                    when: this_avatar.Desc && this_avatar.Desc.length
                                },
                                {
                                    div: {
                                        span: '下载技能长图',
                                        style: {
                                            padding: '5px 10px',
                                            border: '2px solid #f29e38',
                                            'border-radius': '5px'
                                        },
                                        class: 'hover-shadow',
                                        click: function () {
                                            download(`/Char/HSR/${this_avatar.Name}/${VER_SR}.png`, `${this_avatar.Ver} ${this_avatar.Name}`)
                                        }
                                    },
                                    style: {
                                        width: '100%',
                                        display: check_pic_dl() ? 'flex' : 'none',
                                        'justify-content': 'center',
                                        'font-weight': 'bold',
                                        'margin-top': '0px',
                                        'margin-bottom': '5px',
                                    },
                                    class: 'pic_dl'
                                },
                                {
                                    div: {
                                        img: '/images/' + this_avatar.Icon.toLowerCase() + '.png',
                                        event: {
                                            error: function (d) {
                                                $(d.sender).hide()
                                                $(d.sender).parent().render({ img: '/images/' + this_avatar.Icon.replaceAll('avatarshopicon', 'avataricon').toLowerCase() + '.png', a: { loading: lazy } })
                                                $(d.sender).parent().removeClass('add_img_wrap_1').addClass('add_img_wrap_2')
                                            },
                                        },
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                    class: 'add_img_wrap add_img_wrap_1'
                                }
                            ],
                            class: 'a_section_content',
                        },
                        after_1,
                        {
                            div: mats_list,
                            class: 'a_section_content',
                            style: {
                                'overflow-x': 'hidden',
                                display: 'flex',
                                'justify-content': 'center',
                                'flex-wrap': 'wrap',
                                'margin': '15px 0 20px'
                            },
                            a: {
                                id: 'skill_mat'
                            }
                        }
                    ],
                    class: 'a_section'
                },
                emote_block
            ]
        })

        rotate()

        $('.after_1').render()

        this_avatar.Skills.forEach(function (skill_data) {
            if (skill_data == 0) {
                $('.mon_body').render(emote_block)
                return
            }
            var skill_data_content = []
            if (skill_data.Tag && skill_data.Tag.length) {
                skill_data_content.push({
                    p: skill_data.Tag,
                    style: {
                        'font-weight': 'bold',
                        'font-size': '0.9em',
                        'margin-bottom': '9px'
                    }
                })
            }
            if (skill_data.Desc) {
                skill_data_content.push({
                    p: skill_data.Desc.replaceAll('#', '</b></color>').replaceAll('@', "<color style='color:#F29E38';><b>").replaceAll('``', "<b>").replaceAll('`', '</b>').replaceAll('$', '#')
                })
            }
            if (skill_data.DescList) {
                skill_data.DescList.forEach(function (skill_desc) {
                    skill_data_content.push({
                        p: skill_desc.replaceAll('#', '</b></color>').replaceAll('@', "<color style='color:#F29E38';><b>").replaceAll('``', "<b>").replaceAll('`', '</b>').replaceAll('$', '#')
                    })
                })
            }
            $('.mon_body').render({
                div: [
                    {
                        div: {
                            p: skill_data.Name
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: skill_data_content,
                        class: 'a_section_content'
                    }
                ],
                class: 'a_section'
            })
        })
        rotate()
        console.log("FINISH")
    }

    $('body').on('click', '.watch_2', function () {
        if ($(this).attr('data-id') == '1') {
            $(this).attr('data-id', '0')
            $(this).css('opacity', '0')
        } else {
            $(this).attr('data-id', '1')
            $(this).css('opacity', '100%')
        }
        refresh_ctm()
    })

    $('body').on('change', '.watch', refresh_ctm)

    function refresh_ctm() {

        var _cumulative_mats = {}

        // Level
        var need_exp = 0
        var _big = 0
        var _mid = 0
        var _small = 0
        for (var j = parseInt($('#lv_low').val()) - 1; j < parseInt($('#lv_high').val()) - 1; j++) {
            need_exp = exp[j]
            _big += Math.floor(need_exp / 20000)
            need_exp -= Math.floor(need_exp / 20000) * 20000
            _mid += Math.floor(need_exp / 5000)
            need_exp -= Math.floor(need_exp / 5000) * 5000
            _small += Math.ceil(need_exp / 1000)
        }
        if (_small) _cumulative_mats[211] = _small
        if (_mid) _cumulative_mats[212] = _mid
        if (_big) _cumulative_mats[213] = _big
        if (_small || _mid || _big) _cumulative_mats[2] = _big * 2000 + _mid * 500 + _small * 100

        // Promotion
        for (var j = parseInt($('#lv_low').val()) - 1; j < parseInt($('#lv_high').val()) - 1; j++) {
            for (const [a, b] of Object.entries(_mtc[this_avatar._id].Promotion[j])) {
                if (!_cumulative_mats[a]) _cumulative_mats[a] = 0
                _cumulative_mats[a] += b
            }
        }

        // Skills
        _mtc[this_avatar._id].Skills.forEach(function (h, s) {
            for (var j = parseInt($('#skill_low_' + s).val()) - 1; j < parseInt($('#skill_high_' + s).val()) - 1; j++) {
                for (const [a, b] of Object.entries(_mtc[this_avatar._id].Skills[s].Mats[j])) {
                    if (!_cumulative_mats[a]) _cumulative_mats[a] = 0
                    _cumulative_mats[a] += b
                }
            }
        })

        // Traces
        _mtc[this_avatar._id].Traces.forEach(function (h, s) {
            if ($('#trace_' + s).attr('data-id') == '1') {
                for (const [a, b] of Object.entries(h.Mat)) {
                    if (!_cumulative_mats[a]) _cumulative_mats[a] = 0
                    _cumulative_mats[a] += b
                }
            }
        })

        // Points
        _mtc[this_avatar._id].Points.forEach(function (h, s) {
            if ($('#point_' + s).attr('data-id') == '1') {
                for (const [a, b] of Object.entries(h.Mat)) {
                    if (!_cumulative_mats[a]) _cumulative_mats[a] = 0
                    _cumulative_mats[a] += b
                }
            }
        })

        $('.mtc_result').empty()
        for (const [d, n] of Object.entries(_cumulative_mats)) {
            $('.mtc_result').render({
                a: '/sr/item/' + d,
                t: [
                    {
                        div: {
                            img: '/images/' + _item[d].Icon
                        },
                        class: 'mtc_result_item_icon'
                    },
                    {
                        div: n.toString(),
                        class: 'mtc_result_item_num'
                    }
                ],
                attr: {
                    target: '_blank'
                },
                class: 'mtc_result_item hover-shadow'
            })
        }

    }

    $('body').on('dblclick', ".special", function () {
        renderAvatar(10)
        $('.delll').hide()
        $('container').scrollTop(0)
    })
    $('body').on('dblclick', ".special_2", returnMain)

    $('body').on('click', '.up', function () {
        var sid = $(this).attr('data-id')
        var lv = parseInt($(".ld-" + sid)[0].innerHTML.replace("Lv", ""))
        var max = parseInt($(this).attr('data-max'))
        if (lv == max) return
        lv += 1
        $(".ld-" + sid).html("Lv" + lv)
        var S = _avatarskill[sid][this_avatar_cur_ver]
        $('.sd-' + sid).html(param(S.Desc, S.Params ? S.Params[lv - 1] : []))
    })

    $('body').on('click', '.down', function () {
        var sid = $(this).attr('data-id')
        var lv = parseInt($(".ld-" + sid)[0].innerHTML.replace("Lv", ""))
        if (lv == 1) return
        lv -= 1
        $(".ld-" + sid).html("Lv" + lv)
        var S = _avatarskill[sid][this_avatar_cur_ver]
        $('.sd-' + sid).html(param(S.Desc, S.Params ? S.Params[lv - 1] : []))
    })

    function popWeapon(ai) {
        this_avatar = {}
        this_weapon = _weapon[ai]
        switch_title(this_weapon.Name)
        var mats = this_weapon.Mat
        if (!mats) {
            mats = [112003, 112003]
        }
        var stats = this_weapon.Stats
        if (!stats) {
            stats = {
                HP: 0,
                ATK: 0,
                DEF: 0
            }
        }
        $('.content').hide()
        $('.content_2').empty().render({
            template: [
                {
                    section: {
                        p: txt.Back[lang]
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
                            p: txt.Back[lang]
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
                {
                    div: [
                        emote_block,
                        {
                            div: {
                                div: [
                                    {
                                        div: '',
                                        class: 'weapon_left dissolve'
                                    },
                                    {
                                        div: [
                                            {
                                                div: [
                                                    {
                                                        p: this_weapon.Name,
                                                        style: {
                                                            'font-weight': 'bold',
                                                            'text-align': 'center'
                                                        },
                                                        class: 'weapon_title'
                                                    },
                                                    {
                                                        p: {
                                                            img: imgpre + 'images/Paths/' + this_weapon.Path + '.png',
                                                            style: {
                                                                width: '13%',
                                                                'max-width': '48px',
                                                                margin: '9px auto',
                                                            },
                                                            when: this_weapon.Path != undefined,
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        style: {
                                                            'text-align': 'center'
                                                        },
                                                    },
                                                    {
                                                        p: '',
                                                        class: 'weapon_story t_desc',
                                                        when: (window.innerWidth >= 800) && lazy.length,
                                                    }
                                                ]
                                            },
                                            {
                                                div: [
                                                    {
                                                        div: [
                                                            {
                                                                img: imgpre + 'images/Misc/_HP.png',
                                                                a: {
                                                                    loading: lazy
                                                                }
                                                            },
                                                            {
                                                                span: ' <b>' + stats.HP.toFixed(1) + '</b> '
                                                            }
                                                        ],
                                                        class: 'addprop_'
                                                    },
                                                    {
                                                        div: [
                                                            {
                                                                img: imgpre + 'images/Misc/_ATK.png',
                                                                a: {
                                                                    loading: lazy
                                                                }
                                                            },
                                                            {
                                                                span: ' <b>' + stats.ATK.toFixed(2) + '</b> '
                                                            }
                                                        ],
                                                        class: 'addprop_'
                                                    },
                                                    {
                                                        div: [
                                                            {
                                                                img: imgpre + 'images/Misc/_DEF.png',
                                                                a: {
                                                                    loading: lazy
                                                                }
                                                            },
                                                            {
                                                                span: ' <b>' + stats.DEF.toFixed(2) + '</b> '
                                                            }
                                                        ],
                                                        class: 'addprop_'
                                                    },
                                                ],
                                                class: 'mon_head',
                                                style: (window.innerWidth < 800) ? { 'margin-top': '-30px' } : {}
                                            },
                                        ],
                                        class: 'weapon_right'
                                    }
                                ],
                                class: 'a_section_content mon_head'
                            },
                            class: 'a_section'
                        },
                        {
                            div: [],
                            class: 'a_section t_skill'
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    a: '/sr/item/' + (mats[0] - 2),
                                                    t: [
                                                        {   
                                                            img: imgpre + "images/" + _item[mats[0] - 2].Icon,
                                                            event: {
                                                                error: function (d) {
                                                                    $(d.sender).hide()
                                                                }
                                                            },
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: '20',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 5
                                                        },
                                                        {
                                                            span: '15',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 4
                                                        },
                                                        {
                                                            span: '12',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 3
                                                        },
                                                    ],
                                                    class: 'mat_a hover-shadow',
                                                },
                                                {
                                                    a: '/sr/item/' + (mats[0] - 1),
                                                    t: [
                                                        {   
                                                            img: imgpre + "images/" + _item[mats[0] - 1].Icon,
                                                            event: {
                                                                error: function (d) {
                                                                    $(d.sender).hide()
                                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                                }
                                                            },
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: '20',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 5
                                                        },
                                                        {
                                                            span: '15',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 4
                                                        },
                                                        {
                                                            span: '10',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 3
                                                        },
                                                    ],
                                                    class: 'mat_a hover-shadow',
                                                },
                                                {
                                                    a: '/sr/item/' + (mats[0]),
                                                    t: [
                                                        {   
                                                            img: imgpre + "images/" + _item[mats[0]].Icon,
                                                            event: {
                                                                error: function (d) {
                                                                    $(d.sender).hide()
                                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                                }
                                                            },
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: '14',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 5
                                                        },
                                                        {
                                                            span: '12',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 4
                                                        },
                                                        {
                                                            span: '8',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 3
                                                        },
                                                    ],
                                                    class: 'mat_a hover-shadow',
                                                },
                                            ],
                                            class: 'avatar_mat',
                                        },
                                        {
                                            div: [
                                                {
                                                    a: '/sr/item/' + (mats[1] - 2),
                                                    t: [
                                                        {   
                                                            img: imgpre + "images/" + _item[mats[1] - 2].Icon,
                                                            event: {
                                                                error: function (d) {
                                                                    $(d.sender).hide()
                                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                                }
                                                            },
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: '4',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 5
                                                        },
                                                        {
                                                            span: '3',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 4
                                                        },
                                                        {
                                                            span: '2',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 3
                                                        },
                                                    ],
                                                    class: 'mat_a hover-shadow',
                                                },
                                                {
                                                    a: '/sr/item/' + (mats[1] - 1),
                                                    t: [
                                                        {   
                                                            img: imgpre + "images/" + _item[mats[1] - 1].Icon,
                                                            event: {
                                                                error: function (d) {
                                                                    $(d.sender).hide()
                                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                                }
                                                            },
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: '12',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 5
                                                        },
                                                        {
                                                            span: '9',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 4
                                                        },
                                                        {
                                                            span: '6',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 3
                                                        },
                                                    ],
                                                    class: 'mat_a hover-shadow',
                                                },
                                                {
                                                    a: '/sr/item/' + (mats[1]),
                                                    t: [
                                                        {   
                                                            img: imgpre + "images/" + _item[mats[1]].Icon,
                                                            event: {
                                                                error: function (d) {
                                                                    $(d.sender).hide()
                                                                    $(d.sender).parent().render({ img: '/images/itemicon/Icon_Testmaterial01.png', a: { loading: lazy } })
                                                                }
                                                            },
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: '15',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 5
                                                        },
                                                        {
                                                            span: '12',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 4
                                                        },
                                                        {
                                                            span: '9',
                                                            class: 'mat_num',
                                                            when: this_weapon.Rarity == 3
                                                        },
                                                    ],
                                                    class: 'mat_a hover-shadow',
                                                },
                                            ],
                                            class: 'avatar_mat',
                                        },
                                    ],
                                    class: 'a_section_content',
                                    style: {
                                        'overflow-x': 'hidden',
                                        display: 'flex',
                                        'justify-content': 'space-evenly',
                                        'flex-wrap': 'wrap',
                                    }
                                },
                            ],
                            class: 'a_section',
                            when: this_weapon.Mat,
                            style: {
                                'padding-top': '6px'
                            }
                        },
                        {
                            div: {
                                div: {
                                    p: '',
                                    class: 'weapon_story t_desc'
                                },
                                class: 'a_section_content'
                            },
                            class: 'a_section',
                            when: (window.innerWidth < 800) && lazy.length
                        },
                    ],
                    class: 'mon_body'
                },
            ]
        })
        rotate()
        $('.content_2').show()
        window.location.hash = '_' + this_weapon._id
        $('h3 .lang').html(`<a class='translate_' href='?lang=CH${window.location.hash}'><b>中文</b></a> | <a class='translate_' href='?lang=EN${window.location.hash}'><b>English</b></a> | <a class='translate_' href='?lang=JP${window.location.hash}'><b>日本語</b></a> | <a class='translate_' href='?lang=KR${window.location.hash}'><b>한국인</b></a>`)
        if (!loaded.includes(this_weapon._id)) {
            let script_computer_a = document.createElement('script')
            script_computer_a.src = '/data/' + lang3 + '/Weapon/' + this_weapon._id + '.js'
            document.head.append(script_computer_a)
            script_computer_a.onload = function () {
                loaded.push(this_weapon._id)
                _weapondesc = {..._weapondesc, ..._weapondesc_}
                _weaponskill = {..._weaponskill, ..._weaponskill_}
                decorateWeapon()
            }
        } else {
            decorateWeapon()
        }

    }

    function decorateWeapon() {
        this_weapon_vers = getVer(_weaponskill[this_weapon.Skill])
        this_weapon_cur_ver = this_weapon_vers[1]
        $('.t_desc').html(_weapondesc[this_weapon._id])
        $('.t_skill').render([
            {
                div: [
                    {
                        span: _weaponskill[this_weapon.Skill][this_weapon_cur_ver].Name,
                        style: {
                            'margin': '0'
                        },
                        class: 'weapon_skill_name'
                    },
                    {
                        span: {
                            select: '',
                            options: this_weapon_vers[0]
                        },
                        class: 'stat_ver_choose_w'
                    }
                ],
                class: 'a_section_head'
            },
            {
                div: {
                    p: function (j) {
                        return j.data.replaceAll("<color style='color:#f29e38;'>", "<color style='color:#f29e38;'><b>").replaceAll("</color>", "</b></color>")
                    },
                    data: _weaponskill[this_weapon.Skill][this_weapon_cur_ver].Desc
                },
                class: 'a_section_content weapon_skill'
            },
        ])
        $('.weapon_left').render({
            img: imgpre + 'images/lightconemaxfigures/' + this_weapon.Pic,
            event: {
                error: function (d) {
                    $(d.sender).remove()
                },
                load: function (d) {
                    console.log("FINISH_2")
                }
            },
            a: {
                loading: lazy
            }
        })
        $('.stat_ver_choose_w select').val(this_weapon_cur_ver)
        console.log("FINISH")
    }

    function popRelic(ai) {
        this_avatar = {}
        this_relic = _relic[ai]
        switch_title(this_relic.Name)
        var skill_show = []
        this_relic.Skills.forEach(function (j, i) {
            skill_show.push({
                p: "<b><color style='color:#f29d38'>" + ((i + 1) * 2) + "P</color></b> " + j,
                class: 'desc',
            },)
        })
        $('.content').hide()
        var stuff = {
            div: {
                div: [
                    {
                        img: imgpre + 'images/itemfigures/' + this_relic.Icon,
                        event: {
                            error: function (d) {
                                $(d.sender).remove()
                            }
                        },
                        class: 'icon',
                        a: {
                            loading: lazy
                        }
                    },
                    {
                        p: 'ID ' + this_relic._id.toString(),
                        class: 'relic_id'
                    },
                    {
                        p: this_relic.Name,
                        class: 'name'
                    },
                ].concat(skill_show),
                class: 'a_section_content',
            },
            class: 'a_section'
        }
        $('.content_2').empty().render({
            template: [
                {
                    section: {
                        p: txt.Back[lang]
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
                            p: txt.Back[lang]
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
                {
                    div: lazy ? [emote_block, stuff] : [stuff, emote_block],
                    class: 'mon_body'
                },
            ]
        })
        rotate()
        $('.content_2').show()
        window.location.hash = '_' + this_relic._id
        $('h3 .lang').html(`<a class='translate_' href='?lang=CH${window.location.hash}'><b>中文</b></a> | <a class='translate_' href='?lang=EN${window.location.hash}'><b>English</b></a> | <a class='translate_' href='?lang=JP${window.location.hash}'><b>日本語</b></a> | <a class='translate_' href='?lang=KR${window.location.hash}'><b>한국인</b></a>`)
        if (!loaded.includes(this_relic._id)) {
            let script_computer_a = document.createElement('script')
            script_computer_a.src = '/data/' + lang3 + '/Relic/' + this_relic._id + '.js'
            document.head.append(script_computer_a)
            script_computer_a.onload = function () {
                loaded.push(this_relic._id)
                _relicitem = {..._relicitem, ..._relicitem_}
                decorateRelic()
            }
        } else {
            decorateRelic()
        }
    }

    function decorateRelic() {
        console.log("FINISH")
        _relicitem[this_relic._id].forEach(function (t, i) {
            if (!lazy) return
            $('.mon_body').render({
                template: {
                    div: {
                        div: [
                            {
                                img: imgpre + 'images/relicfigures/' + t.Icon,
                                event: {
                                    error: function (d) {
                                        $(d.sender).remove()
                                    }
                                },
                                class: 'icon',
                                a: {
                                    loading: lazy
                                }
                            },
                            {
                                p: t.Name,
                                class: 'name',
                                style: {
                                    'font-size': '1.2em'
                                }
                            },
                            {
                                p: t.Desc,
                                class: 'desc',
                                style: {
                                    'text-align': 'center'
                                }
                            },
                            {
                                hr: '',
                                style: {
                                    'border-color': '#bbbbbb',
                                    margin: '25px auto 20px'
                                }
                            },
                            {
                                p: t.Story,
                                class: 'desc'
                            }
                        ],
                        class: 'a_section_content'
                    },
                    class: 'a_section',
                }
            })
        })
        console.log("FINISH_2")
    }

    function getVer(dic) {
        var di = Object.keys(dic)
        return getVerAvatar(di)
    }

    function getVerAvatar(di) {
        var out = {}
        di.forEach(function (k) {
            if (k == "Pre" || k == "Live") {
                out[txt.Live_Name[lang]] = k
            } else {
                out[k] = k
            }
        })
        return [out, di[di.length - 1]]
    }

    function param(text, params) {
        var PP = text.replaceAll("#1[f]", params[0]).replaceAll("#2[f]", params[1]).replaceAll("#3[f]", params[2]).replaceAll("#4[f]", params[3]).replaceAll("#5[f]", params[4]).replaceAll("#6[f]", params[5]).replaceAll("#7[f]", params[6]).replaceAll("#8[f]", params[7]).replaceAll("#9[f]", params[8]).replaceAll("#10[f]", params[9]).replaceAll("#11[f]", params[10]).replaceAll("#12[f]", params[11]).replaceAll("#1[p]", rn(params[0] * 100) + "%").replaceAll("#2[p]", rn(params[1] * 100) + "%").replaceAll("#3[p]", rn(params[2] * 100) + "%").replaceAll("#4[p]", rn(params[3] * 100) + "%").replaceAll("#5[p]", rn(params[4] * 100) + "%").replaceAll("#6[p]", rn(params[5] * 100) + "%").replaceAll("#7[p]", rn(params[6] * 100) + "%").replaceAll("#8[p]", rn(params[7] * 100) + "%").replaceAll("#9[p]", rn(params[8] * 100) + "%").replaceAll("#10[p]", rn(params[9] * 100) + "%").replaceAll("#11[p]", rn(params[10] * 100) + "%").replaceAll("#12[p]", rn(params[11] * 100) + "%")
        return PP.replaceAll("#", "</color>").replaceAll("@", "<color style='color:#f29e38;'>").replaceAll('<br><br>', '<p style="height:0.7em;width:100%;"> </p>').replaceAll("$", "#")
    }

    function rn(n) {
        if (!n.toString().includes('.')) return n.toString()
        var s = n.toString().substring(n.toString().indexOf('.'))
        if (s.includes('999')) return n.toFixed(s.indexOf('999') - 1)
        if (s.includes('000')) return n.toFixed(s.indexOf('000') - 1)
        return n.toString()
    }

    $('body').on('change', '.stat_ver_choose select', function () {
        unchanged = 0
        this_avatar_cur_ver = $(this).val()
        renderAvatar(cur_avatar_page)
    })

    $('body').on('change', '.stat_ver_choose_w select', function () {
        this_weapon_cur_ver = $(this).val()
        $('.weapon_skill_name').html(_weaponskill[this_weapon.Skill][this_weapon_cur_ver].Name)
        $('.weapon_skill').empty().render({
            p: function (w) {
                return w.data.replaceAll("<color style='color:#f29e38;'>", "<color style='color:#f29e38;'><b>").replaceAll("</color>", "</b></color>")
            },
            data: _weaponskill[this_weapon.Skill][this_weapon_cur_ver].Desc
        })
    })

    function show_cl() {
        $('.cl_all').show()
        $('.__cl').css('background-color', '#27363E')
        $('.__cl').css('color', '#eee')
        $('.__up').css('background-color', 'transparent')
        $('.__up').css('color', '#000')
        $('.__hn').css('background-color', 'transparent')
        $('.__hn').css('color', '#000')
        $('.__boss').css('background-color', 'transparent')
        $('.__boss').css('color', '#000')
        $('.__pic').css('background-color', 'transparent')
        $('.__pic').css('color', '#000')
        $('.__vid').css('background-color', 'transparent')
        $('.__vid').css('color', '#000')
        $('.__ann').css('background-color', 'transparent')
        $('.__ann').css('color', '#000')
    }

    function hide_cl() {
        $('.cl_all').hide()
        $('.__cl').css('background-color', 'transparent')
        $('.__cl').css('color', '#000')
    }

    function show_up() {
        $('.up_all').show()
        $('.__up').css('background-color', '#27363E')
        $('.__up').css('color', '#eee')
        $('.__cl').css('background-color', 'transparent')
        $('.__cl').css('color', '#000')
        $('.__hn').css('background-color', 'transparent')
        $('.__hn').css('color', '#000')
        $('.__boss').css('background-color', 'transparent')
        $('.__boss').css('color', '#000')
        $('.__pic').css('background-color', 'transparent')
        $('.__pic').css('color', '#000')
        $('.__vid').css('background-color', 'transparent')
        $('.__vid').css('color', '#000')
        $('.__ann').css('background-color', 'transparent')
        $('.__ann').css('color', '#000')
    }

    function hide_up() {
        $('.up_all').hide()
        $('.__up').css('background-color', 'transparent')
        $('.__up').css('color', '#000')
    }

    function show_hn() {
        $('.hn_all').show()
        $('.__hn').css('background-color', '#27363E')
        $('.__hn').css('color', '#eee')
        $('.__up').css('background-color', 'transparent')
        $('.__up').css('color', '#000')
        $('.__cl').css('background-color', 'transparent')
        $('.__cl').css('color', '#000')
        $('.__boss').css('background-color', 'transparent')
        $('.__boss').css('color', '#000')
        $('.__pic').css('background-color', 'transparent')
        $('.__pic').css('color', '#000')
        $('.__vid').css('background-color', 'transparent')
        $('.__vid').css('color', '#000')
        $('.__ann').css('background-color', 'transparent')
        $('.__ann').css('color', '#000')
    }

    function hide_hn() {
        $('.hn_all').hide()
        $('.__hn').css('background-color', 'transparent')
        $('.__hn').css('color', '#000')
    }

    function show_boss() {
        $('.boss_all').show()
        $('.__boss').css('background-color', '#27363E')
        $('.__boss').css('color', '#eee')
        $('.__hn').css('background-color', 'transparent')
        $('.__hn').css('color', '#000')
        $('.__up').css('background-color', 'transparent')
        $('.__up').css('color', '#000')
        $('.__cl').css('background-color', 'transparent')
        $('.__cl').css('color', '#000')
        $('.__pic').css('background-color', 'transparent')
        $('.__pic').css('color', '#000')
        $('.__vid').css('background-color', 'transparent')
        $('.__vid').css('color', '#000')
        $('.__ann').css('background-color', 'transparent')
        $('.__ann').css('color', '#000')
    }

    function hide_boss() {
        $('.boss_all').hide()
        $('.__boss').css('background-color', 'transparent')
        $('.__boss').css('color', '#000')
    }

    function show_pic() {
        $('.pic_data').render(emote_block)
        rotate()
        pic_index.forEach(function (t) {
            $('.pic_data').render({
                div: [
                    {
                        div: {
                            p: t.N,
                            style: {
                                'text-align': 'center'
                            }
                        },
                        class: 'a_section_head',
                        style: {
                            'justify-content': 'center',
                        }
                    },
                    {
                        div: function (k) {
                            t.V.forEach(function (u) {
                                $(k.container).render({
                                    span: u,
                                    class: 'pic_span hover-shadow',
                                    style: {
                                        margin: '8px'
                                    },
                                    click: function (l) {
                                        download(`/Char/HSR/${t.N}/${u}.png`, `${u} ${t.N}`)
                                    }
                                })
                            })
                        },
                        class: 'a_section_content',
                        style: {
                            display: 'flex',
                            'justify-content': 'center',
                            'flex-wrap': 'wrap'
                        }
                    },
                ],
                class: 'a_section',
            })
        })
        $('.pic_all').show()
        $('.__pic').css('background-color', '#27363E')
        $('.__pic').css('color', '#eee')
        $('.__hn').css('background-color', 'transparent')
        $('.__hn').css('color', '#000')
        $('.__up').css('background-color', 'transparent')
        $('.__up').css('color', '#000')
        $('.__cl').css('background-color', 'transparent')
        $('.__cl').css('color', '#000')
        $('.__boss').css('background-color', 'transparent')
        $('.__boss').css('color', '#000')
        $('.__vid').css('background-color', 'transparent')
        $('.__vid').css('color', '#000')
        $('.__ann').css('background-color', 'transparent')
        $('.__ann').css('color', '#000')
    }

    function hide_pic() {
        $('.pic_all').hide()
        $('.pic_data').empty()
        $('.__pic').css('background-color', 'transparent')
        $('.__pic').css('color', '#000')
    }

    function show_ann() {
        $('.ann_all').show()
        $('.__ann').css('background-color', '#27363E')
        $('.__ann').css('color', '#eee')
        $('.__hn').css('background-color', 'transparent')
        $('.__hn').css('color', '#000')
        $('.__up').css('background-color', 'transparent')
        $('.__up').css('color', '#000')
        $('.__cl').css('background-color', 'transparent')
        $('.__cl').css('color', '#000')
        $('.__boss').css('background-color', 'transparent')
        $('.__boss').css('color', '#000')
        $('.__vid').css('background-color', 'transparent')
        $('.__vid').css('color', '#000')
        $('.__pic').css('background-color', 'transparent')
        $('.__pic').css('color', '#000')
    }

    function hide_ann() {
        $('.ann_all').hide()
        $('.ann_data').empty()
        $('.__ann').css('background-color', 'transparent')
        $('.__ann').css('color', '#000')
    }

    function show_vid() {
        $('.vid_data').render(emote_block)
        rotate()
        _vid_index.forEach(function (t) {
            $('.vid_data').render({
                div: [
                    {
                        div: {
                            p: t.Name,
                            style: {
                                'text-align': 'center'
                            }
                        },
                        class: 'a_section_head',
                        style: {
                            'justify-content': 'center',
                        }
                    },
                    {
                        div: {
                            p: '＋'
                        },
                        class: 'a_section_content vid_toggle_ctrl vid_toggle vid_up vid_id_' + t._id
                    },
                    {
                        div: {
                            p: '−'
                        },
                        class: 'a_section_content vid_toggle_ctrl vid_toggle vid_down vid_id_' + t._id
                    },
                    {
                        div: function (k) {
                            t.Skills.forEach(function (u) {
                                _vid[u].forEach(function (v) {
                                    $(k.container).render({
                                        div: [
                                            {
                                                p: v.Name + ' ' + v.Size + 'MB',
                                                class: 'pic_span_small pic_span_small_span'
                                            },
                                            {
                                                div: {
                                                    video: {
                                                        source: '',
                                                        a: {
                                                            src: v.Path,
                                                            type: 'video/mp4'
                                                        }
                                                    },
                                                    a: {
                                                        controls: ''
                                                    }
                                                },
                                                class: 'vid_video',
                                            }
                                        ],
                                        class: 'vid_single'
                                    })
                                })
                            })
                        },
                        class: 'a_section_content vid_toggle vid_down vid_id_' + t._id,
                        style: {
                            display: 'flex',
                            'justify-content': 'center',
                            'flex-wrap': 'wrap'
                        }
                    },
                ],
                class: 'a_section',
            })
        })
        $('.vid_down').hide()
        $('.vid_all').show()
        $('.__vid').css('background-color', '#27363E')
        $('.__vid').css('color', '#eee')
        $('.__hn').css('background-color', 'transparent')
        $('.__hn').css('color', '#000')
        $('.__up').css('background-color', 'transparent')
        $('.__up').css('color', '#000')
        $('.__cl').css('background-color', 'transparent')
        $('.__cl').css('color', '#000')
        $('.__boss').css('background-color', 'transparent')
        $('.__boss').css('color', '#000')
        $('.__ann').css('background-color', 'transparent')
        $('.__ann').css('color', '#000')
    }

    function hide_vid() {
        $('.vid_all').hide()
        $('.vid_data').empty()
        $('.__vid').css('background-color', 'transparent')
        $('.__vid').css('color', '#000')
    }

    function download(link, name) {
        if (download_cd) return
        download_cd = 1
        setTimeout(function () {
            download_cd = 0
        }, 2000)
        $('.temp').remove()
        $('.content').render({
            a: link,
            attr: {
                download: `${name}.png`
            },
            style: {
                display: 'none'
            },
            t: {
                p: 'temp'
            },
            class: 'temp'
        })
        $('.temp p').click()
        //gtag('event', 'download_sr_char', {
        //    'type': 'sr_char'
        //})
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
        $('.content_2').empty()
        $('.content').show()
        $('container').scrollTop(cur_coordinate)
        window.location.hash = ''
        $('h3 .lang').html(`<a class='translate_' href='?lang=CH${window.location.hash}'><b>中文</b></a> | <a class='translate_' href='?lang=EN${window.location.hash}'><b>English</b></a> | <a class='translate_' href='?lang=JP${window.location.hash}'><b>日本語</b></a> | <a class='translate_' href='?lang=KR${window.location.hash}'><b>한국인</b></a>`)
    }

    window.onhashchange = function() {
        if (!window.location.hash.includes("_")) {
            returnMain()
        }
    }

    function plus(n) {
        return '<color style="font-size:0.86em;position:relative">＋' + n + '</color>'
    }

    function dif_pre(a, b) {
        var aa = a
        var bb = b
        if (lang3 == "CH" || lang3 == "JP") {
            return diffCH.diff(aa, bb)
        } else {
            return diffEN.diff(aa, bb)
        }
    }

    function dif(a, b, l) {
        var p_a = a.replaceAll("</color>", "#").replaceAll("<color style='color:#f29e38;'>", "@").replaceAll("<color style='color:#f29e38'>", "@").replaceAll("<color style=\"color:#f29e38;\">", "@").replaceAll("<color style=\"color:#f29e38\">", "@").replaceAll("<u>", "").replaceAll("</u>", "").replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#")
        var p_b = b.replaceAll("</color>", "#").replaceAll("<color style='color:#f29e38;'>", "@").replaceAll("<color style='color:#f29e38'>", "@").replaceAll("<color style=\"color:#f29e38;\">", "@").replaceAll("<color style=\"color:#f29e38\">", "@").replaceAll("<u>", "").replaceAll("</u>", "").replaceAll(".0 ", " ").replaceAll(".0</b>", "</b>").replaceAll(".0</color>", "</color>").replaceAll(".0%", "%").replaceAll(".0.", ".").replaceAll(".0,", ",").replaceAll(".0#", "#")
        var predif = dif_pre(p_a, p_b)
        var o_ = 0
        var a_ = 0
        var d_ = 0
        var out = ""
        predif.forEach(function (u) {
            if (u.added) {
                out += "<span style='background-color:$006600'>" + u.value + "</span>"
                a_ += u.value.replaceAll("</color>", "").replaceAll("<br>", "").replaceAll("<color style='color:#f29e38;'>", "").replaceAll("<color style='color:#f29e38'>", "").length
            } else if (u.removed) {
                out += "<span style='background-color:$880000'><del>" + u.value + "</del></span>"
                d_ += u.value.replaceAll("</color>", "").replaceAll("<br>", "").replaceAll("<color style='color:#f29e38;'>", "").replaceAll("<color style='color:#f29e38'>", "").length
            } else {
                out += u.value
                o_ += u.value.replaceAll("</color>", "").replaceAll("<br>", "").replaceAll("<color style='color:#f29e38;'>", "").replaceAll("<color style='color:#f29e38'>", "").length
            }
        })
        if ((predif.length > l || a_ > o_ || d_ > o_) && l != -1) {
            out = p_a + "<br>@↓↓#<br>" + p_b
        }
        return out.replaceAll("#", "</color>").replaceAll("@", "<color style='color:$f29e38;'>")
    }
    
    $('body').on('click', '.show_up', function () {
        if ($(this).find('p')[0].innerHTML == '＋') {
            $(this).find('p')[0].innerHTML = '−'
        } else {
            $(this).find('p')[0].innerHTML = '＋'
        }
    })

    $('body').on('click', '.voice span', function () {
        var audio = new Audio(imgpre + 'audio/sr/' + $(this).attr('data-id'))
        audio.play()
        var audio2 = new Audio(imgpre + 'audio/sr/' + $(this).attr('data-id').replaceAll('.wav', ' (1994314806=2606640075).wav'))
        audio2.play()
        console.log(imgpre + 'audio/sr/' + $(this).attr('data-id'))
    })

    $('body').on('dblclick', '.dissolve', function () {
        $('h3').toggle()
        $('.content_2>.mon_head').toggle()
        $('.content_2').css('min-height', '0')
        $('.content_2').css('padding', '5px 0')
        $('#back_2').remove()
        shotting = 1 - shotting
        a_section_white()
    })

    $('body').on('click', '.dissolve', function () {
        rotate()
    })

    $('body').on('click', '.keq_emote_div', function () {
        rotate()
    })

    $('body').on('click', '.cl', function () {
        rotate()
    })

    $('body').on('click', '.gacha', function () {
        if (!shotting) return
        showing_c++
        $('.c_0').hide()
        if (showing_c % 3 == 0) {
            $('.c_1').show()
        }
        if (showing_c % 3 == 1) {
            $('.c_2').show()
        }
        if (showing_c % 3 == 2) {
            $('.c_3').show()
        }
    })

    function rotate() {
        var keq_emotes = ['1', '2', '3']
        $('.keq_emote_div').each(function () {
            var this_emote = keq_emotes[Math.floor(Math.random() * keq_emotes.length)]
            $(this).empty().render({
                img: `/images/emote/Yunli/${this_emote}.png`
            })
        })
    }

    function ppics(txt) {
        return txt.replaceAll("- HP", `<span class='sbp'><img src='${imgpre}images/Misc/_HP.png'>`).replaceAll("- ATK", `<span class='sbp'><img src='${imgpre}images/Misc/_ATK.png'>`).replaceAll("- DEF", `<span class='sbp'><img src='${imgpre}images/Misc/_DEF.png'>`).replaceAll("- SPD", `<span class='sbp'><img src='${imgpre}images/Misc/_SPD.png'>`).replaceAll("- Energy", `<span class='sbp'><img src='${imgpre}images/Misc/_ENERGY.png'>`).replaceAll(" ;", `</span>`).replaceAll("- 生命值", `<span class='sbp'><img src='${imgpre}images/Misc/_HP.png'>`).replaceAll("- 攻击力", `<span class='sbp'><img src='${imgpre}images/Misc/_ATK.png'>`).replaceAll("- 防御力", `<span class='sbp'><img src='${imgpre}images/Misc/_DEF.png'>`).replaceAll("- 速度", `<span class='sbp'><img src='${imgpre}images/Misc/_SPD.png'>`).replaceAll("- 能量上限", `<span class='sbp'><img src='${imgpre}images/Misc/_ENERGY.png'>`).replaceAll("- 能量", `<span class='sbp'><img src='${imgpre}images/Misc/_ENERGY.png'>`)
    }

    $('body').on('dblclick', '.zhankai', function (d) {
        if ($("#UPDATE").val() == 3) {
            console.log($(this))
            $(this).parent().hide()
        }
    })

    $('body').on('click', '.vid_toggle_ctrl', function (d) {
        $(this).toggle()
        $(this).siblings('.vid_toggle').toggle()
    })

})