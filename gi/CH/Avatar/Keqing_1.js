// Auto Generated

var _AvatarDataConfig_ = {
    "Keqing": {
        "BallList": [
            {
                "When": "E 闪现斩击",
                "DropArray": [
                    {
                        "Num": 2,
                        "Chance": 0.5
                    },
                    {
                        "Num": 3,
                        "Chance": 0.5
                    }
                ]
            },
            {
                "When": "E 雷暴连斩",
                "DropArray": [
                    {
                        "Num": 2,
                        "Chance": 0.5
                    },
                    {
                        "Num": 3,
                        "Chance": 0.5
                    }
                ]
            },
            {
                "When": "冷却时间",
                "CD": 0.6
            }
        ],
        "EndureList": [
            {
                "Skill": "元素战技期间",
                "Endure": 0.6
            },
            {
                "Skill": "瞬移动作 0%~55% 期间",
                "Endure": 0.0
            }
        ],
        "WindZoneList": [
            {
                "Skill": "元素爆发动画气场",
                "Target": "除角色外的任何实体，重量≤150",
                "Duration": 0,
                "Radius": 2.0,
                "Inner": 0.0,
                "Strength": -2.0,
                "Attenuation": 0.0,
                "Reverse": false
            }
        ],
        "OtherDataList": [
            "剑裁云霓，人断神序，玉衡耀世，晴门永存！"
        ]
    }
}

