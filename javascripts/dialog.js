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


    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang3 + '/Dialog.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {
        
        $('container').render({
            div: {
                p: txt.N_D[lang],
                style: {
                    'text-align': 'center',
                    'font-weight': 'bold',
                    'font-size': '1.6em',
                    'margin-bottom': '10px',
                    'margin-top': '15px',
                }
            },
            class: 'content'
        })

        _index.forEach(function (t) {
            $('.content').render({
                div: [
                    {
                        p: t.Name,
                        class: 'event-name'
                    },
                    {
                        div: {
                            span: '＋',
                            class: 'plus',
                            a: {
                                'data-id': t.ID
                            }
                        },
                        class: 'event-sel ww',
                        a: {
                            'data-id': t.ID
                        }
                    },
                    {
                        div: '',
                        class: 'w w_' + t.ID
                    }
                ],
                class: 'a_section'
                
            })
            _talks[t.ID].forEach(function (u) {
                if (u.N.length) {
                    $('.w_' + t.ID).render({
                        p: `<b>${u.N}</b><br>${u.T}`
                    })
                } else {
                    $('.w_' + t.ID).render({
                        p: '• ' + u.T
                    })
                }
            })
        })

        $('body').addClass(bg_name)

    }

    $('body').on('click', '.ww', function () {
        var ID = $(this).attr('data-id')
        $('.w_' + ID).toggle()
        console.log($(this).find('span')[0].innerHTML)
        if ($(this).find('span')[0].innerHTML == '＋') {
            $(this).find('span')[0].innerHTML = '−'
        } else {
            $(this).find('span')[0].innerHTML = '＋'
        }
    })

})