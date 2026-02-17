var April_1st = 0
var enable_about = 1

var quest_allow = 1

var anniversary_show = 0
var cur_time_0 = Date.now()
var keqing_birthday = Date.parse('2025-11-20T00:00:00+08:00')
var show_yhb = (cur_time_0 >= keqing_birthday)
//if ((cur_time_0 >= 1753930800000) && (cur_time_0 <= 1755165600000)) anniversary_show = 1

var txt = {
    "game_img": {
        "CH": '<img src="/images/emote/Yunli/1.png" class="game_img"> <b>',
        "EN": '<img src="/images/emote/Yunli/1.png" class="game_img_2"> <b>'
    },
    "TIT": {
        "CH": "妮可少女 玉衡杯数据库",
        "EN": "HomDGCat Wiki",
    },
    "PAGE_TITLE": {
        "CH": "玉衡杯数据库 - 原神 崩坏星穹铁道 数据库 - 妮可少女 HomDGCat",
        "EN": "HomDGCat Wiki - Genshin Impact & Honkai Star Rail Wiki By HomDGCat 妮可少女",
        "RU": "HomDGCat Wiki - Genshin Impact & Honkai Star Rail Wiki By HomDGCat 妮可少女",
    },
    "Title": {
        "CH": "<img src='/homdgcat-res/UI/_logo_2.png' class='logo_img_yhb'>",
        "EN": "<img src='/homdgcat-res/UI/_logo_3.png' class='logo_img_yhb'>",
        "RU": "HomDGCat Wiki",
    },
    "Affix": {
        "CH": " | <color style='color:#0066FF;'>妮可少女 玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
        "EN": " | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
    },
    "Subtitle": {
        "CH": "<p><b>yuhengcup.wiki | <span style='white-space:pre;'><a href='https://space.bilibili.com/3546567522912510' target='_blank'>b站@妮可少女</a></span></b></p>",
        "EN": "<p><b>homdgcat.wiki | <span style='white-space:pre;'><a href='http://t.me/homdgcat' target='_blank'>t.me/homdgcat</a></span></b></p>"
    },
    "ChooseTitle": {
        "CH": "（星穹铁道）",
        "EN": "(Star Rail)",
        "RU": "(Star Rail)"
    },
    "Page": {
        "CH": "<p><b>【切换页面】</b></p>",
        "EN": "<p><b>[ Pages ]</b></p>",
    },
    "Home_Lang_": "<a class='translate_' href='?lang=CH'><b>中文</b></a> | <a class='translate_' href='?lang=EN'><b>English</b></a> | <a class='translate_' href='?lang=JP'><b>日本語</b></a> | <a class='translate_' href='?lang=KR'><b>한국인</b></a> | <a class='translate_' href='?lang=RU'><b>Русский</b></a>",
    "Home_Lang": "<a class='translate_' href='?lang=CH'><b>中文</b></a> | <a class='translate_' href='?lang=EN'><b>English</b></a> | <a class='translate_' href='?lang=JP'><b>日本語</b></a> | <a class='translate_' href='?lang=KR'><b>한국인</b></a>",
    "Lang": {
        "CH": "<a href='?lang=EN'>Switch to English</a>",
        "EN": "<a href='?lang=CH'>切换至中文</a>"
    },
    "Home_Sections": [
        {
            "CH": "原神",
            "EN": "Genshin"
        },
        {
            "CH": "星穹铁道",
            "EN": "Star Rail"
        },
        {
            "CH": "未来日期",
            "EN": "Roadmap"
        },
    ],
    "About_Title": {
        "CH": "关于我",
        "EN": "About Me",
    },
    "About": {
        "CH": "玉衡杯数据库由<b>妮可少女 HomDGCat</b>建立和维护，旨在为原神/星穹铁道玩家提供最全面准确的游戏数据",
        "EN": "HomDGCat Wiki (formerly the Yuheng Cup Database) is a GI/HSR database built maintained by <b>HomDGCat</b>"
    },
    "About_2": {
        "CH": "联系我<br>↓<br><a href='https://space.bilibili.com/3546567522912510' target='_blank'>(bilibili)</a> <a href='http://t.me/homdgcat'>(Telegram)</a> <a href='https://www.twitter.com/_homdgcat' target='_blank'>(Twitter)</a> <a href='https://www.reddit.com/user/homdgcat2/' target='_blank'>(Reddit)</a>",
        "EN": "Contact me<br>↓<br><a href='https://space.bilibili.com/3546567522912510' target='_blank'>(bilibili)</a> <a href='http://t.me/homdgcat'>(Telegram)</a> <a href='https://www.twitter.com/_homdgcat' target='_blank'>(Twitter)</a> <a href='https://www.reddit.com/user/homdgcat2/' target='_blank'>(Reddit)</a>"
    },
    "DidYouKnow": {
        "CH": "小知识",
        "EN": "Did You Know?"
    },
    "Coming_Soon": {
        "CH": "敬请期待",
        "EN": "Coming Soon"
    },
    "Mon_Head": [
        {
            "CH": "敌人",
            "EN": "Enemy"
        },
        {
            "CH": "一图流",
            "EN": ""
        },
        {
            "CH": "伤害计算",
            "EN": "Skill DMG"
        }
    ],
    "SkillPhase": [
        {
            "CH": "废弃",
            "EN": "Unused"
        },
        {
            "CH": "阶段一",
            "EN": "Phase 1"
        },
        {
            "CH": "阶段二",
            "EN": "Phase 2"
        },
        {
            "CH": "阶段三",
            "EN": "Phase 3"
        },
    ],
    "Phase": {
        "CH": "阶段 ",
        "EN": "Phase ",
        "JP": "段階 ",
        "KR": "단계 "
    },
    "MonsterDMG": [
        {
            "CH": "敌方等级",
            "EN": "Enemy Level"
        },
        {
            "CH": "角色防御力",
            "EN": "Character DEF"
        },
        {
            "CH": "成长曲线",
            "EN": "Growth Curve"
        },
        {
            "CH": "精英组别",
            "EN": "Elite Group"
        },
    ],
    "MonsterDMG_CTRL": [
        {
            "CH": "计算",
            "EN": "Calculate"
        },
        {
            "CH": "重置",
            "EN": "Reset"
        },
    ],
    "MonsterDEF": [
        {
            "CH": "星穹铁道 · 防御力伤害乘区",
            "EN": "Star Rail - DEF Damage Multiplier"
        },
        {
            "CH": "原神 · 防御力伤害乘区",
            "EN": "Genshin - DEF Damage Multiplier"
        },
    ],
    "MonsterLowerStats": [
        {
            "CH": "数值",
            "EN": "Stats"
        },
        {
            "CH": "抗性",
            "EN": "RES"
        },
        {
            "CH": "状态抗性",
            "EN": "Debuff RES"
        }
    ],
    "Immune": {
        "CH": "<b>∞</b>",
        "EN": "<b>∞</b>"
    },
    "BaseStatInput": [
        {
            "CH": "等级",
            "EN": "Level"
        },
        {
            "CH": "成长曲线",
            "EN": "Curve"
        },
        {
            "CH": "精英组别",
            "EN": "Elite Group"
        },
    ],
    "StatusType": {
        "Buff": {
            "CH": "增益效果",
            "EN": "Buff"
        },
        "Debuff": {
            "CH": "负面效果",
            "EN": "Debuff"
        },
        "Other": {
            "CH": "其他效果",
            "EN": "Other"
        }
    },
    "CanNotDispel": {
        "CH": "⚠ <b>不可解除</b>",
        "EN": "⚠ <b>Unremoveable</b>"
    },
    "HitSP": {
        "CH": "受击回能：",
        "EN": "Hit Revive: "
    },
    "MonLV": {
        "CH": "敌方等级：",
        "EN": "Enemy Level: "
    },
    "AvatarDEF": {
        "CH": "角色防御力：",
        "EN": "Character DEF: "
    },
    "DPC_S": {
        "CH": "总血量（单攻）：",
        "EN": "HP (Single): "
    },
    "DPC_M": {
        "CH": "总血量（群攻）：",
        "EN": "HP (AoE): "
    },
    "DPC_S_A": {
        "CH": "总血量（单攻）：",
        "EN": "HP (Single): "
    },
    "DPC_M_A": {
        "CH": "总血量（群攻）：",
        "EN": "HP (AoE): "
    },
    "DPC_A": {
        "CH": "总血量：",
        "EN": "HP: "
    },
    "Cycle": {
        "CH": "总轮数：",
        "EN": "Total Cycles: "
    },
    "Cycle55": {
        "CH": "总轮数：#+#",
        "EN": "Total Cycles: #+#"
    },
    "Wave": [
        {
            "CH": "第一波",
            "EN": "WAVE 1"
        },
        {
            "CH": "第二波",
            "EN": "WAVE 2"
        },
        {
            "CH": "第三波",
            "EN": "WAVE 3"
        },
        {
            "CH": "第四波",
            "EN": "WAVE 4"
        },
        {
            "CH": "第五波",
            "EN": "WAVE 5"
        },
        {
            "CH": "第六波",
            "EN": "WAVE 6"
        }
    ],
    "Recommended": [
        {
            "CH": "上半 ",
            "EN": "First "
        },
        {
            "CH": "下半 ",
            "EN": "Second "
        }
    ],
    "Keep": {
        "CH": "最多 # 个在场",
        "EN": "Max # on field"
    },
    "MoC": {
        "CH": "混沌回忆",
        "EN": "Memory of Chaos"
    },
    "Fiction": {
        "CH": "虚构叙事",
        "EN": "Pure Fiction"
    },
    "HS": {
        "CH": "<p><b>玉衡杯数据库 - b站@妮可少女 | t.me/homdgcat</b></p>",
        "EN": "<p><b>HomDGCat Wiki - t.me/homdgcat</b></p>"
    },
    "Links_": {
        "CH": "<b>[ yuhengcup.wiki ]</b>",
        "EN": "<b>[ homdgcat.wiki ]</b>"
    },
    "Chart_Title_MoC": {
        "CH": "混沌回忆#层血量演化",
        "EN": "Memory of Chaos F# HP Trend"
    },
    "Chart_Title_AS": {
        "CH": "末日幻影#层血量演化",
        "EN": "Apocalyptic Shadow F# HP Trend"
    },
    "Chart_Title_Fiction": {
        "CH": "虚构叙事#层血量演化",
        "EN": "Pure Fiction F# HP Trend"
    },
    "HDGNotes": {
        "CH": "＋ 妮可少女的研究 ＋",
        "EN": "＋ HomDGCat's Notes ＋",
        "JP": "＋ HomDGCat's Notes ＋",
        "KR": "＋ HomDGCat's Notes ＋",
    },
    "Choose_One": {
        "CH": "＋ 终焉公理 ＋",
        "EN": "＋ Finality's Axiom ＋",
        "JP": "＋ 終末の公理 ＋",
        "KR": "＋ 종언의 이치 ＋",
    },
    "AS_Mechanics": {
        "CH": "＋ 首领特性 ＋",
        "EN": "＋ Boss Trait ＋",
        "JP": "＋ ボスの特徴 ＋",
        "KR": "＋ 보스 특성 ＋",
    },
    "AS_Guide": {
        "CH": "＋ 挑战策略 ＋",
        "EN": "＋ Challenge Strategy ＋",
        "JP": "＋ ボス攻略法 ＋",
        "KR": "＋ 도전 전략 ＋",
    },
    "AS_RES": {
        "CH": "首领抗性",
        "EN": "Boss RES",
    },
    "Chart_Subtitle": {
        "CH": "妮可少女 玉衡杯数据库 yuhengcup.wiki",
        "EN": "homdgcat.wiki | t.me/homdgcat"
    },
    "Fiction_HP": {
        "CH": "总血量",
        "EN": "Total HP"
    },
    "AchNum": {
        "CH": "总成就数 (#)：",
        "EN": "Total Count (#): "
    },
    "AllAch": {
        "CH": "全部成就",
        "EN": "All Achievements"
    },
    "NewAch": {
        "CH": "新增成就",
        "EN": "New Achievements"
    },
    "Changelog": {
        "CH": "改动汇总",
        "EN": "Track Updates",
        "RU": "Журнал изменений"
    },
    "Upcoming": {
        "CH": "未来情报",
        "EN": "Future Info",
        "RU": "Предстоящие"
    },
    "HNotes": {
        "CH": "妮可少女的研究",
        "EN": "HomDGCat's Notes",
        "RU": "HomDGCat"
    },
    "Back": {
        "CH": "<b>返回</b>",
        "EN": "<b>Back</b>"
    },
    "Avatar_Head": [
        {
            "CH": "",
            "EN": "",
            "JP": "",
            "KR": "",
        },
        {
            "CH": "基本信息",
            "EN": "Basic Info",
            "JP": "基本データ",
            "KR": "기초적인",
            "ID": 2,
        },
        {
            "CH": "技能",
            "EN": "Skills",
            "JP": "スキル",
            "KR": "스킬",
            "ID": 3,
        },
        {
            "CH": "行迹 星魂",
            "EN": "Traces Eidolons",
            "JP": "軌跡 星魂",
            "KR": "행적 성혼",
            "ID": 4,
        },
        {
            "CH": "养成计算",
            "EN": "Material Calculator",
            "JP": "材料計算",
            "KR": "재료 계산기",
            "ID": 1221,
        },
        {
            "CH": "改动汇总",
            "EN": "Track Updates",
            "JP": "更新",
            "KR": "업데이트",
            "ID": 6,
        },
        {
            "CH": "妮可少女的研究",
            "EN": "HomDGCat's Notes",
            "JP": "HomDGCatの研究",
            "KR": "HomDGCat 의 연구",
            "ID": 9,
        },
        {
            "CH": "故事",
            "EN": "Stories",
            "JP": "ストーリー",
            "KR": "이야기",
            "ID": 7,
        },
        {
            "CH": "语音",
            "EN": "Voicelines",
            "JP": "ボイス",
            "KR": "음성",
            "ID": 8,
        },
    ],
    "Avatar_Mats": {
        "CH": "角色材料",
        "EN": "Materials"
    },
    "Avatar_Stats": {
        "CH": "角色数值",
        "EN": "Stats"
    },
    "Avatar_Story": {
        "CH": "角色故事 ",
        "EN": "Character Story "
    },
    "StatVerChoose": {
        "CH": "版本",
        "EN": "Version"
    },
    "AddProp": {
        "CH": "属性强化",
        "EN": "Stat Boosts"
    },
    "Avatar_StanceBreak": {
        "CH": "技能削韧：",
        "EN": "Toughness Break: "
    },
    "Avatar_StanceBreak_Specific": [
        {
            "CH": "单体 ",
            "EN": "Single ",
            "JP": "単一 ",
            "KR": "미혼 ",
        },
        {
            "CH": "全体 ",
            "EN": "All ",
            "JP": "全て ",
            "KR": "모든 ",
        },
        {
            "CH": "其他 ",
            "EN": "Other ",
            "JP": "他の ",
            "KR": "다른 ",
        }
    ],
    "Live_Name": {
        "CH": "正式",
        "EN": "Live",
        "JP": "公式版",
        "KR": "공식 버전",
    },
    "Avatar_Aggro": {
        "CH": "嘲讽值",
        "EN": "Taunt Value"
    },
    "Avatar_CV": {
        "CH": "配音演员",
        "EN": "Voice Actors"
    },
    "Weapon_Stat": {
        "CH": "光锥数值",
        "EN": "Stats"
    },
    "Weapon_Mats": {
        "CH": "光锥材料",
        "EN": "Materials"
    },
    "Weapon_Skill": {
        "CH": "光锥技能",
        "EN": "Skill"
    },
    "DEV": {
        "CH": "文案：<color style='color:#f29e38'>妮可少女</color><br>仅供参考",
        "EN": "Descriptions by <color style='color:#f29e38'>HomDGCat</color><br>Subject to change"
    },
    "Item_New": [
        {
            "CH": "全部",
            "EN": "All"
        },
        {
            "CH": "新增",
            "EN": "New"
        }
    ],
    "Event_Story": {
        "CH": " 简介 ",
        "EN": " Introduction "
    },
    "Event_Tutorial": {
        "CH": " 图片 ",
        "EN": " Pictures "
    },
    "N_C": {
        "CH": "关于我",
        "EN": "About Me",
    },
    "N_C": {
        "CH": "混沌回忆",
        "EN": "Memory of Chaos",
        "JP": "混沌の記憶",
        "KR": "혼돈의 기억"
    },
    "N_F": {
        "CH": "虚构叙事",
        "EN": "Pure Fiction",
        "JP": "虚構叙事",
        "KR": "허구 이야기"
    },
    "N_A": {
        "CH": "末日幻影",
        "EN": "Apocalyptic Shadow",
        "JP": "末日の幻影",
        "KR": "종말의 환영"
    },
    "N_D": {
        "CH": "精选对话",
        "EN": "Select Dialogs",
    },
    "DU_Select": [
        {
            "CH": "周常演算",
            "EN": "Weekly",
        },
        {
            "CH": "祝福 方程",
            "EN": "Blessings Equations",
        },
        {
            "CH": "奇物",
            "EN": "Curios",
        }
    ],
    "SU_Select": [
        {
            "CH": "权杖",
            "EN": "Scepters",
        },
        {
            "CH": "组件",
            "EN": "Components",
        },
        {
            "CH": "奇物",
            "EN": "Curios",
        },
        {
            "CH": "难题",
            "EN": "Conundrum",
        }
    ]
}

