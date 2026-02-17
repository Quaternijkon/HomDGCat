$(function () {

    var MONSTERID = $('#MONSTERID').val();
    var mul = $('#MUL').val() || 3.75;
    $('input[name="mul"]').val(mul.toString())
    var INTERVAL = $('.com_result input[name="interval"]').val();
    
    var imgpre = $('#IMGPRE').val()
    init_title(computer_.MiscText.PAGE_TITLE[lang])
    var moreless = 0
    var last_legal_input = "100"
    var hp_res = 0
    var res_decrease_percent = 0
    var cur_hp = 0
    var cur_hp_count = 0
    var cur_interval = ''
    var cur_kingdom = {}
    var VERIFY = 0
    var showtop = 0
    $('h3 .title').html(computer_.MiscText.ComputerTitle[lang] + "<color style='font-size: 26px;'><br>" + computer_.MiscText.game_img[lang] + VER_GI + "</b></color>")
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang])
    $('h3 .tlsub').html(computer_.MiscText.Translate_)
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
    
    _button = (lang == 'CH') ? '搜索' : 'Search'
    _button2 = (lang == 'CH') ? '清除' : 'Clear'

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/computer.js'
    document.head.append(script_computer)
    script_computer.onload = begin1

    function begin1() {

        $('.calculate').text(computer_.MiscText.Computer_Button_Calculate[lang2]);
        $('input[name="level"]').attr('placeholder', computer_.MiscText.Computer_Input_OverworldPlaceholder[lang2]);
        $('input[name="interval"]').attr('placeholder', computer_.MiscText.Computer_Input_Placeholder[lang2]);
        $('.input_wrap').render([
            {
                p: {
                    CH: '已修复搜索功能不可用的问题',
                    EN: 'Fixed the problem of Search not working',
                }[lang],
                style: {
                    width: '100%',
                    'text-align': 'center',
                    'margin-top': '-5px',
                    'margin-bottom': '14px',
                }
            },
            {
                p: {
                    CH: '血量单位：<b>丘丘人</b> / <b>稻妻野伏</b>',
                    EN: 'HP units: <b>Hilichurls</b> / <b>Inazuma Nobushi</b>',
                }[lang],
                style: {
                    width: '100%',
                    'text-align': 'center',
                    'margin-top': '-5px',
                    'margin-bottom': '14px',
                }
            },
            {
                input: '',
                a: {
                    type: 'text',
                    id: 'INPUT'
                },
            },
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
        $('.kingdom').render({
            data: _Kingdoms,
            template: {
                kingdom: function (d) {
                    return d.data.Name
                },
                a: {
                    'data-id': '[[ID]]', class: 'kingdom_[[ID]]', 'data-hd': function (k) {
                        if ((k.data.ID == 19) || (k.data.ID == 21)) return '1'
                        return '0'
                    }
                },
                event: {
                    click: function (d) {
                        if ($(d.sender).hasClass('active')) {
                            return;
                        }
                        $(d.sender).addClass('active').siblings('kingdom').removeClass('active');
                        cur_kingdom = d.org_data
                        monsterRenderPre(d.org_data);
                    }
                },
                /*style: {
                    'display': function (k) {
                        if (k.data.ID < 5000) return 'none'
                        return ''
                    },
                    'width': '18%'
                }*/
            }
        })
        if (MONSTERID) {
            hasInput()
        } else {
            monsterRenderPre(_Kingdoms[0])
            $('.kingdom_11').addClass('active')
        }

        //$('kingdom').hide()
        //$('.kingdom').css('padding-bottom', '2px')

        $('body').addClass(bg_name)
        $('#monster_card_area_2').hide()

    }

    $('.com_result .calculate').click(function () {
        mul = parseFloat($('input[name="mul"]').val())
        if (isNaN(mul) || mul < 0) mul = 1.0
        hp_res = 0
        var ele = $('.class_monster').find('.active');
        if (!ele.length) {
            return
        }
        var regLevel = /^([1-9]|[1-9]\d|1\d{2}|200)$/;
        var regInterval = /^(9|1[0-2])-[1-3]$/;
        if (ele.attr('data-fc')) {
            var interval = ele.attr('data-fc')
            $('input[name="interval"]').val(interval)
        } else {
            var interval = $('input[name="interval"]').val().trim();
        }
        if (regLevel.test(interval)) {
            selectVal = "大世界";
            level = parseInt(interval);
            last_legal_input = interval
        } else if (_SpiralAbyssFloorEntryToLevelCoeffConfig[interval]) {
            selectVal = "深渊";
            last_legal_input = interval
        } else {
            $('input[name="interval"]').val(last_legal_input)
            var interval = last_legal_input;
            if (regLevel.test(interval)) {
                selectVal = "大世界";
                level = parseInt(interval);
            } else if (_SpiralAbyssFloorEntryToLevelCoeffConfig[interval]) {
                selectVal = "深渊";
            } else {
                return
            }
        }
        var data = _Monsters[ele.attr('data-id')]
        var choose_icon = data.Icon[Math.floor(Math.random() * data.Icon.length)]
        switch_title(data.Name)
        $('.result').empty().render({
            data: data,
            template: [{
                div: [{
                    div: {
                        img: imgpre + 'homdgcat-res/' + (choose_icon.includes('ItemIcon') ? 'Mat' : 'monster') +'/' + choose_icon + '.png',
                        class: 'big-img'
                    }
                }, {
                    div: [{
                        h5: function (d) {
                            if (d.data.UseCustomColorName && !d.data.RevertName) {
                                return _MonsterCustomColorNameConfig[ele.attr('data-id')].Name
                            }
                            return d.data.Name
                        },
                        style: {
                            color: function (d) {
                                return computer_.TextColorConfig[d.data.Color] || '';
                            }
                        },
                        class: 'name'
                    }, {
                        div: function (d) {
                            data.Title.forEach(function (i) {
                                if (i != data.Name) {
                                    $(d.container).render({
                                        p: i,
                                        class: 'title'
                                    })
                                }
                            })
                        }
                    }, {
                        div: [{
                            span: function (d) {
                                var lv = selectVal === "深渊" ? interval : 'Lv' + level;
                                cur_interval = lv
                                return lv
                            }
                        }, {
                            span: (mul * 100).toFixed(0) + '%'
                        }],
                        style: {
                            'display': 'flex',
                            'flex-wrap': 'wrap',
                            'justify-content': 'center'
                        },
                        class: 'title'
                    }, {
                        div: [{
                            span: ["HP ", {
                                i: function (d) {
                                    var lv = selectVal === "深渊" ? _SpiralAbyssFloorEntryToLevelCoeffConfig[interval].Level : level;
                                    var hpc = selectVal === "深渊" && !d.data.NotAffectedBySpiralAbyss ? _SpiralAbyssFloorEntryToLevelCoeffConfig[interval].HPCoeff : 1;
                                    var a = d.data.HPCurve ? _computer_.LevelCurves[lv][d.data.HPCurve] : 1;
                                    var mpid = d.data.MultiPlayerID ? d.data.MultiPlayerID : 1
                                    if (!_computer_.MultiPlayerConfig[mpid]) mpid = 1
                                    var num = a * d.data.HP * hpc * mul;
                                    cur_hp = num
                                    cur_hp_count = d.data.HPCount
                                    return num.toFixed(0) + (cur_hp_count ? `×${cur_hp_count}` : '')
                                }
                            }]
                        }, {
                            span: ["ATK ", {
                                i: function (d) {
                                    var lv = selectVal === "深渊" ? _SpiralAbyssFloorEntryToLevelCoeffConfig[interval].Level : level;
                                    var a = d.data.ATKCurve ? _computer_.LevelCurves[lv][d.data.ATKCurve] : 1;
                                    var extra = selectVal === "深渊" ? (d.data.ExtraSpiralAbyssCoeff && d.data.ExtraSpiralAbyssCoeff.ATK || 1) : 1;
                                    var mpid = d.data.MultiPlayerID ? d.data.MultiPlayerID : 1
                                    if (!_computer_.MultiPlayerConfig[mpid]) mpid = 1
                                    var num = a * d.data.ATK * extra;
                                    return num.toFixed(0)
                                }
                            }]
                        }],
                    }, {
                        span: "<b><color style='color:#0066FF;'>" + computer_.MiscText.Computer_Show[lang] + "</color></b>",
                        class: 'logoshow'
                    },],
                    class: 'box'
                }],
                class: 'result_head'
            }, {
                div: [{
                    table: [{
                        thead: {
                            tr: [{
                                th: computer_.MiscText.Computer_Result_RESBaseTitle[lang2],
                                when: function (p) {
                                    return !p.data.NoRESBase
                                }
                            }, {
                                th: function (d) {
                                    var s = d.data.State;
                                    return _RESStateDescTextConfig[s] && _RESStateDescTextConfig[s].Text || "状态未知"
                                },
                                datapath: 'RESState',
                                when: function (d) {
                                    return d.data.RESState && d.data.RESState.length;
                                }
                            }, {
                                th: function (d) {
                                    var s = d.data.State;
                                    return _RESStateDescTextConfig[s] && _RESStateDescTextConfig[s].Text || "变化未知"
                                },
                                datapath: 'RESModify',
                                when: function (d) {
                                    return d.data.RESModify && d.data.RESModify.length;
                                }
                            }]
                        }
                    }, {
                        tbody: function (p) {
                            cur_mon = p.data
                            _computer_.RESTypeConfig.forEach(function (t, ind) {
                                $(p.container).render({
                                    data: t,
                                    template: {
                                        tr: [{
                                            td: [
                                                {
                                                    img: function (f) {
                                                        return `/homdgcat-res/UI/${f.data}.png`.replaceAll('Phys', 'Physical')
                                                    },
                                                    datapath: '_id',
                                                    class: 'resicon'
                                                },
                                                {
                                                    span: function (d) {
                                                        if (p.data.RESBase == "0") {
                                                            var resbase = 0
                                                        } else {
                                                            var resbase = p.data.RESBase ? (p.data.RESBase[d.data._id] != undefined ? p.data.RESBase[d.data._id] : 0.1) : 0.1;
                                                        }
                                                        var immune = p.data.Immune ? p.data.Immune : []
                                                        if (immune.includes(d.data._id)) {
                                                            var ret = '<b>' + computer_.MiscText.Computer_Result_Immune[lang2] + '</b>'
                                                        } else {
                                                            var ret = (resbase * 100).toFixed() + '%'
                                                        }
                                                        return ret
                                                    },
                                                    class: '_res'
                                                },
                                                {
                                                    span: '',
                                                    class: '_hp',
                                                    a: {
                                                        'data-r': ind,
                                                        'data-s': 999
                                                    },
                                                    style: {
                                                        display: 'none'
                                                    }
                                                }

                                            ],
                                            style: {
                                                color: function (d) {
                                                    var color = d.data.Color || '';
                                                    return computer_.TextColorConfig[color];
                                                },
                                            },
                                            when: !p.data.NoRESBase
                                        }, function (d) {
                                            if (p.data.RESState && p.data.RESState.length) {
                                                p.data.RESState.forEach(function (tt, ind_) {
                                                    $(d.container).render({
                                                        data: tt,
                                                        template: {
                                                            td: [
                                                                {
                                                                    img: (imgpre + 'homdgcat-res/UI/' + d.data._id + '.png').replaceAll('Phys', 'Physical'),
                                                                    class: 'resicon'
                                                                },
                                                                {
                                                                    span: function (a) {
                                                                        if (p.data.RESBase == "0") {
                                                                            var resbase = 0
                                                                        } else {
                                                                            var resbase = p.data.RESBase ? (p.data.RESBase[d.data._id] != undefined ? p.data.RESBase[d.data._id] : 0.1) : 0.1;
                                                                        }
                                                                        if (a.data['All']) {
                                                                            resbase = resbase + a.data['All'];
                                                                        }
                                                                        if (a.data[d.data._id]) {
                                                                            resbase = resbase + a.data[d.data._id];
                                                                        }
                                                                        var immune = p.data.Immune ? p.data.Immune : []
                                                                        if (immune.includes(d.data._id) && !p.data.OnlyBaseImmune) {
                                                                            var ret = '<b>' + computer_.MiscText.Computer_Result_Immune[lang2] + '</b>'
                                                                        } else {
                                                                            var ret = (resbase * 100).toFixed() + '%'
                                                                        }
                                                                        return ret
                                                                    },
                                                                    class: '_res'
                                                                },
                                                                {
                                                                    span: '',
                                                                    class: '_hp',
                                                                    a: {
                                                                        'data-r': ind,
                                                                        'data-s': ind_
                                                                    },
                                                                    style: {
                                                                        display: 'none'
                                                                    }
                                                                }
                                                            ],
                                                            style: {
                                                                color: function (a) {
                                                                    var color = d.data.Color || '';
                                                                    return computer_.TextColorConfig[color];
                                                                },
                                                            }
                                                        }
                                                    })
                                                })

                                            }
                                            if (p.data.RESModify && p.data.RESModify.length) {
                                                if ($(d.container).parents('tbody').attr(`${d.data.State}-modify`) == 1) {
                                                    return;
                                                }

                                                $(d.container).render({
                                                    data: p.data.RESModify,
                                                    template: {
                                                        td: `[[Show]]`,
                                                        a: {
                                                            rowspan: _computer_.RESTypeConfig.length
                                                        },
                                                        style: {
                                                            'text-align': "center"
                                                        }
                                                    }
                                                })
                                                $(d.container).parents('tbody').attr(d.data.State + '-modify', 1);
                                            }

                                        }]
                                    }
                                })
                            })
                            $(p.container).render({
                                template: {
                                    tr: {
                                        td: [
                                            {
                                                span: computer_.MiscText.Computer_ScaleHP_Text[lang2],
                                                style: {
                                                    margin: '5px 3px 5px 5px',
                                                    'font-size': (lang == 'CH') ? '15px': '14px'
                                                }
                                            },
                                            {
                                                input: '',
                                                a: {
                                                    type: 'text',
                                                    value: res_decrease_percent.toString()
                                                },
                                                style: {
                                                    margin: '5px 3px 5px 5px'
                                                },
                                                class: 'res_red_input',
                                                width: '60px'
                                            },
                                            {
                                                button: computer_.MiscText.Computer_ScaleHP_Button1[lang2],
                                                class: 'hp_res_button',
                                                style: {
                                                    margin: '5px 3px 5px 5px'
                                                }
                                            },
                                            {
                                                span: '<b>✕</b>',
                                                class: 'scale_info',
                                                style: {
                                                    margin: '5px 3px 5px 5px',
                                                    cursor: 'pointer'
                                                }
                                            },
                                            {
                                                span: '<b>ⓘ</b>',
                                                class: 'scale_info_2',
                                                style: {
                                                    margin: '5px 3px 5px 5px',
                                                    cursor: 'pointer'
                                                }
                                            }
                                        ],
                                        a: {
                                            colspan: 10
                                        },
                                        style: {
                                            'padding-top': '10px'
                                        }
                                    }
                                }
                            })
                        }
                    }],
                    class: 'table-1'
                }],
                class: 'mon_table',
            }, {
                div: function (c) {
                    var is_tutorial = data.Tutorial && _Tutorials[data.Tutorial]
                    if (is_tutorial) {
                        var tutorial = _Tutorials[data.Tutorial]
                        $(c.container).render({
                            div: [
                                {
                                    div: function (c) {
                                        if (data.Tut) {
                                            _Tuts[data.Tut].forEach(function (e) {
                                                e.I.forEach(function (f) {
                                                    $(c.container).render({
                                                        img: imgpre + `images/Tutorial/${f}.png`,
                                                        style: {
                                                            'margin-top': '25px',
                                                            'margin-bottom': '-10px'
                                                        }
                                                    })
                                                })
                                            })
                                        }
                                    },
                                    class: 'tut_img_wrapper'
                                },
                                {
                                    p: function (d) {
                                        if (data.UseCustomColorName && !data.RevertName) {
                                            return _MonsterCustomColorNameConfig[ele.attr('data-id')].Name
                                        }
                                        return data.Name
                                    },
                                    style: {
                                        //color: computer_.TextColorLightConfig[data.Color] || '#eeeeee',
                                        'text-align': 'center',
                                        margin: '15px 0 0',
                                        'font-weight': 'bold',
                                        'font-size': '1.25em',
                                    }
                                },
                                {
                                    p: '<b>' + cur_interval + ' ' + (mul * 100).toFixed(0) + '% <color style="color:#FFD780;">' + cur_hp.toFixed(0) + (cur_hp_count ? `×${cur_hp_count}` : '') + '</color></b>',
                                    style: {
                                        'font-size': '1.05em',
                                        'text-align': 'center',
                                        'margin': '0'
                                    }
                                },
                                {
                                    div: {
                                        img: imgpre + 'homdgcat-res/' + (choose_icon.includes('ItemIcon') ? 'Mat' : 'monster') +'/' + choose_icon + '.png',
                                        style: {
                                            width: '80px',
                                            height: '80px'
                                        }
                                    },
                                    class: 'tut_img_wrapper tut_image_icon'
                                },
                                {
                                    p: computer_.MiscText.Chart_Subtitle[lang],
                                    style: {
                                        //'font-size': '0.9em',
                                        color: '#FFD780',
                                        'text-align': 'center',
                                        'margin': '5px 0 10px'
                                    },
                                    class: 'ppppp'
                                },
                                {
                                    p: tutorial && process(tutorial.replaceAll('#', "</color>").replaceAll('@', "<color style='color:#FFD780'>")),
                                    class: 'ppppp'
                                }
                            ],
                            class: 'tut_single tut_large'
                        })
                        if (!data.Tut) {
                            $('.tut_image_icon').show()
                        }
                    } else if (data.Tut) {
                        _Tuts[data.Tut].forEach(function (e) {
                            var images_ = []
                            e.I.forEach(function (f) {
                                images_.push({
                                    div: {
                                        img: imgpre + `images/Tutorial/${f}.png`,
                                        style: {
                                            'margin-top': '25px'
                                        }
                                    },
                                    class: 'tut_img_wrapper'
                                })
                            })
                            images_ = images_.concat([
                                {
                                    p: function (d) {
                                        if (data.UseCustomColorName && !data.RevertName) {
                                            return _MonsterCustomColorNameConfig[ele.attr('data-id')].Name
                                        }
                                        return data.Name
                                    },
                                    style: {
                                        //color: computer_.TextColorLightConfig[data.Color] || '#eeeeee',
                                        'text-align': 'center',
                                        margin: '0 0 0',
                                        'font-weight': 'bold',
                                        'font-size': '1.25em',
                                    }
                                },
                                {
                                    p: '<b>' + cur_interval + ' ' + (mul * 100).toFixed(0) + '% <color style="color:#FFD780;">' + cur_hp.toFixed(0) + (cur_hp_count ? `×${cur_hp_count}` : '') + '</color></b>',
                                    style: {
                                        'font-size': '1.05em',
                                        'text-align': 'center',
                                        'margin': '0'
                                    }
                                },
                                {
                                    p: computer_.MiscText.Chart_Subtitle[lang],
                                    style: {
                                        //'font-size': '0.9em',
                                        color: '#FFD780',
                                        'text-align': 'center',
                                        'margin': '5px 0 10px'
                                    },
                                    class: 'ppppp'
                                },
                            ])
                            images_.push({
                                p: e.D.replaceAll('<color=#FFE14BFF>', "<color style='color:#FFE14B'>")
                            })
                            $(c.container).render({
                                div: images_,
                                class: 'tut_single'
                            })
                        })
                    }
                },
                class: 'mon_tutorial',
            }, {
                p: `[[Desc]]`,
                class: 'mon_intro',
                style: {
                    'line-height': 2
                }
            }, {
                div: {
                    schedule: (lang == 'CH') ? '显示技能' : 'Show Abilities',
                    class: 'csx_button hover-shadow notclicked'
                },
                event: {
                    click: function (p) {
                        if (!$('.csx_button').hasClass('notclicked')) return
                        $('.csx_button').removeClass('notclicked')
                        for (const pic of data.Csx) {
                            $(p.sender).render({
                                div: {
                                    img: `/EnemyChart/${pic}.png`,
                                    style: {
                                        width: '100%',
                                    },
                                    event: {
                                        click: function (o) {
                                            window.open(`/EnemyChart/${pic}.png`, '_blank')
                                        }
                                    },
                                },
                                class: 'csxylic',
                                style: {
                                    'margin-top': '20px',
                                    cursor: 'pointer'
                                }
                            })
                        }
                    }
                },
                when: data.Csx && data.Csx.length,
                class: 'csx_wrapper'
            }]
        })
        $('.scroller').scrollTop($('.scroller')[0].scrollHeight - $('.com_result').height() - 150)
    })

    var item = {
        table: function (l) {
            l.data.Monsters.forEach(function (mn) {
                var monster = _Monsters[mn]
                var choose_icon = monster.Icon[Math.floor(Math.random() * monster.Icon.length)]
                $(l.container).render({
                    tr: [
                        {
                            td: {
                                img: imgpre + 'homdgcat-res/' + (choose_icon.includes('ItemIcon') ? 'Mat' : 'monster') +'/' + choose_icon + '.png',
                                class: 'category_monster_img'
                            },
                            class: 'td_1'
                        },
                        {
                            td: {
                                span: function (d) {
                                    if (monster.UseCustomColorName) {
                                        return _MonsterCustomColorNameConfig[monster._id].Name
                                    } else {
                                        var mon_color = computer_.TextColorConfig[monster.Color ? monster.Color : "None"]
                                        return "<color style='color:" + mon_color + ";'>" + monster.Name + "</color>"
                                    }
                                },
                                class: 'category_monster_span'
                            },
                            class: 'td_2'
                        },
                        {
                            td: {
                                span: function (d) {
                                    if (monster.HPCurve == 1) {
                                        return '<b>' + monster.HP + '</b>' + {
                                            CH: ' 丘丘',
                                            EN: ' Hilichurls',
                                        }[lang]
                                    }
                                    if (monster.HPCurve == 10) {
                                        return '<b>' + rnd(monster.HP / 13.584) + '</b>' + {
                                            CH: ' 丘丘',
                                            EN: ' Hilichurls',
                                        }[lang]
                                    }
                                    if (monster.HPCurve == 2) {
                                        return '<b>' + monster.HP + '</b>' + {
                                            CH: ' 野伏',
                                            EN: ' Nobushi',
                                        }[lang]
                                    }
                                    if (monster.HPCurve == 20) {
                                        return '<b>' + rnd(monster.HP / 27.168) + '</b>' + {
                                            CH: ' 野伏',
                                            EN: ' Nobushi',
                                        }[lang]
                                    }
                                    if (monster.HPCurve == 7) {
                                        return '<b>' + monster.HP + '</b>' + {
                                            CH: ' 巡',
                                            EN: ' P',
                                        }[lang]
                                    }
                                    return '<b>' + monster.HP + '</b>' + {
                                        CH: ' ？',
                                        EN: ' ?',
                                    }[lang]
                                },
                                class: 'category_monster_span'
                            },
                            class: 'td_3'
                        }
                    ],
                    class: 'tr hover-shadow',
                    a: {
                        "data-id": `${mn}`,
                        "data-fc": '',
                        class: `hover-shadow monster_${mn}`
                    },
                    event: {
                        click: function (d) {
                            $('tr').removeClass('active');
                            $(d.sender).addClass('active');
                            if (!$('.com_result input[name="interval"]').val()) {
                                $('.com_result input[name="interval"]').val(last_legal_input)
                            }
                            if (_local_legends.includes(mn)) {
                                mul = 1.0
                                $('input[name="mul"]').val(mul.toString())
                                $('input[name="interval"]').val("103")
                            }
                            if (mn.toString().substring(0, 1) == '9') {
                                mul = 1.0
                                $('input[name="mul"]').val(mul.toString())
                                $('input[name="interval"]').val("90")
                            }
                            $('.calculate').click();
                        }
                    }
                })
            })
        },
        class: 'category_monster'
    }

    function monsterRenderPre(p_0) {

        var p = []
        for (const j in p_0.Classes) {
            p.push(p_0.Classes[p_0.Classes.length - j - 1])
        }
        
        $('#monster_card_area_1').empty()
        if (cur_kingdom.Disorder && cur_kingdom.Disorder) {
            $('#monster_card_area_1').render({
                p: cur_kingdom.Disorder,
                class: 'disorder',
            })
        }
        for (const d of p) {
            $('#monster_card_area_1').render({
                template: [{
                    category: [{
                        p: d.Name,
                        when: d.Name != undefined,
                    }, item],
                    class: 'clearfix',
                    a: { 'data-id': '[[ID]]' },
                    style: d.Hidden ? {
                        display: 'none'
                    } : {}
                }],
                data: d
            })
        }
    }

    function hasInput() {
        var m_object = _Monsters[MONSTERID];
        if (m_object) {
            var kdm = find_kingdom_id(MONSTERID)
            console.log(kdm)
            if (kdm == -1) {
                monsterRenderPre(_Kingdoms[0])
                $('.kingdom_11').addClass('active')
                return
            }
            var ele = $('.kingdom').find(`.kingdom_${kdm}`);
            ele.addClass('active');
            cur_kingdom = _Kingdoms[ele.index()]
            monsterRenderPre(_Kingdoms[ele.index()])
            $('.class_monster').find(`.monster_${MONSTERID}`).addClass('active');
            $('.calculate').click();
        }
    }

    function find_kingdom_id(mid) {
        for (let k_info of _Kingdoms) {
            for (let c_info of k_info.Classes) {
                for (let m_id of c_info.Monsters) {
                    if (m_id == mid) return k_info.ID
                }
            }
        }
        return -1
    }

    $('body').on('click', '#but_1', function () {

        var search = $("#INPUT").val()
        if (!search) return

        $('#monster_card_area_1').hide()
        $('#monster_card_area_2').empty()
        $('.kingdom').hide()
        var id_list = []
        for (const [i, u] of Object.entries(_Monsters)) {
            if (id_list.length < 100) {
                if (u.Name.includes(search)) {
                    id_list.push(parseInt(i))
                }
                if (i.toString().includes(search)) {
                    id_list.push(parseInt(i))
                }
            }
        }

        $('#monster_card_area_2').render({
            data: {
                "ID": 0,
                "Name": "",
                "Monsters": id_list
            },
            template: [{
                category: [{
                    p: search
                }, item],
                class: 'clearfix',
            }]
        })

        $('#monster_card_area_2').show()

    })

    $('body').on('click', '#but_2', function () {

        $('#monster_card_area_1').show()
        $('#monster_card_area_2').hide()
        $('.kingdom').show()
        $('#INPUT').val('')

    })

    $("body").on("change", 'input[name="mul"]', function () {
        $('.calculate').click();
    });

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    $('body').on('click', ".hp_res_button", function () {
        hp_res = 1
        res_decrease_percent = parseInt($('.res_red_input').val())
        $('._hp').each(function () {
            var res_percent = $(this).siblings('._res').html()
            if (!res_percent.includes('%')) {
                $(this).html('<b>' + computer_.MiscText.Computer_Result_Immune[lang2] + '</b>')
            } else {
                res_percent = parseInt(res_percent.replace('%', ''))
                $(this).html((cur_hp * res(res_percent / 100, res_decrease_percent / 100)).toFixed(0))
            }
        })
        $('._res').hide()
        $('._hp').show()
    });

    $('body').on('click', '.scale_info', function () {
        hp_res = 0
        $('._res').show()
        $('._hp').hide()
    })

    $('body').on('click', '.scale_info_2', function () {
        poplayer({
            header: computer_.MiscText.Computer_ScaleHP_TutorialTitle[lang2],
            width: '90%',
            template: {
                div: computer_.MiscText.Computer_ScaleHP_Tutorial[lang2],
                style: {
                    'white-space': 'pre-wrap',
                    'padding': '10px'
                },
                class: 'ignore'
            }
        })
    })

    function downloadImage(path, imgName) {
        var _OBJECT_URL;
        var request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function (e) {
            if (request.readyState == 4) {
                _OBJECT_URL = URL.createObjectURL(request.response);
                var $a = $("<a></a>").attr("href", _OBJECT_URL).attr("download", imgName);
                $a[0].click();
            }
        });
        request.responseType = 'blob';
        request.open('get', path);
        request.send();
    }

    function rescoeff(r) {
        if (r < 0) {
            return 1 - r / 2
        } else if (r > 0.75) {
            return 1 / (4 * r + 1)
        } else {
            return 1 - r
        }
    }

    function res(base, red) {
        return rescoeff(0.1 - red) / rescoeff(base - red)
    }

    function process(txt) {
        var t = txt
        for (const [i, j] of Object.entries(computer_.TextColorLightConfig)) {
            t = t.replaceAll(`<${i}>`, `<color style='color:${j}'>`)
        }
        return t
    }

    $('body').on('click', '.showtop', function () {
        showtop = 1 - showtop
        if (showtop) {
            $('kingdom').show()
            $('.kingdom').css('padding-bottom', '20px')
        } else {
            $('kingdom').hide()
            $('.kingdom').css('padding-bottom', '2px')
        }
    })

    $('body').on('dblclick', '.title', function () {
        $('.kingdom').toggle()
        $('.class_monster').toggle()
    })

    $('body').on('dblclick', '.mon_tutorial', function () {
        $('.ppppp').css('color', 'white')
    })

    function rnd(num) {
        var s = num.toFixed(5)
        while ((s.length >= 2) && (s.substring(s.length - 1) == '0')) {
            s = s.substring(0, s.length - 1)
        }
        if (s.substring(s.length - 1) == '.') {
            s = s.substring(0, s.length - 1)
        }
        return s
    }

})
