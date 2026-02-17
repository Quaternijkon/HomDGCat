// Auto Generated

var _AvatarDataConfig_ = {
    "Aloy": {
        "BallList": [
            {
                "When": "Freeze Bomb hits monster",
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
                "Skill": "During Elemental Skill",
                "Endure": 0.6
            }
        ],
        "WindZoneList": [
            {
                "Skill": "Elemental Burst Casting Push",
                "Target": "Monsters and the Grass, weight ≤ 250",
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
                        "Name": "Rapid Fire",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, biting frost will accumulate on the arrowhead. A fully charged frost arrow will deal <color style='color:#99FFFF;'>Cryo DMG</color>.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
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
                                "Desc": "2-Hit DMG",
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
                                "Desc": "3-Hit DMG",
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
                                "Desc": "4-Hit DMG",
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
                                "Desc": "Aimed Shot",
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
                                "Desc": "Fully-Charged Aimed Shot",
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
                                "Desc": "Plunge DMG",
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
                                "Desc": "Low/High Plunge DMG",
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
                        "Name": "Frozen Wilds",
                        "Desc": "Aloy throws a Freeze Bomb in the targeted direction that explodes on impact, dealing <color style='color:#99FFFF;'>Cryo DMG</color>. After it explodes, the Freeze Bomb will split up into many Chillwater Bomblets that explode on contact with opponents or after a short delay, dealing <color style='color:#99FFFF;'>Cryo DMG</color>.<br>When a Freeze Bomb or Chillwater Bomblet hits an opponent, the opponent's ATK is decreased and Aloy receives 1 Coil stack.<br>Aloy can gain up to 1 Coil stack every 0.1s.<br><br><color style='color:#FFD780;'>Coil</color><br> · Each stack increases Aloy's Normal Attack DMG.<br> · When Aloy has 4 Coil stacks, all stacks of Coil are cleared. She then enters the Rushing Ice state, which further increases the DMG dealt by her Normal Attacks and converts her Normal Attack DMG to <color style='color:#99FFFF;'>Cryo DMG</color>.<br><br>While in the Rushing Ice state, Aloy cannot obtain new Coil stacks.<br>Coil effects will be cleared 30s after Aloy leaves combat.<br><br><i>You think that's cold? Guess you've never been to The Cut.</i>",
                        "Icon": "Skill_S_Aloy_01",
                        "ParamDesc": [
                            {
                                "Desc": "Freeze Bomb DMG",
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
                                "Desc": "Chillwater Bomblet DMG",
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
                                "Desc": "ATK Decrease",
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
                                "Desc": "ATK Decrease Duration",
                                "ParamLevelList": [
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s",
                                    "6s"
                                ]
                            },
                            {
                                "Desc": "Coil Normal Attack DMG Bonus",
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
                                "Desc": "Rushing Ice Normal Attack DMG Bonus",
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
                                "Desc": "Rushing Ice Duration",
                                "ParamLevelList": [
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s",
                                    "10s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Prophecies of Dawn",
                        "Desc": "Aloy throws a Power Cell filled with Cryo in the targeted direction, then detonates it with an arrow, dealing <color style='color:#99FFFF;'>AoE Cryo DMG</color>.<br><br><i>Whether \"Zero Dawn\" referred to hope or extinction no longer matters. Aloy has already saved her world, and the fate of this one is still being forged by its own heroes.</i>",
                        "Icon": "Skill_E_Aloy_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
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
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s",
                                    "12s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
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
                        "Name": "Combat Override",
                        "Desc": "When Aloy receives the Coil effect from <color style='color:#FFD780;'>Frozen Wilds</color>, her ATK is increased by 16%, while nearby party members' ATK is increased by 8%. This effect lasts 10s.",
                        "Icon": "UI_Talent_S_Aloy_05"
                    },
                    {
                        "Name": "Strong Strike",
                        "Desc": "When Aloy is in the Rushing Ice state conferred by <color style='color:#FFD780;'>Frozen Wilds</color>, her <color style='color:#99FFFF;'>Cryo DMG Bonus</color> increases by 3.5% every 1s. A maximum <color style='color:#99FFFF;'>Cryo DMG Bonus</color> increase of 35% can be gained in this way.",
                        "Icon": "UI_Talent_S_Aloy_06"
                    },
                    {
                        "Name": "Easy Does It",
                        "Desc": "When Aloy is in the party, animals who produce Fowl, Raw Meat, or Chilled Meat will not be startled when party members approach them.",
                        "Icon": "UI_Talent_S_Aloy_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Star of Another World",
                        "Desc": "The time has not yet come for this person's corner of the night sky to light up.",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 2,
                        "Name": "Star of Another World",
                        "Desc": "The time has not yet come for this person's corner of the night sky to light up.",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 3,
                        "Name": "Star of Another World",
                        "Desc": "The time has not yet come for this person's corner of the night sky to light up.",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 4,
                        "Name": "Star of Another World",
                        "Desc": "The time has not yet come for this person's corner of the night sky to light up.",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 5,
                        "Name": "Star of Another World",
                        "Desc": "The time has not yet come for this person's corner of the night sky to light up.",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 6,
                        "Name": "Star of Another World",
                        "Desc": "The time has not yet come for this person's corner of the night sky to light up.",
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
                "Skill": "Elem Skill - Freeze Bomb",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        4.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Elem Skill - Chillwater Bomblet",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "E Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Elem Burst",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        6.5
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Normal ATK 1-1 - Cryo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Normal ATK 1-2 - Cryo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Normal ATK 2 - Cryo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Normal ATK 3 - Cryo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Normal ATK 4 - Cryo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Aim Shoot",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Charged Aim Shoot",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Normal ATK 1-1",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Normal ATK 1-2",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Normal ATK 4",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Plunging",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Low Plunge",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.0,
                        2.0
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "High Plunge",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.5,
                        2.0
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
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