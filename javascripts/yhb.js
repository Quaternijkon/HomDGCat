$(function () {

    var imgpre = $('#IMGPRE').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'
    init_title('玉衡杯重现 ' + computer_.MiscText.PAGE_TITLE[lang])

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

    var cur_time = Date.now()
    var days_1 = Math.round((cur_time - Date.parse('2022-04-01T12:00:00+08:00')) / 86400000).toString()
    var days_2 = Math.round((cur_time - Date.parse('2023-05-09T12:00:00+08:00')) / 86400000).toString()
    var days_3 = Math.round((cur_time - Date.parse('2024-07-16T12:00:00+08:00')) / 86400000).toString()
    var days_4 = Math.round((cur_time - Date.parse('2025-11-20T00:00:00+08:00')) / 86400000).toString()

    var tip = [
        `>>> 在 <b>${days_1}</b> 天前的2022年4月1日，第一届玉衡杯（当时名为刻晴杯）开赛，内容为 <b>2.6</b> 版本渊月螺旋12层竞速`,
        `>>> 在 <b>${days_2}</b> 天前的2023年5月9日，玉衡杯网站正式投入使用，网站记录了第八届（3.5）至第十三届（4.4）玉衡杯的数据`,
        `>>> 在 <b>${days_3}</b> 天前的2024年7月16日，最后一届玉衡杯：第十四届玉衡杯（4.7）落下帷幕，此时距离第一届开赛已有 <b>837</b> 天`,
        `>>> 在 <b>${days_4}</b> 天前的2025年11月20日，刻晴的第六次生日，我用我保存的「记忆」——老玉衡杯网站的数据，重现了玉衡杯的内容`,
    ]

    $('container').render({
        template: {
            div: [
                {
                    p: '玉衡杯重现',
                    class: 'sch_2'
                },
                {
                    div: {
                        p: tip.join("<br>"),
                        class: 'avd tip2',
                        style: {
                            margin: '0 8px 14px',
                            'font-weight': 'normal',
                            'line-height': '1.9',
                            width: 'max-content',
                            'max-width': '100%'
                        }
                    },
                    style: {
                        display: 'flex',
                        'justify-content': 'center'
                    }
                },
                {
                    div: [
                        {
                            schedule: '成绩记录',
                            class: 'active',
                            click: render_track
                        },
                        {
                            schedule: '早期集锦',
                            click: render_highlights
                        },
                        {
                            schedule: '教程攻略',
                            click: render_tutorials
                        },
                        {
                            schedule: '规则 讯息',
                            click: render_rules
                        },
                    ],
                    class: 'select'
                },
                {
                    div: [],
                    class: 'blessing_card_area'
                }
            ],
            class: 'content'
        }
    })

    render_track()

    function render_track() { // Remember NGA also BV1a7421N7cn

        $('.blessing_card_area').empty()
        
        for (const i in data_tracks) {

            var c_data = data_tracks[data_tracks.length - i - 1]

            var this_competition_info = []
            var this_competition_info_contents = [
                {
                    scheduled: '收起',
                    class: `rule_title cd cd_0 active_2 content_${c_data._id + '_' + '1145'}`,
                    a: {
                        'data-id': c_data._id + '_' + '1145'
                    }
                }
            ]

            for (const t_data of c_data.tracks) {

                var this_track_info = [
                    {
                        tr: [
                            {
                                th: '用时',
                                class: 'td_text'
                            },
                            {
                                th: '阵容',
                                class: 'td_text'
                            },
                            {
                                th: '视频',
                                class: 'td_text'
                            },
                            {
                                th: '作者',
                                class: 'td_text'
                            },
                            {
                                th: '成本',
                                class: 'td_text'
                            },
                        ]
                    }
                ]

                var records_temp = t_data.records

                var unique_id = c_data._id + '_' + t_data._id

                records_temp.sort(function (a, b) {
                    return a.score - b.score
                })

                for (const r_data of records_temp) {

                    var role_avatar = []
                    var role_weapon = []

                    for (const role_data of r_data.role) {
                        role_avatar.push({
                            a: `/gi/char/${role_data.avatar}`,
                            t: [
                                {
                                    img: `/homdgcat-res/Avatar/UI_AvatarIcon_${role_data.avatar}.png`,
                                },
                                {
                                    span: role_data.avatar_num.toString(),
                                    class: 'ref'
                                }
                            ],
                            attr: {
                                target: '_blank'
                            },
                            class: 'role_single hover-shadow'
                        })
                        role_weapon.push({
                            a: `/gi/char/${role_data.weapon}`,
                            t: [
                                {
                                    img: `/homdgcat-res/Weapon/${weapon_data[role_data.weapon]}.png`
                                },
                                {
                                    span: role_data.weapon_num.toString(),
                                    class: 'ref'
                                }
                            ],
                            attr: {
                                target: '_blank'
                            },
                            class: 'role_single hover-shadow'
                        })
                    }

                    this_track_info.push({
                        tr: [
                            {
                                td: r_data.score.toString(),
                                class: 'td_score'
                            },
                            {
                                td: [
                                    {
                                        div: role_avatar,
                                        class: 'role_wrap role_avatar'
                                    },
                                    {
                                        div: role_weapon,
                                        class: 'role_wrap role_weapon'
                                    }
                                ],
                                class: 'td_roles'
                            },
                            {
                                td: {
                                    a: (window.innerWidth > 500) ? `//www.bilibili.com/video/${r_data.bv}` : `//player.bilibili.com/player.html?bvid=${r_data.bv}`,
                                    t: `<u>${r_data.bv}</u>`,
                                    attr: {
                                        target: '_blank'
                                    },
                                    class: 'hover-shadow'
                                },
                                class: 'td_text'
                            },
                            {
                                td: r_data.name,
                                class: 'td_text'
                            },
                            {
                                td: r_data.cost.toString(),
                                class: 'td_score'
                            },
                        ]
                    })

                    if (r_data.message) {
                        this_track_info.push({
                            tr: [
                                {
                                    td: {
                                        p: '留言：' + r_data.message,
                                        class: 'td_message',
                                    },
                                    a: {
                                        colspan: '5'
                                    }
                                }
                            ]
                        })
                    }

                }

                this_competition_info_contents.push({
                    scheduled: t_data.name,
                    class: `rule_title cd cd_0 content_${unique_id}`,
                    a: {
                        'data-id': unique_id
                    }
                })

                this_competition_info.push({
                    div: [
                        {
                            div: {
                                table: this_track_info,
                                class: 'area_record_table'
                            },
                            class: 'area_record_table_wrap'
                        }
                    ],
                    class: `area_track cd cd_1 data_${unique_id}`
                })

            }

            var shpli = c_data.name.split(' ')

            $('.blessing_card_area').render({
                div: [
                    {
                        p: c_data.name,
                        class: 'rule_title_big'
                    },
                    {
                        p: c_data.time,
                        class: 'rule_text'
                    },
                    {
                        a: `/gi/abyss/${shpli[shpli.length - 1]}`,
                        t: {
                            p: '> 深渊阵容 <',
                            class: 'rule_title',
                            style: {
                                'margin-top': '10px'
                            }
                        },
                        style: {
                            color: '#FFD780',
                            'text-align': 'center',
                            'font-weight': 'bold',
                        },
                        attr: {
                            target: '_blank'
                        }
                    },
                    /*{
                        p: '＋ 展开 ＋',
                        class: 'hd hd_1 hd_0'
                    },
                    {
                        p: '− 收起 −',
                        class: 'hd hd_2 hd_0'
                    },*/
                    {
                        div: this_competition_info_contents,
                        class: 'area_track_wrap'
                    },
                    {
                        div: this_competition_info,
                        class: 'area_track_wrap_2'
                    }
                ],
                class: 'card_7'
            })

        }
        $('.cd_1').hide()

    }

    function render_rules() {

        $('.blessing_card_area').empty()
        
        for (const i in data_rules) {
            var dat = data_rules[data_rules.length - 1 - i]
            var link = ''
            if (dat.url.includes('BV')) {
                link = (window.innerWidth > 500) ? `//www.bilibili.com/video/${dat.url}` : `//player.bilibili.com/player.html?bvid=${dat.url}`
            } else {
                link = `//www.bilibili.com/read/${dat.url}`
            }
            $('.blessing_card_area').render({
                a: link,
                t: [
                    {
                        p: dat.title,
                        class: 'rule_title'
                    },
                    {
                        p: dat.update_time,
                        class: 'rule_text'
                    }
                ],
                class: 'card_9 hover-shadow',
                attr: {
                    target: '_blank'
                }
            })
        }
        
    }

    function render_highlights() {

        $('.blessing_card_area').empty()
        
        for (const i in data_highlights) {

            var h_data = data_highlights[data_highlights.length - 1 - i]

            for (const i_data of h_data.items) {

                var link = (window.innerWidth > 500) ? `//www.bilibili.com/video/${i_data.url}` : `//player.bilibili.com/player.html?bvid=${i_data.url}`
                $('.blessing_card_area').render({
                    a: link,
                    t: [
                        {
                            p: `<color style='color:rgb(255, 172, 255)'><b>` + h_data.name + `</b></color> ` +  i_data.title,
                            class: 'rule_title'
                        },
                        {
                            p: i_data.creator,
                            class: 'rule_text',
                            style: {
                                color: '#FFD780'
                            }
                        },
                        {
                            div: {
                                iframe: '',
                                a: {
                                    src: `//player.bilibili.com/player.html?bvid=${i_data.url}&isOutside=true&autoplay=0`,
                                    scrolling: "no",
                                    border: "0",
                                    frameborder: "no",
                                    framespacing: "0",
                                    allowfullscreen: "true",
                                }
                            },
                            class: 'iframe_container'
                        }
                    ],
                    class: 'card_8',
                    attr: {
                        target: '_blank'
                    }
                })

            }

        }
        
    }

    function render_tutorials() {

        $('.blessing_card_area').empty()
        
        for (const i in data_tutorials) {
            var dat = data_tutorials[data_tutorials.length - 1 - i]
            var link = ''
            if (dat.url.includes('BV')) {
                link = (window.innerWidth > 500) ? `//www.bilibili.com/video/${dat.url}` : `//player.bilibili.com/player.html?bvid=${dat.url}`
            } else {
                link = `//www.bilibili.com/read/${dat.url}`
            }
            $('.blessing_card_area').render({
                a: link,
                t: [
                    {
                        p: dat.title,
                        class: 'rule_title'
                    },
                    {
                        p: dat.creator,
                        class: 'rule_text',
                        style: {
                            color: '#FFD780'
                        }
                    },
                    {
                        p: dat.intro,
                        class: 'rule_text'
                    },
                ],
                class: 'card_9 hover-shadow',
                attr: {
                    target: '_blank'
                }
            })
        }
        
    }

    $('body').on('click', '.select schedule', function () {
        if ($(this).hasClass('active')) return
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })

    $('body').on('click', '.hd_0', function () {
        $(this).toggle()
        $(this).siblings('.hd').toggle()
    })

    if (!lazy) {
        $('body').addClass('bg_3')
        a_section_white()
    } else {
        $('body').addClass('bg')
    }

    $('body').on('click', 'scheduled', function () {
        if ($(this).hasClass('active_2')) return
        $(this).siblings().removeClass('active_2')
        $(this).addClass('active_2')
        $(this).parent().siblings('.area_track_wrap_2').find('.cd_1').hide()
        $('.data_' + $(this).attr('data-id')).show()
    })

    console.log("FINISH")

})