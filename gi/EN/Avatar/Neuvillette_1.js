// Auto Generated

var _AvatarDataConfig_ = {
    "Neuvillette": {
        "BallList": [
            {
                "When": "E hits monster (Except Spiritbreath Thorn)",
                "DropArray": [
                    {
                        "Num": 4,
                        "Chance": 1
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
                "Skill": "C0 Power CA Charging and Release ",
                "Endure": 0.5
            },
            {
                "Skill": "C1 Power CA Charging and Release ",
                "Endure": 0.0
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
        "OtherDataList": [
            "Power CA: Neuvillette can move on water while charging and unleashing.",
            "Power CA: DMG interval is 0.4s, lasts for 3s. / The entire Charge applies element 3 times.",
            "Q DMG interval: First 0.4s, then 0.8s. / The entire Q only applies element once."
        ]
    }
}

var _AvatarMats_ = {
    "Neuvillette": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104121": 1,
                "101237": 3,
                "112080": 3
            },
            {
                "202": 40000,
                "104122": 3,
                "113053": 2,
                "101237": 10,
                "112080": 15
            },
            {
                "202": 60000,
                "104122": 6,
                "113053": 4,
                "101237": 20,
                "112081": 12
            },
            {
                "202": 80000,
                "104123": 3,
                "113053": 8,
                "101237": 30,
                "112081": 18
            },
            {
                "202": 100000,
                "104123": 6,
                "113053": 12,
                "101237": 45,
                "112082": 12
            },
            {
                "202": 120000,
                "104124": 6,
                "113053": 20,
                "101237": 60,
                "112082": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104338": 3,
                "112080": 6
            },
            {
                "202": 17500,
                "104339": 2,
                "112081": 3
            },
            {
                "202": 25000,
                "104339": 4,
                "112081": 4
            },
            {
                "202": 30000,
                "104339": 6,
                "112081": 6
            },
            {
                "202": 37500,
                "104339": 9,
                "112081": 9
            },
            {
                "202": 120000,
                "104340": 4,
                "112082": 4,
                "113048": 1
            },
            {
                "202": 260000,
                "104340": 6,
                "112082": 6,
                "113048": 1
            },
            {
                "202": 450000,
                "104340": 12,
                "112082": 9,
                "113048": 2
            },
            {
                "202": 700000,
                "104340": 16,
                "112082": 12,
                "113048": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104338": 3,
                "112080": 6
            },
            {
                "202": 17500,
                "104339": 2,
                "112081": 3
            },
            {
                "202": 25000,
                "104339": 4,
                "112081": 4
            },
            {
                "202": 30000,
                "104339": 6,
                "112081": 6
            },
            {
                "202": 37500,
                "104339": 9,
                "112081": 9
            },
            {
                "202": 120000,
                "104340": 4,
                "112082": 4,
                "113048": 1
            },
            {
                "202": 260000,
                "104340": 6,
                "112082": 6,
                "113048": 1
            },
            {
                "202": 450000,
                "104340": 12,
                "112082": 9,
                "113048": 2
            },
            {
                "202": 700000,
                "104340": 16,
                "112082": 12,
                "113048": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104338": 3,
                "112080": 6
            },
            {
                "202": 17500,
                "104339": 2,
                "112081": 3
            },
            {
                "202": 25000,
                "104339": 4,
                "112081": 4
            },
            {
                "202": 30000,
                "104339": 6,
                "112081": 6
            },
            {
                "202": 37500,
                "104339": 9,
                "112081": 9
            },
            {
                "202": 120000,
                "104340": 4,
                "112082": 4,
                "113048": 1
            },
            {
                "202": 260000,
                "104340": 6,
                "112082": 6,
                "113048": 1
            },
            {
                "202": 450000,
                "104340": 12,
                "112082": 9,
                "113048": 2
            },
            {
                "202": 700000,
                "104340": 16,
                "112082": 12,
                "113048": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Neuvillette": {
        "Ver": {
            "L": {
                "BattleSkills": [
                    {
                        "Name": "As Water Seeks Equilibrium",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>With light flourishes, Neuvillette commands the tides to unleash a maximum of 3 attacks, dealing <color style='color:#80C0FF;'>Hydro DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack Empowerment: Legal Evaluation</color><br>While charging up, Neuvillette will gather the power of water, forming it into a Seal of Arbitration. In this state, Neuvillette can move and change facing, and also absorb any Sourcewater Droplets in a certain AoE.<br>Every Droplet he absorbs will increase the formation speed of the Seal, and will heal Neuvillette.<br>When the charging is stopped, if the Symbol has yet to be formed, then a Charged Attack will be unleashed. If it has been formed, then a Charged Attack: Equitable Judgment will be unleashed.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a fixed amount of Stamina to attack opponents with a rupturing blast of water, dealing <color style='color:#80C0FF;'>AoE Hydro DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack: Equitable Judgment</color><br>Unleashes surging torrents, dealing continuous <color style='color:#80C0FF;'>AoE Hydro DMG</color> to all opponents in a straight-line area in front of him.<br>Equitable Judgment will not consume any Stamina and lasts 3s.<br>If Neuvillette's HP is above 50%, he will continuously lose HP while using this attack.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Gathering the might of Hydro, Neuvillette plunges towards the ground from mid-air, damaging all opponents in his path. Deals <color style='color:#80C0FF;'>AoE Hydro DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "54.5768%",
                                    "58.6701%",
                                    "62.7633%",
                                    "68.221%",
                                    "72.3143%",
                                    "76.4075%",
                                    "81.8652%",
                                    "87.3229%",
                                    "92.7806%",
                                    "98.2382%",
                                    "103.6959%",
                                    "109.1536%",
                                    "115.9757%",
                                    "122.7978%",
                                    "129.6199%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "46.2456%",
                                    "49.714%",
                                    "53.1824%",
                                    "57.807%",
                                    "61.2754%",
                                    "64.7438%",
                                    "69.3684%",
                                    "73.993%",
                                    "78.6175%",
                                    "83.2421%",
                                    "87.8666%",
                                    "92.4912%",
                                    "98.2719%",
                                    "104.0526%",
                                    "109.8333%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "72.3376%",
                                    "77.7629%",
                                    "83.1882%",
                                    "90.422%",
                                    "95.8473%",
                                    "101.2726%",
                                    "108.5064%",
                                    "115.7402%",
                                    "122.9739%",
                                    "130.2077%",
                                    "137.4414%",
                                    "144.6752%",
                                    "153.7174%",
                                    "162.7596%",
                                    "171.8018%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "136.8%",
                                    "147.06%",
                                    "157.32%",
                                    "171.0%",
                                    "181.26%",
                                    "191.52%",
                                    "205.2%",
                                    "218.88%",
                                    "232.56%",
                                    "246.24%",
                                    "259.92%",
                                    "273.6%",
                                    "290.7%",
                                    "307.8%",
                                    "324.9%"
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
                                "Desc": "Charged Attack: Equitable Judgment",
                                "ParamLevelList": [
                                    "7.3186% Max HP",
                                    "7.9143% Max HP",
                                    "8.51% Max HP",
                                    "9.361% Max HP",
                                    "9.9567% Max HP",
                                    "10.6375% Max HP",
                                    "11.5736% Max HP",
                                    "12.5097% Max HP",
                                    "13.4458% Max HP",
                                    "14.467% Max HP",
                                    "15.4882% Max HP",
                                    "16.5094% Max HP",
                                    "17.5306% Max HP",
                                    "18.5518% Max HP",
                                    "19.573% Max HP"
                                ]
                            },
                            {
                                "Desc": "HP Restored",
                                "ParamLevelList": [
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet",
                                    "16.0% Max HP/Droplet"
                                ]
                            },
                            {
                                "Desc": "HP Loss",
                                "ParamLevelList": [
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s",
                                    "8.0% Max HP/0.5s"
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
                        "Name": "O Tears, I Shall Repay",
                        "Desc": "Summons a Raging Waterfall that will deal <color style='color:#80C0FF;'>AoE Hydro DMG</color> to opponents in front of Neuvillette based on his Max HP. After hitting an opponent, this skill will generate 3 Sourcewater Droplets near that opponent.<br><br><color style='color:#FFD780;'>Arkhe: Pneuma</color><br>At certain intervals, when the Raging Waterfall descends, a Spiritbreath Thorn will descend that will pierce opponents, dealing Pneuma-aligned <color style='color:#80C0FF;'>Hydro DMG</color>.<br><br><i>\"The law can restrict all manner of crimes, but it cannot extirpate evil itself.</i>",
                        "Icon": "Skill_S_Neuvillette_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "12.864% Max HP",
                                    "13.8288% Max HP",
                                    "14.7936% Max HP",
                                    "16.08% Max HP",
                                    "17.0448% Max HP",
                                    "18.0096% Max HP",
                                    "19.296% Max HP",
                                    "20.5824% Max HP",
                                    "21.8688% Max HP",
                                    "23.1552% Max HP",
                                    "24.4416% Max HP",
                                    "25.728% Max HP",
                                    "27.336% Max HP",
                                    "28.944% Max HP",
                                    "30.552% Max HP"
                                ]
                            },
                            {
                                "Desc": "Spiritbreath Thorn DMG",
                                "ParamLevelList": [
                                    "20.8%",
                                    "22.36%",
                                    "23.92%",
                                    "26.0%",
                                    "27.56%",
                                    "29.12%",
                                    "31.2%",
                                    "33.28%",
                                    "35.36%",
                                    "37.44%",
                                    "39.52%",
                                    "41.6%",
                                    "44.2%",
                                    "46.8%",
                                    "49.4%"
                                ]
                            },
                            {
                                "Desc": "Spiritbreath Thorn Interval",
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
                                "Desc": "Sourcewater Droplet Duration",
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
                            }
                        ]
                    },
                    {
                        "Name": "O Tides, I Have Returned",
                        "Desc": "Unleashes waves that will deal <color style='color:#80C0FF;'>AoE Hydro DMG</color> based on Neuvillette's Max HP. After a short interval, 2 waterfalls will descend and deal <color style='color:#80C0FF;'>Hydro DMG</color> in a somewhat smaller AoE, and will generate 6 Sourcewater Droplets within an area in front.<br><br><i>\"The law is only established after its publication, and above that, the laws of nature have governed all species and eras since ancient times.</i>",
                        "Icon": "Skill_E_Neuvillette_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "22.2578% Max HP",
                                    "23.9272% Max HP",
                                    "25.5965% Max HP",
                                    "27.8223% Max HP",
                                    "29.4916% Max HP",
                                    "31.161% Max HP",
                                    "33.3868% Max HP",
                                    "35.6125% Max HP",
                                    "37.8383% Max HP",
                                    "40.0641% Max HP",
                                    "42.2899% Max HP",
                                    "44.5157% Max HP",
                                    "47.2979% Max HP",
                                    "50.0801% Max HP",
                                    "52.8624% Max HP"
                                ]
                            },
                            {
                                "Desc": "Waterfall DMG",
                                "ParamLevelList": [
                                    "9.1055% Max HP",
                                    "9.7884% Max HP",
                                    "10.4713% Max HP",
                                    "11.3818% Max HP",
                                    "12.0647% Max HP",
                                    "12.7477% Max HP",
                                    "13.6582% Max HP",
                                    "14.5688% Max HP",
                                    "15.4793% Max HP",
                                    "16.3898% Max HP",
                                    "17.3004% Max HP",
                                    "18.2109% Max HP",
                                    "19.3491% Max HP",
                                    "20.4873% Max HP",
                                    "21.6255% Max HP"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "70",
                                    "70",
                                    "70",
                                    "70",
                                    "70",
                                    "70",
                                    "70",
                                    "70",
                                    "70",
                                    "70",
                                    "70",
                                    "70",
                                    "70",
                                    "70",
                                    "70"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "Heir to the Ancient Sea's Authority",
                        "Desc": "When a party member triggers a Vaporize, Frozen, Electro-Charged, Lunar-Charged, Bloom, Lunar-Bloom, Hydro Swirl, Hydro Crystallize or a Lunar-Crystallize reaction on opponents, 1 stack of Past Draconic Glories will be granted to Neuvillette for 30s. Max 3 stacks. Past Draconic Glories causes Charged Attack: Equitable Judgment to deal 110%/125%/160% of its original DMG.<br>The stacks of Past Draconic Glories created by each kind of Elemental Reaction exist independently.",
                        "Icon": "UI_Talent_S_Neuvillette_05"
                    },
                    {
                        "Name": "Discipline of the Supreme Arbitration",
                        "Desc": "For each 1% of Neuvillette's current HP greater than 30% of Max HP, he will gain 0.6% <color style='color:#80C0FF;'>Hydro DMG Bonus</color>. A maximum bonus of 30% can be obtained this way.",
                        "Icon": "UI_Talent_S_Neuvillette_06"
                    },
                    {
                        "Name": "Gather Like the Tide",
                        "Desc": "Increases underwater Sprint SPD for your own party members by 15%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Neuvillette_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Venerable Institution",
                        "Desc": "When Neuvillette takes the field, he will obtain 1 stack of Past Draconic Glories from the Ascension Talent \"Heir to the Ancient Sea's Authority.\" You must first unlock the Ascension Talent \"Heir to the Ancient Sea's Authority.\"<br>Additionally, his interruption resistance will be increased while using the Charged Attack Empowerment: Legal Evaluation and the Charged Attack: Equitable Judgment.",
                        "Icon": "UI_Talent_S_Neuvillette_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Juridical Exhortation",
                        "Desc": "The Ascension Talent \"Heir to the Ancient Sea's Authority\" will be enhanced: Each stack of Past Draconic Glories will increase the CRIT DMG of Charged Attack: Equitable Judgment by 14%. The maximum increase that can be achieved this way is 42%.<br>You must first unlock the Ascension Talent \"Heir to the Ancient Sea's Authority.\"",
                        "Icon": "UI_Talent_S_Neuvillette_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Ancient Postulation",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Normal Attack: As Water Seeks Equilibrium</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Neuvillette_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Crown of Commiseration",
                        "Desc": "When Neuvillette is on the field and is healed, 1 Sourcewater Droplet will be generated. This effect can occur once every 4s.",
                        "Icon": "UI_Talent_S_Neuvillette_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Axiomatic Judgment",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>O Tides, I Have Returned</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Neuvillette_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Wrathful Recompense",
                        "Desc": "When using Charged Attack: Equitable Judgment, Neuvillette can absorb nearby Sourcewater Droplets in an AoE. Each absorbed Droplet will increase the duration of Charged Attack: Equitable Judgment by 1s.<br>Additionally, when Equitable Judgment hits opponents, it will fire off 2 additional currents every 2s, each of which will deal 10% of Neuvillette's Max HP as <color style='color:#80C0FF;'>Hydro DMG</color>. DMG dealt this way will count as DMG dealt by Equitable Judgment.",
                        "Icon": "UI_Talent_S_Neuvillette_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Neuvillette": {
        "AttackList": [
            {
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 10.233,
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
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 8.67,
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
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 13.563,
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
                "Skill": "Charged ATK",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        8.0,
                        3.0,
                        3.0
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 80.0,
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
                "Skill": "Equitable Judgment",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Charged ATK",
                "AttTag": "CA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
                "GU": 1.0,
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
                "CanInfuse": false,
                "StrikeType": "Default",
                "AttackType": "Range"
            },
            {
                "Skill": "Equitable Judgment Last Hit",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        15.0,
                        3.5,
                        3.0
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "CA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 25.0,
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
                "AttackType": "Range"
            },
            {
                "Skill": "C6 Extra Power CA",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        0.5
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "C6 Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
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
                "StrikeType": "Default",
                "AttackType": "Range"
            },
            {
                "Skill": "Elem Skill",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        6.0,
                        4.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
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
                "StrikeType": "Default",
                "AttackType": "Range"
            },
            {
                "Skill": "Elem Skill - Spiritbreath Thorn",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.5,
                        4.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
                "GU": 0.0,
                "Poise": 20.0,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 1.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Spear",
                "AttackType": "Melee"
            },
            {
                "Skill": "Elem Burst - First Hit",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        8.0,
                        5.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 100.0,
                "ForceType": 3,
                "Force": [
                    50.0,
                    800.0
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
                "Skill": "Elem Burst - Following Hits",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        5.0,
                        4.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
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
                "StrikeType": "Default",
                "AttackType": "Range"
            },
            {
                "Skill": "Plunging",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.5
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
                "GU": 0.0,
                "Poise": 5.0,
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
                "Element": "Water",
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
                "Element": "Water",
                "GU": 1.0,
                "Poise": 100.0,
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
                "StrikeType": "Default",
                "AttackType": "Default"
            },
            {
                "Skill": "Landscape Wet",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
                "GU": 2.0,
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
            }
        ]
    }
}