// Auto Generated

var _maze = {
    "4003": {
        "BuffA": [
            {
                "_id": 3033003,
                "Name": "反相",
                "Desc": "敌方目标每次受到攻击后，攻击者都会损失自身最大生命值<color style='color:#f29e38;'> 2% </color>的生命值，该效果不致命。"
            }
        ],
        "ElemA": [
            "Ice",
            "Elec"
        ],
        "TrialA": {
            "_id": 30503011,
            "Level": 95,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 349,
                "ATK": 1.1,
                "HP": 8.0
            },
            "Monsters": [
                [
                    {
                        "ID": 4053020,
                        "HP": 4189894,
                        "SPD": 218,
                        "Stance": 16
                    },
                    {
                        "ID": 2023030,
                        "HP": 3072589,
                        "SPD": 158,
                        "Stance": 14
                    },
                    {
                        "ID": 4053020,
                        "HP": 4189894,
                        "SPD": 218,
                        "Stance": 16
                    },
                    {
                        "ID": 2023030,
                        "HP": 3072589,
                        "SPD": 158,
                        "Stance": 14
                    }
                ]
            ]
        },
        "BuffB": [
            {
                "_id": 3033002,
                "Name": "淬火",
                "Desc": "敌方目标生命值每降低1%，我方对其造成的暴击伤害降低<color style='color:#f29e38;'> 3% </color>。"
            }
        ],
        "ElemB": [
            "Fire",
            "Imaginary"
        ],
        "TrialB": {
            "_id": 30503012,
            "Level": 95,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 350,
                "ATK": 1.1,
                "HP": 4.0
            },
            "Monsters": [
                [
                    {
                        "ID": 4023010,
                        "HP": 1815621,
                        "SPD": 158,
                        "Stance": 16
                    },
                    {
                        "ID": 4023020,
                        "HP": 1536294,
                        "SPD": 132,
                        "Stance": 16
                    }
                ],
                [
                    {
                        "ID": 802401107,
                        "HP": 3072589,
                        "SPD": 190,
                        "Stance": 16
                    }
                ]
            ]
        },
        "BuffC": [
            {
                "_id": 3033023,
                "Name": "挑衅",
                "Desc": "敌方目标受到<color style='color:#f29e38;'> 6 </color>次攻击后立即行动，该计数在敌方目标回合开始时清空。"
            },
            {
                "_id": 3033025,
                "Name": "滋扰",
                "Desc": "敌方目标施放攻击后，对攻击目标随机造成<color style='color:#f29e38;'> 5% </color>或者<color style='color:#f29e38;'> 10% </color>的行动延后。"
            }
        ],
        "ElemC": [
            "Phys",
            "Imaginary"
        ],
        "TrialC": {
            "_id": 30503013,
            "Level": 95,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 351,
                "ATK": 1.1,
                "HP": 3.0
            },
            "Monsters": [
                [
                    {
                        "ID": 1013020,
                        "HP": 1152221,
                        "SPD": 190,
                        "Stance": 10
                    },
                    {
                        "ID": 3003020,
                        "HP": 1885452,
                        "SPD": 190,
                        "Stance": 10
                    }
                ],
                [
                    {
                        "ID": 4064010,
                        "HP": 2828178,
                        "SPD": 198,
                        "Stance": 12
                    }
                ]
            ]
        },
        "FinalBuffs": [
            {
                "_id": 3033032,
                "Name": "不破不立",
                "Desc": "我方全体目标击破特攻提高<color style='color:#f29e38;'> 60% </color>；每次将敌方目标韧性削减为0时，使该目标受到的击破伤害提高<color style='color:#f29e38;'> 15% </color>，该效果最多叠加<color style='color:#f29e38;'> 4 </color>层。"
            },
            {
                "_id": 3033033,
                "Name": "意气激昂",
                "Desc": "我方全体目标攻击力提高<color style='color:#f29e38;'> 40% </color>；施放【遥远地平的长音】时，额外使我方全体目标攻击力提高<color style='color:#f29e38;'> 20% </color>，该效果可叠加。"
            },
            {
                "_id": 3033034,
                "Name": "乘间击瑕",
                "Desc": "我方全体目标造成的伤害提高<color style='color:#f29e38;'> 40% </color>；我方目标施放攻击后，对被攻击的敌方目标添加自身属性对应的弱点，该效果在敌方目标从弱点击破状态恢复时移除。"
            }
        ],
        "FinalTagsEasy": [
            {
                "_id": 3033028,
                "Name": "韧甲+",
                "Desc": "敌方目标初始拥有<color style='color:#f29e38;'> 3 </color>层【韧甲+】，每层使敌方目标受到的伤害降低<color style='color:#f29e38;'> 15% </color>；敌方目标每次韧性被削减为0时降低1层【韧甲+】。该效果的层数在敌方目标的每个阶段重置。"
            },
            {
                "_id": 3033038,
                "Name": "失能",
                "Desc": "进入战斗时，固定降低我方目标<color style='color:#f29e38;'> 50% </color>的能量，并使我方目标在自身回合外的能量恢复效率降低<color style='color:#f29e38;'> 50% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。"
            },
            {
                "_id": 3033035,
                "Name": "百炼",
                "Desc": "敌方目标每次受到攻击后，使自身受到的伤害降低<color style='color:#f29e38;'> 2% </color>，受到的暴击伤害降低<color style='color:#f29e38;'> 4% </color>，最多叠加<color style='color:#f29e38;'> 10 </color>层，该效果在敌方目标回合开始或进入弱点击破状态时清空层数；若敌方目标处于弱点击破状态时，该效果不会叠加层数。"
            }
        ],
        "FinalTagsHard": [
            {
                "_id": 3033029,
                "Name": "韧甲++",
                "Desc": "敌方目标初始拥有<color style='color:#f29e38;'> 4 </color>层【韧甲++】，每层使敌方目标受到的伤害降低<color style='color:#f29e38;'> 15% </color>；敌方目标每次韧性被削减为0时降低1层【韧甲++】。该效果的层数在敌方目标的每个阶段重置。"
            },
            {
                "_id": 3033040,
                "Name": "失能++",
                "Desc": "进入战斗时，固定降低我方目标<color style='color:#f29e38;'> 100% </color>的能量，并使我方目标在自身回合外的能量恢复效率降低<color style='color:#f29e38;'> 100% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。"
            },
            {
                "_id": 3033036,
                "Name": "百炼+",
                "Desc": "敌方目标每次受到攻击后，使自身受到的伤害降低<color style='color:#f29e38;'> 3% </color>，受到的暴击伤害降低<color style='color:#f29e38;'> 6% </color>，最多叠加<color style='color:#f29e38;'> 10 </color>层，该效果在敌方目标回合开始或进入弱点击破状态时清空层数；若敌方目标处于弱点击破状态时，该效果不会叠加层数。"
            }
        ],
        "ElemFinal": [
            "Fire"
        ],
        "FinalEasy": {
            "_id": 30503021,
            "Level": 100,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 354,
                "ATK": 1.1,
                "HP": 4.0
            },
            "Monsters": [
                [
                    {
                        "ID": 3025016,
                        "HP": 10818300,
                        "SPD": 190,
                        "Stance": 7
                    }
                ]
            ]
        },
        "FinalHard": {
            "_id": 30503022,
            "Level": 120,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 352,
                "ATK": 1.1,
                "HP": 4.7
            },
            "Monsters": [
                [
                    {
                        "ID": 3025016,
                        "HP": 50846010,
                        "SPD": 216,
                        "Stance": 7
                    }
                ]
            ]
        },
        "TargetsTrial": [
            "不超过<color style='color:#f29e38;'> 4 </color>轮战斗胜利",
            "不超过<color style='color:#f29e38;'> 2 </color>轮战斗胜利",
            "没有角色无法战斗"
        ],
        "TargetsFinal": [
            "不超过<color style='color:#f29e38;'> 6 </color>轮战斗胜利",
            "不超过<color style='color:#f29e38;'> 4 </color>轮战斗胜利",
            "不超过<color style='color:#f29e38;'> 2 </color>轮战斗胜利"
        ],
        "RewardLine": 1,
        "BossGuides": [
            4064010
        ]
    },
    "4002": {
        "BuffA": [
            {
                "_id": 3033023,
                "Name": "挑衅",
                "Desc": "敌方目标受到<color style='color:#f29e38;'> 6 </color>次攻击后立即行动，该计数在敌方目标回合开始时清空。"
            }
        ],
        "ElemA": [
            "Phys",
            "Elec"
        ],
        "TrialA": {
            "_id": 30502011,
            "Level": 95,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 345,
                "ATK": 1.1,
                "HP": 5.0
            },
            "Monsters": [
                [
                    {
                        "ID": 3002030,
                        "HP": 392803,
                        "SPD": 132,
                        "Stance": 3
                    },
                    {
                        "ID": 2013020,
                        "HP": 2094947,
                        "SPD": 158,
                        "Stance": 10
                    },
                    {
                        "ID": 2033010,
                        "HP": 2094947,
                        "SPD": 158,
                        "Stance": 12
                    },
                    {
                        "ID": 3002030,
                        "HP": 392803,
                        "SPD": 132,
                        "Stance": 3
                    },
                    {
                        "ID": 3002030,
                        "HP": 392803,
                        "SPD": 132,
                        "Stance": 3
                    },
                    {
                        "ID": 2033010,
                        "HP": 2094947,
                        "SPD": 158,
                        "Stance": 12
                    },
                    {
                        "ID": 3002030,
                        "HP": 392803,
                        "SPD": 132,
                        "Stance": 3
                    },
                    {
                        "ID": 2013020,
                        "HP": 2094947,
                        "SPD": 158,
                        "Stance": 10
                    },
                    {
                        "ID": 3002030,
                        "HP": 392803,
                        "SPD": 132,
                        "Stance": 3
                    },
                    {
                        "ID": 3002030,
                        "HP": 392803,
                        "SPD": 132,
                        "Stance": 3
                    }
                ]
            ]
        },
        "BuffB": [
            {
                "_id": 3033025,
                "Name": "滋扰",
                "Desc": "敌方目标施放攻击后，对攻击目标随机造成<color style='color:#f29e38;'> 5% </color>或者<color style='color:#f29e38;'> 10% </color>的行动延后。"
            },
            {
                "_id": 3033005,
                "Name": "吸能",
                "Desc": "敌方目标每次受到攻击后都会使攻击者能量降低<color style='color:#f29e38;'> 2 </color>点，但攻击者能量达到上限时不会降低；敌方目标被消灭时固定恢复攻击者<color style='color:#f29e38;'> 10 </color>点能量。"
            }
        ],
        "ElemB": [
            "Phys",
            "Wind"
        ],
        "TrialB": {
            "_id": 30502012,
            "Level": 95,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 346,
                "ATK": 1.1,
                "HP": 3.5
            },
            "Monsters": [
                [
                    {
                        "ID": 4063010,
                        "HP": 1955284,
                        "SPD": 158,
                        "Stance": 16
                    },
                    {
                        "ID": 2033010,
                        "HP": 1466463,
                        "SPD": 158,
                        "Stance": 12
                    }
                ],
                [
                    {
                        "ID": 2034010,
                        "HP": 3360644,
                        "SPD": 264,
                        "Stance": 24
                    }
                ]
            ]
        },
        "BuffC": [
            {
                "_id": 3033001,
                "Name": "韧甲",
                "Desc": "敌方目标初始拥有<color style='color:#f29e38;'> 2 </color>层【韧甲】，每层使敌方目标受到的伤害降低<color style='color:#f29e38;'> 15% </color>；敌方目标每次韧性被削减为0时降低1层【韧甲】。"
            }
        ],
        "ElemC": [
            "Fire",
            "Ice"
        ],
        "TrialC": {
            "_id": 30502013,
            "Level": 95,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 347,
                "ATK": 1.1,
                "HP": 2.5
            },
            "Monsters": [
                [
                    {
                        "ID": 803301014,
                        "HP": 1396631,
                        "SPD": 158,
                        "Stance": 12
                    },
                    {
                        "ID": 2023020,
                        "HP": 1047473,
                        "SPD": 190,
                        "Stance": 12
                    }
                ],
                [
                    {
                        "ID": 3004020,
                        "HP": 3491578,
                        "SPD": 106,
                        "Stance": 0
                    }
                ]
            ]
        },
        "FinalBuffs": [
            {
                "_id": 3033020,
                "Name": "狂戮生息",
                "Desc": "我方全体目标暴击伤害提高<color style='color:#f29e38;'> 50% </color>；施放【治愈的虹彩】时，增加的生命上限额外提高<color style='color:#f29e38;'> 60% </color>。"
            },
            {
                "_id": 3033021,
                "Name": "火力激增",
                "Desc": "我方全体目标造成的普攻、战技、终结技伤害提高<color style='color:#f29e38;'> 80% </color>；施放【治愈的虹彩】时，额外使我方全体目标攻击力提高<color style='color:#f29e38;'> 2000 </color>点。"
            },
            {
                "_id": 3033022,
                "Name": "穿流疾驰",
                "Desc": "我方全体目标造成的持续伤害的全属性抗性穿透提高<color style='color:#f29e38;'> 40% </color>；施放【治愈的虹彩】时，额外使我方全体目标速度提高<color style='color:#f29e38;'> 30% </color>。"
            }
        ],
        "FinalTagsEasy": [
            {
                "_id": 3033012,
                "Name": "吸能+",
                "Desc": "敌方目标每次受到攻击后都会使攻击者能量降低<color style='color:#f29e38;'> 3 </color>点，但攻击者能量达到上限时不会降低；敌方目标被消灭时固定恢复攻击者<color style='color:#f29e38;'> 10 </color>点能量。"
            },
            {
                "_id": 3033017,
                "Name": "龟裂",
                "Desc": "我方目标受到敌方攻击时会被施加【龟裂】效果，每层使持有者在受到攻击后额外损失最大生命值<color style='color:#f29e38;'> 0.8% </color>的生命值，该效果叠加层数无上限且不可驱散。持有【龟裂】的目标获得除自身外的友方目标施加的护盾效果或治疗后，双方均解除全部【龟裂】效果。"
            }
        ],
        "FinalTagsHard": [
            {
                "_id": 3033013,
                "Name": "吸能++",
                "Desc": "敌方目标每次受到攻击后都会使攻击者能量降低<color style='color:#f29e38;'> 4 </color>点，但攻击者能量达到上限时不会降低；敌方目标被消灭时固定恢复攻击者<color style='color:#f29e38;'> 10 </color>点能量。"
            },
            {
                "_id": 3033019,
                "Name": "龟裂++",
                "Desc": "我方目标受到敌方攻击时会被施加【龟裂++】效果，每层使持有者在受到攻击后额外损失最大生命值<color style='color:#f29e38;'> 1.6% </color>的生命值，该效果叠加层数无上限且不可驱散。持有【龟裂++】的目标获得除自身外的友方目标施加的护盾效果或治疗后，双方均解除全部【龟裂++】效果。"
            }
        ],
        "ElemFinal": [
            "Phys",
            "Ice",
            "Quantum"
        ],
        "FinalEasy": {
            "_id": 30502021,
            "Level": 100,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 353,
                "HP": 4.5
            },
            "Monsters": [
                [
                    {
                        "ID": 401501101,
                        "HP": 12677695,
                        "SPD": 190,
                        "Stance": 32
                    }
                ]
            ]
        },
        "FinalHard": {
            "_id": 30502022,
            "Level": 120,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 348,
                "HP": 5.0
            },
            "Monsters": [
                [
                    {
                        "ID": 401501101,
                        "HP": 56345313,
                        "SPD": 216,
                        "Stance": 32
                    }
                ]
            ]
        },
        "TargetsTrial": [
            "不超过<color style='color:#f29e38;'> 4 </color>轮战斗胜利",
            "不超过<color style='color:#f29e38;'> 2 </color>轮战斗胜利",
            "没有角色无法战斗"
        ],
        "TargetsFinal": [
            "不超过<color style='color:#f29e38;'> 6 </color>轮战斗胜利",
            "不超过<color style='color:#f29e38;'> 4 </color>轮战斗胜利",
            "不超过<color style='color:#f29e38;'> 2 </color>轮战斗胜利"
        ],
        "RewardLine": 1
    },
    "4001": {
        "BuffA": [
            {
                "_id": 3033001,
                "Name": "韧甲",
                "Desc": "敌方目标初始拥有<color style='color:#f29e38;'> 2 </color>层【韧甲】，每层使敌方目标受到的伤害降低<color style='color:#f29e38;'> 15% </color>；敌方目标每次韧性被削减为0时降低1层【韧甲】。"
            }
        ],
        "ElemA": [
            "Fire",
            "Imaginary"
        ],
        "TrialA": {
            "_id": 30501011,
            "Level": 95,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 340,
                "ATK": 1.1,
                "HP": 2.4
            },
            "Monsters": [
                [
                    {
                        "ID": 3012020,
                        "HP": 117317,
                        "SPD": 132,
                        "Stance": 2
                    },
                    {
                        "ID": 3013010,
                        "HP": 1173170,
                        "SPD": 145,
                        "Stance": 12
                    },
                    {
                        "ID": 3013010,
                        "HP": 1173170,
                        "SPD": 145,
                        "Stance": 12
                    },
                    {
                        "ID": 3012020,
                        "HP": 117317,
                        "SPD": 132,
                        "Stance": 2
                    }
                ],
                [
                    {
                        "ID": 3004012,
                        "HP": 4189894,
                        "SPD": 0,
                        "Stance": 0
                    }
                ]
            ]
        },
        "BuffB": [
            {
                "_id": 3033002,
                "Name": "淬火",
                "Desc": "敌方目标生命值每降低1%，我方对其造成的暴击伤害降低<color style='color:#f29e38;'> 3% </color>。"
            }
        ],
        "ElemB": [
            "Phys",
            "Wind",
            "Elec"
        ],
        "TrialB": {
            "_id": 30501012,
            "Level": 95,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 341,
                "ATK": 1.1,
                "HP": 2.4
            },
            "Monsters": [
                [
                    {
                        "ID": 4052010,
                        "HP": 272343,
                        "SPD": 190,
                        "Stance": 4
                    },
                    {
                        "ID": 4053010,
                        "HP": 1256968,
                        "SPD": 190,
                        "Stance": 18
                    },
                    {
                        "ID": 4052010,
                        "HP": 272343,
                        "SPD": 190,
                        "Stance": 4
                    },
                    {
                        "ID": 4052010,
                        "HP": 272343,
                        "SPD": 190,
                        "Stance": 4
                    },
                    {
                        "ID": 4053010,
                        "HP": 1256968,
                        "SPD": 190,
                        "Stance": 18
                    }
                ],
                [
                    {
                        "ID": 3014020,
                        "HP": 1843553,
                        "SPD": 190,
                        "Stance": 24
                    }
                ]
            ]
        },
        "BuffC": [
            {
                "_id": 3033003,
                "Name": "反相",
                "Desc": "敌方目标每次受到攻击后，攻击者都会损失自身最大生命值<color style='color:#f29e38;'> 2% </color>的生命值，该效果不致命。"
            },
            {
                "_id": 3033004,
                "Name": "守护",
                "Desc": "所有非精英敌方目标不会被削减生命值和韧性，且效果抵抗提高<color style='color:#f29e38;'> 100% </color>。当所有精英敌方目标被消灭时，剩余敌方目标也会被消灭。"
            }
        ],
        "ElemC": [
            "Phys",
            "Quantum"
        ],
        "TrialC": {
            "_id": 30501013,
            "Level": 95,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 342,
                "HP": 5.0
            },
            "Monsters": [
                [
                    {
                        "ID": 4032050,
                        "HP": 523737,
                        "SPD": 205,
                        "Stance": 3
                    },
                    {
                        "ID": 4033010,
                        "HP": 2444105,
                        "SPD": 158,
                        "Stance": 16
                    },
                    {
                        "ID": 4032010,
                        "HP": 523737,
                        "SPD": 132,
                        "Stance": 3
                    },
                    {
                        "ID": 4032050,
                        "HP": 523737,
                        "SPD": 205,
                        "Stance": 3
                    }
                ],
                [
                    {
                        "ID": 4033010,
                        "HP": 2444105,
                        "SPD": 158,
                        "Stance": 16
                    },
                    {
                        "ID": 4033030,
                        "HP": 2618684,
                        "SPD": 190,
                        "Stance": 16
                    },
                    {
                        "ID": 4033010,
                        "HP": 2444105,
                        "SPD": 158,
                        "Stance": 16
                    }
                ]
            ]
        },
        "FinalBuffs": [
            {
                "_id": 3033006,
                "Name": "出奇制胜",
                "Desc": "队伍中当前在场的我方目标数量不等于4时，我方全体造成的伤害提高<color style='color:#f29e38;'> 60% </color>。"
            },
            {
                "_id": 3033007,
                "Name": "步骑协同",
                "Desc": "我方全体施放终结技时无视目标<color style='color:#f29e38;'> 40% </color>防御，终结技造成伤害后，下一次战技无视目标<color style='color:#f29e38;'> 40% </color>防御。"
            },
            {
                "_id": 3033008,
                "Name": "锤砧战术",
                "Desc": "获得除自身外的友方目标施加的护盾效果或治疗后，自身受到的伤害降低<color style='color:#f29e38;'> 25% </color>，同时全属性抗性穿透提高<color style='color:#f29e38;'> 20% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。"
            }
        ],
        "FinalTagsEasy": [
            {
                "_id": 3033003,
                "Name": "反相",
                "Desc": "敌方目标每次受到攻击后，攻击者都会损失自身最大生命值<color style='color:#f29e38;'> 2% </color>的生命值，该效果不致命。"
            },
            {
                "_id": 3033005,
                "Name": "吸能",
                "Desc": "敌方目标每次受到攻击后都会使攻击者能量降低<color style='color:#f29e38;'> 2 </color>点，但攻击者能量达到上限时不会降低；敌方目标被消灭时固定恢复攻击者<color style='color:#f29e38;'> 10 </color>点能量。"
            },
            {
                "_id": 3033017,
                "Name": "龟裂",
                "Desc": "我方目标受到敌方攻击时会被施加【龟裂】效果，每层使持有者在受到攻击后额外损失最大生命值<color style='color:#f29e38;'> 0.8% </color>的生命值，该效果叠加层数无上限且不可驱散。持有【龟裂】的目标获得除自身外的友方目标施加的护盾效果或治疗后，双方均解除全部【龟裂】效果。"
            }
        ],
        "FinalTagsHard": [
            {
                "_id": 3033010,
                "Name": "反相+",
                "Desc": "敌方目标每次受到攻击后，攻击者都会损失自身最大生命值<color style='color:#f29e38;'> 3% </color>的生命值，该效果不致命。"
            },
            {
                "_id": 3033013,
                "Name": "吸能++",
                "Desc": "敌方目标每次受到攻击后都会使攻击者能量降低<color style='color:#f29e38;'> 4 </color>点，但攻击者能量达到上限时不会降低；敌方目标被消灭时固定恢复攻击者<color style='color:#f29e38;'> 10 </color>点能量。"
            },
            {
                "_id": 3033019,
                "Name": "龟裂++",
                "Desc": "我方目标受到敌方攻击时会被施加【龟裂++】效果，每层使持有者在受到攻击后额外损失最大生命值<color style='color:#f29e38;'> 1.6% </color>的生命值，该效果叠加层数无上限且不可驱散。持有【龟裂++】的目标获得除自身外的友方目标施加的护盾效果或治疗后，双方均解除全部【龟裂++】效果。"
            }
        ],
        "ElemFinal": [
            "Phys",
            "Ice",
            "Quantum"
        ],
        "FinalEasy": {
            "_id": 30501021,
            "Level": 100,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 343,
                "ATK": 1.2,
                "HP": 8.0
            },
            "Monsters": [
                [
                    {
                        "ID": 4023010,
                        "HP": 4687930,
                        "SPD": 158,
                        "Stance": 16
                    },
                    {
                        "ID": 4023020,
                        "HP": 3966710,
                        "SPD": 132,
                        "Stance": 16
                    }
                ],
                [
                    {
                        "ID": 4044010,
                        "HP": 43273200,
                        "SPD": 211,
                        "Stance": 20
                    }
                ]
            ]
        },
        "FinalHard": {
            "_id": 30501022,
            "Level": 120,
            "HardLevelGroup": 3,
            "EliteGroup": {
                "ID": 344,
                "ATK": 1.2,
                "HP": 8.0
            },
            "Monsters": [
                [
                    {
                        "ID": 4023010,
                        "HP": 18751720,
                        "SPD": 180,
                        "Stance": 16
                    },
                    {
                        "ID": 4023020,
                        "HP": 15866840,
                        "SPD": 150,
                        "Stance": 16
                    }
                ],
                [
                    {
                        "ID": 4044010,
                        "HP": 173092801,
                        "SPD": 240,
                        "Stance": 20
                    }
                ]
            ]
        },
        "TargetsTrial": [
            "不超过<color style='color:#f29e38;'> 4 </color>轮战斗胜利",
            "不超过<color style='color:#f29e38;'> 2 </color>轮战斗胜利",
            "没有角色无法战斗"
        ],
        "TargetsFinal": [
            "不超过<color style='color:#f29e38;'> 6 </color>轮战斗胜利",
            "不超过<color style='color:#f29e38;'> 4 </color>轮战斗胜利",
            "不超过<color style='color:#f29e38;'> 2 </color>轮战斗胜利"
        ],
        "RewardLine": 1,
        "BossGuides": [
            4044010
        ]
    }
}

