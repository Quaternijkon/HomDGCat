$(function () {

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.PAGE_TITLE[lang]

    var cur_group = 0
    var cur_ver = ""
    var showing = 0

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

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/load.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        vers = []
        _LoadTip[0].Data.forEach(function (t) {
            if (t.Ver.length && !vers.includes(t.Ver)) {
                vers = [t.Ver].concat(vers)
            }
        })

        $('container').render({
            div: [{
                section: function (d) {
                    var x = (lang == 'CH') ? '全部' : 'All'
                    var ver_dict = {
                        [x]: '-'
                    }
                    vers.forEach(function (me) {
                        show = (me == "")
                        ver_dict[me] = me
                    })
                    $(d.container).render({
                        select: '',
                        options: ver_dict,
                        class: 'load-ver-select'
                    })
                    $('.load-ver-select').val("-")
                },
                class: 'load-ver'
            },  {
                div: '',
                style: {
                    'overflow-x': 'scroll',
                    'transform': 'rotateX(180deg)',
                },
                class: 'ach-table'
            }],
            class: 'content'
        })

        $('.load-group').hide()

        $('.ach-table').render(achTable(cur_ver, cur_group))

        $('body').addClass(bg_name)

    }

    $('body').on('click', '.showtop', function () {
        showing = 1 - showing
        if (showing) {
            $('.load-group').show()
        } else {
            $('.load-group').hide()
        }
    })

    function c(arr1, arr2) {
        if (arr1.length && arr2.length) return arr1.some(item => arr2.includes(item))
        return true
    }

    $('body').on('change', '.load-ver-select', function () {
        $(this).addClass('active').siblings('schedule').removeClass('active')
        cur_ver = $(this).val().replace("-", "")
        $('.ach-table').empty().render(achTable(cur_ver, cur_group))
    });

    $('body').on('click', '.load-group schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        cur_group = parseInt($(this).attr('data-id')) % 114514
        $('.ach-table').empty().render(achTable(cur_ver, cur_group))
    });

    function achTable(v, g) {

        return {
            table: [
                {
                    tbody: function (d) {
                        _LoadTip[0].Data.forEach(function (ld) {
                            if (v == "" || v == ld.Ver) {
                                $(d.container).render({
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
                'transform': 'rotateX(180deg)',
            },
            class: 'main-table'
        }

    }

})