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
                                "Desc": "1段ダメージ",
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
                                "Desc": "2段ダメージ",
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
                                "Desc": "3段ダメージ",
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
                                "Desc": "落下期間のダメージ",
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
                                "Desc": "低空/高空落下攻撃ダメージ",
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
                                "Desc": "狙い撃ち",
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
                                "Desc": "1段チャージ狙い撃ち",
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
                                "Desc": "特殊バブルダメージ",
                                "ParamLevelList": [
                                    "22.816%JP0B",
                                    "24.527%JP0B",
                                    "28.52%JP0B",
                                    "31.0%JP0B",
                                    "30.231%JP0B",
                                    "31.942%JP0B",
                                    "34.224%JP0B",
                                    "36.506%JP0B",
                                    "38.787%JP0B",
                                    "41.069%JP0B",
                                    "43.35%JP0B",
                                    "45.632%JP0B",
                                    "48.484%JP0B",
                                    "51.336%JP0B",
                                    "54.188%JP0B"
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
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "HP上限2.28%",
                                    "HP上限2.451%",
                                    "HP上限2.622%",
                                    "HP上限2.85%",
                                    "HP上限3.021%",
                                    "HP上限3.192%",
                                    "HP上限3.42%",
                                    "HP上限3.648%",
                                    "HP上限3.876%",
                                    "HP上限4.104%",
                                    "HP上限4.332%",
                                    "HP上限4.56%",
                                    "HP上限4.845%",
                                    "HP上限5.13%",
                                    "HP上限5.415%"
                                ]
                            },
                            {
                                "Desc": "仲間の回復量",
                                "ParamLevelList": [
                                    "HP上限2.8%+269.63141JP0B",
                                    "HP上限3.01%+296.5983JP0B",
                                    "HP上限3.22%+325.81244JP0B",
                                    "HP上限3.5%+357.2738JP0B",
                                    "HP上限3.71%+390.98242JP0B",
                                    "HP上限3.92%+426.93826JP0B",
                                    "HP上限4.2%+465.14136JP0B",
                                    "HP上限4.48%+505.59167JP0B",
                                    "HP上限4.76%+548.28925JP0B",
                                    "HP上限5.04%+593.23407JP0B",
                                    "HP上限5.32%+640.42615JP0B",
                                    "HP上限5.6%+689.86542JP0B",
                                    "HP上限5.95%+741.55194JP0B",
                                    "HP上限6.3%+795.48572JP0B",
                                    "HP上限6.65%+851.66675JP0B"
                                ]
                            },
                            {
                                "Desc": "終了時、シグウィン自身のHP回復量",
                                "ParamLevelList": [
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B",
                                    "HP上限50.0%+0.0JP0B"
                                ]
                            },
                            {
                                "Desc": "源水の雫を拾う時に獲得する命の契約",
                                "ParamLevelList": [
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B",
                                    "HP上限10.0%JP0B"
                                ]
                            },
                            {
                                "Desc": "迸発の刃ダメージ",
                                "ParamLevelList": [
                                    "HP上限0.684%",
                                    "HP上限0.735%",
                                    "HP上限0.787%",
                                    "HP上限0.855%",
                                    "HP上限0.906%",
                                    "HP上限0.958%",
                                    "HP上限1.026%",
                                    "HP上限1.094%",
                                    "HP上限1.163%",
                                    "HP上限1.231%",
                                    "HP上限1.3%",
                                    "HP上限1.368%",
                                    "HP上限1.453%",
                                    "HP上限1.539%",
                                    "HP上限1.624%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃の間隔",
                                "ParamLevelList": [
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒"
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
                                "Desc": "継続噴水ダメージ",
                                "ParamLevelList": [
                                    "HP上限11.771%JP0B",
                                    "HP上限12.654%JP0B",
                                    "HP上限13.536%JP0B",
                                    "HP上限14.714%JP0B",
                                    "HP上限15.596%JP0B",
                                    "HP上限16.479%JP0B",
                                    "HP上限17.656%JP0B",
                                    "HP上限18.833%JP0B",
                                    "HP上限20.01%JP0B",
                                    "HP上限21.187%JP0B",
                                    "HP上限22.365%JP0B",
                                    "HP上限23.542%JP0B",
                                    "HP上限25.013%JP0B",
                                    "HP上限26.484%JP0B",
                                    "HP上限27.956%JP0B"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒"
                                ]
                            },
                            {
                                "Desc": "元素エネルギー",
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
                        "Name": "通常攻撃 · ターゲット治療JP0B",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>最大3段の連続攻撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>ダメージがより高く、より精確な<color style='color:#FFD780;'>狙い撃ち</color>を発動する。<br>照準時、水元素の力が矢先に集まる。チャージが完了すると、一定時間ごとに、シグウィンは目標方向へゆっくり移動する「小さな心遣いバブル」を放ち、<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。発動時、激流を込めた矢が敵に命中する時に<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から矢の雨を放ち、凄まじいスピードで落下し地面に衝撃を与え、落下時に範囲ダメージを与える。JP0B",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
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
                                "Desc": "2段ダメージ",
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
                                "Desc": "3段ダメージ",
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
                                "Desc": "狙い撃ち",
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
                                "Desc": "フルチャージ狙い撃ち",
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
                                "Desc": "狙い撃ち",
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
                                "Desc": "小さな心遣いバブルのダメージ",
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
                                "Desc": "落下期間のダメージ",
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
                        "Name": "ぴょんぴょん水治療法JP0B",
                        "Desc": "メロピデ要塞特製のシャボン玉銃を使い、血液循環を刺激し患者を安心して眠らせる<color style='color:#FFD780;'>激癒水玉</color>を吹き出す。<br>激癒水玉は近くの敵の間を跳ね、敵に命中するとシグウィンのHP上限を基に<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。命中時、付近にいるチーム内キャラクター（シグウィン自身を除く）のHPを回復する。回復量はシグウィン自身のHP上限によって決まる。5回跳ねた後、激癒水玉は消える。激癒水玉が消えた時、シグウィン自身のHPを回復し、回復量はシグウィン自身のHP上限によって決まる。<br>敵がいない場合、激癒水玉は近くで跳ねる。シグウィン自身が作り出した激癒水玉は、同時に最大1つまで存在可能。<br>長押しによって攻撃方法が変わる。<br><br><color style='color:#FFD780;'>長押し</color><br>照準モードに入り、より大きく強力な激癒水玉を吹き出す！激癒水玉は長押しする時間によって大きくなり、最大2段階までサイズアップ可能。激癒水玉が1段階大きくなるにつき、敵に命中した時に与えるダメージ+5%、付近にいるチーム内キャラクターのHP回復量+5%。<br>弱い敵が比較的大きい激癒水玉に命中すると、禁錮状態になり、行動不能になる。比較的大きい激癒水玉が跳ねた後、通常の激癒水玉のサイズに戻るまで1段階小さくなる。<br><br>また、ぴょんぴょん水治療法を発動する時、シグウィンの近くに源水の雫を2個生成する。源水の雫を1個吸収するごとに、シグウィン自身にHP上限の10%の命の契約を付与する。<br>シグウィンの命の契約がクリアされた時、命の契約を2000クリアするたびにシグウィンの元素エネルギーを1ポイント回復する。この方法で回復できるシグウィンの元素エネルギーは最大5ポイントまで。<br><br><color style='color:#FFD780;'>アルケー：ウーシア</color><br>激癒水玉は命中した位置に迸発の刃を召喚し、シグウィンのHP上限を基に、ウーシアを帯びた<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。一定時間ごとに発動が可能。<br><br><i>「どう？このような水治療法なら、循環を刺激でき、リハビリ中の患者さんに楽しい体験を与えてくれるほか、眠るべき患者さんにもぐっすり眠ってもらえるのよ…」</i>JP0B",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "激癒水玉のダメージ",
                                "ParamLevelList": [
                                    "HP上限2.28%",
                                    "HP上限2.451%",
                                    "HP上限2.622%",
                                    "HP上限2.85%",
                                    "HP上限3.021%",
                                    "HP上限3.192%",
                                    "HP上限3.42%",
                                    "HP上限3.648%",
                                    "HP上限3.876%",
                                    "HP上限4.104%",
                                    "HP上限4.332%",
                                    "HP上限4.56%",
                                    "HP上限4.845%",
                                    "HP上限5.13%",
                                    "HP上限5.415%"
                                ]
                            },
                            {
                                "Desc": "激癒水玉の回復量",
                                "ParamLevelList": [
                                    "HP上限2.8%+269.63141",
                                    "HP上限3.01%+296.5983",
                                    "HP上限3.22%+325.81244",
                                    "HP上限3.5%+357.2738",
                                    "HP上限3.71%+390.98242",
                                    "HP上限3.92%+426.93826",
                                    "HP上限4.2%+465.14136",
                                    "HP上限4.48%+505.59167",
                                    "HP上限4.76%+548.28925",
                                    "HP上限5.04%+593.23407",
                                    "HP上限5.32%+640.42615",
                                    "HP上限5.6%+689.86542",
                                    "HP上限5.95%+741.55194",
                                    "HP上限6.3%+795.48572",
                                    "HP上限6.65%+851.66675"
                                ]
                            },
                            {
                                "Desc": "跳ね終わった時の回復量",
                                "ParamLevelList": [
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃ダメージ",
                                "ParamLevelList": [
                                    "HP上限0.684%",
                                    "HP上限0.735%",
                                    "HP上限0.787%",
                                    "HP上限0.855%",
                                    "HP上限0.906%",
                                    "HP上限0.958%",
                                    "HP上限1.026%",
                                    "HP上限1.094%",
                                    "HP上限1.163%",
                                    "HP上限1.231%",
                                    "HP上限1.3%",
                                    "HP上限1.368%",
                                    "HP上限1.453%",
                                    "HP上限1.539%",
                                    "HP上限1.624%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃の間隔",
                                "ParamLevelList": [
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "過飽和の気持ち注射JP0B",
                        "Desc": "メロピデ要塞特製の注射器を取り出し、たっぷりの心遣いと薬剤で前方エリアに衝撃を与え、<color style='color:#80C0FF;'>水元素範囲ダメージ</color>を持続的に与える。<br>また、発動時、シグウィンは近くの一定範囲内から最大2個までの源水の雫を拾う。<br><br><i>「あらっ！用量を超えた薬は毒と同じでとても危険だけど、患者さんへの心遣いとケアは、いくら超えても平気なのよ。」</i>JP0B",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "HP上限11.771%",
                                    "HP上限12.654%",
                                    "HP上限13.536%",
                                    "HP上限14.714%",
                                    "HP上限15.596%",
                                    "HP上限16.479%",
                                    "HP上限17.656%",
                                    "HP上限18.833%",
                                    "HP上限20.01%",
                                    "HP上限21.187%",
                                    "HP上限22.365%",
                                    "HP上限23.542%",
                                    "HP上限25.013%",
                                    "HP上限26.484%",
                                    "HP上限27.956%"
                                ]
                            },
                            {
                                "Desc": "継続時間",
                                "ParamLevelList": [
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒"
                                ]
                            },
                            {
                                "Desc": "元素エネルギー",
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
                        "Name": "適度の休憩を要するJP0B",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょん水治療法</color>発動時、シグウィンは自身に継続時間18秒の「半強制的静養」効果を付与する。継続期間中、シグウィンの<color style='color:#80C0FF;'>水元素ダメージ</color>+8%、静養カウントを10層獲得する。自身の待機中のキャラクター（シグウィンを除く）の元素スキルがダメージを与えた時、静養カウントを1層消費し、今回の元素スキルによるダメージを次のようにアップする——シグウィンのHP上限が30000を超えている時、その上限が1000超えるごとにダメージ+65。この方法でアップできるダメージは最大1800まで。JP0B",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "緻密な診療JP0B",
                        "Desc": "チーム全員の現在の「命の契約」の合計を基に、シグウィンの与える治療効果がアップする。命の契約が1000につき、シグウィンの与える治療効果+3%。この方法でアップできる治療効果は最大30%まで。JP0B",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "緊急用量JP0B",
                        "Desc": "",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「最も愉快な精霊は、不安を知るだろうか」JP0B",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょん水治療法</color>による激癒水玉の最初の3回のバウンドは、比較的大きい激癒水玉が小さくなることはなく、さらに追加で3回まで跳ねることができる。<br>また、激癒水玉が跳ねるたび、シグウィンに静養カウントを1層付与する。固有天賦「適度の休憩を要する」を解放する必要がある。JP0B",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「最も寛大な精霊は、軋轢を解消できるだろうか」JP0B",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょん水治療法</color>と<color style='color:#FFD780;'>過飽和の気持ち注射</color>を発動時、HP上限の30%に相当する水玉シールドを生成し、ダメージを吸収する。このシールドは<color style='color:#80C0FF;'>水元素ダメージ</color>に対して250%の吸収効果があり、発動が完了するまで継続する。<br>また、ぴょんぴょん水治療法による激癒水玉、または過飽和の気持ち注射が敵に命中した時、該当敵の<color style='color:#80C0FF;'>水元素耐性</color>-35%、継続時間8秒。JP0B",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「最も健康な精霊は、熱症を治せるだろうか」JP0B",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょん水治療法</color>のスキルLv.+3。<br>最大Lv.15まで。JP0B",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "「最も美しい精霊は、衰朽を拒めるだろうか」JP0B",
                        "Desc": "<color style='color:#FFD780;'>過飽和の気持ち注射</color>の継続時間+3秒。JP0B",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「最も幸せな精霊は、苦痛を取り除けるだろうか」JP0B",
                        "Desc": "<color style='color:#FFD780;'>過飽和の気持ち注射</color>のスキルLv.+3。<br>最大Lv.15まで。JP0B",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "「最も輝く精霊は、祈ってくれるだろうか」JP0B",
                        "Desc": "シグウィンが治療を行う時、HP上限を基に自身の<color style='color:#FFD780;'>過飽和の気持ち注射</color>の会心率と会心ダメージを以下のようにアップする。HP上限1000ごとに会心率+0.7%、会心ダメージ+1.6%、継続時間15秒。この方法でアップできる会心率は最大20%まで、会心ダメージは最大110%までとなる。JP0B",
                        "Icon": "UI_Talent_S_Sigewinne_04"
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Name": "通常攻撃 · ターゲットセラピー",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>最大3段の連続攻撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>ダメージがより高く、より精確な<color style='color:#FFD780;'>狙い撃ち</color>を発動する。<br>照準時、水元素の力が矢先に集まる。チャージが完了してからは、シグウィンは目標方向へゆっくり移動する「思いやりバブル」を一定時間ごとに放ち、<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。発動時、激流を込めた矢が敵に命中する時に<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から矢の雨を放ち、凄まじいスピードで落下し地面に衝撃を与え、落下時に範囲ダメージを与える。",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
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
                                "Desc": "2段ダメージ",
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
                                "Desc": "3段ダメージ",
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
                                "Desc": "狙い撃ち",
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
                                "Desc": "フルチャージ狙い撃ち",
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
                                "Desc": "思いやりバブルのダメージ",
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
                                "Desc": "落下期間のダメージ",
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
                                "Desc": "低空/高空落下攻撃ダメージ",
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
                        "Name": "ぴょんぴょんハイドロセラピー",
                        "Desc": "メロピデ要塞特製のバブルガンで、血液循環を刺激し患者を安心させ、眠らせる<color style='color:#FFD780;'>ヒーリングバブル</color>を撃つ。<br>ヒーリングバブルは近くの敵の間をバウンドし、敵に命中するとシグウィンのHP上限を基とした<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。命中時、付近にいるチーム内キャラクター（シグウィン自身を除く）のHPを回復する。回復量はシグウィン自身のHP上限によって決まる。<br>5回バウンドするとヒーリングバブルは消え、シグウィン自身のHP上限を基にシグウィンのHPを回復する。<br>敵がいない場合、ヒーリングバブルは近くでバウンドする。シグウィン自身が作り出したヒーリングバブルは、同時に1つのみ存在可能。<br>長押しすると、チャージでヒーリングバブルを放つ。<br><br><color style='color:#FFD780;'>長押し</color><br>チャージしながら照準モードに入り、より大きく強力なヒーリングバブルを撃つ。<br>ヒーリングバブルは長押し時間に伴って大きくなり、最大2段階サイズアップする。ヒーリングバブルが1段階大きくなるにつき、与えるダメージ+5%、回復量+5%。また、バウンドするたびに、普通サイズのヒーリングバブルに戻るまで1段階ずつ小さくなる。<br>弱い敵が比較的大きいヒーリングバブルに命中すると、捕まって行動不能になる。<br><br>また、発動時にはシグウィンの近くに源水の雫を2個生成し、拾った源水の雫1個につき、シグウィン自身にHP上限の10%の命の契約を付与する。<br>シグウィンの命の契約が2000減るたび、シグウィンの元素エネルギーは1ポイント回復する。この方法で回復できるシグウィンの元素エネルギーは最大5ポイントまで。<br><br><color style='color:#FFD780;'>アルケー：ウーシア</color><br>ヒーリングバブルは命中した位置に迸発の刃を召喚し、シグウィンのHP上限を基に、ウーシアを帯びた<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。一定時間ごとに発動が可能。<br><br><i>「どう？このハイドロセラピーは、体内の循環を刺激してくれるのよ。リハビリ中の患者さんには楽しい体験をしてもらえるし、睡眠が必要な患者さんにはぐっすり眠ってもらえるのよね…」</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "ヒーリングバブルのダメージ",
                                "ParamLevelList": [
                                    "HP上限2.28%",
                                    "HP上限2.451%",
                                    "HP上限2.622%",
                                    "HP上限2.85%",
                                    "HP上限3.021%",
                                    "HP上限3.192%",
                                    "HP上限3.42%",
                                    "HP上限3.648%",
                                    "HP上限3.876%",
                                    "HP上限4.104%",
                                    "HP上限4.332%",
                                    "HP上限4.56%",
                                    "HP上限4.845%",
                                    "HP上限5.13%",
                                    "HP上限5.415%"
                                ]
                            },
                            {
                                "Desc": "ヒーリングバブルの回復量",
                                "ParamLevelList": [
                                    "HP上限2.8%+269.63141",
                                    "HP上限3.01%+296.5983",
                                    "HP上限3.22%+325.81244",
                                    "HP上限3.5%+357.2738",
                                    "HP上限3.71%+390.98242",
                                    "HP上限3.92%+426.93826",
                                    "HP上限4.2%+465.14136",
                                    "HP上限4.48%+505.59167",
                                    "HP上限4.76%+548.28925",
                                    "HP上限5.04%+593.23407",
                                    "HP上限5.32%+640.42615",
                                    "HP上限5.6%+689.86542",
                                    "HP上限5.95%+741.55194",
                                    "HP上限6.3%+795.48572",
                                    "HP上限6.65%+851.66675"
                                ]
                            },
                            {
                                "Desc": "跳ね終わった時の回復量",
                                "ParamLevelList": [
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃ダメージ",
                                "ParamLevelList": [
                                    "HP上限0.684%",
                                    "HP上限0.735%",
                                    "HP上限0.787%",
                                    "HP上限0.855%",
                                    "HP上限0.906%",
                                    "HP上限0.958%",
                                    "HP上限1.026%",
                                    "HP上限1.094%",
                                    "HP上限1.163%",
                                    "HP上限1.231%",
                                    "HP上限1.3%",
                                    "HP上限1.368%",
                                    "HP上限1.453%",
                                    "HP上限1.539%",
                                    "HP上限1.624%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃の間隔",
                                "ParamLevelList": [
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "過飽和真心お注射",
                        "Desc": "取り出したメロピデ要塞特製の注射器で、たっぷりの思いやりと薬剤を前方エリアにうち、<color style='color:#80C0FF;'>水元素範囲ダメージ</color>を持続的に与える。<br>また、発動時、シグウィンは近くの一定範囲内から最大2個の源水の雫を吸収する。<br><br><i>「あら、用量を超えた薬は毒と同じでとても危険だけど、患者さんへの思いやりとケアは、いくらあってもいいものなのよ。」</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "HP上限11.771%",
                                    "HP上限12.654%",
                                    "HP上限13.536%",
                                    "HP上限14.714%",
                                    "HP上限15.596%",
                                    "HP上限16.479%",
                                    "HP上限17.656%",
                                    "HP上限18.833%",
                                    "HP上限20.01%",
                                    "HP上限21.187%",
                                    "HP上限22.365%",
                                    "HP上限23.542%",
                                    "HP上限25.013%",
                                    "HP上限26.484%",
                                    "HP上限27.956%"
                                ]
                            },
                            {
                                "Desc": "継続時間",
                                "ParamLevelList": [
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒"
                                ]
                            },
                            {
                                "Desc": "元素エネルギー",
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
                        "Name": "休息は適度に取るのよ",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>発動時、シグウィンは自身に継続時間18秒の「半強制的静養」効果を付与する。継続期間中、シグウィンの<color style='color:#80C0FF;'>水元素ダメージ</color>+8%、静養カウントを10層獲得する。自身の待機中のキャラクター（シグウィンを除く）の元素スキルがダメージを与えた時、静養カウントを1層消費し、その回の元素スキルによるダメージを次のようにアップする——シグウィンのHP上限が30000を超えている時、上限が1000を超えるごとにダメージ+80。この方法でアップできるダメージは最大2800まで。",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "丁寧な診療",
                        "Desc": "シグウィンが治療を行う時、チーム全員の現在の命の契約の合計を基に、回復量をアップする。命の契約1000につき、回復量+3%。この方法でアップできる回復量は最大30%まで。",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "緊急時の投与量",
                        "Desc": "水中にいる時、フィールド上の自身のキャラクターのHPが50%以下になると、2.5秒の間、該当キャラクターのHPを持続的に回復する。総回復量は該当キャラクターのHP上限の50%に相当。このとき、10秒間、該当キャラクターの全元素耐性と物理耐性-10%。この効果は20秒毎に最大1回のみ発動可能。",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「とびきり楽しい精霊さんにも、不安は理解できるのかしら」",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>のヒーリングバブルが追加で3回までバウンドするようになる。また、最初の3回のバウンドではヒーリングバブルのサイズが縮小しなくなる。<br>また、固有天賦「休息は適度に取るのよ」の効果が強化され、ヒーリングバブルがバウンドする時、シグウィンに静養カウントを1層付与し、静養カウントが提供するダメージアップ効果を以下のように変更する——シグウィンのHP上限が30000を超えている時、その上限が1000超えるごとにダメージ+100。この方法でアップできるダメージは最大3500まで。固有天賦「休息は適度に取るのよ」を解放する必要がある。",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「とびきり優しい精霊さんなら、恨みを昇華できるのかしら」",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>と<color style='color:#FFD780;'>過飽和の気持ち注射</color>を発動時、HP上限の30%に相当するバブルシールドを生成し、ダメージを吸収する。このシールドは<color style='color:#80C0FF;'>水元素ダメージ</color>に対して250%の吸収効果を持ち、発動完了まで継続する。<br>また、ぴょんぴょんハイドロセラピーによるヒーリングバブルか過飽和の気持ち注射が敵に命中した後、その敵の<color style='color:#80C0FF;'>水元素耐性</color>-35%、継続時間8秒。",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「とびきり元気な精霊さんなら、熱中症を治せるかしら」",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "「とびきり綺麗な精霊さんなら、老衰だって避けられるかしら」",
                        "Desc": "<color style='color:#FFD780;'>過飽和まごころお注射</color>の継続時間+3秒。",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「とびきり幸せな精霊さんなら、苦痛をなくしてあげられるかしら」",
                        "Desc": "<color style='color:#FFD780;'>過飽和まごころお注射</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "「とびきり輝く精霊さんは、私に祈ってくれるかしら」",
                        "Desc": "シグウィンが治療を行う時、HP上限を基に自身の<color style='color:#FFD780;'>過飽和の気持ち注射</color>の会心率と会心ダメージを以下のようにアップする。HP上限1000ごとに会心率+0.4%、会心ダメージ+2.2%、継続時間15秒。この方法でアップできる会心率は最大20%まで、会心ダメージは最大110%まで。",
                        "Icon": "UI_Talent_S_Sigewinne_04"
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Name": "通常攻撃 · ターゲットセラピー",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>最大3段の連続攻撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>ダメージがより高く、より精確な<color style='color:#FFD780;'>狙い撃ち</color>を発動する。<br>照準時、水元素の力が矢先に集まる。チャージが完了してからは、シグウィンは目標方向へゆっくり移動する「思いやりバブル」を一定時間ごとに放ち、<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。発動時、激流を込めた矢が敵に命中する時に<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から矢の雨を放ち、凄まじいスピードで落下し地面に衝撃を与え、落下時に範囲ダメージを与える。",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
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
                                "Desc": "2段ダメージ",
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
                                "Desc": "3段ダメージ",
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
                                "Desc": "狙い撃ち",
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
                                "Desc": "フルチャージ狙い撃ち",
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
                                "Desc": "思いやりバブルのダメージ",
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
                                "Desc": "落下期間のダメージ",
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
                                "Desc": "低空/高空落下攻撃ダメージ",
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
                        "Name": "ぴょんぴょんハイドロセラピー",
                        "Desc": "メロピデ要塞特製のバブルガンで、血液循環を刺激し患者を安心させ、眠らせる<color style='color:#FFD780;'>ヒーリングバブル</color>を撃つ。<br>ヒーリングバブルは近くの敵の間をバウンドし、敵に命中するとシグウィンのHP上限を基とした<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。バウンド時、付近にいるチーム内キャラクター（シグウィン自身を除く）のHPを回復する。回復量はシグウィン自身のHP上限によって決まる。<br>5回バウンドするとヒーリングバブルは消え、シグウィン自身のHP上限を基にシグウィンのHPを回復する。<br>敵がいない場合、ヒーリングバブルは近くでバウンドする。シグウィン自身が作り出したヒーリングバブルは、同時に1つのみ存在可能。<br>長押しすると、チャージでヒーリングバブルを放つ。<br><br><color style='color:#FFD780;'>長押し</color><br>チャージしながら照準モードに入り、より大きく強力なヒーリングバブルを撃つ。<br>ヒーリングバブルは長押し時間に伴って大きくなり、最大2段階サイズアップする。ヒーリングバブルが1段階大きくなるにつき、与えるダメージ+5%、回復量+5%。また、バウンドするたびに、普通サイズのヒーリングバブルに戻るまで1段階ずつ小さくなる。<br>弱い敵が比較的大きいヒーリングバブルに命中すると、捕まって行動不能になる。<br><br>また、発動時にはシグウィンの近くに源水の雫を2個生成し、拾った源水の雫1個につき、シグウィン自身にHP上限の10%の命の契約を付与する。<br>シグウィンの命の契約が2000減るたび、シグウィンの元素エネルギーは1ポイント回復する。この方法で回復できるシグウィンの元素エネルギーは最大5ポイントまで。<br><br><color style='color:#FFD780;'>アルケー：ウーシア</color><br>ヒーリングバブルは命中した位置に迸発の刃を召喚し、シグウィンのHP上限を基に、ウーシアを帯びた<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。一定時間ごとに発動が可能。<br><br><i>「どう？このハイドロセラピーは、体内の循環を刺激してくれるのよ。リハビリ中の患者さんには楽しい体験をしてもらえるし、睡眠が必要な患者さんにはぐっすり眠ってもらえるのよね…」</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "ヒーリングバブルのダメージ",
                                "ParamLevelList": [
                                    "HP上限2.28%",
                                    "HP上限2.451%",
                                    "HP上限2.622%",
                                    "HP上限2.85%",
                                    "HP上限3.021%",
                                    "HP上限3.192%",
                                    "HP上限3.42%",
                                    "HP上限3.648%",
                                    "HP上限3.876%",
                                    "HP上限4.104%",
                                    "HP上限4.332%",
                                    "HP上限4.56%",
                                    "HP上限4.845%",
                                    "HP上限5.13%",
                                    "HP上限5.415%"
                                ]
                            },
                            {
                                "Desc": "ヒーリングバブルの回復量",
                                "ParamLevelList": [
                                    "HP上限2.8%+269.63141",
                                    "HP上限3.01%+296.5983",
                                    "HP上限3.22%+325.81244",
                                    "HP上限3.5%+357.2738",
                                    "HP上限3.71%+390.98242",
                                    "HP上限3.92%+426.93826",
                                    "HP上限4.2%+465.14136",
                                    "HP上限4.48%+505.59167",
                                    "HP上限4.76%+548.28925",
                                    "HP上限5.04%+593.23407",
                                    "HP上限5.32%+640.42615",
                                    "HP上限5.6%+689.86542",
                                    "HP上限5.95%+741.55194",
                                    "HP上限6.3%+795.48572",
                                    "HP上限6.65%+851.66675"
                                ]
                            },
                            {
                                "Desc": "跳ね終わった時の回復量",
                                "ParamLevelList": [
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃ダメージ",
                                "ParamLevelList": [
                                    "HP上限0.684%",
                                    "HP上限0.735%",
                                    "HP上限0.787%",
                                    "HP上限0.855%",
                                    "HP上限0.906%",
                                    "HP上限0.958%",
                                    "HP上限1.026%",
                                    "HP上限1.094%",
                                    "HP上限1.163%",
                                    "HP上限1.231%",
                                    "HP上限1.3%",
                                    "HP上限1.368%",
                                    "HP上限1.453%",
                                    "HP上限1.539%",
                                    "HP上限1.624%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃の間隔",
                                "ParamLevelList": [
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒",
                                    "10.0秒"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "過飽和真心お注射",
                        "Desc": "取り出したメロピデ要塞特製の注射器で、たっぷりの思いやりと薬剤を前方エリアにうち、シグウィンのHP上限を基に継続的な<color style='color:#80C0FF;'>水元素範囲ダメージ</color>を与える。<br>また、発動時、シグウィンは近くの一定範囲内から最大2個の源水の雫を吸収する。<br><br><i>「あら、用量を超えた薬は毒と同じでとても危険だけど、患者さんへの思いやりとケアは、いくらあってもいいものなのよ。」</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "HP上限11.771%",
                                    "HP上限12.654%",
                                    "HP上限13.536%",
                                    "HP上限14.714%",
                                    "HP上限15.596%",
                                    "HP上限16.479%",
                                    "HP上限17.656%",
                                    "HP上限18.833%",
                                    "HP上限20.01%",
                                    "HP上限21.187%",
                                    "HP上限22.365%",
                                    "HP上限23.542%",
                                    "HP上限25.013%",
                                    "HP上限26.484%",
                                    "HP上限27.956%"
                                ]
                            },
                            {
                                "Desc": "継続時間",
                                "ParamLevelList": [
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒",
                                    "18.0秒"
                                ]
                            },
                            {
                                "Desc": "元素エネルギー",
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
                        "Name": "休息は適度に取るのよ",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>発動時、シグウィンは自身に継続時間18秒の「半強制的静養」効果を付与する。継続期間中、シグウィンの<color style='color:#80C0FF;'>水元素ダメージ</color>+8%。また、静養カウントを10層獲得する。付近にいるチーム内の待機中のキャラクター（シグウィンを除く）の元素スキルがダメージを与える時、静養カウントを1層消費し、その時の元素スキルによるダメージを次のようにアップする——シグウィンのHP上限が30000を超えている時、超えた部分の数値1000ごとにダメージ+80。この方法でアップできるダメージは最大2800まで。",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "丁寧な診療",
                        "Desc": "シグウィンが治療を行う時、チーム全員の現在の命の契約の合計を基に、回復量をアップする。命の契約1000につき、回復量+3%。この方法でアップできる回復量は最大30%まで。",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "緊急時の投与量",
                        "Desc": "水中にいる時、フィールド上の自身のキャラクターのHPが50%以下になると、2.5秒の間、該当キャラクターのHPを持続的に回復する。総回復量は該当キャラクターのHP上限の50%に相当。このとき、10秒間、該当キャラクターの全元素耐性と物理耐性-10%。この効果は20秒毎に最大1回のみ発動可能。",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「とびきり楽しい精霊さんにも、不安は理解できるのかしら」",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>のヒーリングバブルが追加で3回までバウンドするようになる。また、最初の3回のバウンドではヒーリングバブルのサイズが縮小しなくなる。<br>また、固有天賦「休息は適度に取るのよ」の効果が強化され、ヒーリングバブルがバウンドする時、シグウィンに静養カウントを1層付与し、静養カウントが提供するダメージアップ効果を以下のように変更する——シグウィンのHP上限が30000を超えている時、超えた部分の数値1000ごとにダメージ+100。この方法でアップできるダメージは最大3500まで。固有天賦「休息は適度に取るのよ」を解放する必要がある。",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「とびきり優しい精霊さんなら、恨みを昇華できるのかしら」",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>と<color style='color:#FFD780;'>過飽和の気持ち注射</color>を発動時、HP上限の30%に相当するバブルシールドを生成し、ダメージを吸収する。このシールドは<color style='color:#80C0FF;'>水元素ダメージ</color>に対して250%の吸収効果を持ち、発動完了まで継続する。<br>また、ぴょんぴょんハイドロセラピーによるヒーリングバブルか過飽和の気持ち注射が敵に命中した後、その敵の<color style='color:#80C0FF;'>水元素耐性</color>-35%、継続時間8秒。",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「とびきり元気な精霊さんなら、熱中症を治せるかしら」",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "「とびきり綺麗な精霊さんなら、老衰だって避けられるかしら」",
                        "Desc": "<color style='color:#FFD780;'>過飽和まごころお注射</color>の継続時間+3秒。",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「とびきり幸せな精霊さんなら、苦痛をなくしてあげられるかしら」",
                        "Desc": "<color style='color:#FFD780;'>過飽和まごころお注射</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "「とびきり輝く精霊さんは、私に祈ってくれるかしら」",
                        "Desc": "シグウィンが治療を行う時、HP上限を基に自身の<color style='color:#FFD780;'>過飽和の気持ち注射</color>の会心率と会心ダメージを以下のようにアップする。HP上限1000ごとに会心率+0.4%、会心ダメージ+2.2%、継続時間15秒。この方法でアップできる会心率は最大20%まで、会心ダメージは最大110%まで。",
                        "Icon": "UI_Talent_S_Sigewinne_04"
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "ターゲットセラピー",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>最大3段の連続攻撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>ダメージがより高く、より精確な<color style='color:#FFD780;'>狙い撃ち</color>を発動する。<br>照準時、水元素の力が矢先に集まる。チャージが完了してからは、シグウィンは目標方向へゆっくり移動する「思いやりバブル」を一定時間ごとに放ち、<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。重撃発動時、激流を込めた矢が敵に命中する時に<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から矢の雨を放ち、凄まじいスピードで落下し地面に衝撃を与え、落下時に範囲ダメージを与える。",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
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
                                "Desc": "2段ダメージ",
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
                                "Desc": "3段ダメージ",
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
                                "Desc": "狙い撃ち",
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
                                "Desc": "フルチャージ狙い撃ち",
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
                                "Desc": "思いやりバブルのダメージ",
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
                        "Name": "ぴょんぴょんハイドロセラピー",
                        "Desc": "メロピデ要塞特製のバブルガンで、血液循環を刺激し患者を安心させ、眠らせる<color style='color:#FFD780;'>ヒーリングバブル</color>を撃つ。<br>ヒーリングバブルは近くの敵の間をバウンドし、敵に命中するとシグウィンのHP上限を基とした<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。バウンド時、付近にいるチーム内キャラクター（シグウィン自身を除く）のHPを回復する。回復量はシグウィン自身のHP上限によって決まる。<br>5回バウンドするとヒーリングバブルは消え、シグウィン自身のHP上限を基にシグウィンのHPを回復する。<br>敵がいない場合、ヒーリングバブルは近くでバウンドする。シグウィン自身が作り出したヒーリングバブルは、1つのみ存在可能。<br>長押しすると、チャージでヒーリングバブルを放つ。<br><br><color style='color:#FFD780;'>長押し</color><br>チャージしながら照準モードに入り、より大きく強力なヒーリングバブルを撃つ。<br>ヒーリングバブルは長押し時間に伴って大きくなり、最大2段階サイズアップする。ヒーリングバブルが1段階大きくなるにつき、与えるダメージ+5%、回復量+5%。また、バウンドするたびに、普通サイズのヒーリングバブルに戻るまで1段階ずつ小さくなる。<br>弱い敵が比較的大きいヒーリングバブルに命中すると、捕まって行動不能になる。<br><br>また、発動時にはシグウィンの近くに源水の雫を2個生成し、拾った源水の雫1個につき、シグウィン自身にHP上限の10%の命の契約を付与する。<br>シグウィンの命の契約が解除された時、クリアされた数値2000ごとにシグウィンの元素エネルギーは1ポイント回復する。この方法で回復できるシグウィンの元素エネルギーは最大5ポイントまで。<br><br><color style='color:#FFD780;'>アルケー：ウーシア</color><br>ヒーリングバブルは命中した位置に迸発の刃を召喚し、シグウィンのHP上限を基に、ウーシアを帯びた<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。一定時間ごとに発動が可能。<br><br><i>「どう？このハイドロセラピーは、体内の循環を刺激してくれるのよ。リハビリ中の患者さんには楽しい体験をしてもらえるし、睡眠が必要な患者さんにはぐっすり眠ってもらえるのよね…」</i>",
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "ヒーリングバブルのダメージ",
                                "ParamLevelList": [
                                    "HP上限2.28%",
                                    "HP上限2.451%",
                                    "HP上限2.622%",
                                    "HP上限2.85%",
                                    "HP上限3.021%",
                                    "HP上限3.192%",
                                    "HP上限3.42%",
                                    "HP上限3.648%",
                                    "HP上限3.876%",
                                    "HP上限4.104%",
                                    "HP上限4.332%",
                                    "HP上限4.56%",
                                    "HP上限4.845%",
                                    "HP上限5.13%",
                                    "HP上限5.415%"
                                ]
                            },
                            {
                                "Desc": "ヒーリングバブルの回復量",
                                "ParamLevelList": [
                                    "HP上限2.8%+269.6314",
                                    "HP上限3.01%+296.5983",
                                    "HP上限3.22%+325.81244",
                                    "HP上限3.5%+357.2738",
                                    "HP上限3.71%+390.98242",
                                    "HP上限3.92%+426.93826",
                                    "HP上限4.2%+465.14136",
                                    "HP上限4.48%+505.59167",
                                    "HP上限4.76%+548.28925",
                                    "HP上限5.04%+593.2341",
                                    "HP上限5.32%+640.42615",
                                    "HP上限5.6%+689.8654",
                                    "HP上限5.95%+741.55194",
                                    "HP上限6.3%+795.4857",
                                    "HP上限6.65%+851.66675"
                                ]
                            },
                            {
                                "Desc": "跳ね終わった時の回復量",
                                "ParamLevelList": [
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%",
                                    "HP上限50.0%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃ダメージ",
                                "ParamLevelList": [
                                    "HP上限0.684%",
                                    "HP上限0.7353%",
                                    "HP上限0.7866%",
                                    "HP上限0.855%",
                                    "HP上限0.9063%",
                                    "HP上限0.9576%",
                                    "HP上限1.026%",
                                    "HP上限1.0944%",
                                    "HP上限1.1628%",
                                    "HP上限1.2312%",
                                    "HP上限1.2996%",
                                    "HP上限1.368%",
                                    "HP上限1.4535%",
                                    "HP上限1.539%",
                                    "HP上限1.6245%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃の間隔",
                                "ParamLevelList": [
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒",
                                    "10秒"
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
                            }
                        ]
                    },
                    {
                        "Name": "過飽和まごころお注射",
                        "Desc": "取り出したメロピデ要塞特製の注射器で、たっぷりの思いやりと薬剤を前方エリアにうち、シグウィンのHP上限を基に継続的な<color style='color:#80C0FF;'>水元素範囲ダメージ</color>を与える。<br>また、発動時、シグウィンは近くの一定範囲内から最大2個の源水の雫を吸収する。<br><br><i>「あら、用量を超えた薬は毒と同じでとても危険だけど、患者さんへの思いやりとケアは、いくらあってもいいものなのよ。」</i>",
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "HP上限11.7708%",
                                    "HP上限12.6536%",
                                    "HP上限13.5364%",
                                    "HP上限14.7135%",
                                    "HP上限15.5963%",
                                    "HP上限16.4791%",
                                    "HP上限17.6562%",
                                    "HP上限18.8333%",
                                    "HP上限20.0104%",
                                    "HP上限21.1874%",
                                    "HP上限22.3645%",
                                    "HP上限23.5416%",
                                    "HP上限25.0129%",
                                    "HP上限26.4843%",
                                    "HP上限27.9556%"
                                ]
                            },
                            {
                                "Desc": "継続時間",
                                "ParamLevelList": [
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒",
                                    "2.5秒"
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
                        "Name": "休息は適度に取るのよ",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>発動時、シグウィンは自身に継続時間18秒の「半強制的静養」効果を付与する。継続期間中、シグウィンの<color style='color:#80C0FF;'>水元素ダメージ</color>+8%。また、静養カウントを10層獲得する。付近にいるチーム内の待機中のキャラクター（シグウィンを除く）の元素スキルがダメージを与える時、静養カウントを1層消費し、その時の元素スキルによるダメージを次のようにアップする——シグウィンのHP上限が30000を超えている時、超えた部分の数値1000ごとにダメージ+80。この方法でアップできるダメージは最大2800まで。",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "丁寧な診療",
                        "Desc": "シグウィンが治療を行う時、チーム全員の現在の命の契約の合計を基に、回復量をアップする。命の契約1000につき、回復量+3%。この方法でアップできる回復量は最大30%まで。",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "緊急時の投与量",
                        "Desc": "水中にいる時、フィールド上の自身のキャラクターのHPが50%以下になると、2.5秒の間、該当キャラクターのHPを持続的に回復する。総回復量は該当キャラクターのHP上限の50%に相当。このとき、10秒間、該当キャラクターの全元素耐性と物理耐性-10%。この効果は20秒毎に最大1回のみ発動可能。",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「誰よりも楽しい精霊なら 不安を解明できるのかしら」",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>のヒーリングバブルのバウンド回数+3。また、最初の3回のバウンドではヒーリングバブルのサイズが縮小しなくなる。<br>さらに、固有天賦「休息は適度に取るのよ」の効果が強化され、ヒーリングバブルがバウンドする時、シグウィンに静養カウントを1層付与し、静養カウントが提供するダメージアップ効果を以下のように変更する——シグウィンのHP上限が30000を超えている時、超えた部分の数値1000ごとにダメージ+100。この方法でアップできるダメージは最大3500まで。固有天賦「休息は適度に取るのよ」を解放する必要がある。",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「誰よりも優しい精霊なら 恨みを消し去れるのかしら」",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>と<color style='color:#FFD780;'>過飽和まごころお注射</color>を発動時、HP上限の30%に相当するバブルシールドを生成し、ダメージを吸収する。このシールドは<color style='color:#80C0FF;'>水元素ダメージ</color>に対して250%の吸収効果を持ち、発動完了まで継続する。<br>また、ぴょんぴょんハイドロセラピーによるヒーリングバブルか過飽和まごころお注射が敵に命中した後、その敵の<color style='color:#80C0FF;'>水元素耐性</color>-35%、継続時間8秒。",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「誰よりも健やかな精霊なら 熱病を治せるのかしら」",
                        "Desc": "<color style='color:#FFD780;'>ぴょんぴょんハイドロセラピー</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "「誰よりも美しい精霊なら 衰えを避けられるのかしら」",
                        "Desc": "<color style='color:#FFD780;'>過飽和まごころお注射</color>の継続時間+3秒。",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「誰よりも幸せな精霊なら 苦痛を取り除けるのかしら」",
                        "Desc": "<color style='color:#FFD780;'>過飽和まごころお注射</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "「誰よりも輝く精霊なら 私に祈ってくれるのかしら」",
                        "Desc": "シグウィンが治療を行う時、HP上限を基に自身の<color style='color:#FFD780;'>過飽和まごころお注射</color>の会心率と会心ダメージを以下のようにアップする。HP上限1000ごとに会心率+0.4%、会心ダメージ+2.2%、継続時間15秒。この方法でアップできる会心率は最大20%まで、会心ダメージは最大110%まで。",
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