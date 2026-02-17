$(function () {

    var imgpre = $('#IMGPRE').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'
    var avid = $('#AVID').val()
    var success = !lazy.length
    init_title(computer_.MiscText.Maze_Name[lang3] + ' ' + computer_.MiscText.PAGE_TITLE[lang])

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.TITLE[lang] + "<color style='font-size: 26px;'><br>" + computer_.MiscText.game_img[lang] + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_);
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

    var download_cd = 0
    var show_minion_hp = 0
    var download_text = {
        CH: '下载图片',
        EN: 'Download Image'
    }

    var act = [
        {
            "Name": {
                "CH": "第一幕",
                "EN": "Act 1"
            },
            "Tag": {
                "CH": "战斗",
                "EN": "Combat"
            },
        },
        {
            "Name": {
                "CH": "第二幕",
                "EN": "Act 2"
            },
            "Tag": {
                "CH": "战斗",
                "EN": "Combat"
            },
        },
        {
            "Name": {
                "CH": "第三幕",
                "EN": "Act 3"
            },
            "Tag": {
                "CH": "首领",
                "EN": "Boss"
            },
            //"Time": 105,
        },
        {
            "Name": {
                "CH": "第四幕",
                "EN": "Act 4"
            },
            "Tag": {
                "CH": "守护",
                "EN": "Defense"
            },
            "Desc": {
                "CH": "在规定时间内守护秘境镇石，每击败一个敌人使剩余时间额外减少",
                "EN": "Defend the Domain Monolith in fixed time. Defeating an opponent will deduct the remaining time."
            },
        },
        {
            "Name": {
                "CH": "第五幕",
                "EN": "Act 5"
            },
            "Tag": {
                "CH": "无尽",
                "EN": "Endless"
            },
            "Desc": {
                "CH": "在有限时间内面对不断来袭的怪物，尽可能击败更多的悬赏敌人",
                "EN": "Face endless waves of enemies within limited time, and defeat as many Bounty Enemies as possible."
            },
        },
        {
            "Name": {
                "CH": "第六幕",
                "EN": "Act 6"
            },
            "Tag": {
                "CH": "首领",
                "EN": "Boss"
            },
            //"Time": 120,
        },
        {
            "Name": {
                "CH": "第七幕",
                "EN": "Act 7"
            },
            "Tag": {
                "CH": "战斗",
                "EN": "Combat"
            },
        },
        {
            "Name": {
                "CH": "第八幕",
                "EN": "Act 8"
            },
            "Tag": {
                "CH": "首领",
                "EN": "Boss"
            },
            //"Time": 95,
        },
        {
            "Name": {
                "CH": "第九幕",
                "EN": "Act 9"
            },
        },
        {
            "Name": {
                "CH": "第十幕",
                "EN": "Act 10"
            },
        },
        {
            "Name": {
                "CH": "第十一幕",
                "EN": "Act 11"
            },
        },
        {
            "Name": {
                "CH": "第十二幕",
                "EN": "Act 12"
            },
        }
    ]

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/maze.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    var global = -1
    var interval_id = 0

    function begin() {

        phase_i = _plane.length - 1
        if (avid) {
            for (const u in _plane) {
                if (_plane[u].Ver == avid) {
                    success = 1
                    phase_i = u
                }
            }
        }

        $('container').render({
            template: {
                div: [
                    {
                        p: computer_.MiscText.Maze_Name[lang3],
                        style: {
                            'text-align': 'center',
                            'font-weight': 'bold',
                            'margin-bottom': '10px',
                        },
                        class: 'sch_2'
                    },
                    {
                        p: computer_.MiscText.Abyss_Reminder[lang],
                        class: 'avd tip_3',
                        style: {
                            'color': '#6f6f6f',
                            'font-weight': 'bold',
                            'text-align': 'center',
                            'margin-bottom': '13px'
                        }
                    },
                    {
                        section: [
                            {
                                schedule: {
                                    CH: '月谕圣牌',
                                    EN: 'Lunar Arcanum'
                                }[lang],
                                event: {
                                    click: renderTarot
                                },
                                class: success ? 'sch' : 'sch',
                                style: {
                                    'border-width': '2px',
                                    'border-color': 'rgb(112, 48, 160)'
                                }
                            },
                            {
                                schedule: computer_.MiscText.Maze_S[0][lang],
                                event: {
                                    click: renderOverall
                                },
                                class: success ? 'active sch' : 'active sch',
                                style: {
                                    'border-width': '2px',
                                    'border-color': 'rgb(112, 48, 160)'
                                }
                            },
                            {
                                schedule: computer_.MiscText.Maze_S[5][lang],
                                event: {
                                    click: renderSlip
                                },
                                class: 'sch',
                            },
                            {
                                schedule: computer_.MiscText.Maze_S[2][lang],
                                event: {
                                    click: renderBlessing
                                },
                                class: 'sch'
                            },
                            {
                                schedule: computer_.MiscText.Maze_S[3][lang],
                                event: {
                                    click: renderBlessingLevel
                                },
                                class: 'sch'
                            },
                            {
                                schedule: computer_.MiscText.Maze_S[1][lang],
                                event: {
                                    click: renderPoses
                                },
                                class: 'sch'
                            },
                        ],
                        class: 'typ'
                    },
                    {
                        div: '',
                        class: 'blessing_card_area'
                    },
                    {
                        div: '',
                        class: 'blessing_card_area_2'
                    }
                ],
                class: 'content'
            }
        })

        $('body').addClass(bg_name)
        
        if (success) {
            renderOverall()
            $('.typ').toggle()
            $('.card_toggle').toggle()
        } else {
            renderOverall()
        }

    }

    $('body').on('click', 'schedule', function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })

    function renderOverall() {
        plane = _plane[mod(phase_i, _plane.length)]
        overall = _overall[mod(phase_i, _plane.length)]
        switch_title(plane.Ver)
        $('.blessing_card_area').empty().render({
            template: {
                div: [
                    {
                        p: [
                            {
                                span: '◁',
                                class: 'v_l'
                            },
                            plane.Ver,
                            {
                                span: '▷',
                                class: 'v_r'
                            }
                        ],
                        style: {
                            'text-align': 'center',
                            'font-weight': 'bold',
                            'font-size': '1.8em',
                            'margin-top': '12px'
                        }
                    },
                    {
                        p: plane.Time,
                        style: {
                            'text-align': 'center',
                            'font-weight': 'bold',
                            'font-size': '1em',
                            'margin-top': '12px'
                        }
                    },
                    {
                        div: {
                            span: download_text[lang],
                            style: {
                                padding: '5px 10px',
                                border: '2px solid #f29e38',
                                'border-radius': '5px'
                            },
                            class: 'hover-shadow',
                            click: function () {
                                download(`/Abyss/${lang}/+${plane.Ver}.png`, `${plane.Ver} ${computer_.MiscText.Maze_Name[lang3]}`)
                            },
                            when: 0
                        },
                        style: {
                            width: '100%',
                            display: 'flex',
                            'justify-content': 'center',
                            'font-weight': 'bold',
                            'margin-bottom': '15px',
                        },
                        class: 'pic_dl',
                    },
                    {
                        div: {
                            img: imgpre + 'homdgcat-res/UI/[[.]].png',
                            style: {
                                width: '10%',
                                'max-width': '40px',
                                margin: '0px',
                            },
                            a: {
                                loading: lazy
                            },
                            data: overall.Elem
                        },
                        style: {
                            display: 'flex',
                            'justify-content': 'center',
                            'margin': '10px 0'
                        }
                    },
                    {
                        div: [
                            {
                                p: computer_.MiscText.Maze_Opening[lang3],
                                style: {
                                    'text-align': 'center',
                                    'font-weight': 'bold',
                                    'font-size': '1.17em',
                                    'margin-top': '34px',
                                    'margin-bottom': '10px'
                                }
                            },
                            {
                                div: {
                                    a: '/gi/char/[[ID]]',
                                    t: {
                                        img: imgpre + 'homdgcat-res/Avatar/[[Icon]].png',
                                        a: {
                                            loading: lazy
                                        },
                                        style: {
                                            width: '100%'
                                        }
                                    },
                                    style: {
                                        width: 'calc(25% - 20px)',
                                        'max-width': '80px',
                                        margin: '10px',
                                    },
                                    data: overall.Initial,
                                    class: 'hover-shadow'
                                },
                                style: {
                                    display: 'flex',
                                    'justify-content': 'center',
                                    'flex-wrap': 'wrap'
                                }
                            },
                            /*{
                                p: plane._tip,
                                when: plane._tip && plane._tip.length,
                                style: {
                                    'text-align': 'center',
                                    'margin-top': '10px',
                                    'line-height': '2'
                                },
                                class: 'tip_'
                            }*/
                        ]
                    },
                    {
                        div: [
                            {
                                p: computer_.MiscText.Maze_Invitation[lang3],
                                style: {
                                    'text-align': 'center',
                                    'font-weight': 'bold',
                                    'font-size': '1.17em',
                                    'margin-top': '24px',
                                    'margin-bottom': '10px',
                                }
                            },
                            {
                                div: {
                                    a: '/gi/char/[[ID]]',
                                    t: {
                                        img: imgpre + 'homdgcat-res/Avatar/[[Icon]].png',
                                        a: {
                                            loading: lazy
                                        },
                                        style: {
                                            width: '100%'
                                        }
                                    },
                                    style: {
                                        width: 'calc(25% - 20px)',
                                        'max-width': '80px',
                                        margin: '10px',
                                    },
                                    data: overall.Invitation,
                                    class: 'hover-shadow'
                                },
                                style: {
                                    display: 'flex',
                                    'justify-content': 'center',
                                    'flex-wrap': 'wrap'
                                }
                            },
                        ],
                        style: {
                            'margin-bottom': '10px'
                        }
                    },
                    {
                        div: function (d) {
                            $(d.container).render({
                                p: computer_.MiscText.Maze_Boss[lang],
                                style: {
                                    'text-align': 'center',
                                    'font-weight': 'bold',
                                    'font-size': '1.17em',
                                    'margin-top': '24px',
                                    'margin-bottom': '10px',
                                    'width': '100%'
                                }
                            },)
                            if (overall.Chambers) {
                                overall.Chambers.forEach(function (pl, plane_ind) {
                                    if (plane_ind >= 4) return
                                    if (!pl.length) return
                                    var cmb = pl[pl.length - 1]
                                    $(d.container).render(boss_div(_mp[cmb.Configs[0]], plane_ind, cmb))
                                })
                            } else if (overall.Boss) {
                                var cmb_make = [
                                    {
                                        Level: 90
                                    },
                                    {
                                        Level: 92
                                    },
                                    {
                                        Level: 95
                                    },
                                    {
                                        Level: 100
                                    }
                                ]
                                overall.Boss.forEach(function (boss, index) {
                                    $(d.container).render(boss_div(boss, index, cmb_make[index]))
                                })
                            }
                        },
                        style: {
                            display: 'flex',
                            'justify-content': 'center',
                            'margin': '0px 0 -10px',
                            'flex-wrap': 'wrap'
                        }
                    },
                    {
                        div: function (d) {
                            $(d.container).render({
                                p: {
                                    CH: '圣牌挑战',
                                    EN: 'Arcana Challenges'
                                }[lang],
                                style: {
                                    'text-align': 'center',
                                    'font-weight': 'bold',
                                    'font-size': '1.17em',
                                    'margin-top': '24px',
                                    'margin-bottom': '10px',
                                    'width': '100%'
                                }
                            },)
                            if (overall.Chambers) {
                                overall.Chambers.forEach(function (pl, plane_ind) {
                                    if (plane_ind < 4) return
                                    if (!pl.length) return
                                    var cmb = pl[0]
                                    $(d.container).render(boss_div(_mp[cmb.Configs[0]], 4, cmb))
                                    cmb = pl[1]
                                    $(d.container).render(boss_div(_mp[cmb.Configs[0]], 5, cmb))
                                })
                            } else if (overall.Arcana) {
                                var cmb_make = [
                                    {
                                        Level: 100
                                    },
                                    {
                                        Level: 100
                                    }
                                ]
                                overall.Arcana.forEach(function (boss, index) {
                                    $(d.container).render(boss_div(boss, 4 + index, cmb_make[index]))
                                })
                            }
                        },
                        style: {
                            display: 'flex',
                            'justify-content': 'center',
                            'margin': '0px 0 -10px',
                            'flex-wrap': 'wrap'
                        },
                        when: (overall.Chambers && overall.Chambers[4] && overall.Chambers[4].length) || overall.Arcana
                    }
                ],
                class: 'card_2'
            },
        })
        if (overall.Chambers) {
            overall.Chambers.forEach(function (t, i) {
                if (!t.length) return
                $('.blessing_card_area').render({
                    template: {
                        div: [
                            {
                                div: function (w) {
                                    t.forEach(function (s, j) {
                                        var act_name = act[s._id - 1].Name[lang]
                                        if (i == 4) act_name = [
                                            {
                                                CH: '圣牌一',
                                                EN: 'Arcana 1'
                                            },
                                            {
                                                CH: '圣牌二',
                                                EN: 'Arcana 2'
                                            }
                                        ][j][lang]
                                        if ((s.Configs.length == 1) && j) {
                                            $(w.container).render({
                                                div: [
                                                    {
                                                        p: act_name,
                                                        style: {
                                                            'text-align': 'center',
                                                            'font-weight': 'bold',
                                                            'font-size': '1.2em',
                                                            'margin-top': '12px'
                                                        },
                                                    },
                                                    {
                                                        p: function (k) {
                                                            var out = 'Lv' + s.Level
                                                            if (act[s._id - 1].Time) out += ' ' + act[s._id - 1].Time
                                                            return out
                                                        },
                                                        style: {
                                                            'text-align': 'center',
                                                            'font-size': '1em',
                                                            'color': '#f2d938',
                                                            'margin-top': '12px',
                                                            'margin-bottom': '12px'
                                                        },
                                                    },
                                                    {
                                                        div: function (d) {
                                                            if (!_mp[s.Configs[0]]) return
                                                            var hp_mult = plane.HP ? plane.HP[i] : 0
                                                            if (i == 4) hp_mult = plane.HP ? plane.HP[5] : 0
                                                            _mp[s.Configs[0]].forEach(function (u) {
                                                                $(d.container).render({
                                                                    a: '/gi/monster/' + u,
                                                                    t: [
                                                                        {
                                                                            img: imgpre + `homdgcat-res/monster/${_mons[u].Icon}.png`,
                                                                            style: {
                                                                                width: '20%',
                                                                                'max-width': '54px'
                                                                            }
                                                                        },
                                                                        {
                                                                            div: [
                                                                                {
                                                                                    p: _mons[u].Name,
                                                                                    style: {
                                                                                        color: computer_.TextColorLightConfig[_mons[u].Color],
                                                                                    },
                                                                                    class: "tip_"
                                                                                },
                                                                                {
                                                                                    p: '<b>' + (_mons[u].HP * (_computer_.LevelCurves[s.Level][_mons[u].HPCurve]) * hp_mult).toFixed(0) + '</b>',
                                                                                    style: {
                                                                                        color: '#eeeeee',
                                                                                    },
                                                                                    class: "tip_",
                                                                                    when: plane.HP && hp_mult,
                                                                                }
                                                                            ],
                                                                            style: {
                                                                                'max-width': 'calc(100% - min(20%, 54px))',
                                                                                display: 'flex',
                                                                                'justify-content': 'space-evenly',
                                                                                'flex-direction': 'column',
                                                                                'padding-left': '10px'
                                                                            }
                                                                        }
                                                                    ],
                                                                    style: {
                                                                        display: 'flex',
                                                                        'margin-bottom': '10px',
                                                                        'justify-content': 'center',
                                                                    },
                                                                    class: 'hover-shadow'
                                                                })
                                                            })
                                                        },
                                                    },
                                                ],
                                                class: i < 2 ? 'card_3' : 'card_4'
                                            })
                                        } else {
                                            var ctn = []
                                            s.Configs.forEach(function (config_id, ind) {
                                                if (ind == s.Configs.length - 1) {
                                                    var cf = 1.4
                                                } else {
                                                    var cf = 1.2
                                                }
                                                var this_config_div = []
                                                if (_mp[config_id]) {
                                                    _mp[config_id].forEach(function (mon_id) {
                                                        if (!_mons[mon_id]) {
                                                            console.log(mon_id)
                                                        }
                                                        this_config_div.push({
                                                            a: '/gi/monster/' + mon_id,
                                                            t: [
                                                                {
                                                                    img: imgpre + `homdgcat-res/monster/${_mons[mon_id].Icon}.png`,
                                                                    class: 'minion'
                                                                },
                                                                {
                                                                    p: (_mons[mon_id].HP * (_computer_.LevelCurves[s.Level][_mons[mon_id].HPCurve]) * cf).toFixed(0),
                                                                    class: 'minion_hp',
                                                                    when: show_minion_hp,
                                                                }
                                                            ],
                                                            class: 'minion_wrapper hover-shadow',
                                                        })
                                                    })
                                                }
                                                ctn.push({
                                                    div: this_config_div,
                                                    class: 'rotate_child',
                                                    a: {
                                                        'data-id': (ind + 1).toString()
                                                    }
                                                })
                                            })
                                            $(w.container).render({
                                                div: [
                                                    {
                                                        p: act_name,
                                                        style: {
                                                            'text-align': 'center',
                                                            'font-weight': 'bold',
                                                            'font-size': '1.2em',
                                                            'margin-top': '12px'
                                                        }
                                                    },
                                                    {
                                                        p: function (k) {
                                                            var out = 'Lv' + s.Level
                                                            if (act[s._id - 1].Time) out += ' ' + act[s._id - 1].Time
                                                            out += '<span class="rel">🔄</span>'
                                                            return out
                                                        },
                                                        style: {
                                                            'text-align': 'center',
                                                            'font-size': '1em',
                                                            'color': '#f2d938',
                                                            'margin-top': '12px',
                                                            'margin-bottom': '12px'
                                                        },
                                                    },
                                                    {
                                                        div: ctn,
                                                        class: 'rotate',
                                                        a: {
                                                            'data-id': s.Configs.length.toString(),
                                                            'data-show': '9999'
                                                        }
                                                    }
                                                ],
                                                class: i < 2 ? 'card_3' : 'card_4'
                                            })
                                        }
                                    })
                                },
                                style: {
                                    display: 'flex',
                                    'justify-content': 'space-evenly',
                                    'margin': '0px 0 -10px',
                                    'flex-wrap': 'wrap'
                                }
                            },
                            {
                                div: function (w) {
                                    t.forEach(function (i) {
                                        i.Configs.forEach(function (j) {
                                            if (_mon_desc[j]) {
                                                $(w.container).render({
                                                    p: _mon_desc[j],
                                                    class: 'mon_desc'
                                                })
                                            }
                                        })
                                    })
                                }
                            }
                        ],
                        class: 'card_2 card_toggle'
                    }
                })
            })
        }
        interval_render()
        interval_start()
        console.log("FINISH")
    }

    function boss_div(data, plane_ind, cmb) {
        return {
            div: [
                {
                    div: function (d) {
                        if (!data) {
                            $(d.container).render({
                                div: [
                                    {
                                        div: {
                                            img: imgpre + `homdgcat-res/Mat/UI_ItemIcon_120864.png`,
                                            style: {
                                                'max-width': '64px'
                                            }
                                        },
                                        style: {
                                            display: 'flex',
                                            'justify-content': 'center',
                                            width: '100%',
                                            margin: '0px 3px'
                                        }
                                    },
                                ],
                                style: {
                                    display: 'flex',
                                    //'margin-bottom': '10px',
                                    //'justify-content': 'center',
                                    'flex-flow': 'column'
                                },
                                class: 'hover-shadow'
                            })
                        } else {
                            data.forEach(function (u) {
                                $(d.container).render({
                                    a: '/gi/monster/' + u,
                                    t: [
                                        {
                                            div: {
                                                img: imgpre + `homdgcat-res/monster/${_mons[u].Icon}.png`,
                                                style: {
                                                    'max-width': '64px'
                                                }
                                            },
                                            style: {
                                                display: 'flex',
                                                'justify-content': 'center',
                                                width: '100%',
                                                margin: '0px 3px'
                                            }
                                        },
                                        {
                                            p: '<b>' + (_mons[u].HP * (_computer_.LevelCurves[cmb.Level][_mons[u].HPCurve]) * (plane.HP ? plane.HP[plane_ind] : 0)).toFixed(0) + '</b>',
                                            style: {
                                                color: computer_.TextColorLightConfig[_mons[u].Color],
                                                'text-align': 'center',
                                                width: '100%',
                                                'margin': '6px 3px -2px'
                                            },
                                            class: "tip_",
                                            when: plane.HP && plane.HP[plane_ind],
                                        },
                                    ],
                                    style: {
                                        display: 'flex',
                                        //'margin-bottom': '10px',
                                        //'justify-content': 'center',
                                        'flex-flow': 'column'
                                    },
                                    class: 'hover-shadow'
                                })
                            })
                        }
                    },
                    style: {
                        display: 'flex',
                        'justify-content': 'center',
                        'flex-wrap': 'wrap',
                        //height: '100%'
                    }
                },
                {
                    p: '<b>' + cmb.Time + '</b>',
                    style: {
                        'text-align': 'center',
                        width: '100%',
                        'margin': '6px 3px',
                        'font-size': '0.9em'
                    },
                    class: "tip_",
                    when: cmb.Time != undefined,
                }
            ],
            class: 'card_flex'
        }
    }

    function interval_render() {
        $('.rotate').each(function () {
            var showing = 1 + mod(global, parseInt($(this).attr('data-id')))
            $(this).find('.rotate_child').hide()
            $(this).find(`.rotate_child[data-id=${showing}]`).show()
            $(this).attr('data-show', showing.toString())
        })
        global++
    }

    function interval_start() {
        clearInterval(interval_id)
        interval_id = setInterval(interval_render, 2500)
    }

    function renderBlessing() {
        $('.blessing_card_area').empty().render({
            template: {
                div: [
                    {
                        p: {
                            img: imgpre + `images/maze/[[Icon]].png`,
                            style: {
                                'width': '70px',
                            }
                        },
                        style: {
                            'text-align':'center'
                        }
                    },
                    {
                        div: `[[Name]]`,
                        class: 'name_2',
                        style: {
                            'font-weight': 'bold'
                        }
                    },
                ],
                class: 'card_6',
                a: {
                    'data-id': `[[Buffs]]`
                }
            },
            data: _groups
        })
        $('.blessing_card_area_2').render({
            template: {
                div: [
                    {
                        p: {
                            img: imgpre + `images/maze/[[Icon]].png`,
                            style: {
                                'width': '50px',
                            }
                        },
                        style: {
                            'text-align':'center'
                        }
                    },
                    {
                        div: `[[Name]]`,
                        class: 'name'
                    },
                    {
                        div: `[[Desc1]]`,
                        class: 'desc'
                    },
                    {
                        div: `[[Desc2]]`,
                        class: 'desc'
                    }
                ],
                a: {
                    class: function (k) {
                        return `card gg gg_${k.data.Group}`
                    }
                }
            },
            data: _blessings
        })
        $('.gg').hide()
    }

    $('body').on('click', '.card_6', function (d) {
        console.log(1)
        $(this).siblings().removeClass('active_g')
        $(this).addClass('active_g')
        $('.gg').hide()
        $(`.gg_${$(this).attr('data-id')}`).show()
    })

    function renderBlessingLevel() {
        $('.blessing_card_area').empty()
        _tl.forEach(function (t) {
            $('.blessing_card_area').render({
                template: {
                    div: function (d) {
                        $(d.container).render({
                            div: t._id.toString(),
                            class: 'name_2',
                            style: {
                                'font-weight': 'bold'
                            }
                        })
                        t.Levels.forEach(function (s) {
                            $(d.container).render({
                                p: s.Desc,
                                class: 'desc',
                                style: {
                                    'margin-bottom': '12px'
                                }
                            })
                        })
                    },
                    class: 'card_2'
                }
            })
        })
    }

    function renderPoses() {
        $('.blessing_card_area').empty().render({
            template: {
                div: [
                    {
                        p: {
                            img: imgpre + `homdgcat-res/Avatar/[[Icon]].png`,
                            style: {
                                'width': '100px',
                            }
                        },
                        style: {
                            'text-align':'center'
                        }
                    },
                    {
                        div: `[[Name]]`,
                        class: 'name_2'
                    },
                ],
                class: 'card_5',
            },
            data: _poses
        })
    }

    function renderSlip() {
        $('.blessing_card_area').empty().render({
            template: {
                div: [
                    {
                        div: `[[Name]]`,
                        class: 'name'
                    },
                    {
                        div: `[[Desc]]`,
                        class: 'desc'
                    }
                ],
                class: 'card'
            },
            data: _slips
        })
    }

    function renderTarot() {
        $('.blessing_card_area').empty().render({
            template: {
                div: [
                    {
                        div: `[[Name]]`,
                        class: 'name',
                        style: {
                            'margin-top': '0'
                        }
                    },
                    {
                        div: {
                            img: `/images/maze/[[Image]].png`
                        },
                        class: 'tarot_img'
                    },
                    {
                        div: `[[Desc_2]]`,
                        class: 'desc',
                        style: {
                            'margin-top': '30px'
                        }
                    },
                ],
                class: 'card_7'
            },
            data: _tarot
        })
    }

    function mod(n, m) {
        return ((n % m) + m) % m
    }

    $('body').on('click', '.v_l', function () {
        phase_i -= 1
        renderOverall()
    })

    $('body').on('click', '.v_r', function () {
        phase_i += 1
        renderOverall()
    })

    $('body').on('click', '.rel', function () {
        clearInterval(interval_id)
        var rot = $(this).parent().next()
        var new_id = parseInt(rot.attr('data-show')) + 1
        if (new_id > parseInt(rot.attr('data-id'))) {
            new_id = 1
        }
        rot.attr('data-show', new_id.toString())
        rot.find('.rotate_child').hide()
        rot.find(`.rotate_child[data-id=${new_id}]`).show()
    })

    $('body').on('click', '.title', function () {
        $('.typ').toggle()
        $('.card_toggle').toggle()
    })

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
    }

})