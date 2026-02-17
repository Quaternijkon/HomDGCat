// Auto Generated

var _AvatarDataConfig_ = {
    "Olorun": {
        "BallList": [
            {
                "When": "Orb hits monster (once per Orb)",
                "DropArray": [
                    {
                        "Num": 3,
                        "Chance": 1
                    }
                ]
            }
        ],
        "EndureList": [
            {
                "Skill": "Special Leap",
                "Endure": 0
            }
        ],
        "WindZoneList": [],
        "OtherDataList": [
            "<b>@5.2v4 Changes#</b><br>• Particle Generation: @4 → 3#",
            "<b>@5.2v3 Changes#</b><br>• Particle Generation: @3 → 4#",
            "<b>@Taunt#</b><br>• Taunt range is @8m#, larger than most other characters.<br>• Characters with 5m taunt range: Amber, Ganyu, Itto, Lyney, Tighnari<br>• Characters with 8m taunt range: Lynette, Ororon",
            "<b>@Interruption RES#</b><br>• Cannot be interrupted during special leap.",
            "<b>@Particle Generation#</b><br>• The first Bounce of Skill Bomb generates @4 Electro Particles#, CD 6s."
        ]
    }
}

var _AvatarMats_ = {
    "Olorun": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104141": 1,
                "101252": 3,
                "112101": 3
            },
            {
                "202": 40000,
                "104142": 3,
                "113064": 2,
                "101252": 10,
                "112101": 15
            },
            {
                "202": 60000,
                "104142": 6,
                "113064": 4,
                "101252": 20,
                "112102": 12
            },
            {
                "202": 80000,
                "104143": 3,
                "113064": 8,
                "101252": 30,
                "112102": 18
            },
            {
                "202": 100000,
                "104143": 6,
                "113064": 12,
                "101252": 45,
                "112103": 12
            },
            {
                "202": 120000,
                "104144": 6,
                "113064": 20,
                "101252": 60,
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
                "113054": 1
            },
            {
                "202": 260000,
                "104352": 6,
                "112103": 6,
                "113054": 1
            },
            {
                "202": 450000,
                "104352": 12,
                "112103": 9,
                "113054": 2
            },
            {
                "202": 700000,
                "104352": 16,
                "112103": 12,
                "113054": 2,
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
                "113054": 1
            },
            {
                "202": 260000,
                "104352": 6,
                "112103": 6,
                "113054": 1
            },
            {
                "202": 450000,
                "104352": 12,
                "112103": 9,
                "113054": 2
            },
            {
                "202": 700000,
                "104352": 16,
                "112103": 12,
                "113054": 2,
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
                "113054": 1
            },
            {
                "202": 260000,
                "104352": 6,
                "112103": 6,
                "113054": 1
            },
            {
                "202": 450000,
                "104352": 12,
                "112103": 9,
                "113054": 2
            },
            {
                "202": 700000,
                "104352": 16,
                "112103": 12,
                "113054": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Olorun": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, crackling lightning will accumulate on the arrowhead. An arrow fully charged with the storm's might will deal <color style='color:#FFACFF;'>Electro DMG</color>.<br>Special: Capable of scanning runes and graffiti in Natlan, creating different effects based on what was scanned.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "50.642%",
                                    "54.764%",
                                    "58.886%",
                                    "64.775%",
                                    "68.897%",
                                    "73.607%",
                                    "80.085%",
                                    "86.562%",
                                    "93.04%",
                                    "100.106%",
                                    "107.173%",
                                    "114.239%",
                                    "121.305%",
                                    "128.372%",
                                    "135.438%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.373%",
                                    "47.985%",
                                    "51.597%",
                                    "56.757%",
                                    "60.369%",
                                    "64.496%",
                                    "70.172%",
                                    "75.848%",
                                    "81.523%",
                                    "87.715%",
                                    "93.906%",
                                    "100.0%",
                                    "106.29%",
                                    "112.481%",
                                    "118.673%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "69.821%",
                                    "75.504%",
                                    "81.187%",
                                    "89.306%",
                                    "94.989%",
                                    "101.484%",
                                    "110.414%",
                                    "119.345%",
                                    "128.276%",
                                    "138.018%",
                                    "147.76%",
                                    "157.503%",
                                    "167.245%",
                                    "176.988%",
                                    "186.73%"
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
                        "Name": "Elemental Skill",
                        "Desc": "Tosses a \"Graffiti Bomb\" that will ricochet between nearby opponents, attacking them. Deals <color style='color:#FFACFF;'>Electro DMG</color>.<br>Stops attacking after attacking 3 times, or when there are no more opponents nearby to attack. Can bounce off each opponent a maximum of once.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "197.6%",
                                    "212.42%",
                                    "227.24%",
                                    "247.0%",
                                    "261.82%",
                                    "276.64%",
                                    "296.4%",
                                    "316.16%",
                                    "335.92%",
                                    "355.68%",
                                    "375.44%",
                                    "395.2%",
                                    "419.9%",
                                    "444.6%",
                                    "469.3%"
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
                            }
                        ]
                    },
                    {
                        "Name": "Elemental Burst",
                        "Desc": "Ororon summons a \"Psionic Eye\" that deals <color style='color:#FFACFF;'>AoE Electro DMG</color>.<br><br><color style='color:#FFD780;'>Psionic Eye</color>:<br> · Can continually taunt nearby opponents, drawing their attacks.<br> · Can fire soundwaves and continually spins, dealing <color style='color:#FFACFF;'>Electro DMG</color> to opponents it touches.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Activation DMG",
                                "ParamLevelList": [
                                    "174.384%",
                                    "187.463%",
                                    "200.542%",
                                    "217.98%",
                                    "231.059%",
                                    "244.138%",
                                    "261.576%",
                                    "279.014%",
                                    "296.453%",
                                    "313.891%",
                                    "331.33%",
                                    "348.768%",
                                    "370.566%",
                                    "392.364%",
                                    "414.162%"
                                ]
                            },
                            {
                                "Desc": "Soundwave Collision DMG",
                                "ParamLevelList": [
                                    "33.2%",
                                    "35.69%",
                                    "38.18%",
                                    "41.5%",
                                    "43.99%",
                                    "46.48%",
                                    "49.8%",
                                    "53.12%",
                                    "56.44%",
                                    "59.76%",
                                    "63.08%",
                                    "66.4%",
                                    "70.55%",
                                    "74.7%",
                                    "78.85%"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                        "Name": "Ascension Talent 1",
                        "Desc": "<br> · When party members triggers a Nightsoul Burst, Ororon will recover 40 Nightsoul points.<br>For 15s after using a Skill, Ororon will recover 5 Nightsoul points after characters other than himself hit opponents with Hydro or Electro DMG. This can only be triggered up to 10 times during its duration, and he can recover Nightsoul points this way once every 0.3s.<br>Nightsoul points can be consumed in the following ways:<br>After nearby opponents are attacked by Electro-Charged or by Nightsoul-aligned attacks (from characters other than Ororon), if he has 10 or more Nightsoul points, Ororon will enter the Nightsoul's Blessing state for 6s and trigger the \"Electric Induction\" effect: Deal Electro DMG equal to 130% of his ATK to up to 4 nearby opponents and consume 10 Nightsoul points. This effect can be triggered once every 1.8s.",
                        "Icon": "UI_Talent_S_Olorun_05"
                    },
                    {
                        "Name": "Ascension Talent 2",
                        "Desc": "For 15s after his Elemental Skill hits, the active party member restores 3 Elemental Energy after attacking with Hydro or Electro DMG. If Ororon is off-field at the time, Ororon will restore 3 Elemental Energy as well. This can be triggered once every 1s, and can be triggered up to 3 times during its duration.",
                        "Icon": "UI_Talent_S_Olorun_06"
                    },
                    {
                        "Name": "Natlan Talent",
                        "Desc": "While in an area with Phlogiston Mechanics within Natlan, he can use Nightsoul Transmission: Ororon. When the active character is currently sprinting, in a movement mode caused by certain Talents, or at a certain height in the air, the following will trigger when switching to Ororon: Ororon will leap up high. Nightsoul Transmission can be triggered once every 10s.",
                        "Icon": "UI_Talent_S_Olorun_07"
                    },
                    {
                        "Name": "Life Talent",
                        "Desc": "",
                        "Icon": "UI_Talent_S_Olorun_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Constellation 1",
                        "Desc": "Graffiti Bomb can attack 2 more times, and opponents hit take 60% more DMG from \"Electric Induction\" for 12s.<br>Requires Ascension Talent 1 to be unlocked first.",
                        "Icon": "UI_Talent_S_Olorun_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Constellation 2",
                        "Desc": "When Ororon's Elemental Burst hits 1/2/3/4 or more opponents, his own Electro DMG dealt increases by 24%/36%/48%/60% for 9s.",
                        "Icon": "UI_Talent_S_Olorun_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Constellation 3",
                        "Desc": "Increases Elemental Burst Level by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Constellation 4",
                        "Desc": "The rotation speed of the soundwaves during the Elemental Burst increase by 25%.",
                        "Icon": "UI_Talent_S_Olorun_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Constellation 5",
                        "Desc": "Increases Elemental Skill Level by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Constellation 6",
                        "Desc": "After consuming Nightsoul points to trigger the effect of Ascension Talent 1, the active party member's ATK increases by 10% for 9s, stacking up to 3 times. Each stack is counted independently.<br>In addition, when his Elemental Burst is used, an attack that counts as an instance of \"Electric Induction\" that does not consume Nightsoul points will be triggered, dealing 300% of his ATK as Electro DMG.",
                        "Icon": "UI_Talent_S_Olorun_04"
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Spiritvessel Snapshot",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, Electro energy will accumulate on the arrowhead. A fully charged arrow will deal high amounts of <color style='color:#FFACFF;'>Electro DMG</color>.<br>Ororon will also enter the Spiritspeaker state upon holding to aim, which will let him obtain the information and power within Nightspirit Graffiti and Nightspirit Sigils.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "50.642%",
                                    "54.764%",
                                    "58.886%",
                                    "64.775%",
                                    "68.897%",
                                    "73.607%",
                                    "80.085%",
                                    "86.562%",
                                    "93.04%",
                                    "100.106%",
                                    "107.173%",
                                    "114.239%",
                                    "121.305%",
                                    "128.372%",
                                    "135.438%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.373%",
                                    "47.985%",
                                    "51.597%",
                                    "56.757%",
                                    "60.369%",
                                    "64.496%",
                                    "70.172%",
                                    "75.848%",
                                    "81.523%",
                                    "87.715%",
                                    "93.906%",
                                    "100.0%",
                                    "106.29%",
                                    "112.481%",
                                    "118.673%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "69.821%",
                                    "75.504%",
                                    "81.187%",
                                    "89.306%",
                                    "94.989%",
                                    "101.484%",
                                    "110.414%",
                                    "119.345%",
                                    "128.276%",
                                    "138.018%",
                                    "147.76%",
                                    "157.503%",
                                    "167.245%",
                                    "176.988%",
                                    "186.73%"
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
                        "Name": "Night's Tightrope",
                        "Desc": "Ororon manifests an ancient mystical technique from the Masters of the Night-Wind as a <color style='color:#FFD780;'>Spirit Oculus</color> of midnight shade and throws it at the foe, dealing Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>.<br>When other opponents are nearby, the Spirit Oculus will bounce between them, dealing Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>. Each time Night's Tightrope is used, each opponent can only be selected as a target once.<br>After 3 bounces, or if there are no eligible targets left, the Oculus will disappear. 1 Oculus created by Ororon himself can exist at any one time.<br><br><i>\"People always wish to foretell the future, but that might be because they have yet to discover that which they must do... Sorry, I'm saying complicated things again, I know...\"</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "197.6%",
                                    "212.42%",
                                    "227.24%",
                                    "247.0%",
                                    "261.82%",
                                    "276.64%",
                                    "296.4%",
                                    "316.16%",
                                    "335.92%",
                                    "355.68%",
                                    "375.44%",
                                    "395.2%",
                                    "419.9%",
                                    "444.6%",
                                    "469.3%"
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
                            }
                        ]
                    },
                    {
                        "Name": "Dark Voices Echo",
                        "Desc": "Ororon works an ancient ritual, dealing Nightsoul-aligned <color style='color:#FFACFF;'>AoE Electro DMG</color>, summoning forth a Supersonic Oculus.<br><br><color style='color:#FFD780;'>Supersonic Oculus</color><br> · Continuously taunts nearby opponents and attracts attacks from them.<br> · Continuously rotates and fires off sonic waves that deal Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>.<br><br><i>Those with sharp enough senses can hear the minute voices with which all things speak. That way, they will never lose their way — not even on long, lightless nights.</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Activation DMG",
                                "ParamLevelList": [
                                    "174.384%",
                                    "187.463%",
                                    "200.542%",
                                    "217.98%",
                                    "231.059%",
                                    "244.138%",
                                    "261.576%",
                                    "279.014%",
                                    "296.453%",
                                    "313.891%",
                                    "331.33%",
                                    "348.768%",
                                    "370.566%",
                                    "392.364%",
                                    "414.162%"
                                ]
                            },
                            {
                                "Desc": "Soundwave Collision DMG",
                                "ParamLevelList": [
                                    "33.2%",
                                    "35.69%",
                                    "38.18%",
                                    "41.5%",
                                    "43.99%",
                                    "46.48%",
                                    "49.8%",
                                    "53.12%",
                                    "56.44%",
                                    "59.76%",
                                    "63.08%",
                                    "66.4%",
                                    "70.55%",
                                    "74.7%",
                                    "78.85%"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                        "Name": "Nightshade Synesthesia",
                        "Desc": "When a nearby party member triggers Nightsoul Burst, Ororon will gain 40 Nightsoul points. Within 15s after using his Elemental Skill, when nearby active characters deal <color style='color:#80C0FF;'>Hydro DMG</color> or <color style='color:#FFACFF;'>Electro DMG</color>, Ororon will gain 5 Nightsoul points, an effect that can occur every 0.3s, and can occur 10 times during this 15s duration.<br><br>Also, when nearby opponents take <color style='color:#FFACFF;'>Electro-Charged</color> reaction DMG or when nearby characters deal Nightsoul-aligned DMG, Ororon will consume 10 Nightsoul points (provided he has at least that amount), entering the Nightsoul's Blessing state and triggering the Hypersense effect: Deal Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color> based on 130% of Ororon's ATK to at most 4 nearby opponents. The aforementioned effect can trigger once every 1.8s.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Ororon</color><br>Ororon's Nightsoul's Blessing state lasts 6s.",
                        "Icon": "UI_Talent_S_Olorun_05"
                    },
                    {
                        "Name": "Aspect Catalyst",
                        "Desc": "After the Elemental Skill <color style='color:#FFD780;'>Night's Tightrope</color>'s <color style='color:#FFD780;'>Spirit Oculus</color> hits an opponent, Ororon will gain the Aspect Sigil effect for 15s.<br><br><color style='color:#FFD780;'>Aspect Sigil</color><br>When nearby active party member deal <color style='color:#80C0FF;'>Hydro DMG</color> or <color style='color:#FFACFF;'>Electro DMG</color>, that character will restore 3 Energy. If Ororon is off-field, Ororon will also restore 3 Energy. This effect can trigger once every 1s, and can trigger 3 times per duration.",
                        "Icon": "UI_Talent_S_Olorun_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Flowing Fog, Spritely Shadows",
                        "Desc": "While in an area with Phlogiston Mechanics within Natlan, he can use Nightsoul Transmission: Ororon. When the active character is currently in a movement mode caused by certain Talents, or at a certain height in the air, the following will trigger when switching to Ororon: Ororon will leap up high. Nightsoul Transmission can be triggered once every 10s by your party.<br><br>Additionally, holding the jump button will cause Ororon to consume 75 Stamina and leap. In areas within Natlan where Phlogiston mechanics are present, Ororon will prioritize consuming 5 Phlogiston to leap to a height higher still.",
                        "Icon": "UI_Talent_S_Olorun_07"
                    },
                    {
                        "Name": "Life Talent",
                        "Desc": "",
                        "Icon": "UI_Talent_S_Olorun_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Trails Amidst the Forest Fog",
                        "Desc": "The Elemental Skill <color style='color:#FFD780;'>Night's Tightrope</color>'s <color style='color:#FFD780;'>Spirit Oculus</color> can bounce 2 additional times.<br>Additionally, after the <color style='color:#FFD780;'>Spirit Oculus</color> hits an opponent, it will apply the Nighttide effect to them for 12s. Opponents affected by Nighttide take 60% increased DMG from Hypersense triggered by the Passive Talent, \"Nightshade Synesthesia.\" Unlock the aforementioned Passive Talent to trigger this effect.",
                        "Icon": "UI_Talent_S_Olorun_01"
                    },
                    {
                        "Level": 2,
                        "Name": "King Bee of the Hidden Honeyed Wine",
                        "Desc": "After using his Elemental Burst, <color style='color:#FFD780;'>Dark Voices Echo</color>, Ororon will obtain the Spiritual Supersense effect for 9s.<br><color style='color:#FFD780;'>Spiritual Supersense</color><br>Gain 12% <color style='color:#FFACFF;'>Electro DMG Bonus</color>.<br>During this time, every additional opponent hit by the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color> or <color style='color:#FFD780;'>Supersonic Oculus</color> will grant Ororon a further 12% <color style='color:#FFACFF;'>Electro DMG Bonus</color>. The maximum that can be gained this way is 60% <color style='color:#FFACFF;'>Electro DMG Bonus</color>.",
                        "Icon": "UI_Talent_S_Olorun_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Roosting Bat's Spiritcage",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Dark Voices Echo</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_01"
                    },
                    {
                        "Level": 4,
                        "Name": "As the Mysteries of the Night Wind",
                        "Desc": "The <color style='color:#FFD780;'>Supersonic Oculus</color> summoned by the Elemental Burst, <color style='color:#FFD780;'>Dark Voices Echo</color> rotates 25% faster.",
                        "Icon": "UI_Talent_S_Olorun_03"
                    },
                    {
                        "Level": 5,
                        "Name": "A Gift For the Soul",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Night's Tightrope</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Ode to Deep Springs",
                        "Desc": "After triggering Hypersense through the Passive Talent, Nightshade Synesthesia, your current active character's ATK is increased by 10% for 9s. Max 3 stacks, each stack is counted independently.<br>Additionally, when you use the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color>, you will trigger one instance of an effect equivalent to Hypersense, dealing 200% of its original DMG.<br>You must unlock the Passive Talent \"Nightshade Synesthesia\" first.",
                        "Icon": "UI_Talent_S_Olorun_04"
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Spiritvessel Snapshot",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, Electro energy will accumulate on the arrowhead. A fully charged arrow will deal immense <color style='color:#FFACFF;'>Electro DMG</color>.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "50.642%",
                                    "54.764%",
                                    "58.886%",
                                    "64.775%",
                                    "68.897%",
                                    "73.607%",
                                    "80.085%",
                                    "86.562%",
                                    "93.04%",
                                    "100.106%",
                                    "107.173%",
                                    "114.239%",
                                    "121.305%",
                                    "128.372%",
                                    "135.438%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.373%",
                                    "47.985%",
                                    "51.597%",
                                    "56.757%",
                                    "60.369%",
                                    "64.496%",
                                    "70.172%",
                                    "75.848%",
                                    "81.523%",
                                    "87.715%",
                                    "93.906%",
                                    "100.0%",
                                    "106.29%",
                                    "112.481%",
                                    "118.673%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "69.821%",
                                    "75.504%",
                                    "81.187%",
                                    "89.306%",
                                    "94.989%",
                                    "101.484%",
                                    "110.414%",
                                    "119.345%",
                                    "128.276%",
                                    "138.018%",
                                    "147.76%",
                                    "157.503%",
                                    "167.245%",
                                    "176.988%",
                                    "186.73%"
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
                        "Name": "Night's Tightrope",
                        "Desc": "Ororon manifests an ancient mystical technique from the Masters of the Night-Wind as a <color style='color:#FFD780;'>Spirit Orb</color> of midnight shade and throws it at his foe, dealing Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>.<br>When other opponents are nearby, the Spirit Orb will bounce between them, dealing Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>. Each time Night's Tightrope is used, each opponent can only be selected as a target once.<br>After 3 bounces, or if there are no eligible targets left, the Orb will disappear. Only 1 Orb created by Ororon himself can exist at any one time.<br><br><i>\"People always wish to foretell the future, but that might be because they have yet to discover that which they must do... Sorry, I'm saying complicated things again, aren't I...\"</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Spirit Orb DMG",
                                "ParamLevelList": [
                                    "197.6%",
                                    "212.42%",
                                    "227.24%",
                                    "247.0%",
                                    "261.82%",
                                    "276.64%",
                                    "296.4%",
                                    "316.16%",
                                    "335.92%",
                                    "355.68%",
                                    "375.44%",
                                    "395.2%",
                                    "419.9%",
                                    "444.6%",
                                    "469.3%"
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
                            }
                        ]
                    },
                    {
                        "Name": "Dark Voices Echo",
                        "Desc": "Ororon works an ancient ritual, dealing Nightsoul-aligned <color style='color:#FFACFF;'>AoE Electro DMG</color>, summoning forth a Supersonic Oculus.<br><br><color style='color:#FFD780;'>Supersonic Oculus</color><br> · Continuously taunts nearby opponents and attracts attacks from them.<br> · Continuously rotates and fires off sonic waves that deal Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>.<br><br><i>Those with sharp enough senses can hear the minute voices with which all things speak. That way, they will never lose their way — not even on long, lightless nights.</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Ritual DMG",
                                "ParamLevelList": [
                                    "174.384%",
                                    "187.463%",
                                    "200.542%",
                                    "217.98%",
                                    "231.059%",
                                    "244.138%",
                                    "261.576%",
                                    "279.014%",
                                    "296.453%",
                                    "313.891%",
                                    "331.33%",
                                    "348.768%",
                                    "370.566%",
                                    "392.364%",
                                    "414.162%"
                                ]
                            },
                            {
                                "Desc": "Soundwave Collision DMG",
                                "ParamLevelList": [
                                    "33.2%",
                                    "35.69%",
                                    "38.18%",
                                    "41.5%",
                                    "43.99%",
                                    "46.48%",
                                    "49.8%",
                                    "53.12%",
                                    "56.44%",
                                    "59.76%",
                                    "63.08%",
                                    "66.4%",
                                    "70.55%",
                                    "74.7%",
                                    "78.85%"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                        "Name": "Nightshade Synesthesia",
                        "Desc": "When a nearby party member triggers Nightsoul Burst, Ororon will gain 40 Nightsoul points. Within 15s after using his Elemental Skill, when other characters deal <color style='color:#80C0FF;'>Hydro DMG</color> or <color style='color:#FFACFF;'>Electro DMG</color>, Ororon will gain 5 Nightsoul points, an effect that can occur every 0.3s for a maximum of 10 times during this 15s duration.<br><br>Also, when nearby opponents take <color style='color:#FFACFF;'>Electro-Charged</color> reaction DMG or Nightsoul-aligned DMG dealt by other nearby characters, Ororon will consume 10 Nightsoul points (provided he has at least that amount), entering the Nightsoul's Blessing state and triggering the Hypersense effect: Deal Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color> based on 160% of Ororon's ATK to at most 4 nearby opponents. The aforementioned effect can trigger once every 1.8s.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Ororon</color><br>Ororon's Nightsoul's Blessing state lasts 6s.",
                        "Icon": "UI_Talent_S_Olorun_05"
                    },
                    {
                        "Name": "Aspect Catalyst",
                        "Desc": "After the Elemental Skill <color style='color:#FFD780;'>Night's Tightrope</color>'s <color style='color:#FFD780;'>Spirit Oculus</color> hits an opponent, Ororon will gain the Aspect Sigil effect for 15s.<br><br><color style='color:#FFD780;'>Aspect Sigil</color><br>When a nearby active party member Normal Attack, Charged Attack or Plunge Attack hits an opponent, that character will restore 3 Energy. If Ororon is off-field, Ororon will also restore 3 Energy. This effect can trigger once every 1s, and can trigger 3 times per duration.",
                        "Icon": "UI_Talent_S_Olorun_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Flowing Fog, Spritely Shadows",
                        "Desc": "While in an area with Phlogiston Mechanics within Natlan, he can use Nightsoul Transmission: Ororon. When the active character is currently in the air, the following will trigger when switching to Ororon: Ororon will leap up high. Nightsoul Transmission can be triggered once every 10s by your party.<br><br>Holding Aiming Mode will cause Ororon to enter the \"Spiritspeaker\" state, which will allow him to interact with \"Nightspirit Graffiti\" and \"Nightspirit Bodies,\" extracting information and power from them. The rules for interacting with these objects follow the same rules as those governing Iktomisaurus interactions.<br><br>Additionally, holding the jump button will cause Ororon to consume 75 Stamina and leap. In areas within Natlan where Phlogiston mechanics are present, Ororon will prioritize consuming 5 Phlogiston to leap to a height higher still.<br>While in the air, hold Ororon's Normal Attack to aim, consuming Phlogiston or Stamina.",
                        "Icon": "UI_Talent_S_Olorun_07"
                    },
                    {
                        "Name": "Life Talent",
                        "Desc": "Increases gliding SPD for your own party members by 15%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Olorun_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Trails Amidst the Forest Fog",
                        "Desc": "The Elemental Skill <color style='color:#FFD780;'>Night's Tightrope</color>'s <color style='color:#FFD780;'>Spirit Orb</color> can bounce 2 additional times.<br>Additionally, after the <color style='color:#FFD780;'>Spirit Orb</color> hits an opponent, it will apply the Nighttide effect to them for 12s. Opponents affected by Nighttide take 50% increased DMG from Hypersense triggered by the Passive Talent, \"Nightshade Synesthesia.\" Unlock the aforementioned Passive Talent to trigger this effect.",
                        "Icon": "UI_Talent_S_Olorun_01"
                    },
                    {
                        "Level": 2,
                        "Name": "King Bee of the Hidden Honeyed Wine",
                        "Desc": "After using his Elemental Burst, <color style='color:#FFD780;'>Dark Voices Echo</color>, Ororon will obtain the Spiritual Supersense effect for 9s.<br><color style='color:#FFD780;'>Spiritual Supersense</color><br>Gain 8% <color style='color:#FFACFF;'>Electro DMG Bonus</color>.<br>During this time, every additional opponent hit by the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color> or <color style='color:#FFD780;'>Supersonic Oculus</color> will grant Ororon a further 8% <color style='color:#FFACFF;'>Electro DMG Bonus</color>. The maximum that can be gained this way is 40% <color style='color:#FFACFF;'>Electro DMG Bonus</color>.",
                        "Icon": "UI_Talent_S_Olorun_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Roosting Bat's Spiritcage",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Dark Voices Echo</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_01"
                    },
                    {
                        "Level": 4,
                        "Name": "As the Mysteries of the Night Wind",
                        "Desc": "The <color style='color:#FFD780;'>Supersonic Oculus</color> summoned by the Elemental Burst, <color style='color:#FFD780;'>Dark Voices Echo</color> rotates 25% faster.",
                        "Icon": "UI_Talent_S_Olorun_03"
                    },
                    {
                        "Level": 5,
                        "Name": "A Gift For the Soul",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Night's Tightrope</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Ode to Deep Springs",
                        "Desc": "After triggering Hypersense through the Passive Talent, Nightshade Synesthesia, your current active character's ATK is increased by 10% for 9s. Max 3 stacks, each stack is counted independently.<br>Additionally, when you use the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color>, you will trigger one instance of an effect equivalent to Hypersense, dealing 200% of its original DMG.<br>You must unlock the Passive Talent \"Nightshade Synesthesia\" first.",
                        "Icon": "UI_Talent_S_Olorun_04"
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Spiritvessel Snapshot",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, Electro energy will accumulate on the arrowhead. A fully charged arrow will deal immense <color style='color:#FFACFF;'>Electro DMG</color>.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "50.642%",
                                    "54.764%",
                                    "58.886%",
                                    "64.775%",
                                    "68.897%",
                                    "73.607%",
                                    "80.085%",
                                    "86.562%",
                                    "93.04%",
                                    "100.106%",
                                    "107.173%",
                                    "114.239%",
                                    "121.305%",
                                    "128.372%",
                                    "135.438%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.373%",
                                    "47.985%",
                                    "51.597%",
                                    "56.757%",
                                    "60.369%",
                                    "64.496%",
                                    "70.172%",
                                    "75.848%",
                                    "81.523%",
                                    "87.715%",
                                    "93.906%",
                                    "100.0%",
                                    "106.29%",
                                    "112.481%",
                                    "118.673%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "69.821%",
                                    "75.504%",
                                    "81.187%",
                                    "89.306%",
                                    "94.989%",
                                    "101.484%",
                                    "110.414%",
                                    "119.345%",
                                    "128.276%",
                                    "138.018%",
                                    "147.76%",
                                    "157.503%",
                                    "167.245%",
                                    "176.988%",
                                    "186.73%"
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
                        "Name": "Night's Sling",
                        "Desc": "Ororon manifests an ancient mystical technique from the Masters of the Night-Wind as a <color style='color:#FFD780;'>Spirit Orb</color> of midnight shade and throws it at his foe, dealing Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>.<br>When other opponents are nearby, the Spirit Orb will bounce between them, dealing Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>. Each time Night's Sling is used, each opponent can only be selected as a target once.<br>After 3 bounces, or if there are no eligible targets left, the Orb will disappear.<br><br><i>\"People always wish to foretell the future, but that might be because they have yet to discover that which they must do... Sorry, I'm saying complicated things again, aren't I...\"</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Spirit Orb DMG",
                                "ParamLevelList": [
                                    "197.6%",
                                    "212.42%",
                                    "227.24%",
                                    "247.0%",
                                    "261.82%",
                                    "276.64%",
                                    "296.4%",
                                    "316.16%",
                                    "335.92%",
                                    "355.68%",
                                    "375.44%",
                                    "395.2%",
                                    "419.9%",
                                    "444.6%",
                                    "469.3%"
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
                            }
                        ]
                    },
                    {
                        "Name": "Dark Voices Echo",
                        "Desc": "Ororon works an ancient ritual, dealing Nightsoul-aligned <color style='color:#FFACFF;'>AoE Electro DMG</color>, summoning forth a Supersonic Oculus.<br><br><color style='color:#FFD780;'>Supersonic Oculus</color><br> · Continuously taunts nearby opponents and attracts attacks from them.<br> · Continuously rotates and fires off sonic waves that deal Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>.<br><br><i>Those with sharp enough senses can hear the minute voices with which all things speak. That way, they will never lose their way — not even on long, lightless nights.</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Ritual DMG",
                                "ParamLevelList": [
                                    "174.384%",
                                    "187.463%",
                                    "200.542%",
                                    "217.98%",
                                    "231.059%",
                                    "244.138%",
                                    "261.576%",
                                    "279.014%",
                                    "296.453%",
                                    "313.891%",
                                    "331.33%",
                                    "348.768%",
                                    "370.566%",
                                    "392.364%",
                                    "414.162%"
                                ]
                            },
                            {
                                "Desc": "Soundwave Collision DMG",
                                "ParamLevelList": [
                                    "33.2%",
                                    "35.69%",
                                    "38.18%",
                                    "41.5%",
                                    "43.99%",
                                    "46.48%",
                                    "49.8%",
                                    "53.12%",
                                    "56.44%",
                                    "59.76%",
                                    "63.08%",
                                    "66.4%",
                                    "70.55%",
                                    "74.7%",
                                    "78.85%"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                        "Name": "Nightshade Synesthesia",
                        "Desc": "After a nearby party member triggers Nightsoul Burst, Ororon will gain 40 Nightsoul points. Within 15s after using his Elemental Skill, when other party members deal <color style='color:#80C0FF;'>Hydro DMG</color> or <color style='color:#FFACFF;'>Electro DMG</color>, Ororon will gain 5 Nightsoul points, an effect that can occur every 0.3s for a maximum of 10 times during this 15s duration.<br><br>Also, when nearby opponents take <color style='color:#FFACFF;'>Electro-Charged</color> reaction DMG or Nightsoul-aligned DMG dealt by other nearby characters, Ororon will consume 10 Nightsoul points (provided he has at least that amount), entering the Nightsoul's Blessing state and triggering the Hypersense effect: Deal Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color> based on 160% of Ororon's ATK to at most 4 nearby opponents. The aforementioned effect can trigger once every 1.8s.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Ororon</color><br>Ororon's Nightsoul's Blessing state lasts 6s.",
                        "Icon": "UI_Talent_S_Olorun_05"
                    },
                    {
                        "Name": "Aspect Catalyst",
                        "Desc": "After the Elemental Skill <color style='color:#FFD780;'>Night's Sling</color>'s <color style='color:#FFD780;'>Spirit Orb</color> hits an opponent, Ororon will gain the Aspect Sigil effect for 15s.<br><br><color style='color:#FFD780;'>Aspect Sigil</color><br>When a nearby active party member hits an opponent with Normal, Charged, or Plunging Attacks, that character will restore 3 Energy. If Ororon is off-field, Ororon will also restore 3 Energy. This effect can trigger once every 1s, and can trigger 3 times per duration.",
                        "Icon": "UI_Talent_S_Olorun_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Flowing Fog, Spritely Shadows",
                        "Desc": "While in an area with Phlogiston Mechanics within Natlan, he can use Nightsoul Transmission: Ororon. When the active character is currently in the air, the following will trigger when switching to Ororon: Ororon will leap up high. Nightsoul Transmission can be triggered once every 10s by your party.<br><br>Holding Aiming Mode will cause Ororon to enter the \"Spiritspeaker\" state, which will allow him to interact with \"Nightspirit Graffiti\" and \"Nightspirit Bodies,\" extracting information and power from them. The rules for interacting with these objects follow the same rules as those governing Iktomisaurus interactions.<br><br>Additionally, holding the jump button will cause Ororon to consume 75 Stamina and leap. In areas within Natlan where Phlogiston mechanics are present, Ororon will prioritize consuming 5 Phlogiston to leap to a height higher still.<br>When in the air, Ororon can hold his Normal Attack to consume Phlogiston or Stamina and enter Aiming Mode.",
                        "Icon": "UI_Talent_S_Olorun_07"
                    },
                    {
                        "Name": "Life Talent",
                        "Desc": "Increases gliding SPD for your own party members by 15%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Olorun_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Trails Amidst the Forest Fog",
                        "Desc": "The Elemental Skill <color style='color:#FFD780;'>Night's Sling</color>'s <color style='color:#FFD780;'>Spirit Orb</color> can bounce 2 additional times.<br>Additionally, after the <color style='color:#FFD780;'>Spirit Orb</color> hits an opponent, it will apply the Nighttide effect to them for 12s. Opponents affected by Nighttide take 50% increased DMG from Hypersense triggered by the Passive Talent, \"Nightshade Synesthesia.\" Unlock the aforementioned Passive Talent to trigger this effect.",
                        "Icon": "UI_Talent_S_Olorun_01"
                    },
                    {
                        "Level": 2,
                        "Name": "King Bee of the Hidden Honeyed Wine",
                        "Desc": "After using his Elemental Burst, <color style='color:#FFD780;'>Dark Voices Echo</color>, Ororon will obtain the Spiritual Supersense effect for 9s.<br><color style='color:#FFD780;'>Spiritual Supersense</color><br>Gain 8% <color style='color:#FFACFF;'>Electro DMG Bonus</color>.<br>During this time, every additional opponent hit by the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color> or <color style='color:#FFD780;'>Supersonic Oculus</color> will grant Ororon a further 8% <color style='color:#FFACFF;'>Electro DMG Bonus</color>. The maximum that can be gained this way is 32% <color style='color:#FFACFF;'>Electro DMG Bonus</color>.",
                        "Icon": "UI_Talent_S_Olorun_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Roosting Bat's Spiritcage",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Dark Voices Echo</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_01"
                    },
                    {
                        "Level": 4,
                        "Name": "As the Mysteries of the Night Wind",
                        "Desc": "The <color style='color:#FFD780;'>Supersonic Oculus</color> summoned by the Elemental Burst, <color style='color:#FFD780;'>Dark Voices Echo</color> rotates 25% faster.<br>Regenerates 8 Elemental Energy after casting Elemental Burst.",
                        "Icon": "UI_Talent_S_Olorun_03"
                    },
                    {
                        "Level": 5,
                        "Name": "A Gift For the Soul",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Night's Sling</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Ode to Deep Springs",
                        "Desc": "After triggering Hypersense through the Passive Talent, Nightshade Synesthesia, your current active character's ATK is increased by 10% for 9s. Max 3 stacks, each stack is counted independently.<br>Additionally, when you use the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color>, you will trigger one instance of an effect equivalent to Hypersense, dealing 200% of its original DMG.<br>You must unlock the Passive Talent \"Nightshade Synesthesia\" first.",
                        "Icon": "UI_Talent_S_Olorun_04"
                    }
                ]
            },
            "5": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Spiritvessel Snapshot",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, Electro energy will accumulate on the arrowhead. A fully charged arrow will deal immense <color style='color:#FFACFF;'>Electro DMG</color>.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "50.642%",
                                    "54.764%",
                                    "58.886%",
                                    "64.775%",
                                    "68.897%",
                                    "73.607%",
                                    "80.085%",
                                    "86.562%",
                                    "93.04%",
                                    "100.106%",
                                    "107.173%",
                                    "114.239%",
                                    "121.305%",
                                    "128.372%",
                                    "135.438%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.373%",
                                    "47.985%",
                                    "51.597%",
                                    "56.757%",
                                    "60.369%",
                                    "64.496%",
                                    "70.172%",
                                    "75.848%",
                                    "81.523%",
                                    "87.715%",
                                    "93.906%",
                                    "100.0%",
                                    "106.29%",
                                    "112.481%",
                                    "118.673%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "69.821%",
                                    "75.504%",
                                    "81.187%",
                                    "89.306%",
                                    "94.989%",
                                    "101.484%",
                                    "110.414%",
                                    "119.345%",
                                    "128.276%",
                                    "138.018%",
                                    "147.76%",
                                    "157.503%",
                                    "167.245%",
                                    "176.988%",
                                    "186.73%"
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
                        "Name": "Night's Sling",
                        "Desc": "Ororon manifests an ancient mystical technique from the Masters of the Night-Wind as a <color style='color:#FFD780;'>Spirit Orb</color> of midnight shade and throws it at his foe, dealing Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>.<br>When other opponents are nearby, the Spirit Orb will bounce between them, dealing Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>. Each time Night's Sling is used, each opponent can only be selected as a target once.<br>After 3 bounces, or if there are no eligible targets left, the Orb will disappear.<br><br><i>\"People always wish to foretell the future, but that might be because they have yet to discover that which they must do... Sorry, I'm saying complicated things again, aren't I...\"</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_S_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Spirit Orb DMG",
                                "ParamLevelList": [
                                    "197.6%",
                                    "212.42%",
                                    "227.24%",
                                    "247.0%",
                                    "261.82%",
                                    "276.64%",
                                    "296.4%",
                                    "316.16%",
                                    "335.92%",
                                    "355.68%",
                                    "375.44%",
                                    "395.2%",
                                    "419.9%",
                                    "444.6%",
                                    "469.3%"
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
                            }
                        ]
                    },
                    {
                        "Name": "Dark Voices Echo",
                        "Desc": "Ororon works an ancient ritual, dealing Nightsoul-aligned <color style='color:#FFACFF;'>AoE Electro DMG</color>, summoning forth a Supersonic Oculus.<br><br><color style='color:#FFD780;'>Supersonic Oculus</color><br> · Continuously taunts nearby opponents and attracts attacks from them.<br> · Continuously rotates and fires off sonic waves that deal Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>.<br><br><i>Those with sharp enough senses can hear the minute voices with which all things speak. That way, they will never lose their way — not even on long, lightless nights.</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Ritual DMG",
                                "ParamLevelList": [
                                    "174.384%",
                                    "187.463%",
                                    "200.542%",
                                    "217.98%",
                                    "231.059%",
                                    "244.138%",
                                    "261.576%",
                                    "279.014%",
                                    "296.453%",
                                    "313.891%",
                                    "331.33%",
                                    "348.768%",
                                    "370.566%",
                                    "392.364%",
                                    "414.162%"
                                ]
                            },
                            {
                                "Desc": "Soundwave Collision DMG",
                                "ParamLevelList": [
                                    "33.2%",
                                    "35.69%",
                                    "38.18%",
                                    "41.5%",
                                    "43.99%",
                                    "46.48%",
                                    "49.8%",
                                    "53.12%",
                                    "56.44%",
                                    "59.76%",
                                    "63.08%",
                                    "66.4%",
                                    "70.55%",
                                    "74.7%",
                                    "78.85%"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                        "Name": "Nightshade Synesthesia",
                        "Desc": "After a nearby party member triggers Nightsoul Burst, Ororon will gain 40 Nightsoul points. Within 15s after using his Elemental Skill, when attacks from other party members who are <color style='color:#80C0FF;'>Hydro</color> or <color style='color:#FFACFF;'>Electro</color> hit opponents, Ororon will gain 5 Nightsoul points, an effect that can occur every 0.3s for a maximum of 10 times during this 15s duration.<br>Ororon can have a maximum of 80 Nightsoul points.<br><br>Also, when nearby opponents take <color style='color:#FFACFF;'>Electro-Charged</color> reaction DMG or Nightsoul-aligned DMG dealt by other nearby characters, Ororon will consume 10 Nightsoul points (provided he has at least that amount), entering the Nightsoul's Blessing state and triggering the Hypersense effect: Deal Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color> based on 160% of Ororon's ATK to at most 4 nearby opponents. The aforementioned effect can trigger once every 1.8s.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Ororon</color><br>Ororon's Nightsoul's Blessing state lasts 6s.",
                        "Icon": "UI_Talent_S_Olorun_05"
                    },
                    {
                        "Name": "Aspect Catalyst",
                        "Desc": "After the Elemental Skill <color style='color:#FFD780;'>Night's Sling</color>'s <color style='color:#FFD780;'>Spirit Orb</color> hits an opponent, Ororon will gain the Aspect Sigil effect for 15s.<br><br><color style='color:#FFD780;'>Aspect Sigil</color><br>When a nearby active party member hits an opponent with Normal, Charged, or Plunging Attacks, that character will restore 3 Energy. If Ororon is off-field, Ororon will also restore 3 Energy. This effect can trigger once every 1s, and can trigger 3 times per duration.",
                        "Icon": "UI_Talent_S_Olorun_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Flowing Fog, Spritely Shadows",
                        "Desc": "While in an area with Phlogiston Mechanics within Natlan, he can use Nightsoul Transmission: Ororon. When the active character is currently in the air, the following will trigger when switching to Ororon: Ororon will leap up high. Nightsoul Transmission can be triggered once every 10s by your party.<br><br>Holding Aiming Mode will cause Ororon to enter the \"Spiritspeaker\" state, which will allow him to interact with \"Nightspirit Graffiti\" and \"Nightspirit Bodies,\" extracting information and power from them. The rules for interacting with these objects follow the same rules as those governing Iktomisaurus interactions.<br><br>Additionally, holding the jump button will cause Ororon to consume 75 Stamina and leap. In areas within Natlan where Phlogiston mechanics are present, Ororon will prioritize consuming 5 Phlogiston to leap to a height higher still.<br>When in the air, Ororon can hold his Normal Attack to consume Phlogiston or Stamina and enter Aiming Mode.",
                        "Icon": "UI_Talent_S_Olorun_07"
                    },
                    {
                        "Name": "The Art of Skin-Walking",
                        "Desc": "Increases gliding SPD for your own party members by 15%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Olorun_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Trails Amidst the Forest Fog",
                        "Desc": "The Elemental Skill <color style='color:#FFD780;'>Night's Sling</color>'s <color style='color:#FFD780;'>Spirit Orb</color> can bounce 2 additional times.<br>Additionally, after the <color style='color:#FFD780;'>Spirit Orb</color> hits an opponent, it will apply the Nighttide effect to them for 12s. Opponents affected by Nighttide take 50% increased DMG from Hypersense triggered by the Passive Talent, \"Nightshade Synesthesia.\" Unlock the aforementioned Passive Talent to trigger this effect.",
                        "Icon": "UI_Talent_S_Olorun_01"
                    },
                    {
                        "Level": 2,
                        "Name": "King Bee of the Hidden Honeyed Wine",
                        "Desc": "After using his Elemental Burst, <color style='color:#FFD780;'>Dark Voices Echo</color>, Ororon will obtain the Spiritual Supersense effect for 9s.<br><color style='color:#FFD780;'>Spiritual Supersense</color><br>Gain 8% <color style='color:#FFACFF;'>Electro DMG Bonus</color>.<br>Additionally, during this time, every additional opponent hit by the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color> or <color style='color:#FFD780;'>Supersonic Oculus</color> will grant Ororon a further 8% <color style='color:#FFACFF;'>Electro DMG Bonus</color>. The maximum that can be gained this way is 32% <color style='color:#FFACFF;'>Electro DMG Bonus</color>.",
                        "Icon": "UI_Talent_S_Olorun_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Roosting Bat's Spiritcage",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Dark Voices Echo</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_01"
                    },
                    {
                        "Level": 4,
                        "Name": "As the Mysteries of the Night Wind",
                        "Desc": "The <color style='color:#FFD780;'>Supersonic Oculus</color> summoned by the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color> rotates 25% faster.<br>Additionally, Ororon will restore 8 Energy to himself after using <color style='color:#FFD780;'>Dark Voices Echo</color>.",
                        "Icon": "UI_Talent_S_Olorun_03"
                    },
                    {
                        "Level": 5,
                        "Name": "A Gift For the Soul",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Night's Sling</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Ode to Deep Springs",
                        "Desc": "After triggering Hypersense through the Passive Talent, Nightshade Synesthesia, your current active character's ATK is increased by 10% for 9s. Max 3 stacks, each stack is counted independently.<br>Additionally, when you use the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color>, you will trigger one instance of an effect equivalent to Hypersense, dealing 200% of its original DMG.<br>You must unlock the Passive Talent \"Nightshade Synesthesia\" first.",
                        "Icon": "UI_Talent_S_Olorun_04"
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Spiritvessel Snapshot",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, Electro energy will accumulate on the arrowhead. A fully charged arrow will deal <color style='color:#FFACFF;'>Electro DMG</color>.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "50.642%",
                                    "54.764%",
                                    "58.886%",
                                    "64.7746%",
                                    "68.8966%",
                                    "73.6075%",
                                    "80.085%",
                                    "86.5624%",
                                    "93.0399%",
                                    "100.1062%",
                                    "107.1725%",
                                    "114.2388%",
                                    "121.3052%",
                                    "128.3715%",
                                    "135.4378%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "44.3734%",
                                    "47.9852%",
                                    "51.597%",
                                    "56.7567%",
                                    "60.3685%",
                                    "64.4963%",
                                    "70.1719%",
                                    "75.8476%",
                                    "81.5233%",
                                    "87.7149%",
                                    "93.9065%",
                                    "100.0982%",
                                    "106.2898%",
                                    "112.4815%",
                                    "118.6731%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "69.8208%",
                                    "75.5039%",
                                    "81.187%",
                                    "89.3057%",
                                    "94.9888%",
                                    "101.4838%",
                                    "110.4143%",
                                    "119.3449%",
                                    "128.2755%",
                                    "138.0179%",
                                    "147.7603%",
                                    "157.5028%",
                                    "167.2452%",
                                    "176.9877%",
                                    "186.7301%"
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
                        "Name": "Night's Sling",
                        "Desc": "Ororon manifests an ancient mystical technique from the Masters of the Night-Wind as a <color style='color:#FFD780;'>Spirit Orb</color> of midnight shade and throws it at his foe, dealing Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>.<br>When other opponents are nearby, the Spirit Orb will bounce between them, dealing Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>. Each time Night's Sling is used, each opponent can only be selected as a target once.<br>After 3 bounces, or if there are no eligible targets left, the Orb will disappear.<br><br><i>\"People always wish to foretell the future, but that might be because they have yet to discover that which they must do... Sorry, I'm saying complicated things again, aren't I...\"</i>",
                        "Icon": "Skill_S_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Spirit Orb DMG",
                                "ParamLevelList": [
                                    "197.6%",
                                    "212.42%",
                                    "227.24%",
                                    "247.0%",
                                    "261.82%",
                                    "276.64%",
                                    "296.4%",
                                    "316.16%",
                                    "335.92%",
                                    "355.68%",
                                    "375.44%",
                                    "395.2%",
                                    "419.9%",
                                    "444.6%",
                                    "469.3%"
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
                            }
                        ]
                    },
                    {
                        "Name": "Dark Voices Echo",
                        "Desc": "Ororon works an ancient ritual, dealing Nightsoul-aligned <color style='color:#FFACFF;'>AoE Electro DMG</color>, summoning forth a Supersonic Oculus.<br><br><color style='color:#FFD780;'>Supersonic Oculus</color><br> · Continuously taunts nearby opponents and attracts attacks from them.<br> · Continuously rotates and fires off sonic waves that deal Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color>.<br><br><i>Those with sharp enough senses can hear the minute voices with which all things speak. That way, they will never lose their way — not even on long, lightless nights.</i>",
                        "Icon": "Skill_E_Olorun_01",
                        "ParamDesc": [
                            {
                                "Desc": "Ritual DMG",
                                "ParamLevelList": [
                                    "174.384%",
                                    "187.4628%",
                                    "200.5416%",
                                    "217.98%",
                                    "231.0588%",
                                    "244.1376%",
                                    "261.576%",
                                    "279.0144%",
                                    "296.4528%",
                                    "313.8912%",
                                    "331.3296%",
                                    "348.768%",
                                    "370.566%",
                                    "392.364%",
                                    "414.162%"
                                ]
                            },
                            {
                                "Desc": "Soundwave Collision DMG",
                                "ParamLevelList": [
                                    "33.2%",
                                    "35.69%",
                                    "38.18%",
                                    "41.5%",
                                    "43.99%",
                                    "46.48%",
                                    "49.8%",
                                    "53.12%",
                                    "56.44%",
                                    "59.76%",
                                    "63.08%",
                                    "66.4%",
                                    "70.55%",
                                    "74.7%",
                                    "78.85%"
                                ]
                            },
                            {
                                "Desc": "Duration",
                                "ParamLevelList": [
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s",
                                    "9s"
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
                        "Name": "Nightshade Synesthesia",
                        "Desc": "After a nearby party member triggers Nightsoul Burst, Ororon will gain 40 Nightsoul points. Within 15s after using his Elemental Skill, when other party members' <color style='color:#80C0FF;'>Hydro</color> or <color style='color:#FFACFF;'>Electro</color> attacks hit opponents, Ororon will gain 5 Nightsoul points, an effect that can occur every 0.3s for a maximum of 10 times during this 15s duration.<br>Ororon can have a maximum of 80 Nightsoul points.<br><br>Also, when nearby opponents take <color style='color:#FFACFF;'>Electro-Charged or Lunar-Charged</color> reaction DMG or Nightsoul-aligned DMG dealt by other nearby characters, Ororon will consume 10 Nightsoul points (provided he has at least that amount), entering the Nightsoul's Blessing state and triggering the Hypersense effect: Deal Nightsoul-aligned <color style='color:#FFACFF;'>Electro DMG</color> based on 160% of Ororon's ATK to at most 4 nearby opponents. The aforementioned effect can trigger once every 1.8s.<br><br><color style='color:#FFD780;'>Nightsoul's Blessing: Ororon</color><br>Ororon's Nightsoul's Blessing state lasts 6s.",
                        "Icon": "UI_Talent_S_Olorun_05"
                    },
                    {
                        "Name": "Aspect Catalyst",
                        "Desc": "After the Elemental Skill <color style='color:#FFD780;'>Night's Sling</color>'s <color style='color:#FFD780;'>Spirit Orb</color> hits an opponent, Ororon will gain the Aspect Sigil effect for 15s.<br><br><color style='color:#FFD780;'>Aspect Sigil</color><br>When a nearby active party member hits an opponent with Normal, Charged, or Plunging Attacks, that character will restore 3 Energy. If Ororon is off-field, Ororon will also restore 3 Energy. This effect can trigger once every 1s, and can trigger 3 times per duration.",
                        "Icon": "UI_Talent_S_Olorun_06"
                    },
                    {
                        "Name": "Night Realm's Gift: Flowing Fog, Spritely Shadows",
                        "Desc": "While in an area with Phlogiston Mechanics within Natlan, he can use Nightsoul Transmission: Ororon. When the active character is currently in the air, the following will trigger when switching to Ororon: Ororon will leap up high. Nightsoul Transmission can be triggered once every 10s by your party.<br><br>Holding Aiming Mode will cause Ororon to enter the \"Spiritspeaker\" state, which will allow him to interact with \"Nightspirit Graffiti\" and \"Nightspirit Sigils,\" extracting information and power from them. The rules for interacting with these objects follow the same rules as those governing Iktomisaurus interactions.<br><br>Additionally, holding the jump button will cause Ororon to consume 75 Stamina and leap. In areas within Natlan where Phlogiston mechanics are present, Ororon will prioritize consuming 5 Phlogiston to leap to a height higher still.<br>When in the air, Ororon can Hold his Normal Attack to consume Phlogiston or Stamina and enter Aiming Mode.",
                        "Icon": "UI_Talent_S_Olorun_07"
                    },
                    {
                        "Name": "The Art of Skinchanging",
                        "Desc": "Increases gliding SPD for your own party members by 15%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_S_Olorun_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Trails Amidst the Forest Fog",
                        "Desc": "The Elemental Skill <color style='color:#FFD780;'>Night's Sling</color>'s <color style='color:#FFD780;'>Spirit Orb</color> can bounce 2 additional times.<br>Additionally, after the <color style='color:#FFD780;'>Spirit Orb</color> hits an opponent, it will apply the Nighttide effect to them for 12s. Opponents affected by Nighttide take 50% increased DMG from Hypersense triggered by the Ascension Talent, \"Nightshade Synesthesia.\" You must first unlock the Ascension Talent \"Nightshade Synesthesia.\"",
                        "Icon": "UI_Talent_S_Olorun_01"
                    },
                    {
                        "Level": 2,
                        "Name": "King Bee of the Hidden Honeyed Wine",
                        "Desc": "After using his Elemental Burst, <color style='color:#FFD780;'>Dark Voices Echo</color>, Ororon will obtain the Spiritual Supersense effect for 9s.<br><br><color style='color:#FFD780;'>Spiritual Supersense</color><br>Gain 8% <color style='color:#FFACFF;'>Electro DMG Bonus</color>.<br>Additionally, during this time, every additional opponent hit by the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color> or <color style='color:#FFD780;'>Supersonic Oculus</color> will grant Ororon a further 8% <color style='color:#FFACFF;'>Electro DMG Bonus</color>. The maximum that can be gained this way is 32% <color style='color:#FFACFF;'>Electro DMG Bonus</color>.",
                        "Icon": "UI_Talent_S_Olorun_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Roosting Bat's Spiritcage",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Dark Voices Echo</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_01"
                    },
                    {
                        "Level": 4,
                        "Name": "As the Mysteries of the Night Wind",
                        "Desc": "The <color style='color:#FFD780;'>Supersonic Oculus</color> summoned by the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color> rotates 25% faster.<br>Additionally, Ororon will restore 8 Energy to himself after using <color style='color:#FFD780;'>Dark Voices Echo</color>.",
                        "Icon": "UI_Talent_S_Olorun_03"
                    },
                    {
                        "Level": 5,
                        "Name": "A Gift For the Soul",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Night's Sling</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Olorun_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Ode to Deep Springs",
                        "Desc": "After triggering Hypersense through the Ascension Talent, Nightshade Synesthesia, your current active character's ATK is increased by 10% for 9s. Max 3 stacks, each stack is counted independently.<br>Additionally, when you use the Elemental Burst <color style='color:#FFD780;'>Dark Voices Echo</color>, you will trigger one instance of an effect equivalent to Hypersense, dealing 200% of its original DMG.<br>You must first unlock the Ascension Talent \"Nightshade Synesthesia.\"",
                        "Icon": "UI_Talent_S_Olorun_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Olorun": {}
}