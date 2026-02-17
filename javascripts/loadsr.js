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

    var cur_ver = 'All'

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang3 + '/LoadingDesc.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {
        $('container').render({
            div: [{
                section: function (d) {
                    _option.forEach(function (me, ind) {
                        $(d.container).render({
                            schedule: me,
                            a: {
                                'data-id': me,
                                'class': ind == 0 ? 'active' : ''
                            }
                        })
                    })
                },
                class: 'load-ver'
            }, {
                div: achTable(),
                style: {
                    'overflow-x': 'scroll',
                },
                class: 'ach-table'
            }],
            class: 'content'
        })

        $('body').addClass(bg_name)
    }

    function achTable() {

        return {
            table: [
                {
                    tbody: function (d) {
                        _loadingdesc.forEach(function (ld) {
                            if (cur_ver == 'All' || cur_ver == '全部' || ld.Ver.toFixed(1) == cur_ver) {
                                $(d.container).render({
                                    data: ld,
                                    template: {
                                        tr: [
                                            {
                                                td: '<b>' + ld.Name + '</b><br>' + ld.Desc,
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                        ]
                                    }
                                })
                            }
                        })
                    }
                }
            ],
            style: {
                width: '100%',
            },
            class: 'main-table'
        }

    }

    $('body').on('click', '.load-ver schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        cur_ver = $(this).attr('data-id')
        $('.ach-table').empty().render(achTable())
    });


})