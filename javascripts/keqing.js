$(function () {

    var imgpre = $('#IMGPRE').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'
    init_title((lang == "CH" ? '刻晴成绩' : 'Keqing Endgame') + ' ' + computer_.MiscText.PAGE_TITLE[lang])

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Title[lang] + "<color style='font-size: 26px;'><br>" + computer_.MiscText.game_img[lang] + VER_GI + "</b></color>");
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

    var tip = {
        CH: "玩家为角色付出的一切努力都值得被记录<br>「玉衡杯」曾经是刻晴玩家追求刻晴极致的地方<br>虽然玉衡杯已不再举办，但刻晴仍会陪伴我们走向未来",
        EN: "All efforts made by players deserve to be acknowledged.<br>In the past 5 years, I have witnesses many astounding feats achieved by Keqing mains.<br>This page records Keqing's present and future.",
    }

    var parts = []

    Keqing_Data.forEach(function (t, i) {
        if (!lazy && i) return
        var contents = []
        t.Monsters.forEach(function (s) {
            var table_data = [
                {
                    tr: [
                        {
                            th: (lang == 'CH') ? '时间' : 'Time',
                            width: '14%'
                        },
                        {
                            th: (lang == 'CH') ? '阵容' : 'Team',
                            width: '40%'
                        },
                        {
                            th: (lang == 'CH') ? '视频' : 'Video',
                            width: '23%'
                        },
                        {
                            th: (lang == 'CH') ? '作者' : 'By',
                            width: '23%'
                        },
                    ]
                }
            ]
            s.Data.forEach(function (z) {
                var chars = []
                z.Char.forEach(function (u) {
                    chars.push({
                        a: `/gi/char/${u}`,
                        t: {
                            img: `/homdgcat-res/Avatar/UI_AvatarIcon_${u}.png`,
                            style: {
                                width: '100%'
                            }
                        },
                        class: 'avatar_img hover-shadow',
                        attr: {
                            target: '_blank',
                        }
                    })
                })
                table_data.push({
                    tr: [
                        {
                            td: [
                                z.Score + 's',
                                {
                                    p: z.Note,
                                    style: {
                                        'font-size': '0.7em',
                                        'margin': '0',
                                        color: 'rgb(153, 255, 255)'
                                    },
                                    when: z.Note && z.Note.length,
                                }
                            ],
                            style: {
                                'text-align': 'center',
                                color: '#f29e38',
                                'font-weight': 'bold',
                                'font-size': '1.3em'
                            }
                        },
                        {
                            td: [
                                {
                                    div: chars,
                                    class: 'avatar_img_wrap'
                                },
                                {
                                    p: t.Note,
                                    when: t.Note && t.Note.length,
                                    style: {
                                        'text-align': 'center',
                                        margin: '10px 0 10px',
                                        'font-weight': 'bold',
                                        color: 'rgb(153, 255, 255)'
                                    }
                                }
                            ],
                        },
                        {
                            td: {
                                a: (window.innerWidth > 500) ? `//www.bilibili.com/video/${z.Vid}` : `//player.bilibili.com/player.html?bvid=${z.Vid}`,
                                t: {
                                    span: '<u>' + z.Vid + '</u>',
                                    style: {
                                        'color': '#eee'
                                    }
                                },
                                attr: {
                                    target: '_blank',
                                    class: 'hover-shadow'
                                }
                            },
                            style: {
                                'text-align': 'center'
                            }
                        },
                        {
                            td: z.Authors.join('<br>'),
                            style: {
                                'text-align': 'center'
                            }
                        }
                    ]
                })
            })
            contents.push({
                div: [
                    {
                        a: '/gi/3boss/' + t.Ver,
                        t: [
                            {
                                div: {
                                    img: `/homdgcat-res/monster/${Keqing_MonData[s.ID].Icon}.png`,
                                    class: 'boss_img'
                                },
                                class: 'boss_img_wrap'
                            },
                            {
                                p: 'N' + Keqing_MonData[s.ID].D + '<br>' + Keqing_MonData[s.ID].HP,
                                when: Keqing_MonData[s.ID].HP,
                                class: 'boss_hp'
                            }
                        ],
                        class: 'top_wrap hover-shadow'
                    },
                    {
                        div: {
                            table: table_data,
                            class: 'table'
                        },
                        class: 'table_wrap'
                    }
                ],
                style: {
                    margin: '25px 0'
                }
            })
        })
        parts.push({
            div: [
                {
                    p: `${t.Ver} ${(lang == 'CH') ? '幽境危战' : 'Stygian Onslaught'}`,
                    class: 'name'
                },
                {
                    div: contents,
                    class: 'card_content'
                }
            ],
            class: 'card'
        })
    })

    $('container').render({
        template: {
            div: [
                {
                    p: (lang == "CH" ? '刻晴成绩' : 'Keqing Endgame'),
                    class: 'sch_2'
                },
                {
                    p: tip[lang],
                    class: 'avd tip2',
                    style: {
                        margin: '0 8px 14px',
                        'font-weight': 'normal',
                        'text-align': 'center',
                        'line-height': '1.7'
                    }
                },
                {
                    p: computer_.MiscText.Chart_Subtitle[lang],
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
                    div: parts,
                    class: 'blessing_card_area'
                }
            ],
            class: 'content'
        }
    })

    if (!lazy) {
        $('body').addClass('bg_3')
        a_section_white()
    } else {
        $('body').addClass('bg')
    }

    console.log("FINISH")

})