// Auto Generated

var _AvatarDataConfig_ = {
    "Navia": {
        "BallList": [
            {
                "When": "Gunbrella shot hits monster (Surging Blade not included)",
                "DropArray": [
                    {
                        "Num": 3,
                        "Chance": 0.5
                    },
                    {
                        "Num": 4,
                        "Chance": 0.5
                    }
                ]
            },
            {
                "When": "CD",
                "CD": 0.2
            }
        ],
        "EndureList": [
            {
                "Skill": "Elemental Skill Not Aiming",
                "Endure": 0.6
            },
            {
                "Skill": "Elemental Skill Aiming",
                "Endure": 0.3
            },
            {
                "Skill": "Elemental Burst Backswing",
                "Endure": 0.6
            }
        ],
        "WindZoneList": [
            {
                "Skill": "Hold E Suck Crystals<br>(At most 3 simultaneously)",
                "Target": "Crystal Shards",
                "Duration": 0,
                "Radius": 12.0,
                "Inner": 0.1,
                "Strength": 15.0,
                "Attenuation": 0.0,
                "Reverse": true
            },
            {
                "Skill": "Burst Casting Push",
                "Target": "Monsters and the Grass, weight ≤ 250",
                "Duration": 2.0,
                "Radius": 3.0,
                "Inner": 0.0,
                "Strength": -3.0,
                "Attenuation": 2.0,
                "Reverse": false
            },
            {
                "Skill": "Idle Animation Part 1",
                "Target": "Grass",
                "Duration": 0,
                "Radius": 5,
                "Inner": 0.0,
                "Strength": 0.3,
                "Attenuation": 0.5,
                "Reverse": false
            },
            {
                "Skill": "Idle Animation Part 2",
                "Target": "Grass",
                "Duration": 0,
                "Radius": 5,
                "Inner": 0.0,
                "Strength": 0.7,
                "Attenuation": 0.5,
                "Reverse": false
            },
            {
                "Skill": "Idle Animation Part 3",
                "Target": "Grass",
                "Duration": 0,
                "Radius": 5,
                "Inner": 0.0,
                "Strength": 4.0,
                "Attenuation": 2.0,
                "Reverse": false
            },
            {
                "Skill": "Idle Animation Part 4",
                "Target": "Grass",
                "Duration": 0,
                "Radius": 5,
                "Inner": 0.0,
                "Strength": 1.0,
                "Attenuation": 2.0,
                "Reverse": false
            }
        ],
        "OtherDataList": [
            "V5 Change: Normal Attack 1's AoE height increased by 0.2m.",
            "V3 Change: Buffed C1, C2, C6. Buffed Elemental Skill's Rosula Shardshot Base DMG and Surging Blade DMG. Nerfed Elemental Burst's Skill DMG and Fire Support DMG.",
            "V3 Change: When Navia gains 3 Crystal Shrapnels and is off-field, there will be a reminder effect on the active character.",
            "V3 Change: Adjusted the decision of whether not to show Burst's special camera when close to obstacles.",
            "V3 Change: Decreased Surging Blade's DMG AoE size and hitlag effect. Surging Blade can be triggered on gadgets.",
            "V2 Change: Burst's opening DMG can now knock back enemies.",
            "V2 Change: Can still generate elemental particles while off-field.",
            "Gunbrella's shooting only deals one instance of DMG. The actual DMG is <b>120%/140%/166.6%/200%</b> times the Rosula Shardshot Base DMG, when consuming 0/1/2/≥3 Crystal Shrapnels.",
            "Golden Rose Salute's Fire Support interval: 0.75s;<br>Every shot is directed at a <b>random opponent</b> within a 10m radius.",
            "<i>When more than 3 charges of Crystal Shrapnel are consumed, every charge consumed beyond those 3 will increase the damage dealt by that shot by an additional 15%.</i><br>- This adds to the <b>DMG Bonus</b> multiplier, so the actual increase is lower than 15% per consumption.",
            "C4's RES reduction is applied after the hit lands, therefore the first hit does not land on reduced RES",
            "Navia's Gunbrella DMG depends on the amount of projectiles that hit the enemy. The relationship is:<br>1: 100%<br>2: 105%<br>3: 110%<br>4: 115%<br>5: 120%<br>6: 136%<br>7: 140%<br>8: 160%<br>9: 166.6%<br>10: 190%<br>11: 200%"
        ]
    }
}

