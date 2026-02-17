// Auto Generated

var _AvatarDataConfig_ = {
    "Aloy": {
        "BallList": [
            {
                "When": "Freeze Bomb hits monster",
                "DropArray": [
                    {
                        "Num": 5,
                        "Chance": 1
                    }
                ]
            }
        ],
        "EndureList": [
            {
                "Skill": "During Elemental Skill",
                "Endure": 0.6
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
        "OtherDataList": []
    }
}

var _AvatarMats_ = {
    "Aloy": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104161": 1,
                "101203": 3,
                "112053": 3
            },
            {
                "202": 40000,
                "104162": 3,
                "113020": 2,
                "101203": 10,
                "112053": 15
            },
            {
                "202": 60000,
                "104162": 6,
                "113020": 4,
                "101203": 20,
                "112054": 12
            },
            {
                "202": 80000,
                "104163": 3,
                "113020": 8,
                "101203": 30,
                "112054": 18
            },
            {
                "202": 100000,
                "104163": 6,
                "113020": 12,
                "101203": 45,
                "112055": 12
            },
            {
                "202": 120000,
                "104164": 6,
                "113020": 20,
                "101203": 60,
                "112055": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104301": 3,
                "112053": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112054": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112054": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112054": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112054": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112055": 4,
                "113025": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112055": 6,
                "113025": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112055": 9,
                "113025": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112055": 12,
                "113025": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104301": 3,
                "112053": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112054": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112054": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112054": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112054": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112055": 4,
                "113025": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112055": 6,
                "113025": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112055": 9,
                "113025": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112055": 12,
                "113025": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104301": 3,
                "112053": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112054": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112054": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112054": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112054": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112055": 4,
                "113025": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112055": 6,
                "113025": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112055": 9,
                "113025": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112055": 12,
                "113025": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Aloy": {
        "Ver": {
            "L": {
                "BattleSkills": [
                    {
                        "Name": "ラピッドファイア",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>最大4段の連続射撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>ダメージがより高く、より精確な<color style='color:#FFD780;'>狙い撃ち</color>を発動する。<br>照準時、氷霜の寒気が矢先に付着する。寒気に満ちた矢は敵に<color style='color:#99FFFF;'>氷元素ダメージ</color>を与える。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から矢の雨を放ち、凄まじいスピードで落下し地面に衝撃を与え、落下時に範囲ダメージを与える。",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
                                "ParamLevelList": [
                                    "21.12%+23.76%",
                                    "22.56%+25.38%",
                                    "24.0%+27.0%",
                                    "25.92%+29.16%",
                                    "27.36%+30.78%",
                                    "29.04%+32.67%",
                                    "31.2%+35.1%",
                                    "33.36%+37.53%",
                                    "35.52%+39.96%",
                                    "37.68%+42.39%",
                                    "39.84%+44.82%",
                                    "42.0%+47.25%",
                                    "44.16%+49.68%",
                                    "46.32%+52.11%",
                                    "48.48%+54.54%"
                                ]
                            },
                            {
                                "Desc": "2段ダメージ",
                                "ParamLevelList": [
                                    "43.12%",
                                    "46.06%",
                                    "49.0%",
                                    "52.92%",
                                    "55.86%",
                                    "59.29%",
                                    "63.7%",
                                    "68.11%",
                                    "72.52%",
                                    "76.93%",
                                    "81.34%",
                                    "85.75%",
                                    "90.16%",
                                    "94.57%",
                                    "98.98%"
                                ]
                            },
                            {
                                "Desc": "3段ダメージ",
                                "ParamLevelList": [
                                    "52.8%",
                                    "56.4%",
                                    "60.0%",
                                    "64.8%",
                                    "68.4%",
                                    "72.6%",
                                    "78.0%",
                                    "83.4%",
                                    "88.8%",
                                    "94.2%",
                                    "99.6%",
                                    "105.0%",
                                    "110.4%",
                                    "115.8%",
                                    "121.2%"
                                ]
                            },
                            {
                                "Desc": "4段ダメージ",
                                "ParamLevelList": [
                                    "65.648%",
                                    "70.124%",
                                    "74.6%",
                                    "80.568%",
                                    "85.044%",
                                    "90.266%",
                                    "96.98%",
                                    "103.694%",
                                    "110.408%",
                                    "117.122%",
                                    "123.836%",
                                    "130.55%",
                                    "137.264%",
                                    "143.978%",
                                    "150.692%"
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
                        "Name": "凍てついた大地",
                        "Desc": "目標方向へ氷の爆弾を投げる、命中後に爆発し<color style='color:#99FFFF;'>氷元素ダメージ</color>を与える。爆発後、氷の爆弾は複数の冷凍爆弾に分裂する。冷凍爆弾は敵に触れる、または一定時間後に爆発し、<color style='color:#99FFFF;'>氷元素ダメージ</color>を与える。<br>氷の爆弾または冷凍爆弾が敵に命中すると、敵の攻撃力がダウンし、アーロイに「コイル」効果を1層与える。<br>コイル効果は0.1秒毎に最大1層獲得可能。<br><br><color style='color:#FFD780;'>コイル</color><br> · 層数を基準に、アーロイの通常攻撃ダメージをアップさせる。<br> · コイルを4層所有する時、アーロイのコイル効果は全てクリアされ、「アイスラッシュ」を獲得する。通常攻撃ダメージをさらにアップさせ、通常攻撃が<color style='color:#99FFFF;'>氷元素ダメージ</color>に変化する。<br><br>アイスラッシュ状態継続時間中、アーロイはコイル効果を獲得できなくなる。<br>戦闘状態が解除されてから30秒後、コイル効果はクリアされる。<br><br><i>採石場の方がずっと寒いぞ。</i>",
                        "Icon": "Skill_S_Aloy_01",
                        "ParamDesc": [
                            {
                                "Desc": "氷の爆弾ダメージ",
                                "ParamLevelList": [
                                    "177.6%",
                                    "190.92%",
                                    "204.24%",
                                    "222.0%",
                                    "235.32%",
                                    "248.64%",
                                    "266.4%",
                                    "284.16%",
                                    "301.92%",
                                    "319.68%",
                                    "337.44%",
                                    "355.2%",
                                    "377.4%",
                                    "399.6%",
                                    "421.8%"
                                ]
                            },
                            {
                                "Desc": "冷凍爆弾ダメージ",
                                "ParamLevelList": [
                                    "40.0%",
                                    "43.0%",
                                    "46.0%",
                                    "50.0%",
                                    "53.0%",
                                    "56.0%",
                                    "60.0%",
                                    "64.0%",
                                    "68.0%",
                                    "72.0%",
                                    "76.0%",
                                    "80.0%",
                                    "85.0%",
                                    "90.0%",
                                    "95.0%"
                                ]
                            },
                            {
                                "Desc": "攻撃力ダウン",
                                "ParamLevelList": [
                                    "12.0%",
                                    "12.0%",
                                    "12.0%",
                                    "13.0%",
                                    "13.0%",
                                    "13.0%",
                                    "14.0%",
                                    "14.0%",
                                    "14.0%",
                                    "15.0%",
                                    "15.0%",
                                    "15.0%",
                                    "15.0%",
                                    "15.0%",
                                    "15.0%"
                                ]
                            },
                            {
                                "Desc": "攻撃力ダウン継続時間",
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
                            },
                            {
                                "Desc": "コイル通常攻撃ダメージアップ",
                                "ParamLevelList": [
                                    "5.845%/11.69%/17.535%",
                                    "6.195%/12.39%/18.585%",
                                    "6.545%/13.09%/19.635%",
                                    "7.0%/14.0%/21.0%",
                                    "7.35%/14.7%/22.05%",
                                    "7.7%/15.4%/23.1%",
                                    "8.155%/16.31%/24.465%",
                                    "8.61%/17.22%/25.83%",
                                    "9.065%/18.13%/27.195%",
                                    "9.52%/19.04%/28.56%",
                                    "9.975%/19.95%/29.925%",
                                    "10.43%/20.86%/31.29%",
                                    "10.885%/21.77%/32.655%",
                                    "11.34%/22.68%/34.02%",
                                    "11.795%/23.59%/35.385%"
                                ]
                            },
                            {
                                "Desc": "アイスラッシュ通常攻撃ダメージアップ",
                                "ParamLevelList": [
                                    "29.225%",
                                    "30.975%",
                                    "32.725%",
                                    "35.0%",
                                    "36.75%",
                                    "38.5%",
                                    "40.775%",
                                    "43.05%",
                                    "45.325%",
                                    "47.6%",
                                    "49.875%",
                                    "52.15%",
                                    "54.425%",
                                    "56.7%",
                                    "58.975%"
                                ]
                            },
                            {
                                "Desc": "アイスラッシュ継続時間",
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
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒",
                                    "20秒"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "ドーンプロフェシー",
                        "Desc": "目標方向へ氷元素に満ちた動力源を投げ、弓矢で爆発させることにより<color style='color:#99FFFF;'>氷元素範囲ダメージ</color>を与える。<br><br><i>ゼロドーンの本質は希望なのか、絶滅への道なのかはもはや重要ではなくなった。アーロイは既に自分の世界を救っている。この世界の運命は、他の強者に任せよう。</i>",
                        "Icon": "Skill_E_Aloy_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "359.2%",
                                    "386.14%",
                                    "413.08%",
                                    "449.0%",
                                    "475.94%",
                                    "502.88%",
                                    "538.8%",
                                    "574.72%",
                                    "610.64%",
                                    "646.56%",
                                    "682.48%",
                                    "718.4%",
                                    "763.3%",
                                    "808.2%",
                                    "853.1%"
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
                            },
                            {
                                "Desc": "元素エネルギー",
                                "ParamLevelList": [
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40",
                                    "40"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "戦闘オーバーライド",
                        "Desc": "アーロイが<color style='color:#FFD780;'>凍てついた大地</color>のコイル効果を獲得した時、アーロイの攻撃力+16%、周囲にいるチーム内他のキャラクターの攻撃力+8%、持続時間10秒。",
                        "Icon": "UI_Talent_S_Aloy_05"
                    },
                    {
                        "Name": "強打",
                        "Desc": "アーロイは<color style='color:#FFD780;'>凍てついた大地</color>のアイスラッシュ状態にある時、1秒毎に<color style='color:#99FFFF;'>氷元素ダメージ</color>+3.5%、この方法での<color style='color:#99FFFF;'>氷元素ダメージ</color>アップ効果は35%まで。",
                        "Icon": "UI_Talent_S_Aloy_06"
                    },
                    {
                        "Name": "まあまあ落ち着け",
                        "Desc": "アーロイがチーム内にいる時、チーム内の自身のキャラクターが鳥肉、獣肉、冷製鮮肉をドロップする動物に近づいても気付かれにくくなる。",
                        "Icon": "UI_Talent_S_Aloy_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "異界の星",
                        "Desc": "この者の星空を灯す時は、まだ訪れていない。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 2,
                        "Name": "異界の星",
                        "Desc": "この者の星空を灯す時は、まだ訪れていない。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 3,
                        "Name": "異界の星",
                        "Desc": "この者の星空を灯す時は、まだ訪れていない。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 4,
                        "Name": "異界の星",
                        "Desc": "この者の星空を灯す時は、まだ訪れていない。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 5,
                        "Name": "異界の星",
                        "Desc": "この者の星空を灯す時は、まだ訪れていない。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 6,
                        "Name": "異界の星",
                        "Desc": "この者の星空を灯す時は、まだ訪れていない。",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Aloy": {
        "AttackList": [
            {
                "Skill": "Elem Skill - Freeze Bomb",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        4.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 120.0,
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
                "Skill": "Elem Skill - Chillwater Bomblet",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "E Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Ice",
                "GU": 1.0,
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
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Default",
                "AttackType": "Default"
            },
            {
                "Skill": "Elem Burst",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        6.5
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Ice",
                "GU": 2.0,
                "Poise": 200.0,
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
                "Skill": "Normal ATK 1-1 - Cryo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 7.65,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Normal ATK 1-2 - Cryo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 7.65,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Normal ATK 2 - Cryo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 14.7,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Normal ATK 3 - Cryo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 18.0,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Normal ATK 4 - Cryo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 22.38,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Aim Shoot",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Phys",
                "GU": 1.0,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Charged Aim Shoot",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Ice",
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
                "AttackType": "Default"
            },
            {
                "Skill": "Normal ATK 1-1",
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
                "GU": 1.0,
                "Poise": 7.65,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Normal ATK 1-2",
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
                "GU": 1.0,
                "Poise": 7.65,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 14.7,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 18.0,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Normal ATK 4",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 22.38,
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
                "AttackType": "Default"
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
                "AttackType": "Melee"
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
                "AttackType": "Melee"
            }
        ]
    }
}