$(function () {

    var imgpre = $('#IMGPRE').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'
    cur_coordinate = 0

    init_title(txt.PAGE_TITLE[lang])

    var avid = $('#MONSTERID').val()
    if (!avid) avid = $('#MONSTER').val()

    if (lang == 'EN') {$('body').css('font-family', "'Segoe UI', sans-serif")}
    else {$('body').css('font-family', "'Microsoft YaHei', sans-serif")}

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 26px;'><br>" + txt.game_img[lang] + VER_SR + "</b></color>")
    $('h3 .title').attr('href', (lang == 'CH') ? '/?game=SR' : '/en?game=SR')
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
    if (!avid && window.location.hash) avid = window.location.hash.replace('#_', '')
    if (window.location.hash) window.location.hash = ''

    $('body').on('click', '._menu_', function () {
        popLinks(lang)
    })

    var EG = $('#EG').val() ? parseInt($('#EG').val()) : 1
    var HLG = $('#HLG').val() ? parseInt($('#HLG').val()) : 1
    var DEF = $('#DEF').val() ? parseInt($('#DEF').val()) : 1000
    var LV = $('#LEVEL').val() ? parseInt($('#LEVEL').val()) : 95
    var MULT = 1
    if (!isNaN(parseFloat($('#MUL').val()))) {
        MULT = parseFloat($('#MUL').val())
    }
    refreshStats()
    var IS_DMG = 0
    //if ($('#DEF').val()) IS_DMG = 1
    var cm = 114514
    var skill_phase = 0

    var show_sch = 0
    var si = 0

    var has_2 = 0
    var m_s = 0

    var switch_hlg = 0
    var switch_hlg_text = [
        {
            CH: '计算混沌血量',
            EN: 'Calculate MoC HP'
        },
        {
            CH: '计算常规血量',
            EN: 'Calculate regular HP'
        }
    ]

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang3 + '/Monster_1.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    var ojb = document.getElementsByTagName("container")
    ojb[0].addEventListener("scroll", update)

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
                            p: {
                                CH: '妮可少女 玉衡杯数据库',
                                EN: 'HomDGCat Wiki'
                            }[lang],
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

    DelayRatioText = {
        CH: '下一次行动间隔 ',
        EN: 'Interval before next action '
    }
    
    _button = (lang == 'CH') ? '搜索' : 'Search'
    _button2 = (lang == 'CH') ? '清除' : 'Clear'
    var rendered_buttoms = 0

    function begin() {

        let script_2 = document.createElement('script')
        script_2.src = '/data/' + lang3 + '/MonsterSkill.js'
        document.head.append(script_2)
        script_2.onload = function () {
            m_s = 1
            if (cm != 114514) renderSkill(cm)
            
            let script_computer_2 = document.createElement('script')
            script_computer_2.src = '/data/' + lang3 + '/Monster_2.js'
            document.head.append(script_computer_2)
            script_computer_2.onload = function () {
                has_2 = 1
            }
        }

        $('container').render({
            template: [
                {
                    div: [
                        {
                            div: [
                                {
                                    input: '',
                                    a: {
                                        type: 'text',
                                        id: 'INPUT'
                                    },
                                },
                            ],
                            class: 'input_wrap'
                        },
                        {
                            p: '＋',
                            class: 'hd hd_1 hd_0'
                        },
                        {
                            p: '−',
                            class: 'hd hd_2 hd_0'
                        },
                        {
                            section: {
                                schedule: `[[Name]]`,
                                data: _kingdoms,
                                a: {
                                    class: function (d) {
                                        return ((d.data._id == 9999) ? 'active' : '')
                                    }
                                },
                                event: {
                                    click: function (d) {
                                        if ($(d.sender).hasClass('active')) {
                                            return;
                                        }
                                        $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                                        monsterRender(d.org_data._id);
                                    }
                                }
                            },
                            id: 'kingdoms',
                            style: {
                                'margin-top': '-4px'
                            },
                            class: 'hd hd_2'
                        },
                        {
                            hr: '',
                            style: {
                                'margin-bottom': '0px'
                            }
                        },
                        {
                            div: [],
                            class: 'monster_card_area',
                            id: 'monster_card_area_1'
                        },
                        {
                            div: [],
                            class: 'monster_card_area',
                            id: 'monster_card_area_2'
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

        if (!show_sch) {
            $('.shh').hide()
        }

        monsterRender(9999)

        if (avid) tryPop(avid)

        $('body').addClass(bg_name)
        $('.hd_2').hide()

        if (!lazy) a_section_white()
    }

    function monsterRender(kid) {
        if (kid == 1000) {
            if (has_2) {
                monsterRenderAfter(kid)
            } else {
                $(".lt").show()
                var ou = setInterval(function () {
                    if (has_2) {
                        $(".lt").hide()
                        monsterRenderAfter(kid)
                        clearInterval(ou)
                    }
                }, 200)
            }
        } else {
            monsterRenderAfter(kid)
        }
    }

    function monsterRenderAfter(kid) {
        $('#monster_card_area_1').empty()
        _monsterlist.forEach(function (t_0) {
            var t = _monster[t_0]
            if (kid != 1000 && !t) return
            if (kid == 1000) {
                show = true
                if (!t) t = _monster_2[t_0]
                if (!t) return
            } else if (kid == 1001) {
                show = t.IsBug
            } else if (kid == 1002) {
                show = t.IsComplete
            } else if (kid == 1003) {
                show = t.IsIllusion
            } else if (kid == 9999) {
                show = t.New
            } else if (kid == 7000) {
                show = t._id.toString()[0] == "7"
            } else if (kid == 99) {
                show = (t.Camp == 0) && (t._id < 9999999)
            } else {
                show = (t.Camp == kid) && (t._id < 9999999)
            }
            if (show) {
                actual_render(t, '#monster_card_area_1')
            }
        })
        if (!rendered_buttoms) {
            rendered_buttoms = 1
            $('.input_wrap').render([
                {
                    span: {
                        span: _button
                    },
                    class: 'but',
                    id: 'but_1'
                },
                {
                    span: {
                        span: _button2
                    },
                    class: 'but',
                    id: 'but_2'
                }
            ])
        }
    }

    function actual_render(t, n) {
        $(n).render({
            template: {
                div: [
                    {
                        p: t.Name,
                        style: {
                            'font-weight': 'bold'
                        },
                        class: 'avatar-name'
                    },
                    {
                        img: imgpre + `images/${t.Figure}`,
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
                        div: [
                            {
                                img: function (k) {
                                    return imgpre + 'images/Element/' + k.data + '.png'
                                },
                                style: {
                                    width: '13%',
                                    'min-width': '19px',
                                    'max-width': '30px',
                                    margin: '0px 2px',
                                },
                                data: t.Weak
                            },
                            {
                                span: '<b><color style="color:#99ffff;">' + (t.Stats ? (( (t.Stats.Stance + ( t.StatsExtra ? (t.StatsExtra.Stance ? t.StatsExtra.Stance : 0) : 0 ) )  * 10).toFixed(0) + (t.StanceCount ? ('×' + t.StanceCount) : '')) : '') + '</color></b>',
                                class: 'avatar-stat',
                                style: {
                                    'margin': '0 0 0 8px',
                                    'line-height': '1',
                                    'display': 'flex',
                                    'flex-direction': 'column',
                                    'justify-content': 'center'
                                }
                            },
                        ],
                        style: {
                            display: 'flex',
                            'justify-content': 'center',
                            'flex-wrap': 'wrap',
                            'margin': '10px -10px 0px',
                        },
                    },
                    {
                        p: [
                            {
                                span: [
                                    {
                                        img: imgpre + 'images/Misc/_HP.png',
                                        class: 'avatar-staticon'
                                    },
                                    '<b><color style="color:#f29e38;">' + t.Stats.HP.toString() + '</color></b>' + ((t.HPCount && t.HPCount > 1) ? ('×' + t.HPCount) : '')
                                ],
                                class: 'avatar-stat'
                            },
                        ],
                        when: t.Stats
                    },
                ],
                class: 'avatar-card hover-shadow',
                a: {
                    'data-id': t._id
                }
            }
        })
    }

    function popMons(ind) {
        var me = _monster[ind]
        if (!me) me = _monster_2[ind]
        poplayer_([
            {
                div: {
                    section: function (k) {
                        var shown = 0
                        txt.Mon_Head.forEach(function (t, i) {
                            if (i == 1) {
                                if (me.Csxylic && lang == "CH") shown += 1
                            } else if (i == 3) {
                                if (me.Status && me.Status.length) shown += 1
                            } else {
                                shown += 1
                            }
                        })
                        if (shown < 3 && window.innerWidth > 500) shown = 3
                        txt.Mon_Head.forEach(function (t, i) {
                            $(k.container).render({
                                schedule: t[lang],
                                class: 'mon_head_option' + (i ? '' : ' active'),
                                a: {
                                    'data-id': i + 1,
                                    'data-tu': t.EN
                                },
                                event: {
                                    click: function (d) {
                                        if ($(d.sender).hasClass('active')) {
                                            return;
                                        }
                                        $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                                        poptyp = parseInt($(d.sender).attr('data-id'))
                                        if (poptyp != 2) {
                                            $('.mon_csx').hide()
                                        }
                                        if (poptyp == 1) {
                                            renderBasic(me)
                                        } else if (poptyp == 2) {
                                            $('.mon_body').empty()
                                            $('.mon_csx').show()
                                        } else if (poptyp == 3) {
                                            renderDMG()
                                        } else {
                                            //renderStatus(me.Status)
                                        }
                                    }
                                },
                                when: function () {
                                    if (i == 1) {
                                        if (me.Csxylic && lang == "CH") return true
                                        return false
                                    }
                                    if (i == 3) {
                                        if (me.Status && me.Status.length) return true
                                        return false
                                    }
                                    return true
                                },
                                style: {
                                    width: 'calc((100% - ' + (shown * 40) + 'px) / ' + shown + ')'
                                }
                            })
                        })
                    }
                },
                class: 'mon_head',
                when: 0
            },
            {
                div: '',
                class: 'mon_body'
            },
            {
                div: {
                    img: imgpre + (me.Csxylic ? ('SREnemyChart/' + me.Csxylic + '.png') : ('images/Misc/a.png')),
                    style: {
                        'max-width': '100%',
                        'max-height': '600px',
                    }
                },
                class: 'mon_csx',
                style: {
                    display: 'none',
                    'margin-top': '-20px'
                }
            }
        ], me._id)
        renderBasic(me)
        if (me.Name) switch_title(me.Name)
    }

    function renderBasic(cur_mon) {
        cm = cur_mon
        $('.mon_body').empty().render({
            template: [
                emote_block,
                {
                    div: [
                        {
                            div: cur_mon.Name,
                            class: 'a_section_head',
                            style: {
                                'text-align': 'center',
                                'padding-top': '10px'
                            }
                        },
                        {
                            div: [
                                {
                                    span: {
                                        img: function (k) {
                                            return imgpre + 'images/Element/' + k.data + '.png'
                                        },
                                        class: 'elem_',
                                        style: {
                                            'vertical-align': 'middle'
                                        },
                                        data: cur_mon.Weak
                                    },
                                    style: {
                                        display: 'flex',
                                        'flex-direction': 'row',
                                        'justify-content': 'center'
                                    }
                                },
                                {
                                    div: {
                                        img: imgpre + 'images/' + cur_mon.Figure,
                                        class: 'figure',
                                        event: {
                                            error: function (d) {
                                                $(d.sender).remove()
                                            }
                                        },
                                    },
                                    when: cur_mon.Figure != undefined,
                                    style: {
                                        display: 'flex',
                                        'flex-direction': 'row',
                                        'justify-content': 'center'
                                    }
                                },
                                {
                                    div: {
                                        img: imgpre + 'images/' + cur_mon.Icon,
                                        height: '80px',
                                        event: {
                                            error: function (d) {
                                                $(d.sender).remove()
                                            }
                                        }
                                    },
                                    when: cur_mon.Figure == undefined,
                                    style: {
                                        display: 'flex',
                                        'flex-direction': 'row',
                                        'justify-content': 'center'
                                    }
                                },
                                {
                                    p: 'ID ' + cur_mon._id,
                                    style: {
                                        'margin': '0px',
                                        'font-size': '13px',
                                        'font-weight': 'bold',
                                        'color': '#fff',
                                        'text-align': 'center'
                                    }
                                },
                                {
                                    p: cur_mon.Desc,
                                    style: {
                                        'margin': '0px',
                                        'text-align': 'center'
                                    },
                                    class: 'boss_desc'
                                },
                                {
                                    p: {
                                        CH: '<b>首次行动间隔：<color style="color:#f29e38">',
                                        EN: '<b>First Action Interval: <color style="color:#f29e38">',
                                    }[lang] + cur_mon.IAR + '%</color></b>',
                                    when: cur_mon.IAR,
                                    style: {
                                        'margin': '10px 0 0',
                                        'text-align': 'center'
                                    }
                                },
                                {
                                    div: function (k) {
                                        elemlist.forEach(function (e) {
                                            if (!cur_mon.RESBase[e]) return
                                            $(k.container).render({
                                                div: [
                                                    {
                                                        img: imgpre + 'images/Element/' + e + '.png',
                                                        class: 'statpageicon'
                                                    },
                                                    {
                                                        span: cur_mon.RESBase[e] ? (parseInt(cur_mon.RESBase[e] * 100) + '%') : '0%'
                                                    }
                                                ],
                                                class: 'weakness_single'
                                            })
                                        })
                                    },
                                    class: 'weakness',
                                    when: cur_mon.RESBase && Object.entries(cur_mon.RESBase).length,
                                    style: {
                                        'margin-top': '8px',
                                        'padding-top': '0',
                                        'padding-bottom': '0',
                                        'margin-bottom': '8px',
                                    }
                                },
                                {
                                    div: function (k) {
                                        debufflist.forEach(function (e) {
                                            if (cur_mon.DebuffRES && cur_mon.DebuffRES[e.ID]) {
                                                if (cur_mon.DebuffRES[e.ID] != 1) {
                                                    var res = parseInt(cur_mon.DebuffRES[e.ID] * 100) + '%'
                                                } else {
                                                    var res = txt.Immune[lang]
                                                }
                                                $(k.container).render({
                                                    template: {
                                                        div: [
                                                            {
                                                                img: imgpre + 'images/Debuff/' + e.Icon + '.png',
                                                                class: 'statpageicon'
                                                            },
                                                            {
                                                                span: e.Name[lang3]
                                                            },
                                                            {
                                                                span: res,
                                                                style: {
                                                                    'padding-left': '6px'
                                                                }
                                                            }
                                                        ],
                                                        class: 'weakness_single'
                                                    }
                                                })
                                            }
                                        })
                                    },
                                    when: cur_mon.DebuffRES && Object.entries(cur_mon.DebuffRES).length,
                                    class: 'weakness',
                                    style: {
                                        'margin-top': '8px',
                                        'padding-top': '0',
                                        'padding-bottom': '0',
                                        'margin-bottom': '8px',
                                    }
                                }
                            ],
                            class: 'a_section_content',
                            style: {
                                'margin-bottom': '8px',
                            }
                        },
                        {
                            div: '',
                            class: 'a_section_head basestat',
                            style: {
                                'border-top': '1px solid #eeeeee',
                                'margin-bottom': '0',
                                'padding-top': '20px',
                                'margin-top': '8px',
                            }
                        },
                        {
                            div: [
                                {
                                    div: [],
                                    class: 'base_stat_table'
                                },
                                {
                                    div: [
                                        {
                                            span: txt.BaseStatInput[1][lang] + ' : ' + _curvedescrev[lang][HLG],
                                            style: {
                                                margin: '8px 15px 0'
                                            },
                                            id: 'curve_desc'
                                        },
                                        {
                                            span: txt.BaseStatInput[2][lang] + ' : ' + EG,
                                            style: {
                                                margin: '8px 15px 0'
                                            },
                                            when: 0
                                        },
                                        {
                                            span: [
                                                (lang == 'CH') ? '血量倍数（%）：' : 'HP Multiplier (%): ',
                                                {
                                                    input: '',
                                                    a: {
                                                        type: 'text',
                                                        id: 'hp_mult',
                                                        value: parseInt(MULT * 100 * ((_elitegroup[EG] && _elitegroup[EG].HPRatio) ? _elitegroup[EG].HPRatio : 1))
                                                    },
                                                    class: 'hp_mult',
                                                },
                                            ],
                                            style: {
                                                margin: '8px 15px 0'
                                            }
                                        },
                                    ],
                                    class: 'base_stat_input'
                                },
                                {
                                    section: [
                                        {
                                            schedule: switch_hlg_text[0][lang],
                                            style: {
                                                width: 'max-content',
                                                'font-weight': 'bold',
                                                border: '2px solid #df903b',
                                                'background-color': '#27363E',
                                                'color': '#eee',
                                            },
                                            class: '__pic hover-shadow',
                                            click: function (p) {
                                                var mul_0 = parseFloat($('#hp_mult').val())
                                                if (isNaN(mul_0)) return
                                                MULT = mul_0 / 100 / ((_elitegroup[EG] && _elitegroup[EG].HPRatio) ? _elitegroup[EG].HPRatio : 1)
                                                if (switch_hlg == 0) {
                                                    switch_hlg = 1
                                                    HLG = 3
                                                } else {
                                                    switch_hlg = 0
                                                    HLG = 1
                                                }
                                                renderStat(cm)
                                                $('.__pic').html(switch_hlg_text[switch_hlg][lang])
                                            }
                                        },
                                    ],
                                    class: 'cl2',
                                },
                                {
                                    input: '',
                                    a: {
                                        type: 'hidden',
                                        value: LV
                                    },
                                    class: 'base_stat_lv'
                                },
                                {
                                    input: '',
                                    a: {
                                        type: 'hidden',
                                        value: HLG
                                    },
                                    class: 'base_stat_hlg'
                                },
                                {
                                    input: '',
                                    a: {
                                        type: 'hidden',
                                        value: EG
                                    },
                                    class: 'base_stat_eg'
                                },
                            ],
                            class: 'a_section_content',
                            style: {
                                'margin-top': '0',
                            }
                        }
                    ],
                    class: 'a_section'
                },
            ]
        })
        renderStat(cur_mon)
        if (m_s) renderSkill(cur_mon)
    }

    function renderSkill(cur_mon) {
        var already_ee = []
        $('.mon_body').render({
            template: {
                div: '',
                class: 'mon_body_'
            }
        })
        $('.mon_body_').empty().render(emote_block)
        if (IS_DMG) {
            $('.mon_body_').render({
                p: txt.MonLV[lang] + LV + '&nbsp;&nbsp;&nbsp;&nbsp;' + txt.AvatarDEF[lang] + DEF,
                class: 'dmg_show',
                style: { display: 'none' }
            })
        }
        var first_7 = cur_mon._id.toString().substring(0, 7)
        if (first_7 in _bossguide) {
            var boss_notes = []
            _bossguide[first_7].Notes.forEach(function (note) {
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
            $('.mon_body_').render({
                div: [
                    {
                        div: (lang == 'CH') ? '妮可少女的怪物解析' : 'HomDGCat\'s Boss Guide',
                        class: 'a_section_head'
                    },
                    {
                        div: boss_notes,
                        class: 'a_section_content',
                        style: {
                            'margin-top': '-10px',
                            'margin-bottom': '5px',
                        }
                    },
                ],
                class: 'a_section'
            })
        }
        if (cur_mon.Su && cur_mon.Su.length) {
            $('.mon_body_').render({
                div: [
                    {
                        div: (lang == 'CH') ? '召唤物' : 'Summons',
                        class: 'a_section_head'
                    },
                    {
                        div: [],
                        class: 'a_section_content summon_wrap',
                        style: {
                            display: 'flex',
                            'flex-wrap': 'wrap'
                        }
                    },
                ],
                class: 'a_section'
            })
            cur_mon.Su.forEach(function (smid) {
                var sm_mon = _monster[smid]
                if (!sm_mon) {
                    if (has_2) {
                        sm_mon = _monster_2[smid]
                        render_summon(smid, sm_mon)
                    } else {
                        var summon_interval = setInterval(function () {
                            if (has_2) {
                                sm_mon = _monster_2[smid]
                                render_summon(smid, sm_mon)
                                refresh_summon()
                                clearInterval(summon_interval)
                            }
                        }, 200)
                    }
                } else {
                    render_summon(smid, sm_mon)
                }
            })
        }
        var sk = cur_mon.Skills
        sk.forEach(function (skid) {
            var skill = _monsterskill[skid]
            //if (!skill.Name.length) return
            $('.mon_body_').render({
                template: {
                    div: [
                        {
                            div: [
                                (skill.Threat ? "<color style='color:#f29e38;font-weight:normal;'>⚠ </color>" : '') + skill.Name,
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/AddProp/IconEnergyRecovery.png',
                                            style: {
                                                width: '26px',
                                                position: 'relative',
                                                top: '-2px'
                                            }
                                        },
                                        {
                                            span: '+' + (skill.SP ? skill.SP : 0).toFixed(0),
                                            style: {
                                                'font-size': '14px',
                                                color: '#fff',
                                                'font-weight': 'normal',
                                                float: 'right',
                                                'margin-left': '0px',
                                                'margin-right': '0px',
                                            },
                                        }
                                    ],
                                    style: {
                                        'margin-left': '10px',
                                        'margin-right': '5px',
                                        'margin-top': '3px',
                                        'margin-bottom': '-10px',
                                        float: 'right'
                                    },
                                    when: skill.SP
                                }
                            ],
                            class: 'a_section_head'
                        },
                        {
                            div: [
                                {
                                    p: txt.Phase[lang3] + skill.P,
                                    class: 'phase',
                                    when: (((cur_mon.HPCount && (cur_mon.HPCount > 1)) || cur_mon.ForceShowSkillPhase) && skill.P && skill.P.length)
                                },
                                {
                                    p: skill.DelayRatio ? (DelayRatioText[lang] + '<color style="color:#ffcc44">' + (skill.DelayRatio * 100).toFixed(0) + '%</color>') : '',
                                    class: 'phase',
                                    when: skill.DelayRatio
                                },
                                {
                                    div: function () {
                                        var COL = elemcolor[skill.Elem]
                                        var dmg = skill.DMG ? skill.DMG : []
                                        var sss = skill.S ? skill.S : []
                                        if (dmg[0] != null) {
                                            var v1 = dmg[0]
                                        } else {
                                            var v1 = sss[0] ? sss[0] : 0
                                        }
                                        if (dmg[1] != null) {
                                            var v2 = dmg[1]
                                        } else {
                                            var v2 = sss[1] ? sss[1] : 0
                                        }
                                        if (dmg[2] != null) {
                                            var v3 = dmg[2]
                                        } else {
                                            var v3 = sss[2] ? sss[2] : 0
                                        }
                                        if (dmg[3] != null) {
                                            var v4 = dmg[3]
                                        } else {
                                            var v4 = sss[3] ? sss[3] : 0
                                        }
                                        if (dmg[4] != null) {
                                            var v5 = dmg[4]
                                        } else {
                                            var v5 = sss[4] ? sss[4] : 0
                                        }
                                        var vlist = [v1, v2, v3, v4, v5]
                                        if (IS_DMG) {
                                            var ignoredef = skill.DEFIgnore ? skill.DEFIgnore : 0
                                            var defcoeff = (10 * LV + 200) / (10 * LV + 200 + (1 - ignoredef) * DEF)
                                            var atk = cur_mon.Stats.ATK * _elitegroup[EG].AttackRatio * _hardlevelgroup[HLG][LV - 1].ATK + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.ATK ? cur_mon.StatsExtra.ATK : 0) : 0)
                                            var s1 = '<color style="color:#' + COL +  ';"><b>' + Math.floor(v1 * atk * defcoeff) + '</b></color>'
                                            var s2 = '<color style="color:#' + COL +  ';"><b>' + Math.floor(v2 * atk * defcoeff) + '</b></color>'
                                            var s3 = '<color style="color:#' + COL +  ';"><b>' + Math.floor(v3 * atk * defcoeff) + '</b></color>'
                                            var s4 = '<color style="color:#' + COL +  ';"><b>' + Math.floor(v4 * atk * defcoeff) + '</b></color>'
                                            var s5 = '<color style="color:#' + COL +  ';"><b>' + Math.floor(v5 * atk * defcoeff) + '</b></color>'
                                        } else {
                                            var s1 = '<color style="color:#' + COL +  ';"><b>' + (v1 * 100).toFixed(1).replace('.0', '') + '%</b></color>'
                                            var s2 = '<color style="color:#' + COL +  ';"><b>' + (v2 * 100).toFixed(1).replace('.0', '') + '%</b></color>'
                                            var s3 = '<color style="color:#' + COL +  ';"><b>' + (v3 * 100).toFixed(1).replace('.0', '') + '%</b></color>'
                                            var s4 = '<color style="color:#' + COL +  ';"><b>' + (v4 * 100).toFixed(1).replace('.0', '') + '%</b></color>'
                                            var s5 = '<color style="color:#' + COL +  ';"><b>' + (v5 * 100).toFixed(1).replace('.0', '') + '%</b></color>'
                                        }
                                        var pre = skill.Desc
                                        pre = pre.replaceAll('#1[i]', '$1$').replaceAll('#1[p]', '$1p$').replaceAll('#2[i]', '$2$').replaceAll('#2[p]', '$2p$').replaceAll('#3[i]', '$3$').replaceAll('#3[p]', '$3p$').replaceAll('#6[i]', '$6$').replaceAll('#4[p]', '$4p$').replaceAll('#4[i]', '$4$').replaceAll('#5[p]', '$5p$').replaceAll('#5[i]', '$5$').replaceAll('#6[p]', '$6p$')
                                        pre = pre.replaceAll("#", "</color>").replaceAll("@", "<color style='color:#ffcc44;'>").replaceAll("``", "<b>").replaceAll("`", "</b>").replaceAll("\n", "<br>").replaceAll("<br><br>", '<p style="height:0.7em;width:100%;margin:0;"> </p>')
                                        pre = pre.replaceAll('<1>', s1).replaceAll('<2>', s2).replaceAll('<3>', s3).replaceAll('<4>', s4).replaceAll('<5>', s5)

                                        

                                        //pre = pre.replaceAll('$1$', irnd(v1)).replaceAll('$2$', irnd(v2)).replaceAll('$3$', irnd(v3)).replaceAll('$4$', irnd(v4)).replaceAll('$5$', irnd(v5))
                                        //pre = pre.replaceAll('$1p$', prnd(v1)).replaceAll('$2p$', prnd(v2)).replaceAll('$3p$', prnd(v3)).replaceAll('$4p$', prnd(v4)).replaceAll('$5p$', prnd(v5))
                                        while (pre.includes('$')) {
                                            var start = pre.indexOf('$')
                                            var end = start + 1 + pre.substring(start + 1).indexOf('$')
                                            var separate = pre.substring(start, end).indexOf('*')
                                            if (separate == -1) {
                                                separate = pre.substring(start, end).indexOf('/')
                                                if (separate == -1) {
                                                    var coeff = 1
                                                    var param_index = pre.substring(start + 1, end)
                                                } else {
                                                    var coeff = 1 / parseFloat(pre.substring(start + separate + 1, end))
                                                    var param_index = pre.substring(start + 1, start + separate)
                                                }
                                            } else {
                                                var coeff = parseFloat(pre.substring(start + separate + 1, end))
                                                var param_index = pre.substring(start + 1, start + separate)
                                            }
                                            if (param_index.includes('p')) {
                                                var param_ = prnd(vlist[parseInt(param_index.replace('p', '')) - 1] * coeff * 100)
                                            } else {
                                                var param_ = irnd(vlist[parseInt(param_index) - 1] * coeff)
                                            }
                                            pre = pre.replaceAll(pre.substring(start, end + 1), param_)
                                        }
                                        if (skill.EX && Object.entries(skill.EX).length) {
                                            var param_desc = []
                                            for (const [w, q] of Object.entries(skill.EX)) {
                                                var num = skill.S[parseInt(w) - 1]
                                                if (q.I) {
                                                    param_desc.push(q.X + ' <b>' + irnd(num) + '</b>')
                                                } else {
                                                    param_desc.push(q.X + ' <b>' + prnd(num * 100) + '</b>')
                                                }
                                            }
                                            pre += '<br>• ' + param_desc.join('<br>• ')
                                        }
                                        if (skill.EE && skill.EE.length) {
                                            if (skill.NEE && (lang3 == 'CH' || lang3 == 'EN')) {
                                                return pre
                                            } else {
                                                skill.EE.forEach(function (u) {
                                                    if (already_ee.includes(u)) return
                                                    already_ee.push(u)
                                                    pre += '<p style="height:0.7em;width:100%;margin:0;"> </p><b><color style="color:#;">' + _ee[u].N + '</color></b><br>' + _ee[u].D
                                                })
                                                return pre
                                            }
                                        } else {
                                            return pre
                                        }
                                    },
                                    style: {
                                        'margin': '0'
                                    },
                                    class: 'boss_desc'
                                },
                                {
                                    p: '[ ' + (skill.S ? ((skill.S.toString() + ' ').replaceAll(",", " , ").replaceAll(".0 ", " ")) : "") + ' ]<br>' + skill.K,
                                    class: 'phase',
                                    //when: (skill.S != undefined) && skill.S.length && !skill.Desc.includes("<1>") && !skill.Desc.includes("@") && !skill.Desc.includes("`") && !skill.Desc.includes("$"),
                                    when: (skill.S != undefined) && skill.S.length,
                                    style: {
                                        'margin-top': '5px',
                                        'margin-bottom': '0px'
                                    }
                                },
                            ],
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section_skill'
                }
            })
        })
        //renderStatus(cur_mon.Status)
        rotate()
        refresh_summon()
        console.log("FINISH")
    }

    function render_summon(smid, sm_mon) {
        if (!sm_mon) return
        $('.summon_wrap').render({
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
                        'justify-content': 'center'
                    }
                },
                {
                    div: '',
                    class: 'summon_elem',
                    a: {
                        'data-id': smid
                    }
                },
                {
                    p: '',
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
        })
    }

    function refresh_summon() {
        $('.summon_panel').each(function(i, obj) {

            var sm_mon = _monster[$(this).attr('data-id')]
            if (!sm_mon) sm_mon = _monster_2[$(this).attr('data-id')]

            var _eg = _elitegroup[EG]
            var _hlg = _hardlevelgroup[HLG][LV - 1]
            if (!_hlg) return
            var _hp = sm_mon.Stats.HP * _hlg.HP * _eg.HPRatio * MULT + (sm_mon.StatsExtra ? (sm_mon.StatsExtra.HP ? sm_mon.StatsExtra.HP : 0) : 0)
            var _stance = 10 * sm_mon.Stats.Stance * _hlg.Stance * _eg.StanceRatio + (sm_mon.StatsExtra ? (sm_mon.StatsExtra.Stance ? (sm_mon.StatsExtra.Stance * 10) : 0) : 0)

            var s = '<color style="color:#f29e38">' + _hp.toFixed(0) + '</color>'
            if (sm_mon.HPCount && sm_mon.HPCount > 1) {
                s += ' ×' + sm_mon.HPCount
            }

            var st = _stance.toFixed(0) + (sm_mon.StanceCount ? ('×' + sm_mon.StanceCount) : '')

            $(this).find('.summon_elem').empty()
            $(this).find('.summon_name').empty()
            
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
            $(this).find('.summon_elem').render({
                template: summon_elem_contents.concat({
                    span: st,
                    style: {
                        'margin-left': '7px'
                    },
                    class: 'summon_elem_span'
                }),
            })
            $(this).find('.summon_name').html(s)

        })
    }

    function renderDMG() {
        $('.mon_body').empty().render({
            template: [
                {
                    div: [
                        {
                            p: txt.MonsterDMG[0][lang]
                        },
                        {
                            input: '',
                            a: {
                                type: 'number',
                                placeholder: '1~100',
                                value: LV
                            },
                            class: 'input_lv'
                        }
                    ],
                    class: 'DMG_input'
                },
                {
                    div: [
                        {
                            p: txt.MonsterDMG[1][lang]
                        },
                        {
                            input: '',
                            a: {
                                type: 'number',
                                value: DEF
                            },
                            class: 'input_def'
                        }
                    ],
                    class: 'DMG_input'
                },
                {
                    div: [
                        {
                            p: txt.MonsterDMG[2][lang]
                        },
                        {
                            select: '',
                            options: _curvedesc[lang],
                            class: 'input_hlg',
                            value: HLG
                        }
                    ],
                    class: 'DMG_input'
                },
                {
                    div: [
                        {
                            p: txt.MonsterDMG[3][lang]
                        },
                        {
                            input: '',
                            a: {
                                type: 'number',
                                value: EG
                            },
                            class: 'input_eg'
                        }
                    ],
                    class: 'DMG_input'
                },
                {
                    div: {
                        button: txt.MonsterDMG_CTRL[0][lang],
                        class: 'input_calc'
                    },
                    class: 'DMG_input'
                },
                {
                    div: {
                        button: txt.MonsterDMG_CTRL[1][lang],
                        class: 'input_reset'
                    },
                    class: 'DMG_input'
                },
                {
                    div: [
                        {
                            p: txt.MonsterDEF[0][lang],
                            style: {
                                width: '100%',
                                'text-align': 'center'
                            }
                        },
                        {
                            img: imgpre + 'images/Misc/DEF_HSR.png',
                            style: {
                                width: '100%',
                                'max-width': '500px'
                            }
                        }
                    ],
                    class: 'DMG_Tut'
                },
                {
                    div: [
                        {
                            p: txt.MonsterDEF[1][lang],
                            style: {
                                width: '100%',
                                'text-align': 'center'
                            }
                        },
                        {
                            img: imgpre + 'images/Misc/DEF_GI.png',
                            style: {
                                width: '100%',
                                'max-width': '500px'
                            }
                        }
                    ],
                    class: 'DMG_Tut'
                }
            ]
        })
    }

    function renderStat(cur_mon) {
        if (!cur_mon) return
        if (!cur_mon.Stats) return
        //getStats2()
        $('#curve_desc').html(txt.BaseStatInput[1][lang] + ' : ' + _curvedescrev[lang][HLG])
        $('.basestat').empty().render([
            {
                span: {
                    span: '▲',
                    style: {
                        'font-size': '16px',
                        'line-height': '24px'
                    }
                },
                class: 'up',
            },
            {
                div: {
                    span: 'Lv' + LV,
                },
                style: {
                    margin: '0',
                    display: 'flex',
                    'flex-direction': 'column',
                    'justify-content': 'center'
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
            },
        ])
        var _eg = _elitegroup[EG]
        var _hlg = _hardlevelgroup[HLG][LV - 1]
        if (!_hlg) return
        var _hp = cur_mon.Stats.HP * _hlg.HP * _eg.HPRatio * MULT + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.HP ? cur_mon.StatsExtra.HP : 0) : 0)
        var _atk = cur_mon.Stats.ATK * _hlg.ATK * _eg.AttackRatio + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.ATK ? cur_mon.StatsExtra.ATK : 0) : 0)
        var _def = cur_mon.Stats.DEF * _hlg.DEF * _eg.DefenceRatio + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.DEF ? cur_mon.StatsExtra.DEF : 0) : 0)
        var _spd = cur_mon.Stats.SPD * _hlg.SPD * _eg.SpeedRatio + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.SPD ? cur_mon.StatsExtra.SPD : 0) : 0)
        var _stance = 10 * cur_mon.Stats.Stance * _hlg.Stance * _eg.StanceRatio + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.Stance ? (cur_mon.StatsExtra.Stance * 10) : 0) : 0)
        var _res = _hlg.StatusRES + cur_mon.StatusRESBase
        var _prob = _hlg.StatusProb
        $('.base_stat_table').empty().render({
            template: [
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconMaxHP.png',
                            class: 'statpageicon'
                        },
                        {
                            span: function () {
                                var s = '<color style="color:#f29e38">' + _hp.toFixed(0) + '</color>'
                                if (cur_mon.HPCount && cur_mon.HPCount > 1) {
                                    s += ' ×' + cur_mon.HPCount
                                }
                                return s
                            },
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: function (k) {
                                return imgpre + 'images/Element/' + k.data + '.png'
                            },
                            class: 'statpageicon',
                            data: cur_mon.Weak,
                            style: {
                                margin: '0'
                            }
                        },
                        {
                            span: _stance.toFixed(0) + (cur_mon.StanceCount ? ('×' + cur_mon.StanceCount) : ''),
                            class: 'stat_num',
                            style: {
                                'margin-left': '7px'
                            }
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconSpeed.png',
                            class: 'statpageicon'
                        },
                        {
                            span: _spd.toFixed(2),
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconStatusResistance.png',
                            class: 'statpageicon'
                        },
                        {
                            span: (_res * 100).toFixed(1) + '%',
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconStatusProbability.png',
                            class: 'statpageicon'
                        },
                        {
                            span: (_prob * 100).toFixed(1) + '%',
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconDefence.png',
                            class: 'statpageicon'
                        },
                        {
                            span: _def.toFixed(0),
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconAttack.png',
                            class: 'statpageicon'
                        },
                        {
                            span: _atk.toFixed(0),
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
            ]
        })
        refresh_summon()
    }

    function getStats1() {
        LV = parseInt($('.input_lv').val())
        DEF = parseInt($('.input_def').val())
        HLG = parseInt($('.input_hlg').val())
        EG = parseInt($('.input_eg').val())
        refreshStats()
        $('.input_lv').val(LV)
        $('.input_def').val(DEF)
        $('.input_hlg').val(HLG)
        $('.input_eg').val(EG)
    }

    function getStats2() {
        LV = parseInt($('.base_stat_lv').val())
        HLG = parseInt($('.base_stat_hlg').val())
        EG = parseInt($('.base_stat_eg').val())
        refreshStats()
        $('.base_stat_lv').val(LV)
        $('.base_stat_hlg').val(HLG)
        $('.base_stat_eg').val(EG)
    }

    function refreshStats() {
        if (!_elitegroup[EG]) { EG = 1 }
        if (!_hardlevelgroup[HLG]) { HLG = 1 }
        if (!_hardlevelgroup[HLG][LV - 1]) { LV = _hardlevelgroup[HLG].length }
    }

    $('body').on('click', '#but_1', function () {

        var search = $('#INPUT').val()
        if (!search) return

        $('#monster_card_area_1').hide()
        $('#monster_card_area_2').empty()
        $('#kingdoms').hide()
        var results = []
        _monsterlist.forEach(function (t_0) {
            var t = _monster[t_0]
            if (!t) t = _monster_2[t_0]
            if (!t) return
            if (results.length < 100) {
                if (t.Name.includes(search)) {
                    results.push(t)
                }
                if (t_0.toString().includes(search)) {
                    results.push(t)
                }
            }
        })
        results.sort((a, b) => a._id - b._id)
        for (const t of results) {
            actual_render(t, '#monster_card_area_2')
        }

        $('#monster_card_area_2').show()

    })

    $('body').on('click', '#but_2', function () {

        $('#monster_card_area_1').show()
        $('#monster_card_area_2').hide()
        $('#kingdoms').show()
        $('#INPUT').val('')

    })

    $('body').on('click', '.up', function () {
        if (LV == 100) LV = 120
        else if (LV == 120) {}
        else LV++
        $('.base_stat_lv').val(LV)
        renderStat(cm)
    })

    $('body').on('click', '.down', function () {
        if (LV == 120) LV = 100
        else LV--
        $('.base_stat_lv').val(LV)
        renderStat(cm)
    })

    $('body').on('change', '', function () {
        renderStat(cm)
    })

    $('body').on('click', '.input_calc', function () {
        IS_DMG = 1
        getStats1()
        $(".mon_head_option[data-tu='Enemy']").click()
        $('popbody').scrollTop($('.basestat')[0].offsetTop - 80)
        refresh_summon()
    })

    $('body').on('click', '.input_reset', function () {
        IS_DMG = 0
        $(".mon_head_option[data-tu='Enemy']").click()
        refresh_summon()
    })

    $('body').on('click', '.avatar-card', function () {
        popMons(parseInt($(this).attr('data-id')))
    })

    $('body').on('click', '.toggle', function () {
        show_sch = 1 - show_sch
        if (show_sch) {
            $('.shh').show()
        } else {
            $('.shh').hide()
        }
    })

    function renderStatus(L) {
        if (!L) return
        if (!L.length) return
        $('.mon_body').render({
            hr: '',
            style: {
                margin: '0 0 15px',
                width: '100%',
                height: '1px',
                'background-color': 'black'
            }
        })
        L.forEach(function (skid) {
            var status = _status[skid]
            var typedesc = "<span style='font-size:14px;color:#fff;font-weight:bold;margin-left:10px;margin-right:5px;float:right;'>" + (status.Type ? ((status.Type == "Buff") ? txt.StatusType.Buff[lang] : txt.StatusType.Debuff[lang]) : txt.StatusType.Other[lang]) + "</span>"
            $('.mon_body').render({
                template: {
                    div: [
                        {
                            div: status.Name + typedesc,
                            class: 'a_section_head'
                        },
                        {
                            div: [
                                {
                                    span: txt.CanNotDispel[lang] + '<br>',
                                    when: function () {
                                        return status.CanNotDispel
                                    },
                                    style: {
                                        color: '#ffc870',
                                    }
                                },
                                {
                                    span: status.Desc
                                }
                            ],
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section_small'
                }
            })
        })
    }

    function tryPop(monid) {
        if (_monster[monid]) {
            popMons(monid)
            return
        } else if (!_monsterlist.includes(parseInt(monid))) {
            return
        } else {
            if (has_2) {
                popMons(monid)
                return
            }
            $('.lt').show()
            var pu = setInterval(function () {
                if (has_2) {
                    $('.lt').hide()
                    clearInterval(pu)
                    popMons(monid)
                }
            }, 200)
        }
    }

    function rnd(x) {
        var y = x.toFixed(5)
        while (y.slice(-1) == "0") {
            y = y.slice(0, -1)
        }
        if (y.slice(-1) == ".") {
            y = y.slice(0, -1)
        }
        return y
    }

    function irnd(x) {
        return "<color style='color:#ffcc44;'>" + rnd(x) + "</color>"
    }

    function prnd(x) {
        return "<color style='color:#ffcc44;'>" + rnd(x) + "%</color>"
    }

    function poplayer_(T, h) {
        cur_coordinate = $('container').scrollTop()
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
        $('.area_2').empty().hide()
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

    $('body').on('click', '.keq_emote_div', function () {
        rotate()
    })

    $('body').on('click', '.hd_0', function () {
        $('.hd').toggle()
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

})