if (April_1st) {
    Object.keys(txt).forEach(k => {
        Object.keys(txt[k]).forEach(j => {
            if (typeof txt[k][j] != 'string') return
            txt[k][j] = txt[k][j].replaceAll('玉衡杯数据库', '库据数杯衡玉').replaceAll('HomDGCat Wiki', 'ikiW taCGDmoH').replaceAll('HomDGCat', 'taCGDmoH').replaceAll('妮可少女', '铌钶钞钕')
        })
    })
}

var elemcolor = {
    "None": "ffffff",
    "Phys": "ffffff",
    "Elec": "ffacff",
    "Fire": "ff8877",
    "Ice": "8addff",
    "Wind": "97ffb7",
    "Quantum": "7f9aea",
    "Imaginary": "ffe779",
}

var elemlist = [
    "Phys",
    "Fire",
    "Elec",
    "Ice",
    "Wind",
    "Quantum",
    "Imaginary"
]


var debufflist = [
    {
        "ID": "CTRL",
        "Name": {
            "CH": "控制",
            "EN": "Control",
            "JP": "行動制限",
            "KR": "제어"
        },
        "Icon": 'Icon1307Dot_B'
    },
    {
        "ID": "Frozen",
        "Name": {
            "CH": "冻结",
            "EN": "Frozen",
            "JP": "凍結",
            "KR": "빙결"
        },
        "Icon": 'IconDotFrozen_B'
    },
    {
        "ID": "Entangle",
        "Name": {
            "CH": "纠缠",
            "EN": "Entanglement",
            "JP": "もつれ",
            "KR": "얽힘"
        },
        "Icon": 'IconDotTangle_B'
    },
    {
        "ID": "Confine",
        "Name": {
            "CH": "禁锢",
            "EN": "Imprisonment",
            "JP": "禁錮",
            "KR": "속박"
        },
        "Icon": 'IconDotCage_B'
    },
    {
        "ID": "Burn",
        "Name": {
            "CH": "灼烧",
            "EN": "Burn",
            "JP": "燃焼",
            "KR": "연소"
        },
        "Icon": 'IconDotBurn_B'
    },
    {
        "ID": "Shock",
        "Name": {
            "CH": "触电",
            "EN": "Shock",
            "JP": "感電",
            "KR": "감전"
        },
        "Icon": 'IconDotElectric_B'
    },
    {
        "ID": "Wind",
        "Name": {
            "CH": "风化",
            "EN": "Wind Shear",
            "JP": "風化",
            "KR": "풍화"
        },
        "Icon": 'IconDotPoison_B'
    }
]

