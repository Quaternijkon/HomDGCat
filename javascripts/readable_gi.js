$(function () {

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.PAGE_TITLE[lang]

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

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    _DATA = []
    loading = 1

    var type_id = 1
    var is_search = 0

    var fetch_path = (lang == 'CH') ? '/TextMap/GI_Book_CH.json' : '/TextMap/GI_Book_EN.json'
    fetch(fetch_path)
        .then(x => x.json())
        .then(y => {
            _DATA = y
            loading = 0
            begin()
        })

    function begin() {

        _title = (lang == 'CH') ? '原神 阅读物搜索' : 'GI Readables Search'
        _button_search = (lang == 'CH') ? '搜索' : 'Search'
        _button_clear = (lang == 'CH') ? '清空' : 'Clear'
        _hits = (lang == 'CH') ? '找到 # 条文本' : 'Found # results'
        _hits_initial = (lang == 'CH') ? '加载中...' : 'Loading data...'
        _hits_finish = (lang == 'CH') ? '加载完成' : 'Loading finished'

        $('container').render({
            div: [
                {
                    p: _title,
                    class: 'ttl',
                    style: {
                        'text-align': 'center',
                        'font-weight': 'bold',
                        'padding-top': '15px',
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
                    div: [
                        {
                            schedule: (lang == 'CH') ? '地图 剧情 书籍' : 'Overworld, Stories, Bookshelf',
                            a: {
                                'data-id': '1'
                            },
                            class: 'active'
                        },
                        {
                            schedule: (lang == 'CH') ? '时装' : 'Costumes',
                            a: {
                                'data-id': '2'
                            }
                        },
                        {
                            schedule: (lang == 'CH') ? '风之翼' : 'Gliders',
                            a: {
                                'data-id': '3'
                            }
                        },
                        {
                            schedule: (lang == 'CH') ? '圣遗物' : 'Artifacts',
                            a: {
                                'data-id': '9'
                            }
                        },
                        {
                            schedule: (lang == 'CH') ? '单手剑' : 'Swords',
                            a: {
                                'data-id': '4'
                            }
                        },
                        {
                            schedule: (lang == 'CH') ? '双手剑' : 'Claymores',
                            a: {
                                'data-id': '5'
                            }
                        },
                        {
                            schedule: (lang == 'CH') ? '弓' : 'Bows',
                            a: {
                                'data-id': '6'
                            }
                        },
                        {
                            schedule: (lang == 'CH') ? '法器' : 'Catalysts',
                            a: {
                                'data-id': '7'
                            }
                        },
                        {
                            schedule: (lang == 'CH') ? '长柄武器' : 'Polearms',
                            a: {
                                'data-id': '8'
                            }
                        },
                    ],
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
        if (loading) return
        $('.results').empty()
        var s = $('#INPUT').val()
        for (const dat of _DATA) {
            var search_found = !is_search || dat.Name.includes(s) || dat.Books.includes(s)
            if (search_found && check(dat._id)) {
                show(dat)
            }
        }
    }

    function check(id) {
        if (type_id == 1) {
            return (id < 140000)
        } else if (type_id == 2) {
            return (id >= 340000)
        } else if (type_id == 3) {
            return (id >= 140000) && (id <= 149999)
        } else if (type_id == 9) {
            return (id >= 180000) && (id <= 189999)
        } else if (type_id == 4) {
            return (id >= 191000) && (id <= 191999)
        } else if (type_id == 5) {
            return (id >= 192000) && (id <= 192999)
        } else if (type_id == 6) {
            return (id >= 195000) && (id <= 195999)
        } else if (type_id == 7) {
            return (id >= 194000) && (id <= 194999)
        } else if (type_id == 8) {
            return (id >= 193000) && (id <= 193999)
        } else {
            return 0
        }
    }

    function show(d) {
        if (!d.Books.length) return
        $('.results').render({
            div: [
                {
                    p: [
                        {
                            span: '<color style="color:#CC0000">＋ </color>',
                            class: 'toggle toggle_show',
                            a: {
                                'data-id': d._id
                            },
                        },
                        {
                            span: '<color style="color:#CC0000">− </color>',
                            style: {
                                display: 'none'
                            },
                            class: 'toggle toggle_hide',
                            a: {
                                'data-id': d._id
                            },
                        },
                        d.Name
                    ],
                    class: 'pm readable_title',
                    a: {
                        'data-id': d._id
                    },
                },
                {
                    p: d.Loc,
                    a: {
                        'data-id': d._id
                    },
                    style: {
                        display: 'none'
                    },
                    class: 'toggle toggle_hide',
                    when: d.Loc && d.Loc.length
                },
                {
                    p: text(d.Books),
                    a: {
                        'data-id': d._id
                    },
                    style: {
                        display: 'none'
                    },
                    class: 'toggle toggle_hide'
                },
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
        var id = $(this).attr('data-id')
        $(`.toggle[data-id=${id}]`).toggle()
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