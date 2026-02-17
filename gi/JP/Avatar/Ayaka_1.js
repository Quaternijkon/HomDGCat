// Auto Generated

var _AvatarDataConfig_ = {
    "Ayaka": {
        "BallList": [
            {
                "When": "Elem Skill hits monster",
                "DropArray": [
                    {
                        "Num": 4,
                        "Chance": 0.5
                    },
                    {
                        "Num": 5,
                        "Chance": 0.5
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
                "Skill": "During Alternate Sprint",
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
    "Ayaka": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104161": 1,
                "101202": 3,
                "112044": 3
            },
            {
                "202": 40000,
                "104162": 3,
                "113023": 2,
                "101202": 10,
                "112044": 15
            },
            {
                "202": 60000,
                "104162": 6,
                "113023": 4,
                "101202": 20,
                "112045": 12
            },
            {
                "202": 80000,
                "104163": 3,
                "113023": 8,
                "101202": 30,
                "112045": 18
            },
            {
                "202": 100000,
                "104163": 6,
                "113023": 12,
                "101202": 45,
                "112046": 12
            },
            {
                "202": 120000,
                "104164": 6,
                "113023": 20,
                "101202": 60,
                "112046": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104323": 3,
                "112044": 6
            },
            {
                "202": 17500,
                "104324": 2,
                "112045": 3
            },
            {
                "202": 25000,
                "104324": 4,
                "112045": 4
            },
            {
                "202": 30000,
                "104324": 6,
                "112045": 6
            },
            {
                "202": 37500,
                "104324": 9,
                "112045": 9
            },
            {
                "202": 120000,
                "104325": 4,
                "112046": 4,
                "113018": 1
            },
            {
                "202": 260000,
                "104325": 6,
                "112046": 6,
                "113018": 1
            },
            {
                "202": 450000,
                "104325": 12,
                "112046": 9,
                "113018": 2
            },
            {
                "202": 700000,
                "104325": 16,
                "112046": 12,
                "113018": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104323": 3,
                "112044": 6
            },
            {
                "202": 17500,
                "104324": 2,
                "112045": 3
            },
            {
                "202": 25000,
                "104324": 4,
                "112045": 4
            },
            {
                "202": 30000,
                "104324": 6,
                "112045": 6
            },
            {
                "202": 37500,
                "104324": 9,
                "112045": 9
            },
            {
                "202": 120000,
                "104325": 4,
                "112046": 4,
                "113018": 1
            },
            {
                "202": 260000,
                "104325": 6,
                "112046": 6,
                "113018": 1
            },
            {
                "202": 450000,
                "104325": 12,
                "112046": 9,
                "113018": 2
            },
            {
                "202": 700000,
                "104325": 16,
                "112046": 12,
                "113018": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104323": 3,
                "112044": 6
            },
            {
                "202": 17500,
                "104324": 2,
                "112045": 3
            },
            {
                "202": 25000,
                "104324": 4,
                "112045": 4
            },
            {
                "202": 30000,
                "104324": 6,
                "112045": 6
            },
            {
                "202": 37500,
                "104324": 9,
                "112045": 9
            },
            {
                "202": 120000,
                "104325": 4,
                "112046": 4,
                "113018": 1
            },
            {
                "202": 260000,
                "104325": 6,
                "112046": 6,
                "113018": 1
            },
            {
                "202": 450000,
                "104325": 12,
                "112046": 9,
                "113018": 2
            },
            {
                "202": 700000,
                "104325": 16,
                "112046": 12,
                "113018": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Ayaka": {
        "Ver": {
            "L": {
                "BattleSkills": [
                    {
                        "Name": "神里流・傾き",
                        "Desc": "<color style='color:#FFD780;'>通常攻撃</color><br>剣による最大5段の連続攻撃を行う。<br><br><color style='color:#FFD780;'>重撃</color><br>一定のスタミナを消費し、居合で連続した剣風を放つ。<br><br><color style='color:#FFD780;'>落下攻撃</color><br>空中から落下し地面に衝撃を与える。経路上の敵を攻撃し、落下時に広範囲ダメージを与える。",
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1段ダメージ",
                                "ParamLevelList": [
                                    "45.7253%",
                                    "49.4472%",
                                    "53.169%",
                                    "58.4859%",
                                    "62.2077%",
                                    "66.4613%",
                                    "72.3098%",
                                    "78.1584%",
                                    "84.007%",
                                    "90.3873%",
                                    "96.7676%",
                                    "103.1479%",
                                    "109.5281%",
                                    "115.9084%",
                                    "122.2887%"
                                ]
                            },
                            {
                                "Desc": "2段ダメージ",
                                "ParamLevelList": [
                                    "48.6846%",
                                    "52.6473%",
                                    "56.61%",
                                    "62.271%",
                                    "66.2337%",
                                    "70.7625%",
                                    "76.9896%",
                                    "83.2167%",
                                    "89.4438%",
                                    "96.237%",
                                    "103.0302%",
                                    "109.8234%",
                                    "116.6166%",
                                    "123.4098%",
                                    "130.203%"
                                ]
                            },
                            {
                                "Desc": "3段ダメージ",
                                "ParamLevelList": [
                                    "62.6218%",
                                    "67.7189%",
                                    "72.816%",
                                    "80.0976%",
                                    "85.1947%",
                                    "91.02%",
                                    "99.0298%",
                                    "107.0395%",
                                    "115.0493%",
                                    "123.7872%",
                                    "132.5251%",
                                    "141.263%",
                                    "150.001%",
                                    "158.7389%",
                                    "167.4768%"
                                ]
                            },
                            {
                                "Desc": "4段ダメージ",
                                "ParamLevelList": [
                                    "22.6464%×3",
                                    "24.4897%×3",
                                    "26.333%×3",
                                    "28.9663%×3",
                                    "30.8096%×3",
                                    "32.9163%×3",
                                    "35.8129%×3",
                                    "38.7095%×3",
                                    "41.6061%×3",
                                    "44.7661%×3",
                                    "47.9261%×3",
                                    "51.086%×3",
                                    "54.246%×3",
                                    "57.4059%×3",
                                    "60.5659%×3"
                                ]
                            },
                            {
                                "Desc": "5段ダメージ",
                                "ParamLevelList": [
                                    "78.1817%",
                                    "84.5454%",
                                    "90.909%",
                                    "100.0%",
                                    "106.3635%",
                                    "113.6363%",
                                    "123.6362%",
                                    "133.6362%",
                                    "143.6362%",
                                    "154.5453%",
                                    "165.4544%",
                                    "176.3635%",
                                    "187.2725%",
                                    "198.1816%",
                                    "209.0907%"
                                ]
                            },
                            {
                                "Desc": "重撃ダメージ",
                                "ParamLevelList": [
                                    "55.126%×3",
                                    "59.613%×3",
                                    "64.1%×3",
                                    "70.51%×3",
                                    "74.997%×3",
                                    "80.125%×3",
                                    "87.176%×3",
                                    "94.227%×3",
                                    "101.278%×3",
                                    "108.97%×3",
                                    "116.662%×3",
                                    "124.354%×3",
                                    "132.046%×3",
                                    "139.738%×3",
                                    "147.43%×3"
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
                        "Name": "神里流 · 氷華",
                        "Desc": "氷の華を咲かせ、周囲の敵をノックバックし<color style='color:#99FFFF;'>氷元素範囲ダメージ</color>を与える。<br><br><i>「晴雲と朧月の夜、霧のような執念を抱え、心は遠くへと旅立った。」</i>",
                        "Icon": "Skill_S_Ayaka_01",
                        "ParamDesc": [
                            {
                                "Desc": "スキルダメージ",
                                "ParamLevelList": [
                                    "239.2%",
                                    "257.14%",
                                    "275.08%",
                                    "299.0%",
                                    "316.94%",
                                    "334.88%",
                                    "358.8%",
                                    "382.72%",
                                    "406.64%",
                                    "430.56%",
                                    "454.48%",
                                    "478.4%",
                                    "508.3%",
                                    "538.2%",
                                    "568.1%"
                                ]
                            },
                            {
                                "Desc": "クールタイム",
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
                            }
                        ]
                    },
                    {
                        "Name": "神里流 · 霜滅",
                        "Desc": "艶やかな立ち姿で氷霜を集め、持続的に前進する霜見雪関扉を発動する。<br><br><color style='color:#FFD780;'>霜見雪関扉</color><br> · 鋭い刃のような霜風で敵に斬撃を与え続け、<color style='color:#99FFFF;'>氷元素ダメージ</color>を与える。<br> · 継続時間終了時に咲き、<color style='color:#99FFFF;'>氷元素範囲ダメージ</color>を与える。<br><br><i>「雪が吹き鷺を濡らすと、溜まり積もった思いが霜のようになり、重くなった胸の底が悼みに駆られます。」</i>",
                        "Icon": "Skill_E_Ayaka",
                        "ParamDesc": [
                            {
                                "Desc": "斬撃ダメージ",
                                "ParamLevelList": [
                                    "112.3%",
                                    "120.7225%",
                                    "129.145%",
                                    "140.375%",
                                    "148.7975%",
                                    "157.22%",
                                    "168.45%",
                                    "179.68%",
                                    "190.91%",
                                    "202.14%",
                                    "213.37%",
                                    "224.6%",
                                    "238.6375%",
                                    "252.675%",
                                    "266.7125%"
                                ]
                            },
                            {
                                "Desc": "咲きダメージ",
                                "ParamLevelList": [
                                    "168.45%",
                                    "181.0837%",
                                    "193.7175%",
                                    "210.5625%",
                                    "223.1962%",
                                    "235.83%",
                                    "252.675%",
                                    "269.52%",
                                    "286.365%",
                                    "303.21%",
                                    "320.055%",
                                    "336.9%",
                                    "357.9562%",
                                    "379.0125%",
                                    "400.0687%"
                                ]
                            },
                            {
                                "Desc": "継続時間",
                                "ParamLevelList": [
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒",
                                    "5秒"
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
                            },
                            {
                                "Desc": "元素エネルギー",
                                "ParamLevelList": [
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80",
                                    "80"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "神里流 · 霰歩",
                        "Desc": "<color style='color:#FFD780;'>ダッシュの代わりに発動する</color><br>氷流に隠れて激流となり、スタミナを消費して素早く移動する。<br><br>霰歩状態の神里綾華は水面上を高速移動できる。<br>霰歩が終了し、姿を現した時に、下記の効果が発動される。<br> · 氷霜の力を放ち、周囲の敵に<color style='color:#99FFFF;'>氷元素付着</color>を与える。<br> · 氷の力を剣に集中させ、一定時間<color style='color:#99FFFF;'>氷元素付与</color>を獲得する。<br><br><i>「雫が羽を湿らせて一瞬で消えてしまうのに、白鷺は水に踏み入れただけでなぜ怨言を吐くのでしょう？」</i>",
                        "Icon": "Skill_S_Ayaka_02",
                        "ParamDesc": [
                            {
                                "Desc": "発動スタミナ消費",
                                "ParamLevelList": [
                                    "10"
                                ]
                            },
                            {
                                "Desc": "継続スタミナ消費",
                                "ParamLevelList": [
                                    "毎秒15"
                                ]
                            },
                            {
                                "Desc": "元素付与継続時間",
                                "ParamLevelList": [
                                    "5秒"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "天つ罪 · 国つ罪の鎮詞",
                        "Desc": "<color style='color:#FFD780;'>神里流 · 氷華</color>を発動した後の6秒間、神里綾華の通常攻撃と重撃のダメージ+30%。",
                        "Icon": "UI_Talent_S_Ayaka_05"
                    },
                    {
                        "Name": "寒空の宣命祝詞",
                        "Desc": "<color style='color:#FFD780;'>神里流 · 霰歩</color>終了後に発生する氷が敵に命中すると、神里綾華は下記効果を獲得する。<br> · スタミナを10ポイント回復する。<br> · <color style='color:#99FFFF;'>氷元素ダメージ</color>+18%、継続時間10秒。",
                        "Icon": "UI_Talent_S_Ayaka_06"
                    },
                    {
                        "Name": "鑑査の心得",
                        "Desc": "武器突破素材を合成する時、10%の確率でアイテムを2倍獲得する。",
                        "Icon": "UI_Talent_Combine_Weapon_Double"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "霜枯れの墨染櫻",
                        "Desc": "神里綾華の通常攻撃または重撃が敵に<color style='color:#99FFFF;'>氷元素ダメージ</color>を与えた時、50%の確率で<color style='color:#FFD780;'>神里流 · 氷華</color>のクールタイム-0.3秒。この効果は0.1秒毎に1回のみ発動可能。",
                        "Icon": "UI_Talent_S_Ayaka_01"
                    },
                    {
                        "Level": 2,
                        "Name": "三重雪関扉",
                        "Desc": "<color style='color:#FFD780;'>神里流 · 霜滅</color>発動時、追加で2つの小さい霜見雪関扉を放ち、それぞれ本来の20%分のダメージを与える。",
                        "Icon": "UI_Talent_S_Ayaka_02"
                    },
                    {
                        "Level": 3,
                        "Name": "花白錦画紙吹雪",
                        "Desc": "<color style='color:#FFD780;'>神里流 · 霜滅</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Ayaka_02"
                    },
                    {
                        "Level": 4,
                        "Name": "栄枯盛衰",
                        "Desc": "<color style='color:#FFD780;'>神里流 · 霜滅</color>の霜見雪関扉のダメージを受けた敵の防御力-30%、継続時間6秒。",
                        "Icon": "UI_Talent_S_Ayaka_03"
                    },
                    {
                        "Level": 5,
                        "Name": "花雲鐘入月",
                        "Desc": "<color style='color:#FFD780;'>神里流 · 氷華</color>のスキルLv.+3。<br>最大Lv.15まで。",
                        "Icon": "UI_Talent_U_Ayaka_01"
                    },
                    {
                        "Level": 6,
                        "Name": "間水月",
                        "Desc": "10秒毎に、神里綾華は「薄氷の舞」状態を獲得し、重撃ダメージが298%アップする。重撃が敵に命中してから0.5秒後、「薄氷の舞」の効果はクリアされ、クールタイムのカウントが開始される。",
                        "Icon": "UI_Talent_S_Ayaka_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Ayaka": {
        "AttackList": [
            {
                "Skill": "Elem Skill",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.5,
                        2.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Ice",
                "GU": 2.0,
                "Poise": 110.0,
                "ForceType": 3,
                "Force": [
                    0.0,
                    800.0
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
                "Skill": "Elem Burst - Cutting",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 30.0,
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
                "StrikeType": "Slash",
                "AttackType": "Default"
            },
            {
                "Skill": "Elem Burst - Bloom",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        5.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 30.0,
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
                "Skill": "Elem Burst - C2 Cutting",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.5
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
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
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Default"
            },
            {
                "Skill": "Elem Burst - C2 Bloom",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 30.0,
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
                "Skill": "Alternate Sprint End",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Ice",
                "GU": 1.0,
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
            },
            {
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 42.5,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.2,
                        2.5
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 44.1,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.8,
                        1.5,
                        60.0
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 55.2,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.06,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 4-1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 19.68,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 4-2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 19.68,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 4-3",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 19.68,
                "ForceType": 1,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        5.0,
                        2.3,
                        1.0
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "NA Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 74.1,
                "ForceType": 3,
                "Force": [
                    655.0,
                    800.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "CA Group",
                "AttGrp": "Avatar_Pole_ExtraAttack",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 74.1,
                "ForceType": 3,
                "Force": [
                    0.0,
                    800.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        0.8
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "NA Group",
                "AttGrp": "Avatar_Pole_ExtraAttack",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 74.1,
                "ForceType": 3,
                "Force": [
                    0.0,
                    800.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Charged ATK x3",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "CA Group",
                "AttGrp": "0.5s / ∞ hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 40.0,
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
                "AttackType": "Melee"
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
                "AttackType": "Melee"
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
                "AttackType": "Melee"
            }
        ]
    }
}