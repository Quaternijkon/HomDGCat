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
                                "Desc": "Урон атаки 1",
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
                                "Desc": "Урон атаки 2",
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
                                "Desc": "Урон атаки 3",
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
                                "Desc": "Урон в падении",
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
                                "Desc": "Урон низкого/высокого удара",
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
                                "Desc": "Прицельный выстрел",
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
                                "Desc": "Уровень заряда 1",
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
                                "Desc": "Урон особого пузырька",
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
                                "Desc": "Урон навыка",
                                "ParamLevelList": [
                                    "2.28% макс. HP",
                                    "2.451% макс. HP",
                                    "2.622% макс. HP",
                                    "2.85% макс. HP",
                                    "3.021% макс. HP",
                                    "3.192% макс. HP",
                                    "3.42% макс. HP",
                                    "3.648% макс. HP",
                                    "3.876% макс. HP",
                                    "4.104% макс. HP",
                                    "4.332% макс. HP",
                                    "4.56% макс. HP",
                                    "4.845% макс. HP",
                                    "5.13% макс. HP",
                                    "5.415% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Лечение членов отряда",
                                "ParamLevelList": [
                                    "2.8% макс. HP + 269.63141",
                                    "3.01% макс. HP + 296.5983",
                                    "3.22% макс. HP + 325.81244",
                                    "3.5% макс. HP + 357.2738",
                                    "3.71% макс. HP + 390.98242",
                                    "3.92% макс. HP + 426.93826",
                                    "4.2% макс. HP + 465.14136",
                                    "4.48% макс. HP + 505.59167",
                                    "4.76% макс. HP + 548.28925",
                                    "5.04% макс. HP + 593.23407",
                                    "5.32% макс. HP + 640.42615",
                                    "5.6% макс. HP + 689.86542",
                                    "5.95% макс. HP + 741.55194",
                                    "6.3% макс. HP + 795.48572",
                                    "6.65% макс. HP + 851.66675"
                                ]
                            },
                            {
                                "Desc": "Лечение завершения навыка Сиджвин",
                                "ParamLevelList": [
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0",
                                    "50.0% макс. HP + 0.0"
                                ]
                            },
                            {
                                "Desc": "Долг жизни от капли источникаЪЪЪ",
                                "ParamLevelList": [
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP",
                                    "10.0% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Урон Клинка бурных вод",
                                "ParamLevelList": [
                                    "0.684% макс. HP",
                                    "0.735% макс. HP",
                                    "0.787% макс. HP",
                                    "0.855% макс. HP",
                                    "0.906% макс. HP",
                                    "0.958% макс. HP",
                                    "1.026% макс. HP",
                                    "1.094% макс. HP",
                                    "1.163% макс. HP",
                                    "1.231% макс. HP",
                                    "1.3% макс. HP",
                                    "1.368% макс. HP",
                                    "1.453% макс. HP",
                                    "1.539% макс. HP",
                                    "1.624% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Интервал Клинка бурных вод",
                                "ParamLevelList": [
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек."
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
                                "Desc": "Периодический урон водяного смерча",
                                "ParamLevelList": [
                                    "11.771% макс. HP",
                                    "12.654% макс. HP",
                                    "13.536% макс. HP",
                                    "14.714% макс. HP",
                                    "15.596% макс. HP",
                                    "16.479% макс. HP",
                                    "17.656% макс. HP",
                                    "18.833% макс. HP",
                                    "20.01% макс. HP",
                                    "21.187% макс. HP",
                                    "22.365% макс. HP",
                                    "23.542% макс. HP",
                                    "25.013% макс. HP",
                                    "26.484% макс. HP",
                                    "27.956% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек."
                                ]
                            },
                            {
                                "Desc": "Потребление энергии",
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
                        "Name": "Направленное лечение",
                        "Desc": "<color style='color:#FFD780;'>Обычная атака</color><br>До трёх атак из лука.<br><br><color style='color:#FFD780;'>Заряженная атака</color><br>Более меткий <color style='color:#FFD780;'>прицельный выстрел</color> с увеличенным уроном.<br>Во время прицеливания стрела постепенно накапливает энергию Гидро. При полном заряде Сиджвин периодически выпускает в цель медленно передвигающиеся Пузырьки состраданияЪЪЪ, нанося <color style='color:#80C0FF;'>Гидро урон</color>. Когда выпускается наделённая силой потоков стрела, при попадании она наносит <color style='color:#80C0FF;'>Гидро урон</color>.<br><br><color style='color:#FFD780;'>Атака в падении</color><br>Выпускает град стрел, которые при приземлении персонажа наносят урон по площади.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "Урон атаки 1",
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
                                "Desc": "Урон атаки 2",
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
                                "Desc": "Урон атаки 3",
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
                                "Desc": "Прицельный выстрел",
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
                                "Desc": "Заряженный выстрел",
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
                                "Desc": "Прицельный выстрел",
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
                                "Desc": "Урон Пузырька состраданияЪЪЪ",
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
                                "Desc": "Урон в падении",
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
                        "Name": "Прыгучая гидротерапия",
                        "Desc": "Из пузырькового пистолета, изготовленного в крепости Меропид, выпускает <color style='color:#FFD780;'>Бодрящий бальзам-пузырь</color>, который улучшает кровообращение и помогает пациентам уснуть.<br>Бодрящий бальзам-пузырь, прыгая между противниками поблизости, наносит поражённым врагам <color style='color:#80C0FF;'>Гидро урон</color>, пропорциональный макс. HP Сиджвин. При попадании он восстанавливает HP всем членам отряда за исключением Сиджвин. Объём лечения зависит от макс. HP Сиджвин. Отпрыгнув 5 раз, Бодрящий бальзам-пузырь исчезает и восстанавливает HP Сиджвин пропорционально её макс. HP.<br>Если врагов нет, Бодрящий бальзам-пузырь прыгает поблизости. Одновременно может существовать только один Бодрящий бальзам-пузырь, созданный самой Сиджвин.<br>При долгом нажатии способ активации навыка меняется.<br><br><color style='color:#FFD780;'>Долгое нажатие</color><br>Переходит в режим прицеливания и выдувает более крупный, более сильный Бодрящий бальзам-пузырь! Пузырь в зависимости от длительности удержания растёт, причём его рост делится на два уровня. За каждый уровень роста наносимый им урон при попадании и лечение персонажей поблизости увеличивается на 5%.<br>Слабые враги, поражённые более крупным бальзам-пузырём, заключаются и теряют способность двигаться. Крупный Бодрящий бальзам-пузырь, отскакивая от противника, теряет один уровень размера, пока не станет обычным бальзам-пузырём.<br><br>Кроме того, когда Сиджвин применяет Прыгучую гидротерапию, рядом с ней создаётся 2 Капли источника. С каждой поглощённой Каплей источника Сиджвин будет получать Долг жизни, равный 10% от её макс. HP. <br>Когда Долг жизни Сиджвин снимается, за каждые 2000 единиц снятого Долга жизни она восстанавливает 1 ед. энергии. Таким способом Сиджвинн может восстановить до 5 ед. энергии.<br><br><color style='color:#FFD780;'>Архэ: Усия</color><br>На позицию противника, поражённого Бодрящим бальзам-пузырём, нисходит Клинок бурных вод, который наносит <color style='color:#80C0FF;'>Гидро урон</color> усии, пропорциональный макс. HP Сиджвин.<br><br><i>«Что скажешь? Подобная гидротерапия не только стимулирует кровоток, но и доставляет пациентам массу удовольствия. О, а ещё она помогает больным, которым нужен отдых, хорошо поспать...»</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "Урон Бодрящего бальзам-пузыря",
                                "ParamLevelList": [
                                    "2.28% макс. HP",
                                    "2.451% макс. HP",
                                    "2.622% макс. HP",
                                    "2.85% макс. HP",
                                    "3.021% макс. HP",
                                    "3.192% макс. HP",
                                    "3.42% макс. HP",
                                    "3.648% макс. HP",
                                    "3.876% макс. HP",
                                    "4.104% макс. HP",
                                    "4.332% макс. HP",
                                    "4.56% макс. HP",
                                    "4.845% макс. HP",
                                    "5.13% макс. HP",
                                    "5.415% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Лечение Бодрящего бальзам-пузыря",
                                "ParamLevelList": [
                                    "2.8% макс. HP + 269.63141",
                                    "3.01% макс. HP + 296.5983",
                                    "3.22% макс. HP + 325.81244",
                                    "3.5% макс. HP + 357.2738",
                                    "3.71% макс. HP + 390.98242",
                                    "3.92% макс. HP + 426.93826",
                                    "4.2% макс. HP + 465.14136",
                                    "4.48% макс. HP + 505.59167",
                                    "4.76% макс. HP + 548.28925",
                                    "5.04% макс. HP + 593.23407",
                                    "5.32% макс. HP + 640.42615",
                                    "5.6% макс. HP + 689.86542",
                                    "5.95% макс. HP + 741.55194",
                                    "6.3% макс. HP + 795.48572",
                                    "6.65% макс. HP + 851.66675"
                                ]
                            },
                            {
                                "Desc": "Лечение завершения прыжков",
                                "ParamLevelList": [
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Урон Клинка бурных вод",
                                "ParamLevelList": [
                                    "0.684% макс. HP",
                                    "0.735% макс. HP",
                                    "0.787% макс. HP",
                                    "0.855% макс. HP",
                                    "0.906% макс. HP",
                                    "0.958% макс. HP",
                                    "1.026% макс. HP",
                                    "1.094% макс. HP",
                                    "1.163% макс. HP",
                                    "1.231% макс. HP",
                                    "1.3% макс. HP",
                                    "1.368% макс. HP",
                                    "1.453% макс. HP",
                                    "1.539% макс. HP",
                                    "1.624% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Интервал Клинка бурных вод",
                                "ParamLevelList": [
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек."
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек."
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Сверхнасыщенная инъекция",
                        "Desc": "Достаёт специальный шприц крепости Меропид и атакует впереди себя волнами доброты и лекарств, нанося периодический <color style='color:#80C0FF;'>Гидро урон по площади</color>.<br>Кроме того, во время применения навыка Сиджвин поглощает до 2 Капель источника в определённом радиусе поблизости.<br><br><i>«Ох, лекарство в чересчур больших дозах ничем не лучше яда. Это очень опасно! Но заботы и ухода, которые так нужны пациентам, никогда не может быть чересчур!»</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "Урон навыка",
                                "ParamLevelList": [
                                    "11.771% макс. HP",
                                    "12.654% макс. HP",
                                    "13.536% макс. HP",
                                    "14.714% макс. HP",
                                    "15.596% макс. HP",
                                    "16.479% макс. HP",
                                    "17.656% макс. HP",
                                    "18.833% макс. HP",
                                    "20.01% макс. HP",
                                    "21.187% макс. HP",
                                    "22.365% макс. HP",
                                    "23.542% макс. HP",
                                    "25.013% макс. HP",
                                    "26.484% макс. HP",
                                    "27.956% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Длительность",
                                "ParamLevelList": [
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек."
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек."
                                ]
                            },
                            {
                                "Desc": "Потребление энергии",
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
                        "Name": "Требуется полноценный отдых",
                        "Desc": "Активировав <color style='color:#FFD780;'>Прыгучую гидротерапию</color>, Сиджвин на 18 сек. наделяет себя эффектом Полупринудительного покоя: она получает 8%<color style='color:#80C0FF;'>бонус Гидро урона</color> и 10 уровней Выздоровления. Когда элементальные навыки неактивных персонажей вашего отряда (за исключением Сиджвин) наносят урон, расходуется 1 уровень Выздоровления и урон данного элементального навыка увеличивается. За каждую 1000 ед. HP свыше 30 000 ед. HP Сиджвин урон увеличивается на 65 ед. Урон применяемого элементального навыка таким способом можно увеличить не более чем на 1800 ед.",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "Скрупулёзная диагностика и лечение",
                        "Desc": "В зависимости от текущего Долга жизни всех членов отряда Сиджвин получает бонус лечения: за каждые 1000 ед. Долга жизни Сиджвин получает 3% бонус лечения. Максимальный бонус лечения, полученный таким способом, не может превышать 30%.",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "Экстренная дозировка",
                        "Desc": "",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "«Ведома ли счастливейшим душам тревога?»",
                        "Desc": "<color style='color:#FFD780;'>Бодрящий бальзам-пузырь</color> при первых трёх отскоках не становится меньше и получает 3 дополнительных отскока.<br>Кроме того, отскок бальзам-пузыря наделяет Сиджвин 1 уровнем Выздоровления. Необходимо разблокировать пассивный талант Требуется полноценный отдых.",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "«Могут ли милосерднейшие из душ победить врагов?»",
                        "Desc": "Используя <color style='color:#FFD780;'>Прыгучую гидротерапию</color> и <color style='color:#FFD780;'>Сверхнасыщенную инъекцию</color>, Сиджвин создаёт щит-пузырь, равный 30% от её макс. HP, который поглощает <color style='color:#80C0FF;'>Гидро урон</color> с эффективностью 250%.<br>Кроме того, когда Бодрящий бальзам-пузырь Прыгучей гидротерапии или Сверхнасыщенная инъекция попадают во врага, его <color style='color:#80C0FF;'>Гидро сопротивление</color> на 8 сек. снижается на 35%.",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "«Могут ли здоровейшие из душ излечить жар?»",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Прыгучая гидротерапия</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "«Могут ли прекраснейшие из душ предотвратить увядание?»",
                        "Desc": "Длительность <color style='color:#FFD780;'>Сверхнасыщенной инъекции</color> увеличивается на 3 сек.",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "«Могут ли радостнейшие из душ избавить от страданий?»",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Сверхнасыщенная инъекция</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "«Вознесут ли светлейшие из душ за меня молитвы?»",
                        "Desc": "Исцеляя персонажей, Сиджвин повышает шанс крит. попадания и крит. урон её <color style='color:#FFD780;'>Сверхнасыщенной инъекции</color>: за каждую 1000 ед. макс. HP шанс крит. попадания увеличится на 0,7%, крит. урон - на 1,6% на 15 сек. Максимальное увеличение шанса крит. попадания, которого можно добиться таким способом, составляет 20%, а крит. урон - 110%.",
                        "Icon": "UI_Talent_S_Sigewinne_04"
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Name": "Прицельная терапия",
                        "Desc": "<color style='color:#FFD780;'>Обычная атака</color><br>До трёх атак из лука.<br><br><color style='color:#FFD780;'>Заряженная атака</color><br>Более меткий <color style='color:#FFD780;'>прицельный выстрел</color> с увеличенным уроном.<br>Во время прицеливания стрела постепенно накапливает энергию Гидро. При полном заряде Сиджвин периодически выпускает в цель медленно передвигающиеся Пузырьки состраданияЪЪЪ, нанося <color style='color:#80C0FF;'>Гидро урон</color>. Когда выпускается наделённая силой потоков стрела, при попадании она наносит <color style='color:#80C0FF;'>Гидро урон</color>.<br><br><color style='color:#FFD780;'>Атака в падении</color><br>Выпускает град стрел, которые при приземлении персонажа наносят урон по площади.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "Урон атаки 1",
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
                                "Desc": "Урон атаки 2",
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
                                "Desc": "Урон атаки 3",
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
                                "Desc": "Прицельный выстрел",
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
                                "Desc": "Заряженный выстрел",
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
                                "Desc": "Урон Пузырька сострадания",
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
                                "Desc": "Урон в падении",
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
                                "Desc": "Урон низкого/высокого удара",
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
                        "Name": "Прыгучая гидротерапия",
                        "Desc": "Выпускает из пузырькового пистолета, изготовленного в крепости Меропид, <color style='color:#FFD780;'>Бодрящий бальзам-пузырь</color>, который улучшает кровообращение и помогает пациентам уснуть.<br>Бодрящий бальзам-пузырь, прыгает между противниками поблизости и наносит поражённым врагам <color style='color:#80C0FF;'>Гидро урон</color>, пропорциональный макс. HP Сиджвин. При попадании он восстанавливает HP всем членам отряда поблизости за исключением Сиджвин. Объём лечения зависит от макс. HP Сиджвин.<br>Отпрыгнув 5 раз, Бодрящий бальзам-пузырь исчезает и восстанавливает HP Сиджвин пропорционально её макс. HP.<br>Если врагов нет, Бодрящий бальзам-пузырь прыгает поблизости. Одновременно может существовать только один Бодрящий бальзам-пузырь, созданный самой Сиджвин.<br>При долгом нажатии способ активации навыка меняется.<br><br><color style='color:#FFD780;'>Долгое нажатие</color><br>Переходит в режим прицеливания, собирает заряд и выдувает более крупный, более сильный Бодрящий бальзам-пузырь! Пузырь в зависимости от длительности удержания растёт, причём его рост делится на два уровня. За каждый уровень роста наносимый им урон и лечение увеличивается на 5%. При каждом отскоке Крупный Бодрящий бальзам-пузырь теряет один уровень размера, пока не станет обычным Бодрящим бальзам-пузырём.<br>Слабые враги, поражённые большим бальзам-пузырём, оказываются в заключении и теряют способность двигаться.<br><br>Кроме того, когда Сиджвин активирует этот навык, рядом с ней создаётся 2 Капли источника. Каждая поглощённая Сиджвин Капля источника даёт ей Долг жизни, равный 10% от её макс. HP.<br>Когда Долг жизни Сиджвин снимается, за каждые 2000 единиц снятого Долга жизни она восстанавливает 1 ед. энергии. Таким способом Сиджвинн может восстановить до 5 ед. энергии.<br><br><color style='color:#FFD780;'>Архэ: Усия</color><br>С некоторым интервалом на позицию противника, поражённого Бодрящим бальзам-пузырём, нисходит Клинок бурных вод, который наносит <color style='color:#80C0FF;'>Гидро урон</color> усии, пропорциональный макс. HP Сиджвин.<br><br><i>«Что скажешь? Подобная гидротерапия не только стимулирует кровоток, но и доставляет пациентам массу удовольствия. О, а ещё она помогает больным, которым нужен отдых, хорошо поспать...»</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "Урон Бодрящего бальзам-пузыря",
                                "ParamLevelList": [
                                    "2.28% макс. HP",
                                    "2.451% макс. HP",
                                    "2.622% макс. HP",
                                    "2.85% макс. HP",
                                    "3.021% макс. HP",
                                    "3.192% макс. HP",
                                    "3.42% макс. HP",
                                    "3.648% макс. HP",
                                    "3.876% макс. HP",
                                    "4.104% макс. HP",
                                    "4.332% макс. HP",
                                    "4.56% макс. HP",
                                    "4.845% макс. HP",
                                    "5.13% макс. HP",
                                    "5.415% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Лечение Бодрящего бальзам-пузыря",
                                "ParamLevelList": [
                                    "2.8% макс. HP + 269.63141",
                                    "3.01% макс. HP + 296.5983",
                                    "3.22% макс. HP + 325.81244",
                                    "3.5% макс. HP + 357.2738",
                                    "3.71% макс. HP + 390.98242",
                                    "3.92% макс. HP + 426.93826",
                                    "4.2% макс. HP + 465.14136",
                                    "4.48% макс. HP + 505.59167",
                                    "4.76% макс. HP + 548.28925",
                                    "5.04% макс. HP + 593.23407",
                                    "5.32% макс. HP + 640.42615",
                                    "5.6% макс. HP + 689.86542",
                                    "5.95% макс. HP + 741.55194",
                                    "6.3% макс. HP + 795.48572",
                                    "6.65% макс. HP + 851.66675"
                                ]
                            },
                            {
                                "Desc": "Лечение завершения прыжков",
                                "ParamLevelList": [
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Урон Клинка бурных вод",
                                "ParamLevelList": [
                                    "0.684% макс. HP",
                                    "0.735% макс. HP",
                                    "0.787% макс. HP",
                                    "0.855% макс. HP",
                                    "0.906% макс. HP",
                                    "0.958% макс. HP",
                                    "1.026% макс. HP",
                                    "1.094% макс. HP",
                                    "1.163% макс. HP",
                                    "1.231% макс. HP",
                                    "1.3% макс. HP",
                                    "1.368% макс. HP",
                                    "1.453% макс. HP",
                                    "1.539% макс. HP",
                                    "1.624% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Интервал Клинка бурных вод",
                                "ParamLevelList": [
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек."
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек."
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Сверхнасыщенная инъекция",
                        "Desc": "Достаёт специальный шприц крепости Меропид и атакует перед собой волнами доброты и лекарств, нанося периодический <color style='color:#80C0FF;'>Гидро урон по площади</color>.<br>Кроме того, во время применения навыка Сиджвин поглощает до 2 Капель источника в определённом радиусе поблизости.<br><br><i>«Ох, лекарство в чересчур больших дозах ничем не лучше яда. Это очень опасно! Но заботы и ухода, которые так нужны пациентам, никогда не может быть чересчур!»</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "Урон навыка",
                                "ParamLevelList": [
                                    "11.771% макс. HP",
                                    "12.654% макс. HP",
                                    "13.536% макс. HP",
                                    "14.714% макс. HP",
                                    "15.596% макс. HP",
                                    "16.479% макс. HP",
                                    "17.656% макс. HP",
                                    "18.833% макс. HP",
                                    "20.01% макс. HP",
                                    "21.187% макс. HP",
                                    "22.365% макс. HP",
                                    "23.542% макс. HP",
                                    "25.013% макс. HP",
                                    "26.484% макс. HP",
                                    "27.956% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Длительность",
                                "ParamLevelList": [
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек."
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек."
                                ]
                            },
                            {
                                "Desc": "Потребление энергии",
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
                        "Name": "Требуется полноценный отдых",
                        "Desc": "Активировав <color style='color:#FFD780;'>Прыгучую гидротерапию</color>, Сиджвин на 18 сек. наделяет себя эффектом Полупринудительного покоя: она получает 8%<color style='color:#80C0FF;'>бонус Гидро урона</color> и 10 уровней Выздоровления. Когда элементальные навыки неактивных персонажей вашего отряда (за исключением Сиджвин) наносят урон, расходуется 1 уровень Выздоровления и урон данного элементального навыка увеличивается. За каждую 1000 ед. макс. HP свыше 30 000 ед. макс. HP Сиджвин урон увеличивается на 80 ед. Урон применяемого элементального навыка таким способом можно увеличить не более чем на 1800 ед.",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "Скрупулёзная диагностика и лечение",
                        "Desc": "Когда Сиджвин исцеляет персонажей, исцеление увеличивается согласно общему значению текущего Долга жизни всех персонажей отряда: за каждые 1000 ед. Долга жизни Сиджвин получает 3% бонус лечения. Максимальный бонус лечения, полученный таким способом, не может превышать 30%.",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "Экстренная дозировка",
                        "Desc": "Под водой исцеляет вашего активного персонажа в течение 2,5 сек., если его HP ниже 50%. Исцеление пропорционально 50% его макс. HP. Кроме того, сопротивление всем элементам и физическое сопротивление этого персонажа снижается на 10% на 10 сек. Эффект может возникнуть один раз в 20 сек.",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "«Ведома ли счастливейшим душам тревога?»",
                        "Desc": "<color style='color:#FFD780;'>Бодрящий бальзам-пузырь</color> при первых трёх отскоках не становится меньше и получает 3 дополнительных отскока.<br>Кроме того, пассивный талант Требуется полноценный отдых получает усиление: каждый отскок бальзам-пузыря наделяет Сиджвин 1 уровнем Выздоровления. Увеличение урона с помощью Выздоровления изменяется следующим образом: за каждую 1000 ед. HP свыше 30 000 ед. HP Сиджвин урон увеличивается на 100 ед. Урон таким способом можно увеличить не более чем на 3500 ед. Необходимо разблокировать пассивный талант Требуется полноценный отдых.",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "«Могут ли милосерднейшие из душ победить врагов?»",
                        "Desc": "Используя <color style='color:#FFD780;'>Прыгучую гидротерапию</color> и <color style='color:#FFD780;'>Сверхнасыщенную инъекцию</color>, Сиджвин создаёт щит-пузырь, равный 30% от её макс. HP, который поглощает <color style='color:#80C0FF;'>Гидро урон</color> с эффективностью 250%.<br>Кроме того, после того как Бодрящий бальзам-пузырь Прыгучей гидротерапии или Сверхнасыщенная инъекция попадают во врага, его <color style='color:#80C0FF;'>Гидро сопротивление</color> на 8 сек. снижается на 35%.",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "«Могут ли здоровейшие из душ излечить жар?»",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Прыгучая гидротерапия</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "«Могут ли прекраснейшие из душ предотвратить увядание?»",
                        "Desc": "Длительность <color style='color:#FFD780;'>Сверхнасыщенной инъекции</color> увеличивается на 3 сек.",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "«Могут ли радостнейшие из душ избавить от страданий?»",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Сверхнасыщенная инъекция</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "«Вознесут ли светлейшие из душ за меня молитвы?»",
                        "Desc": "Исцеляя персонажей, Сиджвин повышает шанс крит. попадания и крит. урон её <color style='color:#FFD780;'>Сверхнасыщенной инъекции</color>: за каждую 1000 ед. макс. HP шанс крит. попадания увеличится на 0,4%, крит. урон - на 2,2% на 15 сек. Максимальное увеличение шанса крит. попадания, которого можно добиться таким способом, составляет 20%, а крит. урон - 110%.",
                        "Icon": "UI_Talent_S_Sigewinne_04"
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Name": "Прицельная терапия",
                        "Desc": "<color style='color:#FFD780;'>Обычная атака</color><br>До трёх последовательных атак.<br><br><color style='color:#FFD780;'>Заряженная атака</color><br>Более меткий <color style='color:#FFD780;'>прицельный выстрел</color> с увеличенным уроном.<br>Во время прицеливания стрела постепенно накапливает энергию Гидро. При полном заряде Сиджвин периодически выпускает в цель медленно передвигающиеся Пузырьки сострадания, нанося <color style='color:#80C0FF;'>Гидро урон</color>. Когда выпускается наделённая силой потоков стрела, при попадании она наносит <color style='color:#80C0FF;'>Гидро урон</color>.<br><br><color style='color:#FFD780;'>Атака в падении</color><br>Выпускает град стрел, которые при приземлении персонажа наносят урон по площади.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "Урон атаки 1",
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
                                "Desc": "Урон атаки 2",
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
                                "Desc": "Урон атаки 3",
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
                                "Desc": "Прицельный выстрел",
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
                                "Desc": "Заряженный выстрел",
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
                                "Desc": "Урон Пузырька сострадания",
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
                                "Desc": "Урон в падении",
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
                                "Desc": "Урон низкого/высокого удара",
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
                        "Name": "Прыгучая гидротерапия",
                        "Desc": "Выпускает из пузырькового пистолета, изготовленного в крепости Меропид, <color style='color:#FFD780;'>Бодрящий бальзам-пузырь</color>, который улучшает кровообращение и помогает пациентам уснуть.<br>Бодрящий бальзам-пузырь, прыгает между противниками поблизости и наносит поражённым врагам <color style='color:#80C0FF;'>Гидро урон</color>, пропорциональный макс. HP Сиджвин. Отскакивая, он восстанавливает HP всем членам отряда поблизости за исключением Сиджвин. Объём лечения зависит от макс. HP Сиджвин.<br>Отпрыгнув 5 раз, Бодрящий бальзам-пузырь исчезает и восстанавливает HP Сиджвин пропорционально её макс. HP.<br>Если врагов нет, Бодрящий бальзам-пузырь прыгает поблизости. Одновременно может существовать только один Бодрящий бальзам-пузырь, созданный самой Сиджвин.<br>При долгом нажатии способ активации навыка меняется.<br><br><color style='color:#FFD780;'>Долгое нажатие</color><br>Переходит в режим прицеливания, собирает заряд и выдувает более крупный, более сильный Бодрящий бальзам-пузырь! Пузырь в зависимости от длительности удержания растёт, причём его рост делится на два уровня. За каждый уровень роста наносимый им урон и лечение увеличивается на 5%. При отскоке Крупный Бодрящий бальзам-пузырь теряет один уровень роста, пока не станет обычным Бодрящим бальзам-пузырём.<br>Слабые враги, поражённые большим бальзам-пузырём, оказываются в заключении и теряют способность двигаться.<br><br>Кроме того, когда Сиджвин активирует этот навык, рядом с ней создаётся 2 Капли источника. Каждая поглощённая Сиджвин Капля источника даёт ей Долг жизни, равный 10% от её макс. HP.<br>Когда Долг жизни Сиджвин снимается, за каждые 2000 единиц снятого Долга жизни она восстанавливает 1 ед. энергии. Таким способом Сиджвин может восстановить до 5 ед. энергии.<br><br><color style='color:#FFD780;'>Архэ: Усия</color><br>Периодически на позицию противника, поражённого Бодрящим бальзам-пузырём, нисходит Клинок бурных вод, который наносит <color style='color:#80C0FF;'>Гидро урон</color> усии, пропорциональный макс. HP Сиджвин.<br><br><i>«Что скажешь? Подобная гидротерапия не только стимулирует кровоток, но и доставляет пациентам массу удовольствия. О, а ещё она помогает больным, которым нужен отдых, хорошо поспать...»</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "Урон Бодрящего бальзам-пузыря",
                                "ParamLevelList": [
                                    "2.28% макс. HP",
                                    "2.451% макс. HP",
                                    "2.622% макс. HP",
                                    "2.85% макс. HP",
                                    "3.021% макс. HP",
                                    "3.192% макс. HP",
                                    "3.42% макс. HP",
                                    "3.648% макс. HP",
                                    "3.876% макс. HP",
                                    "4.104% макс. HP",
                                    "4.332% макс. HP",
                                    "4.56% макс. HP",
                                    "4.845% макс. HP",
                                    "5.13% макс. HP",
                                    "5.415% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Лечение Бодрящего бальзам-пузыря",
                                "ParamLevelList": [
                                    "2.8% макс. HP + 269.63141",
                                    "3.01% макс. HP + 296.5983",
                                    "3.22% макс. HP + 325.81244",
                                    "3.5% макс. HP + 357.2738",
                                    "3.71% макс. HP + 390.98242",
                                    "3.92% макс. HP + 426.93826",
                                    "4.2% макс. HP + 465.14136",
                                    "4.48% макс. HP + 505.59167",
                                    "4.76% макс. HP + 548.28925",
                                    "5.04% макс. HP + 593.23407",
                                    "5.32% макс. HP + 640.42615",
                                    "5.6% макс. HP + 689.86542",
                                    "5.95% макс. HP + 741.55194",
                                    "6.3% макс. HP + 795.48572",
                                    "6.65% макс. HP + 851.66675"
                                ]
                            },
                            {
                                "Desc": "Лечение завершения прыжков",
                                "ParamLevelList": [
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Урон Клинка бурных вод",
                                "ParamLevelList": [
                                    "0.684% макс. HP",
                                    "0.735% макс. HP",
                                    "0.787% макс. HP",
                                    "0.855% макс. HP",
                                    "0.906% макс. HP",
                                    "0.958% макс. HP",
                                    "1.026% макс. HP",
                                    "1.094% макс. HP",
                                    "1.163% макс. HP",
                                    "1.231% макс. HP",
                                    "1.3% макс. HP",
                                    "1.368% макс. HP",
                                    "1.453% макс. HP",
                                    "1.539% макс. HP",
                                    "1.624% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Интервал Клинка бурных вод",
                                "ParamLevelList": [
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек.",
                                    "10.0 сек."
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек."
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Сверхнасыщенная инъекция",
                        "Desc": "Достаёт специальный шприц крепости Меропид и атакует перед собой волнами доброты и лекарств, нанося периодический <color style='color:#80C0FF;'>Гидро урон по площади</color>, пропорциональный макс. HP Сиджвин.<br>Кроме того, во время применения навыка Сиджвин поглощает до 2 Капель источника в определённом радиусе поблизости.<br><br><i>«Ох, лекарство в чересчур больших дозах ничем не лучше яда. Это очень опасно! Но заботы и ухода, которые так нужны пациентам, никогда не может быть чересчур!»</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "Урон навыка",
                                "ParamLevelList": [
                                    "11.771% макс. HP",
                                    "12.654% макс. HP",
                                    "13.536% макс. HP",
                                    "14.714% макс. HP",
                                    "15.596% макс. HP",
                                    "16.479% макс. HP",
                                    "17.656% макс. HP",
                                    "18.833% макс. HP",
                                    "20.01% макс. HP",
                                    "21.187% макс. HP",
                                    "22.365% макс. HP",
                                    "23.542% макс. HP",
                                    "25.013% макс. HP",
                                    "26.484% макс. HP",
                                    "27.956% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Длительность",
                                "ParamLevelList": [
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек."
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек.",
                                    "18.0 сек."
                                ]
                            },
                            {
                                "Desc": "Потребление энергии",
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
                        "Name": "Требуется полноценный отдых",
                        "Desc": "Активировав <color style='color:#FFD780;'>Прыгучую гидротерапию</color>, Сиджвин на 18 сек. наделяет себя эффектом Полупринудительного покоя: она получает 8% <color style='color:#80C0FF;'>бонус Гидро урона</color> и 10 уровней Выздоровления. Когда элементальные навыки неактивных персонажей вашего отряда поблизости (за исключением Сиджвин) наносят урон, расходуется 1 уровень Выздоровления и урон данного элементального навыка увеличивается. За каждую 1000 ед. макс. HP свыше 30 000 ед. макс. HP Сиджвин урон увеличивается на 80 ед. Урон применяемого элементального навыка таким способом можно увеличить не более чем на 2800 ед.",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "Скрупулёзная диагностика и лечение",
                        "Desc": "Когда Сиджвин исцеляет персонажей, исцеление увеличивается согласно общему значению текущего Долга жизни всех персонажей отряда: за каждые 1000 ед. лечение увеличивается на 3%. Размер лечения таким способом можно увеличить не более чем на 30%.",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "Экстренная дозировка",
                        "Desc": "Под водой исцеляет вашего активного персонажа в течение 2,5 сек., если его HP ниже 50%. Исцеление пропорционально 50% его макс. HP. Кроме того, сопротивление всем элементам и физическое сопротивление этого персонажа снижается на 10% на 10 сек. Эффект может возникнуть один раз в 20 сек.",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "«Ведома ли счастливейшим душам тревога?»",
                        "Desc": "<color style='color:#FFD780;'>Бодрящий бальзам-пузырь</color> Прыгучей гидротерапии получает 3 дополнительных отскока и при первых трёх отскоках не становится меньше.<br>Пассивный талант Требуется полноценный отдых получает усиление: каждый отскок бальзам-пузыря наделяет Сиджвин 1 уровнем Выздоровления. Увеличение урона с помощью Выздоровления изменяется следующим образом: за каждую 1000 ед. HP свыше 30 000 ед. HP Сиджвин урон увеличивается на 100 ед. Урон таким способом можно увеличить не более чем на 3500 ед. Необходимо разблокировать пассивный талант Требуется полноценный отдых.",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "«Могут ли милосерднейшие из душ победить врагов?»",
                        "Desc": "Используя <color style='color:#FFD780;'>Прыгучую гидротерапию</color> и <color style='color:#FFD780;'>Сверхнасыщенную инъекцию</color>, Сиджвин создаёт щит-пузырь, равный 30% от её макс. HP, который поглощает <color style='color:#80C0FF;'>Гидро урон</color> с эффективностью 250%.<br>Кроме того, после того как Бодрящий бальзам-пузырь Прыгучей гидротерапии или Сверхнасыщенная инъекция попадают во врага, его <color style='color:#80C0FF;'>Гидро сопротивление</color> на 8 сек. снижается на 35%.",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "«Могут ли здоровейшие из душ излечить жар?»",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Прыгучая гидротерапия</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "«Могут ли прекраснейшие из душ пресечь увядание?»",
                        "Desc": "Длительность <color style='color:#FFD780;'>Сверхнасыщенной инъекции</color> увеличивается на 3 сек.",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "«Могут ли радостнейшие из душ избавить от мук?»",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Сверхнасыщенная инъекция</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "«Вознесут ли светлейшие из душ за меня молитвы?»",
                        "Desc": "Исцеляя персонажей, Сиджвин повышает шанс крит. попадания и крит. урон её <color style='color:#FFD780;'>Сверхнасыщенной инъекции</color> пропорционально своему макс. HP: за каждую 1000 ед. её макс. HP шанс крит. попадания увеличивается на 0,4%, а крит. урон - на 2,2% на 15 сек. Максимальное увеличение шанса крит. попадания, которого можно добиться таким способом, составляет 20%, а крит. урона - 110%.",
                        "Icon": "UI_Talent_S_Sigewinne_04"
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Прицельное лечение",
                        "Desc": "<color style='color:#FFD780;'>Обычная атака</color><br>До трёх последовательных атак.<br><br><color style='color:#FFD780;'>Заряженная атака</color><br>Более меткий <color style='color:#FFD780;'>прицельный выстрел</color> с увеличенным уроном.<br>Во время прицеливания стрела постепенно накапливает энергию Гидро. При полном заряде Сиджвин периодически выпускает в цель медленно передвигающиеся Пузырьки сострадания, которые наносят <color style='color:#80C0FF;'>Гидро урон</color>. Когда выпускается наделённая силой потоков стрела, при попадании она наносит <color style='color:#80C0FF;'>Гидро урон</color>.<br><br><color style='color:#FFD780;'>Атака в падении</color><br>Выпускает град стрел, которые при приземлении персонажа наносят урон по площади.",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "Урон атаки 1",
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
                                "Desc": "Урон атаки 2",
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
                                "Desc": "Урон атаки 3",
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
                                "Desc": "Прицельный выстрел",
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
                                "Desc": "Заряженный выстрел",
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
                                "Desc": "Урон Пузырька сострадания",
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
                                "Desc": "Урон в падении",
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
                                "Desc": "Урон низкого/высокого удара",
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
                        "Name": "Прыгучая гидротерапия",
                        "Desc": "Выпускает из пузырькового пистолета, изготовленного в крепости Меропид, <color style='color:#FFD780;'>Бодрящий пузырёк</color>, который улучшает кровообращение и помогает пациентам уснуть.<br>Бодрящий пузырёк прыгает между противниками поблизости и наносит поражённым врагам <color style='color:#80C0FF;'>Гидро урон</color>, пропорциональный макс. HP Сиджвин. Отскакивая, он восстанавливает HP всем членам отряда поблизости за исключением Сиджвин. Объём лечения зависит от макс. HP Сиджвин.<br>Отпрыгнув 5 раз, Бодрящий пузырёк исчезает и восстанавливает HP Сиджвин пропорционально её макс. HP.<br>Если врагов нет, Бодрящий пузырёк прыгает поблизости. Одновременно может существовать только один Бодрящий пузырёк, созданный самой Сиджвин.<br>При долгом нажатии способ активации навыка меняется.<br><br><color style='color:#FFD780;'>Долгое нажатие</color><br>Переходит в режим прицеливания, собирает заряд и выдувает более крупный, более сильный Бодрящий пузырёк! Пузырёк в зависимости от длительности удержания растёт, причём его рост делится на два уровня. За каждый уровень роста наносимый им урон и лечение увеличивается на 5%. При отскоке Крупный Бодрящий пузырёк теряет один уровень роста, пока не станет обычным Бодрящим пузырьком.<br>Слабые враги, поражённые большим Бодрящим пузырьком, оказываются в заключении и теряют способность двигаться.<br><br>Кроме того, когда Сиджвин активирует этот навык, рядом с ней создаётся 2 Капли источника. Каждая поглощённая Сиджвин Капля источника даёт ей Долг жизни, равный 10% от её макс. HP.<br>Когда Долг жизни Сиджвин снимается, за каждые 2000 единиц снятого Долга жизни она восстанавливает 1 ед. энергии. Таким способом Сиджвин может восстановить до 5 ед. энергии.<br><br><color style='color:#FFD780;'>Архэ: Усия</color><br>Периодически на место, куда попал Бодрящий пузырёк, нисходит Клинок бурных вод, который наносит <color style='color:#80C0FF;'>Гидро урон</color> усии, пропорциональный макс. HP Сиджвин.<br><br><i>«Что скажешь? Подобная гидротерапия не только стимулирует кровоток, но и доставляет пациентам массу удовольствия. О, а ещё она помогает больным, которым нужен отдых, хорошо поспать...»</i>",
                        "Icon": "Skill_S_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "Урон Бодрящего пузырька",
                                "ParamLevelList": [
                                    "2.28% макс. HP",
                                    "2.451% макс. HP",
                                    "2.622% макс. HP",
                                    "2.85% макс. HP",
                                    "3.021% макс. HP",
                                    "3.192% макс. HP",
                                    "3.42% макс. HP",
                                    "3.648% макс. HP",
                                    "3.876% макс. HP",
                                    "4.104% макс. HP",
                                    "4.332% макс. HP",
                                    "4.56% макс. HP",
                                    "4.845% макс. HP",
                                    "5.13% макс. HP",
                                    "5.415% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Лечение Бодрящего пузырька",
                                "ParamLevelList": [
                                    "2.8% макс. HP + 269.6314",
                                    "3.01% макс. HP + 296.5983",
                                    "3.22% макс. HP + 325.81244",
                                    "3.5% макс. HP + 357.2738",
                                    "3.71% макс. HP + 390.98242",
                                    "3.92% макс. HP + 426.93826",
                                    "4.2% макс. HP + 465.14136",
                                    "4.48% макс. HP + 505.59167",
                                    "4.76% макс. HP + 548.28925",
                                    "5.04% макс. HP + 593.2341",
                                    "5.32% макс. HP + 640.42615",
                                    "5.6% макс. HP + 689.8654",
                                    "5.95% макс. HP + 741.55194",
                                    "6.3% макс. HP + 795.4857",
                                    "6.65% макс. HP + 851.66675"
                                ]
                            },
                            {
                                "Desc": "Лечение завершения прыжков",
                                "ParamLevelList": [
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP",
                                    "50.0% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Урон Клинка бурных вод",
                                "ParamLevelList": [
                                    "0.684% макс. HP",
                                    "0.7353% макс. HP",
                                    "0.7866% макс. HP",
                                    "0.855% макс. HP",
                                    "0.9063% макс. HP",
                                    "0.9576% макс. HP",
                                    "1.026% макс. HP",
                                    "1.0944% макс. HP",
                                    "1.1628% макс. HP",
                                    "1.2312% макс. HP",
                                    "1.2996% макс. HP",
                                    "1.368% макс. HP",
                                    "1.4535% макс. HP",
                                    "1.539% макс. HP",
                                    "1.6245% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Интервал Клинка бурных вод",
                                "ParamLevelList": [
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек."
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек."
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Сверхнасыщенная инъекция",
                        "Desc": "Достаёт специальный шприц, сделанный в крепости Меропид, и атакует перед собой волнами доброты и лекарств, нанося периодический <color style='color:#80C0FF;'>Гидро урон по площади</color>, пропорциональный макс. HP Сиджвин.<br>Кроме того, во время применения навыка Сиджвин поглощает до 2 Капель источника в определённом радиусе поблизости.<br><br><i>«Ох, лекарство в чересчур больших дозах ничем не лучше яда. Это очень опасно! Но заботы и ухода, которые так нужны пациентам, никогда не бывает слишком много!»</i>",
                        "Icon": "Skill_E_Sigewinne_01",
                        "ParamDesc": [
                            {
                                "Desc": "Урон навыка",
                                "ParamLevelList": [
                                    "11.7708% макс. HP",
                                    "12.6536% макс. HP",
                                    "13.5364% макс. HP",
                                    "14.7135% макс. HP",
                                    "15.5963% макс. HP",
                                    "16.4791% макс. HP",
                                    "17.6562% макс. HP",
                                    "18.8333% макс. HP",
                                    "20.0104% макс. HP",
                                    "21.1874% макс. HP",
                                    "22.3645% макс. HP",
                                    "23.5416% макс. HP",
                                    "25.0129% макс. HP",
                                    "26.4843% макс. HP",
                                    "27.9556% макс. HP"
                                ]
                            },
                            {
                                "Desc": "Длительность",
                                "ParamLevelList": [
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек.",
                                    "2.5 сек."
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек.",
                                    "18 сек."
                                ]
                            },
                            {
                                "Desc": "Потребление энергии",
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
                        "Name": "Требуется полноценный отдых",
                        "Desc": "Активировав <color style='color:#FFD780;'>Прыгучую гидротерапию</color>, Сиджвин на 18 сек. наделяет себя эффектом Полупринудительного покоя: она получает 8% <color style='color:#80C0FF;'>бонус Гидро урона</color> и 10 уровней Выздоровления. Когда элементальные навыки неактивных персонажей вашего отряда поблизости (за исключением Сиджвин) наносят урон, расходуется 1 уровень Выздоровления, и урон данного элементального навыка увеличивается. За каждые 1000 ед. макс. HP свыше 30 000 ед. макс. HP Сиджвин урон увеличивается на 80 ед. Урон применяемого элементального навыка таким способом можно увеличить не более чем на 2800 ед.",
                        "Icon": "UI_Talent_S_Sigewinne_05"
                    },
                    {
                        "Name": "Скрупулёзная диагностика и лечение",
                        "Desc": "Когда Сиджвин исцеляет персонажей, исцеление увеличивается согласно общему значению текущего Долга жизни всех персонажей отряда: за каждые 1000 ед. лечение увеличивается на 3%. Размер лечения таким способом можно увеличить не более чем на 30%.",
                        "Icon": "UI_Talent_S_Sigewinne_06"
                    },
                    {
                        "Name": "Экстренная дозировка",
                        "Desc": "Под водой исцеляет вашего активного персонажа в течение 2,5 сек., если его HP ниже 50%. Исцеление пропорционально 50% его макс. HP. Кроме того, сопротивление всем элементам и физическое сопротивление этого персонажа снижается на 10% на 10 сек. Эффект может возникнуть один раз в 20 сек.",
                        "Icon": "UI_Talent_S_Sigewinne_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "«Ведома ли счастливейшим душам тревога?»",
                        "Desc": "<color style='color:#FFD780;'>Бодрящий пузырёк</color> Прыгучей гидротерапии получает 3 дополнительных отскока, и при первых трёх отскоках большой Бодрящий пузырёк не становится меньше.<br>Пассивный талант Требуется полноценный отдых получает усиление: каждый отскок пузырька наделяет Сиджвин 1 уровнем Выздоровления. Увеличение урона с помощью Выздоровления изменяется следующим образом: за каждые 1000 ед. макс. HP свыше 30 000 ед. Сиджвин урон увеличивается на 100 ед. Урон таким способом можно увеличить не более чем на 3500 ед. Необходимо разблокировать пассивный талант Требуется полноценный отдых.",
                        "Icon": "UI_Talent_S_Sigewinne_01"
                    },
                    {
                        "Level": 2,
                        "Name": "«Могут ли милосерднейшие из душ победить врагов?»",
                        "Desc": "При использовании <color style='color:#FFD780;'>Прыгучей гидротерапии</color> и <color style='color:#FFD780;'>Сверхнасыщенной инъекции</color>, Сиджвин создаёт щит-пузырь, равный 30% от её макс. HP, который поглощает <color style='color:#80C0FF;'>Гидро урон</color> с эффективностью 250%. Щит активен до окончания использования этих навыков.<br>Кроме того, после того как Бодрящий пузырёк Прыгучей гидротерапии или Сверхнасыщенная инъекция попадают во врага, его <color style='color:#80C0FF;'>Гидро сопротивление</color> на 8 сек. снижается на 35%.",
                        "Icon": "UI_Talent_S_Sigewinne_02"
                    },
                    {
                        "Level": 3,
                        "Name": "«Могут ли здоровейшие из душ излечить жар?»",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Прыгучая гидротерапия</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Sigewinne_01"
                    },
                    {
                        "Level": 4,
                        "Name": "«Могут ли прекраснейшие из душ пресечь увядание?»",
                        "Desc": "Длительность <color style='color:#FFD780;'>Сверхнасыщенной инъекции</color> увеличивается на 3 сек.",
                        "Icon": "UI_Talent_S_Sigewinne_03"
                    },
                    {
                        "Level": 5,
                        "Name": "«Могут ли радостнейшие из душ избавить от мук?»",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Сверхнасыщенная инъекция</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Sigewinne_02"
                    },
                    {
                        "Level": 6,
                        "Name": "«Вознесут ли светлейшие из душ за меня молитвы?»",
                        "Desc": "Исцеляя персонажей, Сиджвин повышает шанс крит. попадания и крит. урон её <color style='color:#FFD780;'>Сверхнасыщенной инъекции</color> пропорционально своему макс. HP: за каждую 1000 ед. её макс. HP шанс крит. попадания увеличивается на 0,4%, а крит. урон - на 2,2% на 15 сек. Максимальное увеличение шанса крит. попадания, которого можно добиться таким способом, составляет 20%, а увеличение крит. урона - 110%.",
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