var _AvatarMats_ = {
    "Keqing": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104141": 1,
                "100058": 3,
                "112038": 3
            },
            {
                "202": 40000,
                "104142": 3,
                "113002": 2,
                "100058": 10,
                "112038": 15
            },
            {
                "202": 60000,
                "104142": 6,
                "113002": 4,
                "100058": 20,
                "112039": 12
            },
            {
                "202": 80000,
                "104143": 3,
                "113002": 8,
                "100058": 30,
                "112039": 18
            },
            {
                "202": 100000,
                "104143": 6,
                "113002": 12,
                "100058": 45,
                "112040": 12
            },
            {
                "202": 120000,
                "104144": 6,
                "113002": 20,
                "100058": 60,
                "112040": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104310": 3,
                "112038": 6
            },
            {
                "202": 17500,
                "104311": 2,
                "112039": 3
            },
            {
                "202": 25000,
                "104311": 4,
                "112039": 4
            },
            {
                "202": 30000,
                "104311": 6,
                "112039": 6
            },
            {
                "202": 37500,
                "104311": 9,
                "112039": 9
            },
            {
                "202": 120000,
                "104312": 4,
                "112040": 4,
                "113007": 1
            },
            {
                "202": 260000,
                "104312": 6,
                "112040": 6,
                "113007": 1
            },
            {
                "202": 450000,
                "104312": 12,
                "112040": 9,
                "113007": 2
            },
            {
                "202": 700000,
                "104312": 16,
                "112040": 12,
                "113007": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104310": 3,
                "112038": 6
            },
            {
                "202": 17500,
                "104311": 2,
                "112039": 3
            },
            {
                "202": 25000,
                "104311": 4,
                "112039": 4
            },
            {
                "202": 30000,
                "104311": 6,
                "112039": 6
            },
            {
                "202": 37500,
                "104311": 9,
                "112039": 9
            },
            {
                "202": 120000,
                "104312": 4,
                "112040": 4,
                "113007": 1
            },
            {
                "202": 260000,
                "104312": 6,
                "112040": 6,
                "113007": 1
            },
            {
                "202": 450000,
                "104312": 12,
                "112040": 9,
                "113007": 2
            },
            {
                "202": 700000,
                "104312": 16,
                "112040": 12,
                "113007": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104310": 3,
                "112038": 6
            },
            {
                "202": 17500,
                "104311": 2,
                "112039": 3
            },
            {
                "202": 25000,
                "104311": 4,
                "112039": 4
            },
            {
                "202": 30000,
                "104311": 6,
                "112039": 6
            },
            {
                "202": 37500,
                "104311": 9,
                "112039": 9
            },
            {
                "202": 120000,
                "104312": 4,
                "112040": 4,
                "113007": 1
            },
            {
                "202": 260000,
                "104312": 6,
                "112040": 6,
                "113007": 1
            },
            {
                "202": 450000,
                "104312": 12,
                "112040": 9,
                "113007": 2
            },
            {
                "202": 700000,
                "104312": 16,
                "112040": 12,
                "113007": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Keqing": {
        "Ver": {
            "L": {
                "BattleSkills": [
                    {
                        "Name": "云来剑法",
                        "Desc": "<color style='color:#FFD780;'>普通攻击</color><br>进行至多五段的连续剑击。<br><br><color style='color:#FFD780;'>重击</color><br>消耗一定体力，瞬间向前方挥出两剑。<br><br><color style='color:#FFD780;'>下落攻击</color><br>从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。",
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "一段伤害",
                                "ParamLevelList": [
                                    "41.022%",
                                    "44.361%",
                                    "47.7%",
                                    "52.47%",
                                    "55.809%",
                                    "59.625%",
                                    "64.872%",
                                    "70.119%",
                                    "75.366%",
                                    "81.09%",
                                    "86.814%",
                                    "92.538%",
                                    "98.262%",
                                    "103.986%",
                                    "109.71%"
                                ]
                            },
                            {
                                "Desc": "二段伤害",
                                "ParamLevelList": [
                                    "41.022%",
                                    "44.361%",
                                    "47.7%",
                                    "52.47%",
                                    "55.809%",
                                    "59.625%",
                                    "64.872%",
                                    "70.119%",
                                    "75.366%",
                                    "81.09%",
                                    "86.814%",
                                    "92.538%",
                                    "98.262%",
                                    "103.986%",
                                    "109.71%"
                                ]
                            },
                            {
                                "Desc": "三段伤害",
                                "ParamLevelList": [
                                    "54.438%",
                                    "58.869%",
                                    "63.3%",
                                    "69.63%",
                                    "74.061%",
                                    "79.125%",
                                    "86.088%",
                                    "93.051%",
                                    "100.014%",
                                    "107.61%",
                                    "115.206%",
                                    "122.802%",
                                    "130.398%",
                                    "137.994%",
                                    "145.59%"
                                ]
                            },
                            {
                                "Desc": "四段伤害",
                                "ParamLevelList": [
                                    "31.476%+34.4%",
                                    "34.038%+37.2%",
                                    "36.6%+40.0%",
                                    "40.26%+44.0%",
                                    "42.822%+46.8%",
                                    "45.75%+50.0%",
                                    "49.776%+54.4%",
                                    "53.802%+58.8%",
                                    "57.828%+63.2%",
                                    "62.22%+68.0%",
                                    "66.612%+72.8%",
                                    "71.004%+77.6%",
                                    "75.396%+82.4%",
                                    "79.788%+87.2%",
                                    "84.18%+92.0%"
                                ]
                            },
                            {
                                "Desc": "五段伤害",
                                "ParamLevelList": [
                                    "66.994%",
                                    "72.447%",
                                    "77.9%",
                                    "85.69%",
                                    "91.143%",
                                    "97.375%",
                                    "105.944%",
                                    "114.513%",
                                    "123.082%",
                                    "132.43%",
                                    "141.778%",
                                    "151.126%",
                                    "160.474%",
                                    "169.822%",
                                    "179.17%"
                                ]
                            },
                            {
                                "Desc": "重击伤害",
                                "ParamLevelList": [
                                    "76.798%+86.0%",
                                    "83.049%+93.0%",
                                    "89.3%+100%",
                                    "98.23%+110.0%",
                                    "104.481%+117.0%",
                                    "111.625%+125.0%",
                                    "121.448%+136.0%",
                                    "131.271%+147.0%",
                                    "141.094%+158.0%",
                                    "151.81%+170.0%",
                                    "162.526%+182.0%",
                                    "173.242%+194.0%",
                                    "183.958%+206.0%",
                                    "194.674%+218.0%",
                                    "205.39%+230.0%"
                                ]
                            },
                            {
                                "Desc": "重击体力消耗",
                                "ParamLevelList": [
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25"
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
                        "Name": "星斗归位",
                        "Desc": "迅速投出雷楔，以疾雷之势歼敌。<br>雷楔命中时会对小范围内的敌人造成<color style='color:#FFACFF;'>雷元素伤害</color>，并在命中的位置留下雷楔标记。<br><br><color style='color:#FFD780;'>长按</color><br>长按以调整雷楔标记投掷的方向。<br>通过长按投出的雷楔，可以悬浮在空中，并使刻晴再次施放星斗归位时跨越地形。<br><br><color style='color:#FFD780;'>雷楔</color><br>在雷楔的持续期间内，刻晴再次施放星斗归位或施展重击时，会清除雷楔标记并造成不同的效果：<br> · 再次施放星斗归位时，瞬移到标记处进行一次斩击，造成<color style='color:#FFACFF;'>雷元素范围伤害</color>。瞬移至长按投掷的雷楔处时，可以跨越地形障碍；<br> · 施展重击时，在标记处引发雷暴连斩，造成数次<color style='color:#FFACFF;'>雷元素范围伤害</color>。<br><br><i>「人像是蛾子，总奔着名叫神仙的火光而去。但是我这光是自己点的。」</i>",
                        "Icon": "Skill_S_Keqing_01",
                        "ParamDesc": [
                            {
                                "Desc": "雷楔伤害",
                                "ParamLevelList": [
                                    "50.4%",
                                    "54.18%",
                                    "57.96%",
                                    "63.0%",
                                    "66.78%",
                                    "70.56%",
                                    "75.6%",
                                    "80.64%",
                                    "85.68%",
                                    "90.72%",
                                    "95.76%",
                                    "100.8%",
                                    "107.1%",
                                    "113.4%",
                                    "119.7%"
                                ]
                            },
                            {
                                "Desc": "斩击伤害",
                                "ParamLevelList": [
                                    "168.0%",
                                    "180.6%",
                                    "193.2%",
                                    "210.0%",
                                    "222.6%",
                                    "235.2%",
                                    "252.0%",
                                    "268.8%",
                                    "285.6%",
                                    "302.4%",
                                    "319.2%",
                                    "336.0%",
                                    "357.0%",
                                    "378.0%",
                                    "399.0%"
                                ]
                            },
                            {
                                "Desc": "雷暴连斩伤害",
                                "ParamLevelList": [
                                    "84.0%×2",
                                    "90.3%×2",
                                    "96.6%×2",
                                    "105.0%×2",
                                    "111.3%×2",
                                    "117.6%×2",
                                    "126.0%×2",
                                    "134.4%×2",
                                    "142.8%×2",
                                    "151.2%×2",
                                    "159.6%×2",
                                    "168.0%×2",
                                    "178.5%×2",
                                    "189.0%×2",
                                    "199.5%×2"
                                ]
                            },
                            {
                                "Desc": "冷却时间",
                                "ParamLevelList": [
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒"
                                ]
                            }
                        ],
                        "Icon2": "Skill_S_Keqing_02"
                    },
                    {
                        "Name": "天街巡游",
                        "Desc": "爆发雷电的力量，造成范围<color style='color:#FFACFF;'>雷元素伤害</color>。<br>随后隐入剑影中，对周围的敌人进行如同迅雷霆霓般疾速的连斩，造成多段<color style='color:#FFACFF;'>雷元素伤害</color>，并在最后一击时造成高额<color style='color:#FFACFF;'>雷元素范围伤害</color>。<br><br><i>刻晴自己剑术中最为迅捷的一招，可将诸星斩落。</i>",
                        "Icon": "Skill_E_Keqing_01",
                        "ParamDesc": [
                            {
                                "Desc": "技能伤害",
                                "ParamLevelList": [
                                    "88.0%",
                                    "94.6%",
                                    "101.2%",
                                    "110.0%",
                                    "116.6%",
                                    "123.2%",
                                    "132.0%",
                                    "140.8%",
                                    "149.6%",
                                    "158.4%",
                                    "167.2%",
                                    "176.0%",
                                    "187.0%",
                                    "198.0%",
                                    "209.0%"
                                ]
                            },
                            {
                                "Desc": "连斩伤害",
                                "ParamLevelList": [
                                    "24.0%×8",
                                    "25.8%×8",
                                    "27.6%×8",
                                    "30.0%×8",
                                    "31.8%×8",
                                    "33.6%×8",
                                    "36.0%×8",
                                    "38.4%×8",
                                    "40.8%×8",
                                    "43.2%×8",
                                    "45.6%×8",
                                    "48.0%×8",
                                    "51.0%×8",
                                    "54.0%×8",
                                    "57.0%×8"
                                ]
                            },
                            {
                                "Desc": "最后一击伤害",
                                "ParamLevelList": [
                                    "188.8%",
                                    "202.96%",
                                    "217.12%",
                                    "236.0%",
                                    "250.16%",
                                    "264.32%",
                                    "283.2%",
                                    "302.08%",
                                    "320.96%",
                                    "339.84%",
                                    "358.72%",
                                    "377.6%",
                                    "401.2%",
                                    "424.8%",
                                    "448.4%"
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
                        "Name": "抵天雷罚",
                        "Desc": "雷楔存在期间再次施放<color style='color:#FFD780;'>星斗归位</color>后的5秒内，刻晴获得<color style='color:#FFACFF;'>雷元素附魔</color>。",
                        "Icon": "UI_Talent_S_Keqing_05"
                    },
                    {
                        "Name": "玉衡之贵",
                        "Desc": "施放<color style='color:#FFD780;'>天街巡游</color>时，刻晴的暴击率提升15%，元素充能效率提升15%，持续8秒。",
                        "Icon": "UI_Talent_S_Keqing_06"
                    },
                    {
                        "Name": "总务土地",
                        "Desc": "在璃月执行探索派遣任务时，消耗的时间缩短25%。",
                        "Icon": "UI_Talent_Expedition_Liyue"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "雷厉",
                        "Desc": "雷楔存在期间再次施放<color style='color:#FFD780;'>星斗归位</color>时，在刻晴消失与出现的位置造成50%攻击力的<color style='color:#FFACFF;'>雷元素范围伤害</color>。",
                        "Icon": "UI_Talent_S_Keqing_01"
                    },
                    {
                        "Level": 2,
                        "Name": "苛捐",
                        "Desc": "刻晴普通攻击与重击命中受到<color style='color:#FFACFF;'>雷元素</color>影响的敌人时，有50%几率产生一个元素微粒。<br>该效果每5秒只能触发一次。",
                        "Icon": "UI_Talent_S_Keqing_02"
                    },
                    {
                        "Level": 3,
                        "Name": "登楼",
                        "Desc": "<color style='color:#FFD780;'>天街巡游</color>的技能等级提高3级。<br>至多提升至15级。",
                        "Icon": "UI_Talent_U_Keqing_01"
                    },
                    {
                        "Level": 4,
                        "Name": "调律",
                        "Desc": "刻晴触发<color style='color:#FFACFF;'>雷元素相关反应</color>后的10秒内，攻击力提升25%。",
                        "Icon": "UI_Talent_S_Keqing_03"
                    },
                    {
                        "Level": 5,
                        "Name": "移灯",
                        "Desc": "<color style='color:#FFD780;'>星斗归位</color>的技能等级提高3级。<br>至多提升至15级。",
                        "Icon": "UI_Talent_U_Keqing_02"
                    },
                    {
                        "Level": 6,
                        "Name": "廉贞",
                        "Desc": "进行普通攻击、重击、施放元素战技或元素爆发时，刻晴获得6%<color style='color:#FFACFF;'>雷元素伤害加成</color>，持续8秒。<br>由普通攻击、重击、元素战技或元素爆发引起的效果分别独立存在。",
                        "Icon": "UI_Talent_S_Keqing_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Keqing": {
        "AttackList": [
            {
                "Skill": "元素战技 - 雷楔命中",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.6
                    ]
                },
                "AtkTag": "元素战技",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 50.0,
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
                "Skill": "元素战技 - 闪现斩击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.0,
                        3.0
                    ]
                },
                "AtkTag": "元素战技",
                "AttTag": "E组",
                "AttGrp": "2.5s / 3次",
                "Element": "Elec",
                "GU": 2.0,
                "Poise": 100.0,
                "ForceType": 3,
                "Force": [
                    0.0,
                    600.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.09,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "元素战技 - 雷暴连斩x2",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2.5
                    ]
                },
                "AtkTag": "元素战技",
                "AttTag": "E组",
                "AttGrp": "2.5s / 3次",
                "Element": "Elec",
                "GU": 2.0,
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
                "StrikeType": "Slash",
                "AttackType": "Range"
            },
            {
                "Skill": "1命伤害",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2.0
                    ]
                },
                "AtkTag": "元素战技长按",
                "AttTag": "E组",
                "AttGrp": "2.5s / 3次",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 50.0,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "元素爆发 - 开启",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        8.0,
                        4.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "Q组",
                "AttGrp": "2.5s / 3次",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 100.0,
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
                "StrikeType": "Slash",
                "AttackType": "Range"
            },
            {
                "Skill": "元素爆发 - 结束",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        8.0,
                        4.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "Q组",
                "AttGrp": "2.5s / 3次",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 200.0,
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
                "StrikeType": "Slash",
                "AttackType": "Range"
            },
            {
                "Skill": "元素爆发 - 连斩第 1 3 5 7 击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        8.0,
                        4.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "Q组",
                "AttGrp": "2.5s / 3次",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 25.0,
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
                "AttackType": "Range"
            },
            {
                "Skill": "元素爆发 - 连斩第 2 4 6 8 击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        8.0,
                        4.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "Q组",
                "AttGrp": "2.5s / 3次",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 25.0,
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
                "StrikeType": "Slash",
                "AttackType": "Range"
            },
            {
                "Skill": "普通攻击1",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        2.2,
                        1.5,
                        1.4
                    ]
                },
                "AtkTag": "普通攻击1",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 38.7,
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
                        1.5,
                        1.6
                    ]
                },
                "AtkTag": "普通攻击2",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 38.7,
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
                        1.8,
                        1.2
                    ]
                },
                "AtkTag": "普通攻击3",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 51.3,
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
                        1.5,
                        2.8
                    ]
                },
                "AtkTag": "普通攻击4",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 31.05,
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
                        1.5,
                        2.8
                    ]
                },
                "AtkTag": "普通攻击4",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 31.05,
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
                "Skill": "普通攻击5",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        0.8
                    ]
                },
                "AtkTag": "普通攻击5",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 64.8,
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
                "Skill": "重击1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.2
                    ]
                },
                "AtkTag": "重击",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 47.3,
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
                "Skill": "重击2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.3
                    ]
                },
                "AtkTag": "重击",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 47.3,
                "ForceType": 3,
                "Force": [
                    655.0,
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