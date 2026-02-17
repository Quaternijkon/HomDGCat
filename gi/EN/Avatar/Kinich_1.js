// Auto Generated

var _AvatarDataConfig_ = {
    "Kinich": {
        "BallList": [
            {
                "When": "Scalespiker Cannon",
                "DropArray": [
                    {
                        "Num": 5,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD (Resets every Nightsoul)",
                "CD": 9999
            }
        ],
        "EndureList": [
            {
                "Skill": "Night Soul Normal ATK",
                "Endure": 0.3
            },
            {
                "Skill": "Scalespiker Cannon",
                "Endure": 0.3
            }
        ],
        "WindZoneList": [],
        "OtherDataList": [
            "Dragon Breath interval: @2.5s#",
            "<b>@Interruption RES#</b><br>• Interruption coefficient of @0.3# during Normal ATK and Scalespiker Cannon in Nightsoul State. Same as Xingqiu Q.",
            "<b>@Particle Generation#</b><br>• Generates @5 Dendro Particles# with Scalespiker Cannon. Can be triggered once in each Nightsoul state.",
            "@<b>Element Application</b># (All 1GU)<br>• Nightsoul NA can apply @once every 2s#<br>• Scalespiker Cannon and C6 Bounce share ICD: @once every 1.2s#<br>• Burst casting DMG and Dragon Breath @share an ICD of 2.5s / 3 hits#",
            "<b>@AoE#</b><br>• Dragon Breath @detect range: 12m#, close to C0 Yae Miko's Sakura<br>• Scalespiker Cannon and C6 Bounce: @Radius 3m#, same as Navia Q bullets.<br>• C2 Scalespiker Cannon: @Radius 5m#, same as Raiden E opening DMG."
        ]
    }
}

var _AvatarMats_ = {
    "Kinich": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104131": 1,
                "101250": 3,
                "112101": 3
            },
            {
                "202": 40000,
                "104132": 3,
                "113065": 2,
                "101250": 10,
                "112101": 15
            },
            {
                "202": 60000,
                "104132": 6,
                "113065": 4,
                "101250": 20,
                "112102": 12
            },
            {
                "202": 80000,
                "104133": 3,
                "113065": 8,
                "101250": 30,
                "112102": 18
            },
            {
                "202": 100000,
                "104133": 6,
                "113065": 12,
                "101250": 45,
                "112103": 12
            },
            {
                "202": 120000,
                "104134": 6,
                "113065": 20,
                "101250": 60,
                "112103": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104350": 3,
                "112101": 6
            },
            {
                "202": 17500,
                "104351": 2,
                "112102": 3
            },
            {
                "202": 25000,
                "104351": 4,
                "112102": 4
            },
            {
                "202": 30000,
                "104351": 6,
                "112102": 6
            },
            {
                "202": 37500,
                "104351": 9,
                "112102": 9
            },
            {
                "202": 120000,
                "104352": 4,
                "112103": 4,
                "113062": 1
            },
            {
                "202": 260000,
                "104352": 6,
                "112103": 6,
                "113062": 1
            },
            {
                "202": 450000,
                "104352": 12,
                "112103": 9,
                "113062": 2
            },
            {
                "202": 700000,
                "104352": 16,
                "112103": 12,
                "113062": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104350": 3,
                "112101": 6
            },
            {
                "202": 17500,
                "104351": 2,
                "112102": 3
            },
            {
                "202": 25000,
                "104351": 4,
                "112102": 4
            },
            {
                "202": 30000,
                "104351": 6,
                "112102": 6
            },
            {
                "202": 37500,
                "104351": 9,
                "112102": 9
            },
            {
                "202": 120000,
                "104352": 4,
                "112103": 4,
                "113062": 1
            },
            {
                "202": 260000,
                "104352": 6,
                "112103": 6,
                "113062": 1
            },
            {
                "202": 450000,
                "104352": 12,
                "112103": 9,
                "113062": 2
            },
            {
                "202": 700000,
                "104352": 16,
                "112103": 12,
                "113062": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104350": 3,
                "112101": 6
            },
            {
                "202": 17500,
                "104351": 2,
                "112102": 3
            },
            {
                "202": 25000,
                "104351": 4,
                "112102": 4
            },
            {
                "202": 30000,
                "104351": 6,
                "112102": 6
            },
            {
                "202": 37500,
                "104351": 9,
                "112102": 9
            },
            {
                "202": 120000,
                "104352": 4,
                "112103": 4,
                "113062": 1
            },
            {
                "202": 260000,
                "104352": 6,
                "112103": 6,
                "113062": 1
            },
            {
                "202": 450000,
                "104352": 12,
                "112103": 9,
                "113062": 2
            },
            {
                "202": 700000,
                "104352": 16,
                "112103": 12,
                "113062": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Kinich": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Nightsun Style",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 rapid strikes.<br>After using his Elemental Skill \"Canopy Hunter: Riding High\"'s mid-air swing attack, he can perform a mid-air Normal Attack before landing.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount to spin and throw his Claymore forward to attack opponents.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 5.0,
                        "Icon": "Skill_A_04",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "97.914%",
                                    "105.883%",
                                    "113.853%",
                                    "125.238%",
                                    "133.208%",
                                    "142.316%",
                                    "154.84%",
                                    "167.364%",
                                    "179.888%",
                                    "193.55%",
                                    "207.212%",
                                    "220.875%",
                                    "234.537%",
                                    "248.2%",
                                    "261.862%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "87.678%",
                                    "94.814%",
                                    "101.951%",
                                    "112.146%",
                                    "119.283%",
                                    "127.439%",
                                    "138.653%",
                                    "149.868%",
                                    "161.083%",
                                    "173.317%",
                                    "185.551%",
                                    "197.785%",
                                    "210.019%",
                                    "222.253%",
                                    "234.487%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "119.69%",
                                    "129.432%",
                                    "139.174%",
                                    "153.091%",
                                    "162.834%",
                                    "173.968%",
                                    "189.277%",
                                    "204.586%",
                                    "219.895%",
                                    "236.596%",
                                    "253.297%",
                                    "270.0%",
                                    "286.698%",
                                    "303.399%",
                                    "320.1%"
                                ]
                            },
                            {
                                "Desc": "Mid-Air Normal Attack DMG",
                                "ParamLevelList": [
                                    "167.7%",
                                    "181.35%",
                                    "195.0%",
                                    "214.5%",
                                    "228.15%",
                                    "243.75%",
                                    "265.2%",
                                    "286.65%",
                                    "308.1%",
                                    "331.5%",
                                    "354.9%",
                                    "378.3%",
                                    "401.7%",
                                    "425.1%",
                                    "448.5%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "59.082%×3",
                                    "63.891%×3",
                                    "68.7%×3",
                                    "75.57%×3",
                                    "80.379%×3",
                                    "85.875%×3",
                                    "93.432%×3",
                                    "100.989%×3",
                                    "108.546%×3",
                                    "116.79%×3",
                                    "125.034%×3",
                                    "133.278%×3",
                                    "141.522%×3",
                                    "149.766%×3",
                                    "158.01%×3"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0"
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
                        "Name": "Canopy Hunter: Riding High",
                        "Desc": "Kinich uses his big-game hunting skills to either move swiftly or attack his opponent.<br>When no opponents are nearby, he fires a grappling hook forward and swings in mid-air, and this Skill's CD decreases by 60%. When an opponent is present, he will fire the hook at the target opponent and enter Nightsoul's Blessing at 0 Nightsoul points.<br>Can be Held. When Held, he can aim the grappling hook.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Kinich</color><br>Kinich's Nightsoul's Blessing lasts 10s and generates 2 Nightsoul points every second.<br>In this state, Kinich will hook onto a nearby opponent and perform a variable attack:<br> · Using a Normal Attack will perform a loop shot around the grapple target based on current movement direction, dealing <color style='color:#99FF88;'>Dendro DMG</color> with the Nightsoul attribute and generating 3 Nightsoul points. Mid-air swing DMG is considered Elemental Skill DMG.<br> · When Nightsoul points are at max, he can use the Elemental Skill \"Scalespiker Cannon\": Consume all Nightsoul points to deal <color style='color:#99FF88;'>Dendro DMG</color> with the Nightsoul attribute. When \"Scalespiker Cannon\" is held, Kinich can take aim at his target. After firing the Cannon, Kinich will try to grapple to its target.<br>While in Nightsoul's Blessing, Kinich will generate a Dead Zone beside an opponent he has grappled to or fired the Cannon at. When he enters this Zone, it will be canceled, and Kinich will gain 4 Nightsoul points.<br>If the grapple connection should snap due to exceeded distance or some other reason, using a Normal Attack will establish a new connection with a nearby opponent before performing a loop shot.<br><br><i>\"All things come with a cost. I suggest you make a suitable offer... What? No, I don't do installments.\"</i>",
                        "Num": 1,
                        "Lock": 10.0,
                        "Icon": "Skill_S_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Loop Shot DMG",
                                "ParamLevelList": [
                                    "64.17%×2",
                                    "68.983%×2",
                                    "73.795%×2",
                                    "80.212%×2",
                                    "85.025%×2",
                                    "89.838%×2",
                                    "96.255%×2",
                                    "102.672%×2",
                                    "109.089%×2",
                                    "115.506%×2",
                                    "121.923%×2",
                                    "128.34%×2",
                                    "136.361%×2",
                                    "144.383%×2",
                                    "152.404%×2"
                                ]
                            },
                            {
                                "Desc": "Scalespiker Cannon DMG",
                                "ParamLevelList": [
                                    "598.92%",
                                    "643.839%",
                                    "688.758%",
                                    "748.65%",
                                    "793.569%",
                                    "838.488%",
                                    "898.38%",
                                    "958.272%",
                                    "1018.164%",
                                    "1078.056%",
                                    "1137.948%",
                                    "1197.84%",
                                    "1272.705%",
                                    "1347.57%",
                                    "1422.435%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
                                "ParamLevelList": [
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Hail to the Almighty Dragonlord",
                        "Desc": "Unleashes the power of Ajaw the Almighty Dragonlord (on a limited, conditional, restricted, contractual, partial, temporary basis), dealing <color style='color:#99FF88;'>AoE Dendro DMG</color>. Ajaw will unleash his dragon-breath at intervals, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color>.<br>If Kinich is in Nightsoul's Blessing when this is used, this Blessing's duration is extended by 2s.<br><br><i>\"Yes, yes! You stand before K'uhul Ajaw the Almighty Dragonlord! Come forward, then! Kneel, and kiss our feet!\"</i>",
                        "Num": 1,
                        "Lock": 10.0,
                        "Icon": "Skill_E_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "134.0%",
                                    "144.05%",
                                    "154.1%",
                                    "167.5%",
                                    "177.55%",
                                    "187.6%",
                                    "201.0%",
                                    "214.4%",
                                    "227.8%",
                                    "241.2%",
                                    "254.6%",
                                    "268.0%",
                                    "284.75%",
                                    "301.5%",
                                    "318.25%"
                                ]
                            },
                            {
                                "Desc": "Laser DMG",
                                "ParamLevelList": [
                                    "120.736%",
                                    "129.791%",
                                    "138.846%",
                                    "150.92%",
                                    "159.975%",
                                    "169.03%",
                                    "181.104%",
                                    "193.178%",
                                    "205.251%",
                                    "217.325%",
                                    "229.398%",
                                    "241.472%",
                                    "256.564%",
                                    "271.656%",
                                    "286.748%"
                                ]
                            },
                            {
                                "Desc": "Dragon Duration",
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
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "The Price of Desolation",
                        "Desc": "When in Nightsoul's Blessing, opponents hit by Kinich's Elemental Skill DMG will enter the Desolation state, and when affected by Burning or Burgeon reaction DMG, they will restore 7 Nightsoul points to him. Nightsoul points can be gained this way once every 0.8s. The Desolation state will persist until this instance of Kinich's Nightsoul's Blessing ends.",
                        "Icon": "UI_Talent_S_Kinich_05"
                    },
                    {
                        "Name": "Flame Spirit Pact",
                        "Desc": "When a nearby party member triggers a Nightsoul Burst, Kinich will gain 1 stack of Hunter's Experience that lasts 15s, max 2 stacks. When Kinich uses <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s Scalespiker Cannon, all stacks will be consumed, with each stack increasing the DMG dealt by this Cannon shot by 320% of Kinich's ATK.",
                        "Icon": "UI_Talent_S_Kinich_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Repaid in Full",
                        "Desc": "When Kinich is in the air following <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, he can consume 10 Phlogiston points to perform another mid-air swing.<br>While in an area with Phlogiston Device(s) within Natlan, he can use Nightsoul Transmission: Kinich. When the current active character is sprinting, in movement states that result from specific Talents, or a certain height in the air, switching to Kinich will trigger the following: Kinich will fire a grappling hook and swing. Kinich will prioritize valid Coilgrass Sigils as grapple targets. He can use Nightsoul Transmission once every 10s.<br>When interacting with Coilgrass Sigils and other items that can interact with Yumkasaurs, \"Canopy Hunter: Riding High\" will be converted to \"Yumkasaur Mimesis,\" which causes interactions with such items to follow rules applicable to Yumkasaurs, and which will not put Canopy Hunter: Riding High on CD.",
                        "Icon": "UI_Talent_S_Kinich_08"
                    },
                    {
                        "Name": "",
                        "Desc": "",
                        "Icon": "UI_Talent_S_Kinich_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Parrot's Beak",
                        "Desc": "After Kinich lands from <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, his Movement SPD will increase by 20% for 5s.<br>Additionally, Scalespiker Cannon's CRIT DMG is increased by 90%.",
                        "Icon": "UI_Talent_S_Kinich_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Tiger Beetle's Palm",
                        "Desc": "When Kinich's Elemental Skill hits opponents, it will decrease their <color style='color:#99FF88;'>Dendro RES</color> by 30% for 6s.<br>Additionally, the first Scalespiker Cannon Kinich fires after entering Nightsoul's Blessing has increased AoE, and its DMG increases by 100%.",
                        "Icon": "UI_Talent_S_Kinich_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Protosuchian's Claw",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Canopy Hunter: Riding High</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Hummingbird's Feather",
                        "Desc": "When in Nightsoul's Blessing, Kinich will restore 5 Energy after using his loop shots or after unleashing the Scalespiker Cannon. Energy regeneration can happen this way once every 2.8s.",
                        "Icon": "UI_Talent_S_Kinich_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Howler Monkey's Tail",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Hail to the Almighty Dragonlord</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Auspicious Beast's Shape",
                        "Desc": "After the Scalespiker Cannon hits an opponent, it will bounce once between opponents, dealing 600% of Kinich's ATK as <color style='color:#99FF88;'>Dendro DMG</color>.",
                        "Icon": "UI_Talent_S_Kinich_04"
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Nightsun Style",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 rapid strikes.<br>After using his Elemental Skill \"Canopy Hunter: Riding High\"'s mid-air swing attack, he can perform a mid-air Normal Attack before landing.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount to spin and throw his Claymore forward to attack opponents.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 5.0,
                        "Icon": "Skill_A_04",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "98.986%",
                                    "107.043%",
                                    "115.1%",
                                    "126.61%",
                                    "134.667%",
                                    "143.875%",
                                    "156.536%",
                                    "169.197%",
                                    "181.858%",
                                    "195.67%",
                                    "209.482%",
                                    "223.294%",
                                    "237.106%",
                                    "250.918%",
                                    "264.73%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "82.904%",
                                    "89.652%",
                                    "96.4%",
                                    "106.04%",
                                    "112.788%",
                                    "120.5%",
                                    "131.104%",
                                    "141.708%",
                                    "152.312%",
                                    "163.88%",
                                    "175.448%",
                                    "187.016%",
                                    "198.584%",
                                    "210.152%",
                                    "221.72%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "123.496%",
                                    "133.548%",
                                    "143.6%",
                                    "157.96%",
                                    "168.012%",
                                    "179.5%",
                                    "195.296%",
                                    "211.092%",
                                    "226.888%",
                                    "244.12%",
                                    "261.352%",
                                    "278.584%",
                                    "295.816%",
                                    "313.048%",
                                    "330.28%"
                                ]
                            },
                            {
                                "Desc": "Mid-Air Normal Attack DMG",
                                "ParamLevelList": [
                                    "167.7%",
                                    "181.35%",
                                    "195.0%",
                                    "214.5%",
                                    "228.15%",
                                    "243.75%",
                                    "265.2%",
                                    "286.65%",
                                    "308.1%",
                                    "331.5%",
                                    "354.9%",
                                    "378.3%",
                                    "401.7%",
                                    "425.1%",
                                    "448.5%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "48.418%×3",
                                    "52.359%×3",
                                    "56.3%×3",
                                    "61.93%×3",
                                    "65.871%×3",
                                    "70.375%×3",
                                    "76.568%×3",
                                    "82.761%×3",
                                    "88.954%×3",
                                    "95.71%×3",
                                    "102.466%×3",
                                    "109.222%×3",
                                    "115.978%×3",
                                    "122.734%×3",
                                    "129.49%×3"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0"
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
                        "Name": "Canopy Hunter: Riding High",
                        "Desc": "Kinich uses his big-game hunting skills to either move swiftly or attack his opponent.<br>When no opponents are nearby, he fires a grappling hook forward and swings in mid-air, and this Skill's CD decreases by 60%. When an opponent is present, he will fire the hook at the target opponent and enter Nightsoul's Blessing at 0 Nightsoul points.<br>Can be Held. When Held, he can aim the grappling hook.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Kinich</color><br>Kinich's Nightsoul's Blessing lasts 10s and generates 2 Nightsoul points every second.<br>In this state, Kinich will hook onto a nearby opponent and perform a variable attack:<br> · Using a Normal Attack will perform a loop shot around the grapple target based on current movement direction, dealing <color style='color:#99FF88;'>Dendro DMG</color> with the Nightsoul attribute and generating 3 Nightsoul points. Mid-air swing DMG is considered Elemental Skill DMG.<br> · When Nightsoul points are at max, he can use the Elemental Skill \"Scalespiker Cannon\": Consume all Nightsoul points to deal <color style='color:#99FF88;'>Dendro DMG</color> with the Nightsoul attribute. When \"Scalespiker Cannon\" is held, Kinich can take aim at his target. After firing the Cannon, Kinich will try to grapple to its target.<br>While in Nightsoul's Blessing, Kinich will generate a Dead Zone beside an opponent he has grappled to or fired the Cannon at. When he enters this Zone, it will be canceled, and Kinich will gain 4 Nightsoul points.<br>If the grapple connection should snap due to exceeded distance or some other reason, using a Normal Attack will establish a new connection with a nearby opponent before performing a loop shot.<br><br><i>\"All things come with a cost. I suggest you make a suitable offer... What? No, I don't do installments.\"</i>",
                        "Num": 1,
                        "Lock": 10.0,
                        "Icon": "Skill_S_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Loop Shot DMG",
                                "ParamLevelList": [
                                    "64.17%×2",
                                    "68.983%×2",
                                    "73.795%×2",
                                    "80.212%×2",
                                    "85.025%×2",
                                    "89.838%×2",
                                    "96.255%×2",
                                    "102.672%×2",
                                    "109.089%×2",
                                    "115.506%×2",
                                    "121.923%×2",
                                    "128.34%×2",
                                    "136.361%×2",
                                    "144.383%×2",
                                    "152.404%×2"
                                ]
                            },
                            {
                                "Desc": "Scalespiker Cannon DMG",
                                "ParamLevelList": [
                                    "598.92%",
                                    "643.839%",
                                    "688.758%",
                                    "748.65%",
                                    "793.569%",
                                    "838.488%",
                                    "898.38%",
                                    "958.272%",
                                    "1018.164%",
                                    "1078.056%",
                                    "1137.948%",
                                    "1197.84%",
                                    "1272.705%",
                                    "1347.57%",
                                    "1422.435%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
                                "ParamLevelList": [
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Hail to the Almighty Dragonlord",
                        "Desc": "Unleashes the power of Ajaw the Almighty Dragonlord (on a limited, conditional, restricted, contractual, partial, temporary basis), dealing <color style='color:#99FF88;'>AoE Dendro DMG</color>. Ajaw will unleash his dragon-breath at intervals, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color>.<br>If Kinich is in Nightsoul's Blessing when this is used, this Blessing's duration is extended by 2s.<br><br><i>\"Yes, yes! You stand before K'uhul Ajaw the Almighty Dragonlord! Come forward, then! Kneel, and kiss our feet!\"</i>",
                        "Num": 1,
                        "Lock": 10.0,
                        "Icon": "Skill_E_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "134.0%",
                                    "144.05%",
                                    "154.1%",
                                    "167.5%",
                                    "177.55%",
                                    "187.6%",
                                    "201.0%",
                                    "214.4%",
                                    "227.8%",
                                    "241.2%",
                                    "254.6%",
                                    "268.0%",
                                    "284.75%",
                                    "301.5%",
                                    "318.25%"
                                ]
                            },
                            {
                                "Desc": "Laser DMG",
                                "ParamLevelList": [
                                    "120.736%",
                                    "129.791%",
                                    "138.846%",
                                    "150.92%",
                                    "159.975%",
                                    "169.03%",
                                    "181.104%",
                                    "193.178%",
                                    "205.251%",
                                    "217.325%",
                                    "229.398%",
                                    "241.472%",
                                    "256.564%",
                                    "271.656%",
                                    "286.748%"
                                ]
                            },
                            {
                                "Desc": "Dragon Duration",
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
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "The Price of Desolation",
                        "Desc": "When in Nightsoul's Blessing, opponents hit by Kinich's Elemental Skill DMG will enter the Desolation state, and when affected by Burning or Burgeon reaction DMG, they will restore 7 Nightsoul points to him. Nightsoul points can be gained this way once every 0.8s. The Desolation state will persist until this instance of Kinich's Nightsoul's Blessing ends.",
                        "Icon": "UI_Talent_S_Kinich_05"
                    },
                    {
                        "Name": "Flame Spirit Pact",
                        "Desc": "When a nearby party member triggers a Nightsoul Burst, Kinich will gain 1 stack of Hunter's Experience that lasts 15s, max 2 stacks. When Kinich uses <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s Scalespiker Cannon, all stacks will be consumed, with each stack increasing the DMG dealt by this Cannon shot by 320% of Kinich's ATK.",
                        "Icon": "UI_Talent_S_Kinich_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Repaid in Full",
                        "Desc": "When Kinich is in the air following <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, he can consume 10 Phlogiston points to perform another mid-air swing.<br>While in an area with Phlogiston Device(s) within Natlan, he can use Nightsoul Transmission: Kinich. When the current active character is sprinting, in movement states that result from specific Talents, or a certain height in the air, switching to Kinich will trigger the following: Kinich will fire a grappling hook and swing. Kinich will prioritize valid Coilgrass Sigils as grapple targets. He can use Nightsoul Transmission once every 10s.<br>When interacting with Coilgrass Sigils and other items that can interact with Yumkasaurs, \"Canopy Hunter: Riding High\" will be converted to \"Yumkasaur Mimesis,\" which causes interactions with such items to follow rules applicable to Yumkasaurs, and which will not put Canopy Hunter: Riding High on CD.",
                        "Icon": "UI_Talent_S_Kinich_08"
                    },
                    {
                        "Name": "",
                        "Desc": "While in an area with Phlogiston Device(s) within Natlan, interacting with certain harvestables will increase the movement SPD of own party members by 15% for 10s. Displays the location of nearby <color style='color:#FFD780;'>resources unique to Natlan</color> on the mini-map.",
                        "Icon": "UI_Talent_S_Kachina_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Parrot's Beak",
                        "Desc": "After Kinich lands from <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, his Movement SPD will increase by 20% for 5s.<br>Additionally, Scalespiker Cannon's CRIT DMG is increased by 90%.",
                        "Icon": "UI_Talent_S_Kinich_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Tiger Beetle's Palm",
                        "Desc": "When Kinich's Elemental Skill hits opponents, it will decrease their <color style='color:#99FF88;'>Dendro RES</color> by 30% for 6s.<br>Additionally, the first Scalespiker Cannon Kinich fires after entering Nightsoul's Blessing has increased AoE, and its DMG increases by 100%.",
                        "Icon": "UI_Talent_S_Kinich_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Protosuchian's Claw",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Canopy Hunter: Riding High</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Hummingbird's Feather",
                        "Desc": "When in Nightsoul's Blessing, Kinich will restore 5 Energy after using his loop shots or after unleashing the Scalespiker Cannon. Energy regeneration can happen this way once every 2.8s.",
                        "Icon": "UI_Talent_S_Kinich_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Howler Monkey's Tail",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Hail to the Almighty Dragonlord</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Auspicious Beast's Shape",
                        "Desc": "After the Scalespiker Cannon hits an opponent, it will bounce once between opponents, dealing 700% of Kinich's ATK as <color style='color:#99FF88;'>Dendro DMG</color>.",
                        "Icon": "UI_Talent_S_Kinich_04"
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Nightsun Style",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 rapid strikes.<br>After using his Elemental Skill \"Canopy Hunter: Riding High\"'s mid-air swing attack, he can perform a mid-air Normal Attack before landing.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount to spin and throw his Claymore forward to attack opponents.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 5.0,
                        "Icon": "Skill_A_04",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "98.986%",
                                    "107.043%",
                                    "115.1%",
                                    "126.61%",
                                    "134.667%",
                                    "143.875%",
                                    "156.536%",
                                    "169.197%",
                                    "181.858%",
                                    "195.67%",
                                    "209.482%",
                                    "223.294%",
                                    "237.106%",
                                    "250.918%",
                                    "264.73%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "82.904%",
                                    "89.652%",
                                    "96.4%",
                                    "106.04%",
                                    "112.788%",
                                    "120.5%",
                                    "131.104%",
                                    "141.708%",
                                    "152.312%",
                                    "163.88%",
                                    "175.448%",
                                    "187.016%",
                                    "198.584%",
                                    "210.152%",
                                    "221.72%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "123.496%",
                                    "133.548%",
                                    "143.6%",
                                    "157.96%",
                                    "168.012%",
                                    "179.5%",
                                    "195.296%",
                                    "211.092%",
                                    "226.888%",
                                    "244.12%",
                                    "261.352%",
                                    "278.584%",
                                    "295.816%",
                                    "313.048%",
                                    "330.28%"
                                ]
                            },
                            {
                                "Desc": "Mid-Air Normal Attack DMG",
                                "ParamLevelList": [
                                    "167.7%",
                                    "181.35%",
                                    "195.0%",
                                    "214.5%",
                                    "228.15%",
                                    "243.75%",
                                    "265.2%",
                                    "286.65%",
                                    "308.1%",
                                    "331.5%",
                                    "354.9%",
                                    "378.3%",
                                    "401.7%",
                                    "425.1%",
                                    "448.5%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "48.418%×3",
                                    "52.359%×3",
                                    "56.3%×3",
                                    "61.93%×3",
                                    "65.871%×3",
                                    "70.375%×3",
                                    "76.568%×3",
                                    "82.761%×3",
                                    "88.954%×3",
                                    "95.71%×3",
                                    "102.466%×3",
                                    "109.222%×3",
                                    "115.978%×3",
                                    "122.734%×3",
                                    "129.49%×3"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0"
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
                        "Name": "Canopy Hunter: Riding High",
                        "Desc": "Kinich uses his big-game hunting skills to either move swiftly or attack his opponent.<br>When no opponents are nearby, he fires a grappling hook forward and swings in mid-air, and this Skill's CD decreases by 60%. When an opponent is present, he will fire the hook at the target opponent and enter Nightsoul's Blessing at 0 Nightsoul points.<br>Can be Held. When Held, he can aim the grappling hook.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Kinich</color><br>Kinich's Nightsoul's Blessing lasts 10s and generates 2 Nightsoul points every second.<br>In this state, Kinich will hook onto a nearby opponent and perform a variable attack:<br> · Using a Normal Attack will perform a loop shot around the grapple target based on current movement direction, dealing <color style='color:#99FF88;'>Dendro DMG</color> with the Nightsoul attribute and generating 3 Nightsoul points. Mid-air swing DMG is considered Elemental Skill DMG.<br> · When Nightsoul points are at max, he can use the Elemental Skill \"Scalespiker Cannon\": Consume all Nightsoul points to deal <color style='color:#99FF88;'>Dendro DMG</color> with the Nightsoul attribute. When \"Scalespiker Cannon\" is held, Kinich can take aim at his target. After firing the Cannon, Kinich will try to grapple to its target.<br>While in Nightsoul's Blessing, Kinich will generate a Blind Spot beside an opponent he has grappled to or fired the Cannon at. When he enters this Blind Spot, it will be canceled, and Kinich will gain 4 Nightsoul points.<br>If the grapple connection should snap due to exceeded distance or some other reason, using a Normal Attack will establish a new connection with a nearby opponent before performing a loop shot.<br><br><i>\"All things come with a cost. I suggest you make a suitable offer... What? No, I don't do installments.\"</i>",
                        "Num": 1,
                        "Lock": 10.0,
                        "Icon": "Skill_S_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Loop Shot DMG",
                                "ParamLevelList": [
                                    "57.28%×2",
                                    "61.576%×2",
                                    "65.872%×2",
                                    "71.6%×2",
                                    "75.896%×2",
                                    "80.192%×2",
                                    "85.92%×2",
                                    "91.648%×2",
                                    "97.376%×2",
                                    "103.104%×2",
                                    "108.832%×2",
                                    "114.56%×2",
                                    "121.72%×2",
                                    "128.88%×2",
                                    "136.04%×2"
                                ]
                            },
                            {
                                "Desc": "Scalespiker Cannon DMG",
                                "ParamLevelList": [
                                    "687.44%",
                                    "738.998%",
                                    "790.556%",
                                    "859.3%",
                                    "910.858%",
                                    "962.416%",
                                    "1031.16%",
                                    "1100.0%",
                                    "1168.648%",
                                    "1237.392%",
                                    "1306.136%",
                                    "1374.88%",
                                    "1460.81%",
                                    "1546.74%",
                                    "1632.67%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
                                "ParamLevelList": [
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Hail to the Almighty Dragonlord",
                        "Desc": "Unleashes the power of Ajaw the Almighty Dragonlord (on a limited, conditional, restricted, contractual, partial, temporary basis), dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> that has the Nightsoul attribute. Ajaw will unleash his dragon-breath at intervals, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> that has the Nightsoul attribute.<br>If Kinich is in Nightsoul's Blessing when this is used, this Blessing's duration is extended by 2s.<br><br><i>\"Yes, yes! You stand before K'uhul Ajaw the Almighty Dragonlord! Come forward, then! Kneel, and kiss our feet!\"</i>",
                        "Num": 1,
                        "Lock": 10.0,
                        "Icon": "Skill_E_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "134.0%",
                                    "144.05%",
                                    "154.1%",
                                    "167.5%",
                                    "177.55%",
                                    "187.6%",
                                    "201.0%",
                                    "214.4%",
                                    "227.8%",
                                    "241.2%",
                                    "254.6%",
                                    "268.0%",
                                    "284.75%",
                                    "301.5%",
                                    "318.25%"
                                ]
                            },
                            {
                                "Desc": "Laser DMG",
                                "ParamLevelList": [
                                    "120.736%",
                                    "129.791%",
                                    "138.846%",
                                    "150.92%",
                                    "159.975%",
                                    "169.03%",
                                    "181.104%",
                                    "193.178%",
                                    "205.251%",
                                    "217.325%",
                                    "229.398%",
                                    "241.472%",
                                    "256.564%",
                                    "271.656%",
                                    "286.748%"
                                ]
                            },
                            {
                                "Desc": "Dragon Duration",
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
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "The Price of Desolation",
                        "Desc": "When in Nightsoul's Blessing, opponents hit by Kinich's Elemental Skill DMG will enter the Desolation state, and when affected by Burning or Burgeon reaction DMG, they will restore 7 Nightsoul points to him. Nightsoul points can be gained this way once every 0.8s. The Desolation state will persist until this instance of Kinich's Nightsoul's Blessing ends.",
                        "Icon": "UI_Talent_S_Kinich_05"
                    },
                    {
                        "Name": "Flame Spirit Pact",
                        "Desc": "When a nearby party member triggers a Nightsoul Burst, Kinich will gain 1 stack of Hunter's Experience that lasts 15s, max 2 stacks. When Kinich uses <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s Scalespiker Cannon, all stacks will be consumed, with each stack increasing the DMG dealt by this Cannon shot by 320% of Kinich's ATK.",
                        "Icon": "UI_Talent_S_Kinich_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Repaid in Full",
                        "Desc": "When Kinich is in the air following <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, he can consume 10 Phlogiston points to perform another mid-air swing.<br>While in an area with Phlogiston Mechanics within Natlan, he can use Nightsoul Transmission: Kinich. When the current active character is sprinting, in movement states that result from specific Talents, or a certain height in the air, switching to Kinich will trigger the following: Kinich will fire a grappling hook and swing. Kinich will prioritize valid Coilgrass Sigils as grapple targets. He can use Nightsoul Transmission once every 10s.<br>When interacting with Coilgrass Sigils and other items that can interact with Yumkasaurs, \"Canopy Hunter: Riding High\" will be converted to \"Yumkasaur Mimesis,\" which causes interactions with such items to follow rules applicable to Yumkasaurs, and which will not put Canopy Hunter: Riding High on CD.",
                        "Icon": "UI_Talent_S_Kinich_08"
                    },
                    {
                        "Name": "Swift Envoy",
                        "Desc": "While in an area with Phlogiston Mechanics within Natlan, your own party members' Movement SPD is increased by 15% for 10s. Additionally, the location of items <color style='color:#FFD780;'>unique to Natlan</color> will appear on your mini-map.",
                        "Icon": "UI_Talent_S_Kachina_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Parrot's Beak",
                        "Desc": "After Kinich lands from <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, his Movement SPD will increase by 30% for 6s.<br>Additionally, Scalespiker Cannon's CRIT DMG is increased by 100%.",
                        "Icon": "UI_Talent_S_Kinich_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Tiger Beetle's Palm",
                        "Desc": "When Kinich's Elemental Skill hits opponents, it will decrease their <color style='color:#99FF88;'>Dendro RES</color> by 30% for 6s.<br>Additionally, the first Scalespiker Cannon Kinich fires after entering Nightsoul's Blessing has increased AoE, and its DMG increases by 100%.",
                        "Icon": "UI_Talent_S_Kinich_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Protosuchian's Claw",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Canopy Hunter: Riding High</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Hummingbird's Feather",
                        "Desc": "When in Nightsoul's Blessing, Kinich will restore 5 Energy after using his loop shots or after unleashing the Scalespiker Cannon. Energy regeneration can happen this way once every 2.8s.<br>Additionally, the DMG dealt by <color style='color:#FFD780;'>Hail to the Almighty Dragonlord</color> is increased by 70%.",
                        "Icon": "UI_Talent_S_Kinich_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Howler Monkey's Tail",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Hail to the Almighty Dragonlord</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Auspicious Beast's Shape",
                        "Desc": "After the Scalespiker Cannon hits an opponent, it will bounce once between opponents, dealing 600% of Kinich's ATK as <color style='color:#99FF88;'>Dendro DMG</color>.<br>If this instance of Scalespiker Cannon is buffed by the effects of Flame Spirit Pact or Tiger Beetle's Palm, the bounce it triggered will also be buffed by these effects.",
                        "Icon": "UI_Talent_S_Kinich_04"
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Nightsun Style",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 rapid strikes.<br>After using his Elemental Skill \"Canopy Hunter: Riding High\"'s mid-air swing attack, he can perform a mid-air Normal Attack before landing.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount to spin and throw his Claymore forward to attack opponents.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 5.0,
                        "Icon": "Skill_A_04",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "98.986%",
                                    "107.043%",
                                    "115.1%",
                                    "126.61%",
                                    "134.667%",
                                    "143.875%",
                                    "156.536%",
                                    "169.197%",
                                    "181.858%",
                                    "195.67%",
                                    "209.482%",
                                    "223.294%",
                                    "237.106%",
                                    "250.918%",
                                    "264.73%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "82.904%",
                                    "89.652%",
                                    "96.4%",
                                    "106.04%",
                                    "112.788%",
                                    "120.5%",
                                    "131.104%",
                                    "141.708%",
                                    "152.312%",
                                    "163.88%",
                                    "175.448%",
                                    "187.016%",
                                    "198.584%",
                                    "210.152%",
                                    "221.72%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "123.496%",
                                    "133.548%",
                                    "143.6%",
                                    "157.96%",
                                    "168.012%",
                                    "179.5%",
                                    "195.296%",
                                    "211.092%",
                                    "226.888%",
                                    "244.12%",
                                    "261.352%",
                                    "278.584%",
                                    "295.816%",
                                    "313.048%",
                                    "330.28%"
                                ]
                            },
                            {
                                "Desc": "Mid-Air Normal Attack DMG",
                                "ParamLevelList": [
                                    "167.7%",
                                    "181.35%",
                                    "195.0%",
                                    "214.5%",
                                    "228.15%",
                                    "243.75%",
                                    "265.2%",
                                    "286.65%",
                                    "308.1%",
                                    "331.5%",
                                    "354.9%",
                                    "378.3%",
                                    "401.7%",
                                    "425.1%",
                                    "448.5%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "48.418%×3",
                                    "52.359%×3",
                                    "56.3%×3",
                                    "61.93%×3",
                                    "65.871%×3",
                                    "70.375%×3",
                                    "76.568%×3",
                                    "82.761%×3",
                                    "88.954%×3",
                                    "95.71%×3",
                                    "102.466%×3",
                                    "109.222%×3",
                                    "115.978%×3",
                                    "122.734%×3",
                                    "129.49%×3"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0"
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
                        "Name": "Canopy Hunter: Riding High",
                        "Desc": "Kinich uses his big-game hunting skills to either move swiftly or attack his opponent.<br>When no opponents are nearby, he fires a grappling hook forward and swings in mid-air, and this Skill's CD decreases by 60%. When an opponent is present, he will fire the hook at the target opponent and enter Nightsoul's Blessing at 0 Nightsoul points.<br>Can be Held. When Held, he can aim the grappling hook.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Kinich</color><br>Kinich's Nightsoul's Blessing lasts 10s and generates 2 Nightsoul points every second.<br>In this state, Kinich will hook onto a nearby opponent and perform a variable attack:<br> · Using a Normal Attack will perform loop shots around the grapple target based on current movement direction, dealing <color style='color:#99FF88;'>Dendro DMG</color> with the Nightsoul attribute and generating 3 Nightsoul points. Loop shot DMG is considered Elemental Skill DMG.<br> · When Nightsoul points are at max, he can use the Elemental Skill \"Scalespiker Cannon\": Consume all Nightsoul points to deal <color style='color:#99FF88;'>Dendro DMG</color> with the Nightsoul attribute. When \"Scalespiker Cannon\" is held, Kinich can take aim at his target. After firing the Cannon, Kinich will try to grapple to its target.<br>While in Nightsoul's Blessing, Kinich will generate a Blind Spot beside an opponent he has grappled to or fired the Cannon at. When he enters this Blind Spot, it will be canceled, and Kinich will gain 4 Nightsoul points.<br>If the grapple connection should snap due to exceeded distance or some other reason, using a Normal Attack will establish a new connection with a nearby opponent before performing loop shots.<br><br><i>\"All things come with a cost. I suggest you make a suitable offer... What? No, I don't do installments.\"</i>",
                        "Num": 1,
                        "Lock": 10.0,
                        "Icon": "Skill_S_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Loop Shot DMG",
                                "ParamLevelList": [
                                    "57.28%×2",
                                    "61.576%×2",
                                    "65.872%×2",
                                    "71.6%×2",
                                    "75.896%×2",
                                    "80.192%×2",
                                    "85.92%×2",
                                    "91.648%×2",
                                    "97.376%×2",
                                    "103.104%×2",
                                    "108.832%×2",
                                    "114.56%×2",
                                    "121.72%×2",
                                    "128.88%×2",
                                    "136.04%×2"
                                ]
                            },
                            {
                                "Desc": "Scalespiker Cannon DMG",
                                "ParamLevelList": [
                                    "687.44%",
                                    "738.998%",
                                    "790.556%",
                                    "859.3%",
                                    "910.858%",
                                    "962.416%",
                                    "1031.16%",
                                    "1100.0%",
                                    "1168.648%",
                                    "1237.392%",
                                    "1306.136%",
                                    "1374.88%",
                                    "1460.81%",
                                    "1546.74%",
                                    "1632.67%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
                                "ParamLevelList": [
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Hail to the Almighty Dragonlord",
                        "Desc": "Unleashes the power of Ajaw the Almighty Dragonlord (on a limited, conditional, restricted, contractual, partial, temporary basis), dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> that has the Nightsoul attribute. Ajaw will unleash his dragon-breath at intervals, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> that has the Nightsoul attribute.<br>If Kinich is in Nightsoul's Blessing when this is used, this Blessing's duration is extended by 1.7s.<br><br><i>\"Yes, yes! You stand before K'uhul Ajaw the Almighty Dragonlord! Come forward, then! Kneel, and kiss our feet!\"</i>",
                        "Num": 1,
                        "Lock": 10.0,
                        "Icon": "Skill_E_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "134.0%",
                                    "144.05%",
                                    "154.1%",
                                    "167.5%",
                                    "177.55%",
                                    "187.6%",
                                    "201.0%",
                                    "214.4%",
                                    "227.8%",
                                    "241.2%",
                                    "254.6%",
                                    "268.0%",
                                    "284.75%",
                                    "301.5%",
                                    "318.25%"
                                ]
                            },
                            {
                                "Desc": "Laser DMG",
                                "ParamLevelList": [
                                    "120.736%",
                                    "129.791%",
                                    "138.846%",
                                    "150.92%",
                                    "159.975%",
                                    "169.03%",
                                    "181.104%",
                                    "193.178%",
                                    "205.251%",
                                    "217.325%",
                                    "229.398%",
                                    "241.472%",
                                    "256.564%",
                                    "271.656%",
                                    "286.748%"
                                ]
                            },
                            {
                                "Desc": "Dragon Duration",
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
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "The Price of Desolation",
                        "Desc": "When in Nightsoul's Blessing, opponents hit by Kinich's Elemental Skill DMG will enter the Desolation state, and when affected by Burning or Burgeon reaction DMG, they will restore 7 Nightsoul points to him. Nightsoul points can be gained this way once every 0.8s. The Desolation state will persist until this instance of Kinich's Nightsoul's Blessing ends.",
                        "Icon": "UI_Talent_S_Kinich_05"
                    },
                    {
                        "Name": "Flame Spirit Pact",
                        "Desc": "When a nearby party member triggers a Nightsoul Burst, Kinich will gain 1 stack of Hunter's Experience that lasts 15s, max 2 stacks. When Kinich uses <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s Scalespiker Cannon, all stacks will be consumed, with each stack increasing the DMG dealt by this Cannon shot by 320% of Kinich's ATK.",
                        "Icon": "UI_Talent_S_Kinich_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Repaid in Full",
                        "Desc": "When Kinich is in the air following <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, he can consume 10 Phlogiston points to perform another mid-air swing.<br>While in an area with Phlogiston Mechanics within Natlan, he can use Nightsoul Transmission: Kinich. When the current active character is sprinting, in movement states that result from specific Talents, or a certain height in the air, switching to Kinich will trigger the following: Kinich will fire a grappling hook and swing. Kinich will prioritize valid Coilgrass Sigils as grapple targets. He can use Nightsoul Transmission once every 10s.<br>When interacting with Coilgrass Sigils and other items that can interact with Yumkasaurs, \"Canopy Hunter: Riding High\" will be converted to \"Yumkasaur Mimesis,\" which causes interactions with such items to follow rules applicable to Yumkasaurs, and which will not put Canopy Hunter: Riding High on CD.",
                        "Icon": "UI_Talent_S_Kinich_08"
                    },
                    {
                        "Name": "Swift Envoy",
                        "Desc": "While in an area with Phlogiston Mechanics within Natlan, your own party members' Movement SPD is increased by 15% for 10s. Additionally, the location of items <color style='color:#FFD780;'>unique to Natlan</color> will appear on your mini-map.",
                        "Icon": "UI_Talent_S_Kachina_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Parrot's Beak",
                        "Desc": "After Kinich lands from <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, his Movement SPD will increase by 30% for 6s.<br>Additionally, Scalespiker Cannon's CRIT DMG is increased by 100%.",
                        "Icon": "UI_Talent_S_Kinich_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Tiger Beetle's Palm",
                        "Desc": "When Kinich's Elemental Skill hits opponents, it will decrease their <color style='color:#99FF88;'>Dendro RES</color> by 30% for 6s.<br>Additionally, the first Scalespiker Cannon Kinich fires after entering Nightsoul's Blessing has increased AoE, and its DMG increases by 100%.",
                        "Icon": "UI_Talent_S_Kinich_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Protosuchian's Claw",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Canopy Hunter: Riding High</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Hummingbird's Feather",
                        "Desc": "When in Nightsoul's Blessing, Kinich will restore 5 Energy after using his loop shots or after unleashing the Scalespiker Cannon. Energy regeneration can happen this way once every 2.8s.<br>Additionally, <color style='color:#FFD780;'>Hail to the Almighty Dragonlord</color> deals 70% more DMG.",
                        "Icon": "UI_Talent_S_Kinich_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Howler Monkey's Tail",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Hail to the Almighty Dragonlord</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Auspicious Beast's Shape",
                        "Desc": "After Scalespiker Cannon hits an opponent, it will bounce once between opponents, dealing 700% of Kinich's ATK as <color style='color:#99FF88;'>Dendro DMG</color>.<br>If this Scalespiker Cannon triggers the buffs that Passive Talent \"Flame Spirit Pact\" or the Constellation \"Tiger Beetle's Palm\" grant to the Cannon, the bouncing attack will also obtain the relevant buffs.",
                        "Icon": "UI_Talent_S_Kinich_04"
                    }
                ]
            },
            "5": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Nightsun Style",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 rapid strikes.<br>After using his Elemental Skill \"Canopy Hunter: Riding High\"'s mid-air swing, he can perform a Normal Attack in mid-air before landing.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount to spin and throw his Claymore forward to attack opponents.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 5.0,
                        "Icon": "Skill_A_04",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "98.986%",
                                    "107.043%",
                                    "115.1%",
                                    "126.61%",
                                    "134.667%",
                                    "143.875%",
                                    "156.536%",
                                    "169.197%",
                                    "181.858%",
                                    "195.67%",
                                    "209.482%",
                                    "223.294%",
                                    "237.106%",
                                    "250.918%",
                                    "264.73%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "82.904%",
                                    "89.652%",
                                    "96.4%",
                                    "106.04%",
                                    "112.788%",
                                    "120.5%",
                                    "131.104%",
                                    "141.708%",
                                    "152.312%",
                                    "163.88%",
                                    "175.448%",
                                    "187.016%",
                                    "198.584%",
                                    "210.152%",
                                    "221.72%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "123.496%",
                                    "133.548%",
                                    "143.6%",
                                    "157.96%",
                                    "168.012%",
                                    "179.5%",
                                    "195.296%",
                                    "211.092%",
                                    "226.888%",
                                    "244.12%",
                                    "261.352%",
                                    "278.584%",
                                    "295.816%",
                                    "313.048%",
                                    "330.28%"
                                ]
                            },
                            {
                                "Desc": "Mid-Air Normal Attack DMG",
                                "ParamLevelList": [
                                    "167.7%",
                                    "181.35%",
                                    "195.0%",
                                    "214.5%",
                                    "228.15%",
                                    "243.75%",
                                    "265.2%",
                                    "286.65%",
                                    "308.1%",
                                    "331.5%",
                                    "354.9%",
                                    "378.3%",
                                    "401.7%",
                                    "425.1%",
                                    "448.5%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "48.418%×3",
                                    "52.359%×3",
                                    "56.3%×3",
                                    "61.93%×3",
                                    "65.871%×3",
                                    "70.375%×3",
                                    "76.568%×3",
                                    "82.761%×3",
                                    "88.954%×3",
                                    "95.71%×3",
                                    "102.466%×3",
                                    "109.222%×3",
                                    "115.978%×3",
                                    "122.734%×3",
                                    "129.49%×3"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0",
                                    "50.0"
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
                        "Name": "Canopy Hunter: Riding High",
                        "Desc": "Kinich uses his big-game hunting skills to either move swiftly or attack his opponent.<br>When there is an opponent or object that can be attacked nearby, he will attach a grappling hook to the target and enter Nightsoul's Blessing with 0 Nightsoul points. If neither is nearby, he fires a grappling hook forward and swings in mid-air, and this Skill's CD is decreased by 60%.<br>Can be Held. When Held, he can aim the grappling hook.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Kinich</color><br>Kinich's Nightsoul's Blessing lasts 10s and generates 2 Nightsoul points every second.<br>In this state, Kinich will hook onto a nearby opponent and perform a variable attack:<br> · When using a Normal Attack, Kinich will fire Loop Shots as he loops around the grapple target based on his current movement direction, dealing Nightsoul-aligned <color style='color:#99FF88;'>Dendro DMG</color> and generating 3 Nightsoul points. Loop Shot DMG is considered Elemental Skill DMG.<br> · When Nightsoul points are at max, he can use the Elemental Skill \"Scalespiker Cannon\": Consume all Nightsoul points to deal Nightsoul-aligned <color style='color:#99FF88;'>Dendro DMG</color>. When \"Scalespiker Cannon\" is Held, Kinich can aim this shot. After firing the Cannon, Kinich will try to grapple to its target.<br>While in Nightsoul's Blessing, after grappling an opponent or firing \"Scalespiker Cannon,\" a Blind Spot will be generated next to the opponent. When Kinich enters this Blind Spot, it will disappear and he will gain 4 Nightsoul points.<br>If the grapple connection should snap due to exceeding the maximum distance or some other reason, using a Normal Attack will establish a new connection with a nearby opponent before performing loop shots.<br><br><i>\"All things come with a cost. I suggest you make a suitable offer... What? No, I don't do installments.\"</i>",
                        "Num": 1,
                        "Lock": 10.0,
                        "Icon": "Skill_S_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Loop Shot DMG",
                                "ParamLevelList": [
                                    "57.28%×2",
                                    "61.576%×2",
                                    "65.872%×2",
                                    "71.6%×2",
                                    "75.896%×2",
                                    "80.192%×2",
                                    "85.92%×2",
                                    "91.648%×2",
                                    "97.376%×2",
                                    "103.104%×2",
                                    "108.832%×2",
                                    "114.56%×2",
                                    "121.72%×2",
                                    "128.88%×2",
                                    "136.04%×2"
                                ]
                            },
                            {
                                "Desc": "Scalespiker Cannon DMG",
                                "ParamLevelList": [
                                    "687.44%",
                                    "738.998%",
                                    "790.556%",
                                    "859.3%",
                                    "910.858%",
                                    "962.416%",
                                    "1031.16%",
                                    "1100.0%",
                                    "1168.648%",
                                    "1237.392%",
                                    "1306.136%",
                                    "1374.88%",
                                    "1460.81%",
                                    "1546.74%",
                                    "1632.67%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
                                "ParamLevelList": [
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0",
                                    "20.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Hail to the Almighty Dragonlord",
                        "Desc": "Unleashes the power of Ajaw the Almighty Dragonlord (on a limited, conditional, restricted, contractual, partial, temporary basis), dealing Nightsoul-aligned <color style='color:#99FF88;'>AoE Dendro DMG</color>. Ajaw will unleash his dragon-breath at intervals, dealing Nightsoul-aligned <color style='color:#99FF88;'>AoE Dendro DMG</color>.<br>If Kinich is in Nightsoul's Blessing when this is used, this Blessing's duration is extended by 1.7s.<br><br><i>\"Yes, yes! You stand before K'uhul Ajaw the Almighty Dragonlord! Come forward, then! Kneel, and kiss our feet!\"</i>",
                        "Num": 1,
                        "Lock": 10.0,
                        "Icon": "Skill_E_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "134.0%",
                                    "144.05%",
                                    "154.1%",
                                    "167.5%",
                                    "177.55%",
                                    "187.6%",
                                    "201.0%",
                                    "214.4%",
                                    "227.8%",
                                    "241.2%",
                                    "254.6%",
                                    "268.0%",
                                    "284.75%",
                                    "301.5%",
                                    "318.25%"
                                ]
                            },
                            {
                                "Desc": "Laser DMG",
                                "ParamLevelList": [
                                    "120.736%",
                                    "129.791%",
                                    "138.846%",
                                    "150.92%",
                                    "159.975%",
                                    "169.03%",
                                    "181.104%",
                                    "193.178%",
                                    "205.251%",
                                    "217.325%",
                                    "229.398%",
                                    "241.472%",
                                    "256.564%",
                                    "271.656%",
                                    "286.748%"
                                ]
                            },
                            {
                                "Desc": "Dragon Duration",
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
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s",
                                    "18.0s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
                                "ParamLevelList": [
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0",
                                    "70.0"
                                ]
                            }
                        ]
                    }
                ],
                "PassiveSkills": [
                    {
                        "Name": "The Price of Desolation",
                        "Desc": "When in Nightsoul's Blessing, opponents hit by Kinich's Elemental Skill will enter the Desolation state, and when affected by Burning or Burgeon reaction DMG, they will restore 7 Nightsoul points to him. Nightsoul points can be gained this way once every 0.8s. The Desolation state will persist until this instance of Kinich's Nightsoul's Blessing state ends.",
                        "Icon": "UI_Talent_S_Kinich_05"
                    },
                    {
                        "Name": "Flame Spirit Pact",
                        "Desc": "When a nearby party member triggers a Nightsoul Burst, Kinich will gain 1 stack of Hunter's Experience that lasts 15s. Max 2 stacks. When Kinich uses <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s Scalespiker Cannon, all stacks of Hunter's Experience will be consumed, with each stack consumed increasing the DMG dealt by this Cannon shot by 320% of Kinich's ATK.",
                        "Icon": "UI_Talent_S_Kinich_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Repaid in Full",
                        "Desc": "When Kinich is in the air following <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, he can consume 10 Phlogiston points to perform another mid-air swing.<br>While in an area with Phlogiston Mechanics within Natlan, he can use Nightsoul Transmission: Kinich. When the current active character is sprinting, in movement states that result from specific Talents, or a certain height in the air, when you switch to Kinich: Kinich will perform one of the following actions depending on the conditions met:<br> · When facing a Coilgrass Sigil that can be interacted with: He will fire a grappling hook towards it to move;<br> · When there are nearby opponents and you are in combat: Kinich will use Canopy Hunter: Riding High in the direction of the opponents;<br>Otherwise, Kinich will fire a grappling hook and swing, prioritizing valid Coilgrass Sigils as grapple targets.<br>Nightsoul Transmission can be triggered once every 10s by your own party.<br><br>When interacting with Coilgrass Sigils and other items that can interact with Yumkasaurs, \"Canopy Hunter: Riding High\" will be converted to \"Yumkasaur Mimesis,\" which causes interactions with such items to follow rules applicable to Yumkasaurs, and which will not put Canopy Hunter: Riding High on CD.",
                        "Icon": "UI_Talent_S_Kinich_08"
                    },
                    {
                        "Name": "Swift Envoy",
                        "Desc": "While in an area with Phlogiston Mechanics within Natlan, interacting with some harvestable items will increase your own party members' Movement SPD by 15% for 10s. Additionally, the location of nearby <color style='color:#FFD780;'>resources unique to Natlan</color> will appear on your mini-map.",
                        "Icon": "UI_Talent_S_Kachina_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Parrot's Beak",
                        "Desc": "After Kinich lands from <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, his Movement SPD will increase by 30% for 6s.<br>Additionally, Scalespiker Cannon's CRIT DMG is increased by 100%.",
                        "Icon": "UI_Talent_S_Kinich_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Tiger Beetle's Palm",
                        "Desc": "When Kinich's Elemental Skill hits an opponent, it will decrease their <color style='color:#99FF88;'>Dendro RES</color> by 30% for 6s.<br>Additionally, the first Scalespiker Cannon Kinich fires after entering Nightsoul's Blessing has increased AoE, and its DMG increases by 100%.",
                        "Icon": "UI_Talent_S_Kinich_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Protosuchian's Claw",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Canopy Hunter: Riding High</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Hummingbird's Feather",
                        "Desc": "When in Nightsoul's Blessing, Kinich will restore 5 Energy after using his Loop Shots or after unleashing the Scalespiker Cannon. Energy can be regenerated this way once every 2.8s.<br>Additionally, <color style='color:#FFD780;'>Hail to the Almighty Dragonlord</color> deals 70% more DMG.",
                        "Icon": "UI_Talent_S_Kinich_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Howler Monkey's Tail",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Hail to the Almighty Dragonlord</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Auspicious Beast's Shape",
                        "Desc": "After Scalespiker Cannon hits an opponent, it will bounce between opponents once, dealing 700% of Kinich's ATK as <color style='color:#99FF88;'>Dendro DMG</color>.<br>If this Scalespiker Cannon triggers the buffs that Passive Talent \"Flame Spirit Pact\" or the Constellation \"Tiger Beetle's Palm\" grant to the Cannon, the bouncing attack will also obtain the relevant buffs.",
                        "Icon": "UI_Talent_S_Kinich_04"
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Nightsun Style",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 rapid strikes.<br>After using his Elemental Skill \"Canopy Hunter: Riding High\"'s mid-air swing, he can perform a Normal Attack in mid-air before landing.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to spin and throw his Claymore forward to attack opponents.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_04",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "98.986%",
                                    "107.043%",
                                    "115.1%",
                                    "126.61%",
                                    "134.667%",
                                    "143.875%",
                                    "156.536%",
                                    "169.197%",
                                    "181.858%",
                                    "195.67%",
                                    "209.482%",
                                    "223.294%",
                                    "237.106%",
                                    "250.918%",
                                    "264.73%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "82.904%",
                                    "89.652%",
                                    "96.4%",
                                    "106.04%",
                                    "112.788%",
                                    "120.5%",
                                    "131.104%",
                                    "141.708%",
                                    "152.312%",
                                    "163.88%",
                                    "175.448%",
                                    "187.016%",
                                    "198.584%",
                                    "210.152%",
                                    "221.72%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "123.496%",
                                    "133.548%",
                                    "143.6%",
                                    "157.96%",
                                    "168.012%",
                                    "179.5%",
                                    "195.296%",
                                    "211.092%",
                                    "226.888%",
                                    "244.12%",
                                    "261.352%",
                                    "278.584%",
                                    "295.816%",
                                    "313.048%",
                                    "330.28%"
                                ]
                            },
                            {
                                "Desc": "Mid-Air Normal Attack DMG",
                                "ParamLevelList": [
                                    "167.7%",
                                    "181.35%",
                                    "195.0%",
                                    "214.5%",
                                    "228.15%",
                                    "243.75%",
                                    "265.2%",
                                    "286.65%",
                                    "308.1%",
                                    "331.5%",
                                    "354.9%",
                                    "378.3%",
                                    "401.7%",
                                    "425.1%",
                                    "448.5%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "48.418%×3",
                                    "52.359%×3",
                                    "56.3%×3",
                                    "61.93%×3",
                                    "65.871%×3",
                                    "70.375%×3",
                                    "76.568%×3",
                                    "82.761%×3",
                                    "88.954%×3",
                                    "95.71%×3",
                                    "102.466%×3",
                                    "109.222%×3",
                                    "115.978%×3",
                                    "122.734%×3",
                                    "129.49%×3"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50",
                                    "50"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
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
                                "Desc": "Low/High Plunge DMG",
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
                        "Name": "Canopy Hunter: Riding High",
                        "Desc": "Kinich uses his big-game hunting skills to either move swiftly or attack his opponent.<br>When there is an opponent or object that can be attacked nearby, he will attach a grappling hook to the target and enter Nightsoul's Blessing with 0 Nightsoul points. If neither is nearby, he fires a grappling hook forward and swings in mid-air, and this Skill's CD is decreased by 60%.<br>This skill can be Held to release. When it is Held, Kinich can aim the grappling hook.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Kinich</color><br>Kinich's Nightsoul's Blessing lasts 10s and generates 2 Nightsoul points every second.<br>In this state, Kinich will hook onto a nearby opponent and perform a variable attack:<br> · When using a Normal Attack, Kinich will fire Loop Shots as he loops around the grappled target based on his current movement direction, dealing Nightsoul-aligned <color style='color:#99FF88;'>Dendro DMG</color> and generating 3 Nightsoul points. Loop Shot DMG is considered Elemental Skill DMG.<br> · When Nightsoul points are at max, he can use the Elemental Skill \"Scalespiker Cannon\": Consume all Nightsoul points to deal Nightsoul-aligned <color style='color:#99FF88;'>Dendro DMG</color>. When \"Scalespiker Cannon\" is Held, Kinich can aim this shot. After firing the Cannon, Kinich will try to grapple to its target.<br>While in Nightsoul's Blessing, after grappling an opponent or firing \"Scalespiker Cannon,\" a Blind Spot will be generated next to the opponent. When Kinich enters this Blind Spot, it will disappear and he will generate 4 Nightsoul points.<br>If the grapple connection should snap due to exceeding the maximum distance or some other reason, using a Normal Attack will establish a new connection with a nearby opponent before performing Loop Shots.<br><br><i>\"All things come with a cost. I suggest you make a suitable offer... What? No, I don't do installments.\"</i>",
                        "Icon": "Skill_S_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Loop Shot DMG",
                                "ParamLevelList": [
                                    "57.28%×2",
                                    "61.576%×2",
                                    "65.872%×2",
                                    "71.6%×2",
                                    "75.896%×2",
                                    "80.192%×2",
                                    "85.92%×2",
                                    "91.648%×2",
                                    "97.376%×2",
                                    "103.104%×2",
                                    "108.832%×2",
                                    "114.56%×2",
                                    "121.72%×2",
                                    "128.88%×2",
                                    "136.04%×2"
                                ]
                            },
                            {
                                "Desc": "Scalespiker Cannon DMG",
                                "ParamLevelList": [
                                    "687.44%",
                                    "738.998%",
                                    "790.556%",
                                    "859.3%",
                                    "910.858%",
                                    "962.416%",
                                    "1031.16%",
                                    "1099.904%",
                                    "1168.648%",
                                    "1237.392%",
                                    "1306.136%",
                                    "1374.88%",
                                    "1460.81%",
                                    "1546.74%",
                                    "1632.67%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
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
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Hail to the Almighty Dragonlord",
                        "Desc": "Unleashes the power of the Almighty Dragonlord, K'uhul Ajaw (on a limited, conditional, restricted, contractual, partial, temporary basis), dealing Nightsoul-aligned <color style='color:#99FF88;'>AoE Dendro DMG</color>. Ajaw will unleash his Dragon Breath at intervals, dealing Nightsoul-aligned <color style='color:#99FF88;'>AoE Dendro DMG</color>.<br>If Kinich is in Nightsoul's Blessing when this is used, this Blessing's duration is extended by 1.7s.<br><br><i>\"Yes, yes! You stand before K'uhul Ajaw the Almighty Dragonlord! Come forward, then! Kneel, and kiss our feet!\"</i>",
                        "Icon": "Skill_E_Kinich_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "134.0%",
                                    "144.05%",
                                    "154.1%",
                                    "167.5%",
                                    "177.55%",
                                    "187.6%",
                                    "201.0%",
                                    "214.4%",
                                    "227.8%",
                                    "241.2%",
                                    "254.6%",
                                    "268.0%",
                                    "284.75%",
                                    "301.5%",
                                    "318.25%"
                                ]
                            },
                            {
                                "Desc": "Dragon Breath DMG",
                                "ParamLevelList": [
                                    "120.736%",
                                    "129.7912%",
                                    "138.8464%",
                                    "150.92%",
                                    "159.9752%",
                                    "169.0304%",
                                    "181.104%",
                                    "193.1776%",
                                    "205.2512%",
                                    "217.3248%",
                                    "229.3984%",
                                    "241.472%",
                                    "256.564%",
                                    "271.656%",
                                    "286.748%"
                                ]
                            },
                            {
                                "Desc": "Duration",
                                "ParamLevelList": [
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s",
                                    "15s"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s",
                                    "18s"
                                ]
                            },
                            {
                                "Desc": "Energy Cost",
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
                        "Name": "The Price of Desolation",
                        "Desc": "When Kinich is in Nightsoul's Blessing state, opponents hit by his Elemental Skill will enter the Desolation state, and when affected by Burning or Burgeon reaction DMG, they will restore 7 Nightsoul points to him. Nightsoul points can be gained this way once every 0.8s. The Desolation state will persist until this instance of Kinich's Nightsoul's Blessing state ends.",
                        "Icon": "UI_Talent_S_Kinich_05"
                    },
                    {
                        "Name": "Flame Spirit Pact",
                        "Desc": "After a nearby party member triggers a Nightsoul Burst, Kinich will gain 1 stack of Hunter's Experience that lasts 15s. Max 2 stacks. When Kinich uses <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s Scalespiker Cannon, all stacks of Hunter's Experience will be consumed, with each stack consumed increasing the DMG dealt by this Cannon shot by 320% of Kinich's ATK.",
                        "Icon": "UI_Talent_S_Kinich_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Repaid in Full",
                        "Desc": "When Kinich is in the air following <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, he can consume 10 Phlogiston points to perform another mid-air swing.<br>While in an area with Phlogiston Mechanics within Natlan, he can use Nightsoul Transmission: Kinich. When the current active character is sprinting, in movement states that result from specific Talents, or in the air, when you switch to Kinich: Kinich will perform one of the following actions depending on the conditions met:<br> · When facing a Coilgrass Sigil that can be interacted with: He will fire a grappling hook towards it to move;<br> · When there are nearby opponents and you are in combat: Kinich will use Canopy Hunter: Riding High in the direction of the opponents;<br>Otherwise, Kinich will fire a grappling hook and swing, prioritizing valid Coilgrass Sigils as grapple targets.<br>Nightsoul Transmission can be triggered once every 10s by your own party.<br><br>When interacting with Coilgrass Sigils and other items that Yumkasaurs can interact with, \"Canopy Hunter: Riding High\" will be converted to \"Yumkasaur Mimesis,\" which causes interactions with such items to follow rules applicable to Yumkasaurs, and which will not put Canopy Hunter: Riding High on CD.",
                        "Icon": "UI_Talent_S_Kinich_08"
                    },
                    {
                        "Name": "Swift Envoy",
                        "Desc": "While in an area with Phlogiston Mechanics within Natlan, interacting with some harvestable items will increase your own party members' Movement SPD by 15% for 10s. Additionally, the location of nearby <color style='color:#FFD780;'>resources unique to Natlan</color> will appear on your mini-map.",
                        "Icon": "UI_Talent_S_Kachina_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Parrot's Beak",
                        "Desc": "After Kinich lands from <color style='color:#FFD780;'>Canopy Hunter: Riding High</color>'s mid-air swing, his Movement SPD will increase by 30% for 6s.<br>Additionally, Scalespiker Cannon's CRIT DMG is increased by 100%.",
                        "Icon": "UI_Talent_S_Kinich_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Tiger Beetle's Palm",
                        "Desc": "When Kinich's Elemental Skill hits an opponent, it will decrease their <color style='color:#99FF88;'>Dendro RES</color> by 30% for 6s.<br>Additionally, the first Scalespiker Cannon Kinich fires after entering Nightsoul's Blessing has increased AoE, and its DMG increases by 100%.",
                        "Icon": "UI_Talent_S_Kinich_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Protosuchian's Claw",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Canopy Hunter: Riding High</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Hummingbird's Feather",
                        "Desc": "When in Nightsoul's Blessing, Kinich will restore 5 Energy after using his Loop Shots or after unleashing the Scalespiker Cannon. Energy can be regenerated this way once every 2.8s.<br>Additionally, <color style='color:#FFD780;'>Hail to the Almighty Dragonlord</color> deals 70% more DMG.",
                        "Icon": "UI_Talent_S_Kinich_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Howler Monkey's Tail",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Hail to the Almighty Dragonlord</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Kinich_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Auspicious Beast's Shape",
                        "Desc": "After Scalespiker Cannon hits an opponent, it will bounce between opponents once, dealing 700% of Kinich's ATK as <color style='color:#99FF88;'>Dendro DMG</color>.<br>If this Scalespiker Cannon triggers the buffs that Ascension Talent \"Flame Spirit Pact\" or the Constellation \"Tiger Beetle's Palm\" grant to the Cannon, the bouncing attack will also obtain the relevant buffs.",
                        "Icon": "UI_Talent_S_Kinich_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Kinich": {
        "AttackList": [
            {
                "Skill": "Loop Shot",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        0.5
                    ]
                },
                "AtkTag": "Elem Skill<br>Nightsoul",
                "AttTag": "E1",
                "AttGrp": "Once per 2s",
                "Element": "Grass",
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Scalespiker",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "Elem Skill<br>Nightsoul",
                "AttTag": "E2",
                "AttGrp": "Once per 1.2s",
                "Element": "Grass",
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
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Scalespiker C2",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        5.0
                    ]
                },
                "AtkTag": "Elem Skill<br>Nightsoul",
                "AttTag": "E2",
                "AttGrp": "Once per 1.2s",
                "Element": "Grass",
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
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "C6 Bounce",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "Elem Skill<br>Nightsoul",
                "AttTag": "E2",
                "AttGrp": "Once per 1.2s",
                "Element": "Grass",
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
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "C6 Bounce (Trigger C2)",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        5.0
                    ]
                },
                "AtkTag": "Elem Skill<br>Nightsoul",
                "AttTag": "E2",
                "AttGrp": "Once per 1.2s",
                "Element": "Grass",
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
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Q Casting",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.0,
                        8.5
                    ]
                },
                "AtkTag": "Elem Burst<br>Nightsoul",
                "AttTag": "Elem Burst",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Grass",
                "GU": 1.0,
                "Poise": 35.0,
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
                "Skill": "Dragon Breath",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Elem Burst<br>Nightsoul",
                "AttTag": "Elem Burst",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Grass",
                "GU": 1.0,
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
                "StrikeType": "Default",
                "AttackType": "Range",
                "RetreatType": "ByHitDirection"
            },
            {
                "Skill": "Mid-Air Normal",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.0,
                        1.7,
                        3.0
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 100.0,
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
                "StrikeType": "Default",
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        3.0,
                        3.0,
                        3.5
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 131.0,
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        3.9,
                        2.0,
                        3.5
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 117.0,
                "ForceType": 2,
                "Force": [
                    400.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.09,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.3,
                        2.2,
                        3.5
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 160.0,
                "ForceType": 2,
                "Force": [
                    400.0,
                    0.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.12,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 4",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.0,
                        2.6
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 171.095,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": true,
                "Arkhe": 0.0,
                "HTime": 0.12,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Blunt",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Charged ATK x3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.5,
                        3.0,
                        2.1
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 40.0,
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            }
        ]
    }
}