var props = {
    "HP": {
        "CH": "生命值",
        "EN": "HP"
    },
    "ATK": {
        "CH": "攻击力",
        "EN": "ATK"
    },
    "DEF": {
        "CH": "防御力",
        "EN": "DEF"
    },
    "Stance": {
        "CH": "韧性",
        "EN": "Toughness"
    },
    "SPD": {
        "CH": "速度",
        "EN": "SPD"
    },
    "StatusRES": {
        "CH": "效果抵抗",
        "EN": "Eff RES"
    },
    "StatusProb": {
        "CH": "效果命中",
        "EN": "Eff Hit Rate"
    },
}

var links = {
    "Head": [
        {
            "CH": "<b>首页</b>",
            "EN": "<b>Main Page</b>",
            "RU": "<b>Main Page</b>"
        },
        {
            "CH": "<b>原神</b>",
            "EN": "<b>GI</b>",
            "RU": "<b>GI</b>"
        },
        {
            "CH": "<b>星穹铁道</b>",
            "EN": "<b>HSR</b>",
            "RU": "<b>HSR</b>"
        }
    ],
    "GI": [
        {
            "Name": {
                "CH": "怪物",
                "EN": "Monsters",
                "RU": "Противники"
            },
            "Link": "/gi/monster"
        },
        {
            "Name": {
                "CH": "角色 武器 圣遗物",
                "EN": "<color style='font-size:17px;'>Characters Weapons Artifacts</color>",
                "RU": "<color style='font-size:17px;'>Персонажи Оружие Артефакты</color>"
            },
            "Link": "/gi/char"
        },
        {
            "Name": {
                "CH": "刻晴成绩",
                "EN": "Keqing Endgame"
            },
            "Link": "/gi/keqing",
        },
        {
            "Name": {
                "CH": "幽境危战",
                "EN": "Stygian Onslaught",
            },
            "Link": "/gi/3boss"
        },
        {
            "Name": {
                "CH": "深境螺旋",
                "EN": "Spiral Abyss",
                "RU": "Витая Бездна"
            },
            "Link": "/gi/abyss"
        },
        {
            "Name": {
                "CH": "幻想真境剧诗",
                "EN": "Imaginarium Theater",
                "RU": "Театр Воображариум"
            },
            "Link": "/gi/maze"
        },
        {
            "Name": {
                "CH": "祈愿卡池",
                "EN": "Gacha Banners",
                "RU": "Gacha Banners"
            },
            "Link": "/gi/banner",
        },
        {
            "Name": {
                "CH": "剧情记录（新新）",
                "EN": "Quest Logs [NewNew]",
            },
            "Link": "/gi/quests",
            "When": quest_allow,
        },
        {
            "Name": {
                "CH": "生日日历（新）",
                "EN": "Birthday Calendar [New]",
            },
            "Link": "/gi/birthday",
        },
        {
            "Name": {
                "CH": "材料 食物 名片 头像",
                "EN": "<color style='font-size:17px;'>Items Food Namecards Avatars</color>",
                "RU": "<color style='font-size:17px;'>Материал, Еда, Именные карта</color>"
            },
            "Link": "/gi/item"
        },
        {
            "Name": {
                "CH": "成就",
                "EN": "Achievements",
                "RU": "Достижения"
            },
            "Link": "/gi/ach"
        },
        {
            "Name": {
                "CH": "地理志",
                "EN": "Geography Codex",
                "RU": "География"
            },
            "Link": "/gi/geo"
        },
        {
            "Name": {
                "CH": "教程",
                "EN": "Tutorials",
                "RU": "Обучение"
            },
            "Link": "/gi/tut"

        },
        {
            "Name": {
                "CH": "活动",
                "EN": "Events",
                "RU": "Событие"
            },
            "Link": "/gi/event"
        },
        {
            "Name": {
                "CH": "加载提示",
                "EN": "Loading Tips",
                "RU": "Подсказки на экране загрузки"
            },
            "Link": "/gi/load",
        },
        {
            "Name": {
                "CH": "妮可少女的DIY小屋",
                "EN": "",
                "RU": ""
            },
            "Link": "/gi/diy",
        },
    ],
    "SR": [
        {
            "Name": {
                "CH": "怪物",
                "EN": "Monsters"
            },
            "Link": "/sr/monster"
        },
        {
            "Name": {
                "CH": "角色 光锥 遗器",
                "EN": "<color style='font-size:17px;'>Characters Lightcones Relics</color>"
            },
            "Link": "/sr/char"
        },
        {
            "Name": {
                "CH": "云璃成绩",
                "EN": "Yunli Endgame"
            },
            "Link": "/yunli"
        },
        {
            "Name": {
                "CH": "混沌回忆",
                "EN": "Memory of Chaos"
            },
            "Link" : "/sr/chaos"
        },
        {
            "Name": {
                "CH": "虚构叙事",
                "EN": "Pure Fiction"
            },
            "Link" : "/sr/fiction"
        },
        {
            "Name": {
                "CH": "末日幻影",
                "EN": "Apocalyptic Shadow"
            },
            "Link" : "/sr/shadow"
        },
        {
            "Name": {
                "CH": "异相仲裁",
                "EN": "Anomaly Arbitration"
            },
            "Link" : "/sr/arbitration/"
        },
        {
            "Name": {
                "CH": "跃迁卡池",
                "EN": "Gacha Banners"
            },
            "Link" : "/sr/banner"
        },
        {
            "Name": {
                "CH": "差分宇宙 3.8",
                "EN": "Divergent Universe 3.8"
            },
            "Link": "/sr/du31",
        },
        {
            "Name": {
                "CH": "差分宇宙 2.7",
                "EN": "Divergent Universe 2.7"
            },
            "Link": "/sr/du",
        },
        {
            "Name": {
                "CH": "台词数统计",
                "EN": "Line Count"
            },
            "Link" : "/sr/linecount"
        },
        {
            "Name": {
                "CH": "物品",
                "EN": "Items"
            },
            "Link" : "/sr/item"
        },
        {
            "Name": {
                "CH": "教程",
                "EN": "Tutorials"
            },
            "Link" : "/sr/tut"
        },
        {
            "Name": {
                "CH": "成就",
                "EN": "Achievements"
            },
            "Link" : "/sr/ach"
        },
        {
            "Name": {
                "CH": "活动",
                "EN": "Events"
            },
            "Link" : "/sr/event"
        },
        {
            "Name": {
                "CH": "战斗关卡",
                "EN": "Combat Levels"
            },
            "Link" : "/sr/stage"
        },
        {
            "Name": {
                "CH": "效果和名词",
                "EN": "Effects & Nouns"
            },
            "Link" : "/sr/effect"
        },
    ]
}