var _schedule = [
    {
        "_id": 4003,
        "Name": "不协和音",
        "Time": "2025/12/17 - 2026/01/28"
    },
    {
        "_id": 4002,
        "Name": "烈阳幻域",
        "Time": "2025/11/05 - 2025/12/17"
    },
    {
        "_id": 4001,
        "Name": "智械残局",
        "Time": "2025/09/24 - 2025/11/05"
    }
]

var _dict = {
    "4003": 0,
    "4002": 1,
    "4001": 2
}

var _monster = {
    "3014020": {
        "1": "忆域迷因「何物朝向死亡」",
        "2": "monsterfigure/Monster_3014020.png",
        "3": [
            "Fire",
            "Wind",
            "Imaginary"
        ],
        "4": 2
    },
    "4033030": {
        "1": "黑日狮鹫",
        "2": "monsterfigure/Monster_4033030.png",
        "3": [
            "Phys",
            "Fire",
            "Quantum"
        ]
    },
    "4064010": {
        "1": "金血忆灵 · 裁定忘却之形",
        "2": "monsterfigure/Monster_4064010.png",
        "3": [
            "Phys",
            "Ice",
            "Imaginary"
        ],
        "4": 2,
        "5": 4
    },
    "4032010": {
        "1": "黑潮蚀刃",
        "2": "monsterfigure/Monster_4032010.png",
        "3": [
            "Elec",
            "Quantum",
            "Imaginary"
        ]
    },
    "3003020": {
        "1": "惊梦剧团的甜猿泰山",
        "2": "monsterfigure/Monster_3003020.png",
        "3": [
            "Phys",
            "Fire",
            "Imaginary"
        ]
    },
    "3013010": {
        "1": "忆域迷因「狂怒褪去之壳」",
        "2": "monsterfigure/Monster_3013010.png",
        "3": [
            "Elec",
            "Quantum",
            "Imaginary"
        ]
    },
    "4053010": {
        "1": "波涛夫人",
        "2": "monsterfigure/Monster_4053010.png",
        "3": [
            "Phys",
            "Fire",
            "Elec"
        ]
    },
    "803301014": {
        "1": "资深员工 · 组长",
        "2": "monsterfigure/Monster_8033010.png",
        "3": [
            "Fire",
            "Ice",
            "Imaginary"
        ]
    },
    "1013020": {
        "1": "自动机兵 · 齿狼",
        "2": "monsterfigure/Monster_1013020.png",
        "3": [
            "Ice",
            "Elec",
            "Imaginary"
        ]
    },
    "4053020": {
        "1": "飓风大母",
        "2": "monsterfigure/Monster_4053020.png",
        "3": [
            "Fire",
            "Ice",
            "Elec"
        ]
    },
    "4063010": {
        "1": "金血忆灵 · 翼蛇形",
        "2": "monsterfigure/Monster_4063010.png",
        "3": [
            "Phys",
            "Fire",
            "Ice"
        ]
    },
    "4052010": {
        "1": "浪花侍女",
        "2": "monsterfigure/Monster_4052010.png",
        "3": [
            "Phys",
            "Elec",
            "Wind"
        ]
    },
    "401501101": {
        "1": "至高，至阳，天空的化身",
        "2": "monsterfigure/Monster_4015010.png",
        "3": [
            "Phys",
            "Ice",
            "Quantum"
        ],
        "4": 4.6,
        "6": 50
    },
    "3002030": {
        "1": "惊梦剧团的气泡锂犬",
        "2": "monsterfigure/Monster_3002030.png",
        "3": [
            "Phys",
            "Elec",
            "Wind"
        ]
    },
    "4032050": {
        "1": "黑潮朽弓",
        "2": "monsterfigure/Monster_4032050.png",
        "3": [
            "Phys",
            "Ice",
            "Quantum"
        ]
    },
    "3012020": {
        "1": "忆域迷因「我心支离破碎」",
        "2": "monsterfigure/Monster_3012020.png",
        "3": [
            "Fire",
            "Ice",
            "Elec"
        ]
    },
    "802401107": {
        "1": "虫群 · 真蛰虫",
        "2": "monsterfigure/Monster_8024010.png",
        "3": [
            "Ice",
            "Quantum",
            "Imaginary"
        ],
        "4": 2
    },
    "2034010": {
        "1": "步离战首 · 呼雷",
        "2": "monsterfigure/Monster_2034010.png",
        "3": [
            "Phys",
            "Fire",
            "Wind"
        ],
        "4": 2
    },
    "2013020": {
        "1": "金人勾魂使",
        "2": "monsterfigure/Monster_2013020.png",
        "3": [
            "Phys",
            "Elec",
            "Imaginary"
        ]
    },
    "4023010": {
        "1": "正阳狮鹫",
        "2": "monsterfigure/Monster_4023010.png",
        "3": [
            "Phys",
            "Quantum",
            "Imaginary"
        ],
        "6": 50
    },
    "4044010": {
        "1": "第一位天才，隐德来希，赞达尔",
        "2": "monsterfigure/Monster_4044010.png",
        "3": [
            "Phys",
            "Ice",
            "Wind"
        ]
    },
    "4023020": {
        "1": "月夜天马",
        "2": "monsterfigure/Monster_4023020.png",
        "3": [
            "Fire",
            "Quantum",
            "Imaginary"
        ]
    },
    "2023020": {
        "1": "丰饶灵兽 · 长右",
        "2": "monsterfigure/Monster_2023020.png",
        "3": [
            "Fire",
            "Ice",
            "Wind"
        ]
    },
    "3004012": {
        "1": "昔在、今在、永在的剧目",
        "2": "monsterfigure/Monster_3004010.png",
        "3": [],
        "4": 2,
        "5": 0
    },
    "2033010": {
        "1": "咆哮灵柩",
        "2": "monsterfigure/Monster_2033010.png",
        "3": [
            "Elec",
            "Wind",
            "Imaginary"
        ]
    },
    "4033010": {
        "1": "黑潮蚀魔",
        "2": "monsterfigure/Monster_4033010.png",
        "3": [
            "Phys",
            "Wind",
            "Quantum"
        ]
    },
    "3004020": {
        "1": "奇想林中的蕉研组",
        "2": "monsterfigure/Monster_3004020.png",
        "3": [
            "Fire",
            "Ice",
            "Elec",
            "Imaginary"
        ],
        "4": 2,
        "5": 0
    },
    "2023030": {
        "1": "承露天人",
        "2": "monsterfigure/Monster_2023030.png",
        "3": [
            "Phys",
            "Ice",
            "Elec"
        ]
    },
    "3025016": {
        "1": "「齐响诗班」神主日",
        "2": "monsterfigure/Monster_3025010.png",
        "3": [
            "Fire",
            "Elec",
            "Imaginary"
        ],
        "4": 2.8,
        "5": 3
    }
}

