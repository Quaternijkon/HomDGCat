$(function () {

    var imgpre = $('#IMGPRE').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'

    init_title((lang == 'CH' ? '战斗关卡' : 'Combat Levels') + ' ' + txt.PAGE_TITLE[lang])

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

    var tip = {
        CH: "输入战斗关卡的 <b>ID</b> 查询其分波、站位、敌方生命值、韧性、速度、弱点属性等<br>例如，ID <b>30112121</b> 是3.1混沌回忆12层上半",
        EN: "Enter the <b>ID</b> to a combat level to query its waves, enemy positions and the HP, Weaknesses, Toughness and SPD of each enemy.<br>For example, ID <b>30112121</b> is 3.1 MoC F12 1st half.",
    }

    var loading = {
        CH: "加载中",
        EN: "Loading"
    }

    begin()

    var count = 0

    let script_computer = document.createElement('script')
    script_computer.src = '/data/Stage.js'
    document.head.append(script_computer)
    script_computer.onload = begin_2

    let script_computer_2 = document.createElement('script')
    script_computer_2.src = '/data/' + lang3 + '/Monster_1.js'
    document.head.append(script_computer_2)
    script_computer_2.onload = begin_2

    let script_computer_3 = document.createElement('script')
    script_computer_3.src = '/data/' + lang3 + '/Monster_2.js'
    document.head.append(script_computer_3)
    script_computer_3.onload = begin_2

    function begin() {

        $('container').render({
            template: {
                div: [
                    {
                        p: (lang == 'CH' ? '战斗关卡' : 'Combat Levels'),
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
                        p: loading[lang],
                        class: 'avd tip2 loading',
                        style: {
                            margin: '18px 8px 14px',
                            'font-weight': 'normal',
                            'text-align': 'center',
                            'line-height': '1.5'
                        }
                    },
                ],
                class: 'content'
            }
        })

        $('body').addClass(bg_name)

    }

    function begin_2() {
        count++
        if (count == 3) {
            _monster = {..._monster, ..._monster_2}
            $('.loading').hide()
            $('.content').render({
                div: [
                    {
                        input: '',
                        a: {
                            type: 'text',
                            id: 'INPUT'
                        },
                    },
                    {
                        span: {
                            span: (lang == 'CH') ? '查询' : 'Search'
                        },
                        class: 'but'
                    }
                ],
                class: 'input_wrap'
            })
            $('.content').render({
                div: '',
                class: 'result'
            })
        }
    }

    $('body').on('click', '.but', Stage)

    function Stage() {
        var stage_id = $('#INPUT').val().replaceAll(' ', '')
        if (!_stage[stage_id]) {
            $('.result').empty()
            return
        }
        var l = _stage[stage_id]
        var waves = []
        l.Mons.forEach(function (w, i) {
            waves.push(Wave(i, w, l.Level, l.HLG, _elitegroup[l.EG]))
        })
        var temp = {
            div: [
                {
                    p: 'ID <color style="color:#2545ba">' + stage_id + '</color><br>Level <color style="color:#ff0000">' + l.Level + '</color><br>HardLevelGroup <color style="color:#ff0000">' + (l.HLG ? l.HLG : '1') + '</color><br>EliteGroup <color style="color:#ff0000">' + l.EG + '</color>',
                    class: '',
                    style: {
                        'text-align': 'center',
                        'font-weight': 'bold',
                        'margin-top': '24px',
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
        $('.result').empty().render(temp)
    }

    function Wave(i, w, stage_lv, show_hlg, stage_eg) {
        if (!show_hlg) show_hlg = 1
        var stage_hlg = _hardlevelgroup[show_hlg]
        if (!stage_eg) stage_eg = _elitegroup['1']
        var monsters = []
        w.forEach(function (t) {
            var me = _monster[t]
            
            // Stance
            var t_stance = me.Stats.Stance * stage_eg.StanceRatio * stage_hlg[stage_lv - 1].Stance
            if (me.StatsExtra && me.StatsExtra.Stance) t_stance += me.StatsExtra.Stance

            var t_hp = me.Stats.HP * stage_eg.HPRatio * stage_hlg[stage_lv - 1].HP
            if (me.StatsExtra && me.StatsExtra.HP) t_hp += me.StatsExtra.HP

            var t_spd = me.Stats.SPD * stage_eg.SpeedRatio * stage_hlg[stage_lv - 1].SPD
            if (me.StatsExtra && me.StatsExtra.SPD) t_spd += me.StatsExtra.SPD

            monsters.push({
                span: [
                    {
                        div: [
                            {
                                img: '/images/' + me.Figure,
                                class: 'monicon hasimg',
                                event: {
                                    load: function (d) {
                                        $(d.sender).siblings('.monnameload').hide()
                                    },
                                    error: function (d) {
                                        $(d.sender).css("opacity", "0")
                                        $(d.sender).removeClass('hasimg')
                                        $(d.sender).siblings('.hasimgname').removeClass('hasimgname')
                                        $(d.sender).parent().addClass('monicon')
                                    },
                                },
                                a: {
                                    loading: lazy
                                }
                            },
                            {
                                div: {
                                    p: me.Name
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
                                    data: me.Weak,
                                    a: {
                                        loading: lazy
                                    }
                                },
                                class: 'monelem'
                            },
                            {
                                span: showstance(t_stance) + (me.StanceCount ? ('×' + me.StanceCount) : ''),
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
                        when: t_stance
                    },
                    {
                        div: [
                            {
                                span: function () {
                                    var s = '<b><color style="color:#cc0000;">' + t_hp.toFixed(0) + '</color></b>'
                                    if (me.HPCount && me.HPCount > 1) {
                                        s += '<b>×' + me.HPCount + '</b>'
                                    }
                                    return s
                                },
                                class: 'monname',
                                when: t_hp
                            },
                            {
                                br: '',
                                when: t_hp && t_spd
                            },
                            {
                                span: '<b><color style="color:#2545ba;">' + t_spd.toFixed(0) + '</color></b>',
                                class: 'monname',
                                when: t_spd
                            },
                        ],
                        class: 'monright',
                        style: {
                            'margin-top': t_stance ? '' : '0px'
                        }
                    },
                ],
                class: 'monster_card hover-shadow',
                a: {
                    'data-id': t,
                    'data-lv': stage_lv,
                    'data-hl': show_hlg ? show_hlg : 1,
                    'data-eg': stage_eg ? stage_eg.EliteGroup : 1
                }
            })
        })
        var temp = {
            div: [
                {
                    p: txt.Wave[i][lang],
                    class: 'wave_name'
                },
                {
                    div: monsters,
                    class: 'wave_monsters'
                },
            ],
            class: 'wave_wrap'
        }
        return temp
    }

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

})