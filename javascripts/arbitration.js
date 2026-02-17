$(function () {

    var imgpre = $('#IMGPRE').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'
    var dev_only = 0

    _NAME = {
        CH: '异相仲裁',
        EN: 'Anomaly Arbitration',
        JP: '異相の仲裁',
        KR: '이상 중재',
    }

    _Cycle_Trial = {
        CH: '骑士轮数：',
        EN: 'Knight Cycles: ',
    }

    _Cycle_Final = {
        CH: '王棋轮数：',
        EN: 'Checkmate Cycles: ',
    }

    init_title(_NAME[lang3] + ' ' + txt.PAGE_TITLE[lang])

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
    script_computer.src = '/data/' + lang3 + '/AR.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        console.log(window.innerWidth)
        max_index = _schedule.length
        cur_index = _dict[$('#CID').val()]
        if (!cur_index) cur_index = 0

        if (!lazy || !dev_only) {
            $('container').render({
                template: {
                    div: [
                        {
                            p: _NAME[lang3],
                            style: {
                                'text-align': 'center',
                                'font-weight': 'bold',
                                'font-size': '1.6em',
                                'margin-bottom': '-10px',
                                'margin-top': '15px',
                            }
                        },
                        {
                            p: {
                                CH: '这是一个测试页面',
                                EN: 'This is a test page'
                            }[lang],
                            style: {
                                'text-align': 'center',
                                'font-weight': 'bold',
                                'font-size': '1.6em',
                                'margin-bottom': '10px',
                                'margin-top': '35px',
                                'color': 'red'
                            },
                            when: dev_only
                        },
                        {
                            div: [
                                {
                                    div: '◁',
                                    class: 'v_l'
                                },
                                {
                                    div: [
                                        {
                                            p: '',
                                            class: 'ver_text_name'
                                        },
                                        {
                                            p: '',
                                            class: 'ver_text_time'
                                        }
                                    ],
                                    class: 'ver_text hover-shadow'
                                },
                                {
                                    div: {
                                        p: '▷'
                                    },
                                    class: 'v_r'
                                }
                            ],
                            class: 'ver'
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            span: ((lang == 'CH') ? '下载图片' : 'Download'),
                                        }
                                    ],
                                    class: 'level_ dl_button hover-shadow',
                                },
                                {
                                    div: [
                                        {
                                            div: {
                                                img: '/images/emote/Yunli/1.png',
                                            },
                                            class: 'perf_img'
                                        },
                                        {
                                            span: ((lang == 'CH') ? '云璃成绩' : 'Yunli Performance'),
                                        }
                                    ],
                                    class: 'level_ yunli_button hover-shadow',
                                },
                            ],
                            class: 'button_w'
                        },
                        {
                            div: [
                                {
                                    div: '',
                                    class: 'buff reward_1'
                                },
                                {
                                    div: [
                                        {
                                            p: '',
                                            class: 'target_c target_c_1'
                                        },
                                        {
                                            div: '',
                                            class: 'target_t target_t_1'
                                        },
                                    ],
                                    class: 'target',
                                },
                            ],
                            class: 'info_area'
                        },
                        {
                            div: [
                                {
                                    div: '',
                                    class: 'smallbuff a_b_0'
                                },
                                {
                                    div: '',
                                    class: 'smallbuff a_b_1'
                                },
                                {
                                    div: '',
                                    class: 'smallbuff a_b_2'
                                },
                            ],
                            class: 'a_b u_b smallbuff_wrap',
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    div: '',
                                                    class: 'a_r u_r'
                                                },
                                                {
                                                    div: '',
                                                    class: 'a_m u_m'
                                                },
                                            ],
                                            class: 'u'
                                        },
                                    ],
                                    class: 'u_l',
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    div: '',
                                                    class: 'b_r u_r'
                                                },
                                                {
                                                    div: '',
                                                    class: 'b_m u_m'
                                                },
                                            ],
                                            class: 'u'
                                        },
                                    ],
                                    class: 'u_l',
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    div: '',
                                                    class: 'c_r u_r'
                                                },
                                                {
                                                    div: '',
                                                    class: 'c_m u_m'
                                                },
                                            ],
                                            class: 'u'
                                        },
                                    ],
                                    class: 'u_l',
                                },
                            ],
                            class: 'u_l_wrapper'
                        },
                        {
                            div: [
                                {
                                    div: '',
                                    class: 'buff reward_2'
                                },
                                {
                                    div: [
                                        {
                                            p: '',
                                            class: 'target_c target_c_2'
                                        },
                                        {
                                            div: '',
                                            class: 'target_t target_t_2'
                                        },
                                    ],
                                    class: 'target',
                                },
                            ],
                            class: 'info_area'
                        },
                        {
                            div: '',
                            class: 'd_b u_b smallbuff_wrap'
                        },
                        {
                            div: [
                                {
                                    div: '',
                                    class: 'smallbuff_half d_e_3'
                                },
                                {
                                    div: '',
                                    class: 'smallbuff_half d_e_4'
                                },
                            ],
                            class: 'a_b u_b smallbuff_wrap',
                            when: window.innerWidth > 900
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    div: '',
                                                    class: 'd_r u_r'
                                                },
                                                {
                                                    div: '',
                                                    class: 'd_m u_m'
                                                },
                                            ],
                                            class: 'u'
                                        },
                                    ],
                                    class: 'u_l'
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    div: '',
                                                    class: 'e_r u_r'
                                                },
                                                {
                                                    div: '',
                                                    class: 'e_m u_m'
                                                },
                                            ],
                                            class: 'u'
                                        },
                                    ],
                                    class: 'u_l',
                                },
                            ],
                            class: 'u_l_wrapper',
                            when: window.innerWidth > 900
                        },
                        {
                            div: [
                                {
                                    div: '',
                                    class: 'smallbuff_half d_e_3'
                                },
                            ],
                            class: 'a_b u_b smallbuff_wrap',
                            when: window.innerWidth <= 900
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    div: '',
                                                    class: 'd_r u_r'
                                                },
                                                {
                                                    div: '',
                                                    class: 'd_m u_m'
                                                },
                                            ],
                                            class: 'u'
                                        },
                                    ],
                                    class: 'u_l'
                                },
                            ],
                            class: 'u_l_wrapper',
                            when: window.innerWidth <= 900
                        },
                        {
                            div: [
                                {
                                    div: '',
                                    class: 'smallbuff_half d_e_4'
                                },
                            ],
                            class: 'a_b u_b smallbuff_wrap',
                            when: window.innerWidth <= 900
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    div: '',
                                                    class: 'e_r u_r'
                                                },
                                                {
                                                    div: '',
                                                    class: 'e_m u_m'
                                                },
                                            ],
                                            class: 'u'
                                        },
                                    ],
                                    class: 'u_l'
                                },
                            ],
                            class: 'u_l_wrapper',
                            when: window.innerWidth <= 900
                        },
                        {
                            div: '',
                            class: 'u_g'
                        },
                    ],
                    class: 'content'
                }
            })
            writeVer()
        }

        $('body').addClass(bg_name)

        if (!lazy) {
            a_section_white()
            $("head").append('<style type="text/css"></style>');
            var newStyleElement = $("head").children(':last');
            newStyleElement.html('.info_area{color:white!important}');
        }

    }

    function writeVer() {
        writeVerAfter()
    }

    function reward(id) {

        for (const i of [2, 3]) {
            var element = {
                2: '.reward_1', 
                3: '.reward_2'
            }[i]
            $(element).empty()
            var text = {
                2: {
                    CH: '骑士奖励',
                    EN: 'Knight Rewards'
                }[lang],
                3: {
                    CH: '王棋奖励',
                    EN: 'Checkmate Rewards'
                }[lang]
            }[i]
            $(element).render({
                p: text,
                width: '100%',
                class: 'reward_text'
            })
            _rewardline[id].forEach(function (t) {
                if (t.Type != i) return
                var reward_items = []
                t.Reward.forEach(function (s) {
                    reward_items.push({
                        div: [
                            {
                                img: `/images/itemicon/${s.Icon}.png`,
                                class: 'reward_img'
                            },
                            {
                                p: s.Count.toString(),
                                class: 'reward_count'
                            }
                        ],
                        class: 'reward_block'
                    })
                })
                $(element).render({
                    div: [
                        {
                            p: t.Count.toString(),
                            class: 'reward_stars'
                        },
                        {
                            div: reward_items,
                            class: 'reward_items'
                        }
                    ]
                })
            })
        }

    }

    function writeVerAfter() {
        switch_title(_schedule[mod(cur_index, max_index)].Name)
        cur_schedule_ver = _schedule[mod(cur_index, max_index)]._id
        cur_floor_data = _maze[cur_schedule_ver]
        $('.ver_text_name').html(_schedule[mod(cur_index, max_index)].Name)
        $('.ver_text_time').html(_schedule[mod(cur_index, max_index)].Time)
        writeData()
    }

    function writeData() {
        
        $('.target_c_1').html(_Cycle_Trial[lang] + '7')
        $('.target_c_2').html(_Cycle_Final[lang] + `7 / <color style='color:#FF8877'> 3 </color>`)
        $('.target_t_1').empty().render({
            template: {
                p: [
                    {
                        img: imgpre + 'images/Misc/Star.png',
                        class: 'star'
                    }, function (d) {
                        return d.data
                    }
                ],
                style: {
                    'line-height': '28px'
                }
            },
            data: cur_floor_data.TargetsTrial
        })
        $('.target_t_2').empty().render({
            template: {
                p: [
                    {
                        img: imgpre + 'images/Misc/Star.png',
                        class: 'star'
                    }, function (d) {
                        return d.data
                    }
                ],
                style: {
                    'line-height': '28px'
                }
            },
            data: cur_floor_data.TargetsFinal
        })

        for (const z of [0, 1, 2, 3, 4]) {
            var key = [
                'TrialA',
                'TrialB',
                'TrialC',
                'FinalEasy',
                'FinalHard',
            ][z]
            var buff_key = [
                'BuffA',
                'BuffB',
                'BuffC',
                'FinalBuffs',
                'FinalBuffs',
            ][z]
            var tag_key = [
                '',
                '',
                '',
                'FinalTagsEasy',
                'FinalTagsHard',
            ][z]
            var elem_key = [
                'ElemA',
                'ElemB',
                'ElemC',
                'ElemFinal',
                'ElemFinal',
            ][z]
            var letter = [
                'a',
                'b',
                'c',
                'd',
                'e'
            ][z]
            var show_text = [
                (lang == 'CH') ? '骑士一' : 'Knight I',
                (lang == 'CH') ? '骑士二' : 'Knight II',
                (lang == 'CH') ? '骑士三' : 'Knight III',
                (lang == 'CH') ? '将杀王棋' : 'Checkmate',
                (lang == 'CH') ? '将杀王棋•绝境' : 'Checkmate: Zugzwang',
            ][z]
            $(`.${letter}_r`).empty().render({
                template: [
                    {
                        div: [
                            {
                                p: show_text + ' Lv' + cur_floor_data[key].Level
                            },
                            {
                                img: function (k) {
                                    return imgpre + 'images/Element/' + k.data + '.png'
                                },
                                class: 'elem_',
                                data: cur_floor_data[elem_key],
                                a: {
                                    loading: lazy
                                }
                            },
                            {
                                p: txt.Chart_Subtitle[lang],
                                style: {
                                    'font-size': '0.75em',
                                    color: '#0066FF',
                                }
                            },
                        ]
                    }
                ]
            })
            $(`.${letter}_m`).empty().render({
                template: Stage(cur_floor_data[key], letter)
            })
            if (z < 3) {
                var need_desc = [
                    {
                        p: show_text,
                        class: 'smallbuff_name'
                    }
                ]
                for (const buff_data of cur_floor_data[buff_key]) {
                    need_desc.push({
                        p: `<b>${buff_data._id} ${buff_data.Name}</b><br>${buff_data.Desc}`,
                        class: 'smallbuff_desc'
                    })
                }
                $(`.a_b_${z}`).empty().render(need_desc)
            } else {
                $(`.${letter}_b`).empty()
                for (const b of cur_floor_data[buff_key]) {
                    $(`.${letter}_b`).render({
                        template: {
                            div: [
                                {
                                    p: b.Name + '<br>' + b._id,
                                    class: 'smallbuff_name'
                                },
                                {
                                    p: b.Desc,
                                    class: 'smallbuff_desc'
                                },
                            ],
                            class: 'smallbuff'
                        }
                    })
                }
                var need_desc = [
                    {
                        p: show_text,
                        class: 'smallbuff_name'
                    }
                ]
                for (const buff_data of cur_floor_data[tag_key]) {
                    need_desc.push({
                        p: `<b>${buff_data._id} ${buff_data.Name}</b><br>${buff_data.Desc}`,
                        class: 'smallbuff_desc'
                    })
                }
                $(`.d_e_${z}`).empty().render(need_desc)
            }
        }

        $('.u_g').empty()
        generate_boss_guide('.u_g', cur_floor_data.BossGuides)

        reward(cur_floor_data.RewardLine)

        rotate()

        console.log("FINISH")

    }

    function Stage(l, letter) {
        var waves = []
        l.Monsters.forEach(function (w, i) {
            waves.push(Wave(i, w, l.Level, l.HardLevelGroup, l.EliteGroup, letter))
        })
        var temp = {
            div: [
                {
                    div: [
                        {
                            div: '',
                            class: 'emote_'
                        },
                    ],
                    class: 'emote_block_',
                },
                {
                    p: function (d) {
                        var show = []
                        var start = ''
                        if (l._id) start = '<color style="color:#2545ba">' + l._id + '</color><br>'
                        return start + show.join(' | ')
                    },
                    class: '',
                    style: {
                        'text-align': 'center',
                        'font-weight': 'bold',
                        'font-size': '0.9em',
                        'margin-top': '-5px',
                        'margin-bottom': '15px',
                        'line-height': '1.9'
                    }
                },
                {
                    div: waves,
                    class: 'stage_waves'
                }
            ],
            class: 'stage'
        }
        return temp
    }

    function Wave(i, w, stage_lv, stage_hlg, stage_eg, letter) {
        var monsters = []
        var monicon = ''
        if (['a', 'b', 'c'].includes(letter)) {
            monicon = 'monicon_1'
        } else {
            monicon = 'monicon_2'
        }
        w.forEach(function (t) {
            var me = _monster[t.ID]
            monsters.push({
                span: [
                    {
                        div: [
                            {
                                img: '/images/' + me["2"],
                                class: `${monicon} hasimg`,
                                event: {
                                    load: function (d) {
                                        $(d.sender).siblings('.monnameload').hide()
                                    },
                                    error: function (d) {
                                        $(d.sender).css("opacity", "0")
                                        $(d.sender).removeClass('hasimg')
                                        $(d.sender).siblings('.hasimgname').removeClass('hasimgname')
                                        $(d.sender).parent().addClass(monicon)
                                    },
                                },
                                a: {
                                    loading: lazy
                                }
                            },
                            {
                                div: {
                                    p: me["1"]
                                },
                                class: 'monnameload hasimgname'
                            },
                        ],
                        class: 'monleft'
                    },
                    {
                        div: [
                            {
                                span: {
                                    img: function (k) {
                                        return imgpre + 'images/Element/' + k.data + '.png'
                                    },
                                    class: 'elem',
                                    data: me["3"],
                                    a: {
                                        loading: lazy
                                    }
                                },
                                class: 'monelem'
                            },
                            {
                                span: showstance(t.Stance) + (me["5"] ? ('×' + me["5"]) : ''),
                                class: 'monname',
                                style: {
                                    'margin-left': '5px',
                                    'position': 'relative',
                                    'bottom': '2px',
                                    'font-weight': 'bold'
                                }
                            },
                        ],
                        class: 'monbottom',
                        when: t.Stance
                    },
                    {
                        div: [
                            {
                                span: function () {
                                    var s = '<b><color style="color:#cc0000;">' + t.HP.toString() + '</color></b>'
                                    if (me["4"] && me["4"] > 1) {
                                        s += '<b>×' + me["4"] + '</b>'
                                    }
                                    return s
                                },
                                class: 'monname',
                                when: t.HP
                            },
                            {
                                br: '',
                                when: t.HP && (t.SPD || me["6"])
                            },
                            {
                                span: function () {
                                    s = '<b><color style="color:#2545ba;">' + t.SPD.toString() + '</color></b>'
                                    return s
                                },
                                class: 'monname',
                                when: t.SPD
                            },
                            {
                                br: '',
                                when: t.SPD && me["6"]
                            },
                            {
                                span: function () {
                                    if (me["6"] < 100) {
                                        return {
                                            CH: '行动提前',
                                            EN: 'Advance'
                                        }[lang] + ' <b><color style="color:#cc0000;">' + (100 - me["6"]).toString() + '%</color></b>'
                                    } else {
                                        return {
                                            CH: '行动延后',
                                            EN: 'Delay'
                                        }[lang] + ' <b><color style="color:#cc0000;">' + (me["6"] - 100).toString() + '%</color></b>'
                                    }
                                },
                                when: me["6"],
                                class: 'monname'
                            }
                        ],
                        class: 'monright',
                        style: {
                            'margin-top': t.Stance ? '' : '0px'
                        }
                    },
                ],
                class: 'monster_card hover-shadow',
                a: {
                    'data-id': t.ID,
                    'data-lv': stage_lv,
                    'data-hl': stage_hlg ? stage_hlg : 1,
                    'data-eg': stage_eg ? stage_eg.ID : 1
                }
            })
        })
        var wave_title = txt.Wave[i][lang]
        if ((lang == 'CH') && w.length == 1) wave_title = `<color style='font-weight:bold'>` +  _monster[w[0].ID]['1'] + '</color>'
        var wave_wrap_data = [
            {
                p: wave_title,
                class: 'wave_name'
            }
        ]
        var monsters_split = (window.innerWidth <= 600) ? list_split(monsters, 100) : list_split(monsters, 5)
        for (const d_ of monsters_split) {
            wave_wrap_data.push({
                div: d_,
                class: 'wave_monsters'
            })
        }
        var temp = {
            div: wave_wrap_data,
            class: 'wave_wrap'
        }
        return temp
    }

    function list_split(data_list, split_num) {
        var temp = []
        var out = []
        for (const i in data_list) {
            if ((i > 0) && (i % split_num == 0)) {
                out.push(temp)
                temp = []
            }
            temp.push(data_list[i])
        }
        out.push(temp)
        return out
    }

    function hide(n) {
        //return n
        return n.replaceAll("0", "█").replaceAll("1", "█").replaceAll("2", "█").replaceAll("3", "█").replaceAll("4", "█").replaceAll("5", "█").replaceAll("6", "█").replaceAll("7", "█").replaceAll("8", "█").replaceAll("9", "█")
    }

    function generate_boss_guide(p, d) {
        if (!d) return
        if (!d.length) return
        if (d.length == 1) split_index = 1
        if (d.length == 2) split_index = 2
        if (d.length >= 3) split_index = 3
        d.forEach(function (i) {
            var guide_data = _bossguide[i]
            var lis = []
            var s = []
            for (const item of guide_data.Notes) {
                if (item.Title) {
                    s = ['<b>@' + item.Title + '#</b>']
                } else {
                    s = []
                }
                for (const desc of item.DescList) {
                    s.push(desc)
                }
                lis.push({
                    p: text_process(s.join('<br>')),
                    class: 'bossguide_p'
                })
            }
            $(p).render({
                div: {
                    div: [
                        {
                            p: {
                                CH: '妮可少女的研究',
                                EN: `HomDGCat's Notes`
                            }[lang],
                            class: 'bossguide_p_b',
                            style: {
                                'text-align': 'center',
                                'font-weight': 'bold',
                            }
                        },
                        {
                            div: {
                                img: '/images/' + guide_data.Icon,
                                class: 'bossguide_img'
                            },
                            class: 'bossguide_img_w'
                        },
                        {
                            p: guide_data.Name,
                            class: 'bossguide_p_b',
                            style: {
                                'text-align': 'center',
                                'font-weight': 'bold',
                            }
                        },
                        {
                            p: txt.Chart_Subtitle[lang],
                            class: 'bossguide_p',
                            style: {
                                'text-align': 'center',
                                color: '#FFD780',
                                'margin-bottom': '10px'
                            }
                        },
                    ].concat(lis),
                    class: 'a_section_content'
                },
                class: `a_section a_section_split_${split_index}`
            })
        })
    }

    $('body').on('click', '.ver_text', function () {
        var pop = poplayer({
            header: '',
            width: '95%',
            template: [
                {
                    div: function (k) {
                        _schedule.forEach(function (t, i) {
                            if (t.Time != ' - ') return
                            $(k.container).render({
                                p: '<b>' + t.Name + '</b><br>' + t.Time,
                                class: 'ver_text hover-shadow',
                                style: {
                                    width: '250px',
                                    'padding-left': '10px',
                                    'padding-right': '10px',
                                    'text-align': 'center',
                                    'line-height': '1.7'
                                },
                                event: {
                                    click: function () {
                                        pop.close()
                                        cur_index = i
                                        writeVer()
                                    }
                                }
                            })
                        })
                    },
                    style: {
                        display: 'flex',
                        'flex-wrap': 'wrap',
                        'justify-content': 'space-evenly'
                    }
                },
                {
                    div: function (k) {
                        _schedule.forEach(function (t, i) {
                            if (t.Time == ' - ') return
                            $(k.container).render({
                                p: '<b>' + t.Name + '</b><br>' + t.Time,
                                class: 'ver_text hover-shadow',
                                style: {
                                    width: '250px',
                                    'padding-left': '10px',
                                    'padding-right': '10px',
                                    'text-align': 'center',
                                    'line-height': '1.7'
                                },
                                event: {
                                    click: function () {
                                        pop.close()
                                        cur_index = i
                                        writeVer()
                                    }
                                }
                            })
                        })
                    },
                    style: {
                        display: 'flex',
                        'flex-wrap': 'wrap',
                        'justify-content': 'space-evenly'
                    }
                }
            ]
        })
    })

    function text_process(t) {
        return t.replaceAll(`#`, `</color>`).replaceAll(`@`, `<color style='color:#FFD780'>`)
    }

    $('body').on('click', '.v_r', function () {
        cur_index -= 1
        writeVer()
    })

    $('body').on('click', '.v_l', function () {
        cur_index += 1
        writeVer()
    })

    $('body').on('mouseenter', '.monster_card', function () {
        $(this).find('.hasimgname').show()
        $(this).find('.hasimg').css("opacity", "0.2")
    })

    $('body').on('mouseleave', '.monster_card', function () {
        $(this).find('.hasimgname').hide()
        $(this).find('.hasimg').css("opacity", "1")
    })

    $('body').on('click', '.monster_card', function () {
        window.open(`/sr/monster?lang=${lang3}&id=${$(this).attr('data-id')}&lv=${$(this).attr('data-lv')}&hlg=${$(this).attr('data-hl')}&eg=${$(this).attr('data-eg')}&def=1000`)
    })

    $('body').on('dblclick', '.title', function () {
        $('.under').toggle()
        $('.chart_container').toggle()
        $('h3').toggle()
        $('.dl_button').hide()
        $('.buff').css('color', 'white')
    })

    $('body').on('click', '.dl_button', function () {
        var use_lang = (lang == 'CH') ? 'CH' : 'EN'
        $('.temp').remove()
        $('.content').render({
            a: `/Abyss/${use_lang}/${cur_schedule_ver}.png`,
            attr: {
                download: `${cur_schedule_ver}.png`
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
        //gtag('event', 'download_sr_arbitration', {
        //    'type': 'sr_arbitration'
        //})
        //window.location.href = `/Abyss/${use_lang}/${cur_schedule_ver}.png`
    })

    $('body').on('click', '.emote_block_', rotate)

    $('body').on('click', '.yunli_button', function () {
        window.location.href = `/sr/yunli5`
    })

    function rotate() {
        var keq_emotes = ['1', '2', '3']
        $('.emote_').each(function () {
            var this_emote = keq_emotes[Math.floor(Math.random() * keq_emotes.length)]
            $(this).empty().render({
                img: `/images/emote/Yunli/${this_emote}.png`
            })
        })
    }

})