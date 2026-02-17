// Auto Generated

var _AvatarDataConfig_ = {
    "Kazuha": {
        "BallList": [],
        "EndureList": [],
        "WindZoneList": [
            {
                "Skill": "短E",
                "Target": "重量 < 100",
                "Duration": 0.8,
                "Radius": 6.0,
                "Inner": 0.5,
                "Strength": 4.0,
                "Attenuation": 2.0,
                "Reverse": true
            },
            {
                "Skill": "短E",
                "Target": "100 ≤ 重量 ≤ 150",
                "Duration": 0.8,
                "Radius": 6.0,
                "Inner": 0.5,
                "Strength": 10.0,
                "Attenuation": 3.0,
                "Reverse": true
            },
            {
                "Skill": "长E",
                "Target": "重量 < 100",
                "Duration": 0.8,
                "Radius": 10.0,
                "Inner": 1.2,
                "Strength": 10.0,
                "Attenuation": 3.0,
                "Reverse": true
            },
            {
                "Skill": "长E",
                "Target": "100 ≤ 重量 ≤ 150",
                "Duration": 0.8,
                "Radius": 10.0,
                "Inner": 1.0,
                "Strength": 20.0,
                "Attenuation": 4.0,
                "Reverse": true
            },
            {
                "Skill": "下落风穴",
                "Target": "所有",
                "Duration": 3.0,
                "Radius": 6.0,
                "Inner": 1.2,
                "Strength": 4.0,
                "Attenuation": 1.0,
                "Reverse": false
            }
        ],
        "OtherDataList": []
    }
}

var _AvatarMats_ = {
    "Kazuha": {
        "Promotion": [
            {},
            {
                "202": 20000,
                "104151": 1,
                "101206": 3,
                "112035": 3
            },
            {
                "202": 40000,
                "104152": 3,
                "113022": 2,
                "101206": 10,
                "112035": 15
            },
            {
                "202": 60000,
                "104152": 6,
                "113022": 4,
                "101206": 20,
                "112036": 12
            },
            {
                "202": 80000,
                "104153": 3,
                "113022": 8,
                "101206": 30,
                "112036": 18
            },
            {
                "202": 100000,
                "104153": 6,
                "113022": 12,
                "101206": 45,
                "112037": 12
            },
            {
                "202": 120000,
                "104154": 6,
                "113022": 20,
                "101206": 60,
                "112037": 24
            }
        ],
        "A": [
            {
                "202": 12500,
                "104313": 3,
                "112035": 6
            },
            {
                "202": 17500,
                "104314": 2,
                "112036": 3
            },
            {
                "202": 25000,
                "104314": 4,
                "112036": 4
            },
            {
                "202": 30000,
                "104314": 6,
                "112036": 6
            },
            {
                "202": 37500,
                "104314": 9,
                "112036": 9
            },
            {
                "202": 120000,
                "104315": 4,
                "112037": 4,
                "113019": 1
            },
            {
                "202": 260000,
                "104315": 6,
                "112037": 6,
                "113019": 1
            },
            {
                "202": 450000,
                "104315": 12,
                "112037": 9,
                "113019": 2
            },
            {
                "202": 700000,
                "104315": 16,
                "112037": 12,
                "113019": 2,
                "104319": 1
            }
        ],
        "E": [
            {
                "202": 12500,
                "104313": 3,
                "112035": 6
            },
            {
                "202": 17500,
                "104314": 2,
                "112036": 3
            },
            {
                "202": 25000,
                "104314": 4,
                "112036": 4
            },
            {
                "202": 30000,
                "104314": 6,
                "112036": 6
            },
            {
                "202": 37500,
                "104314": 9,
                "112036": 9
            },
            {
                "202": 120000,
                "104315": 4,
                "112037": 4,
                "113019": 1
            },
            {
                "202": 260000,
                "104315": 6,
                "112037": 6,
                "113019": 1
            },
            {
                "202": 450000,
                "104315": 12,
                "112037": 9,
                "113019": 2
            },
            {
                "202": 700000,
                "104315": 16,
                "112037": 12,
                "113019": 2,
                "104319": 1
            }
        ],
        "Q": [
            {
                "202": 12500,
                "104313": 3,
                "112035": 6
            },
            {
                "202": 17500,
                "104314": 2,
                "112036": 3
            },
            {
                "202": 25000,
                "104314": 4,
                "112036": 4
            },
            {
                "202": 30000,
                "104314": 6,
                "112036": 6
            },
            {
                "202": 37500,
                "104314": 9,
                "112036": 9
            },
            {
                "202": 120000,
                "104315": 4,
                "112037": 4,
                "113019": 1
            },
            {
                "202": 260000,
                "104315": 6,
                "112037": 6,
                "113019": 1
            },
            {
                "202": 450000,
                "104315": 12,
                "112037": 9,
                "113019": 2
            },
            {
                "202": 700000,
                "104315": 16,
                "112037": 12,
                "113019": 2,
                "104319": 1
            }
        ]
    }
}

