// Auto Generated

var _AvatarDataConfig_ = {
    "Arlecchino": {
        "BallList": [
            {
                "When": "Elemental Skill Casting DMG",
                "DropArray": [
                    {
                        "Num": 5,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD",
                "CD": 1.5
            }
        ],
        "EndureList": [
            {
                "Skill": "C1 Red Death NA/CA",
                "Endure": 0
            },
            {
                "Skill": "Elemental Skill Motion",
                "Endure": 0
            },
            {
                "Skill": "Special Charged ATK Motion",
                "Endure": 0.2
            }
        ],
        "WindZoneList": [
            {
                "Skill": "Burst Casting Push",
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
            "Elemental Skill's DoT (Blood-Debt Directive) does not generate particles.",
            "Constellation 2's Balemoon Bloodfire applies 1GU Pyro <b>independently</b>, but <b>does not count as Normal ATK, Charged ATK, Plunge ATK, Elemental Skill or Elemental Burst DMG</b>, and thus cannot generate particles and does not take boosts given to a certain skill type (e.g. Elemental Skill DMG Bonus).",
            "C6 Crit boost does not stack. If triggered again when still active, it will only refresh its remaining duration."
        ]
    }
}

var _AvatarMats_ = {
    "Arlecchino": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104111": 1,
                "101236": 3,
                "112032": 3
            },
            {
                "202": 40000,
                "104112": 3,
                "113059": 2,
                "101236": 10,
                "112032": 15
            },
            {
                "202": 60000,
                "104112": 6,
                "113059": 4,
                "101236": 20,
                "112033": 12
            },
            {
                "202": 80000,
                "104113": 3,
                "113059": 8,
                "101236": 30,
                "112033": 18
            },
            {
                "202": 100000,
                "104113": 6,
                "113059": 12,
                "101236": 45,
                "112034": 12
            },
            {
                "202": 120000,
                "104114": 6,
                "113059": 20,
                "101236": 60,
                "112034": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104344": 3,
                "112032": 6
            },
            {
                "202": 17500,
                "104345": 2,
                "112033": 3
            },
            {
                "202": 25000,
                "104345": 4,
                "112033": 4
            },
            {
                "202": 30000,
                "104345": 6,
                "112033": 6
            },
            {
                "202": 37500,
                "104345": 9,
                "112033": 9
            },
            {
                "202": 120000,
                "104346": 4,
                "112034": 4,
                "113060": 1
            },
            {
                "202": 260000,
                "104346": 6,
                "112034": 6,
                "113060": 1
            },
            {
                "202": 450000,
                "104346": 12,
                "112034": 9,
                "113060": 2
            },
            {
                "202": 700000,
                "104346": 16,
                "112034": 12,
                "113060": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104344": 3,
                "112032": 6
            },
            {
                "202": 17500,
                "104345": 2,
                "112033": 3
            },
            {
                "202": 25000,
                "104345": 4,
                "112033": 4
            },
            {
                "202": 30000,
                "104345": 6,
                "112033": 6
            },
            {
                "202": 37500,
                "104345": 9,
                "112033": 9
            },
            {
                "202": 120000,
                "104346": 4,
                "112034": 4,
                "113060": 1
            },
            {
                "202": 260000,
                "104346": 6,
                "112034": 6,
                "113060": 1
            },
            {
                "202": 450000,
                "104346": 12,
                "112034": 9,
                "113060": 2
            },
            {
                "202": 700000,
                "104346": 16,
                "112034": 12,
                "113060": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104344": 3,
                "112032": 6
            },
            {
                "202": 17500,
                "104345": 2,
                "112033": 3
            },
            {
                "202": 25000,
                "104345": 4,
                "112033": 4
            },
            {
                "202": 30000,
                "104345": 6,
                "112033": 6
            },
            {
                "202": 37500,
                "104345": 9,
                "112033": 9
            },
            {
                "202": 120000,
                "104346": 4,
                "112034": 4,
                "113060": 1
            },
            {
                "202": 260000,
                "104346": 6,
                "112034": 6,
                "113060": 1
            },
            {
                "202": 450000,
                "104346": 12,
                "112034": 9,
                "113060": 2
            },
            {
                "202": 700000,
                "104346": 16,
                "112034": 12,
                "113060": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Arlecchino": {
        "Ver": {
            "L": {
                "BattleSkills": [
                    {
                        "Name": "斬首への招待状",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>槍による最大6段の連続攻撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>一定のスタミナを消費して近くの敵に突進し、斬撃を1回仕掛ける。<br>長押しを続けると、アルレッキーノはスタミナを消費する代わりに、最大5秒間続く高速移動を行う。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から落下し地面に衝撃を与える。経路上の敵を攻撃し、落下時に範囲ダメージを与える。<br><br><color style='color:#FFD780;'>赤死の宴</color><br>アルレッキーノの「命の契約」がHP上限の30%以上の時、アルレッキーノは赤死の宴状態に入る。通常攻撃、重撃、落下攻撃ダメージは、元素付与によって他の元素に変化しない<color style='color:#FF9999;'>炎元素ダメージ</color>へと変わる。<br>赤死の宴状態時、アルレッキーノの通常攻撃が敵に命中すると、その攻撃によるダメージはアルレッキーノの攻撃力×その時の「命の契約」パーセンテージ×一定の割合をもとにアップする。同時に、その時点における「命の契約」を7.5%消費する。これによって「命の契約」を消費するのは0.03秒毎に1回のみ。この方法で「命の契約」を消費するとき、元素スキル「万象、灰に帰す」のクールタイム-0.8秒。",
                        "Icon": "Skill_A_03",
                        "ParamDesc": [
                            {
                                "Desc": "赤死の宴ダメージアップ率",
                                "ParamLevelList": [
                                    "120.4%",
                                    "130.2%",
                                    "140.0%",
                                    "154.0%",
                                    "163.8%",
                                    "175.0%",
                                    "190.4%",
                                    "205.8%",
                                    "221.2%",
                                    "238.0%",
                                    "254.8%",
                                    "271.6%",
                                    "288.4%",
                                    "305.2%",
                                    "322.0%"
                                ]
                            },
                            {
                                "Desc": "1段ダメージ",
                                "ParamLevelList": [
                                    "47.5004%",
                                    "51.3667%",
                                    "55.233%",
                                    "60.7563%",
                                    "64.6226%",
                                    "69.0412%",
                                    "75.1169%",
                                    "81.1925%",
                                    "87.2681%",
                                    "93.8961%",
                                    "100.5241%",
                                    "107.152%",
                                    "113.78%",
                                    "120.4079%",
                                    "127.0359%"
                                ]
                            },
                            {
                                "Desc": "2段ダメージ",
                                "ParamLevelList": [
                                    "52.1057%",
                                    "56.3468%",
                                    "60.588%",
                                    "66.6468%",
                                    "70.888%",
                                    "75.735%",
                                    "82.3997%",
                                    "89.0644%",
                                    "95.729%",
                                    "103.0%",
                                    "110.2702%",
                                    "117.5407%",
                                    "124.8113%",
                                    "132.0818%",
                                    "139.3524%"
                                ]
                            },
                            {
                                "Desc": "3段ダメージ",
                                "ParamLevelList": [
                                    "65.3858%",
                                    "70.7079%",
                                    "76.03%",
                                    "83.633%",
                                    "88.9551%",
                                    "95.0375%",
                                    "103.4008%",
                                    "111.7641%",
                                    "120.1274%",
                                    "129.251%",
                                    "138.3746%",
                                    "147.4982%",
                                    "156.6218%",
                                    "165.7454%",
                                    "174.869%"
                                ]
                            },
                            {
                                "Desc": "4段ダメージ",
                                "ParamLevelList": [
                                    "37.1451%+37.1451%",
                                    "40.1686%+40.1686%",
                                    "43.192%+43.192%",
                                    "47.5112%+47.5112%",
                                    "50.5346%+50.5346%",
                                    "53.99%+53.99%",
                                    "58.7411%+58.7411%",
                                    "63.4922%+63.4922%",
                                    "68.2434%+68.2434%",
                                    "73.4264%+73.4264%",
                                    "78.6094%+78.6094%",
                                    "83.7925%+83.7925%",
                                    "88.9755%+88.9755%",
                                    "94.1586%+94.1586%",
                                    "99.3416%+99.3416%"
                                ]
                            },
                            {
                                "Desc": "5段ダメージ",
                                "ParamLevelList": [
                                    "69.9816%",
                                    "75.6778%",
                                    "81.374%",
                                    "89.5114%",
                                    "95.2076%",
                                    "101.7175%",
                                    "110.6686%",
                                    "119.6198%",
                                    "128.5709%",
                                    "138.3358%",
                                    "148.1007%",
                                    "157.8656%",
                                    "167.6304%",
                                    "177.3953%",
                                    "187.1602%"
                                ]
                            },
                            {
                                "Desc": "6段ダメージ",
                                "ParamLevelList": [
                                    "85.3782%",
                                    "92.3276%",
                                    "99.277%",
                                    "109.2047%",
                                    "116.1541%",
                                    "124.0962%",
                                    "135.0167%",
                                    "145.9372%",
                                    "156.8577%",
                                    "168.7709%",
                                    "180.6841%",
                                    "192.5974%",
                                    "204.5106%",
                                    "216.4239%",
                                    "228.3371%"
                                ]
                            },
                            {
                                "Desc": "重撃ダメージ",
                                "ParamLevelList": [
                                    "90.816%",
                                    "98.208%",
                                    "105.6%",
                                    "116.16%",
                                    "123.552%",
                                    "132.0%",
                                    "143.616%",
                                    "155.232%",
                                    "166.848%",
                                    "179.52%",
                                    "192.192%",
                                    "204.864%",
                                    "217.536%",
                                    "230.208%",
                                    "242.88%"
                                ]
                            },
                            {
                                "Desc": "重撃スタミナ消費",
                                "ParamLevelList": [
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25"
                                ]
                            },
                            {
                                "Desc": "高速移動のスタミナ消費",
                                "ParamLevelList": [
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40",
                                    "毎秒40"
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
                        "Name": "万象、灰に帰す",
                        "Desc": "凶月血炎を遣わして近くの複数の敵に<color style='color:#FF9999;'>炎元素ダメージ</color>を与え、そのうち1名の敵には猛進の斬撃を繰り出し、<color style='color:#FF9999;'>炎元素範囲ダメージ</color>を与える。<br>この攻撃が命中した敵には血償の勅令が付与される。<br><br><color style='color:#FFD780;'>血償の勅令</color><br> · 血償の勅令は30秒間継続し、5秒毎に敵に<color style='color:#FF9999;'>炎元素ダメージ</color>を1回与える（最大2回まで）。これによるダメージは元素スキルダメージと見なされる。<br> · アルレッキーノが重撃、または元素爆発「昇りゆく凶月」を行う時、周囲の血償の勅令は回収され、1つ回収するたびにアルレッキーノにHP上限65%の「命の契約」を付与する。<br> · 元素スキルを発動した後の35秒間、血償の勅令でアルレッキーノに付与できる「命の契約」はHP上限の145%まで。継続期間中に再び元素スキルを発動すると、継続時間と、血償の勅令で付与可能な「命の契約」の上限が再計算される。<br><br><i>彼女に言わせれば、孤独な小麦の粒が大地に落ちたとしても、必ず麦の穂が実るとは限らない。音もなく腐っていくだけということもあるからだ。しかし、彼女の邪魔をしてくるものが燃え滓となれば——きっとその灰で花を育てることができるだろう。</i>",
                        "Icon": "Skill_S_Arlecchino_01",
                        "ParamDesc": [
                            {
                                "Desc": "棘のダメージ",
                                "ParamLevelList": [
                                    "14.84%",
                                    "15.953%",
                                    "17.066%",
                                    "18.55%",
                                    "19.663%",
                                    "20.776%",
                                    "22.26%",
                                    "23.744%",
                                    "25.228%",
                                    "26.712%",
                                    "28.196%",
                                    "29.68%",
                                    "31.535%",
                                    "33.39%",
                                    "35.245%"
                                ]
                            },
                            {
                                "Desc": "突進斬撃のダメージ",
                                "ParamLevelList": [
                                    "133.56%",
                                    "143.577%",
                                    "153.594%",
                                    "166.95%",
                                    "176.967%",
                                    "186.984%",
                                    "200.34%",
                                    "213.696%",
                                    "227.052%",
                                    "240.408%",
                                    "253.764%",
                                    "267.12%",
                                    "283.815%",
                                    "300.51%",
                                    "317.205%"
                                ]
                            },
                            {
                                "Desc": "血償の勅令のダメージ",
                                "ParamLevelList": [
                                    "31.8%",
                                    "34.185%",
                                    "36.57%",
                                    "39.75%",
                                    "42.135%",
                                    "44.52%",
                                    "47.7%",
                                    "50.88%",
                                    "54.06%",
                                    "57.24%",
                                    "60.42%",
                                    "63.6%",
                                    "67.575%",
                                    "71.55%",
                                    "75.525%"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
                                "ParamLevelList": [
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒",
                                    "30秒"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "昇りゆく凶月",
                        "Desc": "凶月血炎の翼を振り回し、周囲の血償の勅令を回収して<color style='color:#FF9999;'>炎元素範囲ダメージ</color>を与える。その後、元素スキル「万象、灰に帰す」のクールタイムをリセットし、アルレッキーノ自身の「命の契約」の数値と攻撃力を基に、自身のHPを回復する。<br><br><i>テイワットの常識では、満月以外の月相はすべて、錬金術や占星術でしか使われない、災いの隠喩である。<br>彼女は夢の中でこの赤い月を何度も見た。これは凶事の前触れなのだろうか？——その通り。しかし、哀れな運命に苦しめられるのは、彼女を怒らせた者だけだ。</i>",
                        "Icon": "Skill_E_Arlecchino_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "370.4%",
                                    "398.18%",
                                    "425.96%",
                                    "463.0%",
                                    "490.78%",
                                    "518.56%",
                                    "555.6%",
                                    "592.64%",
                                    "629.68%",
                                    "666.72%",
                                    "703.76%",
                                    "740.8%",
                                    "787.1%",
                                    "833.4%",
                                    "879.7%"
                                ]
                            },
                            {
                                "Desc": "回復量",
                                "ParamLevelList": [
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%",
                                    "命の契約150.0%+攻撃力150.0%"
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
                        "Name": "償えるものは苦痛のみ",
                        "Desc": "<color style='color:#FFD780;'>血償の勅令</color>は以下の特性を持つ。<br> · アルレッキーノ自身が付与した血償の勅令を持つ敵が倒された時、アルレッキーノにHP上限の130%の「命の契約」を付与する。<br> · 付与から5秒後、血償の勅令 · 結に強化され、回収時、アルレッキーノに130%の「命の契約」を付与する。<br>この方法で「命の契約」を付与する時も、付与された「命の契約」の数値の上限が<color style='color:#FFD780;'>万象、灰に帰す</color>の本来の制限を超えることはない。",
                        "Icon": "UI_Talent_S_Arlecchino_05"
                    },
                    {
                        "Name": "護れるものは力のみ",
                        "Desc": "アルレッキーノの攻撃力が1000を超えている時、1000を超えた分の数値100につき、アルレッキーノの全元素耐性と物理耐性が+1%。この方法でアップできるアルレッキーノの全元素耐性と物理耐性は最大20%まで。",
                        "Icon": "UI_Talent_S_Arlecchino_06"
                    },
                    {
                        "Name": "悟れるものは凶月のみ",
                        "Desc": "戦闘状態にある時、アルレッキーノの<color style='color:#FF9999;'>炎元素ダメージ</color>+40%。また、<color style='color:#FFD780;'>昇りゆく凶月</color>による治療しか受けられない。",
                        "Icon": "UI_Talent_S_Arlecchino_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「あらゆる怨みと借りは 私が清算しよう…」",
                        "Desc": "赤死の宴ダメージアップ率の効果量が100%アップする。また、赤死の宴状態で通常攻撃または重撃を行う時、アルレッキーノの中断耐性がアップする。",
                        "Icon": "UI_Talent_S_Arlecchino_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「あらゆる褒賞と罰は この手によるもの…」",
                        "Desc": "<color style='color:#FFD780;'>血償の勅令</color>を付与する時、代わりに血償の勅令・結を付与するようになる。<br>アルレッキーノが血償の勅令・結を回収する時、前方に凶月血炎を召喚し、アルレッキーノの攻撃力900%分の<color style='color:#FF9999;'>炎元素範囲ダメージ</color>を与える。また、アルレッキーノの全元素耐性および物理耐性+20%、継続時間15秒。この効果は10秒毎に1回のみ発動可能。<br>固有天賦「償えるものは苦痛のみ」を解放する必要がある。",
                        "Icon": "UI_Talent_S_Arlecchino_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「君は私たちの 新しい家族になるんだ…」",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃 · 斬首への招待状</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Arlecchino_01"
                    },
                    {
                        "Level": 4,
                        "Name": "「これからは互いを慈しみ 手を取り合うとしよう…」",
                        "Desc": "アルレッキーノが血償の勅令の回収に成功した時、<color style='color:#FFD780;'>昇りゆく凶月</color>のクールタイムが2秒減少し、自身の元素エネルギーを15ポイント回復する。この効果は10秒毎に1回のみ発動可能。",
                        "Icon": "UI_Talent_S_Arlecchino_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「私たちはみな独法師だ 我らが身は屍も同然…」",
                        "Desc": "<color style='color:#FFD780;'>昇りゆく凶月</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Arlecchino_02"
                    },
                    {
                        "Level": 6,
                        "Name": "「この先、我々は ——新しき生に興じる」",
                        "Desc": "<color style='color:#FFD780;'>昇りゆく凶月</color>のダメージがアップする。アップ量は、アルレッキーノの攻撃力×その時点における「命の契約」パーセンテージ×700%。<br><color style='color:#FFD780;'>万象、灰に帰す</color>を発動した後の20秒間、アルレッキーノの通常攻撃と元素爆発の会心率+10%、会心ダメージ+70%。この効果は15秒毎に1回のみ発動可能。",
                        "Icon": "UI_Talent_S_Arlecchino_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Arlecchino": {
        "AttackList": [
            {
                "Skill": "Elem Burst",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        6.5,
                        5.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 250.0,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "C2 Damage",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        6.5,
                        5.0
                    ]
                },
                "AtkTag": "C2 Damage",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 150.0,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "E Blood-Debt",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Elem Skill Extra",
                "AttTag": "E Group",
                "AttGrp": "Once every 3 hits",
                "Element": "Fire",
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
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "E Spike",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        0.5,
                        2.2
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "E Group",
                "AttGrp": "Once every 3 hits",
                "Element": "Fire",
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
                "StrikeType": "Default",
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "E Cleave",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        6.0,
                        3.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 120.0,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
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
                    "Type": "Cuboid",
                    "Size": [
                        4.2,
                        1.9,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 43.8,
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
                "CanInfuse": false,
                "StrikeType": "Spear",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.1,
                        3.1,
                        300.0
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 48.1,
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
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        5.6,
                        3.4,
                        3.0
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 60.3,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttackerInverse"
            },
            {
                "Skill": "Normal ATK 4-1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.3,
                        1.7
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 33.2,
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
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 4-2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.3,
                        1.7
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 33.2,
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
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.8,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 65.9,
                "ForceType": 3,
                "Force": [
                    200.0,
                    600.0
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
                "Skill": "Normal ATK 6",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.7,
                        1.8
                    ]
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 78.9,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Charged ATK",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.0,
                        3.2
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 100.0,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        3.0,
                        1.9,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 43.8,
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
                "StrikeType": "Spear",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.6,
                        2.9,
                        300.0
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 48.1,
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
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.0,
                        1.9,
                        3.0
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 60.3,
                "ForceType": 2,
                "Force": [
                    800.0,
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
                "RetreatType": "ByAttackerInverse"
            },
            {
                "Skill": "Normal ATK 4-1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.8,
                        1.7
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 33.2,
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
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 4-2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.8,
                        1.7
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 33.2,
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
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 65.9,
                "ForceType": 3,
                "Force": [
                    200.0,
                    600.0
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
                "Skill": "Normal ATK 6",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.0,
                        1.8
                    ]
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 78.9,
                "ForceType": 2,
                "Force": [
                    800.0,
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
                "Skill": "Charged ATK",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.0,
                        3.2
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Charged ATK",
                "AttGrp": "Avatar_Pole_ExtraAttack",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 100.0,
                "ForceType": 2,
                "Force": [
                    800.0,
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
                "Element": "Fire",
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
                "CanInfuse": false,
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
                "Skill": "Low Plunge",
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
            },
            {
                "Skill": "High Plunge",
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
                "Element": "Fire",
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
                "CanInfuse": false,
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
                "Element": "Fire",
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
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            }
        ]
    }
}