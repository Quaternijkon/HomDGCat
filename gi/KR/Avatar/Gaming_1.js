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
                        "Name": "별의 발톱",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>대검으로 최대 4번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>스태미나를 지속적으로 소모해 대검을 휘둘러 주변의 적을 공격한다.<br>회전 종료 시 추가로 한 번 더 강력하게 휘두른다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다",
                        "Icon": "Skill_A_04",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
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
                                "Desc": "2단 공격 피해",
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
                                "Desc": "3단 공격 피해",
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
                                "Desc": "4단 공격 피해",
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
                                "Desc": "강공격 순환 피해",
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
                                "Desc": "강공격 종결 피해",
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
                                "Desc": "강공격 스태미나 소모",
                                "ParamLevelList": [
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt"
                                ]
                            },
                            {
                                "Desc": "최대 지속 시간",
                                "ParamLevelList": [
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초"
                                ]
                            },
                            {
                                "Desc": "낙하 기간 피해",
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
                                "Desc": "저공/고공 추락 충격 피해",
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
                        "Name": "도약하는 영물",
                        "Desc": "짐승춤 기술로 전방으로 돌진하고 목표 또는 지형에 접촉하면 공중으로 높이 도약한다.<br>가명이 원소전투 스킬 · 도약하는 영물로 도약한 후, 즉시 낙하 공격을 진행하면 더 강력한 낙하 공격 · 태평 기원을 발동한다.<br><br><color style='color:#FFD780;'>낙하 공격 · 태평 기원</color><br>원소전투 스킬 · 도약하는 영물로 발동한 낙하 공격으로 주는 피해가 다른 원소 부여 효과로 대체될 수 없는 <color style='color:#FF9999;'>불 원소 피해</color>로 전환된다. 또한 착지 시 가명의 일정 HP를 소모한다. 해당 방식으로 가명의 HP는 최대 10%까지 감소한다.<br>태평 기원으로 주는 피해는 낙하 공격 피해로 간주한다.<br><br><i>「상서로운 짐승이 높이 뛰어오르는 건, 상서로운 기운과 재물운이 도착했다는 것을 상징해. 다들 더 정진하기 바랄게!」</i>",
                        "Icon": "Skill_S_Gaming_01",
                        "ParamDesc": [
                            {
                                "Desc": "낙하 공격 · 태평 기원 피해",
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
                                "Desc": "HP 소모",
                                "ParamLevelList": [
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%",
                                    "HP 최대치의 15.0%"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "찬란한 금예춤",
                        "Desc": "짐승춤 태세를 취한 가명이 잠시 <color style='color:#FF9999;'>불 원소를 부착</color>한다. 또한 일정 HP를 회복하고, 든든한 동료 산예 · 문동이를 소환해 목표를 내려찍어 <color style='color:#FF9999;'>불 원소 범위 피해</color>를 준다.<br>내려찍기를 완료한 후, 산예 · 문동이는 주변으로 굴러 떨어진 다음 가명의 위치로 이동한다. 가명과 합류에 성공하면 산예 · 문동이는 퇴장하고 가명의 원소전투 스킬 「도약하는 영물」의 재사용 대기시간이 갱신된다.<br>짐승춤 태세 지속 시간 동안 가명의 경직 저항력이 증가한다. 또한 낙하 공격 · 태평 기원으로 착지하거나 도약하는 영물의 전방 돌진 종료 시, 가명의 HP가 50%를 초과한 상태일 경우 다시 산예 · 문동이를 소환한다.<br>가명 자신의 산예 · 문동이는 필드 위에 최대 1마리만 동시에 존재할 수 있다.<br>효과는 가명이 필드를 떠나면 사라진다.<br><br><i>「금예가 상서로운 기운을 뿜어내고 불나무에 은꽃이 피네. 봐, 이건 번성과 재물운을 상징해」</i>",
                        "Icon": "Skill_E_Gaming_01",
                        "ParamDesc": [
                            {
                                "Desc": "산예 · 문동이 내려찍기 피해",
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
                                "Desc": "스킬 치유량",
                                "ParamLevelList": [
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%",
                                    "HP 최대치의 30.0%"
                                ]
                            },
                            {
                                "Desc": "짐승춤 태세 지속 시간",
                                "ParamLevelList": [
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Name": "태평의 춤",
                        "Desc": "<color style='color:#FFD780;'>도약하는 영물</color>의 낙하 공격 · 태평 기원이 적에게 명중한 후, 가명이 0.2초마다 자신의 HP 최대치의 1.5%에 해당하는 HP를 1회 회복한다. 지속 시간: 0.8초",
                        "Icon": "UI_Talent_S_Gaming_05"
                    },
                    {
                        "Name": "상서로운 연기",
                        "Desc": "가명의 HP가 50% 미만 시, 받는 치유 보너스를 20% 획득한다. 가명의 HP가 50% 이상 시, 낙하 공격 · 태평 기원으로 주는 피해가 20% 증가한다",
                        "Icon": "UI_Talent_S_Gaming_06"
                    },
                    {
                        "Name": "돌진하는 영물",
                        "Desc": "낮(6시-18시)에 파티 내 자신의 캐릭터가 속행 효과를 획득한다: 이동 속도 10% 증가<br>속행 효과는 비경, 영역 토벌, 나선 비경에서 적용되지 않는다. 또한 속행 효과는 중첩되지 않는다",
                        "Icon": "UI_Talent_S_Dehya_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "통명의 가호",
                        "Desc": "<color style='color:#FFD780;'>찬란한 금예춤</color>의 산예 · 문동이가 가명과 합류에 성공하면 가명이 HP를 15% 회복한다",
                        "Icon": "UI_Talent_S_Gaming_01"
                    },
                    {
                        "Level": 2,
                        "Name": "매화 밟기",
                        "Desc": "가명이 치유 받을 시 이번 치유 회복량이 초과된 경우, 가명의 공격력이 20% 증가한다. 지속 시간: 5초",
                        "Icon": "UI_Talent_S_Gaming_02"
                    },
                    {
                        "Level": 3,
                        "Name": "무대 울리기",
                        "Desc": "<color style='color:#FFD780;'>도약하는 영물</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Gaming_01"
                    },
                    {
                        "Level": 4,
                        "Name": "높은 공중제비",
                        "Desc": "<color style='color:#FFD780;'>도약하는 영물</color>의 낙하 공격 · 태평 기원이 적에게 명중 시, 가명이 원소 에너지를 2pt 회복한다. 해당 효과는 0.2초마다 최대 1회 발동된다",
                        "Icon": "UI_Talent_S_Gaming_03"
                    },
                    {
                        "Level": 5,
                        "Name": "퇴마의 포효",
                        "Desc": "<color style='color:#FFD780;'>찬란한 금예춤</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Gaming_02"
                    },
                    {
                        "Level": 6,
                        "Name": "조련의 달인",
                        "Desc": "<color style='color:#FFD780;'>도약하는 영물</color>의 낙하 공격 · 태평 기원의 치명타 확률이 20% 증가하고 치명타 피해가 40% 증가하며 공격 범위도 증가한다",
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