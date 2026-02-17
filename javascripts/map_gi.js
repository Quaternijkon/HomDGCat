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

    var place = 1

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/map.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        $('container').render({
            template: {
                div: [
                    {
                        section: '',
                        class: 'rar'
                    },
                    {
                        div: [
                            {
                                span: '＋',
                                class: 'plus'
                            },
                            {
                                span: '',
                                class: 'mid'
                            },
                            {
                                span: '−',
                                class: 'minus'
                            },
                        ],
                        style: {
                            width: '100%',
                            display: 'flex',
                            'justify-content': 'center',
                            'line-height': '1',
                        },
                        a: {
                            'id': 's1'
                        }
                    },
                    {
                        div: [
                            {
                                span: '＋',
                                class: 'plus'
                            },
                            {
                                span: '',
                                class: 'mid'
                            },
                            {
                                span: '−',
                                class: 'minus'
                            },
                        ],
                        style: {
                            'justify-content': 'center',
                            'line-height': '1',
                        },
                        a: {
                            'id': 's2'
                        }
                    },
                    {
                        div: [],
                        class: 'area',
                    }
                ],
                class: 'content'
            }
        })
    
        _map.forEach(function (o, j) {
            $('.rar').render({
                schedule: o.Name,
                class: (j + 1 == place) ? 'active' : '',
                a: {
                    'data-id': j + 1
                }
            },)
        })
    
        renderMap(0)

        $('body').addClass(bg_name)

    }

    $('body').on('click', '.rar schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        place = $(this).attr('data-id')
        $(this).addClass('active').siblings('schedule').removeClass('active');
        renderMap(0)
    })

    var unit = 1024
    var scale = 0.4

    function renderMap(k) {
        $('.area').empty()
        var dat = []
        var xlist = []
        var ylist = []
        for (const [n, p] of Object.entries(_map[place - 1].Parts)) {
            var spl = n.split("_")
            var x = -parseInt(spl[spl.length - 1])
            var y = -parseInt(spl[spl.length - 2])
            if (p.length) {
                x = -(p[1] || 0)
                y = -(p[0] || 0)
            }
            dat.push({
                Name: n,
                X: x,
                Y: y
            })
            xlist.push(x)
            ylist.push(y)
        }
        xmin = Math.min(...xlist)
        ymin = Math.min(...ylist)
        xlen = Math.max(...xlist) - xmin + 1
        ylen = Math.max(...ylist) - ymin + 1
        if (!k) scale = Math.ceil(_map[place - 1].Scale * Math.max(window.innerWidth, 600) / (xlen * unit) * 20) / 20
        $('.mid').html(parseInt(scale * 100) + '%')
        $('.area').render({
            div: '',
            a: {
                id: 'map',
            },
            style: {
                width: (xlen * unit) + 'px',
                position: 'relative',
                transform: `scale(${scale})`,
                'transform-origin': 'top left'
            }
        })
        for (const i in dat) {
            $('#map').render({
                div: {},
                style: {
                    position: 'absolute',
                    left: ((dat[i].X - xmin) * unit) + 'px',
                    top: ((dat[i].Y - ymin) * unit) + 'px',
                    width: `${unit}px`,
                    height: `${unit}px`,
                    'background-image': `url(${imgpre}images/Map/${dat[i].Name}.png)`,
                    'background-size': 'contain'
                }
            })
        }
        $('.area').css('height', (ylen * unit * scale) + 'px')
    }

    $('body').on('click', '.plus', function () {
        if (scale >= 2) return
        scale += 0.05
        $('.mid').html(parseInt(scale * 100) + '%')
        $('#map').css('transform', `scale(${scale})`)
        $('.area').css('height', (ylen * unit * scale) + 'px')
    })

    $('body').on('click', '.minus', function () {
        if (scale <= 0.1) return
        scale -= 0.05
        $('.mid').html(parseInt(scale * 100) + '%')
        $('#map').css('transform', `scale(${scale})`)
        $('.area').css('height', (ylen * unit * scale) + 'px')
    })

    var ojb = document.getElementsByClassName("scroller")
    ojb[0].addEventListener("scroll", update)

    function update() {
        var ele = document.getElementById('s1')
        if (!ele) return
        var vo = ele.getBoundingClientRect()
        var top = vo.top
        if (top < 0) {
            $('#s2').css('display', 'flex')
        } else {
            $('#s2').hide()
        }
    }

})