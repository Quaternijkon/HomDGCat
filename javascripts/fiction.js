$(function () {

    var imgpre = $('#IMGPRE').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'

    init_title(txt.N_F[lang3] + ' ' + txt.PAGE_TITLE[lang])

    if (lang == 'EN') {$('body').css('font-family', "'Segoe UI', sans-serif")}
    else {$('body').css('font-family', "'Microsoft YaHei', sans-serif")}

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

    var EG = 1
    var HLG = 1
    var DEF = 2000
    var LV = 95
    //refreshStats()
    var IS_DMG = 1
    var cm = {}
    var HIDE_SHOW = 0

    var has_2 = 0

    var HP_Calculation = {
        CH: '下方血量曲线的血量算法中<br>两种小怪和首领的血量比重为 40%+40%+20%',
        EN: 'Ratio of contribution in the chart below<br>Minion A 40% | Minion B 40% | Boss 20%',
    }

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang3 + '/Fiction_1.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        let script_computer_2 = document.createElement('script')
        script_computer_2.src = '/data/' + lang3 + '/Fiction_2.js'
        document.head.append(script_computer_2)
        script_computer_2.onload = function () {
            has_2 = 1
            _fiction = _fiction.concat(_fiction_2)
        }

        max_index = _fictionschedule.length
        cur_index = _fictiondict[$('#CID').val()]
        if (!cur_index) cur_index = 0

        cur_floor = $('#FID').val() ? (parseInt($('#FID').val()) - 1) : -1
        cur_floor_data = 0

        $('container').render({
            template: {
                div: [
                    {
                        p: txt.N_F[lang3],
                        style: {
                            'text-align': 'center',
                            'font-weight': 'bold',
                            'font-size': '1.6em',
                            'margin-bottom': '-10px',
                            'margin-top': '15px',
                        }
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
                                class: 'ver_text hover-shadow',
                            },
                            {
                                div: '▷',
                                class: 'v_r'
                            }
                        ],
                        class: 'ver under'
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
                        ],
                        class: 'button_w'
                    },
                    {
                        div: [
                            {
                                div: '◁',
                                class: 'f_l'
                            },
                            {
                                div: '',
                                class: 'f_text'
                            },
                            {
                                div: '▷',
                                class: 'f_r'
                            }
                        ],
                        class: 'floor_select under'
                    },
                    {
                        div: [
                            {
                                div: [
                                    {
                                        p: '',
                                        class: 'buff_name'
                                    },
                                    {
                                        p: '',
                                        class: 'buff_desc'
                                    }
                                ],
                                class: 'buff'
                            },
                            {
                                div: [
                                    {
                                        p: '',
                                        class: 'target_c'
                                    },
                                    {
                                        div: '',
                                        class: 'target_t'
                                    }
                                ],
                                class: 'target'
                            },
                        ],
                        class: 'info_area'
                    },
                    {
                        div: [
                            
                        ],
                        class: 'smallbuff_wrap small_2'
                    },
                    {
                        div: [
                            
                        ],
                        class: 'smallbuff_wrap small_1'
                    },
                    {
                        div: [
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'u_r'
                                    },
                                    {
                                        div: '',
                                        class: 'u_m'
                                    }
                                ],
                                class: 'u'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'l_r'
                                    },
                                    {
                                        div: '',
                                        class: 'l_m'
                                    }
                                ],
                                class: 'l'
                            }
                        ],
                        class: 'u_l'
                    },
                    {
                        p: HP_Calculation[lang],
                        style: {
                            'text-align': 'center',
                            'font-size': '0.8em',
                            'line-height': '1.8',
                            'margin-top': '15px',
                            'margin-bottom': '-25px'
                        },
                        class: 'hpc'
                    },
                    {
                        div: {
                            div: '',
                            id: 'chart',
                        },
                        class: 'chart_container'
                    },
                ],
                class: 'content'
            }
        })

        writeVer()

        $('body').addClass(bg_name)
    }

    $('body').on('click', '.ver_text', function () {
        var pop = poplayer({
            header: '',
            width: '95%',
            template: [
                {
                    div: function (k) {
                        _fictionschedule.forEach(function (t, i) {
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
                        _fictionschedule.forEach(function (t, i) {
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

    function writeVer() {
        if (mod(cur_index, max_index) < 4) {
            writeVerAfter()
        } else {
            if (has_2) {
                writeVerAfter()
                return
            }
            $('.lt').show()
            var ou = setInterval(function () {
                if (has_2) {
                    $('.lt').hide()
                    writeVerAfter()
                    clearInterval(ou)
                }
            }, 200)
        }
    }

    function writeVerAfter() {
        switch_title(_fictionschedule[mod(cur_index, max_index)].Name)
        cur_schedule_ver = _fictionschedule[mod(cur_index, max_index)]._id
        $('.ver_text_name').html(_fictionschedule[mod(cur_index, max_index)].Name)
        $('.ver_text_time').html(_fictionschedule[mod(cur_index, max_index)].Time)
        writeData()
    }

    function writeData() {
        cur_floor_data = lm(_fiction[mod(cur_index, max_index)].Floors, cur_floor)
        $('.f_text').html(cur_floor_data.Floor)
        $('.smallbuff_wrap').empty()

        if (!_fiction[mod(cur_index, max_index)].BST) {
            $('.info_area').show()
            var buff = _fiction[mod(cur_index, max_index)].Blessing
            if (!buff) buff = cur_floor_data.Blessing
            $('.buff_name').html(buff.Name)
            $('.buff_desc').html(buff.Desc)
            $('.small_2').hide()
        } else {
            $('.info_area').hide()
            $('.small_2').show()
            _fiction[mod(cur_index, max_index)].Blessing.forEach(function (j) {
                $('.small_2').render({
                    template: {
                        div: [
                            {
                                p: j.Name + '<br>' + j._id,
                                class: 'smallbuff_name'
                            },
                            {
                                p: j.Desc,
                                class: 'smallbuff_desc'
                            }
                        ],
                        class: 'smallbuff'
                    }
                })
            })
        }
        
        _fiction[mod(cur_index, max_index)].Buffs.forEach(function (j) {
            $('.small_1').render({
                template: {
                    div: [
                        {
                            p: j.Name + '<br>' + j._id,
                            class: 'smallbuff_name'
                        },
                        {
                            p: j.Desc,
                            class: 'smallbuff_desc'
                        },
                        {
                            p: j.SimpleDesc,
                            class: 'smallbuff_desc',
                            when: j.SimpleDesc != undefined
                        }
                    ],
                    class: 'smallbuff'
                }
            })
        })
        $('.target_c').html(txt.Cycle55[lang].replaceAll("#", cur_floor_data.T))
        $('.target_t').empty().render({
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
            data: cur_floor_data.Targets
        })
        var _lv = cur_floor_data.Upper[0].Level
        $('.u_r').empty().render({
            template: [
                {
                    div: [
                        {
                            p: txt.Recommended[0][lang] + ' Lv' + _lv
                        },
                        {
                            img: function (k) {
                                return imgpre + 'images/Element/' + k.data + '.png'
                            },
                            class: 'elem_',
                            data: cur_floor_data.ElemUpper,
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
        $('.l_r').empty().render({
            template: [
                {
                    div: [
                        {
                            p: txt.Recommended[1][lang] + ' Lv' + _lv
                        },
                        {
                            img: function (k) {
                                return imgpre + 'images/Element/' + k.data + '.png'
                            },
                            class: 'elem_',
                            data: cur_floor_data.ElemLower,
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
        $('.u_m').empty()
        $('.u_m').render({
            template: Lineup(cur_floor_data.Upper)
        })
        $('.l_m').empty()
        $('.l_m').render({
            template: Lineup(cur_floor_data.Lower)
        })

        rotate()
        var floor_name = $('.f_text').html()

        myChart = echarts.init(document.getElementById('chart'))
        var option = {
            title: {
                text: txt.Chart_Title_Fiction[lang].replace('#', floor_name),
                subtext: txt.Chart_Subtitle[lang],
                left: 'center',
                textStyle: {
                    color: '#000'
                },
                subtextStyle: {
                    color: '#2545ba'
                },
                top: '8%'
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '20%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                },
                right: '75%',
                top: '10%'
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: _fictionhp[floor_name].Name,
                axisLabel: {
                    color: '#000',
                    padding: [5, 0],
                }
            },
            yAxis: {
                type: 'value'
            },
            visualMap: {
                type: 'piecewise',
                show: false,
                dimension: 0,
                pieces: [
                    {
                        lte: 9,
                        color: '#2545ba'
                    },
                    {
                        gt: 9,
                        lte: 10,
                        color: '#cc0000'
                    },
                    {
                        gt: 10,
                        color: '#cc0000'
                    }
                ]
            },
            series: [
                {
                    name: txt.Fiction_HP[lang],
                    type: 'line',
                    data: _fictionhp[floor_name].HP
                }
            ],
        }
        if ($("#NOLAZY").val()) option.tooltip.show = false
        myChart.setOption(option)

        myChart.dispatchAction({
            type: 'showTip',
            dataIndex: _fictionhp[$('.f_text').html()].Index[_fictionschedule[mod(cur_index, max_index)]._id],
            seriesIndex: 0,
        })

        console.log("FINISH")

    }

    $('body').on('click', '.v_r', function () {
        cur_index -= 1
        writeVer()
    })

    $('body').on('click', '.v_l', function () {
        cur_index += 1
        writeVer()
    })

    $('body').on('click', '.f_r', function () {
        cur_floor += 1
        writeData()
    })

    $('body').on('click', '.f_l', function () {
        cur_floor -= 1
        writeData()
    })

    $('body').on('mouseleave', '#chart', function () {
        myChart.dispatchAction({
            type: 'showTip',
            dataIndex: _fictionhp[$('.f_text').html()].Index[_fictionschedule[mod(cur_index, max_index)]._id],
            seriesIndex: 0,
        })
    })

    function Lineup(L) {
        var out = []
        L.forEach(function (l) {
            out.push(Stage(l))
        })
        return out
    }

    function Stage(l) {
        var waves = []
        l.Waves.forEach(function (w, i) {
            waves.push(Wave(i, w, l.Level, l.HardLevelGroup, w.EliteGroup, w.HPAdd))
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
                    class: 'emote_block_'
                },
                {
                    p: '<color style="color:#2545ba">' + l._id + '</color>',
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

    function Wave(i, w, stage_lv, stage_hlg, stage_eg, hp_add) {
        var monsters = []
        var affix = []
        w.Monsters.forEach(function (t) {
            var me = _monster[t.ID]
            monsters.push({
                span: [
                    {
                        div: [
                            {
                                img: imgpre + 'images/' + me["1"],
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
                                span: t.Num.toString(),
                                class: 'monicon_num',
                                style: {
                                    top: lazy ? '' : '0'
                                }
                            },
                            {
                                div: {
                                    p: me["4"]
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
                                    data: me["2"],
                                    a: {
                                        loading: lazy
                                    }
                                },
                                class: 'monelem'
                            },
                            {
                                span: showstance(t.Stance) + (me["11"] ? ('×' + me["11"]) : ''),
                                class: 'monname',
                                style: {
                                    'margin-left': '5px',
                                    'position': 'relative',
                                    'bottom': '2px',
                                    'font-weight': 'bold'
                                }
                            },
                        ],
                        class: 'monbottom'
                    },
                    {
                        div: [
                            {
                                span: function () {
                                    var s = '<b><color style="color:#cc0000;">' + t.HP.toString() + '</color></b>'
                                    if (me["3"] && me["3"] > 1) {
                                        s += '<b>×' + me["3"] + '</b>'
                                    }
                                    return s + `<span class="csx"> <color style='color:#666;'>[${((stage_eg ? (stage_eg.HP ? stage_eg.HP : 1) : 1) * (me["5"] ? me["5"] : 1) * 100 * (1 + (hp_add ? hp_add : 0))).toFixed(0)}%]</color></span>`
                                },
                                class: 'monname',
                                when: t.HP
                            },
                            {
                                br: '',
                                when: t.HP && t.SPD
                            },
                            {
                                span: '<b><color style="color:#2545ba;">' + t.SPD.toString() + '</color></b>' + (me["6"] ? ` <color style='color:#666;'>[${((stage_eg ? (stage_eg.SPD ? stage_eg.SPD : 1) : 1) * me["6"] * 100).toFixed(0)}%]</color>` : ''),
                                class: 'monname',
                                when: t.SPD
                            },
                            /*{
                                br: ''
                            },
                            {
                                span: function () {
                                    var s = '<color style="color:;">' + t.Score.toString() + '</color>'
                                    return s
                                },
                                class: 'monname',
                                style: {
                                    color: '#888',
                                }
                            },*/
                        ],
                        class: 'monright'
                    },
                ],
                class: 'monster_card hover-shadow',
                a: {
                    'data-id': t.ID,
                    'data-lv': stage_lv,
                    'data-hl': stage_hlg ? stage_hlg : 1,
                    'data-eg': w.EliteGroup ? w.EliteGroup.ID : 1
                }
            })
            if (_affix[t.ID]) {
                affix.push(_affix[t.ID].replaceAll("#", "</color>").replaceAll("@", "<color style='color:#cc0000;'>"))
            }
        })
        var temp = {
            div: [
                {
                    p: txt.Keep[lang].replace("#", w.KeepNum.toString()),
                    class: 'wave_name'
                },
                {
                    div: monsters,
                    class: 'wave_monsters'
                },
                {
                    p: `[[.]]`,
                    style: {
                        'text-align': 'center',
                        'font-size': '0.8em',
                        'font-weight': 'bold'
                    },
                    data: affix,
                    when: affix.length,
                }
            ],
            class: 'wave_wrap'
        }
        return temp
    }

    $('body').on('mouseenter', '.monster_card', function () {
        $(this).find('.hasimgname').show()
        $(this).find('.monicon_num').hide()
        $(this).find('.hasimg').css("opacity", "0.2")
    })

    $('body').on('mouseleave', '.monster_card', function () {
        $(this).find('.hasimgname').hide()
        $(this).find('.monicon_num').show()
        $(this).find('.hasimg').css("opacity", "1")
    })

    $('body').on('click', '.monster_card', function () {
        window.open(`monster?lang=${lang3}&id=${$(this).attr('data-id')}&lv=${$(this).attr('data-lv')}&hlg=${$(this).attr('data-hl')}&eg=${$(this).attr('data-eg')}&def=1000`)
    })

    $('body').on('click', '.title', function () {
        $('.csx').toggle()
        HIDE_SHOW = 1 - HIDE_SHOW
        if (HIDE_SHOW) {
            $('.under2').hide()
        } else {
            $('.under2').show()
        }
    })

    $('body').on('dblclick', '.title', function () {
        $('.under2').hide()
        $('.hpc').toggle()
        $('.chart_container').toggle()
        $('h3').toggle()
        $('.dl_button').toggle()
        $('.smallbuff').css('color', 'white')
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
        //gtag('event', 'download_sr_fiction', {
        //    'type': 'sr_fiction'
        //})
        //window.location.href = `/Abyss/${use_lang}/${cur_schedule_ver}.png`
    })

    $('body').on('click', '.emote_block_', rotate)

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