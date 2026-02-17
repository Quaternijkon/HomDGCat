// Auto Generated

var _AvatarDataConfig_ = {
    "Clorinde": {
        "BallList": [
            {
                "When": "Swift Hunt / Impale / C1 / C6",
                "DropArray": [
                    {
                        "Num": 1,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD",
                "CD": 2
            }
        ],
        "EndureList": [
            {
                "Skill": "C2",
                "Endure": 0.3
            },
            {
                "Skill": "C6",
                "Endure": 0.0
            }
        ],
        "WindZoneList": [],
        "OtherDataList": [
            "Elemental Skill's Swift Hunt counts as Normal Attack animation, but Impale the Night does not, even though they both deal Normal Attack DMG.<br>Some Normal Attack animation-triggered effects are Xingqiu's Burst and Fischl's C6. On the other hand, Beidou's Burst is triggered by Normal Attack DMG.",
            "Q damage AoE ≈ Raiden Q opening damage AoE<br>C1 damage AoE ≈ Raiden Q Normal ATK AoE<br>C6 damage AoE ≈ Raiden Q Charged ATK AoE",
            "Q damage and Impale Lv2~3 damage will <b>knock back enemies towards Clorinde herself</b>. ",
            "<b>Particle Generation:</b><br>- When Swift Hunt / Impale / C1 / C6 hits a monster, generate 1 Electro Particle, CD 2s.",
            "<b>ICD:</b><br>- Swift Hunt / Impale 1GU, share a default ICD (3 hits / 2.5s)<br>- C1/C6 1GU, share ICD, can apply only once every 1s<br>- Q damage 1GU, default ICD (3 hits / 2.5s)<br>Q damage interval is 0.1s, with 5 hits, so can apply 2 times.",
            "<b>Interruption Resistance:</b><br>- C2: 0.3 = Xingqiu Q<br>- C6: 0 = cannot be intrerupted"
        ]
    }
}

var _AvatarMats_ = {
    "Clorinde": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104141": 1,
                "101237": 3,
                "112080": 3
            },
            {
                "202": 40000,
                "104142": 3,
                "113053": 2,
                "101237": 10,
                "112080": 15
            },
            {
                "202": 60000,
                "104142": 6,
                "113053": 4,
                "101237": 20,
                "112081": 12
            },
            {
                "202": 80000,
                "104143": 3,
                "113053": 8,
                "101237": 30,
                "112081": 18
            },
            {
                "202": 100000,
                "104143": 6,
                "113053": 12,
                "101237": 45,
                "112082": 12
            },
            {
                "202": 120000,
                "104144": 6,
                "113053": 20,
                "101237": 60,
                "112082": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104341": 3,
                "112080": 6
            },
            {
                "202": 17500,
                "104342": 2,
                "112081": 3
            },
            {
                "202": 25000,
                "104342": 4,
                "112081": 4
            },
            {
                "202": 30000,
                "104342": 6,
                "112081": 6
            },
            {
                "202": 37500,
                "104342": 9,
                "112081": 9
            },
            {
                "202": 120000,
                "104343": 4,
                "112082": 4,
                "113048": 1
            },
            {
                "202": 260000,
                "104343": 6,
                "112082": 6,
                "113048": 1
            },
            {
                "202": 450000,
                "104343": 12,
                "112082": 9,
                "113048": 2
            },
            {
                "202": 700000,
                "104343": 16,
                "112082": 12,
                "113048": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104341": 3,
                "112080": 6
            },
            {
                "202": 17500,
                "104342": 2,
                "112081": 3
            },
            {
                "202": 25000,
                "104342": 4,
                "112081": 4
            },
            {
                "202": 30000,
                "104342": 6,
                "112081": 6
            },
            {
                "202": 37500,
                "104342": 9,
                "112081": 9
            },
            {
                "202": 120000,
                "104343": 4,
                "112082": 4,
                "113048": 1
            },
            {
                "202": 260000,
                "104343": 6,
                "112082": 6,
                "113048": 1
            },
            {
                "202": 450000,
                "104343": 12,
                "112082": 9,
                "113048": 2
            },
            {
                "202": 700000,
                "104343": 16,
                "112082": 12,
                "113048": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104341": 3,
                "112080": 6
            },
            {
                "202": 17500,
                "104342": 2,
                "112081": 3
            },
            {
                "202": 25000,
                "104342": 4,
                "112081": 4
            },
            {
                "202": 30000,
                "104342": 6,
                "112081": 6
            },
            {
                "202": 37500,
                "104342": 9,
                "112081": 9
            },
            {
                "202": 120000,
                "104343": 4,
                "112082": 4,
                "113048": 1
            },
            {
                "202": 260000,
                "104343": 6,
                "112082": 6,
                "113048": 1
            },
            {
                "202": 450000,
                "104343": 12,
                "112082": 9,
                "113048": 2
            },
            {
                "202": 700000,
                "104343": 16,
                "112082": 12,
                "113048": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Clorinde": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Marechaussee Creed",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 5 rapid strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to nimbly dash forward, slashing and using her pistolet to fire Suppressing Shots in a fan pattern.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 12.0,
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
                                "ParamLevelList": [
                                    "54.06%",
                                    "58.46%",
                                    "62.86%",
                                    "69.146%",
                                    "73.546%",
                                    "78.575%",
                                    "85.49%",
                                    "92.404%",
                                    "99.319%",
                                    "106.862%",
                                    "114.405%",
                                    "121.948%",
                                    "129.492%",
                                    "137.035%",
                                    "144.578%"
                                ]
                            },
                            {
                                "Desc": "2段ダメージ",
                                "ParamLevelList": [
                                    "51.628%",
                                    "55.831%",
                                    "60.033%",
                                    "66.036%",
                                    "70.239%",
                                    "75.041%",
                                    "81.645%",
                                    "88.248%",
                                    "94.852%",
                                    "102.056%",
                                    "109.26%",
                                    "116.464%",
                                    "123.668%",
                                    "130.872%",
                                    "138.076%"
                                ]
                            },
                            {
                                "Desc": "3段ダメージ",
                                "ParamLevelList": [
                                    "34.185%+34.185%",
                                    "36.968%+36.968%",
                                    "39.75%+39.75%",
                                    "43.725%+43.725%",
                                    "46.507%+46.507%",
                                    "49.687%+49.687%",
                                    "54.06%+54.06%",
                                    "58.433%+58.433%",
                                    "62.805%+62.805%",
                                    "67.575%+67.575%",
                                    "72.345%+72.345%",
                                    "77.115%+77.115%",
                                    "81.885%+81.885%",
                                    "86.655%+86.655%",
                                    "91.425%+91.425%"
                                ]
                            },
                            {
                                "Desc": "4段ダメージ",
                                "ParamLevelList": [
                                    "23.134%+23.134%+23.134%",
                                    "25.017%+25.017%+25.017%",
                                    "26.9%+26.9%+26.9%",
                                    "29.59%+29.59%+29.59%",
                                    "31.473%+31.473%+31.473%",
                                    "33.625%+33.625%+33.625%",
                                    "36.584%+36.584%+36.584%",
                                    "39.543%+39.543%+39.543%",
                                    "42.502%+42.502%+42.502%",
                                    "45.73%+45.73%+45.73%",
                                    "48.958%+48.958%+48.958%",
                                    "52.186%+52.186%+52.186%",
                                    "55.414%+55.414%+55.414%",
                                    "58.642%+58.642%+58.642%",
                                    "61.87%+61.87%+61.87%"
                                ]
                            },
                            {
                                "Desc": "5段ダメージ",
                                "ParamLevelList": [
                                    "90.01%",
                                    "97.337%",
                                    "104.663%",
                                    "115.129%",
                                    "122.456%",
                                    "130.829%",
                                    "142.342%",
                                    "153.855%",
                                    "165.367%",
                                    "177.927%",
                                    "190.487%",
                                    "203.046%",
                                    "215.606%",
                                    "228.165%",
                                    "240.725%"
                                ]
                            },
                            {
                                "Desc": "重撃ダメージ",
                                "ParamLevelList": [
                                    "128.14%",
                                    "138.57%",
                                    "149.0%",
                                    "163.9%",
                                    "174.33%",
                                    "186.25%",
                                    "202.64%",
                                    "219.03%",
                                    "235.42%",
                                    "253.3%",
                                    "271.18%",
                                    "289.06%",
                                    "306.94%",
                                    "324.82%",
                                    "342.7%"
                                ]
                            },
                            {
                                "Desc": "重撃スタミナ消費",
                                "ParamLevelList": [
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0"
                                ]
                            },
                            {
                                "Desc": "落下期間のダメージ",
                                "ParamLevelList": [
                                    "63.932%",
                                    "69.136%",
                                    "74.34%",
                                    "81.774%",
                                    "86.978%",
                                    "92.925%",
                                    "101.102%",
                                    "109.28%",
                                    "117.457%",
                                    "126.378%",
                                    "135.299%",
                                    "144.22%",
                                    "153.14%",
                                    "162.061%",
                                    "170.982%"
                                ]
                            },
                            {
                                "Desc": "低空/高空落下攻撃ダメージ",
                                "ParamLevelList": [
                                    "127.838%/159.676%",
                                    "138.243%/172.673%",
                                    "148.649%/185.67%",
                                    "163.513%/204.237%",
                                    "173.919%/217.234%",
                                    "185.811%/232.087%",
                                    "202.162%/252.511%",
                                    "218.513%/272.935%",
                                    "234.865%/293.359%",
                                    "252.702%/315.639%",
                                    "270.54%/337.919%",
                                    "288.378%/360.2%",
                                    "306.216%/382.48%",
                                    "324.054%/404.761%",
                                    "341.892%/427.041%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Hunt the Dark",
                        "Desc": "Preparing her pistolet, she enters the \"Night Watch\" state, using steel and shot together. In this state, Clorinde's Normal Attacks will be transformed into \"Wild Hunt\" pistolet attacks, and the DMG dealt is converted into <color style='color:#FFACFF;'>Electro DMG</color> that cannot be overridden by infusions. Her Elemental Skill will be transformed into \"Impale the Night\": Performs a lunging attack, dealing <color style='color:#FFACFF;'>Electro DMG</color>. The DMG done through the aforementioned method is considered Normal Attack DMG.<br><br><color style='color:#FFD780;'>Wild Hunt</color><br> ·  When her Bond of Life is equal to or greater than 100% of her max HP: Performs a standard pistolet shot.<br> ·  When her Bond of Life is less than 100%, firing her pistolet will grant her Bond of Life, with the amount gained based on her max HP. The shots she fires can pierce opponents, and DMG dealt to opponents in their path is increased.<br><br><color style='color:#FFD780;'>Impale the Night</color><br>Clear Clorinde's Bond of Life, and enhance this usage of Impale the Night based on the value of the Bond of Life cleared as a percentage of her max HP:<br> ·  When no Bond of Life is cleared, perform a normal lunging strike;<br> ·  When the value of the Bond of Life cleared is less than 100% of her max HP, increase the AoE of the lunging attack and the DMG dealt, and heal Clorinde, with the amount healed based on the value of the Bond of Life cleared;<br> ·  When the value of the Bond of Life cleared is equal to or greater than 100% of her max HP, she will use Impale the Night: Pact, in which the AoE and DMG dealt by the lunge is increased even further, and healing multiplier is increased.<br><br>In addition, when Clorinde is in the Night Watch state, healing effects other than Impale the Night will not take effect and will instead be converted into a Bond of Life that is a percentage of the healing that would have been received.<br><br><color style='color:#FFD780;'>Arkhe: Ousia</color><br>Periodically, when Clorinde's pistolet shots strike opponents, a Surging Blade will fall on their position, dealing Ousia-aligned <color style='color:#FFACFF;'>Electro DMG</color>.<br><br><i>Though the evil that lurked in the shadows of the night had been purged across thousands of years, a shadow that the light could not reach clouded human hearts.<br>Even now, the warning left by the Golden Hunter is etched into her memory: Those of the Night Watch, holding aloft lit candles against the blackness, have even greater need to remain vigilant. Be not corrupted by the cold dark.</i>",
                        "Num": 1,
                        "Lock": 12.0,
                        "Icon": "Skill_S_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "普通/貫通弾ダメージ",
                                "ParamLevelList": [
                                    "26.763%/33.454%JP0B",
                                    "28.942%/36.177%JP0B",
                                    "31.12%/38.9%JP0B",
                                    "34.232%/42.79%JP0B",
                                    "36.41%/45.513%JP0B",
                                    "38.9%/48.625%JP0B",
                                    "42.323%/52.904%JP0B",
                                    "45.746%/57.183%JP0B",
                                    "49.17%/61.462%JP0B",
                                    "52.904%/66.13%JP0B",
                                    "56.638%/70.798%JP0B",
                                    "60.373%/75.466%JP0B",
                                    "64.107%/80.134%JP0B",
                                    "67.842%/84.802%JP0B",
                                    "71.576%/89.47%JP0B"
                                ]
                            },
                            {
                                "Desc": "命の契約を獲得",
                                "ParamLevelList": [
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%"
                                ]
                            },
                            {
                                "Desc": "ランク1の「強化突刺」ダメージ",
                                "ParamLevelList": [
                                    "32.972%JP0B",
                                    "35.656%JP0B",
                                    "38.34%JP0B",
                                    "42.174%JP0B",
                                    "44.858%JP0B",
                                    "47.925%JP0B",
                                    "52.142%JP0B",
                                    "56.36%JP0B",
                                    "60.577%JP0B",
                                    "65.178%JP0B",
                                    "69.779%JP0B",
                                    "74.38%JP0B",
                                    "78.98%JP0B",
                                    "83.581%JP0B",
                                    "88.182%JP0B"
                                ]
                            },
                            {
                                "Desc": "ランク2の「強化突刺」ダメージ",
                                "ParamLevelList": [
                                    "43.963%JP0B",
                                    "47.542%JP0B",
                                    "51.12%JP0B",
                                    "56.232%JP0B",
                                    "59.81%JP0B",
                                    "63.9%JP0B",
                                    "69.523%JP0B",
                                    "75.146%JP0B",
                                    "80.77%JP0B",
                                    "86.904%JP0B",
                                    "93.038%JP0B",
                                    "99.173%JP0B",
                                    "105.307%JP0B",
                                    "111.442%JP0B",
                                    "117.576%JP0B"
                                ]
                            },
                            {
                                "Desc": "ランク2の「強化突刺」回復",
                                "ParamLevelList": [
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B",
                                    "現在の命の契約105.0%JP0B"
                                ]
                            },
                            {
                                "Desc": "ランク3の「強化突刺」ダメージ",
                                "ParamLevelList": [
                                    "18.318%×3JP0B",
                                    "19.809%×3JP0B",
                                    "21.3%×3JP0B",
                                    "23.43%×3JP0B",
                                    "24.921%×3JP0B",
                                    "26.625%×3JP0B",
                                    "28.968%×3JP0B",
                                    "31.311%×3JP0B",
                                    "33.654%×3JP0B",
                                    "36.21%×3JP0B",
                                    "38.766%×3JP0B",
                                    "41.322%×3JP0B",
                                    "43.878%×3JP0B",
                                    "46.434%×3JP0B",
                                    "48.99%×3JP0B"
                                ]
                            },
                            {
                                "Desc": "ランク3の「強化突刺」回復",
                                "ParamLevelList": [
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B",
                                    "現在の命の契約120.0%JP0B"
                                ]
                            },
                            {
                                "Desc": "治療で獲得する命の契約",
                                "ParamLevelList": [
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B",
                                    "80.0%回復量JP0B"
                                ]
                            },
                            {
                                "Desc": "迸発の刃のダメージ",
                                "ParamLevelList": [
                                    "43.2%",
                                    "46.44%",
                                    "49.68%",
                                    "54.0%",
                                    "57.24%",
                                    "60.48%",
                                    "64.8%",
                                    "69.12%",
                                    "73.44%",
                                    "77.76%",
                                    "82.08%",
                                    "86.4%",
                                    "91.8%",
                                    "97.2%",
                                    "102.6%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Last Lightfall",
                        "Desc": "Grants herself a Bond of Life based upon her own max HP before swiftly evading and striking with saber and sidearm as one, dealing <color style='color:#FFACFF;'>AoE Electro DMG</color>.<br><br><i>It is said the legacy of the ancient art of resisting non-human beings with but a mortal body can be traced back to the Lochknights who resisted the Remurian Empire.<br>Be that as it may, so long as one can find a way to control the level of force used, it's not as if it cannot be used in duels against ordinary opponents.</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "126.88%×5",
                                    "136.396%×5",
                                    "145.912%×5",
                                    "158.6%×5",
                                    "168.116%×5",
                                    "177.632%×5",
                                    "190.32%×5",
                                    "203.008%×5",
                                    "215.696%×5",
                                    "228.384%×5",
                                    "241.072%×5",
                                    "253.76%×5",
                                    "269.62%×5",
                                    "285.48%×5",
                                    "301.34%×5"
                                ]
                            },
                            {
                                "Desc": "命の契約を獲得",
                                "ParamLevelList": [
                                    "66.0%HP上限",
                                    "72.0%HP上限",
                                    "78.0%HP上限",
                                    "84.0%HP上限",
                                    "90.0%HP上限",
                                    "96.0%HP上限",
                                    "102.0%HP上限",
                                    "108.0%HP上限",
                                    "114.0%HP上限",
                                    "120.0%HP上限",
                                    "126.0%HP上限",
                                    "132.0%HP上限",
                                    "138.0%HP上限",
                                    "144.0%HP上限",
                                    "150.0%HP上限"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒",
                                    "60.0秒"
                                ]
                            },
                            {
                                "Desc": "元素エネルギー",
                                "ParamLevelList": [
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0",
                                    "0.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "Dark-Shattering Flame",
                        "Desc": "チーム全員の元素タイプが<color style='color:#FF9999;'>炎元素</color>と<color style='color:#FFACFF;'>雷元素</color>であり、かつ炎元素と雷元素のキャラクターが少なくとも一人ずついる時、<br>クロリンデ<color style='color:#FFD780;'>元素スキル</color>付近にいるチーム内キャラクターが過負荷反応を起こすと、クロリンデに継続時間10秒の「強化」状態を付与する。この状態時、クロリンデの与える<color style='color:#FFACFF;'>雷元素通常攻撃と元素爆発ダメージ</color>はクロリンデ攻撃力の60%分アップする。この方法で追加でアップできるダメージは2400まで。<br>チーム内キャラクターの元素タイプが固有天賦の条件を満たさない、またはクロリンデの元素スキルの継続時間が終了した場合、「強化」状態の効果はクリアされる。JP0B",
                        "Icon": "UI_Talent_S_Clorinde_05"
                    },
                    {
                        "Name": "Lawful Remuneration",
                        "Desc": "If Clorinde's Bond of Life is equal to or greater than 100% of her Max HP, her CRIT Rate will increase by 10% for 15s whenever her Bond of Life value increases or decreases. Max 2 stacks. Each stack is counted independently.<br>Additionally, <color style='color:#FFD780;'>Hunt the Night</color>'s Night Watch state is buffed: While it is active, the percent of healing converted to Bond of Life increases to 100%.",
                        "Icon": "UI_Talent_S_Clorinde_06"
                    },
                    {
                        "Name": "Night Watch's Yield",
                        "Desc": "元素スキルの継続期間中、クロリンデは<color style='color:#FFD780;'>元素スキル</color>の「強化突刺」による治療のみ受けられる。JP0B",
                        "Icon": "UI_Talent_S_Liney_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "\"From This Day, I Pass the Candle's Shadow-Veil\"",
                        "Desc": "While <color style='color:#FFD780;'>Hunt the Dark</color>'s Night Watch state is active, when <color style='color:#FFACFF;'>Electro DMG</color>from Clorinde's Normal Attacks hit opponents, they will trigger 2 coordinated attack from a Nightwatch Shade summoned near the hit opponent, each dealing 30% of Clorinde's ATK as <color style='color:#FFACFF;'>Electro DMG</color>.<br>This effect can occur once every 1s. DMG dealt this way is considered Normal Attack DMG.",
                        "Icon": "UI_Talent_S_Clorinde_01"
                    },
                    {
                        "Level": 2,
                        "Name": "\"Now, As We Face the Perils of the Long Night\"",
                        "Desc": "固有天賦「過負荷」を発動した後、天賦効果の追加雷元素ダメージアップの効果量が元の145%までアップする。<br>固有天賦「過負荷」を解放する必要がある。JP0B",
                        "Icon": "UI_Talent_S_Clorinde_02"
                    },
                    {
                        "Level": 3,
                        "Name": "\"I Pledge to Remember the Oath of Daylight\"",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Hunt the Dark</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Clorinde_01"
                    },
                    {
                        "Level": 4,
                        "Name": "\"To Enshrine Tears, Life, and Love\"",
                        "Desc": "When <color style='color:#FFD780;'>Last Lightfall</color> deals DMG to opponent(s), DMG dealt is increased based on Clorinde's Bond of Life percentage. Every 1% of her current Bond of Life will increase <color style='color:#FFD780;'>Last Lightfall</color> DMG by 2%. The maximum <color style='color:#FFD780;'>Last Lightfall</color> DMG increase achievable this way is 200%.",
                        "Icon": "UI_Talent_S_Clorinde_03"
                    },
                    {
                        "Level": 5,
                        "Name": "\"Holding Dawn's Coming as My Votive\"",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Last Lightfall</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Clorinde_02"
                    },
                    {
                        "Level": 6,
                        "Name": "\"And So Shall I Never Despair\"",
                        "Desc": "For 12s after <color style='color:#FFD780;'>Hunt the Night</color> is used, Clorinde's CRIT Rate will be increased by 10%, and her CRIT DMG by 70%.<br>Additionally, while Night Watch is active, a Glimbright Shade will appear under specific circumstances, decreasing DMG dealt to Clorinde by 80% for 1s and increasing her interruption resistance; it will also attack opponents, dealing 200% of Clorinde's ATK as <color style='color:#FFACFF;'>Electro DMG</color>. DMG dealt this way is considered Normal Attack DMG.<br>The Glimbright Shade will appear under the following circumstances:<br> ·  When Clorinde is about to be attacked by an opponent.<br> ·  When Clorinde uses Impale the Night: Pact.<br>1 Glimbright Shade can be summoned in the aforementioned ways every Xs. 6 Shades can be summoned per single Night Watch duration.",
                        "Icon": "UI_Talent_S_Clorinde_04"
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Name": "通常攻撃 · 影を追う誓いJP0B",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>剣による最大5段の連続攻撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>一定のスタミナを消費し、前方に手際よく斬撃を放ち、銃による扇状の制圧射撃を行う。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から落下し地面に衝撃を与える。経路上の敵を攻撃し、落下時に範囲ダメージを与える。JP0B",
                        "Num": 1,
                        "Lock": 5.0,
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
                                "ParamLevelList": [
                                    "54.06%",
                                    "58.46%",
                                    "62.86%",
                                    "69.146%",
                                    "73.546%",
                                    "78.575%",
                                    "85.49%",
                                    "92.404%",
                                    "99.319%",
                                    "106.862%",
                                    "114.405%",
                                    "121.948%",
                                    "129.492%",
                                    "137.035%",
                                    "144.578%"
                                ]
                            },
                            {
                                "Desc": "2段ダメージ",
                                "ParamLevelList": [
                                    "51.628%",
                                    "55.831%",
                                    "60.033%",
                                    "66.036%",
                                    "70.239%",
                                    "75.041%",
                                    "81.645%",
                                    "88.248%",
                                    "94.852%",
                                    "102.056%",
                                    "109.26%",
                                    "116.464%",
                                    "123.668%",
                                    "130.872%",
                                    "138.076%"
                                ]
                            },
                            {
                                "Desc": "3段ダメージ",
                                "ParamLevelList": [
                                    "34.185%+34.185%",
                                    "36.968%+36.968%",
                                    "39.75%+39.75%",
                                    "43.725%+43.725%",
                                    "46.507%+46.507%",
                                    "49.687%+49.687%",
                                    "54.06%+54.06%",
                                    "58.433%+58.433%",
                                    "62.805%+62.805%",
                                    "67.575%+67.575%",
                                    "72.345%+72.345%",
                                    "77.115%+77.115%",
                                    "81.885%+81.885%",
                                    "86.655%+86.655%",
                                    "91.425%+91.425%"
                                ]
                            },
                            {
                                "Desc": "4段ダメージ",
                                "ParamLevelList": [
                                    "23.134%+23.134%+23.134%",
                                    "25.017%+25.017%+25.017%",
                                    "26.9%+26.9%+26.9%",
                                    "29.59%+29.59%+29.59%",
                                    "31.473%+31.473%+31.473%",
                                    "33.625%+33.625%+33.625%",
                                    "36.584%+36.584%+36.584%",
                                    "39.543%+39.543%+39.543%",
                                    "42.502%+42.502%+42.502%",
                                    "45.73%+45.73%+45.73%",
                                    "48.958%+48.958%+48.958%",
                                    "52.186%+52.186%+52.186%",
                                    "55.414%+55.414%+55.414%",
                                    "58.642%+58.642%+58.642%",
                                    "61.87%+61.87%+61.87%"
                                ]
                            },
                            {
                                "Desc": "5段ダメージ",
                                "ParamLevelList": [
                                    "90.01%",
                                    "97.337%",
                                    "104.663%",
                                    "115.129%",
                                    "122.456%",
                                    "130.829%",
                                    "142.342%",
                                    "153.855%",
                                    "165.367%",
                                    "177.927%",
                                    "190.487%",
                                    "203.046%",
                                    "215.606%",
                                    "228.165%",
                                    "240.725%"
                                ]
                            },
                            {
                                "Desc": "重撃ダメージ",
                                "ParamLevelList": [
                                    "128.14%",
                                    "138.57%",
                                    "149.0%",
                                    "163.9%",
                                    "174.33%",
                                    "186.25%",
                                    "202.64%",
                                    "219.03%",
                                    "235.42%",
                                    "253.3%",
                                    "271.18%",
                                    "289.06%",
                                    "306.94%",
                                    "324.82%",
                                    "342.7%"
                                ]
                            },
                            {
                                "Desc": "重撃スタミナ消費",
                                "ParamLevelList": [
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0"
                                ]
                            },
                            {
                                "Desc": "落下期間のダメージ",
                                "ParamLevelList": [
                                    "63.932%",
                                    "69.136%",
                                    "74.34%",
                                    "81.774%",
                                    "86.978%",
                                    "92.925%",
                                    "101.102%",
                                    "109.28%",
                                    "117.457%",
                                    "126.378%",
                                    "135.299%",
                                    "144.22%",
                                    "153.14%",
                                    "162.061%",
                                    "170.982%"
                                ]
                            },
                            {
                                "Desc": "低空/高空落下攻撃ダメージ",
                                "ParamLevelList": [
                                    "127.838%/159.676%",
                                    "138.243%/172.673%",
                                    "148.649%/185.67%",
                                    "163.513%/204.237%",
                                    "173.919%/217.234%",
                                    "185.811%/232.087%",
                                    "202.162%/252.511%",
                                    "218.513%/272.935%",
                                    "234.865%/293.359%",
                                    "252.702%/315.639%",
                                    "270.54%/337.919%",
                                    "288.378%/360.2%",
                                    "306.216%/382.48%",
                                    "324.054%/404.761%",
                                    "341.892%/427.041%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "夜狩の巡りJP0B",
                        "Desc": "事前に装弾し、剣と銃を組み合わせて戦う「夜巡り」状態に入る。この状態のクロリンデの通常攻撃は銃射撃「馳猟」となり、与えるダメージが元素付与によって他の元素に変化しない<color style='color:#FFACFF;'>雷元素ダメージ</color>へと変わる。また、元素スキルは「貫夜」に代わり、突進攻撃を繰り出して<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。これらの方法によるダメージは通常攻撃ダメージと見なされる。<br><br><color style='color:#FFD780;'>馳猟</color><br> · 命の契約がHP上限の100%以上の場合、通常の銃射撃を行う。<br> · 命の契約がHP上限の100%未満の場合、銃を撃つ時、クロリンデのHP上限を基に自身に一定の命の契約を付与する。さらに、敵を貫く弾を発射して経路上の敵により高いダメージを与える。<br><br><color style='color:#FFD780;'>貫夜</color><br>クロリンデの命の契約をクリアし、クリアした命の契約のパーセンテージに応じて今回の貫夜の効果を強化する。<br> · 命の契約をクリアしていない場合、通常の突進攻撃を行う。<br> · クリアした命の契約がHP上限の100%未満の場合、今回の貫夜の攻撃範囲と与えるダメージをアップし、クリアした命の契約を基にクロリンデのHPを回復する。<br> · クリアした命の契約がHP上限の100%以上の場合、貫夜 · 契約を繰り出し、今回の貫夜の攻撃範囲と与えるダメージをさらにアップし、クロリンデのHPをより多く回復する。<br><br>また、クロリンデが夜巡り状態にある時、貫夜以外の治療効果は無効になり、代わりに自身に回復量の一定割合の命の契約を付与する。<br><br><color style='color:#FFD780;'>アルケー：ウーシア</color><br>クロリンデの銃射撃が敵に命中した後、敵の位置に迸発の刃を召喚し、ウーシアを帯びた<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。一定時間ごとに発動が可能。<br><br><i>闇に潜む邪祟のものは千年の間に狩り尽くされたが、人の心には依然として光が届かない場所が残されている。<br>今日に至っても、彼女は「黄金の狩人」の警告を心に刻んでいる——燭火を灯した夜回りは、極寒の闇に染まらぬように、常に警戒を怠ってはならない。</i>JP0B",
                        "Num": 1,
                        "Lock": 12.0,
                        "Icon": "Skill_S_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "馳猟ダメージ",
                                "ParamLevelList": [
                                    "26.763%/33.454%",
                                    "28.942%/36.177%",
                                    "31.12%/38.9%",
                                    "34.232%/42.79%",
                                    "36.41%/45.513%",
                                    "38.9%/48.625%",
                                    "42.323%/52.904%",
                                    "45.746%/57.183%",
                                    "49.17%/61.462%",
                                    "52.904%/66.13%",
                                    "56.638%/70.798%",
                                    "60.373%/75.466%",
                                    "64.107%/80.134%",
                                    "67.842%/84.802%",
                                    "71.576%/89.47%"
                                ]
                            },
                            {
                                "Desc": "馳猟が付与する命の契約",
                                "ParamLevelList": [
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B",
                                    "HP上限35.0%JP0B"
                                ]
                            },
                            {
                                "Desc": "貫夜のダメージ",
                                "ParamLevelList": [
                                    "32.972%/43.963%/18.318%*3",
                                    "35.656%/47.542%/19.809%*3",
                                    "38.34%/51.12%/21.3%*3",
                                    "42.174%/56.232%/23.43%*3",
                                    "44.858%/59.81%/24.921%*3",
                                    "47.925%/63.9%/26.625%*3",
                                    "52.142%/69.523%/28.968%*3",
                                    "56.36%/75.146%/31.311%*3",
                                    "60.577%/80.77%/33.654%*3",
                                    "65.178%/86.904%/36.21%*3",
                                    "69.779%/93.038%/38.766%*3",
                                    "74.38%/99.173%/41.322%*3",
                                    "78.98%/105.307%/43.878%*3",
                                    "83.581%/111.442%/46.434%*3",
                                    "88.182%/117.576%/48.99%*3"
                                ]
                            },
                            {
                                "Desc": "貫夜の回復量",
                                "ParamLevelList": [
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B",
                                    "0%/105.0%/命の契約120.0%JP0B"
                                ]
                            },
                            {
                                "Desc": "命の契約の変換",
                                "ParamLevelList": [
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B",
                                    "回復量80.0%JP0B"
                                ]
                            },
                            {
                                "Desc": "迸発の刃のダメージ",
                                "ParamLevelList": [
                                    "43.2%",
                                    "46.44%",
                                    "49.68%",
                                    "54.0%",
                                    "57.24%",
                                    "60.48%",
                                    "64.8%",
                                    "69.12%",
                                    "73.44%",
                                    "77.76%",
                                    "82.08%",
                                    "86.4%",
                                    "91.8%",
                                    "97.2%",
                                    "102.6%"
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
                                "Desc": "夜巡り状態の継続時間",
                                "ParamLevelList": [
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒",
                                    "9.0秒"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "消えゆく残光JP0B",
                        "Desc": "HP上限を基に自身に命の契約を付与する。その後、剣と銃を同時に駆使する技で素早く攻撃を仕掛け、<color style='color:#FFACFF;'>雷元素範囲ダメージ</color>を与える。<br><br><i>人の身で非人のものに立ち向かう古代の技術。その伝承は、レムリア帝国に反旗を翻した純水騎士までさかのぼると言われている。<br>とはいえ、力をコントロールする方法さえあれば、決闘で普通の相手に使うことはできないわけではない…</i>JP0B",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "126.88%×5",
                                    "136.396%×5",
                                    "145.912%×5",
                                    "158.6%×5",
                                    "168.116%×5",
                                    "177.632%×5",
                                    "190.32%×5",
                                    "203.008%×5",
                                    "215.696%×5",
                                    "228.384%×5",
                                    "241.072%×5",
                                    "253.76%×5",
                                    "269.62%×5",
                                    "285.48%×5",
                                    "301.34%×5"
                                ]
                            },
                            {
                                "Desc": "付与する命の契約",
                                "ParamLevelList": [
                                    "HP上限66.0%JP0B",
                                    "HP上限72.0%JP0B",
                                    "HP上限78.0%JP0B",
                                    "HP上限84.0%JP0B",
                                    "HP上限90.0%JP0B",
                                    "HP上限96.0%JP0B",
                                    "HP上限102.0%JP0B",
                                    "HP上限108.0%JP0B",
                                    "HP上限114.0%JP0B",
                                    "HP上限120.0%JP0B",
                                    "HP上限126.0%JP0B",
                                    "HP上限132.0%JP0B",
                                    "HP上限138.0%JP0B",
                                    "HP上限144.0%JP0B",
                                    "HP上限150.0%JP0B"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒"
                                ]
                            },
                            {
                                "Desc": "元素エネルギー",
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
                        "Name": "夜を切り裂く焔JP0B",
                        "Desc": "付近にいるチーム内キャラクターが敵に<color style='color:#FFACFF;'>雷元素関連反応</color>を起こした後、クロリンデの攻撃力の17%を基に、通常攻撃と<color style='color:#FFD780;'>消えゆく残光</color>による<color style='color:#FFACFF;'>雷元素ダメージ</color>をアップする。この効果の継続時間は15秒、最大3層まで重ね掛け可能。継続時間は層ごとに独立している。この方法でアップできるクロリンデの上記の攻撃によるダメージは最大1530まで。JP0B",
                        "Icon": "UI_Talent_S_Clorinde_05"
                    },
                    {
                        "Name": "契約の褒美JP0B",
                        "Desc": "クロリンデの命の契約がHP上限の100%以上の場合、命の契約の数値が増減する時、クロリンデの会心率+10%。この効果の継続時間は15秒、最大2層まで重ね掛け可能。継続時間は層ごとに独立している。<br>また、<color style='color:#FFD780;'>夜狩の巡り</color>の夜巡り状態は以下のように強化される。継続期間中、回復量の命の契約への変換率が100%になる。JP0B",
                        "Icon": "UI_Talent_S_Clorinde_06"
                    },
                    {
                        "Name": "夜巡の収穫JP0B",
                        "Desc": "ミニマップで周囲の<color style='color:#FFD780;'>フォンテーヌ地域の特産</color>の位置を表示する。",
                        "Icon": "UI_Talent_S_Liney_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「以降、燭影の帷を通る」JP0B",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡り</color>の夜巡り状態継続期間中、クロリンデの通常攻撃による<color style='color:#FFACFF;'>雷元素ダメージ</color>が敵に命中した時、敵の近くに夜巡の影を召喚して連携攻撃を2回行い、それぞれクロリンデの攻撃力30%に相当する<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。<br>この効果は1秒毎に1回のみ発動でき、この方法によるダメージは通常攻撃ダメージと見なされる。JP0B",
                        "Icon": "UI_Talent_S_Clorinde_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「以降、永夜の危険に臨む」JP0B",
                        "Desc": "固有天賦「夜を切り裂く焔」の効果は以下のように強化される。付近にいるチーム内キャラクターが敵に<color style='color:#FFACFF;'>雷元素関連反応</color>を起こした後、クロリンデの攻撃力の24%を基に、通常攻撃と<color style='color:#FFD780;'>消えゆく残光</color>による<color style='color:#FFACFF;'>雷元素ダメージ</color>をアップする。この効果の継続時間は15秒、最大3層まで重ね掛け可能。継続時間は層ごとに独立している。3層の時、クロリンデの中断耐性がアップする。この方法でアップできるクロリンデの上記の攻撃によるダメージは最大2160まで。<br>固有天賦「夜を切り裂く焔」を解放する必要がある。JP0B",
                        "Icon": "UI_Talent_S_Clorinde_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「白昼の誓いを心に刻み」JP0B",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡り</color>のスキルLv.+3。<br>最大Lv.15まで。JP0B",
                        "Icon": "UI_Talent_U_Clorinde_02"
                    },
                    {
                        "Level": 4,
                        "Name": "「涙、命、仁愛を銘記する」JP0B",
                        "Desc": "<color style='color:#FFD780;'>消えゆく残光</color>が敵にダメージを与えた時、クロリンデの現在の命の契約パーセンテージを基に以下のようにこのダメージをアップする。命の契約が1%につき、今回の<color style='color:#FFD780;'>消えゆく残光</color>によるダメージ+2%。この方法でアップできる<color style='color:#FFD780;'>消えゆく残光</color>によるダメージは最大200%までとなる。JP0B",
                        "Icon": "UI_Talent_S_Clorinde_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「夜明けがいずれ訪れることも」JP0B",
                        "Desc": "<color style='color:#FFD780;'>消えゆく残光</color>のスキルLv.+3。<br>最大Lv.15まで。JP0B",
                        "Icon": "UI_Talent_U_Clorinde_01"
                    },
                    {
                        "Level": 6,
                        "Name": "「故に、希望を捨ててはいけない」JP0B",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡り</color>発動後の12秒間、クロリンデの会心率+10%、会心ダメージ+70%。<br>また、夜巡り状態継続期間中、明燭の影は特定の状況で現れ、クロリンデが1秒以内に受けるダメージ-80%、中断耐性がアップする。さらに敵を追撃し、クロリンデの攻撃力200%分の<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。この方法によるダメージは通常攻撃ダメージと見なされる。<br>明燭の影は以下の状況で現れる。<br> · クロリンデがもうすぐ敵の攻撃に命中される時。<br> · クロリンデが貫夜 · 契約を繰り出す時。<br>上記の方法による明燭の影の召喚は、X秒毎に1回のみ可能。夜巡り状態継続期間中、明燭の影を最大6回まで召喚できる。JP0B",
                        "Icon": "UI_Talent_S_Clorinde_04"
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Name": "通常攻撃 · 影追いの誓い",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>剣による最大5段の連続攻撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>一定のスタミナを消費し、銃による扇状の制圧射撃を行う。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から落下し地面に衝撃を与える。経路上の敵を攻撃し、落下時に範囲ダメージを与える。",
                        "Num": 1,
                        "Lock": 5.0,
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
                                "ParamLevelList": [
                                    "54.06%",
                                    "58.46%",
                                    "62.86%",
                                    "69.146%",
                                    "73.546%",
                                    "78.575%",
                                    "85.49%",
                                    "92.404%",
                                    "99.319%",
                                    "106.862%",
                                    "114.405%",
                                    "121.948%",
                                    "129.492%",
                                    "137.035%",
                                    "144.578%"
                                ]
                            },
                            {
                                "Desc": "2段ダメージ",
                                "ParamLevelList": [
                                    "51.628%",
                                    "55.831%",
                                    "60.033%",
                                    "66.036%",
                                    "70.239%",
                                    "75.041%",
                                    "81.645%",
                                    "88.248%",
                                    "94.852%",
                                    "102.056%",
                                    "109.26%",
                                    "116.464%",
                                    "123.668%",
                                    "130.872%",
                                    "138.076%"
                                ]
                            },
                            {
                                "Desc": "3段ダメージ",
                                "ParamLevelList": [
                                    "34.185%+34.185%",
                                    "36.968%+36.968%",
                                    "39.75%+39.75%",
                                    "43.725%+43.725%",
                                    "46.507%+46.507%",
                                    "49.687%+49.687%",
                                    "54.06%+54.06%",
                                    "58.433%+58.433%",
                                    "62.805%+62.805%",
                                    "67.575%+67.575%",
                                    "72.345%+72.345%",
                                    "77.115%+77.115%",
                                    "81.885%+81.885%",
                                    "86.655%+86.655%",
                                    "91.425%+91.425%"
                                ]
                            },
                            {
                                "Desc": "4段ダメージ",
                                "ParamLevelList": [
                                    "23.134%+23.134%+23.134%",
                                    "25.017%+25.017%+25.017%",
                                    "26.9%+26.9%+26.9%",
                                    "29.59%+29.59%+29.59%",
                                    "31.473%+31.473%+31.473%",
                                    "33.625%+33.625%+33.625%",
                                    "36.584%+36.584%+36.584%",
                                    "39.543%+39.543%+39.543%",
                                    "42.502%+42.502%+42.502%",
                                    "45.73%+45.73%+45.73%",
                                    "48.958%+48.958%+48.958%",
                                    "52.186%+52.186%+52.186%",
                                    "55.414%+55.414%+55.414%",
                                    "58.642%+58.642%+58.642%",
                                    "61.87%+61.87%+61.87%"
                                ]
                            },
                            {
                                "Desc": "5段ダメージ",
                                "ParamLevelList": [
                                    "90.01%",
                                    "97.337%",
                                    "104.663%",
                                    "115.129%",
                                    "122.456%",
                                    "130.829%",
                                    "142.342%",
                                    "153.855%",
                                    "165.367%",
                                    "177.927%",
                                    "190.487%",
                                    "203.046%",
                                    "215.606%",
                                    "228.165%",
                                    "240.725%"
                                ]
                            },
                            {
                                "Desc": "重撃ダメージ",
                                "ParamLevelList": [
                                    "128.14%",
                                    "138.57%",
                                    "149.0%",
                                    "163.9%",
                                    "174.33%",
                                    "186.25%",
                                    "202.64%",
                                    "219.03%",
                                    "235.42%",
                                    "253.3%",
                                    "271.18%",
                                    "289.06%",
                                    "306.94%",
                                    "324.82%",
                                    "342.7%"
                                ]
                            },
                            {
                                "Desc": "重撃スタミナ消費",
                                "ParamLevelList": [
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0"
                                ]
                            },
                            {
                                "Desc": "落下期間のダメージ",
                                "ParamLevelList": [
                                    "63.932%",
                                    "69.136%",
                                    "74.34%",
                                    "81.774%",
                                    "86.978%",
                                    "92.925%",
                                    "101.102%",
                                    "109.28%",
                                    "117.457%",
                                    "126.378%",
                                    "135.299%",
                                    "144.22%",
                                    "153.14%",
                                    "162.061%",
                                    "170.982%"
                                ]
                            },
                            {
                                "Desc": "低空/高空落下攻撃ダメージ",
                                "ParamLevelList": [
                                    "127.838%/159.676%",
                                    "138.243%/172.673%",
                                    "148.649%/185.67%",
                                    "163.513%/204.237%",
                                    "173.919%/217.234%",
                                    "185.811%/232.087%",
                                    "202.162%/252.511%",
                                    "218.513%/272.935%",
                                    "234.865%/293.359%",
                                    "252.702%/315.639%",
                                    "270.54%/337.919%",
                                    "288.378%/360.2%",
                                    "306.216%/382.48%",
                                    "324.054%/404.761%",
                                    "341.892%/427.041%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "夜狩の巡回",
                        "Desc": "装填を完了させ、剣と銃を組み合わせて戦う「夜巡り」状態に入る。この状態のクロリンデの通常攻撃は銃射撃「駆猟」となり、与えるダメージが元素付与によって他の元素に変化しない<color style='color:#FFACFF;'>雷元素ダメージ</color>へと変わる。また、元素スキルボタンを押すと、「穿夜」を行うようになり、突進剣撃を仕掛けて<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。これらの方法によるダメージは通常攻撃ダメージと見なされる。<br><br><color style='color:#FFD780;'>駆猟</color><br> · 命の契約がHP上限の100%を超えている場合、銃射撃を行う。<br> · 命の契約がHP上限の100%未満の場合、銃を撃つ時、クロリンデのHP上限を基に自身に一定の命の契約を付与する。さらに、貫通弾を発射して経路上の敵により高いダメージを与える。<br><br><color style='color:#FFD780;'>穿夜</color><br>クロリンデの現在の命の契約のパーセンテージを基に、穿夜の効果を1回分強化する。<br> · 命の契約が0%の場合、突進剣撃を行う。<br> · 命の契約がHP上限の100%未満の場合、クロリンデのHPを自身の命の契約の数値を基に回復する。さらに、穿夜の攻撃範囲と与えるダメージを1回分アップする。<br> · 命の契約がHP上限の100%以上の場合、穿夜 · 契約を行い、クロリンデのHPをより多く回復する。さらに、穿夜の攻撃範囲と与えるダメージを1回分さらにアップする。<br><br>また、クロリンデが夜巡り状態にある時、穿夜以外の治療効果は無効になり、代わりに自身に回復量の一定割合の命の契約を付与する。<br><br>「夜巡り」状態はクロリンデが退場すると解除される。<br><br><color style='color:#FFD780;'>アルケー：ウーシア</color><br>クロリンデの駆猟が敵に命中する時、敵の位置に迸発の刃を召喚し、ウーシアを帯びた<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。一定時間ごとに発動可能。<br><br><i>闇に潜む邪悪なものは千年の間に狩り尽くされたが、人の心には依然として光の届かない場所が残されている。<br>今日に至っても、彼女は「黄金の狩人」の警告を心に刻んでいる——燭火を灯した夜巡りが極寒の闇に染まらぬように、常に警戒を怠るべからず、と。</i>",
                        "Num": 1,
                        "Lock": 12.0,
                        "Icon": "Skill_S_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "駆猟ダメージ",
                                "ParamLevelList": [
                                    "26.763%/38.786%",
                                    "28.942%/41.943%",
                                    "31.12%/45.1%",
                                    "34.232%/49.61%",
                                    "36.41%/52.767%",
                                    "38.9%/56.375%",
                                    "42.323%/61.336%",
                                    "45.746%/66.297%",
                                    "49.17%/71.258%",
                                    "52.904%/76.67%",
                                    "56.638%/82.082%",
                                    "60.373%/87.494%",
                                    "64.107%/92.906%",
                                    "67.842%/98.318%",
                                    "71.576%/103.73%"
                                ]
                            },
                            {
                                "Desc": "駆猟が付与する命の契約",
                                "ParamLevelList": [
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%"
                                ]
                            },
                            {
                                "Desc": "穿夜のダメージ",
                                "ParamLevelList": [
                                    "32.972%/43.963%/25.112%*3",
                                    "35.656%/47.542%/27.156%*3",
                                    "38.34%/51.12%/29.2%*3",
                                    "42.174%/56.232%/32.12%*3",
                                    "44.858%/59.81%/34.164%*3",
                                    "47.925%/63.9%/36.5%*3",
                                    "52.142%/69.523%/39.712%*3",
                                    "56.36%/75.146%/42.924%*3",
                                    "60.577%/80.77%/46.136%*3",
                                    "65.178%/86.904%/49.64%*3",
                                    "69.779%/93.038%/53.144%*3",
                                    "74.38%/99.173%/56.648%*3",
                                    "78.98%/105.307%/60.152%*3",
                                    "83.581%/111.442%/63.656%*3",
                                    "88.182%/117.576%/67.16%*3"
                                ]
                            },
                            {
                                "Desc": "穿夜の回復量",
                                "ParamLevelList": [
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%",
                                    "0%/104.0%/命の契約110.0%"
                                ]
                            },
                            {
                                "Desc": "命の契約の変換",
                                "ParamLevelList": [
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃のダメージ",
                                "ParamLevelList": [
                                    "43.2%",
                                    "46.44%",
                                    "49.68%",
                                    "54.0%",
                                    "57.24%",
                                    "60.48%",
                                    "64.8%",
                                    "69.12%",
                                    "73.44%",
                                    "77.76%",
                                    "82.08%",
                                    "86.4%",
                                    "91.8%",
                                    "97.2%",
                                    "102.6%"
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
                                "Desc": "夜巡り状態の継続時間",
                                "ParamLevelList": [
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "消えゆく残光",
                        "Desc": "HP上限を基に自身に命の契約を付与する。その後、剣と銃を駆使して素早く攻撃を仕掛け、<color style='color:#FFACFF;'>雷元素範囲ダメージ</color>を与える。<br><br><i>人の身で人ならざるものに立ち向かうための、古代の技術。その伝承の歴史は、レムリア帝国に反旗を翻した純水騎士までさかのぼると言われている。<br>力をコントロールすることさえできれば、決闘において普通の相手に使うことが出来ないわけでもない…</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "126.88%×5",
                                    "136.396%×5",
                                    "145.912%×5",
                                    "158.6%×5",
                                    "168.116%×5",
                                    "177.632%×5",
                                    "190.32%×5",
                                    "203.008%×5",
                                    "215.696%×5",
                                    "228.384%×5",
                                    "241.072%×5",
                                    "253.76%×5",
                                    "269.62%×5",
                                    "285.48%×5",
                                    "301.34%×5"
                                ]
                            },
                            {
                                "Desc": "付与する命の契約",
                                "ParamLevelList": [
                                    "HP上限66.0%",
                                    "HP上限72.0%",
                                    "HP上限78.0%",
                                    "HP上限84.0%",
                                    "HP上限90.0%",
                                    "HP上限96.0%",
                                    "HP上限102.0%",
                                    "HP上限108.0%",
                                    "HP上限114.0%",
                                    "HP上限120.0%",
                                    "HP上限126.0%",
                                    "HP上限132.0%",
                                    "HP上限138.0%",
                                    "HP上限144.0%",
                                    "HP上限150.0%"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒"
                                ]
                            },
                            {
                                "Desc": "元素エネルギー",
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
                        "Name": "夜を裂く紫焔",
                        "Desc": "付近にいるチーム内キャラクターが敵に<color style='color:#FFACFF;'>雷元素関連反応</color>を起こした後、クロリンデの攻撃力の20%を基に、クロリンデの通常攻撃と<color style='color:#FFD780;'>消えゆく残光</color>による<color style='color:#FFACFF;'>雷元素ダメージ</color>をアップする。この効果の継続時間は15秒、最大3層まで重ね掛け可能。継続時間は層ごとに独立してカウントされる。この方法でアップできるクロリンデの上記の攻撃によるダメージは最大1800まで。",
                        "Icon": "UI_Talent_S_Clorinde_05"
                    },
                    {
                        "Name": "契約の報償",
                        "Desc": "クロリンデの命の契約がHP上限の100%を超えている場合、命の契約の数値が増減する時、クロリンデの会心率+10%。この効果の継続時間は15秒、最大2層まで重ね掛け可能。継続時間は層ごとに独立してカウントされる。<br>また、<color style='color:#FFD780;'>夜狩の巡回</color>の夜巡り状態も強化され、継続期間中、回復量の命の契約への変換率が100%になる。",
                        "Icon": "UI_Talent_S_Clorinde_06"
                    },
                    {
                        "Name": "夜巡の収穫",
                        "Desc": "ミニマップで周囲の<color style='color:#FFD780;'>フォンテーヌ地域の特産</color>の位置を表示する。",
                        "Icon": "UI_Talent_S_Liney_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「ここより、燭影の帳を通る」",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡回</color>の夜巡り状態継続期間中、クロリンデの通常攻撃による<color style='color:#FFACFF;'>雷元素ダメージ</color>が敵に命中した時、敵の近くに夜巡りの影を召喚して連携攻撃を2回行い、それぞれクロリンデの攻撃力30%に相当する<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。<br>この効果は1.2秒毎に1回のみ発動でき、この方法によるダメージは通常攻撃ダメージと見なされる。",
                        "Icon": "UI_Talent_S_Clorinde_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「以降、永夜の危険に臨む」",
                        "Desc": "固有天賦「夜を裂く紫焔」の効果が以下のように強化される。付近にいるチーム内キャラクターが敵に<color style='color:#FFACFF;'>雷元素関連反応</color>を起こした後、クロリンデの攻撃力の30%を基に、通常攻撃と<color style='color:#FFD780;'>消えゆく残光</color>による<color style='color:#FFACFF;'>雷元素ダメージ</color>がアップする。継続時間は15秒、最大3層まで重ね掛け可能。また、継続時間は層ごとに独立してカウントされる。3層の時、クロリンデの中断耐性がアップする。この方法でアップできるクロリンデの上記の攻撃ダメージは最大2700まで。<br>固有天賦「夜を裂く紫焔」を解放する必要がある。",
                        "Icon": "UI_Talent_S_Clorinde_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「白昼の誓いを忘れるな」",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡回</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Clorinde_02"
                    },
                    {
                        "Level": 4,
                        "Name": "「涙と命、仁愛を心に刻め」",
                        "Desc": "<color style='color:#FFD780;'>消えゆく残光</color>が敵にダメージを与えた時、クロリンデの現在の命の契約パーセンテージを基に以下の通りダメージがアップする。命の契約1%につき、その攻撃の<color style='color:#FFD780;'>消えゆく残光</color>によるダメージ+2%。この方法でアップできる<color style='color:#FFD780;'>消えゆく残光</color>ダメージは最大200%まで。",
                        "Icon": "UI_Talent_S_Clorinde_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「やがて夜明けは訪れる」",
                        "Desc": "<color style='color:#FFD780;'>消えゆく残光</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Clorinde_01"
                    },
                    {
                        "Level": 6,
                        "Name": "「だから——希望を捨てるな」",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡回</color>発動後の12秒間、クロリンデの会心率+10%、会心ダメージ+70%。<br>また、夜巡り状態継続期間中、特定の状況で「明燭の影」が現れて敵を追撃し、クロリンデの攻撃力200%分の<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。この方法によるダメージは通常攻撃ダメージと見なされる。<br>明燭の影は以下の状況で現れる。<br> · クロリンデが敵の攻撃に当たる直前。<br> · クロリンデが穿夜 · 契約を繰り出した時。<br>この2つの方法による明燭の影の召喚は、1秒毎に1回のみ可能。夜巡り状態継続期間中は、明燭の影を最大6回召喚できる。<br>また、夜巡り状態継続期間中、クロリンデの受けるダメージ-80%、中断耐性がアップする。この効果は夜巡り状態終了時、あるいは明燭の影を6回召喚した1秒後に解除される。",
                        "Icon": "UI_Talent_S_Clorinde_04"
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Name": "通常攻撃 · 影追いの誓い",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>剣による最大5段の連続攻撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>一定のスタミナを消費し、銃による扇状の制圧射撃を行う。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から落下し地面に衝撃を与える。経路上の敵を攻撃し、落下時に範囲ダメージを与える。",
                        "Num": 1,
                        "Lock": 5.0,
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
                                "ParamLevelList": [
                                    "54.06%",
                                    "58.46%",
                                    "62.86%",
                                    "69.146%",
                                    "73.546%",
                                    "78.575%",
                                    "85.49%",
                                    "92.404%",
                                    "99.319%",
                                    "106.862%",
                                    "114.405%",
                                    "121.948%",
                                    "129.492%",
                                    "137.035%",
                                    "144.578%"
                                ]
                            },
                            {
                                "Desc": "2段ダメージ",
                                "ParamLevelList": [
                                    "51.628%",
                                    "55.831%",
                                    "60.033%",
                                    "66.036%",
                                    "70.239%",
                                    "75.041%",
                                    "81.645%",
                                    "88.248%",
                                    "94.852%",
                                    "102.056%",
                                    "109.26%",
                                    "116.464%",
                                    "123.668%",
                                    "130.872%",
                                    "138.076%"
                                ]
                            },
                            {
                                "Desc": "3段ダメージ",
                                "ParamLevelList": [
                                    "34.185%+34.185%",
                                    "36.968%+36.968%",
                                    "39.75%+39.75%",
                                    "43.725%+43.725%",
                                    "46.507%+46.507%",
                                    "49.687%+49.687%",
                                    "54.06%+54.06%",
                                    "58.433%+58.433%",
                                    "62.805%+62.805%",
                                    "67.575%+67.575%",
                                    "72.345%+72.345%",
                                    "77.115%+77.115%",
                                    "81.885%+81.885%",
                                    "86.655%+86.655%",
                                    "91.425%+91.425%"
                                ]
                            },
                            {
                                "Desc": "4段ダメージ",
                                "ParamLevelList": [
                                    "23.134%+23.134%+23.134%",
                                    "25.017%+25.017%+25.017%",
                                    "26.9%+26.9%+26.9%",
                                    "29.59%+29.59%+29.59%",
                                    "31.473%+31.473%+31.473%",
                                    "33.625%+33.625%+33.625%",
                                    "36.584%+36.584%+36.584%",
                                    "39.543%+39.543%+39.543%",
                                    "42.502%+42.502%+42.502%",
                                    "45.73%+45.73%+45.73%",
                                    "48.958%+48.958%+48.958%",
                                    "52.186%+52.186%+52.186%",
                                    "55.414%+55.414%+55.414%",
                                    "58.642%+58.642%+58.642%",
                                    "61.87%+61.87%+61.87%"
                                ]
                            },
                            {
                                "Desc": "5段ダメージ",
                                "ParamLevelList": [
                                    "90.01%",
                                    "97.337%",
                                    "104.663%",
                                    "115.129%",
                                    "122.456%",
                                    "130.829%",
                                    "142.342%",
                                    "153.855%",
                                    "165.367%",
                                    "177.927%",
                                    "190.487%",
                                    "203.046%",
                                    "215.606%",
                                    "228.165%",
                                    "240.725%"
                                ]
                            },
                            {
                                "Desc": "重撃ダメージ",
                                "ParamLevelList": [
                                    "128.14%",
                                    "138.57%",
                                    "149.0%",
                                    "163.9%",
                                    "174.33%",
                                    "186.25%",
                                    "202.64%",
                                    "219.03%",
                                    "235.42%",
                                    "253.3%",
                                    "271.18%",
                                    "289.06%",
                                    "306.94%",
                                    "324.82%",
                                    "342.7%"
                                ]
                            },
                            {
                                "Desc": "重撃スタミナ消費",
                                "ParamLevelList": [
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0"
                                ]
                            },
                            {
                                "Desc": "落下期間のダメージ",
                                "ParamLevelList": [
                                    "63.932%",
                                    "69.136%",
                                    "74.34%",
                                    "81.774%",
                                    "86.978%",
                                    "92.925%",
                                    "101.102%",
                                    "109.28%",
                                    "117.457%",
                                    "126.378%",
                                    "135.299%",
                                    "144.22%",
                                    "153.14%",
                                    "162.061%",
                                    "170.982%"
                                ]
                            },
                            {
                                "Desc": "低空/高空落下攻撃ダメージ",
                                "ParamLevelList": [
                                    "127.838%/159.676%",
                                    "138.243%/172.673%",
                                    "148.649%/185.67%",
                                    "163.513%/204.237%",
                                    "173.919%/217.234%",
                                    "185.811%/232.087%",
                                    "202.162%/252.511%",
                                    "218.513%/272.935%",
                                    "234.865%/293.359%",
                                    "252.702%/315.639%",
                                    "270.54%/337.919%",
                                    "288.378%/360.2%",
                                    "306.216%/382.48%",
                                    "324.054%/404.761%",
                                    "341.892%/427.041%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "夜狩の巡回",
                        "Desc": "装填を完了させ、剣と銃を組み合わせて戦う「夜巡り」状態に入る。この状態のクロリンデの通常攻撃は銃射撃「駆猟」となり、与えるダメージが元素付与によって他の元素に変化しない<color style='color:#FFACFF;'>雷元素ダメージ</color>へと変わる。ただし、重撃はできなくなる。また、「夜巡り」状態で元素スキルボタンを押すと、「穿夜」を行うようになり、突進剣撃を仕掛けて<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。これらの方法によるダメージは通常攻撃ダメージと見なされる。<br><br><color style='color:#FFD780;'>駆猟</color><br> · 命の契約がHP上限の100%を超えている場合、銃射撃を行う。<br> · 命の契約がHP上限の100%未満の場合、銃を撃つ時、クロリンデのHP上限を基に自身に一定の命の契約を付与する。さらに、貫通弾を発射して経路上の敵により高いダメージを与える。<br><br><color style='color:#FFD780;'>穿夜</color><br>発動時のクロリンデの命の契約のパーセンテージを基に、穿夜の効果が決まる。<br> · 命の契約が0%の場合、突進剣撃を行う。<br> · 命の契約がHP上限の100%未満である場合、クロリンデのHPを彼女自身の命の契約の数値を基に回復する。さらに、穿夜の攻撃範囲と与えるダメージをアップする。<br> · 命の契約がHP上限の100%以上である場合、穿夜 · 契約を行い、クロリンデのHPをより多く回復する。さらに、攻撃範囲と与えるダメージもより大きくなる。<br><br>また、クロリンデが夜巡り状態にある時、穿夜以外の治療効果は無効になり、代わりに自身に回復量の一定割合の命の契約を付与する。<br><br>「夜巡り」状態はクロリンデが退場すると解除される。<br><br><color style='color:#FFD780;'>アルケー：ウーシア</color><br>クロリンデの駆猟が敵に命中する時、敵の位置に迸発の刃を召喚し、ウーシアを帯びた<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。一定時間ごとに発動可能。<br><br><i>闇に潜む邪悪なものは千年の間に狩り尽くされたが、人の心には依然として光の届かない場所が残されている。<br>今日に至っても、彼女は「黄金の狩人」の警告を心に刻んでいる——燭火を灯した夜巡りが極寒の闇に染まらぬように、常に警戒を怠るべからず、と。</i>",
                        "Num": 1,
                        "Lock": 12.0,
                        "Icon": "Skill_S_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "駆猟ダメージ",
                                "ParamLevelList": [
                                    "26.763%/38.786%",
                                    "28.942%/41.943%",
                                    "31.12%/45.1%",
                                    "34.232%/49.61%",
                                    "36.41%/52.767%",
                                    "38.9%/56.375%",
                                    "42.323%/61.336%",
                                    "45.746%/66.297%",
                                    "49.17%/71.258%",
                                    "52.904%/76.67%",
                                    "56.638%/82.082%",
                                    "60.373%/87.494%",
                                    "64.107%/92.906%",
                                    "67.842%/98.318%",
                                    "71.576%/103.73%"
                                ]
                            },
                            {
                                "Desc": "駆猟が付与する命の契約",
                                "ParamLevelList": [
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%"
                                ]
                            },
                            {
                                "Desc": "穿夜のダメージ",
                                "ParamLevelList": [
                                    "32.972%/43.963%/25.112%×3",
                                    "35.656%/47.542%/27.156%×3",
                                    "38.34%/51.12%/29.2%×3",
                                    "42.174%/56.232%/32.12%×3",
                                    "44.858%/59.81%/34.164%×3",
                                    "47.925%/63.9%/36.5%×3",
                                    "52.142%/69.523%/39.712%×3",
                                    "56.36%/75.146%/42.924%×3",
                                    "60.577%/80.77%/46.136%×3",
                                    "65.178%/86.904%/49.64%×3",
                                    "69.779%/93.038%/53.144%×3",
                                    "74.38%/99.173%/56.648%×3",
                                    "78.98%/105.307%/60.152%×3",
                                    "83.581%/111.442%/63.656%×3",
                                    "88.182%/117.576%/67.16%×3"
                                ]
                            },
                            {
                                "Desc": "穿夜の回復量",
                                "ParamLevelList": [
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%"
                                ]
                            },
                            {
                                "Desc": "命の契約の変換",
                                "ParamLevelList": [
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃のダメージ",
                                "ParamLevelList": [
                                    "43.2%",
                                    "46.44%",
                                    "49.68%",
                                    "54.0%",
                                    "57.24%",
                                    "60.48%",
                                    "64.8%",
                                    "69.12%",
                                    "73.44%",
                                    "77.76%",
                                    "82.08%",
                                    "86.4%",
                                    "91.8%",
                                    "97.2%",
                                    "102.6%"
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
                                "Desc": "夜巡り状態の継続時間",
                                "ParamLevelList": [
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒",
                                    "16.0秒"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "消えゆく残光",
                        "Desc": "HP上限を基に自身に命の契約を付与する。その後、剣と銃を駆使して素早く攻撃を仕掛け、<color style='color:#FFACFF;'>雷元素範囲ダメージ</color>を与える。<br><br><i>人の身で人ならざるものに立ち向かうための、古代の技術。その伝承の歴史は、レムリア帝国に反旗を翻した純水騎士までさかのぼると言われている。<br>力をコントロールすることさえできれば、決闘において普通の相手に使うことが出来ないわけでもない…</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "126.88%×5",
                                    "136.396%×5",
                                    "145.912%×5",
                                    "158.6%×5",
                                    "168.116%×5",
                                    "177.632%×5",
                                    "190.32%×5",
                                    "203.008%×5",
                                    "215.696%×5",
                                    "228.384%×5",
                                    "241.072%×5",
                                    "253.76%×5",
                                    "269.62%×5",
                                    "285.48%×5",
                                    "301.34%×5"
                                ]
                            },
                            {
                                "Desc": "付与する命の契約",
                                "ParamLevelList": [
                                    "HP上限66.0%",
                                    "HP上限72.0%",
                                    "HP上限78.0%",
                                    "HP上限84.0%",
                                    "HP上限90.0%",
                                    "HP上限96.0%",
                                    "HP上限102.0%",
                                    "HP上限108.0%",
                                    "HP上限114.0%",
                                    "HP上限120.0%",
                                    "HP上限126.0%",
                                    "HP上限132.0%",
                                    "HP上限138.0%",
                                    "HP上限144.0%",
                                    "HP上限150.0%"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒",
                                    "15.0秒"
                                ]
                            },
                            {
                                "Desc": "元素エネルギー",
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
                        "Name": "夜を裂く紫焔",
                        "Desc": "付近にいるチーム内キャラクターが敵に<color style='color:#FFACFF;'>雷元素関連反応</color>を起こした後、クロリンデの攻撃力の20%を基に、クロリンデの<color style='color:#FFD780;'>消えゆく残光</color>および通常攻撃による<color style='color:#FFACFF;'>雷元素ダメージ</color>をアップする。この効果の継続時間は15秒、最大3層まで重ね掛け可能。継続時間は層ごとに独立してカウントされる。この方法でアップできるクロリンデの上記の攻撃によるダメージは最大1800まで。",
                        "Icon": "UI_Talent_S_Clorinde_05"
                    },
                    {
                        "Name": "契約の報償",
                        "Desc": "クロリンデの命の契約がHP上限の100%を超えている場合、命の契約の数値が増減する時、クロリンデの会心率+10%。この効果の継続時間は15秒、最大2層まで重ね掛け可能。継続時間は層ごとに独立してカウントされる。<br>また、<color style='color:#FFD780;'>夜狩の巡回</color>の夜巡り状態も強化され、継続期間中、回復量の命の契約への変換率が100%になる。",
                        "Icon": "UI_Talent_S_Clorinde_06"
                    },
                    {
                        "Name": "夜巡の収穫",
                        "Desc": "ミニマップで周囲の<color style='color:#FFD780;'>フォンテーヌ地域の特産</color>の位置を表示する。",
                        "Icon": "UI_Talent_S_Liney_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「ここより、燭影の帳を通る」",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡回</color>の夜巡り状態継続期間中、クロリンデの通常攻撃による<color style='color:#FFACFF;'>雷元素ダメージ</color>が敵に命中した時、敵の近くに夜巡りの影を召喚して連携攻撃を2回行い、それぞれクロリンデの攻撃力30%に相当する<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。<br>この効果は1.2秒毎に1回のみ発動でき、この方法によるダメージは通常攻撃ダメージと見なされる。",
                        "Icon": "UI_Talent_S_Clorinde_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「以降、永夜の危険に臨む」",
                        "Desc": "固有天賦「夜を裂く紫焔」の効果が以下のように強化される。付近にいるチーム内キャラクターが敵に<color style='color:#FFACFF;'>雷元素関連反応</color>を起こした後、クロリンデの攻撃力の30%を基に、クロリンデの<color style='color:#FFD780;'>消えゆく残光</color>および通常攻撃による<color style='color:#FFACFF;'>雷元素ダメージ</color>がアップする。継続時間は15秒、最大3層まで重ね掛け可能。また、継続時間は層ごとに独立してカウントされる。3層の時、クロリンデの中断耐性がアップする。この方法でアップできるクロリンデの上記の攻撃ダメージは最大2700まで。<br>固有天賦「夜を裂く紫焔」を解放する必要がある。",
                        "Icon": "UI_Talent_S_Clorinde_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「白昼の誓いを忘れるな」",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡回</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Clorinde_02"
                    },
                    {
                        "Level": 4,
                        "Name": "「涙と命、仁愛を心に刻め」",
                        "Desc": "<color style='color:#FFD780;'>消えゆく残光</color>が敵にダメージを与えた時、クロリンデの現在の命の契約パーセンテージを基に以下の通りダメージがアップする。命の契約1%につき、その攻撃の<color style='color:#FFD780;'>消えゆく残光</color>によるダメージ+2%。この方法でアップできる<color style='color:#FFD780;'>消えゆく残光</color>ダメージは最大200%まで。",
                        "Icon": "UI_Talent_S_Clorinde_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「やがて夜明けは訪れる」",
                        "Desc": "<color style='color:#FFD780;'>消えゆく残光</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Clorinde_01"
                    },
                    {
                        "Level": 6,
                        "Name": "「だから——希望を捨てるな」",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡回</color>発動後の12秒間、クロリンデの会心率+10%、会心ダメージ+70%。<br>また、夜巡り状態継続期間中、特定の状況で「明燭の影」が現れて敵を追撃し、クロリンデの攻撃力200%分の<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。この方法によるダメージは通常攻撃ダメージと見なされる。<br>明燭の影は以下の状況で現れる。<br> · クロリンデが敵の攻撃に当たる直前。<br> · クロリンデが穿夜 · 契約を繰り出した時。<br>この2つの方法による明燭の影の召喚は、1秒毎に1回のみ可能。夜巡り状態継続期間中は、明燭の影を最大6回召喚できる。<br>また、夜巡り状態継続期間中、クロリンデの受けるダメージ-80%、中断耐性がアップする。この効果は夜巡り状態終了時、あるいは明燭の影を6回召喚した1秒後に解除される。",
                        "Icon": "UI_Talent_S_Clorinde_04"
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "影追いの誓い",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>剣による最大5段の連続攻撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>一定のスタミナを消費し、銃による扇状の制圧射撃を行う。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から落下し地面に衝撃を与える。経路上の敵を攻撃し、落下時に範囲ダメージを与える。",
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
                                "ParamLevelList": [
                                    "54.0596%",
                                    "58.4598%",
                                    "62.86%",
                                    "69.146%",
                                    "73.5462%",
                                    "78.575%",
                                    "85.4896%",
                                    "92.4042%",
                                    "99.3188%",
                                    "106.862%",
                                    "114.4052%",
                                    "121.9484%",
                                    "129.4916%",
                                    "137.0348%",
                                    "144.578%"
                                ]
                            },
                            {
                                "Desc": "2段ダメージ",
                                "ParamLevelList": [
                                    "51.6284%",
                                    "55.8307%",
                                    "60.033%",
                                    "66.0363%",
                                    "70.2386%",
                                    "75.0413%",
                                    "81.6449%",
                                    "88.2485%",
                                    "94.8521%",
                                    "102.0561%",
                                    "109.2601%",
                                    "116.464%",
                                    "123.668%",
                                    "130.8719%",
                                    "138.0759%"
                                ]
                            },
                            {
                                "Desc": "3段ダメージ",
                                "ParamLevelList": [
                                    "34.185%+34.185%",
                                    "36.9675%+36.9675%",
                                    "39.75%+39.75%",
                                    "43.725%+43.725%",
                                    "46.5075%+46.5075%",
                                    "49.6875%+49.6875%",
                                    "54.06%+54.06%",
                                    "58.4325%+58.4325%",
                                    "62.805%+62.805%",
                                    "67.575%+67.575%",
                                    "72.345%+72.345%",
                                    "77.115%+77.115%",
                                    "81.885%+81.885%",
                                    "86.655%+86.655%",
                                    "91.425%+91.425%"
                                ]
                            },
                            {
                                "Desc": "4段ダメージ",
                                "ParamLevelList": [
                                    "23.134%+23.134%+23.134%",
                                    "25.017%+25.017%+25.017%",
                                    "26.9%+26.9%+26.9%",
                                    "29.59%+29.59%+29.59%",
                                    "31.473%+31.473%+31.473%",
                                    "33.625%+33.625%+33.625%",
                                    "36.584%+36.584%+36.584%",
                                    "39.543%+39.543%+39.543%",
                                    "42.502%+42.502%+42.502%",
                                    "45.73%+45.73%+45.73%",
                                    "48.958%+48.958%+48.958%",
                                    "52.186%+52.186%+52.186%",
                                    "55.414%+55.414%+55.414%",
                                    "58.642%+58.642%+58.642%",
                                    "61.87%+61.87%+61.87%"
                                ]
                            },
                            {
                                "Desc": "5段ダメージ",
                                "ParamLevelList": [
                                    "90.0102%",
                                    "97.3366%",
                                    "104.663%",
                                    "115.1293%",
                                    "122.4557%",
                                    "130.8288%",
                                    "142.3417%",
                                    "153.8546%",
                                    "165.3675%",
                                    "177.9271%",
                                    "190.4867%",
                                    "203.0462%",
                                    "215.6058%",
                                    "228.1653%",
                                    "240.7249%"
                                ]
                            },
                            {
                                "Desc": "重撃ダメージ",
                                "ParamLevelList": [
                                    "128.14%",
                                    "138.57%",
                                    "149.0%",
                                    "163.9%",
                                    "174.33%",
                                    "186.25%",
                                    "202.64%",
                                    "219.03%",
                                    "235.42%",
                                    "253.3%",
                                    "271.18%",
                                    "289.06%",
                                    "306.94%",
                                    "324.82%",
                                    "342.7%"
                                ]
                            },
                            {
                                "Desc": "重撃スタミナ消費",
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
                                "Desc": "落下期間のダメージ",
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
                                "Desc": "低空/高空落下攻撃ダメージ",
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
                        "Name": "夜狩の巡回",
                        "Desc": "装填を完了させ、剣と銃を組み合わせて戦う「夜巡り」状態に入る。この状態のクロリンデの通常攻撃は銃射撃「駆猟」となり、与えるダメージが元素付与によって他の元素に変化しない<color style='color:#FFACFF;'>雷元素ダメージ</color>へと変わる。ただし、重撃はできなくなる。また、「夜巡り」状態で元素スキルボタンを押すと、「穿夜」を行うようになり、突進剣撃を仕掛けて<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。これらの方法によるダメージは通常攻撃ダメージと見なされる。<br><br><color style='color:#FFD780;'>駆猟</color><br> · 命の契約がHP上限の100%以上の場合、銃射撃を行う。<br> · 命の契約がHP上限の100%未満の場合、銃を撃つ時、クロリンデのHP上限を基に自身に一定の命の契約を付与する。さらに、貫通弾を発射して経路上の敵により高いダメージを与える。<br><br><color style='color:#FFD780;'>穿夜</color><br>発動時のクロリンデの命の契約のパーセンテージを基に、穿夜の効果が決まる。<br> · 命の契約が0%の場合、突進剣撃を行う。<br> · 命の契約がHP上限の100%未満の場合、クロリンデのHPを彼女自身の命の契約の数値を基に回復する。さらに、穿夜の攻撃範囲と与えるダメージをアップする。<br> · 命の契約がHP上限の100%以上の場合、「穿夜 · 契約」を行い、クロリンデのHPをより多く回復する。さらに、攻撃範囲と与えるダメージもより大きくなる。<br><br>また、クロリンデが夜巡り状態にある時、穿夜以外の治療効果は無効になり、代わりに自身に回復量の一定割合の命の契約を付与する。<br><br>「夜巡り」状態はクロリンデが退場すると解除される。<br><br><color style='color:#FFD780;'>アルケー：ウーシア</color><br>クロリンデの駆猟が命中した時、命中した位置に迸発の刃を召喚し、ウーシアを帯びた<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。一定時間ごとに発動可能。<br><br><i>闇に潜む邪悪なものは千年の間に狩り尽くされたが、人の心には依然として光の届かない場所が残されている。<br>今日に至っても、彼女は「黄金の狩人」の警告を心に刻んでいる——燭火を灯した夜巡りが極寒の闇に染まらぬように、常に警戒を怠るべからず、と。</i>",
                        "Icon": "Skill_S_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "駆猟ダメージ",
                                "ParamLevelList": [
                                    "26.7632%/38.786%",
                                    "28.9416%/41.943%",
                                    "31.12%/45.1%",
                                    "34.232%/49.61%",
                                    "36.4104%/52.767%",
                                    "38.9%/56.375%",
                                    "42.3232%/61.336%",
                                    "45.7464%/66.297%",
                                    "49.1696%/71.258%",
                                    "52.904%/76.67%",
                                    "56.6384%/82.082%",
                                    "60.3728%/87.494%",
                                    "64.1072%/92.906%",
                                    "67.8416%/98.318%",
                                    "71.576%/103.73%"
                                ]
                            },
                            {
                                "Desc": "駆猟が付与する命の契約",
                                "ParamLevelList": [
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%",
                                    "HP上限35.0%"
                                ]
                            },
                            {
                                "Desc": "穿夜のダメージ",
                                "ParamLevelList": [
                                    "32.9724%/43.9632%/25.112%×3",
                                    "35.6562%/47.5416%/27.156%×3",
                                    "38.34%/51.12%/29.2%×3",
                                    "42.174%/56.232%/32.12%×3",
                                    "44.8578%/59.8104%/34.164%×3",
                                    "47.925%/63.9%/36.5%×3",
                                    "52.1424%/69.5232%/39.712%×3",
                                    "56.3598%/75.1464%/42.924%×3",
                                    "60.5772%/80.7696%/46.136%×3",
                                    "65.178%/86.904%/49.64%×3",
                                    "69.7788%/93.0384%/53.144%×3",
                                    "74.3796%/99.1728%/56.648%×3",
                                    "78.9804%/105.3072%/60.152%×3",
                                    "83.5812%/111.4416%/63.656%×3",
                                    "88.182%/117.576%/67.16%×3"
                                ]
                            },
                            {
                                "Desc": "穿夜の回復量",
                                "ParamLevelList": [
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%",
                                    "命の契約0%/104.0%/110.0%"
                                ]
                            },
                            {
                                "Desc": "命の契約の変換",
                                "ParamLevelList": [
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%",
                                    "回復量80.0%"
                                ]
                            },
                            {
                                "Desc": "迸発の刃のダメージ",
                                "ParamLevelList": [
                                    "43.2%",
                                    "46.44%",
                                    "49.68%",
                                    "54.0%",
                                    "57.24%",
                                    "60.48%",
                                    "64.8%",
                                    "69.12%",
                                    "73.44%",
                                    "77.76%",
                                    "82.08%",
                                    "86.4%",
                                    "91.8%",
                                    "97.2%",
                                    "102.6%"
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
                                "Desc": "夜巡り状態の継続時間",
                                "ParamLevelList": [
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒",
                                    "7.5秒"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
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
                            }
                        ]
                    },
                    {
                        "Name": "消えゆく残光",
                        "Desc": "HP上限を基に自身に命の契約を付与する。その後、剣と銃を駆使して素早く攻撃を仕掛け、<color style='color:#FFACFF;'>雷元素範囲ダメージ</color>を与える。<br><br><i>人の身で人ならざるものに立ち向かうための、古代の技術。その伝承の歴史は、レムリア帝国に反旗を翻した純水騎士までさかのぼると言われている。<br>力をコントロールすることさえできれば、決闘において普通の相手に使うことが出来ないわけでもない…</i>",
                        "Icon": "Skill_E_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "126.88%×5",
                                    "136.396%×5",
                                    "145.912%×5",
                                    "158.6%×5",
                                    "168.116%×5",
                                    "177.632%×5",
                                    "190.32%×5",
                                    "203.008%×5",
                                    "215.696%×5",
                                    "228.384%×5",
                                    "241.072%×5",
                                    "253.76%×5",
                                    "269.62%×5",
                                    "285.48%×5",
                                    "301.34%×5"
                                ]
                            },
                            {
                                "Desc": "付与する命の契約",
                                "ParamLevelList": [
                                    "HP上限66.0%",
                                    "HP上限72.0%",
                                    "HP上限78.0%",
                                    "HP上限84.0%",
                                    "HP上限90.0%",
                                    "HP上限96.0%",
                                    "HP上限102.0%",
                                    "HP上限108.0%",
                                    "HP上限114.0%",
                                    "HP上限120.0%",
                                    "HP上限126.0%",
                                    "HP上限132.0%",
                                    "HP上限138.0%",
                                    "HP上限144.0%",
                                    "HP上限150.0%"
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
                        "Name": "夜を裂く紫焔",
                        "Desc": "付近にいるチーム内キャラクターが敵に<color style='color:#FFACFF;'>雷元素関連反応</color>を起こした後、クロリンデの攻撃力の20%を基に、クロリンデの<color style='color:#FFD780;'>消えゆく残光</color>および通常攻撃による<color style='color:#FFACFF;'>雷元素ダメージ</color>をアップする。この効果の継続時間は15秒、最大3層まで重ね掛け可能。継続時間は層ごとに独立してカウントされる。<br>この方法でアップできるクロリンデの上記の攻撃によるダメージは最大1800まで。",
                        "Icon": "UI_Talent_S_Clorinde_05"
                    },
                    {
                        "Name": "契約の報償",
                        "Desc": "クロリンデの命の契約がHP上限の100%以上の場合、命の契約の数値が増減する時、クロリンデの会心率+10%。この効果の継続時間は15秒、最大2層まで重ね掛け可能。継続時間は層ごとに独立してカウントされる。<br>また、<color style='color:#FFD780;'>夜狩の巡回</color>の夜巡り状態も強化され、継続期間中、回復量の命の契約への変換率が100%になる。",
                        "Icon": "UI_Talent_S_Clorinde_06"
                    },
                    {
                        "Name": "夜巡りの収穫",
                        "Desc": "ミニマップで周囲の<color style='color:#FFD780;'>フォンテーヌ地域の特産</color>の位置を表示する。",
                        "Icon": "UI_Talent_S_Liney_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「ここより、 燭影の帷を通る」",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡回</color>の夜巡り状態継続期間中、クロリンデの通常攻撃による<color style='color:#FFACFF;'>雷元素ダメージ</color>が敵に命中した時、敵の近くに夜巡りの影を召喚して連携攻撃を2回行い、それぞれクロリンデの攻撃力30%に相当する<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。<br>この効果は1.2秒毎に1回のみ発動でき、この方法によるダメージは通常攻撃ダメージと見なされる。",
                        "Icon": "UI_Talent_S_Clorinde_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「ここより、 永夜の危険に迫る」",
                        "Desc": "固有天賦「夜を裂く紫焔」の効果が以下のように強化される。付近にいるチーム内キャラクターが敵に<color style='color:#FFACFF;'>雷元素関連反応</color>を起こした後、クロリンデの攻撃力の30%を基に、クロリンデの<color style='color:#FFD780;'>消えゆく残光</color>および通常攻撃による<color style='color:#FFACFF;'>雷元素ダメージ</color>をアップする。継続時間は15秒、最大3層まで重ね掛け可能。また、継続時間は層ごとに独立してカウントされる。3層の時、クロリンデの中断耐性がアップする。この方法でアップできるクロリンデの上記の攻撃ダメージは最大2700まで。<br>固有天賦「夜を裂く紫焔」を解放する必要がある。",
                        "Icon": "UI_Talent_S_Clorinde_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「白昼の誓いを忘れるな」",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡回</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Clorinde_02"
                    },
                    {
                        "Level": 4,
                        "Name": "「涙と命、仁愛を心に刻め」",
                        "Desc": "<color style='color:#FFD780;'>消えゆく残光</color>が敵にダメージを与える時、クロリンデの命の契約パーセンテージを基に以下の通りダメージがアップする。命の契約1%につき、<color style='color:#FFD780;'>消えゆく残光</color>のダメージ+2%。この方法でアップできる<color style='color:#FFD780;'>消えゆく残光</color>ダメージは最大200%まで。",
                        "Icon": "UI_Talent_S_Clorinde_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「やがて夜明けは訪れる」",
                        "Desc": "<color style='color:#FFD780;'>消えゆく残光</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Clorinde_01"
                    },
                    {
                        "Level": 6,
                        "Name": "「故に—— 希望を捨ててはならない」",
                        "Desc": "<color style='color:#FFD780;'>夜狩の巡回</color>発動後の12秒間、クロリンデの会心率+10%、会心ダメージ+70%。<br>また、夜巡り状態継続期間中、特定の状況で「明燭の影」が現れて追撃を行い、クロリンデの攻撃力200%分の<color style='color:#FFACFF;'>雷元素ダメージ</color>を与える。この方法によるダメージは通常攻撃ダメージと見なされる。<br>明燭の影は以下の状況で現れる。<br> · クロリンデが攻撃に当たる直前。<br> · クロリンデが穿夜 · 契約を繰り出した時。<br>この2つの方法による明燭の影の召喚は、1秒毎に1回のみ可能。夜巡り状態継続期間中は、明燭の影を最大6回召喚できる。<br>また、夜巡り状態継続期間中、クロリンデの受けるダメージ-80%、中断耐性がアップする。この効果は夜巡り状態終了時、あるいは明燭の影を6回召喚した1秒後に解除される。",
                        "Icon": "UI_Talent_S_Clorinde_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Clorinde": {
        "AttackList": [
            {
                "Skill": "Q x5",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        9.0,
                        11.2,
                        6.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Elec",
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
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttackerInverse"
            },
            {
                "Skill": "C1 DMG x2",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        5.0,
                        4.0,
                        3.0
                    ]
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "C1&C6 Group",
                "AttGrp": "Once every 1s",
                "Element": "Elec",
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
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByOriginOwner"
            },
            {
                "Skill": "C6 DMG",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        8.0,
                        8.0,
                        5.0
                    ]
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "C1&C6 Group",
                "AttGrp": "Once every 1s",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 75.0,
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
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Swift Hunt Lv1",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        0.6
                    ]
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Elec",
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
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Swift Hunt Lv2",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Elec",
                "GU": 1.0,
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
                "CanInfuse": false,
                "StrikeType": "Default",
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Impale Lv1",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 25.0,
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Impale Lv2",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 25.0,
                "ForceType": 2,
                "Force": [
                    300.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByHitDirectionInverse"
            },
            {
                "Skill": "Impale Lv3 (1,2)",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Elec",
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
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByOriginOwner"
            },
            {
                "Skill": "Impale Lv3 (3)",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 25.0,
                "ForceType": 2,
                "Force": [
                    300.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByHitDirectionInverse"
            },
            {
                "Skill": "Surging Blade",
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
                "Element": "Elec",
                "GU": 0.0,
                "Poise": 20.0,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": -1.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Spear",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.7,
                        2.7
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 56.6,
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.9,
                        2.1
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 54.0,
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 3-1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.1,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 35.8,
                "ForceType": 2,
                "Force": [
                    300.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.03,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 3-2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.1,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 35.8,
                "ForceType": 2,
                "Force": [
                    300.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.03,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttackerForward"
            },
            {
                "Skill": "Normal ATK 4-1",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        3.5,
                        5.0,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 24.234,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 4-2",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        3.0,
                        5.0,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 24.234,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 4-3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        3.0,
                        5.0,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 24.234,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.5,
                        3.5
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 94.2,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.03,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Charged ATK",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.1,
                        2.5,
                        120.0
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 60.0,
                "ForceType": 3,
                "Force": [
                    250.0,
                    650.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Default",
                "AttackType": "Melee",
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            }
        ]
    }
}