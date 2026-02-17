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
                        "Name": "독무자의 초대",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>최대 4번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>일정 스태미나를 소모해 독무의 아우라를 발동해 근처에 있는 적에게 물리 피해를 주고 자신의 아르케의 힘 속성을 전환한다. 만약 필드에 원소전투 스킬 「고고한 살롱」으로 소환한 「살롱 멤버」 또는 「물들의 가수」가 존재하면, 「살롱 멤버」 또는 「물들의 가수」도 상응하는 라인업으로 전환된다.<br><br><color style='color:#FFD780;'>아르케의 힘: 성과 속</color><br>일정 시간마다 푸리나의 일반 공격이 명중 시, 현재 푸리나의 아르케의 힘 속성에 따라 명중한 위치에 솟구치는 칼날 또는 영혼의 쐐기를 내려 프뉴마 또는 우시아 성질의 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br>푸리나 등장 시, 아르케의 힘 속성은 우시아 성질을 띤다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다",
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "1단 공격 피해",
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
                                "Desc": "2단 공격 피해",
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
                                "Desc": "3단 공격 피해",
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
                                "Desc": "4단 공격 피해",
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
                                "Desc": "강공격 피해",
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
                                "Desc": "강공격 스태미나 소모",
                                "ParamLevelList": [
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt",
                                    "20pt"
                                ]
                            },
                            {
                                "Desc": "낙하 기간 피해",
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
                                "Desc": "저공/고공 추락 충격 피해",
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
                                "Desc": "영혼의 쐐기/솟구치는 칼날 피해",
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
                                "Desc": "영혼의 쐐기/솟구치는 칼날 피해 간격",
                                "ParamLevelList": [
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초",
                                    "6초/6초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "고고한 살롱",
                        "Desc": "고고한 살롱의 손님을 무대 위로 초대해 푸리나의 공연을 응원한다. 푸리나의 현재 <color style='color:#FFD780;'>아르케의 힘 속성</color>에 따라 각각 「살롱 멤버」와 「물들의 가수」를 손님으로 초대한다.<br><br><color style='color:#FFD780;'>우시아</color><br>축제의 거품을 뿌려 푸리나 HP 최대치에 기반한 <color style='color:#80C0FF;'>물 원소 범위 피해</color>를 주고 3명의 「살롱 멤버」인 풍선 문어 형태의 「어셔 훈작」, 방울 해마 형태의 「슈벨마 부인」, 중갑 게 형태의 「사발레타 씨」를 소환한다.<br>「살롱 멤버」는 간헐적으로 주변에 있는 적을 공격한다. 현재 필드 위 캐릭터의 목표를 우선적으로 공격하며, HP 최대치에 기반해 <color style='color:#80C0FF;'>물 원소 피해</color>를 준다.<br>「살롱 멤버」가 공격 시, 파티 내 HP가 50%를 초과한 캐릭터가 주변에 있는 경우, 캐릭터의 수량에 따라 이번 공격의 위력이 증가하고 해당 캐릭터들의 HP를 소모한다: 조건을 충족한 캐릭터의 수가 1/2/3/4명 또는 그 이상일 경우, 공격이 주는 피해는 각각 기존의 110%/120%/130%/140%가 된다.<br><br><color style='color:#FFD780;'>프뉴마</color><br>「물들의 가수」를 소환해 일정 시간마다 주변에 있는 현재 필드 위 캐릭터의 HP를 회복시킨다. 치유량은 HP 최대치에 영향을 받는다.<br><br>「살롱 멤버」와 「물들의 가수」는 지속 시간을 공유한다. 푸리나가 강공격을 통해 손님의 라인업을 전환할 경우 지속 시간이 계승된다.<br>「살롱 멤버」 또는 「물들의 가수」가 존재하는 동안 푸리나는 물 위에서 이동할 수 있다.<br><br><i>푸리나의 고고한 살롱에는 늘 고정 멤버가 방문한다. 평소에는 사발레타 씨와 슈벨마 부인 그리고 어셔 훈작이 방문하고, 우울한 수요일에는 가수가 방문한다</i>",
                        "Icon": "Skill_S_Furina_01",
                        "ParamDesc": [
                            {
                                "Desc": "우시아 성질 거품 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 7.864%",
                                    "HP 최대치의 8.4538%",
                                    "HP 최대치의 9.0436%",
                                    "HP 최대치의 9.83%",
                                    "HP 최대치의 10.4198%",
                                    "HP 최대치의 11.0096%",
                                    "HP 최대치의 11.796%",
                                    "HP 최대치의 12.5824%",
                                    "HP 최대치의 13.3688%",
                                    "HP 최대치의 14.1552%",
                                    "HP 최대치의 14.9416%",
                                    "HP 최대치의 15.728%",
                                    "HP 최대치의 16.711%",
                                    "HP 최대치의 17.694%",
                                    "HP 최대치의 18.677%"
                                ]
                            },
                            {
                                "Desc": "지속 시간",
                                "ParamLevelList": [
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초",
                                    "30초"
                                ]
                            },
                            {
                                "Desc": "어셔 훈작 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 5.96%",
                                    "HP 최대치의 6.407%",
                                    "HP 최대치의 6.854%",
                                    "HP 최대치의 7.45%",
                                    "HP 최대치의 7.897%",
                                    "HP 최대치의 8.344%",
                                    "HP 최대치의 8.94%",
                                    "HP 최대치의 9.536%",
                                    "HP 최대치의 10.132%",
                                    "HP 최대치의 10.728%",
                                    "HP 최대치의 11.324%",
                                    "HP 최대치의 11.92%",
                                    "HP 최대치의 12.665%",
                                    "HP 최대치의 13.41%",
                                    "HP 최대치의 14.155%"
                                ]
                            },
                            {
                                "Desc": "슈벨마 부인 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 3.232%",
                                    "HP 최대치의 3.4744%",
                                    "HP 최대치의 3.7168%",
                                    "HP 최대치의 4.04%",
                                    "HP 최대치의 4.2824%",
                                    "HP 최대치의 4.5248%",
                                    "HP 최대치의 4.848%",
                                    "HP 최대치의 5.1712%",
                                    "HP 최대치의 5.4944%",
                                    "HP 최대치의 5.8176%",
                                    "HP 최대치의 6.1408%",
                                    "HP 최대치의 6.464%",
                                    "HP 최대치의 6.868%",
                                    "HP 최대치의 7.272%",
                                    "HP 최대치의 7.676%"
                                ]
                            },
                            {
                                "Desc": "사발레타 씨 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 8.288%",
                                    "HP 최대치의 8.9096%",
                                    "HP 최대치의 9.5312%",
                                    "HP 최대치의 10.36%",
                                    "HP 최대치의 10.9816%",
                                    "HP 최대치의 11.6032%",
                                    "HP 최대치의 12.432%",
                                    "HP 최대치의 13.2608%",
                                    "HP 최대치의 14.0896%",
                                    "HP 최대치의 14.9184%",
                                    "HP 최대치의 15.7472%",
                                    "HP 최대치의 16.576%",
                                    "HP 최대치의 17.612%",
                                    "HP 최대치의 18.648%",
                                    "HP 최대치의 19.684%"
                                ]
                            },
                            {
                                "Desc": "어셔 훈작 HP 소모",
                                "ParamLevelList": [
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%",
                                    "HP 최대치의 2.4%"
                                ]
                            },
                            {
                                "Desc": "슈벨마 부인 HP 소모",
                                "ParamLevelList": [
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%",
                                    "HP 최대치의 1.6%"
                                ]
                            },
                            {
                                "Desc": "사발레타 씨 HP 소모",
                                "ParamLevelList": [
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%",
                                    "HP 최대치의 3.6%"
                                ]
                            },
                            {
                                "Desc": "물들의 가수 치유량",
                                "ParamLevelList": [
                                    "HP 최대치의 4.8%+462.2253",
                                    "HP 최대치의 5.16%+508.45425",
                                    "HP 최대치의 5.52%+558.53564",
                                    "HP 최대치의 6.0%+612.4694",
                                    "HP 최대치의 6.36%+670.2556",
                                    "HP 최대치의 6.72%+731.8942",
                                    "HP 최대치의 7.2%+797.3852",
                                    "HP 최대치의 7.68%+866.72864",
                                    "HP 최대치의 8.16%+939.9245",
                                    "HP 최대치의 8.64%+1016.9728",
                                    "HP 최대치의 9.12%+1097.8734",
                                    "HP 최대치의 9.6%+1182.6265",
                                    "HP 최대치의 10.2%+1271.232",
                                    "HP 최대치의 10.8%+1363.69",
                                    "HP 최대치의 11.4%+1460.0"
                                ]
                            },
                            {
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초",
                                    "20초"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "성대한 카니발",
                        "Desc": "축제의 기운을 모아 물거품 무대를 구축해, 푸리나 HP 최대치에 기반한 <color style='color:#80C0FF;'>물 원소 범위 피해</color>를 준다. 또한 주변에 있는 파티 내 캐릭터가 「열광의 도가니」 상태에 진입한다: 지속 시간 동안 캐릭터의 현재 HP가 증가 또는 감소 시, 증가 또는 감소량이 HP 최대치에서 차지하는 비율을 기반으로 푸리나가 1%당 1pt의 「무대 열기」를 획득한다.<br>동시에 푸리나가 보유한 「무대 열기」에 기반해 주변에 있는 파티 내 모든 캐릭터의 주는 피해가 증가하고 받는 치유 보너스가 증가한다.<br>지속 시간 종료 시 푸리나가 보유한 「무대 열기」는 사라진다.<br><br><i>「갈채하라! 찬미하라! 괄목하라! 잔을 들어 올려라! 연회가 없는 밤은, 고통과 깨어 있는 낮에 대한 낭비일지니… 뭐? 성인이 아니라면 포도 주스를 마셔!」</i>",
                        "Icon": "Skill_E_Furina_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
                                "ParamLevelList": [
                                    "HP 최대치의 11.4064%",
                                    "HP 최대치의 12.2619%",
                                    "HP 최대치의 13.1174%",
                                    "HP 최대치의 14.258%",
                                    "HP 최대치의 15.1135%",
                                    "HP 최대치의 15.969%",
                                    "HP 최대치의 17.1096%",
                                    "HP 최대치의 18.2502%",
                                    "HP 최대치의 19.3909%",
                                    "HP 최대치의 20.5315%",
                                    "HP 최대치의 21.6722%",
                                    "HP 최대치의 22.8128%",
                                    "HP 최대치의 24.2386%",
                                    "HP 최대치의 25.6644%",
                                    "HP 최대치의 27.0902%"
                                ]
                            },
                            {
                                "Desc": "지속 시간",
                                "ParamLevelList": [
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초",
                                    "18초"
                                ]
                            },
                            {
                                "Desc": "무대 열기 최대치",
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
                                "Desc": "무대 열기의 피해 증가 전환 비율",
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
                                "Desc": "무대 열기의 받는 치유 보너스 전환 비율",
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
                                "Desc": "재사용 대기시간",
                                "ParamLevelList": [
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초",
                                    "15초"
                                ]
                            },
                            {
                                "Desc": "원소 에너지",
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
                        "Name": "끝없는 왈츠",
                        "Desc": "현재 필드 위에 있는 파티 내 캐릭터가 치유를 받을 시, 이 치유가 푸리나 자신이 한 치유가 아닌 동시에 회복량이 초과된 경우, 이어지는 4초 동안 푸리나가 2초마다 주변에 있는 파티 내 캐릭터의 HP를 1회 회복시킨다. 회복량은 캐릭터 각자 HP 최대치의 2%에 해당한다",
                        "Icon": "UI_Talent_S_Furina_05"
                    },
                    {
                        "Name": "고독한 독백",
                        "Desc": "HP 최대치의 1000pt마다, 아르케의 힘 속성에 따른 푸리나의 <color style='color:#FFD780;'>고고한 살롱</color>이 상응하는 버프 효과를 획득한다:<br>「살롱 멤버」가 주는 피해가 0.7% 증가한다. 해당 방식으로 「살롱 멤버」가 주는 피해가 최대 28% 증가한다.<br>「물들의 가수」가 근처에 있는 현재 필드 위 캐릭터의 HP를 회복시키는 간격이 0.4% 감소한다. 해당 방식으로 「물들의 가수」가 주변에 있는 현재 필드 위 캐릭터의 HP를 회복시키는 간격이 최대 16% 감소한다",
                        "Icon": "UI_Talent_S_Furina_06"
                    },
                    {
                        "Name": "바다가 곧 무대",
                        "Desc": "이색 원류바다 이종의 능력 재사용 대기시간이 30% 감소한다",
                        "Icon": "UI_Talent_S_Furina_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「사랑은 애걸해도 길들일 수 없는 새」",
                        "Desc": "<color style='color:#FFD780;'>성대한 카니발</color> 발동 시, 푸리나가 「무대 열기」를 150pt 획득한다.<br>또한, 푸리나의 「무대 열기」 보유 최대치가 100pt 증가한다",
                        "Icon": "UI_Talent_S_Furina_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「여자의 마음은 흔들리는 부평초」",
                        "Desc": "<color style='color:#FFD780;'>성대한 카니발</color> 지속 시간 동안, 푸리나가 주변에 있는 파티 내 캐릭터의 현재 HP 증가 또는 감소하는 방식을 통해 획득하는 「무대 열기」가 250% 증가한다. 최대치를 초과하는 「무대 열기」 1pt당 푸리나의 HP 최대치가 0.35% 증가한다. 해당 방식으로 푸리나의 HP 최대치는 최대 140%까지 증가한다",
                        "Icon": "UI_Talent_S_Furina_04"
                    },
                    {
                        "Level": 3,
                        "Name": "「내 이름은 그 누구도 모르리라」",
                        "Desc": "<color style='color:#FFD780;'>성대한 카니발</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Furina_02"
                    },
                    {
                        "Level": 4,
                        "Name": "「저승에서 느낀 삶의 소중함!」",
                        "Desc": "<color style='color:#FFD780;'>고고한 살롱</color>의 「살롱 멤버」가 적을 명중시키거나 「물들의 가수」가 현재 필드 주변에 있는 캐릭터의 HP를 회복시킬 경우, 푸리나가 원소 에너지를 4pt 획득한다. 해당 효과는 5초마다 최대 1회 발동된다",
                        "Icon": "UI_Talent_S_Furina_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「난 알았노라, 그대의 이름은…!」",
                        "Desc": "<color style='color:#FFD780;'>고고한 살롱</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Furina_01"
                    },
                    {
                        "Level": 6,
                        "Name": "「모두 사랑의 축배를 들렴!」",
                        "Desc": "<color style='color:#FFD780;'>고고한 살롱</color> 발동 시, 푸리나가 「만인의 주목」을 획득한다. 지속 시간: 10초<br>지속 시간 동안 푸리나의 일반 공격, 강공격, 낙하 공격이 다른 원소 부여 효과로 대체될 수 없는 <color style='color:#80C0FF;'>물 원소 피해</color>로 전환되고 주는 피해가 푸리나 HP 최대치의 18%만큼 증가한다.<br>지속 시간 동안 0.1초마다, 푸리나의 일반 공격(「아르케의 힘: 성과 속」의 공격 제외), 강공격과 낙하 공격의 추락 충격이 적에게 명중 후, 푸리나의 현재 아르케의 힘 속성에 따라 다른 효과가 생성된다:<br><br>아르케의 힘: 우시아<br>1초마다 주변에 있는 파티 내 모든 캐릭터의 HP를 푸리나 HP 최대치의 4%만큼 회복한다. 지속 시간: 2.9초. 중복 발동 시 지속 시간이 연장된다.<br>아르케의 힘: 프뉴마<br>이번 일반 공격(「아르케의 힘: 성과 속」의 공격 제외), 강공격과 낙하 공격의 추락 충격으로 주는 피해가 푸리나 HP 최대치의 25%만큼 증가한다. 상술한 공격이 적에게 명중 시, 주변에 있는 파티 내 모든 캐릭터의 HP를 현재 HP의 1%만큼 소모한다.<br><br>한 번의 「만인의 주목」 지속 시간 동안 상술한 효과는 최대 6회 발동되고, 발동 횟수가 6회에 도달하거나 지속 시간이 종료되면 효과가 사라진다",
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