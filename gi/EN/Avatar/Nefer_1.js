// Auto Generated

var _AvatarDataConfig_ = {
    "Nefer": {
        "BallList": [],
        "EndureList": [],
        "WindZoneList": [],
        "OtherDataList": [
            {
                "Name": "Particle Generation",
                "DescList": [
                    "• When Elemental Skill hits a monster, has @66.67%# chance of generating @3 Dendro Particles#, otherwise generate @2 Dendro Particles#."
                ]
            },
            {
                "Name": "Element Application",
                "DescList": [
                    "• Elemental Skill, Elemental Burst and Phantasm Performance all apply @1U#, with standard ICD (@2.5s / 3 hits#). These 3 groups are independent frpm each other.",
                    "• Lunar Bloom DMG does not apply Element."
                ]
            }
        ]
    }
}

var _AvatarMats_ = {
    "Nefer": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104131": 1,
                "101263": 3,
                "112125": 3
            },
            {
                "202": 40000,
                "104132": 3,
                "113079": 2,
                "101263": 10,
                "112125": 15
            },
            {
                "202": 60000,
                "104132": 6,
                "113079": 4,
                "101263": 20,
                "112126": 12
            },
            {
                "202": 80000,
                "104133": 3,
                "113079": 8,
                "101263": 30,
                "112126": 18
            },
            {
                "202": 100000,
                "104133": 6,
                "113079": 12,
                "101263": 45,
                "112127": 12
            },
            {
                "202": 120000,
                "104134": 6,
                "113079": 20,
                "101263": 60,
                "112127": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104359": 3,
                "112125": 6
            },
            {
                "202": 17500,
                "104360": 2,
                "112126": 3
            },
            {
                "202": 25000,
                "104360": 4,
                "112126": 4
            },
            {
                "202": 30000,
                "104360": 6,
                "112126": 6
            },
            {
                "202": 37500,
                "104360": 9,
                "112126": 9
            },
            {
                "202": 120000,
                "104361": 4,
                "112127": 4,
                "113074": 1
            },
            {
                "202": 260000,
                "104361": 6,
                "112127": 6,
                "113074": 1
            },
            {
                "202": 450000,
                "104361": 12,
                "112127": 9,
                "113074": 2
            },
            {
                "202": 700000,
                "104361": 16,
                "112127": 12,
                "113074": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104359": 3,
                "112125": 6
            },
            {
                "202": 17500,
                "104360": 2,
                "112126": 3
            },
            {
                "202": 25000,
                "104360": 4,
                "112126": 4
            },
            {
                "202": 30000,
                "104360": 6,
                "112126": 6
            },
            {
                "202": 37500,
                "104360": 9,
                "112126": 9
            },
            {
                "202": 120000,
                "104361": 4,
                "112127": 4,
                "113074": 1
            },
            {
                "202": 260000,
                "104361": 6,
                "112127": 6,
                "113074": 1
            },
            {
                "202": 450000,
                "104361": 12,
                "112127": 9,
                "113074": 2
            },
            {
                "202": 700000,
                "104361": 16,
                "112127": 12,
                "113074": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104359": 3,
                "112125": 6
            },
            {
                "202": 17500,
                "104360": 2,
                "112126": 3
            },
            {
                "202": 25000,
                "104360": 4,
                "112126": 4
            },
            {
                "202": 30000,
                "104360": 6,
                "112126": 6
            },
            {
                "202": 37500,
                "104360": 9,
                "112126": 9
            },
            {
                "202": 120000,
                "104361": 4,
                "112127": 4,
                "113074": 1
            },
            {
                "202": 260000,
                "104361": 6,
                "112127": 6,
                "113074": 1
            },
            {
                "202": 450000,
                "104361": 12,
                "112127": 9,
                "113074": 2
            },
            {
                "202": 700000,
                "104361": 16,
                "112127": 12,
                "113074": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Nefer": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Name": "Striking Serpent",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 kicks that deal <color style='color:#99FF88;'>Dendro DMG</color> with the ferocity and grace of a striking serpent.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Nefer enters the Slither state, consuming Stamina to move rapidly forward for up to 2.5s. When the skill button is released, the duration ends, or Stamina runs out, Nefer will exit the Slither state and consume a certain amount of additional Stamina to deal <color style='color:#99FF88;'>Dendro DMG</color> to opponents.<br>Additionally, unleashing the Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color> or sprinting while Nefer is in the Slither state will not cause her to exit the state.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Calling upon the might of Dendro, Nefer plunges towards the ground from mid-air, damaging all opponents in her path and dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "38.0712%",
                                    "40.9265%",
                                    "43.7819%",
                                    "47.589%",
                                    "50.4443%",
                                    "53.2997%",
                                    "57.1068%",
                                    "60.9139%",
                                    "64.721%",
                                    "68.5282%",
                                    "72.3353%",
                                    "76.1424%",
                                    "80.9013%",
                                    "85.6602%",
                                    "90.4191%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "37.564%",
                                    "40.3813%",
                                    "43.1986%",
                                    "46.955%",
                                    "49.7723%",
                                    "52.5896%",
                                    "56.346%",
                                    "60.1024%",
                                    "63.8588%",
                                    "67.6152%",
                                    "71.3716%",
                                    "75.128%",
                                    "79.8235%",
                                    "84.519%",
                                    "89.2145%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "25.24%×2",
                                    "27.133%×2",
                                    "29.026%×2",
                                    "31.55%×2",
                                    "33.443%×2",
                                    "35.336%×2",
                                    "37.86%×2",
                                    "40.384%×2",
                                    "42.908%×2",
                                    "45.432%×2",
                                    "47.956%×2",
                                    "50.48%×2",
                                    "53.635%×2",
                                    "56.79%×2",
                                    "59.945%×2"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "60.9944%",
                                    "65.569%",
                                    "70.1436%",
                                    "76.243%",
                                    "80.8176%",
                                    "85.3922%",
                                    "91.4916%",
                                    "97.591%",
                                    "103.6905%",
                                    "109.7899%",
                                    "115.8894%",
                                    "121.9888%",
                                    "129.6131%",
                                    "137.2374%",
                                    "144.8617%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "130.88%",
                                    "140.696%",
                                    "150.512%",
                                    "163.6%",
                                    "173.416%",
                                    "183.232%",
                                    "196.32%",
                                    "209.408%",
                                    "222.496%",
                                    "235.584%",
                                    "248.672%",
                                    "261.76%",
                                    "278.12%",
                                    "294.48%",
                                    "310.84%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Charging Stamina Drain",
                                "ParamLevelList": [
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s"
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
                        "Name": "Senet Strategy: Dance of a Thousand Nights",
                        "Desc": "A dance that dissolved dynasties, as chilling as a winter's night on the great sea of sand, yet lingering with the tenderness of moonlit gauze. Nefer charges forward, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> and entering the <color style='color:#FFD780;'>Shadow Dance</color> state.<br>While in the Shadow Dance state, if you have at least 1 <color style='color:#FFD780;'>Verdant Dew</color>, Nefer's Charged Attacks will be replaced with the special Charged Attack <color style='color:#FFD780;'>Phantasm Performance</color>.<br><br>Has 2 initial usages.<br><br><i>\"The world is a game in which the pieces remain hidden behind a veil. To avoid falling into a trap, one must collect every piece of information one can. This is the meaning of secrets.\"</i>",
                        "Icon": "Skill_S_Nefer_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "76.384% ATK+152.768% Elemental Mastery",
                                    "82.1128% ATK+164.2256% Elemental Mastery",
                                    "87.8416% ATK+175.6832% Elemental Mastery",
                                    "95.48% ATK+190.96% Elemental Mastery",
                                    "101.2088% ATK+202.4176% Elemental Mastery",
                                    "106.9376% ATK+213.8752% Elemental Mastery",
                                    "114.576% ATK+229.152% Elemental Mastery",
                                    "122.2144% ATK+244.4288% Elemental Mastery",
                                    "129.8528% ATK+259.7056% Elemental Mastery",
                                    "137.4912% ATK+274.9824% Elemental Mastery",
                                    "145.1296% ATK+290.2592% Elemental Mastery",
                                    "152.768% ATK+305.536% Elemental Mastery",
                                    "162.316% ATK+324.632% Elemental Mastery",
                                    "171.864% ATK+343.728% Elemental Mastery",
                                    "181.412% ATK+362.824% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 1-Hit DMG (Nefer)",
                                "ParamLevelList": [
                                    "24.64% ATK+49.28% Elemental Mastery",
                                    "26.488% ATK+52.976% Elemental Mastery",
                                    "28.336% ATK+56.672% Elemental Mastery",
                                    "30.8% ATK+61.6% Elemental Mastery",
                                    "32.648% ATK+65.296% Elemental Mastery",
                                    "34.496% ATK+68.992% Elemental Mastery",
                                    "36.96% ATK+73.92% Elemental Mastery",
                                    "39.424% ATK+78.848% Elemental Mastery",
                                    "41.888% ATK+83.776% Elemental Mastery",
                                    "44.352% ATK+88.704% Elemental Mastery",
                                    "46.816% ATK+93.632% Elemental Mastery",
                                    "49.28% ATK+98.56% Elemental Mastery",
                                    "52.36% ATK+104.72% Elemental Mastery",
                                    "55.44% ATK+110.88% Elemental Mastery",
                                    "58.52% ATK+117.04% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 2-Hit DMG (Nefer)",
                                "ParamLevelList": [
                                    "32.032% ATK+64.064% Elemental Mastery",
                                    "34.4344% ATK+68.8688% Elemental Mastery",
                                    "36.8368% ATK+73.6736% Elemental Mastery",
                                    "40.04% ATK+80.08% Elemental Mastery",
                                    "42.4424% ATK+84.8848% Elemental Mastery",
                                    "44.8448% ATK+89.6896% Elemental Mastery",
                                    "48.048% ATK+96.096% Elemental Mastery",
                                    "51.2512% ATK+102.5024% Elemental Mastery",
                                    "54.4544% ATK+108.9088% Elemental Mastery",
                                    "57.6576% ATK+115.3152% Elemental Mastery",
                                    "60.8608% ATK+121.7216% Elemental Mastery",
                                    "64.064% ATK+128.128% Elemental Mastery",
                                    "68.068% ATK+136.136% Elemental Mastery",
                                    "72.072% ATK+144.144% Elemental Mastery",
                                    "76.076% ATK+152.152% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 1-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "96.0% Elemental Mastery",
                                    "103.2% Elemental Mastery",
                                    "110.4% Elemental Mastery",
                                    "120.0% Elemental Mastery",
                                    "127.2% Elemental Mastery",
                                    "134.4% Elemental Mastery",
                                    "144.0% Elemental Mastery",
                                    "153.6% Elemental Mastery",
                                    "163.2% Elemental Mastery",
                                    "172.8% Elemental Mastery",
                                    "182.4% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.0% Elemental Mastery",
                                    "216.0% Elemental Mastery",
                                    "228.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 2-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "96.0% Elemental Mastery",
                                    "103.2% Elemental Mastery",
                                    "110.4% Elemental Mastery",
                                    "120.0% Elemental Mastery",
                                    "127.2% Elemental Mastery",
                                    "134.4% Elemental Mastery",
                                    "144.0% Elemental Mastery",
                                    "153.6% Elemental Mastery",
                                    "163.2% Elemental Mastery",
                                    "172.8% Elemental Mastery",
                                    "182.4% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.0% Elemental Mastery",
                                    "216.0% Elemental Mastery",
                                    "228.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 3-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "128.0% Elemental Mastery",
                                    "137.6% Elemental Mastery",
                                    "147.2% Elemental Mastery",
                                    "160.0% Elemental Mastery",
                                    "169.6% Elemental Mastery",
                                    "179.2% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.8% Elemental Mastery",
                                    "217.6% Elemental Mastery",
                                    "230.4% Elemental Mastery",
                                    "243.2% Elemental Mastery",
                                    "256.0% Elemental Mastery",
                                    "272.0% Elemental Mastery",
                                    "288.0% Elemental Mastery",
                                    "304.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance Usages",
                                "ParamLevelList": [
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3"
                                ]
                            },
                            {
                                "Desc": "Shadow Dance Duration",
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
                            }
                        ]
                    },
                    {
                        "Name": "Sacred Vow: True Eye's Phantasm",
                        "Desc": "Grant \"revelation\" to the mysteries of the false through Thoth's true sight, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> to opponents ahead. When unleashed, Nefer will consume all <color style='color:#FFD780;'>Veils of Falsehood</color> to increase the DMG dealt by the current Elemental Burst.<br><br><i>\"The blessings of the Ibis King proclaimed by the singers of the burning sands are, in truth, more akin to dire curses.\"</i>",
                        "Icon": "Skill_E_Nefer_01",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "224.64% ATK+449.28% Elemental Mastery",
                                    "241.488% ATK+482.976% Elemental Mastery",
                                    "258.336% ATK+516.672% Elemental Mastery",
                                    "280.8% ATK+561.6% Elemental Mastery",
                                    "297.648% ATK+595.296% Elemental Mastery",
                                    "314.496% ATK+628.992% Elemental Mastery",
                                    "336.96% ATK+673.92% Elemental Mastery",
                                    "359.424% ATK+718.848% Elemental Mastery",
                                    "381.888% ATK+763.776% Elemental Mastery",
                                    "404.352% ATK+808.704% Elemental Mastery",
                                    "426.816% ATK+853.632% Elemental Mastery",
                                    "449.28% ATK+898.56% Elemental Mastery",
                                    "477.36% ATK+954.72% Elemental Mastery",
                                    "505.44% ATK+1010.88% Elemental Mastery",
                                    "533.52% ATK+1067.04% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "336.96% ATK+673.92% Elemental Mastery",
                                    "362.232% ATK+724.464% Elemental Mastery",
                                    "387.504% ATK+775.008% Elemental Mastery",
                                    "421.2% ATK+842.4% Elemental Mastery",
                                    "446.472% ATK+892.944% Elemental Mastery",
                                    "471.744% ATK+943.488% Elemental Mastery",
                                    "505.44% ATK+1010.88% Elemental Mastery",
                                    "539.136% ATK+1078.272% Elemental Mastery",
                                    "572.832% ATK+1145.664% Elemental Mastery",
                                    "606.528% ATK+1213.056% Elemental Mastery",
                                    "640.224% ATK+1280.448% Elemental Mastery",
                                    "673.92% ATK+1347.84% Elemental Mastery",
                                    "716.04% ATK+1432.08% Elemental Mastery",
                                    "758.16% ATK+1516.32% Elemental Mastery",
                                    "800.28% ATK+1600.56% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "DMG Bonus",
                                "ParamLevelList": [
                                    "13.0% Per Veil of Falsehood Stack",
                                    "16.0% Per Veil of Falsehood Stack",
                                    "19.0% Per Veil of Falsehood Stack",
                                    "22.0% Per Veil of Falsehood Stack",
                                    "25.0% Per Veil of Falsehood Stack",
                                    "28.0% Per Veil of Falsehood Stack",
                                    "31.0% Per Veil of Falsehood Stack",
                                    "34.0% Per Veil of Falsehood Stack",
                                    "37.0% Per Veil of Falsehood Stack",
                                    "40.0% Per Veil of Falsehood Stack",
                                    "43.0% Per Veil of Falsehood Stack",
                                    "46.0% Per Veil of Falsehood Stack",
                                    "49.0% Per Veil of Falsehood Stack",
                                    "52.0% Per Veil of Falsehood Stack",
                                    "55.0% Per Veil of Falsehood Stack"
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
                        "Name": "A Wager of Moonlight",
                        "Desc": "Nefer will be granted the corresponding buff effects based on the party's <color style='color:#FFD780;'>Moonsign</color>.<br><br><color style='color:#FFD780;'>Moonsign: Ascendant Gleam</color>: When she unleashes her Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, any Dendro Cores and Bountiful Cores on the field will be converted to Seeds of Deceit, and any Lunar-Bloom reactions triggered in the following 15s that would create Dendro Cores or Bountiful Cores will instead create Seeds of Deceit. Seeds of Deceit cannot trigger Hyperbloom or Burgeon reactions and will not burst.<br>When Nefer unleashes a Charged Attack or <color style='color:#FFD780;'>Phantasm Performance</color>, she can absorb Seeds of Deceit within a certain range, gaining 1 stack of <color style='color:#FFD780;'>Veil of Falsehood</color> for every seed absorbed. When this effect gains 3 stacks, or when the third stack's duration is refreshed, Nefer's Elemental Mastery will be increased by 100 for 8s.",
                        "Icon": "UI_Talent_S_Nefer_05"
                    },
                    {
                        "Name": "Daughter of the Dust and Sand",
                        "Desc": "Each point of Nefer's Elemental Mastery beyond 500 will increase her ATK by 0.4. A maximum of 200 ATK can be gained in this manner.",
                        "Icon": "UI_Talent_S_Nefer_06"
                    },
                    {
                        "Name": "Moonsign Benediction: Dusklit Eaves",
                        "Desc": "When a party member triggers a Bloom reaction, it will be converted into the Lunar-Bloom reaction, with every point of Elemental Mastery that Nefer has increasing Lunar-Bloom's Base DMG by 0.0175%, up to a maximum of 14%.<br><br>Additionally, when Nefer is in the party, the party's <color style='color:#FFD780;'>Moonsign</color> will increase by 1 level.",
                        "Icon": "UI_Talent_S_Nefer_07"
                    },
                    {
                        "Name": "Conspiracy of the Golden Vault",
                        "Desc": "Gains 25% more rewards when dispatched on a Nod-Krai Expedition for 20 hours.<br>Additionally, as the head of the Curatorium of Secrets, Nefer seemingly has the ability to obtain intelligence from a variety of sources — intelligence that certain factions in Nasha Town might find extremely interesting...",
                        "Icon": "UI_Talent_S_Nefer_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Planning Breeds Success",
                        "Desc": "The Base DMG for Lunar-Bloom reactions caused by Nefer's <color style='color:#FFD780;'>Phantasm Performance</color> is increased by 60% of her Elemental Mastery. This effect is also boosted by <color style='color:#FFD780;'>Veil of Falsehood</color>.",
                        "Icon": "UI_Talent_S_Nefer_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Observation Feeds Strategy",
                        "Desc": "Enhances the effects of the Ascension Talent <color style='color:#FFD780;'>A Wager of Moonlight</color>: Extends <color style='color:#FFD780;'>Veil of Falsehood</color>'s duration by 5s, and increases its stack limit to 5, as well as causing <color style='color:#FFD780;'>Phantasm Performance</color> to deal up to 150% of its original DMG. When Nefer unleashes her Elemental Skill, she will instantly gain 2 stacks of Veil of Falsehood. Additionally, when Veil of Falsehood gains 5 stacks, or when the fifth stack's duration is refreshed, Nefer's Elemental Mastery will be increased by 200 for 8s instead.<br>You must first unlock the Ascension Talent \"A Wager of Moonlight.\"",
                        "Icon": "UI_Talent_S_Nefer_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Deceit Cloaks the Truth",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Nefer_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Delusion Ensnares Reason",
                        "Desc": "When Nefer is on the field and in the <color style='color:#FFD780;'>Shadow Dance</color> state, you will gain Verdant Dew 25% faster.<br>Additionally, while Nefer is in the Shadow Dance state, nearby opponents will have their <color style='color:#99FF88;'>Dendro RES</color> decreased by 20%. This effect will be removed when Nefer exits the Shadow Dance state or after she strays a certain distance away from the opponents for 4.5s.",
                        "Icon": "UI_Talent_S_Nefer_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Opportunity Hides in the Margins",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Sacred Vow: True Eye's Phantasm</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Nefer_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Victory Flows from the Turning of Tides",
                        "Desc": "When Nefer unleashes <color style='color:#FFD780;'>Phantasm Performance</color>, the second stage of DMG dealt by herself will be converted to deal <color style='color:#99FF88;'>AoE Dendro DMG</color> equal to 85% of her Elemental Mastery. Additionally, when the attacks from Phantasm Performance end, an extra instance of <color style='color:#99FF88;'>AoE Dendro DMG</color> equal to 120% of Nefer's Elemental Mastery will be dealt. All of the aforementioned DMG is considered Lunar-Bloom DMG dealt by Phantasm Performance.<br><br><color style='color:#FFD780;'>Moonsign: Ascendant Gleam</color><br>Nefer's Lunar-Bloom DMG is <color style='color:#FFD780;'>elevated</color> by 15%.",
                        "Icon": "UI_Talent_S_Nefer_04"
                    }
                ],
                "HyperLinks": [
                    {
                        "Name": "Elevation",
                        "Desc": "Special DMG Boost effect. It is calculated independently of other DMG Boost effects."
                    },
                    {
                        "Name": "Verdant Dew",
                        "Desc": "When party members trigger Lunar-Bloom reactions, the party will receive such a resource.<br>Your party will receive 1 Verdant Dew every 2.5s for 2.5s after triggering a Lunar-Bloom reaction. Your party can have up to 3 Verdant Dew. If you trigger another Lunar-Bloom reaction during this time, the duration of this effect will be reset."
                    },
                    {
                        "Name": "Shadow Dance",
                        "Desc": "After using the Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, Nefer will enter this state.<br>While in the Shadow Dance state, if you have at least 1 Verdant Dew, Nefer's Charged Attacks will be replaced with the special Charged Attack Phantasm Performance.<br>Nefer will exit the Shadow Dance state when she unleashes 3 Phantasm Performance(s) or the state's duration ends."
                    },
                    {
                        "Name": "Phantasm Performance",
                        "Desc": "When in the Shadow Dance state caused by her Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, if you have at least 1 Verdant Dew, Nefer's Charged Attacks will be replaced with the special Charged Attack Phantasm Performance.<br>Nefer summons a shade of herself to perform Coordinated Attacks against enemies. Nefer and the shade will deal 2 and 3 stages of <color style='color:#99FF88;'>AoE Dendro DMG</color> respectively. DMG dealt by the shade is considered Lunar-Bloom DMG. 1 Verdant Dew will be consumed the first time a shade is summoned after every Phantasm Performance."
                    },
                    {
                        "Name": "Veil of Falsehood",
                        "Desc": "After absorbing Seeds of Deceit via the Passive Talent A Wager of Moonlight, Nefer gains this effect, thereby increasing the DMG dealt by her Phantasm Performance.<br>Each stack of Veil of Falsehood increases the DMG dealt by Nefer's Phantasm Performance by 10.0%. The initial maximum number of stacks is 3, with each stack lasting for 9s (each stack's duration is counted independently)."
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Name": "Striking Serpent",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 kicks that deal <color style='color:#99FF88;'>Dendro DMG</color> with the ferocity and grace of a striking serpent.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Nefer enters the Slither state, consuming Stamina to move rapidly forward for up to 2.5s. When the skill button is released, the duration ends, or Stamina runs out, Nefer will exit the Slither state and consume a certain amount of additional Stamina to deal <color style='color:#99FF88;'>Dendro DMG</color> to opponents.<br>Additionally, unleashing the Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color> or sprinting while Nefer is in the Slither state will not cause her to exit the state.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Calling upon the might of Dendro, Nefer plunges towards the ground from mid-air, damaging all opponents in her path and dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "38.0712%",
                                    "40.9265%",
                                    "43.7819%",
                                    "47.589%",
                                    "50.4443%",
                                    "53.2997%",
                                    "57.1068%",
                                    "60.9139%",
                                    "64.721%",
                                    "68.5282%",
                                    "72.3353%",
                                    "76.1424%",
                                    "80.9013%",
                                    "85.6602%",
                                    "90.4191%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "37.564%",
                                    "40.3813%",
                                    "43.1986%",
                                    "46.955%",
                                    "49.7723%",
                                    "52.5896%",
                                    "56.346%",
                                    "60.1024%",
                                    "63.8588%",
                                    "67.6152%",
                                    "71.3716%",
                                    "75.128%",
                                    "79.8235%",
                                    "84.519%",
                                    "89.2145%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "25.24%×2",
                                    "27.133%×2",
                                    "29.026%×2",
                                    "31.55%×2",
                                    "33.443%×2",
                                    "35.336%×2",
                                    "37.86%×2",
                                    "40.384%×2",
                                    "42.908%×2",
                                    "45.432%×2",
                                    "47.956%×2",
                                    "50.48%×2",
                                    "53.635%×2",
                                    "56.79%×2",
                                    "59.945%×2"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "60.9944%",
                                    "65.569%",
                                    "70.1436%",
                                    "76.243%",
                                    "80.8176%",
                                    "85.3922%",
                                    "91.4916%",
                                    "97.591%",
                                    "103.6905%",
                                    "109.7899%",
                                    "115.8894%",
                                    "121.9888%",
                                    "129.6131%",
                                    "137.2374%",
                                    "144.8617%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "130.88%",
                                    "140.696%",
                                    "150.512%",
                                    "163.6%",
                                    "173.416%",
                                    "183.232%",
                                    "196.32%",
                                    "209.408%",
                                    "222.496%",
                                    "235.584%",
                                    "248.672%",
                                    "261.76%",
                                    "278.12%",
                                    "294.48%",
                                    "310.84%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Charging Stamina Drain",
                                "ParamLevelList": [
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s"
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
                        "Name": "Senet Strategy: Dance of a Thousand Nights",
                        "Desc": "A dance that dissolved dynasties, as chilling as a winter's night on the great sea of sand, yet lingering with the tenderness of moonlit gauze. Nefer charges forward, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> and entering the <color style='color:#FFD780;'>Shadow Dance</color> state.<br>While in the Shadow Dance state, if you have at least 1 <color style='color:#FFD780;'>Verdant Dew</color>, Nefer's Charged Attacks will be replaced with the special Charged Attack <color style='color:#FFD780;'>Phantasm Performance</color>.<br><br>Has 2 initial usages.<br><br><i>\"The world is a game in which the pieces remain hidden behind a veil. To avoid falling into a trap, one must collect every piece of information one can. This is the meaning of secrets.\"</i>",
                        "Icon": "Skill_S_Nefer_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "76.384% ATK+152.768% Elemental Mastery",
                                    "82.1128% ATK+164.2256% Elemental Mastery",
                                    "87.8416% ATK+175.6832% Elemental Mastery",
                                    "95.48% ATK+190.96% Elemental Mastery",
                                    "101.2088% ATK+202.4176% Elemental Mastery",
                                    "106.9376% ATK+213.8752% Elemental Mastery",
                                    "114.576% ATK+229.152% Elemental Mastery",
                                    "122.2144% ATK+244.4288% Elemental Mastery",
                                    "129.8528% ATK+259.7056% Elemental Mastery",
                                    "137.4912% ATK+274.9824% Elemental Mastery",
                                    "145.1296% ATK+290.2592% Elemental Mastery",
                                    "152.768% ATK+305.536% Elemental Mastery",
                                    "162.316% ATK+324.632% Elemental Mastery",
                                    "171.864% ATK+343.728% Elemental Mastery",
                                    "181.412% ATK+362.824% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 1-Hit DMG (Nefer)",
                                "ParamLevelList": [
                                    "24.64% ATK+49.28% Elemental Mastery",
                                    "26.488% ATK+52.976% Elemental Mastery",
                                    "28.336% ATK+56.672% Elemental Mastery",
                                    "30.8% ATK+61.6% Elemental Mastery",
                                    "32.648% ATK+65.296% Elemental Mastery",
                                    "34.496% ATK+68.992% Elemental Mastery",
                                    "36.96% ATK+73.92% Elemental Mastery",
                                    "39.424% ATK+78.848% Elemental Mastery",
                                    "41.888% ATK+83.776% Elemental Mastery",
                                    "44.352% ATK+88.704% Elemental Mastery",
                                    "46.816% ATK+93.632% Elemental Mastery",
                                    "49.28% ATK+98.56% Elemental Mastery",
                                    "52.36% ATK+104.72% Elemental Mastery",
                                    "55.44% ATK+110.88% Elemental Mastery",
                                    "58.52% ATK+117.04% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 2-Hit DMG (Nefer)",
                                "ParamLevelList": [
                                    "32.032% ATK+64.064% Elemental Mastery",
                                    "34.4344% ATK+68.8688% Elemental Mastery",
                                    "36.8368% ATK+73.6736% Elemental Mastery",
                                    "40.04% ATK+80.08% Elemental Mastery",
                                    "42.4424% ATK+84.8848% Elemental Mastery",
                                    "44.8448% ATK+89.6896% Elemental Mastery",
                                    "48.048% ATK+96.096% Elemental Mastery",
                                    "51.2512% ATK+102.5024% Elemental Mastery",
                                    "54.4544% ATK+108.9088% Elemental Mastery",
                                    "57.6576% ATK+115.3152% Elemental Mastery",
                                    "60.8608% ATK+121.7216% Elemental Mastery",
                                    "64.064% ATK+128.128% Elemental Mastery",
                                    "68.068% ATK+136.136% Elemental Mastery",
                                    "72.072% ATK+144.144% Elemental Mastery",
                                    "76.076% ATK+152.152% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 1-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "96.0% Elemental Mastery",
                                    "103.2% Elemental Mastery",
                                    "110.4% Elemental Mastery",
                                    "120.0% Elemental Mastery",
                                    "127.2% Elemental Mastery",
                                    "134.4% Elemental Mastery",
                                    "144.0% Elemental Mastery",
                                    "153.6% Elemental Mastery",
                                    "163.2% Elemental Mastery",
                                    "172.8% Elemental Mastery",
                                    "182.4% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.0% Elemental Mastery",
                                    "216.0% Elemental Mastery",
                                    "228.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 2-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "96.0% Elemental Mastery",
                                    "103.2% Elemental Mastery",
                                    "110.4% Elemental Mastery",
                                    "120.0% Elemental Mastery",
                                    "127.2% Elemental Mastery",
                                    "134.4% Elemental Mastery",
                                    "144.0% Elemental Mastery",
                                    "153.6% Elemental Mastery",
                                    "163.2% Elemental Mastery",
                                    "172.8% Elemental Mastery",
                                    "182.4% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.0% Elemental Mastery",
                                    "216.0% Elemental Mastery",
                                    "228.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 3-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "128.0% Elemental Mastery",
                                    "137.6% Elemental Mastery",
                                    "147.2% Elemental Mastery",
                                    "160.0% Elemental Mastery",
                                    "169.6% Elemental Mastery",
                                    "179.2% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.8% Elemental Mastery",
                                    "217.6% Elemental Mastery",
                                    "230.4% Elemental Mastery",
                                    "243.2% Elemental Mastery",
                                    "256.0% Elemental Mastery",
                                    "272.0% Elemental Mastery",
                                    "288.0% Elemental Mastery",
                                    "304.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance Usages",
                                "ParamLevelList": [
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3"
                                ]
                            },
                            {
                                "Desc": "Shadow Dance Duration",
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
                            }
                        ]
                    },
                    {
                        "Name": "Sacred Vow: True Eye's Phantasm",
                        "Desc": "Grant \"revelation\" to the mysteries of the false through Thoth's true sight, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> to opponents ahead. When unleashed, Nefer will consume all <color style='color:#FFD780;'>Veils of Falsehood</color> to increase the DMG dealt by the current Elemental Burst.<br><br><i>The blessings of the Ibis King proclaimed by the singers of the burning sands are, in truth, more akin to dire curses.</i>",
                        "Icon": "Skill_E_Nefer_01",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "224.64% ATK+449.28% Elemental Mastery",
                                    "241.488% ATK+482.976% Elemental Mastery",
                                    "258.336% ATK+516.672% Elemental Mastery",
                                    "280.8% ATK+561.6% Elemental Mastery",
                                    "297.648% ATK+595.296% Elemental Mastery",
                                    "314.496% ATK+628.992% Elemental Mastery",
                                    "336.96% ATK+673.92% Elemental Mastery",
                                    "359.424% ATK+718.848% Elemental Mastery",
                                    "381.888% ATK+763.776% Elemental Mastery",
                                    "404.352% ATK+808.704% Elemental Mastery",
                                    "426.816% ATK+853.632% Elemental Mastery",
                                    "449.28% ATK+898.56% Elemental Mastery",
                                    "477.36% ATK+954.72% Elemental Mastery",
                                    "505.44% ATK+1010.88% Elemental Mastery",
                                    "533.52% ATK+1067.04% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "336.96% ATK+673.92% Elemental Mastery",
                                    "362.232% ATK+724.464% Elemental Mastery",
                                    "387.504% ATK+775.008% Elemental Mastery",
                                    "421.2% ATK+842.4% Elemental Mastery",
                                    "446.472% ATK+892.944% Elemental Mastery",
                                    "471.744% ATK+943.488% Elemental Mastery",
                                    "505.44% ATK+1010.88% Elemental Mastery",
                                    "539.136% ATK+1078.272% Elemental Mastery",
                                    "572.832% ATK+1145.664% Elemental Mastery",
                                    "606.528% ATK+1213.056% Elemental Mastery",
                                    "640.224% ATK+1280.448% Elemental Mastery",
                                    "673.92% ATK+1347.84% Elemental Mastery",
                                    "716.04% ATK+1432.08% Elemental Mastery",
                                    "758.16% ATK+1516.32% Elemental Mastery",
                                    "800.28% ATK+1600.56% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "DMG Bonus",
                                "ParamLevelList": [
                                    "13.0% Per Veil of Falsehood Stack",
                                    "16.0% Per Veil of Falsehood Stack",
                                    "19.0% Per Veil of Falsehood Stack",
                                    "22.0% Per Veil of Falsehood Stack",
                                    "25.0% Per Veil of Falsehood Stack",
                                    "28.0% Per Veil of Falsehood Stack",
                                    "31.0% Per Veil of Falsehood Stack",
                                    "34.0% Per Veil of Falsehood Stack",
                                    "37.0% Per Veil of Falsehood Stack",
                                    "40.0% Per Veil of Falsehood Stack",
                                    "43.0% Per Veil of Falsehood Stack",
                                    "46.0% Per Veil of Falsehood Stack",
                                    "49.0% Per Veil of Falsehood Stack",
                                    "52.0% Per Veil of Falsehood Stack",
                                    "55.0% Per Veil of Falsehood Stack"
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
                        "Name": "A Wager of Moonlight",
                        "Desc": "Nefer will be granted the corresponding buff effects based on the party's <color style='color:#FFD780;'>Moonsign</color>.<br><br><color style='color:#FFD780;'>Moonsign: Ascendant Gleam</color>: When she unleashes her Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, any Dendro Cores and Bountiful Cores on the field will be converted to Seeds of Deceit, and any Lunar-Bloom reactions triggered by nearby characters in the following 15s that would create Dendro Cores or Bountiful Cores will instead create Seeds of Deceit. Seeds of Deceit cannot trigger Hyperbloom or Burgeon reactions and will not burst.<br>When Nefer unleashes a Charged Attack or <color style='color:#FFD780;'>Phantasm Performance</color>, she can absorb Seeds of Deceit within a certain range, gaining 1 stack of <color style='color:#FFD780;'>Veil of Falsehood</color> for every seed absorbed. When this effect gains 3 stacks, or when the third stack's duration is refreshed, Nefer's Elemental Mastery will be increased by 100 for 8s.",
                        "Icon": "UI_Talent_S_Nefer_05"
                    },
                    {
                        "Name": "Daughter of the Dust and Sand",
                        "Desc": "Each point of Nefer's Elemental Mastery beyond 500 will increase her ATK by 0.4. A maximum of 200 ATK can be gained in this manner.",
                        "Icon": "UI_Talent_S_Nefer_06"
                    },
                    {
                        "Name": "Moonsign Benediction: Dusklit Eaves",
                        "Desc": "When a party member triggers a Bloom reaction, it will be converted into the Lunar-Bloom reaction, with every point of Elemental Mastery that Nefer has increasing Lunar-Bloom's Base DMG by 0.0175%, up to a maximum of 14%.<br><br>Additionally, when Nefer is in the party, the party's <color style='color:#FFD780;'>Moonsign</color> will increase by 1 level.",
                        "Icon": "UI_Talent_S_Nefer_07"
                    },
                    {
                        "Name": "Conspiracy of the Golden Vault",
                        "Desc": "Gains 25% more rewards when dispatched on a Nod-Krai Expedition for 20 hours.<br>Additionally, as the head of the Curatorium of Secrets, Nefer seemingly has the ability to obtain intelligence from a variety of sources — intelligence that certain factions in Nasha Town might find extremely interesting...",
                        "Icon": "UI_Talent_S_Nefer_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Planning Breeds Success",
                        "Desc": "The Base DMG for Lunar-Bloom reactions caused by Nefer's <color style='color:#FFD780;'>Phantasm Performance</color> is increased by 60% of her Elemental Mastery. This effect is also boosted by <color style='color:#FFD780;'>Veil of Falsehood</color>.",
                        "Icon": "UI_Talent_S_Nefer_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Observation Feeds Strategy",
                        "Desc": "Enhances the effects of the Ascension Talent <color style='color:#FFD780;'>A Wager of Moonlight</color>: Extends <color style='color:#FFD780;'>Veil of Falsehood</color>'s duration by 5s, and increases its stack limit to 5, as well as causing <color style='color:#FFD780;'>Phantasm Performance</color> to deal up to 150% of its original DMG. When Nefer unleashes her Elemental Skill, she will instantly gain 2 stacks of Veil of Falsehood. Additionally, when Veil of Falsehood gains 5 stacks, or when the fifth stack's duration is refreshed, Nefer's Elemental Mastery will be increased by 200 for 8s instead.<br>You must first unlock the Ascension Talent \"A Wager of Moonlight.\"",
                        "Icon": "UI_Talent_S_Nefer_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Deceit Cloaks the Truth",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Nefer_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Delusion Ensnares Reason",
                        "Desc": "When Nefer is on the field and in the <color style='color:#FFD780;'>Shadow Dance</color> state, you will gain Verdant Dew 25% faster.<br>Additionally, while Nefer is in the Shadow Dance state, nearby opponents will have their <color style='color:#99FF88;'>Dendro RES</color> decreased by 20%. This effect will be removed when Nefer exits the Shadow Dance state or after she strays a certain distance away from the opponents for 4.5s.",
                        "Icon": "UI_Talent_S_Nefer_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Opportunity Hides in the Margins",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Sacred Vow: True Eye's Phantasm</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Nefer_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Victory Flows from the Turning of Tides",
                        "Desc": "When Nefer unleashes <color style='color:#FFD780;'>Phantasm Performance</color>, the second stage of DMG dealt by herself will be converted to deal <color style='color:#99FF88;'>AoE Dendro DMG</color> equal to 85% of her Elemental Mastery. Additionally, when the attacks from Phantasm Performance end, an extra instance of <color style='color:#99FF88;'>AoE Dendro DMG</color> equal to 120% of Nefer's Elemental Mastery will be dealt. All of the aforementioned DMG is considered Lunar-Bloom DMG dealt by Phantasm Performance.<br><br><color style='color:#FFD780;'>Moonsign: Ascendant Gleam</color><br>Nefer's Lunar-Bloom DMG is <color style='color:#FFD780;'>elevated</color> by 15%.",
                        "Icon": "UI_Talent_S_Nefer_04"
                    }
                ],
                "HyperLinks": [
                    {
                        "Name": "Elevation",
                        "Desc": "Special DMG Boost effect. It is calculated independently of other DMG Boost effects."
                    },
                    {
                        "Name": "Verdant Dew",
                        "Desc": "When party members trigger Lunar-Bloom reactions, the party will receive such a resource.<br>Your party will receive 1 Verdant Dew every 2.5s for 2.5s after triggering a Lunar-Bloom reaction. Your party can have up to 3 Verdant Dew. If you trigger another Lunar-Bloom reaction during this time, the duration of this effect will be reset."
                    },
                    {
                        "Name": "Shadow Dance",
                        "Desc": "After using the Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, Nefer will enter this state.<br>While in the Shadow Dance state, if you have at least 1 Verdant Dew, Nefer's Charged Attacks will be replaced with the special Charged Attack Phantasm Performance.<br>Nefer will exit the Shadow Dance state when she unleashes 3 Phantasm Performance(s) or the state's duration ends."
                    },
                    {
                        "Name": "Phantasm Performance",
                        "Desc": "When in the Shadow Dance state caused by her Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, if you have at least 1 Verdant Dew, Nefer's Charged Attacks will be replaced with the special Charged Attack Phantasm Performance, which will not consume Stamina.<br>Nefer summons a shade of herself to perform Coordinated Attacks against enemies. Nefer and the shade will deal 2 and 3 stages of <color style='color:#99FF88;'>AoE Dendro DMG</color> respectively. DMG dealt by the shade is considered Lunar-Bloom DMG. 1 Verdant Dew will be consumed the first time a shade is summoned after every Phantasm Performance."
                    },
                    {
                        "Name": "Veil of Falsehood",
                        "Desc": "After absorbing Seeds of Deceit via the Passive Talent A Wager of Moonlight, Nefer gains this effect, thereby increasing the DMG dealt by her Phantasm Performance.<br>Each stack of Veil of Falsehood increases the DMG dealt by Nefer's Phantasm Performance by 10.0%. The initial maximum number of stacks is 3, with each stack lasting for 9s (each stack's duration is counted independently)."
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Name": "Striking Serpent",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 kicks that deal <color style='color:#99FF88;'>Dendro DMG</color> with the ferocity and grace of a striking serpent.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Nefer enters the Slither state, consuming Stamina to move rapidly forward for up to 2.5s. When the skill button is released, the duration ends, or Stamina runs out, Nefer will exit the Slither state and consume a certain amount of additional Stamina to deal <color style='color:#99FF88;'>Dendro DMG</color> to opponents.<br>Additionally, unleashing the Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color> or sprinting while Nefer is in the Slither state will not cause her to exit the state.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Calling upon the might of Dendro, Nefer plunges towards the ground from mid-air, damaging all opponents in her path and dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "38.0712%",
                                    "40.9265%",
                                    "43.7819%",
                                    "47.589%",
                                    "50.4443%",
                                    "53.2997%",
                                    "57.1068%",
                                    "60.9139%",
                                    "64.721%",
                                    "68.5282%",
                                    "72.3353%",
                                    "76.1424%",
                                    "80.9013%",
                                    "85.6602%",
                                    "90.4191%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "37.564%",
                                    "40.3813%",
                                    "43.1986%",
                                    "46.955%",
                                    "49.7723%",
                                    "52.5896%",
                                    "56.346%",
                                    "60.1024%",
                                    "63.8588%",
                                    "67.6152%",
                                    "71.3716%",
                                    "75.128%",
                                    "79.8235%",
                                    "84.519%",
                                    "89.2145%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "25.24%×2",
                                    "27.133%×2",
                                    "29.026%×2",
                                    "31.55%×2",
                                    "33.443%×2",
                                    "35.336%×2",
                                    "37.86%×2",
                                    "40.384%×2",
                                    "42.908%×2",
                                    "45.432%×2",
                                    "47.956%×2",
                                    "50.48%×2",
                                    "53.635%×2",
                                    "56.79%×2",
                                    "59.945%×2"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "60.9944%",
                                    "65.569%",
                                    "70.1436%",
                                    "76.243%",
                                    "80.8176%",
                                    "85.3922%",
                                    "91.4916%",
                                    "97.591%",
                                    "103.6905%",
                                    "109.7899%",
                                    "115.8894%",
                                    "121.9888%",
                                    "129.6131%",
                                    "137.2374%",
                                    "144.8617%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "130.88%",
                                    "140.696%",
                                    "150.512%",
                                    "163.6%",
                                    "173.416%",
                                    "183.232%",
                                    "196.32%",
                                    "209.408%",
                                    "222.496%",
                                    "235.584%",
                                    "248.672%",
                                    "261.76%",
                                    "278.12%",
                                    "294.48%",
                                    "310.84%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Charging Stamina Drain",
                                "ParamLevelList": [
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s"
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
                        "Name": "Senet Strategy: Dance of a Thousand Nights",
                        "Desc": "A dance that dissolved dynasties, as chilling as a winter's night on the great sea of sand, yet lingering with the tenderness of moonlit gauze. Nefer charges forward, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> and entering the <color style='color:#FFD780;'>Shadow Dance</color> state.<br>While in the Shadow Dance state, if you have at least 1 <color style='color:#FFD780;'>Verdant Dew</color>, Nefer's Charged Attacks will be replaced with the special Charged Attack <color style='color:#FFD780;'>Phantasm Performance</color>.<br><br>Has 2 initial usages.<br><br><i>\"The world is a game in which the pieces remain hidden behind a veil. To avoid falling into a trap, one must collect every piece of information one can. This is the meaning of secrets.\"</i>",
                        "Icon": "Skill_S_Nefer_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "76.384% ATK+152.768% Elemental Mastery",
                                    "82.1128% ATK+164.2256% Elemental Mastery",
                                    "87.8416% ATK+175.6832% Elemental Mastery",
                                    "95.48% ATK+190.96% Elemental Mastery",
                                    "101.2088% ATK+202.4176% Elemental Mastery",
                                    "106.9376% ATK+213.8752% Elemental Mastery",
                                    "114.576% ATK+229.152% Elemental Mastery",
                                    "122.2144% ATK+244.4288% Elemental Mastery",
                                    "129.8528% ATK+259.7056% Elemental Mastery",
                                    "137.4912% ATK+274.9824% Elemental Mastery",
                                    "145.1296% ATK+290.2592% Elemental Mastery",
                                    "152.768% ATK+305.536% Elemental Mastery",
                                    "162.316% ATK+324.632% Elemental Mastery",
                                    "171.864% ATK+343.728% Elemental Mastery",
                                    "181.412% ATK+362.824% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 1-Hit DMG (Nefer)",
                                "ParamLevelList": [
                                    "24.64% ATK+49.28% Elemental Mastery",
                                    "26.488% ATK+52.976% Elemental Mastery",
                                    "28.336% ATK+56.672% Elemental Mastery",
                                    "30.8% ATK+61.6% Elemental Mastery",
                                    "32.648% ATK+65.296% Elemental Mastery",
                                    "34.496% ATK+68.992% Elemental Mastery",
                                    "36.96% ATK+73.92% Elemental Mastery",
                                    "39.424% ATK+78.848% Elemental Mastery",
                                    "41.888% ATK+83.776% Elemental Mastery",
                                    "44.352% ATK+88.704% Elemental Mastery",
                                    "46.816% ATK+93.632% Elemental Mastery",
                                    "49.28% ATK+98.56% Elemental Mastery",
                                    "52.36% ATK+104.72% Elemental Mastery",
                                    "55.44% ATK+110.88% Elemental Mastery",
                                    "58.52% ATK+117.04% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 2-Hit DMG (Nefer)",
                                "ParamLevelList": [
                                    "32.032% ATK+64.064% Elemental Mastery",
                                    "34.4344% ATK+68.8688% Elemental Mastery",
                                    "36.8368% ATK+73.6736% Elemental Mastery",
                                    "40.04% ATK+80.08% Elemental Mastery",
                                    "42.4424% ATK+84.8848% Elemental Mastery",
                                    "44.8448% ATK+89.6896% Elemental Mastery",
                                    "48.048% ATK+96.096% Elemental Mastery",
                                    "51.2512% ATK+102.5024% Elemental Mastery",
                                    "54.4544% ATK+108.9088% Elemental Mastery",
                                    "57.6576% ATK+115.3152% Elemental Mastery",
                                    "60.8608% ATK+121.7216% Elemental Mastery",
                                    "64.064% ATK+128.128% Elemental Mastery",
                                    "68.068% ATK+136.136% Elemental Mastery",
                                    "72.072% ATK+144.144% Elemental Mastery",
                                    "76.076% ATK+152.152% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 1-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "96.0% Elemental Mastery",
                                    "103.2% Elemental Mastery",
                                    "110.4% Elemental Mastery",
                                    "120.0% Elemental Mastery",
                                    "127.2% Elemental Mastery",
                                    "134.4% Elemental Mastery",
                                    "144.0% Elemental Mastery",
                                    "153.6% Elemental Mastery",
                                    "163.2% Elemental Mastery",
                                    "172.8% Elemental Mastery",
                                    "182.4% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.0% Elemental Mastery",
                                    "216.0% Elemental Mastery",
                                    "228.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 2-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "96.0% Elemental Mastery",
                                    "103.2% Elemental Mastery",
                                    "110.4% Elemental Mastery",
                                    "120.0% Elemental Mastery",
                                    "127.2% Elemental Mastery",
                                    "134.4% Elemental Mastery",
                                    "144.0% Elemental Mastery",
                                    "153.6% Elemental Mastery",
                                    "163.2% Elemental Mastery",
                                    "172.8% Elemental Mastery",
                                    "182.4% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.0% Elemental Mastery",
                                    "216.0% Elemental Mastery",
                                    "228.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 3-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "128.0% Elemental Mastery",
                                    "137.6% Elemental Mastery",
                                    "147.2% Elemental Mastery",
                                    "160.0% Elemental Mastery",
                                    "169.6% Elemental Mastery",
                                    "179.2% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.8% Elemental Mastery",
                                    "217.6% Elemental Mastery",
                                    "230.4% Elemental Mastery",
                                    "243.2% Elemental Mastery",
                                    "256.0% Elemental Mastery",
                                    "272.0% Elemental Mastery",
                                    "288.0% Elemental Mastery",
                                    "304.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance Usages",
                                "ParamLevelList": [
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3"
                                ]
                            },
                            {
                                "Desc": "Shadow Dance Duration",
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
                            }
                        ]
                    },
                    {
                        "Name": "Sacred Vow: True Eye's Phantasm",
                        "Desc": "Grant \"revelation\" to the mysteries of the false through Thoth's true sight, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> to opponents ahead. When unleashed, Nefer will consume all <color style='color:#FFD780;'>Veils of Falsehood</color> to increase the DMG dealt by the current Elemental Burst.<br><br><i>The blessings of the Ibis King proclaimed by the singers of the burning sands are, in truth, more akin to dire curses.</i>",
                        "Icon": "Skill_E_Nefer_01",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "224.64% ATK+449.28% Elemental Mastery",
                                    "241.488% ATK+482.976% Elemental Mastery",
                                    "258.336% ATK+516.672% Elemental Mastery",
                                    "280.8% ATK+561.6% Elemental Mastery",
                                    "297.648% ATK+595.296% Elemental Mastery",
                                    "314.496% ATK+628.992% Elemental Mastery",
                                    "336.96% ATK+673.92% Elemental Mastery",
                                    "359.424% ATK+718.848% Elemental Mastery",
                                    "381.888% ATK+763.776% Elemental Mastery",
                                    "404.352% ATK+808.704% Elemental Mastery",
                                    "426.816% ATK+853.632% Elemental Mastery",
                                    "449.28% ATK+898.56% Elemental Mastery",
                                    "477.36% ATK+954.72% Elemental Mastery",
                                    "505.44% ATK+1010.88% Elemental Mastery",
                                    "533.52% ATK+1067.04% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "336.96% ATK+673.92% Elemental Mastery",
                                    "362.232% ATK+724.464% Elemental Mastery",
                                    "387.504% ATK+775.008% Elemental Mastery",
                                    "421.2% ATK+842.4% Elemental Mastery",
                                    "446.472% ATK+892.944% Elemental Mastery",
                                    "471.744% ATK+943.488% Elemental Mastery",
                                    "505.44% ATK+1010.88% Elemental Mastery",
                                    "539.136% ATK+1078.272% Elemental Mastery",
                                    "572.832% ATK+1145.664% Elemental Mastery",
                                    "606.528% ATK+1213.056% Elemental Mastery",
                                    "640.224% ATK+1280.448% Elemental Mastery",
                                    "673.92% ATK+1347.84% Elemental Mastery",
                                    "716.04% ATK+1432.08% Elemental Mastery",
                                    "758.16% ATK+1516.32% Elemental Mastery",
                                    "800.28% ATK+1600.56% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "DMG Bonus",
                                "ParamLevelList": [
                                    "13.0% Per Veil of Falsehood Stack",
                                    "16.0% Per Veil of Falsehood Stack",
                                    "19.0% Per Veil of Falsehood Stack",
                                    "22.0% Per Veil of Falsehood Stack",
                                    "25.0% Per Veil of Falsehood Stack",
                                    "28.0% Per Veil of Falsehood Stack",
                                    "31.0% Per Veil of Falsehood Stack",
                                    "34.0% Per Veil of Falsehood Stack",
                                    "37.0% Per Veil of Falsehood Stack",
                                    "40.0% Per Veil of Falsehood Stack",
                                    "43.0% Per Veil of Falsehood Stack",
                                    "46.0% Per Veil of Falsehood Stack",
                                    "49.0% Per Veil of Falsehood Stack",
                                    "52.0% Per Veil of Falsehood Stack",
                                    "55.0% Per Veil of Falsehood Stack"
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
                        "Name": "A Wager of Moonlight",
                        "Desc": "Nefer will be granted the corresponding buff effects based on the party's <color style='color:#FFD780;'>Moonsign</color>.<br><br><color style='color:#FFD780;'>Moonsign: Ascendant Gleam</color>: When she unleashes her Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, any Dendro Cores and Bountiful Cores on the field will be converted to Seeds of Deceit, and any Lunar-Bloom reactions triggered by nearby characters in the following 15s that would create Dendro Cores or Bountiful Cores will instead create Seeds of Deceit. Seeds of Deceit cannot trigger Hyperbloom or Burgeon reactions and will not burst.<br>When Nefer unleashes a Charged Attack or <color style='color:#FFD780;'>Phantasm Performance</color>, she can absorb Seeds of Deceit within a certain range, gaining 1 stack of <color style='color:#FFD780;'>Veil of Falsehood</color> for every seed absorbed. When this effect gains 3 stacks, or when the third stack's duration is refreshed, Nefer's Elemental Mastery will be increased by 100 for 8s.",
                        "Icon": "UI_Talent_S_Nefer_05"
                    },
                    {
                        "Name": "Daughter of the Dust and Sand",
                        "Desc": "Each point of Nefer's Elemental Mastery beyond 500 will increase her ATK by 0.4. A maximum of 200 ATK can be gained in this manner.",
                        "Icon": "UI_Talent_S_Nefer_06"
                    },
                    {
                        "Name": "Moonsign Benediction: Dusklit Eaves",
                        "Desc": "When a party member triggers a Bloom reaction, it will be converted into the Lunar-Bloom reaction, with every point of Elemental Mastery that Nefer has increasing Lunar-Bloom's Base DMG by 0.0175%, up to a maximum of 14%.<br><br>Additionally, when Nefer is in the party, the party's <color style='color:#FFD780;'>Moonsign</color> will increase by 1 level.",
                        "Icon": "UI_Talent_S_Nefer_07"
                    },
                    {
                        "Name": "Conspiracy of the Golden Vault",
                        "Desc": "Gains 25% more rewards when dispatched on a Nod-Krai Expedition for 20 hours.<br>Additionally, as the head of the Curatorium of Secrets, Nefer seemingly has the ability to obtain intelligence from a variety of sources — intelligence that certain factions in Nasha Town might find extremely interesting...",
                        "Icon": "UI_Talent_S_Nefer_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Planning Breeds Success",
                        "Desc": "The Base DMG for Lunar-Bloom reactions caused by Nefer's <color style='color:#FFD780;'>Phantasm Performance</color> is increased by 60% of her Elemental Mastery. This effect is also boosted by <color style='color:#FFD780;'>Veil of Falsehood</color>.",
                        "Icon": "UI_Talent_S_Nefer_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Observation Feeds Strategy",
                        "Desc": "Enhances the effects of the Ascension Talent <color style='color:#FFD780;'>A Wager of Moonlight</color>: Extends <color style='color:#FFD780;'>Veil of Falsehood</color>'s duration by 5s, and increases its stack limit to 5, as well as causing <color style='color:#FFD780;'>Phantasm Performance</color> to deal up to 150% of its original DMG. When Nefer unleashes her Elemental Skill, she will instantly gain 2 stacks of Veil of Falsehood. Additionally, when Veil of Falsehood gains 5 stacks, or when the fifth stack's duration is refreshed, Nefer's Elemental Mastery will be increased by 200 for 8s instead.<br>You must first unlock the Ascension Talent \"A Wager of Moonlight.\"",
                        "Icon": "UI_Talent_S_Nefer_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Deceit Cloaks the Truth",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Nefer_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Delusion Ensnares Reason",
                        "Desc": "When Nefer is on the field and in the <color style='color:#FFD780;'>Shadow Dance</color> state, you will gain Verdant Dew 25% faster.<br>Additionally, while Nefer is in the Shadow Dance state, nearby opponents will have their <color style='color:#99FF88;'>Dendro RES</color> decreased by 20%. This effect will be removed when Nefer exits the Shadow Dance state or after she strays a certain distance away from the opponents for 4.5s.",
                        "Icon": "UI_Talent_S_Nefer_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Opportunity Hides in the Margins",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Sacred Vow: True Eye's Phantasm</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Nefer_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Victory Flows from the Turning of Tides",
                        "Desc": "When Nefer unleashes <color style='color:#FFD780;'>Phantasm Performance</color>, the second stage of DMG dealt by herself will be converted to deal <color style='color:#99FF88;'>AoE Dendro DMG</color> equal to 85% of her Elemental Mastery. Additionally, when the attacks from Phantasm Performance end, an extra instance of <color style='color:#99FF88;'>AoE Dendro DMG</color> equal to 120% of Nefer's Elemental Mastery will be dealt. All of the aforementioned DMG is considered Lunar-Bloom DMG dealt by Phantasm Performance.<br><br><color style='color:#FFD780;'>Moonsign: Ascendant Gleam</color><br>Nefer's Lunar-Bloom DMG is <color style='color:#FFD780;'>elevated</color> by 15%.",
                        "Icon": "UI_Talent_S_Nefer_04"
                    }
                ],
                "HyperLinks": [
                    {
                        "Name": "Elevation",
                        "Desc": "Special DMG Boost effect. It is calculated independently of other DMG Boost effects."
                    },
                    {
                        "Name": "Verdant Dew",
                        "Desc": "When party members trigger Lunar-Bloom reactions, the party will receive such a resource.<br>Your party will receive 1 Verdant Dew every 2.5s for 2.5s after triggering a Lunar-Bloom reaction. Your party can have up to 3 Verdant Dew. If you trigger another Lunar-Bloom reaction during this time, the duration of this effect will be reset."
                    },
                    {
                        "Name": "Shadow Dance",
                        "Desc": "After using the Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, Nefer will enter this state.<br>While in the Shadow Dance state, if you have at least 1 Verdant Dew, Nefer's Charged Attacks will be replaced with the special Charged Attack Phantasm Performance.<br>Nefer will exit the Shadow Dance state when she unleashes 3 Phantasm Performance(s) or the state's duration ends."
                    },
                    {
                        "Name": "Phantasm Performance",
                        "Desc": "When in the Shadow Dance state caused by her Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, if you have at least 1 Verdant Dew, Nefer's Charged Attacks will be replaced with the special Charged Attack Phantasm Performance, which will not consume Stamina.<br>Nefer summons a shade of herself to perform Coordinated Attacks against enemies. Nefer and the shade will deal 2 and 3 stages of <color style='color:#99FF88;'>AoE Dendro DMG</color> respectively. DMG dealt by the shade is considered Lunar-Bloom DMG. 1 Verdant Dew will be consumed the first time a shade is summoned after every Phantasm Performance."
                    },
                    {
                        "Name": "Veil of Falsehood",
                        "Desc": "After absorbing Seeds of Deceit via the Ascension Talent A Wager of Moonlight, Nefer gains this effect, thereby increasing the DMG dealt by her Phantasm Performance.<br>Each stack of Veil of Falsehood increases the DMG dealt by Nefer's Phantasm Performance by 8.0%. The initial maximum number of stacks is 3, with each stack lasting for 9s (each stack's duration is counted independently)."
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Name": "Striking Serpent",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 kicks that deal <color style='color:#99FF88;'>Dendro DMG</color> with the ferocity and grace of a striking serpent.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Nefer enters the Slither state, consuming Stamina to move rapidly forward for up to 2.5s. When the skill button is released, the duration ends, or Stamina runs out, Nefer will exit the Slither state and consume a certain amount of additional Stamina to deal <color style='color:#99FF88;'>Dendro DMG</color> to opponents. When in the Shadow Dance state, additional Stamina consumption is decreased.<br>Additionally, unleashing the Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color> or sprinting while Nefer is in the Slither state will not cause her to exit the state.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Calling upon the might of Dendro, Nefer plunges towards the ground from mid-air, damaging all opponents in her path and dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "38.0712%",
                                    "40.9265%",
                                    "43.7819%",
                                    "47.589%",
                                    "50.4443%",
                                    "53.2997%",
                                    "57.1068%",
                                    "60.9139%",
                                    "64.721%",
                                    "68.5282%",
                                    "72.3353%",
                                    "76.1424%",
                                    "80.9013%",
                                    "85.6602%",
                                    "90.4191%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "37.564%",
                                    "40.3813%",
                                    "43.1986%",
                                    "46.955%",
                                    "49.7723%",
                                    "52.5896%",
                                    "56.346%",
                                    "60.1024%",
                                    "63.8588%",
                                    "67.6152%",
                                    "71.3716%",
                                    "75.128%",
                                    "79.8235%",
                                    "84.519%",
                                    "89.2145%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "25.24%×2",
                                    "27.133%×2",
                                    "29.026%×2",
                                    "31.55%×2",
                                    "33.443%×2",
                                    "35.336%×2",
                                    "37.86%×2",
                                    "40.384%×2",
                                    "42.908%×2",
                                    "45.432%×2",
                                    "47.956%×2",
                                    "50.48%×2",
                                    "53.635%×2",
                                    "56.79%×2",
                                    "59.945%×2"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "60.9944%",
                                    "65.569%",
                                    "70.1436%",
                                    "76.243%",
                                    "80.8176%",
                                    "85.3922%",
                                    "91.4916%",
                                    "97.591%",
                                    "103.6905%",
                                    "109.7899%",
                                    "115.8894%",
                                    "121.9888%",
                                    "129.6131%",
                                    "137.2374%",
                                    "144.8617%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "130.88%",
                                    "140.696%",
                                    "150.512%",
                                    "163.6%",
                                    "173.416%",
                                    "183.232%",
                                    "196.32%",
                                    "209.408%",
                                    "222.496%",
                                    "235.584%",
                                    "248.672%",
                                    "261.76%",
                                    "278.12%",
                                    "294.48%",
                                    "310.84%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Charging Stamina Drain",
                                "ParamLevelList": [
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s"
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
                                "Desc": "Shadow Dance Charged Attack Stamina Cost",
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
                        "Name": "Senet Strategy: Dance of a Thousand Nights",
                        "Desc": "A dance that dissolved dynasties, as chilling as a winter's night on the great sea of sand, yet lingering with the tenderness of moonlit gauze. Nefer charges forward, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> and entering the <color style='color:#FFD780;'>Shadow Dance</color> state.<br>While in the Shadow Dance state, if you have at least 1 <color style='color:#FFD780;'>Verdant Dew</color>, Nefer's Charged Attacks will be replaced with the special Charged Attack <color style='color:#FFD780;'>Phantasm Performance</color>, which will not consume Stamina. When in the Shadow Dance state, Nefer's resistance to interruption is increased.<br><br>Has 2 initial usages.<br><br><i>\"The world is a game in which the pieces remain hidden behind a veil. To avoid falling into a trap, one must collect every piece of information one can. This is the meaning of secrets.\"</i>",
                        "Icon": "Skill_S_Nefer_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "76.384% ATK+152.768% Elemental Mastery",
                                    "82.1128% ATK+164.2256% Elemental Mastery",
                                    "87.8416% ATK+175.6832% Elemental Mastery",
                                    "95.48% ATK+190.96% Elemental Mastery",
                                    "101.2088% ATK+202.4176% Elemental Mastery",
                                    "106.9376% ATK+213.8752% Elemental Mastery",
                                    "114.576% ATK+229.152% Elemental Mastery",
                                    "122.2144% ATK+244.4288% Elemental Mastery",
                                    "129.8528% ATK+259.7056% Elemental Mastery",
                                    "137.4912% ATK+274.9824% Elemental Mastery",
                                    "145.1296% ATK+290.2592% Elemental Mastery",
                                    "152.768% ATK+305.536% Elemental Mastery",
                                    "162.316% ATK+324.632% Elemental Mastery",
                                    "171.864% ATK+343.728% Elemental Mastery",
                                    "181.412% ATK+362.824% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 1-Hit DMG (Nefer)",
                                "ParamLevelList": [
                                    "24.64% ATK+49.28% Elemental Mastery",
                                    "26.488% ATK+52.976% Elemental Mastery",
                                    "28.336% ATK+56.672% Elemental Mastery",
                                    "30.8% ATK+61.6% Elemental Mastery",
                                    "32.648% ATK+65.296% Elemental Mastery",
                                    "34.496% ATK+68.992% Elemental Mastery",
                                    "36.96% ATK+73.92% Elemental Mastery",
                                    "39.424% ATK+78.848% Elemental Mastery",
                                    "41.888% ATK+83.776% Elemental Mastery",
                                    "44.352% ATK+88.704% Elemental Mastery",
                                    "46.816% ATK+93.632% Elemental Mastery",
                                    "49.28% ATK+98.56% Elemental Mastery",
                                    "52.36% ATK+104.72% Elemental Mastery",
                                    "55.44% ATK+110.88% Elemental Mastery",
                                    "58.52% ATK+117.04% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 2-Hit DMG (Nefer)",
                                "ParamLevelList": [
                                    "32.032% ATK+64.064% Elemental Mastery",
                                    "34.4344% ATK+68.8688% Elemental Mastery",
                                    "36.8368% ATK+73.6736% Elemental Mastery",
                                    "40.04% ATK+80.08% Elemental Mastery",
                                    "42.4424% ATK+84.8848% Elemental Mastery",
                                    "44.8448% ATK+89.6896% Elemental Mastery",
                                    "48.048% ATK+96.096% Elemental Mastery",
                                    "51.2512% ATK+102.5024% Elemental Mastery",
                                    "54.4544% ATK+108.9088% Elemental Mastery",
                                    "57.6576% ATK+115.3152% Elemental Mastery",
                                    "60.8608% ATK+121.7216% Elemental Mastery",
                                    "64.064% ATK+128.128% Elemental Mastery",
                                    "68.068% ATK+136.136% Elemental Mastery",
                                    "72.072% ATK+144.144% Elemental Mastery",
                                    "76.076% ATK+152.152% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 1-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "96.0% Elemental Mastery",
                                    "103.2% Elemental Mastery",
                                    "110.4% Elemental Mastery",
                                    "120.0% Elemental Mastery",
                                    "127.2% Elemental Mastery",
                                    "134.4% Elemental Mastery",
                                    "144.0% Elemental Mastery",
                                    "153.6% Elemental Mastery",
                                    "163.2% Elemental Mastery",
                                    "172.8% Elemental Mastery",
                                    "182.4% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.0% Elemental Mastery",
                                    "216.0% Elemental Mastery",
                                    "228.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 2-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "96.0% Elemental Mastery",
                                    "103.2% Elemental Mastery",
                                    "110.4% Elemental Mastery",
                                    "120.0% Elemental Mastery",
                                    "127.2% Elemental Mastery",
                                    "134.4% Elemental Mastery",
                                    "144.0% Elemental Mastery",
                                    "153.6% Elemental Mastery",
                                    "163.2% Elemental Mastery",
                                    "172.8% Elemental Mastery",
                                    "182.4% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.0% Elemental Mastery",
                                    "216.0% Elemental Mastery",
                                    "228.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 3-Hit DMG (Shade)",
                                "ParamLevelList": [
                                    "128.0% Elemental Mastery",
                                    "137.6% Elemental Mastery",
                                    "147.2% Elemental Mastery",
                                    "160.0% Elemental Mastery",
                                    "169.6% Elemental Mastery",
                                    "179.2% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.8% Elemental Mastery",
                                    "217.6% Elemental Mastery",
                                    "230.4% Elemental Mastery",
                                    "243.2% Elemental Mastery",
                                    "256.0% Elemental Mastery",
                                    "272.0% Elemental Mastery",
                                    "288.0% Elemental Mastery",
                                    "304.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance Usages",
                                "ParamLevelList": [
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3"
                                ]
                            },
                            {
                                "Desc": "Shadow Dance Duration",
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
                            }
                        ]
                    },
                    {
                        "Name": "Sacred Vow: True Eye's Phantasm",
                        "Desc": "Grant \"revelation\" to the mysteries of the false through Thoth's true sight, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> to opponents ahead. When unleashed, Nefer will consume all <color style='color:#FFD780;'>Veils of Falsehood</color> to increase the DMG dealt by the current Elemental Burst.<br><br><i>The blessings of the Ibis King proclaimed by the singers of the burning sands are, in truth, more akin to dire curses.</i>",
                        "Icon": "Skill_E_Nefer_01",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "224.64% ATK+449.28% Elemental Mastery",
                                    "241.488% ATK+482.976% Elemental Mastery",
                                    "258.336% ATK+516.672% Elemental Mastery",
                                    "280.8% ATK+561.6% Elemental Mastery",
                                    "297.648% ATK+595.296% Elemental Mastery",
                                    "314.496% ATK+628.992% Elemental Mastery",
                                    "336.96% ATK+673.92% Elemental Mastery",
                                    "359.424% ATK+718.848% Elemental Mastery",
                                    "381.888% ATK+763.776% Elemental Mastery",
                                    "404.352% ATK+808.704% Elemental Mastery",
                                    "426.816% ATK+853.632% Elemental Mastery",
                                    "449.28% ATK+898.56% Elemental Mastery",
                                    "477.36% ATK+954.72% Elemental Mastery",
                                    "505.44% ATK+1010.88% Elemental Mastery",
                                    "533.52% ATK+1067.04% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "336.96% ATK+673.92% Elemental Mastery",
                                    "362.232% ATK+724.464% Elemental Mastery",
                                    "387.504% ATK+775.008% Elemental Mastery",
                                    "421.2% ATK+842.4% Elemental Mastery",
                                    "446.472% ATK+892.944% Elemental Mastery",
                                    "471.744% ATK+943.488% Elemental Mastery",
                                    "505.44% ATK+1010.88% Elemental Mastery",
                                    "539.136% ATK+1078.272% Elemental Mastery",
                                    "572.832% ATK+1145.664% Elemental Mastery",
                                    "606.528% ATK+1213.056% Elemental Mastery",
                                    "640.224% ATK+1280.448% Elemental Mastery",
                                    "673.92% ATK+1347.84% Elemental Mastery",
                                    "716.04% ATK+1432.08% Elemental Mastery",
                                    "758.16% ATK+1516.32% Elemental Mastery",
                                    "800.28% ATK+1600.56% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "DMG Bonus",
                                "ParamLevelList": [
                                    "13.0% Per Veil of Falsehood Stack",
                                    "16.0% Per Veil of Falsehood Stack",
                                    "19.0% Per Veil of Falsehood Stack",
                                    "22.0% Per Veil of Falsehood Stack",
                                    "25.0% Per Veil of Falsehood Stack",
                                    "28.0% Per Veil of Falsehood Stack",
                                    "31.0% Per Veil of Falsehood Stack",
                                    "34.0% Per Veil of Falsehood Stack",
                                    "37.0% Per Veil of Falsehood Stack",
                                    "40.0% Per Veil of Falsehood Stack",
                                    "43.0% Per Veil of Falsehood Stack",
                                    "46.0% Per Veil of Falsehood Stack",
                                    "49.0% Per Veil of Falsehood Stack",
                                    "52.0% Per Veil of Falsehood Stack",
                                    "55.0% Per Veil of Falsehood Stack"
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
                        "Name": "A Wager of Moonlight",
                        "Desc": "Nefer will be granted the corresponding buff effects based on the party's <color style='color:#FFD780;'>Moonsign</color>.<br><br><color style='color:#FFD780;'>Moonsign: Ascendant Gleam</color>: When she unleashes her Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, any Dendro Cores and Bountiful Cores on the field will be converted to Seeds of Deceit, and any Lunar-Bloom reactions triggered by nearby characters in the following 15s that would create Dendro Cores or Bountiful Cores will instead create Seeds of Deceit. Seeds of Deceit cannot trigger Hyperbloom or Burgeon reactions and will not burst.<br>When Nefer unleashes a Charged Attack or <color style='color:#FFD780;'>Phantasm Performance</color>, she can absorb Seeds of Deceit within a certain range, gaining 1 stack of <color style='color:#FFD780;'>Veil of Falsehood</color> for every seed absorbed. When this effect gains 3 stacks, or when the third stack's duration is refreshed, Nefer's Elemental Mastery will be increased by 100 for 8s.",
                        "Icon": "UI_Talent_S_Nefer_05"
                    },
                    {
                        "Name": "Daughter of the Dust and Sand",
                        "Desc": "When Nefer is in the <color style='color:#FFD780;'>Shadow Dance</color> state, if she enters the Slither state within 5s of a party member triggering a Lunar-Bloom reaction, she will continuously regenerate Verdant Dew. Every 100 points of Nefer's Elemental Mastery beyond 500 will strengthen this regeneration effect by 10%, up to a maximum of 50%.",
                        "Icon": "UI_Talent_S_Nefer_06"
                    },
                    {
                        "Name": "Moonsign Benediction: Dusklit Eaves",
                        "Desc": "When a party member triggers a Bloom reaction, it will be converted into the Lunar-Bloom reaction, with every point of Elemental Mastery that Nefer has increasing Lunar-Bloom's Base DMG by 0.0175%, up to a maximum of 14%.<br><br>Additionally, when Nefer is in the party, the party's <color style='color:#FFD780;'>Moonsign</color> will increase by 1 level.",
                        "Icon": "UI_Talent_S_Nefer_07"
                    },
                    {
                        "Name": "Conspiracy of the Golden Vault",
                        "Desc": "Gains 25% more rewards when dispatched on a Nod-Krai Expedition for 20 hours.<br>Additionally, as the head of the Curatorium of Secrets, Nefer seemingly has the ability to obtain intelligence from a variety of sources — intelligence that certain factions in Nasha Town might find extremely interesting...",
                        "Icon": "UI_Talent_S_Nefer_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Planning Breeds Success",
                        "Desc": "The Base DMG for Lunar-Bloom reactions caused by Nefer's <color style='color:#FFD780;'>Phantasm Performance</color> is increased by 60% of her Elemental Mastery. This effect is also boosted by <color style='color:#FFD780;'>Veil of Falsehood</color>.",
                        "Icon": "UI_Talent_S_Nefer_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Observation Feeds Strategy",
                        "Desc": "Enhances the effects of the Ascension Talent <color style='color:#FFD780;'>A Wager of Moonlight</color>: Extends <color style='color:#FFD780;'>Veil of Falsehood</color>'s duration by 5s, and increases its stack limit to 5, as well as causing <color style='color:#FFD780;'>Phantasm Performance</color> to deal up to 140% of its original DMG. When Nefer unleashes her Elemental Skill, she will instantly gain 2 stacks of Veil of Falsehood. Additionally, when Veil of Falsehood gains 5 stacks, or when the fifth stack's duration is refreshed, Nefer's Elemental Mastery will be increased by 200 for 8s instead.<br>You must first unlock the Ascension Talent \"A Wager of Moonlight.\"",
                        "Icon": "UI_Talent_S_Nefer_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Deceit Cloaks the Truth",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Nefer_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Delusion Ensnares Reason",
                        "Desc": "When Nefer is on the field and in the <color style='color:#FFD780;'>Shadow Dance</color> state, you will gain Verdant Dew 25% faster.<br>Additionally, while Nefer is in the Shadow Dance state, nearby opponents will have their <color style='color:#99FF88;'>Dendro RES</color> decreased by 20%. This effect will be removed when Nefer exits the Shadow Dance state or after she strays a certain distance away from the opponents for 4.5s.",
                        "Icon": "UI_Talent_S_Nefer_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Opportunity Hides in the Margins",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Sacred Vow: True Eye's Phantasm</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Nefer_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Victory Flows from the Turning of Tides",
                        "Desc": "When Nefer unleashes <color style='color:#FFD780;'>Phantasm Performance</color>, the second stage of DMG dealt by herself will be converted to deal <color style='color:#99FF88;'>AoE Dendro DMG</color> equal to 85% of her Elemental Mastery. Additionally, when the attacks from Phantasm Performance end, an extra instance of <color style='color:#99FF88;'>AoE Dendro DMG</color> equal to 120% of Nefer's Elemental Mastery will be dealt. All of the aforementioned DMG is considered Lunar-Bloom DMG dealt by Phantasm Performance.<br><br><color style='color:#FFD780;'>Moonsign: Ascendant Gleam</color><br>Nefer's Lunar-Bloom DMG is <color style='color:#FFD780;'>elevated</color> by 15%.",
                        "Icon": "UI_Talent_S_Nefer_04"
                    }
                ],
                "HyperLinks": [
                    {
                        "Name": "Elevation",
                        "Desc": "Special DMG Boost effect. It is calculated independently of other DMG Boost effects."
                    },
                    {
                        "Name": "Verdant Dew",
                        "Desc": "When party members trigger Lunar-Bloom reactions, the party will receive such a resource.<br>Your party will receive 1 Verdant Dew every 2.5s for 2.5s after triggering a Lunar-Bloom reaction. Your party can have up to 3 Verdant Dew. If you trigger another Lunar-Bloom reaction during this time, the duration of this effect will be reset."
                    },
                    {
                        "Name": "Shadow Dance",
                        "Desc": "After using the Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, Nefer will enter this state.<br>While in the Shadow Dance state, if you have at least 1 Verdant Dew, Nefer's Charged Attacks will be replaced with the special Charged Attack Phantasm Performance.<br>Nefer will exit the Shadow Dance state when she unleashes 3 Phantasm Performance(s) or the state's duration ends."
                    },
                    {
                        "Name": "Phantasm Performance",
                        "Desc": "When in the Shadow Dance state caused by her Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, if you have at least 1 Verdant Dew, Nefer's Charged Attacks will be replaced with the special Charged Attack Phantasm Performance, which will not consume Stamina.<br>Nefer summons a shade of herself to perform Coordinated Attacks against enemies. Nefer and the shade will deal 2 and 3 stages of <color style='color:#99FF88;'>AoE Dendro DMG</color> respectively. DMG dealt by the shade is considered Lunar-Bloom DMG. 1 Verdant Dew will be consumed the first time a shade is summoned after every Phantasm Performance."
                    },
                    {
                        "Name": "Veil of Falsehood",
                        "Desc": "After absorbing Seeds of Deceit via the Ascension Talent A Wager of Moonlight, Nefer gains this effect, thereby increasing the DMG dealt by her Phantasm Performance.<br>Each stack of Veil of Falsehood increases the DMG dealt by Nefer's Phantasm Performance by 8.0%. The initial maximum number of stacks is 3, with each stack lasting for 9s (each stack's duration is counted independently)."
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Striking Serpent",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 kicks that deal <color style='color:#99FF88;'>Dendro DMG</color> with the ferocity and grace of a striking serpent.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Nefer enters the Slither state, consuming Stamina to move rapidly forward for up to 2.5s. When the skill button is released, the duration ends, or Stamina runs out, Nefer will exit the Slither state and consume a certain amount of additional Stamina to deal <color style='color:#99FF88;'>Dendro DMG</color> to opponents. When in the <color style='color:#FFD780;'>Shadow Dance</color> state, additional Stamina consumption is decreased.<br>Additionally, unleashing the Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color> or sprinting while Nefer is in the Slither state will not cause her to exit the state.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Calling upon the might of Dendro, Nefer plunges towards the ground from mid-air, damaging all opponents in her path and dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> upon impact with the ground.",
                        "Icon": "Skill_A_Catalyst_MD",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "38.0712%",
                                    "40.9265%",
                                    "43.7819%",
                                    "47.589%",
                                    "50.4443%",
                                    "53.2997%",
                                    "57.1068%",
                                    "60.9139%",
                                    "64.721%",
                                    "68.5282%",
                                    "72.3353%",
                                    "76.1424%",
                                    "80.9013%",
                                    "85.6602%",
                                    "90.4191%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "37.564%",
                                    "40.3813%",
                                    "43.1986%",
                                    "46.955%",
                                    "49.7723%",
                                    "52.5896%",
                                    "56.346%",
                                    "60.1024%",
                                    "63.8588%",
                                    "67.6152%",
                                    "71.3716%",
                                    "75.128%",
                                    "79.8235%",
                                    "84.519%",
                                    "89.2145%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "25.24%×2",
                                    "27.133%×2",
                                    "29.026%×2",
                                    "31.55%×2",
                                    "33.443%×2",
                                    "35.336%×2",
                                    "37.86%×2",
                                    "40.384%×2",
                                    "42.908%×2",
                                    "45.432%×2",
                                    "47.956%×2",
                                    "50.48%×2",
                                    "53.635%×2",
                                    "56.79%×2",
                                    "59.945%×2"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "60.9944%",
                                    "65.569%",
                                    "70.1436%",
                                    "76.243%",
                                    "80.8176%",
                                    "85.3922%",
                                    "91.4916%",
                                    "97.591%",
                                    "103.6905%",
                                    "109.7899%",
                                    "115.8894%",
                                    "121.9888%",
                                    "129.6131%",
                                    "137.2374%",
                                    "144.8617%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "130.88%",
                                    "140.696%",
                                    "150.512%",
                                    "163.6%",
                                    "173.416%",
                                    "183.232%",
                                    "196.32%",
                                    "209.408%",
                                    "222.496%",
                                    "235.584%",
                                    "248.672%",
                                    "261.76%",
                                    "278.12%",
                                    "294.48%",
                                    "310.84%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Charging Stamina Drain",
                                "ParamLevelList": [
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s",
                                    "18.15/s"
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
                                "Desc": "Shadow Dance Charged Attack Stamina Cost",
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
                        "Name": "Senet Strategy: Dance of a Thousand Nights",
                        "Desc": "A dance that dissolved dynasties, as chilling as a winter's night on the great sea of sand, yet lingering with the tenderness of moonlit gauze. Nefer charges forward, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> and entering the <color style='color:#FFD780;'>Shadow Dance</color> state.<br>While in the Shadow Dance state, if you have at least 1 <color style='color:#FFD780;'>Verdant Dew</color>, Nefer's Charged Attacks will be replaced with the special Charged Attack <color style='color:#FFD780;'>Phantasm Performance</color>, which will not consume Stamina. When in the Shadow Dance state, Nefer's resistance to interruption is increased.<br><br>Two initial charges.<br><br><i>\"The world is a game in which the pieces remain hidden behind a veil. To avoid falling into a trap, one must collect every piece of information one can. This is the meaning of secrets.\"</i>",
                        "Icon": "Skill_S_Nefer_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "76.384% ATK+152.768% Elemental Mastery",
                                    "82.1128% ATK+164.2256% Elemental Mastery",
                                    "87.8416% ATK+175.6832% Elemental Mastery",
                                    "95.48% ATK+190.96% Elemental Mastery",
                                    "101.2088% ATK+202.4176% Elemental Mastery",
                                    "106.9376% ATK+213.8752% Elemental Mastery",
                                    "114.576% ATK+229.152% Elemental Mastery",
                                    "122.2144% ATK+244.4288% Elemental Mastery",
                                    "129.8528% ATK+259.7056% Elemental Mastery",
                                    "137.4912% ATK+274.9824% Elemental Mastery",
                                    "145.1296% ATK+290.2592% Elemental Mastery",
                                    "152.768% ATK+305.536% Elemental Mastery",
                                    "162.316% ATK+324.632% Elemental Mastery",
                                    "171.864% ATK+343.728% Elemental Mastery",
                                    "181.412% ATK+362.824% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 1-Hit DMG (Nefer)",
                                "ParamLevelList": [
                                    "24.64% ATK+49.28% Elemental Mastery",
                                    "26.488% ATK+52.976% Elemental Mastery",
                                    "28.336% ATK+56.672% Elemental Mastery",
                                    "30.8% ATK+61.6% Elemental Mastery",
                                    "32.648% ATK+65.296% Elemental Mastery",
                                    "34.496% ATK+68.992% Elemental Mastery",
                                    "36.96% ATK+73.92% Elemental Mastery",
                                    "39.424% ATK+78.848% Elemental Mastery",
                                    "41.888% ATK+83.776% Elemental Mastery",
                                    "44.352% ATK+88.704% Elemental Mastery",
                                    "46.816% ATK+93.632% Elemental Mastery",
                                    "49.28% ATK+98.56% Elemental Mastery",
                                    "52.36% ATK+104.72% Elemental Mastery",
                                    "55.44% ATK+110.88% Elemental Mastery",
                                    "58.52% ATK+117.04% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 2-Hit DMG (Nefer)",
                                "ParamLevelList": [
                                    "32.032% ATK+64.064% Elemental Mastery",
                                    "34.4344% ATK+68.8688% Elemental Mastery",
                                    "36.8368% ATK+73.6736% Elemental Mastery",
                                    "40.04% ATK+80.08% Elemental Mastery",
                                    "42.4424% ATK+84.8848% Elemental Mastery",
                                    "44.8448% ATK+89.6896% Elemental Mastery",
                                    "48.048% ATK+96.096% Elemental Mastery",
                                    "51.2512% ATK+102.5024% Elemental Mastery",
                                    "54.4544% ATK+108.9088% Elemental Mastery",
                                    "57.6576% ATK+115.3152% Elemental Mastery",
                                    "60.8608% ATK+121.7216% Elemental Mastery",
                                    "64.064% ATK+128.128% Elemental Mastery",
                                    "68.068% ATK+136.136% Elemental Mastery",
                                    "72.072% ATK+144.144% Elemental Mastery",
                                    "76.076% ATK+152.152% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 1-Hit DMG (Shades)",
                                "ParamLevelList": [
                                    "96.0% Elemental Mastery",
                                    "103.2% Elemental Mastery",
                                    "110.4% Elemental Mastery",
                                    "120.0% Elemental Mastery",
                                    "127.2% Elemental Mastery",
                                    "134.4% Elemental Mastery",
                                    "144.0% Elemental Mastery",
                                    "153.6% Elemental Mastery",
                                    "163.2% Elemental Mastery",
                                    "172.8% Elemental Mastery",
                                    "182.4% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.0% Elemental Mastery",
                                    "216.0% Elemental Mastery",
                                    "228.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 2-Hit DMG (Shades)",
                                "ParamLevelList": [
                                    "96.0% Elemental Mastery",
                                    "103.2% Elemental Mastery",
                                    "110.4% Elemental Mastery",
                                    "120.0% Elemental Mastery",
                                    "127.2% Elemental Mastery",
                                    "134.4% Elemental Mastery",
                                    "144.0% Elemental Mastery",
                                    "153.6% Elemental Mastery",
                                    "163.2% Elemental Mastery",
                                    "172.8% Elemental Mastery",
                                    "182.4% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.0% Elemental Mastery",
                                    "216.0% Elemental Mastery",
                                    "228.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance 3-Hit DMG (Shades)",
                                "ParamLevelList": [
                                    "128.0% Elemental Mastery",
                                    "137.6% Elemental Mastery",
                                    "147.2% Elemental Mastery",
                                    "160.0% Elemental Mastery",
                                    "169.6% Elemental Mastery",
                                    "179.2% Elemental Mastery",
                                    "192.0% Elemental Mastery",
                                    "204.8% Elemental Mastery",
                                    "217.6% Elemental Mastery",
                                    "230.4% Elemental Mastery",
                                    "243.2% Elemental Mastery",
                                    "256.0% Elemental Mastery",
                                    "272.0% Elemental Mastery",
                                    "288.0% Elemental Mastery",
                                    "304.0% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "Phantasm Performance Charges",
                                "ParamLevelList": [
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3",
                                    "3"
                                ]
                            },
                            {
                                "Desc": "Shadow Dance Duration",
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
                            }
                        ]
                    },
                    {
                        "Name": "Sacred Vow: True Eye's Phantasm",
                        "Desc": "Grant \"revelation\" to the mysteries of the false through Thoth's true sight, dealing <color style='color:#99FF88;'>AoE Dendro DMG</color> to opponents ahead. When unleashed, Nefer will consume all <color style='color:#FFD780;'>Veils of Falsehood</color> to increase the DMG dealt by the current Elemental Burst.<br><br><i>The blessings of the Ibis King proclaimed by the singers of the burning sands are, in truth, more akin to dire curses.</i>",
                        "Icon": "Skill_E_Nefer_01",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "224.64% ATK+449.28% Elemental Mastery",
                                    "241.488% ATK+482.976% Elemental Mastery",
                                    "258.336% ATK+516.672% Elemental Mastery",
                                    "280.8% ATK+561.6% Elemental Mastery",
                                    "297.648% ATK+595.296% Elemental Mastery",
                                    "314.496% ATK+628.992% Elemental Mastery",
                                    "336.96% ATK+673.92% Elemental Mastery",
                                    "359.424% ATK+718.848% Elemental Mastery",
                                    "381.888% ATK+763.776% Elemental Mastery",
                                    "404.352% ATK+808.704% Elemental Mastery",
                                    "426.816% ATK+853.632% Elemental Mastery",
                                    "449.28% ATK+898.56% Elemental Mastery",
                                    "477.36% ATK+954.72% Elemental Mastery",
                                    "505.44% ATK+1010.88% Elemental Mastery",
                                    "533.52% ATK+1067.04% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "336.96% ATK+673.92% Elemental Mastery",
                                    "362.232% ATK+724.464% Elemental Mastery",
                                    "387.504% ATK+775.008% Elemental Mastery",
                                    "421.2% ATK+842.4% Elemental Mastery",
                                    "446.472% ATK+892.944% Elemental Mastery",
                                    "471.744% ATK+943.488% Elemental Mastery",
                                    "505.44% ATK+1010.88% Elemental Mastery",
                                    "539.136% ATK+1078.272% Elemental Mastery",
                                    "572.832% ATK+1145.664% Elemental Mastery",
                                    "606.528% ATK+1213.056% Elemental Mastery",
                                    "640.224% ATK+1280.448% Elemental Mastery",
                                    "673.92% ATK+1347.84% Elemental Mastery",
                                    "716.04% ATK+1432.08% Elemental Mastery",
                                    "758.16% ATK+1516.32% Elemental Mastery",
                                    "800.28% ATK+1600.56% Elemental Mastery"
                                ]
                            },
                            {
                                "Desc": "DMG Bonus",
                                "ParamLevelList": [
                                    "13.0% Per Veil of Falsehood Stack",
                                    "16.0% Per Veil of Falsehood Stack",
                                    "19.0% Per Veil of Falsehood Stack",
                                    "22.0% Per Veil of Falsehood Stack",
                                    "25.0% Per Veil of Falsehood Stack",
                                    "28.0% Per Veil of Falsehood Stack",
                                    "31.0% Per Veil of Falsehood Stack",
                                    "34.0% Per Veil of Falsehood Stack",
                                    "37.0% Per Veil of Falsehood Stack",
                                    "40.0% Per Veil of Falsehood Stack",
                                    "43.0% Per Veil of Falsehood Stack",
                                    "46.0% Per Veil of Falsehood Stack",
                                    "49.0% Per Veil of Falsehood Stack",
                                    "52.0% Per Veil of Falsehood Stack",
                                    "55.0% Per Veil of Falsehood Stack"
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
                        "Name": "A Wager of Moonlight",
                        "Desc": "Nefer will be granted the corresponding buff effects based on the party's <color style='color:#FFD780;'>Moonsign</color>.<br><br><color style='color:#FFD780;'>Moonsign: Ascendant Gleam</color>: When she unleashes her Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, any Dendro Cores on the field will be converted to Seeds of Deceit, and any Lunar-Bloom reactions triggered by nearby characters in the following 15s that would create Dendro Cores or Bountiful Cores will instead create Seeds of Deceit. Seeds of Deceit cannot trigger Hyperbloom or Burgeon reactions and will not burst.<br>When Nefer unleashes a Charged Attack or <color style='color:#FFD780;'>Phantasm Performance</color>, she can absorb Seeds of Deceit within a certain range, gaining 1 stack of <color style='color:#FFD780;'>Veil of Falsehood</color> for every seed absorbed. When this effect reaches 3 stacks, or when the third stack's duration is refreshed, Nefer's Elemental Mastery will be increased by 100 for 8s.",
                        "Icon": "UI_Talent_S_Nefer_05"
                    },
                    {
                        "Name": "Daughter of the Dust and Sand",
                        "Desc": "When Nefer is in the <color style='color:#FFD780;'>Shadow Dance</color> state, for 5s after a party member triggers a Lunar-Bloom reaction, Nefer's <color style='color:#FFD780;'>Slither</color> state will provide additional <color style='color:#FFD780;'>Verdant Dew</color>. Every 100 points of Nefer's Elemental Mastery beyond 500 will strengthen this additional provision effect by 10%. The maximum increase that can be achieved this way is 50%.",
                        "Icon": "UI_Talent_S_Nefer_06"
                    },
                    {
                        "Name": "Moonsign Benediction: Dusklit Eaves",
                        "Desc": "When a party member triggers a Bloom reaction, it will be converted into the Lunar-Bloom reaction, with every point of Elemental Mastery that Nefer has increasing Lunar-Bloom's Base DMG by 0.0175%, up to a maximum of 14%.<br><br>Additionally, when Nefer is in the party, the party's <color style='color:#FFD780;'>Moonsign</color> will increase by 1 level.",
                        "Icon": "UI_Talent_S_Nefer_07"
                    },
                    {
                        "Name": "Conspiracy of the Golden Vault",
                        "Desc": "Gains 25% more rewards when dispatched on a Nod-Krai Expedition for 20 hours.<br>Additionally, as the head of the Curatorium of Secrets, Nefer seemingly has the ability to obtain intelligence from a variety of sources — intelligence that certain factions in Nasha Town might find extremely interesting...",
                        "Icon": "UI_Talent_S_Nefer_08"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "Planning Breeds Success",
                        "Desc": "The Base DMG for Lunar-Bloom reactions caused by Nefer's <color style='color:#FFD780;'>Phantasm Performance</color> is increased by 60% of her Elemental Mastery. This effect is also boosted by <color style='color:#FFD780;'>Veil of Falsehood</color>.",
                        "Icon": "UI_Talent_S_Nefer_01"
                    },
                    {
                        "Level": 2,
                        "Name": "Observation Feeds Strategy",
                        "Desc": "Enhances the effects of the Ascension Talent <color style='color:#FFD780;'>A Wager of Moonlight</color>: Extends <color style='color:#FFD780;'>Veil of Falsehood</color>'s duration by 5s, and increases its stack limit to 5, as well as causing <color style='color:#FFD780;'>Phantasm Performance</color> to deal up to 140% of its original DMG. When Nefer unleashes her Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, she will instantly gain 2 stacks of Veil of Falsehood. Additionally, when Veil of Falsehood reaches 5 stacks, or when the fifth stack's duration is refreshed, Nefer's Elemental Mastery will be increased by 200 for 8s instead.<br>You must first unlock the Ascension Talent \"A Wager of Moonlight.\"",
                        "Icon": "UI_Talent_S_Nefer_02"
                    },
                    {
                        "Level": 3,
                        "Name": "Deceit Cloaks the Truth",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Nefer_01"
                    },
                    {
                        "Level": 4,
                        "Name": "Delusion Ensnares Reason",
                        "Desc": "When Nefer is on the field and in the <color style='color:#FFD780;'>Shadow Dance</color> state, you will gain Verdant Dew 25% faster.<br>Additionally, while Nefer is in the Shadow Dance state, nearby opponents will have their <color style='color:#99FF88;'>Dendro RES</color> decreased by 20%. When Nefer exits the Shadow Dance state or after she strays a certain distance away from the opponents, this effect will be removed after 4.5s.",
                        "Icon": "UI_Talent_S_Nefer_03"
                    },
                    {
                        "Level": 5,
                        "Name": "Opportunity Hides in the Margins",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Sacred Vow: True Eye's Phantasm</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Nefer_02"
                    },
                    {
                        "Level": 6,
                        "Name": "Victory Flows from the Turning of Tides",
                        "Desc": "When Nefer unleashes <color style='color:#FFD780;'>Phantasm Performance</color>, the second stage of DMG dealt by herself will be converted to deal <color style='color:#99FF88;'>AoE Dendro DMG</color> equal to 85% of her Elemental Mastery. Additionally, when the attacks from Phantasm Performance end, an extra instance of <color style='color:#99FF88;'>AoE Dendro DMG</color> equal to 120% of Nefer's Elemental Mastery will be dealt. All of the aforementioned DMG is considered Lunar-Bloom DMG dealt by Phantasm Performance.<br><br><color style='color:#FFD780;'>Moonsign: Ascendant Gleam</color><br>Nefer's Lunar-Bloom DMG is <color style='color:#FFD780;'>elevated</color> by 15%.",
                        "Icon": "UI_Talent_S_Nefer_04"
                    }
                ],
                "HyperLinks": [
                    {
                        "Name": "Elevation",
                        "Desc": "Special DMG Boost effect. It is calculated independently of other DMG Boost effects."
                    },
                    {
                        "Name": "Verdant Dew",
                        "Desc": "When party members trigger Lunar-Bloom reactions, the party will receive such a resource.<br>Your party will receive 1 Verdant Dew every 2.5s for 2.5s after triggering a Lunar-Bloom reaction. Your party can have up to 3 Verdant Dew. If you trigger another Lunar-Bloom reaction during this time, the duration of this effect will be reset."
                    },
                    {
                        "Name": "Shadow Dance",
                        "Desc": "After using the Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, Nefer will enter this state.<br>While in the Shadow Dance state, if you have at least 1 Verdant Dew, Nefer's Charged Attacks will be replaced with the special Charged Attack Phantasm Performance.<br>Nefer will exit the Shadow Dance state when she unleashes 3 Phantasm Performance(s) or the state's duration ends."
                    },
                    {
                        "Name": "Phantasm Performance",
                        "Desc": "When in the Shadow Dance state caused by her Elemental Skill <color style='color:#FFD780;'>Senet Strategy: Dance of a Thousand Nights</color>, if you have at least 1 Verdant Dew, Nefer's Charged Attacks will be replaced with the special Charged Attack Phantasm Performance, which will not consume Stamina.<br>Nefer summons shades of herself to perform Coordinated Attacks against enemies. Nefer and the shades will deal 2 and 3 stages of <color style='color:#99FF88;'>AoE Dendro DMG</color> respectively. DMG dealt by the shades is considered Lunar-Bloom DMG. 1 Verdant Dew will be consumed the first time shades are summoned after every Phantasm Performance."
                    },
                    {
                        "Name": "Veil of Falsehood",
                        "Desc": "After absorbing Seeds of Deceit via the Ascension Talent A Wager of Moonlight, Nefer gains this effect, thereby increasing the DMG dealt by her Phantasm Performance.<br>Each stack of Veil of Falsehood increases the DMG dealt by Nefer's Phantasm Performance by 8.0%. The initial maximum number of stacks is 3, with each stack lasting for 9s (each stack's duration is counted independently)."
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Nefer": {}
}