$(function () {

    var imgpre = $('#IMGPRE').val()
    init_title((lang == "CH" ? '生日日历' : 'Birthday Calendar') + ' ' + computer_.MiscText.PAGE_TITLE[lang])

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

    $('container').render({
        template: {
            div: [
                {
                    p: (lang == "CH" ? '生日日历' : 'Birthday Calendar'),
                    class: 'sch_2'
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

    var birthdays_temp = []

    var _now = Date.now()
    var _year = new Date().getFullYear()

    for (const dat of _birthdays) {
        var stamp_1 = Date.parse(`${_year}-${dat.Birthday}T12:00:00+08:00`)
        var stamp_2 = Date.parse(`${_year + 1}-${dat.Birthday}T12:00:00+08:00`)
        var use_stamp = (stamp_1 < _now) ? stamp_2 : stamp_1
        var use_text = ((stamp_1 < _now) ? (_year + 1) : _year) + '-' + dat.Birthday
        birthdays_temp.push({
            Icon: dat.Icon,
            Stamp: use_stamp,
            Text: use_text,
        })
    }

    var keqing_temp = birthdays_temp[0]

    birthdays_temp.sort((a, b) => a.Stamp - b.Stamp)
    birthdays_temp = [keqing_temp].concat(birthdays_temp)

    for (const dat of birthdays_temp) {
        $('.blessing_card_area').render({
            div: [
                {
                    div: {
                        img: `/homdgcat-res/Avatar/${dat.Icon}.png`,
                        class: 'icon_5'
                    },
                    class: 'img_wrap'
                },
                {
                    p: dat.Text,
                    class: 'ppp'
                },
                {
                    p: show_difference(dat.Stamp - _now),
                    class: 'ppp'
                }
            ],
            class: 'single'
        })
    }

    function show_difference(a) {
        var days = Math.floor(a / 86400000)
        a %= 86400000
        var hours = Math.floor(a / 3600000)
        a %= 3600000
        var mins = Math.floor(a / 60000)
        a %= 60000
        if (days) return days + ((lang == 'CH') ? '天' : 'd')
        if (hours) return hours + ((lang == 'CH') ? '小时' : 'h')
        return mins + ((lang == 'CH') ? '分钟' : 'm')
    }

    $('body').addClass(bg_name)

    console.log("FINISH")

})