var _AvatarSkillPConfig_ = {
    "Kazuha": {
        "Ver": {
            "L": {
                "BattleSkills": [
                    {
                        "Name": "我流剑术",
                        "Desc": "<color style='color:#FFD780;'>普通攻击</color><br>进行至多五段的连续剑击。<br><br><color style='color:#FFD780;'>重击</color><br>消耗一定体力，瞬间向前方挥出两剑。<br><br><color style='color:#FFD780;'>下落攻击</color><br>从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。若这次下落攻击经由千早振施放，则会转为施放下落攻击 · 乱岚拨止。<br><br><color style='color:#FFD780;'>下落攻击 · 乱岚拨止</color><br>通过元素战技 · 千早振施放的下落攻击，造成的伤害将转化为<color style='color:#80FFD7;'>风元素伤害</color>，并在落地时施展秘剑产生小型的风穴，牵引附近的物体与敌人。",
                        "Icon": "Skill_A_01",
                        "ParamDesc": [
                            {
                                "Desc": "一段伤害",
                                "ParamLevelList": [
                                    "44.978%",
                                    "48.639%",
                                    "52.3%",
                                    "57.53%",
                                    "61.191%",
                                    "65.375%",
                                    "71.128%",
                                    "76.881%",
                                    "82.634%",
                                    "88.91%",
                                    "96.1013%",
                                    "104.5582%",
                                    "113.0151%",
                                    "121.472%",
                                    "130.6977%"
                                ]
                            },
                            {
                                "Desc": "二段伤害",
                                "ParamLevelList": [
                                    "45.236%",
                                    "48.918%",
                                    "52.6%",
                                    "57.86%",
                                    "61.542%",
                                    "65.75%",
                                    "71.536%",
                                    "77.322%",
                                    "83.108%",
                                    "89.42%",
                                    "96.6525%",
                                    "105.1579%",
                                    "113.6633%",
                                    "122.1688%",
                                    "131.4474%"
                                ]
                            },
                            {
                                "Desc": "三段伤害",
                                "ParamLevelList": [
                                    "25.8%+30.96%",
                                    "27.9%+33.48%",
                                    "30.0%+36.0%",
                                    "33.0%+39.6%",
                                    "35.1%+42.12%",
                                    "37.5%+45.0%",
                                    "40.8%+48.96%",
                                    "44.1%+52.92%",
                                    "47.4%+56.88%",
                                    "51.0%+61.2%",
                                    "55.125%+66.15%",
                                    "59.976%+71.9712%",
                                    "64.827%+77.7924%",
                                    "69.678%+83.6136%",
                                    "74.97%+89.964%"
                                ]
                            },
                            {
                                "Desc": "四段伤害",
                                "ParamLevelList": [
                                    "60.716%",
                                    "65.658%",
                                    "70.6%",
                                    "77.66%",
                                    "82.602%",
                                    "88.25%",
                                    "96.016%",
                                    "103.782%",
                                    "111.548%",
                                    "120.02%",
                                    "129.7275%",
                                    "141.1435%",
                                    "152.5595%",
                                    "163.9756%",
                                    "176.4294%"
                                ]
                            },
                            {
                                "Desc": "五段伤害",
                                "ParamLevelList": [
                                    "25.37%×3",
                                    "27.435%×3",
                                    "29.5%×3",
                                    "32.45%×3",
                                    "34.515%×3",
                                    "36.875%×3",
                                    "40.12%×3",
                                    "43.365%×3",
                                    "46.61%×3",
                                    "50.15%×3",
                                    "54.2063%×3",
                                    "58.9764%×3",
                                    "63.7465%×3",
                                    "68.5167%×3",
                                    "73.7205%×3"
                                ]
                            },
                            {
                                "Desc": "重击伤害",
                                "ParamLevelList": [
                                    "43.0%+74.648%",
                                    "46.5%+80.724%",
                                    "50.0%+86.8%",
                                    "55.0%+95.48%",
                                    "58.5%+101.556%",
                                    "62.5%+108.5%",
                                    "68.0%+118.048%",
                                    "73.5%+127.596%",
                                    "79.0%+137.144%",
                                    "85.0%+147.56%",
                                    "91.875%+159.495%",
                                    "99.96%+173.5306%",
                                    "108.045%+187.5661%",
                                    "116.13%+201.6017%",
                                    "124.95%+216.9132%"
                                ]
                            },
                            {
                                "Desc": "重击体力消耗",
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
                                "Desc": "下坠期间伤害",
                                "ParamLevelList": [
                                    "81.8335%",
                                    "88.4943%",
                                    "95.1552%",
                                    "104.6707%",
                                    "111.3316%",
                                    "118.944%",
                                    "129.4111%",
                                    "139.8781%",
                                    "150.3452%",
                                    "161.7638%",
                                    "173.1825%",
                                    "184.6011%",
                                    "196.0197%",
                                    "207.4383%",
                                    "218.857%"
                                ]
                            },
                            {
                                "Desc": "低空/高空坠地冲击伤害",
                                "ParamLevelList": [
                                    "163.6323%/204.3855%",
                                    "176.9512%/221.0216%",
                                    "190.2701%/237.6576%",
                                    "209.2971%/261.4234%",
                                    "222.616%/278.0594%",
                                    "237.8376%/297.072%",
                                    "258.7673%/323.2143%",
                                    "279.697%/349.3567%",
                                    "300.6267%/375.499%",
                                    "323.4591%/404.0179%",
                                    "346.2915%/432.5368%",
                                    "369.124%/461.0557%",
                                    "391.9564%/489.5747%",
                                    "414.7888%/518.0936%",
                                    "437.6212%/546.6125%"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "千早振",
                        "Desc": "施展如同冲风般激昂的秘剑，将敌人与物体牵引至所在位置，击飞范围内的敌人，造成<color style='color:#80FFD7;'>风元素伤害</color>，并借由喷薄的气流如登泷般腾空而起。<br>枫原万叶因元素战技 · 千早振而升空后的10秒内并持续处于空中时，若进行下落攻击，则会施展格外强劲的下落攻击 · 乱岚拨止。<br><br><color style='color:#FFD780;'>点按</color><br>可以在空中施放。<br><br><color style='color:#FFD780;'>长按</color><br>积蓄力量后施展，相对于点按，在更大的范围内造成更高的<color style='color:#80FFD7;'>风元素伤害</color>。<br><br><color style='color:#FFD780;'>下落攻击 · 乱岚拨止</color><br>通过元素战技 · 千早振施放的下落攻击，造成的伤害将转化为<color style='color:#80FFD7;'>风元素伤害</color>，并在落地时施展秘剑产生小型的风穴，牵引附近的物体与敌人。<br>乱岚拨止造成的伤害视为下落攻击伤害。<br><br><i>「枫袖起悲风，神代万世人百年，秋山落唐红。」</i>",
                        "Icon": "Skill_S_Kazuha_01",
                        "ParamDesc": [
                            {
                                "Desc": "点按技能伤害",
                                "ParamLevelList": [
                                    "192.0%",
                                    "206.4%",
                                    "220.8%",
                                    "240.0%",
                                    "254.4%",
                                    "268.8%",
                                    "288.0%",
                                    "307.2%",
                                    "326.4%",
                                    "345.6%",
                                    "364.8%",
                                    "384.0%",
                                    "408.0%",
                                    "432.0%",
                                    "456.0%"
                                ]
                            },
                            {
                                "Desc": "点按冷却时间",
                                "ParamLevelList": [
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒",
                                    "6秒"
                                ]
                            },
                            {
                                "Desc": "长按技能伤害",
                                "ParamLevelList": [
                                    "260.8%",
                                    "280.36%",
                                    "299.92%",
                                    "326.0%",
                                    "345.56%",
                                    "365.12%",
                                    "391.2%",
                                    "417.28%",
                                    "443.36%",
                                    "469.44%",
                                    "495.52%",
                                    "521.6%",
                                    "554.2%",
                                    "586.8%",
                                    "619.4%"
                                ]
                            },
                            {
                                "Desc": "长按冷却时间",
                                "ParamLevelList": [
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒",
                                    "9秒"
                                ]
                            }
                        ]
                    },
                    {
                        "Name": "万叶之一刀",
                        "Desc": "施展我流的奥义，斩出初岚般的一刀，造成<color style='color:#80FFD7;'>风元素范围伤害</color>。<br>刀风会留下名为「流风秋野」的领域，对其中的敌人造成间歇的<color style='color:#80FFD7;'>风元素伤害</color>。<br><br><color style='color:#FFD780;'>元素转化</color><br>若流风秋野在持续期间接触了<color style='color:#80C0FF;'>水元素</color>/<color style='color:#FF9999;'>火元素</color>/<color style='color:#99FFFF;'>冰元素</color>/<color style='color:#FFACFF;'>雷元素</color>，则会获得对应元素属性，额外造成该元素附加伤害。<br>这种转化在技能持续期间仅会发生一次。<br><br><i>「须臾照见万世长，一叶便知天下秋。我欲凭切枫一闪，做万世之问叩——」</i>",
                        "Icon": "Skill_E_Kazuha_01",
                        "ParamDesc": [
                            {
                                "Desc": "斩击伤害",
                                "ParamLevelList": [
                                    "262.4%",
                                    "282.08%",
                                    "301.76%",
                                    "328.0%",
                                    "347.68%",
                                    "367.36%",
                                    "393.6%",
                                    "419.84%",
                                    "446.08%",
                                    "472.32%",
                                    "498.56%",
                                    "524.8%",
                                    "557.6%",
                                    "590.4%",
                                    "623.2%"
                                ]
                            },
                            {
                                "Desc": "持续伤害",
                                "ParamLevelList": [
                                    "120.0%",
                                    "129.0%",
                                    "138.0%",
                                    "150.0%",
                                    "159.0%",
                                    "168.0%",
                                    "180.0%",
                                    "192.0%",
                                    "204.0%",
                                    "216.0%",
                                    "228.0%",
                                    "240.0%",
                                    "255.0%",
                                    "270.0%",
                                    "285.0%"
                                ]
                            },
                            {
                                "Desc": "附加元素伤害",
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
                                "Desc": "持续时间",
                                "ParamLevelList": [
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒",
                                    "8秒"
                                ]
                            },
                            {
                                "Desc": "冷却时间",
                                "ParamLevelList": [
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒",
                                    "15秒"
                                ]
                            },
                            {
                                "Desc": "元素能量",
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
                        "Name": "相闻之剑法",
                        "Desc": "<color style='color:#FFD780;'>千早振</color>在施放时，如果接触了<color style='color:#80C0FF;'>水元素</color>/<color style='color:#FF9999;'>火元素</color>/<color style='color:#99FFFF;'>冰元素</color>/<color style='color:#FFACFF;'>雷元素</color>，则会使这次<color style='color:#FFD780;'>千早振</color>的下落攻击 · 乱岚拨止，发生元素转化，将附加200%攻击力的对应元素伤害，该伤害视为下落攻击伤害。每次<color style='color:#FFD780;'>千早振</color>的技能效果中，元素转化仅会发生一次。",
                        "Icon": "UI_Talent_S_Kazuha_05"
                    },
                    {
                        "Name": "风物之诗咏",
                        "Desc": "枫原万叶触发扩散反应后，枫原万叶的每点元素精通，会为队伍中所有角色提供0.04%对应元素伤害加成，持续8秒。通过这种方式获得的不同元素伤害加成可以共存。",
                        "Icon": "UI_Talent_S_Kazuha_06"
                    },
                    {
                        "Name": "松风霞立",
                        "Desc": "队伍中自己的角色冲刺消耗的体力降低20%。<br>无法与效果完全相同的固有天赋叠加。",
                        "Icon": "UI_Talent_Explosion_Sprint"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "千山红遍",
                        "Desc": "<color style='color:#FFD780;'>千早振</color>的冷却时间减少10%。<br>施放<color style='color:#FFD780;'>万叶之一刀</color>时，重置<color style='color:#FFD780;'>千早振</color>的冷却时间。",
                        "Icon": "UI_Talent_S_Kazuha_01"
                    },
                    {
                        "Level": 2,
                        "Name": "山岚残芯",
                        "Desc": "<color style='color:#FFD780;'>万叶之一刀</color>的流风秋野具有以下效果：<br> · 持续期间内，枫原万叶自己的元素精通提升200点；<br> · 其中的场上角色的元素精通提升200点。<br><br>该命之座提供的元素精通提升效果无法叠加。",
                        "Icon": "UI_Talent_S_Kazuha_02"
                    },
                    {
                        "Level": 3,
                        "Name": "枫袖奇谭",
                        "Desc": "<color style='color:#FFD780;'>千早振</color>的技能等级提高3级。<br>至多提升至15级。",
                        "Icon": "UI_Talent_U_Kazuha_01"
                    },
                    {
                        "Level": 4,
                        "Name": "大空幻法",
                        "Desc": "当枫原万叶的元素能量低于45点时，具有如下效果：<br> · 点按、长按施放<color style='color:#FFD780;'>千早振</color>时，将分别为枫原万叶恢复3、4点元素能量；<br> · 处于滑翔状态下时，每秒为枫原万叶恢复2点元素能量。",
                        "Icon": "UI_Talent_S_Kazuha_03"
                    },
                    {
                        "Level": 5,
                        "Name": "万世之集",
                        "Desc": "<color style='color:#FFD780;'>万叶之一刀</color>的技能等级提高3级。<br>至多提升至15级。",
                        "Icon": "UI_Talent_U_Kazuha_02"
                    },
                    {
                        "Level": 6,
                        "Name": "血赤叶红",
                        "Desc": "枫原万叶施放<color style='color:#FFD780;'>千早振</color>或<color style='color:#FFD780;'>万叶之一刀</color>后的5秒内，获得<color style='color:#80FFD7;'>风元素附魔</color>，并且枫原万叶的每点元素精通，都会使他的普通攻击、重击、下落攻击造成的伤害提高0.2%。",
                        "Icon": "UI_Talent_S_Kazuha_04"
                    }
                ]
            }
        }
    }
}

var _AvatarAttackConfig_ = {
    "Kazuha": {
        "AttackList": [
            {
                "Skill": "元素战技",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        5.0,
                        4.0
                    ]
                },
                "AtkTag": "元素战技",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 150.0,
                "ForceType": 3,
                "Force": [
                    100.0,
                    800.0
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
                "Skill": "元素战技",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        5.0,
                        4.0
                    ]
                },
                "AtkTag": "元素战技",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 150.0,
                "ForceType": 3,
                "Force": [
                    100.0,
                    800.0
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
                "Skill": "",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        5.0,
                        4.0
                    ]
                },
                "AtkTag": "",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 0.04,
                "Poise": 0.0,
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
                "AttackType": "Default"
            },
            {
                "Skill": "元素战技",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        9.0,
                        4.0
                    ]
                },
                "AtkTag": "元素战技",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Wind",
                "GU": 2.0,
                "Poise": 300.0,
                "ForceType": 3,
                "Force": [
                    0.0,
                    800.0
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
                "Skill": "",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        9.0,
                        4.0
                    ]
                },
                "AtkTag": "",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 0.04,
                "Poise": 0.0,
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
                "AttackType": "Default"
            },
            {
                "Skill": "元素爆发",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        9.0,
                        4.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Wind",
                "GU": 2.0,
                "Poise": 250.0,
                "ForceType": 3,
                "Force": [
                    250.0,
                    600.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.05,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": false,
                "StrikeType": "Slash",
                "AttackType": "Range"
            },
            {
                "Skill": "",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        9.0,
                        4.0
                    ]
                },
                "AtkTag": "",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 0.04,
                "Poise": 0.0,
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
                "AttackType": "Default"
            },
            {
                "Skill": "元素爆发",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        9.0,
                        4.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 75.0,
                "ForceType": 1,
                "Force": [
                    0.0,
                    100.0
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
                "Skill": "元素爆发",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        9.0,
                        4.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 25.0,
                "ForceType": 1,
                "Force": [
                    0.0,
                    100.0
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
                "Skill": "元素爆发",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        9.0,
                        4.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 25.0,
                "ForceType": 1,
                "Force": [
                    0.0,
                    100.0
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
                "Skill": "元素爆发",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        9.0,
                        4.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 25.0,
                "ForceType": 1,
                "Force": [
                    0.0,
                    100.0
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
                "Skill": "元素爆发",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        9.0,
                        4.0
                    ]
                },
                "AtkTag": "元素爆发",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 25.0,
                "ForceType": 1,
                "Force": [
                    0.0,
                    100.0
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
                "Skill": "",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        8.0,
                        4.0
                    ]
                },
                "AtkTag": "",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 0.04,
                "Poise": 0.0,
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
                "AttackType": "Default"
            },
            {
                "Skill": "",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.0,
                        4.0
                    ]
                },
                "AtkTag": "",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Phys",
                "GU": 0.0,
                "Poise": 0.0,
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
                "AttackType": "Default"
            },
            {
                "Skill": "普通攻击1",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.5,
                        1.5
                    ]
                },
                "AtkTag": "普通攻击1",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 47.7,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.03,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击2",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.5,
                        1.5
                    ]
                },
                "AtkTag": "普通攻击2",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 47.34,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.03,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击3",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.5,
                        1.5
                    ]
                },
                "AtkTag": "普通攻击3",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 29.7,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.01,
                "HScale": 0.0,
                "BeHalt": false,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击3",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.5,
                        1.5
                    ]
                },
                "AtkTag": "普通攻击3",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 29.7,
                "ForceType": 2,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.05,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击4",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        1.5,
                        2.0
                    ]
                },
                "AtkTag": "普通攻击4",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 63.54,
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
                "Skill": "普通攻击5",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.2,
                        2.2
                    ]
                },
                "AtkTag": "普通攻击5",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 26.55,
                "ForceType": 1,
                "Force": [
                    200.0,
                    0.0
                ],
                "Blunt": false,
                "Arkhe": 0.0,
                "HTime": 0.0,
                "HScale": 0.0,
                "BeHalt": true,
                "CanInfuse": true,
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "普通攻击5",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.2,
                        2.2
                    ]
                },
                "AtkTag": "普通攻击5",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 26.55,
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
                "Skill": "普通攻击5",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.2,
                        2.2
                    ]
                },
                "AtkTag": "普通攻击5",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 26.55,
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
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "重击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.2,
                        1.5
                    ]
                },
                "AtkTag": "重击",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 60.0,
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
                "Skill": "重击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        2.2,
                        1.5
                    ]
                },
                "AtkTag": "重击",
                "AttTag": "普攻组",
                "AttGrp": "2.5s / 3次",
                "Element": "Phys",
                "GU": 1.0,
                "Poise": 60.0,
                "ForceType": 3,
                "Force": [
                    655.0,
                    800.0
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
                "Skill": "下坠期间",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Wind",
                "GU": 0.0,
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
                "StrikeType": "Slash",
                "AttackType": "Melee"
            },
            {
                "Skill": "低空下坠",
                "Shape": {
                    "Type": "Sphere",
                    "Size": [
                        1.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
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
                "Skill": "高空下坠",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.5,
                        4.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 100.0,
                "ForceType": 3,
                "Force": [
                    0.0,
                    500.0
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
                "Skill": "下落攻击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.5,
                        4.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Wind",
                "GU": 1.0,
                "Poise": 150.0,
                "ForceType": 3,
                "Force": [
                    0.0,
                    500.0
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
                "Skill": "下落攻击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        3.0,
                        2.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
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
                "Skill": "下落攻击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        5.0,
                        2.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
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
                "Skill": "下落攻击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.5,
                        4.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Fire",
                "GU": 1.0,
                "Poise": 20.0,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "下落攻击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.5,
                        4.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Water",
                "GU": 1.0,
                "Poise": 20.0,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "下落攻击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.5,
                        4.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Elec",
                "GU": 1.0,
                "Poise": 20.0,
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
                "AttackType": "Melee"
            },
            {
                "Skill": "下落攻击",
                "Shape": {
                    "Type": "Cylinder",
                    "Size": [
                        4.5,
                        4.0
                    ]
                },
                "AtkTag": "下落攻击",
                "AttTag": "",
                "AttGrp": "独立",
                "Element": "Ice",
                "GU": 1.0,
                "Poise": 20.0,
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
                "AttackType": "Melee"
            }
        ]
    }
}