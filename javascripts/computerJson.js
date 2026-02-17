var April_1st = 0
var enable_about = 1

var quest_allow = 1

var anniversary_show = 0
var cur_time_0 = Date.now()
var keqing_birthday = Date.parse('2025-11-20T00:00:00+08:00')
var show_yhb = (cur_time_0 >= keqing_birthday)
//if ((cur_time_0 >= 1753930800000) && (cur_time_0 <= 1755165600000)) anniversary_show = 1

var computer_ = {
    "MiscText": {
        "game_img": {
            "CH": '<img src="/images/emote/Keqing/1.png" class="game_img"> <b>',
            "EN": '<img src="/images/emote/Keqing/1.png" class="game_img_2"> <b>'
        },
        "TIT": {
            "CH": "妮可少女 玉衡杯数据库",
            "EN": "HomDGCat Wiki",
            "RU": "HomDGCat Wiki"
        },
        "Chart_Subtitle": {
            "CH": "妮可少女 玉衡杯数据库 yuhengcup.wiki",
            "EN": "homdgcat.wiki | t.me/homdgcat",
            "RU": "homdgcat.wiki | t.me/homdgcat"
        },
        "Back": {
            "CH": "<b>返回</b>",
            "EN": "<b>Back</b>"
        },
        "PAGE_TITLE": {
            "CH": "玉衡杯数据库 - 原神 崩坏星穹铁道 数据库 - 妮可少女 HomDGCat",
            "EN": "HomDGCat Wiki - Genshin Impact & Honkai Star Rail Wiki By HomDGCat 妮可少女",
            "RU": "HomDGCat Wiki - Genshin Impact & Honkai Star Rail Wiki By HomDGCat 妮可少女",
        },
        "TITLE": {
            "CH": "<img src='/homdgcat-res/UI/_logo_2.png' class='logo_img_yhb'>",
            "EN": "<img src='/homdgcat-res/UI/_logo_3.png' class='logo_img_yhb'>",
            "RU": "HomDGCat Wiki",
        },
        "Title": {
            "CH": "<img src='/homdgcat-res/UI/_logo_2.png' class='logo_img_yhb'>",
            "EN": "<img src='/homdgcat-res/UI/_logo_3.png' class='logo_img_yhb'>",
            "RU": "HomDGCat Wiki",
        },
        "Affix": {
            "CH": " | <color style='color:#0066FF;'>妮可少女 玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": " | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": " | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Subtitle": {
            "CH": "<p><b>yuhengcup.wiki | <span style='white-space:pre;'><a href='https://space.bilibili.com/3546567522912510' target='_blank'>b站@妮可少女</a></span></b></p>",
            "EN": "<p><b>homdgcat.wiki | <span style='white-space:pre;'><a href='http://t.me/homdgcat' target='_blank'>t.me/homdgcat</a></span></b></p>",
            "RU": "<p><b>homdgcat.wiki | <span style='white-space:pre;'><a href='http://t.me/homdgcat' target='_blank'>t.me/homdgcat</a></span></b></p>"
        },
        "Subtitle_": {
            "CH": "<p><b>玉衡杯数据库 - b站@妮可少女 | t.me/homdgcat</b></p>",
            "EN": "<p><b>HomDGCat Wiki - t.me/homdgcat</b></p>",
            "RU": "<p><b>HomDGCat Wiki - t.me/homdgcat</b></p>"
        },
        "Page": {
            "CH": "<p style='margin-top:13px;color:#df903b;cursor:pointer;'><b>【切换页面】</b></p>",
            "EN": "<p style='margin-top:13px;color:#df903b;cursor:pointer;'><b>[ Pages ]</b></p>",
            "RU": "<p style='margin-top:13px;color:#df903b;cursor:pointer;'><b>[ На главную ]</b></p>"
        },
        "Translate_": "<a class='translate_' href='?lang=CH'><b>中文</b></a> | <a class='translate_' href='?lang=EN'><b>English</b></a> | <a class='translate_' href='?lang=JP'><b>日本語</b></a> | <a class='translate_' href='?lang=KR'><b>한국인</b></a> | <a class='translate_' href='?lang=RU'><b>Русский</b></a>",
        "Abyss_Reminder": {
            "CH": "<color style='color:#0066FF;'>妮可少女 玉衡杯数据库 yuhengcup.wiki</color>",
            "EN": "<color style='color:#0066FF;'>homdgcat.wiki | t.me/homdgcat</color>",
            "RU": "<color style='color:#0066FF;'>homdgcat.wiki | t.me/homdgcat</color>"
        },
        "Abyss_Reminder3": {
            "CH": "<b>妮可少女的研究</b><br>玉衡杯数据库 yuhengcup.wiki",
            "EN": "<b>HomDGCat's Notes</b><br>homdgcat.wiki | t.me/homdgcat",
        },
        "Abyss_Reminder2": {
            "CH": "<color style='color:#0066FF;'>玉衡杯数据库 yuhengcup.wiki</color><br><color style='color:#cc0000;font-size:1.2em;'><b>玩家自创阵容</b></color>",
            "EN": "<color style='color:#0066FF;'>homdgcat.wiki | t.me/homdgcat</color><br><color style='color:#cc0000;font-size:1.2em;'><b>Fan-Made Lineup</b></color>",
            "RU": "<color style='color:#0066FF;'>homdgcat.wiki | t.me/homdgcat</color><br><color style='color:#cc0000;font-size:1.2em;'><b>Fan-Made Lineup</b></color>"
        },
        "Computer_Show": {
            "CH": "妮可少女 玉衡杯数据库 yuhengcup.wiki",
            "EN": "homdgcat.wiki | t.me/homdgcat",
            "RU": "homdgcat.wiki | t.me/homdgcat"
        },
        "Abyss_Show": {
            "CH": "妮可少女 玉衡杯数据库 yuhengcup.wiki",
            "EN": "homdgcat.wiki | t.me/homdgcat",
            "RU": "homdgcat.wiki | t.me/homdgcat"
        },
        "ComputerTitle": {
            "CH": "<img src='/homdgcat-res/UI/_logo_2.png' class='logo_img_yhb'>",
            "EN": "<img src='/homdgcat-res/UI/_logo_3.png' class='logo_img_yhb'>",
            "RU": "HomDGCat Wiki"
        },
        "ComputerTitle_": {
            "CH": "渊月螺旋 ",
            "EN": "Spiral Abyss ",
            "RU": "Витая Бездна "
        },
        "ChooseTitle": {
            "CH": "",
            "EN": "<b>Formerly the Yuheng Cup Database</b>"
        },
        "Computer_Button_Calculate": {
            "CH": "计算",
            "EN": "Calculate",
            "RU": "Рассчитать"
        },
        "Computer_Select_Overworld": {
            "CH": "大世界",
            "EN": "Overworld",
            "RU": "Мир"
        },
        "Computer_Select_Abyss": {
            "CH": "深渊",
            "EN": "Abyss",
            "RU": "Бездна"
        },
        "Computer_Download": {
            "CH": "下载怪物血量大全",
            "EN": "All Enemy HP Table",
            "RU": "ХП всех противников"
        },
        "Computer_Input_OverworldPlaceholder": {
            "CH": "请输入等级：1~200",
            "EN": "Enter enemy level (1~200)",
            "RU": "Введите уровень врага (1~200)"
        },
        "Computer_Input_AbyssPlaceholder": {
            "CH": "请输入层间，例如11-2",
            "EN": "Enter floor and chamber (e.g. 11-2)",
            "RU": "Введите этаж и камеру (e.g. 11-2)"
        },
        "Computer_Input_Placeholder": {
            "CH": "例：87、95、103",
            "EN": "E.g. 87, 95, 103",
            "RU": "E.g. 87, 95, 103"
        },
        "Computer_Warning_OverworldInputIllegal": {
            "CH": "等级应在1~200之间",
            "EN": "Level must be between 1 and 200",
            "RU": "Уровень должен быть между 1 и 200."
        },
        "Computer_Warning_AbyssInputIllegal": {
            "CH": "输入不符合要求",
            "EN": "Input format incorrect",
            "RU": "Неправильный формат ввода"
        },
        "Computer_Warning_NotSelectedMonster": {
            "CH": "未选择怪物",
            "EN": "No enemy selected",
            "RU": "Враг не выбран"
        },
        "Computer_Result_RESBaseTitle": {
            "CH": "常态抗性",
            "EN": "Regular RES",
            "RU": "Сопротивление"
        },
        "Computer_Result_Immune": {
            "CH": "免疫",
            "EN": "Immune",
            "RU": "Иммунитет"
        },
        "Computer_ScaleHP_Text": {
            "CH": "减抗 (%)：",
            "EN": "RES Reduction %: ",
            "RU": "Снижение Сопротивления %: "
        },
        "Computer_ScaleHP_Button1": {
            "CH": "计算等效血量",
            "EN": "Scaled HP",
            "RU": "Масштабирование ХП"
        },
        "Computer_ScaleHP_Button2": {
            "CH": "重置",
            "EN": "Reset",
            "RU": "Сбросить"
        },
        "Computer_ScaleHP_TutorialTitle": {
            "CH": "抗性和等效血量 | <color style='color:#0066FF;'>玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>mons.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": "RES and Scaled HP | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": "Сопротивление и масштабирование ХП | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Computer_ScaleHP_Tutorial": {
            "CH": "等效血量是考虑抗性的作用后，计算出的血量。敌方标准抗性是 10%，此时等效血量等于原血量。<br><br>例如，某个敌人的抗性为 70%，根据<b>抗性公式</b>可知打出的伤害变为原本（即抗性为 10%）的三分之一，因此等效血量是原血量的 3 倍。<br><br>对敌方施加减抗技能后，敌方的抗性改变了，因此等效血量也会改变。<br><br>抗性公式：<br>- 抗性 ≤ 0%：伤害系数 = 1 - 抗性/2<br>- 0% ≤ 抗性 ≤ 75%：伤害系数 = 1 - 抗性<br>- 抗性 ≥ 75%：伤害系数 = 1 / (抗性x4 + 1)",
            "EN": "Scaled HP is the HP value that takes into account the enemy's RES. The standard RES is 10%.<br><br>For example, if an enemy's RES is 70%, then the DMG it takes will become a third of the DMG it would take if it had the standard 10% RES. Therefore, its Scaled HP is 3 times its original HP.<br><br>If a RES reduction skill is used on the enemy, its RES will change, and so its Scaled HP will also change.<br><br>RES DMG Formula:<br>- RES ≤ 0%: Coefficient = 1 - RES/2<br>- 0% ≤ RES ≤ 75%: Coefficient = 1 - RES<br>- RES ≥ 75%: Coefficient = 1 / (RES*4 + 1)",
            "RU": "Масштабирование ХП - это значение ХП, учитывающие сопротивление противника. По умолчанию сопротивление составляет 10%.<br><br>Например, если сопротивление врага составляет 70%, то получаемый им урон составляет лишь треть от того урона, который он получил бы, будь у него 10% сопротивления. Следовательно, его масштабируемое ХП в 3 раза превышает исходное.<br><br>Если на противника используется навык снижающий сопротивление, то его масштабируемое ХП также изменится.<br><br>Формула сопротивления:<br>- Сопротивление ≤ 0%: Коэффициент = 1 - Сопротивление/2<br>- 0% ≤ Сопротивление ≤ 75%: Коэффициент = 1 - Коэффициент<br>- RES ≥ 75%: Коэффициент = 1 / (Сопротивление*4 + 1)"
        },
        "Computer_Result_BallTitle": {
            "CH": "产球数据",
            "EN": "Particle Gen",
            "RU": "Генерация частиц"
        },
        "Computer_Result_WeightEndureTitle": {
            "CH": "重量韧性",
            "EN": "Weight & Poise",
            "RU": "Вес и Стойкость"
        },
        "Computer_Result_Weight": {
            "CH": "重量：",
            "EN": "Weight: ",
            "RU": "Вес"
        },
        "Computer_Result_Endure": {
            "CH": "韧性：",
            "EN": "Poise: ",
            "RU": "Стойкость"
        },
        "Computer_Result_EndureRecover": {
            "CH": "韧性每秒恢复：",
            "EN": "Recover SPD: ",
            "RU": "Восст. стойкости: "
        },
        "Computer_Result_EndureReset": {
            "CH": "韧性重置时间：",
            "EN": "Reset Time: ",
            "RU": "Сброс стойкости: "
        },
        "Computer_Result_Button_BallIntro": {
            "CH": "产球能量简介",
            "EN": "Par & Energy Intro",
            "RU": "О энергии и частицах"
        },
        "Computer_Result_Button_WeightEndureIntro": {
            "CH": "韧性力学简介",
            "EN": "Weight & Poise Intro",
            "RU": "О весе и стойкости"
        },
        "Computer_Result_Button_BallIntro2": {
            "CH": "产球能量简介 | <color style='color:#0066FF;'>玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>mons.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": "Par & Energy Intro | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": "О энергии и частицах | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Computer_Result_Button_WeightEndureIntro2": {
            "CH": "韧性力学简介 | <color style='color:#0066FF;'>玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>mons.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": "Weight & Poise Intro | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": "О весе и стойкости | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Computer_Result_Window_BallIntro": {
            "CH": "无属白微粒：前台角色恢复<color style='color:#FF0000;'> 2 </color>元素能量\n有属性微粒：前台同属性角色恢复<color style='color:#FF0000;'> 3 </color>，不同属性恢复<color style='color:#FF0000;'> 1 </color>\n\n如果角色在后台，恢复的能量会打折扣：\n4人队后台恢复为原本的<color style='color:#FF0000;'> 60%</color>\n3人队后台恢复为原本的<color style='color:#FF0000;'> 70%</color>\n2人队后台恢复为原本的<color style='color:#FF0000;'> 80%</color>",
            "EN": "White Particle: On-field character gains <color style='color:#FF0000;'>2</color> Energy.\nElemental Particle: On-field character of the same element gains <color style='color:#FF0000;'>3</color> Energy, otherwise only gains <color style='color:#FF0000;'>1</color>.\n\nIf the character is off-field, they only gain a fraction of the original amount:\nOff-field characters in a team of 4 gain <color style='color:#FF0000;'>60%</color>\nOff-field characters in a team of 3 gain <color style='color:#FF0000;'>70%</color>\nOff-field characters in a team of 2 gain <color style='color:#FF0000;'>80%</color>",
            "RU": "Неэлементальная частица: восстанавливает активному персонажу <color style='color:#FF0000;'>2 ед.</color> энергии.\nЭлементальная частица: восстанавливает активному персонажу такого же элемента <color style='color:#FF0000;'>3 ед.</color> энергии, если элемент отличается, то <color style='color:#FF0000;'>1 ед.</color>.\n\nЕсли персонаж не находится на поле боя, то он восстанавливает только часть от исходной энергии:\nПерсонаж вне поля в команде из 4 персонажей, получает <color style='color:#FF0000;'>60%</color>\nПерсонаж вне поля в команде из 3 персонажей, получает <color style='color:#FF0000;'>70%</color>\nПерсонаж вне поля в команде из 2 персонажей, получает <color style='color:#FF0000;'>80%</color>"
        },
        "Computer_Result_Window_WeightEndureIntro": {
            "CH": "<b>重量</b>\n- 怪物越重，就越难被角色的风穴技能牵引\n- 轻的怪物容易击飞，重的怪物只能击退，最重的甚至不被打动\n\n<b>韧性</b>\n- 怪物的韧性被角色攻击削空了才能被击退/击飞\n- 被削空前，怪物的韧性会自然恢复，恢复速度以1秒为单位\n- 如果韧性空了，会在几秒后（韧性重置时间）后瞬间回满，空韧期间可以击退/击飞\n- 同理，角色的韧性被怪物削空了也会被击退/击飞；近战角色韧性100，远程角色50",
            "EN": "<b>Weight</b>\n- The heavier a monster is, the harder it is for characters' Vacuum Fields to pull it.\n- Light monsters can easily be launched into the air. Heavier monsters can only be knocked back. The heaviest monsters don't even move when struck.\n\n<b>Poise</b>\n- Monsters can only be knocked back or launched if their poise has been emptied by characters' attacks.\n- Before it is emptied, poise recovers over time. Poise Recover SPD is measured per sec. \n- After poise is emptied, it will be reset to full after a few seconds (Poise Reset Time). It is during this emptiness that monsters can be knocked or launched.\n- Characters may also be knocked or launched if their poise is emptied by monsters. Melee characters have 100 poise, ranged characters have only 50.",
            "RU": "<b>Weight</b>\n- Чем тяжелее противник, тем сложнее на него воздействовать умениям с эффектом притяжения и отбрасывания.\n- Лёгких монстров можно подбросить в воздух. Более тяжелых можно только оттолкнуть. Самые тяжелые даже не сдвинутся с места.\n\n<b>Poise</b>\n- Противника можно подбросить или оттолкнуть только в том случае, если его стойкость была исчерпана при помощи атак персонажей.\n- Если стойкость исчерпана не полностью, то она восстанавливается с течением времени. Скорость восстановления [Восст. стойкости] измеряется в единицах в секунду. \n- Если стойкость исчерпана полностью, то она будет полностью восстановлена через определенный промежуток времени [Сброс стойкости]. Именно в период потери стойкости противника можно оттолкнуть или подбросить\n- Персонажа тоже можно оттолкнуть и подбросить, если противник опустошил его стойкость. Персонажи ближнего боя имеют 100 ед. стойкости, а дальнего боя всего-лишь 50."
        },
        "Computer_Result_Button_Tutorial": {
            "CH": "机制解析",
            "EN": "Monster Mechanics",
            "RU": "Механики противника"
        },
        "Computer_Result_Button_SkillDMG": {
            "CH": "技能伤害",
            "EN": "Skill DMG",
            "RU": "Урон умений"
        },
        "Computer_Result_Button_SkillData": {
            "CH": "招式信息",
            "EN": "Skill Data",
            "RU": "Описание умений"
        },
        "Computer_Result_Button_Loot": {
            "CH": "材料掉率",
            "EN": "Loot Drop Rate",
            "RU": "Шанс выпадения"
        },
        "Computer_Result_Button_Element": {
            "CH": "自带附着",
            "EN": "Innate Element",
            "RU": "Врожденный элемент"
        },
        "Computer_Result_Button_Tutorial2": {
            "CH": "机制解析 | <color style='color:#0066FF;'>玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>mons.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": "Monster Mechanics | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": "Механики противника | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Computer_Result_Button_SkillDMG2": {
            "CH": "技能伤害 | <color style='color:#0066FF;'>玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>mons.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": "Skill DMG | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": "Урон умений | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Computer_Result_Button_SkillData2": {
            "CH": "招式信息 | <color style='color:#0066FF;'>玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>mons.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": "Skill Data | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": "Описание умений | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Computer_Result_Button_Loot2": {
            "CH": "材料掉率 | <color style='color:#0066FF;'>玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>mons.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": "Loot Drop Rate | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": "Шанс выпадения | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Computer_Result_Button_Element2": {
            "CH": "自带附着 | <color style='color:#0066FF;'>玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>mons.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": "Innate Element | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": "Врожденный элемент | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Computer_Result_Element_Type": {
            "CH": "自带元素：",
            "EN": "Innate Element: ",
            "RU": "Врожденный элемент: "
        },
        "Computer_Result_Element_Value": {
            "CH": "自带元素量：",
            "EN": "Innate Element GU: ",
            "RU": "Врожденный элемент GU: "
        },
        "Computer_Result_Element_Immutable": {
            "CH": "自带元素量不可被反应消耗，永久不变",
            "EN": "Innate GU cannot be cost by reactions, is fixed permanently.",
            "RU": "Врожденный GU не может быть снят реакциями, это фиксированный статус."
        },
        "Computer_SkillDMG_NameColumnTitle": {
            "CH": "技能",
            "EN": "Skill",
            "RU": "Умение"
        },
        "Computer_SkillDMG_DMGColumnTitle": {
            "CH": "倍率",
            "EN": "Multiplier",
            "RU": "Множитель"
        },
        "Computer_SkillDMG_CalculateColumnTitle": {
            "CH": "伤害",
            "EN": "DMG",
            "RU": "Урон"
        },
        "Computer_SkillDMG_MonsterLevel": {
            "CH": "怪物等级/深渊层间 ",
            "EN": "Monster Level / Abyss Chamber ",
            "RU": "Уровень врага / Зал Бездны "
        },
        "Computer_SkillDMG_AvatarDEF": {
            "CH": "角色防御 ",
            "EN": "Chracter DEF ",
            "RU": "Защита персонажа "
        },
        "Computer_SkillDMG_Title": {
            "CH": "怪物伤害计算器 | <color style='color:#0066FF;'>玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>mons.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": "Monster DMG Calculator | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": "Калькулятор урона противника | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.mons.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Computer_SkillDMG_Input_AvatarDEFPlaceholder": {
            "CH": "请输入整数",
            "EN": "Enter an integer",
            "RU": "Введите значение"
        },
        "Computer_SkillDMG_Input_MonsterLevelPlaceholder": {
            "CH": "例：87、95、12-3、9-1",
            "EN": "E.g. 87, 95, 12-3, 9-1",
            "RU": "E.g. 87, 95, 12-3, 9-1"
        },
        "Computer_SkillDMG_Warning_MonsterLevelInputIllegal": {
            "CH": "等级应在1~200之间",
            "EN": "Level must be between 1 and 200",
            "RU": "Уровень должен быть между 1 и 200."
        },
        "Computer_SkillDMG_Button_Calculate": {
            "CH": "计算怪物伤害",
            "EN": "Calculate DMG",
            "RU": "Рассчитать урон"
        },
        "AbyssTitle": {
            "CH": "<img src='/homdgcat-res/UI/_logo_2.png' class='logo_img_yhb'>",
            "EN": "<img src='/homdgcat-res/UI/_logo_3.png' class='logo_img_yhb'>",
            "RU": "HomDGCat Wiki"
        },
        "AbyssCount": {
            "CH": "击败 <b>#</b> 个敌人",
            "EN": "Defeat <b>#</b> Enemies",
        },
        "Abyss_Select": [
            {
                "CH": "数据分析",
                "EN": "Data Analytics",
                "RU": "Аналитика данных"
            },
            {
                "CH": "渊月祝福",
                "EN": "Blessings",
                "RU": "Благословения"
            }
        ],
        "Abyss_Floor": [
            {
                "CH": "第9层",
                "EN": "Floor 9",
                "RU": "Этаж 9"
            },
            {
                "CH": "第10层",
                "EN": "Floor 10",
                "RU": "Этаж 10"
            },
            {
                "CH": "第11层",
                "EN": "Floor 11",
                "RU": "Этаж 11"
            },
            {
                "CH": "第12层",
                "EN": "Floor 12",
                "RU": "Этаж 12"
            },
            {
                "CH": "第13层",
                "EN": "Floor 13",
                "RU": "Этаж 13"
            },
            {
                "CH": "第14层",
                "EN": "Floor 14",
                "RU": "Этаж 14"
            }
        ],
        "Abyss_Chamber_Button_Buff": {
            "CH": "深秘降福",
            "EN": "Buffs",
            "RU": "Усиления"
        },
        "Abyss_Chamber_Button_Cond": {
            "CH": "通关目标",
            "EN": "Goals",
            "RU": "Условия"
        },
        "Abyss_MonsterHover_Reminder": {
            "CH": "点击前往详情",
            "EN": "Click for details",
            "RU": "Нажми для деталей"
        },
        "Abyss_Button_Download": {
            "CH": "下载一图流",
            "EN": "Download Table",
            "RU": "Скачать таблицу"
        },
        "LocalLegend": {
            "CH": "地方传奇",
            "EN": "Local Legend",
        },
        "Avatar_Title": {
            "CH": "玉衡杯数据库",
            "EN": "HomDGCat Wiki",
            "RU": "HomDGCat Wiki"
        },
        "Avatar_Table_Header": [
            {
                "CH": "版本",
                "EN": "Ver",
                "RU": "Ver"
            },
            {
                "CH": "头像",
                "EN": "Icon",
                "RU": "Icon"
            },
            {
                "CH": "名字",
                "EN": "Name",
                "RU": "Name"
            },
            {
                "CH": "称号",
                "EN": "Title",
                "RU": "Title"
            },
            {
                "CH": "星级",
                "EN": "Rarity",
                "RU": "Rarity"
            },
            {
                "CH": "",
                "EN": "",
                "RU": ""
            },
            {
                "CH": "",
                "EN": "",
                "RU": ""
            },
            {
                "CH": "生命值",
                "EN": "HP",
                "RU": "HP"
            },
            {
                "CH": "攻击力",
                "EN": "ATK",
                "RU": "ATK"
            },
            {
                "CH": "防御力",
                "EN": "DEF",
                "RU": "DEF"
            },
            {
                "CH": "模 ⓘ",
                "EN": "Norm ⓘ",
                "RU": "Norm ⓘ"
            },
            {
                "CH": "突破",
                "EN": "Ascension Stat",
                "RU": "Ascension Stat"
            }
        ],
        "Abyss_UI": [
            {
                "CH": "排版 1",
                "EN": "More Info",
                "RU": "Больше информации"
            },
            {
                "CH": "排版 2",
                "EN": "Less Info",
                "RU": "Меньше информации"
            }
        ],
        "Abyss_Pos" : {
            "CH": "<color style='color:#FF0000'>敌方站位</color>",
            "EN": "<color style='color:#FF0000'>Enemy Positions</color>",
            "RU": "<color style='color:#FF0000'>Позиции врагов</color>"
        },
        "Avatar_Table_Title_Extra": {
            "CH": " | <color style='color:#0066FF;'>妮可少女 玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>char.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": " | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.char.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": " | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>en.char.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Avatar_Buff": {
            "CH": '角色加强',
            "EN": 'Character Buffs',
            "JP": 'キャラクター強化',
            "KR": '캐릭터 강화',
        },
        "Avatar_Info_Select": [
            {
                "CH": "基本信息",
                "EN": "Basic Info",
                "RU": "Общая информация"
            },
            {
                "CH": "技能",
                "EN": "Skills",
                "RU": "Умения"
            },
            {
                "CH": "被动 命之座",
                "EN": "Passives Constellations",
                "RU": "Passives Constellations"
            },
            {
                "CH": "养成计算",
                "EN": "Material Calculator",
                "RU": "Material Calculator"
            },
            {
                "CH": "改动汇总",
                "EN": "Track Updates",
                "RU": "Журнал изменений"
            },
            {
                "CH": "妮可少女的研究",
                "EN": "HomDGCat's Notes",
                "RU": "Заметки HomDGCat"
            },
            {
                "CH": "故事",
                "EN": "Stories",
                "RU": "Истории"
            },
            {
                "CH": "语音",
                "EN": "Voicelines",
                "RU": "Цитаты"
    
            },
        ],
        "Avatar_Attack_Header": [
            {
                "CH": "技能",
                "EN": "Skill",
                "RU": "Умение"
            },
            {
                "CH": "范围",
                "EN": "AOE",
                "RU": "AoE"
            },
            {
                "CH": "大小",
                "EN": "Size",
                "RU": "Размер"
            },
            {
                "CH": "伤害类型",
                "EN": "DMG Type",
                "RU": "Тип урона"
            },
            {
                "CH": "元素",
                "EN": "Elem",
                "RU": "Элем"
            },
            {
                "CH": "元素量",
                "EN": "GU",
                "RU": "GU"
            },
            {
                "CH": "附着组别",
                "EN": "ICD Group",
                "RU": "Группа ICD"
            },
            {
                "CH": "附着CD",
                "EN": "ICD",
                "RU": "ICD"
            },
            {
                "CH": "冲击",
                "EN": "Hit Type",
                "RU": "Hit Type"
            },
            {
                "CH": "冲击方向",
                "EN": "Hit Direction",
                "RU": "Hit Direction"
            },
            {
                "CH": "冲击力",
                "EN": "Hit Force",
                "RU": "Hit Force"
            },
            {
                "CH": "钝击",
                "EN": "Blunt",
                "RU": "Blunt"
            },
            {
                "CH": "削韧",
                "EN": "Poise DMG",
                "RU": "Poise DMG"
            },
            {
                "CH": "攻击类型",
                "EN": "Attack Type",
                "RU": "Attack Type"
            },
            {
                "CH": "始基力",
                "EN": "Arkhe",
                "RU": "Архэ"
            },
            {
                "CH": "卡肉停滞时间",
                "EN": "Hitlag Time",
                "RU": "Hitlag Time"
            },
            {
                "CH": "停滞时间流速",
                "EN": "Hitlag Time Scale",
                "RU": "Hitlag Time Scale"
            },
            {
                "CH": "韧性影响停滞",
                "EN": "Poise Affect Hitlag",
                "RU": "Poise Affect Hitlag"
            },
            {
                "CH": "可被附魔",
                "EN": "Infusable",
                "RU": "Infusable"
            },
            {
                "CH": "击打类型",
                "EN": "Strike Type",
                "RU": "Strike Type"
            },
        ],
        "Live_Name": {
            "CH": "正式服",
            "EN": "Live",
        },
        "Avatar_Base_Stats": {
            "CH": "基础数值",
            "EN": "Base Stats",
        },
        "Avatar_Data_Ball": {
            "CH": "<color style='color:#eeeeee;'>ⓘ</color> 元素微粒",
            "EN": "<color style='color:#eeeeee;'>ⓘ</color> Particle Generation",
            "RU": "<color style='color:#eeeeee;'>ⓘ</color> Генерация частиц"
        },
        "Avatar_Data_Endure": {
            "CH": "<color style='color:#eeeeee;'>ⓘ</color> 技能抗打断",
            "EN": "<color style='color:#eeeeee;'>ⓘ</color> Interruption Resistance",
            "RU": "<color style='color:#eeeeee;'>ⓘ</color> Сопротивление прерыванию"
        },
        "Avatar_Data_WindZone": {
            "CH": "<color style='color:#eeeeee;'>ⓘ</color> 技能风场",
            "EN": "<color style='color:#eeeeee;'>ⓘ</color> Vacuum Vortex",
            "RU": "<color style='color:#eeeeee;'>ⓘ</color> Сила притяжения"
        },
        "Avatar_Data_Other": {
            "CH": "妮可少女的研究",
            "EN": "HomDGCat's Notes",
            "RU": "Заметки HomDGCat"
        },
        "ChangeLog_Other": {
            "CH": "其他",
            "EN": "Other",
            "RU": "Другой"
        },
        "Avatar_WindZone_Header": [
            {
                "CH": "技能",
                "EN": "Skill",
                "RU": "Умение"
            },
            {
                "CH": "目标",
                "EN": "Target",
                "RU": "Противник"
            },
            {
                "CH": "距离范围 (m)",
                "EN": "Range (m)",
                "RU": "Дальносить (м)"
            },
            {
                "CH": "风强",
                "EN": "Strength",
                "RU": "Сила"
            },
            {
                "CH": "衰减",
                "EN": "Attenuation",
                "RU": "Затухание"
            },
            {
                "CH": "持续时间",
                "EN": "Duration",
                "RU": "Длительность"
            },
            {
                "CH": "边缘最强",
                "EN": "BS",
                "RU": "BS"
            }
        ],
        "Avatar_BasicInfo_Info": {
            "CH": "角色信息",
            "EN": "Character Info",
            "RU": "О персонаже"
        },
        "Avatar_BasicInfo_Battle": {
            "CH": "韧性",
            "EN": "Poise",
            "RU": "Стойкость"
        },
        "Avatar_BasicInfo_1_1": {
            "CH": "命之座：",
            "EN": "Constellation: ",
            "RU": "Созвездие: "
        },
        "Avatar_BasicInfo_1_2": {
            "CH": "生日：",
            "EN": "Birthday: ",
            "RU": "День рождения: "
        },
        "Avatar_BasicInfo_1_3_0": {
            "CH": "国家：",
            "EN": "Nation: ",
            "RU": "Регион: "
        },
        "Avatar_BasicInfo_1_3": {
            "CH": "所属：",
            "EN": "Affil­i­a­tion: ",
            "RU": "Группа: "
        },
        "Avatar_BasicInfo_2_1": {
            "CH": "中文CV：",
            "EN": "Chinese CV: ",
            "RU": "Озвучка CHS: "
    
        },
        "Avatar_BasicInfo_2_2": {
            "CH": "日语CV：",
            "EN": "Japanese CV: ",
            "RU": "Озвучка JP: "
        },
        "Avatar_BasicInfo_2_3": {
            "CH": "英语CV：",
            "EN": "English CV: ",
            "RU": "Озвучка EN: "
        },
        "Avatar_BasicInfo_2_4": {
            "CH": "韩语CV：",
            "EN": "Korean CV: ",
            "RU": "Озвучка KR: "
        },
        "Avatar_BasicInfo_Poise_1": {
            "CH": "韧性类型：",
            "EN": "Poise Type: ",
            "RU": "Тип стойкости: "
        },
        "Avatar_BasicInfo_Poise_2": {
            "CH": "总韧性：",
            "EN": "Total Poise: ",
            "RU": "Кол-во стойкости: "
        },
        "Avatar_BasicInfo_Poise_3": {
            "CH": "韧性每秒恢复：",
            "EN": "Poise Recover Per Sec: ",
            "RU": "Восст. стойкости в сек: "
        },
        "Avatar_BasicInfo_Poise_4": {
            "CH": "韧性重置时间：",
            "EN": "Poise Recover Time: ",
            "RU": "Время сброса стойкости: "
        },
        "Avatar_Stats": {
            "CH": "角色数值",
            "EN": "Character Stats",
            "RU": "Характеристики"
        },
        "Avatar_Stat_HP": {
            "CH": "基础生命值：",
            "EN": "Base HP: ",
            "RU": "Базовое HP: ",
            "JP": "基礎 HP: ",
            "KR": "기초 HP: ",
            "FR": "PV de base: ",
            "DE": "Basis-LP: ",
            "SP": "Vida Base: ",
            "PT": "Vida Básica: "
        },
        "Avatar_Stat_ATK": {
            "CH": "基础攻击力：",
            "EN": "Base ATK: ",
            "RU": "Базовая атака: ",
            "JP": "基礎攻撃力: ",
            "KR": "기초 공격력: ",
            "FR": "ATQ de base: ",
            "DE": "Basis-ANG: ",
            "SP": "ATQ Básico: ",
            "PT": "ATQ Básico: "
        },
        "Avatar_Stat_DEF": {
            "CH": "基础防御力：",
            "EN": "Base DEF: ",
            "RU": "Базовая защита: ",
            "JP": "基礎防御力: ",
            "KR": "기초 방어력: ",
            "FR": "DÉF de base: ",
            "DE": "Basis-VTD: ",
            "SP": "DEF Base: ",
            "PT": "DEF Básica: "
        },
        "Avatar_IsPromote": [
            {
                "CH": "已突破",
                "EN": "After Ascension",
                "RU": "После возвышения"
            },
            {
                "CH": "未突破",
                "EN": "Before Ascension",
                "RU": "До возвышения"
            }
        ],
        "Avatar_Battle_Stat": [
            {
                "CH": "显示数值",
                "EN": "Show Stats",
                "RU": "Show Stats"
            },
            {
                "CH": "隐藏数值",
                "EN": "Hide Stats",
                "RU": "Hide Stats"
            }
        ],
        "Avatar_ExtraParamName_Charge": {
            "CH": "可使用次数",
            "EN": "Charges",
            "RU": "Charges"
        },
        "Avatar_ExtraParamName_Lock": {
            "CH": "索敌距离",
            "EN": "Lock Target Distance",
            "RU": "Lock Target Distance"
        },
        "Avatar_Mat": {
            "CH": "材料",
            "EN": "Materials",
            "RU": "Материалы"
        },
        "Avatar_Mons": {
            "CH": "<b>普通怪物</b>",
            "EN": "<b>Common Monster</b>",
            "RU": "<b>Обычный монстр</b>"
        },
        "Avatar_Costume": {
            "CH": "衣装",
            "EN": "Costume",
            "RU": "Костюм"
        },
        "Avatar_Costume_Story": {
            "CH": "故事",
            "EN": "Story",
            "RU": "Описание"
        },
        "Avatar_Relic": {
            "CH": "圣遗物",
            "EN": "Artifacts",
            "RU": "Артефакты"
        },
        "Avatar_Weapon": [
            {
                "CH": "单手剑",
                "EN": "Sword",
                "RU": "Меч"
            },
            {
                "CH": "双手剑",
                "EN": "Claymore",
                "RU": "Двуручный меч"
            },
            {
                "CH": "法器",
                "EN": "Catalyst",
                "RU": "Катализатор"
            },
            {
                "CH": "长柄武器",
                "EN": "Polearm",
                "RU": "Копьё"
            },
            {
                "CH": "弓",
                "EN": "Bow",
                "RU": "Лук"
            }
        ],
        "Avatar_Relic_Header": [
            {
                "CH": "名称",
                "EN": "Name",
                "RU": "Набор"
            },
            {
                "CH": "生之花",
                "EN": "Flower",
                "RU": "Цветок"
            },
            {
                "CH": "死之羽",
                "EN": "Plume",
                "RU": "Перо"
            },
            {
                "CH": "时之沙",
                "EN": "Sands",
                "RU": "Часы"
            },
            {
                "CH": "空之杯",
                "EN": "Goblet",
                "RU": "Кубок"
            },
            {
                "CH": "理之冠",
                "EN": "Circlet",
                "RU": "Корона"
            }
        ],
        "Avatar_Relic_Pop_Header": [
            {
                "CH": "基本信息",
                "EN": "Basic Info",
                "RU": "Общая информация"
            },
            {
                "CH": "生之花",
                "EN": "Flower",
                "RU": "Цветок"
            },
            {
                "CH": "死之羽",
                "EN": "Plume",
                "RU": "Перо"
            },
            {
                "CH": "时之沙",
                "EN": "Sands",
                "RU": "Часы"
            },
            {
                "CH": "空之杯",
                "EN": "Goblet",
                "RU": "Кубок"
            },
            {
                "CH": "理之冠",
                "EN": "Circlet",
                "RU": "Корона"
            }
        ],
        "Avatar_Relic_Num": {
            "CH": " 件套效果",
            "EN": " Piece Skill",
            "RU": " Части"
        },
        "Avatar_Weapon_Header": [
            {
                "CH": "",
                "EN": "",
                "RU": "",
            },
            {
                "CH": "",
                "EN": "",
                "RU": ""
            },
            {
                "CH": "名称",
                "EN": "Name",
                "RU": "Name"
            },
            {
                "CH": "基础数值",
                "EN": "Base Stat",
                "RU": "Base Stat"
            },
            {
                "CH": "突破数值",
                "EN": "Ascension Stat",
                "RU": "Ascension Stat"
            },
            {
                "CH": "突破材料",
                "EN": "Materials",
                "RU": "Materials"
            },
            {
                "CH": "突破材料",
                "EN": "Materials",
                "RU": "Materials"
            }
        ],
        "Avatar_Weapon_Desc": {
            "CH": "描述",
            "EN": "Description",
            "RU": "Description"
        },
        "Avatar_AscMat": {
            "CH": "突破材料",
            "EN": "Materials",
            "RU": "Materials"
        },
        "Avatar_Weapon_ToggleStory": [
            {
                "CH": "显示故事",
                "EN": "Show Story",
                "RU": "Показать историю"
            },
            {
                "CH": "隐藏故事",
                "EN": "Hide Story",
                "RU": "Скрыть историю"
            }
        ],
        "Avatar_Weapon_Story": {
            "CH": "故事",
            "EN": "Story",
            "RU": "История"
        },
        "Avatar_Weapon_Stats": {
            "CH": "武器属性 / 材料",
            "EN": "Weapon Stats / Materials",
            "RU": "Характеристики / Материалы"
        },
        "Avatar_Weapon_Stat_ATK": {
            "CH": "基础攻击力：",
            "EN": "Base ATK: ",
            "RU": "Базовая атака: "
        },
        "Avatar_Weapon_Stat_Custom": {
            "CH": "突破属性：",
            "EN": "Ascension: ",
            "RU": "Возвышение: "
        },
        "Avatar_Weapon_Extra": {
            "CH": "妮可少女的备注",
            "EN": "HomDGCat's Notes",
            "RU": "Заметки HomDGCat"
        },
        "Avatar_Norm_Title": {
            "CH": "> 模是啥嘞？",
            "EN": "> What is Norm?",
            "RU": "> What is Norm?"
        },
        "Avatar_Norm_Info": {
            "CH": "<br><b>模 = 基础生命值 + 16 x 基础攻击力 + 10 x 基础防御力</b><br>同类角色的模基本相同，类别分为：<br>5★ 近战  >  4★ 近战 A  >  5★ 远程  >  4★ 近战 B > 4★ 远程。<br>有少部分角色不遵循此规律，模比常规高：珊瑚宫心海、夜兰、那维莱特。",
            "EN": "<br><b>Norm = HP + 16 * ATK + 10 * DEF</b><br>Characters in the same category have similar norms.<br>The categories are: 5★ Melee > 4★ Melee A > 5★ Ranged > 4★ Melee B > 4★ Ranged.<br> There are a few characters who do not follow this rule, having exceptionally high norm: Kokomi, Yelan, Neuvillette.",
            "RU": "<br><b>Norm = HP + 16 * ATK + 10 * DEF</b><br>Characters in the same category have similar norms.<br>The categories are: 5★ Melee > 4★ Melee A > 5★ Ranged > 4★ Melee B > 4★ Ranged.<br> There are a few characters who do not follow this rule, having exceptionally high norm: Kokomi, Yelan, Neuvillette."   
        },
        "Ball_TUT": {
            "CH": "属性微粒：前台同属性角色恢复<color style='color:#FF0000;'> 3 </color>，不同属性恢复<color style='color:#FF0000;'> 1 </color><br><br>如果角色在后台，恢复的能量会打折扣：<br>4人队后台恢复为原本的<color style='color:#FF0000;'> 60%</color><br>3人队后台恢复为原本的<color style='color:#FF0000;'> 70%</color><br>2人队后台恢复为原本的<color style='color:#FF0000;'> 80%</color>",
            "EN": "Elemental Particle: On-field character of the same element gains <color style='color:#FF0000;'>3</color> Energy, otherwise only gains <color style='color:#FF0000;'>1</color>.<br><br>If the character is off-field, they only gain a fraction of the original amount:<br>Off-field characters in a team of 4 gain <color style='color:#FF0000;'>60%</color><br>Off-field characters in a team of 3 gain <color style='color:#FF0000;'>70%</color><br>Off-field characters in a team of 2 gain <color style='color:#FF0000;'>80%</color>",
            "RU": "Элементальная частица: Активный персонаж такого же элемента получает <color style='color:#FF0000;'>3 ед.</color> энергии, если элемент отличается, то <color style='color:#FF0000;'>1 ед.</color> энергии.<br><br>Если персонаж не находится на поле боя, то он получает только часть от исходной энергии:<br>Персонаж вне поля в команде из 4 персонажей, получает <color style='color:#FF0000;'>60%</color><br>Персонаж вне поля в команде из 3 персонажей, получает <color style='color:#FF0000;'>70%</color><br>Персонаж вне поля в команде из 2 персонажей, получает <color style='color:#FF0000;'>80%</color>"
        },
        "Endure_TUT": {
            "CH": "所有削韧都会乘上这个系数。<br>这个数越小，抗打断能力越强：1 表示没有抗打断，0 表示不受削韧岿然不动。",
            "EN": "All incoming poise DMG is multiplied by these numbers.<br>The smaller this number, the more RES it provides: 1 means no effect and 0 means completely uninterruptible.",
            "RU": "Входящий урон по стойкости умножается на эти значения.<br>TЧем меньше значение, тем больше сопротивления к прерыванию: 1 означает отсутствие эффекта, а 0 абсолютное сопротивление."
        },
        "Windzone_TUT": {
            "CH": "风强 = 风场的吸力，越大越强。负数表示向外推。<br><br>衰减 = 吸力随距离下降的程度。风场中心的吸力最强，边缘的吸力最弱。<br><br>边缘最强：如果 ✔ ，则衰减方向反过来，边缘处吸力最强，中心吸力最弱。",
            "EN": "Strength = Pull strength. The higher this number, the stronger the vortex pulls. Negative means the vortex pushes outward.<br><br>Attenuation = how much the pull strength drops as distance increases. The vortex's pull strength is strongest at the center and weakest at the boundary.<br><br>BS = Boundary Strongest. If this is checked, it means that the vortex's attenuation is reversed. Pull strength is strongest at the boundaries and weakest at the center.",
            "RU": "Сила = Сила притяжения. Чем выше это значение, тем сильнее притяжение. Отрицательные числа означают, что умение выталкивает наружу.<br><br>Затухание = Насколько падает сила притяжения по мере увеличения расстояния. Сила притяжения сильнее всего в центре и слабее по краям умения.<br><br>BS = Сила по краям умения. Если этот флажок установлен, это означает, что затухание изменилось на противоположное. Сильное притяжение по краям умения и слабое в центре."
        },
        "Avatar_Sort": [
            {
                "CH": "默认排序",
                "EN": "Default",
                "RU": "По умочанию"
            },
            {
                "CH": "生命值排序",
                "EN": "Sort by HP",
                "RU": "Сортировать по ХП"
            },
            {
                "CH": "攻击力排序",
                "EN": "Sort by ATK",
                "RU": "Сортировать по АТК"
            },
            {
                "CH": "防御力排序",
                "EN": "Sort by DEF",
                "RU": "Сортировать по ЗАЩ"
            },
            {
                "CH": "模排序",
                "EN": "Sort by Norm",
                "RU": "Сортировать по Норме"
            }
        ],
        "Changelog": {
            "CH": "改动汇总",
            "EN": "Track Updates",
            "RU": "Журнал изменений"
        },
        "HN": {
            "CH": "妮可少女的研究",
            "EN": "HomDGCat's Notes",
            "RU": "Заметки HomDGCat"
        },
        "HD": {
            "CH": "未来情报",
            "EN": "Future Info",
        },
        "StatVerChoose": {
            "CH": "版本",
            "EN": "Version",
            "RU": "Version"
        },
        "Ach_Title": {
            "CH": "玉衡杯数据库",
            "EN": "HomDGCat Wiki",
            "RU": "HomDGCat Wiki"
        },
        "Ach_Total": {
            "CH": "总成就数",
            "EN": "Total Count",
            "RU": "Общее Количество"
        },
        "Ach_Table_Header": [
            {
                "CH": "合辑",
                "EN": "Series",
                "RU": "Достижение"
            },
            {
                "CH": "数量",
                "EN": "Count",
                "RU": "Количество"
            },
            {
                "CH": "原石",
                "EN": "Primo",
                "RU": "Камни истока"
            }
        ],
        "Ach_All_Name": {
            "CH": "<b>全部成就</b>",
            "EN": "<b>All Achievements</b>",
            "RU": "<b>Все достижения</b>"
        },
        "Ach_Extra": {
            "CH": " | <color style='color:#0066FF;'>妮可少女 玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": " | <color style='color:#0066FF;'>HomDGCat Wiki</color> | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": " | <color style='color:#0066FF;'>HomDGCat Wiki</color> | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "Ach_Inner_Header": [
            {
                "CH": "奖励",
                "EN": "Primo",
                "RU": "Камни истока"
            },
            {
                "CH": "成就",
                "EN": "Achievement",
                "RU": "Достижение"
            },
            {
                "CH": "版本",
                "EN": "Ver",
                "RU": "Версия"
            },
            {
                "CH": "总进度",
                "EN": "Total",
                "RU": "Итог"
            },
            {
                "CH": "隐藏",
                "EN": "Hidden",
                "RU": "Скрытое"
            },
        ],
        "Load_Title": {
            "CH": "玉衡杯数据库",
            "EN": "HomDGCat Wiki",
            "RU": "HomDGCat Wiki"
        },
        "MS_Type": [
            {
                "CH": "护盾",
                "EN": "Shields",
                "RU": "Щиты"
            },
            {
                "CH": "护甲",
                "EN": "Armors",
                "RU": "Броня"
            },
            {
                "CH": "造物",
                "EN": "Gadgets",
                "RU": "Устройства"
            }
        ],
        "MS_Desc": [
            {
                "CH": "护盾能够抵挡一切受到的伤害（包括真实伤害）。",
                "EN": "Shields nullify all incoming DMG (including True DMG), rendering the enemy invincible.",
                "RU": "Щиты позволяют противнику игнорировать весь входящий урон (включая истинный)."
            },
            {
                "CH": "护甲是一种状态，并不会抵挡受到的伤害。某些护甲会削减受到的伤害。",
                "EN": "Armors do not render the enemy invincible. However, some armors decrease incoming DMG.",
                "RU": "Броня позволяет противнику игнорировать часть входящего урона."
            },
            {
                "CH": "造物是独立个体，在附着和伤害方面与敌人互不影响。",
                "EN": "Gadgets are independent objects. The enemy and their gadgets do not share DMG taken or elements applied.",
                "RU": "Устройства являются независимыми объектами. Противник и его устройство не разделяют полученный урон или примененные элементы"
            }
        ],
        "MS_HP_Title": {
            "CH": "护盾血量 | <color style='color:#0066FF;'>玉衡杯数据库 yuhengcup.wiki</color> | <color style='color:#0066FF;'>b站@妮可少女</color>",
            "EN": "Shield HP | <color style='color:#0066FF;'>HomDGCat Wiki</color> | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>",
            "RU": "ХП щита | <color style='color:#0066FF;'>HomDGCat Wiki</color> | <color style='color:#0066FF;'>homdgcat.wiki</color> | <color style='color:#0066FF;'>t.me/homdgcat</color>"
        },
        "MS_HP_Desc": {
            "CH": "某些护盾具有血量：在受到不同属性的伤害时，会依此扣除护盾值。此效果与元素反应的消耗叠加。<br>护盾的血量是敌人本体血量的倍数。例如，5x 表示护盾血量是本体的 5 倍。",
            "EN": "Some shields have HP. When these shields take DMG that are not of its own element type, shield strength will be consumed by this DMG. This effect stacks with the consumption from Elemental Reactions.<br>Shields' HP are a multiple of their owner's HP. For example, 5x means that the shield has 5 times its owner's HP.",
            "RU": "Некоторые щиты имеют полоску ХП. Если нанести урон другим элементом или реакцией, то будет потреблятся ХП щита.<br>ХП щита кратно здоровью противника. Например, 5х означает, что у щита в 5 раз больше ХП, чем у него владельца."
    
        },
        "MS_Header": [
            {
                "CH": "",
                "EN": "",
                "RU": ""
            },
            {
                "CH": "名称",
                "EN": "Name",
                "RU": "Противник"
            },
            {
                "CH": "技能",
                "EN": "Skill",
                "RU": "Умение"
            },
            {
                "CH": "元素量",
                "EN": "Strength",
                "RU": "Мощность"
            },
            {
                "CH": "血量 ⓘ",
                "EN": "HP ⓘ",
                "RU": "ХП ⓘ"
            },
            {
                "CH": "备注",
                "EN": "Notes",
                "RU": "Примечание"
            }
        ],
        "ResetTalk": {
            "CH": "重置对话",
            "EN": "Reset Talk",
            "RU": "Сбросить разговор"
        },
        "TalkTip": {
            "CH": "点击对话框开始对话",
            "EN": "Click on a bubble to start chatting",
            "RU": "Нажмите на пузырь, чтобы начать общение"
        },
        "Event_Story": {
            "CH": " 简介 ",
            "EN": " Introduction ",
            "RU": " Введение "
        },
        "Event_Tutorial": {
            "CH": " 图片 ",
            "EN": " Pictures ",
            "RU": " Картинки "
        },
        "Maze_S": [
            {
                "CH": "总览",
                "EN": "Overall"
            },
            {
                "CH": "拍照动作",
                "EN": "Photo Poses"
            },
            {
                "CH": "辉彩祝福",
                "EN": "Brilliant Blessings"
            },
            {
                "CH": "祝福等级",
                "EN": "Blessing Levels"
            },
            {
                "CH": "事件",
                "EN": "Events"
            },
            {
                "CH": "签文",
                "EN": "Fortune Slips"
            },
        ],
        "Maze_Opening": {
            "CH": "开幕角色",
            "EN": "Opening Characters",
            "JP": "開幕キャラ",
            "KR": "개막 캐릭터",
            "RU": "Персонажи, открывающие представление",
        },
        "Maze_Invitation": {
            "CH": "特邀角色",
            "EN": "Special Invitations",
            "JP": "特別招待キャラ",
            "KR": "초청 캐릭터",
            "RU": "Специально приглашённые персонажи",
        },
        "Maze_Boss": {
            "CH": "首领阵容",
            "EN": "Boss Chambers"
        },
        "Maze_Name": {
            "CH": "幻想真境剧诗",
            "EN": "Imaginarium Theater",
            "JP": "幻想シアター",
            "KR": "현실 속 환상극",
            "RU": "Театр «Воображариум»",
        },
        "Teapot_Name": {
            "CH": "尘歌壶",
            "EN": "Serenitea Pot",
            "JP": "塵歌壺",
            "KR": "속세의 주전자",
            "RU": "Чайник безмятежности",
        },
        "Maze_Plane": [
            {
                "CH": "第一位面",
                "EN": "Plane I"
            },
            {
                "CH": "第二位面",
                "EN": "Plane II"
            },
            {
                "CH": "第三位面",
                "EN": "Plane III"
            }
        ]
    },
    "ElemNameConfig": {
        "Fire": {
            "Color": "Fire",
            "Text": {
                "CH": "火",
                "EN": "Pyro"
            }
        },
        "Water": {
            "Color": "Water",
            "Text": {
                "CH": "水",
                "EN": "Hydro"
            }
        },
        "Elec": {
            "Color": "Elec",
            "Text": {
                "CH": "雷",
                "EN": "Electro"
            }
        },
        "Ice": {
            "Color": "Ice",
            "Text": {
                "CH": "冰",
                "EN": "Cryo"
            }
        },
        "Frozen": {
            "Color": "Ice",
            "Text": {
                "CH": "冻",
                "EN": "Freeze"
            }
        },
        "Grass": {
            "Color": "Grass",
            "Text": {
                "CH": "草",
                "EN": "Dendro"
            }
        },
        "Wind": {
            "Color": "Wind",
            "Text": {
                "CH": "风",
                "EN": "Anemo"
            }
        },
        "Rock": {
            "Color": "Rock",
            "Text": {
                "CH": "岩",
                "EN": "Geo"
            }
        },
        "Wood": {
            "Color": "Wood",
            "Text": {
                "CH": "木",
                "EN": "Wooden"
            }
        }
    },
    "TextColorConfig": {
        "Fire": "#FF0000",
        "Water": "#0070C0",
        "Elec": "#7030A0",
        "Ice": "#00B0F0",
        "Grass": "#70AD47",
        "Wind": "#00B050",
        "Rock": "#D4A000",
        "Wood": "#D4A000",
        "Pink": "#FF66FF",
        "Grey": "#808080",
        "None": "#000000",
    },
    "TextColorLightConfig": {
        "Fire": "#FF9999",
        "Water": "#80C0FF",
        "Elec": "#FFACFF",
        "Ice": "#99FFFF",
        "Grass": "#99FF88",
        "Wind": "#80FFD7",
        "Rock": "#FFE699",
        "Wood": "#FFE699",
        "Pink": "#FF66FF",
        "Grey": "#808080",
        "None": "#eeeeee",
    },
    "AvatarNationConfig": {
        "Mondstadt": {
            "Color": "Wind",
            "Text": {
                "CH": "蒙德",
                "EN": "Mondstadt"
            }
        },
        "Liyue": {
            "Color": "Rock",
            "Text": {
                "CH": "璃月",
                "EN": "Liyue"
            }
        },
        "Inazuma": {
            "Color": "Elec",
            "Text": {
                "CH": "稻妻",
                "EN": "Inazuma"
            }
        },
        "Sumeru": {
            "Color": "Grass",
            "Text": {
                "CH": "须弥",
                "EN": "Sumeru"
            }
        },
        "Fontaine": {
            "Color": "Water",
            "Text": {
                "CH": "枫丹",
                "EN": "Fontaine"
            }
        },
        "Fatui": {
            "Color": "Ice",
            "Text": {
                "CH": "愚人众",
                "EN": "The Fatui"
            }
        },
        "Natlan": {
            "Color": "Fire",
            "Text": {
                "CH": "纳塔",
                "EN": "Natlan"
            }
        },
        "Traveller": {
            "Color": "Grey",
            "Text": {
                "CH": "旅人",
                "EN": "Traveller"
            }
        },
        "OtherRealm": {
            "Color": "Grey",
            "Text": {
                "CH": "异世",
                "EN": "Another Realm"
            }
        },
        "???": {
            "Color": "Grey",
            "Text": {
                "CH": "???",
                "EN": "???"
            }
        }
    },
    "AvatarWeaponConfig": {
        "Sword": {
            "CH": "单手剑",
            "EN": "Sword"
        },
        "Claymore": {
            "CH": "双手剑",
            "EN": "Claymore"
        },
        "Pole": {
            "CH": "长柄武器",
            "EN": "Polearm"
        },
        "Catalyst": {
            "CH": "法器",
            "EN": "Catalyst"
        },
        "Bow": {
            "CH": "弓",
            "EN": "Bow"
        }
    },
    "AvatarCustomPromoteConfig": {
        "HP": {
            "Text": {
                "CH": "生命值上限",
                "EN": "HP",
                "RU": "HP",
                "JP": "HP",
                "KR": "HP",
                "FR": "PV",
                "DE": "LP",
                "SP": "Vida",
                "PT": "Vida"
            },
            "ShowType": "p"
        },
        "ATK": {
            "Text": {
                "CH": "攻击力",
                "EN": "ATK",
                "RU": "Сила атаки",
                "JP": "攻撃力",
                "KR": "공격력",
                "FR": "ATQ",
                "DE": "ANG",
                "SP": "ATQ",
                "PT": "ATQ"
            },
            "ShowType": "p"
        },
        "DEF": {
            "Text": {
                "CH": "防御力",
                "EN": "DEF",
                "RU": "Защита",
                "JP": "防御力",
                "KR": "방어력",
                "FR": "DÉF",
                "DE": "VTD",
                "SP": "DEF",
                "PT": "DEF"
            },
            "ShowType": "p"
        },
        "ER": {
            "Text": {
                "CH": "元素充能效率",
                "EN": "Energy Recharge",
                "RU": "Восст. энергии",
                "JP": "元素チャージ効率",
                "KR": "원소 충전 효율",
                "FR": "Recharge d'énergie",
                "DE": "Aufladerate",
                "SP": "Recarga de Energía",
                "PT": "Recarga de Energia"
            },
            "ShowType": "p"
        },
        "EM": {
            "Text": {
                "CH": "元素精通",
                "EN": "Elemental Mastery",
                "RU": "Мастерство стихий",
                "JP": "元素熟知",
                "KR": "원소 마스터리",
                "FR": "Maîtrise élémentaire",
                "DE": "Elementarkunde",
                "SP": "Maestría Elemental",
                "PT": "Proficiência Elemental"
            },
            "ShowType": "f"
        },
        "CR": {
            "Text": {
                "CH": "暴击率",
                "EN": "CRIT Rate",
                "RU": "Шанс крит. попадания",
                "JP": "会心率",
                "KR": "치명타 확률",
                "FR": "Taux CRIT",
                "DE": "KT",
                "SP": "Prob. CRIT",
                "PT": "Taxa Crítica"
            },
            "ShowType": "p"
        },
        "CD": {
            "Text": {
                "CH": "暴击伤害",
                "EN": "CRIT DMG",
                "RU": "Крит. урон",
                "JP": "会心ダメージ",
                "KR": "치명타 피해",
                "FR": "DGT CRIT",
                "DE": "KSCH",
                "SP": "Daño CRIT",
                "PT": "Dano Crítico"
            },
            "ShowType": "p"
        },
        "Heal": {
            "Text": {
                "CH": "治疗加成",
                "EN": "Heal Bonus",
                "RU": "Бонус лечения",
                "JP": "与える治療効果",
                "KR": "치유 보너스",
                "FR": "Bonus de soins",
                "DE": "Heilungsbonus",
                "SP": "Bono de Curación",
                "PT": "Bônus de Cura"
            },
            "ShowType": "p"
        },
        "Phys": {
            "Text": {
                "CH": "物理伤害加成",
                "EN": "Physical DMG Bonus",
                "RU": "Бонус физ. урона",
                "JP": "物理ダメージ",
                "KR": "물리 피해 보너스",
                "FR": "Bonus de DGT physiques",
                "DE": "Physischer SCH-Bonus",
                "SP": "Bono de Daño Físico",
                "PT": "Bônus de Dano Físico"
            },
            "ShowType": "p"
        },
        "Fire": {
            "Text": {
                "CH": "火元素伤害加成",
                "EN": "Pyro DMG Bonus",
                "RU": "Бонус Пиро урона",
                "JP": "炎元素ダメージ",
                "KR": "불 원소 피해 보너스",
                "FR": "Bonus de DGT Pyro",
                "DE": "Pyro-SCH-Bonus",
                "SP": "Bono de Daño Pyro",
                "PT": "Bônus de Dano Pyro"
            },
            "ShowType": "p"
        },
        "Water": {
            "Text": {
                "CH": "水元素伤害加成",
                "EN": "Hydro DMG Bonus",
                "RU": "Бонус Гидро урона",
                "JP": "水元素ダメージ",
                "KR": "물 원소 피해 보너스",
                "FR": "Bonus de DGT Hydro",
                "DE": "Hydro-SCH-Bonus",
                "SP": "Bono de Daño Hydro",
                "PT": "Bônus de Dano Hydro"
            },
            "ShowType": "p"
        },
        "Elec": {
            "Text": {
                "CH": "雷元素伤害加成",
                "EN": "Electro DMG Bonus",
                "RU": "Бонус Электро урона",
                "JP": "雷元素ダメージ",
                "KR": "번개 원소 피해 보너스",
                "FR": "Bonus de DGT Électro",
                "DE": "Elektro-SCH-Bonus",
                "SP": "Bono de Daño Electro",
                "PT": "Bônus de Dano Electro"
            },
            "ShowType": "p"
        },
        "Ice": {
            "Text": {
                "CH": "冰元素伤害加成",
                "EN": "Cryo DMG Bonus",
                "RU": "Бонус Крио урона",
                "JP": "氷元素ダメージ",
                "KR": "얼음 원소 피해 보너스",
                "FR": "Bonus de DGT Cryo",
                "DE": "Kryo-SCH-Bonus",
                "SP": "Bono de Daño Cryo",
                "PT": "Bônus de Dano Cryo"
            },
            "ShowType": "p"
        },
        "Grass": {
            "Text": {
                "CH": "草元素伤害加成",
                "EN": "Dendro DMG Bonus",
                "RU": "Бонус Дендро урона",
                "JP": "草元素ダメージ",
                "KR": "풀 원소 피해 보너스",
                "FR": "Bonus de DGT Dendro",
                "DE": "Dendro-SCH-Bonus",
                "SP": "Bono de Daño Dendro",
                "PT": "Bônus de Dano Dendro"
            },
            "ShowType": "p"
        },
        "Wind": {
            "Text": {
                "CH": "风元素伤害加成",
                "EN": "Anemo DMG Bonus",
                "RU": "Бонус Анемо урона",
                "JP": "風元素ダメージ",
                "KR": "바람 원소 피해 보너스",
                "FR": "Bonus de DGT Anémo",
                "DE": "Anemo-SCH-Bonus",
                "SP": "Bono de Daño Anemo",
                "PT": "Bônus de Dano Anemo"
            },
            "ShowType": "p"
        },
        "Rock": {
            "Text": {
                "CH": "岩元素伤害加成",
                "EN": "Geo DMG Bonus",
                "RU": "Бонус Гео урона",
                "JP": "岩元素ダメージ",
                "KR": "바위 원소 피해 보너스",
                "FR": "Bonus de DGT Géo",
                "DE": "Geo-SCH-Bonus",
                "SP": "Bono de Daño Geo",
                "PT": "Bônus de Dano Geo"
            },
            "ShowType": "p"
        }
    },
    "AvatarForceConfig": {
        "0": {
            "CH": "无",
            "EN": "None"
        },
        "1": {
            "CH": "轻击",
            "EN": "Light"
        },
        "2": {
            "CH": "击退",
            "EN": "Knock Back"
        },
        "3": {
            "CH": "击飞",
            "EN": "Knock Fly"
        }
    },
    "AvatarTalentConfig": {
        "0": {
            "CH": "-",
            "EN": "-"
        },
        "1": {
            "CH": "一 / 四 / 日",
            "EN": "Mon / Thu / Sun"
        },
        "2": {
            "CH": "二 / 五 / 日",
            "EN": "Tue / Fri / Sun"
        },
        "3": {
            "CH": "三 / 六 / 日",
            "EN": "Wed / Sat / Sun"
        }
    },
    "WeaponTalentConfig": {
        "0": {
            "CH": "-",
            "EN": "-"
        },
        "1": {
            "CH": "一 四 日",
            "EN": "Mon Thu Sun"
        },
        "2": {
            "CH": "二 五 日",
            "EN": "Tue Fri Sun"
        },
        "3": {
            "CH": "三 六 日",
            "EN": "Wed Sat Sun"
        }
    },
    "AvatarShapeConfig": {
        "Single": {
            "Name": {
                "CH": "单体",
                "EN": "Single"
            },
            "Params": []
        },
        "Cuboid": {
            "Name": {
                "CH": "长方",
                "EN": "Box"
            },
            "Params": [
                {
                    "CH": "长",
                    "EN": "Length"
                },
                {
                    "CH": "宽",
                    "EN": "Width"
                },
                {
                    "CH": "高",
                    "EN": "Height"
                }
            ]
        },
        "Cylinder": {
            "Name": {
                "CH": "圆柱",
                "EN": "Cylinder"
            },
            "Params": [
                {
                    "CH": "半径",
                    "EN": "Radius"
                },
                {
                    "CH": "高度",
                    "EN": "Height"
                },
                {
                    "CH": "扇角",
                    "EN": "Fan-Angle"
                }
            ]
        },
        "Sphere": {
            "Name": {
                "CH": "球",
                "EN": "Sphere"
            },
            "Params": [
                {
                    "CH": "半径",
                    "EN": "Radius"
                }
            ]
        }
    },
    "AvatarPoiseConfig": {
        "Melee": {
            "Name": {
                "CH": "近战韧性",
                "EN": "Melee Poise"
            },
            "Poise": {
                "Endure": 100,
                "Wane1": 5,
                "Wane2": 1,
                "Recover": 2
            }
        },
        "Range": {
            "Name": {
                "CH": "远程韧性",
                "EN": "Ranged Poise"
            },
            "Poise": {
                "Endure": 50,
                "Wane1": 3,
                "Wane2": 1,
                "Recover": 3
            }
        }
    }
}

if (April_1st) {
    Object.keys(computer_.MiscText).forEach(k => {
        Object.keys(computer_.MiscText[k]).forEach(j => {
            if (typeof computer_.MiscText[k][j] != 'string') return
            computer_.MiscText[k][j] = computer_.MiscText[k][j].replaceAll('玉衡杯数据库', '库据数杯衡玉').replaceAll('HomDGCat Wiki', 'ikiW taCGDmoH').replaceAll('HomDGCat', 'taCGDmoH').replaceAll('妮可少女', '铌钶钞钕')
        })
    })
}

var links = {
    "Head": [
        {
            "CH": "<b>首页</b>",
            "EN": "<b>Main Page</b>",
            "RU": "<b>Main Page</b>"
        },
        {
            "CH": "<b>原神</b>",
            "EN": "<b>GI</b>",
            "RU": "<b>GI</b>"
        },
        {
            "CH": "<b>星穹铁道</b>",
            "EN": "<b>HSR</b>",
            "RU": "<b>HSR</b>"
        }
    ],
    "GI": [
        {
            "Name": {
                "CH": "怪物",
                "EN": "Monsters",
                "RU": "Противники"
            },
            "Link": "/gi/monster"
        },
        {
            "Name": {
                "CH": "角色 武器 圣遗物",
                "EN": "<color style='font-size:17px;'>Characters Weapons Artifacts</color>",
                "RU": "<color style='font-size:17px;'>Персонажи Оружие Артефакты</color>"
            },
            "Link": "/gi/char"
        },
        {
            "Name": {
                "CH": "刻晴成绩",
                "EN": "Keqing Endgame"
            },
            "Link": "/gi/keqing",
        },
        {
            "Name": {
                "CH": "幽境危战",
                "EN": "Stygian Onslaught"
            },
            "Link": "/gi/3boss"
        },
        {
            "Name": {
                "CH": "深境螺旋",
                "EN": "Spiral Abyss",
                "RU": "Витая Бездна"
            },
            "Link": "/gi/abyss"
        },
        {
            "Name": {
                "CH": "幻想真境剧诗",
                "EN": "Imaginarium Theater",
                "RU": "Театр Воображариум"
            },
            "Link": "/gi/maze"
        },
        {
            "Name": {
                "CH": "祈愿卡池",
                "EN": "Gacha Banners"
            },
            "Link": "/gi/banner",
        },
        {
            "Name": {
                "CH": "剧情记录（新新）",
                "EN": "Quest Logs [NewNew]",
            },
            "Link": "/gi/quests",
            "When": quest_allow,
        },
        {
            "Name": {
                "CH": "生日日历（新）",
                "EN": "Birthday Calendar [New]",
            },
            "Link": "/gi/birthday",
        },
        {
            "Name": {
                "CH": "材料 食物 名片 头像",
                "EN": "<color style='font-size:17px;'>Items Food Namecards Avatars</color>",
                "RU": "<color style='font-size:17px;'>Материал, Еда, Именные карта</color>"
            },
            "Link": "/gi/item"
        },
        {
            "Name": {
                "CH": "成就",
                "EN": "Achievements",
                "RU": "Достижения"
            },
            "Link": "/gi/ach"
        },
        {
            "Name": {
                "CH": "地理志",
                "EN": "Geography Codex",
                "RU": "География"
            },
            "Link": "/gi/geo"
        },
        {
            "Name": {
                "CH": "教程",
                "EN": "Tutorials",
                "RU": "Обучение"
            },
            "Link": "/gi/tut"

        },
        {
            "Name": {
                "CH": "活动",
                "EN": "Events",
                "RU": "Событие"
            },
            "Link": "/gi/event"
        },
        {
            "Name": {
                "CH": "加载提示",
                "EN": "Loading Tips",
                "RU": "Подсказки на экране загрузки"
            },
            "Link": "/gi/load",
        },
        {
            "Name": {
                "CH": "妮可少女的DIY小屋",
                "EN": "",
                "RU": ""
            },
            "Link": "/gi/diy",
        },
    ],
    "SR": [
        {
            "Name": {
                "CH": "怪物",
                "EN": "Monsters"
            },
            "Link": "/sr/monster"
        },
        {
            "Name": {
                "CH": "角色 光锥 遗器",
                "EN": "<color style='font-size:17px;'>Characters Lightcones Relics</color>"
            },
            "Link": "/sr/char"
        },
        {
            "Name": {
                "CH": "云璃成绩",
                "EN": "Yunli Endgame"
            },
            "Link": "/yunli"
        },
        {
            "Name": {
                "CH": "混沌回忆",
                "EN": "Memory of Chaos"
            },
            "Link" : "/sr/chaos"
        },
        {
            "Name": {
                "CH": "虚构叙事",
                "EN": "Pure Fiction"
            },
            "Link" : "/sr/fiction"
        },
        {
            "Name": {
                "CH": "末日幻影",
                "EN": "Apocalyptic Shadow"
            },
            "Link" : "/sr/shadow"
        },
        {
            "Name": {
                "CH": "异相仲裁",
                "EN": "Anomaly Arbitration"
            },
            "Link" : "/sr/arbitration/"
        },
        {
            "Name": {
                "CH": "跃迁卡池",
                "EN": "Gacha Banners"
            },
            "Link" : "/sr/banner"
        },
        {
            "Name": {
                "CH": "差分宇宙 3.8",
                "EN": "Divergent Universe 3.8"
            },
            "Link": "/sr/du31",
        },
        {
            "Name": {
                "CH": "差分宇宙 2.7",
                "EN": "Divergent Universe 2.7"
            },
            "Link": "/sr/du",
        },
        {
            "Name": {
                "CH": "台词数统计",
                "EN": "Line Count"
            },
            "Link" : "/sr/linecount"
        },
        {
            "Name": {
                "CH": "物品",
                "EN": "Items"
            },
            "Link" : "/sr/item"
        },
        {
            "Name": {
                "CH": "教程",
                "EN": "Tutorials"
            },
            "Link" : "/sr/tut"
        },
        {
            "Name": {
                "CH": "成就",
                "EN": "Achievements"
            },
            "Link" : "/sr/ach"
        },
        {
            "Name": {
                "CH": "活动",
                "EN": "Events"
            },
            "Link" : "/sr/event"
        },
        {
            "Name": {
                "CH": "战斗关卡",
                "EN": "Combat Levels"
            },
            "Link" : "/sr/stage"
        },
        {
            "Name": {
                "CH": "效果和名词",
                "EN": "Effects & Nouns"
            },
            "Link" : "/sr/effect"
        },
    ]
}

var cookie_lang = "CH"
document.cookie.split(";").forEach(function (c) { 
    if ((c.includes('lang=')) && !(c.includes('session'))) {
        cookie_lang = c.substring(c.indexOf('lang=') + 5, c.indexOf('lang=') + 7)
    }
});
var AVAILABLE_LANG = ["CH", "EN", "RU", "JP", "KR"]
var is_ru = 0
var param_lang = $('#LANG').val().toUpperCase()
if (param_lang == "ES") param_lang = "SP"
var store_lang = param_lang
if (!AVAILABLE_LANG.includes(store_lang)) {
    store_lang = "CH"
}
var lang3 = "CH"
if (param_lang) {
    var DATE = new Date()
    document.cookie = 'lang=' + store_lang + ';expires=' + new Date(DATE.getTime() + 8640000000).toUTCString() + ';path=/'
    lang3 = store_lang
} else {
    lang3 = cookie_lang
}
var lang2 = lang3
if ((lang2 != "CH") && (lang2 != "EN") && (lang2 != "RU")) lang2 = "EN"
var lang = lang2
if (lang == "RU") lang = "EN"

if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', 'Arial', sans-serif") }
else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

$('body').on('click', '._menu_', function () {
    poplayer({
        header: '<color style=\'color:#fff\'>HomDGCat</color>',
        class: 'yuhengcup',
        width: '95%',
        template: [
            {
                h3: computer_.MiscText.Title[lang],
                style: {
                    color: '#27363E',
                    'margin-top': '5px',
                    'margin-bottom': '25px',
                    'font-size': '40px',
                    'cursor': 'pointer',
                },
                event: {
                    click: function () {
                        window.location.href = '/home'
                    }
                }
            },
            {
                section: [
                    {
                        schedule: {
                            a: '/',
                            t: {
                                span: links.Head[0][lang2],
                                style: {
                                    'font-size': (lang == 'CH') ? '16px' : '15px',
                                    'margin': 'auto'
                                }
                            },
                        },
                        style: {
                            'border': '1.6px solid #7030A0'
                        }
                    },
                    {
                        schedule: {
                            span: links.Head[1][lang2],
                            style: {
                                'font-size': '16px',
                                'margin': 'auto'
                            }
                        },
                        event: {
                            click: function (d) {
                                $('.menu_GI').show()
                                $('.menu_SR').hide()
                                $(d.sender).addClass('active')
                                $(d.sender).siblings().removeClass('active')
                            }
                        },
                        class: 'active'
                    },
                    {
                        schedule: {
                            span: links.Head[2][lang2],
                            style: {
                                'font-size': '16px',
                                'margin': 'auto'
                            }
                        },
                        event: {
                            click: function (d) {
                                $('.menu_GI').hide()
                                $('.menu_SR').show()
                                $(d.sender).addClass('active')
                                $(d.sender).siblings().removeClass('active')
                            }
                        }
                    },
                ],
                class: 'menu_CTRL',
                style: {
                    'margin-bottom': '30px'
                }
            },
            {
                section: [
                    {
                        schedule: {
                            a: '/gi/boss',
                            t: {
                                span: (lang == 'CH') ? '怪物解析' : 'Boss Guides',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/change',
                            t: {
                                span: (lang == 'CH') ? '改动汇总' : 'Track Updates',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/future',
                            t: {
                                span: (lang == 'CH') ? '未来情报' : 'Future Info',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/formulae',
                            t: {
                                span: '公式大全',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        when: lang == 'CH',
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/readable',
                            t: {
                                span: (lang == 'CH') ? '阅读物搜索' : 'Readables Search',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/search',
                            t: {
                                span: (lang == 'CH') ? '文本+剧情搜索' : 'Text+Dialogue Search',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/gi/quests',
                            t: {
                                span: (lang == 'CH') ? '剧情记录' : 'Quest Logs',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        when: quest_allow,
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                            border: '2px solid #7030A0',
                        },
                    },
                ],
                class: 'menu_GI menu_GI_2',
                style: {
                    'margin-bottom': '10px',
                    'margin-top': '-13px',
                    'justify-content': 'center'
                }
            },
            {
                section: [
                    {
                        schedule: {
                            a: '/keq',
                            t: {
                                span: '妮可少女的刻晴足迹',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                            'border-color': '#7030A0',
                        },
                    },
                    {
                        schedule: {
                            a: '/yhb',
                            t: {
                                span: '刻晴生贺：玉衡杯重现',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        when: show_yhb,
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                            'border-color': '#CC0000',
                        },
                    },
                ],
                class: 'menu_GI menu_GI_2',
                style: {
                    'margin-bottom': '10px',
                    'margin-top': '-9px',
                    'justify-content': 'center'
                },
                when: (lang == 'CH')
            },
            {
                section: [
                    {
                        schedule: {
                            a: '/sr/boss',
                            t: {
                                span: (lang == 'CH') ? '怪物解析' : 'Boss Guides',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/change',
                            t: {
                                span: (lang == 'CH') ? '改动汇总' : 'Track Updates',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/future',
                            t: {
                                span: (lang == 'CH') ? '未来情报' : 'Future Info',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/anniversary',
                            t: {
                                span: (lang == 'CH') ? '云璃一周年' : 'Yunli 1st Anniversary',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        when: anniversary_show,
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                            'border-color': '#dd0000'
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/formulae',
                            t: {
                                span: '公式大全',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        when: lang == 'CH',
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/readable',
                            t: {
                                span: (lang == 'CH') ? '阅读物搜索' : 'Readables Search',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                    {
                        schedule: {
                            a: '/sr/search',
                            t: {
                                span: (lang == 'CH') ? '文本+剧情搜索' : 'Text+Dialogue Search',
                                style: {
                                    'margin': 'auto',
                                    'font-weight': 'bold',
                                },
                                class: 'panel'
                            },
                            class: 'panel'
                        },
                        
                        class: 'hover-shadow panelw',
                        style: {
                            width: 'max-content',
                        },
                    },
                ],
                class: 'menu_SR menu_SR_2',
                style: {
                    'margin-bottom': '10px',
                    'margin-top': '-13px',
                    'justify-content': 'center'
                }
            },
            {
                section: function (g) {
                    links.GI.forEach(function (j) {
                        if (!j.Name[lang2]) return
                        $(g.container).render({
                            template: {
                                schedule: {
                                    a: j.Link,
                                    t: {
                                        span: j.Name[lang2],
                                        style: {
                                            'font-size': '19px',
                                            'margin': 'auto'
                                        }
                                    }
                                },
                                class: 'hover-shadow',
                                when: (j.When == undefined) ? 1 : j.When
                            }
                        })
                    })
                },
                class: 'menu_GI'
            },
            {
                section: function (g) {
                    links.SR.forEach(function (j) {
                        $(g.container).render({
                            template: {
                                schedule: {
                                    a: j.Link,
                                    t: {
                                        span: j.Name[lang],
                                        style: {
                                            'font-size': '19px',
                                            'margin': 'auto'
                                        }
                                    }
                                },
                                class: 'hover-shadow'
                            }
                        })
                    })
                },
                class: 'menu_SR'
            }
        ]
    })
    $('.menu_SR').hide()
})

var Loading_Template = {
    template: {
        div: {
            div: [
                {
                    img: $('#IMGPRE').val() + 'images/load.jpg',
                    height: '120px'
                },
                {
                    p: lang == 'CH' ? '加载中' : 'Loading'
                }
            ]
        },
        class: 'lt',
        a: {
            id: "_LT"
        }
    }
}

$('body').render(Loading_Template)
$('.lt').hide()

$('body').on('click', '.lt', function () {
    $('.lt').hide()
})

var IS_TWT = 0

var SHOW_LANG = 0
$('body').on('click', '._translate_', function () {
    SHOW_LANG = 1 - SHOW_LANG
    if (SHOW_LANG) {
        $('h3 .tlsub').show()
    } else {
        $('h3 .tlsub').hide()
    }
})

init_title_save = ''
function init_title(ttl) {
    document.title = ttl
    init_title_save = ttl
}

function switch_title(new_add) {
    document.title = new_add + ' ' + init_title_save
}

function a_section_white() {
    $("head").append('<style type="text/css"></style>');
    var newStyleElement = $("head").children(':last');
    newStyleElement.html('.a_section{color:white!important} .a_section_small{color:white!important} .battle_desc{color:white!important} .battle_stat{color:white!important} .card{color:white!important} .card_2{color:white!important}');
}

function custom_string(k, text_color) {
    if (typeof k == 'string') {
        return k.replaceAll("#", "</color>").replaceAll("@", `<color style='color:#${text_color}'>`).replaceAll("$", "#")
    }
    var out_ = (k.Name ? ('@<b>' + k.Name + '</b>#') : '') + (k.Title ? ('@<b>' + k.Title + '</b>#') : '') + (k.TitleWhite ? ('<b>' + k.TitleWhite + '</b>') : '')
    if (k.Desc) out_ += '<br>' + k.Desc
    if (k.DescList) out_ += '<br>' + k.DescList.join('<br>')
    if (out_.substring(0, 4) == '<br>') out_ = out_.substring(4)
    return out_.replaceAll("#", "</color>").replaceAll("@", `<color style='color:#${text_color}'>`).replaceAll("$", "#")
}

var bg_name = 'bg'
if ($('#NOLAZY').val()) {
    bg_name = 'bg_2'
    $('html').css('overflow-y', 'scroll')
    $('html').css('scrollbar-width', 'none')
}

if (enable_about) {
    $('.links').render({
        span: {
            a: '/about',
            t: {
                span: (lang == 'CH') ? '关于我' : 'About Me'
            },
            class: 'hover-shadow about_button'
        },
        class: 'about_button_wrap'
    })
}

if (Date.now() > Date.parse('2026-01-05T18:00:00+08:00')) {
    $('h3').render({
        p: {
            CH: `今后玉衡杯仅更新正式服内容`,
            EN: `HomDGCat Wiki will only update live game data in the future.`
        }[lang],
        style: {
            'font-size': '16px',
            'text-align': 'center',
            'width': '100%',
            'margin-left': '0',
            'font-weight': 'bold',
        }
    })
} else {
    $('h3').render({
        div: {
            img: '/homdgcat-res/UI/69551bacfa9bb3fbe7cc7194-min.png',
            class: 'newyear_img'
        },
        class: 'newyear_wrap'
    })
}