$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()

    init_title((lang == 'CH' ? '教程' : 'Tutorials') + ' ' + txt.PAGE_TITLE[lang])

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

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang3 + '/Tutorial.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {
        
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
                schedule: o.Name,
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
        _tut.forEach(function (t, i) {
            if (t.Type.toString() != isNew) return
            $('.area').render({
                div: [
                    {
                        p: t.Name,
                        class: 'event-name'
                    },
                    {
                        div: {
                            div: [
                                {
                                    img: function (k) {
                                        return imgpre + 'images/tutorialpic/' + k.data.Image
                                    },
                                    class: 'tut_img'
                                },
                                {
                                    p: function (k) {
                                        return k.data.Desc.replaceAll("#", "</color>").replaceAll("@", "<color style='color:#f29e38;'>")
                                    },
                                    class: 'tut_p'
                                }
                            ],
                            class: 'tut',
                            data: t.Tuts
                        },
                        class: 'event-tut'
                    },
                ],
                class: 'a_section'
            })
        })
    }

})