$(function () {

    var imgpre = $('#IMGPRE').val()
    init_title((lang == 'CH' ? '剧情记录' : 'Quest Logs') + ' ' + computer_.MiscText.PAGE_TITLE[lang])

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

    var I_TYPE = "AQ"

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/quests.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        $('container').render({
            template: {
                div: [
                    {
                        p: (lang == 'CH') ? '剧情记录' : 'Quest Logs',
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
                            'font-weight': 'bold',
                            'text-align': 'center',
                            'margin-bottom': '13px'
                        }
                    },
                    {
                        section: [
                            {
                                schedule: {
                                    CH: '剧情搜索',
                                    EN: 'Dialogue Search'
                                }[lang],
                                style: {
                                    'border-width': '2px',
                                    'border-color': '#F29E38'
                                },
                                event: {
                                    click: function () {
                                        window.open('/gi/dialog', "_blank")
                                    }
                                },
                                class: 'schhh sch'
                            },
                            {
                                schedule: {
                                    CH: '魔神任务',
                                    EN: 'Archon Quests'
                                }[lang],
                                a: {
                                    'data-id': 'AQ',
                                },
                                class: 'sch active'
                            },
                            {
                                schedule: {
                                    CH: '传说任务',
                                    EN: 'Story Quests'
                                }[lang],
                                a: {
                                    'data-id': 'LQ',
                                },
                                class: 'sch'
                            },
                            {
                                schedule: {
                                    CH: '世界任务',
                                    EN: 'World Quests'
                                }[lang],
                                a: {
                                    'data-id': 'WQ',
                                },
                                class: 'sch'
                            },
                            {
                                schedule: {
                                    CH: '活动任务',
                                    EN: 'Event Quests'
                                }[lang],
                                a: {
                                    'data-id': 'EQ',
                                },
                                class: 'sch'
                            },
                        ],
                        class: 'path'
                    },
                    {
                        div: [],
                        class: 'blessing_card_area'
                    }
                ],
                class: 'content'
            }
        })

        renderItems()

        $('body').addClass(bg_name)

    }

    $('body').on('click', '.path schedule', function () {
        if ($(this).hasClass('schhh')) {
            return;
        }
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        I_TYPE = $(this).attr('data-id')
        renderItems()
    })

    function renderItems() {
        $('.blessing_card_area').empty()
        _chapters[I_TYPE].forEach(function (t) {
            $('.blessing_card_area').render({
                a: `/gi/quests/${t._id}`,
                t: [
                    {
                        div: {
                            img: imgpre + 'images/ChapterIcon/' + t.Pic + '.png',
                        },
                        when: t.Pic != "",
                        class: 'avatar-head1'
                    },
                    {
                        div: {
                            img: imgpre + 'images/ChapterIcon/' + t.Icon + '.png',
                        },
                        when: (t.Pic == "") && (t.Icon != ""),
                        class: 'avatar-head2'
                    },
                    {
                        p: t.Num,
                        when: t.Num != undefined,
                        style: {
                            'font-size': '0.8em'
                        }
                    },
                    {
                        p: t.Title || ('ID ' + t._id),
                        when: t.Title != undefined,
                        style: {
                            'font-size': '1em',
                            'font-weight': 'bold'
                        }
                    },
                    {
                        p: t.ImageTitle,
                        when: t.ImageTitle != undefined,
                        style: {
                            'font-size': '0.8em',
                            'font-weight': 'bold'
                        }
                    }
                ],
                class: 'avatar-card hover-shadow',
                attr: {
                    'data-id': t._id,
                    target: '_blank'
                }
            })
        })
    }

})