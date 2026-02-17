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
                        "Name": "清きこと水の如し",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>杖を軽く振り、波を駆使して最大3段の攻撃を行い、<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。<br><br><color style='color:#FFD780;'>集力 · 心証開示</color><br>重撃では集力を行い、その間ヌヴィレットは水の力を集め、徐々に審理のエンブレムを構成する。この状態の時、ヌヴィレットは移動と向きの調整ができ、一定範囲内の源水の雫を吸収する。<br>源水の雫を1個吸収するたびに、エンブレム構成の速度を早め、ヌヴィレットのHPを回復させる。<br>集力を中断した時、エンブレムが未完成の場合、重撃を行う。エンブレムが完成している場合、代わりに重撃 · 衡平な裁量を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>一定のスタミナを消費し、迸る水環で敵に猛烈な攻撃を仕掛け、<color style='color:#80C0FF;'>水元素範囲ダメージ</color>を与える。<br><br><color style='color:#FFD780;'>重撃 · 衡平な裁量</color><br>荒れ狂う洪水を放ち、前方直線範囲内にいる敵に継続的な<color style='color:#80C0FF;'>水元素範囲ダメージ</color>を与える。<br>重撃 · 衡平な裁量はスタミナを消費しない。継続時間3秒。<br>HPが50%を超えている場合、衡平な裁量を発動中、ヌヴィレットは持続的にHPを消費する。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から水元素の力を凝集しながら落下し、地面に衝撃を与える。経路上の敵を攻撃し、落下時に<color style='color:#80C0FF;'>水元素範囲ダメージ</color>を与える。",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
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
                                "Desc": "2段ダメージ",
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
                                "Desc": "3段ダメージ",
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
                                "Desc": "重撃ダメージ",
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
                                "Desc": "重撃 · 衡平な裁量の継続ダメージ",
                                "ParamLevelList": [
                                    "HP上限7.3186%",
                                    "HP上限7.9143%",
                                    "HP上限8.51%",
                                    "HP上限9.361%",
                                    "HP上限9.9567%",
                                    "HP上限10.6375%",
                                    "HP上限11.5736%",
                                    "HP上限12.5097%",
                                    "HP上限13.4458%",
                                    "HP上限14.467%",
                                    "HP上限15.4882%",
                                    "HP上限16.5094%",
                                    "HP上限17.5306%",
                                    "HP上限18.5518%",
                                    "HP上限19.573%"
                                ]
                            },
                            {
                                "Desc": "HP回復",
                                "ParamLevelList": [
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個",
                                    "HP上限16.0%/1個"
                                ]
                            },
                            {
                                "Desc": "HP消費",
                                "ParamLevelList": [
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒",
                                    "HP上限8.0%/0.5秒"
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
                        "Name": "涙よ、私は必ずや償おう",
                        "Desc": "立ち騒ぐ瀑を降らせ、ヌヴィレットのHP上限を基に、前方の敵へ<color style='color:#80C0FF;'>水元素範囲ダメージ</color>を与える。敵に命中後、近くに源水の雫を3個生成する。<br><br><color style='color:#FFD780;'>アルケー：プネウマ</color><br>立ち騒ぐ瀑を降らせた後、敵を貫く霊息の棘が生成され、プネウマを帯びた<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。一定時間ごとに発動が可能。<br><br><i>「法律は諸々の悪行を抑えられるが、罪そのものを消すことはできない。」</i>",
                        "Icon": "Skill_S_Neuvillette_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "HP上限12.864%",
                                    "HP上限13.8288%",
                                    "HP上限14.7936%",
                                    "HP上限16.08%",
                                    "HP上限17.0448%",
                                    "HP上限18.0096%",
                                    "HP上限19.296%",
                                    "HP上限20.5824%",
                                    "HP上限21.8688%",
                                    "HP上限23.1552%",
                                    "HP上限24.4416%",
                                    "HP上限25.728%",
                                    "HP上限27.336%",
                                    "HP上限28.944%",
                                    "HP上限30.552%"
                                ]
                            },
                            {
                                "Desc": "霊息の棘のダメージ",
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
                                "Desc": "霊息の棘の間隔",
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
                                "Desc": "源水の雫の継続時間",
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
                        "Name": "海よ、私は帰ってきた",
                        "Desc": "迸る怒涛を放ち、ヌヴィレットのHP上限を基に、<color style='color:#80C0FF;'>水元素範囲ダメージ</color>を与える。その後、近くに瀑を2つ降らせ、小範囲に<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。前方の一定範囲内に源水の雫を6個生成する。<br><br><i>「法律は、公布されてようやく成り立つ。だがその上に、自然の法則は太古からあらゆる種族と世代を律してきたのだ。」</i>",
                        "Icon": "Skill_E_Neuvillette_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "HP上限22.2578%",
                                    "HP上限23.9272%",
                                    "HP上限25.5965%",
                                    "HP上限27.8223%",
                                    "HP上限29.4916%",
                                    "HP上限31.161%",
                                    "HP上限33.3868%",
                                    "HP上限35.6125%",
                                    "HP上限37.8383%",
                                    "HP上限40.0641%",
                                    "HP上限42.2899%",
                                    "HP上限44.5157%",
                                    "HP上限47.2979%",
                                    "HP上限50.0801%",
                                    "HP上限52.8624%"
                                ]
                            },
                            {
                                "Desc": "瀑のダメージ",
                                "ParamLevelList": [
                                    "HP上限9.1055%",
                                    "HP上限9.7884%",
                                    "HP上限10.4713%",
                                    "HP上限11.3818%",
                                    "HP上限12.0647%",
                                    "HP上限12.7477%",
                                    "HP上限13.6582%",
                                    "HP上限14.5688%",
                                    "HP上限15.4793%",
                                    "HP上限16.3898%",
                                    "HP上限17.3004%",
                                    "HP上限18.2109%",
                                    "HP上限19.3491%",
                                    "HP上限20.4873%",
                                    "HP上限21.6255%"
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
                        "Name": "古海継嗣の権威",
                        "Desc": "チームにいるキャラクターが敵に蒸発、凍結、感電、月感電、開花、月開花、水元素拡散、水元素結晶または月結晶反応を起こすと、ヌヴィレットに「遺龍の栄光」効果を付与する。継続時間30秒、最大3層まで重ね掛け可能。層数に応じて、重撃・衡平な裁量は通常の110%/125%/160%分のダメージを与えられるようになる。<br>生成された「遺龍の栄光」効果は元素反応ごとにカウントされる。",
                        "Icon": "UI_Talent_S_Neuvillette_05"
                    },
                    {
                        "Name": "至高なる審理の紀律",
                        "Desc": "現在HPが上限の30%を超えている場合、超えた分1%につき、ヌヴィレットの<color style='color:#80C0FF;'>水元素ダメージ</color>+0.6%。この効果によってアップできる水元素ダメージは最大30%までとなる。",
                        "Icon": "UI_Talent_S_Neuvillette_06"
                    },
                    {
                        "Name": "潮波のように集いて",
                        "Desc": "チーム内の自身のキャラクター全員が水中を素早く泳ぐ時、移動速度+15%。<br>同じ効果を持つ固有天賦との重ね掛け不可。",
                        "Icon": "UI_Talent_S_Neuvillette_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "尊栄の創定",
                        "Desc": "ヌヴィレット登場時、固有天賦「古海継嗣の権威」による「遺龍の栄光」を1層獲得する。固有天賦「古海継嗣の権威」を解放する必要がある。<br>さらに、集力・心証開示と重撃・衡平な裁量を発動時、ヌヴィレットの中断耐性がアップする。",
                        "Icon": "UI_Talent_S_Neuvillette_01"
                    },
                    {
                        "Level": 2,
                        "Name": "律法の懲罰",
                        "Desc": "固有天賦「古海継嗣の権威」は以下のように強化される。「遺龍の栄光」1層につき、重撃・衡平な裁量の会心ダメージ+14%。この方法でアップできる会心ダメージは最大42%まで。<br>固有天賦「古海継嗣の権威」を解放する必要がある。",
                        "Icon": "UI_Talent_S_Neuvillette_02"
                    },
                    {
                        "Level": 3,
                        "Name": "旧時の擬制",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃 · 清きこと水の如し</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Neuvillette_01"
                    },
                    {
                        "Level": 4,
                        "Name": "憐憫の玉冠",
                        "Desc": "ヌヴィレットがフィールド上にいる、かつ治療効果を受けた時、源水の雫を1個生成する。この効果は4秒毎に最大1回のみ発動可能。",
                        "Icon": "UI_Talent_S_Neuvillette_03"
                    },
                    {
                        "Level": 5,
                        "Name": "公義の裁定",
                        "Desc": "<color style='color:#FFD780;'>海よ、私は帰ってきた</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Neuvillette_02"
                    },
                    {
                        "Level": 6,
                        "Name": "憤怒の報償",
                        "Desc": "重撃 · 衡平な裁量を発動時、ヌヴィレットは一定範囲内の源水の雫を吸収できる。源水の雫を1個吸収するごとに、重撃 · 衡平な裁量の継続時間+1秒。<br>さらに、重撃 · 衡平な裁量が敵に命中すると、2秒毎に追加で洪水を2つ放つ。洪水は1つにつき、ヌヴィレットのHP上限10%分の<color style='color:#80C0FF;'>水元素ダメージ</color>を与える。この方法によるダメージは、重撃 · 衡平な裁量のダメージと見なされる。",
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