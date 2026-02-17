// Auto Generated

var _AvatarDataConfig_ = {
    "Ayaka": {
        "BallList": [
            {
                "When": "元素战技命中怪物",
                "DropArray": [
                    {
                        "Num": 4,
                        "Chance": 0.5
                    },
                    {
                        "Num": 5,
                        "Chance": 0.5
                    }
                ]
            },
            {
                "When": "冷却时间",
                "CD": 0.3
            }
        ],
        "EndureList": [
            {
                "Skill": "元素战技期间",
                "Endure": 0.6
            },
            {
                "Skill": "替代冲刺期间",
                "Endure": 0.6
            }
        ],
        "WindZoneList": [
            {
                "Skill": "元素爆发动画气场",
                "Target": "怪物和草地，重量≤250",
                "Duration": 0,
                "Radius": 3.0,
                "Inner": 0.0,
                "Strength": -3.0,
                "Attenuation": 2.0,
                "Reverse": false
            }
        ],
        "OtherDataList": []
    }
}

var _AvatarMats_ = {
    "Ayaka": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104161": 1,
                "101202": 3,
                "112044": 3
            },
            {
                "202": 40000,
                "104162": 3,
                "113023": 2,
                "101202": 10,
                "112044": 15
            },
            {
                "202": 60000,
                "104162": 6,
                "113023": 4,
                "101202": 20,
                "112045": 12
            },
            {
                "202": 80000,
                "104163": 3,
                "113023": 8,
                "101202": 30,
                "112045": 18
            },
            {
                "202": 100000,
                "104163": 6,
                "113023": 12,
                "101202": 45,
                "112046": 12
            },
            {
                "202": 120000,
                "104164": 6,
                "113023": 20,
                "101202": 60,
                "112046": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104323": 3,
                "112044": 6
            },
            {
                "202": 17500,
                "104324": 2,
                "112045": 3
            },
            {
                "202": 25000,
                "104324": 4,
                "112045": 4
            },
            {
                "202": 30000,
                "104324": 6,
                "112045": 6
            },
            {
                "202": 37500,
                "104324": 9,
                "112045": 9
            },
            {
                "202": 120000,
                "104325": 4,
                "112046": 4,
                "113018": 1
            },
            {
                "202": 260000,
                "104325": 6,
                "112046": 6,
                "113018": 1
            },
            {
                "202": 450000,
                "104325": 12,
                "112046": 9,
                "113018": 2
            },
            {
                "202": 700000,
                "104325": 16,
                "112046": 12,
                "113018": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104323": 3,
                "112044": 6
            },
            {
                "202": 17500,
                "104324": 2,
                "112045": 3
            },
            {
                "202": 25000,
                "104324": 4,
                "112045": 4
            },
            {
                "202": 30000,
                "104324": 6,
                "112045": 6
            },
            {
                "202": 37500,
                "104324": 9,
                "112045": 9
            },
            {
                "202": 120000,
                "104325": 4,
                "112046": 4,
                "113018": 1
            },
            {
                "202": 260000,
                "104325": 6,
                "112046": 6,
                "113018": 1
            },
            {
                "202": 450000,
                "104325": 12,
                "112046": 9,
                "113018": 2
            },
            {
                "202": 700000,
                "104325": 16,
                "112046": 12,
                "113018": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104323": 3,
                "112044": 6
            },
            {
                "202": 17500,
                "104324": 2,
                "112045": 3
            },
            {
                "202": 25000,
                "104324": 4,
                "112045": 4
            },
            {
                "202": 30000,
                "104324": 6,
                "112045": 6
            },
            {
                "202": 37500,
                "104324": 9,
                "112045": 9
            },
            {
                "202": 120000,
                "104325": 4,
                "112046": 4,
                "113018": 1
            },
            {
                "202": 260000,
                "104325": 6,
                "112046": 6,
                "113018": 1
            },
            {
                "202": 450000,
                "104325": 12,
                "112046": 9,
                "113018": 2
            },
            {
                "202": 700000,
                "104325": 16,
                "112046": 12,
                "113018": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Ayaka": {
        "Ver": {
            "L": {
                "BattleSkills": [
                    {
                        "Name": "神里流 · 倾",
                        "Desc": "<color style='color:#FFD780;'>普通攻击</color><br>进行至多五段的连续剑击。<br><br><color style='color:#FFD780;'>重击</color><br>消耗一定体力，在居合中放出连续的剑风。<br><br><color style='color:#FFD780;'>下落攻击</color><br>从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。",
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "一段伤害",
                                "ParamLevelList": [
                                    "45.7253%",
                                    "49.4472%",
                                    "53.169%",
                                    "58.4859%",
                                    "62.2077%",
                                    "66.4613%",
                                    "72.3098%",
                                    "78.1584%",
                                    "84.007%",
                                    "90.3873%",
                                    "96.7676%",
                                    "103.1479%",
                                    "109.5281%",
                                    "115.9084%",
                                    "122.2887%"
                                ]
                            },
                            {
                                "Desc": "二段伤害",
                                "ParamLevelList": [
                                    "48.6846%",
                                    "52.6473%",
                                    "56.61%",
                                    "62.271%",
                                    "66.2337%",
                                    "70.7625%",
                                    "76.9896%",
                                    "83.2167%",
                                    "89.4438%",
                                    "96.237%",
                                    "103.0302%",
                                    "109.8234%",
                                    "116.6166%",
                                    "123.4098%",
                                    "130.203%"
                                ]
                            },
                            {
                                "Desc": "三段伤害",
                                "ParamLevelList": [
                                    "62.6218%",
                                    "67.7189%",
                                    "72.816%",
                                    "80.0976%",
                                    "85.1947%",
                                    "91.02%",
                                    "99.0298%",
                                    "107.0395%",
                                    "115.0493%",
                                    "123.7872%",
                                    "132.5251%",
                                    "141.263%",
                                    "150.001%",
                                    "158.7389%",
                                    "167.4768%"
                                ]
                            },
                            {
                                "Desc": "四段伤害",
                                "ParamLevelList": [
                                    "22.6464%×3",
                                    "24.4897%×3",
                                    "26.333%×3",
                                    "28.9663%×3",
                                    "30.8096%×3",
                                    "32.9163%×3",
                                    "35.8129%×3",
                                    "38.7095%×3",
                                    "41.6061%×3",
                                    "44.7661%×3",
                                    "47.9261%×3",
                                    "51.086%×3",
                                    "54.246%×3",
                                    "57.4059%×3",
                                    "60.5659%×3"
                                ]
                            },
                            {
                                "Desc": "五段伤害",
                                "ParamLevelList": [
                                    "78.1817%",
                                    "84.5454%",
                                    "90.909%",
                                    "100.0%",
                                    "106.3635%",
                                    "113.6363%",
                                    "123.6362%",
                                    "133.6362%",
                                    "143.6362%",
                                    "154.5453%",
                                    "165.4544%",
                                    "176.3635%",
                                    "187.2725%",
                                    "198.1816%",
                                    "209.0907%"
                                ]
                            },
                            {
                                "Desc": "重击伤害",
                                "ParamLevelList": [
                                    "55.126%×3",
                                    "59.613%×3",
                                    "64.1%×3",
                                    "70.51%×3",
                                    "74.997%×3",
                                    "80.125%×3",
                                    "87.176%×3",
                                    "94.227%×3",
                                    "101.278%×3",
                                    "108.97%×3",
                                    "116.662%×3",
                                    "124.354%×3",
                                    "132.046%×3",
                                    "139.738%×3",
                                    "147.43%×3"
                                ]
                            },
                            {
                                "Desc": "重击体力消耗",
                                "ParamLevelList": [
                                    "20",
                                    "20",
                                    "20",
                                    "20",
                                    "20",
                                    "20",
                                    "20",
                                    "20",
                                    "20",
                                    "20",
                                    "20",
                                    "20",
                                    "20",
                                    "20",
                                    "20"
                                ]
                            },
                            {
                                "Desc": "下坠期间伤害",
                                "ParamLevelList": [
                                    "63.9324%",
                                    "69.1362%",
                                    "74.34%",
                                    "81.774%",
                                    "86.9778%",
                                    "92.925%",
                                    "101.1024%",
                                    "109.2798%",
                                    "117.4572%",
                                    "126.378%",
                                    "135.2988%",
                                    "144.2196%",
                                    "153.1404%",
                                    "162.0612%",
                                    "170.982%"
                                ]
                            },
                            {
                                "Desc": "低空/高空坠地冲击伤害",
                                "ParamLevelList": [
                                    "127.8377%/159.6762%",
                                    "138.2431%/172.6731%",
                                    "148.6485%/185.67%",
                                    "163.5134%/204.237%",
                                    "173.9187%/217.2339%",
                                    "185.8106%/232.0875%",
                                    "202.162%/252.5112%",
                                    "218.5133%/272.9349%",
                                    "234.8646%/293.3586%",
                                    "252.7025%/315.639%",
                                    "270.5403%/337.9194%",
                                    "288.3781%/360.1998%",
                                    "306.2159%/382.4802%",
                                    "324.0537%/404.7606%",
                                    "341.8915%/427.041%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "神里流 · 冰华",
                        "Desc": "唤起盛开的冰之华，击飞身边的敌人并造成<color style='color:#99FFFF;'>冰元素范围伤害</color>。<br><br><i>「晴云胧月夜，妄执如雾，心野凄迷恋羁旅。」</i>",
                        "Icon": "Skill_S_Ayaka_01",
                        "ParamDesc": [
                            {
                                "Desc": "技能伤害",
                                "ParamLevelList": [
                                    "239.2%",
                                    "257.14%",
                                    "275.08%",
                                    "299.0%",
                                    "316.94%",
                                    "334.88%",
                                    "358.8%",
                                    "382.72%",
                                    "406.64%",
                                    "430.56%",
                                    "454.48%",
                                    "478.4%",
                                    "508.3%",
                                    "538.2%",
                                    "568.1%"
                                ]
                            },
                            {
                                "Desc": "冷却时间",
                                "ParamLevelList": [
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "神里流 · 霜灭",
                        "Desc": "以倾奇之姿汇聚寒霜，放出持续行进的霜见雪关扉。<br><br><color style='color:#FFD780;'>霜见雪关扉</color><br> · 以刀锋般尖锐的霜风持续切割触及的敌人，造成<color style='color:#99FFFF;'>冰元素伤害</color>；<br> · 持续时间结束时绽放，造成<color style='color:#99FFFF;'>冰元素范围伤害</color>。<br><br><i>「吹雪濡鹭时，积思若霜，胸底思重焉哀怜。」</i>",
                        "Icon": "Skill_E_Ayaka",
                        "ParamDesc": [
                            {
                                "Desc": "切割伤害",
                                "ParamLevelList": [
                                    "112.3%",
                                    "120.7225%",
                                    "129.145%",
                                    "140.375%",
                                    "148.7975%",
                                    "157.22%",
                                    "168.45%",
                                    "179.68%",
                                    "190.91%",
                                    "202.14%",
                                    "213.37%",
                                    "224.6%",
                                    "238.6375%",
                                    "252.675%",
                                    "266.7125%"
                                ]
                            },
                            {
                                "Desc": "绽放伤害",
                                "ParamLevelList": [
                                    "168.45%",
                                    "181.0837%",
                                    "193.7175%",
                                    "210.5625%",
                                    "223.1962%",
                                    "235.83%",
                                    "252.675%",
                                    "269.52%",
                                    "286.365%",
                                    "303.21%",
                                    "320.055%",
                                    "336.9%",
                                    "357.9562%",
                                    "379.0125%",
                                    "400.0687%"
                                ]
                            },
                            {
                                "Desc": "持续时间",
                                "ParamLevelList": [
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒"
                                ]
                            },
                            {
                                "Desc": "冷却时间",
                                "ParamLevelList": [
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒"
                                ]
                            },
                            {
                                "Desc": "元素能量",
                                "ParamLevelList": [
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "神里流 · 霰步",
                        "Desc": "<color style='color:#FFD780;'>替代冲刺</color><br>隐入碎冰，以消耗体力为代价，化为激流快速移动。<br><br>在霰步状态下，神里绫华可以在水面上高速移动。<br>结束霰步现身时，将产生如下效果：<br> · 释放寒冰的力量，对周围的敌人施加<color style='color:#99FFFF;'>冰元素附着</color>；<br> · 将寒气凝聚在剑上，使神里绫华在短时间内获得<color style='color:#99FFFF;'>冰元素附魔</color>。<br><br><i>「滴雫濡羽瞬消无，白鹭踏水何可怨？」</i>",
                        "Icon": "Skill_S_Ayaka_02",
                        "ParamDesc": [
                            {
                                "Desc": "启动体力消耗",
                                "ParamLevelList": [
                                    "10"
                                ]
                            },
                            {
                                "Desc": "持续体力消耗",
                                "ParamLevelList": [
                                    "每秒15"
                                ]
                            },
                            {
                                "Desc": "附魔持续时间",
                                "ParamLevelList": [
                                    "5秒"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "天罪国罪镇词",
                        "Desc": "施放<color style='color:#FFD780;'>神里流 · 冰华</color>后的6秒内，神里绫华的普通攻击与重击造成的伤害提升30%。",
                        "Icon": "UI_Talent_S_Ayaka_05"
                    },
                    {
                        "Name": "寒天宣命祝词",
                        "Desc": "<color style='color:#FFD780;'>神里流 · 霰步</color>结束时释放的寒冰命中了敌人时，神里绫华将获得如下效果：<br> · 恢复10点体力；<br> · 获得18%<color style='color:#99FFFF;'>冰元素伤害加成</color>，持续10秒。",
                        "Icon": "UI_Talent_S_Ayaka_06"
                    },
                    {
                        "Name": "鉴查心得",
                        "Desc": "合成武器突破素材时，有10%概率获得2倍产出。",
                        "Icon": "UI_Talent_Combine_Weapon_Double"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "霜杀墨染樱",
                        "Desc": "神里绫华的普通攻击或重击对敌人造成<color style='color:#99FFFF;'>冰元素伤害</color>时，有50%的几率使<color style='color:#FFD780;'>神里流 · 冰华</color>的冷却时间缩减0.3秒。该效果每0.1秒只能触发一次。",
                        "Icon": "UI_Talent_S_Ayaka_01"
                    },
                    {
                        "Level": 2,
                        "Name": "三重雪关扉",
                        "Desc": "施放<color style='color:#FFD780;'>神里流 · 霜灭</color>时，会额外释放两股规模较小的霜见雪关扉，各自能造成原本20%的伤害。",
                        "Icon": "UI_Talent_S_Ayaka_02"
                    },
                    {
                        "Level": 3,
                        "Name": "花白锦画纸吹雪",
                        "Desc": "<color style='color:#FFD780;'>神里流 · 霜灭</color>的技能等级提高3级。<br>至多提升至15级。",
                        "Icon": "UI_Talent_U_Ayaka_02"
                    },
                    {
                        "Level": 4,
                        "Name": "盈缺流返",
                        "Desc": "敌人受到<color style='color:#FFD780;'>神里流 · 霜灭</color>的霜见雪关扉造成的伤害后，防御力降低30%，持续6秒。",
                        "Icon": "UI_Talent_S_Ayaka_03"
                    },
                    {
                        "Level": 5,
                        "Name": "花云钟入月",
                        "Desc": "<color style='color:#FFD780;'>神里流 · 冰华</color>的技能等级提高3级。<br>至多提升至15级。",
                        "Icon": "UI_Talent_U_Ayaka_01"
                    },
                    {
                        "Level": 6,
                        "Name": "间水月",
                        "Desc": "每过10秒，神里绫华会获得「薄冰舞踏」，使重击造成的伤害提高298%。薄冰舞踏效果将在重击命中敌人的0.5秒后清除，并重新开始计算时间。",
                        "Icon": "UI_Talent_S_Ayaka_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Ayaka": {
        "AttackList": [
            {
                "Skill": "元素战技",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.5,
                        2.5
                    ]
                },
                "AtkTag": "元素战技",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Ice",
                "GU": 2.0,
                "Poise": 110.0,
                "ForceType": 3,
                "Force": [
                    0.0,
                    800.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Default",
                "AttackType": "Default"
            },
            {
                "Skill": "元素爆发 · 切割",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "Q组",
                "AttGrp": "2.5s / 3次",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 30.0,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Default"
            },
            {
                "Skill": "元素爆发 · 绽放",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        5.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "Q组",
                "AttGrp": "2.5s / 3次",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 30.0,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Default",
                "AttackType": "Default"
            },
            {
                "Skill": "元素爆发 · 2命切割",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.5
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "Q组",
                "AttGrp": "2.5s / 3次",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 30.0,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Default"
            },
            {
                "Skill": "元素爆发 · 2命绽放",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "Q组",
                "AttGrp": "2.5s / 3次",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 30.0,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Default",
                "AttackType": "Default"
            },
            {
                "Skill": "替代冲刺结束",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 0.0,
                "ForceType": 0,
                "Force": [
                    0.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Default",
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6
                    ]
                },
                "AtkTag": "普通攻击1",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 42.5,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.03,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.2,
                        2.5
                    ]
                },
                "AtkTag": "普通攻击2",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 44.1,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.03,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击3",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.8,
                        1.5,
                        60.0
                    ]
                },
                "AtkTag": "普通攻击3",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 55.2,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.06,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击4-1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6,
                        1.5
                    ]
                },
                "AtkTag": "普通攻击4",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 19.68,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击4-2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6,
                        1.5
                    ]
                },
                "AtkTag": "普通攻击4",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 19.68,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击4-3",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6
                    ]
                },
                "AtkTag": "普通攻击4",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 19.68,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.03,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击5",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        5.0,
                        2.3,
                        1.0
                    ]
                },
                "AtkTag": "普通攻击5",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 74.1,
                "ForceType": 3,
                "Force": [
                    655.0,
                    800.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击5",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "普通攻击5",
                "AttTag": "重击组",
                "AttGrp": "Avatar_Pole_ExtraAttack",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 74.1,
                "ForceType": 3,
                "Force": [
                    0.0,
                    800.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击5",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        0.8
                    ]
                },
                "AtkTag": "普通攻击5",
                "AttTag": "普攻组",
                "AttGrp": "Avatar_Pole_ExtraAttack",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 74.1,
                "ForceType": 3,
                "Force": [
                    0.0,
                    800.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "重击x3",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "重击",
                "AttTag": "重击组",
                "AttGrp": "0.5s / ∞次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 40.0,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "下坠期间",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 0.0,
                "Poise": 25.0,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "低空下坠",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.0,
                        2.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 100.0,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "高空下坠",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        5.0,
                        2.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 150.0,
                "ForceType": 3,
                "Force": [
                    0.0,
                    800.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            }
        ]
    }
}