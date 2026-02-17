// Auto Generated

var _AvatarDataConfig_ = {
    "Liuyun": {
        "BallList": [
            {
                "When": "Driftcloud Wave (C6 can NOT)",
                "DropArray": [
                    {
                        "Num": 5,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD",
                "CD": 0.2
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
            }
        ],
        "WindZoneList": [
            {
                "Skill": "Passive Skill (v1/v2)",
                "Target": "Weight < 100 , only enemies hit",
                "Duration": 1.0,
                "Radius": 8.0,
                "Inner": 1.0,
                "Strength": 10.0,
                "Attenuation": 2.5,
                "Reverse": true
            },
            {
                "Skill": "Passive Skill (v1/v2)",
                "Target": "100 ≤ Weight ≤ 150 , only enemies hit",
                "Duration": 1.0,
                "Radius": 8.0,
                "Inner": 1.0,
                "Strength": 20.0,
                "Attenuation": 3.5,
                "Reverse": true
            }
        ],
        "OtherDataList": [
            "V3 Change: Driftcloud Wave will always generate 5 particles, regardless of level. Previously, Lv1~2 generated 3 particles and Lv3 generated 5. C6's free Driftcloud Wave still does not generate particles.",
            "V3 Change: Vortex is gone. Passive 1 is now: For every enemy hit by Driftcloud Wave, all party members gain 1 stack of Boost, lasting 20s, max 4 stacks. Boost increases Plunge DMG's Crit Rate by 4%/6%/8%/10%, each stack's duration is calculated independently.",
            "V3 Change: New Passive 1's Crit Rate boost also buffs during-plunge DMG.",
            "V3 Change: Increased Lv3 Driftcloud Wave's knock force on enemies.",
            "Burst's Starwicker DMG and passive talent's active character Plunge attack increase both do not snapshot.",
            "V1 Change: Upon casting Elemental Burst, clears the Starwicker summoned by the previous Burst (if it still exists).",
            "V1 Change: Adjusted the camera setting during Elemental Skill.",
            "C6's no-CD Elemental Skills <b>do not generate any particles</b>.",
            "Driftcloud Wave Lv2-3 will knock enemies flying in the direction opposite to the hit's direction.",
            "Passive 1's Vortex is <b>even stronger than Kazuha's Hold E</b>. However, it only pulls enemies that were hit by E's plunges.",
            "<color style='text-decoration:line-through;'>Passive 2's DMG increase is not limited to Plunge Shockwave DMG (the DMG dealt when plunge finishes, hitting the ground). It can also be triggered by the DMG dealt during plunging.</color><br>Correction: Xianyun gives her DMG increase only to characters performing the <color style='color:#9ee096;'>[Hit-Ground Animation]</color>, therefore during-plunge attacks cannot be buffed.<br>The Hit-Ground Animations include all characters' standard hit-ground animations, along with the following special ones: Raiden Q state hit-ground, Kazuha E-plunge hit-ground, Xianyun E-plunge hit-ground, Gaming E-plunge hit-ground.<br>Note: Raiden's Q state plunge is a plunge animation, but the DMG she deals counts as Elemental Burst DMG, so she will recieve Xianyun's buff but won't trigger it.",
            "Elemental Skill's Skyladder Trail DMG does not apply Anemo, thus cannot trigger Swirl.",
            "Burst's jump height increase effect is weaker than Xiao's Burst, but stronger than Kirara's Elemental Skill."
        ]
    }
}

var _AvatarMats_ = {
    "Liuyun": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104151": 1,
                "101241": 3,
                "112008": 3
            },
            {
                "202": 40000,
                "104152": 3,
                "113058": 2,
                "101241": 10,
                "112008": 15
            },
            {
                "202": 60000,
                "104152": 6,
                "113058": 4,
                "101241": 20,
                "112009": 12
            },
            {
                "202": 80000,
                "104153": 3,
                "113058": 8,
                "101241": 30,
                "112009": 18
            },
            {
                "202": 100000,
                "104153": 6,
                "113058": 12,
                "101241": 45,
                "112010": 12
            },
            {
                "202": 120000,
                "104154": 6,
                "113058": 20,
                "101241": 60,
                "112010": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104316": 3,
                "112008": 6
            },
            {
                "202": 17500,
                "104317": 2,
                "112009": 3
            },
            {
                "202": 25000,
                "104317": 4,
                "112009": 4
            },
            {
                "202": 30000,
                "104317": 6,
                "112009": 6
            },
            {
                "202": 37500,
                "104317": 9,
                "112009": 9
            },
            {
                "202": 120000,
                "104318": 4,
                "112010": 4,
                "113055": 1
            },
            {
                "202": 260000,
                "104318": 6,
                "112010": 6,
                "113055": 1
            },
            {
                "202": 450000,
                "104318": 12,
                "112010": 9,
                "113055": 2
            },
            {
                "202": 700000,
                "104318": 16,
                "112010": 12,
                "113055": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104316": 3,
                "112008": 6
            },
            {
                "202": 17500,
                "104317": 2,
                "112009": 3
            },
            {
                "202": 25000,
                "104317": 4,
                "112009": 4
            },
            {
                "202": 30000,
                "104317": 6,
                "112009": 6
            },
            {
                "202": 37500,
                "104317": 9,
                "112009": 9
            },
            {
                "202": 120000,
                "104318": 4,
                "112010": 4,
                "113055": 1
            },
            {
                "202": 260000,
                "104318": 6,
                "112010": 6,
                "113055": 1
            },
            {
                "202": 450000,
                "104318": 12,
                "112010": 9,
                "113055": 2
            },
            {
                "202": 700000,
                "104318": 16,
                "112010": 12,
                "113055": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104316": 3,
                "112008": 6
            },
            {
                "202": 17500,
                "104317": 2,
                "112009": 3
            },
            {
                "202": 25000,
                "104317": 4,
                "112009": 4
            },
            {
                "202": 30000,
                "104317": 6,
                "112009": 6
            },
            {
                "202": 37500,
                "104317": 9,
                "112009": 9
            },
            {
                "202": 120000,
                "104318": 4,
                "112010": 4,
                "113055": 1
            },
            {
                "202": 260000,
                "104318": 6,
                "112010": 6,
                "113055": 1
            },
            {
                "202": 450000,
                "104318": 12,
                "112010": 9,
                "113055": 2
            },
            {
                "202": 700000,
                "104318": 16,
                "112010": 12,
                "113055": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Liuyun": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Summons swirling winds to perform up to 4 attacks, dealing <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina and launches a Breeze Bolt in a straight line that deals <color style='color:#80FFD7;'> Anemo DMG</color> to opponents along its path.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "Lock": 15.0,
                        "Name": "Normal Attack: Word of Wind and Flower",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "40.302%",
                                    "43.325%",
                                    "46.348%",
                                    "50.378%",
                                    "53.401%",
                                    "56.423%",
                                    "60.454%",
                                    "64.484%",
                                    "68.514%",
                                    "72.544%",
                                    "76.575%",
                                    "80.605%",
                                    "85.643%",
                                    "90.68%",
                                    "95.718%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "38.855%",
                                    "41.769%",
                                    "44.684%",
                                    "48.569%",
                                    "51.483%",
                                    "54.397%",
                                    "58.283%",
                                    "62.168%",
                                    "66.054%",
                                    "69.939%",
                                    "73.825%",
                                    "77.71%",
                                    "82.567%",
                                    "87.424%",
                                    "92.281%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "48.878%",
                                    "52.543%",
                                    "56.209%",
                                    "61.097%",
                                    "64.763%",
                                    "68.429%",
                                    "73.316%",
                                    "78.204%",
                                    "83.092%",
                                    "87.98%",
                                    "92.867%",
                                    "97.755%",
                                    "103.865%",
                                    "109.975%",
                                    "116.084%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "64.917%",
                                    "69.786%",
                                    "74.654%",
                                    "81.146%",
                                    "86.015%",
                                    "90.883%",
                                    "97.375%",
                                    "103.867%",
                                    "110.359%",
                                    "116.85%",
                                    "123.342%",
                                    "129.834%",
                                    "137.948%",
                                    "146.063%",
                                    "154.177%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "123.12%",
                                    "132.354%",
                                    "141.588%",
                                    "153.9%",
                                    "163.134%",
                                    "172.368%",
                                    "184.68%",
                                    "196.992%",
                                    "209.304%",
                                    "221.616%",
                                    "233.928%",
                                    "246.24%",
                                    "261.63%",
                                    "277.02%",
                                    "292.41%"
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
                        "Num": 1,
                        "Desc": "Xianyun enters the Cloud Transmogrification state and uses Skyladder once. In this state, she can use Skyladder up to 2 more times.<br>In this state, when Xianyun uses a Normal or Plunging Attack, she will use Driftcloud Wave instead, transforming into a Cloudbreeze Crane and performing a dive attack on nearby opponents, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> and ending Cloud Transmogrification. DMG dealt this way is considered Plunging Attack DMG.<br><br><color style='color:#FFD780;'>Skyladder</color><br>Xianyun will temporarily ascend forward and into the air, dealing <color style='color:#80FFD7;'>Anemo DMG</color> to targets in her path.<br>Can be used while in mid-air. The leap distance increases when used from the ground.<br>The same opponent can be damaged a maximum of once per Cloud Transmogrification state.<br><br>The more times Skyladder is used during per Cloud Transmogrification state, the more DMG the resulting Driftcloud Wave will deal and the larger its AoE. After using 3 Skyladders (including the initial use from White Clouds at Dawn), she will use the mightiest Driftcloud Wave: Divine Awe.<br><br>White Clouds at Dawn itself can only be used while on the ground.<br>If Skyladder is not used again within a short period, Cloud Transmogrification state will end and enter CD. If Driftcloud Wave was not used during a Cloud Transmogrification state, the CD of Cloud Transmogrification will be decreased by 3s.<br><br><i>Watch out when you hold Cloud Retainer's hand — she's got a grip like a crane.</i>",
                        "Icon": "Skill_S_Liuyun_01",
                        "Lock": 8.0,
                        "Name": "White Clouds at Dawn",
                        "ParamDesc": [
                            {
                                "Desc": "Adeptal Aspect Trail DMG",
                                "ParamLevelList": [
                                    "24.8%",
                                    "26.66%",
                                    "28.52%",
                                    "31.0%",
                                    "32.86%",
                                    "34.72%",
                                    "37.2%",
                                    "39.68%",
                                    "42.16%",
                                    "44.64%",
                                    "47.12%",
                                    "49.6%",
                                    "52.7%",
                                    "55.8%",
                                    "58.9%"
                                ]
                            },
                            {
                                "Desc": "Chasing Crane: First Leap",
                                "ParamLevelList": [
                                    "116.0%",
                                    "124.7%",
                                    "133.4%",
                                    "145.0%",
                                    "153.7%",
                                    "162.4%",
                                    "174.0%",
                                    "185.6%",
                                    "197.2%",
                                    "208.8%",
                                    "220.4%",
                                    "232.0%",
                                    "246.5%",
                                    "261.0%",
                                    "275.5%"
                                ]
                            },
                            {
                                "Desc": "Chasing Crane: Second Leap",
                                "ParamLevelList": [
                                    "148.0%",
                                    "159.1%",
                                    "170.2%",
                                    "185.0%",
                                    "196.1%",
                                    "207.2%",
                                    "222.0%",
                                    "236.8%",
                                    "251.6%",
                                    "266.4%",
                                    "281.2%",
                                    "296.0%",
                                    "314.5%",
                                    "333.0%",
                                    "351.5%"
                                ]
                            },
                            {
                                "Desc": "Chasing Crane: Third Leap",
                                "ParamLevelList": [
                                    "304.0%",
                                    "326.8%",
                                    "349.6%",
                                    "380.0%",
                                    "402.8%",
                                    "425.6%",
                                    "456.0%",
                                    "486.4%",
                                    "516.8%",
                                    "547.2%",
                                    "577.6%",
                                    "608.0%",
                                    "646.0%",
                                    "684.0%",
                                    "722.0%"
                                ]
                            },
                            {
                                "Desc": "Press CD",
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
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Brings forth a sacred breeze that deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> and heals all nearby characters based on Xianyun's ATK. It will also summon a mechanism named Starwicker.<br><br><color style='color:#FFD780;'>Starwicker</color><br> · Continuously follows the active character and periodically heals all nearby characters based on Xianyun's ATK.<br> · Starts with 8 stacks of Adeptal Assistance. While Adeptal Assistance is active, nearby active characters will have their jump height increased.<br> · When the active character completes a Plunging Attack, Starwicker will consume 1 stack of Adeptal Assistance and deal <color style='color:#80FFD7;'>AoE Anemo DMG</color>.<br><br><i>This is the newest invention in the \"Lunastar Artifices\" series, of which previous creations include the Supreme Cuisine Machine, Floating Toting Device, Curio Discernment Mechanism, Supreme Tea-Brewing Machine, the Snowdrift Mechanism, Supreme Housekeeping Machine, and the Sound Amplification Machine. This series was intended for young humans Cloud Retainer had admiration for, and so was not designed with a certain half-adeptus in mind. However, when offered Starwicker, a certain female disciple of hers had these emotionless words to say: \"No thank you.\"<br>Cloud Retainer thus had no choice but to keep it herself.</i>",
                        "Icon": "Skill_E_Liuyun_01",
                        "Lock": 15.0,
                        "Name": "Stars Gather at Dusk",
                        "ParamDesc": [
                            {
                                "Desc": "Instant DMG",
                                "ParamLevelList": [
                                    "108.0%",
                                    "116.1%",
                                    "124.2%",
                                    "135.0%",
                                    "143.1%",
                                    "151.2%",
                                    "162.0%",
                                    "172.8%",
                                    "183.6%",
                                    "194.4%",
                                    "205.2%",
                                    "216.0%",
                                    "229.5%",
                                    "243.0%",
                                    "256.5%"
                                ]
                            },
                            {
                                "Desc": "Device Coordinated ATK DMG",
                                "ParamLevelList": [
                                    "39.2%",
                                    "42.14%",
                                    "45.08%",
                                    "49.0%",
                                    "51.94%",
                                    "54.88%",
                                    "58.8%",
                                    "62.72%",
                                    "66.64%",
                                    "70.56%",
                                    "74.48%",
                                    "78.4%",
                                    "83.3%",
                                    "88.2%",
                                    "93.1%"
                                ]
                            },
                            {
                                "Desc": "Instant Healing",
                                "ParamLevelList": [
                                    "122.88% ATK+770.37524",
                                    "132.096% ATK+847.42346",
                                    "141.312% ATK+930.8924",
                                    "153.6% ATK+1020.78198",
                                    "162.816% ATK+1117.09229",
                                    "172.032% ATK+1219.82324",
                                    "184.32% ATK+1328.97498",
                                    "196.608% ATK+1444.54724",
                                    "208.896% ATK+1566.54028",
                                    "221.184% ATK+1694.95398",
                                    "233.472% ATK+1829.78845",
                                    "245.76% ATK+1971.04358",
                                    "261.12% ATK+2118.71924",
                                    "276.48% ATK+2272.81567",
                                    "291.84% ATK+2433.33301"
                                ]
                            },
                            {
                                "Desc": "Device Continuous Healing",
                                "ParamLevelList": [
                                    "36.864% ATK+231.11266",
                                    "39.629% ATK+254.22713",
                                    "42.394% ATK+279.26782",
                                    "46.08% ATK+306.23471",
                                    "48.845% ATK+335.12781",
                                    "51.61% ATK+365.94711",
                                    "55.296% ATK+398.6926",
                                    "58.982% ATK+433.36432",
                                    "62.669% ATK+469.96225",
                                    "66.355% ATK+508.48639",
                                    "70.042% ATK+548.93671",
                                    "73.728% ATK+591.31323",
                                    "78.336% ATK+635.61603",
                                    "82.944% ATK+681.84497",
                                    "87.552% ATK+730.0"
                                ]
                            },
                            {
                                "Desc": "Device Healing Trigger Interval",
                                "ParamLevelList": [
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s"
                                ]
                            },
                            {
                                "Desc": "Device Duration",
                                "ParamLevelList": [
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "After <color style='color:#80FFD7;'>White Clouds at Dawn</color>'s Driftcloud Wave: Divine Awe hits, it will generate a vortex in front of it that will pull nearby opponents and objects in.",
                        "Icon": "UI_Talent_S_Liuyun_05",
                        "Name": "Galefeather Pursuit"
                    },
                    {
                        "Desc": "When the Starwicker created by <color style='color:#80FFD7;'>Stars Gather at Dusk</color> has Adeptal Assistance stacks, nearby active characters' Plunging Attack shockwave DMG will be increased by 170% of Xianyun's ATK. The maximum DMG increase that can be achieved this way is 8,500.<br>Each Plunging Attack shockwave DMG instance can only apply this increased DMG effect to a single opponent. Each character can trigger this effect once every 0.4s.",
                        "Icon": "UI_Talent_S_Liuyun_06",
                        "Name": "Consider, the Adeptus in Her Realm"
                    },
                    {
                        "Desc": "Increases gliding SPD for your own party members by 15%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Liuyun_07",
                        "Name": "Crane Form"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "<color style='color:#80FFD7;'>White Clouds at Dawn</color> gains 1 additional charge.",
                        "Icon": "UI_Talent_S_Liuyun_01",
                        "Name": "Purifying Wind",
                        "Level": 1
                    },
                    {
                        "Desc": "After using <color style='color:#80FFD7;'>White Clouds at Dawn</color>, Xianyun's ATK will be increased by 20% for 15s.<br>Additionally, the effects of the Passive Talent \"Consider, the Adeptus in Her Realm\" will be enhanced: When the Starwicker created by <color style='color:#80FFD7;'>Stars Gather at Dusk</color> has Adeptal Assistance stacks, nearby active characters' Plunging Attack shockwave DMG will be increased by 306% of Xianyun's ATK. The maximum DMG increase that can be achieved this way is 15,300.<br>Each Plunging Attack shockwave DMG instance can only apply this increased DMG effect to a single opponent. Each character can trigger this effect once every 0.4s.<br>You must first unlock the Passive Talent \"Consider, the Adeptus in Her Realm.\"",
                        "Icon": "UI_Talent_S_Liuyun_02",
                        "Name": "Aloof From the World",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Stars Gather at Dusk</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Liuyun_02",
                        "Name": "Creations of Star and Moon",
                        "Level": 3
                    },
                    {
                        "Desc": "After using Skyladder 1/2/3 times during one <color style='color:#80FFD7;'>White Clouds at Dawn</color> Cloud Transmogrification state, when a Driftcloud Wave unleashed during that instance hits an opponent, it will heal all nearby party members for 50%/80%/150% of Xianyun's ATK. This effect can be triggered once every 5s.",
                        "Icon": "UI_Talent_S_Liuyun_03",
                        "Name": "Mystery Millet Gourmet",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>White Clouds at Dawn</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Liuyun_01",
                        "Name": "Astride Rose-Colored Clouds",
                        "Level": 5
                    },
                    {
                        "Desc": "The CRIT DMG of <color style='color:#80FFD7;'>White Clouds at Dawn</color>'s Driftcloud Wave is increased by 70%.<br>When Xianyun uses White Clouds at Dawn, if <color style='color:#80FFD7;'>Stars Gather at Dusk</color>'s Starwicker has Adeptal Assistance, 1 Adeptal Assistance stack will be consumed and cause this use of White Clouds at Dawn to not enter CD, and when this instance of Cloud Transmogrification state triggers Starwicker's attack with a Driftcloud Wave, no Adeptal Assistance will be consumed.<br>Additionally, when Driftcloud Wave: Divine Awe hits an opponent, Starwicker will gain 1 Adeptal Assistance stack. This effect can be triggered once every 8s.",
                        "Icon": "UI_Talent_S_Liuyun_04",
                        "Name": "Cloudkeeper's Spirit",
                        "Level": 6
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Summons swirling winds to perform up to 4 attacks, dealing <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina and launches a Breeze Bolt in a straight line that deals <color style='color:#80FFD7;'> Anemo DMG</color> to opponents along its path.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "Lock": 15.0,
                        "Name": "Normal Attack: Word of Wind and Flower",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "40.302%",
                                    "43.325%",
                                    "46.348%",
                                    "50.378%",
                                    "53.401%",
                                    "56.423%",
                                    "60.454%",
                                    "64.484%",
                                    "68.514%",
                                    "72.544%",
                                    "76.575%",
                                    "80.605%",
                                    "85.643%",
                                    "90.68%",
                                    "95.718%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "38.855%",
                                    "41.769%",
                                    "44.684%",
                                    "48.569%",
                                    "51.483%",
                                    "54.397%",
                                    "58.283%",
                                    "62.168%",
                                    "66.054%",
                                    "69.939%",
                                    "73.825%",
                                    "77.71%",
                                    "82.567%",
                                    "87.424%",
                                    "92.281%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "48.878%",
                                    "52.543%",
                                    "56.209%",
                                    "61.097%",
                                    "64.763%",
                                    "68.429%",
                                    "73.316%",
                                    "78.204%",
                                    "83.092%",
                                    "87.98%",
                                    "92.867%",
                                    "97.755%",
                                    "103.865%",
                                    "109.975%",
                                    "116.084%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "64.917%",
                                    "69.786%",
                                    "74.654%",
                                    "81.146%",
                                    "86.015%",
                                    "90.883%",
                                    "97.375%",
                                    "103.867%",
                                    "110.359%",
                                    "116.85%",
                                    "123.342%",
                                    "129.834%",
                                    "137.948%",
                                    "146.063%",
                                    "154.177%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "123.12%",
                                    "132.354%",
                                    "141.588%",
                                    "153.9%",
                                    "163.134%",
                                    "172.368%",
                                    "184.68%",
                                    "196.992%",
                                    "209.304%",
                                    "221.616%",
                                    "233.928%",
                                    "246.24%",
                                    "261.63%",
                                    "277.02%",
                                    "292.41%"
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
                        "Num": 1,
                        "Desc": "Xianyun enters the Cloud Transmogrification state and uses Skyladder once. In this state, she can use Skyladder up to 2 more times.<br>In this state, when Xianyun uses a Normal or Plunging Attack, she will use Driftcloud Wave instead, transforming into a Cloudbreeze Crane and performing a dive attack on nearby opponents, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> and ending Cloud Transmogrification. DMG dealt this way is considered Plunging Attack DMG.<br><br><color style='color:#FFD780;'>Skyladder</color><br>Xianyun will temporarily ascend forward and into the air, dealing <color style='color:#80FFD7;'>Anemo DMG</color> to targets in her path.<br>Can be used while in mid-air. The leap distance increases when used from the ground.<br>The same opponent can be damaged a maximum of once per Cloud Transmogrification state.<br><br>The more times Skyladder is used during per Cloud Transmogrification state, the more DMG the resulting Driftcloud Wave will deal and the larger its AoE. After using 3 Skyladders (including the initial use from White Clouds at Dawn), she will use the mightiest Driftcloud Wave: Divine Awe.<br><br>White Clouds at Dawn itself can only be used while on the ground.<br>If Skyladder is not used again within a short period, Cloud Transmogrification state will end and enter CD. If Driftcloud Wave was not used during a Cloud Transmogrification state, the CD of Cloud Transmogrification will be decreased by 3s.<br><br><i>Watch out when you hold Cloud Retainer's hand — she's got a grip like a crane.</i>",
                        "Icon": "Skill_S_Liuyun_01",
                        "Lock": 8.0,
                        "Name": "White Clouds at Dawn",
                        "ParamDesc": [
                            {
                                "Desc": "Adeptal Aspect Trail DMG",
                                "ParamLevelList": [
                                    "24.8%",
                                    "26.66%",
                                    "28.52%",
                                    "31.0%",
                                    "32.86%",
                                    "34.72%",
                                    "37.2%",
                                    "39.68%",
                                    "42.16%",
                                    "44.64%",
                                    "47.12%",
                                    "49.6%",
                                    "52.7%",
                                    "55.8%",
                                    "58.9%"
                                ]
                            },
                            {
                                "Desc": "Chasing Crane: First Leap",
                                "ParamLevelList": [
                                    "116.0%",
                                    "124.7%",
                                    "133.4%",
                                    "145.0%",
                                    "153.7%",
                                    "162.4%",
                                    "174.0%",
                                    "185.6%",
                                    "197.2%",
                                    "208.8%",
                                    "220.4%",
                                    "232.0%",
                                    "246.5%",
                                    "261.0%",
                                    "275.5%"
                                ]
                            },
                            {
                                "Desc": "Chasing Crane: Second Leap",
                                "ParamLevelList": [
                                    "148.0%",
                                    "159.1%",
                                    "170.2%",
                                    "185.0%",
                                    "196.1%",
                                    "207.2%",
                                    "222.0%",
                                    "236.8%",
                                    "251.6%",
                                    "266.4%",
                                    "281.2%",
                                    "296.0%",
                                    "314.5%",
                                    "333.0%",
                                    "351.5%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Brings forth a sacred breeze that deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> and heals all nearby characters based on Xianyun's ATK. It will also summon a mechanism named Starwicker.<br><br><color style='color:#FFD780;'>Starwicker</color><br> · Continuously follows the active character and periodically heals all nearby characters based on Xianyun's ATK.<br> · Starts with 8 stacks of Adeptal Assistance. While Adeptal Assistance is active, nearby active characters will have their jump height increased.<br> · When the active character completes a Plunging Attack, Starwicker will consume 1 stack of Adeptal Assistance and deal <color style='color:#80FFD7;'>AoE Anemo DMG</color>.<br>Only 1 Starwicker can exist simultaneously.<br><br><i>This is the newest invention in the \"Lunastar Artifices\" series, of which previous creations include the Supreme Cuisine Machine, Floating Toting Device, Curio Discernment Mechanism, Supreme Tea-Brewing Machine, the Snowdrift Mechanism, Supreme Housekeeping Machine, and the Sound Amplification Machine. This series was intended for young humans Cloud Retainer had admiration for, and so was not designed with a certain half-adeptus in mind. However, when offered Starwicker, a certain female disciple of hers had these emotionless words to say: \"No thank you.\"<br>Cloud Retainer thus had no choice but to keep it herself.</i>",
                        "Icon": "Skill_E_Liuyun_01",
                        "Lock": 15.0,
                        "Name": "Stars Gather at Dusk",
                        "ParamDesc": [
                            {
                                "Desc": "Instant DMG",
                                "ParamLevelList": [
                                    "108.0%",
                                    "116.1%",
                                    "124.2%",
                                    "135.0%",
                                    "143.1%",
                                    "151.2%",
                                    "162.0%",
                                    "172.8%",
                                    "183.6%",
                                    "194.4%",
                                    "205.2%",
                                    "216.0%",
                                    "229.5%",
                                    "243.0%",
                                    "256.5%"
                                ]
                            },
                            {
                                "Desc": "Device Coordinated ATK DMG",
                                "ParamLevelList": [
                                    "39.2%",
                                    "42.14%",
                                    "45.08%",
                                    "49.0%",
                                    "51.94%",
                                    "54.88%",
                                    "58.8%",
                                    "62.72%",
                                    "66.64%",
                                    "70.56%",
                                    "74.48%",
                                    "78.4%",
                                    "83.3%",
                                    "88.2%",
                                    "93.1%"
                                ]
                            },
                            {
                                "Desc": "Instant Healing",
                                "ParamLevelList": [
                                    "122.88% ATK+770.37524",
                                    "132.096% ATK+847.42346",
                                    "141.312% ATK+930.8924",
                                    "153.6% ATK+1020.78198",
                                    "162.816% ATK+1117.09229",
                                    "172.032% ATK+1219.82324",
                                    "184.32% ATK+1328.97498",
                                    "196.608% ATK+1444.54724",
                                    "208.896% ATK+1566.54028",
                                    "221.184% ATK+1694.95398",
                                    "233.472% ATK+1829.78845",
                                    "245.76% ATK+1971.04358",
                                    "261.12% ATK+2118.71924",
                                    "276.48% ATK+2272.81567",
                                    "291.84% ATK+2433.33301"
                                ]
                            },
                            {
                                "Desc": "Device Continuous Healing",
                                "ParamLevelList": [
                                    "36.864% ATK+231.11266",
                                    "39.629% ATK+254.22713",
                                    "42.394% ATK+279.26782",
                                    "46.08% ATK+306.23471",
                                    "48.845% ATK+335.12781",
                                    "51.61% ATK+365.94711",
                                    "55.296% ATK+398.6926",
                                    "58.982% ATK+433.36432",
                                    "62.669% ATK+469.96225",
                                    "66.355% ATK+508.48639",
                                    "70.042% ATK+548.93671",
                                    "73.728% ATK+591.31323",
                                    "78.336% ATK+635.61603",
                                    "82.944% ATK+681.84497",
                                    "87.552% ATK+730.0"
                                ]
                            },
                            {
                                "Desc": "Device Healing Trigger Interval",
                                "ParamLevelList": [
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s",
                                    "2.5s"
                                ]
                            },
                            {
                                "Desc": "Device Duration",
                                "ParamLevelList": [
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "After <color style='color:#80FFD7;'>White Clouds at Dawn</color>'s Driftcloud Wave: Divine Awe hits, it will generate a vortex in front of it that will pull nearby opponents and objects in.",
                        "Icon": "UI_Talent_S_Liuyun_05",
                        "Name": "Galefeather Pursuit"
                    },
                    {
                        "Desc": "When the Starwicker created by <color style='color:#80FFD7;'>Stars Gather at Dusk</color> has Adeptal Assistance stacks, nearby active characters' Plunging Attack shockwave DMG will be increased by 170% of Xianyun's ATK. The maximum DMG increase that can be achieved this way is 8,500.<br>Each Plunging Attack shockwave DMG instance can only apply this increased DMG effect to a single opponent. Each character can trigger this effect once every 0.4s.",
                        "Icon": "UI_Talent_S_Liuyun_06",
                        "Name": "Consider, the Adeptus in Her Realm"
                    },
                    {
                        "Desc": "Increases gliding SPD for your own party members by 15%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Liuyun_07",
                        "Name": "Crane Form"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "<color style='color:#80FFD7;'>White Clouds at Dawn</color> gains 1 additional charge.",
                        "Icon": "UI_Talent_S_Liuyun_01",
                        "Name": "Purifying Wind",
                        "Level": 1
                    },
                    {
                        "Desc": "After using <color style='color:#80FFD7;'>White Clouds at Dawn</color>, Xianyun's ATK will be increased by 20% for 15s.<br>Additionally, the effects of the Passive Talent \"Consider, the Adeptus in Her Realm\" will be enhanced: When the Starwicker created by <color style='color:#80FFD7;'>Stars Gather at Dusk</color> has Adeptal Assistance stacks, nearby active characters' Plunging Attack shockwave DMG will be increased by 306% of Xianyun's ATK. The maximum DMG increase that can be achieved this way is 15,300.<br>Each Plunging Attack shockwave DMG instance can only apply this increased DMG effect to a single opponent. Each character can trigger this effect once every 0.4s.<br>You must first unlock the Passive Talent \"Consider, the Adeptus in Her Realm.\"",
                        "Icon": "UI_Talent_S_Liuyun_02",
                        "Name": "Aloof From the World",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Stars Gather at Dusk</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Liuyun_02",
                        "Name": "Creations of Star and Moon",
                        "Level": 3
                    },
                    {
                        "Desc": "After using Skyladder 1/2/3 times during one <color style='color:#80FFD7;'>White Clouds at Dawn</color> Cloud Transmogrification state, when a Driftcloud Wave unleashed during that instance hits an opponent, it will heal all nearby party members for 50%/80%/150% of Xianyun's ATK. This effect can be triggered once every 5s.",
                        "Icon": "UI_Talent_S_Liuyun_03",
                        "Name": "Mystery Millet Gourmet",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>White Clouds at Dawn</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Liuyun_01",
                        "Name": "Astride Rose-Colored Clouds",
                        "Level": 5
                    },
                    {
                        "Desc": "After Skyladder has been used 1/2/3 times in one Cloud Transmogrification state caused by <color style='color:#80FFD7;'>White Clouds at Dawn</color>, the resultant Driftcloud Wave's CRIT DMG will be increased by 15%/35%/70%.<br>When Xianyun uses White Clouds at Dawn, if <color style='color:#80FFD7;'>Stars Gather at Dusk</color>'s Starwicker has Adeptal Assistance, 1 Adeptal Assistance stack will be consumed and cause this use of White Clouds at Dawn to not enter CD, and when this instance of Cloud Transmogrification state triggers Starwicker's attack with a Driftcloud Wave, no Adeptal Assistance will be consumed.<br>Additionally, when Driftcloud Wave: Divine Awe hits an opponent, Starwicker will gain 1 Adeptal Assistance stack. This effect can be triggered once every 8s.",
                        "Icon": "UI_Talent_S_Liuyun_04",
                        "Name": "Cloudkeeper's Spirit",
                        "Level": 6
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Summons swirling winds to perform up to 4 attacks, dealing <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina and launches a Breeze Bolt in a straight line that deals <color style='color:#80FFD7;'> Anemo DMG</color> to opponents along its path.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Gathers the power of Anemo and plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "Lock": 15.0,
                        "Name": "Normal Attack: Word of Wind and Flower",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "40.302%",
                                    "43.325%",
                                    "46.348%",
                                    "50.378%",
                                    "53.401%",
                                    "56.423%",
                                    "60.454%",
                                    "64.484%",
                                    "68.514%",
                                    "72.544%",
                                    "76.575%",
                                    "80.605%",
                                    "85.643%",
                                    "90.68%",
                                    "95.718%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "38.855%",
                                    "41.769%",
                                    "44.684%",
                                    "48.569%",
                                    "51.483%",
                                    "54.397%",
                                    "58.283%",
                                    "62.168%",
                                    "66.054%",
                                    "69.939%",
                                    "73.825%",
                                    "77.71%",
                                    "82.567%",
                                    "87.424%",
                                    "92.281%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "48.878%",
                                    "52.543%",
                                    "56.209%",
                                    "61.097%",
                                    "64.763%",
                                    "68.429%",
                                    "73.316%",
                                    "78.204%",
                                    "83.092%",
                                    "87.98%",
                                    "92.867%",
                                    "97.755%",
                                    "103.865%",
                                    "109.975%",
                                    "116.084%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "64.917%",
                                    "69.786%",
                                    "74.654%",
                                    "81.146%",
                                    "86.015%",
                                    "90.883%",
                                    "97.375%",
                                    "103.867%",
                                    "110.359%",
                                    "116.85%",
                                    "123.342%",
                                    "129.834%",
                                    "137.948%",
                                    "146.063%",
                                    "154.177%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "123.12%",
                                    "132.354%",
                                    "141.588%",
                                    "153.9%",
                                    "163.134%",
                                    "172.368%",
                                    "184.68%",
                                    "196.992%",
                                    "209.304%",
                                    "221.616%",
                                    "233.928%",
                                    "246.24%",
                                    "261.63%",
                                    "277.02%",
                                    "292.41%"
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
                        "Num": 1,
                        "Desc": "Xianyun enters the Cloud Transmogrification state and uses Skyladder once. In this state, she can use Skyladder up to 2 more times, and she will not take any Fall Damage.<br>In this state, when Xianyun uses a Normal or Plunging Attack, she will use Driftcloud Wave instead, transforming into a Cloudbreeze Crane to perform a dive attack on nearby opponents, dealing <color style='color:#80FFD7;'>AoE Anemo DMG</color> and ending Cloud Transmogrification. DMG dealt this way is considered Plunging Attack DMG.<br><br><color style='color:#FFD780;'>Skyladder</color><br>Xianyun will temporarily ascend forward and into the air, dealing <color style='color:#80FFD7;'>Anemo DMG</color> to targets in her path.<br>Can be used while in mid-air. The leap distance increases when used from the ground.<br>The same opponent can be damaged a maximum of once per Cloud Transmogrification state using a Skyladder.<br><br>The more times Skyladder is used during per Cloud Transmogrification state, the more DMG the resulting Driftcloud Wave will deal and the larger its AoE. After using 3 Skyladders (including the initial use from White Clouds at Dawn), she will use the mightiest Driftcloud Wave: Divine Awe.<br><br>White Clouds at Dawn itself can only be used while on the ground.<br>If Skyladder is not used again within a short period, Cloud Transmogrification state will end and enter CD. If Driftcloud Wave was not used during a Cloud Transmogrification state, the CD of Cloud Transmogrification will be decreased by 3s.<br><br><i>Watch out when you hold Cloud Retainer's hand — she's got a grip like a crane.</i>",
                        "Icon": "Skill_S_Liuyun_01",
                        "Lock": 8.0,
                        "Name": "White Clouds at Dawn",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "24.8%",
                                    "26.66%",
                                    "28.52%",
                                    "31.0%",
                                    "32.86%",
                                    "34.72%",
                                    "37.2%",
                                    "39.68%",
                                    "42.16%",
                                    "44.64%",
                                    "47.12%",
                                    "49.6%",
                                    "52.7%",
                                    "55.8%",
                                    "58.9%"
                                ]
                            },
                            {
                                "Desc": "Driftcloud Wave DMG",
                                "ParamLevelList": [
                                    "116.0%/148.0%/304.0%",
                                    "124.7%/159.1%/326.8%",
                                    "133.4%/170.2%/349.6%",
                                    "145.0%/185.0%/380.0%",
                                    "153.7%/196.1%/402.8%",
                                    "162.4%/207.2%/425.6%",
                                    "174.0%/222.0%/456.0%",
                                    "185.6%/236.8%/486.4%",
                                    "197.2%/251.6%/516.8%",
                                    "208.8%/266.4%/547.2%",
                                    "220.4%/281.2%/577.6%",
                                    "232.0%/296.0%/608.0%",
                                    "246.5%/314.5%/646.0%",
                                    "261.0%/333.0%/684.0%",
                                    "275.5%/351.5%/722.0%"
                                ]
                            },
                            {
                                "Desc": "CD",
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
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Brings forth a sacred breeze that deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> and heals all nearby characters based on Xianyun's ATK. It will also summon a mechanism named Starwicker.<br><br><color style='color:#FFD780;'>Starwicker</color><br> · Continuously follows the active character and periodically heals all nearby characters based on Xianyun's ATK.<br> · Starts with 8 stacks of Adeptal Assistance. While Adeptal Assistance is active, nearby active characters will have their jump height increased.<br> · When the active character completes a Plunging Attack, Starwicker will consume 1 stack of Adeptal Assistance and deal <color style='color:#80FFD7;'>AoE Anemo DMG</color>.<br>Only 1 Starwicker can exist simultaneously.<br><br><i>This is the newest invention in the \"Lunastar Artifices\" series, of which previous creations include the Supreme Cuisine Machine, the Snowdrift Mechanism, Supreme Housekeeping Machine, the Floating Toting Device, and the Bloom Pruner. This series was intended for young humans Cloud Retainer held an admiration for, and so was not designed with a certain half-adeptus in mind. However, when offered Starwicker, a certain female disciple of hers had these emotionless words to say: \"No thank you.\"<br>Cloud Retainer thus had no choice but to keep it herself.</i>",
                        "Icon": "Skill_E_Liuyun_01",
                        "Lock": 15.0,
                        "Name": "Stars Gather at Dusk",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "108.0%",
                                    "116.1%",
                                    "124.2%",
                                    "135.0%",
                                    "143.1%",
                                    "151.2%",
                                    "162.0%",
                                    "172.8%",
                                    "183.6%",
                                    "194.4%",
                                    "205.2%",
                                    "216.0%",
                                    "229.5%",
                                    "243.0%",
                                    "256.5%"
                                ]
                            },
                            {
                                "Desc": "Starwicker DMG",
                                "ParamLevelList": [
                                    "39.2%",
                                    "42.14%",
                                    "45.08%",
                                    "49.0%",
                                    "51.94%",
                                    "54.88%",
                                    "58.8%",
                                    "62.72%",
                                    "66.64%",
                                    "70.56%",
                                    "74.48%",
                                    "78.4%",
                                    "83.3%",
                                    "88.2%",
                                    "93.1%"
                                ]
                            },
                            {
                                "Desc": "Healing",
                                "ParamLevelList": [
                                    "122.88% ATK+770.37524",
                                    "132.096% ATK+847.42346",
                                    "141.312% ATK+930.8924",
                                    "153.6% ATK+1020.78198",
                                    "162.816% ATK+1117.09229",
                                    "172.032% ATK+1219.82324",
                                    "184.32% ATK+1328.97498",
                                    "196.608% ATK+1444.54724",
                                    "208.896% ATK+1566.54028",
                                    "221.184% ATK+1694.95398",
                                    "233.472% ATK+1829.78845",
                                    "245.76% ATK+1971.04358",
                                    "261.12% ATK+2118.71924",
                                    "276.48% ATK+2272.81567",
                                    "291.84% ATK+2433.33301"
                                ]
                            },
                            {
                                "Desc": "Continuous Healing",
                                "ParamLevelList": [
                                    "36.864% ATK+231.11266",
                                    "39.629% ATK+254.22713",
                                    "42.394% ATK+279.26782",
                                    "46.08% ATK+306.23471",
                                    "48.845% ATK+335.12781",
                                    "51.61% ATK+365.94711",
                                    "55.296% ATK+398.6926",
                                    "58.982% ATK+433.36432",
                                    "62.669% ATK+469.96225",
                                    "66.355% ATK+508.48639",
                                    "70.042% ATK+548.93671",
                                    "73.728% ATK+591.31323",
                                    "78.336% ATK+635.61603",
                                    "82.944% ATK+681.84497",
                                    "87.552% ATK+730.0"
                                ]
                            },
                            {
                                "Desc": "Duration",
                                "ParamLevelList": [
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "After <color style='color:#80FFD7;'>White Clouds at Dawn</color>'s Driftcloud Wave: Divine Awe hits, it will generate a vortex in front of it that will pull nearby opponents and objects in.",
                        "Icon": "UI_Talent_S_Liuyun_05",
                        "Name": "Galefeather Pursuit"
                    },
                    {
                        "Desc": "When the Starwicker created by <color style='color:#80FFD7;'>Stars Gather at Dusk</color> has Adeptal Assistance stacks, nearby active characters' Plunging Attack shockwave DMG will be increased by 170% of Xianyun's ATK. The maximum DMG increase that can be achieved this way is 8,500.<br>Each Plunging Attack shockwave DMG instance can only apply this increased DMG effect to a single opponent. Each character can trigger this effect once every 0.4s.",
                        "Icon": "UI_Talent_S_Liuyun_06",
                        "Name": "Consider, the Adeptus in Her Realm"
                    },
                    {
                        "Desc": "Increases gliding SPD for your own party members by 15%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Liuyun_07",
                        "Name": "Crane Form"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "<color style='color:#80FFD7;'>White Clouds at Dawn</color> gains 1 additional charge.",
                        "Icon": "UI_Talent_S_Liuyun_01",
                        "Name": "Purifying Wind",
                        "Level": 1
                    },
                    {
                        "Desc": "After using a Skyladder from <color style='color:#80FFD7;'>White Clouds at Dawn</color>, Xianyun's ATK will be increased by 20% for 15s.<br>Additionally, the effects of the Passive Talent \"Consider, the Adeptus in Her Realm\" will be enhanced: When the Starwicker created by <color style='color:#80FFD7;'>Stars Gather at Dusk</color> has Adeptal Assistance stacks, nearby active characters' Plunging Attack shockwave DMG will be increased by 306% of Xianyun's ATK. The maximum DMG increase that can be achieved this way is 15,300.<br>Each Plunging Attack shockwave DMG instance can only apply this increased DMG effect to a single opponent. Each character can trigger this effect once every 0.4s.<br>You must first unlock the Passive Talent \"Consider, the Adeptus in Her Realm.\"",
                        "Icon": "UI_Talent_S_Liuyun_02",
                        "Name": "Aloof From the World",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Stars Gather at Dusk</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Liuyun_02",
                        "Name": "Creations of Star and Moon",
                        "Level": 3
                    },
                    {
                        "Desc": "After using Skyladder 1/2/3 times during one <color style='color:#80FFD7;'>White Clouds at Dawn</color> Cloud Transmogrification state, when a Driftcloud Wave unleashed during that instance hits an opponent, it will heal all nearby party members for 50%/80%/150% of Xianyun's ATK. This effect can be triggered once every 5s.",
                        "Icon": "UI_Talent_S_Liuyun_03",
                        "Name": "Mystery Millet Gourmet",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>White Clouds at Dawn</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Liuyun_01",
                        "Name": "Astride Rose-Colored Clouds",
                        "Level": 5
                    },
                    {
                        "Desc": "After Skyladder has been used 1/2/3 times in one Cloud Transmogrification state caused by <color style='color:#80FFD7;'>White Clouds at Dawn</color>, the resultant Driftcloud Wave's CRIT DMG will be increased by 15%/35%/70%.<br>When Xianyun uses White Clouds at Dawn, if <color style='color:#80FFD7;'>Stars Gather at Dusk</color>'s Starwicker has Adeptal Assistance, 1 Adeptal Assistance stack will be consumed and cause this use of White Clouds at Dawn to not enter CD, and when this instance of Cloud Transmogrification state triggers Starwicker's attack with a Driftcloud Wave, no Adeptal Assistance will be consumed.<br>Additionally, when Driftcloud Wave: Divine Awe hits an opponent, Starwicker will gain 1 Adeptal Assistance stack. This effect can be triggered once every 8s.",
                        "Icon": "UI_Talent_S_Liuyun_04",
                        "Name": "Cloudkeeper's Spirit",
                        "Level": 6
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Summons swirling winds to perform up to 4 attacks, dealing <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina and launches a Breeze Bolt in a straight line that deals <color style='color:#80FFD7;'>Anemo DMG</color> to opponents along its path.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Gathers the power of Anemo and plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "Lock": 15.0,
                        "Name": "Normal Attack: Word of Wind and Flower",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "40.302%",
                                    "43.325%",
                                    "46.348%",
                                    "50.378%",
                                    "53.401%",
                                    "56.423%",
                                    "60.454%",
                                    "64.484%",
                                    "68.514%",
                                    "72.544%",
                                    "76.575%",
                                    "80.605%",
                                    "85.643%",
                                    "90.68%",
                                    "95.718%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "38.855%",
                                    "41.769%",
                                    "44.684%",
                                    "48.569%",
                                    "51.483%",
                                    "54.397%",
                                    "58.283%",
                                    "62.168%",
                                    "66.054%",
                                    "69.939%",
                                    "73.825%",
                                    "77.71%",
                                    "82.567%",
                                    "87.424%",
                                    "92.281%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "48.878%",
                                    "52.543%",
                                    "56.209%",
                                    "61.097%",
                                    "64.763%",
                                    "68.429%",
                                    "73.316%",
                                    "78.204%",
                                    "83.092%",
                                    "87.98%",
                                    "92.867%",
                                    "97.755%",
                                    "103.865%",
                                    "109.975%",
                                    "116.084%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "64.917%",
                                    "69.786%",
                                    "74.654%",
                                    "81.146%",
                                    "86.015%",
                                    "90.883%",
                                    "97.375%",
                                    "103.867%",
                                    "110.359%",
                                    "116.85%",
                                    "123.342%",
                                    "129.834%",
                                    "137.948%",
                                    "146.063%",
                                    "154.177%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "123.12%",
                                    "132.354%",
                                    "141.588%",
                                    "153.9%",
                                    "163.134%",
                                    "172.368%",
                                    "184.68%",
                                    "196.992%",
                                    "209.304%",
                                    "221.616%",
                                    "233.928%",
                                    "246.24%",
                                    "261.63%",
                                    "277.02%",
                                    "292.41%"
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
                        "Num": 1,
                        "Desc": "Xianyun enters the Cloud Transmogrification state, in which she will not take Fall DMG, and uses Skyladder once.<br>In this state, her Plunging Attack will be converted into Driftcloud Wave instead, which deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> and ends the Cloud Transmogrification state. This DMG is considered Plunging Attack DMG.<br>Each use of Skyladder while in this state increases the DMG and AoE of the next Driftcloud Wave used.<br><br><color style='color:#FFD780;'>Skyladder</color><br>Can be used while in mid-air. Xianyun leaps forward, dealing <color style='color:#80FFD7;'>Anemo DMG</color> to targets along her path.<br>During each Cloud Transmogrification state Xianyun enters, Skyladder may be used up to 3 times and 1 instance of Skyladder DMG can be dealt to any one opponent.<br>If Skyladder is not used again in a short period, the Cloud Transmogrification state will be canceled.<br><br>If Xianyun does not use Driftcloud Wave while in this state, the next CD of White Clouds at Dawn will be decreased by 3s.<br><br><i>Do not shake Cloud Retainer's hand too tightly; cranes are quite adept at gripping.</i>",
                        "Icon": "Skill_S_Liuyun_01",
                        "Lock": 8.0,
                        "Name": "White Clouds at Dawn",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "24.8%",
                                    "26.66%",
                                    "28.52%",
                                    "31.0%",
                                    "32.86%",
                                    "34.72%",
                                    "37.2%",
                                    "39.68%",
                                    "42.16%",
                                    "44.64%",
                                    "47.12%",
                                    "49.6%",
                                    "52.7%",
                                    "55.8%",
                                    "58.9%"
                                ]
                            },
                            {
                                "Desc": "Driftcloud Wave DMG",
                                "ParamLevelList": [
                                    "116.0%/148.0%/337.6%",
                                    "124.7%/159.1%/362.92%",
                                    "133.4%/170.2%/388.24%",
                                    "145.0%/185.0%/422.0%",
                                    "153.7%/196.1%/447.32%",
                                    "162.4%/207.2%/472.64%",
                                    "174.0%/222.0%/506.4%",
                                    "185.6%/236.8%/540.16%",
                                    "197.2%/251.6%/573.92%",
                                    "208.8%/266.4%/607.68%",
                                    "220.4%/281.2%/641.44%",
                                    "232.0%/296.0%/675.2%",
                                    "246.5%/314.5%/717.4%",
                                    "261.0%/333.0%/759.6%",
                                    "275.5%/351.5%/801.8%"
                                ]
                            },
                            {
                                "Desc": "CD",
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
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Brings forth a sacred breeze that deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> and heals all nearby characters based on Xianyun's ATK. It will also summon the \"Starwicker\" mechanism.<br><br><color style='color:#FFD780;'>Starwicker</color><br> · Continuously follows the active character and periodically heals all nearby characters based on Xianyun's ATK.<br> · Starts with 8 stacks of Adeptal Assistance. While Adeptal Assistance is active, nearby active characters will have their jump height increased.<br> · When the active character completes a Plunging Attack, Starwicker will consume 1 stack of Adeptal Assistance and deal <color style='color:#80FFD7;'>AoE Anemo DMG</color>.<br>Only 1 Starwicker can exist simultaneously.<br><br><i>This is the newest invention in the \"Lunastar Artifices\" series, of which previous creations include the Supreme Cuisine Machine, the Snowdrift Mechanism, Supreme Housekeeping Machine, the Floating Toting Device, and the Bloom Pruner. This series was intended for young humans Cloud Retainer held in great esteem, and so was not designed with a certain half-adeptus in mind. However, when offered Starwicker, a certain female disciple of hers had these emotionless words to say: \"No thank you.\"<br>Cloud Retainer thus had no choice but to keep it herself.</i>",
                        "Icon": "Skill_E_Liuyun_01",
                        "Lock": 15.0,
                        "Name": "Stars Gather at Dusk",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "108.0%",
                                    "116.1%",
                                    "124.2%",
                                    "135.0%",
                                    "143.1%",
                                    "151.2%",
                                    "162.0%",
                                    "172.8%",
                                    "183.6%",
                                    "194.4%",
                                    "205.2%",
                                    "216.0%",
                                    "229.5%",
                                    "243.0%",
                                    "256.5%"
                                ]
                            },
                            {
                                "Desc": "Starwicker DMG",
                                "ParamLevelList": [
                                    "39.2%",
                                    "42.14%",
                                    "45.08%",
                                    "49.0%",
                                    "51.94%",
                                    "54.88%",
                                    "58.8%",
                                    "62.72%",
                                    "66.64%",
                                    "70.56%",
                                    "74.48%",
                                    "78.4%",
                                    "83.3%",
                                    "88.2%",
                                    "93.1%"
                                ]
                            },
                            {
                                "Desc": "Healing",
                                "ParamLevelList": [
                                    "92.16% ATK+577.78162",
                                    "99.072% ATK+635.56781",
                                    "105.984% ATK+698.16949",
                                    "115.2% ATK+765.58673",
                                    "122.112% ATK+837.81952",
                                    "129.024% ATK+914.86774",
                                    "138.24% ATK+996.73151",
                                    "147.456% ATK+1083.41077",
                                    "156.672% ATK+1174.90564",
                                    "165.888% ATK+1271.21594",
                                    "175.104% ATK+1372.3418",
                                    "184.32% ATK+1478.28308",
                                    "195.84% ATK+1589.04004",
                                    "207.36% ATK+1704.61243",
                                    "218.88% ATK+1825.0"
                                ]
                            },
                            {
                                "Desc": "Continuous Healing",
                                "ParamLevelList": [
                                    "43.008% ATK+269.63141",
                                    "46.234% ATK+296.59833",
                                    "49.459% ATK+325.81244",
                                    "53.76% ATK+357.2738",
                                    "56.986% ATK+390.98242",
                                    "60.211% ATK+426.93829",
                                    "64.512% ATK+465.14139",
                                    "68.813% ATK+505.59171",
                                    "73.114% ATK+548.28931",
                                    "77.414% ATK+593.23413",
                                    "81.715% ATK+640.42615",
                                    "86.016% ATK+689.86548",
                                    "91.392% ATK+741.552",
                                    "96.768% ATK+795.48578",
                                    "102.144% ATK+851.66681"
                                ]
                            },
                            {
                                "Desc": "Duration",
                                "ParamLevelList": [
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "Each opponent hit by Driftcloud Waves from <color style='color:#80FFD7;'>White Clouds at Dawn</color> will grant all nearby party members 1 stack of Storm Pinion for 20s. Max 4 stacks. These will cause the characters' Plunging Attack CRIT Rate to increase by 4%/6%/8%/10% respectively.<br>Each Storm Pinion created by hitting an opponent has an independent duration.",
                        "Icon": "UI_Talent_S_Liuyun_05",
                        "Name": "Galefeather Pursuit"
                    },
                    {
                        "Desc": "When the Starwicker created by <color style='color:#80FFD7;'>Stars Gather at Dusk</color> has Adeptal Assistance stacks, nearby active characters' Plunging Attack shockwave DMG will be increased by 180% of Xianyun's ATK. The maximum DMG increase that can be achieved this way is 9,000.<br>Each Plunging Attack shockwave DMG instance can only apply this increased DMG effect to a single opponent. Each character can trigger this effect once every 0.4s.",
                        "Icon": "UI_Talent_S_Liuyun_06",
                        "Name": "Consider, the Adeptus in Her Realm"
                    },
                    {
                        "Desc": "Increases gliding SPD for your own party members by 15%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Liuyun_07",
                        "Name": "Crane Form"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "<color style='color:#80FFD7;'>White Clouds at Dawn</color> gains 1 additional charge.",
                        "Icon": "UI_Talent_S_Liuyun_01",
                        "Name": "Purifying Wind",
                        "Level": 1
                    },
                    {
                        "Desc": "After using a Skyladder from <color style='color:#80FFD7;'>White Clouds at Dawn</color>, Xianyun's ATK will be increased by 20% for 15s.<br>Additionally, the effects of the Passive Talent \"Consider, the Adeptus in Her Realm\" will be enhanced: When the Starwicker created by <color style='color:#80FFD7;'>Stars Gather at Dusk</color> has Adeptal Assistance stacks, nearby active characters' Plunging Attack shockwave DMG will be increased by 360% of Xianyun's ATK. The maximum DMG increase that can be achieved this way is 18,000.<br>Each Plunging Attack shockwave DMG instance can only apply this increased DMG effect to a single opponent. Each character can trigger this effect once every 0.4s.<br>You must first unlock the Passive Talent \"Consider, the Adeptus in Her Realm.\"",
                        "Icon": "UI_Talent_S_Liuyun_02",
                        "Name": "Aloof From the World",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Stars Gather at Dusk</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Liuyun_02",
                        "Name": "Creations of Star and Moon",
                        "Level": 3
                    },
                    {
                        "Desc": "After using Skyladder 1/2/3 times during one <color style='color:#80FFD7;'>White Clouds at Dawn</color> Cloud Transmogrification state, when a Driftcloud Wave unleashed during that instance hits an opponent, it will heal all nearby party members for 50%/80%/150% of Xianyun's ATK. This effect can be triggered once every 5s.",
                        "Icon": "UI_Talent_S_Liuyun_03",
                        "Name": "Mystery Millet Gourmet",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>White Clouds at Dawn</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Liuyun_01",
                        "Name": "Astride Rose-Colored Clouds",
                        "Level": 5
                    },
                    {
                        "Desc": "After Xianyun uses 1/2/3 Skyladders within one Cloud Transmogrification caused by <color style='color:#80FFD7;'>White Clouds at Dawn</color>, the CRIT DMG of a Driftcloud Wave created in this instance of Cloud Transmogrification will be increased by 15%/35%/70%.<br>Within 16s after Xianyun has used <color style='color:#80FFD7;'>Stars Gather at Dusk</color>, White Clouds at Dawn will not enter CD. This effect will be canceled once she has used White Clouds at Dawn 8 times.",
                        "Icon": "UI_Talent_S_Liuyun_04",
                        "Name": "Cloudkeeper's Spirit",
                        "Level": 6
                    }
                ]
            },
            "5": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Summons swirling winds to perform up to 4 attacks, dealing <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina and launches a Breeze Bolt in a straight line that deals <color style='color:#80FFD7;'>Anemo DMG</color> to opponents along its path.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Gathers the power of Anemo and plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "Lock": 15.0,
                        "Name": "Normal Attack: Word of Wind and Flower",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "40.302%",
                                    "43.325%",
                                    "46.348%",
                                    "50.378%",
                                    "53.401%",
                                    "56.423%",
                                    "60.454%",
                                    "64.484%",
                                    "68.514%",
                                    "72.544%",
                                    "76.575%",
                                    "80.605%",
                                    "85.643%",
                                    "90.68%",
                                    "95.718%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "38.855%",
                                    "41.769%",
                                    "44.684%",
                                    "48.569%",
                                    "51.483%",
                                    "54.397%",
                                    "58.283%",
                                    "62.168%",
                                    "66.054%",
                                    "69.939%",
                                    "73.825%",
                                    "77.71%",
                                    "82.567%",
                                    "87.424%",
                                    "92.281%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "48.878%",
                                    "52.543%",
                                    "56.209%",
                                    "61.097%",
                                    "64.763%",
                                    "68.429%",
                                    "73.316%",
                                    "78.204%",
                                    "83.092%",
                                    "87.98%",
                                    "92.867%",
                                    "97.755%",
                                    "103.865%",
                                    "109.975%",
                                    "116.084%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "64.917%",
                                    "69.786%",
                                    "74.654%",
                                    "81.146%",
                                    "86.015%",
                                    "90.883%",
                                    "97.375%",
                                    "103.867%",
                                    "110.359%",
                                    "116.85%",
                                    "123.342%",
                                    "129.834%",
                                    "137.948%",
                                    "146.063%",
                                    "154.177%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "123.12%",
                                    "132.354%",
                                    "141.588%",
                                    "153.9%",
                                    "163.134%",
                                    "172.368%",
                                    "184.68%",
                                    "196.992%",
                                    "209.304%",
                                    "221.616%",
                                    "233.928%",
                                    "246.24%",
                                    "261.63%",
                                    "277.02%",
                                    "292.41%"
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
                        "Num": 1,
                        "Desc": "Xianyun enters the Cloud Transmogrification state, in which she will not take Fall DMG, and uses Skyladder once.<br>In this state, her Plunging Attack will be converted into Driftcloud Wave instead, which deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> and ends the Cloud Transmogrification state. This DMG is considered Plunging Attack DMG.<br>Each use of Skyladder while in this state increases the DMG and AoE of the next Driftcloud Wave used.<br><br><color style='color:#FFD780;'>Skyladder</color><br>Can be used while in mid-air. Xianyun leaps forward, dealing <color style='color:#80FFD7;'>Anemo DMG</color> to targets along her path.<br>During each Cloud Transmogrification state Xianyun enters, Skyladder may be used up to 3 times and only 1 instance of Skyladder DMG can be dealt to any one opponent.<br>If Skyladder is not used again in a short period, the Cloud Transmogrification state will be canceled.<br><br>If Xianyun does not use Driftcloud Wave while in this state, the next CD of White Clouds at Dawn will be decreased by 3s.<br><br><i>Do not shake Cloud Retainer's hand too tightly; cranes are quite adept at gripping.</i>",
                        "Icon": "Skill_S_Liuyun_01",
                        "Lock": 8.0,
                        "Name": "White Clouds at Dawn",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "24.8%",
                                    "26.66%",
                                    "28.52%",
                                    "31.0%",
                                    "32.86%",
                                    "34.72%",
                                    "37.2%",
                                    "39.68%",
                                    "42.16%",
                                    "44.64%",
                                    "47.12%",
                                    "49.6%",
                                    "52.7%",
                                    "55.8%",
                                    "58.9%"
                                ]
                            },
                            {
                                "Desc": "Driftcloud Wave DMG",
                                "ParamLevelList": [
                                    "116.0%/148.0%/337.6%",
                                    "124.7%/159.1%/362.92%",
                                    "133.4%/170.2%/388.24%",
                                    "145.0%/185.0%/422.0%",
                                    "153.7%/196.1%/447.32%",
                                    "162.4%/207.2%/472.64%",
                                    "174.0%/222.0%/506.4%",
                                    "185.6%/236.8%/540.16%",
                                    "197.2%/251.6%/573.92%",
                                    "208.8%/266.4%/607.68%",
                                    "220.4%/281.2%/641.44%",
                                    "232.0%/296.0%/675.2%",
                                    "246.5%/314.5%/717.4%",
                                    "261.0%/333.0%/759.6%",
                                    "275.5%/351.5%/801.8%"
                                ]
                            },
                            {
                                "Desc": "CD",
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
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Brings forth a sacred breeze that deals <color style='color:#80FFD7;'>AoE Anemo DMG</color> and heals all nearby characters based on Xianyun's ATK. It will also summon the \"Starwicker\" mechanism.<br><br><color style='color:#FFD780;'>Starwicker</color><br> · Continuously follows the active character and periodically heals all nearby characters based on Xianyun's ATK.<br> · Starts with 8 stacks of Adeptal Assistance. While Adeptal Assistance is active, nearby active characters will have their jump height increased.<br> · When the active character completes a Plunging Attack, Starwicker will consume 1 stack of Adeptal Assistance and deal <color style='color:#80FFD7;'>AoE Anemo DMG</color>.<br>Only 1 Starwicker can exist simultaneously.<br><br><i>This is the newest invention in the \"Lunastar Artifices\" series, of which previous creations include the Supreme Cuisine Machine, the Snowdrift Mechanism, the Supreme Housekeeping Machine, the Floating Toting Device, and the Bloom Pruner. This series was intended for young humans Cloud Retainer held in great esteem, and so was not designed with a certain half-adeptus in mind. However, when offered Starwicker, a certain female disciple of hers had these emotionless words to say: \"No thank you.\"<br>Cloud Retainer thus had no choice but to keep it herself.</i>",
                        "Icon": "Skill_E_Liuyun_01",
                        "Lock": 15.0,
                        "Name": "Stars Gather at Dusk",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "108.0%",
                                    "116.1%",
                                    "124.2%",
                                    "135.0%",
                                    "143.1%",
                                    "151.2%",
                                    "162.0%",
                                    "172.8%",
                                    "183.6%",
                                    "194.4%",
                                    "205.2%",
                                    "216.0%",
                                    "229.5%",
                                    "243.0%",
                                    "256.5%"
                                ]
                            },
                            {
                                "Desc": "Starwicker DMG",
                                "ParamLevelList": [
                                    "39.2%",
                                    "42.14%",
                                    "45.08%",
                                    "49.0%",
                                    "51.94%",
                                    "54.88%",
                                    "58.8%",
                                    "62.72%",
                                    "66.64%",
                                    "70.56%",
                                    "74.48%",
                                    "78.4%",
                                    "83.3%",
                                    "88.2%",
                                    "93.1%"
                                ]
                            },
                            {
                                "Desc": "Healing",
                                "ParamLevelList": [
                                    "92.16% ATK+577.78162",
                                    "99.072% ATK+635.56781",
                                    "105.984% ATK+698.16949",
                                    "115.2% ATK+765.58673",
                                    "122.112% ATK+837.81952",
                                    "129.024% ATK+914.86774",
                                    "138.24% ATK+996.73151",
                                    "147.456% ATK+1083.41077",
                                    "156.672% ATK+1174.90564",
                                    "165.888% ATK+1271.21594",
                                    "175.104% ATK+1372.3418",
                                    "184.32% ATK+1478.28308",
                                    "195.84% ATK+1589.04004",
                                    "207.36% ATK+1704.61243",
                                    "218.88% ATK+1825.0"
                                ]
                            },
                            {
                                "Desc": "Continuous Healing",
                                "ParamLevelList": [
                                    "43.008% ATK+269.63141",
                                    "46.234% ATK+296.59833",
                                    "49.459% ATK+325.81244",
                                    "53.76% ATK+357.2738",
                                    "56.986% ATK+390.98242",
                                    "60.211% ATK+426.93829",
                                    "64.512% ATK+465.14139",
                                    "68.813% ATK+505.59171",
                                    "73.114% ATK+548.28931",
                                    "77.414% ATK+593.23413",
                                    "81.715% ATK+640.42615",
                                    "86.016% ATK+689.86548",
                                    "91.392% ATK+741.552",
                                    "96.768% ATK+795.48578",
                                    "102.144% ATK+851.66681"
                                ]
                            },
                            {
                                "Desc": "Duration",
                                "ParamLevelList": [
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s",
                                    "16.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "Each opponent hit by Driftcloud Waves from <color style='color:#FFD780;'>White Clouds at Dawn</color> will grant all nearby party members 1 stack of Storm Pinion for 20s. Max 4 stacks. These will cause the characters' Plunging Attack CRIT Rate to increase by 4%/6%/8%/10% respectively.<br>Each Storm Pinion created by hitting an opponent has an independent duration.",
                        "Icon": "UI_Talent_S_Liuyun_05",
                        "Name": "Galefeather Pursuit"
                    },
                    {
                        "Desc": "When the Starwicker created by <color style='color:#FFD780;'>Stars Gather at Dusk</color> has Adeptal Assistance stacks, nearby active characters' Plunging Attack shockwave DMG will be increased by 200% of Xianyun's ATK. The maximum DMG increase that can be achieved this way is 9,000.<br>Each Plunging Attack shockwave DMG instance can only apply this increased DMG effect to a single opponent. Each character can trigger this effect once every 0.4s.",
                        "Icon": "UI_Talent_S_Liuyun_06",
                        "Name": "Consider, the Adeptus in Her Realm"
                    },
                    {
                        "Desc": "Increases gliding SPD for your own party members by 15%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Liuyun_07",
                        "Name": "Crane Form"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "<color style='color:#FFD780;'>White Clouds at Dawn</color> gains 1 additional charge.",
                        "Icon": "UI_Talent_S_Liuyun_01",
                        "Name": "Purifying Wind",
                        "Level": 1
                    },
                    {
                        "Desc": "After using a Skyladder from <color style='color:#FFD780;'>White Clouds at Dawn</color>, Xianyun's ATK will be increased by 20% for 15s.<br>Additionally, the effects of the Passive Talent \"Consider, the Adeptus in Her Realm\" will be enhanced: When the Starwicker created by <color style='color:#FFD780;'>Stars Gather at Dusk</color> has Adeptal Assistance stacks, nearby active characters' Plunging Attack shockwave DMG will be increased by 400% of Xianyun's ATK. The maximum DMG increase that can be achieved this way is 18,000.<br>Each Plunging Attack shockwave DMG instance can only apply this increased DMG effect to a single opponent. Each character can trigger this effect once every 0.4s.<br>You must first unlock the Passive Talent \"Consider, the Adeptus in Her Realm.\"",
                        "Icon": "UI_Talent_S_Liuyun_02",
                        "Name": "Aloof From the World",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Stars Gather at Dusk</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Liuyun_02",
                        "Name": "Creations of Star and Moon",
                        "Level": 3
                    },
                    {
                        "Desc": "After using Skyladder 1/2/3 times during one <color style='color:#FFD780;'>White Clouds at Dawn</color> Cloud Transmogrification state, when a Driftcloud Wave unleashed during that instance hits an opponent, it will heal all nearby party members for 50%/80%/150% of Xianyun's ATK. This effect can be triggered once every 5s.",
                        "Icon": "UI_Talent_S_Liuyun_03",
                        "Name": "Mystery Millet Gourmet",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>White Clouds at Dawn</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Liuyun_01",
                        "Name": "Astride Rose-Colored Clouds",
                        "Level": 5
                    },
                    {
                        "Desc": "After Xianyun uses 1/2/3 Skyladders within one Cloud Transmogrification caused by <color style='color:#FFD780;'>White Clouds at Dawn</color>, the CRIT DMG of a Driftcloud Wave created in this instance of Cloud Transmogrification will be increased by 15%/35%/70%.<br>Within 16s after Xianyun has used <color style='color:#FFD780;'>Stars Gather at Dusk</color>, White Clouds at Dawn will not enter CD. This effect will be canceled once she has used White Clouds at Dawn 8 times.",
                        "Icon": "UI_Talent_S_Liuyun_04",
                        "Name": "Cloudkeeper's Spirit",
                        "Level": 6
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "清風散花の詞",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>清風を巻き起こして最大4段の連続攻撃を行い、<color style='color:#80FFD7;'>風元素ダメージ</color>を与える。<br><br><color style='color:#FFD780;'>重撃</color><br>一定のスタミナを消費して直線方向に飛ぶ一陣の清風の輪を生み出し、経路上の敵に<color style='color:#80FFD7;'>風元素ダメージ</color>を与える。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から風元素の力を凝集しながら落下し、地面に衝撃を与える。経路上の敵を攻撃し、落下時に<color style='color:#80FFD7;'>風元素範囲ダメージ</color>を与える。",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
                                "ParamLevelList": [
                                    "40.3024%",
                                    "43.3251%",
                                    "46.3478%",
                                    "50.378%",
                                    "53.4007%",
                                    "56.4234%",
                                    "60.4536%",
                                    "64.4838%",
                                    "68.5141%",
                                    "72.5443%",
                                    "76.5746%",
                                    "80.6048%",
                                    "85.6426%",
                                    "90.6804%",
                                    "95.7182%"
                                ]
                            },
                            {
                                "Desc": "2段ダメージ",
                                "ParamLevelList": [
                                    "38.8552%",
                                    "41.7693%",
                                    "44.6835%",
                                    "48.569%",
                                    "51.4831%",
                                    "54.3973%",
                                    "58.2828%",
                                    "62.1683%",
                                    "66.0538%",
                                    "69.9394%",
                                    "73.8249%",
                                    "77.7104%",
                                    "82.5673%",
                                    "87.4242%",
                                    "92.2811%"
                                ]
                            },
                            {
                                "Desc": "3段ダメージ",
                                "ParamLevelList": [
                                    "48.8776%",
                                    "52.5434%",
                                    "56.2092%",
                                    "61.097%",
                                    "64.7628%",
                                    "68.4286%",
                                    "73.3164%",
                                    "78.2042%",
                                    "83.0919%",
                                    "87.9797%",
                                    "92.8674%",
                                    "97.7552%",
                                    "103.8649%",
                                    "109.9746%",
                                    "116.0843%"
                                ]
                            },
                            {
                                "Desc": "4段ダメージ",
                                "ParamLevelList": [
                                    "64.9168%",
                                    "69.7856%",
                                    "74.6543%",
                                    "81.146%",
                                    "86.0148%",
                                    "90.8835%",
                                    "97.3752%",
                                    "103.8669%",
                                    "110.3586%",
                                    "116.8502%",
                                    "123.3419%",
                                    "129.8336%",
                                    "137.9482%",
                                    "146.0628%",
                                    "154.1774%"
                                ]
                            },
                            {
                                "Desc": "重撃ダメージ",
                                "ParamLevelList": [
                                    "123.12%",
                                    "132.354%",
                                    "141.588%",
                                    "153.9%",
                                    "163.134%",
                                    "172.368%",
                                    "184.68%",
                                    "196.992%",
                                    "209.304%",
                                    "221.616%",
                                    "233.928%",
                                    "246.24%",
                                    "261.63%",
                                    "277.02%",
                                    "292.41%"
                                ]
                            },
                            {
                                "Desc": "重撃スタミナ消費",
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
                                "Desc": "落下期間のダメージ",
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
                                "Desc": "低空/高空落下攻撃ダメージ",
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
                        "Name": "朝翔の鶴雲",
                        "Desc": "閑雲は鶴雲幻化状態に入り、落下ダメージを受けなくなり、天梯昇りを1回発動する。<br>この状態の閑雲の落下攻撃は閑雲衝撃波となり、<color style='color:#80FFD7;'>風元素範囲ダメージ</color>を与え、鶴雲幻化状態を終了する。このダメージは、落下攻撃ダメージとして見なされる。<br>この状態で天梯昇りを発動するたび、次の閑雲衝撃波のダメージと範囲がアップする。<br><br><color style='color:#FFD780;'>天梯昇り</color><br>空中で発動可能。閑雲は前方に跳躍し、経路上の目標に<color style='color:#80FFD7;'>風元素ダメージ</color>を与える。<br>1回の鶴雲幻化状態で、天梯昇りは最大3回発動可能であり、かつ天梯昇りのダメージを与えられるのは敵1体につき1回のみ。<br>しばらく天梯昇りを発動しなかった場合、鶴雲幻化状態は解除される。<br><br>鶴雲幻化状態の間に閑雲衝撃波を発動しなかった場合、朝翔の鶴雲のクールタイム-3秒。<br><br><i>留雲借風真君の手を握る勇気はない。何せ、それは「仙人掌」なのだから。</i>",
                        "Icon": "Skill_S_Liuyun_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "24.8%",
                                    "26.66%",
                                    "28.52%",
                                    "31.0%",
                                    "32.86%",
                                    "34.72%",
                                    "37.2%",
                                    "39.68%",
                                    "42.16%",
                                    "44.64%",
                                    "47.12%",
                                    "49.6%",
                                    "52.7%",
                                    "55.8%",
                                    "58.9%"
                                ]
                            },
                            {
                                "Desc": "閑雲衝撃波のダメージ",
                                "ParamLevelList": [
                                    "116.0%/148.0%/337.6%",
                                    "124.7%/159.1%/362.92%",
                                    "133.4%/170.2%/388.24%",
                                    "145.0%/185.0%/422.0%",
                                    "153.7%/196.1%/447.32%",
                                    "162.4%/207.2%/472.64%",
                                    "174.0%/222.0%/506.4%",
                                    "185.6%/236.8%/540.16%",
                                    "197.2%/251.6%/573.92%",
                                    "208.8%/266.4%/607.68%",
                                    "220.4%/281.2%/641.44%",
                                    "232.0%/296.0%/675.2%",
                                    "246.5%/314.5%/717.4%",
                                    "261.0%/333.0%/759.6%",
                                    "275.5%/351.5%/801.8%"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
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
                            }
                        ]
                    },
                    {
                        "Name": "夕集の竹星",
                        "Desc": "軽やかに仙風を呼び寄せて<color style='color:#80FFD7;'>風元素範囲ダメージ</color>を与え、周囲のチーム全員のHPを回復する。回復量は閑雲の攻撃力によって決まる。また、仕掛け「竹星」を召喚する。<br><br><color style='color:#FFD780;'>竹星</color><br> · フィールド上のキャラクターについていき、一定時間ごとに周囲のチーム全員のHPを回復する。回復量は閑雲の攻撃力によって決まる。<br> · 召喚時、補助仙力を8持つ。補助仙力がある時、周囲のフィールド上キャラクターのジャンプ力がアップする。<br> · フィールド上のキャラクターが落下攻撃を完了させると、竹星は補助仙力を1消費して、<color style='color:#80FFD7;'>風元素範囲ダメージ</color>を与える。<br>フィールド上で竹星は同時に1体のみ存在可能。<br><br><i>これはからくり調理神器、雪上滑走追風神器、雑務清掃神器、流木運搬神器、花羽葉月神機に続く新たな発明であり、「星月造化」シリーズに属している。このシリーズは認めた人の子に贈るために作ったものであり、某半仙の分は用意していなかった。しかし残念ながら、竹星を見たとある女弟子は無表情でこう言った——「いらぬ。」<br>留雲は仕方なく、竹星を己の手元に置くことにした。</i>",
                        "Icon": "Skill_E_Liuyun_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "108.0%",
                                    "116.1%",
                                    "124.2%",
                                    "135.0%",
                                    "143.1%",
                                    "151.2%",
                                    "162.0%",
                                    "172.8%",
                                    "183.6%",
                                    "194.4%",
                                    "205.2%",
                                    "216.0%",
                                    "229.5%",
                                    "243.0%",
                                    "256.5%"
                                ]
                            },
                            {
                                "Desc": "竹星のダメージ",
                                "ParamLevelList": [
                                    "39.2%",
                                    "42.14%",
                                    "45.08%",
                                    "49.0%",
                                    "51.94%",
                                    "54.88%",
                                    "58.8%",
                                    "62.72%",
                                    "66.64%",
                                    "70.56%",
                                    "74.48%",
                                    "78.4%",
                                    "83.3%",
                                    "88.2%",
                                    "93.1%"
                                ]
                            },
                            {
                                "Desc": "回復量",
                                "ParamLevelList": [
                                    "攻撃力92.16%+577.7816",
                                    "攻撃力99.072%+635.5678",
                                    "攻撃力105.984%+698.1695",
                                    "攻撃力115.2%+765.58673",
                                    "攻撃力122.112%+837.8195",
                                    "攻撃力129.024%+914.86774",
                                    "攻撃力138.24%+996.7315",
                                    "攻撃力147.456%+1083.4108",
                                    "攻撃力156.672%+1174.9056",
                                    "攻撃力165.888%+1271.216",
                                    "攻撃力175.104%+1372.3418",
                                    "攻撃力184.32%+1478.2831",
                                    "攻撃力195.84%+1589.04",
                                    "攻撃力207.36%+1704.6124",
                                    "攻撃力218.88%+1825.0"
                                ]
                            },
                            {
                                "Desc": "継続回復量",
                                "ParamLevelList": [
                                    "攻撃力43.008%+269.6314",
                                    "攻撃力46.2336%+296.59833",
                                    "攻撃力49.4592%+325.81244",
                                    "攻撃力53.76%+357.2738",
                                    "攻撃力56.9856%+390.98242",
                                    "攻撃力60.2112%+426.9383",
                                    "攻撃力64.512%+465.1414",
                                    "攻撃力68.8128%+505.5917",
                                    "攻撃力73.1136%+548.2893",
                                    "攻撃力77.4144%+593.23413",
                                    "攻撃力81.7152%+640.42615",
                                    "攻撃力86.016%+689.8655",
                                    "攻撃力91.392%+741.552",
                                    "攻撃力96.768%+795.4858",
                                    "攻撃力102.144%+851.6668"
                                ]
                            },
                            {
                                "Desc": "継続時間",
                                "ParamLevelList": [
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒",
                                    "16秒"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒",
                                    "18秒"
                                ]
                            },
                            {
                                "Desc": "元素エネルギー",
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
                        "Name": "白羽高くして祥風を追う",
                        "Desc": "<color style='color:#FFD780;'>朝翔の鶴雲</color>の閑雲衝撃波が敵に命中するたび、周囲チーム全員に継続時間20秒、最大4層まで重ね掛け可能の「風翎」効果を1層与える。「風翎」効果を与えられたキャラクターは、落下攻撃の会心率が4%/6%/8%/10%アップする。<br>それぞれの敵に命中したことで発生する「風翎」の継続時間は独立して計算される。",
                        "Icon": "UI_Talent_S_Liuyun_05"
                    },
                    {
                        "Name": "かの姿、洞府の仙人を彷彿す",
                        "Desc": "<color style='color:#FFD780;'>夕集の竹星</color>の「竹星」の補助仙力が残っている時、周囲のフィールド上キャラクターの着地時の落下攻撃によるダメージが、閑雲の攻撃力の200%分アップする。この方法によって、近くのフィールド上キャラクターの着地時の落下攻撃は最大9000までダメージアップ可能。<br>1回の着地における落下攻撃ダメージでは、上記ダメージアップ効果は1体の敵にのみ適用される。各キャラクターごとに、0.4秒毎に1回のみ発動可能。",
                        "Icon": "UI_Talent_S_Liuyun_06"
                    },
                    {
                        "Name": "鶴の如く",
                        "Desc": "チーム内自身キャラクターの滑翔時の移動速度+15%。<br>同じ効果を持つ固有天賦との重ね掛け不可。",
                        "Icon": "UI_Talent_S_Liuyun_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "因縁を晴らす借風",
                        "Desc": "<color style='color:#FFD780;'>朝翔の鶴雲</color>の使用可能回数+1。",
                        "Icon": "UI_Talent_S_Liuyun_01"
                    },
                    {
                        "Level": 2,
                        "Name": "俗世を離れた鶴鳴",
                        "Desc": "<color style='color:#FFD780;'>朝翔の鶴雲</color>の天梯昇りを発動後、閑雲の攻撃力+20%、継続時間15秒。<br>また、固有天賦「かの姿、洞府の仙人を彷彿す」の効果は以下のように強化される。<color style='color:#FFD780;'>夕集の竹星</color>の「竹星」の補助仙力が残っている時、周囲のフィールド上キャラクターの着地時の落下攻撃によるダメージが、閑雲の攻撃力の400%分アップする。この方法によって、近くのフィールド上キャラクターの着地時の落下攻撃は最大18000までダメージアップ可能。<br>1回の着地における落下攻撃ダメージでは、上記ダメージアップ効果は1体の敵にのみ適用される。各キャラクターごとに、0.4秒毎に1回のみ発動可能。<br>固有天賦「かの姿、洞府の仙人を彷彿す」を解放する必要がある。",
                        "Icon": "UI_Talent_S_Liuyun_02"
                    },
                    {
                        "Level": 3,
                        "Name": "造化に在りし星月",
                        "Desc": "<color style='color:#FFD780;'>夕集の竹星</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Liuyun_02"
                    },
                    {
                        "Level": 4,
                        "Name": "黍珠割烹の妙",
                        "Desc": "1回の<color style='color:#FFD780;'>朝翔の鶴雲</color>での鶴雲幻化中、天梯昇りを1/2/3回発動すると、その幻化状態の間、閑雲衝撃波が敵に命中した時に周囲のチーム全員のHPを回復する。回復量はそれぞれ、閑雲の攻撃力の50%/80%/150%に相当。この効果は5秒毎に1回のみ発動可能。",
                        "Icon": "UI_Talent_S_Liuyun_03"
                    },
                    {
                        "Level": 5,
                        "Name": "彩雲を巡りし足取",
                        "Desc": "<color style='color:#FFD780;'>朝翔の鶴雲</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Liuyun_01"
                    },
                    {
                        "Level": 6,
                        "Name": "留雲を仙と覚る",
                        "Desc": "1回の<color style='color:#FFD780;'>朝翔の鶴雲</color>での鶴雲幻化中、天梯昇りを1/2/3回発動すると、その幻化状態の間、閑雲衝撃波の会心ダメージが15%/35%/70%アップする。<br>閑雲が<color style='color:#FFD780;'>夕集の竹星</color>を発動した後の16秒間、朝翔の鶴雲がクールタイムに入らなくなる。この効果は閑雲が朝翔の鶴雲を8回発動すると解除される。",
                        "Icon": "UI_Talent_S_Liuyun_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Liuyun": {
        "AttackList": [
            {
                "Skill": "Skyladder Trail",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "",
                "Element": "Wind",
                "GU": 0.0,
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
                "StrikeType": "Default",
                "AttackType": "Range"
            },
            {
                "Skill": "Driftcloud Wave Lv1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.0,
                        5.0
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 75.0,
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
                "Skill": "Driftcloud Wave Lv2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        5.0,
                        5.5
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 75.0,
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
                "Skill": "Driftcloud Wave Lv3",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        6.5,
                        6.0
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 150.0,
                "ForceType": 3,
                "Force": [
                    100.0,
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
                "Skill": "Burst Opening",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        7.0,
                        4.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Wind",
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
                "Skill": "Burst Coordinated",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.8,
                        3.2
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Elem Burst",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Wind",
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
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        0.8
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 7.6,
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
                        0.8
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 7.3,
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
                        0.8
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 9.2,
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
                "Skill": "Normal ATK 4",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 12.2,
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
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Charged ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 90.0,
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
                "Element": "Wind",
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
                "Element": "Wind",
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
                "Element": "Wind",
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
            }
        ]
    }
}