// Auto Generated

var _AvatarDataConfig_ = {
    "Sethos": {
        "BallList": [
            {
                "When": "Elemental Skill Cast",
                "DropArray": [
                    {
                        "Num": 2,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD",
                "CD": 0.5
            }
        ],
        "EndureList": [
            {
                "Skill": "Elemental Skill Motion",
                "Endure": 0.6
            }
        ],
        "WindZoneList": [],
        "OtherDataList": [
            "<b>Particle Generation:</b><br>- When E opening DMG hits a monster, generates 2 particles.",
            "<b>ICD:</b><br>- E opening DMG 1GU, independent<br>- Shadowpiercing Shot 2GU, independent<br>- Q Normal ATKs 1GU, default ICD (3 hits / 2.5s)",
            "<b>Interruption Resistance:</b><br>- During Elem Skill Animation 0.6"
        ]
    }
}

var _AvatarMats_ = {
    "Sethos": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104141": 1,
                "101224": 3,
                "112065": 3
            },
            {
                "202": 40000,
                "104142": 3,
                "113058": 2,
                "101224": 10,
                "112065": 15
            },
            {
                "202": 60000,
                "104142": 6,
                "113058": 4,
                "101224": 20,
                "112066": 12
            },
            {
                "202": 80000,
                "104143": 3,
                "113058": 8,
                "101224": 30,
                "112066": 18
            },
            {
                "202": 100000,
                "104143": 6,
                "113058": 12,
                "101224": 45,
                "112067": 12
            },
            {
                "202": 120000,
                "104144": 6,
                "113058": 20,
                "101224": 60,
                "112067": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104335": 3,
                "112065": 6
            },
            {
                "202": 17500,
                "104336": 2,
                "112066": 3
            },
            {
                "202": 25000,
                "104336": 4,
                "112066": 4
            },
            {
                "202": 30000,
                "104336": 6,
                "112066": 6
            },
            {
                "202": 37500,
                "104336": 9,
                "112066": 9
            },
            {
                "202": 120000,
                "104337": 4,
                "112067": 4,
                "113043": 1
            },
            {
                "202": 260000,
                "104337": 6,
                "112067": 6,
                "113043": 1
            },
            {
                "202": 450000,
                "104337": 12,
                "112067": 9,
                "113043": 2
            },
            {
                "202": 700000,
                "104337": 16,
                "112067": 12,
                "113043": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104335": 3,
                "112065": 6
            },
            {
                "202": 17500,
                "104336": 2,
                "112066": 3
            },
            {
                "202": 25000,
                "104336": 4,
                "112066": 4
            },
            {
                "202": 30000,
                "104336": 6,
                "112066": 6
            },
            {
                "202": 37500,
                "104336": 9,
                "112066": 9
            },
            {
                "202": 120000,
                "104337": 4,
                "112067": 4,
                "113043": 1
            },
            {
                "202": 260000,
                "104337": 6,
                "112067": 6,
                "113043": 1
            },
            {
                "202": 450000,
                "104337": 12,
                "112067": 9,
                "113043": 2
            },
            {
                "202": 700000,
                "104337": 16,
                "112067": 12,
                "113043": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104335": 3,
                "112065": 6
            },
            {
                "202": 17500,
                "104336": 2,
                "112066": 3
            },
            {
                "202": 25000,
                "104336": 4,
                "112066": 4
            },
            {
                "202": 30000,
                "104336": 6,
                "112066": 6
            },
            {
                "202": 37500,
                "104336": 9,
                "112066": 9
            },
            {
                "202": 120000,
                "104337": 4,
                "112067": 4,
                "113043": 1
            },
            {
                "202": 260000,
                "104337": 6,
                "112067": 6,
                "113043": 1
            },
            {
                "202": 450000,
                "104337": 12,
                "112067": 9,
                "113043": 2
            },
            {
                "202": 700000,
                "104337": 16,
                "112067": 12,
                "113043": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Sethos": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Royal Reed Bowmanship",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, the power of Electro will accumulate on the arrowhead before the arrow is fired. Has different effects based on how long the energy has been charged:<br> · Charge Level 1: Fires off an arrow carrying the power of lightning that deals <color style='color:#FFACFF;'>Electro DMG</color>.<br> · Charge Level 2: Fires off a <color style='color:#FFD780;'>Shadowpiercing Shot</color> which can pierce enemies, dealing <color style='color:#FFACFF;'>Electro DMG</color> to enemies along its path. After the Shadowpiercing Shot is fully charged, Sethos cannot move around.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "52.614%",
                                    "56.897%",
                                    "61.179%",
                                    "67.297%",
                                    "71.579%",
                                    "76.474%",
                                    "83.203%",
                                    "89.933%",
                                    "96.663%",
                                    "104.004%",
                                    "111.346%",
                                    "118.687%",
                                    "126.029%",
                                    "133.37%",
                                    "140.712%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "23.796%+26.608%",
                                    "25.733%+28.774%",
                                    "27.67%+30.94%",
                                    "30.437%+34.034%",
                                    "32.374%+36.2%",
                                    "34.587%+38.675%",
                                    "37.631%+42.078%",
                                    "40.675%+45.482%",
                                    "43.719%+48.885%",
                                    "47.039%+52.598%",
                                    "50.359%+56.311%",
                                    "53.68%+60.024%",
                                    "57.0%+63.736%",
                                    "60.321%+67.449%",
                                    "63.641%+71.162%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "73.987%",
                                    "80.0%",
                                    "86.031%",
                                    "94.634%",
                                    "100.656%",
                                    "107.539%",
                                    "117.002%",
                                    "126.466%",
                                    "135.929%",
                                    "146.253%",
                                    "156.576%",
                                    "166.9%",
                                    "177.224%",
                                    "187.548%",
                                    "197.871%"
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
                                "Desc": "Aimed Shot Charge Level 1",
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
                                "Desc": "Shadowpiercing Shot DMG",
                                "ParamLevelList": [
                                    "140.0% ATK+134.56% Elemental Mastery",
                                    "150.5% ATK+144.652% Elemental Mastery",
                                    "161.0% ATK+154.744% Elemental Mastery",
                                    "175.0% ATK+168.2% Elemental Mastery",
                                    "185.5% ATK+178.292% Elemental Mastery",
                                    "196.0% ATK+188.384% Elemental Mastery",
                                    "210.0% ATK+201.84% Elemental Mastery",
                                    "224.0% ATK+215.296% Elemental Mastery",
                                    "238.0% ATK+228.752% Elemental Mastery",
                                    "252.0% ATK+242.208% Elemental Mastery",
                                    "266.0% ATK+255.664% Elemental Mastery",
                                    "280.0% ATK+269.12% Elemental Mastery",
                                    "297.5% ATK+285.94% Elemental Mastery",
                                    "315.0% ATK+302.76% Elemental Mastery",
                                    "332.5% ATK+319.58% Elemental Mastery"
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
                        "Name": "Ancient Rite: Thunderous Roar of Sand",
                        "Desc": "Gathers the might of thunder, dealing <color style='color:#FFACFF;'>AoE Electro DMG</color> to enemies in front and quickly retreating. If this attack triggers Electro-Charged, Superconduct, Overloaded, Quicken, Aggravate, Hyperbloom, or Electro Swirl reactions, Sethos recovers a certain amount of Elemental Energy.<br><br><i>\"The God indwelt Priest, the Magi who turned pits to springs, the singers of the sea of sand still spread their stories... But I know those are not legends, for they are our ancestors.\"</i>",
                        "Num": 1,
                        "Lock": 8.0,
                        "Icon": "Skill_S_Sethos_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "115.6%",
                                    "124.27%",
                                    "132.94%",
                                    "144.5%",
                                    "153.17%",
                                    "161.84%",
                                    "173.4%",
                                    "184.96%",
                                    "196.52%",
                                    "208.08%",
                                    "219.64%",
                                    "231.2%",
                                    "245.65%",
                                    "260.1%",
                                    "274.55%"
                                ]
                            },
                            {
                                "Desc": "Energy Regeneration",
                                "ParamLevelList": [
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Secret Rite: Twilight Shadowpiercer",
                        "Desc": "Perform a secret rite, entering the \"Twilight Meditation\" state, during which Sethos's normal attacks will be converted into enemy-piercing <color style='color:#FFD780;'>Dusk Bolts</color>: Deal <color style='color:#FFACFF;'>Electro DMG</color> to opponents in its path, with DMG increased based on Sethos's Elemental Mastery.<br>DMG dealt by Dusk Bolts is considered Charged Attack DMG.<br><br><i>The archives of the Temple of Silence preserve many tomes left behind by Akhtamun, from the era of King Deshret. Many secret rituals of great power are recorded within, but even among the Temple of Silence, very few could master them.</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sethos_01",
                        "ParamDesc": [
                            {
                                "Desc": "Dusk Bolt DMG Increase",
                                "ParamLevelList": [
                                    "170.56% Elemental Mastery",
                                    "183.352% Elemental Mastery",
                                    "196.144% Elemental Mastery",
                                    "213.2% Elemental Mastery",
                                    "225.992% Elemental Mastery",
                                    "238.784% Elemental Mastery",
                                    "255.84% Elemental Mastery",
                                    "272.896% Elemental Mastery",
                                    "289.952% Elemental Mastery",
                                    "307.008% Elemental Mastery",
                                    "324.064% Elemental Mastery",
                                    "341.12% Elemental Mastery",
                                    "362.44% Elemental Mastery",
                                    "383.76% Elemental Mastery",
                                    "405.08% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Twilight Meditation Duration",
                                "ParamLevelList": [
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s"
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
                        "Name": "Black Kite's Enigma",
                        "Desc": "When Aiming, the charging time is decreased by 0.285s based on each point of Sethos's current Elemental Energy that is not over 20. Charging time can be reduced to a minimum of 0.3s through this method. If a <color style='color:#FFD780;'>Shadowpiercing Shot</color> is fired, consume the corresponding amount of Elemental Energy; if it is a Charge Level 1 shot, then consume 50% of the corresponding amount of Elemental Energy.",
                        "Icon": "UI_Talent_S_Sethos_05"
                    },
                    {
                        "Name": "The Sand King's Boon",
                        "Desc": "Every 15s, Sethos gains the \"Scorching Sandshade\" effect, increasing the DMG dealt by <color style='color:#FFD780;'>Shadowpiercing Shots</color> by 600% of Sethos's Elemental Mastery.<br>The Scorching Sandshade effect lasts for up to 5s, and will be removed after 4 Shadowpiercing Shots strike opponents. When the first Shadowpiercing Shot affected by Scorching Sandshade hits an opponent, the timer for Scorching Sandshade's expiration will be reset.",
                        "Icon": "UI_Talent_S_Sethos_06"
                    },
                    {
                        "Name": "Reflected Revelation",
                        "Desc": "Displays the location of nearby <color style='color:#FFD780;'>resources unique to Sumeru</color> on the mini-map.",
                        "Icon": "UI_Talent_S_Tighnari_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Spiritual Song of the Sealed Shrine",
                        "Desc": "The CRIT Rate of <color style='color:#FFD780;'>Shadowpiercing Shot</color> is increased by 15%.",
                        "Icon": "UI_Talent_S_Sethos_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Papyrus Scripture of Silent Secrets",
                        "Desc": "When the following conditions are met, Sethos gains a 15% <color style='color:#FFACFF;'>Electro DMG Bonus</color> for 10s (may stack up to 2 times, counted independently):<br> · Regaining Elemental Energy via <color style='color:#FFD780;'>Ancient Rite: Thunderous Roar of Sand</color>;<br> · Using <color style='color:#FFD780;'>Secret Rite: Twilight Shadowpiercer</color>;<br> · Consuming Elemental Energy through the Talent Black Kite's Enigma. You must first unlock the Passive Talent \"Black Kite's Enigma.\"",
                        "Icon": "UI_Talent_S_Sethos_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Rising Lunar Sage's Ode",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Normal Attack: Royal Reed Bowmanship</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sethos_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Collection of Benevolent Feathers",
                        "Desc": "When <color style='color:#FFD780;'>Shadowpiercing Shot</color> or <color style='color:#FFD780;'>Dusk Bolt</color> strike 2 or more opponents, all nearby party members gain 80 Elemental Mastery for 10s.",
                        "Icon": "UI_Talent_S_Sethos_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Record of the Desolate God's Burning Sands",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Secret Rite: Twilight Shadowpiercer</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sethos_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Tome of the Temple of the Roaming Sun",
                        "Desc": "After <color style='color:#FFD780;'>Shadowpiercing Shot</color> strikes an opponent, the Elemental Energy consumed by the Passive Talent Black Kite's Enigma will be returned. This effect can be triggered up to once every 15s. You must first unlock the Passive Talent \"Black Kite's Enigma.\"",
                        "Icon": "UI_Talent_S_Sethos_04"
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Royal Reed Bowmanship",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, the power of Electro will accumulate on the arrowhead before the arrow is fired. Has different effects based on how long the energy has been charged:<br> · Charge Level 1: Fires off an arrow carrying the power of lightning that deals <color style='color:#FFACFF;'>Electro DMG</color>.<br> · Charge Level 2: Fires off a <color style='color:#FFD780;'>Shadowpiercing Shot</color> which can pierce enemies, dealing <color style='color:#FFACFF;'>Electro DMG</color> to enemies along its path. After the Shadowpiercing Shot is fully charged, Sethos cannot move around.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "52.614%",
                                    "56.897%",
                                    "61.179%",
                                    "67.297%",
                                    "71.579%",
                                    "76.474%",
                                    "83.203%",
                                    "89.933%",
                                    "96.663%",
                                    "104.004%",
                                    "111.346%",
                                    "118.687%",
                                    "126.029%",
                                    "133.37%",
                                    "140.712%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "23.796%+26.608%",
                                    "25.733%+28.774%",
                                    "27.67%+30.94%",
                                    "30.437%+34.034%",
                                    "32.374%+36.2%",
                                    "34.587%+38.675%",
                                    "37.631%+42.078%",
                                    "40.675%+45.482%",
                                    "43.719%+48.885%",
                                    "47.039%+52.598%",
                                    "50.359%+56.311%",
                                    "53.68%+60.024%",
                                    "57.0%+63.736%",
                                    "60.321%+67.449%",
                                    "63.641%+71.162%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "73.987%",
                                    "80.0%",
                                    "86.031%",
                                    "94.634%",
                                    "100.656%",
                                    "107.539%",
                                    "117.002%",
                                    "126.466%",
                                    "135.929%",
                                    "146.253%",
                                    "156.576%",
                                    "166.9%",
                                    "177.224%",
                                    "187.548%",
                                    "197.871%"
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
                                "Desc": "Aimed Shot Charge Level 1",
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
                                "Desc": "Shadowpiercing Shot DMG",
                                "ParamLevelList": [
                                    "140.0% ATK+134.56% Elemental Mastery",
                                    "150.5% ATK+144.652% Elemental Mastery",
                                    "161.0% ATK+154.744% Elemental Mastery",
                                    "175.0% ATK+168.2% Elemental Mastery",
                                    "185.5% ATK+178.292% Elemental Mastery",
                                    "196.0% ATK+188.384% Elemental Mastery",
                                    "210.0% ATK+201.84% Elemental Mastery",
                                    "224.0% ATK+215.296% Elemental Mastery",
                                    "238.0% ATK+228.752% Elemental Mastery",
                                    "252.0% ATK+242.208% Elemental Mastery",
                                    "266.0% ATK+255.664% Elemental Mastery",
                                    "280.0% ATK+269.12% Elemental Mastery",
                                    "297.5% ATK+285.94% Elemental Mastery",
                                    "315.0% ATK+302.76% Elemental Mastery",
                                    "332.5% ATK+319.58% Elemental Mastery"
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
                        "Name": "Ancient Rite: The Thundering Sands",
                        "Desc": "Gathers the might of thunder, dealing <color style='color:#FFACFF;'>AoE Electro DMG</color> to enemies in front and quickly retreating. If this attack triggers Electro-Charged, Superconduct, Overloaded, Quicken, Aggravate, Hyperbloom, or Electro Swirl reactions, Sethos recovers a certain amount of Elemental Energy.<br><br><i>\"The God indwelt Priest, the Magi who turned pits to springs, the singers of the sea of sand still spread their stories... But I know those are not legends, for they are our ancestors.\"</i>",
                        "Num": 1,
                        "Lock": 8.0,
                        "Icon": "Skill_S_Sethos_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "115.6%",
                                    "124.27%",
                                    "132.94%",
                                    "144.5%",
                                    "153.17%",
                                    "161.84%",
                                    "173.4%",
                                    "184.96%",
                                    "196.52%",
                                    "208.08%",
                                    "219.64%",
                                    "231.2%",
                                    "245.65%",
                                    "260.1%",
                                    "274.55%"
                                ]
                            },
                            {
                                "Desc": "Energy Regeneration",
                                "ParamLevelList": [
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Secret Rite: Twilight Shadowpiercer",
                        "Desc": "Perform a secret rite, entering the \"Twilight Meditation\" state, during which Sethos's Normal Attacks will be converted into enemy-piercing <color style='color:#FFD780;'>Dusk Bolts</color>: Deal <color style='color:#FFACFF;'>Electro DMG</color> to opponents in its path, with DMG increased based on Sethos's Elemental Mastery.<br>DMG dealt by Dusk Bolts is considered Charged Attack DMG.<br>This effect will be canceled when Sethos leaves the field.<br><br><i>The archives of the Temple of Silence preserve many tomes left behind by Akhtamun, from the era of King Deshret. Many secret rituals of great power are recorded within, but even among the Temple of Silence, very few could master them.</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sethos_01",
                        "ParamDesc": [
                            {
                                "Desc": "Dusk Bolt DMG Increase",
                                "ParamLevelList": [
                                    "170.56% Elemental Mastery",
                                    "183.352% Elemental Mastery",
                                    "196.144% Elemental Mastery",
                                    "213.2% Elemental Mastery",
                                    "225.992% Elemental Mastery",
                                    "238.784% Elemental Mastery",
                                    "255.84% Elemental Mastery",
                                    "272.896% Elemental Mastery",
                                    "289.952% Elemental Mastery",
                                    "307.008% Elemental Mastery",
                                    "324.064% Elemental Mastery",
                                    "341.12% Elemental Mastery",
                                    "362.44% Elemental Mastery",
                                    "383.76% Elemental Mastery",
                                    "405.08% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Twilight Meditation Duration",
                                "ParamLevelList": [
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s"
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
                        "Name": "Black Kite's Enigma",
                        "Desc": "When Aiming, the charging time is decreased by 0.285s based on each point of Sethos's current Elemental Energy that is not over 20. Charging time can be reduced to a minimum of 0.3s through this method. If a <color style='color:#FFD780;'>Shadowpiercing Shot</color> is fired, consume the corresponding amount of Elemental Energy; if it is a Charge Level 1 shot, then consume 50% of the corresponding amount of Elemental Energy.",
                        "Icon": "UI_Talent_S_Sethos_05"
                    },
                    {
                        "Name": "The Sand King's Boon",
                        "Desc": "Every 15s, Sethos gains the \"Scorching Sandshade\" effect, increasing the DMG dealt by <color style='color:#FFD780;'>Shadowpiercing Shots</color> by 600% of Sethos's Elemental Mastery.<br>The Scorching Sandshade effect lasts for up to 5s, and will be removed after 4 Shadowpiercing Shots strike opponents. When the first Shadowpiercing Shot affected by Scorching Sandshade hits an opponent, the timer for Scorching Sandshade's expiration will be reset.",
                        "Icon": "UI_Talent_S_Sethos_06"
                    },
                    {
                        "Name": "Reflected Revelation",
                        "Desc": "Displays the location of nearby <color style='color:#FFD780;'>resources unique to Sumeru</color> on the mini-map.",
                        "Icon": "UI_Talent_S_Tighnari_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Sealed Shrine's Spiritsong",
                        "Desc": "The CRIT Rate of <color style='color:#FFD780;'>Shadowpiercing Shot</color> is increased by 15%.",
                        "Icon": "UI_Talent_S_Sethos_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Papyrus Scripture of Silent Secrets",
                        "Desc": "When the following conditions are met, Sethos gains a 15% <color style='color:#FFACFF;'>Electro DMG Bonus</color> for 10s (may stack up to 2 times, counted independently):<br> · Regaining Elemental Energy via <color style='color:#FFD780;'>Ancient Rite: The Thundering Sands</color>;<br> · Using <color style='color:#FFD780;'>Secret Rite: Twilight Shadowpiercer</color>;<br> · Consuming Elemental Energy through the Passive Talent \"Black Kite's Enigma.\" You must first unlock \"Black Kite's Enigma.\"",
                        "Icon": "UI_Talent_S_Sethos_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Ode to the Moonrise Sage",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Normal Attack: Royal Reed Bowmanship</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sethos_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Beneficent Plumage",
                        "Desc": "When <color style='color:#FFD780;'>Shadowpiercing Shot</color> or <color style='color:#FFD780;'>Dusk Bolt</color> strike 2 or more opponents, all nearby party members gain 80 Elemental Mastery for 10s.",
                        "Icon": "UI_Talent_S_Sethos_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Record of the Desolate God's Burning Sands",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Secret Rite: Twilight Shadowpiercer</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sethos_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Tome of the Sojourning Sun Temple",
                        "Desc": "After <color style='color:#FFD780;'>Shadowpiercing Shot</color> strikes an opponent, the Elemental Energy consumed by the Passive Talent \"Black Kite's Enigma\" will be returned. This effect can be triggered up to once every 15s. You must first unlock the Passive Talent \"Black Kite's Enigma.\"",
                        "Icon": "UI_Talent_S_Sethos_04"
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Royal Reed Archery",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, the power of Electro will accumulate on the arrowhead before the arrow is fired. Has different effects based on how long the energy has been charged:<br> · Charge Level 1: Fires off an arrow carrying the power of lightning that deals <color style='color:#FFACFF;'>Electro DMG</color>.<br> · Charge Level 2: Fires off a <color style='color:#FFD780;'>Shadowpiercing Shot</color> which can pierce enemies, dealing <color style='color:#FFACFF;'>Electro DMG</color> to enemies along its path. After the Shadowpiercing Shot is fully charged, Sethos cannot move around.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "52.614%",
                                    "56.897%",
                                    "61.179%",
                                    "67.297%",
                                    "71.579%",
                                    "76.474%",
                                    "83.203%",
                                    "89.933%",
                                    "96.663%",
                                    "104.004%",
                                    "111.346%",
                                    "118.687%",
                                    "126.029%",
                                    "133.37%",
                                    "140.712%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "23.796%+26.608%",
                                    "25.733%+28.774%",
                                    "27.67%+30.94%",
                                    "30.437%+34.034%",
                                    "32.374%+36.2%",
                                    "34.587%+38.675%",
                                    "37.631%+42.078%",
                                    "40.675%+45.482%",
                                    "43.719%+48.885%",
                                    "47.039%+52.598%",
                                    "50.359%+56.311%",
                                    "53.68%+60.024%",
                                    "57.0%+63.736%",
                                    "60.321%+67.449%",
                                    "63.641%+71.162%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "73.987%",
                                    "80.0%",
                                    "86.031%",
                                    "94.634%",
                                    "100.656%",
                                    "107.539%",
                                    "117.002%",
                                    "126.466%",
                                    "135.929%",
                                    "146.253%",
                                    "156.576%",
                                    "166.9%",
                                    "177.224%",
                                    "187.548%",
                                    "197.871%"
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
                                "Desc": "Aimed Shot Charge Level 1",
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
                                "Desc": "Shadowpiercing Shot DMG",
                                "ParamLevelList": [
                                    "140.0% ATK+134.56% Elemental Mastery",
                                    "150.5% ATK+144.652% Elemental Mastery",
                                    "161.0% ATK+154.744% Elemental Mastery",
                                    "175.0% ATK+168.2% Elemental Mastery",
                                    "185.5% ATK+178.292% Elemental Mastery",
                                    "196.0% ATK+188.384% Elemental Mastery",
                                    "210.0% ATK+201.84% Elemental Mastery",
                                    "224.0% ATK+215.296% Elemental Mastery",
                                    "238.0% ATK+228.752% Elemental Mastery",
                                    "252.0% ATK+242.208% Elemental Mastery",
                                    "266.0% ATK+255.664% Elemental Mastery",
                                    "280.0% ATK+269.12% Elemental Mastery",
                                    "297.5% ATK+285.94% Elemental Mastery",
                                    "315.0% ATK+302.76% Elemental Mastery",
                                    "332.5% ATK+319.58% Elemental Mastery"
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
                        "Name": "Ancient Rite: The Thundering Sands",
                        "Desc": "Gathers the might of thunder, dealing <color style='color:#FFACFF;'>AoE Electro DMG</color> and quickly retreating. If this attack triggers Electro-Charged, Superconduct, Overloaded, Quicken, Aggravate, Hyperbloom, or Electro Swirl reactions, Sethos recovers a certain amount of Elemental Energy.<br><br><i>\"The God indwelt Priest, the Magi who turned pits to springs, the singers of the sea of sand still spread their stories... But I know those are not legends, for they are our ancestors.\"</i>",
                        "Num": 1,
                        "Lock": 8.0,
                        "Icon": "Skill_S_Sethos_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "115.6%",
                                    "124.27%",
                                    "132.94%",
                                    "144.5%",
                                    "153.17%",
                                    "161.84%",
                                    "173.4%",
                                    "184.96%",
                                    "196.52%",
                                    "208.08%",
                                    "219.64%",
                                    "231.2%",
                                    "245.65%",
                                    "260.1%",
                                    "274.55%"
                                ]
                            },
                            {
                                "Desc": "Energy Regeneration",
                                "ParamLevelList": [
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Secret Rite: Twilight Shadowpiercer",
                        "Desc": "Perform a secret rite, entering the \"Twilight Meditation\" state, during which Sethos's Normal Attacks will be converted into enemy-piercing <color style='color:#FFD780;'>Dusk Bolts</color>: Deal <color style='color:#FFACFF;'>Electro DMG</color> to opponents in its path, with DMG increased based on Sethos's Elemental Mastery.<br>DMG dealt by Dusk Bolts is considered Charged Attack DMG.<br>This effect will be canceled when Sethos leaves the field.<br><br><i>The archives of the Temple of Silence preserve many tomes left behind by Akhtamun, from the era of King Deshret. Many secret rituals of great power are recorded within, but even among the Temple of Silence, very few could master them.</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sethos_01",
                        "ParamDesc": [
                            {
                                "Desc": "Dusk Bolt DMG Increase",
                                "ParamLevelList": [
                                    "196.16% Elemental Mastery",
                                    "210.872% Elemental Mastery",
                                    "225.584% Elemental Mastery",
                                    "245.2% Elemental Mastery",
                                    "259.912% Elemental Mastery",
                                    "274.624% Elemental Mastery",
                                    "294.24% Elemental Mastery",
                                    "313.856% Elemental Mastery",
                                    "333.472% Elemental Mastery",
                                    "353.088% Elemental Mastery",
                                    "372.704% Elemental Mastery",
                                    "392.32% Elemental Mastery",
                                    "416.84% Elemental Mastery",
                                    "441.36% Elemental Mastery",
                                    "465.88% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Twilight Meditation Duration",
                                "ParamLevelList": [
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s"
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
                        "Name": "Black Kite's Enigma",
                        "Desc": "When Aiming, the charging time is decreased by 0.285s based on each point of Sethos's current Elemental Energy. Charging time can be reduced to a minimum of 0.3s through this method and a maximum of 20 Energy can be tallied. If a <color style='color:#FFD780;'>Shadowpiercing Shot</color> is fired, consume the tallied amount of Elemental Energy; if it is a Charge Level 1 shot, then consume 50% of the tallied amount of Elemental Energy.",
                        "Icon": "UI_Talent_S_Sethos_05"
                    },
                    {
                        "Name": "The Sand King's Boon",
                        "Desc": "Sethos gains the \"Scorching Sandshade\" effect, increasing the DMG dealt by <color style='color:#FFD780;'>Shadowpiercing Shots</color> by 600% of Sethos's Elemental Mastery.<br>The Scorching Sandshade effect will be canceled when any of the following conditions are met:<br> ·  5s after a Shadowpiercing Shot first hits an opponent.<br> ·  After 4 Shadowpiercing Shots strike opponents.<br><br> When a Shadowpiercing Shot affected by Scorching Sandshade first hits an opponent, Sethos will regain Scorching Sandshade after 15s.",
                        "Icon": "UI_Talent_S_Sethos_06"
                    },
                    {
                        "Name": "Thoth's Revelation",
                        "Desc": "Displays the location of nearby <color style='color:#FFD780;'>resources unique to Sumeru</color> on the mini-map.",
                        "Icon": "UI_Talent_S_Tighnari_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Sealed Shrine's Spiritsong",
                        "Desc": "The CRIT Rate of <color style='color:#FFD780;'>Shadowpiercing Shot</color> is increased by 15%.",
                        "Icon": "UI_Talent_S_Sethos_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Papyrus Scripture of Silent Secrets",
                        "Desc": "When Sethos uses <color style='color:#FFD780;'>Secret Rite: Twilight Shadowpiercer</color> or meets any of the following conditions, he gains a 15% <color style='color:#FFACFF;'>Electro DMG Bonus</color> for 10s:<br> ·  Consuming Elemental Energy through the Passive Talent \"Black Kite's Enigma.\" You must first unlock \"Black Kite's Enigma.\"<br> ·  Regaining Elemental Energy via <color style='color:#FFD780;'>Ancient Rite: The Thundering Sands</color>.<br>When triggered multiple times, this <color style='color:#FFACFF;'>Electro DMG Bonus</color> effect can stack twice. Each stack duration is counted independently.",
                        "Icon": "UI_Talent_S_Sethos_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Ode to the Moonrise Sage",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Normal Attack: Royal Reed Archery</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sethos_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Beneficent Plumage",
                        "Desc": "When <color style='color:#FFD780;'>Shadowpiercing Shot</color> or <color style='color:#FFD780;'>Dusk Bolt</color> strike 2 or more opponents, all nearby party members gain 80 Elemental Mastery for 10s.",
                        "Icon": "UI_Talent_S_Sethos_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Record of the Desolate God's Burning Sands",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Secret Rite: Twilight Shadowpiercer</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sethos_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Pylon of the Sojourning Sun Temple",
                        "Desc": "After <color style='color:#FFD780;'>Shadowpiercing Shot</color> strikes an opponent, the Elemental Energy consumed by the Passive Talent \"Black Kite's Enigma\" will be returned. This effect can be triggered up to once every 15s. You must first unlock the Passive Talent \"Black Kite's Enigma.\"",
                        "Icon": "UI_Talent_S_Sethos_04"
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Name": "Normal Attack: Royal Reed Archery",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, the power of Electro will accumulate on the arrowhead before the arrow is fired. Has different effects based on how long the energy has been charged:<br> · Charge Level 1: Fires off an arrow carrying the power of lightning that deals <color style='color:#FFACFF;'>Electro DMG</color>.<br> · Charge Level 2: Fires off a <color style='color:#FFD780;'>Shadowpiercing Shot</color> which can pierce enemies, dealing <color style='color:#FFACFF;'>Electro DMG</color> to enemies along its path. After the Shadowpiercing Shot is fully charged, Sethos cannot move around.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "52.614%",
                                    "56.897%",
                                    "61.179%",
                                    "67.297%",
                                    "71.579%",
                                    "76.474%",
                                    "83.203%",
                                    "89.933%",
                                    "96.663%",
                                    "104.004%",
                                    "111.346%",
                                    "118.687%",
                                    "126.029%",
                                    "133.37%",
                                    "140.712%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "23.796%+26.608%",
                                    "25.733%+28.774%",
                                    "27.67%+30.94%",
                                    "30.437%+34.034%",
                                    "32.374%+36.2%",
                                    "34.587%+38.675%",
                                    "37.631%+42.078%",
                                    "40.675%+45.482%",
                                    "43.719%+48.885%",
                                    "47.039%+52.598%",
                                    "50.359%+56.311%",
                                    "53.68%+60.024%",
                                    "57.0%+63.736%",
                                    "60.321%+67.449%",
                                    "63.641%+71.162%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "73.987%",
                                    "80.0%",
                                    "86.031%",
                                    "94.634%",
                                    "100.656%",
                                    "107.539%",
                                    "117.002%",
                                    "126.466%",
                                    "135.929%",
                                    "146.253%",
                                    "156.576%",
                                    "166.9%",
                                    "177.224%",
                                    "187.548%",
                                    "197.871%"
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
                                "Desc": "Aimed Shot Charge Level 1",
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
                                "Desc": "Shadowpiercing Shot DMG",
                                "ParamLevelList": [
                                    "140.0% ATK+134.56% Elemental Mastery",
                                    "150.5% ATK+144.652% Elemental Mastery",
                                    "161.0% ATK+154.744% Elemental Mastery",
                                    "175.0% ATK+168.2% Elemental Mastery",
                                    "185.5% ATK+178.292% Elemental Mastery",
                                    "196.0% ATK+188.384% Elemental Mastery",
                                    "210.0% ATK+201.84% Elemental Mastery",
                                    "224.0% ATK+215.296% Elemental Mastery",
                                    "238.0% ATK+228.752% Elemental Mastery",
                                    "252.0% ATK+242.208% Elemental Mastery",
                                    "266.0% ATK+255.664% Elemental Mastery",
                                    "280.0% ATK+269.12% Elemental Mastery",
                                    "297.5% ATK+285.94% Elemental Mastery",
                                    "315.0% ATK+302.76% Elemental Mastery",
                                    "332.5% ATK+319.58% Elemental Mastery"
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
                        "Name": "Ancient Rite: The Thundering Sands",
                        "Desc": "Gathers the might of thunder, dealing <color style='color:#FFACFF;'>AoE Electro DMG</color> and quickly retreating. If this attack triggers Electro-Charged, Superconduct, Overloaded, Quicken, Aggravate, Hyperbloom, or Electro Swirl reactions, Sethos recovers a certain amount of Elemental Energy.<br><br><i>\"The God indwelt Priest, the Magi who turned pits to springs, the singers of the sea of sand still spread their stories... But I know those are not legends, for they are our ancestors.\"</i>",
                        "Num": 1,
                        "Lock": 8.0,
                        "Icon": "Skill_S_Sethos_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "115.6%",
                                    "124.27%",
                                    "132.94%",
                                    "144.5%",
                                    "153.17%",
                                    "161.84%",
                                    "173.4%",
                                    "184.96%",
                                    "196.52%",
                                    "208.08%",
                                    "219.64%",
                                    "231.2%",
                                    "245.65%",
                                    "260.1%",
                                    "274.55%"
                                ]
                            },
                            {
                                "Desc": "Energy Regeneration",
                                "ParamLevelList": [
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0",
                                    "12.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Secret Rite: Twilight Shadowpiercer",
                        "Desc": "Perform a secret rite, entering the \"Twilight Meditation\" state, during which Sethos's Normal Attacks will be converted into enemy-piercing <color style='color:#FFD780;'>Dusk Bolts</color>: Deal <color style='color:#FFACFF;'>Electro DMG</color> to opponents in its path, with DMG increased based on Sethos's Elemental Mastery.<br>DMG dealt by Dusk Bolts is considered Charged Attack DMG.<br>This effect will be canceled when Sethos leaves the field.<br><br><i>The archives of the Temple of Silence preserve many tomes left behind by Akhtamun, from the era of King Deshret. Many secret rituals of great power are recorded within, but even among the Temple of Silence, very few could master them.</i>",
                        "Num": 1,
                        "Lock": 15.0,
                        "Icon": "Skill_E_Sethos_01",
                        "ParamDesc": [
                            {
                                "Desc": "Dusk Bolt DMG Increase",
                                "ParamLevelList": [
                                    "196.16% Elemental Mastery",
                                    "210.872% Elemental Mastery",
                                    "225.584% Elemental Mastery",
                                    "245.2% Elemental Mastery",
                                    "259.912% Elemental Mastery",
                                    "274.624% Elemental Mastery",
                                    "294.24% Elemental Mastery",
                                    "313.856% Elemental Mastery",
                                    "333.472% Elemental Mastery",
                                    "353.088% Elemental Mastery",
                                    "372.704% Elemental Mastery",
                                    "392.32% Elemental Mastery",
                                    "416.84% Elemental Mastery",
                                    "441.36% Elemental Mastery",
                                    "465.88% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Twilight Meditation Duration",
                                "ParamLevelList": [
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s",
                                    "8.0s"
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
                        "Name": "Black Kite's Enigma",
                        "Desc": "When Aiming, the charging time is decreased by 0.285s based on each point of Sethos's current Elemental Energy. Charging time can be reduced to a minimum of 0.3s through this method and a maximum of 20 Energy can be tallied. If a <color style='color:#FFD780;'>Shadowpiercing Shot</color> is fired, consume the tallied amount of Elemental Energy; if it is a Charge Level 1 shot, then consume 50% of the tallied amount of Elemental Energy.",
                        "Icon": "UI_Talent_S_Sethos_05"
                    },
                    {
                        "Name": "The Sand King's Boon",
                        "Desc": "Sethos gains the \"Scorching Sandshade\" effect, increasing the DMG dealt by <color style='color:#FFD780;'>Shadowpiercing Shots</color> by 700% of Sethos's Elemental Mastery.<br>The Scorching Sandshade effect will be canceled when any of the following conditions are met:<br> ·  5s after a Shadowpiercing Shot first hits an opponent.<br> ·  After 4 Shadowpiercing Shots strike opponents.<br><br>When a Shadowpiercing Shot affected by Scorching Sandshade first hits an opponent, Sethos will regain Scorching Sandshade after 15s.",
                        "Icon": "UI_Talent_S_Sethos_06"
                    },
                    {
                        "Name": "Thoth's Revelation",
                        "Desc": "Displays the location of nearby <color style='color:#FFD780;'>resources unique to Sumeru</color> on the mini-map.",
                        "Icon": "UI_Talent_S_Tighnari_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Sealed Shrine's Spiritsong",
                        "Desc": "The CRIT Rate of <color style='color:#FFD780;'>Shadowpiercing Shot</color> is increased by 15%.",
                        "Icon": "UI_Talent_S_Sethos_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Papyrus Scripture of Silent Secrets",
                        "Desc": "When any of the following conditions are met, Sethos gains a 15% <color style='color:#FFACFF;'>Electro DMG Bonus</color> for 10s that may stack twice, with each stack duration counted independently:<br> ·  Consuming Elemental Energy through Aimed Shots; you must first unlock \"Black Kite's Enigma\" to trigger this condition.<br> ·  Regaining Elemental Energy by triggering Elemental Reactions using <color style='color:#FFD780;'>Ancient Rite: The Thundering Sands</color>.<br> ·  Using <color style='color:#FFD780;'>Secret Rite: Twilight Shadowpiercer</color>.",
                        "Icon": "UI_Talent_S_Sethos_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Ode to the Moonrise Sage",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Normal Attack: Royal Reed Archery</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sethos_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Beneficent Plumage",
                        "Desc": "When a <color style='color:#FFD780;'>Shadowpiercing Shot</color> or <color style='color:#FFD780;'>Dusk Bolt</color> strikes 2 or more opponents, all nearby party members gain 80 Elemental Mastery for 10s.",
                        "Icon": "UI_Talent_S_Sethos_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Record of the Desolate God's Burning Sands",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Secret Rite: Twilight Shadowpiercer</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sethos_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Pylon of the Sojourning Sun Temple",
                        "Desc": "After <color style='color:#FFD780;'>Shadowpiercing Shot</color> strikes an opponent, the Elemental Energy consumed by the Passive Talent \"Black Kite's Enigma\" will be returned. This effect can be triggered up to once every 15s. You must first unlock the Passive Talent \"Black Kite's Enigma.\"",
                        "Icon": "UI_Talent_S_Sethos_04"
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Royal Reed Archery",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 3 consecutive shots with a bow.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Performs a more precise <color style='color:#FFD780;'>Aimed Shot</color> with increased DMG.<br>While aiming, the power of Electro will accumulate on the arrowhead before the arrow is fired. Has different effects based on how long the energy has been charged:<br> · Charge Level 1: Fires off an arrow carrying the power of lightning that deals <color style='color:#FFACFF;'>Electro DMG</color>.<br> · Charge Level 2: Fires off a <color style='color:#FFD780;'>Shadowpiercing Shot</color> which can pierce enemies, dealing <color style='color:#FFACFF;'>Electro DMG</color> to enemies along its path. After the Shadowpiercing Shot is fully charged, Sethos cannot move around.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_02",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "52.6139%",
                                    "56.8965%",
                                    "61.179%",
                                    "67.2969%",
                                    "71.5794%",
                                    "76.4737%",
                                    "83.2034%",
                                    "89.9331%",
                                    "96.6628%",
                                    "104.0043%",
                                    "111.3458%",
                                    "118.6873%",
                                    "126.0287%",
                                    "133.3702%",
                                    "140.7117%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "23.7962%+26.6084%",
                                    "25.7331%+28.7742%",
                                    "27.67%+30.94%",
                                    "30.437%+34.034%",
                                    "32.3739%+36.1998%",
                                    "34.5875%+38.675%",
                                    "37.6312%+42.0784%",
                                    "40.6749%+45.4818%",
                                    "43.7186%+48.8852%",
                                    "47.039%+52.598%",
                                    "50.3594%+56.3108%",
                                    "53.6798%+60.0236%",
                                    "57.0%+63.7364%",
                                    "60.3206%+67.4492%",
                                    "63.641%+71.162%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "73.9867%",
                                    "80.0088%",
                                    "86.031%",
                                    "94.6341%",
                                    "100.6563%",
                                    "107.5387%",
                                    "117.0022%",
                                    "126.4656%",
                                    "135.929%",
                                    "146.2527%",
                                    "156.5764%",
                                    "166.9001%",
                                    "177.2239%",
                                    "187.5476%",
                                    "197.8713%"
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
                                "Desc": "Aimed Shot Charge Level 1",
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
                                "Desc": "Shadowpiercing Shot DMG",
                                "ParamLevelList": [
                                    "140.0% ATK+134.56% Elemental Mastery",
                                    "150.5% ATK+144.652% Elemental Mastery",
                                    "161.0% ATK+154.744% Elemental Mastery",
                                    "175.0% ATK+168.2% Elemental Mastery",
                                    "185.5% ATK+178.292% Elemental Mastery",
                                    "196.0% ATK+188.384% Elemental Mastery",
                                    "210.0% ATK+201.84% Elemental Mastery",
                                    "224.0% ATK+215.296% Elemental Mastery",
                                    "238.0% ATK+228.752% Elemental Mastery",
                                    "252.0% ATK+242.208% Elemental Mastery",
                                    "266.0% ATK+255.664% Elemental Mastery",
                                    "280.0% ATK+269.12% Elemental Mastery",
                                    "297.5% ATK+285.94% Elemental Mastery",
                                    "315.0% ATK+302.76% Elemental Mastery",
                                    "332.5% ATK+319.58% Elemental Mastery"
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
                        "Name": "Ancient Rite: The Thundering Sands",
                        "Desc": "Gathers the might of thunder, dealing <color style='color:#FFACFF;'>AoE Electro DMG</color> and quickly retreating. If this attack triggers Electro-Charged, Lunar-Charged, Superconduct, Overloaded, Quicken, Aggravate, Hyperbloom, or Electro Swirl reactions, Sethos recovers a certain amount of Elemental Energy.<br><br><i>\"The God indwelt Priest, the Magi who turned pits to springs, the singers of the sea of sand still spread their stories... But I know those are not legends, for they are our ancestors.\"</i>",
                        "Icon": "Skill_S_Sethos_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "115.6%",
                                    "124.27%",
                                    "132.94%",
                                    "144.5%",
                                    "153.17%",
                                    "161.84%",
                                    "173.4%",
                                    "184.96%",
                                    "196.52%",
                                    "208.08%",
                                    "219.64%",
                                    "231.2%",
                                    "245.65%",
                                    "260.1%",
                                    "274.55%"
                                ]
                            },
                            {
                                "Desc": "Energy Regeneration",
                                "ParamLevelList": [
                                    "12",
                                    "12",
                                    "12",
                                    "12",
                                    "12",
                                    "12",
                                    "12",
                                    "12",
                                    "12",
                                    "12",
                                    "12",
                                    "12",
                                    "12",
                                    "12",
                                    "12"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Secret Rite: Twilight Shadowpiercer",
                        "Desc": "Perform a secret rite, entering the \"Twilight Meditation\" state, during which Sethos's Normal Attacks will be converted into enemy-piercing <color style='color:#FFD780;'>Dusk Bolts</color>: Deal <color style='color:#FFACFF;'>Electro DMG</color> to opponents in its path, with DMG increased based on Sethos's Elemental Mastery.<br>Sethos cannot perform Aimed Shots while in this state.<br>DMG dealt by Dusk Bolts is considered Charged Attack DMG.<br>This effect will be canceled when Sethos leaves the field.<br><br><i>The archives of the Temple of Silence preserve many tomes left behind by Akhtamun, from the era of King Deshret. Many secret rituals of great power are recorded within, but even among the Temple of Silence, very few could master them.</i>",
                        "Icon": "Skill_E_Sethos_01",
                        "ParamDesc": [
                            {
                                "Desc": "Dusk Bolt DMG Increase",
                                "ParamLevelList": [
                                    "196.16% Elemental Mastery",
                                    "210.872% Elemental Mastery",
                                    "225.584% Elemental Mastery",
                                    "245.2% Elemental Mastery",
                                    "259.912% Elemental Mastery",
                                    "274.624% Elemental Mastery",
                                    "294.24% Elemental Mastery",
                                    "313.856% Elemental Mastery",
                                    "333.472% Elemental Mastery",
                                    "353.088% Elemental Mastery",
                                    "372.704% Elemental Mastery",
                                    "392.32% Elemental Mastery",
                                    "416.84% Elemental Mastery",
                                    "441.36% Elemental Mastery",
                                    "465.88% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Twilight Meditation Duration",
                                "ParamLevelList": [
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s",
                                    "8s"
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
                        "Name": "Black Kite's Enigma",
                        "Desc": "When Aiming, the charging time is decreased by 0.285s based on each point of Sethos's current Elemental Energy. Charging time can be reduced to a minimum of 0.3s through this method and a maximum of 20 Energy can be tallied. If a <color style='color:#FFD780;'>Shadowpiercing Shot</color> is fired, consume the tallied amount of Elemental Energy; if it is a Charge Level 1 shot, then consume 50% of the tallied amount of Elemental Energy.",
                        "Icon": "UI_Talent_S_Sethos_05"
                    },
                    {
                        "Name": "The Sand King's Boon",
                        "Desc": "Sethos gains the \"Scorching Sandshade\" effect, increasing the DMG dealt by <color style='color:#FFD780;'>Shadowpiercing Shots</color> by 700% of Sethos's Elemental Mastery.<br>The Scorching Sandshade effect will be canceled when any of the following conditions are met:<br> ·  5s after a Shadowpiercing Shot first hits an opponent.<br> ·  After 4 Shadowpiercing Shots strike opponents.<br><br>When a Shadowpiercing Shot affected by Scorching Sandshade first hits an opponent, Sethos will regain Scorching Sandshade after 15s.",
                        "Icon": "UI_Talent_S_Sethos_06"
                    },
                    {
                        "Name": "Thoth's Revelation",
                        "Desc": "Displays the location of nearby <color style='color:#FFD780;'>resources unique to Sumeru</color> on the mini-map.",
                        "Icon": "UI_Talent_S_Tighnari_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Sealed Shrine's Spiritsong",
                        "Desc": "The CRIT Rate of <color style='color:#FFD780;'>Shadowpiercing Shot</color> is increased by 15%.",
                        "Icon": "UI_Talent_S_Sethos_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Papyrus Scripture of Silent Secrets",
                        "Desc": "When any of the following conditions are met, Sethos gains a 15% <color style='color:#FFACFF;'>Electro DMG Bonus</color> for 10s that may stack twice, with each stack duration counted independently:<br> ·  Consuming Elemental Energy through Aimed Shots. You must first unlock the Ascension Talent \"Black Kite's Enigma\" to trigger this condition.<br> ·  Regaining Elemental Energy by triggering Elemental Reactions using <color style='color:#FFD780;'>Ancient Rite: The Thundering Sands</color>.<br> ·  Using <color style='color:#FFD780;'>Secret Rite: Twilight Shadowpiercer</color>.",
                        "Icon": "UI_Talent_S_Sethos_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Ode to the Moonrise Sage",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Normal Attack: Royal Reed Archery</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sethos_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Beneficent Plumage",
                        "Desc": "When a <color style='color:#FFD780;'>Shadowpiercing Shot</color> or <color style='color:#FFD780;'>Dusk Bolt</color> strikes 2 or more opponents, all nearby party members gain 80 Elemental Mastery for 10s.",
                        "Icon": "UI_Talent_S_Sethos_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Record of the Desolate God's Burning Sands",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Secret Rite: Twilight Shadowpiercer</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Sethos_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Pylon of the Sojourning Sun Temple",
                        "Desc": "After <color style='color:#FFD780;'>Shadowpiercing Shot</color> strikes an opponent, the Elemental Energy consumed by the Ascension Talent \"Black Kite's Enigma\" will be returned. This effect can be triggered up to once every 15s. You must first unlock the Ascension Talent \"Black Kite's Enigma.\"",
                        "Icon": "UI_Talent_S_Sethos_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Sethos": {
        "AttackList": [
            {
                "Skill": "Elem Skill",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        4.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 50.0,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Default",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Shadowpiercing Shot",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Charged ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Elec",
                "GU": 2.0,
                "Poise": 150.0,
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
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Q Normal ATK 1",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 18.879,
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
                "Skill": "Q Normal ATK 2-1",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 8.791,
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
                "Skill": "Q Normal ATK 2-2",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 8.791,
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
                "Skill": "Q Normal ATK 3",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Q Group",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 25.809,
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
                "Poise": 18.879,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 2-1",
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
                "Poise": 8.791,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 2-2",
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
                "Poise": 8.791,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
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
                "Poise": 25.809,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Aimed Shot",
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Aimed Charge I",
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
                "Element": "Elec",
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
                "AttackType": "Default",
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            }
        ]
    }
}