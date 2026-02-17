// Auto Generated

var _AvatarDataConfig_ = {
    "Furina": {
        "BallList": [
            {
                "When": "Salon Members' attacks hit monster",
                "DropArray": [
                    {
                        "Num": 1,
                        "Chance": 1
                    }
                ]
            },
            {
                "When": "CD",
                "CD": 2.5
            }
        ],
        "EndureList": [
            {
                "Skill": "While Casting Elemental Skill",
                "Endure": 0.6
            }
        ],
        "WindZoneList": [
            {
                "Skill": "Elemental Burst Casting Push",
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
            "Surintendante Chevalmarin<br>- Will attack within 9.5m, CD 1.19s, first attack after born ignores CD<br>- If not within, will blink closer, CD 1.5s<br>- Has a common CD of 0.5s (Not shared with other entities).",
            "Gentilhomme Usher<br>- Will shoot-attack within 6m, CD 2.9s, first attack after born ignores CD<br>- If not within, will blink closer, CD 1.5s",
            "Mademoiselle Crabaletta<br>- Will jump-attack within 20m, CD 4.8s, first attack after born ignores CD<br>- If not within, will blink closer, CD 1.5s",
            "Singer of Many Waters heal range: 20m (and vertical distance < 10m); permanent skill 1 and C6 heal range: 40m.",
            "<b>V4 Change: Attack motion changed: Normal Attack 4 is no longer a piercing attack. Element application changed to ordinary, and added hitlag. Used to apply element independently, similar to polearm characters' Charged Attack).",
            "<b>V4 Change: Deleted Seahorse's common CD. All animals' defend range 25m -> 30m.",
            "During Salon Solitaire, Furina can move on any water bodies in Teyvat.",
            "Singers of the Streams' base heal interval is 2s.",
            "<b>- HomDGCat's Research on the Salon Members (V3) -</b>",
            "<b>V3 Change: Salon members' AI skill CDs now start counting <color style='color:#ff0000'>right after the skill starts</color>.</b>",
            "Surintendante Chevalmarin<br>- Will attack within 9.5m, CD 1.19s, first attack after born ignores CD<br>- If not within, will blink closer, CD 1.5s<br>- Has a common CD of 0.5s (Not shared with other entities).",
            "Gentilhomme Usher<br>- Will shoot-attack within 6m, CD 2.9s, first attack after born ignores CD<br>- If not within, will blink closer, CD 1.5s<br>- Has a common CD of 0.5s (Not shared with other entities).",
            "Mademoiselle Crabaletta<br>- Will jump-attack within 20m, CD 4.8s, first attack after born ignores CD<br>- If not within, will blink closer, CD 1.5s<br>- Has a common CD of 0.5s (Not shared with other entities).",
            "The Salon Members' Defend Range is 30 meters. They prioritize chasing enemies. When there are no enemies they will chase their summoner.",
            "Note: C6 Ousia alignment's heal over time is prolonged by 2.5s every time Hydro infusion hits an enemy. Therefore using all 7 infusion attacks guarantees 17.5s of healing.",
            "V2 Change: Added global CD to seahorse and crab, so they won't attack within 0.5s of teleporting.",
            "V2 Change: Salon members' DMG and Heal will use Furina's real-time HP. That is, it won't be snapshotted.",
            "V2 Change: Elemental Burst now pushes enemies with a windzone when casting.",
            "V2 Change: Added special FX for plunge-attacking onto water.",
            "<b>- HomDGCat's Research on the Salon Members (V1) -</b>",
            "<b>Warning: Genshin's AI skill CDs only start counting <color style='color:#ff0000'>after the skill completely finishes</color>, so it does not reflect skill frequency.</b>",
            "The Salon Members have their own AI. Unlike previous characters' skills, the Salon Members do not attack at fixed intervals. Instead, their attack frequency bear a small amount of randomness, similar to monsters' attacks.",
            "The Salon Members' Defend Range is 32 meters. They prioritize chasing enemies. When there are no enemies they will chase their summoner.",
            "Surintendante Chevalmarin<br>- Will attack within 9.5m, CD 0.35s<br>- When more than 12m away, will blink closer, CD 1.5s<br>- Starts chasing at 9m away, stops at 6m<br>- Has a common CD of 0.5s (Not shared with other entities).",
            "Gentilhomme Usher<br>- Will shoot-attack within 6m, CD 0.5s<br>- When more than 8m away, will blink closer, CD 1.5s<br>- Starts chasing at 6m away, stops at 3m<br>- Has a common CD of 0.5s (Not shared with other entities).",
            "Mademoiselle Crabaletta<br>- Will jump-attack within 20m, CD 2s<br>- When more than 20m away, will blink closer, CD 1.5s<br>- Starts chasing at 12m away, stops at 8m<br>- Has a common CD of 0.5s (Not shared with other entities)."
        ]
    }
}

var _AvatarMats_ = {
    "Furina": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104121": 1,
                "101238": 3,
                "112038": 3
            },
            {
                "202": 40000,
                "104122": 3,
                "113057": 2,
                "101238": 10,
                "112038": 15
            },
            {
                "202": 60000,
                "104122": 6,
                "113057": 4,
                "101238": 20,
                "112039": 12
            },
            {
                "202": 80000,
                "104123": 3,
                "113057": 8,
                "101238": 30,
                "112039": 18
            },
            {
                "202": 100000,
                "104123": 6,
                "113057": 12,
                "101238": 45,
                "112040": 12
            },
            {
                "202": 120000,
                "104124": 6,
                "113057": 20,
                "101238": 60,
                "112040": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104341": 3,
                "112038": 6
            },
            {
                "202": 17500,
                "104342": 2,
                "112039": 3
            },
            {
                "202": 25000,
                "104342": 4,
                "112039": 4
            },
            {
                "202": 30000,
                "104342": 6,
                "112039": 6
            },
            {
                "202": 37500,
                "104342": 9,
                "112039": 9
            },
            {
                "202": 120000,
                "104343": 4,
                "112040": 4,
                "113056": 1
            },
            {
                "202": 260000,
                "104343": 6,
                "112040": 6,
                "113056": 1
            },
            {
                "202": 450000,
                "104343": 12,
                "112040": 9,
                "113056": 2
            },
            {
                "202": 700000,
                "104343": 16,
                "112040": 12,
                "113056": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104341": 3,
                "112038": 6
            },
            {
                "202": 17500,
                "104342": 2,
                "112039": 3
            },
            {
                "202": 25000,
                "104342": 4,
                "112039": 4
            },
            {
                "202": 30000,
                "104342": 6,
                "112039": 6
            },
            {
                "202": 37500,
                "104342": 9,
                "112039": 9
            },
            {
                "202": 120000,
                "104343": 4,
                "112040": 4,
                "113056": 1
            },
            {
                "202": 260000,
                "104343": 6,
                "112040": 6,
                "113056": 1
            },
            {
                "202": 450000,
                "104343": 12,
                "112040": 9,
                "113056": 2
            },
            {
                "202": 700000,
                "104343": 16,
                "112040": 12,
                "113056": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104341": 3,
                "112038": 6
            },
            {
                "202": 17500,
                "104342": 2,
                "112039": 3
            },
            {
                "202": 25000,
                "104342": 4,
                "112039": 4
            },
            {
                "202": 30000,
                "104342": 6,
                "112039": 6
            },
            {
                "202": 37500,
                "104342": 9,
                "112039": 9
            },
            {
                "202": 120000,
                "104343": 4,
                "112040": 4,
                "113056": 1
            },
            {
                "202": 260000,
                "104343": 6,
                "112040": 6,
                "113056": 1
            },
            {
                "202": 450000,
                "104343": 12,
                "112040": 9,
                "113056": 2
            },
            {
                "202": 700000,
                "104343": 16,
                "112040": 12,
                "113056": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Furina": {
        "Ver": {
            "1": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to unleash a solo dance, dealing Physical DMG to nearby opponents and changing her Arkhe alignment. If Salon Members or Singers of the Streams summoned by her Elemental Skill \"Salon Solitaires\" are present, their lineup will switch in response.<br><br><color style='color:#FFD780;'>Arkhe: Seats Sacred and Secular</color><br>At intervals, when Furina's Normal Attacks hit, a Surging Blade or a Spiritbreath Thorn will descend based on her current alignment, dealing <color style='color:#80C0FF;'>Hydro DMG</color> based on her current alignment.<br>When Furina takes the field, her starting Arkhe will be Ousia.<br><br>Plunging Attack<br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_01",
                        "Lock": 8.0,
                        "Name": "Normal Attack: Soloist's Solicitation",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "48.386%",
                                    "52.325%",
                                    "56.263%",
                                    "61.889%",
                                    "65.828%",
                                    "70.329%",
                                    "76.518%",
                                    "82.707%",
                                    "88.895%",
                                    "95.647%",
                                    "102.399%",
                                    "109.15%",
                                    "115.902%",
                                    "122.653%",
                                    "129.405%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "43.729%",
                                    "47.289%",
                                    "50.848%",
                                    "55.933%",
                                    "59.492%",
                                    "63.56%",
                                    "69.153%",
                                    "74.747%",
                                    "80.34%",
                                    "86.442%",
                                    "92.543%",
                                    "98.645%",
                                    "104.747%",
                                    "110.849%",
                                    "116.95%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "55.12%",
                                    "59.606%",
                                    "64.093%",
                                    "70.502%",
                                    "74.989%",
                                    "80.116%",
                                    "87.167%",
                                    "94.217%",
                                    "101.267%",
                                    "108.958%",
                                    "116.649%",
                                    "124.34%",
                                    "132.032%",
                                    "139.723%",
                                    "147.414%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "73.298%",
                                    "79.264%",
                                    "85.23%",
                                    "93.753%",
                                    "99.719%",
                                    "106.537%",
                                    "115.913%",
                                    "125.288%",
                                    "134.663%",
                                    "144.891%",
                                    "155.119%",
                                    "165.346%",
                                    "175.574%",
                                    "185.801%",
                                    "196.029%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "74.218%",
                                    "80.259%",
                                    "86.3%",
                                    "94.93%",
                                    "100.971%",
                                    "107.875%",
                                    "117.368%",
                                    "126.861%",
                                    "136.354%",
                                    "146.71%",
                                    "157.066%",
                                    "167.422%",
                                    "177.778%",
                                    "188.134%",
                                    "198.49%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
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
                            },
                            {
                                "Desc": "Spiritbreath Thorn/Surging Blade DMG",
                                "ParamLevelList": [
                                    "9.46%",
                                    "10.23%",
                                    "11.0%",
                                    "12.1%",
                                    "12.87%",
                                    "13.75%",
                                    "14.96%",
                                    "16.17%",
                                    "17.38%",
                                    "18.7%",
                                    "20.02%",
                                    "21.34%",
                                    "22.66%",
                                    "23.98%",
                                    "25.3%"
                                ]
                            },
                            {
                                "Desc": "Spiritbreath Thorn/Surging Blade DMG Interval",
                                "ParamLevelList": [
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Invites the guests of the Salon Solitaire to come forth and abet in Furina's performance. Will summon either the Salon Members or the Singers of the Streams based on Furina's current <color style='color:#FFD780;'>Arkhe alignment</color>.<br><br><color style='color:#FFD780;'>Ousia</color><br>Foaming bubbles like celebrants shall dance, dealing <color style='color:#80C0FF;'>AoE Hydro DMG</color> based on Furina's Max HP and summoning 3 Salon Members: the Ball Octopus-shaped Gentilhomme Usher, the Bubbly Seahorse-shaped Surintendante Chevalmarin, and the Armored Crab-shaped Mademoiselle Crabaletta.<br>They will attack nearby opponents at intervals, prioritizing the target of the active character, dealing <color style='color:#80C0FF;'>Hydro</color> DMG based on Furina's Max HP.<br>When they attack, if character(s) with more than 50% HP are nearby, the Members will consume these character(s) HP and increase their current attack's power based on the number of characters who have \"offered\" HP this way. If the characters who have had HP consumed are 1/2/3/4 (or more), the Members' attacks will deal 110%/120%/130%/140% of their original DMG.<br><br><color style='color:#FFD780;'>Pneuma</color><br>Summons the Singers of the Streams, who will heal nearby active character(s) based on Furina's Max HP at intervals.<br><br>The Salon Members and Singers of the Streams share a duration, and when Furina uses her Charged Attack to change the guest type, the new guests will inherit the initial duration.<br><br><i>A fixed roster of regulars frequent Furina's Salon Solitaire. At other times, Mademoiselle Crabaletta, Surintendante Chevalmarin, and Gentilhomme Usher shall visit, and on gloomy Wednesdays, it is the singers who come by.</i>",
                        "Icon": "Skill_S_Furina_01",
                        "Lock": 8.0,
                        "Name": "Salon Solitaire",
                        "ParamDesc": [
                            {
                                "Desc": "Ousia Bubble DMG",
                                "ParamLevelList": [
                                    "7.864% Max HP",
                                    "8.454% Max HP",
                                    "9.044% Max HP",
                                    "9.83% Max HP",
                                    "10.42% Max HP",
                                    "11.01% Max HP",
                                    "11.796% Max HP",
                                    "12.582% Max HP",
                                    "13.369% Max HP",
                                    "14.155% Max HP",
                                    "14.942% Max HP",
                                    "15.728% Max HP",
                                    "16.711% Max HP",
                                    "17.694% Max HP",
                                    "18.677% Max HP"
                                ]
                            },
                            {
                                "Desc": "Duration",
                                "ParamLevelList": [
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s"
                                ]
                            },
                            {
                                "Desc": "Gentilhomme Usher DMG",
                                "ParamLevelList": [
                                    "5.96% Max HP",
                                    "6.407% Max HP",
                                    "6.854% Max HP",
                                    "7.45% Max HP",
                                    "7.897% Max HP",
                                    "8.344% Max HP",
                                    "8.94% Max HP",
                                    "9.536% Max HP",
                                    "10.132% Max HP",
                                    "10.728% Max HP",
                                    "11.324% Max HP",
                                    "11.92% Max HP",
                                    "12.665% Max HP",
                                    "13.41% Max HP",
                                    "14.155% Max HP"
                                ]
                            },
                            {
                                "Desc": "Surintendante Chevalmarin DMG",
                                "ParamLevelList": [
                                    "3.232% Max HP",
                                    "3.474% Max HP",
                                    "3.717% Max HP",
                                    "4.04% Max HP",
                                    "4.282% Max HP",
                                    "4.525% Max HP",
                                    "4.848% Max HP",
                                    "5.171% Max HP",
                                    "5.494% Max HP",
                                    "5.818% Max HP",
                                    "6.141% Max HP",
                                    "6.464% Max HP",
                                    "6.868% Max HP",
                                    "7.272% Max HP",
                                    "7.676% Max HP"
                                ]
                            },
                            {
                                "Desc": "Mademoiselle Crabaletta DMG",
                                "ParamLevelList": [
                                    "8.288% Max HP",
                                    "8.91% Max HP",
                                    "9.531% Max HP",
                                    "10.36% Max HP",
                                    "10.982% Max HP",
                                    "11.603% Max HP",
                                    "12.432% Max HP",
                                    "13.261% Max HP",
                                    "14.09% Max HP",
                                    "14.918% Max HP",
                                    "15.747% Max HP",
                                    "16.576% Max HP",
                                    "17.612% Max HP",
                                    "18.648% Max HP",
                                    "19.684% Max HP"
                                ]
                            },
                            {
                                "Desc": "Gentilhomme Usher HP Consumption",
                                "ParamLevelList": [
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP",
                                    "2.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "Surintendante Chevalmarin HP Consumption",
                                "ParamLevelList": [
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP",
                                    "1.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "Mademoiselle Crabaletta HP Consumption",
                                "ParamLevelList": [
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP",
                                    "3.0% Max HP"
                                ]
                            },
                            {
                                "Desc": "Singers of the Streams Healing",
                                "ParamLevelList": [
                                    "4.8% Max HP+462.22531",
                                    "5.16% Max HP+508.45425",
                                    "5.52% Max HP+558.53564",
                                    "6.0% Max HP+612.46942",
                                    "6.36% Max HP+670.25562",
                                    "6.72% Max HP+731.89423",
                                    "7.2% Max HP+797.38519",
                                    "7.68% Max HP+866.72864",
                                    "8.16% Max HP+939.9245",
                                    "8.64% Max HP+1016.97278",
                                    "9.12% Max HP+1097.87341",
                                    "9.6% Max HP+1182.62646",
                                    "10.2% Max HP+1271.23206",
                                    "10.8% Max HP+1363.68994",
                                    "11.4% Max HP+1460.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Rouses the impulse to revel, creating a stage of foam that will deal <color style='color:#80C0FF;'>AoE Hydro DMG</color> based on Furina's Max HP and cause all party members to enter the Universal Revelry state: During this time, when nearby party members' HP increases or decreases, they will grant Furina 1 Fanfare point based on the percentage by which their Max HP changed.<br>At the same time, Furina will increase the DMG dealt by and Incoming Healing Bonus of all nearby party members based on the amount of Fanfare she has.<br>When the duration ends, Furina's Fanfare points will be cleared.<br><br><i>\"Cheer! Give praise! Be awed! Raise your glasses! Every night bereft of banqueting is a sordid squandering of sore, sober daylight... And, uh, those who are not yet of age may have grape juice instead!\"</i>",
                        "Icon": "Skill_E_Furina_01",
                        "Lock": 8.0,
                        "Name": "Let the People Rejoice",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "17.5% Max HP",
                                    "18.812% Max HP",
                                    "20.125% Max HP",
                                    "21.875% Max HP",
                                    "23.188% Max HP",
                                    "24.5% Max HP",
                                    "26.25% Max HP",
                                    "28.0% Max HP",
                                    "29.75% Max HP",
                                    "31.5% Max HP",
                                    "33.25% Max HP",
                                    "35.0% Max HP",
                                    "37.187% Max HP",
                                    "39.375% Max HP",
                                    "41.563% Max HP"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                                "Desc": "Maximum Fanfare",
                                "ParamLevelList": [
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0",
                                    "450.0"
                                ]
                            },
                            {
                                "Desc": "Fanfare to DMG Increase Conversion Ratio",
                                "ParamLevelList": [
                                    "0.13%",
                                    "0.14%",
                                    "0.15%",
                                    "0.16%",
                                    "0.17%",
                                    "0.18%",
                                    "0.19%",
                                    "0.2%",
                                    "0.21%",
                                    "0.22%",
                                    "0.23%",
                                    "0.24%",
                                    "0.25%",
                                    "0.26%",
                                    "0.27%"
                                ]
                            },
                            {
                                "Desc": "Fanfare to Healing Bonus Conversion Ratio",
                                "ParamLevelList": [
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.1%",
                                    "0.11%",
                                    "0.12%",
                                    "0.13%",
                                    "0.14%",
                                    "0.15%"
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
                        "Desc": "When the active character in your party receives healing, if the source of the healing is not Furina and the healing overflows, then Furina will heal a nearby party member for 2% of their Max HP once every 2s within the next 4s.",
                        "Icon": "UI_Talent_S_Furina_05",
                        "Name": "Endless Waltz"
                    },
                    {
                        "Desc": "Every 1,000 points of Furina's Max HP can buff the different Arkhe-aligned <color style='color:#FFD780;'>Salon Solitaire</color> in the following ways:<br>Will increase Salon Member DMG dealt by 0.7%, up to a maximum of 28%.<br>Will decrease active character healing interval of the Singers of the Streams by 0.4%, up to a maximum of 16%.",
                        "Icon": "UI_Talent_S_Furina_06",
                        "Name": "Unheard Confession"
                    },
                    {
                        "Desc": "Xenochromatic Fontemer Aberrant ability CD decreased by 30%.",
                        "Icon": "UI_Talent_S_Furina_07",
                        "Name": "The Sea is My Stage"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When using <color style='color:#FFD780;'>Let the People Rejoice</color>, Furina will gain 150 Fanfare.<br>Additionally, Furina's Fanfare limit is increased by 150.",
                        "Icon": "UI_Talent_S_Furina_01",
                        "Name": "\"Like a Recalcitrant Bird, Love is Deaf to Pleading\"",
                        "Level": 1
                    },
                    {
                        "Desc": "When using the Elemental Skill \"Salon Solitaire,\" Furina gains \"Center of Attention\" for 10s.<br>Throughout the duration, Furina's Normal Attacks, Charged Attacks, and Plunging Attacks are converted into <color style='color:#80C0FF;'>Hydro DMG</color> which cannot be overridden by any other elemental infusion. DMG is also increased by an amount equivalent to 15% of Furina's max HP.<br>Throughout the duration, Furina's Normal Attacks, Charged Attacks, and Plunging Attacks will cause different effects up to every 0.1s after hitting opponents depending on her current Arkhe alignment:<br><br>Arkhe: Ousia<br>Every 1s, all nearby characters in the party will be healed by 3% of Furina's max HP. 2.5s duration.<br>Arkhe: Pneuma<br>This Normal Attack, Charged Attack, or Plunging Attack ground impact DMG will be further increased by an amount equivalent to 15% of Furina's max HP. When any of the attacks mentioned previously hit an opponent, all nearby characters in the party will consume 1% of their max HP.<br><br>During the duration of each instance of \"Center of Attention,\" the above effects can be triggered up to 7 times. \"Center of Attention\" will end when its effects have triggered 7 times or when the duration expires.",
                        "Icon": "UI_Talent_S_Furina_04",
                        "Name": "\"A Woman Adapts Like Duckweed in Water\"",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Salon Solitaire</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Furina_02",
                        "Name": "\"My Secrets I Hide, Unknown to All\"",
                        "Level": 3
                    },
                    {
                        "Desc": "When the Salon Members from <color style='color:#FFD780;'>Salon Solitaire</color> hit an opponent, or the Singers of the Streams restore HP to the active character, Furina will restore 4 Energy. This effect triggers once every 5s.",
                        "Icon": "UI_Talent_S_Furina_03",
                        "Name": "\"They Know Not Life, Who Dwelt in the Netherworld Not!\"",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Let the People Rejoice</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Furina_01",
                        "Name": "\"His Name I Now Know, It Is...!\"",
                        "Level": 5
                    },
                    {
                        "Desc": "While <color style='color:#FFD780;'>Let the People Rejoice</color> lasts, Furina's Fanfare gain from increases or decreases in nearby characters' HP is increased by 200%. Each point of Fanfare above the limit will increase Furina's Max HP by 0.4%. Her maximum Max HP increase is 140%.",
                        "Icon": "UI_Talent_S_Furina_02",
                        "Name": "\"Let Us Raise the Chalice of Love!\"",
                        "Level": 6
                    }
                ]
            },
            "2": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to unleash a solo dance, dealing Physical DMG to nearby opponents and changing her Arkhe alignment. If Salon Members or Singer of Many Waters summoned by her Elemental Skill \"Salon Solitaire\" are present, their lineup will switch in response.<br><br><color style='color:#FFD780;'>Arkhe: Seats Sacred and Secular</color><br>At intervals, when Furina's Normal Attacks hit, a Spiritbreath Thorn or a Surging Blade will descend based on her current alignment, dealing <color style='color:#80C0FF;'>Hydro DMG</color> based on her current alignment.<br>When Furina takes the field, her starting Arkhe will be Ousia.<br><br>Plunging Attack<br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_01",
                        "Lock": 8.0,
                        "Name": "Normal Attack: Soloist's Solicitation",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "48.386%",
                                    "52.325%",
                                    "56.263%",
                                    "61.889%",
                                    "65.828%",
                                    "70.329%",
                                    "76.518%",
                                    "82.707%",
                                    "88.895%",
                                    "95.647%",
                                    "102.399%",
                                    "109.15%",
                                    "115.902%",
                                    "122.653%",
                                    "129.405%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "43.729%",
                                    "47.289%",
                                    "50.848%",
                                    "55.933%",
                                    "59.492%",
                                    "63.56%",
                                    "69.153%",
                                    "74.747%",
                                    "80.34%",
                                    "86.442%",
                                    "92.543%",
                                    "98.645%",
                                    "104.747%",
                                    "110.849%",
                                    "116.95%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "55.12%",
                                    "59.606%",
                                    "64.093%",
                                    "70.502%",
                                    "74.989%",
                                    "80.116%",
                                    "87.167%",
                                    "94.217%",
                                    "101.267%",
                                    "108.958%",
                                    "116.649%",
                                    "124.34%",
                                    "132.032%",
                                    "139.723%",
                                    "147.414%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "73.298%",
                                    "79.264%",
                                    "85.23%",
                                    "93.753%",
                                    "99.719%",
                                    "106.537%",
                                    "115.913%",
                                    "125.288%",
                                    "134.663%",
                                    "144.891%",
                                    "155.119%",
                                    "165.346%",
                                    "175.574%",
                                    "185.801%",
                                    "196.029%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "74.218%",
                                    "80.259%",
                                    "86.3%",
                                    "94.93%",
                                    "100.971%",
                                    "107.875%",
                                    "117.368%",
                                    "126.861%",
                                    "136.354%",
                                    "146.71%",
                                    "157.066%",
                                    "167.422%",
                                    "177.778%",
                                    "188.134%",
                                    "198.49%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
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
                            },
                            {
                                "Desc": "Spiritbreath Thorn/Surging Blade DMG",
                                "ParamLevelList": [
                                    "9.46%",
                                    "10.23%",
                                    "11.0%",
                                    "12.1%",
                                    "12.87%",
                                    "13.75%",
                                    "14.96%",
                                    "16.17%",
                                    "17.38%",
                                    "18.7%",
                                    "20.02%",
                                    "21.34%",
                                    "22.66%",
                                    "23.98%",
                                    "25.3%"
                                ]
                            },
                            {
                                "Desc": "Spiritbreath Thorn/Surging Blade DMG Interval",
                                "ParamLevelList": [
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Invites the guests of the Salon Solitaire to come forth and abet in Furina's performance. Will summon either the Salon Members or the Singer of Many Waters based on Furina's current <color style='color:#FFD780;'>Arkhe alignment</color>.<br><br><color style='color:#FFD780;'>Ousia</color><br>Foaming bubbles like celebrants shall dance, dealing <color style='color:#80C0FF;'>AoE Hydro DMG</color> based on Furina's Max HP and summoning 3 Salon Members: the Ball Octopus-shaped Gentilhomme Usher, the Bubbly Seahorse-shaped Surintendante Chevalmarin, and the Armored Crab-shaped Mademoiselle Crabaletta.<br>They will attack nearby opponents at intervals, prioritizing the target of the active character, dealing <color style='color:#80C0FF;'>Hydro</color> DMG based on Max HP.<br>When they attack, if character(s) with more than 50% HP are nearby, the Members will increase their current attack's power based on the number of such characters, and consume said characters' HP. If the characters who meet these requirements are 1/2/3/4 (or more), the Members' attacks will deal 110%/120%/130%/140% of their original DMG.<br><br><color style='color:#FFD780;'>Pneuma</color><br>Summons the Singer of Many Waters, who will heal nearby active character(s) based on Max HP at intervals.<br><br>The Salon Members and Singer of Many Waters share a duration, and when Furina uses her Charged Attack to change the guest type, the new guests will inherit the initial duration.<br>While the Salon Members and the Singer of Many Waters are on the field, Furina can move on the water's surface.<br><br><i>A fixed roster of regulars frequent Furina's Salon Solitaire. At other times, Mademoiselle Crabaletta, Surintendante Chevalmarin, and Gentilhomme Usher shall visit, and on gloomy Wednesdays, it is the singer who comes by.</i>",
                        "Icon": "Skill_S_Furina_01",
                        "Lock": 8.0,
                        "Name": "Salon Solitaire",
                        "ParamDesc": [
                            {
                                "Desc": "Ousia Bubble DMG",
                                "ParamLevelList": [
                                    "7.864% Max HP",
                                    "8.454% Max HP",
                                    "9.044% Max HP",
                                    "9.83% Max HP",
                                    "10.42% Max HP",
                                    "11.01% Max HP",
                                    "11.796% Max HP",
                                    "12.582% Max HP",
                                    "13.369% Max HP",
                                    "14.155% Max HP",
                                    "14.942% Max HP",
                                    "15.728% Max HP",
                                    "16.711% Max HP",
                                    "17.694% Max HP",
                                    "18.677% Max HP"
                                ]
                            },
                            {
                                "Desc": "Duration",
                                "ParamLevelList": [
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s"
                                ]
                            },
                            {
                                "Desc": "Gentilhomme Usher DMG",
                                "ParamLevelList": [
                                    "5.96% Max HP",
                                    "6.407% Max HP",
                                    "6.854% Max HP",
                                    "7.45% Max HP",
                                    "7.897% Max HP",
                                    "8.344% Max HP",
                                    "8.94% Max HP",
                                    "9.536% Max HP",
                                    "10.132% Max HP",
                                    "10.728% Max HP",
                                    "11.324% Max HP",
                                    "11.92% Max HP",
                                    "12.665% Max HP",
                                    "13.41% Max HP",
                                    "14.155% Max HP"
                                ]
                            },
                            {
                                "Desc": "Surintendante Chevalmarin DMG",
                                "ParamLevelList": [
                                    "3.232% Max HP",
                                    "3.474% Max HP",
                                    "3.717% Max HP",
                                    "4.04% Max HP",
                                    "4.282% Max HP",
                                    "4.525% Max HP",
                                    "4.848% Max HP",
                                    "5.171% Max HP",
                                    "5.494% Max HP",
                                    "5.818% Max HP",
                                    "6.141% Max HP",
                                    "6.464% Max HP",
                                    "6.868% Max HP",
                                    "7.272% Max HP",
                                    "7.676% Max HP"
                                ]
                            },
                            {
                                "Desc": "Mademoiselle Crabaletta DMG",
                                "ParamLevelList": [
                                    "8.288% Max HP",
                                    "8.91% Max HP",
                                    "9.531% Max HP",
                                    "10.36% Max HP",
                                    "10.982% Max HP",
                                    "11.603% Max HP",
                                    "12.432% Max HP",
                                    "13.261% Max HP",
                                    "14.09% Max HP",
                                    "14.918% Max HP",
                                    "15.747% Max HP",
                                    "16.576% Max HP",
                                    "17.612% Max HP",
                                    "18.648% Max HP",
                                    "19.684% Max HP"
                                ]
                            },
                            {
                                "Desc": "Gentilhomme Usher HP Consumption",
                                "ParamLevelList": [
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP"
                                ]
                            },
                            {
                                "Desc": "Surintendante Chevalmarin HP Consumption",
                                "ParamLevelList": [
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP"
                                ]
                            },
                            {
                                "Desc": "Mademoiselle Crabaletta HP Consumption",
                                "ParamLevelList": [
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP"
                                ]
                            },
                            {
                                "Desc": "Singer of Many Waters Healing",
                                "ParamLevelList": [
                                    "4.8% Max HP+462.22531",
                                    "5.16% Max HP+508.45425",
                                    "5.52% Max HP+558.53564",
                                    "6.0% Max HP+612.46942",
                                    "6.36% Max HP+670.25562",
                                    "6.72% Max HP+731.89423",
                                    "7.2% Max HP+797.38519",
                                    "7.68% Max HP+866.72864",
                                    "8.16% Max HP+939.9245",
                                    "8.64% Max HP+1016.97278",
                                    "9.12% Max HP+1097.87341",
                                    "9.6% Max HP+1182.62646",
                                    "10.2% Max HP+1271.23206",
                                    "10.8% Max HP+1363.68994",
                                    "11.4% Max HP+1460.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Rouses the impulse to revel, creating a stage of foam that will deal <color style='color:#80C0FF;'>AoE Hydro DMG</color> based on Furina's Max HP and cause nearby party members to enter the Universal Revelry state: During this time, when nearby party members' HP increases or decreases, 1 Fanfare point will be granted to Furina for each percentage point of their Max HP by which their HP changes.<br>At the same time, Furina will increase the DMG dealt by and Incoming Healing Bonus of all nearby party members based on the amount of Fanfare she has.<br>When the duration ends, Furina's Fanfare points will be cleared.<br><br><i>\"Cheer! Give praise! Be awed! Raise your glasses! Every night bereft of banqueting is a sordid squandering of sore, sober daylight... And, uh, those who are not yet of age may have grape juice instead!\"</i>",
                        "Icon": "Skill_E_Furina_01",
                        "Lock": 8.0,
                        "Name": "Let the People Rejoice",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "11.406% Max HP",
                                    "12.262% Max HP",
                                    "13.117% Max HP",
                                    "14.258% Max HP",
                                    "15.113% Max HP",
                                    "15.969% Max HP",
                                    "17.11% Max HP",
                                    "18.25% Max HP",
                                    "19.391% Max HP",
                                    "20.531% Max HP",
                                    "21.672% Max HP",
                                    "22.813% Max HP",
                                    "24.239% Max HP",
                                    "25.664% Max HP",
                                    "27.09% Max HP"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                                "Desc": "Maximum Fanfare",
                                "ParamLevelList": [
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0"
                                ]
                            },
                            {
                                "Desc": "Fanfare to DMG Increase Conversion Ratio",
                                "ParamLevelList": [
                                    "0.16%",
                                    "0.17%",
                                    "0.18%",
                                    "0.19%",
                                    "0.2%",
                                    "0.21%",
                                    "0.22%",
                                    "0.23%",
                                    "0.24%",
                                    "0.25%",
                                    "0.26%",
                                    "0.27%",
                                    "0.28%",
                                    "0.29%",
                                    "0.3%"
                                ]
                            },
                            {
                                "Desc": "Fanfare to Incoming Healing Bonus Conversion Ratio",
                                "ParamLevelList": [
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.1%",
                                    "0.11%",
                                    "0.12%",
                                    "0.13%",
                                    "0.14%",
                                    "0.15%"
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
                        "Desc": "When the active character in your party receives healing, if the source of the healing is not Furina herself and the healing overflows, then Furina will heal a nearby party member for 2% of their Max HP once every 2s within the next 4s.",
                        "Icon": "UI_Talent_S_Furina_05",
                        "Name": "Endless Waltz"
                    },
                    {
                        "Desc": "Every 1,000 points of Furina's Max HP can buff the different Arkhe-aligned <color style='color:#FFD780;'>Salon Solitaire</color> in the following ways:<br>Will increase Salon Member DMG dealt by 0.7%, up to a maximum of 28%.<br>Will decrease active character healing interval of the Singer of Many Waters by 0.4%, up to a maximum of 16%.",
                        "Icon": "UI_Talent_S_Furina_06",
                        "Name": "Unheard Confession"
                    },
                    {
                        "Desc": "Xenochromatic Fontemer Aberrant ability CD decreased by 30%.",
                        "Icon": "UI_Talent_S_Furina_07",
                        "Name": "The Sea is My Stage"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When using <color style='color:#FFD780;'>Let the People Rejoice</color>, Furina will gain 150 Fanfare.<br>Additionally, Furina's Fanfare limit is increased by 150.",
                        "Icon": "UI_Talent_S_Furina_01",
                        "Name": "\"Like a Recalcitrant Bird, Love is Deaf to Pleading\"",
                        "Level": 1
                    },
                    {
                        "Desc": "While <color style='color:#FFD780;'>Let the People Rejoice</color> lasts, Furina's Fanfare gain from increases or decreases in nearby characters' HP is increased by 200%. Each point of Fanfare above the limit will increase Furina's Max HP by 0.4%. Her maximum Max HP increase is 140%.",
                        "Icon": "UI_Talent_S_Furina_04",
                        "Name": "\"Let Us Raise the Chalice of Love!\"",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Let the People Rejoice</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Furina_02",
                        "Name": "\"His Name I Now Know, It Is...!\"",
                        "Level": 3
                    },
                    {
                        "Desc": "When the Salon Members from <color style='color:#FFD780;'>Salon Solitaire</color> hit an opponent, or the Singer of Many Waters restores HP to the active character, Furina will restore 4 Energy. This effect triggers once every 5s.",
                        "Icon": "UI_Talent_S_Furina_03",
                        "Name": "\"They Know Not Life, Who Dwelt in the Netherworld Not!\"",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Salon Solitaire</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Furina_01",
                        "Name": "\"My Secrets I Hide, Unknown to All\"",
                        "Level": 5
                    },
                    {
                        "Desc": "When using the Elemental Skill \"Salon Solitaire,\" Furina gains \"Center of Attention\" for 10s.<br>Throughout the duration, Furina's Normal Attacks, Charged Attacks, and Plunging Attacks are converted into <color style='color:#80C0FF;'>Hydro DMG</color> which cannot be overridden by any other elemental infusion. DMG is also increased by an amount equivalent to 15% of Furina's max HP.<br>Throughout the duration, Furina's Normal Attacks, Charged Attacks, and the impact of Plunging Attacks will cause different effects up to every 0.1s after hitting opponents depending on her current Arkhe alignment:<br><br>Arkhe: Ousia<br>Every 1s, all nearby characters in the party will be healed by 3% of Furina's max HP, for a duration of 2.5s. Triggering this effect again will extend its duration.<br>Arkhe: Pneuma<br>This Normal Attack, Charged Attack, or Plunging Attack ground impact DMG will be further increased by an amount equivalent to 15% of Furina's max HP. When any of the attacks mentioned previously hit an opponent, all nearby characters in the party will consume 1% of their current HP.<br><br>During the duration of each instance of \"Center of Attention,\" the above effects can be triggered up to 7 times. \"Center of Attention\" will end when its effects have triggered 7 times or when the duration expires.",
                        "Icon": "UI_Talent_S_Furina_02",
                        "Name": "\"A Woman Adapts Like Duckweed in Water\"",
                        "Level": 6
                    }
                ]
            },
            "3": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to unleash a solo dance, dealing Physical DMG to nearby opponents and changing her Arkhe alignment. If Salon Members or Singer of Many Waters summoned by her Elemental Skill \"Salon Solitaire\" are present, their lineup will switch in response.<br><br><color style='color:#FFD780;'>Arkhe: Seats Sacred and Secular</color><br>At intervals, when Furina's Normal Attacks hit, a Spiritbreath Thorn or a Surging Blade will descend based on her current alignment, dealing <color style='color:#80C0FF;'>Hydro DMG</color> based on her current alignment.<br>When Furina takes the field, her starting Arkhe will be Ousia.<br><br>Plunging Attack<br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_01",
                        "Lock": 8.0,
                        "Name": "Normal Attack: Soloist's Solicitation",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "48.386%",
                                    "52.325%",
                                    "56.263%",
                                    "61.889%",
                                    "65.828%",
                                    "70.329%",
                                    "76.518%",
                                    "82.707%",
                                    "88.895%",
                                    "95.647%",
                                    "102.399%",
                                    "109.15%",
                                    "115.902%",
                                    "122.653%",
                                    "129.405%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "43.729%",
                                    "47.289%",
                                    "50.848%",
                                    "55.933%",
                                    "59.492%",
                                    "63.56%",
                                    "69.153%",
                                    "74.747%",
                                    "80.34%",
                                    "86.442%",
                                    "92.543%",
                                    "98.645%",
                                    "104.747%",
                                    "110.849%",
                                    "116.95%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "55.12%",
                                    "59.606%",
                                    "64.093%",
                                    "70.502%",
                                    "74.989%",
                                    "80.116%",
                                    "87.167%",
                                    "94.217%",
                                    "101.267%",
                                    "108.958%",
                                    "116.649%",
                                    "124.34%",
                                    "132.032%",
                                    "139.723%",
                                    "147.414%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "73.298%",
                                    "79.264%",
                                    "85.23%",
                                    "93.753%",
                                    "99.719%",
                                    "106.537%",
                                    "115.913%",
                                    "125.288%",
                                    "134.663%",
                                    "144.891%",
                                    "155.119%",
                                    "165.346%",
                                    "175.574%",
                                    "185.801%",
                                    "196.029%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "74.218%",
                                    "80.259%",
                                    "86.3%",
                                    "94.93%",
                                    "100.971%",
                                    "107.875%",
                                    "117.368%",
                                    "126.861%",
                                    "136.354%",
                                    "146.71%",
                                    "157.066%",
                                    "167.422%",
                                    "177.778%",
                                    "188.134%",
                                    "198.49%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
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
                            },
                            {
                                "Desc": "Spiritbreath Thorn/Surging Blade DMG",
                                "ParamLevelList": [
                                    "9.46%",
                                    "10.23%",
                                    "11.0%",
                                    "12.1%",
                                    "12.87%",
                                    "13.75%",
                                    "14.96%",
                                    "16.17%",
                                    "17.38%",
                                    "18.7%",
                                    "20.02%",
                                    "21.34%",
                                    "22.66%",
                                    "23.98%",
                                    "25.3%"
                                ]
                            },
                            {
                                "Desc": "Spiritbreath Thorn/Surging Blade DMG Interval",
                                "ParamLevelList": [
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Invites the guests of the Salon Solitaire to come forth and abet in Furina's performance. Will summon either the Salon Members or the Singer of Many Waters based on Furina's current <color style='color:#FFD780;'>Arkhe alignment</color>.<br><br><color style='color:#FFD780;'>Ousia</color><br>Foaming bubbles like celebrants shall dance, dealing <color style='color:#80C0FF;'>AoE Hydro DMG</color> based on Furina's Max HP and summoning 3 Salon Members: the Ball Octopus-shaped Gentilhomme Usher, the Bubbly Seahorse-shaped Surintendante Chevalmarin, and the Armored Crab-shaped Mademoiselle Crabaletta.<br>They will attack nearby opponents at intervals, prioritizing the target of the active character, dealing <color style='color:#80C0FF;'>Hydro</color> DMG based on Max HP.<br>When they attack, if character(s) with more than 50% HP are nearby, the Members will increase their current attack's power based on the number of such characters, and consume said characters' HP. If the characters who meet these requirements are 1/2/3/4 (or more), the Members' attacks will deal 110%/120%/130%/140% of their original DMG.<br><br><color style='color:#FFD780;'>Pneuma</color><br>Summons the Singer of Many Waters, who will heal nearby active character(s) based on Max HP at intervals.<br><br>The Salon Members and Singer of Many Waters share a duration, and when Furina uses her Charged Attack to change the guest type, the new guests will inherit the initial duration.<br>While the Salon Members and the Singer of Many Waters are on the field, Furina can move on the water's surface.<br><br><i>A fixed roster of regulars frequent Furina's Salon Solitaire. At other times, Mademoiselle Crabaletta, Surintendante Chevalmarin, and Gentilhomme Usher shall visit, and on gloomy Wednesdays, it is the singer who comes by.</i>",
                        "Icon": "Skill_S_Furina_01",
                        "Lock": 8.0,
                        "Name": "Salon Solitaire",
                        "ParamDesc": [
                            {
                                "Desc": "Ousia Bubble DMG",
                                "ParamLevelList": [
                                    "7.864% Max HP",
                                    "8.454% Max HP",
                                    "9.044% Max HP",
                                    "9.83% Max HP",
                                    "10.42% Max HP",
                                    "11.01% Max HP",
                                    "11.796% Max HP",
                                    "12.582% Max HP",
                                    "13.369% Max HP",
                                    "14.155% Max HP",
                                    "14.942% Max HP",
                                    "15.728% Max HP",
                                    "16.711% Max HP",
                                    "17.694% Max HP",
                                    "18.677% Max HP"
                                ]
                            },
                            {
                                "Desc": "Duration",
                                "ParamLevelList": [
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s"
                                ]
                            },
                            {
                                "Desc": "Gentilhomme Usher DMG",
                                "ParamLevelList": [
                                    "5.96% Max HP",
                                    "6.407% Max HP",
                                    "6.854% Max HP",
                                    "7.45% Max HP",
                                    "7.897% Max HP",
                                    "8.344% Max HP",
                                    "8.94% Max HP",
                                    "9.536% Max HP",
                                    "10.132% Max HP",
                                    "10.728% Max HP",
                                    "11.324% Max HP",
                                    "11.92% Max HP",
                                    "12.665% Max HP",
                                    "13.41% Max HP",
                                    "14.155% Max HP"
                                ]
                            },
                            {
                                "Desc": "Surintendante Chevalmarin DMG",
                                "ParamLevelList": [
                                    "3.232% Max HP",
                                    "3.474% Max HP",
                                    "3.717% Max HP",
                                    "4.04% Max HP",
                                    "4.282% Max HP",
                                    "4.525% Max HP",
                                    "4.848% Max HP",
                                    "5.171% Max HP",
                                    "5.494% Max HP",
                                    "5.818% Max HP",
                                    "6.141% Max HP",
                                    "6.464% Max HP",
                                    "6.868% Max HP",
                                    "7.272% Max HP",
                                    "7.676% Max HP"
                                ]
                            },
                            {
                                "Desc": "Mademoiselle Crabaletta DMG",
                                "ParamLevelList": [
                                    "8.288% Max HP",
                                    "8.91% Max HP",
                                    "9.531% Max HP",
                                    "10.36% Max HP",
                                    "10.982% Max HP",
                                    "11.603% Max HP",
                                    "12.432% Max HP",
                                    "13.261% Max HP",
                                    "14.09% Max HP",
                                    "14.918% Max HP",
                                    "15.747% Max HP",
                                    "16.576% Max HP",
                                    "17.612% Max HP",
                                    "18.648% Max HP",
                                    "19.684% Max HP"
                                ]
                            },
                            {
                                "Desc": "Gentilhomme Usher HP Consumption",
                                "ParamLevelList": [
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP"
                                ]
                            },
                            {
                                "Desc": "Surintendante Chevalmarin HP Consumption",
                                "ParamLevelList": [
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP"
                                ]
                            },
                            {
                                "Desc": "Mademoiselle Crabaletta HP Consumption",
                                "ParamLevelList": [
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP"
                                ]
                            },
                            {
                                "Desc": "Singer of Many Waters Healing",
                                "ParamLevelList": [
                                    "4.8% Max HP+462.22531",
                                    "5.16% Max HP+508.45425",
                                    "5.52% Max HP+558.53564",
                                    "6.0% Max HP+612.46942",
                                    "6.36% Max HP+670.25562",
                                    "6.72% Max HP+731.89423",
                                    "7.2% Max HP+797.38519",
                                    "7.68% Max HP+866.72864",
                                    "8.16% Max HP+939.9245",
                                    "8.64% Max HP+1016.97278",
                                    "9.12% Max HP+1097.87341",
                                    "9.6% Max HP+1182.62646",
                                    "10.2% Max HP+1271.23206",
                                    "10.8% Max HP+1363.68994",
                                    "11.4% Max HP+1460.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Rouses the impulse to revel, creating a stage of foam that will deal <color style='color:#80C0FF;'>AoE Hydro DMG</color> based on Furina's Max HP and cause nearby party members to enter the Universal Revelry state: During this time, when nearby party members' HP increases or decreases, 1 Fanfare point will be granted to Furina for each percentage point of their Max HP by which their HP changes.<br>At the same time, Furina will increase the DMG dealt by and Incoming Healing Bonus of all nearby party members based on the amount of Fanfare she has.<br>When the duration ends, Furina's Fanfare points will be cleared.<br><br><i>\"Cheer! Give praise! Be awed! Raise your glasses! Every night bereft of banqueting is a sordid squandering of sore, sober daylight... And, uh, those who are not yet of age may have grape juice instead!\"</i>",
                        "Icon": "Skill_E_Furina_01",
                        "Lock": 8.0,
                        "Name": "Let the People Rejoice",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "11.406% Max HP",
                                    "12.262% Max HP",
                                    "13.117% Max HP",
                                    "14.258% Max HP",
                                    "15.113% Max HP",
                                    "15.969% Max HP",
                                    "17.11% Max HP",
                                    "18.25% Max HP",
                                    "19.391% Max HP",
                                    "20.531% Max HP",
                                    "21.672% Max HP",
                                    "22.813% Max HP",
                                    "24.239% Max HP",
                                    "25.664% Max HP",
                                    "27.09% Max HP"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                                "Desc": "Maximum Fanfare",
                                "ParamLevelList": [
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0"
                                ]
                            },
                            {
                                "Desc": "Fanfare to DMG Increase Conversion Ratio",
                                "ParamLevelList": [
                                    "0.0%",
                                    "0.0%",
                                    "0.11%",
                                    "0.13%",
                                    "0.15%",
                                    "0.17%",
                                    "0.19%",
                                    "0.21%",
                                    "0.23%",
                                    "0.25%",
                                    "0.27%",
                                    "0.29%",
                                    "0.31%",
                                    "0.33%",
                                    "0.35%"
                                ]
                            },
                            {
                                "Desc": "Fanfare to Incoming Healing Bonus Conversion Ratio",
                                "ParamLevelList": [
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.1%",
                                    "0.11%",
                                    "0.12%",
                                    "0.13%",
                                    "0.14%",
                                    "0.15%"
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
                        "Desc": "When the active character in your party receives healing, if the source of the healing is not Furina herself and the healing overflows, then Furina will heal a nearby party member for 2% of their Max HP once every 2s within the next 4s.",
                        "Icon": "UI_Talent_S_Furina_05",
                        "Name": "Endless Waltz"
                    },
                    {
                        "Desc": "Every 1,000 points of Furina's Max HP can buff the different Arkhe-aligned <color style='color:#FFD780;'>Salon Solitaire</color> in the following ways:<br>Will increase Salon Member DMG dealt by 0.7%, up to a maximum of 28%.<br>Will decrease active character healing interval of the Singer of Many Waters by 0.4%, up to a maximum of 16%.",
                        "Icon": "UI_Talent_S_Furina_06",
                        "Name": "Unheard Confession"
                    },
                    {
                        "Desc": "Xenochromatic Fontemer Aberrant ability CD decreased by 30%.",
                        "Icon": "UI_Talent_S_Furina_07",
                        "Name": "The Sea Is My Stage"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When using <color style='color:#FFD780;'>Let the People Rejoice</color>, Furina will gain 150 Fanfare.<br>Additionally, Furina's Fanfare limit is increased by 150.",
                        "Icon": "UI_Talent_S_Furina_01",
                        "Name": "\"Like a Recalcitrant Bird, Love is Deaf to Pleading\"",
                        "Level": 1
                    },
                    {
                        "Desc": "While <color style='color:#FFD780;'>Let the People Rejoice</color> lasts, Furina's Fanfare gain from increases or decreases in nearby characters' HP is increased by 200%. Each point of Fanfare above the limit will increase Furina's Max HP by 0.4%. Her maximum Max HP increase is 140%.",
                        "Icon": "UI_Talent_S_Furina_04",
                        "Name": "\"Let Us Raise the Chalice of Love!\"",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Let the People Rejoice</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Furina_02",
                        "Name": "\"His Name I Now Know, It Is...!\"",
                        "Level": 3
                    },
                    {
                        "Desc": "When the Salon Members from <color style='color:#FFD780;'>Salon Solitaire</color> hit an opponent, or the Singer of Many Waters restores HP to the active character, Furina will restore 4 Energy. This effect triggers once every 5s.",
                        "Icon": "UI_Talent_S_Furina_03",
                        "Name": "\"They Know Not Life, Who Dwelt in the Netherworld Not!\"",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Salon Solitaire</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Furina_01",
                        "Name": "\"My Secrets I Hide, Unknown to All\"",
                        "Level": 5
                    },
                    {
                        "Desc": "When using the Elemental Skill \"Salon Solitaire,\" Furina gains \"Center of Attention\" for 10s.<br>Throughout the duration, Furina's Normal Attacks, Charged Attacks, and Plunging Attacks are converted into <color style='color:#80C0FF;'>Hydro DMG</color> which cannot be overridden by any other elemental infusion. DMG is also increased by an amount equivalent to 15% of Furina's max HP.<br>Throughout the duration, Furina's Normal Attacks, Charged Attacks, and the impact of Plunging Attacks will cause different effects up to every 0.1s after hitting opponents depending on her current Arkhe alignment:<br><br>Arkhe: Ousia<br>Every 1s, all nearby characters in the party will be healed by 3% of Furina's max HP, for a duration of 2.5s. Triggering this effect again will extend its duration.<br>Arkhe: Pneuma<br>This Normal Attack, Charged Attack, or Plunging Attack ground impact DMG will be further increased by an amount equivalent to 15% of Furina's max HP. When any of the attacks mentioned previously hit an opponent, all nearby characters in the party will consume 1% of their current HP.<br><br>During the duration of each instance of \"Center of Attention,\" the above effects can be triggered up to 7 times. \"Center of Attention\" will end when its effects have triggered 7 times or when the duration expires.",
                        "Icon": "UI_Talent_S_Furina_02",
                        "Name": "\"A Woman Adapts Like Duckweed in Water\"",
                        "Level": 6
                    }
                ]
            },
            "4": {
                "BattleSkills": [
                    {
                        "Num": 1,
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to unleash a solo dance, dealing Physical DMG to nearby opponents and changing her Arkhe alignment. If Salon Members or Singer of Many Waters summoned by her Elemental Skill \"Salon Solitaire\" are present, their lineup will switch in response.<br><br><color style='color:#FFD780;'>Arkhe: Seats Sacred and Secular</color><br>At intervals, when Furina's Normal Attacks hit, a Spiritbreath Thorn or a Surging Blade will descend based on her current alignment, dealing <color style='color:#80C0FF;'>Hydro DMG</color> based on her current alignment.<br>When Furina takes the field, her starting Arkhe will be Ousia.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_01",
                        "Lock": 8.0,
                        "Name": "Normal Attack: Soloist's Solicitation",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "48.386%",
                                    "52.325%",
                                    "56.263%",
                                    "61.889%",
                                    "65.828%",
                                    "70.329%",
                                    "76.518%",
                                    "82.707%",
                                    "88.895%",
                                    "95.647%",
                                    "102.399%",
                                    "109.15%",
                                    "115.902%",
                                    "122.653%",
                                    "129.405%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "43.729%",
                                    "47.289%",
                                    "50.848%",
                                    "55.933%",
                                    "59.492%",
                                    "63.56%",
                                    "69.153%",
                                    "74.747%",
                                    "80.34%",
                                    "86.442%",
                                    "92.543%",
                                    "98.645%",
                                    "104.747%",
                                    "110.849%",
                                    "116.95%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "55.12%",
                                    "59.606%",
                                    "64.093%",
                                    "70.502%",
                                    "74.989%",
                                    "80.116%",
                                    "87.167%",
                                    "94.217%",
                                    "101.267%",
                                    "108.958%",
                                    "116.649%",
                                    "124.34%",
                                    "132.032%",
                                    "139.723%",
                                    "147.414%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "73.298%",
                                    "79.264%",
                                    "85.23%",
                                    "93.753%",
                                    "99.719%",
                                    "106.537%",
                                    "115.913%",
                                    "125.288%",
                                    "134.663%",
                                    "144.891%",
                                    "155.119%",
                                    "165.346%",
                                    "175.574%",
                                    "185.801%",
                                    "196.029%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "74.218%",
                                    "80.259%",
                                    "86.3%",
                                    "94.93%",
                                    "100.971%",
                                    "107.875%",
                                    "117.368%",
                                    "126.861%",
                                    "136.354%",
                                    "146.71%",
                                    "157.066%",
                                    "167.422%",
                                    "177.778%",
                                    "188.134%",
                                    "198.49%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
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
                            },
                            {
                                "Desc": "Spiritbreath Thorn/Surging Blade DMG",
                                "ParamLevelList": [
                                    "9.46%",
                                    "10.23%",
                                    "11.0%",
                                    "12.1%",
                                    "12.87%",
                                    "13.75%",
                                    "14.96%",
                                    "16.17%",
                                    "17.38%",
                                    "18.7%",
                                    "20.02%",
                                    "21.34%",
                                    "22.66%",
                                    "23.98%",
                                    "25.3%"
                                ]
                            },
                            {
                                "Desc": "Spiritbreath Thorn/Surging Blade DMG Interval",
                                "ParamLevelList": [
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s",
                                    "6.0s/6.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Invites the guests of the Salon Solitaire to come forth and abet in Furina's performance. Will summon either the Salon Members or the Singer of Many Waters based on Furina's current <color style='color:#FFD780;'>Arkhe alignment</color>.<br><br><color style='color:#FFD780;'>Ousia</color><br>Foaming bubbles like celebrants shall dance, dealing <color style='color:#80C0FF;'>AoE Hydro DMG</color> based on Furina's Max HP and summoning 3 Salon Members: the Ball Octopus-shaped Gentilhomme Usher, the Bubbly Seahorse-shaped Surintendante Chevalmarin, and the Armored Crab-shaped Mademoiselle Crabaletta.<br>They will attack nearby opponents at intervals, prioritizing the target of the active character, dealing <color style='color:#80C0FF;'>Hydro</color> DMG based on Max HP.<br>When they attack, if character(s) with more than 50% HP are nearby, the Members will increase their current attack's power based on the number of such characters, and consume said characters' HP. If the characters who meet these requirements are 1/2/3/4 (or more), the Members' attacks will deal 110%/120%/130%/140% of their original DMG.<br><br><color style='color:#FFD780;'>Pneuma</color><br>Summons the Singer of Many Waters, who will heal nearby active character(s) based on Max HP at intervals.<br><br>The Salon Members and Singer of Many Waters share a duration, and when Furina uses her Charged Attack to change the guest type, the new guests will inherit the initial duration.<br>While the Salon Members and the Singer of Many Waters are on the field, Furina can move on the water's surface.<br><br><i>A fixed roster of regulars frequent Furina's Salon Solitaire. At other times, Mademoiselle Crabaletta, Surintendante Chevalmarin, and Gentilhomme Usher shall visit, and on gloomy Wednesdays, it is the singer who comes by.</i>",
                        "Icon": "Skill_S_Furina_01",
                        "Lock": 8.0,
                        "Name": "Salon Solitaire",
                        "ParamDesc": [
                            {
                                "Desc": "Ousia Bubble DMG",
                                "ParamLevelList": [
                                    "7.864% Max HP",
                                    "8.454% Max HP",
                                    "9.044% Max HP",
                                    "9.83% Max HP",
                                    "10.42% Max HP",
                                    "11.01% Max HP",
                                    "11.796% Max HP",
                                    "12.582% Max HP",
                                    "13.369% Max HP",
                                    "14.155% Max HP",
                                    "14.942% Max HP",
                                    "15.728% Max HP",
                                    "16.711% Max HP",
                                    "17.694% Max HP",
                                    "18.677% Max HP"
                                ]
                            },
                            {
                                "Desc": "Duration",
                                "ParamLevelList": [
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s",
                                    "30.0s"
                                ]
                            },
                            {
                                "Desc": "Gentilhomme Usher DMG",
                                "ParamLevelList": [
                                    "5.96% Max HP",
                                    "6.407% Max HP",
                                    "6.854% Max HP",
                                    "7.45% Max HP",
                                    "7.897% Max HP",
                                    "8.344% Max HP",
                                    "8.94% Max HP",
                                    "9.536% Max HP",
                                    "10.132% Max HP",
                                    "10.728% Max HP",
                                    "11.324% Max HP",
                                    "11.92% Max HP",
                                    "12.665% Max HP",
                                    "13.41% Max HP",
                                    "14.155% Max HP"
                                ]
                            },
                            {
                                "Desc": "Surintendante Chevalmarin DMG",
                                "ParamLevelList": [
                                    "3.232% Max HP",
                                    "3.474% Max HP",
                                    "3.717% Max HP",
                                    "4.04% Max HP",
                                    "4.282% Max HP",
                                    "4.525% Max HP",
                                    "4.848% Max HP",
                                    "5.171% Max HP",
                                    "5.494% Max HP",
                                    "5.818% Max HP",
                                    "6.141% Max HP",
                                    "6.464% Max HP",
                                    "6.868% Max HP",
                                    "7.272% Max HP",
                                    "7.676% Max HP"
                                ]
                            },
                            {
                                "Desc": "Mademoiselle Crabaletta DMG",
                                "ParamLevelList": [
                                    "8.288% Max HP",
                                    "8.91% Max HP",
                                    "9.531% Max HP",
                                    "10.36% Max HP",
                                    "10.982% Max HP",
                                    "11.603% Max HP",
                                    "12.432% Max HP",
                                    "13.261% Max HP",
                                    "14.09% Max HP",
                                    "14.918% Max HP",
                                    "15.747% Max HP",
                                    "16.576% Max HP",
                                    "17.612% Max HP",
                                    "18.648% Max HP",
                                    "19.684% Max HP"
                                ]
                            },
                            {
                                "Desc": "Gentilhomme Usher HP Consumption",
                                "ParamLevelList": [
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP"
                                ]
                            },
                            {
                                "Desc": "Surintendante Chevalmarin HP Consumption",
                                "ParamLevelList": [
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP"
                                ]
                            },
                            {
                                "Desc": "Mademoiselle Crabaletta HP Consumption",
                                "ParamLevelList": [
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP"
                                ]
                            },
                            {
                                "Desc": "Singer of Many Waters Healing",
                                "ParamLevelList": [
                                    "4.8% Max HP+462.22531",
                                    "5.16% Max HP+508.45425",
                                    "5.52% Max HP+558.53564",
                                    "6.0% Max HP+612.46942",
                                    "6.36% Max HP+670.25562",
                                    "6.72% Max HP+731.89423",
                                    "7.2% Max HP+797.38519",
                                    "7.68% Max HP+866.72864",
                                    "8.16% Max HP+939.9245",
                                    "8.64% Max HP+1016.97278",
                                    "9.12% Max HP+1097.87341",
                                    "9.6% Max HP+1182.62646",
                                    "10.2% Max HP+1271.23206",
                                    "10.8% Max HP+1363.68994",
                                    "11.4% Max HP+1460.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s",
                                    "20.0s"
                                ]
                            }
                        ]
                    },
                    {
                        "Num": 1,
                        "Desc": "Rouses the impulse to revel, creating a stage of foam that will deal <color style='color:#80C0FF;'>AoE Hydro DMG</color> based on Furina's Max HP and cause nearby party members to enter the Universal Revelry state: During this time, when nearby party members' HP increases or decreases, 1 Fanfare point will be granted to Furina for each percentage point of their Max HP by which their HP changes.<br>At the same time, Furina will increase the DMG dealt by and Incoming Healing Bonus of all nearby party members based on the amount of Fanfare she has.<br>When the duration ends, Furina's Fanfare points will be cleared.<br><br><i>\"Cheer! Give praise! Be awed! Raise your glasses! Every night bereft of banqueting is a sordid squandering of sore, sober daylight... And, uh, those who are not yet of age may have grape juice instead!\"</i>",
                        "Icon": "Skill_E_Furina_01",
                        "Lock": 8.0,
                        "Name": "Let the People Rejoice",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "11.406% Max HP",
                                    "12.262% Max HP",
                                    "13.117% Max HP",
                                    "14.258% Max HP",
                                    "15.113% Max HP",
                                    "15.969% Max HP",
                                    "17.11% Max HP",
                                    "18.25% Max HP",
                                    "19.391% Max HP",
                                    "20.531% Max HP",
                                    "21.672% Max HP",
                                    "22.813% Max HP",
                                    "24.239% Max HP",
                                    "25.664% Max HP",
                                    "27.09% Max HP"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                                "Desc": "Maximum Fanfare",
                                "ParamLevelList": [
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0",
                                    "300.0"
                                ]
                            },
                            {
                                "Desc": "Fanfare to DMG Increase Conversion Ratio",
                                "ParamLevelList": [
                                    "0.0%",
                                    "0.0%",
                                    "0.11%",
                                    "0.13%",
                                    "0.15%",
                                    "0.17%",
                                    "0.19%",
                                    "0.21%",
                                    "0.23%",
                                    "0.25%",
                                    "0.27%",
                                    "0.29%",
                                    "0.31%",
                                    "0.33%",
                                    "0.35%"
                                ]
                            },
                            {
                                "Desc": "Fanfare to Incoming Healing Bonus Conversion Ratio",
                                "ParamLevelList": [
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.0%",
                                    "0.1%",
                                    "0.11%",
                                    "0.12%",
                                    "0.13%",
                                    "0.14%",
                                    "0.15%"
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
                        "Desc": "When the active character in your party receives healing, if the source of the healing is not Furina herself and the healing overflows, then Furina will heal a nearby party member for 2% of their Max HP once every 2s within the next 4s.",
                        "Icon": "UI_Talent_S_Furina_05",
                        "Name": "Endless Waltz"
                    },
                    {
                        "Desc": "Every 1,000 points of Furina's Max HP can buff the different Arkhe-aligned <color style='color:#FFD780;'>Salon Solitaire</color> in the following ways:<br>Will increase Salon Member DMG dealt by 0.7%, up to a maximum of 28%.<br>Will decrease active character healing interval of the Singer of Many Waters by 0.4%, up to a maximum of 16%.",
                        "Icon": "UI_Talent_S_Furina_06",
                        "Name": "Unheard Confession"
                    },
                    {
                        "Desc": "Xenochromatic Fontemer Aberrant ability CD decreased by 30%.",
                        "Icon": "UI_Talent_S_Furina_07",
                        "Name": "The Sea Is My Stage"
                    }
                ],
                "Constellations": [
                    {
                        "Desc": "When using <color style='color:#FFD780;'>Let the People Rejoice</color>, Furina will gain 150 Fanfare.<br>Additionally, Furina's Fanfare limit is increased by 100.",
                        "Icon": "UI_Talent_S_Furina_01",
                        "Name": "\"Love Is a Rebellious Bird That None Can Tame\"",
                        "Level": 1
                    },
                    {
                        "Desc": "While <color style='color:#FFD780;'>Let the People Rejoice</color> lasts, Furina's Fanfare gain from increases or decreases in nearby characters' HP is increased by 250%. Each point of Fanfare above the limit will increase Furina's Max HP by 0.35%. Her maximum Max HP increase is 140%.",
                        "Icon": "UI_Talent_S_Furina_04",
                        "Name": "\"A Woman Adapts Like Duckweed in Water\"",
                        "Level": 2
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Let the People Rejoice</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Furina_02",
                        "Name": "\"My Secret Is Hidden Within Me, No One Will Know My Name\"",
                        "Level": 3
                    },
                    {
                        "Desc": "When the Salon Members from <color style='color:#FFD780;'>Salon Solitaire</color> hit an opponent, or the Singer of Many Waters restores HP to the active character, Furina will restore 4 Energy. This effect triggers once every 5s.",
                        "Icon": "UI_Talent_S_Furina_03",
                        "Name": "\"They Know Not Life, Who Dwelt in the Netherworld Not!\"",
                        "Level": 4
                    },
                    {
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Salon Solitaire</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Furina_01",
                        "Name": "\"His Name I Now Know, It Is...!\"",
                        "Level": 5
                    },
                    {
                        "Desc": "When using the Elemental Skill \"Salon Solitaire,\" Furina gains \"Center of Attention\" for 10s.<br>Throughout the duration, Furina's Normal Attacks, Charged Attacks, and Plunging Attacks are converted into <color style='color:#80C0FF;'>Hydro DMG</color> which cannot be overridden by any other elemental infusion. DMG is also increased by an amount equivalent to 15% of Furina's max HP.<br>Throughout the duration, Furina's Normal Attacks, Charged Attacks, and the impact of Plunging Attacks will cause different effects up to every 0.1s after hitting opponents depending on her current Arkhe alignment:<br><br>Arkhe: Ousia<br>Every 1s, all nearby characters in the party will be healed by 4% of Furina's max HP, for a duration of 2.5s. Triggering this effect again will extend its duration.<br>Arkhe: Pneuma<br>This Normal Attack, Charged Attack, or Plunging Attack ground impact DMG will be further increased by an amount equivalent to 20% of Furina's max HP. When any of the attacks mentioned previously hit an opponent, all nearby characters in the party will consume 1% of their current HP.<br><br>During the duration of each instance of \"Center of Attention,\" the above effects can be triggered up to 7 times. \"Center of Attention\" will end when its effects have triggered 7 times or when the duration expires.",
                        "Icon": "UI_Talent_S_Furina_02",
                        "Name": "\"Hear Me — Let Us Raise the Chalice of Love!\"",
                        "Level": 6
                    }
                ]
            },
            "L": {
                "BattleSkills": [
                    {
                        "Name": "Soloist's Solicitation",
                        "Desc": "<color style='color:#FFD780;'>Normal Attack</color><br>Performs up to 4 consecutive strikes.<br><br><color style='color:#FFD780;'>Charged Attack</color><br>Consumes a certain amount of Stamina to unleash a solo dance, dealing Physical DMG to nearby opponents and changing her Arkhe alignment. If Salon Members or the Singer of Many Waters summoned by her Elemental Skill \"Salon Solitaire\" is present, their lineup will switch in response.<br><br><color style='color:#FFD780;'>Arkhe: Seats Sacred and Secular</color><br>At intervals, when Furina's Normal Attacks hit, a Spiritbreath Thorn or a Surging Blade will descend based on her current Arkhe alignment, dealing Pneuma- or Ousia-aligned <color style='color:#80C0FF;'>Hydro DMG</color>.<br>When Furina takes the field, her starting Arkhe alignment will be Ousia.<br><br><color style='color:#FFD780;'>Plunging Attack</color><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1-Hit DMG",
                                "ParamLevelList": [
                                    "48.3862%",
                                    "52.3246%",
                                    "56.263%",
                                    "61.8893%",
                                    "65.8277%",
                                    "70.3287%",
                                    "76.5177%",
                                    "82.7066%",
                                    "88.8955%",
                                    "95.6471%",
                                    "102.3987%",
                                    "109.1502%",
                                    "115.9018%",
                                    "122.6533%",
                                    "129.4049%"
                                ]
                            },
                            {
                                "Desc": "2-Hit DMG",
                                "ParamLevelList": [
                                    "43.7293%",
                                    "47.2886%",
                                    "50.848%",
                                    "55.9328%",
                                    "59.4922%",
                                    "63.56%",
                                    "69.1533%",
                                    "74.7466%",
                                    "80.3398%",
                                    "86.4416%",
                                    "92.5434%",
                                    "98.6451%",
                                    "104.7469%",
                                    "110.8486%",
                                    "116.9504%"
                                ]
                            },
                            {
                                "Desc": "3-Hit DMG",
                                "ParamLevelList": [
                                    "55.12%",
                                    "59.6065%",
                                    "64.093%",
                                    "70.5023%",
                                    "74.9888%",
                                    "80.1162%",
                                    "87.1665%",
                                    "94.2167%",
                                    "101.2669%",
                                    "108.9581%",
                                    "116.6493%",
                                    "124.3404%",
                                    "132.0316%",
                                    "139.7227%",
                                    "147.4139%"
                                ]
                            },
                            {
                                "Desc": "4-Hit DMG",
                                "ParamLevelList": [
                                    "73.2978%",
                                    "79.2639%",
                                    "85.23%",
                                    "93.753%",
                                    "99.7191%",
                                    "106.5375%",
                                    "115.9128%",
                                    "125.2881%",
                                    "134.6634%",
                                    "144.891%",
                                    "155.1186%",
                                    "165.3462%",
                                    "175.5738%",
                                    "185.8014%",
                                    "196.029%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack DMG",
                                "ParamLevelList": [
                                    "74.218%",
                                    "80.259%",
                                    "86.3%",
                                    "94.93%",
                                    "100.971%",
                                    "107.875%",
                                    "117.368%",
                                    "126.861%",
                                    "136.354%",
                                    "146.71%",
                                    "157.066%",
                                    "167.422%",
                                    "177.778%",
                                    "188.134%",
                                    "198.49%"
                                ]
                            },
                            {
                                "Desc": "Charged Attack Stamina Cost",
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
                            },
                            {
                                "Desc": "Spiritbreath Thorn/Surging Blade DMG",
                                "ParamLevelList": [
                                    "9.46%",
                                    "10.23%",
                                    "11.0%",
                                    "12.1%",
                                    "12.87%",
                                    "13.75%",
                                    "14.96%",
                                    "16.17%",
                                    "17.38%",
                                    "18.7%",
                                    "20.02%",
                                    "21.34%",
                                    "22.66%",
                                    "23.98%",
                                    "25.3%"
                                ]
                            },
                            {
                                "Desc": "Spiritbreath Thorn/Surging Blade DMG Interval",
                                "ParamLevelList": [
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s",
                                    "6s/6s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Salon Solitaire",
                        "Desc": "Invites the guests of the Salon Solitaire to come forth and aid in Furina's performance. Will summon either the Salon Members or the Singer of Many Waters based on Furina's current <color style='color:#FFD780;'>Arkhe alignment</color>.<br><br><color style='color:#FFD780;'>Ousia</color><br>Foaming bubbles like celebrants shall dance, dealing <color style='color:#80C0FF;'>AoE Hydro DMG</color> based on Furina's Max HP and summoning 3 Salon Members: the Ball Octopus-shaped Gentilhomme Usher, the Bubbly Seahorse-shaped Surintendante Chevalmarin, and the Armored Crab-shaped Mademoiselle Crabaletta.<br>They will attack nearby opponents at intervals, prioritizing the target of the active character, dealing <color style='color:#80C0FF;'>Hydro</color> DMG based on Max HP.<br>When they attack, if character(s) with more than 50% HP are nearby, the Members will increase their current attack's power based on the number of such characters, and consume said characters' HP. If 1/2/3/4 (or more) characters meet these requirements, the Members' attacks will deal 110%/120%/130%/140% of their original DMG.<br><br><color style='color:#FFD780;'>Pneuma</color><br>Summons the Singer of Many Waters, who will heal nearby active character(s) based on Max HP at intervals.<br><br>The Salon Members and Singer of Many Waters share a duration, and when Furina uses her Charged Attack to change the guest type, the new guests will inherit the remaining duration.<br>While the Salon Members or the Singer of Many Waters is on the field, Furina can move on the water's surface.<br><br><i>A fixed roster of regulars frequent Furina's Salon Solitaire. At other times, Mademoiselle Crabaletta, Surintendante Chevalmarin, and Gentilhomme Usher shall visit, and on gloomy Wednesdays, it is the singer who comes by.</i>",
                        "Icon": "Skill_S_Furina_01",
                        "ParamDesc": [
                            {
                                "Desc": "Ousia Bubble DMG",
                                "ParamLevelList": [
                                    "7.864% Max HP",
                                    "8.4538% Max HP",
                                    "9.0436% Max HP",
                                    "9.83% Max HP",
                                    "10.4198% Max HP",
                                    "11.0096% Max HP",
                                    "11.796% Max HP",
                                    "12.5824% Max HP",
                                    "13.3688% Max HP",
                                    "14.1552% Max HP",
                                    "14.9416% Max HP",
                                    "15.728% Max HP",
                                    "16.711% Max HP",
                                    "17.694% Max HP",
                                    "18.677% Max HP"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                            },
                            {
                                "Desc": "Gentilhomme Usher DMG",
                                "ParamLevelList": [
                                    "5.96% Max HP",
                                    "6.407% Max HP",
                                    "6.854% Max HP",
                                    "7.45% Max HP",
                                    "7.897% Max HP",
                                    "8.344% Max HP",
                                    "8.94% Max HP",
                                    "9.536% Max HP",
                                    "10.132% Max HP",
                                    "10.728% Max HP",
                                    "11.324% Max HP",
                                    "11.92% Max HP",
                                    "12.665% Max HP",
                                    "13.41% Max HP",
                                    "14.155% Max HP"
                                ]
                            },
                            {
                                "Desc": "Surintendante Chevalmarin DMG",
                                "ParamLevelList": [
                                    "3.232% Max HP",
                                    "3.4744% Max HP",
                                    "3.7168% Max HP",
                                    "4.04% Max HP",
                                    "4.2824% Max HP",
                                    "4.5248% Max HP",
                                    "4.848% Max HP",
                                    "5.1712% Max HP",
                                    "5.4944% Max HP",
                                    "5.8176% Max HP",
                                    "6.1408% Max HP",
                                    "6.464% Max HP",
                                    "6.868% Max HP",
                                    "7.272% Max HP",
                                    "7.676% Max HP"
                                ]
                            },
                            {
                                "Desc": "Mademoiselle Crabaletta DMG",
                                "ParamLevelList": [
                                    "8.288% Max HP",
                                    "8.9096% Max HP",
                                    "9.5312% Max HP",
                                    "10.36% Max HP",
                                    "10.9816% Max HP",
                                    "11.6032% Max HP",
                                    "12.432% Max HP",
                                    "13.2608% Max HP",
                                    "14.0896% Max HP",
                                    "14.9184% Max HP",
                                    "15.7472% Max HP",
                                    "16.576% Max HP",
                                    "17.612% Max HP",
                                    "18.648% Max HP",
                                    "19.684% Max HP"
                                ]
                            },
                            {
                                "Desc": "Gentilhomme Usher HP Consumption",
                                "ParamLevelList": [
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP",
                                    "2.4% Max HP"
                                ]
                            },
                            {
                                "Desc": "Surintendante Chevalmarin HP Consumption",
                                "ParamLevelList": [
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP",
                                    "1.6% Max HP"
                                ]
                            },
                            {
                                "Desc": "Mademoiselle Crabaletta HP Consumption",
                                "ParamLevelList": [
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP",
                                    "3.6% Max HP"
                                ]
                            },
                            {
                                "Desc": "Singer of Many Waters Healing",
                                "ParamLevelList": [
                                    "4.8% Max HP+462.2253",
                                    "5.16% Max HP+508.45425",
                                    "5.52% Max HP+558.53564",
                                    "6.0% Max HP+612.4694",
                                    "6.36% Max HP+670.2556",
                                    "6.72% Max HP+731.8942",
                                    "7.2% Max HP+797.3852",
                                    "7.68% Max HP+866.72864",
                                    "8.16% Max HP+939.9245",
                                    "8.64% Max HP+1016.9728",
                                    "9.12% Max HP+1097.8734",
                                    "9.6% Max HP+1182.6265",
                                    "10.2% Max HP+1271.232",
                                    "10.8% Max HP+1363.69",
                                    "11.4% Max HP+1460.0"
                                ]
                            },
                            {
                                "Desc": "CD",
                                "ParamLevelList": [
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s",
                                    "20s"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "Let the People Rejoice",
                        "Desc": "Rouses the impulse to revel, creating a stage of foam that will deal <color style='color:#80C0FF;'>AoE Hydro DMG</color> based on Furina's Max HP and cause nearby party members to enter the Universal Revelry state: During this time, when nearby party members' HP increases or decreases, 1 Fanfare point will be granted to Furina for each percentage point of their Max HP by which their HP changes.<br>At the same time, Furina will increase the DMG dealt by and Incoming Healing Bonus of all nearby party members based on the amount of Fanfare she has.<br>When the duration ends, Furina's Fanfare points will be cleared.<br><br><i>\"Cheer! Give praise! Be awed! Raise your glasses! Every night bereft of banqueting is a sordid squandering of sore, sober daylight... And, uh, those who are not yet of age may have grape juice instead!\"</i>",
                        "Icon": "Skill_E_Furina_01",
                        "ParamDesc": [
                            {
                                "Desc": "Skill DMG",
                                "ParamLevelList": [
                                    "11.4064% Max HP",
                                    "12.2619% Max HP",
                                    "13.1174% Max HP",
                                    "14.258% Max HP",
                                    "15.1135% Max HP",
                                    "15.969% Max HP",
                                    "17.1096% Max HP",
                                    "18.2502% Max HP",
                                    "19.3909% Max HP",
                                    "20.5315% Max HP",
                                    "21.6722% Max HP",
                                    "22.8128% Max HP",
                                    "24.2386% Max HP",
                                    "25.6644% Max HP",
                                    "27.0902% Max HP"
                                ]
                            },
                            {
                                "Desc": "Duration",
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
                                "Desc": "Maximum Fanfare",
                                "ParamLevelList": [
                                    "300",
                                    "300",
                                    "300",
                                    "300",
                                    "300",
                                    "300",
                                    "300",
                                    "300",
                                    "300",
                                    "300",
                                    "300",
                                    "300",
                                    "300",
                                    "300",
                                    "300"
                                ]
                            },
                            {
                                "Desc": "Fanfare to DMG Increase Conversion Ratio",
                                "ParamLevelList": [
                                    "0.07%",
                                    "0.09%",
                                    "0.11%",
                                    "0.13%",
                                    "0.15%",
                                    "0.17%",
                                    "0.19%",
                                    "0.21%",
                                    "0.23%",
                                    "0.25%",
                                    "0.27%",
                                    "0.29%",
                                    "0.31%",
                                    "0.33%",
                                    "0.35%"
                                ]
                            },
                            {
                                "Desc": "Fanfare to Incoming Healing Bonus Conversion Ratio",
                                "ParamLevelList": [
                                    "0.01%",
                                    "0.02%",
                                    "0.03%",
                                    "0.04%",
                                    "0.05%",
                                    "0.06%",
                                    "0.07%",
                                    "0.08%",
                                    "0.09%",
                                    "0.1%",
                                    "0.11%",
                                    "0.12%",
                                    "0.13%",
                                    "0.14%",
                                    "0.15%"
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
                        "Name": "Endless Waltz",
                        "Desc": "When the active character in your party receives healing, if the source of the healing is not Furina herself and the healing overflows, then Furina will heal nearby party members for 2% of their Max HP once every 2s for the next 4s.",
                        "Icon": "UI_Talent_S_Furina_05"
                    },
                    {
                        "Name": "Unheard Confession",
                        "Desc": "Every 1,000 points of Furina's Max HP can buff the different Arkhe-aligned <color style='color:#FFD780;'>Salon Solitaire</color> in the following ways:<br>Will increase Salon Members' DMG dealt by 0.7%, up to a maximum of 28%.<br>Will decrease the Singer of Many Waters' healing interval for nearby active characters by 0.4%, up to a maximum of 16%.",
                        "Icon": "UI_Talent_S_Furina_06"
                    },
                    {
                        "Name": "The Sea Is My Stage",
                        "Desc": "Xenochromatic Fontemer Aberrant ability CD decreased by 30%.",
                        "Icon": "UI_Talent_S_Furina_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "\"Love Is a Rebellious Bird That None Can Tame\"",
                        "Desc": "When using <color style='color:#FFD780;'>Let the People Rejoice</color>, Furina will gain 150 Fanfare.<br>Additionally, Furina's Fanfare limit is increased by 100.",
                        "Icon": "UI_Talent_S_Furina_01"
                    },
                    {
                        "Level": 2,
                        "Name": "\"A Woman Adapts Like Duckweed in Water\"",
                        "Desc": "While <color style='color:#FFD780;'>Let the People Rejoice</color> lasts, Furina's Fanfare gain from increases or decreases in nearby characters' HP is increased by 250%. Each point of Fanfare above the limit will increase Furina's Max HP by 0.35%. Her maximum Max HP increase is 140%.",
                        "Icon": "UI_Talent_S_Furina_04"
                    },
                    {
                        "Level": 3,
                        "Name": "\"My Secret Is Hidden Within Me, No One Will Know My Name\"",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Let the People Rejoice</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Furina_02"
                    },
                    {
                        "Level": 4,
                        "Name": "\"They Know Not Life, Who Dwelt in the Netherworld Not!\"",
                        "Desc": "When the Salon Members from <color style='color:#FFD780;'>Salon Solitaire</color> hit an opponent, or the Singer of Many Waters restores HP to nearby active characters, Furina will restore 4 Energy. This effect can be triggered once every 5s.",
                        "Icon": "UI_Talent_S_Furina_03"
                    },
                    {
                        "Level": 5,
                        "Name": "\"His Name I Now Know, It Is...!\"",
                        "Desc": "Increases the Level of <color style='color:#FFD780;'>Salon Solitaire</color> by 3.<br>Maximum upgrade level is 15.",
                        "Icon": "UI_Talent_U_Furina_01"
                    },
                    {
                        "Level": 6,
                        "Name": "\"Hear Me — Let Us Raise the Chalice of Love!\"",
                        "Desc": "When using <color style='color:#FFD780;'>Salon Solitaire</color>, Furina gains \"Center of Attention\" for 10s.<br>Throughout the duration, Furina's Normal Attacks, Charged Attacks, and Plunging Attacks are converted into <color style='color:#80C0FF;'>Hydro DMG</color> which cannot be overridden by any other elemental infusion. DMG is also increased by an amount equivalent to 18% of Furina's max HP.<br>Throughout the duration, Furina's Normal Attacks (not including Arkhe: Seats Sacred and Secular Attacks), Charged Attacks, and the impact of Plunging Attacks will cause different effects up to every 0.1s after hitting opponents depending on her current Arkhe alignment:<br><br>Arkhe: Ousia<br>Every 1s, all nearby characters in the party will be healed by 4% of Furina's max HP, for a duration of 2.9s. Triggering this effect again will extend its duration.<br>Arkhe: Pneuma<br>This Normal Attack (not including Arkhe: Seats Sacred and Secular Attacks), Charged Attack, or Plunging Attack ground impact DMG will be further increased by an amount equivalent to 25% of Furina's max HP. When any of the attacks mentioned previously hit an opponent, all nearby characters in the party will consume 1% of their current HP.<br><br>During the duration of each instance of \"Center of Attention,\" the above effects can be triggered up to 6 times. \"Center of Attention\" will end when its effects have triggered 6 times or when the duration expires.",
                        "Icon": "UI_Talent_S_Furina_02"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Furina": {
        "AttackList": [
            {
                "Skill": "Elem Skill Launch",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        5.0
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
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
                "StrikeType": "Default",
                "AttackType": "Melee"
            },
            {
                "Skill": "Gentilhomme Usher Laser",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "Octopus Group",
                "AttGrp": "Once per 2 hits",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 15.0,
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
                "AttackType": "Range"
            },
            {
                "Skill": "Surintendante Chevalmarin Bullet",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        0.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "Seahorse Group",
                "AttGrp": "Once per 2 hits",
                "Element": "Water",
                "GU": 1.0,
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
                "StrikeType": "Default",
                "AttackType": "Range"
            },
            {
                "Skill": "Mademoiselle Crabaletta Jump",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        3.5
                    ]
                },
                "AtkTag": "Elem Skill",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 30.0,
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
                "Skill": "Elem Burst",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        5.0
                    ]
                },
                "AtkTag": "Elem Burst",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 120.0,
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
                "AttackType": "Default"
            },
            {
                "Skill": "Normal ATK 1 (C6)",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        3.0,
                        1.5,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 50.5548,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.01,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Spear",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 2 (C6)",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.3,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 48.4344,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.01,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 3 (C6)",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.2,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 57.1707,
                "ForceType": 2,
                "Force": [
                    0.0,
                    450.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 4 (C6)",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        6.0,
                        5.0,
                        2.5
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 79.6608,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Charged ATK (C6)",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2.6
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Charged ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 120.0,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Surging Blade - Ousia",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.5,
                        1.2,
                        2.8
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
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
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Spiritbreath Thorn - Pneuma",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        4.5,
                        1.2,
                        2.8
                    ]
                },
                "AtkTag": "Normal ATK 5",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
                "GU": 0.0,
                "Poise": 20.0,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 1.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Plunging (C6)",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "Plunge ATK",
                "AttTag": "",
                "AttGrp": "Independent",
                "Element": "Water",
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
                "AttackType": "Melee"
            },
            {
                "Skill": "Low Plunge (C6)",
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
                "Element": "Water",
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
                "AttackType": "Melee"
            },
            {
                "Skill": "High Plunge (C6)",
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
                "Element": "Water",
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
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 1",
                "Shape": {
                    "Type": "Cuboid",
                    "Size": [
                        2.8,
                        1.5,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 1",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 50.5548,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.01,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Spear",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.7,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 2",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 48.4344,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.01,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Normal ATK 3",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.9,
                        1.5
                    ]
                },
                "AtkTag": "Normal ATK 3",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 57.1707,
                "ForceType": 2,
                "Force": [
                    0.0,
                    450.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
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
                        6.0,
                        5.0,
                        2.5
                    ]
                },
                "AtkTag": "Normal ATK 4",
                "AttTag": "Normal ATK",
                "AttGrp": "2.5s / 3 hits",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 79.6608,
                "ForceType": 3,
                "Force": [
                    480.0,
                    600.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "Charged ATK",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        2.6
                    ]
                },
                "AtkTag": "Charged ATK",
                "AttTag": "Charged ATK",
                "AttGrp": "2.5s / 3 hits",
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
                "HTime": 0.02,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Slash",
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
            }
        ]
    }
}