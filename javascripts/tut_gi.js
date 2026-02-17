$(function () {

    var imgpre = $('#IMGPRE').val()
    init_title((lang == 'CH' ? '教程' : 'Tutorials') + ' ' + computer_.MiscText.PAGE_TITLE[lang])

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

    show = 1

    has_2 = 0

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/tut_1.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        let script_computer_2 = document.createElement('script')
        script_computer_2.src = '/gi/' + lang3 + '/tut_2.js'
        document.head.append(script_computer_2)
        script_computer_2.onload = function () {
            has_2 = 1
            _tut_2.forEach(render)
        }

        isNew = _ver[0].Type

        $('container').render({
            template: {
                div: [
                    {
                        section: '',
                        class: 'rar'
                    },
                    {
                        hr: ''
                    },
                    {
                        div: [],
                        class: 'area'
                    }
                ],
                class: 'content'
            }
        })

        _ver.forEach(function (o, j) {
            $('.rar').render({
                schedule: {
                    img: imgpre + 'images/Misc/' + o.Img + '.png'
                },
                class: (o.Type == isNew) ? 'active' : '',
                a: {
                    'data-id': o.Type
                }
            },)
        })

        renderTut()

        $('body').addClass(bg_name)

    }

    $('body').on('click', '.rar schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        isNew = $(this).attr('data-id')
        $(this).addClass('active').siblings('schedule').removeClass('active');
        renderTut()
    })

    function renderTut() {
        $('.area').empty()
        _tut_1.forEach(render)
        if (has_2) {
            _tut_2.forEach(render)
        }
    }

    function render(t, i) {
        if (t.Y.toString() != isNew) return
        $('.area').render({
            div: [
                {
                    div: [
                        {
                            p: t.N,
                            class: 'event-name'
                        },
                        {
                            p: show ? ('− ' + t.S + ' −') : ('＋ ' + t.S + ' ＋'),
                            class: 'event-name-2',
                            a: {
                                'data-id': show ? '-' : '+'
                            }
                        },
                    ],
                    style: {
                        margin: '-7px 0 -2px 0',
                        cursor: 'pointer'
                    },
                    class: 'cl'
                },
                {
                    div: {
                        div: [
                            {
                                img: function (k) {
                                    return imgpre + 'images/Tutorial/' + k.data.I + '.png'
                                },
                                class: 'tut_img',
                                event: {
                                    error: function (d) {
                                        $(d.sender).remove()
                                    }
                                }
                            },
                            {
                                p: function (k) {
                                    return k.data.D.replaceAll("#", "</color>").replaceAll("@", "<color style='color:#f29e38;'>")
                                },
                                class: 'tut_p'
                            }
                        ],
                        class: 'tut',
                        data: t.T
                    },
                    class: 'event-tut',
                    style: show ? {} : {
                        display: 'none'
                    }
                },
            ],
            class: 'a_section'
        })
    }

    $('body').on('click', '.cl', function () {
        $(this).siblings('.event-tut').toggle()
        var iss = $(this).find('.event-name-2').attr('data-id')
        if (iss == '-') {
            $(this).find('.event-name-2').attr('data-id', '+')
            $(this).find('.event-name-2').html($(this).find('.event-name-2').html().replaceAll('−', '＋'))
        } else {
            $(this).find('.event-name-2').attr('data-id', '-')
            $(this).find('.event-name-2').html($(this).find('.event-name-2').html().replaceAll('＋', '−'))
        }
    })

    $('body').on('click', '#pm', function () {
        if (show) {
            $('#pm').html('＋')
            $('.event-tut').hide()
        } else {
            $('#pm').html('−')
            $('.event-tut').show()
        }
        show = 1 - show
    })

})