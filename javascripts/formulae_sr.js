$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'

    init_title('公式大全 ' + txt.PAGE_TITLE[lang])

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

    var quotes = [
        '$$\\mathrm{Hom}_{\\,\\mathsf{dgCat}\\,}(\\,A\\otimes B\\,,C\\,)\\cong \\mathrm{Hom}_{\\,\\mathsf{dgCat}\\,}(\\,A\\,,\\,\\underline{\\mathrm{Hom}}(\\,B\\,,C\\,)\\,)$$'
    ]

    var data = [
        {
            Title: '防御力 抗性',
            DescList: [
                '通用抗性公式：（抗性@不能超出该范围#）$$抗性系数=1-抗性\\;\\;(-100\\%\\leqslant 抗性\\leqslant 90\\%)$$',
                '角色攻击敌人时：（敌人等级超过 100 时，按照 100 计算；扑满须改为 @1.5 × 等级 + 30#）$$防御系数=\\frac{角色等级 + 20}{(角色等级 + 20) + (敌人等级 + 20) \\times (1 - 减防\\% - 无视防御\\%)}$$',
                '敌人攻击角色时：$$防御系数=\\frac{10 \\times 敌人等级 + 200}{10 \\times 敌人等级 + 200 + 角色防御}$$',
            ]
        },
        {
            Title: '常规伤害',
            DescList: [
                '角色造成的常规伤害：$$最终伤害=\\;\\begin{aligned}&基础值 \\times 特殊独立乘区 \\\\ &\\times(1+增伤\\%)\\times(1+易伤\\%)\\times(1-虚弱\\%) \\\\ &\\times (1-减伤1\\%)\\times (1-减伤2\\%)\\times (1-减伤3\\%)\\times\\cdots \\\\ &\\times抗性系数\\times防御系数 \\times暴击区\\end{aligned}$$',
                '@基础值#：\\(攻击力\\times 倍率\\) ，攻击力可以替换为其他属性（生命值等）',
                [
                    '@增伤#：描述中带有【我方造成的伤害提升 @X%#】的效果',
                    '@易伤#：描述中带有【目标受到的伤害提升 @X%#】的效果',
                    '@虚弱#：描述中带有【虚弱】的特殊效果',
                    '@减伤#：描述中带有【目标受到的伤害降低 @X%#】的效果，所有减伤乘算后不低于 @1%#',
                    '多个减伤叠加时为@乘算#，比如两个 @50%# 减伤和一个 @75%# 减伤的作用相同',
                    '敌方@未被弱点击破时#，必定带有 @10%# 减伤'
                ],
                '@特殊独立乘区#：如最终伤害加成等极为特殊的效果'
            ]
        },
        {
            Title: '击破伤害',
            DescList: [
                '角色击破弱点时，造成的击破伤害：$$击破伤害=\\;\\begin{aligned}&击破基础值\\times 属性倍率 \\times 特殊独立乘区 \\\\& \\times(1+易伤\\%)\\\\ &\\times(1+击破特攻\\%)\\times(1+击破增伤\\%) \\\\ &\\times (1-减伤1\\%)\\times (1-减伤2\\%)\\times (1-减伤3\\%)\\times\\cdots \\\\ &\\times抗性系数\\times防御系数\\end{aligned}$$击破伤害不受@常规增伤#和@虚弱#效果的影响，但有专门的@击破特攻#和@击破增伤#',
                '$$击破基础值=3767.55\\times\\left(\\frac{韧性上限}{40}+0.5\\right)$$$$属性倍率=\\left| \\;\\;\\begin{aligned} &2.0\\;\\; 火\\;物理\\\\&1.5\\;\\;风 \\\\&1.0\\;\\;冰\\;雷 \\\\&0.5\\;\\;量子\\;虚数 \\end{aligned} \\right.$$',
            ]
        },
        {
            Title: '超击破伤害',
            DescList: [
                '特定情况下，角色可以造成超击破伤害，超击破伤害也属于击破伤害$$超击破伤害=\\;\\begin{aligned}&超击破基础值 \\times 超击破倍率\\times 特殊独立乘区 \\\\& \\times(1+易伤\\%)\\\\ &\\times(1+击破特攻\\%)\\times(1+击破增伤\\%) \\\\ &\\times (1-减伤1\\%)\\times (1-减伤2\\%)\\times (1-减伤3\\%)\\times\\cdots \\\\ &\\times抗性系数\\times防御系数\\end{aligned}$$超击破伤害不受@常规增伤#和@虚弱#效果的影响，但有专门的@击破特攻#和@击破增伤#',
                '$$超击破基础值=3767.55 \\times \\frac{实际削韧值}{10}$$',
            ]
        },
        {
            Title: '持续伤害',
            DescList: [
                '角色造成的持续伤害：$$持续伤害=\\;\\begin{aligned}&基础值 \\times 特殊独立乘区 \\\\ &\\times(1+增伤\\%)\\times(1+易伤\\%)\\times(1-虚弱\\%) \\\\ &\\times (1-减伤1\\%)\\times (1-减伤2\\%)\\times (1-减伤3\\%)\\times\\cdots \\\\ &\\times抗性系数\\times防御系数 \\times持续伤害暴击区\\end{aligned}$$',
                '@基础值#：\\(攻击力\\times 倍率\\) ，攻击力可以替换为其他属性（生命值等）',
                '持续伤害和常规伤害的唯一区别是，原本的暴击区被替换为@持续伤害暴击区#，只有极少数效果能提供此乘区'
            ]
        },
    ]

    $('container').render({
        template: {
            div: [
                {
                    p: '公式大全',
                    class: 'sch_2'
                },
                {
                    p: txt.Chart_Subtitle[lang],
                    class: 'avd avd_1',
                    style: {
                        'color': '#0066FF',
                        'font-weight': 'bold',
                        'text-align': 'center',
                        'margin-bottom': '13px',
                        'margin-top': '13px'
                    }
                },
                {
                    p: '',
                    class: 'quote_wrapper',
                },
                {
                    div: '',
                    class: 'blessing_card_area'
                }
            ],
            class: 'content'
        }
    })

    if (window.innerWidth <= 800) {
        for (const d of data) {
            var p_list = [
                {
                    p: d.Title,
                    class: 'p_title'
                },
                {
                    p: '＋',
                    class: 'pm group group_1'
                },
                {
                    p: '−',
                    class: 'pm group group_2'
                }
            ]
            if (d.Subtitle) {
                p_list.push({
                    p: d.Subtitle,
                    class: 'p_desc group group_2',
                    style: {
                        color: '#FFACFF',
                        'font-weight': 'bold',
                        'text-align': 'center'
                    }
                })
            }
            for (const s of d.DescList) {
                if (typeof s === 'string' || s instanceof String) {
                    var ss = s
                } else {
                    var ss = s.join('<br>')
                }
                p_list.push({
                    p: ss.replaceAll('#', '</color>').replaceAll('@', `<color style='color:#FFD780'>`),
                    class: 'p_desc group group_2'
                })
            }
            $('.blessing_card_area').render({
                div: p_list,
                class: 'card'
            })
        }
        $('body').on('click', '.pm', function () {
            $(this).toggle()
            $(this).siblings('.group').toggle()
        })
        $('.group_2').hide()
    } else {
        for (const d of data) {
            var p_list = [
                {
                    p: d.Title,
                    class: 'p_title'
                }
            ]
            if (d.Subtitle) {
                p_list.push({
                    p: d.Subtitle,
                    class: 'p_desc group group_2',
                    style: {
                        color: '#FFACFF',
                        'font-weight': 'bold',
                        'text-align': 'center'
                    }
                })
            }
            for (const s of d.DescList) {
                if (typeof s === 'string' || s instanceof String) {
                    var ss = s
                } else {
                    var ss = s.join('<br>')
                }
                p_list.push({
                    p: ss.replaceAll('#', '</color>').replaceAll('@', `<color style='color:#FFD780'>`),
                    class: 'p_desc group group_2'
                })
            }
            $('.blessing_card_area').render({
                div: p_list,
                class: 'card'
            })
        }
    }

    quote_render()

    MathJax.typeset()

    $('body').addClass(bg_name)

    console.log("FINISH")

    function quote_render() {

        var quote = quotes[Math.floor(Math.random() * quotes.length)]

        $('.quote_wrapper').html(quote)

    }

})