var _bossguide = {
    "4064010": {
        "_id": 4064010,
        "Name": "金血忆灵 · 裁定忘却之形",
        "Icon": "mostericon/Monster_4064010.png",
        "Notes": [
            {
                "Title": "",
                "DescList": [
                    "• 具有 @480# 韧性，未被击破时减伤 @50%#，击破后易伤 @50%#，损失 @20%# 生命值，行动延后 @200%#",
                    "• 部分攻击命中护盾时，损失 @60# 韧性；召唤物被消灭时，损失 @60# 韧性",
                    "• 会施放【罪血枭首】：需要选择一名角色承担约 @5000# 伤害；且会基于此伤害@未被护盾抵挡#的部分的 @50%#，对该角色施加持续伤害"
                ]
            }
        ]
    },
    "4044010": {
        "_id": 4044010,
        "Name": "第一位天才，隐德来希，赞达尔",
        "Icon": "mostericon/Monster_4044010.png",
        "Notes": [
            {
                "Title": "演化形态：泰坦",
                "DescList": [
                    "• 每隔一段时间，会生成 @2# 个【泰坦眷属】（第一次 @42# 行动值，第二次 @100# 行动值）",
                    "• 生成的泰坦眷属和我方召唤的忆灵，累计总共达到 @4# 个时，立刻切换至【论证形态】，且受到的伤害永久提升 @50%# ，可叠加",
                    "• 会使 @1# 名我方目标@立即行动#且@激活终结技#，但施放终结技时损失 @50%# 生命值（不致命）"
                ]
            },
            {
                "Title": "论证形态：黑潮",
                "DescList": [
                    "• 不断生成和补充【黑潮造物】：每回合@可行动两次#，且损失 @20%# 生命值",
                    "• 敌方目标被消灭、我方角色被击败、忆灵消失，累计总共达到 @10# 个时，立刻切换至【演化形态】，且受到的伤害永久提升 @50%# ，可叠加",
                    "• 会使 @2# 名我方目标@立即行动#且@激活终结技#，但施放终结技时损失 @50%# 生命值（不致命）",
                    "• 切换形态时，造成我方全体@平均分摊#的巨额伤害"
                ]
            }
        ]
    }
}

