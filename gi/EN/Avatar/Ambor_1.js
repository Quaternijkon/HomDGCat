// Auto Generated

var _AvatarDataConfig_ = {
    "Ambor": {
        "BallList": [
            {
                "When": "Baron Bunny explosion hits monster",
                "DropArray": [
                    {
                        "Num": 4,
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
        "WindZoneList": [],
        "OtherDataList": [
            "(Depends on whether C1 is activated)<br>Elemental Burst lasts 2s, shown radius is 4/5.2m. There is a middle circle within it with radius 2/2.6m.<br>Every instance of DMG has radius 2/2.6m.<br>Group 1 interval 0.4s, is centered on the middle circle.<br>Group 2 interval 0.6s, is centered on the middle circle.<br>Group 3 intervel 0.2s, is centered at a random point inside the middle circle."
        ]
    }
}

var _AvatarMats_ = {
    "Ambor": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104111": 1,
                "100055": 3,
                "112011": 3
            },
            {
                "202": 40000,
                "104112": 3,
                "113011": 2,
                "100055": 10,
                "112011": 15
            },
            {
                "202": 60000,
                "104112": 6,
                "113011": 4,
                "100055": 20,
                "112012": 12
            },
            {
                "202": 80000,
                "104113": 3,
                "113011": 8,
                "100055": 30,
                "112012": 18
            },
            {
                "202": 100000,
                "104113": 6,
                "113011": 12,
                "100055": 45,
                "112013": 12
            },
            {
                "202": 120000,
                "104114": 6,
                "113011": 20,
                "100055": 60,
                "112013": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104301": 3,
                "112011": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112012": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112012": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112012": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112012": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112013": 4,
                "113005": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112013": 6,
                "113005": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112013": 9,
                "113005": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112013": 12,
                "113005": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104301": 3,
                "112011": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112012": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112012": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112012": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112012": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112013": 4,
                "113005": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112013": 6,
                "113005": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112013": 9,
                "113005": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112013": 12,
                "113005": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104301": 3,
                "112011": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112012": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112012": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112012": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112012": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112013": 4,
                "113005": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112013": 6,
                "113005": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112013": 9,
                "113005": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112013": 12,
                "113005": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Ambor": {
        "Ver": {
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Sharpshooter",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 5 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, flames will accumulate on the arrowhead. A fully charged flaming arrow will deal <color style='color:#FF9999;'>Pyro DMG</color>.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "36.12%",
                                    "39.06%",
                                    "42.0%",
                                    "46.2%",
                                    "49.14%",
                                    "52.5%",
                                    "57.12%",
                                    "61.74%",
                                    "66.36%",
                                    "71.4%",
                                    "76.44%",
                                    "81.48%",
                                    "86.52%",
                                    "91.56%",
                                    "96.6%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "36.12%",
                                    "39.06%",
                                    "42.0%",
                                    "46.2%",
                                    "49.14%",
                                    "52.5%",
                                    "57.12%",
                                    "61.74%",
                                    "66.36%",
                                    "71.4%",
                                    "76.44%",
                                    "81.48%",
                                    "86.52%",
                                    "91.56%",
                                    "96.6%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "46.44%",
                                    "50.22%",
                                    "54.0%",
                                    "59.4%",
                                    "63.18%",
                                    "67.5%",
                                    "73.44%",
                                    "79.38%",
                                    "85.32%",
                                    "91.8%",
                                    "98.28%",
                                    "104.76%",
                                    "111.24%",
                                    "117.72%",
                                    "124.2%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "47.3%",
                                    "51.15%",
                                    "55.0%",
                                    "60.5%",
                                    "64.35%",
                                    "68.75%",
                                    "74.8%",
                                    "80.85%",
                                    "86.9%",
                                    "93.5%",
                                    "100.1%",
                                    "106.7%",
                                    "113.3%",
                                    "119.9%",
                                    "126.5%"
                                ]
                            },
                            {
                                "Desc": "5-Hit DMG",
                                "ParamLevelList": [
                                    "59.34%",
                                    "64.17%",
                                    "69.0%",
                                    "75.9%",
                                    "80.73%",
                                    "86.25%",
                                    "93.84%",
                                    "101.43%",
                                    "109.02%",
                                    "117.3%",
                                    "125.58%",
                                    "133.86%",
                                    "142.14%",
                                    "150.42%",
                                    "158.7%"
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
                        "Name": "Explosive Puppet",
                        "Desc": "The ever-reliable Baron Bunny takes the stage.<br><br><color style='color:#FFD780;'>Baron Bunny</color><br> · Continuously taunts the enemy, drawing their fire.<br> · Baron Bunny's HP scales with Amber's Max HP.<br> · When destroyed or when its timer expires, Baron Bunny explodes, dealing <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br><br><color style='color:#FFD780;'>Hold</color><br>Adjusts the throwing direction of Baron Bunny.<br>The longer the button is held, the further the throw.<br><br><i>Baron Bunny hails from a storied lineage, but Amber has stopped keeping count since Baron Bunny the 893rd.</i>",
                        "Icon": "Skill_S_Ambor_01",
                        "ParamDesc": [
                            {
                                "Desc": "Inherited HP",
                                "ParamLevelList": [
                                    "41.36%",
                                    "44.462%",
                                    "47.564%",
                                    "51.7%",
                                    "54.802%",
                                    "57.904%",
                                    "62.04%",
                                    "66.176%",
                                    "70.312%",
                                    "74.448%",
                                    "78.584%",
                                    "82.72%",
                                    "87.89%",
                                    "93.06%",
                                    "98.23%"
                                ]
                            },
                            {
                                "Desc": "Explosion DMG",
                                "ParamLevelList": [
                                    "123.2%",
                                    "132.44%",
                                    "141.68%",
                                    "154.0%",
                                    "163.24%",
                                    "172.48%",
                                    "184.8%",
                                    "197.12%",
                                    "209.44%",
                                    "221.76%",
                                    "234.08%",
                                    "246.4%",
                                    "261.8%",
                                    "277.2%",
                                    "292.6%"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Fiery Rain",
                        "Desc": "Fires off a shower of arrows, dealing continuous <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br><br><i>Amber's passion truly burns hot.</i>",
                        "Icon": "Skill_E_Ambor",
                        "ParamDesc": [
                            {
                                "Desc": "Fiery Rain DMG Per Wave",
                                "ParamLevelList": [
                                    "28.08%",
                                    "30.186%",
                                    "32.292%",
                                    "35.1%",
                                    "37.206%",
                                    "39.312%",
                                    "42.12%",
                                    "44.928%",
                                    "47.736%",
                                    "50.544%",
                                    "53.352%",
                                    "56.16%",
                                    "59.67%",
                                    "63.18%",
                                    "66.69%"
                                ]
                            },
                            {
                                "Desc": "Total Fiery Rain DMG",
                                "ParamLevelList": [
                                    "505.44%",
                                    "543.348%",
                                    "581.256%",
                                    "631.8%",
                                    "669.708%",
                                    "707.616%",
                                    "758.16%",
                                    "808.704%",
                                    "859.248%",
                                    "909.792%",
                                    "960.336%",
                                    "1010.88%",
                                    "1074.06%",
                                    "1137.24%",
                                    "1200.42%"
                                ]
                            },
                            {
                                "Desc": "Duration",
                                "ParamLevelList": [
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s",
                                    "2s"
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
                        "Name": "Every Arrow Finds Its Target",
                        "Desc": "Increases the CRIT Rate of <color style='color:#FFD780;'>Fiery Rain</color> by 10% and widens its AoE by 30%.",
                        "Icon": "UI_Talent_S_Ambor_05"
                    },
                    {
                        "Name": "Precise Shot",
                        "Desc": "Aimed Shot hits on weak points increase ATK by 15% for 10s.",
                        "Icon": "UI_Talent_S_Ambor_06"
                    },
                    {
                        "Name": "Gliding Champion",
                        "Desc": "Decreases gliding Stamina consumption for your own party members by 20%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_Explosion_Glide"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "One Arrow to Rule Them All",
                        "Desc": "Fires 2 arrows per <color style='color:#FFD780;'>Aimed Shot</color>. The second arrow deals 20% of the first arrow's DMG.",
                        "Icon": "UI_Talent_S_Ambor_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Bunny Triggered",
                        "Desc": "Baron Bunny, new and improved! Hitting Baron Bunny's foot with a fully-charged Aimed Shot manually detonates it.<br>Explosion via manual detonation deals 200% additional DMG.",
                        "Icon": "UI_Talent_S_Ambor_02"
                    },
                    {
                        "Level": 3,
                        "Name": "It Burns!",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Fiery Rain</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Ambor_02"
                    },
                    {
                        "Level": 4,
                        "Name": "It's Not Just Any Doll...",
                        "Desc": "Decreases <color style='color:#FFD780;'>Explosive Puppet</color>'s CD by 20%. Adds 1 additional charge.",
                        "Icon": "UI_Talent_S_Ambor_03"
                    },
                    {
                        "Level": 5,
                        "Name": "It's Baron Bunny!",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Explosive Puppet</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Ambor_01"
                    },
                    {
                        "Level": 6,
                        "Name": "Wildfire",
                        "Desc": "<color style='color:#FFD780;'>Fiery Rain</color> increases all party members' Movement SPD by 15% and ATK by 15% for 10s.",
                        "Icon": "UI_Talent_S_Ambor_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Ambor": {
        "AttackList": [
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
                "AttTag": "CA Group",
                "AttGrp": "1s / 3 hits",
                "Element": "Fire",
                "GU": 2.0,
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
                "Skill": "Charged Aim Shoot - C1 Extra",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "CA Group",
                "AttGrp": "1s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 4.0,
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
                "AttTag": "CA Group",
                "AttGrp": "1s / 3 hits",
                "Element": "Phys",
                "GU": 4.0,
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
                "Skill": "Aim Shoot - C1 Extra",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "CA Group",
                "AttGrp": "1s / 3 hits",
                "Element": "Phys",
                "GU": 4.0,
                "Poise": 2.0,
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
                "Skill": "Baron Bunny",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 2.0,
                "Poise": 260.0,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Default"
            },
            {
                "Skill": "Elem Burst - Group 1",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "1s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 7.22,
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
                "Skill": "Elem Burst - Group 2",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "1s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 7.22,
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
                "Skill": "Elem Burst - Group 3",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "1s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 7.22,
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
                "Skill": "Normal ATK 1",
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
                "GU": 4.0,
                "Poise": 12.9,
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
                "GU": 4.0,
                "Poise": 13.2,
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
                "GU": 4.0,
                "Poise": 15.0,
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
                "GU": 4.0,
                "Poise": 14.4,
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
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Phys",
                "GU": 4.0,
                "Poise": 16.5,
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