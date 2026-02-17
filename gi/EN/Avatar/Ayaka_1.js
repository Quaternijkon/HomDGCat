// Auto Generated

var _AvatarDataConfig_ = {
    "Ayaka": {
        "BallList": [
            {
                "When": "Elem Skill hits monster",
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
                "When": "CD",
                "CD": 0.3
            }
        ],
        "EndureList": [
            {
                "Skill": "During Elemental Skill",
                "Endure": 0.6
            },
            {
                "Skill": "During Alternate Sprint",
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
                        "Name": "Kamisato Art: Kabuki",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 5 rapid strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to unleash a flurry of sword ki.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
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
                                "Desc": "2-Hit DMG",
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
                                "Desc": "3-Hit DMG",
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
                                "Desc": "4-Hit DMG",
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
                                "Desc": "5-Hit DMG",
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
                                "Desc": "Charged Attack DMG",
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
                                "Desc": "Charged Attack Stamina Cost",
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
                                "Desc": "Plunge DMG",
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
                                "Desc": "Low/High Plunge DMG",
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
                        "Name": "Kamisato Art: Hyouka",
                        "Desc": "Summons blooming ice to launch nearby opponents, dealing <color style='color:#99FFFF;'>AoE Cryo DMG</color>.<br><br><i>\"Clouds shroud the moonlit night. Longing descends like a fog, filling the one detained with wanderlust.\"</i>",
                        "Icon": "Skill_S_Ayaka_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
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
                                "Desc": "CD",
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
                            }
                        ]
                    },
                    {
                        "Name": "Kamisato Art: Soumetsu",
                        "Desc": "Summons forth a snowstorm with flawless poise, unleashing a Frostflake Seki no To that moves forward continuously.<br><br><color style='color:#FFD780;'>Frostflake Seki no To</color><br> · A storm of whirling icy winds that slashes repeatedly at every enemy it touches, dealing <color style='color:#99FFFF;'>Cryo DMG</color>.<br> · The snowstorm explodes after its duration ends, dealing <color style='color:#99FFFF;'>AoE Cryo DMG</color>.<br><br><i>\"The blizzard veils the heron's thoughts, pity heavy in its heart.\"</i>",
                        "Icon": "Skill_E_Ayaka",
                        "ParamDesc": [
                            {
                                "Desc": "Cutting DMG",
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
                                "Desc": "Bloom DMG",
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
                                "Desc": "Duration",
                                "ParamLevelList": [
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s",
                                    "5s"
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
                            },
                            {
                                "Desc": "Energy Cost",
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
                        "Name": "Kamisato Art: Senho",
                        "Desc": "<color style='color:#FFD780;'>Alternate Sprint</color><br>Ayaka consumes Stamina and cloaks herself in a frozen fog that moves with her.<br><br>In Senho form, she moves swiftly upon water.<br>When she reappears, the following effects occur:<br> · Ayaka unleashes frigid energy to apply <color style='color:#99FFFF;'>Cryo</color> on nearby opponents.<br> · Coldness condenses around Ayaka's blade, infusing her attacks with <color style='color:#99FFFF;'>Cryo</color> for a brief period.<br><br><i>\"Feathers fleeting wet / the white heron treads water / a sight without flaw\"</i>",
                        "Icon": "Skill_S_Ayaka_02",
                        "ParamDesc": [
                            {
                                "Desc": "Activation Stamina Consumption",
                                "ParamLevelList": [
                                    "10"
                                ]
                            },
                            {
                                "Desc": "Stamina Drain",
                                "ParamLevelList": [
                                    "15/s"
                                ]
                            },
                            {
                                "Desc": "Infusion Duration",
                                "ParamLevelList": [
                                    "5s"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "Amatsumi Kunitsumi Sanctification",
                        "Desc": "After using <color style='color:#FFD780;'>Kamisato Art: Hyouka</color>, Kamisato Ayaka's Normal and Charged Attacks deal 30% increased DMG for 6s.",
                        "Icon": "UI_Talent_S_Ayaka_05"
                    },
                    {
                        "Name": "Kanten Senmyou Blessing",
                        "Desc": "When the Cryo application at the end of <color style='color:#FFD780;'>Kamisato Art: Senho</color> hits an opponent, Kamisato Ayaka gains the following effects:<br> · Restores 10 Stamina<br> · Gains 18% <color style='color:#99FFFF;'>Cryo DMG Bonus</color> for 10s.",
                        "Icon": "UI_Talent_S_Ayaka_06"
                    },
                    {
                        "Name": "Fruits of Shinsa",
                        "Desc": "When Ayaka crafts Weapon Ascension Materials, she has a 10% chance to receive double the product.",
                        "Icon": "UI_Talent_Combine_Weapon_Double"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Snowswept Sakura",
                        "Desc": "When Kamisato Ayaka's Normal or Charged Attacks deal <color style='color:#99FFFF;'>Cryo DMG</color> to opponents, it has a 50% chance of decreasing the CD of <color style='color:#FFD780;'>Kamisato Art: Hyouka</color> by 0.3s. This effect can occur once every 0.1s.",
                        "Icon": "UI_Talent_S_Ayaka_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Blizzard Blade Seki no To",
                        "Desc": "When casting <color style='color:#FFD780;'>Kamisato Art: Soumetsu</color>, unleashes 2 smaller additional Frostflake Seki no To, each dealing 20% of the original storm's DMG.",
                        "Icon": "UI_Talent_S_Ayaka_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Frostbloom Kamifubuki",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Kamisato Art: Soumetsu</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Ayaka_02"
                    },
                    {
                        "Level": 4,
                        "Name": "Ebb and Flow",
                        "Desc": "Opponents damaged by <color style='color:#FFD780;'>Kamisato Art: Soumetsu</color>'s Frostflake Seki no To will have their DEF decreased by 30% for 6s.",
                        "Icon": "UI_Talent_S_Ayaka_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Blossom Cloud Irutsuki",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Kamisato Art: Hyouka</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Ayaka_01"
                    },
                    {
                        "Level": 6,
                        "Name": "Dance of Suigetsu",
                        "Desc": "Kamisato Ayaka gains Usurahi Butou every 10s, increasing her Charged Attack DMG by 298%. This buff will be cleared 0.5s after Ayaka's Charged ATK hits an opponent, after which the timer for this ability will restart.",
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
                "Skill": "Elem Skill",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.5,
                        2.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Elem Burst - Cutting",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Elem Burst - Bloom",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        5.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Elem Burst - C2 Cutting",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.5
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
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
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Default"
            },
            {
                "Skill": "Elem Burst - C2 Bloom",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Alternate Sprint End",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "",
                "AttTag": "",
                "AttGrp": "Independent",
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
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.2,
                        2.5
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.8,
                        1.5,
                        60.0
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Normal ATK 4-1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Normal ATK 4-2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Normal ATK 4-3",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        5.0,
                        2.3,
                        1.0
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
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
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "CA Group",
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
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        0.8
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "NA Group",
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
                "Skill": "Charged ATK x3",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "CA Group",
                "AttGrp": "0.5s / ∞ hits",
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
                "Skill": "High Plunge",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        5.0,
                        2.0
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
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