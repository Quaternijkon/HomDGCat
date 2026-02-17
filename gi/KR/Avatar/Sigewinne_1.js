// Auto Generated

var _AvatarDataConfig_ = {
    "Sigewinne": {
        "BallList": [
            {
                "When": "E Bubblebalm hit monster",
                "DropArray": [
                    {
                        "Num": 4,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD: Every Bubblebalm can trigger once",
                "CD": 0.0
            }
        ],
        "EndureList": [
            {
                "Skill": "E Hold Aiming (No Shield)",
                "Endure": 0.3
            },
            {
                "Skill": "E Hold Aiming (Shielded)",
                "Endure": 0
            },
            {
                "Skill": "Q Spraying",
                "Endure": 0
            }
        ],
        "WindZoneList": [],
        "OtherDataList": [
            "<b>Interaction with Furina</b><br>Sigewinne's Passive buffs Furina, Furina buffs herself by *140% by consuming teammates' HP. The eventual DMG is:<br><b>[ (Salon member base DMG) * 1.4 + (Sigewinne Buff) ]</b>",
            "<b>Particle Generation:</b><br>- Bubblebalm hits a monster, generate 4 Hydro Particles.<br>- Every Bubblebalm can trigger this once.",
            "<b>ICD:</b><br>- Q applies 1GU, hits once every 0.4s, applies once every 1.9s, so applies 1 per 5 hits<br>- Bubblebalm 1GU, can apply only once every 2s<br>- Mini-Stration Bubble 1GU, shares ICD with fully charged aim: can apply only once every 2s",
            "<b>Interruption Resistance:</b><br>- E aiming without shield: 0.3 = Xingqiu Q<br>- E aiming with shield: 0 = cannot be intrerupted<br>- Q spraying: 0 = cannot be intrerupted",
            "Upgraded Bubblebalm's 5% DMG increase is added to the <b>DMG Bonus multiplier</b><br>One stack of Passive's teammate E DMG increase is consumed for every enemy hit"
        ]
    }
}

var _AvatarMats_ = {
    "Sigewinne": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104121": 1,
                "101233": 3,
                "112080": 3
            },
            {
                "202": 40000,
                "104122": 3,
                "113057": 2,
                "101233": 10,
                "112080": 15
            },
            {
                "202": 60000,
                "104122": 6,
                "113057": 4,
                "101233": 20,
                "112081": 12
            },
            {
                "202": 80000,
                "104123": 3,
                "113057": 8,
                "101233": 30,
                "112081": 18
            },
            {
                "202": 100000,
                "104123": 6,
                "113057": 12,
                "101233": 45,
                "112082": 12
            },
            {
                "202": 120000,
                "104124": 6,
                "113057": 20,
                "101233": 60,
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
                "113055": 1
            },
            {
                "202": 260000,
                "104340": 6,
                "112082": 6,
                "113055": 1
            },
            {
                "202": 450000,
                "104340": 12,
                "112082": 9,
                "113055": 2
            },
            {
                "202": 700000,
                "104340": 16,
                "112082": 12,
                "113055": 2,
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
                "113055": 1
            },
            {
                "202": 260000,
                "104340": 6,
                "112082": 6,
                "113055": 1
            },
            {
                "202": 450000,
                "104340": 12,
                "112082": 9,
                "113055": 2
            },
            {
                "202": 700000,
                "104340": 16,
                "112082": 12,
                "113055": 2,
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
                "113055": 1
            },
            {
                "202": 260000,
                "104340": 6,
                "112082": 6,
                "113055": 1
            },
            {
                "202": 450000,
                "104340": 12,
                "112082": 9,
                "113055": 2
            },
            {
                "202": 700000,
                "104340": 16,
                "112082": 12,
                "113055": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Sigewinne": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Targeted Treatment",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive attacks with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, the power of Hydro will continually accumulate on the arrow. After fully charging, Sigewinne will periodically fire slow-moving Mini-Stration Bubbles toward the target, dealing <color style='color:#80C0FF;'>Hydro DMG</color>. When released, an arrow imbued with torrential energy will deal <color style='color:#80C0FF;'>Hydro DMG</color> to the opponent hit.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
                                "ParamLevelList": [
                                    "52.614%",
                                    "56.897%",
                                    "61.179%",
                                    "67.297%",
                                    "71.579%",
                                    "76.474%",
                                    "83.203%",
                                    "89.933%",
                                    "96.663%",
                                    "104.004%",
                                    "111.346%",
                                    "118.687%",
                                    "126.029%",
                                    "133.37%",
                                    "140.712%"
                                ]
                            },
                            {
                                "Desc": "2단 공격 피해",
                                "ParamLevelList": [
                                    "51.071%",
                                    "55.228%",
                                    "59.385%",
                                    "65.324%",
                                    "69.48%",
                                    "74.231%",
                                    "80.764%",
                                    "87.296%",
                                    "93.828%",
                                    "100.954%",
                                    "108.081%",
                                    "115.207%",
                                    "122.333%",
                                    "129.459%",
                                    "136.585%"
                                ]
                            },
                            {
                                "Desc": "3단 공격 피해",
                                "ParamLevelList": [
                                    "78.291%",
                                    "84.663%",
                                    "91.036%",
                                    "100.14%",
                                    "106.512%",
                                    "113.795%",
                                    "123.809%",
                                    "133.823%",
                                    "143.837%",
                                    "154.761%",
                                    "165.685%",
                                    "176.61%",
                                    "187.534%",
                                    "198.459%",
                                    "209.383%"
                                ]
                            },
                            {
                                "Desc": "낙하 기간 피해",
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
                                "Desc": "저공/고공 추락 충격 피해",
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
                            },
                            {
                                "Desc": "조준 사격",
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
                                "Desc": "1단 차지 조준 사격",
                                "ParamLevelList": [
                                    "114.08%",
                                    "122.636%",
                                    "142.6%",
                                    "155.0%",
                                    "151.156%",
                                    "159.712%",
                                    "171.12%",
                                    "182.528%",
                                    "193.936%",
                                    "205.344%",
                                    "216.752%",
                                    "228.16%",
                                    "242.42%",
                                    "256.68%",
                                    "270.94%"
                                ]
                            },
                            {
                                "Desc": "특수 방울 피해",
                                "ParamLevelList": [
                                    "22.816%",
                                    "24.527%",
                                    "28.52%",
                                    "31.0%",
                                    "30.231%",
                                    "31.942%",
                                    "34.224%",
                                    "36.506%",
                                    "38.787%",
                                    "41.069%",
                                    "43.35%",
                                    "45.632%",
                                    "48.484%",
                                    "51.336%",
                                    "54.188%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Rebound Hydrotherapy",
                        "Desc": "Blows a <color style='color:#FFD780;'>Bolstering Bubblebalm</color> that can stimulate blood flow and help patients drift off to sleep using a bubblegun specially made in the Fortress of Meropide.<br>Bolstering Bubblebalms will bounce between nearby opponents, dealing <color style='color:#80C0FF;'>Hydro DMG</color> based on Sigewinne's max HP to opponents it hits. When it hits an opponent, it will restore HP to all nearby party members except Sigewinne herself. The amount healed is based on Sigewinne's max HP. After bouncing 5 times, the Bolstering Bubblebalm will disappear and restore HP to Sigewinne herself based on her own max HP value.<br>When no opponents are present, the Bolstering Bubblebalm will bounce nearby. Only one Bolstering Bubblebalm created by a Sigewinne may exist at once.<br>Hold the skill to use it in a different manner.<br><br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode, and blow an even bigger, even more breathtaking Bolstering Bubblebalm! The Bolstering Bubblebalm will grow bigger the longer the skill is Held, until it grows in size twice. For each tier in size it grows, the DMG it deals to opponents it hits increases by 5%, and the healing provided to nearby characters increases by 5%.<br>After weaker opponents are hit by big Bolstering Bubblebalms, they will be imprisoned and will be unable to move. When big Bolstering Bubblebalms bounce, they will drop down a tier in size, until they return to being normal Bolstering Bubblebalms.<br><br>In addition, 2 Sourcewater Droplets will be created near Sigewinne when she uses Rebound Hydrotherapy. Each Sourcewater Droplet Sigewinne absorbs will grant her a Bond of Life worth 10% of her Max HP.<br>When Sigewinne's Bond of Life is cleared, she regains 1 Elemental Energy for every 2,000 HP worth of the Bond of Life that was cleared. Sigewinne can regain up to 5 Elemental Energy in this way.<br><br><color style='color:#FFD780;'>Arkhe: Ousia</color><br>Bolstering Bubblebalms periodically call down a Surging Blade on the position they hit an opponent, dealing Ousia-aligned <color style='color:#80C0FF;'>Hydro DMG</color> based on Sigewinne's max HP.<br><br><i>\"What do you think? Not only can this kind of hydrotherapy stimulate the circulatory system, but it can also cheer patients up, ooh, and that's not all, it can even help patients who ought to get some rest have a nice nap...\"</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 2.28%",
                                    "HP 최대치의 2.451%",
                                    "HP 최대치의 2.622%",
                                    "HP 최대치의 2.85%",
                                    "HP 최대치의 3.021%",
                                    "HP 최대치의 3.192%",
                                    "HP 최대치의 3.42%",
                                    "HP 최대치의 3.648%",
                                    "HP 최대치의 3.876%",
                                    "HP 최대치의 4.104%",
                                    "HP 최대치의 4.332%",
                                    "HP 최대치의 4.56%",
                                    "HP 최대치의 4.845%",
                                    "HP 최대치의 5.13%",
                                    "HP 최대치의 5.415%"
                                ]
                            },
                            {
                                "Desc": "파티원 치유량",
                                "ParamLevelList": [
                                    "HP 최대치의 2.8%+269.63141",
                                    "HP 최대치의 3.01%+296.5983",
                                    "HP 최대치의 3.22%+325.81244",
                                    "HP 최대치의 3.5%+357.2738",
                                    "HP 최대치의 3.71%+390.98242",
                                    "HP 최대치의 3.92%+426.93826",
                                    "HP 최대치의 4.2%+465.14136",
                                    "HP 최대치의 4.48%+505.59167",
                                    "HP 최대치의 4.76%+548.28925",
                                    "HP 최대치의 5.04%+593.23407",
                                    "HP 최대치의 5.32%+640.42615",
                                    "HP 최대치의 5.6%+689.86542",
                                    "HP 최대치의 5.95%+741.55194",
                                    "HP 최대치의 6.3%+795.48572",
                                    "HP 최대치의 6.65%+851.66675"
                                ]
                            },
                            {
                                "Desc": "종료 시 시그윈 자신에 대한 치유량",
                                "ParamLevelList": [
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0",
                                    "최대 HP의 50.0%+0.0"
                                ]
                            },
                            {
                                "Desc": "원천의 방울 습득 시 생명의 계약 획득",
                                "ParamLevelList": [
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%",
                                    "HP 최대치의 10.0%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 0.684%",
                                    "HP 최대치의 0.735%",
                                    "HP 최대치의 0.787%",
                                    "HP 최대치의 0.855%",
                                    "HP 최대치의 0.906%",
                                    "HP 최대치의 0.958%",
                                    "HP 최대치의 1.026%",
                                    "HP 최대치의 1.094%",
                                    "HP 최대치의 1.163%",
                                    "HP 최대치의 1.231%",
                                    "HP 최대치의 1.3%",
                                    "HP 최대치의 1.368%",
                                    "HP 최대치의 1.453%",
                                    "HP 최대치의 1.539%",
                                    "HP 최대치의 1.624%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 간격",
                                "ParamLevelList": [
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Super Saturated Syringing",
                        "Desc": "Take out a special Fortress of Meropide-made syringe and assault the area in front with waves of kindness and medicine, dealing <color style='color:#80C0FF;'>AoE Hydro DMG.</color><br>In addition, Sigewinne absorb up to 2 nearby Sourcewater Droplets within a certain range right before using the skill.<br><br><i>\"Hey, overdosing on medicine is no different from poison, you know, it's real dangerous! But patients need care and concern, and nobody can overdose on that!\"</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "지속 분수 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 11.771%",
                                    "HP 최대치의 12.654%",
                                    "HP 최대치의 13.536%",
                                    "HP 최대치의 14.714%",
                                    "HP 최대치의 15.596%",
                                    "HP 최대치의 16.479%",
                                    "HP 최대치의 17.656%",
                                    "HP 최대치의 18.833%",
                                    "HP 최대치의 20.01%",
                                    "HP 최대치의 21.187%",
                                    "HP 최대치의 22.365%",
                                    "HP 최대치의 23.542%",
                                    "HP 최대치의 25.013%",
                                    "HP 최대치의 26.484%",
                                    "HP 최대치의 27.956%"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                            },
                            {
                                "Desc": "",
                                "ParamLevelList": [
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "Requires Appropriate Rest",
                        "Desc": "Sigewinne grants herself the \"Semi-Strict Bedrest\" effect for 18s after using <color style='color:#FFD780;'>Rebound Hydrotherapy</color>: Sigewinne gains an 8% <color style='color:#80C0FF;'>Hydro DMG Bonus</color> and 10 stacks of Convalescence. When the Elemental Skills of your own characters on standby other than Sigewinne deal DMG, consume 1 stack of Convalescence, and increase the DMG dealt by this instance of Elemental Skill DMG. Every 1,000 HP Sigewinne has above 30,000 increases the DMG by 65. The maximum DMG increase for Elemental Skills that can be gained in this way is 1,800.",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "Detailed Diagnosis, Thorough Treatment",
                        "Desc": "Sigewinne gains a healing bonus based on the total current value of Bonds of Life on all party members. For each 1,000 HP worth of Bonds of Life on party members, Sigewinne gains a 3% Healing Bonus. The maximum Healing Bonus that can be obtained in this way is 30%.",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "Emergency Dose",
                        "Desc": "",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "\"Can the Happiest of Spirits Understand Anxiety?\"",
                        "Desc": "The first 3 bounces of <color style='color:#FFD780;'>Rebound Hydrotherapy</color>'s Bolstering Bubblebalm will not cause a larger Bubblebalm to become smaller, and it can bounce 3 times more.<br>Additionally, when a Bubblebalm bounces, it will grant Sigewinne 1 stack to her Convalescence tally. Must unlock the Passive Talent \"Requires Appropriate Rest\" first.",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "\"Can the Most Merciful of Spirits Defeat Its Foes?\"",
                        "Desc": "When using <color style='color:#FFD780;'>Rebound Hydrotherapy</color> and <color style='color:#FFD780;'>Super Saturated Syringing</color>, Sigewinne can create a Bubbly Shield worth 30% of her Max HP that absorbs <color style='color:#80C0FF;'>Hydro DMG</color> with 250% efficiency.<br>Additionally, when Rebound Hydrotherapy's Bolstering Bubblebalm or Super Saturated Syringing hits an opponent, that opponent's <color style='color:#80C0FF;'>Hydro RES</color> will be decreased by 35% for 8s.",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "\"Can the Healthiest of Spirits Cure Fevers?\"",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Rebound Hydrotherapy</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "\"Can the Loveliest of Spirits Keep Decay at Bay?\"",
                        "Desc": "The duration of <color style='color:#FFD780;'>Super Saturated Syringing</color> is extended by 3s.",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "\"Can the Most Joyful of Spirits Alleviate Agony?\"",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Super Saturated Syringing</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "\"Would the Most Radiant of Spirits Pray For Me?\"",
                        "Desc": "When Sigewinne performs healing, she will increase the CRIT Rate and CRIT DMG of her <color style='color:#FFD780;'>Super Saturated Syringing</color> based on her Max HP. Every 1,000 Max HP she has will increase CRIT Rate by 0.7% and CRIT DMG by 1.6% for 15s. The maximum increase achievable this way is 20% CRIT Rate and 110% CRIT DMG.",
                        "Icon": "UI_Talent_S_Sigewinne_04"
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Name": "일반 공격 · 표적 치료",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>최대 3번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>피해가 더 크고 정확한 <color style='color:#FFD780;'>조준 사격</color>을 한다.<br>조준 시 물 원소의 힘이 화살 촉에 계속해서 모인다. 조준 완료 후, 시그윈은 일정 시간마다 목표를 향해 천천히 이동하는 「관심 방울」을 발사해 <color style='color:#FFE699;'>물 원소 피해</color>를 준다. 발동 시, 격류로 가득 찬 화살이 적에게 명중하면 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 착지 시 범위 피해를 준다",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
                                "ParamLevelList": [
                                    "52.614%",
                                    "56.897%",
                                    "61.179%",
                                    "67.297%",
                                    "71.579%",
                                    "76.474%",
                                    "83.203%",
                                    "89.933%",
                                    "96.663%",
                                    "104.004%",
                                    "111.346%",
                                    "118.687%",
                                    "126.029%",
                                    "133.37%",
                                    "140.712%"
                                ]
                            },
                            {
                                "Desc": "2단 공격 피해",
                                "ParamLevelList": [
                                    "51.071%",
                                    "55.228%",
                                    "59.385%",
                                    "65.324%",
                                    "69.48%",
                                    "74.231%",
                                    "80.764%",
                                    "87.296%",
                                    "93.828%",
                                    "100.954%",
                                    "108.081%",
                                    "115.207%",
                                    "122.333%",
                                    "129.459%",
                                    "136.585%"
                                ]
                            },
                            {
                                "Desc": "3단 공격 피해",
                                "ParamLevelList": [
                                    "78.291%",
                                    "84.663%",
                                    "91.036%",
                                    "100.14%",
                                    "106.512%",
                                    "113.795%",
                                    "123.809%",
                                    "133.823%",
                                    "143.837%",
                                    "154.761%",
                                    "165.685%",
                                    "176.61%",
                                    "187.534%",
                                    "198.459%",
                                    "209.383%"
                                ]
                            },
                            {
                                "Desc": "조준 사격",
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
                                "Desc": "풀차지 조준 사격",
                                "ParamLevelList": [
                                    "114.08%",
                                    "122.636%",
                                    "142.6%",
                                    "155.0%",
                                    "151.156%",
                                    "159.712%",
                                    "171.12%",
                                    "182.528%",
                                    "193.936%",
                                    "205.344%",
                                    "216.752%",
                                    "228.16%",
                                    "242.42%",
                                    "256.68%",
                                    "270.94%"
                                ]
                            },
                            {
                                "Desc": "조준 사격",
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
                                "Desc": "관심 방울 피해",
                                "ParamLevelList": [
                                    "22.816%",
                                    "24.527%",
                                    "28.52%",
                                    "31.0%",
                                    "30.231%",
                                    "31.942%",
                                    "34.224%",
                                    "36.506%",
                                    "38.787%",
                                    "41.069%",
                                    "43.35%",
                                    "45.632%",
                                    "48.484%",
                                    "51.336%",
                                    "54.188%"
                                ]
                            },
                            {
                                "Desc": "낙하 기간 피해",
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
                            }
                        ]
                    },
                    {
                        "Name": "통통 물요법",
                        "Desc": "메로피드 요새 특제 방울을 사용해 혈액순환을 돕고 환자를 잠재우는 <color style='color:#FFD780;'>치료 방울</color>을 생성한다.<br>치료 방울은 주변에 있는 적 사이에 튕긴다. 치료 방울이 적에게 명중 시, 시그윈의 HP 최대치를 기반으로 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다. 또한 파티 내 자신을 제외한 모든 캐릭터의 HP를 회복시킨다. 회복량은 시그윈 HP 최대치의 영향을 받는다. 치료 방울은 다섯 번 튕긴 후, 사라지며, 사라질 때 시그윈 자신의 HP를 회복한다. 이때 회복량 역시 시그윈 HP 최대치의 영향을 받는다.<br>적이 없는 경우, 치료 방울은 주변에서 튕긴다. 시그윈이 창조한 치료 방울은 동시에 최대 1개 존재할 수 있다.<br>홀드 시, 각기 다른 방식으로 발동한다.<br><br><color style='color:#FFD780;'>홀드</color><br>조준을 통해 더 크고 더 강한 치료 방울을 만들어낸다! 치료 방울은 홀드 시간에 따라 커진다. 크기는 총 2단계로 구성되어 있으며, 단계당 치료 방울이 적에게 명중 시 주는 피해가 5%씩 증가하고, 주변에 있는 파티 내 캐릭터 HP 회복의 치유량이 5%씩 증가한다.<br>큰 치료 방울이 약한 적에게 명중하면, 대상은 물방울 안에 갇혀 행동할 수 없다. 큰 치료 방울은 기본 치료 방울이 될 때까지 튕길 때마다 1단계씩 하락한다.<br><br>또한 통통 물요법 발동 시, 시그윈 주변에 원천의 방울이 2개 성성된다. 원천의 방울 1개를 흡수할 때마다, 시그윈 자신에게 HP 최대치의 10%에 해당하는 생명의 계약을 부여한다.<br>시그윈의 생명의 계약이 제거될 시, 제거된 생명의 계약 2000pt당 자신의 원소 에너지를 1pt씩 회복한다. 해당 방식으로 최대 5pt 원소 에너지를 회복한다.<br><br><color style='color:#FFD780;'>아르케의 힘: 우시아</color><br>일정 시간마다 치료 방울이 명중한 위치에 솟구치는 칼날을 내려 시그윈의 HP 최대치에 기반한 우시아 성질의 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br><br><i>「이런 물 치료법 어때? 혈액 순환을 돕고 환자도 재밌어할 거야. 그리고 자야 할 환자를 푹 재울 수도 있지…」</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "치료 방울 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 2.28%",
                                    "HP 최대치의 2.451%",
                                    "HP 최대치의 2.622%",
                                    "HP 최대치의 2.85%",
                                    "HP 최대치의 3.021%",
                                    "HP 최대치의 3.192%",
                                    "HP 최대치의 3.42%",
                                    "HP 최대치의 3.648%",
                                    "HP 최대치의 3.876%",
                                    "HP 최대치의 4.104%",
                                    "HP 최대치의 4.332%",
                                    "HP 최대치의 4.56%",
                                    "HP 최대치의 4.845%",
                                    "HP 최대치의 5.13%",
                                    "HP 최대치의 5.415%"
                                ]
                            },
                            {
                                "Desc": "치료 방울 치유량",
                                "ParamLevelList": [
                                    "HP 최대치의 2.8%+269.63141",
                                    "HP 최대치의 3.01%+296.5983",
                                    "HP 최대치의 3.22%+325.81244",
                                    "HP 최대치의 3.5%+357.2738",
                                    "HP 최대치의 3.71%+390.98242",
                                    "HP 최대치의 3.92%+426.93826",
                                    "HP 최대치의 4.2%+465.14136",
                                    "HP 최대치의 4.48%+505.59167",
                                    "HP 최대치의 4.76%+548.28925",
                                    "HP 최대치의 5.04%+593.23407",
                                    "HP 최대치의 5.32%+640.42615",
                                    "HP 최대치의 5.6%+689.86542",
                                    "HP 최대치의 5.95%+741.55194",
                                    "HP 최대치의 6.3%+795.48572",
                                    "HP 최대치의 6.65%+851.66675"
                                ]
                            },
                            {
                                "Desc": "튕김 종료 치유량",
                                "ParamLevelList": [
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 0.684%",
                                    "HP 최대치의 0.735%",
                                    "HP 최대치의 0.787%",
                                    "HP 최대치의 0.855%",
                                    "HP 최대치의 0.906%",
                                    "HP 최대치의 0.958%",
                                    "HP 최대치의 1.026%",
                                    "HP 최대치의 1.094%",
                                    "HP 최대치의 1.163%",
                                    "HP 최대치의 1.231%",
                                    "HP 최대치의 1.3%",
                                    "HP 최대치의 1.368%",
                                    "HP 최대치의 1.453%",
                                    "HP 최대치의 1.539%",
                                    "HP 최대치의 1.624%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 간격",
                                "ParamLevelList": [
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "넘치는 정성의 주사",
                        "Desc": "메로피드 요새 특제 주사기로 전방에 정성과 약을 뿌려, 지속적인 <color style='color:#80C0FF;'>물 원소 범위 피해</color>를 준다.<br>또한 발동 시, 시그윈이 주변 일정 범위 내에 있는 원천의 방울을 최대 2개 흡수한다.<br><br><i>「이런, 과잉 약물은 독과 다름없어, 아주 위험하다구. 하지만 환자에게 필요한 관심과 보살핌은 아무리 많아도 부족하지」</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 11.771%",
                                    "HP 최대치의 12.654%",
                                    "HP 최대치의 13.536%",
                                    "HP 최대치의 14.714%",
                                    "HP 최대치의 15.596%",
                                    "HP 최대치의 16.479%",
                                    "HP 최대치의 17.656%",
                                    "HP 최대치의 18.833%",
                                    "HP 최대치의 20.01%",
                                    "HP 최대치의 21.187%",
                                    "HP 최대치의 22.365%",
                                    "HP 최대치의 23.542%",
                                    "HP 최대치의 25.013%",
                                    "HP 최대치의 26.484%",
                                    "HP 최대치의 27.956%"
                                ]
                            },
                            {
                                "Desc": "지속 시간",
                                "ParamLevelList": [
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Name": "적당한 휴식은 필수",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color> 발동 시, 시그윈은 자신에게 18초 동안 「반강제 안정」 효과를 부여한다: 지속 시간 동안 시그윈은 <color style='color:#80C0FF;'>물 원소 피해 보너스</color> 8%와 안정 카운트 10스택을 획득한다. 시그윈을 제외한 대기 중인 자신의 캐릭터의 원소전투 스킬이 피해를 주면 안정 카운트를 1스택 소모하고 이번 원소전투 스킬이 주는 피해량이 증가한다: 30000을 초과한 시그윈의 HP 최대치를 기반으로, 1000pt마다 피해가 65pt 증가한다. 해당 방식으로 이번 원소전투 스킬이 주는 피해가 최대 1800pt 증가한다",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "세심한 진료",
                        "Desc": "파티 내 모든 캐릭터의 현재 생명의 계약 총합을 기반으로 시그윈이 치유 보너스를 획득한다: 시그윈은 생명의 계약 1000pt마다 치유 보너스 3%를 획득한다. 해당 방식으로 최대 30%의 치유 보너스를 획득할 수 있다",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "긴급 투약",
                        "Desc": "",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「가장 즐거운 정령이여, 초조함을 풀어주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color> 치료 방울의 3번째 튕김까지 큰 치료 방울이 작아지지 않으며, 추가로 3번 튕긴다.<br>또한 치료 방울이 튕길 시, 시그윈에게 안정 카운트 1스택이 부여된다. 해당 효과는 고유 특성 「적당한 휴식은 필수」를 해금해야 한다",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「가장 인자한 정령이여, 원수와 화해시켜주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color>과 <color style='color:#FFD780;'>넘치는 정성의 주사</color> 발동 시, HP 최대치의 30%만큼 피해를 흡수하고 <color style='color:#80C0FF;'>물 원소 피해</color>에 대해 250%의 흡수 효과가 있는 물방울 보호막을 생성한다. 보호막은 발동이 완료될 때까지 지속된다.<br>또한 통통 물요법이 생성한 치료 방울이나 넘치는 정성의 주사가 적에게 명중 시, 해당 적의 <color style='color:#80C0FF;'>물 원소 내성</color>이 35% 감소한다. 지속 시간: 8초",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「가장 건강한 정령이여, 열병을 치료해주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "「가장 아름다운 정령이여, 노화를 멈춰주소서」",
                        "Desc": "<color style='color:#FFD780;'>넘치는 정성의 주사</color>의 지속 시간이 3초 연장된다",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「가장 행복한 요정이여, 고통을 지워주소서」",
                        "Desc": "<color style='color:#FFD780;'>넘치는 정성의 주사</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "「가장 찬란한 요정이여, 저를 위해 기도해주소서」",
                        "Desc": "시그윈이 치유 진행 시, HP 최대치를 기반으로 자신의 <color style='color:#FFD780;'>넘치는 정성의 주사</color>의 치명타 확률과 치명타 피해가 증가한다: HP 최대치 1000pt당 치명타 확률이 0.7%, 치명타 피해가 1.6% 증가한다. 지속 시간: 15초. 해당 방식으로 치명타 확률이 최대 20%, 치명타 피해가 최대 110% 증가한다",
                        "Icon": "UI_Talent_S_Sigewinne_04"
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Name": "일반 공격 · 표적 치료",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>최대 3번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>피해가 더 크고 정확한 <color style='color:#FFD780;'>조준 사격</color>을 한다.<br>조준 시 물 원소의 힘이 화살 촉에 계속해서 모인다. 차지 완료 후, 시그윈은 일정 시간마다 목표를 향해 천천히 이동하는 「관심 방울」을 발사해 <color style='color:#FFE699;'>물 원소 피해</color>를 준다. 발동 시, 격류로 가득 찬 화살이 적에게 명중하면 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 착지 시 범위 피해를 준다",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
                                "ParamLevelList": [
                                    "52.614%",
                                    "56.897%",
                                    "61.179%",
                                    "67.297%",
                                    "71.579%",
                                    "76.474%",
                                    "83.203%",
                                    "89.933%",
                                    "96.663%",
                                    "104.004%",
                                    "111.346%",
                                    "118.687%",
                                    "126.029%",
                                    "133.37%",
                                    "140.712%"
                                ]
                            },
                            {
                                "Desc": "2단 공격 피해",
                                "ParamLevelList": [
                                    "51.071%",
                                    "55.228%",
                                    "59.385%",
                                    "65.324%",
                                    "69.48%",
                                    "74.231%",
                                    "80.764%",
                                    "87.296%",
                                    "93.828%",
                                    "100.954%",
                                    "108.081%",
                                    "115.207%",
                                    "122.333%",
                                    "129.459%",
                                    "136.585%"
                                ]
                            },
                            {
                                "Desc": "3단 공격 피해",
                                "ParamLevelList": [
                                    "78.291%",
                                    "84.663%",
                                    "91.036%",
                                    "100.14%",
                                    "106.512%",
                                    "113.795%",
                                    "123.809%",
                                    "133.823%",
                                    "143.837%",
                                    "154.761%",
                                    "165.685%",
                                    "176.61%",
                                    "187.534%",
                                    "198.459%",
                                    "209.383%"
                                ]
                            },
                            {
                                "Desc": "조준 사격",
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
                                "Desc": "풀차지 조준 사격",
                                "ParamLevelList": [
                                    "114.08%",
                                    "122.636%",
                                    "142.6%",
                                    "155.0%",
                                    "151.156%",
                                    "159.712%",
                                    "171.12%",
                                    "182.528%",
                                    "193.936%",
                                    "205.344%",
                                    "216.752%",
                                    "228.16%",
                                    "242.42%",
                                    "256.68%",
                                    "270.94%"
                                ]
                            },
                            {
                                "Desc": "관심 방울 피해",
                                "ParamLevelList": [
                                    "22.816%",
                                    "24.527%",
                                    "28.52%",
                                    "31.0%",
                                    "30.231%",
                                    "31.942%",
                                    "34.224%",
                                    "36.506%",
                                    "38.787%",
                                    "41.069%",
                                    "43.35%",
                                    "45.632%",
                                    "48.484%",
                                    "51.336%",
                                    "54.188%"
                                ]
                            },
                            {
                                "Desc": "낙하 기간 피해",
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
                                "Desc": "저공/고공 추락 충격 피해",
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
                        "Name": "통통 물요법",
                        "Desc": "메로피드 요새 특제 방울을 사용해 혈액순환을 돕고 환자를 잠재우는 <color style='color:#FFD780;'>치료 방울</color>을 생성한다.<br>치료 방울은 주변에 있는 적 사이에 튕긴다. 치료 방울이 적에게 명중 시, 시그윈의 HP 최대치를 기반으로 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다. 또한 파티 내 시그윈 자신을 제외한 모든 캐릭터의 HP를 회복시킨다. 회복량은 시그윈 HP 최대치의 영향을 받는다.<br>치료 방울은 다섯 번 튕긴 후, 사라지며 시그윈의 HP 최대치를 기반으로 자신의 HP를 회복한다.<br>적이 없을 시, 치료 방울은 주변에서 튕긴다. 시그윈 자신이 창조한 치료 방울은 동시에 최대 1개 존재할 수 있다.<br>홀드 시, 각기 다른 방식으로 발동한다.<br><br><color style='color:#FFD780;'>홀드</color><br>조준을 통해 더 크고 더 강한 치료 방울을 만들어낸다!<br>치료 방울은 홀드 시간에 따라 커진다. 크기는 총 2단계로 구성되어 있으며, 단계당 치료 방울이 적에게 명중 시, 주는 피해가 5%씩 증가하고 회복량도 5%씩 증가한다. 치료 방울은 처음 치료 방울 크기가 될 때까지, 튕길 때마다 1단계씩 작아진다.<br>큰 치료 방울이 약한 적에게 명중하면, 대상은 방울 안에 갇혀 행동할 수 없다.<br><br>또한 통통 물요법 발동 시, 시그윈 주변에 원천의 방울이 2개 생성된다. 원천의 방울 1개를 흡수할 때마다, 시그윈 자신에게 HP 최대치의 10%에 해당하는 생명의 계약을 부여한다.<br>시그윈의 생명의 계약이 제거될 시, 제거된 생명의 계약 2000pt당 자신의 원소 에너지를 1pt씩 회복한다. 해당 방식으로 최대 5pt 원소 에너지를 회복한다.<br><br><color style='color:#FFD780;'>아르케의 힘: 우시아</color><br>일정 시간마다 치료 방울이 명중한 위치에 솟구치는 칼날을 내려 시그윈의 HP 최대치에 기반한 우시아 성질의 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br><br><i>「이런 물 치료법 어때? 혈액 순환을 돕고 환자도 재밌어할 거야. 그리고 자야 할 환자를 푹 재울 수도 있지…」</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "치료 방울 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 2.28%",
                                    "HP 최대치의 2.451%",
                                    "HP 최대치의 2.622%",
                                    "HP 최대치의 2.85%",
                                    "HP 최대치의 3.021%",
                                    "HP 최대치의 3.192%",
                                    "HP 최대치의 3.42%",
                                    "HP 최대치의 3.648%",
                                    "HP 최대치의 3.876%",
                                    "HP 최대치의 4.104%",
                                    "HP 최대치의 4.332%",
                                    "HP 최대치의 4.56%",
                                    "HP 최대치의 4.845%",
                                    "HP 최대치의 5.13%",
                                    "HP 최대치의 5.415%"
                                ]
                            },
                            {
                                "Desc": "치료 방울 치유량",
                                "ParamLevelList": [
                                    "HP 최대치의 2.8%+269.63141",
                                    "HP 최대치의 3.01%+296.5983",
                                    "HP 최대치의 3.22%+325.81244",
                                    "HP 최대치의 3.5%+357.2738",
                                    "HP 최대치의 3.71%+390.98242",
                                    "HP 최대치의 3.92%+426.93826",
                                    "HP 최대치의 4.2%+465.14136",
                                    "HP 최대치의 4.48%+505.59167",
                                    "HP 최대치의 4.76%+548.28925",
                                    "HP 최대치의 5.04%+593.23407",
                                    "HP 최대치의 5.32%+640.42615",
                                    "HP 최대치의 5.6%+689.86542",
                                    "HP 최대치의 5.95%+741.55194",
                                    "HP 최대치의 6.3%+795.48572",
                                    "HP 최대치의 6.65%+851.66675"
                                ]
                            },
                            {
                                "Desc": "튕김 종료 치유량",
                                "ParamLevelList": [
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 0.684%",
                                    "HP 최대치의 0.735%",
                                    "HP 최대치의 0.787%",
                                    "HP 최대치의 0.855%",
                                    "HP 최대치의 0.906%",
                                    "HP 최대치의 0.958%",
                                    "HP 최대치의 1.026%",
                                    "HP 최대치의 1.094%",
                                    "HP 최대치의 1.163%",
                                    "HP 최대치의 1.231%",
                                    "HP 최대치의 1.3%",
                                    "HP 최대치의 1.368%",
                                    "HP 최대치의 1.453%",
                                    "HP 최대치의 1.539%",
                                    "HP 최대치의 1.624%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 간격",
                                "ParamLevelList": [
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "정성 듬뿍 주사",
                        "Desc": "메로피드 요새 특제 주사기로 전방에 정성과 약을 뿌려, 지속적인 <color style='color:#80C0FF;'>물 원소 범위 피해</color>를 준다.<br>또한 발동 시, 시그윈이 주변 일정 범위 내에 있는 원천의 방울을 최대 2개 흡수한다.<br><br><i>「이런, 과잉 약물은 독과 다름없어, 아주 위험하다구. 하지만 환자에게 필요한 관심과 보살핌은 아무리 많아도 부족하지」</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 11.771%",
                                    "HP 최대치의 12.654%",
                                    "HP 최대치의 13.536%",
                                    "HP 최대치의 14.714%",
                                    "HP 최대치의 15.596%",
                                    "HP 최대치의 16.479%",
                                    "HP 최대치의 17.656%",
                                    "HP 최대치의 18.833%",
                                    "HP 최대치의 20.01%",
                                    "HP 최대치의 21.187%",
                                    "HP 최대치의 22.365%",
                                    "HP 최대치의 23.542%",
                                    "HP 최대치의 25.013%",
                                    "HP 최대치의 26.484%",
                                    "HP 최대치의 27.956%"
                                ]
                            },
                            {
                                "Desc": "지속 시간",
                                "ParamLevelList": [
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Name": "적당한 휴식은 필수",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color> 발동 시, 시그윈은 자신에게 18초 동안 「반강제 진정」 효과를 부여한다: 지속 시간 동안 시그윈은 <color style='color:#80C0FF;'>물 원소 피해 보너스</color> 8%와 진정 카운트 10스택을 획득한다. 시그윈을 제외한 대기 중인 자신의 캐릭터의 원소전투 스킬이 피해를 주면 진정 카운트를 1스택 소모하고 이번 원소전투 스킬이 주는 피해량이 증가한다: 30000pt를 초과한 시그윈의 HP 최대치를 기반으로, 1000pt마다 피해가 80pt 증가한다. 해당 방식으로 이번 원소전투 스킬이 주는 피해가 최대 2800pt 증가한다",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "세심한 진료",
                        "Desc": "시그윈이 치유 진행 시, 파티 내 모든 캐릭터의 현재 생명의 계약의 총합에 기반해, 이번 치유량이 증가한다: 생명의 계약 1000pt당 치유량이 3% 증가한다. 해당 방식으로 치유량이 최대 30% 증가한다",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "긴급 투약",
                        "Desc": "수중에 있는 자신의 현재 필드 위 캐릭터의 HP가 50% 이하로 하락 시, 2.5초 동안 지속적으로 해당 캐릭터의 HP를 회복시킨다. 회복량은 HP 최대치의 50%에 해당한다. 또한 10초 동안 해당 캐릭터의 모든 원소 내성과 물리 내성을 10% 감소시킨다. 해당 효과는 20초마다 최대 1회 발동한다",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「가장 즐거운 정령이여 초조함을 풀어주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color>의 치료 방울이 추가로 3번 튕긴다. 처음 3번 튕길 때 큰 방울이 작아지지 않는다.<br>고유 특성 「적당한 휴식은 필수」 효과가 증가한다: 치료 방울이 튕길 시, 시그윈에게 진정 카운트를 1스택 부여한다. 또한 진정 카운트로 얻는 피해 증가가 변경된다: 시그윈 HP 최대치의 30000pt를 초과한 부분 중 HP 1000pt당 피해가 100pt 증가한다. 해당 방식으로 피해가 최대 3500pt 증가한다. 해당 효과는 고유 특성 「적당한 휴식은 필수」를 해금해야 한다",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「가장 인자한 정령이여 적과 화해시켜주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color>과 <color style='color:#FFD780;'>정성 듬뿍 주사</color> 발동 시, HP 최대치의 30%만큼 피해를 흡수하고 <color style='color:#80C0FF;'>물 원소 피해</color>에 대해 250%의 흡수 효과가 있는 물방울 보호막을 생성한다. 보호막은 발동이 완료될 때까지 지속된다.<br>또한 통통 물요법이 생성한 치료 방울이나 정성 듬뿍 주사가 적에게 명중 후, 해당 적의 <color style='color:#80C0FF;'>물 원소 내성</color>이 35% 감소한다. 지속 시간: 8초",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「가장 건강한 정령이여 열병을 치료해주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "「가장 고운 정령이여 노화를 멈춰주소서」",
                        "Desc": "<color style='color:#FFD780;'>정성 듬뿍 주사</color>의 지속 시간이 3초 연장된다",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「가장 행복한 정령이여 고통을 지워주소서」",
                        "Desc": "<color style='color:#FFD780;'>정성 듬뿍 주사</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "「가장 찬란한 정령이여 절 위해 기도해주소서」",
                        "Desc": "시그윈이 치유 진행 시, HP 최대치를 기반으로 자신의 <color style='color:#FFD780;'>정성 듬뿍 주사</color>의 치명타 확률과 치명타 피해가 증가한다: HP 최대치 1000pt당 치명타 확률이 0.4%, 치명타 피해가 2.2% 증가한다. 지속 시간: 15초. 해당 방식으로 치명타 확률이 최대 20%, 치명타 피해가 최대 110% 증가한다",
                        "Icon": "UI_Talent_S_Sigewinne_04"
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Name": "일반 공격 · 표적 치료",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>최대 3번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>피해가 더 크고 정확한 <color style='color:#FFD780;'>조준 사격</color>을 한다.<br>조준 시 물 원소의 힘이 화살 촉에 계속해서 모인다. 차지 완료 후, 시그윈은 일정 시간마다 목표를 향해 천천히 이동하는 「관심 방울」을 발사해 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다. 발동 시, 격류로 가득 찬 화살이 적에게 명중하면 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 착지 시 범위 피해를 준다",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
                                "ParamLevelList": [
                                    "52.614%",
                                    "56.897%",
                                    "61.179%",
                                    "67.297%",
                                    "71.579%",
                                    "76.474%",
                                    "83.203%",
                                    "89.933%",
                                    "96.663%",
                                    "104.004%",
                                    "111.346%",
                                    "118.687%",
                                    "126.029%",
                                    "133.37%",
                                    "140.712%"
                                ]
                            },
                            {
                                "Desc": "2단 공격 피해",
                                "ParamLevelList": [
                                    "51.071%",
                                    "55.228%",
                                    "59.385%",
                                    "65.324%",
                                    "69.48%",
                                    "74.231%",
                                    "80.764%",
                                    "87.296%",
                                    "93.828%",
                                    "100.954%",
                                    "108.081%",
                                    "115.207%",
                                    "122.333%",
                                    "129.459%",
                                    "136.585%"
                                ]
                            },
                            {
                                "Desc": "3단 공격 피해",
                                "ParamLevelList": [
                                    "78.291%",
                                    "84.663%",
                                    "91.036%",
                                    "100.14%",
                                    "106.512%",
                                    "113.795%",
                                    "123.809%",
                                    "133.823%",
                                    "143.837%",
                                    "154.761%",
                                    "165.685%",
                                    "176.61%",
                                    "187.534%",
                                    "198.459%",
                                    "209.383%"
                                ]
                            },
                            {
                                "Desc": "조준 사격",
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
                                "Desc": "풀차지 조준 사격",
                                "ParamLevelList": [
                                    "114.08%",
                                    "122.636%",
                                    "142.6%",
                                    "155.0%",
                                    "151.156%",
                                    "159.712%",
                                    "171.12%",
                                    "182.528%",
                                    "193.936%",
                                    "205.344%",
                                    "216.752%",
                                    "228.16%",
                                    "242.42%",
                                    "256.68%",
                                    "270.94%"
                                ]
                            },
                            {
                                "Desc": "관심 방울 피해",
                                "ParamLevelList": [
                                    "22.816%",
                                    "24.527%",
                                    "28.52%",
                                    "31.0%",
                                    "30.231%",
                                    "31.942%",
                                    "34.224%",
                                    "36.506%",
                                    "38.787%",
                                    "41.069%",
                                    "43.35%",
                                    "45.632%",
                                    "48.484%",
                                    "51.336%",
                                    "54.188%"
                                ]
                            },
                            {
                                "Desc": "낙하 기간 피해",
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
                                "Desc": "저공/고공 추락 충격 피해",
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
                        "Name": "통통 물요법",
                        "Desc": "메로피드 요새 특제 방울총을 사용해 혈액순환을 돕고 환자를 잠재우는 <color style='color:#FFD780;'>치료 방울</color>을 생성한다.<br>치료 방울은 주변에 있는 적 사이에 튕긴다. 치료 방울이 적에게 명중 시, 시그윈의 HP 최대치를 기반으로 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다. 또한 튕길 때 파티 내 시그윈 자신을 제외한 모든 캐릭터의 HP를 회복시킨다. 회복량은 시그윈 HP 최대치의 영향을 받는다.<br>치료 방울은 다섯 번 튕긴 후, 사라지며 시그윈의 HP 최대치를 기반으로 자신의 HP를 회복한다.<br>적이 없을 시, 치료 방울은 주변에서 튕긴다. 시그윈 자신이 창조한 치료 방울은 동시에 최대 1개 존재할 수 있다.<br>홀드 시, 차지해 치료 방울을 생성할 수 있다.<br><br><color style='color:#FFD780;'>홀드</color><br>조준 차지를 통해 더 크고 더 강한 치료 방울을 만들어낸다!<br>치료 방울은 홀드 시간에 따라 커진다. 크기는 총 2단계로 구성되어 있으며, 단계당 주는 피해가 5%씩 증가하고 회복량도 5%씩 증가한다. 치료 방울은 처음 치료 방울 크기가 될 때까지, 튕길 때마다 1단계씩 작아진다.<br>큰 치료 방울이 약한 적에게 명중하면, 대상은 방울 안에 갇혀 행동할 수 없다.<br><br>또한 통통 물요법 발동 시, 시그윈 주변에 원천의 방울이 2개 생성된다. 원천의 방울 1개를 흡수할 때마다, 시그윈 자신에게 HP 최대치의 10%에 해당하는 생명의 계약을 부여한다.<br>시그윈의 생명의 계약이 제거될 시, 제거된 생명의 계약 2000pt당 자신의 원소 에너지를 1pt씩 회복한다. 해당 방식으로 최대 5pt 원소 에너지를 회복한다.<br><br><color style='color:#FFD780;'>아르케의 힘: 우시아</color><br>일정 시간마다 치료 방울이 명중한 위치에 솟구치는 칼날을 내려 시그윈의 HP 최대치에 기반한 우시아 성질의 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br><br><i>「이런 물 치료법 어때? 혈액 순환을 돕고 환자도 재밌어할 거야. 그리고 자야 할 환자를 푹 재울 수도 있지…」</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "치료 방울 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 2.28%",
                                    "HP 최대치의 2.451%",
                                    "HP 최대치의 2.622%",
                                    "HP 최대치의 2.85%",
                                    "HP 최대치의 3.021%",
                                    "HP 최대치의 3.192%",
                                    "HP 최대치의 3.42%",
                                    "HP 최대치의 3.648%",
                                    "HP 최대치의 3.876%",
                                    "HP 최대치의 4.104%",
                                    "HP 최대치의 4.332%",
                                    "HP 최대치의 4.56%",
                                    "HP 최대치의 4.845%",
                                    "HP 최대치의 5.13%",
                                    "HP 최대치의 5.415%"
                                ]
                            },
                            {
                                "Desc": "치료 방울 치유량",
                                "ParamLevelList": [
                                    "HP 최대치의 2.8%+269.63141",
                                    "HP 최대치의 3.01%+296.5983",
                                    "HP 최대치의 3.22%+325.81244",
                                    "HP 최대치의 3.5%+357.2738",
                                    "HP 최대치의 3.71%+390.98242",
                                    "HP 최대치의 3.92%+426.93826",
                                    "HP 최대치의 4.2%+465.14136",
                                    "HP 최대치의 4.48%+505.59167",
                                    "HP 최대치의 4.76%+548.28925",
                                    "HP 최대치의 5.04%+593.23407",
                                    "HP 최대치의 5.32%+640.42615",
                                    "HP 최대치의 5.6%+689.86542",
                                    "HP 최대치의 5.95%+741.55194",
                                    "HP 최대치의 6.3%+795.48572",
                                    "HP 최대치의 6.65%+851.66675"
                                ]
                            },
                            {
                                "Desc": "튕김 종료 치유량",
                                "ParamLevelList": [
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 0.684%",
                                    "HP 최대치의 0.735%",
                                    "HP 최대치의 0.787%",
                                    "HP 최대치의 0.855%",
                                    "HP 최대치의 0.906%",
                                    "HP 최대치의 0.958%",
                                    "HP 최대치의 1.026%",
                                    "HP 최대치의 1.094%",
                                    "HP 최대치의 1.163%",
                                    "HP 최대치의 1.231%",
                                    "HP 최대치의 1.3%",
                                    "HP 최대치의 1.368%",
                                    "HP 최대치의 1.453%",
                                    "HP 최대치의 1.539%",
                                    "HP 최대치의 1.624%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 간격",
                                "ParamLevelList": [
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초",
                                    "10.0초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "정성 듬뿍 주사",
                        "Desc": "메로피드 요새 특제 주사기로 전방에 정성과 약을 뿌려, 시그윈의 HP 최대치를 기반으로 지속적인 <color style='color:#80C0FF;'>물 원소 범위 피해</color>를 준다.<br>또한 발동 시, 시그윈이 주변 일정 범위 내에 있는 원천의 방울을 최대 2개 흡수한다.<br><br><i>「이런, 과잉 약물은 독과 다름없어, 아주 위험하다구. 하지만 환자에게 필요한 관심과 보살핌은 아무리 많아도 부족하지」</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 11.771%",
                                    "HP 최대치의 12.654%",
                                    "HP 최대치의 13.536%",
                                    "HP 최대치의 14.714%",
                                    "HP 최대치의 15.596%",
                                    "HP 최대치의 16.479%",
                                    "HP 최대치의 17.656%",
                                    "HP 최대치의 18.833%",
                                    "HP 최대치의 20.01%",
                                    "HP 최대치의 21.187%",
                                    "HP 최대치의 22.365%",
                                    "HP 최대치의 23.542%",
                                    "HP 최대치의 25.013%",
                                    "HP 최대치의 26.484%",
                                    "HP 최대치의 27.956%"
                                ]
                            },
                            {
                                "Desc": "지속 시간",
                                "ParamLevelList": [
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초",
                                    "18.0초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Name": "적당한 휴식은 필수",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color> 발동 시, 시그윈은 자신에게 18초 동안 「반강제 진정」 효과를 부여한다: 지속 시간 동안 시그윈은 <color style='color:#80C0FF;'>물 원소 피해 보너스</color> 8%와 진정 카운트 10스택을 획득한다. 시그윈을 제외한 주변 파티 내 대기 중인 캐릭터의 원소전투 스킬이 피해를 줄 시, 진정 카운트를 1스택 소모하고 이번 원소전투 스킬이 주는 피해량이 증가한다: 30000pt를 초과한 시그윈의 HP 최대치를 기반으로, 1000pt마다 피해가 80pt 증가한다. 해당 방식으로 이번 원소전투 스킬이 주는 피해가 최대 2800pt 증가한다",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "세심한 진료",
                        "Desc": "시그윈이 치유 진행 시, 파티 내 모든 캐릭터의 현재 생명의 계약의 총합에 기반해, 이번 치유량이 증가한다: 생명의 계약 1000pt당 치유량이 3% 증가한다. 해당 방식으로 치유량이 최대 30% 증가한다",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "긴급 투약",
                        "Desc": "수중에 있는 자신의 현재 필드 위 캐릭터의 HP가 50% 미만으로 하락 시, 2.5초 동안 지속적으로 해당 캐릭터의 HP를 회복시킨다. 회복량은 HP 최대치의 50%에 해당한다. 또한 10초 동안 해당 캐릭터의 모든 원소 내성과 물리 내성을 10% 감소시킨다. 해당 효과는 20초마다 최대 1회 발동된다",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「가장 즐거운 정령이여 초조함을 풀어주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color>의 치료 방울이 추가로 3번 튕긴다. 처음 3번 튕길 때 큰 방울이 작아지지 않는다.<br>고유 특성 「적당한 휴식은 필수」 효과가 증가한다: 치료 방울이 튕길 시, 시그윈에게 진정 카운트를 1스택 부여한다. 또한 진정 카운트로 얻는 피해 증가가 변경된다: 시그윈의 HP 최대치가 30000pt를 초과할 경우, 초과량 1000pt당 피해가 100pt 증가한다. 해당 방식으로 피해가 최대 3500pt 증가한다. 해당 효과는 고유 특성 「적당한 휴식은 필수」를 해금해야 한다",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「가장 인자한 정령이여 적과 화해시켜주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color>과 <color style='color:#FFD780;'>정성 듬뿍 주사</color> 발동 시, HP 최대치의 30%만큼 피해를 흡수하고 <color style='color:#80C0FF;'>물 원소 피해</color>에 대해 250%의 흡수 효과가 있는 물방울 보호막을 생성한다. 보호막은 발동이 완료될 때까지 지속된다.<br>또한 통통 물요법이 생성한 치료 방울이나 정성 듬뿍 주사가 적에게 명중 후, 해당 적의 <color style='color:#80C0FF;'>물 원소 내성</color>이 35% 감소한다. 지속 시간: 8초",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「가장 건강한 정령이여 열병을 치료해주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "「가장 고운 정령이여 노화를 멈춰주소서」",
                        "Desc": "<color style='color:#FFD780;'>정성 듬뿍 주사</color>의 지속 시간이 3초 연장된다",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「가장 행복한 정령이여 고통을 지워주소서」",
                        "Desc": "<color style='color:#FFD780;'>정성 듬뿍 주사</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "「가장 찬란한 정령이여 절 위해 기도해주소서」",
                        "Desc": "시그윈이 치유 진행 시, HP 최대치를 기반으로 자신의 <color style='color:#FFD780;'>정성 듬뿍 주사</color>의 치명타 확률과 치명타 피해가 증가한다: HP 최대치 1000pt당 치명타 확률이 0.4%, 치명타 피해가 2.2% 증가한다. 지속 시간: 15초. 해당 방식으로 치명타 확률이 최대 20%, 치명타 피해가 최대 110% 증가한다",
                        "Icon": "UI_Talent_S_Sigewinne_04"
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "표적 치료",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>최대 3번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>피해가 더 크고 정확한 <color style='color:#FFD780;'>조준 사격</color>을 한다.<br>조준 시 물 원소의 힘이 화살촉에 계속해서 모인다. 차지 완료 후, 시그윈은 일정 시간마다 목표를 향해 천천히 이동하는 「관심 방울」을 방출해 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다. 발사 시, 격류로 가득 찬 화살이 적에게 명중하면 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 착지 시 범위 피해를 준다",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
                                "ParamLevelList": [
                                    "52.6139%",
                                    "56.8965%",
                                    "61.179%",
                                    "67.2969%",
                                    "71.5794%",
                                    "76.4737%",
                                    "83.2034%",
                                    "89.9331%",
                                    "96.6628%",
                                    "104.0043%",
                                    "111.3458%",
                                    "118.6873%",
                                    "126.0287%",
                                    "133.3702%",
                                    "140.7117%"
                                ]
                            },
                            {
                                "Desc": "2단 공격 피해",
                                "ParamLevelList": [
                                    "51.0711%",
                                    "55.2281%",
                                    "59.385%",
                                    "65.3235%",
                                    "69.4804%",
                                    "74.2312%",
                                    "80.7636%",
                                    "87.2959%",
                                    "93.8283%",
                                    "100.9545%",
                                    "108.0807%",
                                    "115.2069%",
                                    "122.3331%",
                                    "129.4593%",
                                    "136.5855%"
                                ]
                            },
                            {
                                "Desc": "3단 공격 피해",
                                "ParamLevelList": [
                                    "78.291%",
                                    "84.6635%",
                                    "91.036%",
                                    "100.1396%",
                                    "106.5121%",
                                    "113.795%",
                                    "123.809%",
                                    "133.8229%",
                                    "143.8369%",
                                    "154.7612%",
                                    "165.6855%",
                                    "176.6098%",
                                    "187.5342%",
                                    "198.4585%",
                                    "209.3828%"
                                ]
                            },
                            {
                                "Desc": "조준 사격",
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
                                "Desc": "풀차지 조준 사격",
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
                                "Desc": "관심 방울 피해",
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
                                "Desc": "낙하 기간 피해",
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
                                "Desc": "저공/고공 추락 충격 피해",
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
                        "Name": "통통 물요법",
                        "Desc": "메로피드 요새 특제 방울총을 사용해 혈액순환을 돕고 환자를 잠재우는 <color style='color:#FFD780;'>치료 방울</color>을 생성한다.<br>치료 방울은 주변에 있는 적 사이에서 튕긴다. 치료 방울이 적에게 명중 시, 시그윈의 HP 최대치를 기반으로 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다. 또한 튕길 때 파티 내 시그윈 자신을 제외한 모든 캐릭터의 HP를 회복시킨다. 회복량은 시그윈 HP 최대치의 영향을 받는다.<br>치료 방울은 다섯 번 튕긴 후, 사라지며 시그윈의 HP 최대치를 기반으로 자신의 HP를 회복한다.<br>적이 없을 시, 치료 방울은 주변에서 튕긴다. 시그윈 자신이 창조한 치료 방울은 동시에 최대 1개 존재할 수 있다.<br>홀드 시, 차지해 치료 방울을 생성할 수 있다.<br><br><color style='color:#FFD780;'>홀드</color><br>조준 차지를 통해 더 크고 더 강한 치료 방울을 만들어낸다!<br>치료 방울은 홀드 시간에 따라 커진다. 크기는 총 2단계로 구성되어 있으며, 단계당 주는 피해가 5%씩 증가하고 회복량도 5%씩 증가한다. 치료 방울은 정상 크기로 돌아갈 때까지, 튕길 때마다 1단계씩 작아진다.<br>큰 치료 방울이 약한 적에게 명중하면, 대상은 방울 안에 갇혀 행동할 수 없다.<br><br>또한 통통 물요법 발동 시, 시그윈 주변에 원천의 방울이 2개 생성된다. 원천의 방울 1개를 흡수할 때마다, 시그윈 자신에게 HP 최대치의 10%에 해당하는 생명의 계약을 부여한다.<br>시그윈의 생명의 계약이 제거될 시, 제거된 생명의 계약 2000pt당 자신의 원소 에너지를 1pt씩 회복한다. 해당 방식으로 원소 에너지를 최대 5pt 회복한다.<br><br><color style='color:#FFD780;'>아르케의 힘: 우시아</color><br>일정 시간마다 치료 방울이 명중한 위치에 솟구치는 칼날을 내려 시그윈의 HP 최대치에 기반한 우시아 성질의 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br><br><i>「이런 물 치료법 어때? 혈액 순환을 돕고 환자도 재밌어할 거야. 그리고 자야 할 환자를 푹 재울 수도 있지…」</i>",
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "치료 방울 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 2.28%",
                                    "HP 최대치의 2.451%",
                                    "HP 최대치의 2.622%",
                                    "HP 최대치의 2.85%",
                                    "HP 최대치의 3.021%",
                                    "HP 최대치의 3.192%",
                                    "HP 최대치의 3.42%",
                                    "HP 최대치의 3.648%",
                                    "HP 최대치의 3.876%",
                                    "HP 최대치의 4.104%",
                                    "HP 최대치의 4.332%",
                                    "HP 최대치의 4.56%",
                                    "HP 최대치의 4.845%",
                                    "HP 최대치의 5.13%",
                                    "HP 최대치의 5.415%"
                                ]
                            },
                            {
                                "Desc": "치료 방울 치유량",
                                "ParamLevelList": [
                                    "HP 최대치의 2.8%+269.6314",
                                    "HP 최대치의 3.01%+296.5983",
                                    "HP 최대치의 3.22%+325.81244",
                                    "HP 최대치의 3.5%+357.2738",
                                    "HP 최대치의 3.71%+390.98242",
                                    "HP 최대치의 3.92%+426.93826",
                                    "HP 최대치의 4.2%+465.14136",
                                    "HP 최대치의 4.48%+505.59167",
                                    "HP 최대치의 4.76%+548.28925",
                                    "HP 최대치의 5.04%+593.2341",
                                    "HP 최대치의 5.32%+640.42615",
                                    "HP 최대치의 5.6%+689.8654",
                                    "HP 최대치의 5.95%+741.55194",
                                    "HP 최대치의 6.3%+795.4857",
                                    "HP 최대치의 6.65%+851.66675"
                                ]
                            },
                            {
                                "Desc": "튕김 종료 치유량",
                                "ParamLevelList": [
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%",
                                    "HP 최대치의 50.0%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 0.684%",
                                    "HP 최대치의 0.7353%",
                                    "HP 최대치의 0.7866%",
                                    "HP 최대치의 0.855%",
                                    "HP 최대치의 0.9063%",
                                    "HP 최대치의 0.9576%",
                                    "HP 최대치의 1.026%",
                                    "HP 최대치의 1.0944%",
                                    "HP 최대치의 1.1628%",
                                    "HP 최대치의 1.2312%",
                                    "HP 최대치의 1.2996%",
                                    "HP 최대치의 1.368%",
                                    "HP 최대치의 1.4535%",
                                    "HP 최대치의 1.539%",
                                    "HP 최대치의 1.6245%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 간격",
                                "ParamLevelList": [
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초",
                                    "10초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "정성 듬뿍 주사",
                        "Desc": "메로피드 요새 특제 주사기로 전방에 정성과 약을 뿌려, 시그윈의 HP 최대치를 기반으로 지속적인 <color style='color:#80C0FF;'>물 원소 범위 피해</color>를 준다.<br>또한 발동 시, 시그윈이 주변 일정 범위 내에 있는 원천의 방울을 최대 2개 흡수한다.<br><br><i>「이런, 과잉 약물은 독과 다름없어, 아주 위험하다구. 하지만 환자에게 필요한 관심과 보살핌은 아무리 많아도 부족하지」</i>",
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 11.7708%",
                                    "HP 최대치의 12.6536%",
                                    "HP 최대치의 13.5364%",
                                    "HP 최대치의 14.7135%",
                                    "HP 최대치의 15.5963%",
                                    "HP 최대치의 16.4791%",
                                    "HP 최대치의 17.6562%",
                                    "HP 최대치의 18.8333%",
                                    "HP 최대치의 20.0104%",
                                    "HP 최대치의 21.1874%",
                                    "HP 최대치의 22.3645%",
                                    "HP 최대치의 23.5416%",
                                    "HP 최대치의 25.0129%",
                                    "HP 최대치의 26.4843%",
                                    "HP 최대치의 27.9556%"
                                ]
                            },
                            {
                                "Desc": "지속 시간",
                                "ParamLevelList": [
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초",
                                    "2.5초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Name": "적당한 휴식은 필수",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color> 발동 시, 시그윈은 자신에게 18초 동안 「반강제 진정」 효과를 부여한다: 지속 시간 동안 시그윈은 <color style='color:#80C0FF;'>물 원소 피해 보너스</color> 8%와 진정 카운트 10스택을 획득한다. 시그윈을 제외한 주변 파티 내 대기 중인 캐릭터의 원소전투 스킬이 피해를 줄 시, 진정 카운트를 1스택 소모하고 이번 원소전투 스킬이 주는 피해량이 증가한다: 30000pt를 초과한 시그윈의 HP 최대치를 기반으로, 1000pt마다 피해가 80pt 증가한다. 해당 방식으로 이번 원소전투 스킬이 주는 피해가 최대 2800pt 증가한다",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "세심한 진료",
                        "Desc": "시그윈이 치유 진행 시, 파티 내 모든 캐릭터의 현재 생명의 계약의 총합에 기반해, 이번 치유량이 증가한다: 생명의 계약 1000pt당 치유량이 3% 증가한다. 해당 방식으로 치유량이 최대 30% 증가한다",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "긴급 투약",
                        "Desc": "수중에 있는 자신의 현재 필드 위 캐릭터의 HP가 50% 이하로 하락 시, 2.5초 동안 지속적으로 해당 캐릭터의 HP를 회복시킨다. 회복량은 HP 최대치의 50%에 해당한다. 또한 10초 동안 해당 캐릭터의 모든 원소 내성과 물리 내성을 10% 감소시킨다. 해당 효과는 20초마다 최대 1회 발동된다",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「가장 즐거운 정령이여 초조함을 풀어주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color>의 치료 방울이 추가로 3번 튕긴다. 처음 3번 튕길 때 큰 방울이 작아지지 않는다.<br>돌파 특성 「적당한 휴식은 필수」 효과가 증가한다: 치료 방울이 튕길 시, 시그윈에게 진정 카운트를 1스택 부여한다. 또한 진정 카운트로 얻는 피해 증가량이 변경된다: 30000pt를 초과한 시그윈의 HP 최대치를 기반으로, 1000pt마다 피해가 100pt 증가한다. 해당 방식으로 이번 원소전투 스킬이 주는 피해가 최대 3500pt 증가한다. 해당 효과는 돌파 특성 「적당한 휴식은 필수」를 해금해야 한다",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「가장 인자한 정령이여 적과 화해시켜주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color>과 <color style='color:#FFD780;'>정성 듬뿍 주사</color> 발동 시, HP 최대치의 30%만큼 피해를 흡수하고 <color style='color:#80C0FF;'>물 원소 피해</color>에 대해 250%의 흡수 효과가 있는 물방울 보호막을 생성한다. 보호막은 발동이 완료될 때까지 지속된다.<br>또한 통통 물요법이 생성한 치료 방울이나 정성 듬뿍 주사가 적에게 명중 후, 해당 적의 <color style='color:#80C0FF;'>물 원소 내성</color>이 35% 감소한다. 지속 시간: 8초",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「가장 건강한 정령이여 열병을 치료해주소서」",
                        "Desc": "<color style='color:#FFD780;'>통통 물요법</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "「가장 고운 정령이여 노화를 멈춰주소서」",
                        "Desc": "<color style='color:#FFD780;'>정성 듬뿍 주사</color>의 지속 시간이 3초 연장된다",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「가장 행복한 정령이여 고통을 지워주소서」",
                        "Desc": "<color style='color:#FFD780;'>정성 듬뿍 주사</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "「가장 찬란한 정령이여 절 위해 기도해주소서」",
                        "Desc": "시그윈이 치유 진행 시, HP 최대치를 기반으로 자신의 <color style='color:#FFD780;'>정성 듬뿍 주사</color>의 치명타 확률과 치명타 피해가 증가한다: HP 최대치 1000pt당 치명타 확률이 0.4%, 치명타 피해가 2.2% 증가한다. 지속 시간: 15초. 해당 방식으로 치명타 확률이 최대 20%, 치명타 피해가 최대 110% 증가한다",
                        "Icon": "UI_Talent_S_Sigewinne_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Sigewinne": {
        "AttackList": [
            {
                "Skill": "Elem Burst",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "Once every 1.9s",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 100.0,
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
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "E Bubblebalm Lv1",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "E Group",
                "AttGrp": "Once every 2s",
                "Element": "Water",
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
                "StrikeType": "Default",
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "E Bubblebalm Lv2",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "E Group",
                "AttGrp": "Once every 2s",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 150.0,
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
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "E Bubblebalm Lv3",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "E Group",
                "AttGrp": "Once every 2s",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 200.0,
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
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Mini-Stration Bubble",
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
                "AttGrp": "Once every 2s",
                "Element": "Water",
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Full Charge Aim",
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
                "AttGrp": "Once every 2s",
                "Element": "Water",
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Surging Blade",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
                "GU": 0.0,
                "Poise": 50.0,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": -1.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Pierce",
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
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
                "Poise": 18.354,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
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
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Phys",
                "GU": 4.0,
                "Poise": 17.816,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Phys",
                "GU": 4.0,
                "Poise": 27.311,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Aimed Shot",
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
                "AttGrp": "Once every 2s",
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            }
        ]
    }
}