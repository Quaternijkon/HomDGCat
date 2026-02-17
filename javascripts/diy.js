$(function () {

    var imgpre = $('#IMGPRE').val()
    init_title('妮可少女的DIY小屋 ' + computer_.MiscText.PAGE_TITLE[lang])

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

    var selected = ''

    $('container').render({
        template: {
            div: [
                {
                    p: '妮可少女的DIY小屋',
                    class: 'sch_2'
                },
                {
                    p: '妮可少女自创内容，请勿当真',
                    class: 'avd tip2',
                    style: {
                        margin: '12px 8px 14px',
                        'font-weight': 'normal',
                        'text-align': 'center',
                    }
                },
                {
                    p: computer_.MiscText.Abyss_Reminder[lang],
                    class: 'avd avd_1',
                    style: {
                        'color': '#6f6f6f',
                        'font-weight': 'bold',
                        'text-align': 'center',
                        'margin-bottom': '13px',
                        'margin-top': '13px'
                    }
                },
                {
                    div: [],
                    class: 'blessing_card_area'
                }
            ],
            class: 'content'
        }
    })

    for (const item of _diy) {
        $('.blessing_card_area').render({
            div: [
                {
                    p: item.Name,
                    class: 'name'
                },
                {
                    p: item.Title,
                    class: 'desc_small',
                    style: {
                        color: '#eeeeee',
                        'margin-top': '14px'
                    }
                },
                {
                    div: {
                        img: item.Icon,
                    },
                    class: 'img_wrap',
                    when: item.Icon && item.Icon.length
                },
                {
                    p: '妮可少女自创内容，请勿当真',
                    class: 'desc_small'
                },
                {
                    div: function (d) {
                        for (const desc of item.DescList) {
                            $(d.container).render({
                                p: "•  " + desc.replaceAll("#", "</color>").replaceAll("@", "<color style='color:#FFD780'>")
                            })
                        }
                    },
                    class: 'desc'
                }
            ],
            class: 'card'
        })
    }

    $('body').addClass(bg_name)

    $('body').on('click', '.pic', function () {
        if ($(this).attr('data-id') == selected) {
            clear_select()
        } else {
            selected = $(this).attr('data-id')
            do_select()
        }
    })

    console.log("FINISH")

})