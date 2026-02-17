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

    var ml = 0

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang3 + '/Curio.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {
        $('container').render({
            template: {
                div: [
                    {
                        section: {
                            schedule: `[[.]]`,
                            data: [lang == 'EN' ? 'All' : '全部'].concat(_verlist),
                            event: {
                                click: function (d) {
                                    if ($(d.sender).hasClass('active')) {
                                        return;
                                    }
                                    $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                                    miracleRender(d.org_data);
                                }
                            }
                        },
                        class: 'ver'
                    },
                    {
                        hr: '',
                        style: {
                            'margin-bottom': '0px'
                        }
                    },
                    {
                        div: [],
                        class: 'miracle_card_area'
                    }
                ],
                class: 'content'
            }
        })
    
        $('.ver schedule:nth-child(1)').addClass('active')
        miracleRender('All')

        $('body').addClass(bg_name)
    
    }

    function miracleRender(k) {
        console.log(k)
        var flag = (k == 'All') || (k == '全部')
        $('.miracle_card_area').empty()
        _curio.forEach(function (t) {
            if (flag || k == t.Ver) {
                $('.miracle_card_area').render({
                    template: {
                        div: [
                            {
                                img: imgpre + 'images/Miracle/' + t.Icon,
                                class: 'icon'
                            },
                            {
                                p: t.Name,
                                class: 'name'
                            },
                            {
                                p: t.Desc,
                                class: 'desc'
                            },
                            {
                                hr: '',
                                style: {
                                    'border-color': '#bbbbbb'
                                },
                                class: 'simple'
                            },
                            {
                                p: t.Story,
                                class: 'story simple',
                                style: {
                                    display: ml ? 'none' : ''
                                }
                            },
                            {
                                div: '+',
                                class: 'ml'
                            },
                        ],
                        class: 'curio'
                    }
                })
            }
        })
    }
    
    $('body').on('click', '.ml', function () {
        ml = 1 - ml
        if (ml) {
            $('.simple').hide()
        } else {
            $('.simple').show()
        }
    })

})