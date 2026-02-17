// Auto Generated

var _AvatarDataConfig_ = {
    "Chevreuse": {
        "BallList": [
            {
                "When": "Any Elem Skill DMG hit monster (except Surging Blade and C2)",
                "DropArray": [
                    {
                        "Num": 4,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD",
                "CD": 10
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
            }
        ],
        "WindZoneList": [],
        "OtherDataList": [
            "Preload Change: Hold E DMG's AoE height and width both increased by 1m.",
            "<b>About Chevreuse's Pulling Effects:</b><br>Her Burst's Secondary Shells and Skill's Chain Explosions (unlocked at C2) will knock back enemies towards her upon dealing DMG.<br>She does not have a vacuum vortex, so she cannot consistently and continuously pull enemies like most Anemo characters.",
            "V3 Change: The gaining of Overcharged Ball and passive's RES reduction now require the character to be within a 40m radius.",
            "V3 Change: C2 Chain Explosions can be triggered off-field..",
            "V2 Change: Gains an extra 50% Interruption Resistance while in Elemental Skill's aiming mode.",
            "E Heal interval: 2s",
            "C6's Pyro and Electro DMG boost can be triggered by C6's own single instance of healing of all characters (even if overflowing). Therefore, off-field characters can also gain 1 stack of boost from it.",
            "Chevreuse's Burst creates 8 secondary explosive shells, but only the 1st and 4th can apply Pyro. (The application CD resets after 3s, but normally the secondary shells from one Burst cannot have an explosion interval greater than 3s.)"
        ]
    }
}

var _AvatarMats_ = {
    "Chevreuse": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104111": 1,
                "101235": 3,
                "112083": 3
            },
            {
                "202": 40000,
                "104112": 3,
                "113053": 2,
                "101235": 10,
                "112083": 15
            },
            {
                "202": 60000,
                "104112": 6,
                "113053": 4,
                "101235": 20,
                "112084": 12
            },
            {
                "202": 80000,
                "104113": 3,
                "113053": 8,
                "101235": 30,
                "112084": 18
            },
            {
                "202": 100000,
                "104113": 6,
                "113053": 12,
                "101235": 45,
                "112085": 12
            },
            {
                "202": 120000,
                "104114": 6,
                "113053": 20,
                "101235": 60,
                "112085": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104344": 3,
                "112083": 6
            },
            {
                "202": 17500,
                "104345": 2,
                "112084": 3
            },
            {
                "202": 25000,
                "104345": 4,
                "112084": 4
            },
            {
                "202": 30000,
                "104345": 6,
                "112084": 6
            },
            {
                "202": 37500,
                "104345": 9,
                "112084": 9
            },
            {
                "202": 120000,
                "104346": 4,
                "112085": 4,
                "113055": 1
            },
            {
                "202": 260000,
                "104346": 6,
                "112085": 6,
                "113055": 1
            },
            {
                "202": 450000,
                "104346": 12,
                "112085": 9,
                "113055": 2
            },
            {
                "202": 700000,
                "104346": 16,
                "112085": 12,
                "113055": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104344": 3,
                "112083": 6
            },
            {
                "202": 17500,
                "104345": 2,
                "112084": 3
            },
            {
                "202": 25000,
                "104345": 4,
                "112084": 4
            },
            {
                "202": 30000,
                "104345": 6,
                "112084": 6
            },
            {
                "202": 37500,
                "104345": 9,
                "112084": 9
            },
            {
                "202": 120000,
                "104346": 4,
                "112085": 4,
                "113055": 1
            },
            {
                "202": 260000,
                "104346": 6,
                "112085": 6,
                "113055": 1
            },
            {
                "202": 450000,
                "104346": 12,
                "112085": 9,
                "113055": 2
            },
            {
                "202": 700000,
                "104346": 16,
                "112085": 12,
                "113055": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104344": 3,
                "112083": 6
            },
            {
                "202": 17500,
                "104345": 2,
                "112084": 3
            },
            {
                "202": 25000,
                "104345": 4,
                "112084": 4
            },
            {
                "202": 30000,
                "104345": 6,
                "112084": 6
            },
            {
                "202": 37500,
                "104345": 9,
                "112084": 9
            },
            {
                "202": 120000,
                "104346": 4,
                "112085": 4,
                "113055": 1
            },
            {
                "202": 260000,
                "104346": 6,
                "112085": 6,
                "113055": 1
            },
            {
                "202": 450000,
                "104346": 12,
                "112085": 9,
                "113055": 2
            },
            {
                "202": 700000,
                "104346": 16,
                "112085": 12,
                "113055": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Chevreuse": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive spear strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_03",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Line Bayonet Thrust EX",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "53.13%",
                                    "57.455%",
                                    "61.779%",
                                    "67.957%",
                                    "72.281%",
                                    "77.224%",
                                    "84.019%",
                                    "90.815%",
                                    "97.611%",
                                    "105.024%",
                                    "112.438%",
                                    "119.851%",
                                    "127.265%",
                                    "134.678%",
                                    "142.092%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "49.311%",
                                    "53.324%",
                                    "57.338%",
                                    "63.072%",
                                    "67.085%",
                                    "71.672%",
                                    "77.98%",
                                    "84.287%",
                                    "90.594%",
                                    "97.475%",
                                    "104.355%",
                                    "111.236%",
                                    "118.116%",
                                    "124.997%",
                                    "131.877%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "27.645%+32.453%",
                                    "29.895%+35.094%",
                                    "32.145%+37.736%",
                                    "35.36%+41.509%",
                                    "37.61%+44.151%",
                                    "40.182%+47.17%",
                                    "43.718%+51.321%",
                                    "47.254%+55.471%",
                                    "50.789%+59.623%",
                                    "54.647%+64.151%",
                                    "58.504%+68.679%",
                                    "62.362%+73.207%",
                                    "66.219%+77.736%",
                                    "70.077%+82.264%",
                                    "73.934%+86.792%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "77.262%",
                                    "83.55%",
                                    "89.839%",
                                    "98.823%",
                                    "105.112%",
                                    "112.299%",
                                    "122.181%",
                                    "132.063%",
                                    "141.946%",
                                    "152.726%",
                                    "163.507%",
                                    "174.288%",
                                    "185.068%",
                                    "195.849%",
                                    "206.63%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "121.69%",
                                    "131.595%",
                                    "141.5%",
                                    "155.65%",
                                    "165.555%",
                                    "176.875%",
                                    "192.44%",
                                    "208.005%",
                                    "223.57%",
                                    "240.55%",
                                    "257.53%",
                                    "274.51%",
                                    "291.49%",
                                    "308.47%",
                                    "325.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "63.932%",
                                    "69.136%",
                                    "74.34%",
                                    "81.774%",
                                    "86.978%",
                                    "92.925%",
                                    "101.102%",
                                    "109.28%",
                                    "117.457%",
                                    "126.378%",
                                    "135.299%",
                                    "144.22%",
                                    "153.14%",
                                    "162.061%",
                                    "170.982%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "127.838%/159.676%",
                                    "138.243%/172.673%",
                                    "148.649%/185.67%",
                                    "163.513%/204.237%",
                                    "173.919%/217.234%",
                                    "185.811%/232.087%",
                                    "202.162%/252.511%",
                                    "218.513%/272.935%",
                                    "234.865%/293.359%",
                                    "252.702%/315.639%",
                                    "270.54%/337.919%",
                                    "288.378%/360.2%",
                                    "306.216%/382.48%",
                                    "324.054%/404.761%",
                                    "341.892%/427.041%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Chevreuse quickly shoulders her musket and fires at her opponent(s), dealing <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br>Hold to fire in a different fashion.<br><br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode, locking a target in her sights to fire a precise interdiction shot. If Chevreuse has an Overcharged Ball, then she will fire the Overcharged Ball instead, dealing greater <color style='color:#FF9999;'>Pyro DMG</color> in a larger area.<br>Chevreuse gains 1 Overcharged Ball every time a nearby character in the party triggers an Overloaded reaction, and can have up to 1 Overcharged Ball at a time.<br><br>For a short duration after Chevreuse fires a shot, she will continuously restore HP to the active character on the field. The amount healed is based on her Max HP.<br><br><color style='color:#FFD780;'>Arkhe: Ousia</color><br>Periodically, after Chevreuse's Short-Range Rapid Interdiction Fire hits, a Surging Blade will be called forth that deals ousia-aligned <color style='color:#FF9999;'>Pyro DMG</color>.<br><br><i>\"Actually, training regulations only had the phrase \"interdiction fire,\" but the protagonist of this novel believes that even how stylish your terminology is can affect how motivated your troops are, which can put your opponents on the back foot right from the get-go... I think that's a good point, so I changed the regulations!\"</i>",
                        "Icon": "Skill_S_Chevreuse_01",
                        "Lock": 15.0,
                        "Name": "Short-Range Rapid Interdiction Fire",
                        "ParamDesc": [
                            {
                                "Desc": "Press DMG",
                                "ParamLevelList": [
                                    "115.2%",
                                    "123.84%",
                                    "132.48%",
                                    "144.0%",
                                    "152.64%",
                                    "161.28%",
                                    "172.8%",
                                    "184.32%",
                                    "195.84%",
                                    "207.36%",
                                    "218.88%",
                                    "230.4%",
                                    "244.8%",
                                    "259.2%",
                                    "273.6%"
                                ]
                            },
                            {
                                "Desc": "Hold DMG",
                                "ParamLevelList": [
                                    "172.8%",
                                    "185.76%",
                                    "198.72%",
                                    "216.0%",
                                    "228.96%",
                                    "241.92%",
                                    "259.2%",
                                    "276.48%",
                                    "293.76%",
                                    "311.04%",
                                    "328.32%",
                                    "345.6%",
                                    "367.2%",
                                    "388.8%",
                                    "410.4%"
                                ]
                            },
                            {
                                "Desc": "Overcharged Ball DMG",
                                "ParamLevelList": [
                                    "282.4%",
                                    "303.58%",
                                    "324.76%",
                                    "353.0%",
                                    "374.18%",
                                    "395.36%",
                                    "423.6%",
                                    "451.84%",
                                    "480.08%",
                                    "508.32%",
                                    "536.56%",
                                    "564.8%",
                                    "600.0%",
                                    "635.4%",
                                    "670.7%"
                                ]
                            },
                            {
                                "Desc": "HP Regeneration Over Time",
                                "ParamLevelList": [
                                    "2.667% Max HP+256.79184",
                                    "2.867% Max HP+282.47458",
                                    "3.067% Max HP+310.29758",
                                    "3.333% Max HP+340.26077",
                                    "3.533% Max HP+372.36423",
                                    "3.733% Max HP+406.60788",
                                    "4.0% Max HP+442.99179",
                                    "4.267% Max HP+481.51593",
                                    "4.533% Max HP+522.1803",
                                    "4.8% Max HP+564.98486",
                                    "5.067% Max HP+609.92969",
                                    "5.333% Max HP+657.01471",
                                    "5.667% Max HP+706.24",
                                    "6.0% Max HP+757.60553",
                                    "6.333% Max HP+811.11127"
                                ]
                            },
                            {
                                "Desc": "Healing Duration",
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
                                "Desc": "Surging Blade DMG",
                                "ParamLevelList": [
                                    "28.8%",
                                    "30.96%",
                                    "33.12%",
                                    "36.0%",
                                    "38.16%",
                                    "40.32%",
                                    "43.2%",
                                    "46.08%",
                                    "48.96%",
                                    "51.84%",
                                    "54.72%",
                                    "57.6%",
                                    "61.2%",
                                    "64.8%",
                                    "68.4%"
                                ]
                            },
                            {
                                "Desc": "Surging Blade Interval",
                                "ParamLevelList": [
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s"
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
                        "Num": 1,
                        "Desc": "Chevreuse fires an explosive grenade at opponents with her musket, dealing <color style='color:#FF9999;'>AoE Pyro DMG.</color> After the projectile hits, it will split into many secondary explosive shells.<br>The secondary explosive shells will burst after a short interval, dealing <color style='color:#FF9999;'>Pyro DMG</color> to nearby opponents.<br><br><i>\"Theoretically, a rectangular blast would be most efficient at destroying enemy formations. Unfortunately, the cross-section of an explosive shock wave is round, like most cakes. So, the secondary explosive shells can only be arranged like the fruit on a cake, forming a ring around the edge.</i>",
                        "Icon": "Skill_E_Chevreuse_01",
                        "Lock": 15.0,
                        "Name": "Ring of Bursting Grenades",
                        "ParamDesc": [
                            {
                                "Desc": "Explosive Grenade DMG",
                                "ParamLevelList": [
                                    "368.16%",
                                    "395.772%",
                                    "423.384%",
                                    "460.2%",
                                    "487.812%",
                                    "515.424%",
                                    "552.24%",
                                    "589.056%",
                                    "625.872%",
                                    "662.688%",
                                    "699.504%",
                                    "736.32%",
                                    "782.34%",
                                    "828.36%",
                                    "874.38%"
                                ]
                            },
                            {
                                "Desc": "Secondary Explosive Shell DMG",
                                "ParamLevelList": [
                                    "49.088%",
                                    "52.77%",
                                    "56.451%",
                                    "61.36%",
                                    "65.042%",
                                    "68.723%",
                                    "73.632%",
                                    "78.541%",
                                    "83.45%",
                                    "88.358%",
                                    "93.267%",
                                    "98.176%",
                                    "104.312%",
                                    "110.448%",
                                    "116.584%"
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
                        "Desc": "When the Elemental Type of all party members is <color style='color:#FF9999;'>Pyro</color> or <color style='color:#FFACFF;'>Electro</color> and there is at least one Pyro and one Electro Elemental Type each in the party:<br>Chevreuse grants \"Coordinated Tactics\" to every character in the party: After a character triggers the Overloaded reaction on an opponent, the <color style='color:#FF9999;'>Pyro</color> and <color style='color:#FFACFF;'>Electro</color> RES of the opponent hit will be decreased by 40% for 6s.",
                        "Icon": "UI_Talent_S_Chevreuse_05",
                        "Name": "Vanguard's Coordinated Tactics"
                    },
                    {
                        "Desc": "After Chevreuse fires an Overcharged Ball using <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color>, nearby <color style='color:#FF9999;'>Pyro</color> and <color style='color:#FFACFF;'>Electro</color> characters in the party gain 1% increased ATK for every 1000 Max HP Chevreuse has for 30s. ATK can be increased by up to 40% in this way.",
                        "Icon": "UI_Talent_S_Chevreuse_06",
                        "Name": "Vertical Force Coordination"
                    },
                    {
                        "Desc": "Decreases sprinting Stamina consumption for your own party members by 20%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_Explosion_Sprint",
                        "Name": "Double Time March"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When characters with the \"Coordinated Tactics\" status (not including Chevreuse herself) trigger the Overloaded reaction, they will recover 6 Energy. This effect can be triggered once every 10s.<br>You must first unlock the Passive Talent \"Vanguard's Coordinated Tactics.\"",
                        "Icon": "UI_Talent_S_Chevreuse_01",
                        "Name": "Stable Front Line's Resolve",
                        "Level": 1
                    },
                    {
                        "Desc": "After Holding <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> and hitting a target, trigger 2 chain explosions at the location where said target was hit. Each explosion deals <color style='color:#FF9999;'>Pyro DMG</color> equal to 120% of Chevreuse's ATK. This effect can be triggered up to once every 10s, and DMG dealt by this skill is considered Elemental Skill DMG.",
                        "Icon": "UI_Talent_S_Chevreuse_02",
                        "Name": "Sniper Induced Explosion",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chevreuse_01",
                        "Name": "Practiced Field Stripping Technique",
                        "Level": 3
                    },
                    {
                        "Desc": "After using <color style='color:#FFD780;'>Ring of Bursting Grenades</color>, the CD for Chevreuse using Hold <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> is decreased by 100%. This effect is removed after Short-Range Rapid Interdiction Fire has been fired twice using Hold or after 6s.",
                        "Icon": "UI_Talent_S_Chevreuse_03",
                        "Name": "The Secret to Rapid-Fire Multishots",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Ring of Bursting Grenades</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chevreuse_02",
                        "Name": "Enhanced Incendiary Firepower",
                        "Level": 5
                    },
                    {
                        "Desc": "After 12s of the healing effect from <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color>, all nearby party members recover HP equivalent to 10% of Chevreuse's Max HP.<br>After a party member is healed by Short-Range Rapid Interdiction Fire, they gain a 20% <color style='color:#FF9999;'>Pyro DMG Bonus</color> and <color style='color:#FFACFF;'>Electro DMG Bonus</color> for 8s, stacking up to 3 times.",
                        "Icon": "UI_Talent_S_Chevreuse_04",
                        "Name": "In Pursuit of Ending Evil",
                        "Level": 6
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive spear strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_03",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Line Bayonet Thrust EX",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "53.13%",
                                    "57.455%",
                                    "61.779%",
                                    "67.957%",
                                    "72.281%",
                                    "77.224%",
                                    "84.019%",
                                    "90.815%",
                                    "97.611%",
                                    "105.024%",
                                    "112.438%",
                                    "119.851%",
                                    "127.265%",
                                    "134.678%",
                                    "142.092%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "49.311%",
                                    "53.324%",
                                    "57.338%",
                                    "63.072%",
                                    "67.085%",
                                    "71.672%",
                                    "77.98%",
                                    "84.287%",
                                    "90.594%",
                                    "97.475%",
                                    "104.355%",
                                    "111.236%",
                                    "118.116%",
                                    "124.997%",
                                    "131.877%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "27.645%+32.453%",
                                    "29.895%+35.094%",
                                    "32.145%+37.736%",
                                    "35.36%+41.509%",
                                    "37.61%+44.151%",
                                    "40.182%+47.17%",
                                    "43.718%+51.321%",
                                    "47.254%+55.471%",
                                    "50.789%+59.623%",
                                    "54.647%+64.151%",
                                    "58.504%+68.679%",
                                    "62.362%+73.207%",
                                    "66.219%+77.736%",
                                    "70.077%+82.264%",
                                    "73.934%+86.792%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "77.262%",
                                    "83.55%",
                                    "89.839%",
                                    "98.823%",
                                    "105.112%",
                                    "112.299%",
                                    "122.181%",
                                    "132.063%",
                                    "141.946%",
                                    "152.726%",
                                    "163.507%",
                                    "174.288%",
                                    "185.068%",
                                    "195.849%",
                                    "206.63%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "121.69%",
                                    "131.595%",
                                    "141.5%",
                                    "155.65%",
                                    "165.555%",
                                    "176.875%",
                                    "192.44%",
                                    "208.005%",
                                    "223.57%",
                                    "240.55%",
                                    "257.53%",
                                    "274.51%",
                                    "291.49%",
                                    "308.47%",
                                    "325.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "63.932%",
                                    "69.136%",
                                    "74.34%",
                                    "81.774%",
                                    "86.978%",
                                    "92.925%",
                                    "101.102%",
                                    "109.28%",
                                    "117.457%",
                                    "126.378%",
                                    "135.299%",
                                    "144.22%",
                                    "153.14%",
                                    "162.061%",
                                    "170.982%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "127.838%/159.676%",
                                    "138.243%/172.673%",
                                    "148.649%/185.67%",
                                    "163.513%/204.237%",
                                    "173.919%/217.234%",
                                    "185.811%/232.087%",
                                    "202.162%/252.511%",
                                    "218.513%/272.935%",
                                    "234.865%/293.359%",
                                    "252.702%/315.639%",
                                    "270.54%/337.919%",
                                    "288.378%/360.2%",
                                    "306.216%/382.48%",
                                    "324.054%/404.761%",
                                    "341.892%/427.041%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Chevreuse quickly shoulders her musket and fires at her opponent(s), dealing <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br>Hold to fire in a different fashion.<br><br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode, locking a target in her sights to fire a precise interdiction shot. If Chevreuse has an Overcharged Ball, then she will fire the Overcharged Ball instead, dealing greater <color style='color:#FF9999;'>Pyro DMG</color> in a larger area.<br>Chevreuse gains 1 Overcharged Ball every time a nearby character in the party triggers an Overloaded reaction, and can have up to 1 Overcharged Ball at a time.<br><br>For a short duration after Chevreuse fires a shot, she will continuously restore HP to the active character on the field. The amount healed is based on her Max HP.<br><br><color style='color:#FFD780;'>Arkhe: Ousia</color><br>Periodically, after Chevreuse's Short-Range Rapid Interdiction Fire hits, a Surging Blade will be called forth that deals ousia-aligned <color style='color:#FF9999;'>Pyro DMG</color>.<br><br><i>\"Actually, training regulations only had the phrase \"interdiction fire,\" but the protagonist of this novel believes that even how stylish your terminology is can affect how motivated your troops are, which can put your opponents on the back foot right from the get-go... I think that's a good point, so I changed the regulations!\"</i>",
                        "Icon": "Skill_S_Chevreuse_01",
                        "Lock": 15.0,
                        "Name": "Short-Range Rapid Interdiction Fire",
                        "ParamDesc": [
                            {
                                "Desc": "Press DMG",
                                "ParamLevelList": [
                                    "115.2%",
                                    "123.84%",
                                    "132.48%",
                                    "144.0%",
                                    "152.64%",
                                    "161.28%",
                                    "172.8%",
                                    "184.32%",
                                    "195.84%",
                                    "207.36%",
                                    "218.88%",
                                    "230.4%",
                                    "244.8%",
                                    "259.2%",
                                    "273.6%"
                                ]
                            },
                            {
                                "Desc": "Hold DMG",
                                "ParamLevelList": [
                                    "172.8%",
                                    "185.76%",
                                    "198.72%",
                                    "216.0%",
                                    "228.96%",
                                    "241.92%",
                                    "259.2%",
                                    "276.48%",
                                    "293.76%",
                                    "311.04%",
                                    "328.32%",
                                    "345.6%",
                                    "367.2%",
                                    "388.8%",
                                    "410.4%"
                                ]
                            },
                            {
                                "Desc": "Overcharged Ball DMG",
                                "ParamLevelList": [
                                    "282.4%",
                                    "303.58%",
                                    "324.76%",
                                    "353.0%",
                                    "374.18%",
                                    "395.36%",
                                    "423.6%",
                                    "451.84%",
                                    "480.08%",
                                    "508.32%",
                                    "536.56%",
                                    "564.8%",
                                    "600.0%",
                                    "635.4%",
                                    "670.7%"
                                ]
                            },
                            {
                                "Desc": "HP Regeneration Over Time",
                                "ParamLevelList": [
                                    "2.667% Max HP+256.79184",
                                    "2.867% Max HP+282.47458",
                                    "3.067% Max HP+310.29758",
                                    "3.333% Max HP+340.26077",
                                    "3.533% Max HP+372.36423",
                                    "3.733% Max HP+406.60788",
                                    "4.0% Max HP+442.99179",
                                    "4.267% Max HP+481.51593",
                                    "4.533% Max HP+522.1803",
                                    "4.8% Max HP+564.98486",
                                    "5.067% Max HP+609.92969",
                                    "5.333% Max HP+657.01471",
                                    "5.667% Max HP+706.24",
                                    "6.0% Max HP+757.60553",
                                    "6.333% Max HP+811.11127"
                                ]
                            },
                            {
                                "Desc": "Healing Duration",
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
                                "Desc": "Surging Blade DMG",
                                "ParamLevelList": [
                                    "28.8%",
                                    "30.96%",
                                    "33.12%",
                                    "36.0%",
                                    "38.16%",
                                    "40.32%",
                                    "43.2%",
                                    "46.08%",
                                    "48.96%",
                                    "51.84%",
                                    "54.72%",
                                    "57.6%",
                                    "61.2%",
                                    "64.8%",
                                    "68.4%"
                                ]
                            },
                            {
                                "Desc": "Surging Blade Interval",
                                "ParamLevelList": [
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s"
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
                        "Num": 1,
                        "Desc": "Chevreuse fires an explosive grenade at opponents with her musket, dealing <color style='color:#FF9999;'>AoE Pyro DMG.</color> After the projectile hits, it will split into many secondary explosive shells.<br>The secondary explosive shells will burst after a short interval, dealing <color style='color:#FF9999;'>Pyro DMG</color> to nearby opponents.<br><br><i>\"Theoretically, a rectangular blast would be most efficient at destroying enemy formations. Unfortunately, the cross-section of an explosive shock wave is round, like most cakes. So, the secondary explosive shells can only be arranged like the fruit on a cake, forming a ring around the edge.</i>",
                        "Icon": "Skill_E_Chevreuse_01",
                        "Lock": 15.0,
                        "Name": "Ring of Bursting Grenades",
                        "ParamDesc": [
                            {
                                "Desc": "Explosive Grenade DMG",
                                "ParamLevelList": [
                                    "368.16%",
                                    "395.772%",
                                    "423.384%",
                                    "460.2%",
                                    "487.812%",
                                    "515.424%",
                                    "552.24%",
                                    "589.056%",
                                    "625.872%",
                                    "662.688%",
                                    "699.504%",
                                    "736.32%",
                                    "782.34%",
                                    "828.36%",
                                    "874.38%"
                                ]
                            },
                            {
                                "Desc": "Secondary Explosive Shell DMG",
                                "ParamLevelList": [
                                    "49.088%",
                                    "52.77%",
                                    "56.451%",
                                    "61.36%",
                                    "65.042%",
                                    "68.723%",
                                    "73.632%",
                                    "78.541%",
                                    "83.45%",
                                    "88.358%",
                                    "93.267%",
                                    "98.176%",
                                    "104.312%",
                                    "110.448%",
                                    "116.584%"
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
                        "Desc": "When the Elemental Type of all party members is <color style='color:#FF9999;'>Pyro</color> or <color style='color:#FFACFF;'>Electro</color> and there is at least one Pyro and one Electro Elemental Type each in the party:<br>Chevreuse grants \"Coordinated Tactics\" to nearby party members: After a character triggers the Overloaded reaction, the <color style='color:#FF9999;'>Pyro</color> and <color style='color:#FFACFF;'>Electro</color> RES of the opponent(s) affected by this Overloaded reaction will be decreased by 40% for 6s.",
                        "Icon": "UI_Talent_S_Chevreuse_05",
                        "Name": "Vanguard's Coordinated Tactics"
                    },
                    {
                        "Desc": "After Chevreuse fires an Overcharged Ball using <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color>, nearby <color style='color:#FF9999;'>Pyro</color> and <color style='color:#FFACFF;'>Electro</color> characters in the party gain 1% increased ATK for every 1000 Max HP Chevreuse has for 30s. ATK can be increased by up to 40% in this way.",
                        "Icon": "UI_Talent_S_Chevreuse_06",
                        "Name": "Vertical Force Coordination"
                    },
                    {
                        "Desc": "Decreases sprinting Stamina consumption for your own party members by 20%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_Explosion_Sprint",
                        "Name": "Double Time March"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When characters with the \"Coordinated Tactics\" status (not including Chevreuse herself) trigger the Overloaded reaction, they will recover 6 Energy. This effect can be triggered once every 10s.<br>You must first unlock the Passive Talent \"Vanguard's Coordinated Tactics.\"",
                        "Icon": "UI_Talent_S_Chevreuse_01",
                        "Name": "Stable Front Line's Resolve",
                        "Level": 1
                    },
                    {
                        "Desc": "After Holding <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> and hitting a target, trigger 2 chain explosions at the location where said target was hit. Each explosion deals <color style='color:#FF9999;'>Pyro DMG</color> equal to 120% of Chevreuse's ATK. This effect can be triggered up to once every 10s, and DMG dealt by this skill is considered Elemental Skill DMG.",
                        "Icon": "UI_Talent_S_Chevreuse_02",
                        "Name": "Sniper Induced Explosion",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chevreuse_01",
                        "Name": "Practiced Field Stripping Technique",
                        "Level": 3
                    },
                    {
                        "Desc": "After using <color style='color:#FFD780;'>Ring of Bursting Grenades</color>, the CD for Chevreuse using Hold <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> is decreased by 100%. This effect is removed after Short-Range Rapid Interdiction Fire has been fired twice using Hold or after 6s.",
                        "Icon": "UI_Talent_S_Chevreuse_03",
                        "Name": "The Secret to Rapid-Fire Multishots",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Ring of Bursting Grenades</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chevreuse_02",
                        "Name": "Enhanced Incendiary Firepower",
                        "Level": 5
                    },
                    {
                        "Desc": "After 12s of the healing effect from <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color>, all nearby party members recover HP equivalent to 10% of Chevreuse's Max HP.<br>After a party member is healed by Short-Range Rapid Interdiction Fire, they gain a 20% <color style='color:#FF9999;'>Pyro DMG Bonus</color> and <color style='color:#FFACFF;'>Electro DMG Bonus</color> for 8s. Max 3 stacks. Each stack's duration is counted independently.",
                        "Icon": "UI_Talent_S_Chevreuse_04",
                        "Name": "In Pursuit of Ending Evil",
                        "Level": 6
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive spear strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_03",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Line Bayonet Thrust EX",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "53.13%",
                                    "57.455%",
                                    "61.779%",
                                    "67.957%",
                                    "72.281%",
                                    "77.224%",
                                    "84.019%",
                                    "90.815%",
                                    "97.611%",
                                    "105.024%",
                                    "112.438%",
                                    "119.851%",
                                    "127.265%",
                                    "134.678%",
                                    "142.092%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "49.311%",
                                    "53.324%",
                                    "57.338%",
                                    "63.072%",
                                    "67.085%",
                                    "71.672%",
                                    "77.98%",
                                    "84.287%",
                                    "90.594%",
                                    "97.475%",
                                    "104.355%",
                                    "111.236%",
                                    "118.116%",
                                    "124.997%",
                                    "131.877%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "27.645%+32.453%",
                                    "29.895%+35.094%",
                                    "32.145%+37.736%",
                                    "35.36%+41.509%",
                                    "37.61%+44.151%",
                                    "40.182%+47.17%",
                                    "43.718%+51.321%",
                                    "47.254%+55.471%",
                                    "50.789%+59.623%",
                                    "54.647%+64.151%",
                                    "58.504%+68.679%",
                                    "62.362%+73.207%",
                                    "66.219%+77.736%",
                                    "70.077%+82.264%",
                                    "73.934%+86.792%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "77.262%",
                                    "83.55%",
                                    "89.839%",
                                    "98.823%",
                                    "105.112%",
                                    "112.299%",
                                    "122.181%",
                                    "132.063%",
                                    "141.946%",
                                    "152.726%",
                                    "163.507%",
                                    "174.288%",
                                    "185.068%",
                                    "195.849%",
                                    "206.63%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "121.69%",
                                    "131.595%",
                                    "141.5%",
                                    "155.65%",
                                    "165.555%",
                                    "176.875%",
                                    "192.44%",
                                    "208.005%",
                                    "223.57%",
                                    "240.55%",
                                    "257.53%",
                                    "274.51%",
                                    "291.49%",
                                    "308.47%",
                                    "325.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "63.932%",
                                    "69.136%",
                                    "74.34%",
                                    "81.774%",
                                    "86.978%",
                                    "92.925%",
                                    "101.102%",
                                    "109.28%",
                                    "117.457%",
                                    "126.378%",
                                    "135.299%",
                                    "144.22%",
                                    "153.14%",
                                    "162.061%",
                                    "170.982%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "127.838%/159.676%",
                                    "138.243%/172.673%",
                                    "148.649%/185.67%",
                                    "163.513%/204.237%",
                                    "173.919%/217.234%",
                                    "185.811%/232.087%",
                                    "202.162%/252.511%",
                                    "218.513%/272.935%",
                                    "234.865%/293.359%",
                                    "252.702%/315.639%",
                                    "270.54%/337.919%",
                                    "288.378%/360.2%",
                                    "306.216%/382.48%",
                                    "324.054%/404.761%",
                                    "341.892%/427.041%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Chevreuse quickly shoulders her musket and fires at her opponent(s), dealing <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br>Hold to fire in a different fashion.<br><br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode, locking a target in her sights to fire a precise interdiction shot. If Chevreuse has an Overcharged Ball, then she will fire the Overcharged Ball instead, dealing greater <color style='color:#FF9999;'>Pyro DMG</color> in a larger area.<br>Chevreuse gains 1 Overcharged Ball every time a nearby party member triggers an Overloaded reaction, and can have up to 1 Overcharged Ball at a time.<br><br>For a short duration after Chevreuse fires a shot, she will continuously restore HP to your active character on the field. The amount healed is based on her Max HP.<br><br><color style='color:#FFD780;'>Arkhe: Ousia</color><br>Periodically, after Chevreuse's Short-Range Rapid Interdiction Fire hits, a Surging Blade will be called forth that deals Ousia-aligned <color style='color:#FF9999;'>Pyro DMG</color>.<br><br><i>\"Actually, training regulations only had the phrase \"interdiction fire,\" but the protagonist of this novel believes that even how stylish your terminology is can affect how motivated your troops are, which can put your opponents on the back foot right from the get-go... I think that's a good point, so I changed the regulations!\"</i>",
                        "Icon": "Skill_S_Chevreuse_01",
                        "Lock": 15.0,
                        "Name": "Short-Range Rapid Interdiction Fire",
                        "ParamDesc": [
                            {
                                "Desc": "Press DMG",
                                "ParamLevelList": [
                                    "115.2%",
                                    "123.84%",
                                    "132.48%",
                                    "144.0%",
                                    "152.64%",
                                    "161.28%",
                                    "172.8%",
                                    "184.32%",
                                    "195.84%",
                                    "207.36%",
                                    "218.88%",
                                    "230.4%",
                                    "244.8%",
                                    "259.2%",
                                    "273.6%"
                                ]
                            },
                            {
                                "Desc": "Hold DMG",
                                "ParamLevelList": [
                                    "172.8%",
                                    "185.76%",
                                    "198.72%",
                                    "216.0%",
                                    "228.96%",
                                    "241.92%",
                                    "259.2%",
                                    "276.48%",
                                    "293.76%",
                                    "311.04%",
                                    "328.32%",
                                    "345.6%",
                                    "367.2%",
                                    "388.8%",
                                    "410.4%"
                                ]
                            },
                            {
                                "Desc": "Overcharged Ball DMG",
                                "ParamLevelList": [
                                    "282.4%",
                                    "303.58%",
                                    "324.76%",
                                    "353.0%",
                                    "374.18%",
                                    "395.36%",
                                    "423.6%",
                                    "451.84%",
                                    "480.08%",
                                    "508.32%",
                                    "536.56%",
                                    "564.8%",
                                    "600.0%",
                                    "635.4%",
                                    "670.7%"
                                ]
                            },
                            {
                                "Desc": "HP Regeneration Over Time",
                                "ParamLevelList": [
                                    "2.667% Max HP+256.79184",
                                    "2.867% Max HP+282.47458",
                                    "3.067% Max HP+310.29758",
                                    "3.333% Max HP+340.26077",
                                    "3.533% Max HP+372.36423",
                                    "3.733% Max HP+406.60788",
                                    "4.0% Max HP+442.99179",
                                    "4.267% Max HP+481.51593",
                                    "4.533% Max HP+522.1803",
                                    "4.8% Max HP+564.98486",
                                    "5.067% Max HP+609.92969",
                                    "5.333% Max HP+657.01471",
                                    "5.667% Max HP+706.24",
                                    "6.0% Max HP+757.60553",
                                    "6.333% Max HP+811.11127"
                                ]
                            },
                            {
                                "Desc": "Healing Duration",
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
                                "Desc": "Surging Blade DMG",
                                "ParamLevelList": [
                                    "28.8%",
                                    "30.96%",
                                    "33.12%",
                                    "36.0%",
                                    "38.16%",
                                    "40.32%",
                                    "43.2%",
                                    "46.08%",
                                    "48.96%",
                                    "51.84%",
                                    "54.72%",
                                    "57.6%",
                                    "61.2%",
                                    "64.8%",
                                    "68.4%"
                                ]
                            },
                            {
                                "Desc": "Surging Blade Interval",
                                "ParamLevelList": [
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s"
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
                        "Num": 1,
                        "Desc": "Chevreuse fires an explosive grenade at opponents with her musket, dealing <color style='color:#FF9999;'>AoE Pyro DMG.</color> After the projectile hits, it will split into many secondary explosive shells.<br>The secondary explosive shells will burst after a short interval, dealing <color style='color:#FF9999;'>Pyro DMG</color> to nearby opponents.<br><br><i>\"Theoretically, a rectangular blast would be most efficient at destroying enemy formations. Unfortunately, the cross-section of an explosive shock wave is round, like most cakes. So, the secondary explosive shells can only be arranged like the fruit on a cake, forming a ring around the edge.</i>",
                        "Icon": "Skill_E_Chevreuse_01",
                        "Lock": 15.0,
                        "Name": "Ring of Bursting Grenades",
                        "ParamDesc": [
                            {
                                "Desc": "Explosive Grenade DMG",
                                "ParamLevelList": [
                                    "368.16%",
                                    "395.772%",
                                    "423.384%",
                                    "460.2%",
                                    "487.812%",
                                    "515.424%",
                                    "552.24%",
                                    "589.056%",
                                    "625.872%",
                                    "662.688%",
                                    "699.504%",
                                    "736.32%",
                                    "782.34%",
                                    "828.36%",
                                    "874.38%"
                                ]
                            },
                            {
                                "Desc": "Secondary Explosive Shell DMG",
                                "ParamLevelList": [
                                    "49.088%",
                                    "52.77%",
                                    "56.451%",
                                    "61.36%",
                                    "65.042%",
                                    "68.723%",
                                    "73.632%",
                                    "78.541%",
                                    "83.45%",
                                    "88.358%",
                                    "93.267%",
                                    "98.176%",
                                    "104.312%",
                                    "110.448%",
                                    "116.584%"
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
                        "Desc": "When the Elemental Type of all party members is <color style='color:#FF9999;'>Pyro</color> or <color style='color:#FFACFF;'>Electro</color> and there is at least one Pyro and one Electro Elemental Type each in the party:<br>Chevreuse grants \"Coordinated Tactics\" to nearby party members: After a character triggers the Overloaded reaction, the <color style='color:#FF9999;'>Pyro</color> and <color style='color:#FFACFF;'>Electro</color> RES of the opponent(s) affected by this Overloaded reaction will be decreased by 40% for 6s.<br>The \"Coordinated Tactics\" effect will be removed when the Elemental Types of the characters in the party do not meet the basic requirements for the Passive Talent.",
                        "Icon": "UI_Talent_S_Chevreuse_05",
                        "Name": "Vanguard's Coordinated Tactics"
                    },
                    {
                        "Desc": "After Chevreuse fires an Overcharged Ball using <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color>, nearby <color style='color:#FF9999;'>Pyro</color> and <color style='color:#FFACFF;'>Electro</color> characters in the party gain 1% increased ATK for every 1000 Max HP Chevreuse has for 30s. ATK can be increased by up to 40% in this way.",
                        "Icon": "UI_Talent_S_Chevreuse_06",
                        "Name": "Vertical Force Coordination"
                    },
                    {
                        "Desc": "Decreases sprinting Stamina consumption for your own party members by 20%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_Explosion_Sprint",
                        "Name": "Double Time March"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When active characters with the \"Coordinated Tactics\" status (not including Chevreuse herself) trigger the Overloaded reaction on opponents, they will recover 6 Energy. This effect can be triggered once every 10s.<br>You must first unlock the Passive Talent \"Vanguard's Coordinated Tactics.\"",
                        "Icon": "UI_Talent_S_Chevreuse_01",
                        "Name": "Stable Front Line's Resolve",
                        "Level": 1
                    },
                    {
                        "Desc": "After Holding <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> and hitting a target, trigger 2 chain explosions at the location where said target was hit. Each explosion deals <color style='color:#FF9999;'>Pyro DMG</color> equal to 120% of Chevreuse's ATK. This effect can be triggered up to once every 10s, and DMG dealt by this skill is considered Elemental Skill DMG.",
                        "Icon": "UI_Talent_S_Chevreuse_02",
                        "Name": "Sniper Induced Explosion",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chevreuse_01",
                        "Name": "Practiced Field Stripping Technique",
                        "Level": 3
                    },
                    {
                        "Desc": "After using <color style='color:#FFD780;'>Ring of Bursting Grenades</color>, the CD for Chevreuse using Hold <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> is decreased by 100%. This effect is removed after Short-Range Rapid Interdiction Fire has been fired twice using Hold or after 6s.",
                        "Icon": "UI_Talent_S_Chevreuse_03",
                        "Name": "The Secret to Rapid-Fire Multishots",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Ring of Bursting Grenades</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chevreuse_02",
                        "Name": "Enhanced Incendiary Firepower",
                        "Level": 5
                    },
                    {
                        "Desc": "After 12s of the healing effect from <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color>, all nearby party members recover HP equivalent to 10% of Chevreuse's Max HP.<br>After a party member is healed by Short-Range Rapid Interdiction Fire, they gain a 20% <color style='color:#FF9999;'>Pyro DMG Bonus</color> and <color style='color:#FFACFF;'>Electro DMG Bonus</color> for 8s. Max 3 stacks. Each stack's duration is counted independently.",
                        "Icon": "UI_Talent_S_Chevreuse_04",
                        "Name": "In Pursuit of Ending Evil",
                        "Level": 6
                    }
                ]
            },
            "5": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive spear strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_03",
                        "Lock": 5.0,
                        "Name": "Normal Attack: Line Bayonet Thrust EX",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "53.13%",
                                    "57.455%",
                                    "61.779%",
                                    "67.957%",
                                    "72.281%",
                                    "77.224%",
                                    "84.019%",
                                    "90.815%",
                                    "97.611%",
                                    "105.024%",
                                    "112.438%",
                                    "119.851%",
                                    "127.265%",
                                    "134.678%",
                                    "142.092%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "49.311%",
                                    "53.324%",
                                    "57.338%",
                                    "63.072%",
                                    "67.085%",
                                    "71.672%",
                                    "77.98%",
                                    "84.287%",
                                    "90.594%",
                                    "97.475%",
                                    "104.355%",
                                    "111.236%",
                                    "118.116%",
                                    "124.997%",
                                    "131.877%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "27.645%+32.453%",
                                    "29.895%+35.094%",
                                    "32.145%+37.736%",
                                    "35.36%+41.509%",
                                    "37.61%+44.151%",
                                    "40.182%+47.17%",
                                    "43.718%+51.321%",
                                    "47.254%+55.471%",
                                    "50.789%+59.623%",
                                    "54.647%+64.151%",
                                    "58.504%+68.679%",
                                    "62.362%+73.207%",
                                    "66.219%+77.736%",
                                    "70.077%+82.264%",
                                    "73.934%+86.792%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "77.262%",
                                    "83.55%",
                                    "89.839%",
                                    "98.823%",
                                    "105.112%",
                                    "112.299%",
                                    "122.181%",
                                    "132.063%",
                                    "141.946%",
                                    "152.726%",
                                    "163.507%",
                                    "174.288%",
                                    "185.068%",
                                    "195.849%",
                                    "206.63%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "121.69%",
                                    "131.595%",
                                    "141.5%",
                                    "155.65%",
                                    "165.555%",
                                    "176.875%",
                                    "192.44%",
                                    "208.005%",
                                    "223.57%",
                                    "240.55%",
                                    "257.53%",
                                    "274.51%",
                                    "291.49%",
                                    "308.47%",
                                    "325.45%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0",
                                    "25.0"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
                                "ParamLevelList": [
                                    "63.932%",
                                    "69.136%",
                                    "74.34%",
                                    "81.774%",
                                    "86.978%",
                                    "92.925%",
                                    "101.102%",
                                    "109.28%",
                                    "117.457%",
                                    "126.378%",
                                    "135.299%",
                                    "144.22%",
                                    "153.14%",
                                    "162.061%",
                                    "170.982%"
                                ]
                            },
                            {
                                "Desc": "Low/High Plunge DMG",
                                "ParamLevelList": [
                                    "127.838%/159.676%",
                                    "138.243%/172.673%",
                                    "148.649%/185.67%",
                                    "163.513%/204.237%",
                                    "173.919%/217.234%",
                                    "185.811%/232.087%",
                                    "202.162%/252.511%",
                                    "218.513%/272.935%",
                                    "234.865%/293.359%",
                                    "252.702%/315.639%",
                                    "270.54%/337.919%",
                                    "288.378%/360.2%",
                                    "306.216%/382.48%",
                                    "324.054%/404.761%",
                                    "341.892%/427.041%"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Chevreuse quickly shoulders her musket and fires at her opponent(s), dealing <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br>For a short duration after Chevreuse fires a shot, she will continuously restore HP to the active character on the field. The amount healed is based on her Max HP.<br>Hold to fire in a different fashion.<br><br><color style='color:#FFD780;'>Hold</color><br>Enter Aiming Mode, locking a target in her sights to fire a precise interdiction shot. If Chevreuse has an Overcharged Ball, then she will fire the Overcharged Ball instead, dealing greater <color style='color:#FF9999;'>Pyro DMG</color> in a larger area.<br>Chevreuse gains 1 Overcharged Ball every time a nearby character in the party triggers an Overloaded reaction, and can have up to 1 Overcharged Ball at a time.<br><br><color style='color:#FFD780;'>Arkhe: Ousia</color><br>Periodically, after Chevreuse's Short-Range Rapid Interdiction Fire hits, a Surging Blade will be called forth that deals ousia-aligned <color style='color:#FF9999;'>Pyro DMG</color>.<br><br><i>\"Actually, training regulations only had the phrase \"interdiction fire,\" but the protagonist of this novel believes that even how stylish your terminology is can affect how motivated your troops are, which can put your opponents on the back foot right from the get-go... I think that's a good point, so I changed the regulations!\"</i>",
                        "Icon": "Skill_S_Chevreuse_01",
                        "Lock": 15.0,
                        "Name": "Short-Range Rapid Interdiction Fire",
                        "ParamDesc": [
                            {
                                "Desc": "Press DMG",
                                "ParamLevelList": [
                                    "115.2%",
                                    "123.84%",
                                    "132.48%",
                                    "144.0%",
                                    "152.64%",
                                    "161.28%",
                                    "172.8%",
                                    "184.32%",
                                    "195.84%",
                                    "207.36%",
                                    "218.88%",
                                    "230.4%",
                                    "244.8%",
                                    "259.2%",
                                    "273.6%"
                                ]
                            },
                            {
                                "Desc": "Hold DMG",
                                "ParamLevelList": [
                                    "172.8%",
                                    "185.76%",
                                    "198.72%",
                                    "216.0%",
                                    "228.96%",
                                    "241.92%",
                                    "259.2%",
                                    "276.48%",
                                    "293.76%",
                                    "311.04%",
                                    "328.32%",
                                    "345.6%",
                                    "367.2%",
                                    "388.8%",
                                    "410.4%"
                                ]
                            },
                            {
                                "Desc": "Overcharged Ball DMG",
                                "ParamLevelList": [
                                    "282.4%",
                                    "303.58%",
                                    "324.76%",
                                    "353.0%",
                                    "374.18%",
                                    "395.36%",
                                    "423.6%",
                                    "451.84%",
                                    "480.08%",
                                    "508.32%",
                                    "536.56%",
                                    "564.8%",
                                    "600.0%",
                                    "635.4%",
                                    "670.7%"
                                ]
                            },
                            {
                                "Desc": "HP Regeneration Over Time",
                                "ParamLevelList": [
                                    "2.667% Max HP+256.79184",
                                    "2.867% Max HP+282.47458",
                                    "3.067% Max HP+310.29758",
                                    "3.333% Max HP+340.26077",
                                    "3.533% Max HP+372.36423",
                                    "3.733% Max HP+406.60788",
                                    "4.0% Max HP+442.99179",
                                    "4.267% Max HP+481.51593",
                                    "4.533% Max HP+522.1803",
                                    "4.8% Max HP+564.98486",
                                    "5.067% Max HP+609.92969",
                                    "5.333% Max HP+657.01471",
                                    "5.667% Max HP+706.24",
                                    "6.0% Max HP+757.60553",
                                    "6.333% Max HP+811.11127"
                                ]
                            },
                            {
                                "Desc": "Healing Duration",
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
                                "Desc": "Surging Blade DMG",
                                "ParamLevelList": [
                                    "28.8%",
                                    "30.96%",
                                    "33.12%",
                                    "36.0%",
                                    "38.16%",
                                    "40.32%",
                                    "43.2%",
                                    "46.08%",
                                    "48.96%",
                                    "51.84%",
                                    "54.72%",
                                    "57.6%",
                                    "61.2%",
                                    "64.8%",
                                    "68.4%"
                                ]
                            },
                            {
                                "Desc": "Surging Blade Interval",
                                "ParamLevelList": [
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s",
                                    "10.0s"
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
                        "Num": 1,
                        "Desc": "Chevreuse fires an explosive grenade at opponents with her musket, dealing <color style='color:#FF9999;'>AoE Pyro DMG.</color> After the projectile hits, it will split into many secondary explosive shells.<br>The secondary explosive shells will burst after a short interval, dealing <color style='color:#FF9999;'>Pyro DMG</color> to nearby opponents.<br><br><i>\"Theoretically, a rectangular blast would be most efficient at destroying enemy formations. Unfortunately, the cross-section of an explosive shock wave is round, like most cakes. So, the secondary explosive shells can only be arranged like the fruit on a cake, forming a ring around the edge.</i>",
                        "Icon": "Skill_E_Chevreuse_01",
                        "Lock": 15.0,
                        "Name": "Ring of Bursting Grenades",
                        "ParamDesc": [
                            {
                                "Desc": "Explosive Grenade DMG",
                                "ParamLevelList": [
                                    "368.16%",
                                    "395.772%",
                                    "423.384%",
                                    "460.2%",
                                    "487.812%",
                                    "515.424%",
                                    "552.24%",
                                    "589.056%",
                                    "625.872%",
                                    "662.688%",
                                    "699.504%",
                                    "736.32%",
                                    "782.34%",
                                    "828.36%",
                                    "874.38%"
                                ]
                            },
                            {
                                "Desc": "Secondary Explosive Shell DMG",
                                "ParamLevelList": [
                                    "49.088%",
                                    "52.77%",
                                    "56.451%",
                                    "61.36%",
                                    "65.042%",
                                    "68.723%",
                                    "73.632%",
                                    "78.541%",
                                    "83.45%",
                                    "88.358%",
                                    "93.267%",
                                    "98.176%",
                                    "104.312%",
                                    "110.448%",
                                    "116.584%"
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
                        "Desc": "When the Elemental Type of all party members is <color style='color:#FF9999;'>Pyro</color> or <color style='color:#FFACFF;'>Electro</color> and there is at least one Pyro and one Electro characters each in the party:<br>Chevreuse grants \"Coordinated Tactics\" to nearby party members: After a character triggers the Overloaded reaction, the <color style='color:#FF9999;'>Pyro</color> and <color style='color:#FFACFF;'>Electro</color> RES of the opponent(s) affected by this Overloaded reaction will be decreased by 40% for 6s.<br>The \"Coordinated Tactics\" effect will be removed when the Elemental Types of the characters in the party do not meet the basic requirements for the Passive Talent.",
                        "Icon": "UI_Talent_S_Chevreuse_05",
                        "Name": "Vanguard's Coordinated Tactics"
                    },
                    {
                        "Desc": "After Chevreuse fires an Overcharged Ball using <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color>, nearby <color style='color:#FF9999;'>Pyro</color> and <color style='color:#FFACFF;'>Electro</color> characters in the party gain 1% increased ATK for every 1000 Max HP Chevreuse has for 30s. ATK can be increased by up to 40% in this way.",
                        "Icon": "UI_Talent_S_Chevreuse_06",
                        "Name": "Vertical Force Coordination"
                    },
                    {
                        "Desc": "Decreases sprinting Stamina consumption for your own party members by 20%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                        "Icon": "UI_Talent_Explosion_Sprint",
                        "Name": "Double Time March"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When the active character with the \"Coordinated Tactics\" status (not including Chevreuse herself) triggers the Overloaded reaction, they will recover 6 Energy. This effect can be triggered once every 10s.<br>You must first unlock the Passive Talent \"Vanguard's Coordinated Tactics.\"",
                        "Icon": "UI_Talent_S_Chevreuse_01",
                        "Name": "Stable Front Line's Resolve",
                        "Level": 1
                    },
                    {
                        "Desc": "After Holding <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> and hitting a target, 2 chain explosions will be triggered near the location where said target is hit. Each explosion deals <color style='color:#FF9999;'>Pyro DMG</color> equal to 120% of Chevreuse's ATK. This effect can be triggered up to once every 10s, and DMG dealt this way is considered Elemental Skill DMG.",
                        "Icon": "UI_Talent_S_Chevreuse_02",
                        "Name": "Sniper Induced Explosion",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chevreuse_01",
                        "Name": "Practiced Field Stripping Technique",
                        "Level": 3
                    },
                    {
                        "Desc": "After using <color style='color:#FFD780;'>Ring of Bursting Grenades</color>, the Hold mode of <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color> will not enter cooldown when Chevreuse uses it. This effect is removed after Short-Range Rapid Interdiction Fire has been fired twice using Hold or after 6s.",
                        "Icon": "UI_Talent_S_Chevreuse_03",
                        "Name": "The Secret to Rapid-Fire Multishots",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Ring of Bursting Grenades</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Chevreuse_02",
                        "Name": "Enhanced Incendiary Firepower",
                        "Level": 5
                    },
                    {
                        "Desc": "After 12s of the healing effect from <color style='color:#FFD780;'>Short-Range Rapid Interdiction Fire</color>, all nearby party members recover HP equivalent to 10% of Chevreuse's Max HP once.<br>After a party member is healed by Short-Range Rapid Interdiction Fire, they gain a 20% <color style='color:#FF9999;'>Pyro DMG Bonus</color> and <color style='color:#FFACFF;'>Electro DMG Bonus</color> for 8s. Max 3 stacks. Each stack's duration is counted independently.",
                        "Icon": "UI_Talent_S_Chevreuse_04",
                        "Name": "In Pursuit of Ending Evil",
                        "Level": 6
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Модифицированный ряд штыков",
                        "Desc": "<color style='color:#FFD780;'>Обычная атака:</color><br>До четырёх ударов копьём.<br><br><color style='color:#FFD780;'>Заряженная атака:</color><br>Выпад, наносящий урон противникам на пути, на который тратится определённое количество выносливости.<br><br><color style='color:#FFD780;'>Атака в падении:</color><br>Стремительно падает на землю, атакуя всех врагов на пути. Приземлившись, наносит урон по площади.",
                        "Icon": "Skill_A_03",
                        "ParamDesc": [
                            {
                                "Desc": "Урон атаки 1",
                                "ParamLevelList": [
                                    "53.1299%",
                                    "57.4545%",
                                    "61.779%",
                                    "67.9569%",
                                    "72.2814%",
                                    "77.2237%",
                                    "84.0194%",
                                    "90.8151%",
                                    "97.6108%",
                                    "105.0243%",
                                    "112.4378%",
                                    "119.8513%",
                                    "127.2647%",
                                    "134.6782%",
                                    "142.0917%"
                                ]
                            },
                            {
                                "Desc": "Урон атаки 2",
                                "ParamLevelList": [
                                    "49.3107%",
                                    "53.3243%",
                                    "57.338%",
                                    "63.0718%",
                                    "67.0855%",
                                    "71.6725%",
                                    "77.9797%",
                                    "84.2869%",
                                    "90.594%",
                                    "97.4746%",
                                    "104.3552%",
                                    "111.2357%",
                                    "118.1163%",
                                    "124.9968%",
                                    "131.8774%"
                                ]
                            },
                            {
                                "Desc": "Урон атаки 3",
                                "ParamLevelList": [
                                    "27.6449%+32.4527%",
                                    "29.8951%+35.0942%",
                                    "32.1453%+37.7357%",
                                    "35.3598%+41.5093%",
                                    "37.61%+44.1508%",
                                    "40.1816%+47.1697%",
                                    "43.7176%+51.3206%",
                                    "47.2535%+55.4715%",
                                    "50.7895%+59.6225%",
                                    "54.6469%+64.1508%",
                                    "58.5044%+68.679%",
                                    "62.3618%+73.2073%",
                                    "66.2192%+77.7356%",
                                    "70.0767%+82.2639%",
                                    "73.9341%+86.7922%"
                                ]
                            },
                            {
                                "Desc": "Урон атаки 4",
                                "ParamLevelList": [
                                    "77.2615%",
                                    "83.5503%",
                                    "89.839%",
                                    "98.8229%",
                                    "105.1116%",
                                    "112.2988%",
                                    "122.181%",
                                    "132.0633%",
                                    "141.9456%",
                                    "152.7263%",
                                    "163.507%",
                                    "174.2877%",
                                    "185.0683%",
                                    "195.849%",
                                    "206.6297%"
                                ]
                            },
                            {
                                "Desc": "Урон заряженной атаки",
                                "ParamLevelList": [
                                    "121.69%",
                                    "131.595%",
                                    "141.5%",
                                    "155.65%",
                                    "165.555%",
                                    "176.875%",
                                    "192.44%",
                                    "208.005%",
                                    "223.57%",
                                    "240.55%",
                                    "257.53%",
                                    "274.51%",
                                    "291.49%",
                                    "308.47%",
                                    "325.45%"
                                ]
                            },
                            {
                                "Desc": "Потребление выносливости",
                                "ParamLevelList": [
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед.",
                                    "25 ед."
                                ]
                            },
                            {
                                "Desc": "Урон в падении",
                                "ParamLevelList": [
                                    "63.9324%",
                                    "69.1362%",
                                    "74.34%",
                                    "81.774%",
                                    "86.9778%",
                                    "92.925%",
                                    "101.1024%",
                                    "109.2798%",
                                    "117.4572%",
                                    "126.378%",
                                    "135.2988%",
                                    "144.2196%",
                                    "153.1404%",
                                    "162.0612%",
                                    "170.982%"
                                ]
                            },
                            {
                                "Desc": "Урон низкого/высокого удара",
                                "ParamLevelList": [
                                    "127.8377%/159.6762%",
                                    "138.2431%/172.6731%",
                                    "148.6485%/185.67%",
                                    "163.5134%/204.237%",
                                    "173.9187%/217.2339%",
                                    "185.8106%/232.0875%",
                                    "202.162%/252.5112%",
                                    "218.5133%/272.9349%",
                                    "234.8646%/293.3586%",
                                    "252.7025%/315.639%",
                                    "270.5403%/337.9194%",
                                    "288.3781%/360.1998%",
                                    "306.2159%/382.4802%",
                                    "324.0537%/404.7606%",
                                    "341.8915%/427.041%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Быстрый преграждающий выстрел вблизи",
                        "Desc": "Шеврёз быстро вскидывает мушкет к плечу и стреляет в противника, нанося <color style='color:#FF9999;'>Пиро урон по площади</color>.<br>В течение некоторого времени после выстрела Шеврёз периодически восстанавливает HP вашего активного персонажа пропорционально собственному макс. HP.<br>При долгом нажатии способ активации навыка меняется.<br><br><color style='color:#FFD780;'>Долгое нажатие</color><br>Переходит в режим прицеливания и фиксирует одну цель, чтобы совершить точный преграждающий выстрел. Если у Шеврёз есть Перегруженный заряд, она выстрелит им и нанесёт повышенный <color style='color:#FF9999;'>Пиро урон</color> по большей площади.<br>Каждый раз, когда член отряда поблизости вызывает реакцию Перегрузка, Шеврёз получает 1 Перегруженный заряд. Одновременно можно иметь не более 1 Перегруженного заряда.<br><br><br><color style='color:#FFD780;'>Архэ: Усия</color><br>После попадания навыка Быстрый преграждающий выстрел вблизи Шеврёз периодически призывает Клинок бурных вод, который наносит <color style='color:#FF9999;'>Пиро урон</color> усии.<br><br><i>«Вообще-то в обучающей инструкции есть только термин \"преграждающий выстрел\", но по мнению героя этого романа стильная терминология повышает боевой дух и ставит противника в проигрышное положение ещё на старте... Мне это показалось разумным, и я изменила инструкцию!»</i>",
                        "Icon": "Skill_S_Chevreuse_01",
                        "ParamDesc": [
                            {
                                "Desc": "Урон быстрого нажатия",
                                "ParamLevelList": [
                                    "115.2%",
                                    "123.84%",
                                    "132.48%",
                                    "144.0%",
                                    "152.64%",
                                    "161.28%",
                                    "172.8%",
                                    "184.32%",
                                    "195.84%",
                                    "207.36%",
                                    "218.88%",
                                    "230.4%",
                                    "244.8%",
                                    "259.2%",
                                    "273.6%"
                                ]
                            },
                            {
                                "Desc": "Урон долгого нажатия",
                                "ParamLevelList": [
                                    "172.8%",
                                    "185.76%",
                                    "198.72%",
                                    "216.0%",
                                    "228.96%",
                                    "241.92%",
                                    "259.2%",
                                    "276.48%",
                                    "293.76%",
                                    "311.04%",
                                    "328.32%",
                                    "345.6%",
                                    "367.2%",
                                    "388.8%",
                                    "410.4%"
                                ]
                            },
                            {
                                "Desc": "Урон Перегруженного заряда",
                                "ParamLevelList": [
                                    "282.4%",
                                    "303.58%",
                                    "324.76%",
                                    "353.0%",
                                    "374.18%",
                                    "395.36%",
                                    "423.6%",
                                    "451.84%",
                                    "480.08%",
                                    "508.32%",
                                    "536.56%",
                                    "564.8%",
                                    "600.1%",
                                    "635.4%",
                                    "670.7%"
                                ]
                            },
                            {
                                "Desc": "Периодическое лечение",
                                "ParamLevelList": [
                                    "2.6667% от макс. HP + 256.79184",
                                    "2.8667% от макс. HP + 282.47458",
                                    "3.0667% от макс. HP + 310.29758",
                                    "3.3333% от макс. HP + 340.26077",
                                    "3.5333% от макс. HP + 372.36423",
                                    "3.7333% от макс. HP + 406.60788",
                                    "4.0% от макс. HP + 442.9918",
                                    "4.2667% от макс. HP + 481.51593",
                                    "4.5333% от макс. HP + 522.1803",
                                    "4.8% от макс. HP + 564.98486",
                                    "5.0667% от макс. HP + 609.9297",
                                    "5.3333% от макс. HP + 657.0147",
                                    "5.6667% от макс. HP + 706.24",
                                    "6.0% от макс. HP + 757.6055",
                                    "6.3333% от макс. HP + 811.11127"
                                ]
                            },
                            {
                                "Desc": "Длительность лечения",
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
                                "Desc": "Урон Клинка бурных вод",
                                "ParamLevelList": [
                                    "28.8%",
                                    "30.96%",
                                    "33.12%",
                                    "36.0%",
                                    "38.16%",
                                    "40.32%",
                                    "43.2%",
                                    "46.08%",
                                    "48.96%",
                                    "51.84%",
                                    "54.72%",
                                    "57.6%",
                                    "61.2%",
                                    "64.8%",
                                    "68.4%"
                                ]
                            },
                            {
                                "Desc": "Интервал Клинка бурных вод",
                                "ParamLevelList": [
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек.",
                                    "10 сек."
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
                        "Name": "Кольцо разрывных гранат",
                        "Desc": "Шеврёз выстреливает во врагов разрывной гранатой и наносит <color style='color:#FF9999;'>Пиро урон по площади</color>. После попадания граната разделяется на множество вторичных разрывных снарядов.<br>Через короткий промежуток времени разрывные снаряды взрываются, нанося <color style='color:#FF9999;'>Пиро урон</color> врагам поблизости.<br><br><i>«По идее, для уничтожения вражеских формаций наиболее эффективен обстрел по прямоугольной площади. К сожалению, поперечное сечение взрывной волны, как и у большинства тортов, это окружность. Поэтому вторичные снаряды, разлетаясь, могут распределяться только как фрукты по краю торта, а именно по кругу».</i>",
                        "Icon": "Skill_E_Chevreuse_01",
                        "ParamDesc": [
                            {
                                "Desc": "Урон разрывной гранаты",
                                "ParamLevelList": [
                                    "368.16%",
                                    "395.772%",
                                    "423.384%",
                                    "460.2%",
                                    "487.812%",
                                    "515.424%",
                                    "552.24%",
                                    "589.056%",
                                    "625.872%",
                                    "662.688%",
                                    "699.504%",
                                    "736.32%",
                                    "782.34%",
                                    "828.36%",
                                    "874.38%"
                                ]
                            },
                            {
                                "Desc": "Урон мелкого разрывного заряда",
                                "ParamLevelList": [
                                    "49.088%",
                                    "52.7696%",
                                    "56.4512%",
                                    "61.36%",
                                    "65.0416%",
                                    "68.7232%",
                                    "73.632%",
                                    "78.5408%",
                                    "83.4496%",
                                    "88.3584%",
                                    "93.2672%",
                                    "98.176%",
                                    "104.312%",
                                    "110.448%",
                                    "116.584%"
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
                        "Name": "Согласованная тактика авангарда",
                        "Desc": "Если отряд полностью состоит из <color style='color:#FF9999;'>Пиро</color> и <color style='color:#FFACFF;'>Электро</color> персонажей и в отряде есть хотя бы по одному персонажу Электро или Пиро:<br>Шеврёз наделяет персонажей поблизости Согласованной тактикой: когда персонаж активирует реакцию Перегрузка, <color style='color:#FF9999;'>Пиро</color> и <color style='color:#FFACFF;'>Электро</color> сопротивление противника, который был поражён данной реакцией, понижается на 40% на 6 сек.<br>Если элементы персонажей отряда не соответствуют требованиям этого пассивного навыка, все существующие эффекты Согласованной тактики прерываются.",
                        "Icon": "UI_Talent_S_Chevreuse_05"
                    },
                    {
                        "Name": "Вертикальное координирование сил",
                        "Desc": "После того как Шеврёз выстреливает Перегруженным зарядом <color style='color:#FFD780;'>Быстрого преграждающего выстрела вблизи</color>, сила атаки персонажей <color style='color:#FF9999;'>Пиро</color> и <color style='color:#FFACFF;'>Электро</color> в отряде поблизости на 30 сек. увеличится на 1% за каждые 1000 ед. макс. HP Шеврёз. Силу атаки этим способом можно повысить максимум на 40%.",
                        "Icon": "UI_Talent_S_Chevreuse_06"
                    },
                    {
                        "Name": "Манёвр скорого марша",
                        "Desc": "Уменьшает потребление выносливости активного персонажа во время спринта на 20%.<br>Не суммируется с пассивными талантами, дающими точно такие же эффекты.",
                        "Icon": "UI_Talent_Explosion_Sprint"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Решительность прочного фронта",
                        "Desc": "Когда активный персонаж (кроме самой Шеврёз), находящийся под воздействием эффекта «Согласованная тактика», активирует реакцию Перегрузка, он восстанавливает 6 ед. энергии. Эффект может возникнуть один раз в 10 сек.<br>Требуется разблокировать пассивный талант «Согласованная тактика авангарда».",
                        "Icon": "UI_Talent_S_Chevreuse_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Вызванный метким выстрелом взрыв",
                        "Desc": "При попадании долгого нажатия навыка <color style='color:#FFD780;'>Быстрый преграждающий выстрел вблизи</color> рядом с местом попадания вызывается 2 цепных взрыва. Каждый взрыв наносит <color style='color:#FF9999;'>Пиро урон</color> в 120% от силы атаки Шеврёз. Эффект возникает раз в 10 сек. Этот урон считается уроном элементального навыка.",
                        "Icon": "UI_Talent_S_Chevreuse_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Отработанная разборка в поле",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Быстрый преграждающий выстрел вблизи</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Chevreuse_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Секрет частого огня",
                        "Desc": "После применения <color style='color:#FFD780;'>Кольца разрывных гранат</color>, <color style='color:#FFD780;'>Быстрый преграждающий выстрел вблизи</color> Шеврёз, активированный долгим нажатием, не уходит в откат. Через 6 сек. или после двух активаций Быстрого преграждающего выстрела вблизи удержанием эффект исчезает.",
                        "Icon": "UI_Talent_S_Chevreuse_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Урон усиленного огня",
                        "Desc": "Увеличивает уровень навыка <color style='color:#FFD780;'>Кольцо разрывных гранат</color> на 3.<br>Макс. уровень: 15",
                        "Icon": "UI_Talent_U_Chevreuse_02"
                    },
                    {
                        "Level": 6,
                        "Name": "В погоне за искоренением зла",
                        "Desc": "После 12 сек. действия эффекта лечения навыка <color style='color:#FFD780;'>Быстрый преграждающий выстрел вблизи</color> все окружающие члены отряда один раз восстанавливают HP в размере 10% от макс. HP Шеврёз.<br>После получения лечения Быстрого преграждающего выстрела вблизи персонаж отряда на 8 сек. наделяется 20% бонусом <color style='color:#FF9999;'>Пиро</color> и <color style='color:#FFACFF;'>Электро</color> урона. Этот эффект может складываться до 3 раз. Длительность каждого уровня рассчитывается отдельно.",
                        "Icon": "UI_Talent_S_Chevreuse_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Chevreuse": {
        "AttackList": [
            {
                "Skill": "Press E",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        6.0,
                        2.0,
                        1.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
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
                "AttackType": "Range"
            },
            {
                "Skill": "Hold E",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        7.0,
                        3.0,
                        2.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 75.0,
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
                "Skill": "Overcharged Ball",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        5.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 125.0,
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
                "AttackType": "Range"
            },
            {
                "Skill": "C2 Chain Explosion",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.0
                    ]
                },
                "AtkTag": "Elem Skill Extra",
                "AttTag": "C2 Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 25.0,
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
                "Skill": "Surging Blade",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
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
                "StrikeType": "Default",
                "AttackType": "Default"
            },
            {
                "Skill": "Explosive Grenade",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        6.0,
                        4.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 2.0,
                "Poise": 100.0,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Secondary Explosive Shell x8",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        6.0,
                        4.0,
                        60.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "Second Bombs",
                "AttGrp": "Only 1st and 4th hits apply",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 25.0,
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
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        2.0,
                        1.6,
                        2.4
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 49.423,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.06,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 45.87,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.06,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 3-1",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        2.0,
                        1.6,
                        2.4
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 25.716,
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
                "Skill": "Normal ATK 3-2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.6,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 30.189,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.06,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 4",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.0,
                        1.5,
                        1.6
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 71.871,
                "ForceType": 3,
                "Force": [
                    655.0,
                    800.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.1,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Spear",
                "AttackType": "Melee"
            },
            {
                "Skill": "Charged ATK",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        0.8
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Charged ATK",
                "AttGrp": "Independent",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 120.0,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Spear",
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
                "Poise": 150.0,
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
                "Skill": "Charged ATK (Hit Shield)",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Charged ATK",
                "AttGrp": "Independent",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 120.0,
                "ForceType": 3,
                "Force": [
                    655.0,
                    800.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Spear",
                "AttackType": "Melee"
            }
        ]
    }
}