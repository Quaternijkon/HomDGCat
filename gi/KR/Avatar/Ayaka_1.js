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
                        "Name": "카미사토류 · 경(傾)",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>검으로 최대 5번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>일정 스태미나를 소모해 거합 중 연속으로 검풍을 방출한다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다",
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
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
                                "Desc": "2단 공격 피해",
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
                                "Desc": "3단 공격 피해",
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
                                "Desc": "4단 공격 피해",
                                "ParamLevelList": [
                                    "22.6464%*3",
                                    "24.4897%*3",
                                    "26.333%*3",
                                    "28.9663%*3",
                                    "30.8096%*3",
                                    "32.9163%*3",
                                    "35.8129%*3",
                                    "38.7095%*3",
                                    "41.6061%*3",
                                    "44.7661%*3",
                                    "47.9261%*3",
                                    "51.086%*3",
                                    "54.246%*3",
                                    "57.4059%*3",
                                    "60.5659%*3"
                                ]
                            },
                            {
                                "Desc": "5단 공격 피해",
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
                                "Desc": "강공격 피해",
                                "ParamLevelList": [
                                    "55.126%*3",
                                    "59.613%*3",
                                    "64.1%*3",
                                    "70.51%*3",
                                    "74.997%*3",
                                    "80.125%*3",
                                    "87.176%*3",
                                    "94.227%*3",
                                    "101.278%*3",
                                    "108.97%*3",
                                    "116.662%*3",
                                    "124.354%*3",
                                    "132.046%*3",
                                    "139.738%*3",
                                    "147.43%*3"
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
                        "Name": "카미사토류 · 얼음꽃",
                        "Desc": "활짝 핀 얼음꽃을 소환한 뒤 주위의 적을 공중에 띄워 <color style='color:#99FFFF;'>얼음 원소 범위 피해</color>를 준다.<br><br><i>「맑은 구름과 희미한 달빛이 내린 밤, 집념은 안개와 같아 어지러운 마음 쓸쓸히 먼 곳을 바라보네」</i>",
                        "Icon": "Skill_S_Ayaka_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
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
                                "Desc": "재사용 대기시간",
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
                            }
                        ]
                    },
                    {
                        "Name": "카미사토류 · 멸망의 서리",
                        "Desc": "독특한 자태로 차가운 서리를 모아 앞으로 나아가는 서리의 관문을 방출한다.<br><br><color style='color:#FFD780;'>서리의 관문</color><br> · 칼날처럼 날카로운 서리 바람으로 지속해서 접촉한 적을 베어 <color style='color:#99FFFF;'>얼음 원소 피해</color>를 준다.<br> · 지속 시간이 끝나면 피어나 <color style='color:#99FFFF;'>얼음 원소 범위 피해</color>를 준다.<br><br><i>「흩날리는 눈발이 백로를 적시면, 그리움은 서리처럼 쌓이고 마음속엔 안타까움만 가득하네」</i>",
                        "Icon": "Skill_E_Ayaka",
                        "ParamDesc": [
                            {
                                "Desc": "절단 피해",
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
                                "Desc": "만개 피해",
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
                                "Desc": "지속 시간",
                                "ParamLevelList": [
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초",
                                    "5초"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Name": "카미사토류 · 싸락눈 걸음",
                        "Desc": "<color style='color:#FFD780;'>대시를 대체한다.</color><br>부서진 얼음에 몸을 숨긴 후 스태미나를 소모해 빠른 속도로 이동한다.<br><br>해당 상태에서 카미사토 아야카는 수면 위를 빠르게 이동할 수 있다.<br>싸락눈 걸음 상태 종료 후 모습을 드러낼 때 아래의 효과가 발생한다:<br> · 얼음의 힘을 방출해 주변의 적에게 <color style='color:#99FFFF;'>얼음 원소를 부착</color>한다.<br> · 한기를 검에 모아 카미사토 아야카는 짧은 시간 동안 <color style='color:#99FFFF;'>얼음 원소 부여 효과</color>를 얻게 된다.<br><br><i>「물방울은 깃털을 적시고 순식간에 사라지는데, 백로가 물 위를 걷는다고 어찌 원망할 수 있겠는가?」</i>",
                        "Icon": "Skill_S_Ayaka_02",
                        "ParamDesc": [
                            {
                                "Desc": "발동 시 소모 스태미나",
                                "ParamLevelList": [
                                    "10pt"
                                ]
                            },
                            {
                                "Desc": "지속 스태미나 소모",
                                "ParamLevelList": [
                                    "초당 15pt"
                                ]
                            },
                            {
                                "Desc": "원소 부여 지속 시간",
                                "ParamLevelList": [
                                    "5초"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "천죄국죄 진사",
                        "Desc": "<color style='color:#FFD780;'>카미사토류 · 얼음꽃</color> 발동 후 6초 동안 카미사토 아야카의 일반 공격과 강공격으로 주는 피해가 30% 증가한다",
                        "Icon": "UI_Talent_S_Ayaka_05"
                    },
                    {
                        "Name": "한천선명 축사",
                        "Desc": "<color style='color:#FFD780;'>카미사토류 · 싸락눈 걸음</color>이 종료될 때 방출되는 차가운 얼음이 적에게 명중 시, 카미사토 아야카는 아래의 효과를 획득한다:<br> · 스태미나를 10pt 회복한다.<br> · <color style='color:#99FFFF;'>얼음 원소 피해 보너스</color>를 18% 획득한다. 지속 시간: 10초",
                        "Icon": "UI_Talent_S_Ayaka_06"
                    },
                    {
                        "Name": "감별 노하우",
                        "Desc": "무기 돌파 소재 합성 시 10%의 확률로 생산량의 2배를 획득한다",
                        "Icon": "UI_Talent_Combine_Weapon_Double"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "서리에 검게 물든 벚꽃",
                        "Desc": "카미사토 아야카의 일반 공격 혹은 강공격이 적에게 <color style='color:#99FFFF;'>얼음 원소 피해</color>를 주면, 50%의 확률로 <color style='color:#FFD780;'>카미사토류 · 얼음꽃</color>의 재사용 대기시간이 0.3초 감소한다. 해당 효과는 0.1초마다 1회만 발동한다",
                        "Icon": "UI_Talent_S_Ayaka_01"
                    },
                    {
                        "Level": 2,
                        "Name": "삼중 서리 관문",
                        "Desc": "<color style='color:#FFD780;'>카미사토류 · 멸망의 서리</color> 발동 시 추가로 작은 규모의 서리의 관문 2개를 생성해 각각 기존 공격력 20%의 피해를 준다",
                        "Icon": "UI_Talent_S_Ayaka_02"
                    },
                    {
                        "Level": 3,
                        "Name": "흩날리는 카미후부키",
                        "Desc": "<color style='color:#FFD780;'>카미사토류 · 멸망의 서리</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Ayaka_02"
                    },
                    {
                        "Level": 4,
                        "Name": "영고성쇠",
                        "Desc": "<color style='color:#FFD780;'>카미사토류 · 멸망의 서리</color>로 생성된 서리의 관문이 주는 피해를 받은 적의 방어력이 30% 감소한다. 지속 시간: 6초",
                        "Icon": "UI_Talent_S_Ayaka_03"
                    },
                    {
                        "Level": 5,
                        "Name": "화운종월경",
                        "Desc": "<color style='color:#FFD780;'>카미사토류 · 얼음꽃</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Ayaka_01"
                    },
                    {
                        "Level": 6,
                        "Name": "물에 비친 달",
                        "Desc": "카미사토 아야카가 10초마다 「살얼음의 춤」 상태를 획득해 강공격으로 주는 피해가 298% 증가한다. 살얼음의 춤 효과는 강공격이 적을 명중하고 0.5초 후에 사라지며 다시 카운트다운이 시작된다",
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