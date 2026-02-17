// Auto Generated

var _maze = {
    "4003": {
        "BuffA": [
            {
                "_id": 3033003,
                "Name": "反相",
                "Desc": "敵が攻撃を受けるたびに、攻撃者は自身の最大HP<color style='color:#f29e38;'> 2% </color>分のHPを失う。この効果は非致死性である。"
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
                "Name": "焼入れ",
                "Desc": "敵のHPが1%減少するにつき、味方がその敵に与える会心ダメージ-<color style='color:#f29e38;'> 3% </color>。"
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
                "Name": "挑発",
                "Desc": "敵は攻撃を<color style='color:#f29e38;'> 6 </color>回受けた後即座に行動する。攻撃回数のカウントは敵のターンが回ってきた時にクリアされる。"
            },
            {
                "_id": 3033025,
                "Name": "妨害",
                "Desc": "敵が攻撃を行った後、ターゲットの行動順を遅らせる。遅延幅はランダムに決められ、<color style='color:#f29e38;'> 5% </color>または<color style='color:#f29e38;'> 10% </color>になる。"
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
                "Desc": "味方全体の撃破特効+<color style='color:#f29e38;'> 60% </color>。敵の靭性を0にするたびに、その敵への弱点撃破ダメージ+<color style='color:#f29e38;'> 15% </color>。この効果は最大で<color style='color:#f29e38;'> 4 </color>層累積できる。"
            },
            {
                "_id": 3033033,
                "Name": "意気軒昂",
                "Desc": "味方全体の攻撃力+<color style='color:#f29e38;'> 40% </color>。「遥かなる地平の長音」を発動するたびに、さらに味方全体の攻撃力+<color style='color:#f29e38;'> 20% </color>。この効果は重ね掛け可能。"
            },
            {
                "_id": 3033034,
                "Name": "不意打ち",
                "Desc": "味方全体の与ダメージ+<color style='color:#f29e38;'> 40% </color>。味方が攻撃を行った後、攻撃された敵に自身の属性に対応する弱点を付与する。この効果は敵が弱点撃破状態から回復した時に解除される。"
            }
        ],
        "FinalTagsEasy": [
            {
                "_id": 3033028,
                "Name": "靭甲+",
                "Desc": "敵は初期状態で「靭甲+」を<color style='color:#f29e38;'> 3 </color>層持ち、1層につき敵の受けるダメージ-<color style='color:#f29e38;'> 15% </color>。敵の靭性が0になるたびに「靭甲+」が1層減少する。この効果の層数は敵の各段階でリセットされる。"
            },
            {
                "_id": 3033038,
                "Name": "エネルギーロス",
                "Desc": "戦闘に入る時、味方のEP-<color style='color:#f29e38;'> 50% </color>、自身のターン以外でのEP回復効率-<color style='color:#f29e38;'> 50% </color>。<color style='color:#f29e38;'> 2 </color>ターン継続。"
            },
            {
                "_id": 3033035,
                "Name": "百戦錬磨",
                "Desc": "敵が攻撃を受けるたびに、自身の受けるダメージ-<color style='color:#f29e38;'> 2% </color>、受ける会心ダメージ-<color style='color:#f29e38;'> 4% </color>。この効果は最大で<color style='color:#f29e38;'> 10 </color>層まで累積でき、敵のターンが回ってきた、または弱点撃破状態になった時に層数がクリアされる。また、敵が弱点撃破状態にある場合、この効果は重ね掛け不可。"
            }
        ],
        "FinalTagsHard": [
            {
                "_id": 3033029,
                "Name": "靭甲++",
                "Desc": "敵は初期状態で「靭甲++」を<color style='color:#f29e38;'> 4 </color>層持ち、1層につき敵の受けるダメージ-<color style='color:#f29e38;'> 15% </color>。敵の靭性が0になるたびに「靭甲++」が1層減少する。この効果の層数は敵の各段階でリセットされる。"
            },
            {
                "_id": 3033040,
                "Name": "エネルギーロス++",
                "Desc": "戦闘に入る時、味方のEP-<color style='color:#f29e38;'> 100% </color>、自身のターン以外でのEP回復効率-<color style='color:#f29e38;'> 100% </color>。<color style='color:#f29e38;'> 2 </color>ターン継続。"
            },
            {
                "_id": 3033036,
                "Name": "百戦錬磨+",
                "Desc": "敵が攻撃を受けるたびに、自身の受けるダメージ-<color style='color:#f29e38;'> 3% </color>、受ける会心ダメージ-<color style='color:#f29e38;'> 6% </color>。この効果は最大で<color style='color:#f29e38;'> 10 </color>層まで累積でき、敵のターンが回ってきた、または弱点撃破状態になった時に層数がクリアされる。また、敵が弱点撃破状態にある場合、この効果は重ね掛け不可。"
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
            "<color style='color:#f29e38;'> 4 </color>ラウンド以内に戦闘に勝利する",
            "<color style='color:#f29e38;'> 2 </color>ラウンド以内に戦闘に勝利する",
            "戦闘不能になったキャラがいない"
        ],
        "TargetsFinal": [
            "<color style='color:#f29e38;'> 6 </color>ラウンド以内に戦闘に勝利する",
            "<color style='color:#f29e38;'> 4 </color>ラウンド以内に戦闘に勝利する",
            "<color style='color:#f29e38;'> 2 </color>ラウンド以内に戦闘に勝利する"
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
                "Name": "挑発",
                "Desc": "敵は攻撃を<color style='color:#f29e38;'> 6 </color>回受けた後即座に行動する。攻撃回数のカウントは敵のターンが回ってきた時にクリアされる。"
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
                "Name": "妨害",
                "Desc": "敵が攻撃を行った後、ターゲットの行動順を遅らせる。遅延幅はランダムに決められ、<color style='color:#f29e38;'> 5% </color>または<color style='color:#f29e38;'> 10% </color>になる。"
            },
            {
                "_id": 3033005,
                "Name": "エネルギー吸収",
                "Desc": "敵が攻撃を受けるたびに、攻撃者のEP-<color style='color:#f29e38;'> 2 </color>。ただし、攻撃者のEPが満タンの場合、EPは減らない。敵が倒された時、攻撃者のEPを固定で<color style='color:#f29e38;'> 10 </color>回復する。"
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
                "Name": "靭甲",
                "Desc": "敵は初期状態で「靭甲」を<color style='color:#f29e38;'> 2 </color>層持ち、1層につき敵の受けるダメージ-<color style='color:#f29e38;'> 15% </color>。敵の靭性が0になるたびに「靭甲」が1層減少する。"
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
                "Name": "狂化の呼吸",
                "Desc": "味方全体の会心ダメージ+<color style='color:#f29e38;'> 50% </color>。「癒しの虹」を発動する時、さらに最大HPの増加量+<color style='color:#f29e38;'> 60% </color>。"
            },
            {
                "_id": 3033021,
                "Name": "火力急増",
                "Desc": "味方全体の通常攻撃ダメージ、戦闘スキルダメージ、必殺技ダメージ+<color style='color:#f29e38;'> 80% </color>。「癒しの虹」を発動する時、さらに味方全体の攻撃力+<color style='color:#f29e38;'> 2000 </color>。"
            },
            {
                "_id": 3033022,
                "Name": "流れる疾走",
                "Desc": "味方による持続ダメージの全属性耐性貫通+<color style='color:#f29e38;'> 40% </color>。「癒しの虹」を使用する時、さらに味方全体の速度+<color style='color:#f29e38;'> 30% </color>。"
            }
        ],
        "FinalTagsEasy": [
            {
                "_id": 3033012,
                "Name": "エネルギー吸収+",
                "Desc": "敵が攻撃を受けるたびに、攻撃者のEP-<color style='color:#f29e38;'> 3 </color>。ただし、攻撃者のEPが満タンの場合、EPは減らない。敵が倒された時、攻撃者のEPを固定で<color style='color:#f29e38;'> 10 </color>回復する。"
            },
            {
                "_id": 3033017,
                "Name": "亀裂",
                "Desc": "味方が敵の攻撃を受ける時、「亀裂」効果が付与され、1層につき攻撃を受けた後に追加で最大HP<color style='color:#f29e38;'> 0.8% </color>分のHPを失う。なお、この効果が累積できる層数に上限はなく、解除不能である。「亀裂」を持つターゲットが自身以外の味方によるバリアを獲得、または治癒を受けた後、自身とその味方はすべての「亀裂」効果を解除する。"
            }
        ],
        "FinalTagsHard": [
            {
                "_id": 3033013,
                "Name": "エネルギー吸収++",
                "Desc": "敵が攻撃を受けるたびに、攻撃者のEP-<color style='color:#f29e38;'> 4 </color>。ただし、攻撃者のEPが満タンの場合、EPは減らない。敵が倒された時、攻撃者のEPを固定で<color style='color:#f29e38;'> 10 </color>回復する。"
            },
            {
                "_id": 3033019,
                "Name": "亀裂++",
                "Desc": "味方が敵の攻撃を受ける時、「亀裂++」効果が付与され、1層につき攻撃を受けた後に追加で最大HP<color style='color:#f29e38;'> 1.6% </color>分のHPを失う。なお、この効果が累積できる層数に上限はなく、解除不能である。「亀裂++」を持つターゲットが自身以外の味方によるバリアを獲得、または治癒を受けた後、自身とその味方はすべての「亀裂++」効果を解除する。"
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
            "<color style='color:#f29e38;'> 4 </color>ラウンド以内に戦闘に勝利する",
            "<color style='color:#f29e38;'> 2 </color>ラウンド以内に戦闘に勝利する",
            "戦闘不能になったキャラがいない"
        ],
        "TargetsFinal": [
            "<color style='color:#f29e38;'> 6 </color>ラウンド以内に戦闘に勝利する",
            "<color style='color:#f29e38;'> 4 </color>ラウンド以内に戦闘に勝利する",
            "<color style='color:#f29e38;'> 2 </color>ラウンド以内に戦闘に勝利する"
        ],
        "RewardLine": 1
    },
    "4001": {
        "BuffA": [
            {
                "_id": 3033001,
                "Name": "靭甲",
                "Desc": "敵は初期状態で「靭甲」を<color style='color:#f29e38;'> 2 </color>層持ち、1層につき敵の受けるダメージ-<color style='color:#f29e38;'> 15% </color>。敵の靭性が0になるたびに「靭甲」が1層減少する。"
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
                "Name": "焼入れ",
                "Desc": "敵のHPが1%減少するにつき、味方がその敵に与える会心ダメージ-<color style='color:#f29e38;'> 3% </color>。"
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
                "Desc": "敵が攻撃を受けるたびに、攻撃者は自身の最大HP<color style='color:#f29e38;'> 2% </color>分のHPを失う。この効果は非致死性である。"
            },
            {
                "_id": 3033004,
                "Name": "庇護下",
                "Desc": "精鋭エネミー以外の敵のHPと靭性は減少せず、効果抵抗+<color style='color:#f29e38;'> 100% </color>。すべての精鋭エネミーが倒されると、ほかの敵も倒される。"
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
                "Name": "奇策勝ち",
                "Desc": "フィールド上にいる味方の数が4でない場合、味方全体の与ダメージ+<color style='color:#f29e38;'> 60% </color>。"
            },
            {
                "_id": 3033007,
                "Name": "歩騎連携",
                "Desc": "味方が必殺技を発動する時、ターゲットの防御力を<color style='color:#f29e38;'> 40% </color>無視する。必殺技でダメージを与えた後、次に発動する戦闘スキルはターゲットの防御力を<color style='color:#f29e38;'> 40% </color>無視する。"
            },
            {
                "_id": 3033008,
                "Name": "鉄床戦術",
                "Desc": "自身以外の味方によるバリアを獲得、または治癒を受けた後、受けるダメージ-<color style='color:#f29e38;'> 25% </color>。同時に全属性耐性貫通+<color style='color:#f29e38;'> 20% </color>、<color style='color:#f29e38;'> 2 </color>ターン継続。"
            }
        ],
        "FinalTagsEasy": [
            {
                "_id": 3033003,
                "Name": "反相",
                "Desc": "敵が攻撃を受けるたびに、攻撃者は自身の最大HP<color style='color:#f29e38;'> 2% </color>分のHPを失う。この効果は非致死性である。"
            },
            {
                "_id": 3033005,
                "Name": "エネルギー吸収",
                "Desc": "敵が攻撃を受けるたびに、攻撃者のEP-<color style='color:#f29e38;'> 2 </color>。ただし、攻撃者のEPが満タンの場合、EPは減らない。敵が倒された時、攻撃者のEPを固定で<color style='color:#f29e38;'> 10 </color>回復する。"
            },
            {
                "_id": 3033017,
                "Name": "亀裂",
                "Desc": "味方が敵の攻撃を受ける時、「亀裂」効果が付与され、1層につき攻撃を受けた後に追加で最大HP<color style='color:#f29e38;'> 0.8% </color>分のHPを失う。なお、この効果が累積できる層数に上限はなく、解除不能である。「亀裂」を持つターゲットが自身以外の味方によるバリアを獲得、または治癒を受けた後、自身とその味方はすべての「亀裂」効果を解除する。"
            }
        ],
        "FinalTagsHard": [
            {
                "_id": 3033010,
                "Name": "反相+",
                "Desc": "敵が攻撃を受けるたびに、攻撃者は自身の最大HP<color style='color:#f29e38;'> 3% </color>分のHPを失う。この効果は非致死性である。"
            },
            {
                "_id": 3033013,
                "Name": "エネルギー吸収++",
                "Desc": "敵が攻撃を受けるたびに、攻撃者のEP-<color style='color:#f29e38;'> 4 </color>。ただし、攻撃者のEPが満タンの場合、EPは減らない。敵が倒された時、攻撃者のEPを固定で<color style='color:#f29e38;'> 10 </color>回復する。"
            },
            {
                "_id": 3033019,
                "Name": "亀裂++",
                "Desc": "味方が敵の攻撃を受ける時、「亀裂++」効果が付与され、1層につき攻撃を受けた後に追加で最大HP<color style='color:#f29e38;'> 1.6% </color>分のHPを失う。なお、この効果が累積できる層数に上限はなく、解除不能である。「亀裂++」を持つターゲットが自身以外の味方によるバリアを獲得、または治癒を受けた後、自身とその味方はすべての「亀裂++」効果を解除する。"
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
            "<color style='color:#f29e38;'> 4 </color>ラウンド以内に戦闘に勝利する",
            "<color style='color:#f29e38;'> 2 </color>ラウンド以内に戦闘に勝利する",
            "戦闘不能になったキャラがいない"
        ],
        "TargetsFinal": [
            "<color style='color:#f29e38;'> 6 </color>ラウンド以内に戦闘に勝利する",
            "<color style='color:#f29e38;'> 4 </color>ラウンド以内に戦闘に勝利する",
            "<color style='color:#f29e38;'> 2 </color>ラウンド以内に戦闘に勝利する"
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
        "Name": "不協和音",
        "Time": "2025/12/17 - 2026/01/28"
    },
    {
        "_id": 4002,
        "Name": "烈日の幻域",
        "Time": "2025/11/05 - 2025/12/17"
    },
    {
        "_id": 4001,
        "Name": "オムニックの終局",
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
        "1": "記憶域ミーム「死へ向かうのは何物」",
        "2": "monsterfigure/Monster_3014020.png",
        "3": [
            "Fire",
            "Wind",
            "Imaginary"
        ],
        "4": 2
    },
    "4033030": {
        "1": "エクリプスグリフォン",
        "2": "monsterfigure/Monster_4033030.png",
        "3": [
            "Phys",
            "Fire",
            "Quantum"
        ]
    },
    "4064010": {
        "1": "黄金の血の記憶の精霊・忘却を定むもの",
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
        "1": "暗黒の潮の刃",
        "2": "monsterfigure/Monster_4032010.png",
        "3": [
            "Elec",
            "Quantum",
            "Imaginary"
        ]
    },
    "3003020": {
        "1": "ナイトメア劇団・スウィート・ゴリラ",
        "2": "monsterfigure/Monster_3003020.png",
        "3": [
            "Phys",
            "Fire",
            "Imaginary"
        ]
    },
    "3013010": {
        "1": "記憶域ミーム「怒りの抜け殻」",
        "2": "monsterfigure/Monster_3013010.png",
        "3": [
            "Elec",
            "Quantum",
            "Imaginary"
        ]
    },
    "4053010": {
        "1": "波濤の夫人",
        "2": "monsterfigure/Monster_4053010.png",
        "3": [
            "Phys",
            "Fire",
            "Elec"
        ]
    },
    "803301014": {
        "1": "ベテラン社員・チームリーダー",
        "2": "monsterfigure/Monster_8033010.png",
        "3": [
            "Fire",
            "Ice",
            "Imaginary"
        ]
    },
    "1013020": {
        "1": "自動機兵・ヴォルク",
        "2": "monsterfigure/Monster_1013020.png",
        "3": [
            "Ice",
            "Elec",
            "Imaginary"
        ]
    },
    "4053020": {
        "1": "颶風の母",
        "2": "monsterfigure/Monster_4053020.png",
        "3": [
            "Fire",
            "Ice",
            "Elec"
        ]
    },
    "4063010": {
        "1": "黄金の血の記憶の精霊・オフィス",
        "2": "monsterfigure/Monster_4063010.png",
        "3": [
            "Phys",
            "Fire",
            "Ice"
        ]
    },
    "4052010": {
        "1": "波の侍女",
        "2": "monsterfigure/Monster_4052010.png",
        "3": [
            "Phys",
            "Elec",
            "Wind"
        ]
    },
    "401501101": {
        "1": "至高、極陽、天空の化身",
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
        "1": "ナイトメア劇団・ソーダドッグ",
        "2": "monsterfigure/Monster_3002030.png",
        "3": [
            "Phys",
            "Elec",
            "Wind"
        ]
    },
    "4032050": {
        "1": "暗黒の潮の弓",
        "2": "monsterfigure/Monster_4032050.png",
        "3": [
            "Phys",
            "Ice",
            "Quantum"
        ]
    },
    "3012020": {
        "1": "記憶域ミーム「砕け散った心」",
        "2": "monsterfigure/Monster_3012020.png",
        "3": [
            "Fire",
            "Ice",
            "Elec"
        ]
    },
    "802401107": {
        "1": "スウォーム・真蟄虫",
        "2": "monsterfigure/Monster_8024010.png",
        "3": [
            "Ice",
            "Quantum",
            "Imaginary"
        ],
        "4": 2
    },
    "2034010": {
        "1": "歩離人の戦首・呼雷",
        "2": "monsterfigure/Monster_2034010.png",
        "3": [
            "Phys",
            "Fire",
            "Wind"
        ],
        "4": 2
    },
    "2013020": {
        "1": "金人・勾魂",
        "2": "monsterfigure/Monster_2013020.png",
        "3": [
            "Phys",
            "Elec",
            "Imaginary"
        ]
    },
    "4023010": {
        "1": "サンライトグリフォン",
        "2": "monsterfigure/Monster_4023010.png",
        "3": [
            "Phys",
            "Quantum",
            "Imaginary"
        ],
        "6": 50
    },
    "4044010": {
        "1": "一人目の天才、エンテレケイア、ザンダー",
        "2": "monsterfigure/Monster_4044010.png",
        "3": [
            "Phys",
            "Ice",
            "Wind"
        ]
    },
    "4023020": {
        "1": "ムーンライトペガサス",
        "2": "monsterfigure/Monster_4023020.png",
        "3": [
            "Fire",
            "Quantum",
            "Imaginary"
        ]
    },
    "2023020": {
        "1": "豊穣の霊獣・長右",
        "2": "monsterfigure/Monster_2023020.png",
        "3": [
            "Fire",
            "Ice",
            "Wind"
        ]
    },
    "3004012": {
        "1": "過去、今、そして永遠に続く演目",
        "2": "monsterfigure/Monster_3004010.png",
        "3": [],
        "4": 2,
        "5": 0
    },
    "2033010": {
        "1": "咆哮の棺",
        "2": "monsterfigure/Monster_2033010.png",
        "3": [
            "Elec",
            "Wind",
            "Imaginary"
        ]
    },
    "4033010": {
        "1": "暗黒の潮の魔獣",
        "2": "monsterfigure/Monster_4033010.png",
        "3": [
            "Phys",
            "Wind",
            "Quantum"
        ]
    },
    "3004020": {
        "1": "奇想ジャングルのバナ研",
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
        "1": "「ハルモニア聖歌隊」ディエス・ドミニ",
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
        "Name": "黄金の血の記憶の精霊・忘却を定むもの",
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
        "Name": "一人目の天才、エンテレケイア、ザンダー",
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