$(function () {

    var keqing_perf = 1
    var download_cd = 0
    var unreleased = 0
    var screenshot_disable_tips = 1

    // Texts
    var coming_soon = {
        CH: '敬请期待',
        EN: 'Coming Soon'
    }
    var switch_button = {
        CH: '切换文案',
        EN: 'Switch Description'
    }
    var download_text = {
        CH: '下载图片',
        EN: 'Download'
    }
    var keqing_text = {
        CH: '刻晴成绩',
        EN: 'Keqing Performance'
    }
    var browser_title_name = {
        CH: '幽境危战',
        EN: 'Stygian Onslaught'
    }
    var content_title_name = {
        CH: '幽境危战',
        EN: 'Stygian Onslaught'
    }
    var content_subtitle_name = {
        CH: '首领三连挑战',
        EN: '3 Boss Challenge'
    }
    var overall_name = {
        CH: '难度',
        EN: 'Difficulty Levels'
    }
    var overall_desc = {
        CH: '在@「幽境危战」#中，需要组成三个队伍击败三名首领<br>难度等级：@1~6# ，每个等级的首领均相同<br>完成难度 1~3 即可获得全部原石奖励，难度 4~6 的敌人会@大幅增强#，且拥有@新机制#',
        EN: 'In @Stygian Onslaught#, you need to form 3 teams and defeat 3 Bosses.<br>Difficulty Levels: @1~6#. The Bosses are the same for each Level.<br>You can get all the Primogems by completing Levels 1~3. The Bosses in Levels 4~6 are @significantly more powerful# and have @extra features#.'
    }
    var reward_name = {
        CH: '奖励',
        EN: 'Rewards'
    }
    var team_name = {
        CH: '队伍、限时',
        EN: 'Teams & Time Limit'
    }
    var team_desc = {
        CH: '<b>@难度 1~3#</b> 每首领 @10min#，可以重复使用角色，可匹配联机<br><b>@难度 4~5# </b>每首领 @120s#，不可重复使用角色<br><b>@难度 6# </b>每首领 @120s#，若用时之和在 @180s# 内，获得更高级奖励',
        EN: '<b>@Levels 1~3# </b> Each Boss @10min#. You can use a character more than once, and you can Co-Op by Matching.<br><b>@Levels 4~5# </b>Each Boss @120s#. You cannot use a character more than once.<br><b>@Level 6# </b>Each Boss @120s#. If total time is below @180s#, you get a better reward.'
    }
    var r1_name = {
        CH: '圣遗物奖励',
        EN: 'Artifact Rewards'
    }
    var r1_desc = {
        CH: '可以@选择一座祝圣秘境#，通过以下方式获得其中的圣遗物奖励：<br>• 完成难度 @3# 或以上的挑战后，可以消耗树脂获得一次奖励<br>• 每版本有 10 天@爆发期#，可以额外消耗 20/40/60 树脂，获得 1/2/3 份奖励<br>通过第二种方式累计消耗 @120# 树脂，可以额外获得一件五星圣遗物，累计消耗 @1200# 树脂，可以获得一份@圣遗物重掷#材料',
        EN: 'You can @choose an Artifact Domain# and claim rewards from it via the following methods:<br>• After completing Level @3# or above, use Resin to claim reward once.<br>• Every phase there is a 10 day @Burst Period#, when you can spend an extra 20/40/60 Resin to claim 1/2/3 rewards.<br>For every @120# Resin spent via the 2nd method, you obtain 1 extra 5-star artifact, and after spending @1200# Resin, you will get an @Artifact Reroll# material.'
    }

    var rewards = [
        {
            P: "1",
            R: "UI_ItemIcon_201",
            C: 150
        },
        {
            P: "2",
            R: "UI_ItemIcon_201",
            C: 150
        },
        {
            P: "3",
            R: "UI_ItemIcon_201",
            C: 150
        },
        {
            P: "4",
            R: "UI_ItemIcon_TrainingIteration_2",
            C: 1
        },
        {
            P: "5",
            R: "UI_ItemIcon_TrainingIteration_2",
            C: 1
        },
        {
            P: "6",
            D: {
                CH: "武器<br>幻化",
                EN: "Weapon<br>Skin"
            }
        },
    ]

    var time = [
        "",
        "10min",
        "10min",
        "Lv90 10min",
        "Lv100 120s",
        "Lv105 120s",
        (lang == 'CH') ? 'Lv110 共享 180s' : 'Lv110 Share 180s',
        "",
    ]

    function process(text) {
        return text.replaceAll("#", "</color>").replaceAll("@", `<color style="color:#FFD780">`)
    }

    function process_2(text) {
        return text.replaceAll("#", "</color>").replaceAll("@", `<color style="color:#FFD780">`)
    }

    var imgpre = $('#IMGPRE').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'
    var avid = $('#AVID').val()
    init_title(browser_title_name[lang] + ' ' + computer_.MiscText.PAGE_TITLE[lang])

    var boss_trait = {
        CH: '首领特性',
        EN: 'Boss Trait'
    }
    var boss_story = {
        CH: '首领介绍',
        EN: 'Boss Introduction'
    }
    var boss_hdg = {
        CH: '妮可少女的研究',
        EN: "HomDGCat's Notes"
    }

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

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/bosschallenge.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        if (unreleased) {
            $('container').render({
                template: {
                    div: [
                        {
                            p: coming_soon[lang],
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
                                'margin-bottom': '3px'
                            }
                        },
                    ],
                    class: 'content'
                }
            })
            $('body').addClass(bg_name)
            return
        }

        cur_phase = -1
        phase_num = BossChallenge_Schedule.length

        cur_level = -1
        
        if (avid) {
            for (const i in BossChallenge_Schedule) {
                if (BossChallenge_Schedule[i].Ver == avid.replaceAll('_', '.')) cur_phase = i
            }
        }

        console.log(cur_phase)

        $('container').render({
            template: {
                div: [
                    {
                        p: content_title_name[lang3],
                        style: {
                            'text-align': 'center',
                            'font-weight': 'bold',
                            //'margin-bottom': '10px',
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
                            'margin-bottom': '5px'
                        },
                        when: 0
                    },
                    {
                        h4: [
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
                                        class: 'ver_text showtop_2'
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
                                        div: {
                                            span: download_text[lang]
                                        },
                                        class: 'level_ dl_button hover-shadow',
                                        click: function () {
                                            var phase_data = BossChallenge_Schedule[mod(cur_phase, phase_num)]
                                            download(`/Abyss/${lang}/-${phase_data.Ver}.png`, `${phase_data.Ver} ${content_title_name[lang]}`)
                                        }
                                    },
                                    {
                                        div: [
                                            {
                                                div: {
                                                    img: '/images/emote/Keqing/6.png',
                                                },
                                                class: 'perf_img'
                                            },
                                            {
                                                span: ((lang == 'CH') ? '刻晴成绩' : 'Keqing Performance'),
                                            }
                                        ],
                                        class: 'level_ yunli_button hover-shadow',
                                        when: keqing_perf
                                    },
                                ],
                                style: {
                                    width: '100%',
                                    display: 'flex',
                                    'justify-content': 'center',
                                    'font-weight': 'bold',
                                    'margin-top': '20px',
                                    'margin-bottom': '0px',
                                },
                                class: 'pic_dl',
                            },
                            {
                                p: [
                                    {
                                        span: '◁',
                                        class: 'f_l'
                                    },
                                    {
                                        span: '',
                                        class: 'f_o'
                                    },
                                    {
                                        span: '▷',
                                        class: 'f_r'
                                    }
                                ],
                                style: {
                                    'margin-top': '10px'
                                },
                                class: 'difficulty_select'
                            },
                        ]
                    },
                    {
                        div: [
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_1 mon_info_0'
                                    },
                                ],
                                class: 'area_monsters'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_2 mon_hdg_0'
                                    },
                                ],
                                class: 'card_9 area_guide_hdg'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_2 mon_official_0'
                                    },
                                ],
                                class: 'card_9 area_guide_official'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_1 mon_info_1'
                                    },
                                ],
                                class: 'area_monsters'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_2 mon_hdg_1'
                                    },
                                ],
                                class: 'card_9 area_guide_hdg'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_2 mon_official_1'
                                    },
                                ],
                                class: 'card_9 area_guide_official'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_1 mon_info_2'
                                    },
                                ],
                                class: 'area_monsters'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_2 mon_hdg_2'
                                    },
                                ],
                                class: 'card_9 area_guide_hdg'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_2 mon_official_2'
                                    },
                                ],
                                class: 'card_9 area_guide_official'
                            },
                        ],
                        class: 'blessing_card_area',
                        when: window.innerWidth <= 1000
                    },
                    {
                        div: [
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_1 mon_info_0'
                                    },
                                    {
                                        div: '',
                                        class: 'block_1 mon_info_1',
                                    },
                                    {
                                        div: '',
                                        class: 'block_1 mon_info_2'
                                    },
                                ],
                                class: 'area_monsters'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_2 mon_hdg_0'
                                    },
                                    {
                                        div: '',
                                        class: 'block_2 mon_hdg_1'
                                    },
                                    {
                                        div: '',
                                        class: 'block_2 mon_hdg_2'
                                    },
                                ],
                                class: 'card_9 area_guide_hdg'
                            },
                            {
                                div: [
                                    {
                                        div: '',
                                        class: 'block_2 mon_official_0'
                                    },
                                    {
                                        div: '',
                                        class: 'block_2 mon_official_1'
                                    },
                                    {
                                        div: '',
                                        class: 'block_2 mon_official_2'
                                    },
                                ],
                                class: 'card_9 area_guide_official'
                            },
                        ],
                        class: 'blessing_card_area',
                        when: window.innerWidth > 1000
                    },
                ],
                class: 'content'
            }
        })

        renderOverall()

        if (!lazy) {
            $('body').addClass('bg_3')
            a_section_white()
        } else {
            $('body').addClass('bg')
        }

    }

    function renderOverall() {
        
        var phase_data = BossChallenge_Schedule[mod(cur_phase, phase_num)]
        switch_title(phase_data.Ver)

        $('.ver_text_name').html(phase_data.Ver)
        $('.ver_text_time').html(phase_data.Time)

        if (phase_data.Show) {
            renderMonsters_2(phase_data)
            return
        }

        var level_data = phase_data.Levels[mod(cur_level, phase_data.Levels.length)]
        $('.f_o').html(['', '', '', 'N3', 'N4', 'N5/6'][level_data.Level])

        renderMonsters_1(level_data)

        rotate()

        console.log("FINISH")

    }

    function renderMonsters_1(level_data) {

        $('.difficulty_select').show()

        level_data.Monsters.forEach(function (t_id, i) {
            var t = BossChallenge_Monsters[t_id]
            var mon_buffs = [{
                div: [
                    {
                        div: '',
                        class: 'emote_'
                    }
                ],
                style: {
                    display: 'flex',
                    'justify-content': 'center',
                    'margin-top': '5px'
                },
                class: 'b2 b2_minus'
            }]
            if (t.Buff && t.Buff.length) {
                for (const buff of t.Buff) {
                    var this_texts = []
                    if (buff.Name) this_texts.push('<b>' + buff.Name + '</b>')
                    if (buff.Desc) this_texts.push(buff.Desc)
                    mon_buffs.push({
                        p: this_texts.join('<br>'),
                        class: 'mon_buff b2 b2_minus'
                    })
                }
            } else {
                mon_buffs = mon_buffs.concat([
                    {
                        p: computer_.MiscText.Chart_Subtitle[lang],
                        class: 'mon_buff_bigger b2 b2_minus',
                        style: {
                            'text-align': 'center',
                            'color': 'rgb(255, 172, 255)'
                        }
                    },
                    {
                        div: {
                            img: '/images/emote/Keqing/1.png'
                        },
                        class: 'yunli b2 b2_minus'
                    },
                    {
                        p: {
                            CH: '(๑>؂<๑)<br>被刻晴吃掉了，嗷呜！<br>下次再来看看吧~',
                            EN: '(๑>؂<๑)<br>Oh no, Keqing ate this!<br>Come back again next time~'
                        }[lang],
                        class: 'mon_buff_bigger b2 b2_minus',
                        style: {
                            'text-align': 'center',
                            'line-height': '2',
                        }
                    }
                ])
            }
            if (t.Desc) {
                mon_buffs.push({
                    p: t.Desc,
                    class: 'mon_buff b2 b2_minus',
                    style: {
                        'border-top': '1px solid #eee',
                        'padding-top': '10px',
                        'margin-top': '10px'
                    }
                })
            }
            var mon_tutorial = []
            if (t.Tutorial && t.Tutorial.length) {
                mon_tutorial.push({
                    div: [
                        {
                            div: '',
                            class: 'emote_'
                        }
                    ],
                    style: {
                        display: 'flex',
                        'justify-content': 'center',
                        'margin-top': '5px'
                    },
                    class: 'b1 b1_minus'
                })
                mon_tutorial.push({
                    p: computer_.MiscText.Chart_Subtitle[lang],
                    class: 'mon_buff_bigger b1 b1_minus',
                    style: {
                        'text-align': 'center',
                        'color': 'rgb(255, 172, 255)'
                    }
                })
                for (const buff of t.Tutorial) {
                    mon_tutorial.push({
                        p: process_2(buff),
                        class: 'mon_buff_bigger b1 b1_minus'
                    })
                }
            } else {
                mon_tutorial = mon_tutorial.concat([
                    {
                        p: computer_.MiscText.Chart_Subtitle[lang],
                        class: 'mon_buff_bigger b1 b1_minus',
                        style: {
                            'text-align': 'center',
                            'color': 'rgb(255, 172, 255)'
                        }
                    },
                    {
                        div: {
                            img: '/images/emote/Keqing/1.png'
                        },
                        class: 'yunli b1 b1_minus'
                    },
                    {
                        p: {
                            CH: '(๑>؂<๑)<br>被刻晴吃掉了，嗷呜！<br>下次再来看看吧~',
                            EN: '(๑>؂<๑)<br>Oh no, Keqing ate this!<br>Come back again next time~'
                        }[lang],
                        class: 'mon_buff_bigger b1 b1_minus',
                        style: {
                            'text-align': 'center',
                            'line-height': '2',
                        }
                    }
                ])
            }
            if (i == 1) {
                if (window.innerWidth >= 1000) {
                    middle_style = {
                        'border-left': '1px solid #aaa',
                        'border-right': '1px solid #aaa'
                    }
                }
            }
            var show_icon = ''
            var icon_class = ''
            if (t.Icon.includes('LeyLineChallenge')) {
                show_icon = '/images/LeyLineChallenge/' + t.Icon + '.png'
                icon_class = 'mon_head_big'
            } else {
                show_icon = '/homdgcat-res/monster/' + t.Icon + '.png'
                icon_class = 'mon_head'
            }
            var link_1 = '/gi/monster/' + (t.ID ? (t.ID + '?level=105&mul=' + (t.HPMult ? t.HPMult : 1)) : '')
            var link_2 = '/gi/monster/' + (t.ID ? (t.ID + '?level=110&mul=' + (t.HPMult_2 ? t.HPMult_2 : 1)) : '')
            $('.mon_info_' + i).empty().render({
                template: [
                    {   
                        div: {
                            div: {
                                img: show_icon,
                                event: {
                                    error: function (o) {
                                        $(o.sender).hide()
                                        $(o.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                    }
                                },
                                a: {
                                    loading: lazy
                                }
                            }
                        },
                        class: icon_class,
                    },
                    {
                        p: t.Name,
                        class: 'mon_name',
                    },
                    {
                        p: t.Title,
                        class: 'mon_title',
                        when: t.Title && t.Title.length && (lang == 'CH')
                    },
                    {
                        div: {
                            p: function (k) {
                                var ret = `<a href='${link_1}' class='hp_a' target='_blank'>` + t.HP + '</a>' + (t.HPCount ? `×${t.HPCount}` : '')
                                if ((t.HP_2 != undefined) && (t.HP_2 != 0)) {
                                    ret += ` / <a href='${link_2}' class='hp_a' target='_blank'>` + t.HP_2 + '</a>'  + (t.HPCount ? `×${t.HPCount}` : '')
                                }
                                return ret
                            },
                            class: 'desc_hp',
                            style: {
                                'font-weight': 'bold',
                                margin: '3px 0 0',
                                'text-align': 'center'
                            }
                        },
                        class: 'mon_hp_div',
                        when: (t.HP != undefined) && (t.HP != 0)
                    },
                    {
                        div: {
                            div: [
                                {
                                    div: [
                                        {
                                            span: pic(t.Advantage),
                                            class: 'vt_text'
                                        },
                                        {
                                            img: `/homdgcat-res/UI/check.png`,
                                            class: 'elem',
                                            style: {
                                                'margin-left': '7px'
                                            }
                                        }
                                    ],
                                    when: t.Advantage.length,
                                    style: {
                                        margin: '0 8px',
                                    }
                                },
                                {
                                    div: [
                                        {
                                            span: pic(t.Disadvantage),
                                            class: 'vt_text'
                                        },
                                        {
                                            img: `/homdgcat-res/UI/close.png`,
                                            class: 'elem',
                                            style: {
                                                'margin-left': '7px'
                                            }
                                        }
                                    ],
                                    when: t.Disadvantage.length,
                                    style: {
                                        margin: '0 8px',
                                    }
                                }
                            ],
                            style: {
                                'display': 'flex',
                                margin: '5px 0 15px',
                                'justify-content': 'center',
                                'flex-wrap': 'wrap'
                            }
                        },
                        when: t.Advantage.length || t.Disadvantage.length
                    },
                ]
            })

            $('.mon_hdg_' + i).empty().render({
                template: [
                    {
                        p: '＋ ' + boss_hdg[lang] + ' ＋',
                        class: 'b1 b1_click b1_plus'
                    },
                    {
                        p: '− ' + boss_hdg[lang] + ' −',
                        class: 'b1 b1_click b1_minus'
                    }
                ]
            })

            $('.mon_hdg_' + i).render(mon_tutorial)

            $('.mon_official_' + i).empty().render({
                template: [
                    {
                        p: '＋ ' + boss_trait[lang] + ' ＋',
                        class: 'b2 b2_click b2_plus'
                    },
                    {
                        p: '− ' + boss_trait[lang] + ' −',
                        class: 'b2 b2_click b2_minus'
                    }
                ]
            })

            $('.mon_official_' + i).render(mon_buffs)

        })

        if (!lazy) {
            $('.area_guide_official').hide()
            $('.content').css('min-height', '600px')
            $('.content').css('padding-bottom', '15px')
            $('.blessing_card_area').css('margin-bottom', '15px')
        }

        if (window.innerWidth <= 800) {
            $('.mon_buffs').hide()
            $('.minus').hide()
            $('.b1_minus').hide()
            $('.b2_minus').hide()
        } else {
            $('.b1_plus').hide()
            $('.b2_plus').hide()
        }

        rotate()

    }

    function renderMonsters_2(phase_data) {

        $('.difficulty_select').hide()

        phase_data.Monsters.forEach(function (t, i) {

            $('.mon_info_' + i).empty().render({
                template: [
                    {   
                        div: {
                            div: {
                                img: '/homdgcat-res/monster/' + t.Icon + '.png',
                                event: {
                                    error: function (o) {
                                        $(o.sender).hide()
                                        $(o.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                    }
                                },
                                class: 'hover-shadow',
                                a: {
                                    loading: lazy
                                }
                            }
                        },
                        class: 'mon_head',
                    },
                    {
                        p: t.Name,
                        class: 'mon_name',
                    },
                    {
                        p: t.Title,
                        class: 'mon_title',
                        when: t.Title && t.Title.length && (lang == 'CH')
                    },
                ]
            })

            $('.mon_hdg_' + i).empty().render({
                template: [
                    {
                        p: '＋ ' + boss_hdg[lang] + ' ＋',
                        class: 'b1 b1_click b1_plus'
                    },
                    {
                        p: '− ' + boss_hdg[lang] + ' −',
                        class: 'b1 b1_click b1_minus'
                    }
                ]
            })

            var mon_tutorial = []
            mon_tutorial.push({
                div: [
                    {
                        div: '',
                        class: 'emote_'
                    }
                ],
                style: {
                    display: 'flex',
                    'justify-content': 'center',
                    'margin-top': '5px'
                },
                class: 'b1 b1_minus'
            })
            mon_tutorial.push({
                p: computer_.MiscText.Chart_Subtitle[lang],
                class: 'mon_buff_bigger b1 b1_minus',
                style: {
                    'text-align': 'center',
                    'color': 'rgb(255, 172, 255)'
                }
            })
            for (const buff of t.DescList) {
                mon_tutorial.push({
                    p: process_2(buff),
                    class: 'mon_buff_bigger b1 b1_minus'
                })
            }

            var mon_buffs = [
                {
                    p: computer_.MiscText.Chart_Subtitle[lang],
                    class: 'mon_buff_bigger b2 b2_minus',
                    style: {
                        'text-align': 'center',
                        'color': 'rgb(255, 172, 255)'
                    }
                },
                {
                    div: {
                        img: '/images/emote/Keqing/1.png'
                    },
                    class: 'yunli b2 b2_minus'
                },
                {
                    p: {
                        CH: '(๑>؂<๑)<br>被刻晴吃掉了，嗷呜！<br>下次再来看看吧~',
                        EN: '(๑>؂<๑)<br>Oh no, Keqing ate this!<br>Come back again next time~'
                    }[lang],
                    class: 'mon_buff_bigger b2 b2_minus',
                    style: {
                        'text-align': 'center',
                        'line-height': '2',
                    }
                }
            ]

            $('.mon_hdg_' + i).render(mon_tutorial)

            $('.mon_official_' + i).empty().render({
                template: [
                    {
                        p: '＋ ' + boss_trait[lang] + ' ＋',
                        class: 'b2 b2_click b2_plus'
                    },
                    {
                        p: '− ' + boss_trait[lang] + ' −',
                        class: 'b2 b2_click b2_minus'
                    }
                ]
            })

            $('.mon_official_' + i).render(mon_buffs)

        })

        if (!lazy) {
            $('.content').css('min-height', '600px')
            $('.content').css('padding-bottom', '15px')
            $('.blessing_card_area').css('margin-bottom', '15px')
        }

        if (window.innerWidth <= 800) {
            $('.mon_buffs').hide()
            $('.minus').hide()
            $('.b1_minus').hide()
            $('.b2_minus').hide()
        } else {
            $('.b1_plus').hide()
            $('.b2_plus').hide()
        }

        rotate()
        
    }

    $('body').on('click', '.plus, .minus', function () {
        var id = $(this).attr('data-id')
        $(`.toggle_${id}`).toggle()
    })

    function mod(n, m) {
        return ((n % m) + m) % m
    }

    $('body').on('click', '.v_l', function () {
        cur_phase -= 1
        renderOverall()
    })

    $('body').on('click', '.v_r', function () {
        cur_phase += 1
        renderOverall()
    })

    $('body').on('click', '.f_l', function () {
        cur_level -= 1
        renderOverall()
    })

    $('body').on('click', '.f_r', function () {
        cur_level += 1
        renderOverall()
    })

    $('body').on('click', '.sw_but', function () {
        var but_id = $(this).attr('data-id')
        $(`.sw_${but_id}_1`).toggle()
        $(`.sw_${but_id}_2`).toggle()
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
        //gtag('event', 'download_gi_stygian', {
        //    'type': 'gi_stygian'
        //})
    }

    function pic(text) {

        var s = text

        while (s.includes('{')) {
            var start = s.indexOf('{')
            var end = s.indexOf('}')
            s = s.replace(s.substring(start, end + 1), `<img src='/homdgcat-res/UI/${s.substring(start + 1, end)}.png' class='elem'>`)
        }

        return s

    }

    function rotate() {
        var keq_emotes = ['1', '3', '6', '7', '18', '19', '20']
        $('.emote_').each(function () {
            var this_emote = keq_emotes[Math.floor(Math.random() * keq_emotes.length)]
            $(this).empty().render({
                img: `/images/emote/Keqing/${this_emote}.png`
            })
        })
    }

    $('body').on('click', '.yunli_button', function () {
        window.location.href = `/gi/keqing`
    })

    $('body').on('click', '.b1_click', function () {
        $('.b1').toggle()
    })

    $('body').on('click', '.b2_click', function () {
        $('.b2').toggle()
    })

    $('body').on('click', '.emote_', rotate)

})