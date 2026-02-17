// Auto Generated

var _AvatarDataConfig_ = {
    "Aloy": {
        "BallList": [
            {
                "When": "冰尘弹命中怪物",
                "DropArray": [
                    {
                        "Num": 5,
                        "Chance": 1
                    }
                ]
            }
        ],
        "EndureList": [
            {
                "Skill": "元素战技期间",
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
    "Aloy": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104161": 1,
                "101203": 3,
                "112053": 3
            },
            {
                "202": 40000,
                "104162": 3,
                "113020": 2,
                "101203": 10,
                "112053": 15
            },
            {
                "202": 60000,
                "104162": 6,
                "113020": 4,
                "101203": 20,
                "112054": 12
            },
            {
                "202": 80000,
                "104163": 3,
                "113020": 8,
                "101203": 30,
                "112054": 18
            },
            {
                "202": 100000,
                "104163": 6,
                "113020": 12,
                "101203": 45,
                "112055": 12
            },
            {
                "202": 120000,
                "104164": 6,
                "113020": 20,
                "101203": 60,
                "112055": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104301": 3,
                "112053": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112054": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112054": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112054": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112054": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112055": 4,
                "113025": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112055": 6,
                "113025": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112055": 9,
                "113025": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112055": 12,
                "113025": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104301": 3,
                "112053": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112054": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112054": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112054": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112054": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112055": 4,
                "113025": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112055": 6,
                "113025": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112055": 9,
                "113025": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112055": 12,
                "113025": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104301": 3,
                "112053": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112054": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112054": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112054": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112054": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112055": 4,
                "113025": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112055": 6,
                "113025": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112055": 9,
                "113025": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112055": 12,
                "113025": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Aloy": {
        "Ver": {
            "L": {
                "BattleSkills": [
                    {
                        "Name": "快速射击",
                        "Desc": "<color style='color:#FFD780;'>普通攻击</color><br>进行至多四段的连续弓箭射击。<br><br><color style='color:#FFD780;'>重击</color><br>进行伤害更高、更为精准的<color style='color:#FFD780;'>瞄准射击</color>。<br>瞄准时，冰霜散发的寒气会凭附在箭矢上。聚满了寒气的箭矢会造成<color style='color:#99FFFF;'>冰元素伤害</color>。<br><br><color style='color:#FFD780;'>下落攻击</color><br>从空中射出箭雨，并迅速下坠冲击地面，在落地时造成范围伤害。",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "一段伤害",
                                "ParamLevelList": [
                                    "21.12%+23.76%",
                                    "22.56%+25.38%",
                                    "24.0%+27.0%",
                                    "25.92%+29.16%",
                                    "27.36%+30.78%",
                                    "29.04%+32.67%",
                                    "31.2%+35.1%",
                                    "33.36%+37.53%",
                                    "35.52%+39.96%",
                                    "37.68%+42.39%",
                                    "39.84%+44.82%",
                                    "42.0%+47.25%",
                                    "44.16%+49.68%",
                                    "46.32%+52.11%",
                                    "48.48%+54.54%"
                                ]
                            },
                            {
                                "Desc": "二段伤害",
                                "ParamLevelList": [
                                    "43.12%",
                                    "46.06%",
                                    "49.0%",
                                    "52.92%",
                                    "55.86%",
                                    "59.29%",
                                    "63.7%",
                                    "68.11%",
                                    "72.52%",
                                    "76.93%",
                                    "81.34%",
                                    "85.75%",
                                    "90.16%",
                                    "94.57%",
                                    "98.98%"
                                ]
                            },
                            {
                                "Desc": "三段伤害",
                                "ParamLevelList": [
                                    "52.8%",
                                    "56.4%",
                                    "60.0%",
                                    "64.8%",
                                    "68.4%",
                                    "72.6%",
                                    "78.0%",
                                    "83.4%",
                                    "88.8%",
                                    "94.2%",
                                    "99.6%",
                                    "105.0%",
                                    "110.4%",
                                    "115.8%",
                                    "121.2%"
                                ]
                            },
                            {
                                "Desc": "四段伤害",
                                "ParamLevelList": [
                                    "65.648%",
                                    "70.124%",
                                    "74.6%",
                                    "80.568%",
                                    "85.044%",
                                    "90.266%",
                                    "96.98%",
                                    "103.694%",
                                    "110.408%",
                                    "117.122%",
                                    "123.836%",
                                    "130.55%",
                                    "137.264%",
                                    "143.978%",
                                    "150.692%"
                                ]
                            },
                            {
                                "Desc": "瞄准射击",
                                "ParamLevelList": [
                                    "43.86%",
                                    "47.43%",
                                    "51.0%",
                                    "56.1%",
                                    "59.67%",
                                    "63.75%",
                                    "69.36%",
                                    "74.97%",
                                    "80.58%",
                                    "86.7%",
                                    "92.82%",
                                    "98.94%",
                                    "105.06%",
                                    "111.18%",
                                    "117.3%"
                                ]
                            },
                            {
                                "Desc": "满蓄力瞄准射击",
                                "ParamLevelList": [
                                    "124.0%",
                                    "133.3%",
                                    "142.6%",
                                    "155.0%",
                                    "164.3%",
                                    "173.6%",
                                    "186.0%",
                                    "198.4%",
                                    "210.8%",
                                    "223.2%",
                                    "235.6%",
                                    "248.0%",
                                    "263.5%",
                                    "279.0%",
                                    "294.5%"
                                ]
                            },
                            {
                                "Desc": "下坠期间伤害",
                                "ParamLevelList": [
                                    "56.8288%",
                                    "61.4544%",
                                    "66.08%",
                                    "72.688%",
                                    "77.3136%",
                                    "82.6%",
                                    "89.8688%",
                                    "97.1376%",
                                    "104.4064%",
                                    "112.336%",
                                    "120.2656%",
                                    "128.1952%",
                                    "136.1248%",
                                    "144.0544%",
                                    "151.984%"
                                ]
                            },
                            {
                                "Desc": "低空/高空坠地冲击伤害",
                                "ParamLevelList": [
                                    "113.6335%/141.9344%",
                                    "122.8828%/153.4872%",
                                    "132.132%/165.04%",
                                    "145.3452%/181.544%",
                                    "154.5944%/193.0968%",
                                    "165.165%/206.3%",
                                    "179.6995%/224.4544%",
                                    "194.234%/242.6088%",
                                    "208.7686%/260.7632%",
                                    "224.6244%/280.568%",
                                    "240.4802%/300.3728%",
                                    "256.3361%/320.1776%",
                                    "272.1919%/339.9824%",
                                    "288.0478%/359.7872%",
                                    "303.9036%/379.592%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "冰尘雪野",
                        "Desc": "向目标方向投掷一枚冰尘弹，在命中后引发爆炸，造成<color style='color:#99FFFF;'>冰元素伤害</color>。爆炸后，冰尘弹将分裂成许多冷冻炸弹，在接触到敌人或一段时间后爆炸，造成<color style='color:#99FFFF;'>冰元素伤害</color>。<br>冰尘弹或冷冻炸弹命中敌人后，会使敌人的攻击力降低，并为埃洛伊赋予1层「线圈」效果。<br>每0.1秒至多获得1层线圈效果。<br><br><color style='color:#FFD780;'>线圈</color><br> · 依据层数，提高埃洛伊的普通攻击造成的伤害；<br> · 拥有4层线圈时，埃洛伊清除所有的线圈效果，并获得「冰驰」，进一步提高普通攻击造成的伤害，并将普通攻击造成的伤害转为<color style='color:#99FFFF;'>冰元素伤害</color>。<br><br>处于冰驰状态下时，埃洛伊无法获得线圈效果。<br>线圈效果会在脱离战斗30秒后清除。<br><br><i>挥刀断崖那里的温度可要冷得多。</i>",
                        "Icon": "Skill_S_Aloy_01",
                        "ParamDesc": [
                            {
                                "Desc": "冰尘弹伤害",
                                "ParamLevelList": [
                                    "177.6%",
                                    "190.92%",
                                    "204.24%",
                                    "222.0%",
                                    "235.32%",
                                    "248.64%",
                                    "266.4%",
                                    "284.16%",
                                    "301.92%",
                                    "319.68%",
                                    "337.44%",
                                    "355.2%",
                                    "377.4%",
                                    "399.6%",
                                    "421.8%"
                                ]
                            },
                            {
                                "Desc": "冷冻炸弹伤害",
                                "ParamLevelList": [
                                    "40.0%",
                                    "43.0%",
                                    "46.0%",
                                    "50.0%",
                                    "53.0%",
                                    "56.0%",
                                    "60.0%",
                                    "64.0%",
                                    "68.0%",
                                    "72.0%",
                                    "76.0%",
                                    "80.0%",
                                    "85.0%",
                                    "90.0%",
                                    "95.0%"
                                ]
                            },
                            {
                                "Desc": "攻击力降低",
                                "ParamLevelList": [
                                    "12.0%",
                                    "12.0%",
                                    "12.0%",
                                    "13.0%",
                                    "13.0%",
                                    "13.0%",
                                    "14.0%",
                                    "14.0%",
                                    "14.0%",
                                    "15.0%",
                                    "15.0%",
                                    "15.0%",
                                    "15.0%",
                                    "15.0%",
                                    "15.0%"
                                ]
                            },
                            {
                                "Desc": "攻击力降低持续时间",
                                "ParamLevelList": [
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒"
                                ]
                            },
                            {
                                "Desc": "线圈普通攻击伤害提升",
                                "ParamLevelList": [
                                    "5.845%/11.69%/17.535%",
                                    "6.195%/12.39%/18.585%",
                                    "6.545%/13.09%/19.635%",
                                    "7.0%/14.0%/21.0%",
                                    "7.35%/14.7%/22.05%",
                                    "7.7%/15.4%/23.1%",
                                    "8.155%/16.31%/24.465%",
                                    "8.61%/17.22%/25.83%",
                                    "9.065%/18.13%/27.195%",
                                    "9.52%/19.04%/28.56%",
                                    "9.975%/19.95%/29.925%",
                                    "10.43%/20.86%/31.29%",
                                    "10.885%/21.77%/32.655%",
                                    "11.34%/22.68%/34.02%",
                                    "11.795%/23.59%/35.385%"
                                ]
                            },
                            {
                                "Desc": "冰驰普通攻击伤害提升",
                                "ParamLevelList": [
                                    "29.225%",
                                    "30.975%",
                                    "32.725%",
                                    "35.0%",
                                    "36.75%",
                                    "38.5%",
                                    "40.775%",
                                    "43.05%",
                                    "45.325%",
                                    "47.6%",
                                    "49.875%",
                                    "52.15%",
                                    "54.425%",
                                    "56.7%",
                                    "58.975%"
                                ]
                            },
                            {
                                "Desc": "冰驰持续时间",
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
                            }
                        ]
                    },
                    {
                        "Name": "曙光预言",
                        "Desc": "向目标方向投掷冰元素满溢的蓄能容器，并用弓箭引爆，造成<color style='color:#99FFFF;'>冰元素范围伤害</color>。<br><br><i>零之曙光的本质究竟是希望还是灭绝已经并不重要了。埃洛伊已经拯救了她自己的那个世界。这个世界的命运有它自己的勇者去操心。</i>",
                        "Icon": "Skill_E_Aloy_01",
                        "ParamDesc": [
                            {
                                "Desc": "技能伤害",
                                "ParamLevelList": [
                                    "359.2%",
                                    "386.14%",
                                    "413.08%",
                                    "449.0%",
                                    "475.94%",
                                    "502.88%",
                                    "538.8%",
                                    "574.72%",
                                    "610.64%",
                                    "646.56%",
                                    "682.48%",
                                    "718.4%",
                                    "763.3%",
                                    "808.2%",
                                    "853.1%"
                                ]
                            },
                            {
                                "Desc": "冷却时间",
                                "ParamLevelList": [
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒",
                                    "12秒"
                                ]
                            },
                            {
                                "Desc": "元素能量",
                                "ParamLevelList": [
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "战斗覆盖",
                        "Desc": "埃洛伊获得<color style='color:#FFD780;'>冰尘雪野</color>的线圈效果时，埃洛伊的攻击力提升16%，队伍中附近的其他角色的攻击力提升8%，持续10秒。",
                        "Icon": "UI_Talent_S_Aloy_05"
                    },
                    {
                        "Name": "强力攻击",
                        "Desc": "埃洛伊处于<color style='color:#FFD780;'>冰尘雪野</color>的冰驰状态下时，每1秒提升3.5%<color style='color:#99FFFF;'>冰元素伤害加成</color>，通过这种方式至多获得35%<color style='color:#99FFFF;'>冰元素伤害加成</color>。",
                        "Icon": "UI_Talent_S_Aloy_06"
                    },
                    {
                        "Name": "荒野猎手",
                        "Desc": "埃洛伊在队伍中时，队伍中自己的角色接近产出禽肉、兽肉与冷鲜肉的小动物时，不会轻易惊动它们。",
                        "Icon": "UI_Talent_S_Aloy_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "异界之星",
                        "Desc": "点亮此人一方星空之刻尚未到来。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 2,
                        "Name": "异界之星",
                        "Desc": "点亮此人一方星空之刻尚未到来。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 3,
                        "Name": "异界之星",
                        "Desc": "点亮此人一方星空之刻尚未到来。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 4,
                        "Name": "异界之星",
                        "Desc": "点亮此人一方星空之刻尚未到来。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 5,
                        "Name": "异界之星",
                        "Desc": "点亮此人一方星空之刻尚未到来。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 6,
                        "Name": "异界之星",
                        "Desc": "点亮此人一方星空之刻尚未到来。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Aloy": {
        "AttackList": [
            {
                "Skill": "元素战技 · 冰尘弹",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        4.0
                    ]
                },
                "AtkTag": "元素战技",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 120.0,
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
                "CanInfuse": false,
                "StrikeType": "Default",
                "AttackType": "Default"
            },
            {
                "Skill": "元素战技 · 冷冻炸弹",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2.0
                    ]
                },
                "AtkTag": "元素战技",
                "AttTag": "E组",
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
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Default",
                "AttackType": "Default"
            },
            {
                "Skill": "元素爆发",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        6.5
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Ice",
                "GU": 2.0,
                "Poise": 200.0,
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
                "StrikeType": "Default",
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击1-1 · 冰",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "普通攻击1",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 7.65,
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
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击1-2 · 冰",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "普通攻击1",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 7.65,
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
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击2 · 冰",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "普通攻击2",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 14.7,
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
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击3 · 冰",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "普通攻击3",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 18.0,
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
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击4 · 冰",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "普通攻击4",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 22.38,
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
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "瞄准射击",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "重击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 10.0,
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
                "CanInfuse": false,
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "蓄力瞄准射击",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "重击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 20.0,
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
                "CanInfuse": false,
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击1-1",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "普通攻击1",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 7.65,
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
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击1-2",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "普通攻击1",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 7.65,
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
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击2",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "普通攻击2",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 14.7,
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
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "普通攻击3",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 18.0,
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
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击4",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "普通攻击4",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 22.38,
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
                "StrikeType": "Pierce",
                "AttackType": "Default"
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
                "Poise": 10.0,
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
                "CanInfuse": false,
                "StrikeType": "Pierce",
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
                "Poise": 50.0,
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
                "CanInfuse": false,
                "StrikeType": "Pierce",
                "AttackType": "Melee"
            },
            {
                "Skill": "高空下坠",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.5,
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
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Pierce",
                "AttackType": "Melee"
            }
        ]
    }
}