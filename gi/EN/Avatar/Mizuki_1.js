// Auto Generated

var _AvatarDataConfig_ = {
    "Mizuki": {
        "BallList": [
            {
                "When": "Any E DMG (Max 4 times)",
                "DropArray": [
                    {
                        "Num": 1,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD",
                "CD": 0.5
            }
        ],
        "EndureList": [
            {
                "Skill": "Dreamdrifter",
                "Endure": 0.6
            }
        ],
        "WindZoneList": [],
        "OtherDataList": [
            {
                "Name": "Swirl DMG Formula",
                "Desc": "[ Swirl Base * ( 1 + EM Buff + Mizuki E Buff ) + Mizuki C1 Buff ] * RES Coeff * Crit"
            },
            {
                "Name": "Q Pull",
                "Desc": "• Stronger than Kazuha press E, weaker than Kazuha hold E. She can only pull monsters and monster drops, ignoring everything else, similar to Venti."
            },
            {
                "Name": "Particle Generation",
                "Desc": "• When any E DMG hits a monster, generates @1 Anemo Particle#, max @4# times each E cast."
            },
            {
                "Name": "Intervals",
                "DescList": [
                    "• Dreamdrifter: DMG per @0.75s#, is @immune to Fall DMG# and cannot use Normal Attack.",
                    "• Mini Baku: One Snack per @1.5s#"
                ]
            },
            {
                "Name": "Elemental ICD",
                "DescList": [
                    "• Elemntal Skill: Start DMG @1U# independent, interval DMG @1U# every other hit.",
                    "• Elemental Burst: Start DMG @2U# independent, Snack DMG @1U# with default ICD (2.5s / 3 hits)."
                ]
            },
            {
                "Name": "Interruption RES",
                "Desc": "• Dreamdrifter interruption coefficient: @0.6#"
            }
        ]
    }
}

var _AvatarMats_ = {
    "Mizuki": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104151": 1,
                "101206": 3,
                "112044": 3
            },
            {
                "202": 40000,
                "104152": 3,
                "113071": 2,
                "101206": 10,
                "112044": 15
            },
            {
                "202": 60000,
                "104152": 6,
                "113071": 4,
                "101206": 20,
                "112045": 12
            },
            {
                "202": 80000,
                "104153": 3,
                "113071": 8,
                "101206": 30,
                "112045": 18
            },
            {
                "202": 100000,
                "104153": 6,
                "113071": 12,
                "101206": 45,
                "112046": 12
            },
            {
                "202": 120000,
                "104154": 6,
                "113071": 20,
                "101206": 60,
                "112046": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104320": 3,
                "112044": 6
            },
            {
                "202": 17500,
                "104321": 2,
                "112045": 3
            },
            {
                "202": 25000,
                "104321": 4,
                "112045": 4
            },
            {
                "202": 30000,
                "104321": 6,
                "112045": 6
            },
            {
                "202": 37500,
                "104321": 9,
                "112045": 9
            },
            {
                "202": 120000,
                "104322": 4,
                "112046": 4,
                "113060": 1
            },
            {
                "202": 260000,
                "104322": 6,
                "112046": 6,
                "113060": 1
            },
            {
                "202": 450000,
                "104322": 12,
                "112046": 9,
                "113060": 2
            },
            {
                "202": 700000,
                "104322": 16,
                "112046": 12,
                "113060": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104320": 3,
                "112044": 6
            },
            {
                "202": 17500,
                "104321": 2,
                "112045": 3
            },
            {
                "202": 25000,
                "104321": 4,
                "112045": 4
            },
            {
                "202": 30000,
                "104321": 6,
                "112045": 6
            },
            {
                "202": 37500,
                "104321": 9,
                "112045": 9
            },
            {
                "202": 120000,
                "104322": 4,
                "112046": 4,
                "113060": 1
            },
            {
                "202": 260000,
                "104322": 6,
                "112046": 6,
                "113060": 1
            },
            {
                "202": 450000,
                "104322": 12,
                "112046": 9,
                "113060": 2
            },
            {
                "202": 700000,
                "104322": 16,
                "112046": 12,
                "113060": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104320": 3,
                "112044": 6
            },
            {
                "202": 17500,
                "104321": 2,
                "112045": 3
            },
            {
                "202": 25000,
                "104321": 4,
                "112045": 4
            },
            {
                "202": 30000,
                "104321": 6,
                "112045": 6
            },
            {
                "202": 37500,
                "104321": 9,
                "112045": 9
            },
            {
                "202": 120000,
                "104322": 4,
                "112046": 4,
                "113060": 1
            },
            {
                "202": 260000,
                "104322": 6,
                "112046": 6,
                "113060": 1
            },
            {
                "202": 450000,
                "104322": 12,
                "112046": 9,
                "113060": 2
            },
            {
                "202": 700000,
                "104322": 16,
                "112046": 12,
                "113060": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Mizuki": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Pure Heart, Pure Dreams",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 attacks, dealing <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina and deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> after a short casting time.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Calling upon the power of Anemo, she plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> upon impact with the ground.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "52.277%",
                                    "56.198%",
                                    "60.118%",
                                    "65.346%",
                                    "69.267%",
                                    "73.188%",
                                    "78.415%",
                                    "83.643%",
                                    "88.871%",
                                    "94.098%",
                                    "99.326%",
                                    "104.554%",
                                    "111.088%",
                                    "117.623%",
                                    "124.157%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "46.914%",
                                    "50.433%",
                                    "53.952%",
                                    "58.643%",
                                    "62.162%",
                                    "65.68%",
                                    "70.372%",
                                    "75.063%",
                                    "79.755%",
                                    "84.446%",
                                    "89.137%",
                                    "93.829%",
                                    "99.693%",
                                    "105.557%",
                                    "111.422%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "71.369%",
                                    "76.722%",
                                    "82.074%",
                                    "89.211%",
                                    "94.564%",
                                    "100.0%",
                                    "107.053%",
                                    "114.19%",
                                    "121.327%",
                                    "128.464%",
                                    "135.601%",
                                    "142.738%",
                                    "151.659%",
                                    "160.58%",
                                    "169.501%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "130.0%",
                                    "139.75%",
                                    "149.5%",
                                    "162.5%",
                                    "172.25%",
                                    "182.0%",
                                    "195.0%",
                                    "208.0%",
                                    "221.0%",
                                    "234.0%",
                                    "247.0%",
                                    "260.0%",
                                    "276.25%",
                                    "292.5%",
                                    "308.75%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "56.829%",
                                    "61.454%",
                                    "66.08%",
                                    "72.688%",
                                    "77.314%",
                                    "82.6%",
                                    "89.869%",
                                    "97.138%",
                                    "104.406%",
                                    "112.336%",
                                    "120.266%",
                                    "128.195%",
                                    "136.125%",
                                    "144.054%",
                                    "151.984%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "113.634%/141.934%",
                                    "122.883%/153.487%",
                                    "132.132%/165.04%",
                                    "145.345%/181.544%",
                                    "154.594%/193.097%",
                                    "165.165%/206.3%",
                                    "179.7%/224.454%",
                                    "194.234%/242.609%",
                                    "208.769%/260.763%",
                                    "224.624%/280.568%",
                                    "240.48%/300.373%",
                                    "256.336%/320.178%",
                                    "272.192%/339.982%",
                                    "288.048%/359.787%",
                                    "303.904%/379.592%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Aisa Utamakura Pilgrimage",
                        "Desc": "Weaves memories of lovely dreams, entering a <color style='color:#FFD780;'>Dreamdrifter</color> state where she floats above ground and dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents.<br><br><color style='color:#FFD780;'>Dreamdrifter</color><br> · Yumemizuki Mizuki will deal <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents at regular intervals.<br> · Increases the Swirl DMG that nearby party members deal based on Yumemizuki Mizuki's Elemental Mastery.<br> · Dreamdrifter will end when Mizuki leaves the field or uses her Elemental Skill again.<br><br><i>\"Our dreams touch at midnight, their song ringing on in our hearts.\"</i>",
                        "Num": 1,
                        "Lock": 8.0,
                        "Icon": "Skill_S_Mizuki_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "57.744%",
                                    "62.075%",
                                    "66.406%",
                                    "72.18%",
                                    "76.511%",
                                    "80.842%",
                                    "86.616%",
                                    "92.39%",
                                    "98.165%",
                                    "103.939%",
                                    "109.714%",
                                    "115.488%",
                                    "122.706%",
                                    "129.924%",
                                    "137.142%"
                                ]
                            },
                            {
                                "Desc": "Continuous Attack DMG",
                                "ParamLevelList": [
                                    "44.912%",
                                    "48.28%",
                                    "51.649%",
                                    "56.14%",
                                    "59.508%",
                                    "62.877%",
                                    "67.368%",
                                    "71.859%",
                                    "76.35%",
                                    "80.842%",
                                    "85.333%",
                                    "89.824%",
                                    "95.438%",
                                    "101.052%",
                                    "106.666%"
                                ]
                            },
                            {
                                "Desc": "Dreamdrifter Duration",
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
                                "Desc": "Elemental Mastery-Based Swirl DMG Increase",
                                "ParamLevelList": [
                                    "0.0% per Point",
                                    "0.0% per Point",
                                    "0.1% per Point",
                                    "0.12% per Point",
                                    "0.14% per Point",
                                    "0.16% per Point",
                                    "0.18% per Point",
                                    "0.2% per Point",
                                    "0.22% per Point",
                                    "0.24% per Point",
                                    "0.26% per Point",
                                    "0.28% per Point",
                                    "0.3% per Point",
                                    "0.32% per Point",
                                    "0.34% per Point"
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
                            }
                        ]
                    },
                    {
                        "Name": "Anraku Secret Spring Therapy",
                        "Desc": "Summons forth countless lovely dreams and nightmares that pull in nearby objects and opponents, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> and summoning a junior member of her kind.<br><br><br><color style='color:#FFD780;'>Mini Baku:</color><br>Follows the current active character. At regular intervals, the Mini Baku will create 1 Yumemikaze Specialty Snack nearby. After a nearby active character picks up a Specialty Snack, if their HP is higher than 70%, the Snack will explode and unleash a Munen Shockwave, dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents. Otherwise, it will heal the one who picked it up based on Yumemizuki Mizuki's Elemental Mastery. If some time passes without a Snack being picked up, it will explode and release a Munen Shockwave, dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to surrounding opponents.<br><br><i>\"If you bury dark emotions for too long, they will become nightmares. With that in mind, why don't we turn them into 'delicious snacks' while we've got the time?\"</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Mizuki_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "94.08%",
                                    "101.136%",
                                    "108.192%",
                                    "117.6%",
                                    "124.656%",
                                    "131.712%",
                                    "141.12%",
                                    "150.528%",
                                    "159.936%",
                                    "169.344%",
                                    "178.752%",
                                    "188.16%",
                                    "200.0%",
                                    "211.68%",
                                    "223.44%"
                                ]
                            },
                            {
                                "Desc": "Munen Shockwave DMG",
                                "ParamLevelList": [
                                    "70.56%",
                                    "75.852%",
                                    "81.144%",
                                    "88.2%",
                                    "93.492%",
                                    "98.784%",
                                    "105.84%",
                                    "112.896%",
                                    "119.952%",
                                    "127.008%",
                                    "134.064%",
                                    "141.12%",
                                    "149.94%",
                                    "158.76%",
                                    "167.58%"
                                ]
                            },
                            {
                                "Desc": "Snack Pick-Up HP Regeneration",
                                "ParamLevelList": [
                                    "112.0% Elemental Mastery+269.63141",
                                    "120.4% Elemental Mastery+296.59833",
                                    "128.8% Elemental Mastery+325.81244",
                                    "140.0% Elemental Mastery+357.2738",
                                    "148.4% Elemental Mastery+390.98242",
                                    "156.8% Elemental Mastery+426.93829",
                                    "168.0% Elemental Mastery+465.14139",
                                    "179.2% Elemental Mastery+505.59171",
                                    "190.4% Elemental Mastery+548.28931",
                                    "201.6% Elemental Mastery+593.23413",
                                    "212.8% Elemental Mastery+640.42615",
                                    "224.0% Elemental Mastery+689.86548",
                                    "238.0% Elemental Mastery+741.552",
                                    "252.0% Elemental Mastery+795.48578",
                                    "266.0% Elemental Mastery+851.66681"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                        "Name": "Bright Moon's Restless Voice",
                        "Desc": "When Yumemizuki Mizuki triggers Swirl while in her Dreamdrifter state, Dreamdrifter's duration increases by 2.5s. This effect can trigger once every 1s for a maximum of 2 times per Dreamdrifter state.",
                        "Icon": "UI_Talent_S_Mizuki_05"
                    },
                    {
                        "Name": "Thoughts by Day Bring Dreams by Night",
                        "Desc": "While Yumemizuki Mizuki is in the Dreamdrifter state, when other nearby party members hit opponents with <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> attacks, her Elemental Mastery will increase by 100 for 4s.",
                        "Icon": "UI_Talent_S_Mizuki_06"
                    },
                    {
                        "Name": "All Ailments Banished",
                        "Desc": "When Yumemizuki Mizuki is in the party, party members have a chance to recover 30% additional HP when using healing foods. The trigger chance for this effect increases with the corresponding character's Friendship Level. (This effect will always trigger if the Traveler is the character consuming healing food.)",
                        "Icon": "UI_Talent_S_Mizuki_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "In Mist-Like Waters",
                        "Desc": "When Yumemizuki Mizuki is in the Dreamdrifter state, she will continuously apply the \"Twenty-Three Nights' Awaiting\" effect to 1 nearby opponent for 3s every 3.5s. When an opponent is affected by Anemo DMG-triggered Swirl reactions, this effect will be canceled and this Swirl instance has its DMG against this opponent increased by 900% of Mizuki's Elemental Mastery.",
                        "Icon": "UI_Talent_S_Mizuki_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Your Echo I Meet in Dreams",
                        "Desc": "When entering the Dreamdrifter state, every Elemental Mastery point Yumemizuki Mizuki has will increase all nearby party members' <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, and <color style='color:#FFACFF;'>Electro</color> DMG Bonuses by 0.02% until the Dreamdrifter state ends.",
                        "Icon": "UI_Talent_S_Mizuki_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Till Dawn's Moon Ends Night",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Aisa Utamakura Pilgrimage</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Mizuki_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Buds Warm Lucid Springs",
                        "Desc": "Picking up a <color style='color:#FFD780;'>Yumemikaze Specialty Snack</color> from the Elemental Burst <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> will both deal DMG and heal, and will restore 5 Energy to Yumemizuki Mizuki. Energy can be restored this way 4 times per <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> duration.",
                        "Icon": "UI_Talent_S_Mizuki_03"
                    },
                    {
                        "Level": 5,
                        "Name": "As Setting Moon Brings Year's End",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Mizuki_02"
                    },
                    {
                        "Level": 6,
                        "Name": "The Heart Lingers Long",
                        "Desc": "While Yumemizuki Mizuki is in the Dreamdrifter state, Swirl DMG dealt by nearby party members can Crit, with CRIT Rate fixed at 30%, and CRIT DMG fixed at 100%.",
                        "Icon": "UI_Talent_S_Mizuki_04"
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Pure Heart, Pure Dreams",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 attacks, dealing <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina and deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> after a short casting time.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Calling upon the power of Anemo, she plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "52.277%",
                                    "56.198%",
                                    "60.118%",
                                    "65.346%",
                                    "69.267%",
                                    "73.188%",
                                    "78.415%",
                                    "83.643%",
                                    "88.871%",
                                    "94.098%",
                                    "99.326%",
                                    "104.554%",
                                    "111.088%",
                                    "117.623%",
                                    "124.157%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "46.914%",
                                    "50.433%",
                                    "53.952%",
                                    "58.643%",
                                    "62.162%",
                                    "65.68%",
                                    "70.372%",
                                    "75.063%",
                                    "79.755%",
                                    "84.446%",
                                    "89.137%",
                                    "93.829%",
                                    "99.693%",
                                    "105.557%",
                                    "111.422%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "71.369%",
                                    "76.722%",
                                    "82.074%",
                                    "89.211%",
                                    "94.564%",
                                    "100.0%",
                                    "107.053%",
                                    "114.19%",
                                    "121.327%",
                                    "128.464%",
                                    "135.601%",
                                    "142.738%",
                                    "151.659%",
                                    "160.58%",
                                    "169.501%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "130.0%",
                                    "139.75%",
                                    "149.5%",
                                    "162.5%",
                                    "172.25%",
                                    "182.0%",
                                    "195.0%",
                                    "208.0%",
                                    "221.0%",
                                    "234.0%",
                                    "247.0%",
                                    "260.0%",
                                    "276.25%",
                                    "292.5%",
                                    "308.75%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "56.829%",
                                    "61.454%",
                                    "66.08%",
                                    "72.688%",
                                    "77.314%",
                                    "82.6%",
                                    "89.869%",
                                    "97.138%",
                                    "104.406%",
                                    "112.336%",
                                    "120.266%",
                                    "128.195%",
                                    "136.125%",
                                    "144.054%",
                                    "151.984%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "113.634%/141.934%",
                                    "122.883%/153.487%",
                                    "132.132%/165.04%",
                                    "145.345%/181.544%",
                                    "154.594%/193.097%",
                                    "165.165%/206.3%",
                                    "179.7%/224.454%",
                                    "194.234%/242.609%",
                                    "208.769%/260.763%",
                                    "224.624%/280.568%",
                                    "240.48%/300.373%",
                                    "256.336%/320.178%",
                                    "272.192%/339.982%",
                                    "288.048%/359.787%",
                                    "303.904%/379.592%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Aisa Utamakura Pilgrimage",
                        "Desc": "Weaves memories of lovely dreams, entering a <color style='color:#FFD780;'>Dreamdrifter</color> state where she floats above the ground, and dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents.<br><br><color style='color:#FFD780;'>Dreamdrifter</color><br> · While in the Dreamdrifter state, Yumemizuki Mizuki will continuously drift forward, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents at regular intervals.<br> · During this time, Yumemizuki Mizuki can control her direction of drift, and the pick-up distance of <color style='color:#FFD780;'>Yumemikaze Specialty Snacks</color> from the Elemental Burst <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> will be increased.<br> · Increases the Swirl DMG that nearby party members deal based on Yumemizuki Mizuki's Elemental Mastery.<br> · Dreamdrifter will end when Mizuki leaves the field or uses her Elemental Skill again.<br><br><i>\"Our dreams touch at midnight, their song ringing on in our hearts.\"</i>",
                        "Icon": "Skill_S_Mizuki_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "57.744%",
                                    "62.075%",
                                    "66.406%",
                                    "72.18%",
                                    "76.511%",
                                    "80.842%",
                                    "86.616%",
                                    "92.39%",
                                    "98.165%",
                                    "103.939%",
                                    "109.714%",
                                    "115.488%",
                                    "122.706%",
                                    "129.924%",
                                    "137.142%"
                                ]
                            },
                            {
                                "Desc": "Continuous Attack DMG",
                                "ParamLevelList": [
                                    "44.912%",
                                    "48.28%",
                                    "51.649%",
                                    "56.14%",
                                    "59.508%",
                                    "62.877%",
                                    "67.368%",
                                    "71.859%",
                                    "76.35%",
                                    "80.842%",
                                    "85.333%",
                                    "89.824%",
                                    "95.438%",
                                    "101.052%",
                                    "106.666%"
                                ]
                            },
                            {
                                "Desc": "Dreamdrifter Duration",
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
                                "Desc": "Elemental Mastery-Based Swirl DMG Increase",
                                "ParamLevelList": [
                                    "0.0% per Point",
                                    "0.0% per Point",
                                    "0.1% per Point",
                                    "0.12% per Point",
                                    "0.14% per Point",
                                    "0.16% per Point",
                                    "0.18% per Point",
                                    "0.2% per Point",
                                    "0.22% per Point",
                                    "0.24% per Point",
                                    "0.26% per Point",
                                    "0.28% per Point",
                                    "0.3% per Point",
                                    "0.32% per Point",
                                    "0.34% per Point"
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
                            }
                        ]
                    },
                    {
                        "Name": "Anraku Secret Spring Therapy",
                        "Desc": "Summons forth countless lovely dreams and nightmares that pull in nearby objects and opponents, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> and summoning a junior member of her kind.<br><br><color style='color:#FFD780;'>Mini Baku:</color><br>Follows the current active character. At regular intervals, the Mini Baku will create 1 Yumemikaze Specialty Snack nearby. After a nearby active character picks up a Specialty Snack, if their HP is higher than 70%, the Snack will explode and unleash a Munen Shockwave, dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents. Otherwise, it will heal the one who picked it up based on Yumemizuki Mizuki's Elemental Mastery. When Yumemizuki Mizuki triggers healing by picking up a Yumemikaze Specialty Snack, the amount of healing is increased by 100%. If some time passes without a Snack being picked up, it will explode and release a Munen Shockwave, dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to surrounding opponents.<br><br><i>\"If you bury dark emotions for too long, they will become nightmares. With that in mind, why don't we turn them into 'delicious snacks' while we've got the time?\"</i>",
                        "Icon": "Skill_E_Mizuki_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "94.08%",
                                    "101.136%",
                                    "108.192%",
                                    "117.6%",
                                    "124.656%",
                                    "131.712%",
                                    "141.12%",
                                    "150.528%",
                                    "159.936%",
                                    "169.344%",
                                    "178.752%",
                                    "188.16%",
                                    "200.0%",
                                    "211.68%",
                                    "223.44%"
                                ]
                            },
                            {
                                "Desc": "Munen Shockwave DMG",
                                "ParamLevelList": [
                                    "70.56%",
                                    "75.852%",
                                    "81.144%",
                                    "88.2%",
                                    "93.492%",
                                    "98.784%",
                                    "105.84%",
                                    "112.896%",
                                    "119.952%",
                                    "127.008%",
                                    "134.064%",
                                    "141.12%",
                                    "149.94%",
                                    "158.76%",
                                    "167.58%"
                                ]
                            },
                            {
                                "Desc": "Snack Pick-Up HP Regeneration",
                                "ParamLevelList": [
                                    "112.0% Elemental Mastery+269.63141",
                                    "120.4% Elemental Mastery+296.59833",
                                    "128.8% Elemental Mastery+325.81244",
                                    "140.0% Elemental Mastery+357.2738",
                                    "148.4% Elemental Mastery+390.98242",
                                    "156.8% Elemental Mastery+426.93829",
                                    "168.0% Elemental Mastery+465.14139",
                                    "179.2% Elemental Mastery+505.59171",
                                    "190.4% Elemental Mastery+548.28931",
                                    "201.6% Elemental Mastery+593.23413",
                                    "212.8% Elemental Mastery+640.42615",
                                    "224.0% Elemental Mastery+689.86548",
                                    "238.0% Elemental Mastery+741.552",
                                    "252.0% Elemental Mastery+795.48578",
                                    "266.0% Elemental Mastery+851.66681"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                        "Name": "Bright Moon's Restless Voice",
                        "Desc": "When Yumemizuki Mizuki triggers Swirl while in her Dreamdrifter state, Dreamdrifter's duration increases by 2.5s. This effect can trigger once every 1s for a maximum of 2 times per Dreamdrifter state.",
                        "Icon": "UI_Talent_S_Mizuki_05"
                    },
                    {
                        "Name": "Thoughts by Day Bring Dreams by Night",
                        "Desc": "While Yumemizuki Mizuki is in the Dreamdrifter state, when other nearby party members hit opponents with <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> attacks, her Elemental Mastery will increase by 100 for 4s.",
                        "Icon": "UI_Talent_S_Mizuki_06"
                    },
                    {
                        "Name": "All Ailments Banished",
                        "Desc": "When Yumemizuki Mizuki is in the party, party members have a chance to recover 30% additional HP when using healing foods. The trigger chance for this effect increases with the corresponding character's Friendship Level. (This effect will always trigger if the Traveler is the character consuming healing food.)",
                        "Icon": "UI_Talent_S_Mizuki_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "In Mist-Like Waters",
                        "Desc": "When Yumemizuki Mizuki is in the Dreamdrifter state, she will continuously apply the \"Twenty-Three Nights' Awaiting\" effect to nearby opponents for 3s every 3.5s. When an opponent is affected by Anemo DMG-triggered Swirl reactions, this effect will be canceled and this Swirl instance has its DMG against this opponent increased by 900% of Mizuki's Elemental Mastery.",
                        "Icon": "UI_Talent_S_Mizuki_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Your Echo I Meet in Dreams",
                        "Desc": "When entering the Dreamdrifter state, every Elemental Mastery point Yumemizuki Mizuki has will increase all nearby party members' <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, and <color style='color:#FFACFF;'>Electro</color> DMG Bonuses by 0.02% until the Dreamdrifter state ends.",
                        "Icon": "UI_Talent_S_Mizuki_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Till Dawn's Moon Ends Night",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Aisa Utamakura Pilgrimage</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Mizuki_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Buds Warm Lucid Springs",
                        "Desc": "Picking up a <color style='color:#FFD780;'>Yumemikaze Specialty Snack</color> from the Elemental Burst <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> will both deal DMG and heal, and will restore 5 Energy to Yumemizuki Mizuki. Energy can be restored this way 4 times per <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> duration.",
                        "Icon": "UI_Talent_S_Mizuki_03"
                    },
                    {
                        "Level": 5,
                        "Name": "As Setting Moon Brings Year's End",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Mizuki_02"
                    },
                    {
                        "Level": 6,
                        "Name": "The Heart Lingers Long",
                        "Desc": "While Yumemizuki Mizuki is in the Dreamdrifter state, Swirl DMG dealt by nearby party members can Crit, with CRIT Rate fixed at 30%, and CRIT DMG fixed at 100%.",
                        "Icon": "UI_Talent_S_Mizuki_04"
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Pure Heart, Pure Dreams",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 attacks, dealing <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina and deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> after a short casting time.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Calling upon the power of Anemo, she plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "52.277%",
                                    "56.198%",
                                    "60.118%",
                                    "65.346%",
                                    "69.267%",
                                    "73.188%",
                                    "78.415%",
                                    "83.643%",
                                    "88.871%",
                                    "94.098%",
                                    "99.326%",
                                    "104.554%",
                                    "111.088%",
                                    "117.623%",
                                    "124.157%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "46.914%",
                                    "50.433%",
                                    "53.952%",
                                    "58.643%",
                                    "62.162%",
                                    "65.68%",
                                    "70.372%",
                                    "75.063%",
                                    "79.755%",
                                    "84.446%",
                                    "89.137%",
                                    "93.829%",
                                    "99.693%",
                                    "105.557%",
                                    "111.422%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "71.369%",
                                    "76.722%",
                                    "82.074%",
                                    "89.211%",
                                    "94.564%",
                                    "100.0%",
                                    "107.053%",
                                    "114.19%",
                                    "121.327%",
                                    "128.464%",
                                    "135.601%",
                                    "142.738%",
                                    "151.659%",
                                    "160.58%",
                                    "169.501%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "130.0%",
                                    "139.75%",
                                    "149.5%",
                                    "162.5%",
                                    "172.25%",
                                    "182.0%",
                                    "195.0%",
                                    "208.0%",
                                    "221.0%",
                                    "234.0%",
                                    "247.0%",
                                    "260.0%",
                                    "276.25%",
                                    "292.5%",
                                    "308.75%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "56.829%",
                                    "61.454%",
                                    "66.08%",
                                    "72.688%",
                                    "77.314%",
                                    "82.6%",
                                    "89.869%",
                                    "97.138%",
                                    "104.406%",
                                    "112.336%",
                                    "120.266%",
                                    "128.195%",
                                    "136.125%",
                                    "144.054%",
                                    "151.984%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "113.634%/141.934%",
                                    "122.883%/153.487%",
                                    "132.132%/165.04%",
                                    "145.345%/181.544%",
                                    "154.594%/193.097%",
                                    "165.165%/206.3%",
                                    "179.7%/224.454%",
                                    "194.234%/242.609%",
                                    "208.769%/260.763%",
                                    "224.624%/280.568%",
                                    "240.48%/300.373%",
                                    "256.336%/320.178%",
                                    "272.192%/339.982%",
                                    "288.048%/359.787%",
                                    "303.904%/379.592%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Aisa Utamakura Pilgrimage",
                        "Desc": "Weaves memories of lovely dreams, entering a <color style='color:#FFD780;'>Dreamdrifter</color> state where she floats above the ground, and dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents.<br><br><color style='color:#FFD780;'>Dreamdrifter</color><br> · While in the Dreamdrifter state, Yumemizuki Mizuki will continuously drift forward, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents at regular intervals.<br> · During this time, Yumemizuki Mizuki can control her direction of drift, and the pick-up distance of <color style='color:#FFD780;'>Yumemi Style Special Snacks</color> from the Elemental Burst <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> will be increased.<br> · Increases the Swirl DMG that nearby party members deal based on Yumemizuki Mizuki's Elemental Mastery.<br> · Dreamdrifter will end when Mizuki leaves the field or uses her Elemental Skill again.<br><br><i>\"Our dreams touch at midnight, their song ringing on in our hearts.\"</i>",
                        "Icon": "Skill_S_Mizuki_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "57.744%",
                                    "62.075%",
                                    "66.406%",
                                    "72.18%",
                                    "76.511%",
                                    "80.842%",
                                    "86.616%",
                                    "92.39%",
                                    "98.165%",
                                    "103.939%",
                                    "109.714%",
                                    "115.488%",
                                    "122.706%",
                                    "129.924%",
                                    "137.142%"
                                ]
                            },
                            {
                                "Desc": "Continuous Attack DMG",
                                "ParamLevelList": [
                                    "44.912%",
                                    "48.28%",
                                    "51.649%",
                                    "56.14%",
                                    "59.508%",
                                    "62.877%",
                                    "67.368%",
                                    "71.859%",
                                    "76.35%",
                                    "80.842%",
                                    "85.333%",
                                    "89.824%",
                                    "95.438%",
                                    "101.052%",
                                    "106.666%"
                                ]
                            },
                            {
                                "Desc": "Dreamdrifter Duration",
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
                                "Desc": "Elemental Mastery-Based Swirl DMG Increase",
                                "ParamLevelList": [
                                    "0.0% per Point",
                                    "0.0% per Point",
                                    "0.1% per Point",
                                    "0.12% per Point",
                                    "0.14% per Point",
                                    "0.16% per Point",
                                    "0.18% per Point",
                                    "0.2% per Point",
                                    "0.22% per Point",
                                    "0.24% per Point",
                                    "0.26% per Point",
                                    "0.28% per Point",
                                    "0.3% per Point",
                                    "0.32% per Point",
                                    "0.34% per Point"
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
                            }
                        ]
                    },
                    {
                        "Name": "Anraku Secret Spring Therapy",
                        "Desc": "Summons forth countless lovely dreams and nightmares that pull in nearby objects and opponents, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> and summoning a junior member of her kind.<br><br><color style='color:#FFD780;'>Mini Baku:</color><br>Follows the current active character. At regular intervals, the Mini Baku will create 1 Yumemi Style Special Snack nearby. After a nearby active character picks up a Special Snack, if their HP is higher than 70%, the Snack will explode and unleash a Munen Shockwave, dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents. Otherwise, it will heal the one who picked it up based on Yumemizuki Mizuki's Elemental Mastery. When Yumemizuki Mizuki triggers healing by picking up a Yumemi Style Special Snack, the amount of healing is increased by 100%. If some time passes without a Snack being picked up, it will explode and release a Munen Shockwave, dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to surrounding opponents.<br><br><i>\"If you bury dark emotions for too long, they will become nightmares. With that in mind, why don't we turn them into 'delicious snacks' while we've got the time?\"</i>",
                        "Icon": "Skill_E_Mizuki_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "94.08%",
                                    "101.136%",
                                    "108.192%",
                                    "117.6%",
                                    "124.656%",
                                    "131.712%",
                                    "141.12%",
                                    "150.528%",
                                    "159.936%",
                                    "169.344%",
                                    "178.752%",
                                    "188.16%",
                                    "200.0%",
                                    "211.68%",
                                    "223.44%"
                                ]
                            },
                            {
                                "Desc": "Munen Shockwave DMG",
                                "ParamLevelList": [
                                    "70.56%",
                                    "75.852%",
                                    "81.144%",
                                    "88.2%",
                                    "93.492%",
                                    "98.784%",
                                    "105.84%",
                                    "112.896%",
                                    "119.952%",
                                    "127.008%",
                                    "134.064%",
                                    "141.12%",
                                    "149.94%",
                                    "158.76%",
                                    "167.58%"
                                ]
                            },
                            {
                                "Desc": "Snack Pick-Up HP Regeneration",
                                "ParamLevelList": [
                                    "130.56% Elemental Mastery+314.57",
                                    "140.352% Elemental Mastery+346.03137",
                                    "150.144% Elemental Mastery+380.11453",
                                    "163.2% Elemental Mastery+416.81946",
                                    "172.992% Elemental Mastery+456.14618",
                                    "182.784% Elemental Mastery+498.09467",
                                    "195.84% Elemental Mastery+542.66492",
                                    "208.896% Elemental Mastery+589.85699",
                                    "221.952% Elemental Mastery+639.67084",
                                    "235.008% Elemental Mastery+692.10645",
                                    "248.064% Elemental Mastery+747.16388",
                                    "261.12% Elemental Mastery+804.84302",
                                    "277.44% Elemental Mastery+865.14398",
                                    "293.76% Elemental Mastery+928.06677",
                                    "310.08% Elemental Mastery+993.61127"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                        "Name": "Bright Moon's Restless Voice",
                        "Desc": "When Yumemizuki Mizuki triggers Swirl while in her Dreamdrifter state, Dreamdrifter's duration increases by 2.5s. This effect can trigger once every 0.3s for a maximum of 2 times per Dreamdrifter state.",
                        "Icon": "UI_Talent_S_Mizuki_05"
                    },
                    {
                        "Name": "Thoughts by Day Bring Dreams by Night",
                        "Desc": "While Yumemizuki Mizuki is in the Dreamdrifter state, when other nearby party members hit opponents with <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> attacks, her Elemental Mastery will increase by 100 for 4s.",
                        "Icon": "UI_Talent_S_Mizuki_06"
                    },
                    {
                        "Name": "All Ailments Banished",
                        "Desc": "When Yumemizuki Mizuki is in the party, party members have a chance to recover 30% additional HP when using healing foods. The trigger chance for this effect increases with the corresponding character's Friendship Level. (This effect will always trigger if the Traveler is the character consuming healing food.)",
                        "Icon": "UI_Talent_S_Mizuki_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "In Mist-Like Waters",
                        "Desc": "When Yumemizuki Mizuki is in the Dreamdrifter state, she will continuously apply the \"Twenty-Three Nights' Awaiting\" effect to nearby opponents for 3s every 3.5s. When an opponent is affected by Anemo DMG-triggered Swirl reactions while the aforementioned effect is active, the effect will be canceled and this Swirl instance has its DMG against this opponent increased by 900% of Mizuki's Elemental Mastery.",
                        "Icon": "UI_Talent_S_Mizuki_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Your Echo I Meet in Dreams",
                        "Desc": "When entering the Dreamdrifter state, every Elemental Mastery point Yumemizuki Mizuki has will increase all nearby party members' <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, and <color style='color:#FFACFF;'>Electro</color> DMG Bonuses by 0.02% until the Dreamdrifter state ends.",
                        "Icon": "UI_Talent_S_Mizuki_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Till Dawn's Moon Ends Night",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Aisa Utamakura Pilgrimage</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Mizuki_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Buds Warm Lucid Springs",
                        "Desc": "Picking up a <color style='color:#FFD780;'>Yumemi Style Special Snack</color> from the Elemental Burst <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> will both deal DMG and heal, and will restore 5 Energy to Yumemizuki Mizuki. Energy can be restored this way 4 times per <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> duration.",
                        "Icon": "UI_Talent_S_Mizuki_03"
                    },
                    {
                        "Level": 5,
                        "Name": "As Setting Moon Brings Year's End",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Mizuki_02"
                    },
                    {
                        "Level": 6,
                        "Name": "The Heart Lingers Long",
                        "Desc": "While Yumemizuki Mizuki is in the Dreamdrifter state, Swirl DMG dealt by nearby party members can Crit, with CRIT Rate fixed at 30%, and CRIT DMG fixed at 100%.",
                        "Icon": "UI_Talent_S_Mizuki_04"
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Pure Heart, Pure Dreams",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 attacks, dealing <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina and deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> after a short casting time.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Calling upon the power of Anemo, she plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "52.277%",
                                    "56.198%",
                                    "60.118%",
                                    "65.346%",
                                    "69.267%",
                                    "73.188%",
                                    "78.415%",
                                    "83.643%",
                                    "88.871%",
                                    "94.098%",
                                    "99.326%",
                                    "104.554%",
                                    "111.088%",
                                    "117.623%",
                                    "124.157%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "46.914%",
                                    "50.433%",
                                    "53.952%",
                                    "58.643%",
                                    "62.162%",
                                    "65.68%",
                                    "70.372%",
                                    "75.063%",
                                    "79.755%",
                                    "84.446%",
                                    "89.137%",
                                    "93.829%",
                                    "99.693%",
                                    "105.557%",
                                    "111.422%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "71.369%",
                                    "76.722%",
                                    "82.074%",
                                    "89.211%",
                                    "94.564%",
                                    "100.0%",
                                    "107.053%",
                                    "114.19%",
                                    "121.327%",
                                    "128.464%",
                                    "135.601%",
                                    "142.738%",
                                    "151.659%",
                                    "160.58%",
                                    "169.501%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "130.0%",
                                    "139.75%",
                                    "149.5%",
                                    "162.5%",
                                    "172.25%",
                                    "182.0%",
                                    "195.0%",
                                    "208.0%",
                                    "221.0%",
                                    "234.0%",
                                    "247.0%",
                                    "260.0%",
                                    "276.25%",
                                    "292.5%",
                                    "308.75%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "56.829%",
                                    "61.454%",
                                    "66.08%",
                                    "72.688%",
                                    "77.314%",
                                    "82.6%",
                                    "89.869%",
                                    "97.138%",
                                    "104.406%",
                                    "112.336%",
                                    "120.266%",
                                    "128.195%",
                                    "136.125%",
                                    "144.054%",
                                    "151.984%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "113.634%/141.934%",
                                    "122.883%/153.487%",
                                    "132.132%/165.04%",
                                    "145.345%/181.544%",
                                    "154.594%/193.097%",
                                    "165.165%/206.3%",
                                    "179.7%/224.454%",
                                    "194.234%/242.609%",
                                    "208.769%/260.763%",
                                    "224.624%/280.568%",
                                    "240.48%/300.373%",
                                    "256.336%/320.178%",
                                    "272.192%/339.982%",
                                    "288.048%/359.787%",
                                    "303.904%/379.592%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Aisa Utamakura Pilgrimage",
                        "Desc": "Weaves memories of lovely dreams, entering a <color style='color:#FFD780;'>Dreamdrifter</color> state where she floats above the ground, and dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents.<br><br><color style='color:#FFD780;'>Dreamdrifter</color><br> · While in the Dreamdrifter state, Yumemizuki Mizuki will continuously drift forward, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents at regular intervals.<br> · During this time, Yumemizuki Mizuki can control her direction of drift, and the pick-up distance of <color style='color:#FFD780;'>Yumemi Style Special Snacks</color> from the Elemental Burst <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> will be increased.<br> · Increases the Swirl DMG that nearby party members deal based on Yumemizuki Mizuki's Elemental Mastery.<br> · Dreamdrifter will end when Mizuki leaves the field or uses her Elemental Skill again.<br><br><i>\"Our dreams touch at midnight, their song ringing on in our hearts.\"</i>",
                        "Icon": "Skill_S_Mizuki_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "57.744%",
                                    "62.075%",
                                    "66.406%",
                                    "72.18%",
                                    "76.511%",
                                    "80.842%",
                                    "86.616%",
                                    "92.39%",
                                    "98.165%",
                                    "103.939%",
                                    "109.714%",
                                    "115.488%",
                                    "122.706%",
                                    "129.924%",
                                    "137.142%"
                                ]
                            },
                            {
                                "Desc": "Continuous Attack DMG",
                                "ParamLevelList": [
                                    "44.912%",
                                    "48.28%",
                                    "51.649%",
                                    "56.14%",
                                    "59.508%",
                                    "62.877%",
                                    "67.368%",
                                    "71.859%",
                                    "76.35%",
                                    "80.842%",
                                    "85.333%",
                                    "89.824%",
                                    "95.438%",
                                    "101.052%",
                                    "106.666%"
                                ]
                            },
                            {
                                "Desc": "Dreamdrifter Duration",
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
                                "Desc": "Elemental Mastery-Based Swirl DMG Increase",
                                "ParamLevelList": [
                                    "0.18% per Point",
                                    "0.21% per Point",
                                    "0.24% per Point",
                                    "0.27% per Point",
                                    "0.3% per Point",
                                    "0.33% per Point",
                                    "0.36% per Point",
                                    "0.39% per Point",
                                    "0.42% per Point",
                                    "0.45% per Point",
                                    "0.48% per Point",
                                    "0.51% per Point",
                                    "0.54% per Point",
                                    "0.57% per Point",
                                    "0.6% per Point"
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
                            }
                        ]
                    },
                    {
                        "Name": "Anraku Secret Spring Therapy",
                        "Desc": "Summons forth countless lovely dreams and nightmares that pull in nearby objects and opponents, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> and summoning a Mini Baku.<br><br><color style='color:#FFD780;'>Mini Baku:</color><br>Follows the current active character. At regular intervals, the Mini Baku will create 1 Yumemi Style Special Snack nearby. After a nearby active character picks up a Special Snack, if their HP is higher than 70%, the Snack will explode and unleash a Munen Shockwave, dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents. Otherwise, it will heal the one who picked it up based on Yumemizuki Mizuki's Elemental Mastery. When Yumemizuki Mizuki triggers healing by picking up a Yumemi Style Special Snack, the amount of healing is increased by 100%. If some time passes without a Snack being picked up, it will explode and release a Munen Shockwave, dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to surrounding opponents.<br><br><i>\"If you bury dark emotions for too long, they will become nightmares. With that in mind, why don't we turn them into 'delicious snacks' while we've got the time?\"</i>",
                        "Icon": "Skill_E_Mizuki_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "94.08%",
                                    "101.136%",
                                    "108.192%",
                                    "117.6%",
                                    "124.656%",
                                    "131.712%",
                                    "141.12%",
                                    "150.528%",
                                    "159.936%",
                                    "169.344%",
                                    "178.752%",
                                    "188.16%",
                                    "200.0%",
                                    "211.68%",
                                    "223.44%"
                                ]
                            },
                            {
                                "Desc": "Munen Shockwave DMG",
                                "ParamLevelList": [
                                    "70.56%",
                                    "75.852%",
                                    "81.144%",
                                    "88.2%",
                                    "93.492%",
                                    "98.784%",
                                    "105.84%",
                                    "112.896%",
                                    "119.952%",
                                    "127.008%",
                                    "134.064%",
                                    "141.12%",
                                    "149.94%",
                                    "158.76%",
                                    "167.58%"
                                ]
                            },
                            {
                                "Desc": "Snack Pick-Up HP Regeneration",
                                "ParamLevelList": [
                                    "130.56% Elemental Mastery+314.57",
                                    "140.352% Elemental Mastery+346.03137",
                                    "150.144% Elemental Mastery+380.11453",
                                    "163.2% Elemental Mastery+416.81946",
                                    "172.992% Elemental Mastery+456.14618",
                                    "182.784% Elemental Mastery+498.09467",
                                    "195.84% Elemental Mastery+542.66492",
                                    "208.896% Elemental Mastery+589.85699",
                                    "221.952% Elemental Mastery+639.67084",
                                    "235.008% Elemental Mastery+692.10645",
                                    "248.064% Elemental Mastery+747.16388",
                                    "261.12% Elemental Mastery+804.84302",
                                    "277.44% Elemental Mastery+865.14398",
                                    "293.76% Elemental Mastery+928.06677",
                                    "310.08% Elemental Mastery+993.61127"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                        "Name": "Bright Moon's Restless Voice",
                        "Desc": "When Yumemizuki Mizuki triggers Swirl while in her Dreamdrifter state, Dreamdrifter's duration increases by 2.5s. This effect can trigger once every 0.3s for a maximum of 2 times per Dreamdrifter state.",
                        "Icon": "UI_Talent_S_Mizuki_05"
                    },
                    {
                        "Name": "Thoughts by Day Bring Dreams by Night",
                        "Desc": "While Yumemizuki Mizuki is in the Dreamdrifter state, when other nearby party members hit opponents with <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> attacks, her Elemental Mastery will increase by 100 for 4s.",
                        "Icon": "UI_Talent_S_Mizuki_06"
                    },
                    {
                        "Name": "All Ailments Banished",
                        "Desc": "When Yumemizuki Mizuki is in the party, party members have a chance to recover 30% additional HP when using healing foods that do not have reviving properties. The trigger chance for this effect increases with the corresponding character's Friendship Level. (This effect will always trigger if the Traveler is the character consuming healing food.)",
                        "Icon": "UI_Talent_S_Mizuki_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "In Mist-Like Waters",
                        "Desc": "When Yumemizuki Mizuki is in the Dreamdrifter state, she will continuously apply the \"Twenty-Three Nights' Awaiting\" effect to nearby opponents for 3s every 3.5s. When an opponent is affected by Anemo DMG-triggered Swirl reactions while the aforementioned effect is active, the effect will be canceled and this Swirl instance has its DMG against this opponent increased by 900% of Mizuki's Elemental Mastery.",
                        "Icon": "UI_Talent_S_Mizuki_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Your Echo I Meet in Dreams",
                        "Desc": "When entering the Dreamdrifter state, every Elemental Mastery point Yumemizuki Mizuki has will increase all nearby party members' <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, and <color style='color:#FFACFF;'>Electro</color> DMG Bonuses by 0.04% until the Dreamdrifter state ends.",
                        "Icon": "UI_Talent_S_Mizuki_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Till Dawn's Moon Ends Night",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Aisa Utamakura Pilgrimage</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Mizuki_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Buds Warm Lucid Springs",
                        "Desc": "Picking up a <color style='color:#FFD780;'>Yumemi Style Special Snack</color> from the Elemental Burst <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> will both deal DMG and heal, and will restore 5 Energy to Yumemizuki Mizuki. Energy can be restored this way 4 times per <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> duration.",
                        "Icon": "UI_Talent_S_Mizuki_03"
                    },
                    {
                        "Level": 5,
                        "Name": "As Setting Moon Brings Year's End",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Mizuki_02"
                    },
                    {
                        "Level": 6,
                        "Name": "The Heart Lingers Long",
                        "Desc": "While Yumemizuki Mizuki is in the Dreamdrifter state, Swirl DMG dealt by nearby party members can Crit, with CRIT Rate fixed at 30%, and CRIT DMG fixed at 100%.",
                        "Icon": "UI_Talent_S_Mizuki_04"
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Pure Heart, Pure Dreams",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 attacks, dealing <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina and deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> after a short casting time.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Calling upon the power of Anemo, she plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "52.2768%",
                                    "56.1976%",
                                    "60.1183%",
                                    "65.346%",
                                    "69.2668%",
                                    "73.1875%",
                                    "78.4152%",
                                    "83.6429%",
                                    "88.8706%",
                                    "94.0982%",
                                    "99.3259%",
                                    "104.5536%",
                                    "111.0882%",
                                    "117.6228%",
                                    "124.1574%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "46.9144%",
                                    "50.433%",
                                    "53.9516%",
                                    "58.643%",
                                    "62.1616%",
                                    "65.6802%",
                                    "70.3716%",
                                    "75.063%",
                                    "79.7545%",
                                    "84.4459%",
                                    "89.1374%",
                                    "93.8288%",
                                    "99.6931%",
                                    "105.5574%",
                                    "111.4217%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "71.3688%",
                                    "76.7215%",
                                    "82.0741%",
                                    "89.211%",
                                    "94.5637%",
                                    "99.9163%",
                                    "107.0532%",
                                    "114.1901%",
                                    "121.327%",
                                    "128.4638%",
                                    "135.6007%",
                                    "142.7376%",
                                    "151.6587%",
                                    "160.5798%",
                                    "169.5009%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "130.0%",
                                    "139.75%",
                                    "149.5%",
                                    "162.5%",
                                    "172.25%",
                                    "182.0%",
                                    "195.0%",
                                    "208.0%",
                                    "221.0%",
                                    "234.0%",
                                    "247.0%",
                                    "260.0%",
                                    "276.25%",
                                    "292.5%",
                                    "308.75%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50"
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
                        "Name": "Aisa Utamakura Pilgrimage",
                        "Desc": "Weaves memories of lovely dreams, entering a <color style='color:#FFD780;'>Dreamdrifter</color> state where Yumemizuki Mizuki floats above the ground, and dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents.<br><br><color style='color:#FFD780;'>Dreamdrifter</color><br> · While in the Dreamdrifter state, Yumemizuki Mizuki will continuously drift forward, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents at regular intervals.<br> · During this time, Yumemizuki Mizuki can control her direction of drift, and the pick-up distance of <color style='color:#FFD780;'>Yumemi Style Special Snacks</color> from the Elemental Burst <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> will be increased.<br> · Increases the Swirl DMG that nearby party members deal based on Yumemizuki Mizuki's Elemental Mastery.<br> · Dreamdrifter will end when Mizuki leaves the field or uses her Elemental Skill again.<br><br><i>\"Our dreams touch at midnight, their song ringing on in our hearts.\"</i>",
                        "Icon": "Skill_S_Mizuki_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "57.744%",
                                    "62.0748%",
                                    "66.4056%",
                                    "72.18%",
                                    "76.5108%",
                                    "80.8416%",
                                    "86.616%",
                                    "92.3904%",
                                    "98.1648%",
                                    "103.9392%",
                                    "109.7136%",
                                    "115.488%",
                                    "122.706%",
                                    "129.924%",
                                    "137.142%"
                                ]
                            },
                            {
                                "Desc": "Continuous Attack DMG",
                                "ParamLevelList": [
                                    "44.912%",
                                    "48.2804%",
                                    "51.6488%",
                                    "56.14%",
                                    "59.5084%",
                                    "62.8768%",
                                    "67.368%",
                                    "71.8592%",
                                    "76.3504%",
                                    "80.8416%",
                                    "85.3328%",
                                    "89.824%",
                                    "95.438%",
                                    "101.052%",
                                    "106.666%"
                                ]
                            },
                            {
                                "Desc": "Dreamdrifter Duration",
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
                                "Desc": "Elemental Mastery-Based Swirl DMG Increase",
                                "ParamLevelList": [
                                    "0.18% per Point",
                                    "0.21% per Point",
                                    "0.24% per Point",
                                    "0.27% per Point",
                                    "0.3% per Point",
                                    "0.33% per Point",
                                    "0.36% per Point",
                                    "0.39% per Point",
                                    "0.42% per Point",
                                    "0.45% per Point",
                                    "0.48% per Point",
                                    "0.51% per Point",
                                    "0.54% per Point",
                                    "0.57% per Point",
                                    "0.6% per Point"
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
                        "Name": "Anraku Secret Spring Therapy",
                        "Desc": "Summons forth countless lovely dreams and nightmares that pull in nearby objects and opponents, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> and summoning a Mini Baku.<br><br><color style='color:#FFD780;'>Mini Baku:</color><br>Follows the current active character. At regular intervals, the Mini Baku will create 1 Yumemi Style Special Snack nearby. After one of your own party members picks up a Special Snack, if their HP is higher than 70%, the Snack will explode and unleash a Munen Shockwave, dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to nearby opponents. Otherwise, it will heal the character who picked it up based on Yumemizuki Mizuki's Elemental Mastery. When Yumemizuki Mizuki triggers healing by picking up a Yumemi Style Special Snack, the amount of healing is increased by 100%. If a Snack is not picked up after a period of time, it will explode and release a Munen Shockwave, dealing 1 instance of <color style='color:#80FFD7;'>AoE Anemo DMG</color> to surrounding opponents.<br><br><i>\"If you bury dark emotions for too long, they will become nightmares. With that in mind, why don't we turn them into 'delicious snacks' while we've got the time?\"</i>",
                        "Icon": "Skill_E_Mizuki_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "94.08%",
                                    "101.136%",
                                    "108.192%",
                                    "117.6%",
                                    "124.656%",
                                    "131.712%",
                                    "141.12%",
                                    "150.528%",
                                    "159.936%",
                                    "169.344%",
                                    "178.752%",
                                    "188.16%",
                                    "199.92%",
                                    "211.68%",
                                    "223.44%"
                                ]
                            },
                            {
                                "Desc": "Munen Shockwave DMG",
                                "ParamLevelList": [
                                    "70.56%",
                                    "75.852%",
                                    "81.144%",
                                    "88.2%",
                                    "93.492%",
                                    "98.784%",
                                    "105.84%",
                                    "112.896%",
                                    "119.952%",
                                    "127.008%",
                                    "134.064%",
                                    "141.12%",
                                    "149.94%",
                                    "158.76%",
                                    "167.58%"
                                ]
                            },
                            {
                                "Desc": "Snack Pick-Up HP Regeneration",
                                "ParamLevelList": [
                                    "130.56% Elemental Mastery+314.57",
                                    "140.352% Elemental Mastery+346.03137",
                                    "150.144% Elemental Mastery+380.11453",
                                    "163.2% Elemental Mastery+416.81946",
                                    "172.992% Elemental Mastery+456.14618",
                                    "182.784% Elemental Mastery+498.09467",
                                    "195.84% Elemental Mastery+542.6649",
                                    "208.896% Elemental Mastery+589.857",
                                    "221.952% Elemental Mastery+639.67084",
                                    "235.008% Elemental Mastery+692.10645",
                                    "248.064% Elemental Mastery+747.1639",
                                    "261.12% Elemental Mastery+804.843",
                                    "277.44% Elemental Mastery+865.144",
                                    "293.76% Elemental Mastery+928.0668",
                                    "310.08% Elemental Mastery+993.61127"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                            },
                            {
                                "Desc": "Energy Cost",
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
                        "Name": "Bright Moon's Restless Voice",
                        "Desc": "When Yumemizuki Mizuki triggers Swirl while in her Dreamdrifter state, Dreamdrifter's duration increases by 2.5s. This effect can trigger once every 0.3s for a maximum of 2 times per Dreamdrifter state.",
                        "Icon": "UI_Talent_S_Mizuki_05"
                    },
                    {
                        "Name": "Thoughts by Day Bring Dreams by Night",
                        "Desc": "While Yumemizuki Mizuki is in the Dreamdrifter state, when other nearby party members hit opponents with <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> attacks, her Elemental Mastery will increase by 100 for 4s.",
                        "Icon": "UI_Talent_S_Mizuki_06"
                    },
                    {
                        "Name": "All Ailments Banished",
                        "Desc": "When Yumemizuki Mizuki is in the party, party members have a chance to recover 30% additional HP when using healing foods that do not have reviving properties. The trigger chance for this effect increases with the corresponding character's Friendship Level. (This effect will always trigger if the Traveler is the character consuming healing food.)",
                        "Icon": "UI_Talent_S_Mizuki_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "In Mist-Like Waters",
                        "Desc": "When Yumemizuki Mizuki is in the Dreamdrifter state, she will continuously apply the \"Twenty-Three Nights' Awaiting\" effect to nearby opponents for 3s every 3.5s. When an opponent is affected by Anemo DMG-triggered Swirl reactions while the aforementioned effect is active, the effect will be canceled and this Swirl instance has its DMG against this opponent increased by 1,100% of Mizuki's Elemental Mastery.",
                        "Icon": "UI_Talent_S_Mizuki_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Your Echo I Meet in Dreams",
                        "Desc": "When Yumemizuki Mizuki enters the Dreamdrifter state, every Elemental Mastery point she has will increase all nearby party members' <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, and <color style='color:#FFACFF;'>Electro</color> DMG Bonuses by 0.04% until the Dreamdrifter state ends.",
                        "Icon": "UI_Talent_S_Mizuki_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Till Dawn's Moon Ends Night",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Aisa Utamakura Pilgrimage</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Mizuki_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Buds Warm Lucid Springs",
                        "Desc": "Picking up a <color style='color:#FFD780;'>Yumemi Style Special Snack</color> from the Elemental Burst <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> will both deal DMG and heal, and will restore 5 Energy to Yumemizuki Mizuki. Energy can be restored this way 4 times per <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> duration.",
                        "Icon": "UI_Talent_S_Mizuki_03"
                    },
                    {
                        "Level": 5,
                        "Name": "As Setting Moon Brings Year's End",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Anraku Secret Spring Therapy</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Mizuki_02"
                    },
                    {
                        "Level": 6,
                        "Name": "The Heart Lingers Long",
                        "Desc": "While Yumemizuki Mizuki is in the Dreamdrifter state, Swirl DMG dealt by nearby party members can score CRIT Hits, with CRIT Rate fixed at 30%, and CRIT DMG fixed at 100%.",
                        "Icon": "UI_Talent_S_Mizuki_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Mizuki": {
        "AttackList": [
            {
                "Skill": "E Start",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        5.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 30.0,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "E Interval",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        4.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Once per 2 hits",
                "Element": "Wind",
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
                "StrikeType": "Default",
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Q Start",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        8.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Wind",
                "GU": 2.0,
                "Poise": 100.0,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Q Snack",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        4.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Elem Burst",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 30.0,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            }
        ]
    }
}