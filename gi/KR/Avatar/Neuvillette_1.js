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
                        "Name": "공평한 물처럼",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>가볍게 지팡이를 휘둘러 일으킨 파도로 최대 3번 공격해 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br><br><color style='color:#FFD780;'>차지 강공격 · 심증 형성</color><br>차지 시 느비예트는 원천의 힘을 모아 중재의 문양을 만들어 낸다. 이 상태에서 느비예트는 이동 및 방향 전환이 가능하고, 일정 범위 내의 원천의 방울을 흡수한다.<br>원천의 방울을 흡수할 때마다 문양이 더 빨리 완성되고, 느비예트의 HP를 회복시킨다.<br>차지를 멈췄을 때 문양이 미완성이라면 강공격을 발동하고, 문양이 완성됐다면 강공격 · 공정한 판결을 발동한다.<br><br><color style='color:#FFD780;'>강공격</color><br>일정 스태미나를 소모해 물의 고리로 적을 맹렬하게 공격하여 <color style='color:#80C0FF;'>물 원소 범위 피해</color>를 준다.<br><br><color style='color:#FFD780;'>강공격 · 공정한 판결</color><br>격류로 전방 직선 구역 내의 적에게 지속적인 <color style='color:#80C0FF;'>물 원소 범위 피해</color>를 준다.<br>강공격 · 공정한 판결은 스태미나를 소모하지 않는다. 지속 시간: 3초.<br>느비예트의 HP가 50% 초과인 상태에서 발동 시 지속적으로 자신의 HP를 소모한다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>물 원소의 힘을 응축해 공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 <color style='color:#80C0FF;'>물 원소 범위 피해</color>를 준다",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
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
                                "Desc": "2단 공격 피해",
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
                                "Desc": "3단 공격 피해",
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
                                "Desc": "강공격 피해",
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
                                "Desc": "강공격 스태미나 소모",
                                "ParamLevelList": [
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt",
                                    "50pt"
                                ]
                            },
                            {
                                "Desc": "강공격 · 공정한 판결 지속 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 7.3186%",
                                    "HP 최대치의 7.9143%",
                                    "HP 최대치의 8.51%",
                                    "HP 최대치의 9.361%",
                                    "HP 최대치의 9.9567%",
                                    "HP 최대치의 10.6375%",
                                    "HP 최대치의 11.5736%",
                                    "HP 최대치의 12.5097%",
                                    "HP 최대치의 13.4458%",
                                    "HP 최대치의 14.467%",
                                    "HP 최대치의 15.4882%",
                                    "HP 최대치의 16.5094%",
                                    "HP 최대치의 17.5306%",
                                    "HP 최대치의 18.5518%",
                                    "HP 최대치의 19.573%"
                                ]
                            },
                            {
                                "Desc": "HP 회복",
                                "ParamLevelList": [
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%",
                                    "방울당 HP 최대치의 16.0%"
                                ]
                            },
                            {
                                "Desc": "손실 HP",
                                "ParamLevelList": [
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초",
                                    "HP 최대치의 8.0%/0.5초"
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
                        "Name": "눈물이여, 반드시 갚으리라",
                        "Desc": "거센 폭포를 내려 전방의 적에게 느비예트 HP 최대치에 기반한 <color style='color:#80C0FF;'>물 원소 범위 피해</color>를 주고, 적에게 명중 후 적 주변에 원천의 방울 3개를 생성한다.<br><br><color style='color:#FFD780;'>아르케의 힘: 프뉴마</color><br>일정 시간마다 거센 폭포를 내린 후, 적을 꿰뚫는 영혼의 쐐기를 내려 프뉴마 성질의 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br><br><i>「법률이 다양한 죄행을 억제할 수 있다고는 하지만, 죄악 자체를 제거하지는 못합니다」</i>",
                        "Icon": "Skill_S_Neuvillette_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 12.864%",
                                    "HP 최대치의 13.8288%",
                                    "HP 최대치의 14.7936%",
                                    "HP 최대치의 16.08%",
                                    "HP 최대치의 17.0448%",
                                    "HP 최대치의 18.0096%",
                                    "HP 최대치의 19.296%",
                                    "HP 최대치의 20.5824%",
                                    "HP 최대치의 21.8688%",
                                    "HP 최대치의 23.1552%",
                                    "HP 최대치의 24.4416%",
                                    "HP 최대치의 25.728%",
                                    "HP 최대치의 27.336%",
                                    "HP 최대치의 28.944%",
                                    "HP 최대치의 30.552%"
                                ]
                            },
                            {
                                "Desc": "영혼의 쐐기 피해",
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
                                "Desc": "영혼의 쐐기 간격",
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
                                "Desc": "원천의 방울 지속 시간",
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
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초",
                                    "12초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "밀물이여, 내가 돌아왔노라",
                        "Desc": "거친 파도를 분출해 느비예트의 HP 최대치에 기반한 <color style='color:#80C0FF;'>물 원소 범위 피해</color>를 준다. 짧은 시간 후, 주변에 두 개의 폭포가 내려치며 작은 범위의 <color style='color:#80C0FF;'>물 원소 피해</color>를 주고 전방의 일정 범위 내에 원천의 방울 6개를 생성한다.<br><br><i>「법률은 공포된 후에야 성립됩니다. 하나, 자고이래로 자연의 법칙이 그보다 먼저 모든 종과 세대를 제약해 왔죠」</i>",
                        "Icon": "Skill_E_Neuvillette_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 22.2578%",
                                    "HP 최대치의 23.9272%",
                                    "HP 최대치의 25.5965%",
                                    "HP 최대치의 27.8223%",
                                    "HP 최대치의 29.4916%",
                                    "HP 최대치의 31.161%",
                                    "HP 최대치의 33.3868%",
                                    "HP 최대치의 35.6125%",
                                    "HP 최대치의 37.8383%",
                                    "HP 최대치의 40.0641%",
                                    "HP 최대치의 42.2899%",
                                    "HP 최대치의 44.5157%",
                                    "HP 최대치의 47.2979%",
                                    "HP 최대치의 50.0801%",
                                    "HP 최대치의 52.8624%"
                                ]
                            },
                            {
                                "Desc": "폭포 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 9.1055%",
                                    "HP 최대치의 9.7884%",
                                    "HP 최대치의 10.4713%",
                                    "HP 최대치의 11.3818%",
                                    "HP 최대치의 12.0647%",
                                    "HP 최대치의 12.7477%",
                                    "HP 최대치의 13.6582%",
                                    "HP 최대치의 14.5688%",
                                    "HP 최대치의 15.4793%",
                                    "HP 최대치의 16.3898%",
                                    "HP 최대치의 17.3004%",
                                    "HP 최대치의 18.2109%",
                                    "HP 최대치의 19.3491%",
                                    "HP 최대치의 20.4873%",
                                    "HP 최대치의 21.6255%"
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
                        "Name": "생존한 고대바다의 계승자",
                        "Desc": "파티 내 캐릭터가 적에게 증발, 빙결, 감전, 달 감전, 개화, 달 개화, 물 원소 확산, 물 원소 결정 반응 또는 달 결정 반응 발동 시 느비예트에게 「생존한 용의 영광」 효과가 생성된다. 지속 시간: 30초, 최대 중첩수: 3스택. 이 효과를 얻은 느비예트의 강공격 · 공정한 판결은 기존의 110%/125%/160%에 해당하는 피해를 준다.<br>생성된 「생존한 용의 영광」 효과는 각 원소 반응마다 독립적으로 존재한다",
                        "Icon": "UI_Talent_S_Neuvillette_05"
                    },
                    {
                        "Name": "드높은 중재의 규율",
                        "Desc": "현재 HP 중 HP 최대치의 30%를 초과하는 부분을 기반으로 느비예트가 1%당 0.6%의 <color style='color:#80C0FF;'>물 원소 피해 보너스</color>를 획득한다. 해당 방식으로 최대 30%까지 증가한다",
                        "Icon": "UI_Talent_S_Neuvillette_06"
                    },
                    {
                        "Name": "모이는 파도처럼",
                        "Desc": "파티 내 자신의 캐릭터의 수중 대시 이동 속도가 15% 증가한다.<br>같은 효과의 고유 특성과 중첩되지 않는다",
                        "Icon": "UI_Talent_S_Neuvillette_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "위대한 제정",
                        "Desc": "느비예트 등장 시, 돌파 특성 「생존한 고대바다의 계승자」의 「생존한 용의 영광」을 1스택 획득한다. 돌파 특성 「생존한 고대바다의 계승자」를 해금해야 한다.<br>또한, 차지 강공격 · 심증 형성과 강공격 · 공정한 판결 진행 시 느비예트의 경직 저항력이 증가한다",
                        "Icon": "UI_Talent_S_Neuvillette_01"
                    },
                    {
                        "Level": 2,
                        "Name": "법의 계율",
                        "Desc": "돌파 특성 「생존한 고대바다의 계승자」가 강화된다: 「생존한 용의 영광」 1스택마다 강공격 · 공정한 판결의 치명타 피해가 14% 증가한다. 해당 방식으로 최대 42%까지 증가한다.<br>돌파 특성 「생존한 고대 바다의 계승자」를 해금해야 한다",
                        "Icon": "UI_Talent_S_Neuvillette_02"
                    },
                    {
                        "Level": 3,
                        "Name": "고대의 의제",
                        "Desc": "<color style='color:#FFD780;'>일반 공격 · 공평한 물처럼</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Neuvillette_01"
                    },
                    {
                        "Level": 4,
                        "Name": "연민의 왕관",
                        "Desc": "느비예트가 현재 필드에서 치유를 받을 시 원천의 방울 1개를 생성한다. 해당 효과는 4초마다 최대 1회 발동된다",
                        "Icon": "UI_Talent_S_Neuvillette_03"
                    },
                    {
                        "Level": 5,
                        "Name": "정의의 판결",
                        "Desc": "<color style='color:#FFD780;'>밀물이여, 내가 돌아왔노라</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Neuvillette_02"
                    },
                    {
                        "Level": 6,
                        "Name": "분노의 보상",
                        "Desc": "강공격 · 공정한 판결 발동 시 느비예트가 주변 일정 범위 내의 원천의 방울을 흡수한다. 흡수한 원천의 방울마다 강공격 · 공정한 판결의 지속 시간이 1초 연장된다.<br>또한, 강공격 · 공정한 판결이 적에게 명중 시 2초마다 추가로 두 개의 격류를 내뿜는다. 각 격류는 느비예트의 HP 최대치 10%에 해당하는 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다. 해당 방식으로 주는 피해는 강공격 · 공정한 판결이 주는 피해로 간주한다",
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