var _AvatarMats_ = {
    "Navia": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104171": 1,
                "101240": 3,
                "112080": 3
            },
            {
                "202": 40000,
                "104172": 3,
                "113050": 2,
                "101240": 10,
                "112080": 15
            },
            {
                "202": 60000,
                "104172": 6,
                "113050": 4,
                "101240": 20,
                "112081": 12
            },
            {
                "202": 80000,
                "104173": 3,
                "113050": 8,
                "101240": 30,
                "112081": 18
            },
            {
                "202": 100000,
                "104173": 6,
                "113050": 12,
                "101240": 45,
                "112082": 12
            },
            {
                "202": 120000,
                "104174": 6,
                "113050": 20,
                "101240": 60,
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
                "113054": 1
            },
            {
                "202": 260000,
                "104340": 6,
                "112082": 6,
                "113054": 1
            },
            {
                "202": 450000,
                "104340": 12,
                "112082": 9,
                "113054": 2
            },
            {
                "202": 700000,
                "104340": 16,
                "112082": 12,
                "113054": 2,
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
                "113054": 1
            },
            {
                "202": 260000,
                "104340": 6,
                "112082": 6,
                "113054": 1
            },
            {
                "202": 450000,
                "104340": 12,
                "112082": 9,
                "113054": 2
            },
            {
                "202": 700000,
                "104340": 16,
                "112082": 12,
                "113054": 2,
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
                "113054": 1
            },
            {
                "202": 260000,
                "104340": 6,
                "112082": 6,
                "113054": 1
            },
            {
                "202": 450000,
                "104340": 12,
                "112082": 9,
                "113054": 2
            },
            {
                "202": 700000,
                "104340": 16,
                "112082": 12,
                "113054": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Navia": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Drains Stamina over time to perform continuous spinning attacks against all nearby opponents.<br>At the end of the sequence, performs a more powerful slash. <br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_04",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Blunt Refusal",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "93.519%",
                                    "101.131%",
                                    "108.743%",
                                    "119.617%",
                                    "127.229%",
                                    "135.929%",
                                    "147.89%",
                                    "159.852%",
                                    "171.814%",
                                    "184.863%",
                                    "197.912%",
                                    "210.961%",
                                    "224.011%",
                                    "237.06%",
                                    "250.109%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "86.506%",
                                    "93.548%",
                                    "100.589%",
                                    "110.648%",
                                    "117.689%",
                                    "125.736%",
                                    "136.801%",
                                    "147.866%",
                                    "158.931%",
                                    "171.001%",
                                    "183.072%",
                                    "195.143%",
                                    "207.213%",
                                    "219.284%",
                                    "231.355%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "34.886%×3",
                                    "37.725%×3",
                                    "40.565%×3",
                                    "44.622%×3",
                                    "47.461%×3",
                                    "50.706%×3",
                                    "55.168%×3",
                                    "59.631%×3",
                                    "64.093%×3",
                                    "68.96%×3",
                                    "73.828%×3",
                                    "78.696%×3",
                                    "83.564%×3",
                                    "88.432%×3",
                                    "93.3%×3"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "133.432%",
                                    "144.292%",
                                    "155.153%",
                                    "170.668%",
                                    "181.529%",
                                    "193.941%",
                                    "211.008%",
                                    "228.075%",
                                    "245.142%",
                                    "263.76%",
                                    "282.379%",
                                    "300.997%",
                                    "319.615%",
                                    "338.233%",
                                    "356.852%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Cyclic DMG",
                                "ParamLevelList": [
                                    "62.522%",
                                    "67.611%",
                                    "72.7%",
                                    "79.97%",
                                    "85.059%",
                                    "90.875%",
                                    "98.872%",
                                    "106.869%",
                                    "114.866%",
                                    "123.59%",
                                    "132.314%",
                                    "141.038%",
                                    "149.762%",
                                    "158.486%",
                                    "167.21%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Final DMG",
                                "ParamLevelList": [
                                    "113.09%",
                                    "122.295%",
                                    "131.5%",
                                    "144.65%",
                                    "153.855%",
                                    "164.375%",
                                    "178.84%",
                                    "193.305%",
                                    "207.77%",
                                    "223.55%",
                                    "239.33%",
                                    "255.11%",
                                    "270.89%",
                                    "286.67%",
                                    "302.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s"
                                ]
                            },
                            {
                                "Desc": "Max Duration",
                                "ParamLevelList": [
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "74.588%",
                                    "80.659%",
                                    "86.73%",
                                    "95.403%",
                                    "101.474%",
                                    "108.413%",
                                    "117.953%",
                                    "127.493%",
                                    "137.033%",
                                    "147.441%",
                                    "157.849%",
                                    "168.256%",
                                    "178.664%",
                                    "189.071%",
                                    "199.479%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "149.144%/186.289%",
                                    "161.284%/201.452%",
                                    "173.423%/216.615%",
                                    "190.766%/238.277%",
                                    "202.905%/253.44%",
                                    "216.779%/270.769%",
                                    "235.856%/294.596%",
                                    "254.932%/318.424%",
                                    "274.009%/342.252%",
                                    "294.819%/368.246%",
                                    "315.63%/394.239%",
                                    "336.441%/420.233%",
                                    "357.252%/446.227%",
                                    "378.063%/472.221%",
                                    "398.873%/498.214%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 2,
                        "Desc": "When a character in the party obtains an Elemental Shard created from the Crystallize reaction, Navia will gain 1 charge of Crystal Shrapnel. Navia can hold up to 6 charges of Crystal Shrapnel at once.<br>When she fires, Navia will consume all Cyrstal Shrapnel charges and open her elegant yet lethal Gunbrella, firing multiple Rosula Shardshots that can penetrate opponents, dealing <color style='color:#FFE699;'>Geo DMG</color> to opponents hit.<br>When 0/1/2/3 or more charges of Crystal Shrapnel are consumed, 5/7/9/11 Rosula Shardshots will be fired respectively. The more Rosula Shardshots that strike a single opponent, the greater the DMG dealt to them. When all 11 Rosula Shardshots strike, they deal 200% of the original amount of DMG.<br>In addition, when more than 3 charges of Crystal Shrapnel are consumed, every charge consumed beyond those 3 will crease the damage dealt by that shot by an additional 15%.<br><br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode, continually collecting Elemental Shards created by Crystallize reactions. When released, fire Rosula Shardshots with the same effect as when the skill is tapped.<br><br>2 initial uses.<br><br><color style='color:#FFD780;'>Arkhe: Ousia</color><br>Periodically, when Navia fires her Gunbrella, a Surging Blade will be summoned, dealing ousia-aligned <color style='color:#FFE699;'>Geo DMG</color>.<br><br><i>\"Maintaining the appropriate distance with those whom distance should be maintained is an essential part of etiquette. Naturally, there are also many ways to do this...\"</i>",
                        "Icon": "Skill_S_Navia_01",
                        "Lock": 10.0,
                        "Name": "Ceremonial Crystalshot",
                        "ParamDesc": [
                            {
                                "Desc": "Rosula Shardshot Base DMG",
                                "ParamLevelList": [
                                    "307.2%",
                                    "330.24%",
                                    "353.28%",
                                    "384.0%",
                                    "407.04%",
                                    "430.08%",
                                    "460.8%",
                                    "491.52%",
                                    "522.24%",
                                    "552.96%",
                                    "583.68%",
                                    "614.4%",
                                    "652.8%",
                                    "691.2%",
                                    "729.6%"
                                ]
                            },
                            {
                                "Desc": "Surging Blade DMG",
                                "ParamLevelList": [
                                    "33.6%",
                                    "36.12%",
                                    "38.64%",
                                    "42.0%",
                                    "44.52%",
                                    "47.04%",
                                    "50.4%",
                                    "53.76%",
                                    "57.12%",
                                    "60.48%",
                                    "63.84%",
                                    "67.2%",
                                    "71.4%",
                                    "75.6%",
                                    "79.8%"
                                ]
                            },
                            {
                                "Desc": "Surging Blade Interval",
                                "ParamLevelList": [
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s"
                                ]
                            },
                            {
                                "Desc": "",
                                "ParamLevelList": [
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "On the orders of the President of the Spina di Rosula, call for a magnificent Golden Rose Salute. Unleashes a massive bombardment on opponents in front of her, dealing <color style='color:#FFE699;'>Aoe Geo DMG</color> and providing Fire Support for a duration afterward, periodically dealing <color style='color:#FFE699;'>Geo DMG</color>.<br>When attacks from Golden Rose's Salute hit opponents, Navia will gain 1 charge of Crystal Shrapnel. This effect can be triggered up to once every 2.4s.<br><br><i>\"The Spina di Rosula's salute is a preemptive celebration of the successful conclusion of our negotiations and is fired just before talks begin. Don't misunderstand, it isn't in any way, shape, or form some kind of threat.\"</i>",
                        "Icon": "Skill_E_Navia_01",
                        "Lock": 15.0,
                        "Name": "As the Sunlit Sky's Singing Salute",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "76.0%",
                                    "81.7%",
                                    "87.4%",
                                    "95.0%",
                                    "100.7%",
                                    "106.4%",
                                    "114.0%",
                                    "121.6%",
                                    "129.2%",
                                    "136.8%",
                                    "144.4%",
                                    "152.0%",
                                    "161.5%",
                                    "171.0%",
                                    "180.5%"
                                ]
                            },
                            {
                                "Desc": "Fire Support DMG",
                                "ParamLevelList": [
                                    "48.4%",
                                    "52.03%",
                                    "55.66%",
                                    "60.5%",
                                    "64.13%",
                                    "67.76%",
                                    "72.6%",
                                    "77.44%",
                                    "82.28%",
                                    "87.12%",
                                    "91.96%",
                                    "96.8%",
                                    "102.85%",
                                    "108.9%",
                                    "114.95%"
                                ]
                            },
                            {
                                "Desc": "Fire Support Duration",
                                "ParamLevelList": [
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "For 4s after using <color style='color:#FFD780;'>Ceremonial Crystalshot</color>, the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be converted into <color style='color:#FFE699;'>Geo DMG</color> which cannot be overridden by other Elemental infusions, and the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be increased by 40%.",
                        "Icon": "UI_Talent_S_Navia_05",
                        "Name": "Undisclosed Distribution Channels"
                    },
                    {
                        "Desc": "For each <color style='color:#FF9999;'>Pyro</color>/<color style='color:#FFACFF;'>Electro</color>/<color style='color:#99FFFF;'>Cryo</color>/<color style='color:#80C0FF;'>Hydro</color> party member, Navia gains 20% increased ATK. This effect can stack up to 2 times.",
                        "Icon": "UI_Talent_S_Navia_06",
                        "Name": "Mutual Assistance Network"
                    },
                    {
                        "Desc": "Gains 25% more rewards when dispatched on a Fontaine Expedition for 20 hours.",
                        "Icon": "UI_Talent_S_Navia_07",
                        "Name": "Painstaking Transaction"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "Each charge of Crystal Shrapnel consumed when Navia uses <color style='color:#FFD780;'>Ceremonial Crystalshot</color> will restore 2 Energy to her and decrease the CD of <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> by 1s. Up to 6 Energy can be gained this way, and the CD of Ceremonial Crystalshot can be decreased by up to 3s.",
                        "Icon": "UI_Talent_S_Navia_01",
                        "Name": "A Lady's Rules for Keeping a Courteous Distance",
                        "Level": 1
                    },
                    {
                        "Desc": "The CRIT Rate of <color style='color:#FFD780;'>Ceremonial Crystalshot</color> is increased by 8% for each charge of Crystal Shrapnel consumed. CRIT Rate can be increased by up to 24% in this way.<br>In addition, when Ceremonial Crystalshot hits an opponent, one shot of Fire Support from <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> will strike near the location of the hit. Up to one instance of Fire Support can be triggered each time Ceremonial Crystalshot is used, and DMG dealt by Fire Support in this way is considered Elemental Burst DMG.",
                        "Icon": "UI_Talent_S_Navia_02",
                        "Name": "The President's Pursuit of Victory",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Ceremonial Crystalshot</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Navia_01",
                        "Name": "Businesswoman's Broad Vision",
                        "Level": 3
                    },
                    {
                        "Desc": "When <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> hits an opponent, that opponent's <color style='color:#FFE699;'>Geo RES</color> will be decreased by 20% for 8s.",
                        "Icon": "UI_Talent_S_Navia_03",
                        "Name": "The Oathsworn Never Capitulate",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Navia_02",
                        "Name": "Negotiator's Resolute Negotiations",
                        "Level": 5
                    },
                    {
                        "Desc": "If more than 3 charges of Crystal Shrapnel are consumed when using <color style='color:#FFD780;'>Ceremonial Crystalshot</color>, each charge consumed beyond the first 3 increases the CRIT DMG of that Ceremonial Crystalshot by 35%, and any charges consumed beyond the first 3 are returned to Navia.",
                        "Icon": "UI_Talent_S_Navia_04",
                        "Name": "The Flexible Finesse of the Spina's President",
                        "Level": 6
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Drains Stamina over time to perform continuous spinning attacks against all nearby opponents.<br>At the end of the sequence, performs a more powerful slash. <br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_04",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Blunt Refusal",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "93.519%",
                                    "101.131%",
                                    "108.743%",
                                    "119.617%",
                                    "127.229%",
                                    "135.929%",
                                    "147.89%",
                                    "159.852%",
                                    "171.814%",
                                    "184.863%",
                                    "197.912%",
                                    "210.961%",
                                    "224.011%",
                                    "237.06%",
                                    "250.109%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "86.506%",
                                    "93.548%",
                                    "100.589%",
                                    "110.648%",
                                    "117.689%",
                                    "125.736%",
                                    "136.801%",
                                    "147.866%",
                                    "158.931%",
                                    "171.001%",
                                    "183.072%",
                                    "195.143%",
                                    "207.213%",
                                    "219.284%",
                                    "231.355%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "34.886%×3",
                                    "37.725%×3",
                                    "40.565%×3",
                                    "44.622%×3",
                                    "47.461%×3",
                                    "50.706%×3",
                                    "55.168%×3",
                                    "59.631%×3",
                                    "64.093%×3",
                                    "68.96%×3",
                                    "73.828%×3",
                                    "78.696%×3",
                                    "83.564%×3",
                                    "88.432%×3",
                                    "93.3%×3"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "133.432%",
                                    "144.292%",
                                    "155.153%",
                                    "170.668%",
                                    "181.529%",
                                    "193.941%",
                                    "211.008%",
                                    "228.075%",
                                    "245.142%",
                                    "263.76%",
                                    "282.379%",
                                    "300.997%",
                                    "319.615%",
                                    "338.233%",
                                    "356.852%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Cyclic DMG",
                                "ParamLevelList": [
                                    "62.522%",
                                    "67.611%",
                                    "72.7%",
                                    "79.97%",
                                    "85.059%",
                                    "90.875%",
                                    "98.872%",
                                    "106.869%",
                                    "114.866%",
                                    "123.59%",
                                    "132.314%",
                                    "141.038%",
                                    "149.762%",
                                    "158.486%",
                                    "167.21%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Final DMG",
                                "ParamLevelList": [
                                    "113.09%",
                                    "122.295%",
                                    "131.5%",
                                    "144.65%",
                                    "153.855%",
                                    "164.375%",
                                    "178.84%",
                                    "193.305%",
                                    "207.77%",
                                    "223.55%",
                                    "239.33%",
                                    "255.11%",
                                    "270.89%",
                                    "286.67%",
                                    "302.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s"
                                ]
                            },
                            {
                                "Desc": "Max Duration",
                                "ParamLevelList": [
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "74.588%",
                                    "80.659%",
                                    "86.73%",
                                    "95.403%",
                                    "101.474%",
                                    "108.413%",
                                    "117.953%",
                                    "127.493%",
                                    "137.033%",
                                    "147.441%",
                                    "157.849%",
                                    "168.256%",
                                    "178.664%",
                                    "189.071%",
                                    "199.479%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "149.144%/186.289%",
                                    "161.284%/201.452%",
                                    "173.423%/216.615%",
                                    "190.766%/238.277%",
                                    "202.905%/253.44%",
                                    "216.779%/270.769%",
                                    "235.856%/294.596%",
                                    "254.932%/318.424%",
                                    "274.009%/342.252%",
                                    "294.819%/368.246%",
                                    "315.63%/394.239%",
                                    "336.441%/420.233%",
                                    "357.252%/446.227%",
                                    "378.063%/472.221%",
                                    "398.873%/498.214%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 2,
                        "Desc": "When a character in the party obtains an Elemental Shard created from the Crystallize reaction, Navia will gain 1 Crystal Shrapnel charge. Navia can hold up to 6 charges of Crystal Shrapnel at once. Each time Crystal Shrapnel gain is triggered, the duration of the Shards you have already will be reset.<br>When she fires, Navia will consume all Cyrstal Shrapnel charges and open her elegant yet lethal Gunbrella, firing multiple Rosula Shardshots that can penetrate opponents, dealing <color style='color:#FFE699;'>Geo DMG</color> to opponents hit.<br>When 0/1/2/3 or more charges of Crystal Shrapnel are consumed, 5/7/9/11 Rosula Shardshots will be fired respectively. The more Rosula Shardshots that strike a single opponent, the greater the DMG dealt to them. When all 11 Rosula Shardshots strike, they deal 200% of the original amount of DMG.<br>In addition, when more than 3 charges of Crystal Shrapnel are consumed, every charge consumed beyond those 3 will crease the damage dealt by that shot by an additional 15%.<br><br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode, continually collecting Elemental Shards created by Crystallize reactions. When released, fire Rosula Shardshots with the same effect as when the skill is tapped.<br><br>2 initial uses.<br><br><color style='color:#FFD780;'>Arkhe: Ousia</color><br>Periodically, when Navia fires her Gunbrella, a Surging Blade will be summoned, dealing ousia-aligned <color style='color:#FFE699;'>Geo DMG</color>.<br><br><i>\"Maintaining the appropriate distance with those whom distance should be maintained is an essential part of etiquette. Naturally, there are also many ways to do this...\"</i>",
                        "Icon": "Skill_S_Navia_01",
                        "Lock": 10.0,
                        "Name": "Ceremonial Crystalshot",
                        "ParamDesc": [
                            {
                                "Desc": "Rosula Shardshot Base DMG",
                                "ParamLevelList": [
                                    "307.2%",
                                    "330.24%",
                                    "353.28%",
                                    "384.0%",
                                    "407.04%",
                                    "430.08%",
                                    "460.8%",
                                    "491.52%",
                                    "522.24%",
                                    "552.96%",
                                    "583.68%",
                                    "614.4%",
                                    "652.8%",
                                    "691.2%",
                                    "729.6%"
                                ]
                            },
                            {
                                "Desc": "Crystal Shrapnel Duration",
                                "ParamLevelList": [
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s"
                                ]
                            },
                            {
                                "Desc": "Surging Blade DMG",
                                "ParamLevelList": [
                                    "33.6%",
                                    "36.12%",
                                    "38.64%",
                                    "42.0%",
                                    "44.52%",
                                    "47.04%",
                                    "50.4%",
                                    "53.76%",
                                    "57.12%",
                                    "60.48%",
                                    "63.84%",
                                    "67.2%",
                                    "71.4%",
                                    "75.6%",
                                    "79.8%"
                                ]
                            },
                            {
                                "Desc": "Surging Blade Interval",
                                "ParamLevelList": [
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "On the orders of the President of the Spina di Rosula, call for a magnificent Golden Rose Salute. Unleashes a massive bombardment on opponents in front of her, dealing <color style='color:#FFE699;'>Aoe Geo DMG</color> and providing Fire Support for a duration afterward, periodically dealing <color style='color:#FFE699;'>Geo DMG</color>.<br>When attacks from Golden Rose's Salute hit opponents, Navia will gain 1 charge of Crystal Shrapnel. This effect can be triggered up to once every 2.4s.<br><br><i>\"The Spina di Rosula's salute is a preemptive celebration of the successful conclusion of our negotiations and is fired just before talks begin. Don't misunderstand, it isn't in any way, shape, or form some kind of threat.\"</i>",
                        "Icon": "Skill_E_Navia_01",
                        "Lock": 15.0,
                        "Name": "As the Sunlit Sky's Singing Salute",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "76.0%",
                                    "81.7%",
                                    "87.4%",
                                    "95.0%",
                                    "100.7%",
                                    "106.4%",
                                    "114.0%",
                                    "121.6%",
                                    "129.2%",
                                    "136.8%",
                                    "144.4%",
                                    "152.0%",
                                    "161.5%",
                                    "171.0%",
                                    "180.5%"
                                ]
                            },
                            {
                                "Desc": "Fire Support DMG",
                                "ParamLevelList": [
                                    "48.4%",
                                    "52.03%",
                                    "55.66%",
                                    "60.5%",
                                    "64.13%",
                                    "67.76%",
                                    "72.6%",
                                    "77.44%",
                                    "82.28%",
                                    "87.12%",
                                    "91.96%",
                                    "96.8%",
                                    "102.85%",
                                    "108.9%",
                                    "114.95%"
                                ]
                            },
                            {
                                "Desc": "Fire Support Duration",
                                "ParamLevelList": [
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "For 4s after using <color style='color:#FFD780;'>Ceremonial Crystalshot</color>, the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be converted into <color style='color:#FFE699;'>Geo DMG</color> which cannot be overridden by other Elemental infusions, and the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be increased by 40%.",
                        "Icon": "UI_Talent_S_Navia_05",
                        "Name": "Undisclosed Distribution Channels"
                    },
                    {
                        "Desc": "For each <color style='color:#FF9999;'>Pyro</color>/<color style='color:#FFACFF;'>Electro</color>/<color style='color:#99FFFF;'>Cryo</color>/<color style='color:#80C0FF;'>Hydro</color> party member, Navia gains 20% increased ATK. This effect can stack up to 2 times.",
                        "Icon": "UI_Talent_S_Navia_06",
                        "Name": "Mutual Assistance Network"
                    },
                    {
                        "Desc": "Gains 25% more rewards when dispatched on a Fontaine Expedition for 20 hours.",
                        "Icon": "UI_Talent_S_Navia_07",
                        "Name": "Painstaking Transaction"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "Each charge of Crystal Shrapnel consumed when Navia uses <color style='color:#FFD780;'>Ceremonial Crystalshot</color> will restore 2 Energy to her and decrease the CD of <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> by 1s. Up to 6 Energy can be gained this way, and the CD of \"As the Sunlit Sky's Singing Salute\" can be decreased by up to 3s.",
                        "Icon": "UI_Talent_S_Navia_01",
                        "Name": "A Lady's Rules for Keeping a Courteous Distance",
                        "Level": 1
                    },
                    {
                        "Desc": "The CRIT Rate of <color style='color:#FFD780;'>Ceremonial Crystalshot</color> is increased by 8% for each charge of Crystal Shrapnel consumed. CRIT Rate can be increased by up to 24% in this way.<br>In addition, when Ceremonial Crystalshot hits an opponent, one shot of Fire Support from <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> will strike near the location of the hit. Up to one instance of Fire Support can be triggered each time Ceremonial Crystalshot is used, and DMG dealt by Fire Support in this way is considered Elemental Burst DMG.",
                        "Icon": "UI_Talent_S_Navia_02",
                        "Name": "The President's Pursuit of Victory",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Ceremonial Crystalshot</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Navia_01",
                        "Name": "Businesswoman's Broad Vision",
                        "Level": 3
                    },
                    {
                        "Desc": "When <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> hits an opponent, that opponent's <color style='color:#FFE699;'>Geo RES</color> will be decreased by 20% for 8s.",
                        "Icon": "UI_Talent_S_Navia_03",
                        "Name": "The Oathsworn Never Capitulate",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Navia_02",
                        "Name": "Negotiator's Resolute Negotiations",
                        "Level": 5
                    },
                    {
                        "Desc": "If more than 3 charges of Crystal Shrapnel are consumed when using <color style='color:#FFD780;'>Ceremonial Crystalshot</color>, each charge consumed beyond the first 3 increases the CRIT DMG of that Ceremonial Crystalshot by 35%, and any charges consumed beyond the first 3 are returned to Navia.",
                        "Icon": "UI_Talent_S_Navia_04",
                        "Name": "The Flexible Finesse of the Spina's President",
                        "Level": 6
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Drains Stamina over time to perform continuous spinning attacks against all nearby opponents.<br>At the end of the sequence, performs a more powerful slash. <br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_04",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Blunt Refusal",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "93.519%",
                                    "101.131%",
                                    "108.743%",
                                    "119.617%",
                                    "127.229%",
                                    "135.929%",
                                    "147.89%",
                                    "159.852%",
                                    "171.814%",
                                    "184.863%",
                                    "197.912%",
                                    "210.961%",
                                    "224.011%",
                                    "237.06%",
                                    "250.109%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "86.506%",
                                    "93.548%",
                                    "100.589%",
                                    "110.648%",
                                    "117.689%",
                                    "125.736%",
                                    "136.801%",
                                    "147.866%",
                                    "158.931%",
                                    "171.001%",
                                    "183.072%",
                                    "195.143%",
                                    "207.213%",
                                    "219.284%",
                                    "231.355%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "34.886%×3",
                                    "37.725%×3",
                                    "40.565%×3",
                                    "44.622%×3",
                                    "47.461%×3",
                                    "50.706%×3",
                                    "55.168%×3",
                                    "59.631%×3",
                                    "64.093%×3",
                                    "68.96%×3",
                                    "73.828%×3",
                                    "78.696%×3",
                                    "83.564%×3",
                                    "88.432%×3",
                                    "93.3%×3"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "133.432%",
                                    "144.292%",
                                    "155.153%",
                                    "170.668%",
                                    "181.529%",
                                    "193.941%",
                                    "211.008%",
                                    "228.075%",
                                    "245.142%",
                                    "263.76%",
                                    "282.379%",
                                    "300.997%",
                                    "319.615%",
                                    "338.233%",
                                    "356.852%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Cyclic DMG",
                                "ParamLevelList": [
                                    "62.522%",
                                    "67.611%",
                                    "72.7%",
                                    "79.97%",
                                    "85.059%",
                                    "90.875%",
                                    "98.872%",
                                    "106.869%",
                                    "114.866%",
                                    "123.59%",
                                    "132.314%",
                                    "141.038%",
                                    "149.762%",
                                    "158.486%",
                                    "167.21%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Final DMG",
                                "ParamLevelList": [
                                    "113.09%",
                                    "122.295%",
                                    "131.5%",
                                    "144.65%",
                                    "153.855%",
                                    "164.375%",
                                    "178.84%",
                                    "193.305%",
                                    "207.77%",
                                    "223.55%",
                                    "239.33%",
                                    "255.11%",
                                    "270.89%",
                                    "286.67%",
                                    "302.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s"
                                ]
                            },
                            {
                                "Desc": "Max Duration",
                                "ParamLevelList": [
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "74.588%",
                                    "80.659%",
                                    "86.73%",
                                    "95.403%",
                                    "101.474%",
                                    "108.413%",
                                    "117.953%",
                                    "127.493%",
                                    "137.033%",
                                    "147.441%",
                                    "157.849%",
                                    "168.256%",
                                    "178.664%",
                                    "189.071%",
                                    "199.479%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "149.144%/186.289%",
                                    "161.284%/201.452%",
                                    "173.423%/216.615%",
                                    "190.766%/238.277%",
                                    "202.905%/253.44%",
                                    "216.779%/270.769%",
                                    "235.856%/294.596%",
                                    "254.932%/318.424%",
                                    "274.009%/342.252%",
                                    "294.819%/368.246%",
                                    "315.63%/394.239%",
                                    "336.441%/420.233%",
                                    "357.252%/446.227%",
                                    "378.063%/472.221%",
                                    "398.873%/498.214%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 2,
                        "Desc": "When a character in the party obtains an Elemental Shard created from the Crystallize reaction, Navia will gain 1 Crystal Shrapnel charge. Navia can hold up to 6 charges of Crystal Shrapnel at once. Each time Crystal Shrapnel gain is triggered, the duration of the Shards you have already will be reset.<br>When she fires, Navia will consume all Crystal Shrapnel charges and open her elegant yet lethal Gunbrella, firing multiple Rosula Shardshots that can penetrate opponents, dealing <color style='color:#FFE699;'>Geo DMG</color> to opponents hit.<br>When 0/1/2/3 or more charges of Crystal Shrapnel are consumed, 5/7/9/11 Rosula Shardshots will be fired respectively. The more Rosula Shardshots that strike a single opponent, the greater the DMG dealt to them. When all 11 Rosula Shardshots strike, they deal 200% of the original amount of DMG.<br>In addition, when more than 3 charges of Crystal Shrapnel are consumed, every charge consumed beyond those 3 will increase the damage dealt by that shot by an additional 15%.<br><br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode, continually collecting Elemental Shards created by Crystallize reactions. When released, fire Rosula Shardshots with the same effect as when the skill is tapped.<br><br>Two initial uses.<br><br><color style='color:#FFD780;'>Arkhe: Ousia</color><br>Periodically, when Navia fires her Gunbrella, a Surging Blade will be summoned, dealing ousia-aligned <color style='color:#FFE699;'>Geo DMG</color>.<br><br><i>\"Maintaining the appropriate distance with those whom distance should be maintained is an essential part of etiquette. Naturally, there are also many ways to do this...\"</i>",
                        "Icon": "Skill_S_Navia_01",
                        "Lock": 10.0,
                        "Name": "Ceremonial Crystalshot",
                        "ParamDesc": [
                            {
                                "Desc": "Rosula Shardshot Base DMG",
                                "ParamLevelList": [
                                    "394.8%",
                                    "424.41%",
                                    "454.02%",
                                    "493.5%",
                                    "523.11%",
                                    "552.72%",
                                    "592.2%",
                                    "631.68%",
                                    "671.16%",
                                    "710.64%",
                                    "750.12%",
                                    "789.6%",
                                    "838.95%",
                                    "888.3%",
                                    "937.65%"
                                ]
                            },
                            {
                                "Desc": "Crystal Shrapnel Duration",
                                "ParamLevelList": [
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s"
                                ]
                            },
                            {
                                "Desc": "Surging Blade DMG",
                                "ParamLevelList": [
                                    "36.0%",
                                    "38.7%",
                                    "41.4%",
                                    "45.0%",
                                    "47.7%",
                                    "50.4%",
                                    "54.0%",
                                    "57.6%",
                                    "61.2%",
                                    "64.8%",
                                    "68.4%",
                                    "72.0%",
                                    "76.5%",
                                    "81.0%",
                                    "85.5%"
                                ]
                            },
                            {
                                "Desc": "Surging Blade Interval",
                                "ParamLevelList": [
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "On the orders of the President of the Spina di Rosula, call for a magnificent Golden Rose's Salute. Unleashes a massive bombardment on opponents in front of her, dealing <color style='color:#FFE699;'>AoE Geo DMG</color> and providing Fire Support for a duration afterward, periodically dealing <color style='color:#FFE699;'>Geo DMG</color> to nearby opponents.<br>When attacks from Golden Rose's Salute hit opponents, Navia will gain 1 charge of Crystal Shrapnel. This effect can be triggered up to once every 2.4s.<br><br><i>\"The Spina di Rosula's salute is a preemptive celebration of the successful conclusion of our negotiations and is fired just before talks begin. Don't misunderstand, it isn't in any way, shape, or form some kind of threat.\"</i>",
                        "Icon": "Skill_E_Navia_01",
                        "Lock": 15.0,
                        "Name": "As the Sunlit Sky's Singing Salute",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "75.2%",
                                    "80.84%",
                                    "86.48%",
                                    "94.0%",
                                    "99.64%",
                                    "105.28%",
                                    "112.8%",
                                    "120.32%",
                                    "127.84%",
                                    "135.36%",
                                    "142.88%",
                                    "150.4%",
                                    "159.8%",
                                    "169.2%",
                                    "178.6%"
                                ]
                            },
                            {
                                "Desc": "Fire Support DMG",
                                "ParamLevelList": [
                                    "43.15%",
                                    "46.386%",
                                    "49.623%",
                                    "53.938%",
                                    "57.174%",
                                    "60.41%",
                                    "64.725%",
                                    "69.04%",
                                    "73.355%",
                                    "77.67%",
                                    "81.985%",
                                    "86.3%",
                                    "91.694%",
                                    "97.088%",
                                    "102.481%"
                                ]
                            },
                            {
                                "Desc": "Fire Support Duration",
                                "ParamLevelList": [
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "For 4s after using <color style='color:#FFD780;'>Ceremonial Crystalshot</color>, the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be converted into <color style='color:#FFE699;'>Geo DMG</color> which cannot be overridden by other Elemental infusions, and the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be increased by 40%.",
                        "Icon": "UI_Talent_S_Navia_05",
                        "Name": "Undisclosed Distribution Channels"
                    },
                    {
                        "Desc": "For each <color style='color:#FF9999;'>Pyro</color>/<color style='color:#FFACFF;'>Electro</color>/<color style='color:#99FFFF;'>Cryo</color>/<color style='color:#80C0FF;'>Hydro</color> party member, Navia gains 20% increased ATK. This effect can stack up to 2 times.",
                        "Icon": "UI_Talent_S_Navia_06",
                        "Name": "Mutual Assistance Network"
                    },
                    {
                        "Desc": "Gains 25% more rewards when dispatched on a Fontaine Expedition for 20 hours.",
                        "Icon": "UI_Talent_S_Navia_07",
                        "Name": "Painstaking Transaction"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "Each charge of Crystal Shrapnel consumed when Navia uses <color style='color:#FFD780;'>Ceremonial Crystalshot</color> will restore 2 Energy to her and decrease the CD of <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> by 1s. Up to 6 Energy can be gained this way, and the CD of \"As the Sunlit Sky's Singing Salute\" can be decreased by up to 3s.",
                        "Icon": "UI_Talent_S_Navia_01",
                        "Name": "A Lady's Rules for Keeping a Courteous Distance",
                        "Level": 1
                    },
                    {
                        "Desc": "The CRIT Rate of <color style='color:#FFD780;'>Ceremonial Crystalshot</color> is increased by 8% for each charge of Crystal Shrapnel consumed. CRIT Rate can be increased by up to 24% in this way.<br>In addition, when Ceremonial Crystalshot hits an opponent, one shot of Fire Support from <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> will strike near the location of the hit. Up to one instance of Fire Support can be triggered each time Ceremonial Crystalshot is used, and DMG dealt by Fire Support in this way is considered Elemental Burst DMG.",
                        "Icon": "UI_Talent_S_Navia_02",
                        "Name": "The President's Pursuit of Victory",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Ceremonial Crystalshot</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Navia_01",
                        "Name": "Businesswoman's Broad Vision",
                        "Level": 3
                    },
                    {
                        "Desc": "When <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> hits an opponent, that opponent's <color style='color:#FFE699;'>Geo RES</color> will be decreased by 20% for 8s.",
                        "Icon": "UI_Talent_S_Navia_03",
                        "Name": "The Oathsworn Never Capitulate",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Navia_02",
                        "Name": "Negotiator's Resolute Negotiations",
                        "Level": 5
                    },
                    {
                        "Desc": "If more than 3 charges of Crystal Shrapnel are consumed when using <color style='color:#FFD780;'>Ceremonial Crystalshot</color>, each charge consumed beyond the first 3 increases the CRIT DMG of that Ceremonial Crystalshot by 35%, and any charges consumed beyond the first 3 are returned to Navia.",
                        "Icon": "UI_Talent_S_Navia_04",
                        "Name": "The Flexible Finesse of the Spina's President",
                        "Level": 6
                    }
                ]
            },
            "5": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Drains Stamina over time to perform continuous spinning attacks against all nearby opponents.<br>At the end of the sequence, performs a more powerful slash. <br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_04",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Blunt Refusal",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "93.519%",
                                    "101.131%",
                                    "108.743%",
                                    "119.617%",
                                    "127.229%",
                                    "135.929%",
                                    "147.89%",
                                    "159.852%",
                                    "171.814%",
                                    "184.863%",
                                    "197.912%",
                                    "210.961%",
                                    "224.011%",
                                    "237.06%",
                                    "250.109%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "86.506%",
                                    "93.548%",
                                    "100.589%",
                                    "110.648%",
                                    "117.689%",
                                    "125.736%",
                                    "136.801%",
                                    "147.866%",
                                    "158.931%",
                                    "171.001%",
                                    "183.072%",
                                    "195.143%",
                                    "207.213%",
                                    "219.284%",
                                    "231.355%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "34.886%×3",
                                    "37.725%×3",
                                    "40.565%×3",
                                    "44.622%×3",
                                    "47.461%×3",
                                    "50.706%×3",
                                    "55.168%×3",
                                    "59.631%×3",
                                    "64.093%×3",
                                    "68.96%×3",
                                    "73.828%×3",
                                    "78.696%×3",
                                    "83.564%×3",
                                    "88.432%×3",
                                    "93.3%×3"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "133.432%",
                                    "144.292%",
                                    "155.153%",
                                    "170.668%",
                                    "181.529%",
                                    "193.941%",
                                    "211.008%",
                                    "228.075%",
                                    "245.142%",
                                    "263.76%",
                                    "282.379%",
                                    "300.997%",
                                    "319.615%",
                                    "338.233%",
                                    "356.852%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Cyclic DMG",
                                "ParamLevelList": [
                                    "62.522%",
                                    "67.611%",
                                    "72.7%",
                                    "79.97%",
                                    "85.059%",
                                    "90.875%",
                                    "98.872%",
                                    "106.869%",
                                    "114.866%",
                                    "123.59%",
                                    "132.314%",
                                    "141.038%",
                                    "149.762%",
                                    "158.486%",
                                    "167.21%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Final DMG",
                                "ParamLevelList": [
                                    "113.09%",
                                    "122.295%",
                                    "131.5%",
                                    "144.65%",
                                    "153.855%",
                                    "164.375%",
                                    "178.84%",
                                    "193.305%",
                                    "207.77%",
                                    "223.55%",
                                    "239.33%",
                                    "255.11%",
                                    "270.89%",
                                    "286.67%",
                                    "302.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s",
                                    "40.0/s"
                                ]
                            },
                            {
                                "Desc": "Max Duration",
                                "ParamLevelList": [
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s",
                                    "5.0s"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "74.588%",
                                    "80.659%",
                                    "86.73%",
                                    "95.403%",
                                    "101.474%",
                                    "108.413%",
                                    "117.953%",
                                    "127.493%",
                                    "137.033%",
                                    "147.441%",
                                    "157.849%",
                                    "168.256%",
                                    "178.664%",
                                    "189.071%",
                                    "199.479%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "149.144%/186.289%",
                                    "161.284%/201.452%",
                                    "173.423%/216.615%",
                                    "190.766%/238.277%",
                                    "202.905%/253.44%",
                                    "216.779%/270.769%",
                                    "235.856%/294.596%",
                                    "254.932%/318.424%",
                                    "274.009%/342.252%",
                                    "294.819%/368.246%",
                                    "315.63%/394.239%",
                                    "336.441%/420.233%",
                                    "357.252%/446.227%",
                                    "378.063%/472.221%",
                                    "398.873%/498.214%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 2,
                        "Desc": "When a character in the party obtains an Elemental Shard created from the Crystallize reaction, Navia will gain 1 Crystal Shrapnel charge. Navia can hold up to 6 charges of Crystal Shrapnel at once. Each time Crystal Shrapnel gain is triggered, the duration of the Crystal Shrapnel charges you already have will be reset.<br>When she fires, Navia will consume all Crystal Shrapnel charges and open her elegant yet lethal Gunbrella, firing multiple Rosula Shardshots that can penetrate opponents, dealing <color style='color:#FFE699;'>Geo DMG</color> to opponents hit.<br>When 0/1/2/3 or more charges of Crystal Shrapnel are consumed, 5/7/9/11 Rosula Shardshots will be fired respectively. The more Rosula Shardshots that strike a single opponent, the greater the DMG dealt to them. When all 11 Rosula Shardshots strike, 200% of the original amount of DMG is dealt.<br>In addition, when more than 3 charges of Crystal Shrapnel are consumed, every charge consumed beyond those 3 will increase the damage dealt by this Gunbrella shot by an additional 15%.<br><br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode, continually collecting Elemental Shards created by Crystallize reactions. When released, fire Rosula Shardshots with the same effect as when the skill is Tapped.<br><br>Two initial uses.<br><br><color style='color:#FFD780;'>Arkhe: Ousia</color><br>Periodically, when Navia fires her Gunbrella, a Surging Blade will be summoned, dealing Ousia-aligned <color style='color:#FFE699;'>Geo DMG</color>.<br><br><i>\"Maintaining the appropriate distance with those whom distance should be maintained is an essential part of etiquette. Naturally, there are also many ways to do this...\"</i>",
                        "Icon": "Skill_S_Navia_01",
                        "Lock": 10.0,
                        "Name": "Ceremonial Crystalshot",
                        "ParamDesc": [
                            {
                                "Desc": "Rosula Shardshot Base DMG",
                                "ParamLevelList": [
                                    "394.8%",
                                    "424.41%",
                                    "454.02%",
                                    "493.5%",
                                    "523.11%",
                                    "552.72%",
                                    "592.2%",
                                    "631.68%",
                                    "671.16%",
                                    "710.64%",
                                    "750.12%",
                                    "789.6%",
                                    "838.95%",
                                    "888.3%",
                                    "937.65%"
                                ]
                            },
                            {
                                "Desc": "Crystal Shrapnel Duration",
                                "ParamLevelList": [
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s",
                                    "300.0s"
                                ]
                            },
                            {
                                "Desc": "Surging Blade DMG",
                                "ParamLevelList": [
                                    "36.0%",
                                    "38.7%",
                                    "41.4%",
                                    "45.0%",
                                    "47.7%",
                                    "50.4%",
                                    "54.0%",
                                    "57.6%",
                                    "61.2%",
                                    "64.8%",
                                    "68.4%",
                                    "72.0%",
                                    "76.5%",
                                    "81.0%",
                                    "85.5%"
                                ]
                            },
                            {
                                "Desc": "Surging Blade Interval",
                                "ParamLevelList": [
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s",
                                    "7.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s",
                                    "9.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "On the orders of the President of the Spina di Rosula, call for a magnificent Rosula Dorata Salute. Unleashes a massive cannon bombardment on opponents in front of her, dealing <color style='color:#FFE699;'>AoE Geo DMG</color> and providing Cannon Fire Support for a duration afterward, periodically dealing <color style='color:#FFE699;'>Geo DMG</color> to nearby opponents.<br>When cannon attacks hit opponents, Navia will gain 1 charge of Crystal Shrapnel. This effect can be triggered up to once every 2.4s.<br><br><i>\"The Spina di Rosula's salute is a preemptive celebration of the successful conclusion of our negotiations and is fired just before talks begin. Don't misunderstand, it isn't in any way, shape, or form some kind of threat.\"</i>",
                        "Icon": "Skill_E_Navia_01",
                        "Lock": 15.0,
                        "Name": "As the Sunlit Sky's Singing Salute",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "75.2%",
                                    "80.84%",
                                    "86.48%",
                                    "94.0%",
                                    "99.64%",
                                    "105.28%",
                                    "112.8%",
                                    "120.32%",
                                    "127.84%",
                                    "135.36%",
                                    "142.88%",
                                    "150.4%",
                                    "159.8%",
                                    "169.2%",
                                    "178.6%"
                                ]
                            },
                            {
                                "Desc": "Cannon Fire Support DMG",
                                "ParamLevelList": [
                                    "43.15%",
                                    "46.386%",
                                    "49.623%",
                                    "53.938%",
                                    "57.174%",
                                    "60.41%",
                                    "64.725%",
                                    "69.04%",
                                    "73.355%",
                                    "77.67%",
                                    "81.985%",
                                    "86.3%",
                                    "91.694%",
                                    "97.088%",
                                    "102.481%"
                                ]
                            },
                            {
                                "Desc": "Cannon Fire Support Duration",
                                "ParamLevelList": [
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s",
                                    "12.0s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s",
                                    "15.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0",
                                    "60.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Desc": "For 4s after using <color style='color:#FFD780;'>Ceremonial Crystalshot</color>, the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be converted into <color style='color:#FFE699;'>Geo DMG</color> which cannot be overridden by other Elemental infusions, and the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be increased by 40%.",
                        "Icon": "UI_Talent_S_Navia_05",
                        "Name": "Undisclosed Distribution Channels"
                    },
                    {
                        "Desc": "For each <color style='color:#FF9999;'>Pyro</color>/<color style='color:#FFACFF;'>Electro</color>/<color style='color:#99FFFF;'>Cryo</color>/<color style='color:#80C0FF;'>Hydro</color> party member, Navia gains 20% increased ATK. This effect can stack up to 2 times.",
                        "Icon": "UI_Talent_S_Navia_06",
                        "Name": "Mutual Assistance Network"
                    },
                    {
                        "Desc": "Gains 25% more rewards when dispatched on a Fontaine Expedition for 20 hours.",
                        "Icon": "UI_Talent_S_Navia_07",
                        "Name": "Painstaking Transaction"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "Each charge of Crystal Shrapnel consumed when Navia uses <color style='color:#FFD780;'>Ceremonial Crystalshot</color> will restore 3 Energy to her and decrease the CD of <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> by 1s. Up to 9 Energy can be gained this way, and the CD of \"As the Sunlit Sky's Singing Salute\" can be decreased by up to 3s.",
                        "Icon": "UI_Talent_S_Navia_01",
                        "Name": "A Lady's Rules for Keeping a Courteous Distance",
                        "Level": 1
                    },
                    {
                        "Desc": "Each charge of Crystal Shrapnel consumed will increase the CRIT Rate of this <color style='color:#FFD780;'>Ceremonial Crystalshot</color> instance by 12%. CRIT Rate can be increased by up to 36% in this way.<br>In addition, when Ceremonial Crystalshot hits an opponent, one Cannon Fire Support shot from <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> will strike near the location of the hit. Up to one instance of Cannon Fire Support can be triggered each time Ceremonial Crystalshot is used, and DMG dealt by said Cannon Fire Support this way is considered Elemental Burst DMG.",
                        "Icon": "UI_Talent_S_Navia_02",
                        "Name": "The President's Pursuit of Victory",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Ceremonial Crystalshot</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Navia_01",
                        "Name": "Businesswoman's Broad Vision",
                        "Level": 3
                    },
                    {
                        "Desc": "When <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> hits an opponent, that opponent's <color style='color:#FFE699;'>Geo RES</color> will be decreased by 20% for 8s.",
                        "Icon": "UI_Talent_S_Navia_03",
                        "Name": "The Oathsworn Never Capitulate",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>As the Sunlit Sky's Singing Salute</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Navia_02",
                        "Name": "Negotiator's Resolute Negotiations",
                        "Level": 5
                    },
                    {
                        "Desc": "If more than 3 charges of Crystal Shrapnel are consumed when using <color style='color:#FFD780;'>Ceremonial Crystalshot</color>, each charge consumed beyond the first 3 increases the CRIT DMG of that Ceremonial Crystalshot by 45%, and any charges consumed beyond the first 3 are returned to Navia.",
                        "Icon": "UI_Talent_S_Navia_04",
                        "Name": "The Flexible Finesse of the Spina's President",
                        "Level": 6
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Прямое неприятие",
                        "Desc": "<color style='color:#FFD780;'>Обычная атака:</color><br>Выполняет до четырёх ударов.<br><br><color style='color:#FFD780;'>Заряженная атака:</color><br>Вращающаяся атака по окружающим врагам, на которую непрерывно тратится выносливость.<br>После вращения проводит дополнительную мощную атаку мечом.<br><br><color style='color:#FFD780;'>Атака в падении:</color><br>Стремительно падает на землю, атакуя всех врагов на пути. Приземлившись, наносит урон по площади.",
                        "Icon": "Skill_A_04",
                        "ParamDesc": [
                            {
                                "Desc": "Урон атаки 1",
                                "ParamLevelList": [
                                    "93.519%",
                                    "101.131%",
                                    "108.743%",
                                    "119.6173%",
                                    "127.2293%",
                                    "135.9287%",
                                    "147.8905%",
                                    "159.8522%",
                                    "171.8139%",
                                    "184.8631%",
                                    "197.9123%",
                                    "210.9614%",
                                    "224.0106%",
                                    "237.0597%",
                                    "250.1089%"
                                ]
                            },
                            {
                                "Desc": "Урон атаки 2",
                                "ParamLevelList": [
                                    "86.5065%",
                                    "93.5478%",
                                    "100.589%",
                                    "110.6479%",
                                    "117.6891%",
                                    "125.7362%",
                                    "136.801%",
                                    "147.8658%",
                                    "158.9306%",
                                    "171.0013%",
                                    "183.072%",
                                    "195.1427%",
                                    "207.2133%",
                                    "219.284%",
                                    "231.3547%"
                                ]
                            },
                            {
                                "Desc": "Урон атаки 3",
                                "ParamLevelList": [
                                    "34.8859%×3",
                                    "37.7255%×3",
                                    "40.565%×3",
                                    "44.6215%×3",
                                    "47.461%×3",
                                    "50.7062%×3",
                                    "55.1684%×3",
                                    "59.6306%×3",
                                    "64.0927%×3",
                                    "68.9605%×3",
                                    "73.8283%×3",
                                    "78.6961%×3",
                                    "83.5639%×3",
                                    "88.4317%×3",
                                    "93.2995%×3"
                                ]
                            },
                            {
                                "Desc": "Урон атаки 4",
                                "ParamLevelList": [
                                    "133.4316%",
                                    "144.2923%",
                                    "155.153%",
                                    "170.6683%",
                                    "181.529%",
                                    "193.9412%",
                                    "211.0081%",
                                    "228.0749%",
                                    "245.1417%",
                                    "263.7601%",
                                    "282.3785%",
                                    "300.9968%",
                                    "319.6152%",
                                    "338.2335%",
                                    "356.8519%"
                                ]
                            },
                            {
                                "Desc": "Урон вращающейся атаки",
                                "ParamLevelList": [
                                    "62.522%",
                                    "67.611%",
                                    "72.7%",
                                    "79.97%",
                                    "85.059%",
                                    "90.875%",
                                    "98.872%",
                                    "106.869%",
                                    "114.866%",
                                    "123.59%",
                                    "132.314%",
                                    "141.038%",
                                    "149.762%",
                                    "158.486%",
                                    "167.21%"
                                ]
                            },
                            {
                                "Desc": "Финальный урон заряженной атаки",
                                "ParamLevelList": [
                                    "113.09%",
                                    "122.295%",
                                    "131.5%",
                                    "144.65%",
                                    "153.855%",
                                    "164.375%",
                                    "178.84%",
                                    "193.305%",
                                    "207.77%",
                                    "223.55%",
                                    "239.33%",
                                    "255.11%",
                                    "270.89%",
                                    "286.67%",
                                    "302.45%"
                                ]
                            },
                            {
                                "Desc": "Потребление выносливости",
                                "ParamLevelList": [
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек.",
                                    "40 ед/сек."
                                ]
                            },
                            {
                                "Desc": "Макс. длительность",
                                "ParamLevelList": [
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек.",
                                    "5 сек."
                                ]
                            },
                            {
                                "Desc": "Урон в падении",
                                "ParamLevelList": [
                                    "74.5878%",
                                    "80.6589%",
                                    "86.73%",
                                    "95.403%",
                                    "101.4741%",
                                    "108.4125%",
                                    "117.9528%",
                                    "127.4931%",
                                    "137.0334%",
                                    "147.441%",
                                    "157.8486%",
                                    "168.2562%",
                                    "178.6638%",
                                    "189.0714%",
                                    "199.479%"
                                ]
                            },
                            {
                                "Desc": "Урон низкого/высокого удара",
                                "ParamLevelList": [
                                    "149.144%/186.2889%",
                                    "161.2836%/201.452%",
                                    "173.4233%/216.615%",
                                    "190.7656%/238.2765%",
                                    "202.9052%/253.4396%",
                                    "216.7791%/270.7688%",
                                    "235.8556%/294.5964%",
                                    "254.9322%/318.4241%",
                                    "274.0087%/342.2517%",
                                    "294.8195%/368.2455%",
                                    "315.6303%/394.2393%",
                                    "336.4411%/420.2331%",
                                    "357.2519%/446.2269%",
                                    "378.0627%/472.2207%",
                                    "398.8735%/498.2145%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Церемониальный залп кристалла",
                        "Desc": "Когда персонаж отряда подбирает элементальный осколок, созданный реакцией Кристалл, Навия получает 1 уровень Кристальной шрапнели. Всего можно получить до 6 уровней. При каждом получении длительность уже имеющихся уровней Кристальной шрапнели сбрасывается.<br>Во время выстрела Навия расходует все уровни Кристальной шрапнели и раскрывает свой элегантный, но смертоносный зонт-пушку, выстреливая множеством Кристальных пуль Росулы, которые способны пронзать врагов, и наносит поражённым противникам <color style='color:#FFE699;'>Гео урон</color>.<br>При расходе 0/1/2/3 и более уровней Кристальной шрапнели выстреливается 5/7/9/11 Кристальных пуль Росулы соответственно. Чем больше Кристальных пуль Росулы попадут в одного и того же врага, тем больше урона будет нанесено. Если попадут все 11 пуль, будет нанесено 200% от изначального урона.<br>Кроме того, если расходуется более 3 уровней Кристальной шрапнели, каждый уровень после третьего дополнительно увеличивает урон этой атаки зонта-пушки на 15%.<br><br><color style='color:#FFD780;'>Долгое нажатие</color><br>Переходит в режим прицеливания, непрерывно собирая элементальные осколки, созданные реакцией Кристалл. Когда долгое нажатие прекращается, выпускаются те же Кристальные пули Росулы, что и при быстром нажатии.<br><br>Исходное количество применений: 2.<br><br><color style='color:#FFD780;'>Архэ: Усия</color><br>Когда Навия ведёт стрельбу из зонта-пушки, периодически призывается Клинок бурных вод, который наносит <color style='color:#FFE699;'>Гео урон</color> усии.<br><br><i>«Держаться на должном расстоянии от тех, кого следует держать на расстоянии, означает следовать правилам этикета. Тем не менее способов делать это тоже немало...»</i>",
                        "Icon": "Skill_S_Navia_01",
                        "ParamDesc": [
                            {
                                "Desc": "Базовый урон Кристальной пули Росулы",
                                "ParamLevelList": [
                                    "394.8%",
                                    "424.41%",
                                    "454.02%",
                                    "493.5%",
                                    "523.11%",
                                    "552.72%",
                                    "592.2%",
                                    "631.68%",
                                    "671.16%",
                                    "710.64%",
                                    "750.12%",
                                    "789.6%",
                                    "838.95%",
                                    "888.3%",
                                    "937.65%"
                                ]
                            },
                            {
                                "Desc": "Длительность Кристальной шрапнели",
                                "ParamLevelList": [
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек.",
                                    "300 сек."
                                ]
                            },
                            {
                                "Desc": "Урон Клинка бурных вод",
                                "ParamLevelList": [
                                    "36.0%",
                                    "38.7%",
                                    "41.4%",
                                    "45.0%",
                                    "47.7%",
                                    "50.4%",
                                    "54.0%",
                                    "57.6%",
                                    "61.2%",
                                    "64.8%",
                                    "68.4%",
                                    "72.0%",
                                    "76.5%",
                                    "81.0%",
                                    "85.5%"
                                ]
                            },
                            {
                                "Desc": "Интервал Клинка бурных вод",
                                "ParamLevelList": [
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек.",
                                    "7 сек."
                                ]
                            },
                            {
                                "Desc": "Время отката",
                                "ParamLevelList": [
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек.",
                                    "9 сек."
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Словно приветствие чистого неба",
                        "Desc": "По приказу главы Спина-ди-Росула призывается великолепный Салют золотой розы, который подвергает врагов впереди массированному пушечному обстрелу, наносит <color style='color:#FFE699;'>Гео урон по площади</color> и в течение некоторого времени после этого оказывает Огневую поддержку пушек, периодически нанося <color style='color:#FFE699;'>Гео урон</color> врагам поблизости.<br>Пушечные атаки, попадая по врагам, наделяют Навию 1 уровнем Кристальной шрапнели. Этот эффект может возникнуть один раз в 2,4 сек.<br><br><i>«Салют Спина-ди-Росула - предварительное празднование успешных переговоров, и производится он до их начала. Не поймите неправильно, это никакая не угроза».</i>",
                        "Icon": "Skill_E_Navia_01",
                        "ParamDesc": [
                            {
                                "Desc": "Урон навыка",
                                "ParamLevelList": [
                                    "75.2%",
                                    "80.84%",
                                    "86.48%",
                                    "94.0%",
                                    "99.64%",
                                    "105.28%",
                                    "112.8%",
                                    "120.32%",
                                    "127.84%",
                                    "135.36%",
                                    "142.88%",
                                    "150.4%",
                                    "159.8%",
                                    "169.2%",
                                    "178.6%"
                                ]
                            },
                            {
                                "Desc": "Урон Огневой поддержки пушек",
                                "ParamLevelList": [
                                    "43.15%",
                                    "46.3863%",
                                    "49.6225%",
                                    "53.9375%",
                                    "57.1738%",
                                    "60.41%",
                                    "64.725%",
                                    "69.04%",
                                    "73.355%",
                                    "77.67%",
                                    "81.985%",
                                    "86.3%",
                                    "91.6938%",
                                    "97.0875%",
                                    "102.4813%"
                                ]
                            },
                            {
                                "Desc": "Длительность Огневой поддержки пушек",
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
                            },
                            {
                                "Desc": "Потребление энергии",
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
                        "Name": "Неизвестные каналы обращения",
                        "Desc": "В течение 4 сек. после применения навыка <color style='color:#FFD780;'>Церемониальный залп кристалла</color> урон обычных атак, заряженных атак и атак в падении Навии конвертируется в <color style='color:#FFE699;'>Гео урон</color>, который не может быть отменён другими инфузиями. Кроме того, урон обычных атак, заряженных атак и атак в падении Навии повышается на 40%.",
                        "Icon": "UI_Talent_S_Navia_05"
                    },
                    {
                        "Name": "Сеть взаимопомощи",
                        "Desc": "За каждого персонажа <color style='color:#FF9999;'>Пиро</color>/<color style='color:#FFACFF;'>Электро</color>/<color style='color:#99FFFF;'>Крио</color>/<color style='color:#80C0FF;'>Гидро</color> в отряде сила атаки Навии увеличивается на 20%. Эффект складывается до 2 раз.",
                        "Icon": "UI_Talent_S_Navia_06"
                    },
                    {
                        "Name": "Тщательно выполненная сделка",
                        "Desc": "На 25% увеличивает награду экспедиций в Фонтейне длительностью 20 ч.",
                        "Icon": "UI_Talent_S_Navia_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Правило расстояния для леди",
                        "Desc": "При использовании навыка <color style='color:#FFD780;'>Церемониальный залп кристалла</color> за каждый израсходованный уровень Кристальной шрапнели Навия восстанавливает 3 ед. энергии и сокращает откат навыка <color style='color:#FFD780;'>Словно приветствие чистого неба</color> на 1 сек. Таким способом можно восстановить не более 9 ед. энергии и сократить откат навыка Словно приветствие чистого неба максимум на 3 сек.",
                        "Icon": "UI_Talent_S_Navia_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Стремление главнокомандующей к победе",
                        "Desc": "Каждый израсходованный уровень Кристальной шрапнели увеличивает шанс крит. попадания активируемого <color style='color:#FFD780;'>Церемониального залпа кристалла</color> на 12%. Шанс крит. попадания таким способом можно повысить максимум на 36%.<br>Кроме того, при попадании навыка Церемониальный залп кристалла рядом с позицией поражённого врага нисходит 1 Огневая поддержка пушек навыка <color style='color:#FFD780;'>Словно приветствие чистого неба</color>. Каждое использование навыка Церемониальный залп кристалла может вызвать не более 1 Огневой поддержки пушек. Урон Огневой поддержки пушек, наносимый таким способом, считается уроном взрыва стихии.",
                        "Icon": "UI_Talent_S_Navia_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Широкий кругозор управляющей",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Церемониальный залп кристалла</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Navia_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Поклявшиеся не сдаются",
                        "Desc": "При попадании навыка <color style='color:#FFD780;'>Словно приветствие чистого неба</color> <color style='color:#FFE699;'>Гео сопротивление</color> поражённого противника снижается на 20% на 8 сек.",
                        "Icon": "UI_Talent_S_Navia_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Непреклонность переговорщика",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Словно приветствие чистого неба</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Navia_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Изящество ухищрений главы Спина-ди-Росула",
                        "Desc": "Если при использовании навыка <color style='color:#FFD780;'>Церемониальный залп кристалла</color> расходуется более 3 уровней Кристальной шрапнели, то каждый уровень, расходуемый после первых трёх, повышает крит. урон текущего навыка Церемониальный залп кристалла на 45%. При этом все уровни, израсходованные после третьего, после использования навыка возвращаются Навии.",
                        "Icon": "UI_Talent_S_Navia_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Navia": {
        "AttackList": [
            {
                "Skill": "Gunbrella (Only 1 Instance)",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 150.0,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Range"
            },
            {
                "Skill": "Surging Blade",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Rock",
                "GU": 0.0,
                "Poise": 20.0,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": -1.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Pierce",
                "AttackType": "Default"
            },
            {
                "Skill": "Golden Rose Salute",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        12.0,
                        5.0,
                        5.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Rock",
                "GU": 2.0,
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
                "AttackType": "Range"
            },
            {
                "Skill": "Fire Support (every 0.75s)",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.0,
                        3.8
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Fire Support",
                "AttGrp": "Once every 3 hits",
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 50.0,
                "ForceType": 0,
                "Force": [
                    0.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Range"
            },
            {
                "Skill": "C2 Extra Fire Support",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.0,
                        3.8
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Fire Support",
                "AttGrp": "Once every 3 hits",
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 50.0,
                "ForceType": 0,
                "Force": [
                    0.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Range"
            },
            {
                "Skill": "Normal ATK 1 Geo",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.0,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 129.8,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.06,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 2 Geo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.3,
                        2.0,
                        3.5
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 120.1,
                "ForceType": 3,
                "Force": [
                    400.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.06,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 3 Geo x3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.5,
                        3.0,
                        2.1
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 50.5,
                "ForceType": 1,
                "Force": [
                    0.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.01,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 4 Geo",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.7,
                        2.0,
                        4.0
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 185.9,
                "ForceType": 3,
                "Force": [
                    120.0,
                    480.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.06,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Charged ATK Cyclic Geo",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.0,
                        1.5
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 60.0,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.03,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Charged ATK Final Geo",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.5,
                        1.5
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 120.0,
                "ForceType": 3,
                "Force": [
                    655.0,
                    800.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.15,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Plunging Geo",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Rock",
                "GU": 0.0,
                "Poise": 35.0,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "Low Plunge Geo",
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
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 150.0,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "High Plunge Geo",
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
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 200.0,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.0,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 129.8,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.06,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.3,
                        2.0,
                        3.5
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 120.1,
                "ForceType": 3,
                "Force": [
                    400.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.06,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 3-1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.0,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 106.37,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.09,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 3-2&3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.5,
                        3.0,
                        2.1
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 50.5,
                "ForceType": 1,
                "Force": [
                    0.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.01,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 4",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.7,
                        2.0,
                        4.0
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 185.9,
                "ForceType": 3,
                "Force": [
                    120.0,
                    480.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.06,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        3.0,
                        2.0,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 135.12,
                "ForceType": 3,
                "Force": [
                    655.0,
                    800.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.12,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Charged ATK Cyclic",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.0,
                        1.5
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 60.0,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.03,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee"
            },
            {
                "Skill": "Charged ATK Final",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.5,
                        1.5
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 120.0,
                "ForceType": 3,
                "Force": [
                    655.0,
                    800.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.15,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
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
                "Poise": 35.0,
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
                "Poise": 150.0,
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
                "Poise": 200.0,
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
            },
            {
                "Skill": "Discarded",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        0.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "Elem Skill",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Rock",
                "GU": 1.0,
                "Poise": 30.0,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Range"
            }
        ]
    }
}