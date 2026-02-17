$(function () {

    var imgpre = $('#IMGPRE').val()
    init_title('公式大全 ' + computer_.MiscText.PAGE_TITLE[lang])

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

    var quotes = [
        '$$\\mathrm{Hom}_{\\,\\mathsf{dgCat}\\,}(\\,A\\otimes B\\,,C\\,)\\cong \\mathrm{Hom}_{\\,\\mathsf{dgCat}\\,}(\\,A\\,,\\,\\underline{\\mathrm{Hom}}(\\,B\\,,C\\,)\\,)$$'
    ]

    var data = [
        {
            Title: '防御力 抗性',
            DescList: [
                '通用抗性公式：$$抗性系数=\\left|\\;\\;\\begin{aligned} &1-\\frac{抗性}{2}&抗性\\leqslant 0\\\\ &1-抗性&0\\leqslant抗性\\leqslant 75\\%\\\\ &\\frac{1}{4\\times抗性+1}&75\\%\\leqslant抗性\\end{aligned}\\right.$$',
                '角色攻击敌人时的防御系数：$$防御系数=\\frac{角色等级 + 100}{(角色等级 + 100) + (敌人等级 + 100) \\times (1 - 减防) \\times (1 - 无视防御)}$$（来自角色的减防不能超过 @90%# ，无视防御不能超过 @100%# ）',
                '敌人攻击角色时的防御系数：$$防御系数=\\frac{5 \\times 敌人等级 + 500}{5 \\times 敌人等级 + 500 + 角色防御}$$',
            ]
        },
        {
            Title: '常规伤害',
            DescList: [
                '角色造成的常规伤害：$$最终伤害=\\;\\begin{aligned}&(基础值+激化值+基础值加成) \\\\ &\\times(1+增伤\\%+易伤\\%-减伤\\%) \\\\ &\\times抗性系数\\times防御系数 \\\\ &\\times暴击区\\times蒸发融化系数\\end{aligned}$$注：若攻击没有出现伤害数字（例如命中@护盾#），则本次伤害@不会计算蒸发融化系数#',
                [
                    '@基础值#：\\(攻击力\\times 倍率\\) ，攻击力可以替换为其他属性（生命值、元素精通等）',
                    '@基础值加成#：描述中带有【造成的伤害提高 @X#】的效果'
                ],
                [
                    '@增伤#：描述中带有【我方造成的伤害提升 @X%#】的效果',
                    '@易伤#：描述中带有【目标受到的伤害提升 @X%#】的效果',
                    '@减伤#：描述中带有【目标受到的伤害降低 @X%#】的效果'
                ],
                [
                    '@激化值#：见【激化反应】章节',
                    '@蒸发融化系数#：见【增幅反应】章节'
                ]
            ]
        },
        {
            Title: '月结晶',
            Subtitle: '妮可少女 玉衡杯数据库 yuhengcup.wiki 6.3v1',
            DescList: [
                [
                    '月结晶的伤害计算和月感电一致，唯一的区别是直伤月结晶需把月感电的 @3# 换成 @1.6#，反应月姐姐需把月感电的 @1.8# 换成 @0.96#'
                ],
                [
                    '特定情况下，@岩#触及@水#时，会生成三枚月笼',
                    '每触发 @3# 次月结晶反应，三枚月笼各造成一次@月结晶伤害#',
                ],
                [
                    '$$直伤基础 = \\begin{aligned} & 1.6 \\times 属性\\times 倍率 \\times (1+基础提升\\%) \\\\ &\\times\\left( 1+\\frac{6\\times 元素精通}{元素精通 + 2000} + 月结晶增伤 \\% \\right)\\end{aligned}$$$$最终直伤= (直伤基础 + 额外提升) \\times 抗性系数 \\times 暴击区 \\times 擢升$$@基础提升#：兹白天赋 @14%#',
                    '@额外提升#：兹白天赋一（不受益于@精通增伤#、@反应增伤#）',
                ],
                '反应月结晶造成伤害时，@所有参与的角色#都会提供伤害值，但除@伤害最高#的角色外，其余角色的提供的伤害值会降低$$反应月结晶=\\begin{aligned} &1446.85 \\times 0.96 \\times (1+基础提升\\%) \\\\& \\times\\left( 1+\\frac{6\\times 元素精通}{元素精通 + 2000} + 月结晶增伤\\% \\right) \\\\& \\times 抗性系数 \\times 暴击区 \\times 擢升\\end{aligned}$$ $$最终伤害=伤害最高角色+\\frac{1}{2}第二高角色+\\frac{1}{12}第三高角色+\\frac{1}{12}第四高角色$$',
            ]
        },
        {
            Title: '月感电',
            Subtitle: '妮可少女 玉衡杯数据库 yuhengcup.wiki',
            DescList: [
                [
                    '特定情况下，@雷#触及@水#时，会生成一片不可移动的@雷暴云#，持续 @6s#',
                    '雷暴云：每 @2s# 攻击一次附近所有@同时具有雷和水#的目标，并消耗 @0.4# 元素量的雷和水（@破盾效率极低#）',
                    '触发月感电时，若附近已有雷暴云，则会@刷新持续时间#'
                ],
                [
                    '月感电的倍率为 \\(1.8\\) ，基础伤害为 \\(1446.85\\times1.8=2604.33\\)',
                    '月感电造成伤害时，@所有参与反应的角色#都会提供伤害值，但除@伤害最高#的角色外，其余角色的提供的伤害值会降低'
                ],
                '月感电@无视防御#，@可以暴击#（取决于每个角色自己的暴击率和暴击伤害）#$$反应月感电=\\begin{aligned} &1446.85 \\times 1.8 \\times (1+基础提升\\%) \\\\& \\times\\left( 1+\\frac{6\\times 元素精通}{元素精通 + 2000} + 月感电增伤\\% \\right) \\\\& \\times 抗性系数 \\times 暴击区 \\times 擢升\\end{aligned}$$ $$最终伤害=伤害最高角色+\\frac{1}{2}第二高角色+\\frac{1}{12}第三高角色+\\frac{1}{12}第四高角色$$若原本伤害最高的角色没有暴击，则有可能另一名暴击的角色成为最高',
                '某些角色可以基于攻击力，@直接造成月感电伤害#，通过这种方式造成的伤害@无视防御力#，@不受益于常规增伤/减伤#，但@受益于元素精通#，且有额外系数 @3×#：$$直伤月感电=\\begin{aligned} &3\\times 攻击力\\times 倍率 \\times (1+基础提升\\%) \\\\& \\times\\left( 1+\\frac{6\\times 元素精通}{元素精通 + 2000} + 月感电增伤\\% \\right) \\\\& \\times 抗性系数 \\times 暴击区 \\times 擢升\\end{aligned}$$',
            ]
        },
        {
            Title: '月绽放',
            Subtitle: '妮可少女 玉衡杯数据库 yuhengcup.wiki',
            DescList: [
                '特定情况下，@草#触及@水#时，会生成草原核，并为队伍提供@「草露」#，可被特定角色消耗',
                [
                    '草原核伤害@不算月绽放#，月绽放伤害@只包括直伤#'
                ],
                '—— <b>月绽放伤害</b>',
                [
                    '直伤月绽放@无视防御#，@不受益于常规增伤/减伤#，但@受益于元素精通#$$直伤基础 = \\begin{aligned} & 属性\\times 倍率 \\times (1+基础提升\\%) \\\\ &\\times\\left( 1+\\frac{6\\times 元素精通}{元素精通 + 2000} + 月绽放增伤 \\% \\right)\\end{aligned}$$$$最终直伤= (直伤基础 + 额外提升) \\times 抗性系数 \\times 暴击区 \\times 擢升$$@基础提升#：菈乌玛天赋 @14%#',
                    '@额外提升#：菈乌玛元素爆发（不受益于@精通增伤#、@反应增伤#）',
                ],
                '—— <b>草原核伤害</b>',
                '草原核伤害仍为@绽放/烈绽放/超绽放伤害#，反应倍率为：绽放 @2# | 烈绽放 超绽放 @3#$$草原核基础 = 1446.85 \\times 反应倍率 \\times \\left( 1+\\frac{16\\times 元素精通}{元素精通 + 2000} + 反应增伤\\% \\right)$$$$草原核伤害= \\begin{aligned}  &\\left(草原核基础 + 额外提升 \\right) \\times抗性系数\\end{aligned}$$@额外提升#：菈乌玛元素爆发（不受益于@精通增伤#、@反应增伤#）',
            ],
        },
        {
            Title: '激化反应',
            DescList: [
                [
                    '当@雷元素#触及@草元素#时，会按照 \\(1:1:1\\) 的比例互相消耗并生成@原激化元素#',
                    '原激化元素可以发生绽放和燃烧反应，在这些反应中的表现@和草元素相同#',
                    '原激化元素的持续时间：\\((6+5\\times元素量)\\) 秒'
                ],
                [
                    '雷和草不共存，但原激化和雷、原激化和草都可以共存',
                    '当@附着雷/草元素的攻击#命中具有原激化的目标时，将分别引发@超激化/蔓激化#反应，不消耗任何元素，但为本次伤害贡献@激化值#（完整公式见【常规伤害】章节）$$超激化值=1446.85 \\times 1.15 \\times \\left( 1 + \\frac{5\\times 元素精通}{元素精通 + 1200} + 超激化提高\\% \\right) $$$$蔓激化值=1446.85 \\times 1.25 \\times \\left( 1 + \\frac{5\\times 元素精通}{元素精通 + 1200} + 蔓激化提高\\% \\right) $$'
                ],
                [
                    '当敌人触发上述反应时，原本的 @1446.85# 的数值有变化：',
                    '90级 @1202.81# | 95级 @1411.74# | 100级 @1674.81#',
                    '105级 @1884.98# | 110级 @1963.85#'
                ]
            ]
        },
        {
            Title: '剧变反应',
            DescList: [
                [
                    '剧变反应包括：超载、超导、感电、燃烧、碎冰、扩散、绽放、超绽放、烈绽放',
                    '剧变反应造成的伤害@不受益于常规增伤/易伤/减伤#，且@无视防御力#、@不能暴击#',
                ],
                '$$剧变基础 = 1446.85 \\times 反应倍率 \\times \\left( 1+\\frac{16\\times 元素精通}{元素精通 + 2000} + 反应增伤\\% \\right)$$$$剧变伤害= \\begin{aligned}  &\\left(剧变基础 + 额外提升 \\right) \\times抗性系数\\end{aligned}$$@额外提升#：梦见月瑞希1命、菈乌玛元素爆发（不受益于@精通增伤#、@反应增伤#）',
                [
                    '反应倍率：',
                    '燃烧 @0.25#（每 0.25s 一次）',
                    '扩散 @0.6# | 超导 @1.5# | 感电 @2#',
                    '超载 @2.75# | 碎冰 @3#',
                    '绽放 @2# | 烈绽放 超绽放 @3#',
                ],
                [
                    '触发剧变反应没有冷却，但剧变反应的@伤害有冷却#：',
                    '每 @0.5s# 最多 @1# 次：超载',
                    '每 @0.5s# 最多 @2# 次：超导、碎冰、扩散、绽放、烈绽放、超绽放'
                ],
                [
                    '当敌人触发上述反应时，原本的 @1446.85# 的数值有变化：',
                    '90级 @1202.81# | 95级 @1411.74# | 100级 @1674.81#',
                    '105级 @1884.98# | 110级 @1963.85#'
                ]
            ]
        },
        {
            Title: '增幅反应',
            DescList: [
                [
                    '增幅反应包括：蒸发、融化',
                    '触发增幅反应时，会为本次伤害附加@蒸发融化系数#（完整公式见【常规伤害】章节）',
                    '若攻击没有出现伤害数字（例如命中@护盾#），则本次伤害不会计算@蒸发融化系数#',
                ],
                '$$蒸发融化系数=基础系数 \\times \\left( 1 + \\frac{2.78\\times 元素精通}{元素精通 + 1400} + 反应增伤\\% \\right) $$$$基础系数= \\left|\\;\\; \\begin{aligned} &2.0\\;\\; 蒸发\\;水\\to 火 \\\\&2.0\\;\\; 融化\\;火\\to 冰 \\\\&1.5\\;\\; 蒸发\\;火\\to 水 \\\\&1.5\\;\\; 融化\\;冰\\to 火 \\end{aligned} \\right. $$',
                '',
            ]
        },
        {
            Title: '结晶反应',
            DescList: [
                [
                    '触发@结晶#反应时，会掉落对应火/水/雷/冰元素的晶片，拾取后可获得护盾',
                    '结晶护盾对其自身属性的伤害有 @250%# 的吸收效率',
                ],
                '$$结晶盾量=1851.06\\times \\left( 1 + \\frac{4.44\\times 元素精通}{元素精通 + 1400} \\right)$$',
                '角色具有护盾时，护盾量还会受@护盾强效#影响，护盾强效取决于持有护盾的角色，而非创造晶片的角色',
            ]
        },
    ]

    var stuff = [
        {
            Title: 'Lunar Bloom',
            Subtitle: 'HomDGCat Wiki 6.0v1',
            DescList: [
                'Under certain conditions, when @Hydro# meets @Dendro#, generates a Dendro Core and applies @Verdant Dew# to characters. Certain characters can consume Verdant Dew.',
                [
                    'Dendro Core DMG is @not Lunar Bloom#!',
                    'Lunar Bloom @only consists of direct DMG#!',
                    'Currently the only Lunar Bloom DMG is Lauma Hold E and Lauma C6.',
                ],
                '—— <b>Lunar Bloom DMG</b>',
                [
                    'Lunar Bloom DMG @ignores DEF#, does not consider @ordinary DMG increase#, but considers @EM#$$Base DMG = \\begin{aligned} & Property\\times Multiplier \\times (1 + Base Bonus \\%) \\\\ &\\times\\left( 1+\\frac{6\\times EM}{EM + 2000} + Lunar Bloom Bonus \\% \\right)\\end{aligned}$$$$FinalDMG= (BaseDMG + ExtraDMG) \\times RES \\times CRIT$$@BaseBonus#: Lauma Passive @14%#',
                    '@ExtraDMG#: Lauma Q (Does not consider @EM# and @Lunar Bloom Bonus#)',
                ],
                '—— <b>Dendro Core DMG</b>',
                'Dendro Core DMG is still considered @Bloom# / @Burgeon# / @Hyperbloom# DMG. Multipliers are: Bloom @2# | Borgeon Hyperbloom @3#$$Base DMG = 1446.85 \\times Multiplier \\times \\left( 1+\\frac{16\\times EM}{EM + 2000} + ReactionBonus\\% \\right)$$$$FinalDMG= \\begin{aligned}  &\\left(BaseDMG + ExtraDMG \\right) \\times RES \\end{aligned}$$@ExtraDMG#: Lauma Q (Does not consider @EM# and @Lunar Bloom Bonus#)',
            ]
        },
        {
            Title: 'Lunar Crystallize',
            Subtitle: 'HomDGCat Wiki 6.3v1',
            DescList: [
                [
                    'Lunar Crystallize DMG is calculated in the same way as Lunar Charged DMG. The only difference is that Direct Lunar Crystallize has a multiplier of @1.6# instead of @3#, and Reaction Lunar Crystallize has a multiplier of @0.96# instead of @1.8#.',
                ],
                [
                    'Under certain conditions, when @Geo# meets @Hydro#, three Moondrifts appear.',
                    'After triggering Lunar Crystallize 3 times, each of the three Moondrifts deal Lunar Crystallize DMG once.',
                ],
                '$$Direct DMG=\\begin{aligned} &1.6\\times DEF\\times Multiplier \\times (1+Base Bonus\\%) \\\\& \\times\\left( 1+\\frac{6\\times EM}{EM + 2000} + DMG Bonus\\% \\right) \\\\& \\times RES \\times Crit \\times Elevation\\end{aligned}$$',
                'When dealing Reaction Lunar Crystallize DMG, @all participating characters# contribute to the DMG.$$Reaction DMG=\\begin{aligned} &1446.85 \\times 0.96 \\times (1+Base Bonus\\%) \\\\& \\times\\left( 1+\\frac{6\\times EM}{EM + 2000} + DMG Bonus\\% \\right) \\\\& \\times RES \\times Crit \\times Elevation\\end{aligned}$$ $$Final DMG=Highest+\\frac{1}{2}Second+\\frac{1}{12}Third+\\frac{1}{12}Fourth$$',
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
                    p: computer_.MiscText.Abyss_Reminder[lang],
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
                    p: [
                        '若角色为 <b>95</b> 级，将下列公式中的 <b>1446.85</b> 替换为 <b>1561.46</b>',
                        '若角色为 <b>100</b> 级，将下列公式中的 <b>1446.85</b> 替换为 <b>1674.81</b>',
                    ].join('<br>'),
                    class: 'avd avd_1',
                    style: {
                        'text-align': 'center',
                        'margin-bottom': '16px',
                        'margin-top': '-9px',
                        'line-height': '1.7',
                    }
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