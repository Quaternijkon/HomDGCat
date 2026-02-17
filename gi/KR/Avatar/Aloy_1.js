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
                        "Name": "고속 사격",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>활로 최대 4번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>피해가 더 크고 정확한 <color style='color:#FFD780;'>조준 사격</color>을 한다.<br>조준 시 얼음 서리가 내뿜는 한기가 화살 촉에 모이고, 한기가 가득 찬 화살은 <color style='color:#99FFFF;'>얼음 원소 피해</color>를 준다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 착지 시 범위 피해를 준다",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
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
                                "Desc": "2단 공격 피해",
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
                                "Desc": "3단 공격 피해",
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
                                "Desc": "4단 공격 피해",
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
                                "Desc": "조준 사격",
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
                                "Desc": "풀차지 조준 사격",
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
                        "Name": "빙결의 설야",
                        "Desc": "목표를 향해 빙결탄을 1개 던진다. 명중 후 폭발하며 <color style='color:#99FFFF;'>얼음 원소 피해</color>를 준다. 폭발 후 빙결탄은 수많은 냉각 폭탄으로 분열되어 적에게 닿거나 일정 시간이 지난 후 폭발해 <color style='color:#99FFFF;'>얼음 원소 피해</color>를 준다.<br>빙결탄 또는 냉각 폭탄이 적에게 명중 시 적의 공격력이 감소하고 에일로이에게 「코일」 효과를 1스택 부여한다.<br>코일 효과는 0.1초마다 최대 1스택 획득할 수 있다.<br><br><color style='color:#FFD780;'>코일</color><br> · 스택에 따라 에일로이의 일반 공격 피해가 증가한다.<br> · 코일 4스택 보유 시, 에일로이는 코일 효과를 모두 지우고 「얼음 질주」 효과를 획득한다. 이때 일반 공격 피해가 한층 더 향상되며 일반 공격으로 주는 피해 역시 <color style='color:#99FFFF;'>얼음 원소 피해</color>로 전환된다.<br><br>얼음 질주 상태에서 에일로이는 코일 효과를 획득할 수 없다.<br>코일 효과는 전투 이탈 30초 후에 사라진다.<br><br><i>절개는 이곳보다 훨씬 추웠지</i>",
                        "Icon": "Skill_S_Aloy_01",
                        "ParamDesc": [
                            {
                                "Desc": "빙결탄 피해",
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
                                "Desc": "냉각 폭탄 피해",
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
                                "Desc": "공격력 감소",
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
                                "Desc": "공격력 감소 지속 시간",
                                "ParamLevelList": [
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초",
                                    "6초"
                                ]
                            },
                            {
                                "Desc": "코일 일반 공격 피해 증가",
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
                                "Desc": "얼음 질주 일반 공격 피해 증가",
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
                                "Desc": "얼음 질주 지속 시간",
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
                            }
                        ]
                    },
                    {
                        "Name": "서광의 예언",
                        "Desc": "목표를 향해 얼음 원소가 가득 담긴 에너지 셀을 던진 후 화살을 사용해 폭발시켜 <color style='color:#99FFFF;'>얼음 원소 범위 피해</color>를 준다.<br><br><i>제로 던의 본질이 희망인지 파멸인지는 이제 중요하지 않다. 에일로이는 이미 그녀 자신의 세계를 구원했기 때문이다. 이 세계의 운명은 이 세계의 용자가 신경 쓸 것이다</i>",
                        "Icon": "Skill_E_Aloy_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
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
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Name": "전투 오버라이드",
                        "Desc": "에일로이가 <color style='color:#FFD780;'>빙결의 설야</color>의 코일 효과를 획득하면 에일로이의 공격력이 16% 증가하고, 근처에 있는 파티 내 다른 캐릭터의 공격력이 8% 증가한다. 지속 시간: 10초",
                        "Icon": "UI_Talent_S_Aloy_05"
                    },
                    {
                        "Name": "강력한 공격",
                        "Desc": "에일로이가 <color style='color:#FFD780;'>빙결의 설야</color>의 얼음 질주 상태일 때, 1초마다 <color style='color:#99FFFF;'>얼음 원소 피해 보너스</color>가 3.5% 증가한다. 해당 방식으로 <color style='color:#99FFFF;'>얼음 원소 피해 보너스</color>가 최대 35%까지 증가한다",
                        "Icon": "UI_Talent_S_Aloy_06"
                    },
                    {
                        "Name": "황야의 사냥꾼",
                        "Desc": "에일로이가 파티에 합류하면, 파티 내 자신의 캐릭터가 새고기, 짐승고기, 냉동 생고기를 드랍하는 동물에게 접근해도 동물들이 놀라지 않는다",
                        "Icon": "UI_Talent_S_Aloy_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "이세계의 별",
                        "Desc": "이 자의 밤하늘을 밝힐 순간은 아직 오지 않았다",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 2,
                        "Name": "이세계의 별",
                        "Desc": "이 자의 밤하늘을 밝힐 순간은 아직 오지 않았다",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 3,
                        "Name": "이세계의 별",
                        "Desc": "이 자의 밤하늘을 밝힐 순간은 아직 오지 않았다",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 4,
                        "Name": "이세계의 별",
                        "Desc": "이 자의 밤하늘을 밝힐 순간은 아직 오지 않았다",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 5,
                        "Name": "이세계의 별",
                        "Desc": "이 자의 밤하늘을 밝힐 순간은 아직 오지 않았다",
                        "Icon": "UI_Talent_S_Aloy_Lock"
                    },
                    {
                        "Level": 6,
                        "Name": "이세계의 별",
                        "Desc": "이 자의 밤하늘을 밝힐 순간은 아직 오지 않았다",
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