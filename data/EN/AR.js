// Auto Generated

var _maze = {
    "4003": {
        "BuffA": [
            {
                "_id": 3033003,
                "Name": "Inversion",
                "Desc": "Each time after the enemy target is attacked, the attacker will lose HP equal to <color style='color:#f29e38;'>2%</color> of their own Max HP. This effect is Non-fatal."
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
                "Name": "Tempering",
                "Desc": "For every 1% HP the enemy target loses, reduces CRIT DMG dealt to them by <color style='color:#f29e38;'>3%</color>."
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
                "Name": "Taunting",
                "Desc": "Enemy target takes immediate action after being attacked <color style='color:#f29e38;'>6</color> time(s). This tally resets at the start of the enemy target's turn."
            },
            {
                "_id": 3033025,
                "Name": "Interference",
                "Desc": "After the enemy target uses an attack, randomly causes <color style='color:#f29e38;'>5%</color> or <color style='color:#f29e38;'>10%</color> action delay to the attacked target."
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
                "Name": "No Break No Rise",
                "Desc": "Increases all ally targets' Break Effect by <color style='color:#f29e38;'>60%</color>. Each time an enemy target's Toughness is reduced to 0, increases Break DMG taken by that target by <color style='color:#f29e38;'>15%</color>, stacking up to <color style='color:#f29e38;'>4</color> times."
            },
            {
                "_id": 3033033,
                "Name": "Impassioned Spirits",
                "Desc": "Increases all ally targets' ATK by <color style='color:#f29e38;'>40%</color>. When using \"Horizon's Echo From Afar,\" additionally increases all ally targets' ATK by <color style='color:#f29e38;'>20%</color>, this effect is stackable."
            },
            {
                "_id": 3033034,
                "Name": "Seize the Moment",
                "Desc": "Increases all ally targets' DMG by <color style='color:#f29e38;'>40%</color>. After an ally target uses an attack, applies Weakness corresponding to this unit's Type to the attacked enemy target. This effect is removed when the enemy target recovers from Weakness Break state."
            }
        ],
        "FinalTagsEasy": [
            {
                "_id": 3033028,
                "Name": "Resilient Armor+",
                "Desc": "Enemy target initially has <color style='color:#f29e38;'>3</color> stacks of \"Resilient Armor+,\" and each stack reduces DMG taken by <color style='color:#f29e38;'>15%</color>. Enemy targets lose 1 stack of \"Resilient Armor+\" each time their Toughness is reduced to 0. Stacks of this effect will reset at each of the enemy target's phase."
            },
            {
                "_id": 3033038,
                "Name": "Depowered",
                "Desc": "When entering combat, reduces ally target's Energy by <color style='color:#f29e38;'>50%</color> and decreases their Energy Regeneration Rate by <color style='color:#f29e38;'>50%</color> outside of their turn for <color style='color:#f29e38;'>2</color> turn(s)."
            },
            {
                "_id": 3033035,
                "Name": "Unending Refinement",
                "Desc": "After the enemy target takes DMG, reduces DMG taken by this unit by <color style='color:#f29e38;'>2%</color> and CRIT DMG taken by <color style='color:#f29e38;'>4%</color>, stacking up to <color style='color:#f29e38;'>10</color> time(s). These stacks are cleared when the enemy target's turn begins or when they enter the Weakness Break state. While the enemy target is in the Weakness Break state, stacks cannot be accumulated."
            }
        ],
        "FinalTagsHard": [
            {
                "_id": 3033029,
                "Name": "Resilient Armor++",
                "Desc": "Enemy target initially has <color style='color:#f29e38;'>4</color> stacks of \"Resilient Armor++,\" and each stack reduces DMG taken by <color style='color:#f29e38;'>15%</color>. Enemy targets lose 1 stack of \"Resilient Armor++\" each time their Toughness is reduced to 0. Stacks of this effect will reset at each of the enemy target's phase."
            },
            {
                "_id": 3033040,
                "Name": "Depowered++",
                "Desc": "When entering combat, reduces ally target's Energy by <color style='color:#f29e38;'>100%</color> and decreases their Energy Regeneration Rate by <color style='color:#f29e38;'>100%</color> outside of their turn for <color style='color:#f29e38;'>2</color> turn(s)."
            },
            {
                "_id": 3033036,
                "Name": "Unending Refinement+",
                "Desc": "After the enemy target takes DMG, reduces DMG taken by this unit by <color style='color:#f29e38;'>3%</color> and CRIT DMG taken by <color style='color:#f29e38;'>6%</color>, stacking up to <color style='color:#f29e38;'>10</color> time(s). These stacks are cleared when the enemy target's turn begins or when they enter the Weakness Break state. While the enemy target is in the Weakness Break state, stacks cannot be accumulated."
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
            "Achieve victory in no more than <color style='color:#f29e38;'>4</color> Cycles",
            "Achieve victory in no more than <color style='color:#f29e38;'>2</color> Cycles",
            "Have no downed characters"
        ],
        "TargetsFinal": [
            "Achieve victory in no more than <color style='color:#f29e38;'>6</color> Cycles",
            "Achieve victory in no more than <color style='color:#f29e38;'>4</color> Cycles",
            "Achieve victory in no more than <color style='color:#f29e38;'>2</color> Cycles"
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
                "Name": "Taunting",
                "Desc": "Enemy target takes immediate action after being attacked <color style='color:#f29e38;'>6</color> time(s). This tally resets at the start of the enemy target's turn."
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
                "Name": "Interference",
                "Desc": "After the enemy target uses an attack, randomly causes <color style='color:#f29e38;'>5%</color> or <color style='color:#f29e38;'>10%</color> action delay to the attacked target."
            },
            {
                "_id": 3033005,
                "Name": "Energy Absorption",
                "Desc": "After an enemy target receives an attack, reduces the attacker's Energy by <color style='color:#f29e38;'>2</color> points, except when the attacker's Energy is maxed. When an enemy target is defeated, the attacker regenerates <color style='color:#f29e38;'>10</color> Energy."
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
                "Name": "Resilient Armor",
                "Desc": "Enemy target initially has <color style='color:#f29e38;'>2</color> stacks of \"Resilient Armor,\" and each stack reduces DMG taken by <color style='color:#f29e38;'>15%</color>. Enemy targets lose 1 stack of \"Resilient Armor\" each time their Toughness is reduced to 0."
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
                "Name": "Sanguine Vitality",
                "Desc": "Increases CRIT DMG of all ally targets by <color style='color:#f29e38;'>50%</color>. When using \"Healing Rainbow\", the increased Max HP is further raised by <color style='color:#f29e38;'>60%</color>."
            },
            {
                "_id": 3033021,
                "Name": "Power Surge",
                "Desc": "Increases all allies' Basic ATK, Skill, and Ultimate DMG by <color style='color:#f29e38;'>80%</color>. When using \"Healing Rainbow,\" additionally increases all allies' ATK by <color style='color:#f29e38;'>2000</color> points."
            },
            {
                "_id": 3033022,
                "Name": "Fluid Dash",
                "Desc": "Increases all allies' DoT All-Type RES PEN by <color style='color:#f29e38;'>40%</color>. When using \"Healing Rainbow,\" additionally increases all allies' SPD by <color style='color:#f29e38;'>30%</color>."
            }
        ],
        "FinalTagsEasy": [
            {
                "_id": 3033012,
                "Name": "Energy Absorption+",
                "Desc": "After an enemy target receives an attack, reduces the attacker's Energy by <color style='color:#f29e38;'>3</color> points, except when the attacker's Energy is maxed. When an enemy target is defeated, the attacker regenerates <color style='color:#f29e38;'>10</color> Energy."
            },
            {
                "_id": 3033017,
                "Name": "Sunder",
                "Desc": "When ally targets are being attacked by enemies, the \"Sunder\" effect will be inflicted on them. Each stack additionally causes the holder to lose HP equal to <color style='color:#f29e38;'>0.8%</color> of their Max HP. This effect can be stacked indefinitely and cannot be dissipated. After targets with \"Sunder\" received a Shield from an ally target other than themselves or healing, all \"Sunder\" effects are dispelled on both targets."
            }
        ],
        "FinalTagsHard": [
            {
                "_id": 3033013,
                "Name": "Energy Absorption++",
                "Desc": "After an enemy target receives an attack, reduces the attacker's Energy by <color style='color:#f29e38;'>4</color> points, except when the attacker's Energy is maxed. When an enemy target is defeated, the attacker regenerates <color style='color:#f29e38;'>10</color> Energy."
            },
            {
                "_id": 3033019,
                "Name": "Sunder++",
                "Desc": "When ally targets are being attacked by enemies, the \"Sunder++\" effect will be inflicted on them. Each stack additionally causes the holder to lose HP equal to <color style='color:#f29e38;'>1.6%</color> of their Max HP. This effect can be stacked indefinitely and cannot be dissipated. After targets with \"Sunder++\" received a Shield from an ally target other than themselves or healing, all \"Sunder++\" effects are dispelled on both targets."
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
            "Achieve victory in no more than <color style='color:#f29e38;'>4</color> Cycles",
            "Achieve victory in no more than <color style='color:#f29e38;'>2</color> Cycles",
            "Have no downed characters"
        ],
        "TargetsFinal": [
            "Achieve victory in no more than <color style='color:#f29e38;'>6</color> Cycles",
            "Achieve victory in no more than <color style='color:#f29e38;'>4</color> Cycles",
            "Achieve victory in no more than <color style='color:#f29e38;'>2</color> Cycles"
        ],
        "RewardLine": 1
    },
    "4001": {
        "BuffA": [
            {
                "_id": 3033001,
                "Name": "Resilient Armor",
                "Desc": "Enemy target initially has <color style='color:#f29e38;'>2</color> stacks of \"Resilient Armor,\" and each stack reduces DMG taken by <color style='color:#f29e38;'>15%</color>. Enemy targets lose 1 stack of \"Resilient Armor\" each time their Toughness is reduced to 0."
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
                "Name": "Tempering",
                "Desc": "For every 1% HP the enemy target loses, reduces CRIT DMG dealt to them by <color style='color:#f29e38;'>3%</color>."
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
                "Name": "Inversion",
                "Desc": "Each time after the enemy target is attacked, the attacker will lose HP equal to <color style='color:#f29e38;'>2%</color> of their own Max HP. This effect is Non-fatal."
            },
            {
                "_id": 3033004,
                "Name": "Under Protection",
                "Desc": "All non-elite enemy targets won't have their HP and Toughness reduced, and increases their Effect RES by <color style='color:#f29e38;'>100%</color>. When all elite enemy targets are defeated, remaining enemy targets will also be eliminated."
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
                "Name": "Think Outside the Box",
                "Desc": "When the number of ally targets currently on the field is not 4, all allies' dealt DMG increases by <color style='color:#f29e38;'>60%</color>."
            },
            {
                "_id": 3033007,
                "Name": "Infantry and Cavalry",
                "Desc": "Whenever any ally uses their Ultimate, ignores <color style='color:#f29e38;'>40%</color> of target's DEF. After Ultimate deals DMG, the next Skill will ignore <color style='color:#f29e38;'>40%</color> of target's DEF."
            },
            {
                "_id": 3033008,
                "Name": "Hammer and Anvil",
                "Desc": "After receiving Shield effects or healing from ally targets (excluding this unit), reduces DMG taken by this unit by <color style='color:#f29e38;'>25%</color>, and increases All-Type RES PEN by <color style='color:#f29e38;'>20%</color> for <color style='color:#f29e38;'>2</color> turn(s)."
            }
        ],
        "FinalTagsEasy": [
            {
                "_id": 3033003,
                "Name": "Inversion",
                "Desc": "Each time after the enemy target is attacked, the attacker will lose HP equal to <color style='color:#f29e38;'>2%</color> of their own Max HP. This effect is Non-fatal."
            },
            {
                "_id": 3033005,
                "Name": "Energy Absorption",
                "Desc": "After an enemy target receives an attack, reduces the attacker's Energy by <color style='color:#f29e38;'>2</color> points, except when the attacker's Energy is maxed. When an enemy target is defeated, the attacker regenerates <color style='color:#f29e38;'>10</color> Energy."
            },
            {
                "_id": 3033017,
                "Name": "Sunder",
                "Desc": "When ally targets are being attacked by enemies, the \"Sunder\" effect will be inflicted on them. Each stack additionally causes the holder to lose HP equal to <color style='color:#f29e38;'>0.8%</color> of their Max HP. This effect can be stacked indefinitely and cannot be dissipated. After targets with \"Sunder\" received a Shield from an ally target other than themselves or healing, all \"Sunder\" effects are dispelled on both targets."
            }
        ],
        "FinalTagsHard": [
            {
                "_id": 3033010,
                "Name": "Inversion+",
                "Desc": "Each time after the enemy target is attacked, the attacker will lose HP equal to <color style='color:#f29e38;'>3%</color> of their own Max HP. This effect is Non-fatal."
            },
            {
                "_id": 3033013,
                "Name": "Energy Absorption++",
                "Desc": "After an enemy target receives an attack, reduces the attacker's Energy by <color style='color:#f29e38;'>4</color> points, except when the attacker's Energy is maxed. When an enemy target is defeated, the attacker regenerates <color style='color:#f29e38;'>10</color> Energy."
            },
            {
                "_id": 3033019,
                "Name": "Sunder++",
                "Desc": "When ally targets are being attacked by enemies, the \"Sunder++\" effect will be inflicted on them. Each stack additionally causes the holder to lose HP equal to <color style='color:#f29e38;'>1.6%</color> of their Max HP. This effect can be stacked indefinitely and cannot be dissipated. After targets with \"Sunder++\" received a Shield from an ally target other than themselves or healing, all \"Sunder++\" effects are dispelled on both targets."
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
            "Achieve victory in no more than <color style='color:#f29e38;'>4</color> Cycles",
            "Achieve victory in no more than <color style='color:#f29e38;'>2</color> Cycles",
            "Have no downed characters"
        ],
        "TargetsFinal": [
            "Achieve victory in no more than <color style='color:#f29e38;'>6</color> Cycles",
            "Achieve victory in no more than <color style='color:#f29e38;'>4</color> Cycles",
            "Achieve victory in no more than <color style='color:#f29e38;'>2</color> Cycles"
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
        "Name": "Dissonance",
        "Time": "2025/12/17 - 2026/01/28"
    },
    {
        "_id": 4002,
        "Name": "Illusory Realm of the Blazing Sun",
        "Time": "2025/11/05 - 2025/12/17"
    },
    {
        "_id": 4001,
        "Name": "Intellitron Endgame",
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
        "1": "Memory Zone Meme \"Something Unto Death\"",
        "2": "monsterfigure/Monster_3014020.png",
        "3": [
            "Fire",
            "Wind",
            "Imaginary"
        ],
        "4": 2
    },
    "4033030": {
        "1": "Dark Sun Gryphon",
        "2": "monsterfigure/Monster_4033030.png",
        "3": [
            "Phys",
            "Fire",
            "Quantum"
        ]
    },
    "4064010": {
        "1": "Ichor Memosprite: Judge of Oblivion",
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
        "1": "Tide-Eroded Blade",
        "2": "monsterfigure/Monster_4032010.png",
        "3": [
            "Elec",
            "Quantum",
            "Imaginary"
        ]
    },
    "3003020": {
        "1": "Dreamjolt Troupe's Sweet Gorilla",
        "2": "monsterfigure/Monster_3003020.png",
        "3": [
            "Phys",
            "Fire",
            "Imaginary"
        ]
    },
    "3013010": {
        "1": "Memory Zone Meme \"Shell of Faded Rage\"",
        "2": "monsterfigure/Monster_3013010.png",
        "3": [
            "Elec",
            "Quantum",
            "Imaginary"
        ]
    },
    "4053010": {
        "1": "Lady of Crashing Waves",
        "2": "monsterfigure/Monster_4053010.png",
        "3": [
            "Phys",
            "Fire",
            "Elec"
        ]
    },
    "803301014": {
        "1": "Senior Staff: Team Leader",
        "2": "monsterfigure/Monster_8033010.png",
        "3": [
            "Fire",
            "Ice",
            "Imaginary"
        ]
    },
    "1013020": {
        "1": "Automaton Direwolf",
        "2": "monsterfigure/Monster_1013020.png",
        "3": [
            "Ice",
            "Elec",
            "Imaginary"
        ]
    },
    "4053020": {
        "1": "Cyclonic Swarm Mother",
        "2": "monsterfigure/Monster_4053020.png",
        "3": [
            "Fire",
            "Ice",
            "Elec"
        ]
    },
    "4063010": {
        "1": "Ichor Memosprite: Winged Serpent",
        "2": "monsterfigure/Monster_4063010.png",
        "3": [
            "Phys",
            "Fire",
            "Ice"
        ]
    },
    "4052010": {
        "1": "Servant of Tides",
        "2": "monsterfigure/Monster_4052010.png",
        "3": [
            "Phys",
            "Elec",
            "Wind"
        ]
    },
    "401501101": {
        "1": "Sublime, Radiant, Avatar of the Sky",
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
        "1": "Dreamjolt Troupe's Bubble Hound",
        "2": "monsterfigure/Monster_3002030.png",
        "3": [
            "Phys",
            "Elec",
            "Wind"
        ]
    },
    "4032050": {
        "1": "Black Tide's Decrepit Bow",
        "2": "monsterfigure/Monster_4032050.png",
        "3": [
            "Phys",
            "Ice",
            "Quantum"
        ]
    },
    "3012020": {
        "1": "Memory Zone Meme \"Heartbreaker\"",
        "2": "monsterfigure/Monster_3012020.png",
        "3": [
            "Fire",
            "Ice",
            "Elec"
        ]
    },
    "802401107": {
        "1": "Swarm: True Sting",
        "2": "monsterfigure/Monster_8024010.png",
        "3": [
            "Ice",
            "Quantum",
            "Imaginary"
        ],
        "4": 2
    },
    "2034010": {
        "1": "Borisin Warhead: Hoolay",
        "2": "monsterfigure/Monster_2034010.png",
        "3": [
            "Phys",
            "Fire",
            "Wind"
        ],
        "4": 2
    },
    "2013020": {
        "1": "Aurumaton Spectral Envoy",
        "2": "monsterfigure/Monster_2013020.png",
        "3": [
            "Phys",
            "Elec",
            "Imaginary"
        ]
    },
    "4023010": {
        "1": "Noontide Gryphon",
        "2": "monsterfigure/Monster_4023010.png",
        "3": [
            "Phys",
            "Quantum",
            "Imaginary"
        ],
        "6": 50
    },
    "4044010": {
        "1": "First Genius, Entelechy, Zandar",
        "2": "monsterfigure/Monster_4044010.png",
        "3": [
            "Phys",
            "Ice",
            "Wind"
        ]
    },
    "4023020": {
        "1": "Moonlit Pegasus",
        "2": "monsterfigure/Monster_4023020.png",
        "3": [
            "Fire",
            "Quantum",
            "Imaginary"
        ]
    },
    "2023020": {
        "1": "Abundance Sprite: Malefic Ape",
        "2": "monsterfigure/Monster_2023020.png",
        "3": [
            "Fire",
            "Ice",
            "Wind"
        ]
    },
    "3004012": {
        "1": "The Past, Present, and Eternal Show",
        "2": "monsterfigure/Monster_3004010.png",
        "3": [],
        "4": 2,
        "5": 0
    },
    "2033010": {
        "1": "Howling Casket",
        "2": "monsterfigure/Monster_2033010.png",
        "3": [
            "Elec",
            "Wind",
            "Imaginary"
        ]
    },
    "4033010": {
        "1": "Black Tide's Corroded Daemon",
        "2": "monsterfigure/Monster_4033010.png",
        "3": [
            "Phys",
            "Wind",
            "Quantum"
        ]
    },
    "3004020": {
        "1": "Wonder Forest's Banacademic Office Staff",
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
        "1": "The Ascended",
        "2": "monsterfigure/Monster_2023030.png",
        "3": [
            "Phys",
            "Ice",
            "Elec"
        ]
    },
    "3025016": {
        "1": "\"Harmonious Choir\" The Great Septimus",
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
        "Name": "Ichor Memosprite: Judge of Oblivion",
        "Icon": "mostericon/Monster_4064010.png",
        "Notes": [
            {
                "Title": "",
                "DescList": [
                    "• Has @480# Toughness. When not Weakness Broken, DMG taken @-50%#. When Weakness Broken, DMG taken @+50%#, loses @20%# HP, and action is delayed by @200%#.",
                    "• When certain attacks hit a Shield, loses @60# Toughness. When a summon is defeated, loses @60# Toughness.",
                    "• Will use Hemotort Decapitation: You need to choose 1 character to take about @5000# DMG. Will apply DoT to this character equal to @50%# of the part of this DMG @not blocked by Shields#."
                ]
            }
        ]
    },
    "4044010": {
        "_id": 4044010,
        "Name": "First Genius, Entelechy, Zandar",
        "Icon": "mostericon/Monster_4044010.png",
        "Notes": [
            {
                "Title": "Evolution Mode: Titans",
                "DescList": [
                    "• Periodically summons @2# Titankins. (First summon @42# AV, second summon @100# AV)",
                    "• When the total number of summoned Titankins and summoned Memosprites reaches @4#, immediately switches to \"Disputation Mode,\" and permanently gains @50%# Vulnerability, stackable.",
                    "• Will cause @1# ally to @take action immediately# and @activate Ultimate#, but loses @50%# HP when casting Ultimate. (Non-fatal)"
                ]
            },
            {
                "Title": "Disputation Mode: Black Tide",
                "DescList": [
                    "• Black Tide Creatures will continuously appear. They @take action twice# and lose @20%# HP every turn.",
                    "• When the number of defeated enemies, defeated characters and disappeared Memosprites reaches @10#, will immediately switch to \"Evolution Mode,\" and permanently gains @50%# Vulnerability, stackable.",
                    "• Will cause @2# ally to @take action immediately# and @activate Ultimate#, but loses @50%# HP when casting Ultimate. (Non-fatal)",
                    "• When switching, deals massive DMG @equally distributed# among all allies."
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
            "Count": "Pass Zugzwang / 0 Cycle Checkmate",
            "Reward": [
                {
                    "Icon": "/headframe/226004",
                    "Count": 1
                }
            ]
        }
    ]
}