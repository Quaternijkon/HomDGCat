$(function () {

    var imgpre = $('#IMGPRE').val()

    init_title(txt.About_Title[lang] + ' ' + txt.PAGE_TITLE[lang])

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang])
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
    $('h3 .links').css('margin-top', '23px')

    $('body').on('click', '._menu_', function () {
        popLinks(lang)
    })

    var desc = [
        {
            CH: '我目前是一名学生，在研究学习之余创建了玉衡杯数据库；现在的整个数据库都是<color style="color:#FFD780;">我一人制作和维护</color>的',
            EN: 'I am currently a student, and I created HomDGCat Wiki in my spare time. Now the entire wiki is written and <color style="color:#FFD780;">maintained by me alone</color>.'
        },
        {
            CH: '我运营玉衡杯数据库的目的，是为了给各位玩家高效地提供数据，让所有人都能方便地获取自己需要的信息',
            EN: 'The goal of HomDGCat Wiki is to efficiently provide data for all players, so that everyone can easily obtain the information that they need.'
        },
        {
            CH: '玉衡杯数据库不仅有官方信息，也有很多我自己创作的内容，例如角色的<color style="color:#FFD780;">深度机制数值</color>（妮可少女的研究），以及新怪物的<color style="color:#FFD780;">详细技能数据</color>和<color style="color:#FFD780;">机制解析</color>（怪物解析）',
            EN: 'Apart from official data, there is also a lot of stuff written by me. For example characters\' <color style="color:#FFD780;">advanced data</color> (HomDGCat\'s Notes) and <color style="color:#FFD780;">guides on the mechanics</color> of new enemies (Boss Guides).'
        },
        {
            CH: '玉衡杯数据库会在第一时间更新最新的数据；原神每星期更新数据的时候，在我这里一般是凌晨五点，但我也会及时进行更新',
            EN: 'HomDGCat Wiki updates data as soon as the game updates are out. Where I live now, it is usually 5 AM in the morning when Genshin Impact updates data every week, but I still process these updates as soon as possible.'
        },
    ]

    var text = [
        [
            {
                CH: '赞助',
                EN: 'Support'
            },
            {
                CH: '运营维护数据库不易，下面是一些赞助方式~',
                EN: 'Maintaining the wiki is hard work. Below are some ways to support~'
            }
        ],
        [
            {
                CH: '关于我：妮可少女',
                EN: 'About Me: HomDGCat'
            },
            {
                CH: '我是看到朋友玩<color style="color:#FFD780;"><b>刻晴</b></color>入坑原神的；看到刻晴的第一眼我就知道，她是我原神命中注定的单推！我入坑不久后就对游戏数据机制产生了兴趣。最初吸引我的问题是，深境螺旋12层的怪物血量是如何比大世界血量高那么多的？虽然12层的怪物等级是95~100级，比大世界的90级高一些，但这样的等级差距不足以解释巨大的血量差距。这是我研究<color style="color:#FFD780;"><b>原神解包</b></color>的契机。',
                EN: 'I started playing Genshin Impact after I saw a friend play <color style="color:#FFD780;"><b>Keqing</b></color>. The moment I saw Keqing, I knew she will be my favourite GI character forever! I picked up an interest in game data and mechanics a short while after I started playing. The first question that intrigued me was: Why is the HP of the enemies in Abyss 12 so much higher than overworld HP? F12 enemies are at levels 95~100, and overworld enemies are about level 90. This difference in level is not enough to account for the huge difference in HP. This is how I got into <color style="color:#FFD780;"><b>datamining</b></color>.'
            },
            {
                CH: '在 <b>2022</b> 年，我已经学会了很多解包相关的知识，也阅读了很多NGA大佬写的机制解析文章，比如【高等元素论】【角色产球学】【韧性力学】等等。这会儿我自己也进入了NGA，认识了很多NGA的创作者；我自己也在NGA写了不少文章。',
                EN: 'I started doing datamining since then, and in about 2022 I got interested in stuff about future versions. I started off by making graphs of future Abyss lineups, and then gradually started looking at future enemies and characters.'
            },
            {
                CH: '加入NGA之后，我开始对未来版本的信息做一些研究。最初只是做下版本深渊的怪物阵容图，可能有很多玩家就是因为这个认识我的，那时候我还叫【妮可少年】。后来我就逐渐开始做一些怪物机制，和未来版本的角色技能的研究了。',
                EN: 'I started looking into datamining HSR when it was still in CBT. I started playing when it was released, and later added the HSR section of HomDGCat Wiki. I played very little HSR at first, until I saw <color style="color:#FFD780;"><b>Yunli</b></color>\'s drip marketing. The moment I saw Yunli, I knew she will be my favourite HSR character forever!'
            },
            {
                CH: '星穹铁道内测的时候，我就开始研究解包星穹铁道了，正式开服后我成为了开服玩家，并且后来给玉衡杯数据库加上了星穹铁道部分。星穹铁道一开始玩得很少，直到我看到了<color style="color:#FFD780;"><b>云璃</b></color>的立绘。看到云璃的第一眼我就知道，她是我在星穹铁道里命中注定的单推！',
                EN: ''
            }
            
        ],
        [
            {
                CH: '玉衡杯数据库的历史',
                EN: 'Wiki\'s History'
            },
            {
                CH: '「玉衡杯」曾经是围绕刻晴的原神深渊竞速比赛，是原神最早的竞速赛之一。第一期玉衡杯（当时名为刻晴杯）于 <color style="color:#FFD780;"><b>2022</b></color> 年 <color style="color:#FFD780;"><b>4</b></color> 月（2.6版本）举办，距今已超过三年。',
                EN: 'HomDGCat Wiki was previously called \"Yuheng Cup Database.\" Yuheng Cup was a Keqing-centered Genshin Abyss speedrunning contest. The first Yuheng Cup was held in <color style="color:#FFD780;"><b>April 2022</b></color>, more than 3 years ago.'
            },
            {
                CH: '玉衡杯数据库原本是为参加玉衡杯的选手提供信息的数据库，最初只有查询怪物数据和深渊阵容的功能。',
                EN: 'Yuheng Cup Database was originally made for contestants to look up enemy data. The first edition only had the "Monsters" and "Spiral Abyss" features.'
            },
            {
                CH: '在 <color style="color:#FFD780;"><b>2023</b></color> 年 <color style="color:#FFD780;"><b>9</b></color> 月，我给玉衡杯数据库加上了原神的角色、武器、圣遗物数据，并把玉衡杯数据库独立了出来；在此之后，我又加入了星穹铁道的部分，玉衡杯数据库逐渐发展成了今天的模样。',
                EN: 'In <color style="color:#FFD780;"><b>September 2023</b></color>, I added the "Characters Weapons Artifacts" feature, and created an independent site for HomDGCat Wiki. Later I added the Honkai Star Rail part, and the Wiki gradually grew to what it is today.'
            }
        ],
        [
            {
                CH: '喜欢的东西~',
                EN: 'Things I Like~'
            },
            {
                CH: '我最喜欢的周本战斗曲是<color style="color:#FFD780;">《蚀形的灾祲》</color>（古斯托特）',
                EN: 'My favourite Weekly Boss BGM is <color style="color:#FFD780;"><b>Vitas Corrodens Pestis</b></color> (Gosoythoth)'
            },
            {
                CH: '我最喜欢的BOSS战斗曲是<color style="color:#FFD780;">《安魂的协奏曲》</color>（魔像督军）',
                EN: 'My favourite ordinary Boss BGM is <color style="color:#FFD780;"><b>Requiem Resonantia</b></color> (Legatus Golem)'
            },
            {
                CH: '我最喜欢的地区战斗曲是<color style="color:#FFD780;">《苍银的圣咒》</color>（挪德卡莱）',
                EN: 'My favourite area combat BGM is <color style="color:#FFD780;"><b>Syntyloitsut of Koitar</b></color> (Nod Krai)'
            },
            {
                CH: '星穹铁道暂时没什么特别喜欢的音乐...',
                EN: 'Currently there isn\'t any music in HSR that I really like...'
            },
            {
                CH: '我是<color style="color:#FFD780;">《风灵玉秀》</color>狂热粉！这是为数不多我看过的动漫之一，我的另一个网名「风铃儿」就取自其中的两位女主中的风铃儿',
                EN: ''
            }
        ],
        [
            {
                CH: '数据库的<color style="color:#FFD780;">各种</color><color style="color:#F29E38;">颜色</color>',
                EN: 'Wiki\'s <color style="color:#FFD780;">Multiple</color> <color style="color:#F29E38;">Colors</color>'
            },
            {
                CH: '随处可见的灰色背景：<color style="color:#EEEEEE;"><b> #27363E </b></color>，这是我从原神的角色技能界面提取的背景颜色',
                EN: 'Grey background color everywhere:<color style="color:#EEEEEE;"> <b> #27363E </b></color> . This is the background color I extracted from GI characters\' talent description pages.'
            },
            {
                CH: '文字颜色一：<color style="color:#FFD780;"><b> #FFD780 </b></color>，这是原神的高亮文字颜色',
                EN: 'Text highlight 1:<color style="color:#FFD780;"> <b> #FFD780 </b></color> . This is the color of highlighted text in GI.'
            },
            {
                CH: '文字颜色二：<color style="color:#F29E38;"><b> #F29E38 </b></color>，这是星穹铁道的高亮文字颜色',
                EN: 'Text highlight 2:<color style="color:#F29E38;"> <b> #F29E38 </b></color> . This is the color of highlighted text in HSR.'
            }
        ],
    ]

    $('body').addClass(bg_name)

    $('container').render({
        template: {
            div: {
                div: [
                    {
                        p: (lang == 'CH') ? '妮可少女' : 'HomDGCat',
                        class: 'bigname'
                    },
                    {
                        div: [
                            {
                                div: [
                                    {
                                        img: '/images/emote/Yunli/1.png'
                                    },
                                    {
                                        img: '/images/emote/Yunli/2.png'
                                    },
                                    {
                                        img: '/images/emote/Yunli/3.png',
                                        when: window.innerWidth >= 600
                                    },
                                    {
                                        img: '/images/emote/Keqing/1.png'
                                    },
                                    {
                                        img: '/images/emote/Keqing/2.png',
                                        when: window.innerWidth >= 600
                                    },
                                    {
                                        img: '/images/emote/Keqing/3.png',
                                        when: window.innerWidth >= 600
                                    },
                                    {
                                        img: '/images/emote/Keqing/6.png'
                                    },
                                    {
                                        img: '/images/emote/Keqing/18.png'
                                    },
                                    {
                                        img: '/images/emote/Keqing/19.png',
                                        when: window.innerWidth >= 600
                                    },
                                    {
                                        img: '/images/emote/Keqing/20.png',
                                        when: window.innerWidth >= 600
                                    },
                                ],
                                class: 'emotes'
                            },
                            {
                                p: desc[0][lang],
                                class: 'desc'
                            },
                            {
                                p: desc[1][lang],
                                class: 'desc'
                            },
                            {
                                p: desc[2][lang],
                                class: 'desc'
                            },
                            {
                                p: desc[3][lang],
                                class: 'desc'
                            },
                        ],
                        class: 'block_0 blk',
                    },
                    {
                        div: [
                            {
                                p: text[0][0][lang],
                                class: 'name'
                            },
                            {
                                p: text[0][1][lang],
                                class: 'desc2',
                                style: {
                                    'text-align': 'center'
                                }
                            },
                            {
                                p: `Patreon: <a href='https://www.patreon.com/c/homdgcat/shop' target='_blank'>www.patreon.com/c/homdgcat/shop</a>`,
                                class: 'desc2',
                                style: {
                                    'text-align': 'center'
                                }
                            },
                            {
                                div: [
                                    {
                                        img: '/homdgcat-res/UI/Alipay.png',
                                        class: 'Alipay'
                                    },
                                    {
                                        img: '/homdgcat-res/UI/Wechat_2.png',
                                        class: 'Wechat'
                                    }
                                ],
                                class: 'pay'
                            }
                        ],
                        class: 'block_1 blk',
                        when: 0
                    },
                    {
                        div: [
                            {
                                p: text[1][0][lang],
                                class: 'name'
                            },
                            {
                                p: text[1][1][lang],
                                class: 'desc2'
                            },
                            {
                                p: text[1][2][lang],
                                class: 'desc2'
                            },
                            {
                                p: text[1][3][lang],
                                class: 'desc2'
                            },
                            {
                                p: text[1][4][lang],
                                class: 'desc2'
                            },
                        ],
                        class: 'block_0 blk',
                    },
                    {
                        div: [
                            {
                                p: text[2][0][lang],
                                class: 'name'
                            },
                            {
                                p: text[2][1][lang],
                                class: 'desc2'
                            },
                            {
                                p: text[2][2][lang],
                                class: 'desc2'
                            },
                            {
                                p: text[2][3][lang],
                                class: 'desc2'
                            }
                        ],
                        class: 'block blk',
                    },
                    {
                        div: [
                            {
                                p: text[3][0][lang],
                                class: 'name'
                            },
                            {
                                p: text[3][1][lang],
                                class: 'desc2'
                            },
                            {
                                p: text[3][2][lang],
                                class: 'desc2'
                            },
                            {
                                p: text[3][3][lang],
                                class: 'desc2'
                            },
                            {
                                p: text[3][4][lang],
                                class: 'desc2'
                            },
                            {
                                p: text[3][5][lang],
                                class: 'desc2'
                            }
                        ],
                        class: 'block blk',
                    },
                    {
                        div: [
                            {
                                p: text[4][0][lang],
                                class: 'name'
                            },
                            {
                                p: text[4][1][lang],
                                class: 'desc2'
                            },
                            {
                                p: text[4][2][lang],
                                class: 'desc2'
                            },
                            {
                                p: text[4][3][lang],
                                class: 'desc2'
                            }
                        ],
                        class: 'block blk',
                    },
                ],
                class: 'mon_body'
            },
            class: 'content',
            style: {
                'padding-left': '0',
                'padding-right': '0',
            }
        }
    })

    console.log("FINISH")

    $('body').on('click', '.Alipay', function () {
        download('/homdgcat-res/UI/Alipay.png', '支付宝 Alipay')
    })

    $('body').on('click', '.Wechat', function () {
        download('/homdgcat-res/UI/Wechat_2.png', '微信 Wechat')
    })

    $('body').on('click', '.Paypal', function () {
        download('/homdgcat-res/UI/Paypal.png', 'Paypal')
    })

    function download(link, name) {
        $('.temp').remove()
        $('.content').render({
            a: link,
            attr: {
                download: `${name}.png`
            },
            style: {
                display: 'none'
            },
            t: {
                p: 'temp'
            },
            class: 'temp'
        })
        $('.temp p').click()
    }

})