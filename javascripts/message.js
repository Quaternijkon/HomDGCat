$(function () {

    var imgpre = $('#IMGPRE').val()

    document.title = txt.PAGE_TITLE[lang]

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

    var warn = {
        CH: '注：测试服里不一定有主线剧情',
        EN: 'Note: The mainline story is sometimes not included in beta versions.',
    }

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang3 + '/LineCount.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {
        
        $('container').render({
            div: [
                {
                    p: (lang == 'CH') ? '台词数统计' : 'Line Count',
                    style: {
                        'text-align': 'center',
                        'font-weight': 'bold',
                        'font-size': '1.6em',
                        'margin-bottom': '10px',
                        'margin-top': '10px',
                        width: '100%'
                    }
                },
                {
                    p: txt.Chart_Subtitle[lang],
                    class: 'avd f',
                    style: {
                        'color': 'rgb(0, 102, 255)',
                        'font-weight': 'bold',
                        'text-align': 'center',
                        'margin': '2px 0 14px',
                        width: '100%'
                    }
                },
                {
                    p: warn[lang],
                    class: 'avd f',
                    style: {
                        'text-align': 'center',
                        'margin': '2px 10px 14px',
                        width: '100%'
                    }
                },
            ],
            class: 'content'
        })

        _data.forEach(function (t, i) {
            $('.content').render({
                div: [
                    {
                        p: VER_SR.includes(t.Ver) ? VER_SR : t.Ver,
                        class: 'event-name'
                    },
                    {
                        div: {
                            span: '≥ 51',
                            class: 'plus'
                        },
                        class: 'event-sel ww',
                        a: {
                            'data-id': i + 1,
                            'data-hd': "no"
                        }
                    },
                    {
                        div: '',
                        class: 'w w-' + (i + 1)
                    },
                    {
                        div: {
                            span: '21 ~ 50',
                            class: 'plus'
                        },
                        class: 'event-sel xx',
                        a: {
                            'data-id': i + 1,
                            'data-hd': "no"
                        }
                    },
                    {
                        div: '',
                        class: 'x x-' + (i + 1)
                    },
                    {
                        div: {
                            span: '11 ~ 20',
                            class: 'plus'
                        },
                        class: 'event-sel yy',
                        a: {
                            'data-id': i + 1,
                            'data-hd': "no"
                        }
                    },
                    {
                        div: '',
                        class: 'y y-' + (i + 1)
                    },
                    {
                        div: {
                            span: '1 ~ 10',
                            class: 'plus'
                        },
                        class: 'event-sel zz',
                        a: {
                            'data-id': i + 1,
                            'data-hd': "no"
                        }
                    },
                    {
                        div: '',
                        class: 'z z-' + (i + 1)
                    }
                ],
                class: 'a_section'
                
            })
            for (const [d, n] of Object.entries(t.Talk)) {
                var ts = {
                    span: d + ' <b><color style="color:#f29e38">' + n + '</color></b>',
                    class: 'f'
                }
                if (n > 50) {
                    $('.w-' + (i + 1)).render(ts)
                } else if (n <= 50 && n > 20) {
                    $('.x-' + (i + 1)).render(ts)
                } else if (n <= 20 && n > 10) {
                    $('.y-' + (i + 1)).render(ts)
                } else {
                    $('.z-' + (i + 1)).render(ts)
                }
            }
        })

        $('.w').hide()
        $('.x').hide()
        $('.y').hide()
        $('.z').hide()

        $('body').addClass(bg_name)

    }

    $('body').on('click', '.ww', function (d) {
        var g = $(this).attr('data-hd')
        var id = $(this).attr('data-id')
        if (g == 'yes') {
            $(this).attr('data-hd', 'no')
            $('.w-' + id).hide()
            $(this).find('span').css('border-color', '#eeeeee')
        } else {
            $(this).attr('data-hd', 'yes')
            $('.w-' + id).show()
            $(this).find('span').css('border-color', '#f29e38')
        }
    })

    $('body').on('click', '.yy', function (d) {
        var g = $(this).attr('data-hd')
        var id = $(this).attr('data-id')
        if (g == 'yes') {
            $(this).attr('data-hd', 'no')
            $('.y-' + id).hide()
            $(this).find('span').css('border-color', '#eeeeee')
        } else {
            $(this).attr('data-hd', 'yes')
            $('.y-' + id).show()
            $(this).find('span').css('border-color', '#f29e38')
        }
    })

    $('body').on('click', '.xx', function (d) {
        var g = $(this).attr('data-hd')
        var id = $(this).attr('data-id')
        if (g == 'yes') {
            $(this).attr('data-hd', 'no')
            $('.x-' + id).hide()
            $(this).find('span').css('border-color', '#eeeeee')
        } else {
            $(this).attr('data-hd', 'yes')
            $('.x-' + id).show()
            $(this).find('span').css('border-color', '#f29e38')
        }
    })

    $('body').on('click', '.zz', function (d) {
        var g = $(this).attr('data-hd')
        var id = $(this).attr('data-id')
        if (g == 'yes') {
            $(this).attr('data-hd', 'no')
            $('.z-' + id).hide()
            $(this).find('span').css('border-color', '#eeeeee')
        } else {
            $(this).attr('data-hd', 'yes')
            $('.z-' + id).show()
            $(this).find('span').css('border-color', '#f29e38')
        }
    })

})