function popLinks(l) {
    poplayer({
        header: '<color style=\'color:#fff\'>HomDGCat</color>',
        class: 'yuhengcup',
        width: '95%',
        template: [
            {
                h3: txt.Title[l],
                style: {
                    color: '#27363E',
                    'margin-top': '5px',
                    'margin-bottom': '25px',
                    'font-size': '40px',
                    'cursor': 'pointer',
                },
                event: {
                    click: function () {
                        window.location.href = '/home'
                    }
                },
            },
            {
                section: [
                    {
                        schedule: {
                            a: '/',
                            t: {
                                span: links.Head[0][l],
                                style: {
                                    'font-size': (lang == 'CH') ? '16px' : '15px',
                                    'margin': 'auto'
                                }
                            },
                        },
                        style: {
                            'border': '1.6px solid #7030A0'
                        }
                    },
                    {
                        schedule: {
                            span: links.Head[1][l],
                            style: {
                                'font-size': '16px',
                                'margin': 'auto'
                            }
                        },
                        event: {
                            click: function (d) {
                                $('.menu_GI').show()
                                $('.menu_SR').hide()
                                $(d.sender).addClass('active')
                                $(d.sender).siblings().removeClass('active')
                            }
                        }
                    },
                    {
                        schedule: {
                            span: links.Head[2][l],
                            style: {
                                'font-size': '16px',
                                'margin': 'auto'
                            }
                        },
                        event: {
                            click: function (d) {
                                $('.menu_GI').hide()
                                $('.menu_SR').show()
                                $(d.sender).addClass('active')
                                $(d.sender).siblings().removeClass('active')
                            }
                        },
                        class: 'active'
                    },
                ],
                class: 'menu_CTRL',
                style: {
                    'margin-bottom': '30px'
                }
            },
            {
                section: [
                    {
                        schedule: {
                            a: '/gi/boss',
                            t: {
                                span: (lang == 'CH') ? '怪物解析' : 'Boss Guides',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/change',
                            t: {
                                span: (lang == 'CH') ? '改动汇总' : 'Track Updates',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/future',
                            t: {
                                span: (lang == 'CH') ? '未来情报' : 'Future Info',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/formulae',
                            t: {
                                span: '公式大全',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        when: lang == 'CH',
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/readable',
                            t: {
                                span: (lang == 'CH') ? '阅读物搜索' : 'Readables Search',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/search',
                            t: {
                                span: (lang == 'CH') ? '文本+剧情搜索' : 'Text+Dialogue Search',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/quests',
                            t: {
                                span: (lang == 'CH') ? '剧情记录' : 'Quest Logs',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        when: quest_allow,
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                            border: '2px solid #7030A0',
                        },
                    },
                ],
                class: 'menu_GI menu_GI_2',
                style: {
                    'margin-bottom': '10px',
                    'margin-top': '-13px',
                    'justify-content': 'center'
                }
            },
            {
                section: [
                    {
                        schedule: {
                            a: '/keq',
                            t: {
                                span: '妮可少女的刻晴足迹',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                            'border-color': '#7030A0',
                        },
                    },
                    {
                        schedule: {
                            a: '/yhb',
                            t: {
                                span: '刻晴生贺：玉衡杯重现',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        when: show_yhb,
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                            'border-color': '#CC0000',
                        },
                    },
                ],
                class: 'menu_GI menu_GI_2',
                style: {
                    'margin-bottom': '10px',
                    'margin-top': '-9px',
                    'justify-content': 'center'
                },
                when: (lang == 'CH')
            },
            {
                section: [
                    {
                        schedule: {
                            a: '/sr/boss',
                            t: {
                                span: (lang == 'CH') ? '怪物解析' : 'Boss Guides',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/change',
                            t: {
                                span: (lang == 'CH') ? '改动汇总' : 'Track Updates',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/future',
                            t: {
                                span: (lang == 'CH') ? '未来情报' : 'Future Info',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/anniversary',
                            t: {
                                span: (lang == 'CH') ? '云璃一周年' : 'Yunli 1st Anniversary',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        when: anniversary_show,
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                            'border-color': '#dd0000'
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/formulae',
                            t: {
                                span: '公式大全',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        when: lang == 'CH',
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/readable',
                            t: {
                                span: (lang == 'CH') ? '阅读物搜索' : 'Readables Search',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/search',
                            t: {
                                span: (lang == 'CH') ? '文本+剧情搜索' : 'Text+Dialogue Search',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                ],
                class: 'menu_SR menu_SR_2',
                style: {
                    'margin-bottom': '10px',
                    'margin-top': '-13px',
                    'justify-content': 'center'
                }
            },
            {
                section: function (g) {
                    links.GI.forEach(function (j) {
                        if (!j.Name[lang2]) return
                        $(g.container).render({
                            template: {
                                schedule: {
                                    a: j.Link,
                                    t: {
                                        span: j.Name[l],
                                        style: {
                                            'font-size': '19px',
                                            'margin': 'auto'
                                        }
                                    }
                                },
                                class: 'hover-shadow',
                                when: (j.When == undefined) ? 1 : j.When
                            }
                        })
                    })
                },
                class: 'menu_GI'
            },
            {
                section: function (g) {
                    links.SR.forEach(function (j) {
                        $(g.container).render({
                            template: {
                                schedule: {
                                    a: j.Link,
                                    t: {
                                        span: j.Name[l],
                                        style: {
                                            'font-size': '19px',
                                            'margin': 'auto'
                                        }
                                    }
                                },
                                class: 'hover-shadow'
                            }
                        })
                    })
                },
                class: 'menu_SR'
            }
        ]
    })
    $('.menu_GI').hide()
}

var Loading_Template = {
    template: {
        div: {
            div: [
                {
                    img: $('#IMGPRE').val() + 'images/load.jpg',
                    height: '120px'
                },
                {
                    p: lang == 'CH' ? '加载中' : 'Loading'
                }
            ]
        },
        class: 'lt',
        a: {
            id: "_LT"
        }
    }
}

$('body').render(Loading_Template)
$('.lt').hide()

$('body').on('click', '.lt', function () {
    $('.lt').hide()
})

function mod(n, m) {
    return ((n % m) + m) % m
}

function lm(lis, i) {
    return lis[mod(i, lis.length)]
}

function showstance(dat) {
    if (typeof dat == "string") {
        return dat
    } else {
        return (dat * 10).toString()
    }
}

var IS_SW = 0

var SHOW_LANG = 0
$('body').on('click', '._translate_', function () {
    SHOW_LANG = 1 - SHOW_LANG
    if (SHOW_LANG) {
        $('h3 .lang').show()
    } else {
        $('h3 .lang').hide()
    }
})

init_title_save = ''
function init_title(ttl) {
    document.title = ttl
    init_title_save = ttl
}

function switch_title(new_add) {
    document.title = new_add + ' ' + init_title_save
}

function a_section_white() {
    $("head").append('<style type="text/css"></style>');
    var newStyleElement = $("head").children(':last');
    newStyleElement.html('.a_section{color:white!important} .a_section_small{color:white!important}');
}

function custom_string(k, text_color) {
    if (typeof k == 'string') {
        return k.replaceAll("#", "</color>").replaceAll("@", `<color style='color:#${text_color}'>`).replaceAll("$", "#")
    }
    var out_ = (k.Name ? ('@<b>' + k.Name + '</b>#') : '') + (k.Title ? ('@<b>' + k.Title + '</b>#') : '') + (k.TitleWhite ? ('<b>' + k.TitleWhite + '</b>') : '')
    if (k.Desc) out_ += '<br>' + k.Desc
    if (k.DescList) out_ += '<br>' + k.DescList.join('<br>')
    if (out_.substring(0, 4) == '<br>') out_ = out_.substring(4)
    return out_.replaceAll("#", "</color>").replaceAll("@", `<color style='color:#${text_color}'>`).replaceAll("$", "#")
}

var bg_name = 'bg'
if ($('#NOLAZY').val()) {
    bg_name = 'bg_2'
    $('html').css('overflow-y', 'scroll')
    $('html').css('scrollbar-width', 'none')
}

if (enable_about) {
    $('.links').render({
        span: {
            a: '/about',
            t: {
                span: (lang == 'CH') ? '关于我' : 'About Me'
            },
            class: 'hover-shadow about_button'
        },
        class: 'about_button_wrap'
    })
}

if (Date.now() > Date.parse('2026-01-05T18:00:00+08:00')) {
    $('h3').render({
        p: {
            CH: `今后玉衡杯仅更新正式服内容`,
            EN: `HomDGCat Wiki will only update live game data in the future.`
        }[lang],
        style: {
            'font-size': '16px',
            'text-align': 'center',
            'width': '100%',
            'margin-left': '0',
            'font-weight': 'bold',
        }
    })
} else {
    $('h3').render({
        div: {
            img: '/homdgcat-res/UI/69551bacfa9bb3fbe7cc7194-min.png',
            class: 'newyear_img'
        },
        class: 'newyear_wrap'
    })
}