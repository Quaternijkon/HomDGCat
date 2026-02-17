// Auto Generated

var _AvatarDataConfig_ = {
    "Ambor": {
        "BallList": [
            {
                "When": "Baron Bunny explosion hits monster",
                "DropArray": [
                    {
                        "Num": 4,
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
        "WindZoneList": [],
        "OtherDataList": [
            "(Depends on whether C1 is activated)<br>Elemental Burst lasts 2s, shown radius is 4/5.2m. There is a middle circle within it with radius 2/2.6m.<br>Every instance of DMG has radius 2/2.6m.<br>Group 1 interval 0.4s, is centered on the middle circle.<br>Group 2 interval 0.6s, is centered on the middle circle.<br>Group 3 intervel 0.2s, is centered at a random point inside the middle circle."
        ]
    }
}

var _AvatarMats_ = {
    "Ambor": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104111": 1,
                "100055": 3,
                "112011": 3
            },
            {
                "202": 40000,
                "104112": 3,
                "113011": 2,
                "100055": 10,
                "112011": 15
            },
            {
                "202": 60000,
                "104112": 6,
                "113011": 4,
                "100055": 20,
                "112012": 12
            },
            {
                "202": 80000,
                "104113": 3,
                "113011": 8,
                "100055": 30,
                "112012": 18
            },
            {
                "202": 100000,
                "104113": 6,
                "113011": 12,
                "100055": 45,
                "112013": 12
            },
            {
                "202": 120000,
                "104114": 6,
                "113011": 20,
                "100055": 60,
                "112013": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104301": 3,
                "112011": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112012": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112012": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112012": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112012": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112013": 4,
                "113005": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112013": 6,
                "113005": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112013": 9,
                "113005": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112013": 12,
                "113005": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104301": 3,
                "112011": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112012": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112012": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112012": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112012": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112013": 4,
                "113005": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112013": 6,
                "113005": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112013": 9,
                "113005": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112013": 12,
                "113005": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104301": 3,
                "112011": 6
            },
            {
                "202": 17500,
                "104302": 2,
                "112012": 3
            },
            {
                "202": 25000,
                "104302": 4,
                "112012": 4
            },
            {
                "202": 30000,
                "104302": 6,
                "112012": 6
            },
            {
                "202": 37500,
                "104302": 9,
                "112012": 9
            },
            {
                "202": 120000,
                "104303": 4,
                "112013": 4,
                "113005": 1
            },
            {
                "202": 260000,
                "104303": 6,
                "112013": 6,
                "113005": 1
            },
            {
                "202": 450000,
                "104303": 12,
                "112013": 9,
                "113005": 2
            },
            {
                "202": 700000,
                "104303": 16,
                "112013": 12,
                "113005": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Ambor": {
        "Ver": {
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Первоклассный стрелок",
                        "Desc": "<color style='color:#FFD780;'>Обычная атака:</color><br>До пяти выстрелов из лука.<br><br><color style='color:#FFD780;'>Заряженная атака:</color><br>Более меткий <color style='color:#FFD780;'>прицельный выстрел</color> с увеличенным уроном.<br>Во время прицеливания наконечник стрелы заряжается огнём. Полностью заряженная огнём стрела наносит <color style='color:#FF9999;'>Пиро урон</color>.<br><br><color style='color:#FFD780;'>Атака в падении:</color><br>Выпускает град стрел в воздухе, которые при приземлении персонажа наносят урон по площади.",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "Урон атаки 1",
                                "ParamLevelList": [
                                    "36.12%",
                                    "39.06%",
                                    "42.0%",
                                    "46.2%",
                                    "49.14%",
                                    "52.5%",
                                    "57.12%",
                                    "61.74%",
                                    "66.36%",
                                    "71.4%",
                                    "76.44%",
                                    "81.48%",
                                    "86.52%",
                                    "91.56%",
                                    "96.6%"
                                ]
                            },
                            {
                                "Desc": "Урон атаки 2",
                                "ParamLevelList": [
                                    "36.12%",
                                    "39.06%",
                                    "42.0%",
                                    "46.2%",
                                    "49.14%",
                                    "52.5%",
                                    "57.12%",
                                    "61.74%",
                                    "66.36%",
                                    "71.4%",
                                    "76.44%",
                                    "81.48%",
                                    "86.52%",
                                    "91.56%",
                                    "96.6%"
                                ]
                            },
                            {
                                "Desc": "Урон атаки 3",
                                "ParamLevelList": [
                                    "46.44%",
                                    "50.22%",
                                    "54.0%",
                                    "59.4%",
                                    "63.18%",
                                    "67.5%",
                                    "73.44%",
                                    "79.38%",
                                    "85.32%",
                                    "91.8%",
                                    "98.28%",
                                    "104.76%",
                                    "111.24%",
                                    "117.72%",
                                    "124.2%"
                                ]
                            },
                            {
                                "Desc": "Урон атаки 4",
                                "ParamLevelList": [
                                    "47.3%",
                                    "51.15%",
                                    "55.0%",
                                    "60.5%",
                                    "64.35%",
                                    "68.75%",
                                    "74.8%",
                                    "80.85%",
                                    "86.9%",
                                    "93.5%",
                                    "100.1%",
                                    "106.7%",
                                    "113.3%",
                                    "119.9%",
                                    "126.5%"
                                ]
                            },
                            {
                                "Desc": "Урон атаки 5",
                                "ParamLevelList": [
                                    "59.34%",
                                    "64.17%",
                                    "69.0%",
                                    "75.9%",
                                    "80.73%",
                                    "86.25%",
                                    "93.84%",
                                    "101.43%",
                                    "109.02%",
                                    "117.3%",
                                    "125.58%",
                                    "133.86%",
                                    "142.14%",
                                    "150.42%",
                                    "158.7%"
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
                        "Name": "Барон Зайчик",
                        "Desc": "На Барона Зайчика всегда можно положиться.<br><br><color style='color:#FFD780;'>Барон Зайчик:</color><br> ·  Непрерывно дразнит врагов, привлекая их огонь на себя;<br> ·  Макс. HP Барона Зайчика зависит от макс. HP Эмбер;<br> ·  Если Барон Зайчик уничтожен, либо его время заканчивается, он взрывается, нанося <color style='color:#FF9999;'>Пиро урон по площади</color>.<br><br><color style='color:#FFD780;'>Долгое нажатие:</color><br>Позволяет выбрать направление броска.<br>Чем дольше удерживать кнопку, тем дальше будет бросок.<br><br><i>Барон Зайчик - наследник величественной и весьма запутанной родословной. Насколько запутанной? Эмбер смогла досчитать только до барона Зайчика 893-го, героически пожертвовавшего собой в бою.</i>",
                        "Icon": "Skill_S_Ambor_01",
                        "ParamDesc": [
                            {
                                "Desc": "HP куклы",
                                "ParamLevelList": [
                                    "41.36%",
                                    "44.462%",
                                    "47.564%",
                                    "51.7%",
                                    "54.802%",
                                    "57.904%",
                                    "62.04%",
                                    "66.176%",
                                    "70.312%",
                                    "74.448%",
                                    "78.584%",
                                    "82.72%",
                                    "87.89%",
                                    "93.06%",
                                    "98.23%"
                                ]
                            },
                            {
                                "Desc": "Урон от взрыва",
                                "ParamLevelList": [
                                    "123.2%",
                                    "132.44%",
                                    "141.68%",
                                    "154.0%",
                                    "163.24%",
                                    "172.48%",
                                    "184.8%",
                                    "197.12%",
                                    "209.44%",
                                    "221.76%",
                                    "234.08%",
                                    "246.4%",
                                    "261.8%",
                                    "277.2%",
                                    "292.6%"
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек.",
                                    "15 сек."
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Огненный дождь",
                        "Desc": "Эмбер выпускает град огненных стрел, который наносит периодический <color style='color:#FF9999;'>Пиро урон по площади</color>.<br><br><i>Говорят, что Эмбер полна горящей страсти, поэтому будьте осторожны, иначе она сожжёт и вас.</i>",
                        "Icon": "Skill_E_Ambor",
                        "ParamDesc": [
                            {
                                "Desc": "Урон одной стрелы",
                                "ParamLevelList": [
                                    "28.08%",
                                    "30.186%",
                                    "32.292%",
                                    "35.1%",
                                    "37.206%",
                                    "39.312%",
                                    "42.12%",
                                    "44.928%",
                                    "47.736%",
                                    "50.544%",
                                    "53.352%",
                                    "56.16%",
                                    "59.67%",
                                    "63.18%",
                                    "66.69%"
                                ]
                            },
                            {
                                "Desc": "Конечный урон",
                                "ParamLevelList": [
                                    "505.44%",
                                    "543.348%",
                                    "581.256%",
                                    "631.8%",
                                    "669.708%",
                                    "707.616%",
                                    "758.16%",
                                    "808.704%",
                                    "859.248%",
                                    "909.792%",
                                    "960.336%",
                                    "1010.88%",
                                    "1074.06%",
                                    "1137.24%",
                                    "1200.42%"
                                ]
                            },
                            {
                                "Desc": "Длительность",
                                "ParamLevelList": [
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек.",
                                    "2 сек."
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек.",
                                    "12 сек."
                                ]
                            },
                            {
                                "Desc": "Потребление энергии",
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
                        "Name": "Сто стрел - все в цель!",
                        "Desc": "Шанс критического попадания навыка <color style='color:#FFD780;'>Огненный дождь</color> увеличивается на 10%, а его зона поражения - на 30%.",
                        "Icon": "UI_Talent_S_Ambor_05"
                    },
                    {
                        "Name": "Подавляющий огонь",
                        "Desc": "Прицельные выстрелы по уязвимым местам противника увеличивают силу атаки на 15% на 10 сек.",
                        "Icon": "UI_Talent_S_Ambor_06"
                    },
                    {
                        "Name": "Чемпион Полётов",
                        "Desc": "Уменьшает потребление выносливости активного персонажа во время полёта на 20%.<br>Не суммируется с пассивными талантами, дающими точно такие же эффекты.",
                        "Icon": "UI_Talent_Explosion_Glide"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Двух зайцев...",
                        "Desc": "Во время <color style='color:#FFD780;'>прицельной стрельбы</color> выпускает по две стрелы за выстрел. Вторая стрела наносит 20% от урона первой стрелы.",
                        "Icon": "UI_Talent_S_Ambor_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Зайчик активирован",
                        "Desc": "Барон Зайчик, свежий и навороченный! Попадание по его ногам полностью заряженным прицельным выстрелом заставляет его моментально взорваться.<br>Такой взрыв наносит дополнительные 200% урона.",
                        "Icon": "UI_Talent_S_Ambor_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Оно горит!",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Огненный дождь</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Ambor_02"
                    },
                    {
                        "Level": 4,
                        "Name": "Это не просто кукла",
                        "Desc": "Уменьшает время отката навыка <color style='color:#FFD780;'>Барон Зайчик</color> на 20%. Также даёт одну дополнительную куклу.",
                        "Icon": "UI_Talent_S_Ambor_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Взрывная кукла!",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Барон Зайчик</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Ambor_01"
                    },
                    {
                        "Level": 6,
                        "Name": "Горящие пятки",
                        "Desc": "Использование навыка <color style='color:#FFD780;'>Огненный дождь</color> увеличивает скорость передвижения всех членов отряда и их атаку на 15% в течение 10 сек.",
                        "Icon": "UI_Talent_S_Ambor_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Ambor": {
        "AttackList": [
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
                "AttTag": "CA Group",
                "AttGrp": "1s / 3 hits",
                "Element": "Fire",
                "GU": 2.0,
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
                "Skill": "Charged Aim Shoot - C1 Extra",
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
                "AttGrp": "1s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 4.0,
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
                "AttTag": "CA Group",
                "AttGrp": "1s / 3 hits",
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
                "AttackType": "Default"
            },
            {
                "Skill": "Aim Shoot - C1 Extra",
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
                "AttGrp": "1s / 3 hits",
                "Element": "Phys",
                "GU": 4.0,
                "Poise": 2.0,
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
                "Skill": "Baron Bunny",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 2.0,
                "Poise": 260.0,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Default"
            },
            {
                "Skill": "Elem Burst - Group 1",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "1s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 7.22,
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
                "Skill": "Elem Burst - Group 2",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "1s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 7.22,
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
                "Skill": "Elem Burst - Group 3",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Q Group",
                "AttGrp": "1s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 7.22,
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
                "Poise": 12.9,
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
                "GU": 4.0,
                "Poise": 13.2,
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
                "GU": 4.0,
                "Poise": 15.0,
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
                "GU": 4.0,
                "Poise": 14.4,
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
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        1.0,
                        0.1,
                        0.1
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Phys",
                "GU": 4.0,
                "Poise": 16.5,
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