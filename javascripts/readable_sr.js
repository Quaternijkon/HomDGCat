$(function () {

    var imgpre = $('#IMGPRE').val()
    document.title = txt.PAGE_TITLE[lang]
    var avid = $('#AVID').val()

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

    var type_id = 0
    var is_search = 0

    let script_computer = document.createElement('script')
    script_computer.src = (lang == 'CH') ? '/TextMap/SR_Book_CH.js' : '/TextMap/SR_Book_EN.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        _title = (lang == 'CH') ? '星穹铁道 阅读物搜索' : 'HSR Readables Search'
        _button_search = (lang == 'CH') ? '搜索' : 'Search'
        _button_clear = (lang == 'CH') ? '清空' : 'Clear'

        $('container').render({
            div: [
                {
                    p: _title,
                    class: 'ttl',
                    style: {
                        'text-align': 'center',
                        'font-weight': 'bold',
                        'margin-bottom': '15px',
                    }
                },
                {
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
                                span: _button_search
                            },
                            class: 'but'
                        },
                        {
                            span: {
                                span: _button_clear
                            },
                            class: 'but_2'
                        }
                    ],
                    class: 'input_wrap'
                },
                {
                    div: function (g) {
                        for (const i in _series) {
                            var s = _series[_series.length - 1 - i]
                            $(g.container).render({
                                schedule: s.Name,
                                a: {
                                    'data-id': s._id
                                },
                                class: (i != 0) ? '' : 'active'
                            })
                        }
                    },
                    class: 'select'
                },
                {
                    p: '＋',
                    class: 'pm_all pm_show toggle_show'
                },
                {
                    p: '−',
                    class: 'pm_all pm_hide toggle_hide',
                    style: {
                        display: 'none'
                    }
                },
                {
                    div: '',
                    class: 'results'
                }
            ],
            class: 'content'
        })

        $('body').addClass(bg_name)

        type_id = _series[_series.length - 1]._id
        renderResult()

    }

    $('body').on('click', '.but', function () {
        is_search = 1
        renderResult()
    })

    $('body').on('click', '.but_2', function () {
        is_search = 0
        $('#INPUT').val('')
        renderResult()
    })

    $('body').on('click', '.select schedule', function () {
        if ($(this).hasClass('active')) return
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        type_id = parseInt($(this).attr('data-id'))
        renderResult()
    })

    function renderResult() {
        $('.results').empty()
        var s = $('#INPUT').val()
        for (const dat of _books) {
            var search_found = 1
            if (is_search) {
                search_found = dat.Name.includes(s) || dat.Desc.includes(s)
                if (!search_found) {
                    for (const v of dat.Books) {
                        var name = v.Name ? v.Name : ''
                        search_found = search_found || name.includes(s) || v.Desc.includes(s)
                    }
                }
            }
            if (search_found && (dat.World == type_id)) {
                show(dat)
            }
        }
    }

    function show(d) {
        if (!d.Name) return
        $('.results').render({
            div: [
                {
                    p: d.Name,
                    style: {
                        'font-weight': 'bold'
                    },
                    class: 'readable_title'
                },
                {
                    p: text(d.Desc),
                },
                {
                    div: function (v) {
                        for (const h of d.Books) {
                            $(v.container).render({
                                div: [
                                    {
                                        p: [
                                            {
                                                span: '<color style="color:#CC0000">＋ </color>',
                                                class: 'toggle toggle_show',
                                            },
                                            {
                                                span: '<color style="color:#CC0000">− </color>',
                                                style: {
                                                    display: 'none'
                                                },
                                                class: 'toggle toggle_hide',
                                            },
                                            h.Name ? h.Name : ''
                                        ],
                                        class: 'pm'
                                    },
                                    {
                                        p: h.Desc,
                                        class: 'toggle toggle_hide',
                                        style: {
                                            display: 'none'
                                        },
                                    }
                                ]
                            })
                        }
                    }
                }
            ],
            class: 'result_single'
        })
    }

    function text(t) {
        if (!t) return ''
        var temp = t
        while (temp.includes('<color=')) {
            var start = temp.indexOf('<color=')
            var end = temp.indexOf('>', start)
            var color = temp.substring(start + 7, end)
            if (color == "#FFFFFFFF") temp = temp.replaceAll(temp.substring(start, end + 1), `<color style='color:${color};background-color:#27363E'>`)
            else temp = temp.replaceAll(temp.substring(start, end + 1), `<color style='color:${color}'>`)
        }
        return temp
    }

    $('body').on('click', '.pm', function () {
        $(this).siblings('.toggle').toggle()
        $(this).find('.toggle').toggle()
    })

    $('body').on('click', '.pm_show', function () {
        $(`.toggle_hide`).show()
        $(`.toggle_show`).hide()
    })

    $('body').on('click', '.pm_hide', function () {
        $(`.toggle_hide`).hide()
        $(`.toggle_show`).show()
    })

})