// Auto Generated

var _AvatarDataConfig_ = {
    "Gaming": {
        "BallList": [
            {
                "When": "Charmed Cloudstrider hits monster",
                "DropArray": [
                    {
                        "Num": 2,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD",
                "CD": 3
            }
        ],
        "EndureList": [
            {
                "Skill": "Elemental Skill Motion",
                "Endure": 0.6
            },
            {
                "Skill": "Elemental Skill Plunge",
                "Endure": 0
            },
            {
                "Skill": "Wushou Stance",
                "Endure": 0.5
            }
        ],
        "WindZoneList": [],
        "OtherDataList": [
            "V3 Change: Upon leaving the field, Gaming will exit his Burst's Wushou Stance, and its interruption RES will also be removed.",
            "V3 Change: Charged ATK Cyclic DMG's element GU: 0.4 -> 1. Charged ATK Final DMG's element GU: 0.8 -> 1.",
            "V1 Change: Fixed the bug: If HP is lower than 50% when casting Burst, Suanni Man Chai won't be summoned.",
            "V1 Change: Adjusted facial emotion in combat.",
            "V1 Change: Added audio FX for Plunging Attack: Charmed Cloudstrider.",
            "Upon leaving the field, Gaming will exit his Burst's Wushou Stance. However, its interruption RES will stay on him until the end of the 12s duration.",
            "Using Elemental Skill leaps to 1.5m high."
        ]
    }
}

var _AvatarMats_ = {
    "Gaming": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104111": 1,
                "100033": 3,
                "112002": 3
            },
            {
                "202": 40000,
                "104112": 3,
                "113051": 2,
                "100033": 10,
                "112002": 15
            },
            {
                "202": 60000,
                "104112": 6,
                "113051": 4,
                "100033": 20,
                "112003": 12
            },
            {
                "202": 80000,
                "104113": 3,
                "113051": 8,
                "100033": 30,
                "112003": 18
            },
            {
                "202": 100000,
                "104113": 6,
                "113051": 12,
                "100033": 45,
                "112004": 12
            },
            {
                "202": 120000,
                "104114": 6,
                "113051": 20,
                "100033": 60,
                "112004": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104310": 3,
                "112002": 6
            },
            {
                "202": 17500,
                "104311": 2,
                "112003": 3
            },
            {
                "202": 25000,
                "104311": 4,
                "112003": 4
            },
            {
                "202": 30000,
                "104311": 6,
                "112003": 6
            },
            {
                "202": 37500,
                "104311": 9,
                "112003": 9
            },
            {
                "202": 120000,
                "104312": 4,
                "112004": 4,
                "113056": 1
            },
            {
                "202": 260000,
                "104312": 6,
                "112004": 6,
                "113056": 1
            },
            {
                "202": 450000,
                "104312": 12,
                "112004": 9,
                "113056": 2
            },
            {
                "202": 700000,
                "104312": 16,
                "112004": 12,
                "113056": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104310": 3,
                "112002": 6
            },
            {
                "202": 17500,
                "104311": 2,
                "112003": 3
            },
            {
                "202": 25000,
                "104311": 4,
                "112003": 4
            },
            {
                "202": 30000,
                "104311": 6,
                "112003": 6
            },
            {
                "202": 37500,
                "104311": 9,
                "112003": 9
            },
            {
                "202": 120000,
                "104312": 4,
                "112004": 4,
                "113056": 1
            },
            {
                "202": 260000,
                "104312": 6,
                "112004": 6,
                "113056": 1
            },
            {
                "202": 450000,
                "104312": 12,
                "112004": 9,
                "113056": 2
            },
            {
                "202": 700000,
                "104312": 16,
                "112004": 12,
                "113056": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104310": 3,
                "112002": 6
            },
            {
                "202": 17500,
                "104311": 2,
                "112003": 3
            },
            {
                "202": 25000,
                "104311": 4,
                "112003": 4
            },
            {
                "202": 30000,
                "104311": 6,
                "112003": 6
            },
            {
                "202": 37500,
                "104311": 9,
                "112003": 9
            },
            {
                "202": 120000,
                "104312": 4,
                "112004": 4,
                "113056": 1
            },
            {
                "202": 260000,
                "104312": 6,
                "112004": 6,
                "113056": 1
            },
            {
                "202": 450000,
                "104312": 12,
                "112004": 9,
                "113056": 2
            },
            {
                "202": 700000,
                "104312": 16,
                "112004": 12,
                "113056": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Gaming": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Stellar Rend",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Drains Stamina over time to perform continuous spinning attacks against all nearby opponents.<br>At the end of the sequence, performs a more powerful slash. <br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 5.0,
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "83.856%",
                                    "90.681%",
                                    "97.507%",
                                    "107.258%",
                                    "114.083%",
                                    "121.884%",
                                    "132.609%",
                                    "143.335%",
                                    "154.061%",
                                    "165.762%",
                                    "177.463%",
                                    "189.164%",
                                    "200.864%",
                                    "212.565%",
                                    "224.266%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "79.044%",
                                    "85.478%",
                                    "91.912%",
                                    "101.103%",
                                    "107.537%",
                                    "114.89%",
                                    "125.0%",
                                    "135.111%",
                                    "145.221%",
                                    "156.25%",
                                    "167.28%",
                                    "178.309%",
                                    "189.339%",
                                    "200.368%",
                                    "211.398%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "106.646%",
                                    "115.326%",
                                    "124.007%",
                                    "136.408%",
                                    "145.088%",
                                    "155.009%",
                                    "168.649%",
                                    "182.29%",
                                    "195.931%",
                                    "210.812%",
                                    "225.693%",
                                    "240.574%",
                                    "255.454%",
                                    "270.335%",
                                    "285.216%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "127.949%",
                                    "138.364%",
                                    "148.778%",
                                    "163.656%",
                                    "174.07%",
                                    "185.972%",
                                    "202.338%",
                                    "218.704%",
                                    "235.069%",
                                    "252.923%",
                                    "270.776%",
                                    "288.629%",
                                    "306.483%",
                                    "324.336%",
                                    "342.189%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Cyclic DMG",
                                "ParamLevelList": [
                                    "62.522%",
                                    "67.611%",
                                    "72.7%",
                                    "79.97%",
                                    "85.059%",
                                    "90.875%",
                                    "98.872%",
                                    "106.869%",
                                    "114.866%",
                                    "123.59%",
                                    "132.314%",
                                    "141.038%",
                                    "149.762%",
                                    "158.486%",
                                    "167.21%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Final DMG",
                                "ParamLevelList": [
                                    "113.09%",
                                    "122.295%",
                                    "131.5%",
                                    "144.65%",
                                    "153.855%",
                                    "164.375%",
                                    "178.84%",
                                    "193.305%",
                                    "207.77%",
                                    "223.55%",
                                    "239.33%",
                                    "255.11%",
                                    "270.89%",
                                    "286.67%",
                                    "302.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s"
                                ]
                            },
                            {
                                "Desc": "Max Duration",
                                "ParamLevelList": [
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "64.146%",
                                    "69.367%",
                                    "74.588%",
                                    "82.047%",
                                    "87.268%",
                                    "93.235%",
                                    "101.44%",
                                    "109.644%",
                                    "117.849%",
                                    "126.8%",
                                    "135.75%",
                                    "144.701%",
                                    "153.651%",
                                    "162.602%",
                                    "171.552%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "128.264%/160.208%",
                                    "138.704%/173.249%",
                                    "149.144%/186.289%",
                                    "164.058%/204.918%",
                                    "174.498%/217.958%",
                                    "186.43%/232.861%",
                                    "202.836%/253.353%",
                                    "219.242%/273.845%",
                                    "235.648%/294.337%",
                                    "253.545%/316.691%",
                                    "271.442%/339.046%",
                                    "289.339%/361.401%",
                                    "307.237%/383.755%",
                                    "325.134%/406.11%",
                                    "343.031%/428.465%"
                                ]
                            }
                        ],
                        "Icon": "Skill_A_04"
                    },
                    {
                        "Name": "Bestial Ascent",
                        "Desc": "Pounces forward using the Wushou arts, leaping high into the air after coming into contact with a target or surface.<br>After Gaming has used Bestial Ascent to rise into the air, if he immediately uses a Plunging Attack, he will use the especially powerful Plunging Attack: Charmed Cloudstrider instead.<br><br><color style='color:#FFD780;'>Plunging Attack: Charmed Cloudstrider</color><br>The DMG from Plunging Attacks caused by Bestial Ascent is converted to <color style='color:#FF9999;'>Pyro DMG</color> that cannot be overridden by other elemental infusions. Upon landing, Gaming will consume a fixed amount of HP. Gaming's HP cannot be reduced below 10% by this method.<br>Charmed Cloudstrider DMG is considered Plunging Attack DMG.<br><br><i>\"Auspicious beasts leap high to pluck the greens — that symbolizes good fortune and knowing how to make some serious green, y'know — so may we all rise to new heights, one step at a time!\"</i>",
                        "Num": 1,
                        "Lock": 8.0,
                        "ParamDesc": [
                            {
                                "Desc": "Plunging Attack: Charmed Cloudstrider DMG",
                                "ParamLevelList": [
                                    "230.4%",
                                    "247.68%",
                                    "264.96%",
                                    "288.0%",
                                    "305.28%",
                                    "322.56%",
                                    "345.6%",
                                    "368.64%",
                                    "391.68%",
                                    "414.72%",
                                    "437.76%",
                                    "460.8%",
                                    "489.6%",
                                    "518.4%",
                                    "547.2%"
                                ]
                            },
                            {
                                "Desc": "HP Cost",
                                "ParamLevelList": [
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s"
                                ]
                            }
                        ],
                        "Icon": "Skill_S_Gaming_01"
                    },
                    {
                        "Name": "Suanni's Gilded Dance",
                        "Desc": "Gaming enters Wushou Stance, briefly applying <color style='color:#FF9999;'>Pyro</color> to him, recovering a fixed amount of HP, and summons his companion, the Suanni Man Chai, to smash into his target, dealing <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br>After bashing its target, Man Chai will roll to a nearby location before moving towards Gaming. When it links up with Gaming, Man Chai will leave the field and reset the CD for Gaming's Elemental Skill, Bestial Ascent.<br>While Wushou Stance is active, his resistance to interruption is increased, and when Gaming lands with Charmed Cloudstrider attack or completes the forward pounce attack from Bestial Ascent with over 50% HP, he will summon Man Chai again.<br>Each Gaming can only have 1 Man Chai on the field simultaneously.<br>This effect will be canceled once Gaming leaves the field.<br><br><i>\"The gilded Suanni spits out fortune like a fireworks show! Hey, now that's what's called prosperity, when business is really 'booming'!\"</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "ParamDesc": [
                            {
                                "Desc": "Suanni Man Chai Smash DMG",
                                "ParamLevelList": [
                                    "370.4%",
                                    "398.18%",
                                    "425.96%",
                                    "463.0%",
                                    "490.78%",
                                    "518.56%",
                                    "555.6%",
                                    "592.64%",
                                    "629.68%",
                                    "666.72%",
                                    "703.76%",
                                    "740.8%",
                                    "787.1%",
                                    "833.4%",
                                    "879.7%"
                                ]
                            },
                            {
                                "Desc": "Skill Healing",
                                "ParamLevelList": [
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "Wushou Stance Duration",
                                "ParamLevelList": [
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0"
                                ]
                            }
                        ],
                        "Icon": "Skill_E_Gaming_01"
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "Dance of Amity",
                        "Desc": "After <color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider hits an opponent, Gaming will regain 1.5% of his Max HP once every 0.2s for 0.8s.",
                        "Icon": "UI_Talent_S_Gaming_05"
                    },
                    {
                        "Name": "Air of Prosperity",
                        "Desc": "When Gaming has less than 50% HP, he will receive a 20% Incoming Healing Bonus. When Gaming has 50% HP or more, Plunging Attack: Charmed Cloudstrider will deal 20% more DMG.",
                        "Icon": "UI_Talent_S_Gaming_06"
                    },
                    {
                        "Name": "The Striding Beast",
                        "Desc": "In the day (06:00 – 18:00), your party members gain the Swift Stride effect: Movement SPD increased by 10%.<br>Does not take effect in Domains, Trounce Domains, or Spiral Abyss. Swift Stride does not stack.",
                        "Icon": "UI_Talent_S_Dehya_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Bringer of Blessing",
                        "Desc": "When the Suanni Man Chai from <color style='color:#FFD780;'>Suanni's Gilded Dance</color> meets back up with Gaming, it will heal 15% of Gaming's HP.",
                        "Icon": "UI_Talent_S_Gaming_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Plum Blossoms Underfoot",
                        "Desc": "When Gaming receives healing and this instance of healing overflows, his ATK will be increased by 20% for 5s.",
                        "Icon": "UI_Talent_S_Gaming_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Awakening Spirit",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Bestial Ascent</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Gaming_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Soar Across Mountains",
                        "Desc": "When <color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider hits an opponent, it will restore 2 Energy to Gaming. This effect can be triggered once every 0.2s.",
                        "Icon": "UI_Talent_S_Gaming_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Evil-Daunting Roar",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Suanni's Gilded Dance</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Gaming_02"
                    },
                    {
                        "Level": 6,
                        "Name": "To Tame All Beasts",
                        "Desc": "<color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider CRIT Rate increased by 20% and CRIT DMG increased by 40%, and its attack radius will be increased.",
                        "Icon": "UI_Talent_S_Gaming_04"
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Drains Stamina over time to perform continuous spinning attacks against all nearby opponents.<br>At the end of the sequence, performs a more powerful slash. <br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_04",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Stellar Rend",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "83.856%",
                                    "90.681%",
                                    "97.507%",
                                    "107.258%",
                                    "114.083%",
                                    "121.884%",
                                    "132.609%",
                                    "143.335%",
                                    "154.061%",
                                    "165.762%",
                                    "177.463%",
                                    "189.164%",
                                    "200.864%",
                                    "212.565%",
                                    "224.266%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "79.044%",
                                    "85.478%",
                                    "91.912%",
                                    "101.103%",
                                    "107.537%",
                                    "114.89%",
                                    "125.0%",
                                    "135.111%",
                                    "145.221%",
                                    "156.25%",
                                    "167.28%",
                                    "178.309%",
                                    "189.339%",
                                    "200.368%",
                                    "211.398%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "106.646%",
                                    "115.326%",
                                    "124.007%",
                                    "136.408%",
                                    "145.088%",
                                    "155.009%",
                                    "168.649%",
                                    "182.29%",
                                    "195.931%",
                                    "210.812%",
                                    "225.693%",
                                    "240.574%",
                                    "255.454%",
                                    "270.335%",
                                    "285.216%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "127.949%",
                                    "138.364%",
                                    "148.778%",
                                    "163.656%",
                                    "174.07%",
                                    "185.972%",
                                    "202.338%",
                                    "218.704%",
                                    "235.069%",
                                    "252.923%",
                                    "270.776%",
                                    "288.629%",
                                    "306.483%",
                                    "324.336%",
                                    "342.189%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Cyclic DMG",
                                "ParamLevelList": [
                                    "62.522%",
                                    "67.611%",
                                    "72.7%",
                                    "79.97%",
                                    "85.059%",
                                    "90.875%",
                                    "98.872%",
                                    "106.869%",
                                    "114.866%",
                                    "123.59%",
                                    "132.314%",
                                    "141.038%",
                                    "149.762%",
                                    "158.486%",
                                    "167.21%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Final DMG",
                                "ParamLevelList": [
                                    "113.09%",
                                    "122.295%",
                                    "131.5%",
                                    "144.65%",
                                    "153.855%",
                                    "164.375%",
                                    "178.84%",
                                    "193.305%",
                                    "207.77%",
                                    "223.55%",
                                    "239.33%",
                                    "255.11%",
                                    "270.89%",
                                    "286.67%",
                                    "302.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s"
                                ]
                            },
                            {
                                "Desc": "Max Duration",
                                "ParamLevelList": [
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "64.146%",
                                    "69.367%",
                                    "74.588%",
                                    "82.047%",
                                    "87.268%",
                                    "93.235%",
                                    "101.44%",
                                    "109.644%",
                                    "117.849%",
                                    "126.8%",
                                    "135.75%",
                                    "144.701%",
                                    "153.651%",
                                    "162.602%",
                                    "171.552%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "128.264%/160.208%",
                                    "138.704%/173.249%",
                                    "149.144%/186.289%",
                                    "164.058%/204.918%",
                                    "174.498%/217.958%",
                                    "186.43%/232.861%",
                                    "202.836%/253.353%",
                                    "219.242%/273.845%",
                                    "235.648%/294.337%",
                                    "253.545%/316.691%",
                                    "271.442%/339.046%",
                                    "289.339%/361.401%",
                                    "307.237%/383.755%",
                                    "325.134%/406.11%",
                                    "343.031%/428.465%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Pounces forward using the Wushou arts, leaping high into the air after hitting.<br>After Gaming has used Bestial Ascent to rise into the air, he will use the especially powerful Plunging Attack: Charmed Cloudstrider when performing a Plunging Attack.<br><br><color style='color:#FFD780;'>Plunging Attack: Charmed Cloudstrider</color><br>The DMG from Plunging Attacks caused by Bestial Ascent is converted to <color style='color:#FF9999;'>Pyro DMG</color> that cannot be overridden by other elemental infusions. Upon landing, Gaming will consume a fixed amount of HP. Gaming's HP cannot be reduced below 10% by this method.<br>Charmed Cloudstrider DMG is considered Plunging Attack DMG.<br><br><i>\"The beast leaps and plucks the greens, prosperity all around us rings. May wealth and health come to us all — and may we have a grand ol' ball!\"</i>",
                        "Icon": "Skill_S_Gaming_01",
                        "Lock": 8.0,
                        "Name": "Bestial Ascent",
                        "ParamDesc": [
                            {
                                "Desc": "Plunging Attack: Charmed Cloudstrider DMG",
                                "ParamLevelList": [
                                    "230.4%",
                                    "247.68%",
                                    "264.96%",
                                    "288.0%",
                                    "305.28%",
                                    "322.56%",
                                    "345.6%",
                                    "368.64%",
                                    "391.68%",
                                    "414.72%",
                                    "437.76%",
                                    "460.8%",
                                    "489.6%",
                                    "518.4%",
                                    "547.2%"
                                ]
                            },
                            {
                                "Desc": "HP Cost",
                                "ParamLevelList": [
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Gaming enters Wushou Stance, briefly applying <color style='color:#FF9999;'>Pyro</color> to him, recovering a fixed amount of HP, and summons his companion, the Suanni Man Chai, to smash into his target, dealing <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br>After bashing its target, Man Chai will roll to a nearby location before moving towards Gaming. When it links up with Gaming, Man Chai will leave the field and reset the CD for Gaming's Elemental Skill, Bestial Ascent.<br>While Wushou Stance is active, when Gaming performs Charmed Cloustrider or completes the pounce attack from Bestial Ascent with over 50% HP, he will summon Man Chai again.<br>Each Gaming can only have 1 Man Chai on the field simultaneously.<br><br><i>\"The golden beast brings fortune, blazing lights, and brilliant sights! Now that's what you call an abundant life!\"</i>",
                        "Icon": "Skill_E_Gaming_01",
                        "Lock": 15.0,
                        "Name": "Suanni's Gilded Dance",
                        "ParamDesc": [
                            {
                                "Desc": "Suanni Man Chai Smash DMG",
                                "ParamLevelList": [
                                    "370.4%",
                                    "398.18%",
                                    "425.96%",
                                    "463.0%",
                                    "490.78%",
                                    "518.56%",
                                    "555.6%",
                                    "592.64%",
                                    "629.68%",
                                    "666.72%",
                                    "703.76%",
                                    "740.8%",
                                    "787.1%",
                                    "833.4%",
                                    "879.7%"
                                ]
                            },
                            {
                                "Desc": "Skill Healing",
                                "ParamLevelList": [
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "Wushou Stance Duration",
                                "ParamLevelList": [
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "For 1s after hitting an opponent with <color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider, Gaming will recover 6% of his HP.",
                        "Icon": "UI_Talent_S_Gaming_05",
                        "Name": "Dance of Amity"
                    },
                    {
                        "Desc": "When Gaming has less than 50% HP, he will receive a 20% Incoming Healing Bonus. When Gaming has 50% HP or more, Plunging Attack: Charmed Cloudstrider will deal 20% more DMG.",
                        "Icon": "UI_Talent_S_Gaming_06",
                        "Name": "Air of Prosperity"
                    },
                    {
                        "Desc": "Increases the Movement SPD of your own party members by 10% during the day (6:00 – 18:00).<br>Does not take effect in Domains, Trounce Domains, or Spiral Abyss. Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Dehya_07",
                        "Name": "The Striding Beast"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When the Suanni Man Chai from <color style='color:#FFD780;'>Suanni's Gilded Dance</color> meets back up with Gaming, it will heal 15% of Gaming's HP.",
                        "Icon": "UI_Talent_S_Gaming_01",
                        "Name": "Bringer of Blessing",
                        "Level": 1
                    },
                    {
                        "Desc": "When Gaming receives healing and this instance of healing overflows, his ATK will be increased by 20% for 5s.",
                        "Icon": "UI_Talent_S_Gaming_02",
                        "Name": "Plum Blossoms Underfoot",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Bestial Ascent</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Gaming_01",
                        "Name": "Awakening Spirit",
                        "Level": 3
                    },
                    {
                        "Desc": "When <color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider hits an opponent, it will restore 2 Energy to Gaming. This effect can be triggered once every 0.2s.",
                        "Icon": "UI_Talent_S_Gaming_03",
                        "Name": "Soar Across Mountains",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Suanni's Gilded Dance</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Gaming_02",
                        "Name": "Demon-Daunting Roar",
                        "Level": 5
                    },
                    {
                        "Desc": "<color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider CRIT Rate increased by 20% and CRIT DMG increased by 40%, and its attack radius will be increased.",
                        "Icon": "UI_Talent_S_Gaming_04",
                        "Name": "To Tame All Beasts",
                        "Level": 6
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Drains Stamina over time to perform continuous spinning attacks against all nearby opponents.<br>At the end of the sequence, performs a more powerful slash. <br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_04",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Stellar Rend",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "83.856%",
                                    "90.681%",
                                    "97.507%",
                                    "107.258%",
                                    "114.083%",
                                    "121.884%",
                                    "132.609%",
                                    "143.335%",
                                    "154.061%",
                                    "165.762%",
                                    "177.463%",
                                    "189.164%",
                                    "200.864%",
                                    "212.565%",
                                    "224.266%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "79.044%",
                                    "85.478%",
                                    "91.912%",
                                    "101.103%",
                                    "107.537%",
                                    "114.89%",
                                    "125.0%",
                                    "135.111%",
                                    "145.221%",
                                    "156.25%",
                                    "167.28%",
                                    "178.309%",
                                    "189.339%",
                                    "200.368%",
                                    "211.398%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "106.646%",
                                    "115.326%",
                                    "124.007%",
                                    "136.408%",
                                    "145.088%",
                                    "155.009%",
                                    "168.649%",
                                    "182.29%",
                                    "195.931%",
                                    "210.812%",
                                    "225.693%",
                                    "240.574%",
                                    "255.454%",
                                    "270.335%",
                                    "285.216%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "127.949%",
                                    "138.364%",
                                    "148.778%",
                                    "163.656%",
                                    "174.07%",
                                    "185.972%",
                                    "202.338%",
                                    "218.704%",
                                    "235.069%",
                                    "252.923%",
                                    "270.776%",
                                    "288.629%",
                                    "306.483%",
                                    "324.336%",
                                    "342.189%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Cyclic DMG",
                                "ParamLevelList": [
                                    "62.522%",
                                    "67.611%",
                                    "72.7%",
                                    "79.97%",
                                    "85.059%",
                                    "90.875%",
                                    "98.872%",
                                    "106.869%",
                                    "114.866%",
                                    "123.59%",
                                    "132.314%",
                                    "141.038%",
                                    "149.762%",
                                    "158.486%",
                                    "167.21%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Final DMG",
                                "ParamLevelList": [
                                    "113.09%",
                                    "122.295%",
                                    "131.5%",
                                    "144.65%",
                                    "153.855%",
                                    "164.375%",
                                    "178.84%",
                                    "193.305%",
                                    "207.77%",
                                    "223.55%",
                                    "239.33%",
                                    "255.11%",
                                    "270.89%",
                                    "286.67%",
                                    "302.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s"
                                ]
                            },
                            {
                                "Desc": "Max Duration",
                                "ParamLevelList": [
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "64.146%",
                                    "69.367%",
                                    "74.588%",
                                    "82.047%",
                                    "87.268%",
                                    "93.235%",
                                    "101.44%",
                                    "109.644%",
                                    "117.849%",
                                    "126.8%",
                                    "135.75%",
                                    "144.701%",
                                    "153.651%",
                                    "162.602%",
                                    "171.552%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "128.264%/160.208%",
                                    "138.704%/173.249%",
                                    "149.144%/186.289%",
                                    "164.058%/204.918%",
                                    "174.498%/217.958%",
                                    "186.43%/232.861%",
                                    "202.836%/253.353%",
                                    "219.242%/273.845%",
                                    "235.648%/294.337%",
                                    "253.545%/316.691%",
                                    "271.442%/339.046%",
                                    "289.339%/361.401%",
                                    "307.237%/383.755%",
                                    "325.134%/406.11%",
                                    "343.031%/428.465%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Pounces forward using the Wushou arts, leaping high into the air after hitting.<br>After Gaming has used Bestial Ascent to rise into the air, he will use the especially powerful Plunging Attack: Charmed Cloudstrider when performing a Plunging Attack.<br><br><color style='color:#FFD780;'>Plunging Attack: Charmed Cloudstrider</color><br>The DMG from Plunging Attacks caused by Bestial Ascent is converted to <color style='color:#FF9999;'>Pyro DMG</color> that cannot be overridden by other elemental infusions. Upon landing, Gaming will consume a fixed amount of HP. Gaming's HP cannot be reduced below 10% by this method.<br>Charmed Cloudstrider DMG is considered Plunging Attack DMG.<br><br><i>\"The beast leaps and plucks the greens, prosperity all around us rings. May wealth and health come to us all — and may we have a grand ol' ball!\"</i>",
                        "Icon": "Skill_S_Gaming_01",
                        "Lock": 8.0,
                        "Name": "Bestial Ascent",
                        "ParamDesc": [
                            {
                                "Desc": "Plunging Attack: Charmed Cloudstrider DMG",
                                "ParamLevelList": [
                                    "230.4%",
                                    "247.68%",
                                    "264.96%",
                                    "288.0%",
                                    "305.28%",
                                    "322.56%",
                                    "345.6%",
                                    "368.64%",
                                    "391.68%",
                                    "414.72%",
                                    "437.76%",
                                    "460.8%",
                                    "489.6%",
                                    "518.4%",
                                    "547.2%"
                                ]
                            },
                            {
                                "Desc": "HP Cost",
                                "ParamLevelList": [
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Gaming enters Wushou Stance, briefly applying <color style='color:#FF9999;'>Pyro</color> to him, recovering a fixed amount of HP, and summons his companion, the Suanni Man Chai, to smash into his target, dealing <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br>After bashing its target, Man Chai will roll to a nearby location before moving towards Gaming. When it links up with Gaming, Man Chai will leave the field and reset the CD for Gaming's Elemental Skill, Bestial Ascent.<br>While Wushou Stance is active, when Gaming performs Charmed Cloustrider or completes the pounce attack from Bestial Ascent with over 50% HP, he will summon Man Chai again.<br>Each Gaming can only have 1 Man Chai on the field simultaneously.<br><br><i>\"The golden beast brings fortune, blazing lights, and brilliant sights! Now that's what you call an abundant life!\"</i>",
                        "Icon": "Skill_E_Gaming_01",
                        "Lock": 15.0,
                        "Name": "Suanni's Gilded Dance",
                        "ParamDesc": [
                            {
                                "Desc": "Suanni Man Chai Smash DMG",
                                "ParamLevelList": [
                                    "370.4%",
                                    "398.18%",
                                    "425.96%",
                                    "463.0%",
                                    "490.78%",
                                    "518.56%",
                                    "555.6%",
                                    "592.64%",
                                    "629.68%",
                                    "666.72%",
                                    "703.76%",
                                    "740.8%",
                                    "787.1%",
                                    "833.4%",
                                    "879.7%"
                                ]
                            },
                            {
                                "Desc": "Skill Healing",
                                "ParamLevelList": [
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "Wushou Stance Duration",
                                "ParamLevelList": [
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "For 1s after hitting an opponent with <color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider, Gaming will recover 6% of his HP.",
                        "Icon": "UI_Talent_S_Gaming_05",
                        "Name": "Dance of Amity"
                    },
                    {
                        "Desc": "When Gaming has less than 50% HP, he will receive a 20% Incoming Healing Bonus. When Gaming has 50% HP or more, Plunging Attack: Charmed Cloudstrider will deal 20% more DMG.",
                        "Icon": "UI_Talent_S_Gaming_06",
                        "Name": "Air of Prosperity"
                    },
                    {
                        "Desc": "Increases the Movement SPD of your own party members by 10% during the day (6:00 – 18:00).<br>Does not take effect in Domains, Trounce Domains, or Spiral Abyss. Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Dehya_07",
                        "Name": "The Striding Beast"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When the Suanni Man Chai from <color style='color:#FFD780;'>Suanni's Gilded Dance</color> meets back up with Gaming, it will heal 15% of Gaming's HP.",
                        "Icon": "UI_Talent_S_Gaming_01",
                        "Name": "Bringer of Blessing",
                        "Level": 1
                    },
                    {
                        "Desc": "When Gaming receives healing and this instance of healing overflows, his ATK will be increased by 20% for 5s.",
                        "Icon": "UI_Talent_S_Gaming_02",
                        "Name": "Plum Blossoms Underfoot",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Bestial Ascent</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Gaming_01",
                        "Name": "Awakening Spirit",
                        "Level": 3
                    },
                    {
                        "Desc": "When <color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider hits an opponent, it will restore 2 Energy to Gaming. This effect can be triggered once every 0.2s.",
                        "Icon": "UI_Talent_S_Gaming_03",
                        "Name": "Soar Across Mountains",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Suanni's Gilded Dance</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Gaming_02",
                        "Name": "Demon-Daunting Roar",
                        "Level": 5
                    },
                    {
                        "Desc": "<color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider CRIT Rate increased by 20% and CRIT DMG increased by 40%, and its attack radius will be increased.",
                        "Icon": "UI_Talent_S_Gaming_04",
                        "Name": "To Tame All Beasts",
                        "Level": 6
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Drains Stamina over time to perform continuous spinning attacks against all nearby opponents.<br>At the end of the sequence, performs a more powerful slash. <br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_04",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Stellar Rend",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "83.856%",
                                    "90.681%",
                                    "97.507%",
                                    "107.258%",
                                    "114.083%",
                                    "121.884%",
                                    "132.609%",
                                    "143.335%",
                                    "154.061%",
                                    "165.762%",
                                    "177.463%",
                                    "189.164%",
                                    "200.864%",
                                    "212.565%",
                                    "224.266%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "79.044%",
                                    "85.478%",
                                    "91.912%",
                                    "101.103%",
                                    "107.537%",
                                    "114.89%",
                                    "125.0%",
                                    "135.111%",
                                    "145.221%",
                                    "156.25%",
                                    "167.28%",
                                    "178.309%",
                                    "189.339%",
                                    "200.368%",
                                    "211.398%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "106.646%",
                                    "115.326%",
                                    "124.007%",
                                    "136.408%",
                                    "145.088%",
                                    "155.009%",
                                    "168.649%",
                                    "182.29%",
                                    "195.931%",
                                    "210.812%",
                                    "225.693%",
                                    "240.574%",
                                    "255.454%",
                                    "270.335%",
                                    "285.216%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "127.949%",
                                    "138.364%",
                                    "148.778%",
                                    "163.656%",
                                    "174.07%",
                                    "185.972%",
                                    "202.338%",
                                    "218.704%",
                                    "235.069%",
                                    "252.923%",
                                    "270.776%",
                                    "288.629%",
                                    "306.483%",
                                    "324.336%",
                                    "342.189%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Cyclic DMG",
                                "ParamLevelList": [
                                    "62.522%",
                                    "67.611%",
                                    "72.7%",
                                    "79.97%",
                                    "85.059%",
                                    "90.875%",
                                    "98.872%",
                                    "106.869%",
                                    "114.866%",
                                    "123.59%",
                                    "132.314%",
                                    "141.038%",
                                    "149.762%",
                                    "158.486%",
                                    "167.21%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Final DMG",
                                "ParamLevelList": [
                                    "113.09%",
                                    "122.295%",
                                    "131.5%",
                                    "144.65%",
                                    "153.855%",
                                    "164.375%",
                                    "178.84%",
                                    "193.305%",
                                    "207.77%",
                                    "223.55%",
                                    "239.33%",
                                    "255.11%",
                                    "270.89%",
                                    "286.67%",
                                    "302.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s"
                                ]
                            },
                            {
                                "Desc": "Max Duration",
                                "ParamLevelList": [
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "64.146%",
                                    "69.367%",
                                    "74.588%",
                                    "82.047%",
                                    "87.268%",
                                    "93.235%",
                                    "101.44%",
                                    "109.644%",
                                    "117.849%",
                                    "126.8%",
                                    "135.75%",
                                    "144.701%",
                                    "153.651%",
                                    "162.602%",
                                    "171.552%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "128.264%/160.208%",
                                    "138.704%/173.249%",
                                    "149.144%/186.289%",
                                    "164.058%/204.918%",
                                    "174.498%/217.958%",
                                    "186.43%/232.861%",
                                    "202.836%/253.353%",
                                    "219.242%/273.845%",
                                    "235.648%/294.337%",
                                    "253.545%/316.691%",
                                    "271.442%/339.046%",
                                    "289.339%/361.401%",
                                    "307.237%/383.755%",
                                    "325.134%/406.11%",
                                    "343.031%/428.465%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Pounces forward using the Wushou arts, leaping high into the air after coming into contact with a target or surface.<br>After Gaming has used Bestial Ascent to rise into the air, he will use the especially powerful Plunging Attack: Charmed Cloudstrider when performing a Plunging Attack.<br><br><color style='color:#FFD780;'>Plunging Attack: Charmed Cloudstrider</color><br>The DMG from Plunging Attacks caused by Bestial Ascent is converted to <color style='color:#FF9999;'>Pyro DMG</color> that cannot be overridden by other elemental infusions. Upon landing, Gaming will consume a fixed amount of HP. Gaming's HP cannot be reduced below 10% by this method.<br>Charmed Cloudstrider DMG is considered Plunging Attack DMG.<br><br><i>\"The beast leaps and plucks the greens, prosperity all around us rings. May wealth and health come to us all — and may we have a grand ol' ball!\"</i>",
                        "Icon": "Skill_S_Gaming_01",
                        "Lock": 8.0,
                        "Name": "Bestial Ascent",
                        "ParamDesc": [
                            {
                                "Desc": "Plunging Attack: Charmed Cloudstrider DMG",
                                "ParamLevelList": [
                                    "230.4%",
                                    "247.68%",
                                    "264.96%",
                                    "288.0%",
                                    "305.28%",
                                    "322.56%",
                                    "345.6%",
                                    "368.64%",
                                    "391.68%",
                                    "414.72%",
                                    "437.76%",
                                    "460.8%",
                                    "489.6%",
                                    "518.4%",
                                    "547.2%"
                                ]
                            },
                            {
                                "Desc": "HP Cost",
                                "ParamLevelList": [
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Gaming enters Wushou Stance, briefly applying <color style='color:#FF9999;'>Pyro</color> to him, recovering a fixed amount of HP, and summons his companion, the Suanni Man Chai, to smash into his target, dealing <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br>After bashing its target, Man Chai will roll to a nearby location before moving towards Gaming. When it links up with Gaming, Man Chai will leave the field and reset the CD for Gaming's Elemental Skill, Bestial Ascent.<br>While Wushou Stance is active, when Gaming lands with Charmed Cloudstrider attack or completes the forward pounce attack from Bestial Ascent with over 50% HP, he will summon Man Chai again.<br>Each Gaming can only have 1 Man Chai on the field simultaneously.<br>This effect will be canceled once Gaming leaves the field.<br><br><i>\"The golden beast brings fortune, blazing lights, and brilliant sights! Now that's what you call an abundant life!\"</i>",
                        "Icon": "Skill_E_Gaming_01",
                        "Lock": 15.0,
                        "Name": "Suanni's Gilded Dance",
                        "ParamDesc": [
                            {
                                "Desc": "Suanni Man Chai Smash DMG",
                                "ParamLevelList": [
                                    "370.4%",
                                    "398.18%",
                                    "425.96%",
                                    "463.0%",
                                    "490.78%",
                                    "518.56%",
                                    "555.6%",
                                    "592.64%",
                                    "629.68%",
                                    "666.72%",
                                    "703.76%",
                                    "740.8%",
                                    "787.1%",
                                    "833.4%",
                                    "879.7%"
                                ]
                            },
                            {
                                "Desc": "Skill Healing",
                                "ParamLevelList": [
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "Wushou Stance Duration",
                                "ParamLevelList": [
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "After <color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider hits an opponent, Gaming will regain 1.5% of his Max HP once every 0.2s for 0.8s.",
                        "Icon": "UI_Talent_S_Gaming_05",
                        "Name": "Dance of Amity"
                    },
                    {
                        "Desc": "When Gaming has less than 50% HP, he will receive a 20% Incoming Healing Bonus. When Gaming has 50% HP or more, Plunging Attack: Charmed Cloudstrider will deal 20% more DMG.",
                        "Icon": "UI_Talent_S_Gaming_06",
                        "Name": "Air of Prosperity"
                    },
                    {
                        "Desc": "Increases the Movement SPD of your own party members by 10% during the day (6:00 – 18:00).<br>Does not take effect in Domains, Trounce Domains, or Spiral Abyss. Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Dehya_07",
                        "Name": "The Striding Beast"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When the Suanni Man Chai from <color style='color:#FFD780;'>Suanni's Gilded Dance</color> meets back up with Gaming, it will heal 15% of Gaming's HP.",
                        "Icon": "UI_Talent_S_Gaming_01",
                        "Name": "Bringer of Blessing",
                        "Level": 1
                    },
                    {
                        "Desc": "When Gaming receives healing and this instance of healing overflows, his ATK will be increased by 20% for 5s.",
                        "Icon": "UI_Talent_S_Gaming_02",
                        "Name": "Plum Blossoms Underfoot",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Bestial Ascent</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Gaming_01",
                        "Name": "Awakening Spirit",
                        "Level": 3
                    },
                    {
                        "Desc": "When <color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider hits an opponent, it will restore 2 Energy to Gaming. This effect can be triggered once every 0.2s.",
                        "Icon": "UI_Talent_S_Gaming_03",
                        "Name": "Soar Across Mountains",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Suanni's Gilded Dance</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Gaming_02",
                        "Name": "Demon-Daunting Roar",
                        "Level": 5
                    },
                    {
                        "Desc": "<color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider CRIT Rate increased by 20% and CRIT DMG increased by 40%, and its attack radius will be increased.",
                        "Icon": "UI_Talent_S_Gaming_04",
                        "Name": "To Tame All Beasts",
                        "Level": 6
                    }
                ]
            },
            "5": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Drains Stamina over time to perform continuous spinning attacks against all nearby opponents.<br>At the end of the sequence, performs a more powerful slash. <br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_04",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Stellar Rend",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "83.856%",
                                    "90.681%",
                                    "97.507%",
                                    "107.258%",
                                    "114.083%",
                                    "121.884%",
                                    "132.609%",
                                    "143.335%",
                                    "154.061%",
                                    "165.762%",
                                    "177.463%",
                                    "189.164%",
                                    "200.864%",
                                    "212.565%",
                                    "224.266%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "79.044%",
                                    "85.478%",
                                    "91.912%",
                                    "101.103%",
                                    "107.537%",
                                    "114.89%",
                                    "125.0%",
                                    "135.111%",
                                    "145.221%",
                                    "156.25%",
                                    "167.28%",
                                    "178.309%",
                                    "189.339%",
                                    "200.368%",
                                    "211.398%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "106.646%",
                                    "115.326%",
                                    "124.007%",
                                    "136.408%",
                                    "145.088%",
                                    "155.009%",
                                    "168.649%",
                                    "182.29%",
                                    "195.931%",
                                    "210.812%",
                                    "225.693%",
                                    "240.574%",
                                    "255.454%",
                                    "270.335%",
                                    "285.216%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "127.949%",
                                    "138.364%",
                                    "148.778%",
                                    "163.656%",
                                    "174.07%",
                                    "185.972%",
                                    "202.338%",
                                    "218.704%",
                                    "235.069%",
                                    "252.923%",
                                    "270.776%",
                                    "288.629%",
                                    "306.483%",
                                    "324.336%",
                                    "342.189%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Cyclic DMG",
                                "ParamLevelList": [
                                    "62.522%",
                                    "67.611%",
                                    "72.7%",
                                    "79.97%",
                                    "85.059%",
                                    "90.875%",
                                    "98.872%",
                                    "106.869%",
                                    "114.866%",
                                    "123.59%",
                                    "132.314%",
                                    "141.038%",
                                    "149.762%",
                                    "158.486%",
                                    "167.21%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Final DMG",
                                "ParamLevelList": [
                                    "113.09%",
                                    "122.295%",
                                    "131.5%",
                                    "144.65%",
                                    "153.855%",
                                    "164.375%",
                                    "178.84%",
                                    "193.305%",
                                    "207.77%",
                                    "223.55%",
                                    "239.33%",
                                    "255.11%",
                                    "270.89%",
                                    "286.67%",
                                    "302.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s"
                                ]
                            },
                            {
                                "Desc": "Max Duration",
                                "ParamLevelList": [
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "64.146%",
                                    "69.367%",
                                    "74.588%",
                                    "82.047%",
                                    "87.268%",
                                    "93.235%",
                                    "101.44%",
                                    "109.644%",
                                    "117.849%",
                                    "126.8%",
                                    "135.75%",
                                    "144.701%",
                                    "153.651%",
                                    "162.602%",
                                    "171.552%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "128.264%/160.208%",
                                    "138.704%/173.249%",
                                    "149.144%/186.289%",
                                    "164.058%/204.918%",
                                    "174.498%/217.958%",
                                    "186.43%/232.861%",
                                    "202.836%/253.353%",
                                    "219.242%/273.845%",
                                    "235.648%/294.337%",
                                    "253.545%/316.691%",
                                    "271.442%/339.046%",
                                    "289.339%/361.401%",
                                    "307.237%/383.755%",
                                    "325.134%/406.11%",
                                    "343.031%/428.465%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Pounces forward using the Wushou arts, leaping high into the air after coming into contact with a target or surface.<br>After Gaming has used Bestial Ascent to rise into the air, he will use the especially powerful Plunging Attack: Charmed Cloudstrider when performing a Plunging Attack.<br><br><color style='color:#FFD780;'>Plunging Attack: Charmed Cloudstrider</color><br>The DMG from Plunging Attacks caused by Bestial Ascent is converted to <color style='color:#FF9999;'>Pyro DMG</color> that cannot be overridden by other elemental infusions. Upon landing, Gaming will consume a fixed amount of HP. Gaming's HP cannot be reduced below 10% by this method.<br>Charmed Cloudstrider DMG is considered Plunging Attack DMG.<br><br><i>\"Auspicious beasts leap high to pluck the greens — that symbolizes good fortune and knowing how to make some serious green, y'know — so may we all rise to new heights, one step at a time!\"</i>",
                        "Icon": "Skill_S_Gaming_01",
                        "Lock": 8.0,
                        "Name": "Bestial Ascent",
                        "ParamDesc": [
                            {
                                "Desc": "Plunging Attack: Charmed Cloudstrider DMG",
                                "ParamLevelList": [
                                    "230.4%",
                                    "247.68%",
                                    "264.96%",
                                    "288.0%",
                                    "305.28%",
                                    "322.56%",
                                    "345.6%",
                                    "368.64%",
                                    "391.68%",
                                    "414.72%",
                                    "437.76%",
                                    "460.8%",
                                    "489.6%",
                                    "518.4%",
                                    "547.2%"
                                ]
                            },
                            {
                                "Desc": "HP Cost",
                                "ParamLevelList": [
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP",
                                    "15.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s",
                                    "6.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Gaming enters Wushou Stance, briefly applying <color style='color:#FF9999;'>Pyro</color> to him, recovering a fixed amount of HP, and summons his companion, the Suanni Man Chai, to smash into his target, dealing <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br>After bashing its target, Man Chai will roll to a nearby location before moving towards Gaming. When it links up with Gaming, Man Chai will leave the field and reset the CD for Gaming's Elemental Skill, Bestial Ascent.<br>While Wushou Stance is active, his resistance to interruption is increased, and when Gaming lands with Charmed Cloudstrider attack or completes the forward pounce attack from Bestial Ascent with over 50% HP, he will summon Man Chai again.<br>Each Gaming can only have 1 Man Chai on the field simultaneously.<br>This effect will be canceled once Gaming leaves the field.<br><br><i>\"The gilded Suanni spits out fortune like a fireworks show! Hey, now that's what's called prosperity, when business is really 'booming'!\"</i>",
                        "Icon": "Skill_E_Gaming_01",
                        "Lock": 15.0,
                        "Name": "Suanni's Gilded Dance",
                        "ParamDesc": [
                            {
                                "Desc": "Suanni Man Chai Smash DMG",
                                "ParamLevelList": [
                                    "370.4%",
                                    "398.18%",
                                    "425.96%",
                                    "463.0%",
                                    "490.78%",
                                    "518.56%",
                                    "555.6%",
                                    "592.64%",
                                    "629.68%",
                                    "666.72%",
                                    "703.76%",
                                    "740.8%",
                                    "787.1%",
                                    "833.4%",
                                    "879.7%"
                                ]
                            },
                            {
                                "Desc": "Skill Healing",
                                "ParamLevelList": [
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP",
                                    "30.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "Wushou Stance Duration",
                                "ParamLevelList": [
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "After <color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider hits an opponent, Gaming will regain 1.5% of his Max HP once every 0.2s for 0.8s.",
                        "Icon": "UI_Talent_S_Gaming_05",
                        "Name": "Dance of Amity"
                    },
                    {
                        "Desc": "When Gaming has less than 50% HP, he will receive a 20% Incoming Healing Bonus. When Gaming has 50% HP or more, Plunging Attack: Charmed Cloudstrider will deal 20% more DMG.",
                        "Icon": "UI_Talent_S_Gaming_06",
                        "Name": "Air of Prosperity"
                    },
                    {
                        "Desc": "Increases the Movement SPD of your own party members by 10% during the day (6:00 – 18:00).<br>Does not take effect in Domains, Trounce Domains, or Spiral Abyss. Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Dehya_07",
                        "Name": "The Striding Beast"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When the Suanni Man Chai from <color style='color:#FFD780;'>Suanni's Gilded Dance</color> meets back up with Gaming, it will heal 15% of Gaming's HP.",
                        "Icon": "UI_Talent_S_Gaming_01",
                        "Name": "Bringer of Blessing",
                        "Level": 1
                    },
                    {
                        "Desc": "When Gaming receives healing and this instance of healing overflows, his ATK will be increased by 20% for 5s.",
                        "Icon": "UI_Talent_S_Gaming_02",
                        "Name": "Plum Blossoms Underfoot",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Bestial Ascent</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Gaming_01",
                        "Name": "Awakening Spirit",
                        "Level": 3
                    },
                    {
                        "Desc": "When <color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider hits an opponent, it will restore 2 Energy to Gaming. This effect can be triggered once every 0.2s.",
                        "Icon": "UI_Talent_S_Gaming_03",
                        "Name": "Soar Across Mountains",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Suanni's Gilded Dance</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Gaming_02",
                        "Name": "Demon-Daunting Roar",
                        "Level": 5
                    },
                    {
                        "Desc": "<color style='color:#FFD780;'>Bestial Ascent</color>'s Plunging Attack: Charmed Cloudstrider CRIT Rate increased by 20% and CRIT DMG increased by 40%, and its attack radius will be increased.",
                        "Icon": "UI_Talent_S_Gaming_04",
                        "Name": "To Tame All Beasts",
                        "Level": 6
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "懸星の爪刃",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>最大4段の連続攻撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>継続的にスタミナを消費し、大剣を振り回して周囲の敵を攻撃する。<br>重撃終了時、より強力な一撃を放つ。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から落下し地面に衝撃を与える。経路上の敵を攻撃し、落下時に範囲ダメージを与える。",
                        "Icon": "Skill_A_04",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
                                "ParamLevelList": [
                                    "83.856%",
                                    "90.6815%",
                                    "97.507%",
                                    "107.2577%",
                                    "114.0832%",
                                    "121.8838%",
                                    "132.6095%",
                                    "143.3353%",
                                    "154.0611%",
                                    "165.7619%",
                                    "177.4627%",
                                    "189.1636%",
                                    "200.8644%",
                                    "212.5653%",
                                    "224.2661%"
                                ]
                            },
                            {
                                "Desc": "2段ダメージ",
                                "ParamLevelList": [
                                    "79.0443%",
                                    "85.4782%",
                                    "91.912%",
                                    "101.1032%",
                                    "107.537%",
                                    "114.89%",
                                    "125.0%",
                                    "135.1106%",
                                    "145.221%",
                                    "156.2504%",
                                    "167.2798%",
                                    "178.3093%",
                                    "189.3387%",
                                    "200.3682%",
                                    "211.3976%"
                                ]
                            },
                            {
                                "Desc": "3段ダメージ",
                                "ParamLevelList": [
                                    "106.646%",
                                    "115.3265%",
                                    "124.007%",
                                    "136.4077%",
                                    "145.0882%",
                                    "155.0088%",
                                    "168.6495%",
                                    "182.2903%",
                                    "195.9311%",
                                    "210.8119%",
                                    "225.6927%",
                                    "240.5736%",
                                    "255.4544%",
                                    "270.3353%",
                                    "285.2161%"
                                ]
                            },
                            {
                                "Desc": "4段ダメージ",
                                "ParamLevelList": [
                                    "127.9491%",
                                    "138.3635%",
                                    "148.778%",
                                    "163.6558%",
                                    "174.0703%",
                                    "185.9725%",
                                    "202.3381%",
                                    "218.7037%",
                                    "235.0692%",
                                    "252.9226%",
                                    "270.776%",
                                    "288.6293%",
                                    "306.4827%",
                                    "324.336%",
                                    "342.1894%"
                                ]
                            },
                            {
                                "Desc": "連続重撃ダメージ",
                                "ParamLevelList": [
                                    "62.522%",
                                    "67.611%",
                                    "72.7%",
                                    "79.97%",
                                    "85.059%",
                                    "90.875%",
                                    "98.872%",
                                    "106.869%",
                                    "114.866%",
                                    "123.59%",
                                    "132.314%",
                                    "141.038%",
                                    "149.762%",
                                    "158.486%",
                                    "167.21%"
                                ]
                            },
                            {
                                "Desc": "重撃終了ダメージ",
                                "ParamLevelList": [
                                    "113.09%",
                                    "122.295%",
                                    "131.5%",
                                    "144.65%",
                                    "153.855%",
                                    "164.375%",
                                    "178.84%",
                                    "193.305%",
                                    "207.77%",
                                    "223.55%",
                                    "239.33%",
                                    "255.11%",
                                    "270.89%",
                                    "286.67%",
                                    "302.45%"
                                ]
                            },
                            {
                                "Desc": "重撃スタミナ消費",
                                "ParamLevelList": [
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40"
                                ]
                            },
                            {
                                "Desc": "最大継続時間",
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
                                "Desc": "落下期間のダメージ",
                                "ParamLevelList": [
                                    "64.1457%",
                                    "69.3668%",
                                    "74.588%",
                                    "82.0468%",
                                    "87.268%",
                                    "93.235%",
                                    "101.4397%",
                                    "109.6444%",
                                    "117.849%",
                                    "126.7996%",
                                    "135.7502%",
                                    "144.7007%",
                                    "153.6513%",
                                    "162.6018%",
                                    "171.5524%"
                                ]
                            },
                            {
                                "Desc": "低空/高空落下攻撃ダメージ",
                                "ParamLevelList": [
                                    "128.2638%/160.2085%",
                                    "138.7039%/173.2488%",
                                    "149.144%/186.289%",
                                    "164.0584%/204.9179%",
                                    "174.4985%/217.9581%",
                                    "186.43%/232.8612%",
                                    "202.8358%/253.353%",
                                    "219.2417%/273.8448%",
                                    "235.6475%/294.3366%",
                                    "253.5448%/316.6913%",
                                    "271.4421%/339.046%",
                                    "289.3394%/361.4007%",
                                    "307.2366%/383.7553%",
                                    "325.1339%/406.11%",
                                    "343.0312%/428.4647%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "瑞獣登楼",
                        "Desc": "獣舞の技を使って前方に跳躍し、目標または地形に接触すると、さらに空中へと高く跳び上がる。<br>嘉明が元素スキル · 瑞獣登楼で空中に舞い上がった直後に発動した落下攻撃は、より強力な落下攻撃 · 踏雲献瑞へと変わる。<br><br><color style='color:#FFD780;'>落下攻撃 · 踏雲献瑞</color><br>元素スキル · 瑞獣登楼後の落下攻撃のダメージは元素付与によって他の元素に変化しない<color style='color:#FF9999;'>炎元素ダメージ</color>へと変わり、着地時に嘉明は一定のHPを消費する。このHP消費によって、嘉明の残りHPが10%を下回ることはない。<br>踏雲献瑞によるダメージは落下攻撃ダメージとみなされる。<br><br><i>「高く登って採青する瑞獣には、幸運が訪れるように、お金の縁に恵まれるようにって意味が込められてるんだ。みんながさらなる高みへ登りつめられますように！」</i>",
                        "Icon": "Skill_S_Gaming_01",
                        "ParamDesc": [
                            {
                                "Desc": "落下攻撃 · 踏雲献瑞ダメージ",
                                "ParamLevelList": [
                                    "230.4%",
                                    "247.68%",
                                    "264.96%",
                                    "288.0%",
                                    "305.28%",
                                    "322.56%",
                                    "345.6%",
                                    "368.64%",
                                    "391.68%",
                                    "414.72%",
                                    "437.76%",
                                    "460.8%",
                                    "489.6%",
                                    "518.4%",
                                    "547.2%"
                                ]
                            },
                            {
                                "Desc": "HP消費",
                                "ParamLevelList": [
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%",
                                    "HP上限15.0%"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
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
                            }
                        ]
                    },
                    {
                        "Name": "燦炎金猊の舞",
                        "Desc": "嘉明は獣舞の態勢に入り、短時間<color style='color:#FF9999;'>炎元素付着</color>状態となる。この時、一定のHPを回復すると共に、頼れる仲間の猊獣 · ウェンツァイを召喚して目標に投げつけ、<color style='color:#FF9999;'>炎元素範囲ダメージ</color>を与える。<br>猊獣 · ウェンツァイは目標に当たった後、付近に転がり、その後嘉明の位置に戻ってくる。嘉明と合流すると猊獣 · ウェンツァイは退場し、嘉明の元素スキル「瑞獣登楼」のクールタイムをリセットする。<br>獣舞態勢の継続期間中、嘉明の中断耐性がアップし、落下攻撃 · 踏雲献瑞が着地したとき、または瑞獣登楼の前方跳躍を行ったとき、嘉明のHPが50%を超えていた場合、猊獣 · ウェンツァイが再び召喚される。<br>フィールド上に嘉明自身が召喚した猊獣 · ウェンツァイは1体のみ存在可能。<br>効果は嘉明退場時に解除される。<br><br><i>「吉をもたらす金猊に、色とりどりの輝く夜空。ほいっと商売大繁盛——間違いなしの丸儲け！」</i>",
                        "Icon": "Skill_E_Gaming_01",
                        "ParamDesc": [
                            {
                                "Desc": "猊獣 · ウェンツァイ投げつけダメージ",
                                "ParamLevelList": [
                                    "370.4%",
                                    "398.18%",
                                    "425.96%",
                                    "463.0%",
                                    "490.78%",
                                    "518.56%",
                                    "555.6%",
                                    "592.64%",
                                    "629.68%",
                                    "666.72%",
                                    "703.76%",
                                    "740.8%",
                                    "787.1%",
                                    "833.4%",
                                    "879.7%"
                                ]
                            },
                            {
                                "Desc": "スキルによる回復量",
                                "ParamLevelList": [
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%",
                                    "HP上限30.0%"
                                ]
                            },
                            {
                                "Desc": "獣舞態勢継続時間",
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
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒"
                                ]
                            },
                            {
                                "Desc": "元素エネルギー",
                                "ParamLevelList": [
                                    "60",
                                    "60",
                                    "60",
                                    "60",
                                    "60",
                                    "60",
                                    "60",
                                    "60",
                                    "60",
                                    "60",
                                    "60",
                                    "60",
                                    "60",
                                    "60",
                                    "60"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "泰平の舞",
                        "Desc": "<color style='color:#FFD780;'>瑞獣登楼</color>の落下攻撃 · 踏雲献瑞が敵に命中した後、嘉明は0.2秒毎に1回HPを回復する。回復量は嘉明のHP上限の1.5%に相当する。継続時間0.8秒。",
                        "Icon": "UI_Talent_S_Gaming_05"
                    },
                    {
                        "Name": "祥煙の瑞気",
                        "Desc": "嘉明のHPが50%未満の時、受ける治療効果+20%。嘉明のHPが50%以上の時、落下攻撃 · 踏雲献瑞の与えるダメージ+20%。",
                        "Icon": "UI_Talent_S_Gaming_06"
                    },
                    {
                        "Name": "猛る獣の健脚",
                        "Desc": "日中（6時から18時まで）になると、チーム内にいる自身のキャラクター全員が疾走効果を獲得し、移動速度+10%。<br>この効果は秘境、征討領域、深境螺旋では発動されない。また、疾走効果は重ね掛け不可。",
                        "Icon": "UI_Talent_S_Dehya_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "瑞獣庇護",
                        "Desc": "<color style='color:#FFD780;'>燦炎金猊の舞</color>の猊獣 · ウェンツァイが嘉明と合流した時、嘉明のHPを15%回復する。",
                        "Icon": "UI_Talent_S_Gaming_01"
                    },
                    {
                        "Level": 2,
                        "Name": "梅花踏歩",
                        "Desc": "嘉明が治療効果を受けた時、それがHP上限を超える回復だった場合、嘉明の攻撃力+20%、継続時間5秒。",
                        "Icon": "UI_Talent_S_Gaming_02"
                    },
                    {
                        "Level": 3,
                        "Name": "醒霊叩震",
                        "Desc": "<color style='color:#FFD780;'>瑞獣登楼</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Gaming_01"
                    },
                    {
                        "Level": 4,
                        "Name": "雲中越山",
                        "Desc": "<color style='color:#FFD780;'>瑞獣登楼</color>の落下攻撃 · 踏雲献瑞が敵に命中した時、嘉明の元素エネルギーを2ポイント回復する。この効果は0.2秒毎に1回のみ発動可能。",
                        "Icon": "UI_Talent_S_Gaming_03"
                    },
                    {
                        "Level": 5,
                        "Name": "退魔咆哮",
                        "Desc": "<color style='color:#FFD780;'>燦炎金猊の舞</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Gaming_02"
                    },
                    {
                        "Level": 6,
                        "Name": "百獣支配",
                        "Desc": "<color style='color:#FFD780;'>瑞獣登楼</color>の落下攻撃 · 踏雲献瑞の会心率+20%、会心ダメージ+40%、攻撃範囲がアップする。",
                        "Icon": "UI_Talent_S_Gaming_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Gaming": {
        "AttackList": [
            {
                "Skill": "Charmed Cloudstrider",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.0,
                        2.0
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
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
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Range"
            },
            {
                "Skill": "Charmed Cloudstrider C6",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        6.0,
                        2.0
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
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
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Range"
            },
            {
                "Skill": "Elem Burst",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        5.0,
                        4.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Elem Burst",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 200.0,
                "ForceType": 3,
                "Force": [
                    0.0,
                    600.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Default",
                "AttackType": "Range"
            },
            {
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.0,
                        1.6
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 112.133,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.1,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.0,
                        1.6,
                        270.0
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 105.699,
                "ForceType": 2,
                "Force": [
                    400.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.09,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.0,
                        2.5,
                        3.0
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 142.608,
                "ForceType": 2,
                "Force": [
                    400.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.12,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 4",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.0,
                        2.6
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 171.095,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.12,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Charged ATK Cyclic",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.0,
                        1.5
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1,
                "Poise": 60.0,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.03,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Charged ATK Final",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.5,
                        1.5
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1,
                "Poise": 120.0,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.15,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
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
                "Poise": 35.0,
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
                "Poise": 150.0,
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
                "Poise": 200.0,
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