var _rewardline = {
    "1": [
        {
            "Type": 2,
            "Count": "3⭐",
            "Reward": [
                {
                    "Icon": "236",
                    "Count": 1
                }
            ]
        },
        {
            "Type": 2,
            "Count": "6⭐",
            "Reward": [
                {
                    "Icon": "236",
                    "Count": 1
                }
            ]
        },
        {
            "Type": 2,
            "Count": "9⭐",
            "Reward": [
                {
                    "Icon": "236",
                    "Count": 1
                }
            ]
        },
        {
            "Type": 3,
            "Count": "1⭐",
            "Reward": [
                {
                    "Icon": "239",
                    "Count": 1
                },
                {
                    "Icon": "/headframe/226001",
                    "Count": 1
                }
            ]
        },
        {
            "Type": 3,
            "Count": "2⭐",
            "Reward": [
                {
                    "Icon": "/headframe/226002",
                    "Count": 1
                }
            ]
        },
        {
            "Type": 3,
            "Count": "3⭐",
            "Reward": [
                {
                    "Icon": "/headframe/226003",
                    "Count": 1
                }
            ]
        },
        {
            "Type": 3,
            "Count": "通关绝境 / 0轮王棋",
            "Reward": [
                {
                    "Icon": "/headframe/226004",
                    "Count": 1
                }
            ]
        }
    ]
}