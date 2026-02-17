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
                                "Desc": "1단 공격 피해",
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
                                "Desc": "2단 공격 피해",
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
                                "Desc": "3단 공격 피해",
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
                                "Desc": "4단 공격 피해",
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
                                "Desc": "5단 공격 피해",
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
                                "Desc": "강공격 피해",
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
                                "Desc": "강공격 스태미나 소모",
                                "ParamLevelList": [
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt"
                                ]
                            },
                            {
                                "Desc": "낙하 기간 피해",
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
                                "Desc": "저공/고공 추락 충격 피해",
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
                                "Desc": "일반/관통탄 피해",
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
                                "Desc": "생명의 계약 획득",
                                "ParamLevelList": [
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%"
                                ]
                            },
                            {
                                "Desc": "1단계 【강화 찌르기】 피해",
                                "ParamLevelList": [
                                    "32.972%",
                                    "35.656%",
                                    "38.34%",
                                    "42.174%",
                                    "44.858%",
                                    "47.925%",
                                    "52.142%",
                                    "56.36%",
                                    "60.577%",
                                    "65.178%",
                                    "69.779%",
                                    "74.38%",
                                    "78.98%",
                                    "83.581%",
                                    "88.182%"
                                ]
                            },
                            {
                                "Desc": "2단계 【강화 찌르기】 피해",
                                "ParamLevelList": [
                                    "43.963%",
                                    "47.542%",
                                    "51.12%",
                                    "56.232%",
                                    "59.81%",
                                    "63.9%",
                                    "69.523%",
                                    "75.146%",
                                    "80.77%",
                                    "86.904%",
                                    "93.038%",
                                    "99.173%",
                                    "105.307%",
                                    "111.442%",
                                    "117.576%"
                                ]
                            },
                            {
                                "Desc": "3단계 【강화 찌르기】 현치유",
                                "ParamLevelList": [
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%",
                                    "현재 생명의 계약의 105.0%"
                                ]
                            },
                            {
                                "Desc": "3단계 【강화 찌르기】 피해",
                                "ParamLevelList": [
                                    "18.318%x3",
                                    "19.809%x3",
                                    "21.3%x3",
                                    "23.43%x3",
                                    "24.921%x3",
                                    "26.625%x3",
                                    "28.968%x3",
                                    "31.311%x3",
                                    "33.654%x3",
                                    "36.21%x3",
                                    "38.766%x3",
                                    "41.322%x3",
                                    "43.878%x3",
                                    "46.434%x3",
                                    "48.99%x3"
                                ]
                            },
                            {
                                "Desc": "3단계 【강화 찌르기】 치유",
                                "ParamLevelList": [
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%",
                                    "현재 생명의 계약의 120.0%"
                                ]
                            },
                            {
                                "Desc": "치유로 획득한 생명의 계약",
                                "ParamLevelList": [
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 피해",
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
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "126.88%x5",
                                    "136.396%x5",
                                    "145.912%x5",
                                    "158.6%x5",
                                    "168.116%x5",
                                    "177.632%x5",
                                    "190.32%x5",
                                    "203.008%x5",
                                    "215.696%x5",
                                    "228.384%x5",
                                    "241.072%x5",
                                    "253.76%x5",
                                    "269.62%x5",
                                    "285.48%x5",
                                    "301.34%x5"
                                ]
                            },
                            {
                                "Desc": "생명의 계약 획득",
                                "ParamLevelList": [
                                    "HP 최대치의 66.0%",
                                    "HP 최대치의 72.0%",
                                    "HP 최대치의 78.0%",
                                    "HP 최대치의 84.0%",
                                    "HP 최대치의 90.0%",
                                    "HP 최대치의 96.0%",
                                    "HP 최대치의 102.0%",
                                    "HP 최대치의 108.0%",
                                    "HP 최대치의 114.0%",
                                    "HP 최대치의 120.0%",
                                    "HP 최대치의 126.0%",
                                    "HP 최대치의 132.0%",
                                    "HP 최대치의 138.0%",
                                    "HP 최대치의 144.0%",
                                    "HP 최대치의 150.0%"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초",
                                    "60.0초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Desc": "파티 내 모든 캐릭터의 원소 타입이 <color style='color:#FF9999;'>불 원소</color>와 <color style='color:#FFACFF;'>번개 원소</color>이며 불 원소 캐릭터와 번개 원소 캐릭터가 각각 최소 1명씩 있을 경우:<br>클로린드의 <color style='color:#FFD780;'>전투 스킬</color> 주변에 있는 파티 내 캐릭터가 【과부하】 발동 시, 클로린드에게 「강화」 상태를 부여한다. 해당 상태에서 클로린드가 주는 <color style='color:#FFACFF;'>번개 원소 일반 공격과 원소폭발 피해</color>가 증가한다. 증가량은 클로린드 공격력의 60%에 해당하며, 해당 방식으로 추가 피해가 최대 200pt 증가한다. 지속 시간: 10초.<br>파티 내 캐릭터의 원소 타입이 고유 특성을 충족시킬 수 없거나 클로린드 전투 스킬의 지속 시간 종료 시, 「강화」 상태 효과가 사라진다",
                        "Icon": "UI_Talent_S_Clorinde_05"
                    },
                    {
                        "Name": "Lawful Remuneration",
                        "Desc": "If Clorinde's Bond of Life is equal to or greater than 100% of her Max HP, her CRIT Rate will increase by 10% for 15s whenever her Bond of Life value increases or decreases. Max 2 stacks. Each stack is counted independently.<br>Additionally, <color style='color:#FFD780;'>Hunt the Night</color>'s Night Watch state is buffed: While it is active, the percent of healing converted to Bond of Life increases to 100%.",
                        "Icon": "UI_Talent_S_Clorinde_06"
                    },
                    {
                        "Name": "Night Watch's Yield",
                        "Desc": "원소전투 스킬 지속 주기 동안, 클로린드는 <color style='color:#FFD780;'>원소전투 스킬</color> 「강화 찌르기」의 치유 효과만 받을 수 있다",
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
                        "Desc": "고유 특성 「과부하」 발동 후, 특성에 포함된 추가 번개 피해 보너스가 기존의 145%만큼 증가한다.<br>해당 효과는 고유 특성 「과부하」를 해금해야 한다",
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
                        "Name": "일반 공격 · 그림자 사냥의 맹세",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>검으로 최대 5번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>일정 스태미나를 소모해 전방에 예리한 참격을 날리고 화승총으로 부채꼴 제압 사격을 한다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다",
                        "Num": 1,
                        "Lock": 5.0,
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
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
                                "Desc": "2단 공격 피해",
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
                                "Desc": "3단 공격 피해",
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
                                "Desc": "4단 공격 피해",
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
                                "Desc": "5단 공격 피해",
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
                                "Desc": "강공격 피해",
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
                                "Desc": "강공격 스태미나 소모",
                                "ParamLevelList": [
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt"
                                ]
                            },
                            {
                                "Desc": "낙하 기간 피해",
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
                                "Desc": "저공/고공 추락 충격 피해",
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
                        "Name": "밤 사냥",
                        "Desc": "화승총을 미리 장전하고 검술과 총술을 결합한 「야경」 상태에 진입한다. 해당 상태에서 클로린드의 일반 공격은 화승총 사격 「수렵」으로 전환되어, 주는 피해가 다른 원소 부여 효과로 대체될 수 없는 <color style='color:#FFACFF;'>번개 원소 피해</color>로 전환된다. 원소전투 스킬은 「밤 꿰뚫기」로 대체되어, 돌진해 검으로 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. 상술한 방식으로 주는 피해는 일반 공격 피해로 간주한다.<br><br><color style='color:#FFD780;'>수렵</color><br> · 생명의 계약이 HP 최대치의 100% 이상: 일반 화승총 사격을 한다.<br> · 생명의 계약이 HP 최대치의 100% 미만: 화승총 사격 시, 클로린드의 HP 최대치에 기반해 자신에게 일정량의 생명의 계약을 부여하고, 적을 관통하는 탄환을 발사해 경로상의 적에게 더 큰 피해를 준다.<br><br><color style='color:#FFD780;'>밤 꿰뚫기</color><br>클로린드의 생명의 계약을 제거하고, 제거된 생명의 계약의 백분률에 따라 이번 밤 꿰뚫기의 효과를 강화한다:<br> · 생명의 계약 미소모: 일반 돌진 검격을 날린다.<br> · 제거된 생명의 계약이 HP 최대치의 100% 미만: 이번 밤 꿰뚫기의 범위와 주는 피해가 증가하고 제거된 생명의 계약의 수치에 기반해 클로린드의 HP를 회복한다.<br> · 제거된 생명의 계약이 HP 최대치의 100% 이상: 이번 밤 꿰뚫기의 범위와 주는 피해가 더 증가하고, 클로린드가 더 높은 비율로 HP를 회복한다.<br><br>또한 클로린드가 야경 상태 시, 밤 꿰뚫기를 제외한 치유 효과가 적용되지 않으며, 자신에게 HP 회복량의 일정 비율에 해당하는 생명의 계약을 부여한다.<br><br><color style='color:#FFD780;'>아르케의 힘: 우시아</color><br>클로린드의 화승총이 적에게 명중 후, 일정 시간마다 적의 위치에 솟구치는 칼날을 내려 우시아 성질의 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다.<br><br><i>밤 그림자 속에 숨은 사악한 존재는 천년의 토벌 끝에 일찍이 사라졌지만, 빛이 닿지 않는 인간의 마음속 그림자는 여전히 남아있다.<br>오늘날에도 클로린드는 「황금 사냥꾼」이 남긴 가르침을 명심한다: 촛불을 붙인 야간 순찰자는 차가운 어둠에 잠식당하지 않도록 더욱 조심해야 한다</i>",
                        "Num": 1,
                        "Lock": 12.0,
                        "Icon": "Skill_S_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "수렵 피해",
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
                                "Desc": "수렵으로 부여하는 생명의 계약",
                                "ParamLevelList": [
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%"
                                ]
                            },
                            {
                                "Desc": "밤 꿰뚫기 피해",
                                "ParamLevelList": [
                                    "32.972%/43.963%/18.318%x3",
                                    "35.656%/47.542%/19.809%x3",
                                    "38.34%/51.12%/21.3%x3",
                                    "42.174%/56.232%/23.43%x3",
                                    "44.858%/59.81%/24.921%x3",
                                    "47.925%/63.9%/26.625%x3",
                                    "52.142%/69.523%/28.968%x3",
                                    "56.36%/75.146%/31.311%x3",
                                    "60.577%/80.77%/33.654%x3",
                                    "65.178%/86.904%/36.21%x3",
                                    "69.779%/93.038%/38.766%x3",
                                    "74.38%/99.173%/41.322%x3",
                                    "78.98%/105.307%/43.878%x3",
                                    "83.581%/111.442%/46.434%x3",
                                    "88.182%/117.576%/48.99%x3"
                                ]
                            },
                            {
                                "Desc": "밤 꿰뚫기 치유량",
                                "ParamLevelList": [
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%",
                                    "0%/105.0%/생명의 계약의 120.0%"
                                ]
                            },
                            {
                                "Desc": "생명의 계약 전환",
                                "ParamLevelList": [
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 피해",
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
                                "Desc": "야경 상태 지속 시간",
                                "ParamLevelList": [
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초",
                                    "9.0초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "찰나의 여광",
                        "Desc": "HP 최대치를 기반으로 자신에게 생명의 계약을 부여하고, 검과 총의 합주로 회피하며 공격을 통해 <color style='color:#FFACFF;'>번개 원소 범위 피해</color>를 준다.<br><br><i>평범한 인간의 몸으로 인간이 아닌 존재에게 맞서는 오래된 기술이다. 그 전승의 역사는 레무리아 제국에 저항했던 물의 기사까지 거슬러 올라간다고 한다.<br>하지만 힘을 잘 제어할 수만 있다면 결투에서 평범한 적에게 사용하는 것이 금지된 기술은 아니다</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "126.88%x5",
                                    "136.396%x5",
                                    "145.912%x5",
                                    "158.6%x5",
                                    "168.116%x5",
                                    "177.632%x5",
                                    "190.32%x5",
                                    "203.008%x5",
                                    "215.696%x5",
                                    "228.384%x5",
                                    "241.072%x5",
                                    "253.76%x5",
                                    "269.62%x5",
                                    "285.48%x5",
                                    "301.34%x5"
                                ]
                            },
                            {
                                "Desc": "생명의 계약 부여",
                                "ParamLevelList": [
                                    "HP 최대치의 66.0%",
                                    "HP 최대치의 72.0%",
                                    "HP 최대치의 78.0%",
                                    "HP 최대치의 84.0%",
                                    "HP 최대치의 90.0%",
                                    "HP 최대치의 96.0%",
                                    "HP 최대치의 102.0%",
                                    "HP 최대치의 108.0%",
                                    "HP 최대치의 114.0%",
                                    "HP 최대치의 120.0%",
                                    "HP 최대치의 126.0%",
                                    "HP 최대치의 132.0%",
                                    "HP 최대치의 138.0%",
                                    "HP 최대치의 144.0%",
                                    "HP 최대치의 150.0%"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Name": "밤하늘을 가르는 불꽃",
                        "Desc": "주변에 있는 파티 내 캐릭터가 적에게 <color style='color:#FFACFF;'>번개 원소 관련 반응</color>을 발동한 후, 클로린드 공격력의 17%를 기반으로 일반 공격과 <color style='color:#FFD780;'>찰나의 여광</color>이 주는 <color style='color:#FFACFF;'>번개 원소 피해</color>가 증가한다. 지속 시간: 15초. 최대 중첩수: 3스택. 스택마다 독립적으로 계산하며, 해당 방식으로 클로린드의 상술한 공격이 주는 피해가 최대 1530pt 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_05"
                    },
                    {
                        "Name": "계약의 보상",
                        "Desc": "만약 클로린드의 생명의 계약이 HP 최대치의 100% 이상이고, 생명의 계약의 수치가 증가 또는 감소 시, 클로린드의 치명타 확률이 10% 증가한다. 지속 시간: 15초, 최대 중첩수: 2스택. 지속 시간은 독립적으로 계산한다.<br>또한 <color style='color:#FFD780;'>밤 사냥</color>의 야경을 강화한다: 지속 시간 동안 치유 회복량이 생명의 계약으로 전환되는 비율이 100% 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_06"
                    },
                    {
                        "Name": "야간 순찰의 성과",
                        "Desc": "미니맵에 주위의 <color style='color:#FFD780;'>폰타인 지역 특산물</color> 위치가 나타난다",
                        "Icon": "UI_Talent_S_Liney_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「지금부터 촛불의 장막을 지나」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color>의 야경 상태 지속 시간 동안 클로린드의 일반 공격의 <color style='color:#FFACFF;'>번개 원소 피해</color>가 적에게 명중 시, 적 주변에 야경의 그림자를 소환해 협동 공격을 2회 진행하고 각기 클로린드 공격력의 30%에 해당하는 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. <br>해당 효과는 1초마다 최대 1회 발동되며 해당 방식으로 주는 피해는 일반 공격 피해로 간주한다",
                        "Icon": "UI_Talent_S_Clorinde_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「지금부터 긴 밤의 위험에 맞선다」",
                        "Desc": "고유 특성 「밤하늘을 가르는 불꽃」의 효과를 강화한다: 주변에 있는 파티 내 캐릭터가 <color style='color:#FFACFF;'>번개 원소 관련 반응</color>을 발동한 후, 클로린드 공격력의 24%를 기반으로 일반 공격과 <color style='color:#FFD780;'>찰나의 여광</color>이 주는 <color style='color:#FFACFF;'>번개 원소 피해</color>가 증가한다. 지속 시간: 15초. 최대 중첩수: 3스택. 스택마다 독립적으로 계산하며 3스택 상태 시, 클로린드의 경직 저항력이 증가한다. 해당 방식으로 클로린드의 상술한 공격이 주는 피해가 최대 2160pt 증가한다.<br>고유 특성 「밤하늘을 가르는 불꽃」을 해금해야 한다",
                        "Icon": "UI_Talent_S_Clorinde_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「난 낮의 맹세를 명심하고」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Clorinde_02"
                    },
                    {
                        "Level": 4,
                        "Name": "「눈물, 생명, 사랑을 간직하며」",
                        "Desc": "<color style='color:#FFD780;'>찰나의 여광</color>이 적에게 피해를 줄 시, 클로린드 현재 생명의 계약의 백분율을 기반으로 이번 피해가 증가한다. 생명의 계약 1%당 이번 <color style='color:#FFD780;'>찰나의 여광</color>이 주는 피해가 2% 증가한다. 해당 방식으로 <color style='color:#FFD780;'>찰나의 여광</color>이 주는 피해가 최대 200% 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「언젠가 찾아올 여명을 믿겠다」",
                        "Desc": "<color style='color:#FFD780;'>찰나의 여광</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Clorinde_01"
                    },
                    {
                        "Level": 6,
                        "Name": "「절대 희망을 버리지 않으리라」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color> 발동 후, 12초 동안 클로린드의 치명타 확률이 10%, 치명타 피해가 70% 증가한다.<br>또한 야경 상태 지속 시간 동안, 촛불의 그림자가 특정 조건에 따라 나타나, 클로린드가 1초 동안 받는 피해를 80% 감소시키고, 경직 저항력을 증가시키며, 적을 추적해 클로린드 공격력의 200%에 해당하는 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. 해당 방식으로 주는 피해는 일반 공격 피해로 간주한다.<br>촛불의 그림자는 아래와 같은 상황에 나타난다:<br> · 클로린드가 적의 공격에 명중되기 직전.<br> · 클로린드가 밤 꿰뚫기 · 계약 진행 시.<br>상술한 방식으로 x초마다 촛불의 그림자를 최대 1회 소환한다. 한 번의 야경 상태 지속 시간 동안, 촛불의 그림자를 최대 6회 소환할 수 있다",
                        "Icon": "UI_Talent_S_Clorinde_04"
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Name": "일반 공격 · 그림자 사냥의 맹세",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>검으로 최대 5번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>일정 스태미나를 소모해 화승총으로 부채꼴 제압 사격을 한다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다",
                        "Num": 1,
                        "Lock": 5.0,
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
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
                                "Desc": "2단 공격 피해",
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
                                "Desc": "3단 공격 피해",
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
                                "Desc": "4단 공격 피해",
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
                                "Desc": "5단 공격 피해",
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
                                "Desc": "강공격 피해",
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
                                "Desc": "강공격 스태미나 소모",
                                "ParamLevelList": [
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt"
                                ]
                            },
                            {
                                "Desc": "낙하 기간 피해",
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
                                "Desc": "저공/고공 추락 충격 피해",
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
                        "Name": "밤 사냥",
                        "Desc": "화승총을 미리 장전하고 검술과 총술을 결합한 「밤 순찰」 상태에 진입한다. 해당 상태에서 클로린드의 일반 공격은 화승총 사격 「수렵」으로 전환되어, 주는 피해가 다른 원소 부여 효과로 대체될 수 없는 <color style='color:#FFACFF;'>번개 원소 피해</color>로 전환된다. 원소전투 스킬 발동은 「밤 꿰뚫기」로 전환된다: 돌진하며 검으로 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. 상술한 방식으로 주는 피해는 일반 공격 피해로 간주한다.<br><br><color style='color:#FFD780;'>수렵</color><br> · 생명의 계약이 HP 최대치의 100% 이상: 화승총 사격을 한다.<br> · 생명의 계약이 HP 최대치의 100% 미만: 화승총 사격 시, 클로린드의 HP 최대치에 기반해 자신에게 일정량의 생명의 계약을 부여하고, 적을 관통하는 탄환을 발사해 경로상의 적에게 더 큰 피해를 준다.<br><br><color style='color:#FFD780;'>밤 꿰뚫기</color><br>클로린드의 현재 생명의 계약의 백분율에 따라 이번 밤 꿰뚫기의 효과가 결정된다:<br> · 생명의 계약이 0% 시, 돌진하며 검으로 공격한다.<br> · 생명의 계약이 HP 최대치의 100% 미만 시, 이번 밤 꿰뚫기의 범위와 주는 피해가 증가하고 클로린드 생명의 계약의 수치에 기반해 자신의 HP를 회복한다.<br> · 생명의 계약이 HP 최대치의 100% 이상 시, 밤 꿰뚫기 · 계약을 진행해 클로린드가 더 높은 비율의 HP를 회복하고 밤 꿰뚫기의 범위와 주는 피해가 더 증가한다.<br><br>또한 클로린드가 밤 순찰 상태일 경우, 밤 꿰뚫기를 제외한 치유 효과를 받을 수 없으며, 자신에게 HP 회복량의 일정 비율에 해당하는 생명의 계약을 부여한다.<br><br>「밤 순찰」 상태는 클로린드가 퇴장 시 사라진다.<br><br><color style='color:#FFD780;'>아르케의 힘: 우시아</color><br>클로린드의 수렵이 적에게 명중 시, 일정 시간마다 적의 위치에 솟구치는 칼날을 내려 우시아 성질의 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다.<br><br><i>밤 그림자 속에 숨은 사악한 존재는 천년의 토벌 끝에 일찍이 사라졌지만, 빛이 닿지 않는 인간의 마음속 그림자는 여전히 남아있다.<br>오늘날에도 클로린드는 「황금 사냥꾼」이 남긴 가르침을 명심한다: 촛불을 붙인 야간 순찰자는 차가운 어둠에 잠식당하지 않도록 더욱 조심해야 한다</i>",
                        "Num": 1,
                        "Lock": 12.0,
                        "Icon": "Skill_S_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "수렵 피해",
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
                                "Desc": "수렵으로 부여하는 생명의 계약",
                                "ParamLevelList": [
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%"
                                ]
                            },
                            {
                                "Desc": "밤 꿰뚫기 피해",
                                "ParamLevelList": [
                                    "32.972%/43.963%/25.112%x3",
                                    "35.656%/47.542%/27.156%x3",
                                    "38.34%/51.12%/29.2%x3",
                                    "42.174%/56.232%/32.12%x3",
                                    "44.858%/59.81%/34.164%x3",
                                    "47.925%/63.9%/36.5%x3",
                                    "52.142%/69.523%/39.712%x3",
                                    "56.36%/75.146%/42.924%x3",
                                    "60.577%/80.77%/46.136%x3",
                                    "65.178%/86.904%/49.64%x3",
                                    "69.779%/93.038%/53.144%x3",
                                    "74.38%/99.173%/56.648%x3",
                                    "78.98%/105.307%/60.152%x3",
                                    "83.581%/111.442%/63.656%x3",
                                    "88.182%/117.576%/67.16%x3"
                                ]
                            },
                            {
                                "Desc": "밤 꿰뚫기 치유량",
                                "ParamLevelList": [
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%"
                                ]
                            },
                            {
                                "Desc": "생명의 계약 전환",
                                "ParamLevelList": [
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 피해",
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
                                "Desc": "밤 순찰 상태 지속 시간",
                                "ParamLevelList": [
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "곧 꺼질 여광",
                        "Desc": "HP 최대치를 기반으로 자신에게 생명의 계약을 부여하고, 검과 총의 합주로 회피하며 공격을 통해 <color style='color:#FFACFF;'>번개 원소 범위 피해</color>를 준다.<br><br><i>평범한 인간의 몸으로 인간이 아닌 존재에게 맞서는 오래된 기술이다. 그 전승의 역사는 레무리아 제국에 저항했던 물의 기사까지 거슬러 올라간다고 한다.<br>하지만 힘을 잘 제어할 수만 있다면 결투에서 평범한 적에게 사용하는 것이 금지된 기술은 아니다</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "126.88%x5",
                                    "136.396%x5",
                                    "145.912%x5",
                                    "158.6%x5",
                                    "168.116%x5",
                                    "177.632%x5",
                                    "190.32%x5",
                                    "203.008%x5",
                                    "215.696%x5",
                                    "228.384%x5",
                                    "241.072%x5",
                                    "253.76%x5",
                                    "269.62%x5",
                                    "285.48%x5",
                                    "301.34%x5"
                                ]
                            },
                            {
                                "Desc": "생명의 계약 부여",
                                "ParamLevelList": [
                                    "HP 최대치의 66.0%",
                                    "HP 최대치의 72.0%",
                                    "HP 최대치의 78.0%",
                                    "HP 최대치의 84.0%",
                                    "HP 최대치의 90.0%",
                                    "HP 최대치의 96.0%",
                                    "HP 최대치의 102.0%",
                                    "HP 최대치의 108.0%",
                                    "HP 최대치의 114.0%",
                                    "HP 최대치의 120.0%",
                                    "HP 최대치의 126.0%",
                                    "HP 최대치의 132.0%",
                                    "HP 최대치의 138.0%",
                                    "HP 최대치의 144.0%",
                                    "HP 최대치의 150.0%"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Name": "밤을 가르는 불꽃",
                        "Desc": "주변에 있는 파티 내 캐릭터가 적에게 <color style='color:#FFACFF;'>번개 원소 관련 반응</color>을 발동한 후, 클로린드 공격력의 20%를 기반으로 클로린드의 일반 공격과 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 <color style='color:#FFACFF;'>번개 원소 피해</color>가 증가한다. 지속 시간: 15초, 최대 중첩수: 3스택. 스택마다 독립적으로 계산하며, 해당 방식으로 클로린드의 상술한 공격이 주는 피해가 최대 1800pt 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_05"
                    },
                    {
                        "Name": "계약의 보상",
                        "Desc": "만약 클로린드의 생명의 계약이 HP 최대치의 100% 이상이고, 생명의 계약의 수치가 증가 또는 감소 시, 클로린드의 치명타 확률이 10% 증가한다. 지속 시간: 15초, 최대 중첩수: 2스택. 지속 시간은 독립적으로 계산한다.<br>또한 <color style='color:#FFD780;'>밤 사냥</color>의 밤 순찰을 강화한다: 지속 시간 동안 치유 회복량이 생명의 계약으로 전환되는 비율이 100%로 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_06"
                    },
                    {
                        "Name": "야간 순찰의 성과",
                        "Desc": "미니맵에 주위의 <color style='color:#FFD780;'>폰타인 지역 특산물</color> 위치가 나타난다",
                        "Icon": "UI_Talent_S_Liney_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「지금부터 촛불의 장막을 지나」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color>의 밤 순찰 상태 지속 시간 동안 클로린드의 일반 공격으로 주는 <color style='color:#FFACFF;'>번개 원소 피해</color>가 적에게 명중 시, 적 주변에 밤 순찰의 그림자를 소환해 협동 공격을 2회 진행하고 각기 클로린드 공격력의 30%에 해당하는 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. <br>해당 효과는 1.2초마다 최대 1회 발동되며 해당 방식으로 주는 피해는 일반 공격 피해로 간주한다",
                        "Icon": "UI_Talent_S_Clorinde_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「지금부터 긴 밤의 위험에 맞선다」",
                        "Desc": "고유 특성 「밤을 가르는 불꽃」의 효과를 강화한다: 주변에 있는 파티 내 캐릭터가 적에게 <color style='color:#FFACFF;'>번개 원소 관련 반응</color>을 발동한 후, 클로린드 공격력의 30%를 기반으로 일반 공격과 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 <color style='color:#FFACFF;'>번개 원소 피해</color>가 증가한다. 지속 시간: 15초, 최대 중첩수: 3스택. 스택마다 독립적으로 계산하며 3스택 상태 시, 클로린드의 경직 저항력이 증가한다. 해당 방식으로 클로린드의 상술한 공격이 주는 피해가 최대 2700pt 증가한다.<br>고유 특성 「밤을 가르는 불꽃」을 해금해야 한다",
                        "Icon": "UI_Talent_S_Clorinde_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「난 낮의 맹세를 명심하고」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Clorinde_02"
                    },
                    {
                        "Level": 4,
                        "Name": "「눈물, 생명, 사랑을 간직하며」",
                        "Desc": "<color style='color:#FFD780;'>곧 꺼질 여광</color>이 적에게 피해를 줄 시, 클로린드 현재 생명의 계약의 백분율을 기반으로 이번 피해가 증가한다. 생명의 계약 1%당 이번 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 피해가 2% 증가한다. 해당 방식으로 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 피해가 최대 200% 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「언젠가 찾아올 여명을 믿겠다」",
                        "Desc": "<color style='color:#FFD780;'>곧 꺼질 여광</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Clorinde_01"
                    },
                    {
                        "Level": 6,
                        "Name": "「절대 희망을 버리지 않으리라」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color> 발동 후, 12초 동안 클로린드의 치명타 확률이 10%, 치명타 피해가 70% 증가한다.<br>또한 밤 순찰 상태 지속 시간 동안, 촛불의 그림자가 특정 조건에 따라 나타나 적을 추격해, 클로린드 공격력의 200%에 해당하는 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. 해당 방식으로 주는 피해는 일반 공격 피해로 간주한다.<br>촛불의 그림자는 아래와 같은 상황에서 나타난다:<br> · 클로린드가 적의 공격에 명중되기 직전.<br> · 클로린드가 밤 꿰뚫기 · 계약 진행 시.<br>상술한 방식으로 1초마다 촛불의 그림자를 최대 1회 소환한다. 한 번의 밤 순찰 상태 지속 시간 동안, 촛불의 그림자를 최대 6회 소환할 수 있다.<br>또한 밤 순찰 상태 지속 시간 동안, 클로린드가 받는 피해가 80% 감소하고 경직 저항력이 증가한다. 해당 효과는 밤 순찰 상태 종료 또는 촛불의 그림자를 6회 소환한 다음 1초 후에 사라진다",
                        "Icon": "UI_Talent_S_Clorinde_04"
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Name": "일반 공격 · 그림자 사냥의 맹세",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>검으로 최대 5번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>일정 스태미나를 소모해 화승총으로 부채꼴 제압 사격을 한다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다",
                        "Num": 1,
                        "Lock": 5.0,
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
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
                                "Desc": "2단 공격 피해",
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
                                "Desc": "3단 공격 피해",
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
                                "Desc": "4단 공격 피해",
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
                                "Desc": "5단 공격 피해",
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
                                "Desc": "강공격 피해",
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
                                "Desc": "강공격 스태미나 소모",
                                "ParamLevelList": [
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt",
                                    "20.0pt"
                                ]
                            },
                            {
                                "Desc": "낙하 기간 피해",
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
                                "Desc": "저공/고공 추락 충격 피해",
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
                        "Name": "밤 사냥",
                        "Desc": "화승총을 미리 장전하고 검술과 총술을 결합한 「밤 순찰」 상태에 진입한다. 해당 상태에서 클로린드의 일반 공격은 화승총 사격 「수렵」으로 전환되어, 주는 피해가 다른 원소 부여 효과로 대체될 수 없는 <color style='color:#FFACFF;'>번개 원소 피해</color>로 전환되며, 강공격을 발동할 수 없다. 원소전투 스킬 발동은 「밤 꿰뚫기」로 전환된다: 돌진하며 검으로 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. 상술한 방식으로 주는 피해는 일반 공격 피해로 간주한다.<br><br><color style='color:#FFD780;'>수렵</color><br> · 생명의 계약이 HP 최대치의 100% 이상: 화승총 사격을 한다.<br> · 생명의 계약이 HP 최대치의 100% 미만: 화승총 사격 시, 클로린드의 HP 최대치에 기반해 자신에게 일정량의 생명의 계약을 부여하고, 적을 관통하는 탄환을 발사해 경로상의 적에게 더 큰 피해를 준다.<br><br><color style='color:#FFD780;'>밤 꿰뚫기</color><br>클로린드의 현재 생명의 계약의 백분율에 따라 이번 밤 꿰뚫기의 효과가 결정된다:<br> · 생명의 계약이 0%일 시, 돌진하며 검으로 공격한다.<br> · 생명의 계약이 HP 최대치의 100% 미만 시, 이번 밤 꿰뚫기의 범위와 주는 피해가 증가하고 클로린드 생명의 계약의 수치에 기반해 자신의 HP를 회복한다.<br> · 생명의 계약이 HP 최대치의 100% 이상 시, 밤 꿰뚫기 · 계약을 진행해 클로린드가 더 높은 비율의 HP를 회복하고 이번 밤 꿰뚫기의 공격 범위와 주는 피해가 더 증가한다.<br><br>또한 클로린드가 밤 순찰 상태일 경우, 밤 꿰뚫기를 제외한 치유 효과를 받을 수 없으며, 치유 효과 대신 자신에게 HP 회복량의 일정 비율에 해당하는 생명의 계약을 부여한다.<br><br>「밤 순찰」 상태는 클로린드가 퇴장 시 사라진다.<br><br><color style='color:#FFD780;'>아르케의 힘: 우시아</color><br>클로린드의 수렵이 적에게 명중 시, 일정 시간마다 적의 위치에 솟구치는 칼날을 내려 우시아 성질의 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다.<br><br><i>밤 그림자 속에 숨은 사악한 존재는 천년의 토벌 끝에 일찍이 사라졌지만, 빛이 닿지 않는 인간의 마음속 그림자는 여전히 남아있다.<br>오늘날에도 클로린드는 「황금 사냥꾼」이 남긴 가르침을 명심한다: 촛불을 붙인 야간 순찰자는 차가운 어둠에 잠식당하지 않도록 더욱 조심해야 한다</i>",
                        "Num": 1,
                        "Lock": 12.0,
                        "Icon": "Skill_S_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "수렵 피해",
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
                                "Desc": "수렵으로 부여하는 생명의 계약",
                                "ParamLevelList": [
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%"
                                ]
                            },
                            {
                                "Desc": "밤 꿰뚫기 피해",
                                "ParamLevelList": [
                                    "32.972%/43.963%/25.112%x3",
                                    "35.656%/47.542%/27.156%x3",
                                    "38.34%/51.12%/29.2%x3",
                                    "42.174%/56.232%/32.12%x3",
                                    "44.858%/59.81%/34.164%x3",
                                    "47.925%/63.9%/36.5%x3",
                                    "52.142%/69.523%/39.712%x3",
                                    "56.36%/75.146%/42.924%x3",
                                    "60.577%/80.77%/46.136%x3",
                                    "65.178%/86.904%/49.64%x3",
                                    "69.779%/93.038%/53.144%x3",
                                    "74.38%/99.173%/56.648%x3",
                                    "78.98%/105.307%/60.152%x3",
                                    "83.581%/111.442%/63.656%x3",
                                    "88.182%/117.576%/67.16%x3"
                                ]
                            },
                            {
                                "Desc": "밤 꿰뚫기 치유량",
                                "ParamLevelList": [
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%"
                                ]
                            },
                            {
                                "Desc": "생명의 계약 전환",
                                "ParamLevelList": [
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 피해",
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
                                "Desc": "밤 순찰 상태 지속 시간",
                                "ParamLevelList": [
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초",
                                    "16.0초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "곧 꺼질 여광",
                        "Desc": "HP 최대치를 기반으로 자신에게 생명의 계약을 부여하고, 검과 총의 합주로 회피하며 공격을 통해 <color style='color:#FFACFF;'>번개 원소 범위 피해</color>를 준다.<br><br><i>평범한 인간의 몸으로 인간이 아닌 존재에게 맞서는 오래된 기술이다. 그 전승의 역사는 레무리아 제국에 저항했던 물의 기사까지 거슬러 올라간다고 한다.<br>하지만 힘을 잘 제어할 수만 있다면 결투에서 평범한 적에게 사용하는 것이 금지된 기술은 아니다</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "126.88%x5",
                                    "136.396%x5",
                                    "145.912%x5",
                                    "158.6%x5",
                                    "168.116%x5",
                                    "177.632%x5",
                                    "190.32%x5",
                                    "203.008%x5",
                                    "215.696%x5",
                                    "228.384%x5",
                                    "241.072%x5",
                                    "253.76%x5",
                                    "269.62%x5",
                                    "285.48%x5",
                                    "301.34%x5"
                                ]
                            },
                            {
                                "Desc": "생명의 계약 부여",
                                "ParamLevelList": [
                                    "HP 최대치의 66.0%",
                                    "HP 최대치의 72.0%",
                                    "HP 최대치의 78.0%",
                                    "HP 최대치의 84.0%",
                                    "HP 최대치의 90.0%",
                                    "HP 최대치의 96.0%",
                                    "HP 최대치의 102.0%",
                                    "HP 최대치의 108.0%",
                                    "HP 최대치의 114.0%",
                                    "HP 최대치의 120.0%",
                                    "HP 최대치의 126.0%",
                                    "HP 최대치의 132.0%",
                                    "HP 최대치의 138.0%",
                                    "HP 최대치의 144.0%",
                                    "HP 최대치의 150.0%"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초",
                                    "15.0초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Name": "밤을 가르는 불꽃",
                        "Desc": "주변에 있는 파티 내 캐릭터가 적에게 <color style='color:#FFACFF;'>번개 원소 관련 반응</color>을 발동한 후, 클로린드 공격력의 20%를 기반으로 클로린드의 일반 공격과 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 <color style='color:#FFACFF;'>번개 원소 피해</color>가 증가한다. 지속 시간: 15초, 최대 중첩수: 3스택. 스택마다 독립적으로 계산하며, 해당 방식으로 상술한 클로린드의 공격이 주는 피해가 최대 1800pt 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_05"
                    },
                    {
                        "Name": "계약의 보상",
                        "Desc": "만약 클로린드의 생명의 계약이 HP 최대치의 100% 이상이고, 생명의 계약의 수치가 증가 또는 감소 시, 클로린드의 치명타 확률이 10% 증가한다. 지속 시간: 15초, 최대 중첩수: 2스택. 지속 시간은 독립적으로 계산한다.<br>또한 <color style='color:#FFD780;'>밤 사냥</color>의 밤 순찰을 상태를 강화한다: 지속 시간 동안 치유 회복량이 생명의 계약으로 전환되는 비율이 100%로 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_06"
                    },
                    {
                        "Name": "야간 순찰의 성과",
                        "Desc": "미니맵에 주위의 <color style='color:#FFD780;'>폰타인 지역 특산물</color> 위치가 나타난다",
                        "Icon": "UI_Talent_S_Liney_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「지금부터 촛불의 장막을 지나」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color>의 밤 순찰 상태 지속 시간 동안 클로린드의 일반 공격으로 주는 <color style='color:#FFACFF;'>번개 원소 피해</color>가 적에게 명중 시, 적 주변에 밤 순찰의 그림자를 소환해 협동 공격을 2회 진행하고 각기 클로린드 공격력의 30%에 해당하는 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. <br>해당 효과는 1.2초마다 최대 1회 발동되며 해당 방식으로 주는 피해는 일반 공격 피해로 간주한다",
                        "Icon": "UI_Talent_S_Clorinde_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「지금부터 긴 밤의 위험에 맞선다」",
                        "Desc": "고유 특성 「밤을 가르는 불꽃」의 효과를 강화한다: 주변에 있는 파티 내 캐릭터가 적에게 <color style='color:#FFACFF;'>번개 원소 관련 반응</color>을 발동한 후, 클로린드 공격력의 30%를 기반으로 클로린드의 일반 공격과 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 <color style='color:#FFACFF;'>번개 원소 피해</color>가 증가한다. 지속 시간: 15초, 최대 중첩수: 3스택. 스택마다 독립적으로 계산하며 3스택 상태 시, 클로린드의 경직 저항력이 증가한다. 해당 방식으로 클로린드의 상술한 공격이 주는 피해가 최대 2700pt 증가한다.<br>고유 특성 「밤을 가르는 불꽃」을 해금해야 한다",
                        "Icon": "UI_Talent_S_Clorinde_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「난 낮의 맹세를 명심하고」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Clorinde_02"
                    },
                    {
                        "Level": 4,
                        "Name": "「눈물, 생명, 사랑을 간직하며」",
                        "Desc": "<color style='color:#FFD780;'>곧 꺼질 여광</color>이 적에게 피해를 줄 시, 클로린드 현재 생명의 계약의 백분율을 기반으로 이번 피해가 증가한다. 생명의 계약 1%당 이번 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 피해가 2% 증가한다. 해당 방식으로 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 피해가 최대 200% 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「언젠가 찾아올 여명을 믿겠다」",
                        "Desc": "<color style='color:#FFD780;'>곧 꺼질 여광</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Clorinde_01"
                    },
                    {
                        "Level": 6,
                        "Name": "「절대 희망을 버리지 않으리라」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color> 발동 후, 12초 동안 클로린드의 치명타 확률이 10%, 치명타 피해가 70% 증가한다.<br>또한 밤 순찰 상태 지속 시간 동안, 촛불의 그림자가 특정 조건에 따라 나타나 적을 추격해, 클로린드 공격력의 200%에 해당하는 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. 해당 방식으로 주는 피해는 일반 공격 피해로 간주한다.<br>촛불의 그림자는 아래와 같은 상황에서 나타난다:<br> · 클로린드가 적의 공격에 명중되기 직전.<br> · 클로린드가 밤 꿰뚫기 · 계약 진행 시.<br>상술한 방식으로 1초마다 촛불의 그림자를 최대 1회 소환한다. 한 번의 밤 순찰 상태 지속 시간 동안, 촛불의 그림자를 최대 6회 소환할 수 있다.<br>또한 밤 순찰 상태 지속 시간 동안, 클로린드가 받는 피해가 80% 감소하고 경직 저항력이 증가한다. 해당 효과는 밤 순찰 상태 종료 또는 촛불의 그림자를 6회 소환한 다음 1초 후에 사라진다",
                        "Icon": "UI_Talent_S_Clorinde_04"
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "그림자 사냥의 맹세",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>검으로 최대 5번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>일정 스태미나를 소모해 화승총으로 부채꼴 제압 사격을 한다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다",
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
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
                                "Desc": "2단 공격 피해",
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
                                "Desc": "3단 공격 피해",
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
                                "Desc": "4단 공격 피해",
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
                                "Desc": "5단 공격 피해",
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
                                "Desc": "강공격 피해",
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
                                "Desc": "강공격 스태미나 소모",
                                "ParamLevelList": [
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt"
                                ]
                            },
                            {
                                "Desc": "낙하 기간 피해",
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
                                "Desc": "저공/고공 추락 충격 피해",
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
                        "Name": "밤 사냥",
                        "Desc": "화승총을 미리 장전하고 검술과 총술을 결합한 「밤 순찰」 상태에 진입한다. 해당 상태에서 클로린드의 일반 공격은 화승총 사격 「수렵」으로 전환되어, 주는 피해가 다른 원소 부여 효과로 대체될 수 없는 <color style='color:#FFACFF;'>번개 원소 피해</color>로 전환되고 강공격을 진행할 수 없다. 원소전투 스킬 발동은 「밤 꿰뚫기」로 전환된다: 돌진해 검으로 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. 상술한 방식으로 주는 피해는 일반 공격 피해로 간주한다.<br><br><color style='color:#FFD780;'>수렵</color><br> · 생명의 계약이 HP 최대치의 100% 이상: 화승총 사격을 한다.<br> · 생명의 계약이 HP 최대치의 100% 미만: 화승총 사격 시, 클로린드의 HP 최대치에 기반해 자신에게 일정량의 생명의 계약을 부여하고, 적을 관통하는 탄환을 발사해 경로상의 적에게 더 큰 피해를 준다.<br><br><color style='color:#FFD780;'>밤 꿰뚫기</color><br>클로린드의 현재 생명의 계약의 백분율에 따라 이번 밤 꿰뚫기의 효과가 결정된다:<br> · 생명의 계약이 0%일 시, 돌진해 검으로 공격한다.<br> · 생명의 계약이 HP 최대치의 100% 미만 시, 이번 밤 꿰뚫기의 범위와 주는 피해가 증가하고 클로린드 생명의 계약의 수치에 기반해 자신의 HP를 회복한다.<br> · 생명의 계약이 HP 최대치의 100% 이상 시, 밤 꿰뚫기 · 계약을 진행해 클로린드가 더 높은 비율의 HP를 회복하고 이번 밤 꿰뚫기의 범위와 주는 피해가 더 증가한다.<br><br>또한 클로린드가 밤 순찰 상태일 경우, 밤 꿰뚫기를 제외한 치유 효과가 적용되지 않으며, 대신 치유 효과가 자신에게 HP 회복량의 일정 비율에 해당하는 생명의 계약을 부여하는 것으로 전환된다.<br><br>「밤 순찰」 상태는 클로린드가 퇴장 시 사라진다.<br><br><color style='color:#FFD780;'>아르케의 힘: 우시아</color><br>클로린드의 수렵이 적에게 명중 시, 일정 시간마다 명중한 위치에 솟구치는 칼날을 내려 우시아 성질의 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다.<br><br><i>밤 그림자 속에 숨은 사악한 존재는 천년의 토벌 끝에 일찍이 사라졌지만, 빛이 닿지 않는 인간의 마음속 그림자는 여전히 남아있다.<br>오늘날에도 클로린드는 「황금 사냥꾼」이 남긴 가르침을 명심한다: 촛불을 붙인 야간 순찰자는 차가운 어둠에 잠식당하지 않도록 더욱 조심해야 한다</i>",
                        "Icon": "Skill_S_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "수렵 피해",
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
                                "Desc": "수렵으로 부여하는 생명의 계약",
                                "ParamLevelList": [
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%",
                                    "HP 최대치의 35.0%"
                                ]
                            },
                            {
                                "Desc": "밤 꿰뚫기 피해",
                                "ParamLevelList": [
                                    "32.9724%/43.9632%/25.112%x3",
                                    "35.6562%/47.5416%/27.156%x3",
                                    "38.34%/51.12%/29.2%x3",
                                    "42.174%/56.232%/32.12%x3",
                                    "44.8578%/59.8104%/34.164%x3",
                                    "47.925%/63.9%/36.5%x3",
                                    "52.1424%/69.5232%/39.712%x3",
                                    "56.3598%/75.1464%/42.924%x3",
                                    "60.5772%/80.7696%/46.136%x3",
                                    "65.178%/86.904%/49.64%x3",
                                    "69.7788%/93.0384%/53.144%x3",
                                    "74.3796%/99.1728%/56.648%x3",
                                    "78.9804%/105.3072%/60.152%x3",
                                    "83.5812%/111.4416%/63.656%x3",
                                    "88.182%/117.576%/67.16%x3"
                                ]
                            },
                            {
                                "Desc": "밤 꿰뚫기 치유량",
                                "ParamLevelList": [
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%",
                                    "0%/104.0%/생명의 계약의 110.0%"
                                ]
                            },
                            {
                                "Desc": "생명의 계약 전환",
                                "ParamLevelList": [
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%",
                                    "치유량의 80.0%"
                                ]
                            },
                            {
                                "Desc": "솟구치는 칼날 피해",
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
                                "Desc": "밤 순찰 상태 지속 시간",
                                "ParamLevelList": [
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초",
                                    "7.5초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초",
                                    "16초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "곧 꺼질 여광",
                        "Desc": "HP 최대치를 기반으로 자신에게 생명의 계약을 부여하고, 검과 총의 합주로 빠르게 공격해 <color style='color:#FFACFF;'>번개 원소 범위 피해</color>를 준다.<br><br><i>평범한 인간의 몸으로 인간이 아닌 존재에게 맞서는 오래된 기술이다. 그 전승의 역사는 레무리아 제국에 저항했던 물의 기사까지 거슬러 올라간다고 한다.<br>하지만 힘을 잘 제어할 수만 있다면 결투에서 평범한 적에게 사용하는 것이 금지된 기술은 아니다</i>",
                        "Icon": "Skill_E_Clorinde_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "126.88%x5",
                                    "136.396%x5",
                                    "145.912%x5",
                                    "158.6%x5",
                                    "168.116%x5",
                                    "177.632%x5",
                                    "190.32%x5",
                                    "203.008%x5",
                                    "215.696%x5",
                                    "228.384%x5",
                                    "241.072%x5",
                                    "253.76%x5",
                                    "269.62%x5",
                                    "285.48%x5",
                                    "301.34%x5"
                                ]
                            },
                            {
                                "Desc": "생명의 계약 부여",
                                "ParamLevelList": [
                                    "HP 최대치의 66.0%",
                                    "HP 최대치의 72.0%",
                                    "HP 최대치의 78.0%",
                                    "HP 최대치의 84.0%",
                                    "HP 최대치의 90.0%",
                                    "HP 최대치의 96.0%",
                                    "HP 최대치의 102.0%",
                                    "HP 최대치의 108.0%",
                                    "HP 최대치의 114.0%",
                                    "HP 최대치의 120.0%",
                                    "HP 최대치의 126.0%",
                                    "HP 최대치의 132.0%",
                                    "HP 최대치의 138.0%",
                                    "HP 최대치의 144.0%",
                                    "HP 최대치의 150.0%"
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
                        "Name": "밤을 가르는 불꽃",
                        "Desc": "주변에 있는 파티 내 캐릭터가 적에게 <color style='color:#FFACFF;'>번개 원소 관련 반응</color>을 발동한 후, 클로린드 공격력의 20%를 기반으로 클로린드의 일반 공격과 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 <color style='color:#FFACFF;'>번개 원소 피해</color>가 증가한다. 지속 시간: 15초, 최대 중첩수: 3스택. 스택마다 독립적으로 계산하며, 해당 방식으로 상술한 클로린드의 공격이 주는 피해가 최대 1800pt 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_05"
                    },
                    {
                        "Name": "계약의 보상",
                        "Desc": "만약 클로린드의 생명의 계약이 HP 최대치의 100% 이상이고, 생명의 계약의 수치가 증가 또는 감소 시, 클로린드의 치명타 확률이 10% 증가한다. 지속 시간: 15초, 최대 중첩수: 2스택. 지속 시간은 독립적으로 계산한다.<br>또한 <color style='color:#FFD780;'>밤 사냥</color>의 밤 순찰 상태를 강화한다: 지속 시간 동안 치유 회복량이 생명의 계약으로 전환되는 비율이 100%로 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_06"
                    },
                    {
                        "Name": "야간 순찰의 성과",
                        "Desc": "미니맵에 주위의 <color style='color:#FFD780;'>폰타인 지역 특산물</color> 위치가 나타난다",
                        "Icon": "UI_Talent_S_Liney_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「지금부터 촛불의 장막을 지나」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color>의 밤 순찰 상태 지속 시간 동안 클로린드의 일반 공격으로 주는 <color style='color:#FFACFF;'>번개 원소 피해</color>가 적에게 명중 시, 적 주변에 야경의 그림자를 소환해 협동 공격을 2회 진행하고 각기 클로린드 공격력의 30%에 해당하는 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. <br>해당 효과는 1.2초마다 최대 1회 발동되며 해당 방식으로 주는 피해는 일반 공격 피해로 간주한다",
                        "Icon": "UI_Talent_S_Clorinde_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「지금부터 긴 밤의 위험에 맞선다」",
                        "Desc": "돌파 특성 「밤을 가르는 불꽃」의 효과를 강화한다: 주변에 있는 파티 내 캐릭터가 적에게 <color style='color:#FFACFF;'>번개 원소 관련 반응</color>을 발동한 후, 클로린드 공격력의 30%를 기반으로 클로린드의 일반 공격과 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 <color style='color:#FFACFF;'>번개 원소 피해</color>가 증가한다. 지속 시간: 15초, 최대 중첩수: 3스택. 스택마다 독립적으로 계산하며 3스택 상태 시, 클로린드의 경직 저항력이 증가한다. 해당 방식으로 클로린드의 상술한 공격이 주는 피해가 최대 2700pt 증가한다.<br>돌파 특성 「밤을 가르는 불꽃」을 해금해야 한다",
                        "Icon": "UI_Talent_S_Clorinde_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「난 낮의 맹세를 명심하고」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Clorinde_02"
                    },
                    {
                        "Level": 4,
                        "Name": "「눈물, 생명, 사랑을 간직하며」",
                        "Desc": "<color style='color:#FFD780;'>곧 꺼질 여광</color>이 적에게 피해를 줄 시, 클로린드 현재 생명의 계약의 백분율을 기반으로 이번 피해가 증가한다. 생명의 계약 1%당 이번 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 피해가 2% 증가한다. 해당 방식으로 <color style='color:#FFD780;'>곧 꺼질 여광</color>이 주는 피해가 최대 200% 증가한다",
                        "Icon": "UI_Talent_S_Clorinde_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「언젠가 찾아올 여명을 믿겠다」",
                        "Desc": "<color style='color:#FFD780;'>곧 꺼질 여광</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Clorinde_01"
                    },
                    {
                        "Level": 6,
                        "Name": "「절대 희망을 버리지 않으리라」",
                        "Desc": "<color style='color:#FFD780;'>밤 사냥</color> 발동 후, 12초 동안 클로린드의 치명타 확률이 10%, 치명타 피해가 70% 증가한다.<br>또한 밤 순찰 상태 지속 시간 동안, 촛불의 그림자가 특정 조건에 따라 나타나 추격을 진행해 클로린드 공격력의 200%에 해당하는 <color style='color:#FFACFF;'>번개 원소 피해</color>를 준다. 해당 방식으로 주는 피해는 일반 공격 피해로 간주한다.<br>촛불의 그림자는 아래와 같은 상황에서 나타난다:<br> · 클로린드가 공격에 명중되기 직전.<br> · 클로린드가 밤 꿰뚫기 · 계약 진행 시.<br>상술한 방식으로 1초마다 촛불의 그림자를 최대 1회 소환한다. 한 번의 밤 순찰 상태 지속 시간 동안, 촛불의 그림자를 최대 6회 소환할 수 있다.<br>또한 밤 순찰 상태 지속 시간 동안, 클로린드가 받는 피해가 80% 감소하고 경직 저항력이 증가한다. 해당 효과는 밤 순찰 상태 종료 또는 촛불의 그림자를 6회 소환한 다음 1초 후에 사라진다",
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