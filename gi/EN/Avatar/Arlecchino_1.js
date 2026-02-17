// Auto Generated

var _AvatarDataConfig_ = {
    "Arlecchino": {
        "BallList": [
            {
                "When": "Elemental Skill Casting DMG",
                "DropArray": [
                    {
                        "Num": 5,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD",
                "CD": 1.5
            }
        ],
        "EndureList": [
            {
                "Skill": "C1 Red Death NA/CA",
                "Endure": 0
            },
            {
                "Skill": "Elemental Skill Motion",
                "Endure": 0
            },
            {
                "Skill": "Special Charged ATK Motion",
                "Endure": 0.2
            }
        ],
        "WindZoneList": [
            {
                "Skill": "Burst Casting Push",
                "Target": "Monsters and the Grass, weight ≤ 250",
                "Duration": 0,
                "Radius": 3.0,
                "Inner": 0.0,
                "Strength": -3.0,
                "Attenuation": 2.0,
                "Reverse": false
            }
        ],
        "OtherDataList": [
            "Elemental Skill's DoT (Blood-Debt Directive) does not generate particles.",
            "Constellation 2's Balemoon Bloodfire applies 1GU Pyro <b>independently</b>, but <b>does not count as Normal ATK, Charged ATK, Plunge ATK, Elemental Skill or Elemental Burst DMG</b>, and thus cannot generate particles and does not take boosts given to a certain skill type (e.g. Elemental Skill DMG Bonus).",
            "C6 Crit boost does not stack. If triggered again when still active, it will only refresh its remaining duration."
        ]
    }
}

var _AvatarMats_ = {
    "Arlecchino": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104111": 1,
                "101236": 3,
                "112032": 3
            },
            {
                "202": 40000,
                "104112": 3,
                "113059": 2,
                "101236": 10,
                "112032": 15
            },
            {
                "202": 60000,
                "104112": 6,
                "113059": 4,
                "101236": 20,
                "112033": 12
            },
            {
                "202": 80000,
                "104113": 3,
                "113059": 8,
                "101236": 30,
                "112033": 18
            },
            {
                "202": 100000,
                "104113": 6,
                "113059": 12,
                "101236": 45,
                "112034": 12
            },
            {
                "202": 120000,
                "104114": 6,
                "113059": 20,
                "101236": 60,
                "112034": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104344": 3,
                "112032": 6
            },
            {
                "202": 17500,
                "104345": 2,
                "112033": 3
            },
            {
                "202": 25000,
                "104345": 4,
                "112033": 4
            },
            {
                "202": 30000,
                "104345": 6,
                "112033": 6
            },
            {
                "202": 37500,
                "104345": 9,
                "112033": 9
            },
            {
                "202": 120000,
                "104346": 4,
                "112034": 4,
                "113060": 1
            },
            {
                "202": 260000,
                "104346": 6,
                "112034": 6,
                "113060": 1
            },
            {
                "202": 450000,
                "104346": 12,
                "112034": 9,
                "113060": 2
            },
            {
                "202": 700000,
                "104346": 16,
                "112034": 12,
                "113060": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104344": 3,
                "112032": 6
            },
            {
                "202": 17500,
                "104345": 2,
                "112033": 3
            },
            {
                "202": 25000,
                "104345": 4,
                "112033": 4
            },
            {
                "202": 30000,
                "104345": 6,
                "112033": 6
            },
            {
                "202": 37500,
                "104345": 9,
                "112033": 9
            },
            {
                "202": 120000,
                "104346": 4,
                "112034": 4,
                "113060": 1
            },
            {
                "202": 260000,
                "104346": 6,
                "112034": 6,
                "113060": 1
            },
            {
                "202": 450000,
                "104346": 12,
                "112034": 9,
                "113060": 2
            },
            {
                "202": 700000,
                "104346": 16,
                "112034": 12,
                "113060": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104344": 3,
                "112032": 6
            },
            {
                "202": 17500,
                "104345": 2,
                "112033": 3
            },
            {
                "202": 25000,
                "104345": 4,
                "112033": 4
            },
            {
                "202": 30000,
                "104345": 6,
                "112033": 6
            },
            {
                "202": 37500,
                "104345": 9,
                "112033": 9
            },
            {
                "202": 120000,
                "104346": 4,
                "112034": 4,
                "113060": 1
            },
            {
                "202": 260000,
                "104346": 6,
                "112034": 6,
                "113060": 1
            },
            {
                "202": 450000,
                "104346": 12,
                "112034": 9,
                "113060": 2
            },
            {
                "202": 700000,
                "104346": 16,
                "112034": 12,
                "113060": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Arlecchino": {
        "Ver": {
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Invitation to a Beheading",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 6 consecutive spear strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a fixed amount of Stamina, dashing toward a nearby opponent and cleaving once.<br>Continuously holding this button will cause Arlecchino to consume Stamina and engage in up to 5s of high-speed movement.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.<br><br><color style='color:#FFD780;'>Masque of the Red Death</color><br>When Arlecchino has a Bond of Life equal to or greater than 30% of her Max HP, she will enter the \"Masque of the Red Death\" state, where her Normal, Charged, and Plunging Attacks will be converted to deal <color style='color:#FF9999;'>Pyro DMG</color>. This cannot be overridden.<br>When in the \"Masque of the Red Death\" state, Arlecchino's Normal Attacks will deal extra DMG to opponents on hit that scales off her ATK multiplied by a certain ratio of her current Bond of Life percentage. This will consume 7.5% of said current Bond of Life. Her Bond of Life can be consumed this way every 0.03s. When her Bond of Life is consumed in this manner, All Is Ash's CD will decrease by 0.8s.",
                        "Icon": "Skill_A_03",
                        "ParamDesc": [
                            {
                                "Desc": "Masque of the Red Death Increase",
                                "ParamLevelList": [
                                    "120.4%",
                                    "130.2%",
                                    "140.0%",
                                    "154.0%",
                                    "163.8%",
                                    "175.0%",
                                    "190.4%",
                                    "205.8%",
                                    "221.2%",
                                    "238.0%",
                                    "254.8%",
                                    "271.6%",
                                    "288.4%",
                                    "305.2%",
                                    "322.0%"
                                ]
                            },
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "47.5004%",
                                    "51.3667%",
                                    "55.233%",
                                    "60.7563%",
                                    "64.6226%",
                                    "69.0412%",
                                    "75.1169%",
                                    "81.1925%",
                                    "87.2681%",
                                    "93.8961%",
                                    "100.5241%",
                                    "107.152%",
                                    "113.78%",
                                    "120.4079%",
                                    "127.0359%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "52.1057%",
                                    "56.3468%",
                                    "60.588%",
                                    "66.6468%",
                                    "70.888%",
                                    "75.735%",
                                    "82.3997%",
                                    "89.0644%",
                                    "95.729%",
                                    "103.0%",
                                    "110.2702%",
                                    "117.5407%",
                                    "124.8113%",
                                    "132.0818%",
                                    "139.3524%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "65.3858%",
                                    "70.7079%",
                                    "76.03%",
                                    "83.633%",
                                    "88.9551%",
                                    "95.0375%",
                                    "103.4008%",
                                    "111.7641%",
                                    "120.1274%",
                                    "129.251%",
                                    "138.3746%",
                                    "147.4982%",
                                    "156.6218%",
                                    "165.7454%",
                                    "174.869%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "37.1451%+37.1451%",
                                    "40.1686%+40.1686%",
                                    "43.192%+43.192%",
                                    "47.5112%+47.5112%",
                                    "50.5346%+50.5346%",
                                    "53.99%+53.99%",
                                    "58.7411%+58.7411%",
                                    "63.4922%+63.4922%",
                                    "68.2434%+68.2434%",
                                    "73.4264%+73.4264%",
                                    "78.6094%+78.6094%",
                                    "83.7925%+83.7925%",
                                    "88.9755%+88.9755%",
                                    "94.1586%+94.1586%",
                                    "99.3416%+99.3416%"
                                ]
                            },
                            {
                                "Desc": "5-Hit DMG",
                                "ParamLevelList": [
                                    "69.9816%",
                                    "75.6778%",
                                    "81.374%",
                                    "89.5114%",
                                    "95.2076%",
                                    "101.7175%",
                                    "110.6686%",
                                    "119.6198%",
                                    "128.5709%",
                                    "138.3358%",
                                    "148.1007%",
                                    "157.8656%",
                                    "167.6304%",
                                    "177.3953%",
                                    "187.1602%"
                                ]
                            },
                            {
                                "Desc": "6-Hit DMG",
                                "ParamLevelList": [
                                    "85.3782%",
                                    "92.3276%",
                                    "99.277%",
                                    "109.2047%",
                                    "116.1541%",
                                    "124.0962%",
                                    "135.0167%",
                                    "145.9372%",
                                    "156.8577%",
                                    "168.7709%",
                                    "180.6841%",
                                    "192.5974%",
                                    "204.5106%",
                                    "216.4239%",
                                    "228.3371%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "90.816%",
                                    "98.208%",
                                    "105.6%",
                                    "116.16%",
                                    "123.552%",
                                    "132.0%",
                                    "143.616%",
                                    "155.232%",
                                    "166.848%",
                                    "179.52%",
                                    "192.192%",
                                    "204.864%",
                                    "217.536%",
                                    "230.208%",
                                    "242.88%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
                                "ParamLevelList": [
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25",
                                    "25"
                                ]
                            },
                            {
                                "Desc": "High-Speed Movement Stamina Cost",
                                "ParamLevelList": [
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s",
                                    "40/s"
                                ]
                            },
                            {
                                "Desc": "Plunge DMG",
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
                                "Desc": "Low/High Plunge DMG",
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
                        "Name": "All Is Ash",
                        "Desc": "Summons forth Balemoon Bloodfire, dealing <color style='color:#FF9999;'>Pyro DMG</color> to multiple nearby opponents and performing a dash-cleave against one of them, dealing <color style='color:#FF9999;'>AoE Pyro DMG</color>.<br>Opponents hit by the aforementioned attack will have a Blood-Debt Directive applied to them.<br><br><color style='color:#FFD780;'>Blood-Debt Directive</color><br> · Lasts 30s. Every 5s, it will deal 1 instance of <color style='color:#FF9999;'>Pyro DMG</color> to the opponent. Max 2 instances. This DMG will be considered Elemental Skill DMG.<br> · When Arlecchino uses a Charged Attack or her Elemental Burst, Balemoon Rising, she will absorb and clear nearby Blood-Debt Directives. Each Directive absorbed grants her a Bond of Life worth 65% of her Max HP.<br> · The maximum value of the Bond of Life she can be granted through Blood-Debt Directives within 35s after using her Elemental Skill is 145% of her Max HP. Using the Elemental Skill again during this duration will restart the count on duration and the limit on the value of Bond of Life she may gain from Blood-Debt Directives.<br><br><i>As she sees it, not every grain of wheat that falls upon the earth will grow into an ear, while those who obstruct her, once burned to ashes, can certainly be used to nourish flowers.</i>",
                        "Icon": "Skill_S_Arlecchino_01",
                        "ParamDesc": [
                            {
                                "Desc": "Spike DMG",
                                "ParamLevelList": [
                                    "14.84%",
                                    "15.953%",
                                    "17.066%",
                                    "18.55%",
                                    "19.663%",
                                    "20.776%",
                                    "22.26%",
                                    "23.744%",
                                    "25.228%",
                                    "26.712%",
                                    "28.196%",
                                    "29.68%",
                                    "31.535%",
                                    "33.39%",
                                    "35.245%"
                                ]
                            },
                            {
                                "Desc": "Cleave DMG",
                                "ParamLevelList": [
                                    "133.56%",
                                    "143.577%",
                                    "153.594%",
                                    "166.95%",
                                    "176.967%",
                                    "186.984%",
                                    "200.34%",
                                    "213.696%",
                                    "227.052%",
                                    "240.408%",
                                    "253.764%",
                                    "267.12%",
                                    "283.815%",
                                    "300.51%",
                                    "317.205%"
                                ]
                            },
                            {
                                "Desc": "Blood-Debt Directive DMG",
                                "ParamLevelList": [
                                    "31.8%",
                                    "34.185%",
                                    "36.57%",
                                    "39.75%",
                                    "42.135%",
                                    "44.52%",
                                    "47.7%",
                                    "50.88%",
                                    "54.06%",
                                    "57.24%",
                                    "60.42%",
                                    "63.6%",
                                    "67.575%",
                                    "71.55%",
                                    "75.525%"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s",
                                    "30s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Balemoon Rising",
                        "Desc": "Arlecchino's great wing of Balemoon Bloodfire beats as she absorbs and clears Blood-Debt Directives around her. She deals <color style='color:#FF9999;'>AoE Pyro DMG</color> before clearing the CD of All Is Ash and healing herself. The healing is based on her Bond of Life value and ATK.<br><br><i>It is commonly believed throughout Teyvat that moon phases other than the full moon are mere metaphors of ill-omen, used only by those who practice alchemy and astrology.<br>She saw this crimson moon in her dreams many times. Were those portents of disaster? Indeed they were, but the destined catastrophes belonged to those who enraged her.</i>",
                        "Icon": "Skill_E_Arlecchino_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "370.4%",
                                    "398.18%",
                                    "425.96%",
                                    "463.0%",
                                    "490.78%",
                                    "518.56%",
                                    "555.6%",
                                    "592.64%",
                                    "629.68%",
                                    "666.72%",
                                    "703.76%",
                                    "740.8%",
                                    "787.1%",
                                    "833.4%",
                                    "879.7%"
                                ]
                            },
                            {
                                "Desc": "Amount of HP Restored",
                                "ParamLevelList": [
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK",
                                    "150.0% Bond of Life+150.0% ATK"
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
                        "Name": "Agony Alone May Be Repaid",
                        "Desc": "<color style='color:#FFD780;'>Blood-Debt Directives</color> have the following characteristics:<br> · Arlecchino will be granted a Bond of Life worth 130% of her Max HP when an opponent to which she herself applied a Directive is defeated.<br> · 5s after a Directive is applied, it will be upgraded to a Blood-Debt Due. When absorbed, it will instead grant Arlecchino a Bond of Life worth 130%.<br>A Bond of Life created in the aforementioned ways cannot exceed the original limit on the value of Bonds of Life obtained through <color style='color:#FFD780;'>All Is Ash</color>.",
                        "Icon": "UI_Talent_S_Arlecchino_05"
                    },
                    {
                        "Name": "Strength Alone Can Defend",
                        "Desc": "Arlecchino gains 1% All Elemental and Physical RES for every 100 ATK she has in excess of 1,000. The maximum RES increase she can gain this way for each is 20%.",
                        "Icon": "UI_Talent_S_Arlecchino_06"
                    },
                    {
                        "Name": "The Balemoon Alone May Know",
                        "Desc": "While in combat, Arlecchino gains a 40% <color style='color:#FF9999;'>Pyro DMG Bonus</color> and can only be healed through <color style='color:#FFD780;'>Balemoon Rising</color>.",
                        "Icon": "UI_Talent_S_Arlecchino_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "\"All Reprisals and Arrears, Mine to Bear...\"",
                        "Desc": "Masque of the Red Death is further enhanced, the value of the increase is 100%. Additionally, Arlecchino's interruption resistance is increased when she performs Normal or Charged Attacks while affected by the Masque of the Red Death.",
                        "Icon": "UI_Talent_S_Arlecchino_01"
                    },
                    {
                        "Level": 2,
                        "Name": "\"All Rewards and Retribution, Mine to Bestow...\"",
                        "Desc": "<color style='color:#FFD780;'>Blood-Debt Directives</color> are now already Blood-Debt Due when first applied.<br>When Arlecchino absorbs such a Due, she unleashes Balemoon Bloodfire in front of her, dealing 900% of her ATK as <color style='color:#FF9999;'>AoE Pyro DMG</color> and increasing her All Elemental RES and Physical RES by 20% for 15s. This effect can trigger once every 10s.<br>You must first unlock the Ascension Talent \"Agony Alone May Be Repaid.\"",
                        "Icon": "UI_Talent_S_Arlecchino_02"
                    },
                    {
                        "Level": 3,
                        "Name": "\"You Shall Become a New Member of Our Family...\"",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Normal Attack: Invitation to a Beheading</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Arlecchino_01"
                    },
                    {
                        "Level": 4,
                        "Name": "\"You Shall Love and Protect Each Other Henceforth...\"",
                        "Desc": "When Arlecchino successfully absorbs a Blood-Debt Directive, <color style='color:#FFD780;'>Balemoon Rising</color>'s CD will decrease by 2s and 15 Elemental Energy will be restored to her. This effect can occur once every 10s.",
                        "Icon": "UI_Talent_S_Arlecchino_03"
                    },
                    {
                        "Level": 5,
                        "Name": "\"For Alone, We Are as Good as Dead...\"",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Balemoon Rising</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Arlecchino_02"
                    },
                    {
                        "Level": 6,
                        "Name": "\"From This Day On, We Shall Delight in New Life Together.\"",
                        "Desc": "The DMG of <color style='color:#FFD780;'>Balemoon Rising</color> is increased by Arlecchino's ATK multiplied by 700% of Arlecchino's current Bond of Life percentage.<br>For 20s after Arlecchino uses <color style='color:#FFD780;'>All Is Ash</color>, both her Normal Attacks and Elemental Burst gain 10% increased CRIT Rate and 70% increased CRIT DMG. This effect can be triggered up to once every 15s.",
                        "Icon": "UI_Talent_S_Arlecchino_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Arlecchino": {
        "AttackList": [
            {
                "Skill": "Elem Burst",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        6.5,
                        5.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 250.0,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "C2 Damage",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        6.5,
                        5.0
                    ]
                },
                "AtkTag": "C2 Damage",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 150.0,
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
                "AttackType": "Default",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "E Blood-Debt",
                "Shape": {
                    "Type": "Single",
                    "Size": []
                },
                "AtkTag": "Elem Skill Extra",
                "AttTag": "E Group",
                "AttGrp": "Once every 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 25.0,
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
                "StrikeType": "Default",
                "AttackType": "Range",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "E Spike",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        0.5,
                        2.2
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "E Group",
                "AttGrp": "Once every 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 25.0,
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
                "Skill": "E Cleave",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        6.0,
                        3.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 120.0,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Spear",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.2,
                        1.9,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 43.8,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Spear",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.1,
                        3.1,
                        300.0
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 48.1,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        5.6,
                        3.4,
                        3.0
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 60.3,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttackerInverse"
            },
            {
                "Skill": "Normal ATK 4-1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.3,
                        1.7
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 33.2,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 4-2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.3,
                        1.7
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 33.2,
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
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.8,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 65.9,
                "ForceType": 3,
                "Force": [
                    200.0,
                    600.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 6",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.7,
                        1.8
                    ]
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 78.9,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Charged ATK",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.0,
                        3.2
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 100.0,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        3.0,
                        1.9,
                        2.0
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 43.8,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Spear",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.6,
                        2.9,
                        300.0
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 48.1,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.0,
                        1.9,
                        3.0
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 60.3,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttackerInverse"
            },
            {
                "Skill": "Normal ATK 4-1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.8,
                        1.7
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 33.2,
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
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 4-2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.8,
                        1.7
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 33.2,
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
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Normal ATK 5",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.5,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 65.9,
                "ForceType": 3,
                "Force": [
                    200.0,
                    600.0
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
                "Skill": "Normal ATK 6",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.0,
                        1.8
                    ]
                },
                "AtkTag": "Normal ATK 6",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 78.9,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Charged ATK",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.0,
                        3.2
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Charged ATK",
                "AttGrp": "Avatar_Pole_ExtraAttack",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 100.0,
                "ForceType": 2,
                "Force": [
                    800.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
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
                "Element": "Fire",
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
                "CanInfuse": false,
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "Low Plunge",
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
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            },
            {
                "Skill": "High Plunge",
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
                "Element": "Fire",
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
                "CanInfuse": false,
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
                "Element": "Fire",
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
                "CanInfuse": false,
                "StrikeType": "Blunt",
                "AttackType": "Melee",
                "RetreatType": "ByAttacker"
            }
        ]
    }
}