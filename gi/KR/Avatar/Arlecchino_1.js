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
                        "Name": "사형장으로의 초대",
                        "Desc": "<color style='color:#FFD780;'>일반 공격</color><br>창으로 최대 6번 공격한다.<br><br><color style='color:#FFD780;'>강공격</color><br>일정 스태미나를 소모해 적에게 돌진하여 베기 공격을 한다.<br>홀드 유지 시, 아를레키노의 스태미나 소모를 대가로 최대 5초 동안 빠르게 이동한다.<br><br><color style='color:#FFD780;'>낙하 공격</color><br>공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다.<br><br><color style='color:#FFD780;'>붉은 죽음의 무도회</color><br>아를레키노가 보유한 생명의 계약이 HP 최대치의 30% 이상일 시, 아를레키노가 붉은 죽음의 무도회 상태에 진입한다: 일반 공격, 강공격, 낙하 공격이 주는 피해가 다른 원소 부여 효과로 대체할 수 없는 <color style='color:#FF9999;'>불 원소 피해</color>로 전환된다.<br>붉은 죽음의 무도회 상태에서 아를레키노의 일반 공격이 적에게 명중 시, 이번 공격으로 주는 피해가 증가한다. 증가치는 아를레키노의 공격력에 현재 생명의 계약의 백분율을 일정 비율로 곱한 값에 해당하고, 현재 생명의 계약의 7.5%를 소모한다. 0.03초마다 해당 방식으로 생명의 계약을 최대 1회 소모한다. 해당 방식으로 생명의 계약을 소모할 시, 원소전투 스킬 「재가 된 만상」의 재사용 대기시간이 0.8초 감소한다",
                        "Icon": "Skill_A_03",
                        "ParamDesc": [
                            {
                                "Desc": "붉은 죽음의 무도회 증가량",
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
                                "Desc": "1단 공격 피해",
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
                                "Desc": "2단 공격 피해",
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
                                "Desc": "3단 공격 피해",
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
                                "Desc": "4단 공격 피해",
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
                                "Desc": "5단 공격 피해",
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
                                "Desc": "6단 공격 피해",
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
                                "Desc": "강공격 피해",
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
                                "Desc": "강공격 스태미나 소모",
                                "ParamLevelList": [
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt",
                                    "25pt"
                                ]
                            },
                            {
                                "Desc": "빠른 이동 스태미나 소모",
                                "ParamLevelList": [
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt",
                                    "초당 40pt"
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
                            }
                        ]
                    },
                    {
                        "Name": "재가 된 만상",
                        "Desc": "달의 핏빛화염으로 주변의 적들에게 <color style='color:#FF9999;'>불 원소 피해</color>를 주고, 그중 1기의 적에게 돌진 베기로 <color style='color:#FF9999;'>불 원소 범위 피해</color>를 준다.<br>상술한 공격이 적에게 명중 시, 그 대상에게 핏값을 부여한다.<br><br><color style='color:#FFD780;'>핏값</color><br> · 핏값은 5초마다 적에게 1회의 <color style='color:#FF9999;'>불 원소 피해</color>를 주고, 최대 2회의 피해를 준다. 해당 피해는 원소전투 스킬 피해로 간주한다. 핏값 지속 시간: 30초.<br> · 아를레키노가 강공격 또는 원소폭발 「떠오르는 재액의 달」 발동 시, 주변에 있는 핏값을 회수 및 제거한다. 회수한 핏값 1개당 아를레키노에게 HP 최대치의 65%에 해당하는 생명의 계약을 부여한다.<br> · 원소전투 스킬 발동 후 35초 동안, 핏값으로 아를레키노에게 최대 HP 최대치의 145%에 해당하는 생명의 계약을 부여할 수 있다. 지속 시간 동안 다시 원소전투 스킬을 발동하면, 지속 시간과 핏값으로 부여할 수 있는 생명의 계약 최대치가 처음부터 다시 계산된다.<br><br><i>그녀는 대지에 떨어진 고독한 밀알이 모두 다 이삭으로 자라나는 것이 아니라, 조용히 썩어 버릴 수도 있다고 생각한다. 그녀는 자신을 방해하는 모든 것이 재가 되면, 그 재를 꽃의 양분으로 사용할 것이다</i>",
                        "Icon": "Skill_S_Arlecchino_01",
                        "ParamDesc": [
                            {
                                "Desc": "가시 피해",
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
                                "Desc": "베기 피해",
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
                                "Desc": "핏값 피해",
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
                                "Desc": "재사용 대기시간",
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
                            }
                        ]
                    },
                    {
                        "Name": "떠오르는 재액의 달",
                        "Desc": "아를레키노가 달의 핏빛화염 날개를 흔들어 주변의 핏값을 회수하고 제거해 <color style='color:#FF9999;'>불 원소 범위 피해</color>를 준 다음, 원소전투 스킬 「재가 된 만상」의 재사용 대기시간을 초기화하고 자신의 HP를 회복한다. 회복량은 아를레키노의 생명의 계약과 공격력에 기반한다.<br><br><i>티바트 상식에 따르면, 연금술과 점성술 한정으로 만월을 제외한 달의 위상은 액운의 은유이다.<br>그녀는 꿈속에서 여러 번 이 붉은 달을 보았는데, 과연 이는 액운의 징조였을까? 그렇다. 하지만 그 비참한 운명은 그녀를 화나게 한 사람의 몫이었다</i>",
                        "Icon": "Skill_E_Arlecchino_01",
                        "ParamDesc": [
                            {
                                "Desc": "스킬 피해",
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
                                "Desc": "회복량",
                                "ParamLevelList": [
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%",
                                    "생명의 계약의 150.0%+공격력의 150.0%"
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
                        "Name": "고통만이 갚을 수 있고",
                        "Desc": "<color style='color:#FFD780;'>핏값</color>의 성질:<br> · 아를레키노 자신이 부여한 핏값을 지닌 적 처치 시, 아를레키노에게 HP 최대치의 130%에 해당하는 생명의 계약을 부여한다.<br> · 부여 후 5초가 지나면 핏값 · 결산으로 승급한다. 핏값 · 결산 회수 시 아를레키노에게 130%의 생명의 계약을 부여한다.<br>상술한 방식으로 생명의 계약 부여 시, 부여되는 생명의 계약의 상한은 기존 <color style='color:#FFD780;'>재가 된 만상</color>의 상한을 초과할 수 없다",
                        "Icon": "UI_Talent_S_Arlecchino_05"
                    },
                    {
                        "Name": "힘만이 지킬 수 있으며",
                        "Desc": "1000pt를 초과하는 아를레키노의 공격력을 기반으로, 공격력 100pt마다 아를레키노에게 모든 원소 내성과 물리 내성을 1% 부여한다. 해당 방식으로 아를레키노의 모든 원소 내성과 물리 내성은 최대 20% 증가한다",
                        "Icon": "UI_Talent_S_Arlecchino_06"
                    },
                    {
                        "Name": "재액의 달만이 알 수 있다",
                        "Desc": "전투 상태에서 아를레키노는 <color style='color:#FF9999;'>불 원소 피해 보너스</color>를 40% 획득하고, <color style='color:#FFD780;'>떠오르는 재액의 달</color>로만 HP를 회복할 수 있다",
                        "Icon": "UI_Talent_S_Arlecchino_07"
                    }
                ],
                "Constellations": [
                    {
                        "Level": 1,
                        "Name": "「모든 원한과 빚은 내가 갚고…」",
                        "Desc": "붉은 죽음의 무도회의 증가량이 100% 더 증가한다. 또한 붉은 죽음의 무도회 상태에서 일반 공격 또는 강공격 시, 아를레키노의 경직 저항력이 증가한다",
                        "Icon": "UI_Talent_S_Arlecchino_01"
                    },
                    {
                        "Level": 2,
                        "Name": "「모든 상벌은 내가 내릴 것이다…」",
                        "Desc": "<color style='color:#FFD780;'>핏값</color> 부여 시, 바로 핏값 · 결산이 된다.<br>아를레키노가 핏값 · 결산 회수 시 전방에 달의 핏빛화염을 소환해 아를레키노 공격력의 900%에 해당하는 <color style='color:#FF9999;'>불 원소 범위 피해</color>를 주고 아를레키노의 모든 원소 내성과 물리 내성이 20% 증가한다, 지속 시간: 15초. 해당 효과는 10초마다 최대 1회 발동한다.<br>돌파 특성 「고통만이 갚을 수 있고」를 해금해야 한다",
                        "Icon": "UI_Talent_S_Arlecchino_02"
                    },
                    {
                        "Level": 3,
                        "Name": "「우리의 새 가족이 되었으니…」",
                        "Desc": "<color style='color:#FFD780;'>일반 공격 · 사형장으로의 초대</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Arlecchino_01"
                    },
                    {
                        "Level": 4,
                        "Name": "「앞으로 사이좋게 지내거라…」",
                        "Desc": "아를레키노가 핏값 회수 성공 시, <color style='color:#FFD780;'>떠오르는 재액의 달</color>의 재사용 대기시간이 2초 감소한다. 또한 아를레키노가 원소 에너지를 15pt 회복한다. 해당 효과는 10초마다 최대 1회 발동된다",
                        "Icon": "UI_Talent_S_Arlecchino_03"
                    },
                    {
                        "Level": 5,
                        "Name": "「고독한 우리는 망자와 다름없으나…」",
                        "Desc": "<color style='color:#FFD780;'>떠오르는 재액의 달</color>의 스킬 레벨+3<br>최대 Lv.15까지 상승",
                        "Icon": "UI_Talent_U_Arlecchino_02"
                    },
                    {
                        "Level": 6,
                        "Name": "「앞으로 우리는 새 생명을 누리리라」",
                        "Desc": "<color style='color:#FFD780;'>떠오르는 재액의 달</color>이 주는 피해가 아를레키노 공격력에 현재 생명의 계약의 백분율의 700%를 곱한 값만큼 증가한다.<br><color style='color:#FFD780;'>재가 된 만상</color> 발동 후 20초 동안 아를레키노의 일반 공격과 원소폭발의 치명타 확률이 10%, 치명타 피해가 70% 증가한다. 해당 효과는 15초마다 최대 1회 발동된다",
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