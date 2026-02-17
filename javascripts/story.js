$(function () {

    var imgpre = $('#IMGPRE').val()
    init_title((lang == 'CH' ? '任务' : 'Quest Logs') + ' ' + computer_.MiscText.PAGE_TITLE[lang])

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

    var I_TYPE = '1'

    var global_id = ''
    var avid = $('#AVID').val()
    if (!avid && window.location.hash) avid = window.location.hash.replace('#_', '')
    if (window.location.hash) window.location.hash = ''

    var ojb = document.getElementsByClassName("scroller")
    ojb[0].addEventListener("scroll", update)
    begun = 0

    var cur_coordinate = 0

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/story.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        $('container').render({
            template: {
                div: [
                    {
                        section: [
                            {
                                schedule: {
                                    img: imgpre + 'images/ChapterIcon/UI_ChapterIcon_Traveler.png'
                                },
                                class: 'active',
                                a: {
                                    'data-id': '1'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/ChapterIcon/UI_ChapterIcon_SkirkNew.png'
                                },
                                a: {
                                    'data-id': '2'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/ChapterIcon/UI_ChapterIcon_Common.png'
                                },
                                a: {
                                    'data-id': '10'
                                }
                            },
                        ],
                        class: 'path'
                    },
                    {
                        div: [],
                        class: 'blessing_card_area'
                    },
                    {
                        div: [],
                        class: 'mon_body content_flag',
                    }
                ],
                class: 'content'
            }
        })

        renderItems()

        $('.mon_body').hide()

        if (avid) {
            global_id = avid
            renderChapter()
        }

        $('body').addClass(bg_name)

    }

    $('body').on('click', '.path schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        I_TYPE = $(this).attr('data-id')
        renderItems()
    })

    function renderItems() {
        $('.blessing_card_area').empty()
        _chapter.forEach(function (t) {
            if (I_TYPE == '1' && (t._id / 1000 >= 2)) return
            if (I_TYPE == '2' && ((t._id / 1000 < 2) || (t._id / 1000 >= 10))) return
            if (I_TYPE == '10' && ((t._id / 1000 < 10) || (t._id / 1000 >= 100))) return
            $('.blessing_card_area').render({
                div: [
                    {
                        div: {
                            img: imgpre + 'images/ChapterIcon/' + t.Tab + '.png',
                        },
                        when: t.Tab != "",
                        class: 'avatar-head1'
                    },
                    {
                        div: {
                            img: imgpre + 'images/ChapterIcon/' + t.Icon + '.png',
                        },
                        when: (t.Tab == "") && (t.Icon != ""),
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
                        p: t.Title || '???',
                        when: t.Title != undefined,
                        style: {
                            'font-size': '1em',
                            'font-weight': 'bold'
                        }
                    },
                    {
                        p: t.IT,
                        when: t.IT != undefined,
                        style: {
                            'font-size': '0.8em',
                            'font-weight': 'bold'
                        }
                    }
                ],
                class: 'avatar-card hover-shadow',
                a: {
                    'data-id': t._id,
                }
            })
        })
    }

    $('body').on('click', '.avatar-card', function () {
        global_id = $(this).attr('data-id')
        renderChapter()
    })

    function renderChapter() {

        if (!_mq[global_id]) {
            global_id = ''
            return
        }

        cur_coordinate = $('.scroller').scrollTop()

        $('.blessing_card_area').hide()
        $('.path').hide()
        $('.mon_body').empty().render({
            template: [
                {
                    section: {
                        p: computer_.MiscText.Back[lang]
                    },
                    event: {
                        click: returnNormal
                    },
                    class: 'mon_head',
                    a: {
                        id: 'back_1',
                    },
                },
                {
                    section: [
                        {
                            p: computer_.MiscText.Back[lang]
                        },
                        {
                            closeicon: '✕'
                        }
                    ],
                    event: {
                        click: returnNormal
                    },
                    class: 'mon_head',
                    a: {
                        id: 'back_2',
                    },
                },
                {
                    div: {
                        div: [
                            {
                                div: {
                                    img: imgpre + 'images/ChapterIcon/' + _mq[global_id].Tab + '.png',
                                },
                                when: _mq[global_id].Tab != "",
                                class: 'weapon_left'
                            },
                            {
                                div: {
                                    img: imgpre + 'images/ChapterIcon/' + _mq[global_id].Icon + '.png',
                                },
                                when: (_mq[global_id].Tab == "") && (_mq[global_id].Icon != ""),
                                class: 'weapon_left'
                            },
                            {
                                div: [
                                    {
                                        div: [
                                            {
                                                p: _mq[global_id].Num,
                                                style: {
                                                    'font-weight': 'bold',
                                                    'text-align': 'center',
                                                    'font-size': '1.2em'
                                                },
                                                when: _mq[global_id].Num != "",
                                                class: 'weapon_title'
                                            },
                                            {
                                                p: _mq[global_id].Title,
                                                style: {
                                                    'font-weight': 'bold',
                                                    'text-align': 'center',
                                                    'font-size': '1.5em'
                                                },
                                                when: _mq[global_id].Title != "",
                                                class: 'weapon_title'
                                            },
                                            {
                                                p: _mq[global_id].IT,
                                                style: {
                                                    'font-weight': 'bold',
                                                    'text-align': 'center',
                                                    'font-size': '1em'
                                                },
                                                when: _mq[global_id].IT != "",
                                                class: 'weapon_title'
                                            },
                                            {
                                                p: computer_.MiscText.Computer_Show[lang],
                                                class: 'mon_head_ tag_span',
                                                style: {
                                                    'margin-top': '0px',
                                                    'margin-bottom': '15px',
                                                    color: 'rgb(255, 172, 255)'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        div: {
                                            p: _mq[global_id].Intro,
                                            class: 'event-desc2'
                                        },
                                        class: 'intro'
                                    }
                                ],
                                class: 'weapon_right'
                            }
                        ],
                        class: 'a_section_content mon_head'
                    },
                    class: 'a_section',
                    style: {
                        padding: '10px'
                    }
                },
            ]
        });

        _mq[global_id].MainQuests.forEach(function (t, ind) {
            $('.content_flag').render({
                div: [
                    {
                        p: t.Name,
                        class: 'event-name'
                    },
                    {
                        p: t.Desc,
                        class: 'event-desc'
                    },
                    {
                        div: function (k) {
                            for (const [d, n] of Object.entries(_reward[k.data])) {
                                var img = '/homdgcat-res/' + _material[d] + '.png'
                                $(k.container).render({
                                    div: [
                                        {
                                            img: img,
                                            style: {
                                                'width': '100%',
                                                'aspect-ratio': '1'
                                            },
                                            event: {
                                                error: function (d) {
                                                    $(d.sender).prop('src', '/homdgcat-res/Mat/UI_ItemIcon_120864.png')
                                                }
                                            },
                                        },
                                        {
                                            p: n.toString(),
                                            style: {
                                                'font-weight': 'bold',
                                                'font-size': '0.8em',
                                                'text-align': 'center'
                                            }
                                        }
                                    ],
                                    class: 'hover-shadow-',
                                    a: {
                                        'data-id': d,
                                        'data-type': ''
                                    }
                                })
                            }
                        },
                        data: t.R,
                        class: 'event-reward',
                        when: t.R && t.R.length
                    },
                ],
                class: 'a_section click-pop',
                a: {
                    'data-json': JSON.stringify(t.Sub),
                    'data-ind': ind.toString()
                }
            })
        })

        $('.mon_body').show()
        window.location.hash = '_' + global_id
        $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`));
        $('.scroller').scrollTop($('h3').height())
        if (_mq[global_id].Title) switch_title(_mq[global_id].Title)
        console.log("FINISH")

    }

    function returnNormal() {
        $('.mon_body').hide()
        $('.blessing_card_area').show()
        $('.path').show()
        $('.scroller').scrollTop(cur_coordinate)
        window.location.hash = ''
        $('h3 .tlsub').html(computer_.MiscText.Translate_.replaceAll("'>", `${window.location.hash}'>`));
        var tim = setInterval(function () {
            if (begun) {
                $('.changelog select').val(clvers(_VS, 1)[1])
                clearInterval(tim)
            }
        }, 200)
    }
    
    window.onhashchange = function() {
        if (!window.location.hash.includes("_")) {
            returnNormal()
        }
    }

    function update() {
        var ele = document.getElementById('back_1')
        if (!ele) return
        var vo = ele.getBoundingClientRect()
        var top = vo.top
        if (top < 0) {
            $('#back_2').css('display', 'flex')
        } else {
            $('#back_2').hide()
        }
    }

})