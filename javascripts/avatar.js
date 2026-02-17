$(function () {

    var anniversary = 0
    var cur_time = Date.now()
    var keqing_birthday = Date.parse('2025-11-20T00:00:00+08:00')
    console.log(cur_time)
    if ((cur_time >= Date.parse('2025-10-08T04:00:00+08:00')) && (cur_time <= Date.parse('2025-12-21T04:00:00+08:00'))) anniversary = 1

    var download_cd = 0

    var meow = (lang == 'CH') ? '喵' : '~'
    var meow2 = (lang == 'CH') ? '喵喵喵' : ' Meow Meow~'
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'

    var hyperlink_name = (lang == 'CH') ? '名词' : 'Noun'

    ICON_NOT_SHOW = []

    _AvatarDataConfig = {}
    _AvatarMats = {}
    _AvatarSkillPConfig = {}
    _AvatarAttackConfig = {}

    _AvatarFetterConfig = {} 
    _AvatarCostumeConfig = {}
    _AvatarTeapotTalk = {}
    acs_cache = {}

    _WeaponAffixPConfig = {}
    weapon_story_cache = {}

    relic_story_cache = {}

    picture_mode = 0
    skill_or_talent = 0
    o = 0
    var exp = [
        120175,
        578325,
        579100,
        854125,
        1195925,
        1611875,
        3423125
    ]

    var this_ver_ = ""
    var ou1;
    var ou2;
    var showtop = 0
    var owl = 0

    var avid = $('#AVID').val()
    if (avid) avid = avid.replace("New", "")
    if (avid == 'change5') {
        avid = ''
        $('#AVID').val('')
        $("#UPDATE").val(41)
    }
    if (!avid && window.location.hash) avid = window.location.hash.replace('#_', '')
    if (window.location.hash) window.location.hash = ''
    $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`));
    var imgpre = $('#IMGPRE').val()
    init_title(computer_.MiscText.PAGE_TITLE[lang])
    var current_name = ""
    var current_type = ""
    var cur_story_ver = 0
    var cur_wpn = {}
    var click_cd = 0
    var cur_relic = {}
    var cur_avatar = {}
    colors = {
        "Fire": "#FF9999",
        "Water": "#80C0FF",
        "Elec": "#FFACFF",
        "Ice": "#99FFFF",
        "Grass": "#99FF88",
        "Wind": "#80FFD7",
        "Rock": "#FFE699",
        "Grey": ""
    }
    var emote_num = 20
    var unused_emotes = []
    
    var global_var_weapon_rarity = 5
    var global_var_weapon_type = 1

    var global_var_avatar_hex = 0
    var global_var_avatar_rarity = 5
    var global_var_avatar_element = {
        Fire: 0,
        Water: 0,
        Elec: 0,
        Ice: 0,
        Wind: 0,
        Rock: 0,
        Grass: 0,
    }
    var global_var_avatar_type = {
        Sword: 0,
        Claymore: 0,
        Catalyst: 0,
        Bow: 0,
        Polearm: 0,
    }

    var cur_avatar_id = 0

    var avatar_stat_ver = 0
    var weapon_stat_ver = 0

    var char_id_list = {}

    var rip = 0

    var cur_coordinate = 0

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
                            p: computer_.MiscText.TIT[lang],
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

    var pic_index = []
    var pic_show = 0
    if (lang == 'CH') {
        fetch('/Char/GI.json')
            .then(x => x.json())
            .then(y => {
                pic_index = y
                if (check_pic_dl()) {
                    $('.pic_dl').css('display', 'flex')
                }
            })
    }

    var gt = ''
    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Title[lang] + "<color style='font-size: 26px;'><br>" + computer_.MiscText.game_img[lang] + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
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

    function start_cntd() {
        countdown_ver = ""
        countdown_time = 0
        countdown_note = ""
        if (GI_DATES[VER_GI]) {
            countdown_ver = GI_DATES[VER_GI][0]
            countdown_time = GI_DATES[VER_GI][1]
            if (GI_DATES[VER_GI][2] != undefined) countdown_note = "<br>" + GI_DATES[VER_GI][2][(lang == 'CH') ? 0 : 1]
            cntd()
            setInterval(cntd, 1000)
        } else {
            $('.countdown').hide()
        }
    }

    function cntd() {
        var now = Date.now()
        var diff = countdown_time - now
        var age_d = parseInt((now - 1600135200000) / 86400000)
        if ((age_d % 100 == 0) || anniversary) age_d = "<color style='color:#DD0000'>" + age_d + '</color>'
        var written = 0
        if (anniversary) {
            var birthday_difference = keqing_birthday - now
            if (birthday_difference > 0) {
                var birthday_days = parseInt(birthday_difference / 86400000)
                var birthday_hours = parseInt((birthday_difference - birthday_days * 86400000) / 3600000)
                var birthday_mins = parseInt((birthday_difference - birthday_days * 86400000 - birthday_hours * 3600000) / 60000)
                $('.anni_p_1').html(birthday_days.toString() + ((lang == 'CH') ? 'd' : 'd'))
                $('.anni_p_2').html(birthday_hours.toString() + ((lang == 'CH') ? 'h' : 'h'))
                $('.anni_p_3').html(birthday_days.toString() + ((lang == 'CH') ? '天' : 'd') + ' ' + birthday_hours.toString() + ((lang == 'CH') ? '小时' : 'h') + ' ' + birthday_mins.toString() + ((lang == 'CH') ? '分' : 'm'))
            }
            if (birthday_difference < 0) {
                var birthday_days = parseInt(-birthday_difference / 86400000)
                written = 1
                if (birthday_days == 0) {
                    $('.c1_a').html({
                        CH: `刻晴生日快乐！`,
                        EN: `Happy Birthday, Keqing!`
                    }[lang])
                } else {
                    $('.c1_a').html({
                        CH: `刻晴生日 : <b><color style='color:#DD0000'>${birthday_days}</color></b> 天前`,
                        EN: `Keqing's birthday: <b><color style='color:#DD0000'>${birthday_days}</color></b> days ago`
                    }[lang])
                }
            }
        }
        if (!written) $('.c1_a').html((lang == 'CH') ? `刻晴 : <b>${age_d}</b> 天` : `Keqing: <b>${age_d}</b> days old`)
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

    cl_show = 0 
    if ($("#UPDATE").val()) {
        if ($("#UPDATE").val() == 1 || $("#UPDATE").val() == 3 || $("#UPDATE").val() == 17) {
            cl_show = 1
        }
    }
    hn_show = 0
    hd_show = 0
    if ($("#UPDATE").val()) {
        if ($("#UPDATE").val() == 9 || $("#UPDATE").val() == 41) {
            hd_show = 1
        }
    }
    boss_show = 0
    if ($("#UPDATE").val()) {
        if ($("#UPDATE").val() == 7 || $("#UPDATE").val() == 11) {
            boss_show = 1
        }
    }
    boss_show_name = {
        CH: '怪物解析',
        EN: 'Boss Guides'
    }

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/avatar.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    loaded_a_1 = []
    loaded_a_2 = []
    loaded_w = []
    loaded_r = []

    var ojb = document.getElementsByClassName("scroller")
    ojb[0].addEventListener("scroll", update)
    begun = 0

    var diffCH = new Diff.Diff()
    diffCH.tokenize = function (v) {
        return v.split(/([^\x00-\x7F×])|(<br>)/)
    }
    var diffEN = new Diff.Diff()
    diffEN.tokenize = function (v) {
        return v.split(/( )|(<br>)/)
    }

    function dif(a, b) {
        var aa = a.replaceAll("color style", "colorstyle")
        var bb = b.replaceAll("color style", "colorstyle")
        if (lang3 == "CH" || lang3 == "JP") {
            return diffCH.diff(aa, bb)
        } else {
            return diffEN.diff(aa, bb)
        }
    }

    function begin() {

        begun = 1

        this_ver_ = __AvatarInfoConfig[0].Note
        pop_ver = " " + this_ver_

        _VS = __AvatarInfoConfig[0].VS
        console.log(_VS)

        _NA = __AvatarInfoConfig[0].NA
        _NW = __AvatarInfoConfig[0].NW

        $('container').render({
            template: [
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
                            class: 'c1 c_f',
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
                                        hn_hide_()
                                        hd_hide_()
                                        cl_hide_()
                                        pic_hide_()
                                        boss_show = 1 - boss_show
                                        if (boss_show) {
                                            boss_show_()
                                        } else {
                                            boss_hide_()
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
                                    class: 'boss_schedule'
                                },
                                {
                                    schedule: computer_.MiscText.Changelog[lang2],
                                    click: function (p) {
                                        hn_hide_()
                                        hd_hide_()
                                        boss_hide_()
                                        pic_hide_()
                                        cl_show = 1 - cl_show
                                        if (cl_show) {
                                            cl_show_()
                                        } else {
                                            cl_hide_()
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
                                    class: 'cl_schedule'
                                },
                                {
                                    schedule: computer_.MiscText.HD[lang],
                                    click: function (p) {
                                        hn_hide_()
                                        cl_hide_()
                                        boss_hide_()
                                        pic_hide_()
                                        hd_show = 1 - hd_show
                                        if (hd_show) {
                                            hd_show_()
                                        } else {
                                            hd_hide_()
                                        }
                                    },
                                    style: {
                                        width: 'max-content',
                                        padding: '10px 20px',
                                        'font-weight': 'bold',
                                        border: '2px solid #df903b',
                                        'background-color': hd_show ? '#27363E' : 'transparent',
                                        'color': hd_show ? '#eee' : '#000',
                                    },
                                    class: 'hd_schedule'
                                },
                                {
                                    schedule: computer_.MiscText.Avatar_Data_Other[lang2],
                                    click: function (p) {
                                        cl_hide_()
                                        hd_hide_()
                                        boss_hide_()
                                        pic_hide_()
                                        hn_show = 1 - hn_show
                                        if (hn_show) {
                                            hn_show_()
                                        } else {
                                            hn_hide_()
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
                                    class: 'hn_schedule',
                                },
                            ],
                            class: 'cl'
                        },
                        {
                            section: [
                                {
                                    schedule: '下载技能长图',
                                    click: function (p) {
                                        cl_hide_()
                                        hd_hide_()
                                        boss_hide_()
                                        hn_hide_()
                                        pic_show = 1 - pic_show
                                        if (pic_show) {
                                            pic_show_()
                                        } else {
                                            pic_hide_()
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
                                    class: 'pic_schedule',
                                },
                            ],
                            class: 'cl2',
                            when: lang == 'CH'
                        },
                        {
                            div: [
                                {
                                    div: {
                                        select: '',
                                        options: clvers(_VS, 1)[0],
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
                                display: cl_show ? '' : 'none'
                            }
                        },
                        {
                            div: [
                                {
                                    div: [],
                                    class: 'hn_data',
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
                                    class: 'hd_data',
                                }
                            ],
                            class: 'hd_all',
                            style: {
                                display: hd_show ? '' : 'none'
                            }
                        },
                        {
                            div: [
                                {
                                    div: [],
                                    class: 'boss_data',
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
                            hr: '',
                            style: {
                                margin: '0 0 20px',
                            }
                        },
                        {
                            section: [
                                {
                                    schedule: {
                                        img: '/images/GCG_UI/3103.png',
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                    click: function (p) {
                                        $('.common-area-2').hide()
                                        $('.common-area').show()
                                        global_var_avatar_hex = 0
                                        $('.avatar-rarity').show()
                                        $('.avatar-elem').show()
                                        $('.avatar-type').show()
                                        update_avatar()
                                        $('.some_title').hide()
                                    },
                                    class: 'active'
                                },
                                {
                                    schedule: {
                                        img: '/images/maze/UI_RoleCombat_Medal_5.png',
                                        a: {
                                            loading: lazy
                                        },
                                        style: {
                                            height: 'auto'
                                        }
                                    },
                                    click: function (p) {
                                        $('.common-area-2').hide()
                                        $('.common-area').show()
                                        $('.avatar-rarity').hide()
                                        $('.avatar-elem').hide()
                                        $('.avatar-type').hide()
                                        global_var_avatar_hex = 1
                                        update_avatar()
                                        $('.some_title').show()
                                    },
                                    style: {
                                        display: 'flex',
                                        'flex-direction': 'column',
                                        'justify-content': 'center'
                                    }
                                },
                                {
                                    schedule: {
                                        img: '/images/GCG_UI/Equip.png',
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                    click: function (p) {
                                        $('.common-area').hide()
                                        $('.common-area-2').empty().show()
                                        popWeapon()
                                        update_weapon()
                                        $('.some_title').hide()
                                    },
                                },
                                {
                                    schedule: {
                                        img: '/images/GCG_UI/3004.png',
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                    click: function (p) {
                                        $('.common-area').hide()
                                        $('.common-area-2').empty().show()
                                        popRelic()
                                        $('.some_title').hide()
                                    }
                                },
                            ],
                            class: 'generation select_parts select_parts_size_1'
                        },
                        {
                            div: [],
                            class: 'common-area'
                        },
                        {
                            div: [],
                            class: 'common-area-2',
                            style: {
                                display: 'none'
                            }
                        }
                    ],
                    class: 'content'
                },
                {
                    divv: '',
                    class: 'content_2',
                    style: {
                        display: 'none',
                        'min-height': lazy ? '' : '0'
                    },
                }
            ],
        })

        start_cntd()

        $('.changelog select').val(clvers(_VS, 1)[1])
        if (cl_show) {
            renderCL($('.changelog select').val())
            console.log("FINISH")
        }
        if (hn_show) {
            renderHN()
            console.log("FINISH")
        }
        if (hd_show) {
            renderHD()
            console.log("FINISH")
        }
        if (boss_show) {
            renderBoss()
            console.log("FINISH")
        }

        $('.sort').hide()

        renderContent(0)

        //$('.stat_ver_choose_w').empty().render(SVW(cur_weapon_affix_id))
        //$('select').val(weapon_stat_ver)

        $('body').addClass(bg_name)

        if ($("#UPDATE").val() == 3 || $("#UPDATE").val() == 11 || $("#UPDATE").val() == 17 || $("#UPDATE").val() == 41) {
            $('hr').hide()
            $('.generation').hide()
            $('.common-area').hide()
            $('.content').css('padding-bottom', '0px')
            $('.content').css('min-height', '0px')
            a_section_white()
        }

        if (!lazy) a_section_white()

    }

    $('body').on('click', '.generation schedule', function () {
        $(this).siblings('schedule').removeClass('active')
        $(this).addClass('active')
    })

    function renderContent(r) {

        _AvatarInfoConfig = __AvatarInfoConfig

        for (var o = 0; o < _AvatarInfoConfig.length; o++) {
            char_id_list[_AvatarInfoConfig[o]._name] = o
        }

        $('.avatar-area').remove()

        if (r == 4) {
            $('.common-area').render({
                div: computer_.MiscText.Avatar_Norm_Title[lang],
                class: 'Norm'
            })
        } else {
            $('.Norm').remove()
        }

        $('.common-area').render({
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
                            p: computer_.MiscText.Avatar_Buff[lang3],
                        },
                    ],
                    class: 'some_title'
                },
                {
                    section: [
                        {
                            schedule: {
                                img: '/homdgcat-res/UI/Fire.png'
                            },
                            a: {
                                'data-id': 'Fire'
                            },
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/UI/Water.png'
                            },
                            a: {
                                'data-id': 'Water'
                            },
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/UI/Elec.png'
                            },
                            a: {
                                'data-id': 'Elec'
                            },
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/UI/Ice.png'
                            },
                            a: {
                                'data-id': 'Ice'
                            },
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/UI/Grass.png'
                            },
                            a: {
                                'data-id': 'Grass'
                            },
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/UI/Wind.png'
                            },
                            a: {
                                'data-id': 'Wind'
                            },
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/UI/Rock.png'
                            },
                            a: {
                                'data-id': 'Rock'
                            },
                        },
                    ],
                    class: 'avatar-elem select_parts select_parts_size_3'
                },
                {
                    section: [
                        {
                            schedule: {
                                img: '/homdgcat-res/AvatarSkill/Skill_A_01.png'
                            },
                            a: {
                                'data-id': 'Sword'
                            },
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/AvatarSkill/Skill_A_04.png'
                            },
                            a: {
                                'data-id': 'Claymore'
                            },
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/AvatarSkill/Skill_A_Catalyst_MD.png'
                            },
                            a: {
                                'data-id': 'Catalyst'
                            },
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/AvatarSkill/Skill_A_03.png'
                            },
                            a: {
                                'data-id': 'Pole'
                            },
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/AvatarSkill/Skill_A_02.png'
                            },
                            a: {
                                'data-id': 'Bow'
                            },
                        },
                    ],
                    class: 'avatar-type select_parts select_parts_size_3'
                },
                {
                    div: {
                        div: [
                            {
                                p: function (u) {
                                    if (u.data.Version == 9.0) return '1.0'
                                    return u.data.Version.toString()
                                },
                                style: {
                                    'font-weight': 'bold'
                                },
                                class: 'av'
                            },
                            {
                                img: imgpre + `homdgcat-res/Avatar/[[Icon]].png`,
                                class: 'avatar-head',
                                event: {
                                    error: function (d) {
                                        $(d.sender).hide()
                                    }
                                },
                                a: {
                                    loading: lazy
                                },
                                when: !April_1st
                            },
                            {
                                img: '/homdgcat-res/Avatar/April1stOthers.png',
                                class: 'avatar-head',
                                event: {
                                    error: function (d) {
                                        $(d.sender).hide()
                                    }
                                },
                                a: {
                                    loading: lazy
                                },
                                when: April_1st
                            },
                            {
                                p: `[[Name]]`,
                                style: {
                                    color: function (p) {
                                        if (!p.data.Element) return ''
                                        elem = computer_.ElemNameConfig[p.data.Element]
                                        if (!elem) return ''
                                        return colors[elem.Color]
                                    },
                                    'font-weight': 'bold'
                                },
                                class: 'avatar-name av',
                                when: !April_1st
                            },
                            {
                                p: `[[Name]]${meow}`,
                                style: {
                                    color: function (p) {
                                        elem = computer_.ElemNameConfig[p.data.Element]
                                        return colors[elem.Color]
                                    },
                                    'font-weight': 'bold'
                                },
                                class: 'avatar-name av',
                                when: April_1st
                            },
                            {
                                p: `[[Title]]`,
                                class: 'avatar-title',
                                when: (r == 0) && (window.innerWidth > 500) && !April_1st
                            },
                            {
                                p: meow2,
                                class: 'avatar-title',
                                when: (r == 0) && (window.innerWidth > 500) && April_1st
                            },
                            {
                                a: '/gi/char/[[_id]]',
                                t: [
                                    {
                                        img: function (p) {
                                            avname = p.data.Element
                                            return imgpre + 'homdgcat-res/UI/' + avname + '.png'
                                        },
                                        style: {
                                            width: '30%',
                                            'max-width': '48px',
                                            'min-width': '30px',
                                            margin: '0px',
                                        },
                                        a: {
                                            loading: lazy
                                        },
                                        when: function (p) {
                                            return (p.data.Element != undefined) && p.data.Element.length && (p.data.Element != 'None')
                                        }
                                    },
                                    {
                                        img: function (p) {
                                            if (!p.data.Weapon) return '/images/GCG_UI/3004.png';
                                            avname = computer_.AvatarWeaponConfig[p.data.Weapon].EN
                                            switch (avname) {
                                                case 'Sword': 
                                                    var imgp = imgpre + 'homdgcat-res/AvatarSkill/Skill_A_01.png';
                                                    break;
                                                case 'Claymore': 
                                                    var imgp = imgpre + 'homdgcat-res/AvatarSkill/Skill_A_04.png';
                                                    break;
                                                case 'Catalyst': 
                                                    var imgp = imgpre + 'homdgcat-res/AvatarSkill/Skill_A_Catalyst_MD.png';
                                                    break;
                                                case 'Polearm': 
                                                    var imgp = imgpre + 'homdgcat-res/AvatarSkill/Skill_A_03.png';
                                                    break;
                                                case 'Bow': 
                                                    var imgp = imgpre + 'homdgcat-res/AvatarSkill/Skill_A_02.png';
                                                    break;
                                                default: 
                                                    var imgp = imgpre + 'homdgcat-res/Mat/UI_ItemIcon_120864.png';
                                                    break;
                                            }
                                            return imgp
                                        },
                                        style: {
                                            width: '30%',
                                            'max-width': '48px',
                                            'min-width': '30px',
                                            margin: '0px',
                                        },
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                ],
                                when: r == 0,
                                style: {
                                    display: 'flex',
                                    'justify-content': 'center',
                                    'flex-wrap': 'wrap',
                                    'margin-top': (window.innerWidth <= 500) ? '6px' :'10px',
                                    'margin-bottom': (window.innerWidth <= 500) ? '6px' :'10px',
                                }
                            },
                            {
                                p: [
                                    {
                                        span: [
                                            {
                                                img: imgpre + 'homdgcat-res/AvatarSkill/_HP.png',
                                                class: 'avatar-staticon',
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            `[[ShowStats2/HP]]`
                                        ],
                                        class: 'avatar-stat'
                                    },
                                    {
                                        span: [
                                            {
                                                img: imgpre + 'homdgcat-res/AvatarSkill/_ATK.png',
                                                class: 'avatar-staticon',
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            `[[ShowStats2/ATK]]`
                                        ],
                                        class: 'avatar-stat'
                                    },
                                    {
                                        span: [
                                            {
                                                img: imgpre + 'homdgcat-res/AvatarSkill/_DEF.png',
                                                class: 'avatar-staticon',
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            `[[ShowStats2/DEF]]`
                                        ],
                                        class: 'avatar-stat'
                                    }
                                ],
                                when: function (q) {
                                    var s = q.data.ShowStats2 ? (q.data.ShowStats2.HP ? 1 : 0) : 0
                                    return s && (window.innerWidth >= 500)
                                }
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
                                when: function (q) {
                                    return (q.data._id == 42) && anniversary
                                },
                            }
                        ],
                        class: (window.innerWidth <= 500 ? 'avatar-card-slim' : 'avatar-card') + ' avatar-card-mark hover-shadow',
                        data: _AvatarInfoConfig,
                        click: function (p) {
                            if (p.org_data.Add) {
                                startAvatar_2(p.org_data)
                            } else {
                                startAvatar(p.org_data)
                            }
                        },
                        a: {
                            'data-id': function (d) {
                                return d.data._id
                            },
                            'data-rarity': function (d) {
                                return d.data.Grade
                            },
                            'data-type': function (d) {
                                return d.data.Weapon
                            },
                            'data-elem': function (d) {
                                return d.data.Element
                            },
                            'data-hex': function (d) {
                                return d.data.Buff ? '1' : '0'
                            },
                        }
                    },
                    class: 'avatar-area'
                }
            ]
        })

        update_avatar()
        $('.some_title').hide()

        if (avid) {
            if (avid == 'update' || avid == 'change') {
                cl_show = 1
                cl_show_()
            }
            if (avid == 'hidden' || avid == 'future' || avid == 'upcoming') {
                hd_show = 1
                hd_show_()
            }
            if (avid == 'boss') {
                boss_show = 1
                boss_show_()
            }
            var come_id = avid.replaceAll('_', '').replaceAll(' ', '').replaceAll("-", "").replaceAll("'", "").replaceAll("·", "").toUpperCase()
            try {
                startAvatar_0(come_id)
                startAvatar_0(index_avatar[come_id])
            } catch (err) {}
            if (index_weapon[come_id] != undefined) {
                renderWeaponInfo(_WeaponConfig[index_weapon[come_id]])
            }
            if (index_relic[come_id] != undefined) {
                doRelic(_RelicConfig[index_relic[come_id]])
            }
            $('#AVID').val('')
        }
        
    }

    function startAvatar_0(p0) {
        var p = 0
        var is_add = 0
        console.log(p0)
        for (const i of _AvatarInfoConfig) {
            if (i._id == p0 || i._name.toUpperCase() == p0) {
                p = i
                break
            }
        }
        if (!p) return
        if (p.Add) {
            startAvatar_2(p)
        } else {
            startAvatar(p)
        }
    }

    function startAvatar(p) {
        cur_coordinate = $('.scroller').scrollTop()

        if (!p) return

        cur_avatar_name = p._name
        cur_avatar_id = p._id
        
        if (!loaded_a_1.includes(cur_avatar_name)) {

            let script_computer_2 = document.createElement('script')
            script_computer_2.src = `/gi/${lang3}/Avatar/${cur_avatar_name}_1.js`
            document.head.append(script_computer_2)
            script_computer_2.onload = function () {

                _AvatarDataConfig = {..._AvatarDataConfig, ..._AvatarDataConfig_}
                _AvatarMats = {..._AvatarMats, ..._AvatarMats_}
                _AvatarSkillPConfig = {..._AvatarSkillPConfig, ..._AvatarSkillPConfig_}
                _AvatarAttackConfig = {..._AvatarAttackConfig, ..._AvatarAttackConfig_}

                loaded_a_1.push(cur_avatar_name)
                if (!loaded_a_2.includes(cur_avatar_name)) {
                    let script_computer_3 = document.createElement('script')
                    script_computer_3.src = `/gi/${lang3}/Avatar/${cur_avatar_name}_2.js`
                    document.head.append(script_computer_3)
                    script_computer_3.onload = function () {
                        
                        _AvatarFetterConfig = {..._AvatarFetterConfig, ..._AvatarFetterConfig_}
                        _AvatarCostumeConfig = {..._AvatarCostumeConfig, ..._AvatarCostumeConfig_}
                        //_AvatarTeapotTalk = {..._AvatarTeapotTalk, ..._AvatarTeapotTalk_}
                        acs_cache = {...acs_cache, ...acs_cache_}

                        loaded_a_2.push(cur_avatar_name)
                    }
                }
            }
        } else {
            if (!loaded_a_2.includes(cur_avatar_name)) {
                let script_computer_3 = document.createElement('script')
                script_computer_3.src = `/gi/${lang3}/Avatar/${cur_avatar_name}_2.js`
                document.head.append(script_computer_3)
                script_computer_3.onload = function () {
                    
                    _AvatarFetterConfig = {..._AvatarFetterConfig, ..._AvatarFetterConfig_}
                    _AvatarCostumeConfig = {..._AvatarCostumeConfig, ..._AvatarCostumeConfig_}
                    //_AvatarTeapotTalk = {..._AvatarTeapotTalk, ..._AvatarTeapotTalk_}
                    acs_cache = {...acs_cache, ...acs_cache_}

                    loaded_a_2.push(cur_avatar_name)
                }
            }
        }

        console.log(cur_avatar_id)
        avatar_stat_ver = p.Version.substring(3).replace("v", "").replace("V", "")
        if (!avatar_stat_ver.length) avatar_stat_ver = "L"
        is_calc = 1
        talk_state = 0
        $('.content').hide()
        $('.content_2').empty().render({
            data: p,
            template: [
                {
                    section: {
                        p: computer_.MiscText.Back[lang]
                    },
                    event: {
                        click: returnNormal
                    },
                    class: 'mon_head',
                    a: {
                        id: 'back_1',
                    },
                },
                {
                    section: [
                        {
                            p: computer_.MiscText.Back[lang]
                        },
                        {
                            closeicon: '✕'
                        }
                    ],
                    event: {
                        click: returnNormal
                    },
                    class: 'mon_head',
                    a: {
                        id: 'back_2',
                    },
                },
                {
                    section: function (g) {
                        current_name = g.data._name
                        avatar_codename = g.data._name
                        $(g.container).render({
                            data: computer_.MiscText.Avatar_Info_Select,
                            template: {
                                span: `[[${lang2}]]`,
                                a: {
                                    'data-s': `[[${'EN'}]]`,
                                    'id': function (g) {
                                        if (g.data.EN == 'Material Calculator') return 'to_mtc'
                                        return ''
                                    }
                                },
                                click: function (d) {
                                    if ($(d.sender).hasClass('active')) {
                                        return
                                    }
                                    if (ou1 != undefined) clearInterval(ou1)
                                    if (ou2 != undefined) clearInterval(ou2)
                                    var text = $(d.sender).attr('data-s');
                                    if (text == "Basic Info") {
                                        is_calc = 1
                                    } else {
                                        is_calc = 0
                                    }
                                    $(d.sender).addClass('active').siblings('span').removeClass('active');
                                    renderInfoPre(avatar_codename, text)
                                },
                            },
                        })
                        $(g.container).find('span').eq(1).addClass('active');
                    },
                    class: 'a_select',
                    when: !global_var_avatar_hex
                },
                {
                    section: '',
                    class: 'a_data',
                    style: {
                        'justify-content': 'space-evenly',
                        'display': 'flex',
                        'flex-wrap': 'wrap',
                        'margin-bottom': '40px'
                    }
                },
                {
                    section: '',
                    class: 'a_talk',
                    style: {
                        'justify-content': 'space-evenly',
                        'display': 'flex',
                        'flex-wrap': 'wrap',
                        'display': 'none',
                        'margin-bottom': '800px',
                        'margin-top': '-30px'
                    }
                }
            ]
        });
        $('.content_2').show()
        window.location.hash = '_' + cur_avatar_name
        $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`));
        avatar_id = p._id
        if (global_var_avatar_hex) {
            renderInfoPre(p._name, "Buffs")
        } else {
            renderInfoPre(p._name, "Skills")
        }
        talk_need_init = 1
        $('.scroller').scrollTop($('h3').height())
        if (p.Name) switch_title(p.Name)
        console.log("FINISH")
    }

    function startAvatar_2(p) {

        console.log("FINISH")

        cur_coordinate = $('.scroller').scrollTop()

        if (!p) return

        cur_avatar = p

        cur_avatar_name = p._name
        cur_avatar_id = p._id

        console.log(cur_avatar_id)
        $('.content').hide()
        $('.content_2').empty().render({
            template: [
                {
                    section: {
                        p: computer_.MiscText.Back[lang]
                    },
                    event: {
                        click: returnNormal
                    },
                    class: 'mon_head',
                    a: {
                        id: 'back_1',
                    },
                },
                {
                    section: [
                        {
                            p: computer_.MiscText.Back[lang]
                        },
                        {
                            closeicon: '✕'
                        }
                    ],
                    event: {
                        click: returnNormal
                    },
                    class: 'mon_head',
                    a: {
                        id: 'back_2',
                    },
                },
                {
                    section: '',
                    class: 'a_data',
                    style: {
                        'justify-content': 'space-evenly',
                        'display': 'flex',
                        'flex-wrap': 'wrap',
                        'margin-bottom': '40px'
                    }
                },
            ]
        })
        $('.content_2').show()
        window.location.hash = '_' + cur_avatar_name
        $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`));
        avatar_id = p._id
        if (p.Name) switch_title(p.Name)
            
        var color0 = colors[p.Element]
        var avatar_color = "<color style='color:" + color0 + "';><b>"

        $('.a_data').render({
            template: [
                {
                    div: {
                        div: [
                            {
                                div: [
                                    {
                                        div: [
                                            {
                                                p: p.Name,
                                                style: {
                                                    'text-align': 'center',
                                                    margin: '8px auto 8px',
                                                    'font-size': '1.2em',
                                                    width: '100%',
                                                    color: color0,
                                                    'font-weight': 'bold'
                                                }
                                            },
                                            {
                                                p: (p.Desc ? p.Desc : '').replaceAll('#', '</color>').replaceAll('@', "<color style='color:#FFD780;'>"),
                                                style: {
                                                    'text-align': 'center',
                                                    margin: '-8px auto 8px',
                                                    width: '100%',
                                                    'font-size': '0.9em',
                                                    'font-weight': 'bold'
                                                },
                                                when: p.Desc && p.Desc.length
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
                                                        download(`/Char/GI/${cur_avatar.Name}/${VER_GI}.png`, `${cur_avatar.Version} ${cur_avatar.Name}`)
                                                    }
                                                },
                                                style: {
                                                    width: '100%',
                                                    display: check_pic_dl() ? 'flex' : 'none',
                                                    'justify-content': 'center',
                                                    'font-weight': 'bold',
                                                    'margin-top': '0px',
                                                    'margin-bottom': '10px',
                                                },
                                                class: 'pic_dl',
                                            },
                                        ],
                                        class: 'as_right '
                                    }
                                ],
                                class: 'as'
                            },
                            {
                                div: {
                                    img: '/homdgcat-res/Avatar/' + p.Gacha + '.png',
                                    class: p.GachaBig ? 'figure_big dissolve' : 'figure dissolve',
                                    when: p.Gacha && p.Gacha.length,
                                    event: {
                                        error: function (d) {
                                            $(d.sender).hide()
                                        },
                                        load: function (d) {
                                            console.log("FINISH_2")
                                        }
                                    },
                                    a: {
                                        loading: lazy
                                    },
                                    style: {
                                        'margin': '0 0 10px'
                                    }
                                },
                                style: {
                                    display: 'flex',
                                    'justify-content': 'center',
                                    margin: '0'
                                }
                            },
                            {
                                div: [
                                    {
                                        div: [
                                            {
                                                img: '/homdgcat-res/Abyss/_HP.png',
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: p.Stats.HP.toString()
                                            }
                                        ],
                                        class: 'addprop'
                                    },
                                    {
                                        div: [
                                            {
                                                img: '/homdgcat-res/Abyss/_ATK.png',
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: p.Stats.ATK.toString()
                                            }
                                        ],
                                        class: 'addprop'
                                    },
                                    {
                                        div: [
                                            {
                                                img: '/homdgcat-res/Abyss/_DEF.png',
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: function (k) {
                                                    var custominfo_ = computer_.AvatarCustomPromoteConfig[p.Stats.CustomPromote]
                                                    var customcalc_ = p.Stats.Custom
                                                    var customshow_ = avatar_color + "+" + ((custominfo_.ShowType == "p") ? ((customcalc_ * 100).toFixed(1) + "%") : customcalc_.toFixed(1)) + "</b></color>"
                                                    return p.Stats.DEF + '&nbsp;&nbsp;&nbsp;' + custominfo_.Text[lang3] + ' ' + customshow_
                                                }
                                            }
                                        ],
                                        class: 'addprop'
                                    },
                                ],
                                class: 'mon_head avatar_stats',
                                id: 'add_avatar_stat',
                                when: p.Mats.length != 0
                            },
                            {
                                div: [],
                                style: {
                                    display: 'flex',
                                    'justify-content': 'center',
                                    'flex-wrap': 'wrap',
                                    margin: '0 0 15px 0'
                                },
                                id: 'add_avatar_mat'
                            }
                        ],
                        class: 'a_section_content',
                        a: {
                            id: 'special'
                        }
                    },
                    class: 'a_section'
                },
                emote_block
            ]
        })

        p.Mats.forEach(function (grp) {
            var grp_render = []
            grp.forEach(function (item_data) {
                var outs = {
                    a: '/gi/item/' + item_data.ID + '?lang=' + lang3,
                    t: [
                        {
                            img: `/homdgcat-res/Mat/UI_ItemIcon_${item_data.ID}.png`,
                            class: 'img_2',
                            event: {
                                error: function (d) {
                                    $(d.sender).hide()
                                    $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                }
                            },
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: item_data.Num.toString(),
                            class: 'mat_num',
                        }
                    ],
                    class: 'mat_a hover-shadow'
                }
                grp_render.push(outs)
            })
            $('#add_avatar_mat').render({
                div: grp_render,
                class: 'avatar_mat'
            })
        })

        p.Skills.forEach(function (skill_data) {
            if (skill_data == 0) {
                $('.a_data').render(emote_block)
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
                    p: skill_data.Desc.replaceAll('#', '</b></color>').replaceAll('@', avatar_color).replaceAll('``', "<color style='color:#FFD780';><b>").replaceAll('`', '</b></color>')
                })
            }
            if (skill_data.DescList) {
                skill_data.DescList.forEach(function (skill_desc) {
                    skill_data_content.push({
                        p: skill_desc.replaceAll('#', '</b></color>').replaceAll('@', avatar_color).replaceAll('``', "<color style='color:#FFD780';><b>").replaceAll('`', '</b></color>')
                    })
                })
            }
            $('.a_data').render({
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
                class: 'a_section_skill'
            })
        })

        rotate()
        $('.scroller').scrollTop($('h3').height())
        console.log("FINISH_2")

    }

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    function renderInfoPre(avatar, type) {

        clearInterval(rip)
        $('.lt').hide()

        if ((type == "Skills") || (type == "Passives Constellations") || (type == "Material Calculator") || (type == "HomDGCat's Notes") || (type == "Buffs")) {
            if (loaded_a_1.includes(cur_avatar_name)) {
                renderInfo(avatar, type)
            } else {
                var cnt = 0
                $('.a_data').css('background-color', '#27363e')
                $('.a_data').css('min-height', '1600px')
                rip = setInterval(function () {
                    cnt += 1
                    if (cnt >= 7) {
                        $('.lt').show()
                    }
                    if (loaded_a_1.includes(cur_avatar_name)) {
                        $('.a_data').css('background-color', 'transparent')
                        $('.a_data').css('min-height', '0')
                        $('.lt').hide()
                        renderInfo(avatar, type)
                        clearInterval(rip)
                    }
                }, 200)
            }
        } else if ((type == "Stories") || (type == "Voicelines") || (type == "Dialogues")) {
            if (loaded_a_2.includes(cur_avatar_name)) {
                renderInfo(avatar, type)
            } else {
                $('.lt').show()
                rip = setInterval(function () {
                    if (loaded_a_2.includes(cur_avatar_name)) {
                        $('.lt').hide()
                        renderInfo(avatar, type)
                        clearInterval(rip)
                    }
                }, 200)
            }
        } else {
            renderInfo(avatar, type)
        }
    }

    function renderInfo(avatar, type) {
        current_type = type
        $('.a_data').empty().render(renderTemplate(avatar, type))
        $('.a_data').show();
        $('select').val(avatar_stat_ver)
        if (type == "Track Updates") {
            var clv = clvers(_AvatarSkillPConfig[avatar].Ver, 0)
            $('.cl_choose').render({
                select: '',
                options: clv[0]
            })
            if (clv.length) {
                var need_render = changes_avatar(avatar, clv[1].split("-")[1], clv[1].split("-")[0])
                var avatar_name_temp = avatar
                if (avatar_name_temp.includes('PlayerBoy')) avatar_name_temp = 'PlayerBoy'
                if (avatar_name_temp.includes('PlayerGirl')) avatar_name_temp = 'PlayerGirl'
                need_render.forEach(function (w) {
                    $('.a_data').render({
                        div: [
                            {
                                div: [
                                    {
                                        img: imgpre + `homdgcat-res/Avatar/UI_AvatarIcon_${avatar_name_temp}.png`,
                                        class: 'head_left',
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
                                        p: w.N,
                                        class: 'head_right hr_1'
                                    }
                                ],
                                class: 'a_section_head head_withimg'
                            },
                            {
                                div: w.V,
                                class: 'a_section_content nsc'
                            }
                        ],
                        class: 'a_section_skill',
                        style: {
                            color: 'white'
                        }
                    })
                })
                $('.cl_choose select').val(clv[1])
            }
        }
        $('.skill_lv_input').on('change', function () {
            var now_lv = $(this).val()
            $('div').has(this).next().find('.lv').hide()
            $('div').has(this).next().find('.lv' + now_lv).show()
        });
        $('.skill_lv_up').on('click', function () {
            $('.skill_lv_input').val(function (index, value) {
                var now_lv = parseInt(value)
                if (now_lv == $('.skill_lv_input').attr('max')) return now_lv
                return now_lv + 1
            })
            $('.skill_lv_show').html('Lv' + $('.skill_lv_input').val())
            $('div').has('.skill_lv_input').next().find('.lv').hide()
            $('div').has('.skill_lv_input').next().find('.lv' + $('.skill_lv_input').val()).show()
        });
        $('.skill_lv_down').on('click', function () {
            $('.skill_lv_input').val(function (index, value) {
                var now_lv = parseInt(value)
                if (now_lv == 1) return now_lv
                return now_lv - 1
            })
            $('.skill_lv_show').html('Lv' + $('.skill_lv_input').val())
            $('div').has('.skill_lv_input').next().find('.lv').hide()
            $('div').has('.skill_lv_input').next().find('.lv' + $('.skill_lv_input').val()).show()
        });
        if (type == "Material Calculator") {
            var this_skill_options = {
                "1": 1,
                "2": 2,
                "3": 3,
                "4": 4,
                "5": 5,
                "6": 6,
                "7": 7,
                "8": 8,
                "9": 9,
                "10": 10,
            }
            var skills__ = ["A", "E", "Q"]
            skills__.forEach(function (sk) {
                $('.mtc_skill').render({
                    tr: [
                        {
                            td: {
                                p: sk
                            },
                            class: 'mtc_upper',
                        },
                        {
                            td: {
                                div: [
                                    {
                                        select: '',
                                        options: this_skill_options,
                                        id: 'skill_low_' + sk,
                                        class: 'watch',
                                    },
                                    {
                                        span: ' → '
                                    },
                                    {
                                        select: '',
                                        options: this_skill_options,
                                        id: 'skill_high_' + sk,
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
                $('#skill_low_' + sk).val(1)
                $('#skill_high_' + sk).val(10)
            })
            $('#lv_low').val('1')
            $('#lv_high').val('8')
            refresh_ctm()
        }
        rotate()
    }

    $("body").on('change', '.watch', refresh_ctm)

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
        if (_small) _cumulative_mats[104001] = _small
        if (_mid) _cumulative_mats[104002] = _mid
        if (_big) _cumulative_mats[104003] = _big
        if (_small || _mid || _big) _cumulative_mats[202] = _big * 4000 + _mid * 1000 + _small * 200

        // Promotion
        for (var j = parseInt($('#lv_low').val()) - 1; j < parseInt($('#lv_high').val()) - 1; j++) {
            for (const [a, b] of Object.entries(_AvatarMats[cur_avatar._name].Promotion[j])) {
                if (!_cumulative_mats[a]) _cumulative_mats[a] = 0
                _cumulative_mats[a] += b
            }
        }

        // Skills
        var skill_anmes = ["A", "E", "Q"]
        skill_anmes.forEach(function (h) {
            for (var j = parseInt($('#skill_low_' + h).val()) - 1; j < parseInt($('#skill_high_' + h).val()) - 1; j++) {
                for (const [a, b] of Object.entries(_AvatarMats[cur_avatar._name][h][j])) {
                    if (!_cumulative_mats[a]) _cumulative_mats[a] = 0
                    _cumulative_mats[a] += b
                }
            }
        })

        $('.mtc_result').empty()
        for (const [d, n] of Object.entries(_cumulative_mats)) {
            $('.mtc_result').render({
                a: '/gi/item/' + d,
                t: [
                    {
                        div: {
                            img: '/homdgcat-res/Mat/' + _MaterialConfig[d] + '.png'
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

    function check_pic_dl() {
        if (lang == 'CH') {
            for (const r of pic_index) {
                if (r.N == cur_avatar.Name) {
                    if (r.V[0] == VER_GI) {
                        return 1
                    }
                }
            }
        }
        if (!lazy) return 1
        return 0
    }

    function renderTemplate(avatar, type) {

        var this_avatar = _AvatarInfoConfig[char_id_list[avatar]]
        cur_avatar = this_avatar

        var show_icon = true
        if (ICON_NOT_SHOW.includes(this_avatar._id)) {
            show_icon = false
        }

        var nation = computer_.AvatarNationConfig[this_avatar.Nation]
        var color1 = colors[nation.Color]

        var color0 = colors[this_avatar.Element]
        var avatar_color = "<color style='color:" + color0 + "';><b>"

        if (loaded_a_1.includes(cur_avatar_name)) {
            var skillconfig = _AvatarSkillPConfig[avatar].Ver[avatar_stat_ver] ? _AvatarSkillPConfig[avatar].Ver[avatar_stat_ver] : {
                BattleSkills: [],
                PassiveSkills: [],
                Constellations: []
            }
            var otherdata = _AvatarDataConfig[avatar] ? _AvatarDataConfig[avatar] : {
                BallList: [],
                EndureList: [],
                WindZoneList: [],
                OtherDataList: []
            }
            var damagedata = _AvatarAttackConfig[avatar] ? _AvatarAttackConfig[avatar] : {
                AttackList: []
            }
        }

        if (loaded_a_2.includes(cur_avatar_name)) {
            var fetters = _AvatarFetterConfig[this_avatar.Fetter] ? _AvatarFetterConfig[this_avatar.Fetter] : {
                StoryList: [],
                VoiceList: []
            }
        }

        if (type == "Basic Info" || type == "Skills" || type == "Passives Constellations" || type == "Buffs") {
            var tal = {
                div: [
                    {
                        div: {
                            p: function (k) {
                                return computer_.AvatarTalentConfig[k.data.TalentMat][lang]
                            },
                            style: {
                                'text-align': 'center',
                            }
                        },
                        class: 'a_section_head',
                        style: {
                            color: color0
                        }
                    },
                    {
                        div: {
                            div: [
                                {
                                    div: [
                                        {
                                            a: function (k) {
                                                return '/gi/item/' + (k.data.CommonMatt - 2) + '?lang=' + lang3
                                            },
                                            t: [
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.CommonMatt - 2]
                                                        if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                    },
                                                    class: 'img_2',
                                                    event: {
                                                        error: function (d) {
                                                            $(d.sender).hide()
                                                            $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                        }
                                                    },
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: '36',
                                                    class: 'mat_num',
                                                }
                                            ],
                                            class: 'mat_a hover-shadow'
                                        },
                                        {
                                            a: function (k) {
                                                return '/gi/item/' + (k.data.CommonMatt - 1) + '?lang=' + lang3
                                            },
                                            t: [
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.CommonMatt - 1]
                                                        if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                    },
                                                    class: 'img_2',
                                                    event: {
                                                        error: function (d) {
                                                            $(d.sender).hide()
                                                            $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                        }
                                                    },
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: '96',
                                                    class: 'mat_num',
                                                }
                                            ],
                                            class: 'mat_a hover-shadow'
                                        },
                                        {
                                            a: function (k) {
                                                return '/gi/item/' + k.data.CommonMatt + '?lang=' + lang3
                                            },
                                            t: [
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.CommonMatt]
                                                        if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                    },
                                                    class: 'img_2',
                                                    event: {
                                                        error: function (d) {
                                                            $(d.sender).hide()
                                                            $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                        }
                                                    },
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: '129',
                                                    class: 'mat_num',
                                                }
                                            ],
                                            class: 'mat_a hover-shadow'
                                        },
                                    ],
                                    class: 'avatar_mat'
                                },
                                {
                                    div: [
                                        {
                                            a: function (k) {
                                                return '/gi/item/' + k.data.AscMat + '?lang=' + lang3
                                            },
                                            t: [
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.AscMat]
                                                        if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                    },
                                                    class: 'img_2',
                                                    event: {
                                                        error: function (d) {
                                                            $(d.sender).hide()
                                                            $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                        }
                                                    },
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: '46',
                                                    class: 'mat_num',
                                                }
                                            ],
                                            class: 'mat_a hover-shadow'
                                        },
                                    ],
                                    class: 'avatar_mat avatar_mat_2',
                                    a: {
                                        'data-id': function (k) {
                                            return k.data.AscMat
                                        }
                                    }
                                },
                                {
                                    div: [
                                        {
                                            a: function (k) {
                                                return '/gi/item/' + (k.data.TalentMatt - 2) + '?lang=' + lang3
                                            },
                                            t: [
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.TalentMatt - 2]
                                                        if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                    },
                                                    event: {
                                                        error: function (d) {
                                                            $(d.sender).hide()
                                                            $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                        }
                                                    },
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: '9',
                                                    class: 'mat_num',
                                                }
                                            ],
                                            class: 'mat_a hover-shadow'
                                        },
                                        {
                                            a: function (k) {
                                                return '/gi/item/' + (k.data.TalentMatt - 1) + '?lang=' + lang3
                                            },
                                            t: [
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.TalentMatt - 1]
                                                        if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                    },
                                                    event: {
                                                        error: function (d) {
                                                            $(d.sender).hide()
                                                            $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                        }
                                                    },
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: '63',
                                                    class: 'mat_num',
                                                }
                                            ],
                                            class: 'mat_a hover-shadow'
                                        },
                                        {
                                            a: function (k) {
                                                return '/gi/item/' + k.data.TalentMatt + '?lang=' + lang3
                                            },
                                            t: [
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.TalentMatt]
                                                        if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                    },
                                                    event: {
                                                        error: function (d) {
                                                            $(d.sender).hide()
                                                            $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                        }
                                                    },
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: '114',
                                                    class: 'mat_num',
                                                }
                                            ],
                                            class: 'mat_a hover-shadow'
                                        },
                                    ],
                                    class: 'avatar_mat avatar_mat_1',
                                    a: {
                                        'data-id': function (k) {
                                            return k.data.TalentMatt
                                        }
                                    }
                                },
                                {
                                    div: [
                                        {
                                            a: function (k) {
                                                return '/gi/item/' + k.data.WeekMat + '?lang=' + lang3
                                            },
                                            t: [
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.WeekMat]
                                                        if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                    },
                                                    class: 'img_2',
                                                    event: {
                                                        error: function (d) {
                                                            $(d.sender).hide()
                                                            $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                        }
                                                    },
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: '18',
                                                    class: 'mat_num',
                                                }
                                            ],
                                            class: 'mat_a hover-shadow'
                                        },
                                    ],
                                    class: 'avatar_mat avatar_mat_2',
                                    a: {
                                        'data-id': function (k) {
                                            return k.data.WeekMat
                                        }
                                    }
                                },
                                {
                                    div: [
                                        {
                                            a: function (k) {
                                                return '/gi/item/' + k.data.SpecialityMat + '?lang=' + lang3
                                            },
                                            t: [
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.SpecialityMat]
                                                        if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                    },
                                                    event: {
                                                        error: function (d) {
                                                            $(d.sender).hide()
                                                            $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                        }
                                                    },
                                                    a: {
                                                        loading: lazy
                                                    }
                                                },
                                                {
                                                    span: '168',
                                                    class: 'mat_num',
                                                }
                                            ],
                                            class: 'mat_a hover-shadow'
                                        },
                                    ],
                                    class: 'avatar_mat avatar_mat_1',
                                    a: {
                                        'data-id': function (k) {
                                            return k.data.SpecialityMat
                                        }
                                    }
                                },
                            ],
                            style: {
                                display: 'flex',
                                'justify-content': 'space-evenly',
                                'flex-wrap': 'wrap',
                            }
                        },
                        class: 'a_section_content',
                        style: {
                            overflow: 'hidden',
                            margin: '5px'
                        }
                    }
                ],
                class: 'a_section',
                when: !avatar.includes('Player')
            }
        }

        var avatar_stat_show_0 = {
            div: [
                {
                    div: function (d) {
                        $(d.container).render({
                            span: function (k) {
                                var ret = []
                                var custominfo_ = ''
                                var customcalc_ = 0
                                var customshow_ = ''
                                for (const [x, y] of Object.entries(this_avatar.CustomStat)) {
                                    custominfo_ = computer_.AvatarCustomPromoteConfig[x]
                                    customcalc_ = y
                                    customshow_ = avatar_color + "+" + ((custominfo_.ShowType == "p") ? ((customcalc_ * 100).toFixed(1) + "%") : customcalc_.toFixed(1)) + "</b></color>"
                                    ret.push(custominfo_.Text[lang3] + ' ' + customshow_)
                                }
                                return ret.join('&nbsp;&nbsp;&nbsp;')
                            },
                        })
                    },
                    class: 'addprop'
                },
            ],
            class: 'mon_head avatar_stats',
            id: ((type == "Passives Constellations") ? 'avatar_stat_special' : ''),
            when: ((type == "Skills") || (type == "Passives Constellations")) && (this_avatar.CustomStat != undefined),
            style: (type == "Passives Constellations") ? {} : {
                'margin-top': '25px'
            }
        }

        var avatar_stat_show = {
            div: [
                {
                    div: [
                        {
                            img: imgpre + 'images/Misc/lv.png',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: avatar_color + 'Lv90<span style="opacity:0;">0</span></b></color>',
                        }
                    ],
                    class: 'addprop',
                },
                {
                    div: [
                        {
                            img: imgpre + 'homdgcat-res/Abyss/_HP.png',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: function (k) {
                                return k.data.ShowStats.HP
                            }
                        }
                    ],
                    class: 'addprop'
                },
                {
                    div: [
                        {
                            img: imgpre + 'homdgcat-res/Abyss/_ATK.png',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: function (k) {
                                return k.data.ShowStats.ATK
                            }
                        }
                    ],
                    class: 'addprop'
                },
                {
                    div: [
                        {
                            img: imgpre + 'homdgcat-res/Abyss/_DEF.png',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: function (k) {
                                var custominfo_ = computer_.AvatarCustomPromoteConfig[this_avatar.CustomPromote]
                                var customcalc_ = this_avatar.ShowStats.Custom
                                var customshow_ = avatar_color + "+" + ((custominfo_.ShowType == "p") ? ((customcalc_ * 100).toFixed(1) + "%") : customcalc_.toFixed(1)) + "</b></color>"
                                return k.data.ShowStats.DEF + '&nbsp;&nbsp;&nbsp;' + custominfo_.Text[lang3] + ' ' + customshow_
                            }
                        }
                    ],
                    class: 'addprop'
                },
            ],
            class: 'mon_head avatar_stats',
            id: ((type == "Passives Constellations") ? 'avatar_stat_special' : ''),
            when: (type == "Skills") || (type == "Passives Constellations")
        }

        var avatar_stat_show_2 = {
            div: [
                {
                    div: [
                        {
                            img: imgpre + 'images/Misc/lv.png',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: avatar_color + 'Lv100</b></color>',
                        }
                    ],
                    class: 'addprop'
                },
                {
                    div: [
                        {
                            img: imgpre + 'homdgcat-res/Abyss/_HP.png',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: function (k) {
                                return k.data.ShowStats2 && (gt + k.data.ShowStats2.HP)
                            }
                        }
                    ],
                    class: 'addprop'
                },
                {
                    div: [
                        {
                            img: imgpre + 'homdgcat-res/Abyss/_ATK.png',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: function (k) {
                                return k.data.ShowStats2 && (gt + k.data.ShowStats2.ATK)
                            }
                        }
                    ],
                    class: 'addprop'
                },
                {
                    div: [
                        {
                            img: imgpre + 'homdgcat-res/Abyss/_DEF.png',
                            a: {
                                loading: lazy
                            }
                        },
                        {
                            span: function (k) {
                                var custominfo_ = computer_.AvatarCustomPromoteConfig[this_avatar.CustomPromote]
                                var customcalc_ = k.data.ShowStats2 && this_avatar.ShowStats2.Custom
                                var customshow_ = avatar_color + "+" + ((custominfo_.ShowType == "p") ? ((customcalc_ * 100).toFixed(1) + "%") : customcalc_.toFixed(1)) + "</b></color>"
                                return (k.data.ShowStats2 && (gt + k.data.ShowStats2.DEF)) + '&nbsp;&nbsp;&nbsp;' + custominfo_.Text[lang3] + ' ' + gt + customshow_
                            }
                        }
                    ],
                    class: 'addprop'
                },
            ],
            class: 'mon_head avatar_stats',
            id: ((type == "Passives Constellations") ? 'avatar_stat_special' : ''),
            when: (type == "Skills") || (type == "Passives Constellations")
        }

        var temp_2 = {
            div: [
                {
                    div: {
                        div: [
                            {
                                div: {
                                    img: imgpre + `homdgcat-res/Avatar/${this_avatar.Icon}.png`,
                                    event: {
                                        error: function (d) {
                                            $('.as_left').remove()
                                        }
                                    },
                                    a: {
                                        loading: lazy
                                    },
                                    style: {
                                        width: '80%',
                                        display: 'block',
                                        'margin-left': '10%',
                                        'margin-right': '10%'
                                    }
                                },
                                class: 'as_left dissolve'
                            },
                            {
                                div: [
                                    {
                                        p: [
                                            {
                                                img: '/homdgcat-res/UI/birthday-cake2.png',
                                                when: anniversary && (this_avatar._id == 42),
                                                class: 'name_cake'
                                            },
                                            this_avatar.Name,
                                            {
                                                img: '/homdgcat-res/UI/birthday-cake2.png',
                                                when: anniversary && (this_avatar._id == 42),
                                                class: 'name_cake'
                                            },
                                        ],
                                        style: {
                                            'text-align': 'center',
                                            'font-size': '1.2em',
                                            width: '100%',
                                            color: color0,
                                            'font-weight': 'bold',
                                            margin: '8px auto',
                                        }
                                    },
                                    {
                                        p: this_avatar.Title,
                                        style: {
                                            'text-align': 'center',
                                            width: '100%',
                                            'margin-top': '-8px',
                                        },
                                        when: (type != "Material Calculator") && (type != "Passives Constellations")
                                    },
                                    {
                                        span: [
                                            {
                                                select: '',
                                                options: {
                                                    "1": 1,
                                                    "20": 2,
                                                    "40": 3,
                                                    "50": 4,
                                                    "60": 5,
                                                    "70": 6,
                                                    "80": 7,
                                                    "90": 8,
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
                                                    "40": 3,
                                                    "50": 4,
                                                    "60": 5,
                                                    "70": 6,
                                                    "80": 7,
                                                    "90": 8,
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
                                        when: type == "Material Calculator"
                                    },
                                    {
                                        span: renderSVC(avatar),
                                        class: 'stat_ver_choose',
                                        style: {
                                            display: 'flex',
                                            'justify-content': 'center'
                                        },
                                        when: type == "Passives Constellations"
                                    }
                                ],
                                class: 'as_right '
                            },
                        ],
                        class: 'as'
                    },
                    class: 'after_1 stat_ver_choose_wrap a_section_content',
                    a: {
                        id: 'special'
                    }
                },
                avatar_stat_show_0,
                avatar_stat_show,
                avatar_stat_show_2,
            ],
            class: 'a_section',
            style: (type == "Passives Constellations") ? {
                'padding-bottom': '30px',
                'padding-top': '10px',
            } : {}
        }

        var skills_hyper = []

        if (type == "Basic Info") {
            dr = {
                "Basic Info": {
                    data: this_avatar,
                    template: [
                        {
                            div: [
                                {
                                    div: {
                                        p: [
                                            {
                                                img: '/homdgcat-res/UI/birthday-cake2.png',
                                                when: anniversary && (this_avatar._id == 42),
                                                class: 'name_cake'
                                            },
                                            this_avatar.Name + (lang == "CH" ? " · " : " - ") + this_avatar.Title.replace("<br>", " / "),
                                            {
                                                img: '/homdgcat-res/UI/birthday-cake2.png',
                                                when: anniversary && (this_avatar._id == 42),
                                                class: 'name_cake'
                                            },
                                        ],
                                        style: {
                                            'text-align': 'center',
                                            'position': 'relative',
                                            'top': '9px',
                                        }
                                    },
                                    class: 'a_section_head',
                                    style: {
                                        color: color0
                                    }
                                },
                                {
                                    div: [
                                        {
                                            p: function (k) {
                                                return (k.data.Grade == 5) ? '★ ★ ★ ★ ★' : '★ ★ ★ ★'
                                            },
                                            style: {
                                                width: '100%',
                                                'text-align': 'center',
                                                'font-size': '20px'
                                            }
                                        },
                                        {
                                            img: function (k) {
                                                return imgpre + 'homdgcat-res/Gacha/' + k.data.Icon.replace("AvatarIcon", "Gacha_AvatarImg") + '.png'
                                            },
                                            class: 'gacha',
                                            when: function (k) {
                                                return k.data.Icon && !k.data.Icon.includes("Player")
                                            },
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
                                            p: function (k) {
                                                return k.data.Desc
                                            },
                                            style: {
                                                'margin': '10px 0',
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            div: [
                                                {
                                                    div: function (d) {
                                                        $(d.container).render({
                                                            span: function (k) {
                                                                var ret = []
                                                                var custominfo_ = ''
                                                                var customcalc_ = 0
                                                                var customshow_ = ''
                                                                for (const [x, y] of Object.entries(this_avatar.CustomStat)) {
                                                                    custominfo_ = computer_.AvatarCustomPromoteConfig[x]
                                                                    customcalc_ = y
                                                                    customshow_ = avatar_color + "+" + ((custominfo_.ShowType == "p") ? ((customcalc_ * 100).toFixed(1) + "%") : customcalc_.toFixed(1)) + "</b></color>"
                                                                    ret.push(custominfo_.Text[lang3] + ' ' + customshow_)
                                                                }
                                                                return ret.join('&nbsp;&nbsp;&nbsp;')
                                                            },
                                                        })
                                                    },
                                                    class: 'addprop'
                                                },
                                            ],
                                            class: 'mon_head avatar_stats',
                                            when: this_avatar.CustomStat != undefined
                                        },
                                        {
                                            div: [
                                                {
                                                    div: [
                                                        {
                                                            img: imgpre + 'images/Misc/lv.png',
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: avatar_color + 'Lv90<span style="opacity:0;">0</span></b></color>',
                                                        }
                                                    ],
                                                    class: 'addprop'
                                                },
                                                {
                                                    div: [
                                                        {
                                                            img: imgpre + 'homdgcat-res/Abyss/_HP.png',
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: function (k) {
                                                                return k.data.ShowStats.HP
                                                            }
                                                        }
                                                    ],
                                                    class: 'addprop'
                                                },
                                                {
                                                    div: [
                                                        {
                                                            img: imgpre + 'homdgcat-res/Abyss/_ATK.png',
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: function (k) {
                                                                return k.data.ShowStats.ATK
                                                            }
                                                        }
                                                    ],
                                                    class: 'addprop'
                                                },
                                                {
                                                    div: [
                                                        {
                                                            img: imgpre + 'homdgcat-res/Abyss/_DEF.png',
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: function (k) {
                                                                var custominfo_ = computer_.AvatarCustomPromoteConfig[this_avatar.CustomPromote]
                                                                var customcalc_ = this_avatar.ShowStats.Custom
                                                                var customshow_ = avatar_color + "+" + ((custominfo_.ShowType == "p") ? ((customcalc_ * 100).toFixed(1) + "%") : customcalc_.toFixed(1)) + "</b></color>"
                                                                return k.data.ShowStats.DEF + '&nbsp;&nbsp;&nbsp;' + custominfo_.Text[lang3] + ' ' + customshow_
                                                            }
                                                        }
                                                    ],
                                                    class: 'addprop'
                                                },
                                            ],
                                            class: 'mon_head avatar_stats',
                                        },
                                        {
                                            div: [
                                                {
                                                    div: [
                                                        {
                                                            img: imgpre + 'images/Misc/lv.png',
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: avatar_color + 'Lv100</b></color>',
                                                        }
                                                    ],
                                                    class: 'addprop'
                                                },
                                                {
                                                    div: [
                                                        {
                                                            img: imgpre + 'homdgcat-res/Abyss/_HP.png',
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: function (k) {
                                                                return k.data.ShowStats2 && (gt + k.data.ShowStats2.HP)
                                                            }
                                                        }
                                                    ],
                                                    class: 'addprop'
                                                },
                                                {
                                                    div: [
                                                        {
                                                            img: imgpre + 'homdgcat-res/Abyss/_ATK.png',
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: function (k) {
                                                                return k.data.ShowStats2 && (gt + k.data.ShowStats2.ATK)
                                                            }
                                                        }
                                                    ],
                                                    class: 'addprop'
                                                },
                                                {
                                                    div: [
                                                        {
                                                            img: imgpre + 'homdgcat-res/Abyss/_DEF.png',
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            span: function (k) {
                                                                var custominfo_ = computer_.AvatarCustomPromoteConfig[this_avatar.CustomPromote]
                                                                var customcalc_ = k.data.ShowStats2 && this_avatar.ShowStats2.Custom
                                                                var customshow_ = avatar_color + "+" + ((custominfo_.ShowType == "p") ? ((customcalc_ * 100).toFixed(1) + "%") : customcalc_.toFixed(1)) + "</b></color>"
                                                                return (k.data.ShowStats2 && (gt + k.data.ShowStats2.DEF)) + '&nbsp;&nbsp;&nbsp;' + custominfo_.Text[lang3] + ' ' + gt + customshow_
                                                            }
                                                        }
                                                    ],
                                                    class: 'addprop'
                                                },
                                            ],
                                            class: 'mon_head avatar_stats',
                                            when: function (k) {
                                                return k.data.ShowStats2 ? (k.data.ShowStats2.HP ? 1 : 0) : 0
                                            },
                                            style: {
                                                'margin-top': '0',
                                                'padding-top': '0',
                                            }
                                        },
                                    ],
                                    class: 'a_section_content',
                                    style: {
                                        'overflow': 'hidden'
                                    }
                                },
                            ],
                            class: 'a_section'
                        },
                        tal,
                        {
                            div: [
                                {
                                    div: function (d) {
                                        $(d.container).render({
                                            p: '???'
                                        })
                                        var quq = setInterval(function () {
                                            if (loaded_a_2.includes(this_avatar._name)) {
                                                if (_AvatarCostumeConfig[this_avatar._id].Namecard) {
                                                    $(d.container).empty().render({
                                                        p: _AvatarCostumeConfig[this_avatar._id].Namecard.Name
                                                    })
                                                }
                                                clearInterval(quq)
                                            }
                                        }, 400)
                                    },
                                    class: 'a_section_head',
                                    style: {
                                        color: color0
                                    }
                                },
                                {
                                    div: function (d) {
                                        var quq = setInterval(function () {
                                            if (loaded_a_2.includes(this_avatar._name)) {
                                                if (_AvatarCostumeConfig[this_avatar._id].Namecard) {
                                                    $(d.container).render([
                                                        {
                                                            img: imgpre + 'homdgcat-res/Avatar/' + _AvatarCostumeConfig[this_avatar._id].Namecard.Pic + '.png',
                                                            class: 'namecard',
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
                                                            p: _AvatarCostumeConfig[this_avatar._id].Namecard.Desc,
                                                            style: {
                                                                'margin': '10px 0'
                                                            }
                                                        }
                                                    ])
                                                }
                                                clearInterval(quq)
                                            }
                                        }, 400)
                                    },
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section',
                        },
                        {
                            div: [
                                {
                                    div: function (d) {
                                        $(d.container).render({
                                            p: '???'
                                        })
                                        var quq = setInterval(function () {
                                            if (loaded_a_2.includes(this_avatar._name)) {
                                                if (_AvatarCostumeConfig[this_avatar._id].Dish.Name.length) {
                                                    var dish = _AvatarCostumeConfig[this_avatar._id].Dish
                                                    $(d.container).empty().render({
                                                        p: dish.Name + ` 🔗`,
                                                        event: {
                                                            click: function () {
                                                                window.location.href = `/gi/item/${dish.JD}`
                                                            }
                                                        },
                                                        style: {
                                                            cursor: 'pointer'
                                                        }
                                                    })
                                                }
                                                clearInterval(quq)
                                            }
                                        }, 400)
                                    },
                                    class: 'a_section_head',
                                    style: {
                                        color: color0
                                    }
                                },
                                {
                                    div: function (d) {
                                        var quq = setInterval(function () {
                                            if (loaded_a_2.includes(this_avatar._name)) {
                                                if (_AvatarCostumeConfig[this_avatar._id].Dish.Name.length) {
                                                    var dish = _AvatarCostumeConfig[this_avatar._id].Dish
                                                    $(d.container).render({
                                                        template: [
                                                            {
                                                                img: imgpre + 'homdgcat-res/Mat/' + dish.Icon + '.png',
                                                                class: 'avatar_costume_img',
                                                                event: {
                                                                    error: function (d) {
                                                                        $(d.sender).hide()
                                                                        $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                                    }
                                                                },
                                                                a: {
                                                                    loading: lazy
                                                                }
                                                            },
                                                            {
                                                                p: dish.Desc
                                                            },
                                                            {
                                                                div: function (k) {
                                                                    for (const [t, n] of Object.entries(dish.Recipe)) {
                                                                        $(k.container).render({
                                                                            div: [
                                                                                {
                                                                                    img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_' + t + '.png',
                                                                                    event: {
                                                                                        error: function (d) {
                                                                                            $(d.sender).hide()
                                                                                            $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                                                        }
                                                                                    },
                                                                                    a: {
                                                                                        loading: lazy
                                                                                    }
                                                                                },
                                                                                {
                                                                                    span: n.toString(),
                                                                                    style: {
                                                                                        position: 'absolute',
                                                                                        right: '0',
                                                                                        bottom: '0',
                                                                                        'font-weight': 'bold'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            class: 'avatar_mat',
                                                                            style: {
                                                                                width: 'max-content',
                                                                                padding: '0',
                                                                                margin: '0 15px 0 0',
                                                                                position: 'relative'
                                                                            }
                                                                        })
                                                                    }
                                                                },
                                                                style: {
                                                                    display: 'flex',
                                                                    'flex-wrap': 'wrap',
                                                                }
                                                            },
                                                            {
                                                                p: dish.Eff
                                                            }
                                                        ]
                                                    })
                                                }
                                                clearInterval(quq)
                                            }
                                        }, 400)
                                    },
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section',
                        },
                        {
                            div: function (j) {
                                $(j.container).render({
                                    div: {
                                        p: computer_.MiscText.Avatar_Costume[lang2]
                                    },
                                    class: 'a_section_head',
                                    style: {
                                        color: color0
                                    }
                                })
                                var quq = setInterval(function () {
                                    if (loaded_a_2.includes(this_avatar._name)) {
                                        if (_AvatarCostumeConfig[this_avatar._id].Costumes) {
                                            $(j.container).render({
                                                template: {
                                                    div: [
                                                        {
                                                            img: function (k) {
                                                                return imgpre + 'homdgcat-res/Avatar/' + k.data.Icon + '.png'
                                                            },
                                                            class: 'avatar_costume_img',
                                                            when: function (k) {
                                                                return k.data.Icon
                                                            },
                                                            event: {
                                                                error: function (d) {
                                                                    $(d.sender).hide()
                                                                    $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                                }
                                                            },
                                                            a: {
                                                                loading: lazy
                                                            }
                                                        },
                                                        {
                                                            div: [
                                                                {
                                                                    span: function (k) {
                                                                        return k.data.Name
                                                                    },
                                                                    style: {
                                                                        'font-weight': 'bold'
                                                                    }
                                                                },
                                                                {
                                                                    button: computer_.MiscText.Avatar_Costume_Story[lang2],
                                                                    when: function (k) {
                                                                        return k.data.ID
                                                                    },
                                                                    style: {
                                                                        height: '30px',
                                                                        width: '100px',
                                                                        'font-weight': 'bold',
                                                                        'margin': 'auto 10px'
                                                                    },
                                                                    class: 'asc_button',
                                                                    a: {
                                                                        'data-id': function (k) {
                                                                            return k.data.ID
                                                                        },
                                                                        'data-ic': function (k) {
                                                                            return k.data.Icon
                                                                        },
                                                                        'data-ib': function (k) {
                                                                            return k.data.Name
                                                                        }
                                                                    }
                                                                },
                                                            ],
                                                            style: {
                                                                margin: '5px 0px',
                                                            }
                                                        },
                                                        {
                                                            p: function (k) {
                                                                return k.data.Desc
                                                            }
                                                        }
                                                    ],
                                                    class: 'a_section_content'
                                                },
                                                data: _AvatarCostumeConfig[this_avatar._id] ? _AvatarCostumeConfig[this_avatar._id].Costumes : [],
                                            })
                                        }
                                        clearInterval(quq)
                                    }
                                }, 400)
                            },
                            class: 'a_section',
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_BasicInfo_Info[lang2]
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: [
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_1[lang2] + avatar_color + k.data.Constellation + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_2[lang2] + avatar_color + k.data.Birthday + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_3_0[lang2] + "<color style='color:" + color1 + "';><b>" + nation.Text[lang] + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_3[lang2] + avatar_color + k.data.Belong + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_1[lang2] + avatar_color + k.data._CV._CH + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_2[lang2] + avatar_color + k.data._CV._EN + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_3[lang2] + avatar_color + k.data._CV._JP + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_4[lang2] + avatar_color + k.data._CV._KR + "</b></color>"
                                            }
                                        },
                                    ],
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section'
                        },
                        /*{
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_BasicInfo_Battle[lang2]
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: [
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_1[lang2] + avatar_color + computer_.AvatarPoiseConfig[k.data.Poise].Name[lang] + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_2[lang2] + avatar_color + computer_.AvatarPoiseConfig[k.data.Poise].Poise.Endure + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_3[lang2] + avatar_color + (computer_.AvatarPoiseConfig[k.data.Poise].Poise.Wane1 / computer_.AvatarPoiseConfig[k.data.Poise].Poise.Wane2).toFixed(5).toString().replace('.00000', '').replace('000', '') + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_4[lang2] + avatar_color + computer_.AvatarPoiseConfig[k.data.Poise].Poise.Recover + "</b></color>"
                                            }
                                        }
                                    ],
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section_small'
                        },*/
                    ]
                },
            }
        } else if (type == "Skills" || type == "Passives Constellations" || type == "Buffs") {
            var use_BattleSkills = []
            var use_PassiveSkills = []
            var use_Constellations = []
            if (type == "Buffs") {
                for (const c of skillconfig.BattleSkills) {
                    if (c.Buff) use_BattleSkills.push(c)
                }
                for (const c of skillconfig.PassiveSkills) {
                    if (c.Buff) use_PassiveSkills.push(c)
                }
                for (const c of skillconfig.Constellations) {
                    if (c.Buff) use_Constellations.push(c)
                }
            } else {
                use_BattleSkills = skillconfig.BattleSkills
                use_PassiveSkills = skillconfig.PassiveSkills
                use_Constellations = skillconfig.Constellations
            }
            dr = {
                "Skills_Pre": [
                    {
                        div: {
                            div: [
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    p: [
                                                        {
                                                            img: '/homdgcat-res/UI/birthday-cake2.png',
                                                            when: anniversary && (this_avatar._id == 42),
                                                            class: 'name_cake'
                                                        },
                                                        this_avatar.Name,
                                                        {
                                                            img: '/homdgcat-res/UI/birthday-cake2.png',
                                                            when: anniversary && (this_avatar._id == 42),
                                                            class: 'name_cake'
                                                        },
                                                    ],
                                                    style: {
                                                        'text-align': 'center',
                                                        margin: '8px auto 8px',
                                                        'font-size': '1.2em',
                                                        width: '100%',
                                                        color: color0,
                                                        'font-weight': 'bold'
                                                    }
                                                },
                                                /*{
                                                    p: this_avatar.Title ? this_avatar.Title : '',
                                                    style: {
                                                        'text-align': 'center',
                                                        margin: '-8px auto 8px',
                                                        width: '100%',
                                                        'font-size': '0.9em',
                                                    },
                                                    when: this_avatar.Title && this_avatar.Title.length
                                                },*/
                                                {
                                                    span: computer_.MiscText.StatVerChoose[lang],
                                                    when: 0
                                                },
                                                {
                                                    span: renderSVC(avatar),
                                                    class: 'stat_ver_choose',
                                                    style: {
                                                        display: 'flex',
                                                        'justify-content': 'center'
                                                    }
                                                }
                                            ],
                                            class: 'as_right '
                                        }
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
                                            download(`/Char/GI/${this_avatar.Name}/${VER_GI}.png`, `${VER_GI} ${this_avatar.Name}`)
                                        }
                                    },
                                    style: {
                                        width: '100%',
                                        display: check_pic_dl() ? 'flex' : 'none',
                                        'justify-content': 'center',
                                        'font-weight': 'bold',
                                        'margin-top': '5px',
                                        'margin-bottom': '5px',
                                    },
                                    class: 'pic_dl',
                                },
                                {
                                    img: function (k) {
                                        return imgpre + 'homdgcat-res/Gacha/' + k.data.Icon.replace("AvatarIcon", "Gacha_AvatarImg") + '.png'
                                    },
                                    class: 'gacha dissolve',
                                    when: function (k) {
                                        return k.data.Icon && !k.data.Icon.includes("Player")
                                    },
                                    event: {
                                        error: function (d) {
                                            $(d.sender).hide()
                                        },
                                        load: function (d) {
                                            console.log("FINISH_2")
                                        }
                                    },
                                    a: {
                                        loading: lazy
                                    },
                                    style: {
                                        'margin-left': '0'
                                    }
                                },
                                avatar_stat_show_0,
                                avatar_stat_show,
                                avatar_stat_show_2,
                                {
                                    div: tal.div[1].div.div,
                                    when: !avatar.includes('Player'),
                                    style: {
                                        display: 'flex',
                                        'justify-content': 'center',
                                        'flex-wrap': 'wrap',
                                        margin: '10px 0 15px 0'
                                    },
                                    a: {
                                        id: 'skill_mat'
                                    }
                                },
                                {
                                    div: {
                                        span: computer_.MiscText.Avatar_Info_Select[3][lang2],
                                        style: {
                                            padding: '5px 10px',
                                            border: '2px solid rgb(223, 144, 59)',
                                            'border-radius': '5px'
                                        },
                                        class: 'hover-shadow',
                                        click: function () {
                                            $('#to_mtc').click()
                                            $('.scroller').scrollTop($('h3').height())
                                        }
                                    },
                                    style: {
                                        width: '100%',
                                        display: 'flex',
                                        'justify-content': 'center',
                                        'font-weight': 'bold',
                                        'margin-top': '-5px',
                                        'margin-bottom': '18px',
                                    },
                                    class: 'to_mtc',
                                    when: !global_var_avatar_hex
                                },
                                {
                                    div: {
                                        span: computer_.MiscText.Avatar_Buff[lang3],
                                        style: {
                                            padding: '5px 10px',
                                            border: '2px solid rgb(255, 172, 255)',
                                            'border-radius': '5px'
                                        },
                                        class: 'hover-shadow',
                                        click: function () {
                                            global_var_avatar_hex = 2
                                            renderInfoPre(this_avatar._name, "Buffs")
                                            $('.a_select').hide()
                                            $('.scroller').scrollTop($('h3').height())
                                        }
                                    },
                                    style: {
                                        width: '100%',
                                        display: 'flex',
                                        'justify-content': 'center',
                                        'font-weight': 'bold',
                                        'margin-top': '-5px',
                                        'margin-bottom': '18px',
                                    },
                                    class: 'to_mtc',
                                    when: !global_var_avatar_hex && this_avatar.Buff
                                }
                            ],
                            class: 'after_1 stat_ver_choose_wrap a_section_content',
                            a: {
                                id: 'special'
                            }
                        },
                        class: 'a_section'
                    },
                ],
                "Skills_After": [
                    emote_block,
                    {
                        div: [
                            {
                                div: [
                                    {
                                        div: [
                                            {
                                                img: function (k) {
                                                    if (anniversary && (this_avatar._id == 42)) return '/homdgcat-res/UI/birthday-cake2.png'
                                                    return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon + '.png'
                                                },
                                                class: 'head_left',
                                                when: show_icon,
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
                                                img: function (k) {
                                                    if (anniversary && (this_avatar._id == 42)) return '/homdgcat-res/UI/birthday-cake2.png'
                                                    return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon2 + '.png'
                                                },
                                                class: 'head_left',
                                                when: "Icon2",
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
                                                img: function (k) {
                                                    if (anniversary && (this_avatar._id == 42)) return '/homdgcat-res/UI/birthday-cake2.png'
                                                    return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon3 + '.png'
                                                },
                                                class: 'head_left',
                                                when: "Icon3",
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
                                                p: function (k) {
                                                    if (April_1st) return k.data.Name + meow2
                                                    return k.data.Name
                                                },
                                                a: {
                                                    class: function (k) {
                                                        if (!show_icon) return ''
                                                        if (k.data.Icon3) return 'head_right hr_3'
                                                        if (k.data.Icon2) return 'head_right hr_2'
                                                        return 'head_right hr_1'
                                                    }
                                                }
                                            },
                                        ],
                                        class: 'a_section_head head_withimg'
                                    },
                                    {
                                        div: [
                                            {
                                                p: function (k) {
                                                    if (k.data.DescAdd) return k.data.Desc + k.data.DescAdd
                                                    return k.data.Desc
                                                }
                                            }
                                        ],
                                        class: 'a_section_content'
                                    },
                                ],
                                class: 'battle_desc',
                            },
                            {
                                div: [
                                    {
                                        div: [
                                            {
                                                input: 'lv',
                                                a: {
                                                    type: 'number',
                                                    value: 10,
                                                    min: 1,
                                                    max: function (s) {
                                                        return s.data.ParamDesc[0].ParamLevelList.length
                                                    }
                                                },
                                                class: 'skill_lv_input',
                                                style: {
                                                    display: 'none'
                                                }
                                            },
                                            {
                                                span: function (s) {
                                                    var len = s.data.ParamDesc[0].ParamLevelList.length
                                                    if (len >= 10) return 'Lv10'
                                                    return 'Lv' + len
                                                },
                                                style: {
                                                    'margin-right': '8px',
                                                    'font-weight': 'bold',
                                                    'margin-left': '0px',
                                                },
                                                class: 'skill_lv_show'
                                            },
                                            {
                                                span: {
                                                    span: '▲',
                                                    style: {
                                                        'font-size': '16px',
                                                        'line-height': '24px',
                                                        margin: '0'
                                                    }
                                                },
                                                class: 'skill_lv_up',
                                                style: {
                                                    'margin-right': '10px',
                                                    'margin-left': '0px',
                                                    'width': '40px',
                                                }
                                            },
                                            {
                                                span: {
                                                    span: '▼',
                                                    style: {
                                                        'font-size': '16px',
                                                        'line-height': '24px',
                                                        margin: '0'
                                                    }
                                                },
                                                class: 'skill_lv_down',
                                                style: {
                                                    'margin-right': '10px',
                                                    'margin-left': '0px',
                                                    'width': '40px',
                                                }
                                            },
                                        ],
                                        class: 'a_section_head',
                                        style: {
                                            display: 'flex',
                                            'line-height': '2'
                                        }
                                    },
                                    {
                                        div: [
                                            {
                                                div: [
                                                    {
                                                        span: function (s) {
                                                            return s.data.Desc
                                                        },
                                                        style: {
                                                            width: 'max-content'
                                                        }
                                                    },
                                                    {
                                                        span: function (s) {
                                                            var active_lv = 10
                                                            var total_lv = s.data.ParamLevelList.length
                                                            for (var i = 0; i < 15; i++) {
                                                                $(s.container).render({
                                                                    span: function (s) {
                                                                        var this_level_desc = s.data.ParamLevelList[i]
                                                                        return this_level_desc ? (this_level_desc ? this_level_desc : this_level_desc) : s.data.ParamLevelList[total_lv - 1]
                                                                    },
                                                                    class: 'lv lv' + (i + 1).toString()
                                                                });
                                                            }
                                                            $(s.container).children().hide()
                                                            $(s.container).children('.lv' + active_lv).show()
                                                        },
                                                        style: {
                                                            'text-align': 'right',
                                                            width: 'max-content',
                                                            'margin-left': '5px'
                                                        },
                                                    }
                                                ],
                                                datapath: 'ParamDesc',
                                                class: 'param'
                                            },
                                        ],
                                        class: 'a_section_content'
                                    },
                                ],
                                class: 'battle_stat',
                            }
                        ],
                        data: use_BattleSkills,
                        style: {
                            margin: '0',
                            display: 'flex',
                            'flex-wrap': 'wrap',
                            'justify-content': 'space-evenly',
                            width: '100%'
                        },
                        class: 'shows shows_1'
                    },
                ],
                "Passive Skills": [
                    global_var_avatar_hex ? '' : emote_block,
                    {
                        div: [
                            {
                                div: [
                                    {
                                        img: function (k) {
                                            if (anniversary && (this_avatar._id == 42)) return '/homdgcat-res/UI/birthday-cake2.png'
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon + '.png'
                                        },
                                        class: 'head_left',
                                        when: show_icon,
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
                                        img: function (k) {
                                            if (anniversary && (this_avatar._id == 42)) return '/homdgcat-res/UI/birthday-cake2.png'
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon2 + '.png'
                                        },
                                        class: 'head_left',
                                        when: "Icon2",
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
                                        img: function (k) {
                                            if (anniversary && (this_avatar._id == 42)) return '/homdgcat-res/UI/birthday-cake2.png'
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon3 + '.png'
                                        },
                                        class: 'head_left',
                                        when: "Icon3",
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
                                        p: function (k) {
                                            if (April_1st) return k.data.Name + meow2
                                            return k.data.Name
                                        },
                                        a: {
                                            class: function (k) {
                                                if (!show_icon) return ''
                                                if (k.data.Icon3) return 'head_right hr_3'
                                                if (k.data.Icon2) return 'head_right hr_2'
                                                return 'head_right hr_1'
                                            }
                                        }
                                    },
                                ],
                                class: 'a_section_head head_withimg'
                            },
                            {
                                div: {
                                    p: function (k) {
                                        return k.data.Desc
                                    }
                                },
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section_skill shows shows_2',
                        data: use_PassiveSkills,
                    },
                ],
                "Constellations": [
                    global_var_avatar_hex ? '' : emote_block,
                    {
                        div: [
                            {
                                div: [
                                    {
                                        img: function (k) {
                                            if (anniversary && (this_avatar._id == 42)) return '/homdgcat-res/UI/birthday-cake2.png'
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon + '.png'
                                        },
                                        class: 'head_left',
                                        when: show_icon,
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
                                        img: function (k) {
                                            if (anniversary && (this_avatar._id == 42)) return '/homdgcat-res/UI/birthday-cake2.png'
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon2 + '.png'
                                        },
                                        class: 'head_left',
                                        when: "Icon2",
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
                                        img: function (k) {
                                            if (anniversary && (this_avatar._id == 42)) return '/homdgcat-res/UI/birthday-cake2.png'
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon3 + '.png'
                                        },
                                        class: 'head_left',
                                        when: "Icon3",
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
                                        p: function (k) {
                                            if (April_1st) return k.data.Level + ' ' + k.data.Name + meow2
                                            return k.data.Level + ' ' + k.data.Name
                                        },
                                        a: {
                                            class: function (k) {
                                                if (!show_icon) return ''
                                                if (k.data.Icon3) return 'head_right hr_3'
                                                if (k.data.Icon2) return 'head_right hr_2'
                                                return 'head_right hr_1'
                                            }
                                        }
                                    },
                                ],
                                class: 'a_section_head head_withimg'
                            },
                            {
                                div: [
                                    {
                                        p: function (k) {
                                            return k.data.Desc
                                        }
                                    },
                                ],
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section_skill shows shows_3',
                        data: use_Constellations,
                    },
                ],
                "Skills": []
            }
            if (avatar.includes("Mannequin")) dr["Constellations"] = []
            if (skillconfig.HyperLinks && skillconfig.HyperLinks.length) {
                skills_hyper.push(emote_block)
                skillconfig.HyperLinks.forEach(function (x, i) {
                    skills_hyper.push({
                        div: [
                            {
                                div: [
                                    {
                                        p: x.Name
                                    },
                                ],
                                class: 'a_section_head'
                            },
                            {
                                div: [
                                    {
                                        p: x.Desc
                                    },
                                ],
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section_skill',
                    })
                })
            }
            dr["Skills"] = dr["Skills_Pre"].concat(skills_hyper, dr["Skills_After"], dr["Passive Skills"], dr["Constellations"])
            dr["Passives Constellations"] = [temp_2].concat(dr["Passive Skills"], dr["Constellations"])
            dr["Buffs"] = dr["Skills"]
        } else if (type == "Track Updates") {
            dr = {
                "Track Updates": [
                    {
                        div: {
                            div: {
                                div: [
                                    {
                                        div: {
                                            img: imgpre + `homdgcat-res/Avatar/${this_avatar.Icon}.png`,
                                            event: {
                                                error: function (d) {
                                                    $('.as_left').remove()
                                                }
                                            },
                                            a: {
                                                loading: lazy
                                            },
                                            style: {
                                                width: '80%',
                                                display: 'block',
                                                'margin-left': '10%',
                                                'margin-right': '10%'
                                            }
                                        },
                                        class: 'as_left dissolve'
                                    },
                                    {
                                        div: [
                                            {
                                                p: [
                                                    {
                                                        img: '/homdgcat-res/UI/birthday-cake2.png',
                                                        when: anniversary && (this_avatar._id == 42),
                                                        class: 'name_cake'
                                                    },
                                                    this_avatar.Name,
                                                    {
                                                        img: '/homdgcat-res/UI/birthday-cake2.png',
                                                        when: anniversary && (this_avatar._id == 42),
                                                        class: 'name_cake'
                                                    },
                                                ],
                                                style: {
                                                    'text-align': 'center',
                                                    margin: '8px auto 8px',
                                                    'font-size': '1.2em',
                                                    width: '100%',
                                                    color: color0,
                                                    'font-weight': 'bold'
                                                }
                                            },
                                            {
                                                span: computer_.MiscText.StatVerChoose[lang],
                                                when: 0
                                            },
                                            {
                                                span: '',
                                                class: 'cl_choose',
                                                style: {
                                                    display: 'flex',
                                                    'justify-content': 'center'
                                                }
                                            }
                                        ],
                                        class: 'as_right '
                                    }
                                ],
                                class: 'as'
                            },
                            class: 'after_1 stat_ver_choose_wrap a_section_content',
                            a: {
                                id: 'special'
                            }
                        },
                        class: 'a_section'
                    },
                    emote_block,
                ]
            }
        } else if ((type == "Advanced Data") || (type == "HomDGCat's Notes")) {
            var show_114514 = (otherdata.BallList && otherdata.BallList.length) || (otherdata.EndureList && otherdata.EndureList.length)
            var temp__ = {
                data: otherdata,
                template: [
                    temp_2,
                    emote_block,
                    {
                        div: [
                            {
                                div: {
                                    p: computer_.MiscText.Avatar_Data_Ball[lang2]
                                },
                                style: {
                                    color: color0
                                },
                                class: 'a_section_head ml_b'
                            },
                            {
                                div: {
                                    table: {
                                        tr: [
                                            {
                                                td: `[[When]]`,
                                                width: '60%'
                                            },
                                            {
                                                td: function (k) {
                                                    drop = k.data.DropArray
                                                    if (!drop) {
                                                        return k.data.CD.toString() + "s"
                                                    }
                                                    out = ""
                                                    for (var i = 0; i < drop.length; i++) {
                                                        out += drop[i].Num.toString() + " (" + (drop[i].Chance * 100).toString() + "%)"
                                                        if (i + 1 < drop.length) { out += " / " }
                                                    }
                                                    return out.replace(' (100%)', '')
                                                },
                                                width: '40%',
                                                style: {
                                                    'text-align': 'right',
                                                    'padding-left': '10px'
                                                }
                                            }
                                        ],
                                        datapath: 'BallList',
                                        width: '100%',
                                        height: '30px',
                                        class: 'other_table'
                                    },
                                    width: '100%'
                                },
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section_small',
                        style: {
                            position: 'relative'
                        },
                        when: show_114514
                    },
                    {
                        div: [
                            {
                                div: {
                                    p: computer_.MiscText.Avatar_Data_Endure[lang2]
                                },
                                style: {
                                    color: color0
                                },
                                class: 'a_section_head ml_e'
                            },
                            {
                                div: {
                                    table: {
                                        tr: [
                                            {
                                                td: `[[Skill]]`,
                                                width: '75%'
                                            },
                                            {
                                                td: function (d) {
                                                    return d.data.Endure.toString()
                                                },
                                                width: '25%',
                                                style: {
                                                    'text-align': 'right'
                                                }
                                            },
                                        ],
                                        datapath: 'EndureList',
                                        style: {
                                            width: '100%',
                                            height: '30px',
                                            'padding-left': '10px'
                                        },
                                        class: 'other_table'
                                    },
                                    width: '100%'
                                },
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section_small',
                        style: {
                            position: 'relative'
                        },
                        when: show_114514
                    },
                    {
                        div: [
                            {
                                div: {
                                    p: computer_.MiscText.Avatar_Data_Other[lang2]
                                },
                                style: {
                                    color: color0
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: {
                                    ul: {
                                        li: function (k) {
                                            return custom_string(k.data, 'ffd780')
                                        },
                                        style: {
                                            'margin-top': '10px'
                                        },
                                        datapath: 'OtherDataList'
                                    },
                                    style: {
                                        'margin-top': '-10px'
                                    },
                                },
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section'
                    },
                    {
                        div: [
                            {
                                div: {
                                    p: computer_.MiscText.Avatar_Data_WindZone[lang2]
                                },
                                style: {
                                    color: color0
                                },
                                class: 'a_section_head ml_w'
                            },
                            {
                                div: {
                                    table: [
                                        {
                                            thead: {
                                                tr: function (d) {
                                                    $(d.container).render({
                                                        data: computer_.MiscText.Avatar_WindZone_Header,
                                                        template: {
                                                            th: `[[${lang2}]]`,
                                                            style: {
                                                                'padding': "7px"
                                                            }
                                                        }
                                                    })
                                                },
                                                width: '100%'
                                            }
                                        },
                                        {
                                            tbody: function (d) {
                                                $(d.container).render({
                                                    data: d.data,
                                                    template: {
                                                        tr: [
                                                            {
                                                                td: `[[Skill]]`
                                                            },
                                                            {
                                                                td: `[[Target]]`
                                                            },
                                                            {
                                                                td: `[[Inner]] ~ [[Radius]]`
                                                            },
                                                            {
                                                                td: `[[Strength]]`
                                                            },
                                                            {
                                                                td: `[[Attenuation]]`
                                                            },
                                                            {
                                                                td: function (p) {
                                                                    if (!p.data.Duration) {
                                                                        return ""
                                                                    }
                                                                    return p.data.Duration
                                                                }
                                                            },
                                                            {
                                                                td: function (p) {
                                                                    if (p.data.Reverse) {
                                                                        return "✔"
                                                                    }
                                                                    return ""
                                                                }
                                                            },
                                                        ],
                                                        width: '100%',
                                                        class: 'windzone_table'
                                                    }
                                                })
                                            },
                                            datapath: 'WindZoneList'
                                        }
                                    ],
                                    width: '100%'
                                },
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section',
                        style: {
                            position: 'relative',
                            display: 'none'
                        }
                    },
                    {
                        div: [
                            {
                                table: [
                                    {
                                        thead: [
                                            {
                                                tr: function (d) {
                                                    $(d.container).render({
                                                        data: computer_.MiscText.Avatar_Attack_Header,
                                                        template: {
                                                            th: `[[${lang2}]]`
                                                        }
                                                    })
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        tbody: function (d) {
                                            $(d.container).render({
                                                data: damagedata.AttackList,
                                                template: {
                                                    tr: [
                                                        {
                                                            td: `[[Skill]]`
                                                        },
                                                        {
                                                            td: function (p) {
                                                                return computer_.AvatarShapeConfig[p.data.Shape.Type].Name[lang]
                                                            },
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: function (p) {
                                                                var out = ""
                                                                size = p.data.Shape.Size
                                                                desc = computer_.AvatarShapeConfig[p.data.Shape.Type].Params
                                                                for (var i = 0; i < size.length; i++) {
                                                                    out += desc[i][lang] + " " + size[i].toString()
                                                                    if (i + 1 < size.length) { out += "<br>" }
                                                                }
                                                                return out
                                                            }
                                                        },
                                                        {
                                                            td: `[[AtkTag]]`
                                                        },
                                                        {
                                                            td: function (p) {
                                                                elem = computer_.ElemNameConfig[p.data.Element]
                                                                if (!elem) {
                                                                    return ""
                                                                }
                                                                return "<color style='color:" + computer_.TextColorConfig[elem.Color] + ";'><b>" + elem.Text[lang] + "</b></color>"
                                                            },
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: `[[GU]]`,
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: `[[AttTag]]`
                                                        },
                                                        {
                                                            td: function (p) {
                                                                return p.data.AttGrp.replaceAll("独立", "0").replaceAll("Independent", "0")
                                                            },
                                                            style: {
                                                                'text-align': 'center'
                                                            }
                                                        },
                                                        {
                                                            td: function (p) {
                                                                var a = computer_.AvatarForceConfig[p.data.ForceType][lang]
                                                                if (a == "None" || a == "无") { a = "" }
                                                                return a
                                                            }
                                                        },
                                                        {
                                                            td: `[[RetreatType]]`
                                                        },
                                                        {
                                                            td: function (p) {
                                                                a = "(" + p.data.Force[0] + ", " + p.data.Force[1] + ")"
                                                                if (a == "(0, 0)") { a = "" }
                                                                return a
                                                            },
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: function (p) {
                                                                if (p.data.Blunt) {
                                                                    return "✔"
                                                                }
                                                                return ""
                                                            },
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: `[[Poise]]`,
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: `[[AttackType]]`,
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: function (p) {
                                                                if (p.data.Arkhe) {
                                                                    return p.data.Arkhe.toString()
                                                                }
                                                                return ""
                                                            },
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: function (p) {
                                                                if (p.data.HTime) {
                                                                    return p.data.HTime.toString()
                                                                }
                                                                return ""
                                                            },
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: function (p) {
                                                                if (p.data.HScale) {
                                                                    return p.data.HScale.toString()
                                                                }
                                                                return ""
                                                            },
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: function (p) {
                                                                if (p.data.BeHalt) {
                                                                    return "✔"
                                                                }
                                                                return ""
                                                            },
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: function (p) {
                                                                if (p.data.CanInfuse) {
                                                                    return "✔"
                                                                }
                                                                return ""
                                                            },
                                                            class: 'attack_center'
                                                        },
                                                        {
                                                            td: `[[StrikeType]]`,
                                                            class: 'attack_center'
                                                        },
                                                    ]
                                                }
                                            })
                                        }
                                    }
                                ],
                            },
                        ],
                        class: 'attack_div',
                        when: damagedata.AttackList && damagedata.AttackList.length
                    }
                ]
            },
            dr = {
                "Advanced Data": temp__,
                "HomDGCat's Notes": temp__
            }
        } else if (type == "Stories") {
            dr = {
                "Stories": [
                    temp_2,
                    emote_block,
                    {
                        div: [
                            {
                                div: [
                                    {
                                        p: function (k) {
                                            return k.data.Title
                                        },
                                        style: {
                                            color: color0
                                        }
                                    }
                                ],
                                class: 'a_section_head'
                            },
                            {
                                div: [
                                    {
                                        p: function (k) {
                                            return k.data
                                        },
                                        datapath: 'Tips',
                                        style: {
                                            'font-size': '15px',
                                            'color': '#ffcc44',
                                        }
                                    },
                                    {
                                        p: function (k) {
                                            return k.data.Content
                                        }
                                    },
                                ],
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section',
                        data: fetters.StoryList,
                    }
                ],
            }
        } else if (type == "Voicelines") {
            dr = {
                "Voicelines": [
                    temp_2,
                    emote_block,
                    {
                        div: [
                            {
                                div: {
                                    p: function (k) {
                                        return k.data.Title
                                    },
                                    style: {
                                        color: color0
                                    }
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: [
                                    {
                                        p: function (k) {
                                            return k.data
                                        },
                                        datapath: 'Tips',
                                        style: {
                                            'font-size': '15px',
                                            'color': '#ffcc44',
                                        }
                                    },
                                    {
                                        p: function (k) {
                                            return k.data.Content
                                        }
                                    },
                                ],
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section_small',
                        data: fetters.VoiceList,
                    }
                ],
            }
        } else if (type == "Dialogues") {
            var rc = []
            _AvatarTeapotTalk[this_avatar._id].RoleCombat.forEach(function (x) {
                rc.push({
                    p: x.join("<br>"),
                    style: {
                        'margin-bottom': '18px'
                    }
                })
            })
            var initial = [
                temp_2, 
                emote_block,
                {
                    div: [
                        {
                            div: computer_.MiscText.Maze_Name[lang3],
                            class: 'a_section_head',
                            style: {
                                color: color0
                            }
                        },
                        {
                            div: rc,
                            class: 'a_section_content',
                            style: {
                                'margin-bottom': '-8px'
                            }
                        },
                    ],
                    class: 'a_section'
                }
            ]
            _AvatarTeapotTalk[this_avatar._id].Talks.forEach(function (x, j) {
                var tk = []
                x.forEach(function (y) {
                    if (y.Type) {
                        tk.push({
                            p: y.Text,
                            style: {
                                margin: '0'
                            }
                        })
                    } else {
                        tk.push({
                            p: '• ' + y.Text
                        })
                    }
                })
                initial.push({
                    div: [
                        {
                            div: computer_.MiscText.Teapot_Name[lang3] + ' ' + (j + 1),
                            class: 'a_section_head',
                            style: {
                                color: color0
                            }
                        },
                        {
                            div: tk,
                            class: 'a_section_content tk',
                        },
                    ],
                    class: 'a_section'
                })
            })
            dr = {
                "Dialogues": {
                    template: initial
                }
            }
        } else {
            dr = {
                "Material Calculator": {
                    template: [
                        temp_2,
                        emote_block,
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
                                        class: 'mtc_2 mtc_result'
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
                }
            }
        }

        return dr[type]

    }

    function renderSVC(i) {
        var skillvers = Object.keys(_AvatarSkillPConfig[i].Ver)
        V = {
            "1": 'v1',
            "15": 'v15',
            "2": 'v2',
            "25": 'v25',
            "3": 'v3',
            "35": 'v35',
            "4": 'v4',
            "45": 'v45',
            "5": 'v5',
            "55": 'v55',
            "6": 'v6',
            "65": 'v65',
            "L": computer_.MiscText.Live_Name[lang]
        }
        var options = {}
        skillvers.forEach(function (k) {
            options[V[k]] = k
        })
        return {
            select: '',
            options: options
        }
    }

    function renderSVW(wpn) {
        var i = wpn.EquipAffixID ? wpn.EquipAffixID : 111301
        return SVW(i)
    }

    function SVW(i) {
        var skillvers = Object.keys(_WeaponAffixPConfig[i].Ver)
        V = {
            "1": 'v1',
            "15": 'v15',
            "2": 'v2',
            "25": 'v25',
            "3": 'v3',
            "35": 'v35',
            "4": 'v4',
            "45": 'v45',
            "5": 'v5',
            "55": 'v55',
            "6": 'v6',
            "65": 'v65',
            "L": computer_.MiscText.Live_Name[lang]
        }
        var options = {}
        skillvers.forEach(function (k) {
            options[V[k]] = k
        })
        return {
            select: '',
            options: options
        }
    }

    function renderHN() {
        switch_title(computer_.MiscText.Avatar_Data_Other[lang2])
        $('.hn_data').empty().render(emote_block)
        rotate()
        _NA.forEach(function (u) {
            if (!loaded_a_1.includes(u)) {
                let script_computer_2 = document.createElement('script')
                script_computer_2.src = `/gi/${lang3}/Avatar/${u}_1.js`
                document.head.append(script_computer_2)
                script_computer_2.onload = function () {
                    _AvatarDataConfig = {..._AvatarDataConfig, ..._AvatarDataConfig_}
                    _AvatarMats = {..._AvatarMats, ..._AvatarMats_}
                    _AvatarSkillPConfig = {..._AvatarSkillPConfig, ..._AvatarSkillPConfig_}
                    _AvatarAttackConfig = {..._AvatarAttackConfig, ..._AvatarAttackConfig_}
                    loaded_a_1.push(u)
                    hn_write_avatar(u)
                }
            } else {
                hn_write_avatar(u)
            }
        })
    }

    function renderHD() {
        switch_title(computer_.MiscText.HD[lang2])
        $('.hd_data').empty().render(emote_block)
        rotate()
        _hidden.forEach(function (u, i) {
            $('.hd_data').render({
                div: [
                    {
                        div: [
                            {
                                p: u.Name,
                                style: {
                                    'text-align': 'center'
                                }
                            },
                            {
                                p: u.Date + '<br><color style="color:#FFD780;">' + ((lang == 'CH') ? '妮可少女 玉衡杯数据库 yuhengcup.wiki <b>' : 'homdgcat.wiki | t.me/homdgcat <b>') + ((lang == 'CH') ? u.Ver.replaceAll('Live', '正式服') : u.Ver) + '</b></color>',
                                style: {
                                    'font-size': '0.8em',
                                    'font-weight': 'normal',
                                    'text-align': 'center',
                                    'margin-top': '5px',
                                },
                            },
                            {
                                div: {
                                    p: '＋',
                                },
                                style: {
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
                            },
                            {
                                div: {
                                    p: '−',
                                },
                                style: {
                                    'display': 'flex',
                                    'justify-content': 'center',
                                    cursor: 'pointer',
                                    'margin-top': '-5px',
                                    'margin-bottom': '-5px',
                                    'font-size': '1.4em'
                                },
                                class: 'show_up show_up0',
                                when: $("#UPDATE").val() != 41,
                                a: {
                                    'data-id': '_' + i,
                                    'data-show': 'no'
                                }
                            }
                        ],
                        class: 'a_section_head'
                    },
                    {
                        div: function (h) {
                            var has_pic = 0
                            if (u.Figures && u.Figures.length) {
                                has_pic = 1
                                $(h.container).render({
                                    template: {
                                        div: {
                                            img: function (l) {
                                                return imgpre + 'images/' + l.data + '.png'
                                            },
                                            data: u.Figures,
                                            class: 'figure',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        class: 'figure_wrap'
                                    }
                                })
                            }
                            if (u.Icons && u.Icons.length) {
                                has_pic = 1
                                $(h.container).render({
                                    template: {
                                        div: {
                                            img: function (l) {
                                                return imgpre + 'images/' + l.data + '.png'
                                            },
                                            data: u.Icons,
                                            class: 'figure_3',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        class: 'figure_wrap'
                                    }
                                })
                            }
                            if (u.Pics && u.Pics.length) {
                                has_pic = 1
                                $(h.container).render({
                                    template: {
                                        div: {
                                            img: function (l) {
                                                return imgpre + 'images/' + l.data + '.png'
                                            },
                                            data: u.Pics,
                                            class: 'figure_2',
                                            a: {
                                                loading: lazy
                                            }
                                        },
                                        class: 'figure_wrap'
                                    }
                                })
                            }
                            if (u.OriginalPics && u.OriginalPics.length) {
                                has_pic = 1
                                for (const f of u.OriginalPics) {
                                    $(h.container).render({
                                        template: {
                                            div: {
                                                img: function (l) {
                                                    return imgpre + 'images/' + f.replace("{lang}", lang) + '.png'
                                                },
                                                a: {
                                                    loading: lazy
                                                },
                                                style: {
                                                    width: '100%',
                                                    'max-width': '1000px',
                                                    cursor: 'pointer'
                                                },
                                                event: {
                                                    click: function (l) {
                                                        window.open('/images/' + f.replace("{lang}", lang) + '.png', '_blank')
                                                    }
                                                }
                                            },
                                            class: 'figure_wrap'
                                        }
                                    })
                                }
                            }
                            if (!has_pic && !u.NoEmote) {
                                var emote = Math.ceil(Math.random() * emote_num)
                                while (unused_emotes.includes(emote)) {
                                    emote = Math.ceil(Math.random() * emote_num)
                                }
                                $(h.container).render({
                                    template: {
                                        div: {
                                            img: imgpre + 'images/emote/Keqing/' + emote + '.png',
                                            class: 'emote',
                                            a: {
                                                loading: lazy
                                            },
                                        },
                                        class: 'figure_wrap',
                                    }
                                })
                            }
                            var ret_1 = []
                            u.Notes.forEach(function (g) {
                                ret_1.push({
                                    p: custom_string(g, 'ffd780'),
                                    style: {
                                        margin: '10px 0'
                                    }
                                })
                            })
                            $(h.container).render(ret_1)
                        },
                        class: 'a_section_content',
                        style: {
                            display: ($("#UPDATE").val() != 41) ? 'none' : '',
                            'margin-bottom': '0px'
                        }
                    }
                ],
                class: 'a_section delete'
            })
        })
        $('.show_up0').hide()
    }

    function renderBoss() {
        switch_title(boss_show_name[lang])
        $('.boss_data').empty().render(emote_block)
        rotate()
        _bossguide.forEach(function (u, i) {
            var show_content = []
            /*if (u.TutIcon && u.TutIcon.length) {
                var show_pics = []
                u.TutIcon.forEach(function (h) {
                    show_pics.push({
                        img: '/images/Tutorial/' + h + '.png'
                    })
                })
                show_content.push({
                    div: show_pics,
                    class: 'boss_tut',
                    style: {
                        margin: '0'
                    }
                })
            }*/
            u.DescList.forEach(function (h) {
                show_content.push({
                    p: h.replaceAll("#", "</color>").replaceAll("@", "<color style='color:#FFD780;'>"),
                    class: 'boss_desc'
                })
            })
            $('.boss_data').render({
                div: [
                    {
                        div: [
                            {
                                p: u.Name,
                                style: {
                                    'text-align': 'center',
                                }
                            },
                            {
                                p: u.Show.replaceAll("#", "</color>").replaceAll("@", "<color style='color:#FFD780;'>"),
                                style: {
                                    'font-size': '0.8em',
                                    'font-weight': 'bold',
                                    'text-align': 'center',
                                    'margin-top': '5px',
                                },
                            },
                            {
                                div: {
                                    a: '/gi/monster/' + u._id,
                                    t: {
                                        img: '/homdgcat-res/monster/' + u.Icon + '.png',
                                    },
                                    class: 'hover-shadow',
                                    attr: {
                                        target: '_blank'
                                    }
                                },
                                class: 'boss_icon'
                            },
                            {
                                p: '<color style="color:#FFACFF;">' + ((lang == 'CH') ? '妮可少女 玉衡杯数据库 yuhengcup.wiki <b>' : 'homdgcat.wiki | t.me/homdgcat <b>') + '</b></color>',
                                style: {
                                    'font-size': '0.8em',
                                    'font-weight': 'normal',
                                    'text-align': 'center',
                                    'margin-top': '5px',
                                },
                            },
                            {
                                div: {
                                    p: '＋',
                                },
                                style: {
                                    'display': 'flex',
                                    'justify-content': 'center',
                                    cursor: 'pointer',
                                    'margin-top': '-5px',
                                    'margin-bottom': '-5px',
                                    'font-size': '1.4em'
                                },
                                class: 'show_up',
                                a: {
                                    'data-id': '_' + i,
                                    'data-show': 'no'
                                },
                                when: (window.innerWidth < 1000)
                            },
                            {
                                div: {
                                    p: '−',
                                },
                                style: {
                                    'display': 'flex',
                                    'justify-content': 'center',
                                    cursor: 'pointer',
                                    'margin-top': '-5px',
                                    'margin-bottom': '-5px',
                                    'font-size': '1.4em'
                                },
                                class: 'show_up show_up0',
                                a: {
                                    'data-id': '_' + i,
                                    'data-show': 'no'
                                },
                                when: (window.innerWidth < 1000)
                            }
                        ],
                        class: 'a_section_head',
                        style: {
                            'margin-top': '22px'
                        }
                    },
                    {
                        div: show_content,
                        class: 'a_section_content',
                        style: {
                            display: (window.innerWidth < 1000) ? 'none' : '',
                        }
                    }
                ],
                class: (window.innerWidth < 1000) ? 'a_section delete' : 'a_section_small'
            })
            $('.show_up0').hide()
        })
    }

    function renderPic() {
        $('.pic_data').empty().render(emote_block)
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
                                        download(`/Char/GI/${t.N}/${u}.png`, `${u} ${t.N}`)
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
        //'event', 'download_gi_char', {
        //    'type': 'gi_char'
        //})
    }

    $('body').on('click', '.emote', function () {
        var emote = Math.ceil(Math.random() * emote_num)
        while (unused_emotes.includes(emote)) {
            emote = Math.ceil(Math.random() * emote_num)
        }
        this.src = '/images/emote/Keqing/' + emote + '.png'
        
    })

    function renderCL(v) {
        switch_title(computer_.MiscText.Changelog[lang2])
        $('.cl_data').empty().render(emote_block)
        rotate()
        var change_filename = (lang == 'CH') ? '改动汇总' : 'Changes Compilation'
        $('.cl_data').render({
            div: {
                schedule: (lang == 'CH') ? '下载' : 'Download',
                click: function (l) {
                    download(`/Char/GI/${change_filename}/${VER_GI}.png`, `${VER_GI} ${change_filename}`)
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
        if (!v) return
        cl_write_relic(v.split("-")[1], v.split("-")[0])
        _NA.forEach(function (u) {
            if (!loaded_a_1.includes(u)) {
                let script_computer_2 = document.createElement('script')
                script_computer_2.src = `/gi/${lang3}/Avatar/${u}_1.js`
                document.head.append(script_computer_2)
                script_computer_2.onload = function () {
                    _AvatarDataConfig = {..._AvatarDataConfig, ..._AvatarDataConfig_}
                    _AvatarMats = {..._AvatarMats, ..._AvatarMats_}
                    _AvatarSkillPConfig = {..._AvatarSkillPConfig, ..._AvatarSkillPConfig_}
                    _AvatarAttackConfig = {..._AvatarAttackConfig, ..._AvatarAttackConfig_}
                    loaded_a_1.push(u)
                    cl_write_avatar(u, v.split("-")[1], v.split("-")[0])
                }
            } else {
                cl_write_avatar(u, v.split("-")[1], v.split("-")[0])
            }
        })
        _NW.forEach(function (u) {
            if (!loaded_w.includes(u)) {
                let script_computer_2 = document.createElement('script')
                script_computer_2.src = `/gi/${lang3}/Weapon/${u}.js`
                document.head.append(script_computer_2)
                script_computer_2.onload = function () {
                    _WeaponAffixPConfig = {..._WeaponAffixPConfig, ..._WeaponAffixPConfig_}
                    weapon_story_cache = {...weapon_story_cache, ...weapon_story_cache_}
                    loaded_w.push(u)
                    cl_write_weapon(u, v.split("-")[1], v.split("-")[0])
                }
            } else {
                cl_write_weapon(u, v.split("-")[1], v.split("-")[0])
            }
        })
    }

    function cl_write_relic(v1, v2) {
        var v2_ver = "v" + v2
        if (v2 == "L") {
            var v2_ver = "Live"
        }
        if (_relic_changelog) {
            if (_relic_changelog[v2_ver] && _relic_changelog[v2_ver].length) {
                _relic_changelog[v2_ver].forEach(function (t) {
                    $('.cl_data').render({
                        div: [
                            {
                                div: [
                                    {
                                        img: imgpre + `homdgcat-res/Relic/${t.Icon}_4.png`,
                                        class: 'head_left',
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
                                        p: t.Name + ' +',
                                        class: 'head_right hr_1'
                                    }
                                ],
                                class: 'a_section_head head_withimg'
                            },
                            {
                                div: function (s) {
                                    t.Changes.forEach(function (y) {
                                        const_change = ""
                                        const_diff = dif(y.Old, y.New)
                                        const_diff.forEach(function (u) {
                                            if (u.added) {
                                                const_change += "<span style='background-color:#006600'>" + u.value + "</span>"
                                            } else if (u.removed) {
                                                if (const_diff.length < 20) const_change += "<span style='background-color:#880000'><del>" + u.value + "</del></span>"
                                            } else {
                                                if (const_diff.length > 1) {
                                                    const_change += u.value
                                                }
                                            }
                                        })
                                        if ((const_diff.length >= 20)) {
                                            const_change = y.Old + "<br><color style='color:#FFD780'>↓↓</color><br>" + y.New
                                        }
                                        if (y.Old == y.New) const_change = ""
                                        const_change = const_change.replaceAll("colorstyle", "color style")
                                        if (const_change.length) {
                                            $(s.container).render({
                                                p: `<b><color style='color:#FFD780'>[${y.Num}]</color></b><br>` + const_change
                                            })
                                        }
                                    })
                                },
                                class: 'a_section_content',
                                style: {
                                    
                                }
                            }
                        ],
                        class: 'a_section_skill',
                        style: {
                            color: 'white'
                        }
                    })
                })
            }
        }
    }

    function cl_write_avatar(u, v1, v2) {
        console.log(u + v1 + v2)
        var results = changes_avatar(u, v1, v2)
        var avatar_name_temp = u
        if (avatar_name_temp.includes('PlayerBoy')) avatar_name_temp = 'PlayerBoy'
        if (avatar_name_temp.includes('PlayerGirl')) avatar_name_temp = 'PlayerGirl'
        results.forEach(function (w) {
            $('.cl_data').render({
                div: [
                    {
                        div: [
                            {
                                img: imgpre + `homdgcat-res/Avatar/UI_AvatarIcon_${avatar_name_temp}.png`,
                                class: 'head_left',
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
                                p: w.N,
                                class: 'head_right hr_1'
                            }
                        ],
                        class: 'a_section_head head_withimg'
                    },
                    {
                        div: w.V,
                        class: 'a_section_content nsc',
                        style: {
                            
                        }
                    }
                ],
                class: 'a_section_skill',
                style: {
                    color: 'white'
                }
            })
        })
        var v2_ver = "v" + v2
        if (v2 == "L") {
            var v2_ver = "Live"
        }
    }

    function kkk(wpn_) {
        var st = wpn_.Stat.toFixed(0)
        var ret0 = "<b>" + st + "</b>"
        promote_value = wpn_.CustomStat
        var ret1 = ""
        if (!wpn_.Custom) {
            ret1 = "-"
        } else {
            promote_config = computer_.AvatarCustomPromoteConfig[wpn_.Custom]
            if (promote_config.ShowType === "p") {
                promote_value = (promote_value * 100).toFixed(1).toString() + "%"
            } else {
                promote_value = promote_value.toFixed(1).toString()
            }
            ret1 = "<b>+" + promote_value + " " + promote_config.Text[lang3] + "</b>"
        }
        return ret0 + " / " + ret1
    }

    function cl_write_weapon(v, v1, v2) {
        o_this = 0
        for (const i in _WeaponConfig) {
            if (_WeaponConfig[i]._id == v) {
                o_this = _WeaponConfig[i]
                break
            }
        }
        _old = _WeaponAffixPConfig[o_this.EquipAffixID].Ver[v1].Affix.join("<br>").replaceAll("<color style='color:#99FFFFFF'>", "@").replaceAll("</color>", "$").replaceAll("<br> ", "")
        _new = _WeaponAffixPConfig[o_this.EquipAffixID].Ver[v2].Affix.join("<br>").replaceAll("<color style='color:#99FFFFFF'>", "@").replaceAll("</color>", "$").replaceAll("<br> ", "")
        desc_diff = dif(_old, _new)
        desc_change = ""
        desc_diff.forEach(function (u) {
            if (u.added) {
                desc_change += "<span style='background-color:#006600'>" + u.value + "</span>"
            } else if (u.removed) {
                if (desc_diff.length < 36) desc_change += "<span style='background-color:#880000'><del>" + u.value + "</del></span>"
            } else {
                desc_change += u.value
            }
        })
        if (_old == _new) desc_change = ""
        desc_change.replaceAll("colorstyle", "color style")
        var show_others = 0
        var v2_ver = "v" + v2
        if (v2 == "L") {
            var v2_ver = "Live"
        }
        var ret_0 = []
        if (_awc[v2] && _awc[v2][v]) {
            console.log(11111)
            show_others = 1
            ret_0.push({
                p: kkk(_awc[v2][v].Old) + "<color style='color:#FFD780'><br><span style='margin-left: 5px'>↓↓</span><br></color>" + kkk(_awc[v2][v].New),
                style: {
                    'margin-bottom': '10px'
                }
            })
        }
        if (_changelog[o_this._id]) {
            var cl_this = _changelog[o_this._id]
            if (cl_this[v2_ver] && cl_this[v2_ver].length) {
                show_others = 1
                cl_this[v2_ver].forEach(function (g) {
                    ret_0.push({
                        p: g.replaceAll("#", "</color>").replaceAll("@", "<color style='color:#FFD780;'>"),
                        style: {
                            'margin': '10px 0'
                        }
                    })
                })
            }
        }
        if (desc_change.length || show_others) {
            $('.cl_data').render({
                div: [
                    {
                        div: [
                            {
                                img: imgpre + `homdgcat-res/Weapon/${o_this.Icons}_Awaken.png`,
                                class: 'head_left',
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
                                p: o_this.Name + " +",
                                class: 'head_right hr_1'
                            }
                        ],
                        class: 'a_section_head head_withimg'
                    },
                    {
                        div: function (h) {
                            ret_0.push({
                                p: "<b><color style='color:#FFD780;'>" + o_this.EquipAffixName + "</color></b><br>" + desc_change.replaceAll("@", "<color style='color:#99FFFFFF'>").replaceAll("$", "</color>"),
                                when: desc_change.length > 0
                            })
                            $(h.container).render(ret_0)
                        },
                        class: 'a_section_content nsc',
                        style: {
                            
                        }
                    }
                ],
                class: 'a_section_skill',
                style: {
                    color: 'white'
                }
            })
        }
    }

    function hn_write_avatar(u) {
        o_this = 0
        for (const i in __AvatarInfoConfig) {
            if (__AvatarInfoConfig[i]._name == u) {
                o_this = __AvatarInfoConfig[i]
                break
            }
        }
        if (!_AvatarDataConfig[u].OtherDataList) return
        var avatar_name_temp = u
        if (avatar_name_temp.includes('PlayerBoy')) avatar_name_temp = 'PlayerBoy'
        if (avatar_name_temp.includes('PlayerGirl')) avatar_name_temp = 'PlayerGirl'
        $('.hn_data').render({
            div: [
                {
                    div: [
                        {
                            img: imgpre + `homdgcat-res/Avatar/UI_AvatarIcon_${avatar_name_temp}.png`,
                            class: 'head_left',
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
                            p: `<color style='color:${colors[o_this.Element]}'>` + o_this.Name + '</color>' + (_AvatarDataConfig[u].OtherDataList.length ? '<span style="font-size:0.87em">+' + (_AvatarDataConfig[u].OtherDataList.length) + '</span>' : ''),
                            class: 'head_right hr_1'
                        }
                    ],
                    class: 'a_section_head head_withimg'
                },
                {
                    div: function (h) {
                        var ret_1 = []
                        _AvatarDataConfig[u].OtherDataList.forEach(function (g) {
                            ret_1.push({
                                p: custom_string(g, 'ffd780'),
                                style: {
                                    margin: '10px 0'
                                }
                            })
                        })
                        if (!_AvatarDataConfig[u].OtherDataList.length) {
                            ret_1.push({
                                img: '/images/emote/Keqing/1.png',
                                style: {
                                    width: '80px',
                                    'margin-bottom': '-10px',
                                    'margin-top': '10px'
                                }
                            })
                            ret_1.push({
                                p: {
                                    CH: '(๑>؂<๑)<br>被刻晴吃掉了，嗷呜！<br>下次再来看看吧~',
                                    EN: '(๑>؂<๑)<br>Oh no, Keqing ate this!<br>Come back again next time~'
                                },
                                style: {
                                    margin: '10px 0'
                                }
                            })
                        }
                        $(h.container).render(ret_1)
                    },
                    class: 'a_section_content',
                    style: {
                        display: 'none'
                    }
                }
            ],
            class: 'a_section delete'
        })

    }
 
    $('body').on('change', '.changelog select', function () {
        renderCL($('.changelog select').val())
    })

    function popRelic() {
        $('.common-area-2').render({
            div: '',
            class: 'relic-area'
        })
        _RelicConfig.forEach(function (t) {
            var skill_show = []
            t.Skills.forEach(function (j) {
                skill_show.push({
                    p: "<b><color style='color:#f29d38'>" + j.Num + "P</color></b> " + j.Skill,
                    class: 'desc',
                })
            })
            $('.relic-area').render({
                template: {
                    div: [
                        {
                            img: imgpre + 'homdgcat-res/Relic/' + t.Icon + ((skill_show.length < 2) ? '_3.png' : '_4.png'),
                            event: {
                                error: function (d) {
                                    $(d.sender).remove()
                                }
                            },
                            class: 'icon',
                            a: {
                                loading: lazy
                            },
                        },
                        {
                            p: 'ID ' + t.ID.toString(),
                            class: 'relic_id'
                        },
                        {
                            p: t.Name,
                            class: 'name'
                        },
                    ].concat(skill_show),
                    class: 'relic-card hover-shadow',
                    click: function (p) {
                        doRelic(t)
                    }
                }
            })
        })
    }

    function doRelic(cr) {
        cur_coordinate = $('.scroller').scrollTop()
        cur_relic = cr
        let script_computer_2 = document.createElement('script')
        script_computer_2.src = `/gi/${lang3}/Relic/${cur_relic.ID}.js`
        document.head.append(script_computer_2)
        script_computer_2.onload = function () {
            relic_story_cache = {...relic_story_cache, ...relic_story_cache_}
            loaded_r.push(cur_relic.ID)
        }
        $('.content').hide()
        $('.content_2').empty().render({
            data: cr,
            template: [
                {
                    section: {
                        p: computer_.MiscText.Back[lang]
                    },
                    event: {
                        click: returnNormal
                    },
                    class: 'mon_head',
                    a: {
                        id: 'back_1',
                    },
                },
                {
                    section: [
                        {
                            p: computer_.MiscText.Back[lang]
                        },
                        {
                            closeicon: '✕'
                        }
                    ],
                    event: {
                        click: returnNormal
                    },
                    class: 'mon_head',
                    a: {
                        id: 'back_2',
                    },
                },
                {
                    section: '',
                    class: 'r_data',
                    style: {
                        'justify-content': 'space-evenly',
                        'display': 'flex',
                        'flex-wrap': 'wrap'
                    }
                }
            ]
        });
        $('.content_2').show()
        window.location.hash = '_' + cr.ID
        $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`));
        renderRelicPage()
    }

    function renderRelicPage() {
        switch_title(cur_relic.Name)
        var stuff = [
            {
                div: [
                    {
                        div: {
                            p: cur_relic.Name
                        },
                        class: 'a_section_head',
                        style: {
                            'text-align': 'center',
                            'margin-top': '25px'
                        }
                    },
                    {
                        div: [
                            {
                                img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + '_4.png',
                                class: 'relic_image',
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
                                img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + '_2.png',
                                class: 'relic_image',
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
                                img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + '_5.png',
                                class: 'relic_image',
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
                                img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + '_1.png',
                                class: 'relic_image',
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
                                img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + '_3.png',
                                class: 'relic_image',
                                event: {
                                    error: function (d) {
                                        $(d.sender).hide()
                                    }
                                },
                                a: {
                                    loading: lazy
                                }
                            },
                        ],
                        class: 'a_section_content',
                        style: {
                            display: 'flex',
                            'flex-wrap': 'wrap',
                            'justify-content': 'center'
                        }
                    },
                    {
                        div: {
                            p: function (k) {
                                var num = k.data.Num ? k.data.Num : ''
                                var skl = k.data.Skill ? k.data.Skill : ''
                                return "<color style='color:#df903b'><b>" + num + "P</b></color> " + skl
                            },
                            style: {
                                'margin': '15px 0',
                                'font-size': '0.93em'
                            },
                            data: cur_relic.Skills
                        },
                        class: 'a_section_content',
                        style: {
                            'margin': lazy ? '8px 15px -8px' : '8px 15px 0px'
                        },
                    },
                ],
                class: 'a_section'
            },
            {
                div: [
                    {
                        div: {
                            p: computer_.MiscText.Avatar_Weapon_Extra[lang2]
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: {
                            ul: {
                                li: function (k) {
                                    return k.data
                                },
                                style: {
                                    'margin-top': '10px'
                                },
                                data: cur_relic.Extra
                            },
                            style: {
                                'margin-top': '-10px'
                            },
                        },
                        class: 'a_section_content'
                    },
                ],
                class: 'a_section',
                when: cur_relic.Extra && cur_relic.Extra.length
            },
        ]
        $('.r_data').empty().render({
            template: lazy ? ([emote_block].concat(stuff)) : (stuff.concat([emote_block]))
        })
        rotate()
        if (!loaded_r.includes(cur_relic.ID)) {
            ki = setInterval(function () {
                if (loaded_r.includes(cur_relic.ID)) {
                    clearInterval(ki)
                    renderRelicStory()
                }
            }, 200)
        } else {
            renderRelicStory()
        }
    }

    function renderRelicStory() {
        console.log("FINISH")
        if (!relic_story_cache[cur_relic.ID]) return
        relic_story_cache[cur_relic.ID].forEach(function (t, i) {
            if (!lazy) return
            var l = ["_0", "_4", "_2", "_5", "_1", "_3"][i + 1]
            $('.r_data').render([
                {
                    div: [
                        {
                            div: {
                                p: cur_relic.Parts[i]
                            },
                            class: 'a_section_head',
                            style: {
                                'text-align': 'center',
                                'margin-top': '25px'
                            }
                        },
                        {
                            div: [
                                {
                                    div: {
                                        img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + l + '.png',
                                        class: 'relic_image',
                                        event: {
                                            click: function () {
                                                $('.r_select span').removeClass('active')
                                                $('.r_select span[data-id="1"]').addClass('active')
                                            },
                                            error: function (d) {
                                                $(d.sender).hide()
                                            }
                                        },
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                    style: {
                                        'margin': '0',
                                        'width': '100%',
                                        display: 'flex',
                                        'flex-wrap': 'wrap',
                                        'justify-content': 'center'
                                    }
                                },
                                {
                                    p: t.Desc,
                                    style: {
                                        'text-align': 'center'
                                    }
                                },
                                {
                                    p: t.Story[0],
                                    style: {
                                        'font-size': '0.9em'
                                    },
                                }
                            ],
                            class: 'a_section_content'
                        },
                    ],
                    class: 'a_section'
                },
            ])
        })
        $('.scroller').scrollTop($('h3').height())
        console.log("FINISH_2")
    }

    function popWeapon() {
        $('.common-area-2').render({
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
                        }
                    ],
                    class: 'weapon-rarity select_parts select_parts_size_2'
                }, 
                {
                    section: [
                        {
                            schedule: {
                                img: '/homdgcat-res/AvatarSkill/Skill_A_01.png'
                            },
                            a: {
                                'data-id': 1
                            },
                            class: (global_var_weapon_type == 1) ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/AvatarSkill/Skill_A_04.png'
                            },
                            a: {
                                'data-id': 2
                            },
                            class: (global_var_weapon_type == 2) ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/AvatarSkill/Skill_A_Catalyst_MD.png'
                            },
                            a: {
                                'data-id': 3
                            },
                            class: (global_var_weapon_type == 3) ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/AvatarSkill/Skill_A_03.png'
                            },
                            a: {
                                'data-id': 4
                            },
                            class: (global_var_weapon_type == 4) ? 'active' : ''
                        },
                        {
                            schedule: {
                                img: '/homdgcat-res/AvatarSkill/Skill_A_02.png'
                            },
                            a: {
                                'data-id': 5
                            },
                            class: (global_var_weapon_type == 5) ? 'active' : ''
                        },
                    ],
                    class: 'weapon-type select_parts select_parts_size_3'
                },
                {
                    section: {
                        div: '',
                        class: 'avatar-area avatar-area-weapon-reserved'
                    },
                    class: 'weapon-result'
                }
            ]
        });
        _WeaponConfig.forEach(function (wpn) {
            $('.avatar-area-weapon-reserved').render({
                div: [
                    {
                        img: function (k) {
                            rlname = k.data.Icons
                            return imgpre + `homdgcat-res/Weapon/${rlname}_Awaken.png`
                        },
                        class: 'avatar-head',
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
                        p: `[[Name]]`,
                        style: {
                            'font-weight': 'bold'
                        },
                        class: 'avatar-name av'
                    },
                    {
                        p: [
                            {
                                img: imgpre + 'homdgcat-res/AvatarSkill/_ATK.png',
                                class: 'weapon-atk',
                                a: {
                                    loading: lazy
                                }
                            },
                            function (k) {
                                return k.data.Stat.toFixed(0)
                            }
                        ],
                        class: 'avatar-title2'
                    },
                    {
                        p: function (p) {
                            promote_value = p.data.CustomStat
                            if (!p.data.Custom) {
                                return "-"
                            }
                            promote_config = computer_.AvatarCustomPromoteConfig[p.data.Custom]
                            if (promote_config.ShowType === "p") {
                                promote_value = (promote_value * 100).toFixed(1).toString() + "%"
                            } else {
                                promote_value = promote_value.toFixed(1).toString()
                            }
                            return "+" + promote_value + " " + promote_config.Text[lang]
                        },
                        class: 'avatar-title2'
                    },
                ],
                data: wpn,
                class: 'avatar-card hover-shadow',
                click: function () {
                    cur_coordinate = $('.scroller').scrollTop()
                    if (click_cd) return
                    click_cd = 1
                    setTimeout(function () { click_cd = 0 }, 1500)
                    renderWeaponInfo(wpn)
                },
                a: {
                    'data-type': wpn.Type,
                    'data-rarity': wpn.Rank,
                }
            })
        })
        update_weapon()
    }

    function update_avatar() {

        $('.avatar-card-mark').hide()
        var query_string = global_var_avatar_hex ? '' : `.avatar-card-mark[data-rarity=${global_var_avatar_rarity}]`

        var hex_flag = global_var_avatar_hex ? '[data-hex=1]' : ''

        var query_list_1 = []
        for (const [a, b] of Object.entries(global_var_avatar_element)) {
            if (b) query_list_1.push(`[data-elem='${a}']`)
        }
        if (!query_list_1.length) query_list_1.push('')

        var query_list_2 = []
        for (const [a, b] of Object.entries(global_var_avatar_type)) {
            if (b) query_list_2.push(`[data-type='${a}']`)
        }
        if (!query_list_2.length) query_list_2.push('')

        for (const a of query_list_1) {
            for (const b of query_list_2) {
                $(`${query_string}${a}${b}${hex_flag}`).show()
            }
        }

    }

    function update_weapon() {
        $('.avatar-card').hide()
        $(`.avatar-card[data-type=${global_var_weapon_type}][data-rarity=${global_var_weapon_rarity}]`).show()
    }

    function renderWeaponInfo(wpn) {
        cur_weapon_id = wpn._id
        renderWeaponInfoAfter(wpn)
        if (!loaded_w.includes(wpn._id)) {
            let script_computer_2 = document.createElement('script')
            script_computer_2.src = `/gi/${lang3}/Weapon/${wpn._id}.js`
            document.head.append(script_computer_2)
            script_computer_2.onload = function () {
                _WeaponAffixPConfig = {..._WeaponAffixPConfig, ..._WeaponAffixPConfig_}
                weapon_story_cache = {...weapon_story_cache, ...weapon_story_cache_}
                loaded_w.push(wpn._id)
            }
        }
    }

    function renderWeaponInfoAfter(wpn) {
        console.log("FINISH")
        toggle_story = 0
        weapon_stat_ver = wpn.V
        cur_story_ver = 0
        cur_weapon_affix_id = wpn.EquipAffixID
        cur_wpn = wpn
        $('.content').hide()
        $('.content_2').empty().render({
            template: [
                {
                    section: {
                        p: computer_.MiscText.Back[lang]
                    },
                    event: {
                        click: returnNormal
                    },
                    class: 'mon_head',
                    a: {
                        id: 'back_1',
                    },
                },
                {
                    section: [
                        {
                            p: computer_.MiscText.Back[lang]
                        },
                        {
                            closeicon: '✕'
                        }
                    ],
                    event: {
                        click: returnNormal
                    },
                    class: 'mon_head',
                    a: {
                        id: 'back_2',
                    },
                },
                {
                    section: skillTemplate(wpn),
                    style: {
                        'justify-content': 'space-evenly',
                        'display': 'flex',
                        'flex-wrap': 'wrap'
                    },
                    class: 'weapon_section'
                }
            ]
        });
        $('.content_2').show()
        rotate()
        window.location.hash = '_' + wpn._id
        $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`));
        if (loaded_w.includes(wpn._id)) {
            skillTemplateAfter(wpn)
            $('.stat_ver_choose_w select').val(weapon_stat_ver)
            load_weapon_story_()
        } else {
            clearInterval(owl)
            owl = setInterval(function () {
                if (loaded_w.includes(wpn._id)) {
                    skillTemplateAfter(wpn)
                    $('.stat_ver_choose_w select').val(weapon_stat_ver)
                    load_weapon_story_()
                    clearInterval(owl)
                }
            }, 200)
        }
        switch_title(wpn.Name)
        console.log("FINISH_2")
    }

    function skillTemplate(wpn) {
        show_num_0 = ''
        show_num_1 = ''
        show_num_2 = ''
        if (wpn.Rank == 3) {
            show_num_0 = 'x2 / x6 / x6 / x3'
            show_num_1 = 'x10 / x12 / x18'
            show_num_2 = 'x6 / x10 / x12'
        } else if (wpn.Rank == 4) {
            show_num_0 = 'x3 / x9 / x9 / x4'
            show_num_1 = 'x15 / x18 / x27            '
            show_num_2 = 'x10 / x15 / x18'
        } else {
            show_num_0 = 'x5 / x14 / x14 / x6'
            show_num_1 = 'x23 / x27 / x41'
            show_num_2 = 'x15 / x23 / x27'
        }
        var upper = [
            emote_block,
            {
                div: [
                    {
                        div: {
                            p: wpn.Name
                        },
                        class: 'a_section_head',
                        style: {
                            'text-align': 'center',
                            'margin-top': '25px'
                        }
                    },
                    {
                        div: [
                            {
                                div: [
                                    {
                                        img: imgpre + 'homdgcat-res/Weapon/' + wpn.Icons + '.png',
                                        style: {
                                            width: '40%',
                                            'max-width': '140px'
                                        },
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
                                        img: imgpre + 'homdgcat-res/Weapon/' + wpn.Icons + '_Awaken.png',
                                        style: {
                                            width: '40%',
                                            'max-width': '140px'
                                        },
                                        event: {
                                            error: function (d) {
                                                $(d.sender).hide()
                                            }
                                        },
                                        a: {
                                            loading: lazy
                                        }
                                    },
                                ],
                                style: {
                                    'margin': 0,
                                    display: 'flex',
                                    'flex-wrap': 'wrap',
                                    'justify-content': 'center',
                                },
                                class: 'dissolve'
                            },
                            {
                                p: wpn.Desc,
                                style: {
                                    'text-align': 'center'
                                }
                            },
                            {
                                p: function (k) {
                                    var st = wpn.Stat.toFixed(0)
                                    var ret0 = "<b>" + st + "</b>"
                                    promote_value = wpn.CustomStat
                                    var ret1 = ""
                                    if (!wpn.Custom) {
                                        ret1 = "-"
                                    } else {
                                        promote_config = computer_.AvatarCustomPromoteConfig[wpn.Custom]
                                        if (promote_config.ShowType === "p") {
                                            promote_value = (promote_value * 100).toFixed(1).toString() + "%"
                                        } else {
                                            promote_value = promote_value.toFixed(1).toString()
                                        }
                                        ret1 = "<b>+" + promote_value + " " + promote_config.Text[lang3] + "</b>"
                                    }
                                    return ret0 + " / " + ret1
                                },
                                style: {
                                    'font-size': '1.2em',
                                    'text-align': 'center',
                                    'margin-top': '10px',
                                }
                            },
                        ],
                        class: 'a_section_content nsc'
                    },
                ],
                class: 'a_section',
            },
            {
                div: '',
                class: 'a_section weapon_skill',
            },
            {
                div: [
                    {
                        div: {
                            p: computer_.MiscText.Avatar_Weapon_Extra[lang2]
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: {
                            ul: {
                                li: function (k) {
                                    return k.data
                                },
                                style: {
                                    'margin-top': '10px'
                                },
                                data: wpn.Extra
                            },
                            style: {
                                'margin-top': '-10px'
                            },
                        },
                        class: 'a_section_content'
                    },
                ],
                class: 'a_section',
                when: wpn.Extra.length
            },
            {
                div: [
                    {
                        div: [
                            {
                                div: [
                                    {
                                        a: '/gi/item/' + (wpn.AscMatID - 3) + '?lang=' + lang3,
                                        t: [
                                            {
                                                img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_' + (wpn.AscMatID - 3) + '.png',
                                                event: {
                                                    error: function (d) {
                                                        $(d.sender).hide()
                                                        $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                    }
                                                },
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: '5',
                                                class: 'mat_num',
                                                when: wpn.Rank == 5
                                            },
                                            {
                                                span: '3',
                                                class: 'mat_num',
                                                when: wpn.Rank == 4
                                            },
                                            {
                                                span: '2',
                                                class: 'mat_num',
                                                when: wpn.Rank == 3
                                            }
                                        ],
                                        class: 'mat_a hover-shadow',
                                    },
                                    {
                                        a: '/gi/item/' + (wpn.AscMatID - 2) + '?lang=' + lang3,
                                        t: [
                                            {
                                                img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_' + (wpn.AscMatID - 2) + '.png',
                                                event: {
                                                    error: function (d) {
                                                        $(d.sender).hide()
                                                        $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                    }
                                                },
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: '14',
                                                class: 'mat_num',
                                                when: wpn.Rank == 5
                                            },
                                            {
                                                span: '9',
                                                class: 'mat_num',
                                                when: wpn.Rank == 4
                                            },
                                            {
                                                span: '6',
                                                class: 'mat_num',
                                                when: wpn.Rank == 3
                                            }
                                        ],
                                        class: 'mat_a hover-shadow',
                                    },
                                    {
                                        a: '/gi/item/' + (wpn.AscMatID - 1) + '?lang=' + lang3,
                                        t: [
                                            {
                                                img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_' + (wpn.AscMatID - 1) + '.png',
                                                event: {
                                                    error: function (d) {
                                                        $(d.sender).hide()
                                                        $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                    }
                                                },
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: '14',
                                                class: 'mat_num',
                                                when: wpn.Rank == 5
                                            },
                                            {
                                                span: '9',
                                                class: 'mat_num',
                                                when: wpn.Rank == 4
                                            },
                                            {
                                                span: '6',
                                                class: 'mat_num',
                                                when: wpn.Rank == 3
                                            }
                                        ],
                                        class: 'mat_a hover-shadow',
                                    },
                                    {
                                        a: '/gi/item/' + (wpn.AscMatID) + '?lang=' + lang3,
                                        t: [
                                            {
                                                img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_' + (wpn.AscMatID) + '.png',
                                                event: {
                                                    error: function (d) {
                                                        $(d.sender).hide()
                                                        $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                    }
                                                },
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: '6',
                                                class: 'mat_num',
                                                when: wpn.Rank == 5
                                            },
                                            {
                                                span: '4',
                                                class: 'mat_num',
                                                when: wpn.Rank == 4
                                            },
                                            {
                                                span: '3',
                                                class: 'mat_num',
                                                when: wpn.Rank == 3
                                            }
                                        ],
                                        class: 'mat_a hover-shadow',
                                    }
                                ],
                                class: 'avatar_mat'
                            },
                            {
                                div: [
                                    {
                                        a: function (k) {
                                            return '/gi/item/' + (wpn.MatIDs[0] - 2) + '?lang=' + lang3
                                        },
                                        t: [
                                            {
                                                img: function (k) {
                                                    var mat = _MaterialConfig[wpn.MatIDs[0] - 2]
                                                    if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                    return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                },
                                                class: 'img_2',
                                                event: {
                                                    error: function (d) {
                                                        $(d.sender).hide()
                                                        $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                    }
                                                },
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: '23',
                                                class: 'mat_num',
                                                when: wpn.Rank == 5
                                            },
                                            {
                                                span: '15',
                                                class: 'mat_num',
                                                when: wpn.Rank == 4
                                            },
                                            {
                                                span: '10',
                                                class: 'mat_num',
                                                when: wpn.Rank == 3
                                            }
                                        ],
                                        class: 'mat_a hover-shadow'
                                    },
                                    {
                                        a: function (k) {
                                            return '/gi/item/' + (wpn.MatIDs[0] - 1) + '?lang=' + lang3
                                        },
                                        t: [
                                            {
                                                img: function (k) {
                                                    var mat = _MaterialConfig[wpn.MatIDs[0] - 1]
                                                    if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                    return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                },
                                                class: 'img_2',
                                                event: {
                                                    error: function (d) {
                                                        $(d.sender).hide()
                                                        $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                    }
                                                },
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: '27',
                                                class: 'mat_num',
                                                when: wpn.Rank == 5
                                            },
                                            {
                                                span: '18',
                                                class: 'mat_num',
                                                when: wpn.Rank == 4
                                            },
                                            {
                                                span: '12',
                                                class: 'mat_num',
                                                when: wpn.Rank == 3
                                            }
                                        ],
                                        class: 'mat_a hover-shadow'
                                    },
                                    {
                                        a: function (k) {
                                            return '/gi/item/' + (wpn.MatIDs[0]) + '?lang=' + lang3
                                        },
                                        t: [
                                            {
                                                img: function (k) {
                                                    var mat = _MaterialConfig[wpn.MatIDs[0]]
                                                    if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                    return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                },
                                                class: 'img_2',
                                                event: {
                                                    error: function (d) {
                                                        $(d.sender).hide()
                                                        $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                    }
                                                },
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: '41',
                                                class: 'mat_num',
                                                when: wpn.Rank == 5
                                            },
                                            {
                                                span: '27',
                                                class: 'mat_num',
                                                when: wpn.Rank == 4
                                            },
                                            {
                                                span: '18',
                                                class: 'mat_num',
                                                when: wpn.Rank == 3
                                            }
                                        ],
                                        class: 'mat_a hover-shadow'
                                    }
                                ],
                                class: 'avatar_mat'
                            },
                            {
                                div: [
                                    {
                                        a: function (k) {
                                            return '/gi/item/' + (wpn.MatIDs[1] - 2) + '?lang=' + lang3
                                        },
                                        t: [
                                            {
                                                img: function (k) {
                                                    var mat = _MaterialConfig[wpn.MatIDs[1] - 2]
                                                    if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                    return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                },
                                                class: 'img_2',
                                                event: {
                                                    error: function (d) {
                                                        $(d.sender).hide()
                                                        $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                    }
                                                },
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: '15',
                                                class: 'mat_num',
                                                when: wpn.Rank == 5
                                            },
                                            {
                                                span: '10',
                                                class: 'mat_num',
                                                when: wpn.Rank == 4
                                            },
                                            {
                                                span: '6',
                                                class: 'mat_num',
                                                when: wpn.Rank == 3
                                            }
                                        ],
                                        class: 'mat_a hover-shadow'
                                    },
                                    {
                                        a: function (k) {
                                            return '/gi/item/' + (wpn.MatIDs[1] -1) + '?lang=' + lang3
                                        },
                                        t: [
                                            {
                                                img: function (k) {
                                                    var mat = _MaterialConfig[wpn.MatIDs[1] - 1]
                                                    if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                    return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                },
                                                class: 'img_2',
                                                event: {
                                                    error: function (d) {
                                                        $(d.sender).hide()
                                                        $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                    }
                                                },
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: '23',
                                                class: 'mat_num',
                                                when: wpn.Rank == 5
                                            },
                                            {
                                                span: '15',
                                                class: 'mat_num',
                                                when: wpn.Rank == 4
                                            },
                                            {
                                                span: '10',
                                                class: 'mat_num',
                                                when: wpn.Rank == 3
                                            }
                                        ],
                                        class: 'mat_a hover-shadow'
                                    },
                                    {
                                        a: function (k) {
                                            return '/gi/item/' + (wpn.MatIDs[1]) + '?lang=' + lang3
                                        },
                                        t: [
                                            {
                                                img: function (k) {
                                                    var mat = _MaterialConfig[wpn.MatIDs[1]]
                                                    if (!mat) return imgpre + "homdgcat-res/Mat/UI_ItemIcon_120864.png"
                                                    return imgpre + "homdgcat-res/Mat/" + mat + ".png"
                                                },
                                                class: 'img_2',
                                                event: {
                                                    error: function (d) {
                                                        $(d.sender).hide()
                                                        $(d.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                    }
                                                },
                                                a: {
                                                    loading: lazy
                                                }
                                            },
                                            {
                                                span: '27',
                                                class: 'mat_num',
                                                when: wpn.Rank == 5
                                            },
                                            {
                                                span: '18',
                                                class: 'mat_num',
                                                when: wpn.Rank == 4
                                            },
                                            {
                                                span: '12',
                                                class: 'mat_num',
                                                when: wpn.Rank == 3
                                            }
                                        ],
                                        class: 'mat_a hover-shadow'
                                    },
                                ],
                                class: 'avatar_mat'
                            },
                        ],
                        style: {
                            display: 'flex',
                            'flex-wrap': 'wrap',
                            'justify-content': 'space-evenly',
                        },
                        class: 'a_section_content'
                    }
                ],
                class: 'a_section'
            },
            {
                div: '',
                class: 'a_section story',
                when: lazy != ""
            },
        ]
        return upper
    }

    function skillTemplateAfter(wpn) {
        $('.story').empty().render([
            {
                div: function (d) {
                    for (var j = 0; j < cur_wpn.StoryCount; j++) {
                        $(d.container).render({
                            div: ((lang == 'CH') ? '故事 ' : 'Story ') + (j + 1).toString(),
                            class: 'cur_story_ver_select' + ((j == 0) ? ' active_w' : ''),
                            a: {
                                'data-id': j.toString()
                            }
                        })
                    }
                },
                class: 'a_section_head',
                style: {
                    display: 'flex',
                    //'justify-content': 'center'
                }
            },
            {
                div: '',
                class: 'a_section_content story_this'
            },
        ])
        var info = _WeaponAffixPConfig[wpn.EquipAffixID].Ver[weapon_stat_ver].Affix
        $('.weapon_skill').empty().render([
            {
                div: [
                    {
                        span: wpn.EquipAffixName,
                        style: {
                            'margin-left': '0px',
                            'margin-right': '15px',
                        }
                    },
                    {
                        span: renderSVW(wpn),
                        class: 'stat_ver_choose_w',
                        style: {
                            'margin-left': '0px',
                            'margin-right': '0',
                            'margin-top': '3px'
                        }
                    }
                ],
                class: 'a_section_head'
            },
            {
                div: {
                    p: '[[.]]',
                    data: info
                },
                class: 'a_section_content'
            },
        ])
        $('.scroller').scrollTop($('h3').height())
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

    $('body').on('click', '.weapon-type schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        global_var_weapon_type = $(this).attr('data-id')
        update_weapon()
        $('.weapon-type schedule').removeClass('active')
        $(`.weapon-type schedule[data-id=${global_var_weapon_type}]`).addClass('active')
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
            global_var_avatar_type[this_id] = 0
        } else {
            $(this).addClass('active')
            global_var_avatar_type[this_id] = 1
        }
        update_avatar()
    })

    $('body').on('click', '.Norm', function (p) {
        console.log(1)
        poplayer({
            header: computer_.MiscText.Avatar_Norm_Title[lang] + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '95%',
            class: 'norm',
            template: [{
                p: computer_.MiscText.Avatar_Norm_Info[lang],
                style: {
                    'line-height': 2,
                }
            }]
        });
    })

    $('body').on('change', '.stat_ver_choose select', function () {
        avatar_stat_ver = $(this).val()
        $('select').val(avatar_stat_ver)
        renderInfo(current_name, current_type)
        $('#h_').html(_AvatarInfoConfig[char_id_list[current_name]].Name + " " + $('.stat_ver_choose select option:selected').html() + computer_.MiscText.Avatar_Table_Title_Extra[lang2])
    })

    $('body').on('change', '.stat_ver_choose_w select', function () {
        weapon_stat_ver = $(this).val()
        $('select').val(weapon_stat_ver)
        skillTemplateAfter(cur_wpn)
        $('select').val(weapon_stat_ver)
        $('#h_').html(cur_wpn.Name + " " + $('.stat_ver_choose_w select option:selected').html() + computer_.MiscText.Avatar_Table_Title_Extra[lang2])
        load_weapon_story_()
    })

    function load_weapon_story_() {
        if (!cur_wpn.StoryCount) return
        weapon_story_cache[cur_wpn.Story].forEach(function (this_, ind_) {
            var this__ = this_
            if (this__.substring(0, 4) == "<br>") this__ = this__.substring(4)
            $('.story_this').render({
                template: {
                    span: this__,
                    class: 'weapon_story weapon_story' + ind_,
                    style: {
                        display: 'none'
                    }
                },
            })
        })
        $('.weapon_story' + cur_story_ver).show()
    }

    $('body').on('click', '.cur_story_ver_select', function () {
        cur_story_ver = $(this).attr('data-id')
        $(this).siblings().removeClass('active_w')
        $(this).addClass('active_w')
        $('.weapon_story').hide()
        $('.weapon_story' + cur_story_ver).show()
    })

    $('body').on('click', '.asc_button', function () {
        popASC_pre($(this).attr('data-id').toString(), $(this).attr('data-ic').toString(), $(this).attr('data-ib').toString())
    })

    function popASC_pre(ascid, ascic, ascib) {
        var mat = acs_cache[ascid]
        if (!mat) return
        poplayer({
            header: ascib + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '100%',
            class: 'mat-pop',
            template: {
                div: [
                    {
                        img: function (k) {
                            return imgpre + 'homdgcat-res/Gacha/' + ascic.replace("AvatarIcon", "Costume") + '.png'
                        },
                        class: 'gacha',
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
                        p: ascib,
                        class: 'mat-name_'
                    },
                    {
                        p: mat,
                        class: 'mat-desc_'
                    }
                ],
            }
        })
    }

    $('body').on('click', '.ml_b', function () {
        poplayer({
            header: computer_.MiscText.Avatar_Data_Ball[lang2].replace("<color style='color:#eeeeee;'>ⓘ</color> ", "") + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '90%',
            template: {
                div: computer_.MiscText.Ball_TUT[lang2].replace("\n", "<br>"),
                style: {
                    'margin-top': '20px',
                    'line-height': '2'
                },
                class: 'TUT_Text'
            },
            class: 'TUT'
        })
    })

    $('body').on('click', '.ml_e', function () {
        poplayer({
            header: computer_.MiscText.Avatar_Data_Endure[lang2].replace("<color style='color:#eeeeee;'>ⓘ</color> ", "") + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '90%',
            template: {
                div: computer_.MiscText.Endure_TUT[lang2].replace("\n", "<br>"),
                style: {
                    'margin-top': '20px',
                    'line-height': '2'
                },
                class: 'TUT_Text'
            },
            class: 'TUT'
        })
    })

    $('body').on('click', '.ml_w', function () {
        poplayer({
            header: computer_.MiscText.Avatar_Data_WindZone[lang2].replace("<color style='color:#eeeeee;'>ⓘ</color> ", "") + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '90%',
            template: {
                div: computer_.MiscText.Windzone_TUT[lang2].replace("\n", "<br>"),
                style: {
                    'margin-top': '20px',
                    'line-height': '2'
                },
                class: 'TUT_Text'
            },
            class: 'TUT'
        })
    })

    $('body').on('click', '.showtop', function () {
        showtop = 1 - showtop
        if (showtop) {
            $('.sort').show()
        } else {
            $('.sort').hide()
        }
    })

    function returnNormal() {
        if (global_var_avatar_hex == 2) global_var_avatar_hex = 0
        $('.content_2').hide()
        $('.content').show()
        $('.scroller').scrollTop(cur_coordinate)
        window.location.hash = ''
        $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`));
        var tim = setInterval(function () {
            if (begun) {
                $('.changelog select').val(clvers(_VS, 1)[1])
                clearInterval(tim)
            }
        }, 200)
    }
    
    window.onhashchange = function() {
        if (!window.location.hash.includes("_")) {
            returnNormal()
        }
    }

    function update() {
        var ele = document.getElementById('back_1')
        if (!ele) return
        var vo = ele.getBoundingClientRect()
        var top = vo.top
        if (top < 0) {
            $('#back_2').css('display', 'flex')
        } else {
            $('#back_2').hide()
        }
    }

    function clvers(data, oi) {
        if (oi) {
            _data = data
        } else {
            _data = Object.keys(data).sort()
        }
        ver_text = {
            "1": "v1",
            "15": "v15",
            "2": "v2",
            "25": "v25",
            "3": "v3",
            "35": "v35",
            "4": "v4",
            "45": "v45",
            "5": "v5",
            "55": "v55",
            "6": "v6",
            "65": "v65",
            "L": computer_.MiscText.Live_Name[lang]
        }
        clvers_out = {}
        for (var j = 1; j < _data.length; j++) {
            clvers_out[ver_text[_data[j - 1]] + " - " + ver_text[_data[j]]] = _data[j] + "-" + _data[j - 1]
            var _default = _data[j] + "-" +  _data[j - 1]
            var _default_ = ver_text[_data[j - 1]] + "-" + ver_text[_data[j]]
        }
        return [clvers_out, _default, _default_]
    }

    function changes_avatar(codename, v1, v2) {

        console.log(v1 + v2)

        var show_name = ""
        for (const ii of __AvatarInfoConfig) {
            if (ii._name == codename) {
                show_name = ii.Name
                break
            }
        }

        var show_1 = ["A", "E", "Q", "P"]
        var show_2 = ["P1", "P2", "P3", "P4"]
        var show_3 = ["C1", "C2", "C3", "C4", "C5", "C6"]

        var out = []

        if (_awc[v2]) {
            if (_awc[v2][codename]) {
                var old_p_name = computer_.AvatarCustomPromoteConfig[_awc[v2][codename].Old.CustomPromote].Text[lang3]
                var new_p_name = computer_.AvatarCustomPromoteConfig[_awc[v2][codename].New.CustomPromote].Text[lang3]
                out.push({
                    "N": "<color style='color:#FFD780'>" + show_name + "</color> " + computer_.MiscText.Avatar_Base_Stats[lang] + " +",
                    "V": `<span class='addprop' style='margin-right:-2px'><img src='${imgpre}homdgcat-res/Abyss/_HP.png'></span><span style='margin-right: 10px'>${_awc[v2][codename].Old.ShowStats.HP}</span>`
                    + `<span class='addprop' style='margin-right:-2px'><img src='${imgpre}homdgcat-res/Abyss/_ATK.png'></span><span style='margin-right: 10px'>${_awc[v2][codename].Old.ShowStats.ATK}</span>`
                    + `<span class='addprop' style='margin-right:-2px'><img src='${imgpre}homdgcat-res/Abyss/_DEF.png'></span><span style='margin-right: 10px'>${_awc[v2][codename].Old.ShowStats.DEF}</span>`
                    + `<span>${old_p_name} +${_awc[v2][codename].Old.ShowStats.Custom}</span>`
                    + "<color style='color:#FFD780'><br><span style='margin-left: 10px'>↓↓</span><br></color><span style='position:relative;top:-10px;'>"
                    + `<span class='addprop' style='margin-right:-2px'><img src='${imgpre}homdgcat-res/Abyss/_HP.png'></span><span style='margin-right: 10px'>${_awc[v2][codename].New.ShowStats.HP}</span>`
                    + `<span class='addprop' style='margin-right:-2px'><img src='${imgpre}homdgcat-res/Abyss/_ATK.png'></span><span style='margin-right: 10px'>${_awc[v2][codename].New.ShowStats.ATK}</span>`
                    + `<span class='addprop' style='margin-right:-2px'><img src='${imgpre}homdgcat-res/Abyss/_DEF.png'></span><span style='margin-right: 10px'>${_awc[v2][codename].New.ShowStats.DEF}</span>`
                    + `<span>${new_p_name} +${_awc[v2][codename].New.ShowStats.Custom}</span></span>`
                })
            }
        }

        var hyper_old_pre = _AvatarSkillPConfig[codename].Ver[v1].HyperLinks
        var hyper_new_pre = _AvatarSkillPConfig[codename].Ver[v2].HyperLinks

        if (!hyper_old_pre) hyper_old_pre = []
        if (!hyper_new_pre) hyper_new_pre = []

        var hyper_old_dict = {}
        var hyper_new_dict = {}

        for (const i of hyper_old_pre) {
            hyper_old_dict[i.Name] = i
        }
        for (const i of hyper_new_pre) {
            hyper_new_dict[i.Name] = i
        }

        var hyper_old = []
        var hyper_new = []

        for (const i of Object.keys(Object.assign({}, hyper_old_dict, hyper_new_dict))) {
            hyper_old.push(hyper_old_dict[i] ? hyper_old_dict[i] : {
                Name: i,
                Desc: ''
            })
            hyper_new.push(hyper_new_dict[i] ? hyper_new_dict[i] : {
                Name: i,
                Desc: ''
            })
        }


        if (!hyper_old) hyper_old = []
        if (!hyper_new) hyper_new = []

        console.log(JSON.stringify(hyper_old))
        console.log(JSON.stringify(hyper_new))

        for (const j in hyper_new) {
            hyper_change = ""
            var hso = hyper_old[j] ? hyper_old[j].Desc : ''
            var hsn = hyper_new[j] ? hyper_new[j].Desc : ''
            hyper_diff = dif(hso, hsn)
            hyper_diff.forEach(function (u) {
                if (u.added) {
                    hyper_change += "<span style='background-color:#006600'>" + u.value + "</span>"
                } else if (u.removed) {
                    if (hyper_diff.length < 20) hyper_change += "<span style='background-color:#880000'><del>" + u.value + "</del></span>"
                } else {
                    if (hyper_diff.length > 1) {
                        hyper_change += u.value
                    }
                }
            })
            if ((hyper_diff.length >= 20) && (!hyper_change.includes("<br>"))) {
                hyper_change = hso + "<br><color style='color:#FFD780'>↓↓</color><br>" + hsn
            }
            if (hso == hsn) hyper_change = ""
            hyper_change = hyper_change.replaceAll("colorstyle", "color style")
            if (hyper_change.length) {
                out.push({
                    "N": "<color style='color:#FFD780'>" + hyperlink_name + "</color> " + hyper_new[j].Name + " +",
                    "V": hyper_change
                })
            }
        }

        battle_old = _AvatarSkillPConfig[codename].Ver[v1].BattleSkills
        battle_new = _AvatarSkillPConfig[codename].Ver[v2].BattleSkills

        for (const j in battle_new) {
            paramdesc_old = get_paramdesc(battle_old[j]).join("<br>")
            paramdesc_new = get_paramdesc(battle_new[j]).join("<br>")
            param_change = ""
            if (paramdesc_old != paramdesc_new) {
                param_diff = dif(paramdesc_old, paramdesc_new)
                param_diff.forEach(function (u) {
                    if (u.added) {
                        param_change += "<span style='background-color:#006600'>" + u.value + "</span> "
                    } else if (u.removed) {
                        if (param_diff.length < 20) param_change += "<span style='background-color:#880000'>" + u.value + "</span> "
                    } else {
                        param_change += u.value
                    }
                })
            }
            desc_diff = dif(battle_old[j].Desc, battle_new[j].Desc)
            desc_change = ""
            desc_diff.forEach(function (u) {
                if (u.added) {
                    desc_change += "<span style='background-color:#006600'>" + u.value + "</span>"
                } else if (u.removed) {
                    if (desc_diff.length < 20) desc_change += "<span style='background-color:#880000'><del>" + u.value + "</del></span>"
                } else {
                    desc_change += u.value
                }
            })
            if (battle_old[j].Desc == battle_new[j].Desc) desc_change = ""
            param_change = param_change.replaceAll("colorstyle", "color style")
            desc_change = desc_change.replaceAll("colorstyle", "color style")
            if (param_change.length || desc_change.length) {
                if (param_change.length && desc_change.length) {
                    out.push({
                        "N": "<color style='color:#FFD780'>" + show_1[j] + "</color> " + battle_new[j].Name + " +",
                        "V": (param_change + "<br><br>" + desc_change),
                    })
                } else {
                    out.push({
                        "N": "<color style='color:#FFD780'>" + show_1[j] + "</color> " + battle_new[j].Name + " +",
                        "V": (param_change + desc_change),
                    })
                }
            }
        }

        passive_old = _AvatarSkillPConfig[codename].Ver[v1].PassiveSkills
        passive_new = _AvatarSkillPConfig[codename].Ver[v2].PassiveSkills

        for (const j in passive_new) {
            passive_change = ""
            var pso = passive_old[j] ? passive_old[j].Desc : ''
            var psn = passive_new[j] ? passive_new[j].Desc : ''
            passive_diff = dif(pso, psn)
            passive_diff.forEach(function (u) {
                if (u.added) {
                    passive_change += "<span style='background-color:#006600'>" + u.value + "</span>"
                } else if (u.removed) {
                    if (passive_diff.length < 20) passive_change += "<span style='background-color:#880000'><del>" + u.value + "</del></span>"
                } else {
                    if (passive_diff.length > 1) {
                        passive_change += u.value
                    }
                }
            })
            if ((passive_diff.length >= 20) && (!passive_change.includes("<br>"))) {
                passive_change = pso + "<br><color style='color:#FFD780'>↓↓</color><br>" + psn
            }
            if (pso == psn) passive_change = ""
            passive_change = passive_change.replaceAll("colorstyle", "color style")
            if (passive_change.length) {
                out.push({
                    "N": "<color style='color:#FFD780'>" + show_2[j] + "</color> " + passive_new[j].Name + " +",
                    "V": passive_change
                })
            }
        }

        const_old = _AvatarSkillPConfig[codename].Ver[v1].Constellations
        const_new = _AvatarSkillPConfig[codename].Ver[v2].Constellations

        for (const j in const_new) {
            const_change = ""
            const_diff = dif(const_old[j].Desc, const_new[j].Desc)
            const_diff.forEach(function (u) {
                if (u.added) {
                    const_change += "<span style='background-color:#006600'>" + u.value + "</span>"
                } else if (u.removed) {
                    if (const_diff.length < 20) const_change += "<span style='background-color:#880000'><del>" + u.value + "</del></span>"
                } else {
                    if (const_diff.length > 1) {
                        const_change += u.value
                    }
                }
            })
            if ((const_diff.length >= 20) && (!const_change.includes("<br>"))) {
                const_change = const_old[j].Desc + "<br><color style='color:#FFD780'>↓↓</color><br>" + const_new[j].Desc
            }
            if (const_old[j].Desc == const_new[j].Desc) const_change = ""
            const_change = const_change.replaceAll("colorstyle", "color style")
            if (const_change.length) {
                out.push({
                    "N": "<color style='color:#FFD780'>" + show_3[j] + "</color> " + const_new[j].Name + " +",
                    "V": const_change
                })
            }
        }
        var v2_ver = "v" + v2
        if (v2 == "L") {
            var v2_ver = "Live"
        }
        if (_changelog[codename]) {
            if (_changelog[codename][v2_ver] && _changelog[codename][v2_ver].length) {
                var v = ''
                _changelog[codename][v2_ver].forEach(function (w) {
                    v += "<p style='margin: 10px 0'>" + w.replaceAll("#", "</color>").replaceAll("@", "<color style='color:#FFD780;'>") + "</p>"
                })
                out.push({
                    "N": computer_.MiscText.ChangeLog_Other[lang2] + ' +',
                    "V": v
                })
            }
        }

        return out

    }

    function get_paramdesc(skillobj) {
        if (lang3 == "CH" || lang3 == "JP") {
            var s1 = "："
            var s2 = "；"
        } else {
            var s1 = " : "
            var s2 = " ;"
        }
        var out = []
        for (const j in skillobj.ParamDesc) {
            if (skillobj.ParamDesc[j].ParamLevelList.length > 9) {
                out.push(skillobj.ParamDesc[j].Desc + s1 + skillobj.ParamDesc[j].ParamLevelList[9] + s2)
            } else {
                out.push(skillobj.ParamDesc[j].Desc + s1 + skillobj.ParamDesc[j].ParamLevelList[0] + s2)
            }
        }
        return out
    }

    $('body').on('change', '.cl_choose select', function () {
        $('.delete').remove()
        var new_ver = $('.cl_choose select').val()
        var need_render = changes_avatar(cur_avatar_name, new_ver.split("-")[1], new_ver.split("-")[0])
        var avatar_name_temp = cur_avatar_name
        if (avatar_name_temp.includes('PlayerBoy')) avatar_name_temp = 'PlayerBoy'
        if (avatar_name_temp.includes('PlayerGirl')) avatar_name_temp = 'PlayerGirl'
        need_render.forEach(function (w) {
            $('.a_data').render({
                div: [
                    {
                        div: [
                            {
                                img: imgpre + `homdgcat-res/Avatar/UI_AvatarIcon_${avatar_name_temp}.png`,
                                class: 'head_left',
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
                                p: w.N,
                                class: 'head_right hr_1'
                            }
                        ],
                        class: 'a_section_head head_withimg'
                    },
                    {
                        div: w.V,
                        class: 'a_section_content nsc'
                    }
                ],
                class: 'a_section_skill',
                style: {
                    color: 'white'
                }
            })
        })
    })

    $('body').on('click', '.delete .a_section_head', function () {
        $(this).siblings(".a_section_content").toggle()
        $(this).find('.show_up').toggle()
    })

    $('body').on('dblclick', '.dissolve', function () {
        $('h3').toggle()
        $('.mon_head').toggle()
        $('.avatar_stats').show()
        $('.a_select').toggle()
        $('.story').toggle()
        $('.content_2').css('min-height', '0')
        $('.content_2').css('padding', '5px 0')
        $('.a_data').css('margin', '0')
        $('container').css('margin', '0')
        picture_mode = 1 - picture_mode
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

    $('body').on('click', '#special img', function () {
        if (!picture_mode) return
        skill_or_talent += 1
        if (skill_or_talent % 3 == 1) {
            $('.shows').hide()
            $('.shows_1').show()
        } else if (skill_or_talent % 3 == 2) {
            $('.shows').hide()
            $('.shows_2').show()
        } else {
            $('.shows').hide()
            $('.shows_3').show()
        }
    })

    function rotate() {
        var keq_emotes = ['1', '2', '3', '6', '18', '19', '20']
        $('.keq_emote_div').each(function () {
            var this_emote = keq_emotes[Math.floor(Math.random() * keq_emotes.length)]
            $(this).empty().render({
                img: `/images/emote/Keqing/${this_emote}.png`
            })
        })
    }

    function hn_show_() {
        $('.hn_all').show()
        $('.hn_schedule').css('background-color', "#27363E")
        $('.hn_schedule').css('color', "#eee")
        renderHN()
    }

    function hn_hide_() {
        hn_show = 0
        $('.hn_all').hide()
        $('.hn_schedule').css('background-color', "transparent")
        $('.hn_schedule').css('color', "#000")
    }

    function cl_show_() {
        $('.cl_all').show()
        $('.cl_schedule').css('background-color', "#27363E")
        $('.cl_schedule').css('color', "#eee")
        renderCL($('.changelog select').val())
    }

    function cl_hide_() {
        cl_show = 0
        $('.cl_all').hide()
        $('.cl_schedule').css('background-color', "transparent")
        $('.cl_schedule').css('color', "#000")
    }

    function hd_show_() {
        $('.hd_all').show()
        $('.hd_schedule').css('background-color', "#27363E")
        $('.hd_schedule').css('color', "#eee")
        renderHD()
    }

    function hd_hide_() {
        hd_show = 0
        $('.hd_all').hide()
        $('.hd_schedule').css('background-color', "transparent")
        $('.hd_schedule').css('color', "#000")
    }

    function boss_show_() {
        $('.boss_all').show()
        $('.boss_schedule').css('background-color', "#27363E")
        $('.boss_schedule').css('color', "#eee")
        renderBoss()
    }

    function boss_hide_() {
        boss_show = 0
        $('.boss_all').hide()
        $('.boss_schedule').css('background-color', "transparent")
        $('.boss_schedule').css('color', "#000")
    }

    function pic_show_() {
        $('.pic_schedule').css('background-color', "#27363E")
        $('.pic_schedule').css('color', "#eee")
        renderPic()
        $('.pic_all').show()
    }

    function pic_hide_() {
        pic_show = 0
        $('.pic_all').hide()
        $('.pic_schedule').css('background-color', "transparent")
        $('.pic_schedule').css('color', "#000")
    }

    $('body').on('dblclick', '.delete', function (d) {
        if (!lazy) {
            console.log($(this))
            $(this).hide()
        }
    })

});