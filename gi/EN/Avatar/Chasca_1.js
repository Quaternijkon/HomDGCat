// Auto Generated

var _AvatarDataConfig_ = {
    "Chasca": {
        "BallList": [
            {
                "When": "Shadowhunt Shell",
                "DropArray": [
                    {
                        "Num": 5,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD",
                "CD": 9999
            }
        ],
        "EndureList": [
            {
                "Skill": "Nightsoul",
                "Endure": 0.3
            }
        ],
        "WindZoneList": [],
        "OtherDataList": [
            "While under Nightsoul's Blessing, Chasca is @immune to Frozen, Petrification and Struggle# (= Hydro Abyss Mage's water bubble)",
            "<b>@5.2v3 Changes#</b><br>• Passive Talent 1's DMG increase is @added to the DMG Bonus multiplier#.<br>• Phlogiston consumption rate @decreased by 30%#. Nightsoul consumption rate @during ascension decreased by 30%#.",
            "<b>@Why can't Chasca trigger Amos' Bow and Slingshot passives?#</b><br>Because Chasca' DMG is directly imploded on the 6 targets after aiming (like Nahida's scan). While ordinary archers shoot an arrow, which deals DMG only when hitting a target.<br>It's like magic vs physics.",
            "<b>@Interruption RES#</b><br>• Nightsoul interruption coefficient: @0.3# (Same as Xingqiu Q on ranged characters)",
            "<b>@Particle Generation#</b><br>• Generates @5 Anemo Particles# with Shadowhunt Shell or Shining Shadowhunt Shell. Only once every Nightsoul.",
            "<b>@Elemental Application#</b><br>• Elemntal Skill: Anemo shells apply @once every 1.5s#. Transformed shells apply @once every 2 hits# (resets counting after 1.5s). These two sets do not share CD.<br>• Elemental Burst: Anemo and transformed hits share CD, applying @once every 2 hits#."
        ]
    }
}

var _AvatarMats_ = {
    "Chasca": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104151": 1,
                "101253": 3,
                "112101": 3
            },
            {
                "202": 40000,
                "104152": 3,
                "113067": 2,
                "101253": 10,
                "112101": 15
            },
            {
                "202": 60000,
                "104152": 6,
                "113067": 4,
                "101253": 20,
                "112102": 12
            },
            {
                "202": 80000,
                "104153": 3,
                "113067": 8,
                "101253": 30,
                "112102": 18
            },
            {
                "202": 100000,
                "104153": 6,
                "113067": 12,
                "101253": 45,
                "112103": 12
            },
            {
                "202": 120000,
                "104154": 6,
                "113067": 20,
                "101253": 60,
                "112103": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104353": 3,
                "112101": 6
            },
            {
                "202": 17500,
                "104354": 2,
                "112102": 3
            },
            {
                "202": 25000,
                "104354": 4,
                "112102": 4
            },
            {
                "202": 30000,
                "104354": 6,
                "112102": 6
            },
            {
                "202": 37500,
                "104354": 9,
                "112102": 9
            },
            {
                "202": 120000,
                "104355": 4,
                "112103": 4,
                "113061": 1
            },
            {
                "202": 260000,
                "104355": 6,
                "112103": 6,
                "113061": 1
            },
            {
                "202": 450000,
                "104355": 12,
                "112103": 9,
                "113061": 2
            },
            {
                "202": 700000,
                "104355": 16,
                "112103": 12,
                "113061": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104353": 3,
                "112101": 6
            },
            {
                "202": 17500,
                "104354": 2,
                "112102": 3
            },
            {
                "202": 25000,
                "104354": 4,
                "112102": 4
            },
            {
                "202": 30000,
                "104354": 6,
                "112102": 6
            },
            {
                "202": 37500,
                "104354": 9,
                "112102": 9
            },
            {
                "202": 120000,
                "104355": 4,
                "112103": 4,
                "113061": 1
            },
            {
                "202": 260000,
                "104355": 6,
                "112103": 6,
                "113061": 1
            },
            {
                "202": 450000,
                "104355": 12,
                "112103": 9,
                "113061": 2
            },
            {
                "202": 700000,
                "104355": 16,
                "112103": 12,
                "113061": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104353": 3,
                "112101": 6
            },
            {
                "202": 17500,
                "104354": 2,
                "112102": 3
            },
            {
                "202": 25000,
                "104354": 4,
                "112102": 4
            },
            {
                "202": 30000,
                "104354": 6,
                "112102": 6
            },
            {
                "202": 37500,
                "104354": 9,
                "112102": 9
            },
            {
                "202": 120000,
                "104355": 4,
                "112103": 4,
                "113061": 1
            },
            {
                "202": 260000,
                "104355": 6,
                "112103": 6,
                "113061": 1
            },
            {
                "202": 450000,
                "104355": 12,
                "112103": 9,
                "113061": 2
            },
            {
                "202": 700000,
                "104355": 16,
                "112103": 12,
                "113061": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Chasca": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Phantom Feather Flurry",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, mighty winds will accumulate on the arrowhead. A fully charged wind arrow will deal <color style='color:#80FFD7;'>Anemo DMG</color>.<color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, hitting opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "48.008%",
                                    "51.915%",
                                    "55.823%",
                                    "61.405%",
                                    "65.313%",
                                    "69.779%",
                                    "75.919%",
                                    "82.06%",
                                    "88.2%",
                                    "94.899%",
                                    "101.598%",
                                    "108.297%",
                                    "114.995%",
                                    "121.694%",
                                    "128.393%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.588%",
                                    "48.218%",
                                    "51.847%",
                                    "57.032%",
                                    "60.661%",
                                    "64.809%",
                                    "70.512%",
                                    "76.215%",
                                    "81.918%",
                                    "88.14%",
                                    "94.362%",
                                    "100.583%",
                                    "106.805%",
                                    "113.026%",
                                    "119.248%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "29.697%×2",
                                    "32.115%×2",
                                    "34.532%×2",
                                    "37.985%×2",
                                    "40.402%×2",
                                    "43.165%×2",
                                    "46.964%×2",
                                    "50.762%×2",
                                    "54.561%×2",
                                    "58.704%×2",
                                    "62.848%×2",
                                    "66.992%×2",
                                    "71.136%×2",
                                    "75.28%×2",
                                    "79.424%×2"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "76.402%",
                                    "82.621%",
                                    "88.84%",
                                    "97.724%",
                                    "103.943%",
                                    "111.05%",
                                    "120.822%",
                                    "130.595%",
                                    "140.367%",
                                    "151.028%",
                                    "161.689%",
                                    "172.35%",
                                    "183.01%",
                                    "193.671%",
                                    "204.332%"
                                ]
                            },
                            {
                                "Desc": "Aimed Shot",
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
                                "Desc": "Fully-Charged Aimed Shot",
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
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "56.829%",
                                    "61.454%",
                                    "66.08%",
                                    "72.688%",
                                    "77.314%",
                                    "82.6%",
                                    "89.869%",
                                    "97.138%",
                                    "104.406%",
                                    "112.336%",
                                    "120.266%",
                                    "128.195%",
                                    "136.125%",
                                    "144.054%",
                                    "151.984%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "113.634%/141.934%",
                                    "122.883%/153.487%",
                                    "132.132%/165.04%",
                                    "145.345%/181.544%",
                                    "154.594%/193.097%",
                                    "165.165%/206.3%",
                                    "179.7%/224.454%",
                                    "194.234%/242.609%",
                                    "208.769%/260.763%",
                                    "224.624%/280.568%",
                                    "240.48%/300.373%",
                                    "256.336%/320.178%",
                                    "272.192%/339.982%",
                                    "288.048%/359.787%",
                                    "303.904%/379.592%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Spirit Reins, Shadow Hunt",
                        "Desc": "Chasca and the will residing in her weapon resonate, dealing Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>.<br>After using this Skill, Chasca gains 80 Nightsoul points and enters the Nightsoul's Blessing state.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Chasca</color><br>Continually consume Nightsoul points. When Nightsoul points are fully depleted or the skill is used again, Chasca's Nightsoul's Blessing state will end. Her Nightsoul's Blessing has the following traits:<br> · Mounts \"Soulsniper: Ritual Staff,\" increasing Chasca's Movement SPD and interruption resistance. In this state, Chasca will continually consume Nightsoul points or Phlogiston, and stay airborne. When Springing or increasing height, extra Nightsoul points or Phlogiston will be consumed.<br> · When using Normal Or Charged Attacks, Tap or Hold to switch between using \"Multitarget Fire\" in different ways.<br><br><color style='color:#FFD780;'>Multitarget Fire</color><br><color style='color:#FFD780;'>Tap</color><br>Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> to opponents in front. This DMG is considered Normal Attack DMG.<br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode, loading bullets into the cylinder's chambers, and choosing a certain number of opponents within a certain range, before firing up to 6 Shadowhunt Shells at the selected opponents based on the amount of time the attack was charged. After Holding for a certain amount of time, Chasca will finish loading the magazine, and directly fire X Shadowhunt Shells at the selected opponents.<br><br><color style='color:#FFD780;'>Shadowhunt Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>, which is considered Charged Attack DMG.<br> · The 4th, 5th, and 6th Shells will undergo Elemental Conversion based on the Elemental Types of the other characters in the party: For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, one Shadowhunt Shell will be converted into a \"Shining Shadowhunt Shell\" of the corresponding Elemental Type, dealing Nightsoul-aligned DMG corresponding to that Elemental Type. This DMG is considered Charged Attack DMG.<br> · The last Shadowhunt Shell loaded into the cylinder is fired first.<br><br><i>In theory, as long as she's willing, those reins can bridle anything... But what could possibly be as cool as a giant hand cannon?</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Activation DMG",
                                "ParamLevelList": [
                                    "60.0%",
                                    "64.5%",
                                    "69.0%",
                                    "75.0%",
                                    "79.5%",
                                    "84.0%",
                                    "90.0%",
                                    "96.0%",
                                    "102.0%",
                                    "108.0%",
                                    "114.0%",
                                    "120.0%",
                                    "127.5%",
                                    "135.0%",
                                    "142.5%"
                                ]
                            },
                            {
                                "Desc": "Multi-Aim Press DMG",
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
                                "Desc": "Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "60.8%",
                                    "65.36%",
                                    "69.92%",
                                    "76.0%",
                                    "80.56%",
                                    "85.12%",
                                    "91.2%",
                                    "97.28%",
                                    "103.36%",
                                    "109.44%",
                                    "115.52%",
                                    "121.6%",
                                    "129.2%",
                                    "136.8%",
                                    "144.4%"
                                ]
                            },
                            {
                                "Desc": "Shining Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "191.84%",
                                    "206.228%",
                                    "220.616%",
                                    "239.8%",
                                    "254.188%",
                                    "268.576%",
                                    "287.76%",
                                    "306.944%",
                                    "326.128%",
                                    "345.312%",
                                    "364.496%",
                                    "383.68%",
                                    "407.66%",
                                    "431.64%",
                                    "455.62%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
                                "ParamLevelList": [
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Soul Reaper's Fatal Round",
                        "Desc": "Chasca concentrates her will, firing a single \"Galesplitting Soulreaper Shell\" that deals Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>. Afterward, the Galesplitting Soulreaper Shell will split into 6 Soulreaper Shells, which attack nearby opponents.<br><br><color style='color:#FFD780;'>Soulreaper Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>.<br> · For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, two Soulreaper Shells will undergo Elemental Conversion to become \"Radiant Soulreaper Shells,\" which deal Nightsoul-aligned Elemental DMG of the corresponding Elemental Type.<br><br><i>None can escape from the incessant whispers of the night and moonlight, just as no foe can flee her attentive eyes once in her sight.</i>",
                        "Num": 1,
                        "Lock": "CircleR25H20HC",
                        "Icon": "Skill_E_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Galesplitting Soulreaper Shell DMG",
                                "ParamLevelList": [
                                    "88.0%",
                                    "94.6%",
                                    "101.2%",
                                    "110.0%",
                                    "116.6%",
                                    "123.2%",
                                    "132.0%",
                                    "140.8%",
                                    "149.6%",
                                    "158.4%",
                                    "167.2%",
                                    "176.0%",
                                    "187.0%",
                                    "198.0%",
                                    "209.0%"
                                ]
                            },
                            {
                                "Desc": "Soulreaping Shell DMG",
                                "ParamLevelList": [
                                    "103.4%",
                                    "111.155%",
                                    "118.91%",
                                    "129.25%",
                                    "137.005%",
                                    "144.76%",
                                    "155.1%",
                                    "165.44%",
                                    "175.78%",
                                    "186.12%",
                                    "196.46%",
                                    "206.8%",
                                    "219.725%",
                                    "232.65%",
                                    "245.575%"
                                ]
                            },
                            {
                                "Desc": "Radiant Soulreaping Shell DMG",
                                "ParamLevelList": [
                                    "206.8%",
                                    "222.31%",
                                    "237.82%",
                                    "258.5%",
                                    "274.01%",
                                    "289.52%",
                                    "310.2%",
                                    "330.88%",
                                    "351.56%",
                                    "372.24%",
                                    "392.92%",
                                    "413.6%",
                                    "439.45%",
                                    "465.3%",
                                    "491.15%"
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
                        "Name": "Bullet Trick",
                        "Desc": "When the Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> is used, if the party has 1/2/3 types of <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> characters, then there is a 33%/67%/100% chance to trigger \"Spiritbinding Conversion,\" causing the 3rd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder to be converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color> of the corresponding Elemental Type.",
                        "Icon": "UI_Talent_S_Chasca_05"
                    },
                    {
                        "Name": "Intent to Cover",
                        "Desc": "When a nearby party member triggers a Nightsoul Burst, Chasca will fire a \"Burning Shadowhunt Shot\" at a nearby opponent, dealing Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> equal to 150% of the <color style='color:#FFD780;'>Shadowhunt Shell</color> DMG from her Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>. If the party has <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> characters, the Burning Shadowhunt Shot will be converted to deal Nightsoul-aligned Elemental DMG of the corresponding Elemental Type equivalent to 150% of the DMG dealt by <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Shining Shadowhunt Shells</color>.<br>The DMG done in this way is considered Charged Attack DMG.",
                        "Icon": "UI_Talent_S_Chasca_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Everburning Heart",
                        "Desc": "After Nightsoul points are fully depleted, Chasca will begin consuming Phlogiston to stay in Nightsoul's Blessing instead.<br>While in an area with Phlogiston Mechanics within Natlan, she can use Nightsoul Transmission: Chasca. When the active character is at a certain height in the air, the following will trigger when you switch to Chasca: Chasca will enter Nightsoul's Blessing and gain 32 Nightsoul points. Nightsoul Transmission can be triggered once every 10s by your own team.<br><br>In addition, if the Elemental Skill <color style='color:#FFD780;'>Spirit Rein, Shadow Hunt</color> is Held while in Nightsoul's Blessing, Chasca will execute a Nightsoul-aligned Plunging Attack, and when released, the Plunging Attack can be canceled, and she will remain airborne. If she strikes the ground during the Plunging Attack, Chasca's Nightsoul's Blessing state will end.",
                        "Icon": "UI_Talent_S_Chasca_07"
                    },
                    {
                        "Name": "Life Talent",
                        "Desc": "",
                        "Icon": "UI_Talent_S_Liuyun_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Cylinder, the Restless Roulette",
                        "Desc": "When triggering the Passive Talent \"Bullet Trick\"'s \"Spiritbinding Conversion,\" will additionally cause the 2nd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder to be converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color>.<br>In addition, the chance to trigger \"Spiritbinding Conversion\" is increased: If the party has 1/2/3 types of <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> characters, then there is a 67%/100%/100% chance to trigger \"Spiritbinding Conversion.\"<br><br>You must first unlock the Passive Talent \"Bullet Trick.\"<br><br>In addition, Chasca's Nightsoul point and Phlogiston consumption in her Nightsoul's Blessing state is decreased by 30% while out of combat.",
                        "Icon": "UI_Talent_S_Chasca_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Muzzle, the Searing Smoke",
                        "Desc": "When the <color style='color:#FFD780;'>Shadowhunt Shells</color> or <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> from <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> hit opponents, they will deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Shadowhunt Shells</color> or <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> equal to 400% of Chasca's ATK. This effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Multitarget Fire</color>.",
                        "Icon": "UI_Talent_S_Chasca_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Reins, her Careful Control",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Sparks, the Sudden Shot",
                        "Desc": "When the <color style='color:#FFD780;'>Radiant Soulreaper Shells</color> from <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> hit opponents, they will restore 1.5 Elemental Energy to Chasca, and deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Radiant Soulreaper Shells</color> equal to 400% of Chasca's ATK. This effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color>.",
                        "Icon": "UI_Talent_S_Chasca_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Brim, the Sandshadow's Silhouette",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Showdown, the Glory of Battle",
                        "Desc": "After the Passive Talent \"Bullet Trick\"'s \"Spiritbinding Conversion\" is triggered, Chasca will gain the \"Fatal Rounds\" state: For the next 3s, the next time Chasca uses <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color>, the shots will instant finish charging, and the CRIT DMG of that instance of <color style='color:#FFD780;'>Multitarget Fire</color> increases by 120%.<br><br>You must first unlock the Passive Talent \"Bullet Trick.\"",
                        "Icon": "UI_Talent_S_Chasca_04"
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Phantom Feather Flurry",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, mighty winds will accumulate on the arrowhead. A fully charged wind arrow will deal <color style='color:#80FFD7;'>Anemo DMG</color>.<color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, hitting opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "48.008%",
                                    "51.915%",
                                    "55.823%",
                                    "61.405%",
                                    "65.313%",
                                    "69.779%",
                                    "75.919%",
                                    "82.06%",
                                    "88.2%",
                                    "94.899%",
                                    "101.598%",
                                    "108.297%",
                                    "114.995%",
                                    "121.694%",
                                    "128.393%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.588%",
                                    "48.218%",
                                    "51.847%",
                                    "57.032%",
                                    "60.661%",
                                    "64.809%",
                                    "70.512%",
                                    "76.215%",
                                    "81.918%",
                                    "88.14%",
                                    "94.362%",
                                    "100.583%",
                                    "106.805%",
                                    "113.026%",
                                    "119.248%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "29.697%×2",
                                    "32.115%×2",
                                    "34.532%×2",
                                    "37.985%×2",
                                    "40.402%×2",
                                    "43.165%×2",
                                    "46.964%×2",
                                    "50.762%×2",
                                    "54.561%×2",
                                    "58.704%×2",
                                    "62.848%×2",
                                    "66.992%×2",
                                    "71.136%×2",
                                    "75.28%×2",
                                    "79.424%×2"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "76.402%",
                                    "82.621%",
                                    "88.84%",
                                    "97.724%",
                                    "103.943%",
                                    "111.05%",
                                    "120.822%",
                                    "130.595%",
                                    "140.367%",
                                    "151.028%",
                                    "161.689%",
                                    "172.35%",
                                    "183.01%",
                                    "193.671%",
                                    "204.332%"
                                ]
                            },
                            {
                                "Desc": "Aimed Shot",
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
                                "Desc": "Fully-Charged Aimed Shot",
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
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "56.829%",
                                    "61.454%",
                                    "66.08%",
                                    "72.688%",
                                    "77.314%",
                                    "82.6%",
                                    "89.869%",
                                    "97.138%",
                                    "104.406%",
                                    "112.336%",
                                    "120.266%",
                                    "128.195%",
                                    "136.125%",
                                    "144.054%",
                                    "151.984%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "113.634%/141.934%",
                                    "122.883%/153.487%",
                                    "132.132%/165.04%",
                                    "145.345%/181.544%",
                                    "154.594%/193.097%",
                                    "165.165%/206.3%",
                                    "179.7%/224.454%",
                                    "194.234%/242.609%",
                                    "208.769%/260.763%",
                                    "224.624%/280.568%",
                                    "240.48%/300.373%",
                                    "256.336%/320.178%",
                                    "272.192%/339.982%",
                                    "288.048%/359.787%",
                                    "303.904%/379.592%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Spirit Reins, Shadow Hunt",
                        "Desc": "Chasca and the will residing in her weapon resonate, dealing Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>.<br>After using this Skill, Chasca gains 80 Nightsoul points and enters the Nightsoul's Blessing state.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Chasca</color><br>Continually consume Nightsoul points. When Nightsoul points are fully depleted or the skill is used again, Chasca's Nightsoul's Blessing state will end. Her Nightsoul's Blessing has the following traits:<br> · Mounts \"Soulsniper: Ritual Staff,\" increasing Chasca's Movement SPD and interruption resistance. In this state, Chasca will continually consume Nightsoul points or Phlogiston, and stay airborne. When Sprinting or increasing height, extra Nightsoul points or Phlogiston will be consumed.<br> · When using Normal Or Charged Attacks, Tap or Hold to switch between using \"Multitarget Fire\" in different ways.<br><br><color style='color:#FFD780;'>Multitarget Fire</color><br><color style='color:#FFD780;'>Tap</color><br>Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> to opponents in front. This DMG is considered Normal Attack DMG.<br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode, loading bullets into the cylinder's chambers, and choosing a certain number of opponents within a certain range, before firing up to 6 Shadowhunt Shells at the selected opponents based on the amount of time the attack was charged. After Holding for a certain amount of time, Chasca will finish loading and directly fire X Shadowhunt Shells at the selected opponents.<br><br><color style='color:#FFD780;'>Shadowhunt Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>, which is considered Charged Attack DMG.<br> · The 4th, 5th, and 6th Shells loaded into the cylinder will undergo Elemental Conversion based on the Elemental Types of the other characters in the party: For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, one Shadowhunt Shell will be converted into a \"Shining Shadowhunt Shell\" of the corresponding Elemental Type, dealing Nightsoul-aligned DMG corresponding to that Elemental Type. This DMG is considered Charged Attack DMG.<br> · The Shells loaded into the cylinder are fired starting from the last Shadowhunt Shell to be loaded, in a \"last in, first out\" order.<br><br><i>In theory, as long as she's willing, those reins can bridle anything... But what could possibly be as cool as a giant hand cannon?</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "60.0%",
                                    "64.5%",
                                    "69.0%",
                                    "75.0%",
                                    "79.5%",
                                    "84.0%",
                                    "90.0%",
                                    "96.0%",
                                    "102.0%",
                                    "108.0%",
                                    "114.0%",
                                    "120.0%",
                                    "127.5%",
                                    "135.0%",
                                    "142.5%"
                                ]
                            },
                            {
                                "Desc": "Multitarget Fire Press DMG",
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
                                "Desc": "Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "60.8%",
                                    "65.36%",
                                    "69.92%",
                                    "76.0%",
                                    "80.56%",
                                    "85.12%",
                                    "91.2%",
                                    "97.28%",
                                    "103.36%",
                                    "109.44%",
                                    "115.52%",
                                    "121.6%",
                                    "129.2%",
                                    "136.8%",
                                    "144.4%"
                                ]
                            },
                            {
                                "Desc": "Shining Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "191.84%",
                                    "206.228%",
                                    "220.616%",
                                    "239.8%",
                                    "254.188%",
                                    "268.576%",
                                    "287.76%",
                                    "306.944%",
                                    "326.128%",
                                    "345.312%",
                                    "364.496%",
                                    "383.68%",
                                    "407.66%",
                                    "431.64%",
                                    "455.62%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
                                "ParamLevelList": [
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Soul Reaper's Fatal Round",
                        "Desc": "Chasca concentrates her will, firing a single \"Galesplitting Soulseeker Shell\" that deals Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>. Afterward, the Galesplitting Soulseeker Shell will split into 6 Soulseeker Shells, which attack nearby opponents.<br><br><color style='color:#FFD780;'>Soulseeker Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>.<br> · For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, two Soulseeker Shells will undergo corresponding Elemental Conversions to become \"Radiant Soulseeker Shells,\" which deal Nightsoul-aligned Elemental DMG of the corresponding Elemental Type.<br><br><i>None can escape from the incessant whispers of the night and moonlight, just as no foe can flee her attentive eyes once she's got them in her sights.</i>",
                        "Num": 1,
                        "Lock": "CircleR25H20HC",
                        "Icon": "Skill_E_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Galesplitting Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "88.0%",
                                    "94.6%",
                                    "101.2%",
                                    "110.0%",
                                    "116.6%",
                                    "123.2%",
                                    "132.0%",
                                    "140.8%",
                                    "149.6%",
                                    "158.4%",
                                    "167.2%",
                                    "176.0%",
                                    "187.0%",
                                    "198.0%",
                                    "209.0%"
                                ]
                            },
                            {
                                "Desc": "Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "103.4%",
                                    "111.155%",
                                    "118.91%",
                                    "129.25%",
                                    "137.005%",
                                    "144.76%",
                                    "155.1%",
                                    "165.44%",
                                    "175.78%",
                                    "186.12%",
                                    "196.46%",
                                    "206.8%",
                                    "219.725%",
                                    "232.65%",
                                    "245.575%"
                                ]
                            },
                            {
                                "Desc": "Radiant Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "206.8%",
                                    "222.31%",
                                    "237.82%",
                                    "258.5%",
                                    "274.01%",
                                    "289.52%",
                                    "310.2%",
                                    "330.88%",
                                    "351.56%",
                                    "372.24%",
                                    "392.92%",
                                    "413.6%",
                                    "439.45%",
                                    "465.3%",
                                    "491.15%"
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
                        "Name": "Bullet Trick",
                        "Desc": "When the Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> is used, if the party has 1/2/3 types of <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> characters, then there is a 33%/67%/100% chance to trigger \"Spiritbinding Conversion,\" causing the 3rd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder to be converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color> of the corresponding Elemental Type.",
                        "Icon": "UI_Talent_S_Chasca_05"
                    },
                    {
                        "Name": "Intent to Cover",
                        "Desc": "When a nearby party member triggers a Nightsoul Burst, Chasca will fire a \"Burning Shadowhunt Shot\" at a nearby opponent, dealing Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> equal to 150% of the <color style='color:#FFD780;'>Shadowhunt Shell</color> DMG from her Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>. If the party has <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> characters, the Burning Shadowhunt Shot will be converted to deal Nightsoul-aligned Elemental DMG of the corresponding Elemental Type equal to 150% of the DMG dealt by <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Shining Shadowhunt Shells</color>.<br>The DMG done in this way is considered Charged Attack DMG.",
                        "Icon": "UI_Talent_S_Chasca_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Everburning Heart",
                        "Desc": "After Nightsoul points are fully depleted, Chasca will begin consuming Phlogiston to stay in Nightsoul's Blessing instead.<br>While in an area with Phlogiston Mechanics within Natlan, she can use Nightsoul Transmission: Chasca. When the active character is at a certain height in the air, the following will trigger when you switch to Chasca: Chasca will enter Nightsoul's Blessing and gain 32 Nightsoul points. Nightsoul Transmission can be triggered once every 10s by your own team.<br><br>In addition, if the Elemental Skill <color style='color:#FFD780;'>Spirit Rein, Shadow Hunt</color> is Held while in Nightsoul's Blessing, Chasca will execute a Nightsoul-aligned Plunging Attack, and when released, the Plunging Attack can be canceled, and she will remain airborne. If she strikes the ground during the Plunging Attack, Chasca's Nightsoul's Blessing state will end.",
                        "Icon": "UI_Talent_S_Chasca_07"
                    },
                    {
                        "Name": "Life Talent",
                        "Desc": "",
                        "Icon": "UI_Talent_S_Liuyun_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Cylinder, the Restless Roulette",
                        "Desc": "When triggering the Passive Talent \"Bullet Trick\"'s \"Spiritbinding Conversion,\" will additionally cause the 2nd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder to be converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color>.<br>In addition, the chance to trigger \"Spiritbinding Conversion\" is increased: If the party has 1/2/3 types of <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> characters, then there is a 67%/100%/100% chance to trigger \"Spiritbinding Conversion.\"<br><br>You must first unlock the Passive Talent \"Bullet Trick.\"<br><br>In addition, Chasca's Nightsoul point and Phlogiston consumption in her Nightsoul's Blessing state is decreased by 30% while out of combat.",
                        "Icon": "UI_Talent_S_Chasca_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Muzzle, the Searing Smoke",
                        "Desc": "When the <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> from <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> hit opponents, they will deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> equal to 400% of Chasca's ATK. This effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Multitarget Fire</color>.",
                        "Icon": "UI_Talent_S_Chasca_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Reins, her Careful Control",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Sparks, the Sudden Shot",
                        "Desc": "When the <color style='color:#FFD780;'>Radiant Soulseeker Shells</color> from <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> hit opponents, they will restore 1.5 Elemental Energy to Chasca, and deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Radiant Soulseeker Shells</color> equal to 400% of Chasca's ATK. This effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color>.",
                        "Icon": "UI_Talent_S_Chasca_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Brim, the Sandshadow's Silhouette",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Showdown, the Glory of Battle",
                        "Desc": "After the Passive Talent \"Bullet Trick\"'s \"Spiritbinding Conversion\" is triggered, Chasca will gain the \"Fatal Rounds\" state: For the next 3s, the next time Chasca uses <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color>, the shots will finish charging instantly, and the CRIT DMG of that instance of <color style='color:#FFD780;'>Multitarget Fire</color> increases by 120%.<br><br>You must first unlock the Passive Talent \"Bullet Trick.\"",
                        "Icon": "UI_Talent_S_Chasca_04"
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Phantom Feather Flurry",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, mighty winds will accumulate on the arrowhead. A fully charged wind arrow will deal <color style='color:#80FFD7;'>Anemo DMG</color>.<color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, hitting opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "48.008%",
                                    "51.915%",
                                    "55.823%",
                                    "61.405%",
                                    "65.313%",
                                    "69.779%",
                                    "75.919%",
                                    "82.06%",
                                    "88.2%",
                                    "94.899%",
                                    "101.598%",
                                    "108.297%",
                                    "114.995%",
                                    "121.694%",
                                    "128.393%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.588%",
                                    "48.218%",
                                    "51.847%",
                                    "57.032%",
                                    "60.661%",
                                    "64.809%",
                                    "70.512%",
                                    "76.215%",
                                    "81.918%",
                                    "88.14%",
                                    "94.362%",
                                    "100.583%",
                                    "106.805%",
                                    "113.026%",
                                    "119.248%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "29.697%×2",
                                    "32.115%×2",
                                    "34.532%×2",
                                    "37.985%×2",
                                    "40.402%×2",
                                    "43.165%×2",
                                    "46.964%×2",
                                    "50.762%×2",
                                    "54.561%×2",
                                    "58.704%×2",
                                    "62.848%×2",
                                    "66.992%×2",
                                    "71.136%×2",
                                    "75.28%×2",
                                    "79.424%×2"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "25.467%",
                                    "27.54%",
                                    "29.613%",
                                    "32.574%",
                                    "34.647%",
                                    "37.016%",
                                    "40.274%",
                                    "43.531%",
                                    "46.788%",
                                    "50.342%",
                                    "53.896%",
                                    "57.449%",
                                    "61.003%",
                                    "64.556%",
                                    "68.11%"
                                ]
                            },
                            {
                                "Desc": "Aimed Shot",
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
                                "Desc": "Fully-Charged Aimed Shot",
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
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "56.829%",
                                    "61.454%",
                                    "66.08%",
                                    "72.688%",
                                    "77.314%",
                                    "82.6%",
                                    "89.869%",
                                    "97.138%",
                                    "104.406%",
                                    "112.336%",
                                    "120.266%",
                                    "128.195%",
                                    "136.125%",
                                    "144.054%",
                                    "151.984%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "113.634%/141.934%",
                                    "122.883%/153.487%",
                                    "132.132%/165.04%",
                                    "145.345%/181.544%",
                                    "154.594%/193.097%",
                                    "165.165%/206.3%",
                                    "179.7%/224.454%",
                                    "194.234%/242.609%",
                                    "208.769%/260.763%",
                                    "224.624%/280.568%",
                                    "240.48%/300.373%",
                                    "256.336%/320.178%",
                                    "272.192%/339.982%",
                                    "288.048%/359.787%",
                                    "303.904%/379.592%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Spirit Reins, Shadow Hunt",
                        "Desc": "Chasca and the will residing in her weapon resonate, dealing Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>.<br>After using this Skill, Chasca gains 80 Nightsoul points and enters the Nightsoul's Blessing state.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Chasca</color><br>Continually consume Nightsoul points. When Nightsoul points are fully depleted or the skill is used again, Chasca's Nightsoul's Blessing state will end. Her Nightsoul's Blessing has the following traits:<br> · Mounts \"Soulsniper: Ritual Staff,\" increasing Chasca's Movement SPD and interruption resistance. In this state, Chasca will continually consume Nightsoul points to remain airborne. When Sprinting or increasing height, extra Nightsoul points will be consumed.<br> · When using Normal or Charged Attacks, Tap or Hold to switch between using \"Multitarget Fire\" in different ways.<br><br><color style='color:#FFD780;'>Multitarget Fire</color><br><color style='color:#FFD780;'>Tap</color><br>Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> to opponents in front. This DMG is considered Normal Attack DMG.<br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode and choose a certain number of opponents within a certain range, before loading up to 6 Shadowhunt Shells based on the duration for which the skill was charged. When 6 Shells have been loaded or charging is stopped, these Shells will be fired at the chosen opponents in sequence.<br><br><color style='color:#FFD780;'>Shadowhunt Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>, which is considered Charged Attack DMG.<br> · The 4th, 5th, and 6th Shells loaded into the cylinder will undergo Elemental Conversion based on the Elemental Types of the other characters in the party: For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, one Shadowhunt Shell will randomly be Converted into a \"Shining Shadowhunt Shell\" of one of these corresponding Elemental Types, dealing Nightsoul-aligned DMG corresponding to that Elemental Type. This DMG is considered Charged Attack DMG.<br> · The Shells loaded into the cylinder are fired starting from the last Shadowhunt Shell to be loaded, in a \"last in, first out\" order.<br><br>Additionally, when Chasca is in the Nightsoul's Blessing state, Holding her Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color> will cause her to execute a Nightsoul-aligned Plunging Attack. Release the Elemental Skill to interrupt this Plunging Attack and maintain her airborne state. Should Chasca hit the ground with her Plunging Attack, her Nightsoul's Blessing state will end.<br><br><i>In theory, as long as she's willing, those reins can bridle anything... But what could possibly be as cool as a giant hand cannon?</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Resonance DMG",
                                "ParamLevelList": [
                                    "60.0%",
                                    "64.5%",
                                    "69.0%",
                                    "75.0%",
                                    "79.5%",
                                    "84.0%",
                                    "90.0%",
                                    "96.0%",
                                    "102.0%",
                                    "108.0%",
                                    "114.0%",
                                    "120.0%",
                                    "127.5%",
                                    "135.0%",
                                    "142.5%"
                                ]
                            },
                            {
                                "Desc": "Multitarget Fire Press DMG",
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
                                "Desc": "Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "48.8%",
                                    "52.46%",
                                    "56.12%",
                                    "61.0%",
                                    "64.66%",
                                    "68.32%",
                                    "73.2%",
                                    "78.08%",
                                    "82.96%",
                                    "87.84%",
                                    "92.72%",
                                    "97.6%",
                                    "103.7%",
                                    "109.8%",
                                    "115.9%"
                                ]
                            },
                            {
                                "Desc": "Shining Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "166.572%",
                                    "179.065%",
                                    "191.558%",
                                    "208.215%",
                                    "220.708%",
                                    "233.201%",
                                    "249.858%",
                                    "266.515%",
                                    "283.172%",
                                    "299.83%",
                                    "316.487%",
                                    "333.144%",
                                    "353.965%",
                                    "374.787%",
                                    "395.608%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
                                "ParamLevelList": [
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Soul Reaper's Fatal Round",
                        "Desc": "Chasca concentrates her will, firing a single \"Galesplitting Soulseeker Shell\" that deals Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>. Afterward, the Galesplitting Soulseeker Shell will split into 6 Soulseeker Shells, which attack nearby opponents.<br><br><color style='color:#FFD780;'>Soulseeker Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>.<br> · For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, two Soulseeker Shells will undergo corresponding Elemental Conversions to become \"Radiant Soulseeker Shells,\" which deal Nightsoul-aligned Elemental DMG from a randomly selected one of the corresponding Elemental Types.<br><br><i>None can escape from the moonlight or the whispers of the night, just as no foe can flee her attentive eyes once she's got them in her sights.</i>",
                        "Num": 1,
                        "Lock": "CircleR25H20HC",
                        "Icon": "Skill_E_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Galesplitting Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "88.0%",
                                    "94.6%",
                                    "101.2%",
                                    "110.0%",
                                    "116.6%",
                                    "123.2%",
                                    "132.0%",
                                    "140.8%",
                                    "149.6%",
                                    "158.4%",
                                    "167.2%",
                                    "176.0%",
                                    "187.0%",
                                    "198.0%",
                                    "209.0%"
                                ]
                            },
                            {
                                "Desc": "Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "103.4%",
                                    "111.155%",
                                    "118.91%",
                                    "129.25%",
                                    "137.005%",
                                    "144.76%",
                                    "155.1%",
                                    "165.44%",
                                    "175.78%",
                                    "186.12%",
                                    "196.46%",
                                    "206.8%",
                                    "219.725%",
                                    "232.65%",
                                    "245.575%"
                                ]
                            },
                            {
                                "Desc": "Radiant Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "206.8%",
                                    "222.31%",
                                    "237.82%",
                                    "258.5%",
                                    "274.01%",
                                    "289.52%",
                                    "310.2%",
                                    "330.88%",
                                    "351.56%",
                                    "372.24%",
                                    "392.92%",
                                    "413.6%",
                                    "439.45%",
                                    "465.3%",
                                    "491.15%"
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
                        "Name": "Bullet Trick",
                        "Desc": "When the Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> is being charged, if there are party members who meet the Elemental Conversion Type requirements, gain the following effects based on the number of different eligible Elemental Types present:<br> · There is a 33.3%/66.7%/100% chance for each Type to trigger \"Spiritbinding Conversion\" and cause the 3rd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder to be randomly converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color> from one of the corresponding Elemental Types.<br> · Each element type will grant Chasca 1 stack of Spirit of the Radiant Shadow, increasing the DMG of Shining Shadowhunt Shell by 15%/35%/65%. This effect lasts until the current Multitarget Fire ends. Max 3 stacks.",
                        "Icon": "UI_Talent_S_Chasca_05"
                    },
                    {
                        "Name": "Intent to Cover",
                        "Desc": "When a nearby party member triggers a Nightsoul Burst, Chasca will fire a \"Burning Shadowhunt Shot\" at a nearby opponent, dealing Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> equal to 150% of the <color style='color:#FFD780;'>Shadowhunt Shell</color> DMG from her Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>. If the party has <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> characters, the Burning Shadowhunt Shot will be converted to deal Nightsoul-aligned Elemental DMG of the corresponding Elemental Type equal to 150% of the DMG dealt by <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Shining Shadowhunt Shells</color>.<br>The DMG done in this way is considered Charged Attack DMG.",
                        "Icon": "UI_Talent_S_Chasca_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Everburning Heart",
                        "Desc": "After her Nightsoul points are exhausted, Chasca will switch to consuming Phlogiston to maintain her Nightsoul's Blessing.<br>While in an area with Phlogiston Mechanics within Natlan, she can use Nightsoul Transmission: Chasca. When the active character is in the air, the following will occur when switching to Chasca: Chasca will enter the Nightsoul's Blessing state and gain 32 Nightsoul points. Nightsoul Transmission can be triggered once every 10s by your own team.",
                        "Icon": "UI_Talent_S_Chasca_07"
                    },
                    {
                        "Name": "Mediation's True Meaning",
                        "Desc": "25 Phlogiston will be restored when your own party members defeat an opponent. This effect can trigger once every 12s.<br>This has no effect in Domains, Trounce Domains, or the Spiral Abyss.",
                        "Icon": "UI_Talent_S_Chasca_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Cylinder, the Restless Roulette",
                        "Desc": "When triggering the Passive Talent \"Bullet Trick\"'s \"Spiritbinding Conversion,\" the 2nd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder will be additionally converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color>.<br>The chance to trigger \"Spiritbinding Conversion\" is increased: If there are party members who meet the Elemental Conversion Type requirements, the chance to trigger \"Spiritbinding Conversion\" is increased by 33.3%, up to a maximum of 100%.<br><br>You must first unlock the Passive Talent \"Bullet Trick.\"<br><br>In addition, Chasca's Nightsoul point and Phlogiston consumption in her Nightsoul's Blessing state is decreased by 30% while out of combat.",
                        "Icon": "UI_Talent_S_Chasca_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Muzzle, the Searing Smoke",
                        "Desc": "When Chasca takes the field, she will obtain 1 stack of \"Spirit of the Radiant Shadow\" from the Passive Talent \"Bullet Trick.\" You must first unlock the Passive Talent \"Bullet Trick\" for this effect.<br>In addition, when the <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> from <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> hit opponents, they will deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> equal to 400% of Chasca's ATK. This DMG is considered Charged Attack DMG. This effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Multitarget Fire</color>.",
                        "Icon": "UI_Talent_S_Chasca_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Reins, her Careful Control",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Sparks, the Sudden Shot",
                        "Desc": "When the <color style='color:#FFD780;'>Radiant Soulseeker Shells</color> from <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> hit opponents, they will restore 1.5 Elemental Energy to Chasca, and deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Radiant Soulseeker Shells</color> equal to 400% of Chasca's ATK. This effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color>.",
                        "Icon": "UI_Talent_S_Chasca_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Brim, the Sandshadow's Silhouette",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Showdown, the Glory of Battle",
                        "Desc": "Chasca's <color style='color:#FFD780;'>Multitarget Fire</color> charge time is decreased, and after the Passive Talent \"Bullet Trick\"'s \"Spiritbinding Conversion\" is triggered, Chasca will gain the \"Fatal Rounds\" state: For the next 3s, the next time Chasca uses <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color>, the shots will finish charging instantly, and the CRIT DMG of that instance of <color style='color:#FFD780;'>Multitarget Fire</color> increases by 120%.<br><br>You must first unlock the Passive Talent \"Bullet Trick\" to gain access to the above effect.",
                        "Icon": "UI_Talent_S_Chasca_04"
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Phantom Feather Flurry",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, mighty winds will accumulate on the arrowhead. A fully charged wind arrow will deal <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, hitting opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "48.008%",
                                    "51.915%",
                                    "55.823%",
                                    "61.405%",
                                    "65.313%",
                                    "69.779%",
                                    "75.919%",
                                    "82.06%",
                                    "88.2%",
                                    "94.899%",
                                    "101.598%",
                                    "108.297%",
                                    "114.995%",
                                    "121.694%",
                                    "128.393%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.588%",
                                    "48.218%",
                                    "51.847%",
                                    "57.032%",
                                    "60.661%",
                                    "64.809%",
                                    "70.512%",
                                    "76.215%",
                                    "81.918%",
                                    "88.14%",
                                    "94.362%",
                                    "100.583%",
                                    "106.805%",
                                    "113.026%",
                                    "119.248%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "29.697%×2",
                                    "32.115%×2",
                                    "34.532%×2",
                                    "37.985%×2",
                                    "40.402%×2",
                                    "43.165%×2",
                                    "46.964%×2",
                                    "50.762%×2",
                                    "54.561%×2",
                                    "58.704%×2",
                                    "62.848%×2",
                                    "66.992%×2",
                                    "71.136%×2",
                                    "75.28%×2",
                                    "79.424%×2"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "25.467%×3",
                                    "27.54%×3",
                                    "29.613%×3",
                                    "32.574%×3",
                                    "34.647%×3",
                                    "37.016%×3",
                                    "40.274%×3",
                                    "43.531%×3",
                                    "46.788%×3",
                                    "50.342%×3",
                                    "53.896%×3",
                                    "57.449%×3",
                                    "61.003%×3",
                                    "64.556%×3",
                                    "68.11%×3"
                                ]
                            },
                            {
                                "Desc": "Aimed Shot",
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
                                "Desc": "Fully-Charged Aimed Shot",
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
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "56.829%",
                                    "61.454%",
                                    "66.08%",
                                    "72.688%",
                                    "77.314%",
                                    "82.6%",
                                    "89.869%",
                                    "97.138%",
                                    "104.406%",
                                    "112.336%",
                                    "120.266%",
                                    "128.195%",
                                    "136.125%",
                                    "144.054%",
                                    "151.984%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "113.634%/141.934%",
                                    "122.883%/153.487%",
                                    "132.132%/165.04%",
                                    "145.345%/181.544%",
                                    "154.594%/193.097%",
                                    "165.165%/206.3%",
                                    "179.7%/224.454%",
                                    "194.234%/242.609%",
                                    "208.769%/260.763%",
                                    "224.624%/280.568%",
                                    "240.48%/300.373%",
                                    "256.336%/320.178%",
                                    "272.192%/339.982%",
                                    "288.048%/359.787%",
                                    "303.904%/379.592%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Spirit Reins, Shadow Hunt",
                        "Desc": "Chasca and the will residing in her weapon resonate, dealing Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>.<br>After using this Skill, Chasca gains 80 Nightsoul points and enters the Nightsoul's Blessing state.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Chasca</color><br>Continually consume Nightsoul points. When Nightsoul points are fully depleted or the skill is used again, Chasca's Nightsoul's Blessing state will end. Her Nightsoul's Blessing has the following traits:<br> · Mounts \"Soulsniper: Ritual Staff,\" increasing Chasca's Movement SPD and interruption resistance. In this state, Chasca will continually consume Nightsoul points to remain airborne. When Sprinting or increasing height, extra Nightsoul points will be consumed.<br> · When using Normal or Charged Attacks, Tap or Hold to switch between using \"Multitarget Fire\" in different ways.<br><br><color style='color:#FFD780;'>Multitarget Fire</color><br><color style='color:#FFD780;'>Tap</color><br>Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> to opponents in front. This DMG is considered Normal Attack DMG.<br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode and choose a certain number of opponents within a certain range, before loading up to 6 Shadowhunt Shells based on the duration for which the skill was charged. When 6 Shells have been loaded or charging is stopped, these Shells will be fired at the chosen opponents in sequence.<br><br><color style='color:#FFD780;'>Shadowhunt Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>, which is considered Charged Attack DMG.<br> · The 4th, 5th, and 6th Shells loaded into the cylinder will undergo Elemental Conversion based on the Elemental Types of the other characters in the party: For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, one Shadowhunt Shell will randomly be Converted into a \"Shining Shadowhunt Shell\" of one of these corresponding Elemental Types, dealing Nightsoul-aligned DMG corresponding to that Elemental Type. This DMG is considered Charged Attack DMG.<br> · The Shells loaded into the cylinder are fired starting from the last Shadowhunt Shell to be loaded, in a \"last in, first out\" order.<br><br>Additionally, when Chasca is in the Nightsoul's Blessing state, Holding her Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color> will cause her to execute a Nightsoul-aligned Plunging Attack. Release the Elemental Skill to interrupt this Plunging Attack and maintain her airborne state. Should Chasca hit the ground with her Plunging Attack, her Nightsoul's Blessing state will end.<br><br><i>In theory, as long as she's willing, those reins can bridle anything... But what could possibly be as cool as a giant hand cannon?</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Resonance DMG",
                                "ParamLevelList": [
                                    "60.0%",
                                    "64.5%",
                                    "69.0%",
                                    "75.0%",
                                    "79.5%",
                                    "84.0%",
                                    "90.0%",
                                    "96.0%",
                                    "102.0%",
                                    "108.0%",
                                    "114.0%",
                                    "120.0%",
                                    "127.5%",
                                    "135.0%",
                                    "142.5%"
                                ]
                            },
                            {
                                "Desc": "Multitarget Fire Press DMG",
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
                                "Desc": "Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "48.8%",
                                    "52.46%",
                                    "56.12%",
                                    "61.0%",
                                    "64.66%",
                                    "68.32%",
                                    "73.2%",
                                    "78.08%",
                                    "82.96%",
                                    "87.84%",
                                    "92.72%",
                                    "97.6%",
                                    "103.7%",
                                    "109.8%",
                                    "115.9%"
                                ]
                            },
                            {
                                "Desc": "Shining Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "166.572%",
                                    "179.065%",
                                    "191.558%",
                                    "208.215%",
                                    "220.708%",
                                    "233.201%",
                                    "249.858%",
                                    "266.515%",
                                    "283.172%",
                                    "299.83%",
                                    "316.487%",
                                    "333.144%",
                                    "353.965%",
                                    "374.787%",
                                    "395.608%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
                                "ParamLevelList": [
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Soul Reaper's Fatal Round",
                        "Desc": "Chasca concentrates her will, firing a single \"Galesplitting Soulseeker Shell\" that deals Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>. Afterward, the Galesplitting Soulseeker Shell will split into 6 Soulseeker Shells, which attack nearby opponents.<br><br><color style='color:#FFD780;'>Soulseeker Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>.<br> · For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, two Soulseeker Shells will undergo corresponding Elemental Conversions to become \"Radiant Soulseeker Shells,\" which deal Nightsoul-aligned Elemental DMG from a randomly selected one of the corresponding Elemental Types.<br><br><i>None can escape from the moonlight or the whispers of the night, just as no foe can flee her attentive eyes once she's got them in her sights.</i>",
                        "Num": 1,
                        "Lock": "CircleR25H20HC",
                        "Icon": "Skill_E_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Galesplitting Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "88.0%",
                                    "94.6%",
                                    "101.2%",
                                    "110.0%",
                                    "116.6%",
                                    "123.2%",
                                    "132.0%",
                                    "140.8%",
                                    "149.6%",
                                    "158.4%",
                                    "167.2%",
                                    "176.0%",
                                    "187.0%",
                                    "198.0%",
                                    "209.0%"
                                ]
                            },
                            {
                                "Desc": "Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "103.4%",
                                    "111.155%",
                                    "118.91%",
                                    "129.25%",
                                    "137.005%",
                                    "144.76%",
                                    "155.1%",
                                    "165.44%",
                                    "175.78%",
                                    "186.12%",
                                    "196.46%",
                                    "206.8%",
                                    "219.725%",
                                    "232.65%",
                                    "245.575%"
                                ]
                            },
                            {
                                "Desc": "Radiant Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "206.8%",
                                    "222.31%",
                                    "237.82%",
                                    "258.5%",
                                    "274.01%",
                                    "289.52%",
                                    "310.2%",
                                    "330.88%",
                                    "351.56%",
                                    "372.24%",
                                    "392.92%",
                                    "413.6%",
                                    "439.45%",
                                    "465.3%",
                                    "491.15%"
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
                        "Name": "Bullet Trick",
                        "Desc": "When the Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> is being charged, if there are party members who meet the Elemental Conversion Type requirements, gain the following effects based on the number of different eligible Elemental Types present:<br> · There is a 33.3%/66.7%/100% chance for each Type to trigger \"Spiritbinding Conversion\" and cause the 3rd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder to be randomly converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color> from one of the corresponding Elemental Types.<br> · Each element type will grant Chasca 1 stack of Spirit of the Radiant Shadow, increasing the DMG of Shining Shadowhunt Shell by 15%/35%/65%. This effect lasts until the current Multitarget Fire ends. Max 3 stacks.",
                        "Icon": "UI_Talent_S_Chasca_05"
                    },
                    {
                        "Name": "Intent to Cover",
                        "Desc": "When a nearby party member triggers a Nightsoul Burst, Chasca will fire a \"Burning Shadowhunt Shot\" at a nearby opponent, dealing Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> equal to 150% of the <color style='color:#FFD780;'>Shadowhunt Shell</color> DMG from her Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>. If the party has <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> characters, the Burning Shadowhunt Shot will be converted to deal Nightsoul-aligned Elemental DMG of the corresponding Elemental Type equal to 150% of the DMG dealt by <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Shining Shadowhunt Shells</color>.<br>The DMG done in this way is considered Charged Attack DMG.",
                        "Icon": "UI_Talent_S_Chasca_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Everburning Heart",
                        "Desc": "After her Nightsoul points are exhausted, Chasca will switch to consuming Phlogiston to maintain her Nightsoul's Blessing.<br>While in an area with Phlogiston Mechanics within Natlan, she can use Nightsoul Transmission: Chasca. When the active character is in the air, the following will occur when switching to Chasca: Chasca will enter the Nightsoul's Blessing state and gain 32 Nightsoul points. Nightsoul Transmission can be triggered once every 10s by your own team.",
                        "Icon": "UI_Talent_S_Chasca_07"
                    },
                    {
                        "Name": "Mediation's True Meaning",
                        "Desc": "25 Phlogiston will be restored when your own party members defeat an opponent. This effect can trigger once every 12s.<br>This has no effect in Domains, Trounce Domains, or the Spiral Abyss.",
                        "Icon": "UI_Talent_S_Chasca_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Cylinder, the Restless Roulette",
                        "Desc": "When triggering the Passive Talent \"Bullet Trick\"'s \"Spiritbinding Conversion,\" the 2nd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder will be additionally converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color>.<br>The chance to trigger \"Spiritbinding Conversion\" is increased: If there are party members who meet the Elemental Conversion Type requirements, the chance to trigger \"Spiritbinding Conversion\" is increased by 33.3%, up to a maximum of 100%.<br><br>You must first unlock the Passive Talent \"Bullet Trick.\"<br><br>In addition, Chasca's Nightsoul point and Phlogiston consumption in her Nightsoul's Blessing state is decreased by 30% while out of combat.",
                        "Icon": "UI_Talent_S_Chasca_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Muzzle, the Searing Smoke",
                        "Desc": "When Chasca takes the field, she will obtain 1 stack of \"Spirit of the Radiant Shadow\" from the Passive Talent \"Bullet Trick.\" You must first unlock the Passive Talent \"Bullet Trick\" for this effect.<br>In addition, when the <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> from <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> hit opponents, they will deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> equal to 400% of Chasca's ATK. This DMG is considered Charged Attack DMG. This effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Multitarget Fire</color>.",
                        "Icon": "UI_Talent_S_Chasca_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Reins, her Careful Control",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Sparks, the Sudden Shot",
                        "Desc": "When the <color style='color:#FFD780;'>Radiant Soulseeker Shells</color> from <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> hit opponents, they will restore 1.5 Elemental Energy to Chasca, and deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Radiant Soulseeker Shells</color> equal to 400% of Chasca's ATK. This effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color>.",
                        "Icon": "UI_Talent_S_Chasca_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Brim, the Sandshadow's Silhouette",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Showdown, the Glory of Battle",
                        "Desc": "Chasca's <color style='color:#FFD780;'>Multitarget Fire</color> charge time is decreased, and after the Passive Talent \"Bullet Trick\"'s \"Spiritbinding Conversion\" is triggered, Chasca will gain the \"Fatal Rounds\" state: For the next 3s, the next time Chasca uses <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color>, the shots will finish charging instantly, and the CRIT DMG of that instance of <color style='color:#FFD780;'>Multitarget Fire</color> increases by 120%. Fatal Rounds can be gained once per 3s.<br><br>You must first unlock the Passive Talent \"Bullet Trick\" to gain access to the above effect. ",
                        "Icon": "UI_Talent_S_Chasca_04"
                    }
                ]
            },
            "5": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Phantom Feather Flurry",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, mighty winds will accumulate on the arrowhead. A fully charged wind arrow will deal <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, hitting opponents along the path and dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "48.008%",
                                    "51.915%",
                                    "55.823%",
                                    "61.405%",
                                    "65.313%",
                                    "69.779%",
                                    "75.919%",
                                    "82.06%",
                                    "88.2%",
                                    "94.899%",
                                    "101.598%",
                                    "108.297%",
                                    "114.995%",
                                    "121.694%",
                                    "128.393%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.588%",
                                    "48.218%",
                                    "51.847%",
                                    "57.032%",
                                    "60.661%",
                                    "64.809%",
                                    "70.512%",
                                    "76.215%",
                                    "81.918%",
                                    "88.14%",
                                    "94.362%",
                                    "100.583%",
                                    "106.805%",
                                    "113.026%",
                                    "119.248%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "29.697%×2",
                                    "32.115%×2",
                                    "34.532%×2",
                                    "37.985%×2",
                                    "40.402%×2",
                                    "43.165%×2",
                                    "46.964%×2",
                                    "50.762%×2",
                                    "54.561%×2",
                                    "58.704%×2",
                                    "62.848%×2",
                                    "66.992%×2",
                                    "71.136%×2",
                                    "75.28%×2",
                                    "79.424%×2"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "25.467%×3",
                                    "27.54%×3",
                                    "29.613%×3",
                                    "32.574%×3",
                                    "34.647%×3",
                                    "37.016%×3",
                                    "40.274%×3",
                                    "43.531%×3",
                                    "46.788%×3",
                                    "50.342%×3",
                                    "53.896%×3",
                                    "57.449%×3",
                                    "61.003%×3",
                                    "64.556%×3",
                                    "68.11%×3"
                                ]
                            },
                            {
                                "Desc": "Aimed Shot",
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
                                "Desc": "Fully-Charged Aimed Shot",
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
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "56.829%",
                                    "61.454%",
                                    "66.08%",
                                    "72.688%",
                                    "77.314%",
                                    "82.6%",
                                    "89.869%",
                                    "97.138%",
                                    "104.406%",
                                    "112.336%",
                                    "120.266%",
                                    "128.195%",
                                    "136.125%",
                                    "144.054%",
                                    "151.984%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "113.634%/141.934%",
                                    "122.883%/153.487%",
                                    "132.132%/165.04%",
                                    "145.345%/181.544%",
                                    "154.594%/193.097%",
                                    "165.165%/206.3%",
                                    "179.7%/224.454%",
                                    "194.234%/242.609%",
                                    "208.769%/260.763%",
                                    "224.624%/280.568%",
                                    "240.48%/300.373%",
                                    "256.336%/320.178%",
                                    "272.192%/339.982%",
                                    "288.048%/359.787%",
                                    "303.904%/379.592%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Spirit Reins, Shadow Hunt",
                        "Desc": "Chasca and the will residing in her weapon resonate, dealing Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>.<br>After using this Skill, Chasca gains 80 Nightsoul points and enters the Nightsoul's Blessing state.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Chasca</color><br>Continually consume Nightsoul points. When Nightsoul points are fully depleted or the skill is used again, Chasca's Nightsoul's Blessing state will end. Her Nightsoul's Blessing has the following traits:<br> · Mounts \"Soulsniper: Ritual Staff,\" increasing Chasca's Movement SPD and interruption resistance. In this state, Chasca will continually consume Nightsoul points to remain airborne. When Sprinting or increasing height, extra Nightsoul points will be consumed.<br> · When using Normal or Charged Attacks, Tap or Hold to switch between using \"Multitarget Fire\" in different ways.<br><br><color style='color:#FFD780;'>Multitarget Fire</color><br><color style='color:#FFD780;'>Tap</color><br>Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> to opponents in front. This DMG is considered Normal Attack DMG.<br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode and choose a certain number of opponents within a certain range, before loading up to 6 Shadowhunt Shells based on the duration for which the skill was charged. When 6 Shells have been loaded or charging is stopped, these Shells will be fired at the chosen opponents in sequence.<br><br><color style='color:#FFD780;'>Shadowhunt Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>, which is considered Charged Attack DMG.<br> · The 4th, 5th, and 6th Shells loaded into the cylinder will undergo Elemental Conversion based on the Elemental Types of the other characters in the party: For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, one Shadowhunt Shell will randomly be Converted into a \"Shining Shadowhunt Shell\" of one of these corresponding Elemental Types, dealing Nightsoul-aligned DMG corresponding to that Elemental Type. This DMG is considered Charged Attack DMG.<br> · The Shells loaded into the cylinder are fired starting from the last Shadowhunt Shell to be loaded, in a \"last in, first out\" order.<br><br>Additionally, when Chasca is in the Nightsoul's Blessing state, Holding her Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color> will cause her to execute a Nightsoul-aligned Plunging Attack. Release the Elemental Skill to interrupt this Plunging Attack and maintain her airborne state. Should Chasca hit the ground with her Plunging Attack, her Nightsoul's Blessing state will end.<br><br><i>In theory, as long as she's willing, those reins can bridle anything... But what could possibly be as cool as a giant hand cannon?</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Resonance DMG",
                                "ParamLevelList": [
                                    "60.0%",
                                    "64.5%",
                                    "69.0%",
                                    "75.0%",
                                    "79.5%",
                                    "84.0%",
                                    "90.0%",
                                    "96.0%",
                                    "102.0%",
                                    "108.0%",
                                    "114.0%",
                                    "120.0%",
                                    "127.5%",
                                    "135.0%",
                                    "142.5%"
                                ]
                            },
                            {
                                "Desc": "Multitarget Fire Press DMG",
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
                                "Desc": "Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "48.8%",
                                    "52.46%",
                                    "56.12%",
                                    "61.0%",
                                    "64.66%",
                                    "68.32%",
                                    "73.2%",
                                    "78.08%",
                                    "82.96%",
                                    "87.84%",
                                    "92.72%",
                                    "97.6%",
                                    "103.7%",
                                    "109.8%",
                                    "115.9%"
                                ]
                            },
                            {
                                "Desc": "Shining Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "166.572%",
                                    "179.065%",
                                    "191.558%",
                                    "208.215%",
                                    "220.708%",
                                    "233.201%",
                                    "249.858%",
                                    "266.515%",
                                    "283.172%",
                                    "299.83%",
                                    "316.487%",
                                    "333.144%",
                                    "353.965%",
                                    "374.787%",
                                    "395.608%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
                                "ParamLevelList": [
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0",
                                    "80.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Soul Reaper's Fatal Round",
                        "Desc": "Chasca concentrates her will, firing a single \"Galesplitting Soulseeker Shell\" that deals Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>. Afterward, the Galesplitting Soulseeker Shell will split into 6 Soulseeker Shells, which attack nearby opponents.<br><br><color style='color:#FFD780;'>Soulseeker Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>.<br> · For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, two Soulseeker Shells will undergo corresponding Elemental Conversions to become \"Radiant Soulseeker Shells,\" which deal Nightsoul-aligned Elemental DMG from a randomly selected one of the corresponding Elemental Types.<br><br><i>None can escape from the moonlight or the whispers of the night, just as no foe can flee her attentive eyes once she's got them in her sights.</i>",
                        "Num": 1,
                        "Lock": "CircleR25H20HC",
                        "Icon": "Skill_E_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Galesplitting Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "88.0%",
                                    "94.6%",
                                    "101.2%",
                                    "110.0%",
                                    "116.6%",
                                    "123.2%",
                                    "132.0%",
                                    "140.8%",
                                    "149.6%",
                                    "158.4%",
                                    "167.2%",
                                    "176.0%",
                                    "187.0%",
                                    "198.0%",
                                    "209.0%"
                                ]
                            },
                            {
                                "Desc": "Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "103.4%",
                                    "111.155%",
                                    "118.91%",
                                    "129.25%",
                                    "137.005%",
                                    "144.76%",
                                    "155.1%",
                                    "165.44%",
                                    "175.78%",
                                    "186.12%",
                                    "196.46%",
                                    "206.8%",
                                    "219.725%",
                                    "232.65%",
                                    "245.575%"
                                ]
                            },
                            {
                                "Desc": "Radiant Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "206.8%",
                                    "222.31%",
                                    "237.82%",
                                    "258.5%",
                                    "274.01%",
                                    "289.52%",
                                    "310.2%",
                                    "330.88%",
                                    "351.56%",
                                    "372.24%",
                                    "392.92%",
                                    "413.6%",
                                    "439.45%",
                                    "465.3%",
                                    "491.15%"
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
                        "Name": "Bullet Trick",
                        "Desc": "When the Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> is being charged, if there are party members who meet the Elemental Conversion Type requirements, gain the following effects based on the number of different eligible Elemental Types present:<br> · There is a 33.3%/66.7%/100% chance for each Type to trigger \"Spiritbinding Conversion\" and cause the 3rd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder to be randomly converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color> from one of the corresponding Elemental Types.<br> · Each element type will grant Chasca 1 stack of Spirit of the Radiant Shadow, increasing the DMG of Shining Shadowhunt Shell by 15%/35%/65%. This effect lasts until the current Multitarget Fire ends. Max 3 stacks.",
                        "Icon": "UI_Talent_S_Chasca_05"
                    },
                    {
                        "Name": "Intent to Cover",
                        "Desc": "When a nearby party member triggers a Nightsoul Burst, Chasca will fire a \"Burning Shadowhunt Shot\" at a nearby opponent, dealing Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> equal to 150% of the <color style='color:#FFD780;'>Shadowhunt Shell</color> DMG from her Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>. If the party has <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> characters, the Burning Shadowhunt Shot will be converted to deal Nightsoul-aligned Elemental DMG of the corresponding Elemental Type equal to 150% of the DMG dealt by <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Shining Shadowhunt Shells</color>.<br>The DMG done in this way is considered Charged Attack DMG.",
                        "Icon": "UI_Talent_S_Chasca_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Everburning Heart",
                        "Desc": "After her Nightsoul points are exhausted, Chasca will switch to consuming Phlogiston to maintain her Nightsoul's Blessing.<br>While in an area with Phlogiston Mechanics within Natlan, she can use Nightsoul Transmission: Chasca. When the active character is in the air, the following will occur when switching to Chasca: Chasca will enter the Nightsoul's Blessing state and gain 32 Nightsoul points. Nightsoul Transmission can be triggered once every 10s by your own team.",
                        "Icon": "UI_Talent_S_Chasca_07"
                    },
                    {
                        "Name": "Mediation's True Meaning",
                        "Desc": "25 Phlogiston will be restored when your own party members defeat an opponent. This effect can trigger once every 12s.<br>This has no effect in Domains, Trounce Domains, or the Spiral Abyss.",
                        "Icon": "UI_Talent_S_Chasca_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Cylinder, the Restless Roulette",
                        "Desc": "When triggering the Passive Talent \"Bullet Trick\"'s \"Spiritbinding Conversion,\" the 2nd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder will be additionally converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color>.<br>The chance to trigger \"Spiritbinding Conversion\" is increased: If there are party members who meet the Elemental Conversion Type requirements, the chance to trigger \"Spiritbinding Conversion\" is increased by 33.3%, up to a maximum of 100%.<br><br>You must first unlock the Passive Talent \"Bullet Trick.\"<br><br>In addition, Chasca's Nightsoul point and Phlogiston consumption in her Nightsoul's Blessing state is decreased by 30% while out of combat.",
                        "Icon": "UI_Talent_S_Chasca_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Muzzle, the Searing Smoke",
                        "Desc": "When Chasca takes the field, she will obtain 1 stack of \"Spirit of the Radiant Shadow\" from the Passive Talent \"Bullet Trick.\" You must first unlock the Passive Talent \"Bullet Trick\" for this effect.<br>In addition, when the <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> from <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> hit opponents, they will deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> equal to 400% of Chasca's ATK. This DMG is considered Charged Attack DMG. This effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Multitarget Fire</color>.",
                        "Icon": "UI_Talent_S_Chasca_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Reins, Her Careful Control",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Sparks, the Sudden Shot",
                        "Desc": "When the <color style='color:#FFD780;'>Radiant Soulseeker Shells</color> from <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> hit opponents, they will restore 1.5 Elemental Energy to Chasca, and deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Radiant Soulseeker Shells</color> equal to 400% of Chasca's ATK. This DMG is considered Charged Attack DMG.<br>The aforementioned corresponding elemental AoE DMG effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color>.",
                        "Icon": "UI_Talent_S_Chasca_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Brim, the Sandshadow's Silhouette",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Showdown, the Glory of Battle",
                        "Desc": "Chasca's <color style='color:#FFD780;'>Multitarget Fire</color> charge time is decreased, and after the Passive Talent \"Bullet Trick\"'s \"Spiritbinding Conversion\" is triggered, Chasca will gain the \"Fatal Rounds\" state: For the next 3s, the next time Chasca uses <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color>, the shots will finish charging instantly, and the CRIT DMG of that instance of <color style='color:#FFD780;'>Multitarget Fire</color> increases by 120%. 1 \"Fatal Rounds\" effect can be gained once every 3s.<br><br>You must first unlock the Passive Talent \"Bullet Trick\" to gain access to the above effect.",
                        "Icon": "UI_Talent_S_Chasca_04"
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Phantom Feather Flurry",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, mighty winds will accumulate on the arrowhead. A fully charged wind arrow will deal <color style='color:#80FFD7;'>Anemo DMG</color>.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, hitting opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "48.0078%",
                                    "51.9154%",
                                    "55.823%",
                                    "61.4053%",
                                    "65.3129%",
                                    "69.7788%",
                                    "75.9193%",
                                    "82.0598%",
                                    "88.2003%",
                                    "94.8991%",
                                    "101.5979%",
                                    "108.2966%",
                                    "114.9954%",
                                    "121.6941%",
                                    "128.3929%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.5884%",
                                    "48.2177%",
                                    "51.847%",
                                    "57.0317%",
                                    "60.661%",
                                    "64.8087%",
                                    "70.5119%",
                                    "76.2151%",
                                    "81.9183%",
                                    "88.1399%",
                                    "94.3615%",
                                    "100.5832%",
                                    "106.8048%",
                                    "113.0265%",
                                    "119.2481%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "29.6975%×2",
                                    "32.1148%×2",
                                    "34.532%×2",
                                    "37.9852%×2",
                                    "40.4024%×2",
                                    "43.165%×2",
                                    "46.9635%×2",
                                    "50.762%×2",
                                    "54.5606%×2",
                                    "58.7044%×2",
                                    "62.8482%×2",
                                    "66.9921%×2",
                                    "71.1359%×2",
                                    "75.2798%×2",
                                    "79.4236%×2"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "25.4672%×3",
                                    "27.5401%×3",
                                    "29.613%×3",
                                    "32.5743%×3",
                                    "34.6472%×3",
                                    "37.0163%×3",
                                    "40.2737%×3",
                                    "43.5311%×3",
                                    "46.7885%×3",
                                    "50.3421%×3",
                                    "53.8957%×3",
                                    "57.4492%×3",
                                    "61.0028%×3",
                                    "64.5563%×3",
                                    "68.1099%×3"
                                ]
                            },
                            {
                                "Desc": "Aimed Shot",
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
                                "Desc": "Fully-Charged Aimed Shot",
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
                                "Desc": "Plunge DMG",
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
                                "Desc": "Low/High Plunge DMG",
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
                        "Name": "Spirit Reins, Shadow Hunt",
                        "Desc": "Chasca and the will residing in her weapon resonate, dealing Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>.<br>After using this Skill, Chasca gains 80 Nightsoul points and enters the Nightsoul's Blessing state.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Chasca</color><br>Continually consume Nightsoul points. When Nightsoul points are fully depleted or the skill is used again, Chasca's Nightsoul's Blessing state will end. Her Nightsoul's Blessing has the following traits:<br> · Mounts \"Soulsniper: Ritual Staff,\" increasing Chasca's Movement SPD and interruption resistance. In this state, Chasca will continually consume Nightsoul points to remain airborne. When Sprinting or increasing height, extra Nightsoul points will be consumed.<br> · When using Normal or Charged Attacks, Tap or Hold to switch between using \"Multitarget Fire\" in different ways.<br><br><color style='color:#FFD780;'>Multitarget Fire</color><br><color style='color:#FFD780;'>Tap</color><br>Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> to opponents in front. This DMG is considered Normal Attack DMG.<br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode and choose a certain number of opponents within a certain range, before loading up to 6 Shadowhunt Shells based on the duration for which the skill was charged. When 6 Shells have been loaded or charging is stopped, these Shells will be fired at the chosen opponents in sequence.<br><br><color style='color:#FFD780;'>Shadowhunt Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>, which is considered Charged Attack DMG.<br> · The 4th, 5th, and 6th Shells loaded into the cylinder will undergo Elemental Conversion based on the Elemental Types of the other characters in the party: For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, one Shadowhunt Shell will randomly be Converted into a \"Shining Shadowhunt Shell\" of one of these corresponding Elemental Types, dealing Nightsoul-aligned DMG corresponding to that Elemental Type. This DMG is considered Charged Attack DMG.<br> · The Shells loaded into the cylinder are fired starting from the last Shadowhunt Shell to be loaded, in a \"last in, first out\" order.<br><br>Additionally, when Chasca is in the Nightsoul's Blessing state, Holding her Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color> will cause her to execute a Nightsoul-aligned Plunging Attack. Release the Elemental Skill to interrupt this Plunging Attack and maintain her airborne state. Should Chasca hit the ground with her Plunging Attack, her Nightsoul's Blessing state will end.<br><br><i>In theory, as long as she's willing, those reins can bridle anything... But what could possibly be as cool as a giant hand cannon?</i>",
                        "Icon": "Skill_S_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Resonance DMG",
                                "ParamLevelList": [
                                    "60.0%",
                                    "64.5%",
                                    "69.0%",
                                    "75.0%",
                                    "79.5%",
                                    "84.0%",
                                    "90.0%",
                                    "96.0%",
                                    "102.0%",
                                    "108.0%",
                                    "114.0%",
                                    "120.0%",
                                    "127.5%",
                                    "135.0%",
                                    "142.5%"
                                ]
                            },
                            {
                                "Desc": "Multitarget Fire Tap DMG",
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
                                "Desc": "Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "48.8%",
                                    "52.46%",
                                    "56.12%",
                                    "61.0%",
                                    "64.66%",
                                    "68.32%",
                                    "73.2%",
                                    "78.08%",
                                    "82.96%",
                                    "87.84%",
                                    "92.72%",
                                    "97.6%",
                                    "103.7%",
                                    "109.8%",
                                    "115.9%"
                                ]
                            },
                            {
                                "Desc": "Shining Shadowhunt Shell DMG",
                                "ParamLevelList": [
                                    "166.572%",
                                    "179.0649%",
                                    "191.5578%",
                                    "208.215%",
                                    "220.7079%",
                                    "233.2008%",
                                    "249.858%",
                                    "266.5152%",
                                    "283.1724%",
                                    "299.8296%",
                                    "316.4868%",
                                    "333.144%",
                                    "353.9655%",
                                    "374.787%",
                                    "395.6085%"
                                ]
                            },
                            {
                                "Desc": "Nightsoul Point Limit",
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
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s",
                                    "6.5s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Soul Reaper's Fatal Round",
                        "Desc": "Chasca concentrates her will, firing a single \"Galesplitting Soulseeker Shell\" that deals Nightsoul-aligned <color style='color:#80FFD7;'>AoE Anemo DMG</color>. Afterward, the Galesplitting Soulseeker Shell will split into 6 Soulseeker Shells, which attack nearby opponents.<br><br><color style='color:#FFD780;'>Soulseeker Shells</color><br> · Deal Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color>.<br> · For each <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> character in the party, two Soulseeker Shells will undergo corresponding Elemental Conversions to become \"Radiant Soulseeker Shells,\" which deal Nightsoul-aligned Elemental DMG from a randomly selected one of the corresponding Elemental Types.<br><br><i>None can escape from the moonlight or the whispers of the night, just as no foe can flee her attentive eyes once she's got them in her sights.</i>",
                        "Icon": "Skill_E_Chasca_01",
                        "ParamDesc": [
                            {
                                "Desc": "Galesplitting Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "88.0%",
                                    "94.6%",
                                    "101.2%",
                                    "110.0%",
                                    "116.6%",
                                    "123.2%",
                                    "132.0%",
                                    "140.8%",
                                    "149.6%",
                                    "158.4%",
                                    "167.2%",
                                    "176.0%",
                                    "187.0%",
                                    "198.0%",
                                    "209.0%"
                                ]
                            },
                            {
                                "Desc": "Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "103.4%",
                                    "111.155%",
                                    "118.91%",
                                    "129.25%",
                                    "137.005%",
                                    "144.76%",
                                    "155.1%",
                                    "165.44%",
                                    "175.78%",
                                    "186.12%",
                                    "196.46%",
                                    "206.8%",
                                    "219.725%",
                                    "232.65%",
                                    "245.575%"
                                ]
                            },
                            {
                                "Desc": "Radiant Soulseeker Shell DMG",
                                "ParamLevelList": [
                                    "206.8%",
                                    "222.31%",
                                    "237.82%",
                                    "258.5%",
                                    "274.01%",
                                    "289.52%",
                                    "310.2%",
                                    "330.88%",
                                    "351.56%",
                                    "372.24%",
                                    "392.92%",
                                    "413.6%",
                                    "439.45%",
                                    "465.3%",
                                    "491.15%"
                                ]
                            },
                            {
                                "Desc": "CD",
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
                                "Desc": "Energy Cost",
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
                        "Name": "Bullet Trick",
                        "Desc": "When the Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> is being charged, if there are party members who meet the Elemental Conversion Type requirements, gain the following effects based on the number of different eligible Elemental Types present:<br> · There is a 33.3%/66.7%/100% chance for each Type to trigger \"Spiritbinding Conversion\" and cause the 3rd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder to be randomly converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color> from one of the corresponding Elemental Types.<br> · Each Elemental Type will grant Chasca 1 stack of Spirit of the Radiant Shadow, increasing the DMG of Shining Shadowhunt Shell by 15%/35%/65%. This effect lasts until the current Multitarget Fire ends. Max 3 stacks.",
                        "Icon": "UI_Talent_S_Chasca_05"
                    },
                    {
                        "Name": "Intent to Cover",
                        "Desc": "When a nearby party member triggers a Nightsoul Burst, Chasca will fire a \"Burning Shadowhunt Shot\" at a nearby opponent, dealing Nightsoul-aligned <color style='color:#80FFD7;'>Anemo DMG</color> equal to 150% of the <color style='color:#FFD780;'>Shadowhunt Shell</color> DMG from her Elemental Skill <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>. If the party has <color style='color:#FF9999;'>Pyro</color>, <color style='color:#80C0FF;'>Hydro</color>, <color style='color:#99FFFF;'>Cryo</color>, or <color style='color:#FFACFF;'>Electro</color> characters, the Burning Shadowhunt Shot will be converted to deal Nightsoul-aligned Elemental DMG of the corresponding Elemental Type equal to 150% of the DMG dealt by <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Shining Shadowhunt Shells</color>.<br>The DMG done in this way is considered Charged Attack DMG.",
                        "Icon": "UI_Talent_S_Chasca_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Everburning Heart",
                        "Desc": "After her Nightsoul points are exhausted, Chasca will switch to consuming Phlogiston to maintain her Nightsoul's Blessing.<br>While in an area with Phlogiston Mechanics within Natlan, she can use Nightsoul Transmission: Chasca. When the active character is in the air, the following will occur when switching to Chasca: Chasca will enter the Nightsoul's Blessing state and gain 32 Nightsoul points. Nightsoul Transmission can be triggered once every 10s by your own team.",
                        "Icon": "UI_Talent_S_Chasca_07"
                    },
                    {
                        "Name": "Mediation's True Meaning",
                        "Desc": "25 Phlogiston will be restored when your own party members defeat an opponent. This effect can trigger once every 12s.<br>This has no effect in Domains, Trounce Domains, or the Spiral Abyss.",
                        "Icon": "UI_Talent_S_Chasca_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Cylinder, the Restless Roulette",
                        "Desc": "When triggering the Ascension Talent \"Bullet Trick\"'s \"Spiritbinding Conversion,\" the 2nd <color style='color:#FFD780;'>Shadowhunt Shell</color> loaded into the cylinder will be additionally converted into a <color style='color:#FFD780;'>Shining Shadowhunt Shell</color>.<br>The chance to trigger \"Spiritbinding Conversion\" is increased: If there are party members who meet the Elemental Conversion Type requirements, the chance to trigger \"Spiritbinding Conversion\" is increased by 33.3%, up to a maximum of 100%.<br><br>You must first unlock the Ascension Talent \"Bullet Trick.\"<br>In addition, Chasca's Nightsoul point and Phlogiston consumption in her Nightsoul's Blessing state is decreased by 30% while out of combat.",
                        "Icon": "UI_Talent_S_Chasca_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Muzzle, the Searing Smoke",
                        "Desc": "When Chasca takes the field, she will obtain 1 stack of \"Spirit of the Radiant Shadow\" from the Ascension Talent \"Bullet Trick.\" You must first unlock the Ascension Talent \"Bullet Trick\" for this effect.<br>In addition, when the <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> from <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color> hit opponents, they will deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> equal to 400% of Chasca's ATK. This DMG is considered Charged Attack DMG. This effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Multitarget Fire</color>.",
                        "Icon": "UI_Talent_S_Chasca_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Reins, Her Careful Control",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Sparks, the Sudden Shot",
                        "Desc": "When the <color style='color:#FFD780;'>Radiant Soulseeker Shells</color> from <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> hit opponents, they will restore 1.5 Elemental Energy to Chasca, and deal AoE Elemental DMG of the corresponding Elemental Type of the <color style='color:#FFD780;'>Radiant Soulseeker Shells</color> equal to 400% of Chasca's ATK. This DMG is considered Charged Attack DMG.<br>The aforementioned corresponding elemental AoE DMG effect can be triggered once each time Chasca uses <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color>.",
                        "Icon": "UI_Talent_S_Chasca_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Brim, the Sandshadow's Silhouette",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Soul Reaper's Fatal Round</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chasca_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Showdown, the Glory of Battle",
                        "Desc": "Chasca's <color style='color:#FFD780;'>Multitarget Fire</color> charge time is decreased, and after the Ascension Talent \"Bullet Trick\"'s \"Spiritbinding Conversion\" is triggered, Chasca will gain the \"Fatal Rounds\" state: For the next 3s, the next time Chasca uses <color style='color:#FFD780;'>Spirit Reins, Shadow Hunt</color>'s <color style='color:#FFD780;'>Multitarget Fire</color>, the shots will finish charging instantly, and the CRIT DMG of that instance of <color style='color:#FFD780;'>Multitarget Fire</color>'s <color style='color:#FFD780;'>Shadowhunt Shells</color> and <color style='color:#FFD780;'>Shining Shadowhunt Shells</color> increases by 120%. 1 \"Fatal Rounds\" effect can be gained once every 3s.<br><br>You must first unlock the Ascension Talent \"Bullet Trick\" to gain access to the above effect.",
                        "Icon": "UI_Talent_S_Chasca_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Chasca": {}
}