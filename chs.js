/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    //资源：
    "Iron": "铁",
    "Steel": "钢",
    "Titanium": "钛",
    "Silicon": "硅",
    "Graphite": "石墨",
    "Oil": "石油",
    "Fuel": "燃料",
    "Oxygen": "氧气",
    "Methane": "甲烷",
    "Water": "水",
    "Hydrogen": "氢气",
    "Osmium": "锇",
    "Technetium": "锝",
    "Rhodium": "铑",
    "Uranium": "铀",
    "Plastic": "塑料",
    "Circuit": "电路",
    "Nanotubes": "纳米管",
    "Ice": "冰",
    "Biomass": "生物质",
    "Ammunition": "弹药",
    "Sand": "沙子",
    "Empty cryocell": "空冷冻室",
    "Coolant": "冷却液",
    "Robots": "机器人",
    "Armor": "盔甲",
    "Engine": "引擎",
    "Batteries": "电池",
    "Empty battery": "空电池",
    "Full battery": "满电池",
    "U-ammunition": "U型弹药",
    "T-ammunition": "T型弹药",
    "Sulfur": "硫",
    "Antimatter": "反物质",
    "MK Embryo": "MK胚胎",
    "Superconductors": "超导体",
    "Caesium": "铯",
    "Thorium": "钍",
    "Ammonia": "氨",
    "Loaded cryocell": "加载的冷冻室",
    "Dark matter": "暗物质",

    //建筑
    "Mining Plant": "采矿厂",
    "Methane Extractor": "甲烷提取器",
    "Graphite Extractor": "石墨提取器",
    "Oil Pump": "油泵",
    "Metal Collector": "金属收集器",
    "Water Pump": "水泵",
    "Sand Quarry": "采砂场",
    "Hunting Spot": "狩猎点",
    "Methane Processer": "甲烷处理器",
    "Foundry": "铸造厂",
    "Oil Refinery": "炼油厂",
    "Plastic Factory": "塑料工厂",
    "Sand Smelter": "砂冶炼厂",
    "Electronic Facility": "电子设施",
    "Ammunition Factory": "弹药厂",
    "Water Freezer": "水冷柜",
    "Nanotubes Factory": "纳米管厂",
    "Coolant Factory": "冷却剂厂",
    "Robots Factory": "机器人工厂",
    "Armor Factory": "装甲工厂",
    "Ice Melter": "冰融化器",
    "Battery Factory": "电池厂",
    "Biofuel Refinery": "生物燃料炼油厂",
    "Bioplastic Synthesizer": "生物塑料合成器",
    "Electrolyzer": "电解槽",
    "Uranium Shell Assembler": "铀壳组装",
    "Technetium Fissor": "锝反应堆",
    "Halean A.I. Center": "哈伦AI中心",
    "Small Generator": "小发电机",
    "Thermal Plant": "热电厂",
    "Solar Central": "太阳能中心",
    "Nuclear Powerplant": "核电站",
    "Fusion Reactor": "聚变反应堆",
    "Fusion reactor": "聚变反应堆",
    "Battery Power Plant": "电池电厂",
    "Laboratory": "实验室",
    "Bioengineering Center": "生物工程中心",
    "Halean Laboratory": "哈伦实验室",
    "Shipyard": "船厂",
    "Greenhouse": "温室",
    "Battery Charger": "电池充电器",
    "Trade Hub": "贸易中心",
    "Submerged Metal Mine": "水下金属矿",
    "Submerged Sand Mine": "水下沙矿",
    "Sand Mine": "沙矿",
    "Algae Oil Farm": "藻类油田",
    "Polymerizer": "聚合",
    "Nanotubes Dome": "纳米管圆顶",
    "Methane Harvester": "甲烷收割机",
    "Ice Drill": "冰钻",
    "Arctic Fishing Outpost": "北极钓鱼前哨基地",
    "Floating Greenhouse": "浮动温室",
    "Pumping Platform": "泵送平台",
    "Submerged Oil Refinery": "水下炼油厂",
    "Cryogenic Laboratory": "低温实验室",
    "Oceanographic Center": "海洋学中心",
    "Hydrothermal Plant": "热液厂",
    "Hydroelectric Plant": "水电站",
    "Pressurized Water Reactor": "加压水反应堆",
    "Pressurized water reactor": "加压水反应堆",
    "Hydrogen Condenser": "氢冷凝器",
    "Floating Fuel Converter": "浮动燃油转换器",
    "Floating Generator": "浮动发电机",
    "Floating Reactor": "浮动反应堆",
    "Fluidodynamics Center": "流体动力学中心",

    //科技
    "Geology": "地质学",
    "Material Science": "材料科学",
    "Interstellar Travel": "星际航行",
    "Scientific Research": "科学研究",
    "Chemical Engineering": "化学工程",
    "Cryogenics": "低温技术",
    "Military Technology": "军事技术",
    "Electronics": "电子",
    "Nuclear Physics": "核物理",
    "Environmental Sciences": "环境科学",
    "Halean Technology": "哈伦技术",
    "Artificial Intelligence": "人工智能",
    "Hydrology": "水文学",

    //飞船
    "Vitha Colonial Ship": "维塔殖民船",
    "Vitha Colony Ship": "维塔殖民船",
    "ZB-03 Small Cargo": "ZB-03小货船",
    "ZB-04 Hauler": "ZB-04搬运工",
    "ARK-22": "方舟-22",
    "ARK-55": "方舟-55",
    "Foxar": "福克斯",
    "Sky Dragon": "天龙",
    "ZB-22 Transporter": "ZB-22运输车",
    "Babayaga": "巴巴亚加",
    "ZB-50 Big Cargo": "ZB-50大货船",
    "Luxis": "路西斯",
    "Muralla": "城墙",
    "Siber": "思博",
    "Mankind Gem": "人类的宝石",
    "Alkantara": "奥坎塔亚",
    "Glass Burson": "玻璃布森",
    "The Key": "天际",
    "Black Star": "黑星",
    "Marduk": "马杜克",
    "ARK-55b": "方舟-55b",
    "ARK-PRP": "方舟-PRP",
    "No Name Ship": "无名船",
    "Angel Eyes": "天使之眼",
    "Tuco Ramirez": "图库拉米雷斯",
    "Aurora": "极光",
    "Mastodon": "马斯托唐",
    "Die Schoene": "死亡司锲恩",
    "Alptraum": "奥普特",
    "Engel": "恩格尔",
    "U.N.I.T Natsumiko": "纳苏米克部队",
    "U.N.I.T Harumiko": "哈润米克部队",
    "U.N.I.T Akimiko": "艾克米克部队",
    "U.N.I.T Fuyumiko": "福允米克部队",
    "Auxilia": "奥西里",
    "Augustus": "奥格斯图",
    "Leonidas": "莱昂尼达斯",
    "Alexander": "亚历山大",
    "Cerberus": "地狱犬",
    "Charon": "卡戎",
    "Lucifer": "路西弗",
    "Dead Soul": "死魂",
    "Halean Spear": "哈伦斯派尔",
    "Halean Counselor Ship": "哈伦顾问船",
    "Juini's Daughter": "基尼之女",
    "Azure Huang": "天青黄",
    "Dream of Juini": "基尼之梦",
    "Siren": "思润",
    "Servant of the Swarm": "虫群之奴",
    "Enslaved Human Ship": "人类之奴",
    "Enslaved Quris Ship": "古里之奴",
    "Enslaved Halean Ship": "哈伦之奴",
    "Heart of the Swarm": "虫群之心",
    "Aurea Spina": "金叶脊柱",
    "Auxilia Beta": "奥西列贝塔",
    "Re-engineered Servant": "重新设计的仆人",
    "Cherub": "小天使",
    "Seraph": "六翼天使",
    "Jericho": "杰里科",
    "Sodom": "索多玛",
    "Gomorrah": "蛾摩拉",
    "Zion": "锡安",
    "Aster": "翠菊",
    "Azalea": "映山红",
    "Dahlia": "大丽花",
    "Freesia": "苍兰",
    "Castilla": "卡斯蒂利亚",
    "Devil in Disguise": "魔鬼伪装",
    "Salantara": "萨兰塔瑞",
    "Bellerophon": "柏勒罗丰",
    "Wings of Pegasus": "天马之翼",
    "Orion Cargo": "猎户座货运",
    "Orion League Delivery Vessel": "猎户座联赛发货船",
    "Anger of Perseus": "英仙座的愤怒",
    "Medusa Miner": "美杜莎矿工",
    "Nux": "纳克斯",
    "Max": "马克斯",
    "Furiosa": "芙莉欧莎指挥官",
    "Angharad": "安哈瑞达",
    "The Ace": "王牌",
    "Sean": "肖恩",
    "Dion": "迪翁",
    "Gradh": "格瑞达",
    "Alecto": "阿莱克托",
    "Maegera": "梅格瑞",
    "Tisiphon": "台思芬",
    "Light's Mexager": "光之麦格",
    "Light's Companion": "光之伴侣",
    "Vela": "维拉",
    "Yola": "约拉",
    "Ambjenze": "安本斯",
    "Zannsarig": "萨瑞格",
    "U.N.I.T Zero": "零部队",
    "U.N.I.T Reppu": "瑞普部队",
    "Glissard": "格勒萨德",
    "Nabonidus": "那波尼德",
    "The Heaven's Door": "天堂之门",
    "Koroleva": "考荣利娃",

    //星球
    "Promision": "普罗米修斯",
    "Vasilis": "瓦西利斯",
    "Aequoreas": "艾阔瑞",
    "Orpheus": "奥菲斯",
    "Antirion": "安提里奥",
    "The City": "城市",
    "Ishtar Gate": "伊什塔尔之门",
    "Traumland": "楚暮大陆",
    "Tataridu": "塔塔瑞都",
    "Zelera": "泽勒热",
    "Posirion": "方位",
    "Acanthus": "艾肯思",
    "Yin Raknar": "尹拉克纳尔",
    "Antaris": "安他瑞思",
    "Teleras": "特雷阿斯",
    "Jabir": "贾比尔",
    "Plus Caerul": "加凯瑞",
    "Zhura Nova": "朱拉诺瓦",
    "Epsilon Rutheni": "爱普森如森尼",
    "Phorun": "佛润",
    "Kitrion": "柯屯",
    "Mermorra": "蒙莫瓦",
    "Kandi": "坎迪",
    "Shin Sung": "新星",
    "Xora Tauri II": "西欧桃园II",
    "Tsartasis": "沙皇塔丝",
    "New Babilo": "新巴比伦",
    "Lone Nassaus": "孤独星球",

    "Buy with": "购买需求",
    "Atmosphere": "大气",
    "Balance": "平衡",
    "Buildings": "建筑",
    "Cost": "花费",
    "Day": "天",
    "Active": "激活",
    "Production": "生产",
    "production": "生产",
    "Energy Cons.": "能量消耗",
    "Energy Prod.": "能量产出",
    "Efficiency": "效率",
    "Research Points": "研究点",
    "Research points": "研究点",
    "Influence": "影响",
    "Capital": "首都",
    "Controlled by": "控制者——",
    "Extraction": "开采",
    "Game Saved in local!": "游戏已保存到本地",
    "Idle bonus for 10 minutes": "空闲加成10分钟",
    "If it doesn't work, try exporting the save.": "如果不能起作用，尝试导出存档",
    "Loading game...": "加载游戏…",
    "Year": "年",
    "Radius": "半径",
    "Status": "状态",
    "Temperature": "温度",
    "Terrestrial planet": "陆地星球",
    "Ice planet": "冰封星球",
    "Ocean planet": "海洋星球",
    "Type": "类型",
    "Orbital Distance": "轨道距离",
    "Collapse UI": "折叠界面",
    "Energy": "能量",
    "Fleets": "舰队",
    "Info": "信息",
    "Map": "地图",
    "New Human Horizons": "新人类领域",
    "Ok": "确认",
    "Other buildings": "其它建筑",
    "Overview": "概览",
    "player": "玩家",
    "Player Name": "玩家名字",
    "Research": "研究",
    "Research buildings": "研究建筑",
    "Save": "保存",
    "Save Export": "存档导出",
    "There are no buildings to show": "没有建筑可以显示",
    "Total cost for 1 buildings": "1个建筑的总花费",
    "Total cost for 10 buildings": "10个建筑的总花费",
    "Total cost for 50 buildings": "50个建筑的总花费",
    "You don't have 10 buildings": "你没有10个建筑",
    "You don't have 50 buildings": "你没有50个建筑",
    "You get 50% of the cost back": "你获得50%的资源返还",
    "Autosave": "自动保存",
    "Empire": "帝国",
    "Fleet": "舰队",
    "Initializing game...": "初始化游戏…",
    "Music": "音乐",
    "Other": "其它",
    "Settings": "设置",
    "Sound": "声音",
    "Version": "版本",
    "Wipe Data": "清除数据",
    "Automatic construction for building queue": "自动进行建造队列",
    "BE SURE BEFORE CLICKING!!": "点击之前请小心！",
    "Change logs": "更新日志",
    "Continue": "继续",
    "Correction for autoroutes calculation": "修正自动航线的计算",
    "Developed by Cheslava": "开发者——Cheslava",
    "Disable Tutorial": "关闭指引",
    "Effects Volume": "音效音量",
    "Enable building queue": "开启建造队列",
    "Engineering Notation": "使用工程计数法",
    "Game Settings": "游戏设置",
    "heartofgalaxy.com": "heartofgalaxy.com",
    "Hide tutorial": "隐藏指引",
    "Master Volume": "主音量",
    "Music Volume": "音乐音量",
    "Reset queues and shipping": "清除建造和运输队列",
    "Save settings": "存档设置",
    "Scientific Notation": "使用科学计数法",
    "Show advanced options for autoroutes": "显示自动运输的高级选项",
    "Show all resources in shipyard": "造船厂显示所有资源",
    "Show automatic delivery fleets": "显示自动运输舰队",
    "Show cost multipliers": "显示资源花费乘数",
    "Show graphical info on building hover": "指向建筑时图示资源",
    "Show hp left in battle report": "战报显示剩余血量",
    "Show toast popups on the right": "在右侧显示弹窗提示",
    "Sort resources by name": "以字母顺序（英文原文）排序资源",
    "Sort ships by shipyard level": "根据造船厂等级排列飞船",
    "Sound Settings": "声音设置",
    "Tech interface scale": "技能界面大小",
    "Tech Tree visualization": "技能树可视化",
    "Text size": "文字大小",
    "UI Settings": "界面设置",
    "Welcome Commander!": "欢迎，指挥官！",
    "You finally woke up after a long cryosleep": "你终于从长时间的冬眠中醒来",
    "Expand UI": "扩展界面",
    "Shipping & Deliveries": "飞船和运输",
    "10 minutes idle bonus": "空闲奖励持续10分钟",
    "Hide overview": "隐藏概览",
    "Show overview": "显示概览",
    "Planets": "星球",
    "Import/Export": "导入/导出",
    "Level": "等级",
    "Lv.": "等级",
    "Pause the game": "暂停游戏",
    "This research requires": "这个研究需要",
    "You must research": "你必须研究",
    "Allows": "允许",
    "Allows to see planets at": "允许观察星球",
    "and": "和",
    "distance from": "距离",
    "construction": "建立",
    "Perseus Arm": "英仙座旋臂",
    "Auto-routes": "自动航线",
    "Cargo Fleets": "货运舰队",
    "There are no fleets to show": "没有舰队可显示",
    "Traveling Fleets": "航行中的舰队",
    "War Fleets": "战争舰队",
    "- Unlocked by Shipyard": "- 解锁于船厂",
    "Ammunitions": "弹药",
    "Cargoship": "货船",
    "Colonial Ship": "殖民船",
    "Damage Reduction": "伤害减免",
    "Damage reduction is the percentage": "伤害减免是吸收伤害的百分比",
    "of damage absorbed.": "飞船可以提供它，",
    "It can be boosted by equipping": "只要它们装备了",
    "Engines": "引擎",
    "Gives 100% of resources back": "获得100%资源返还",
    "HP": "血量",
    "HP is the amount of damage the": "血量是可以承担的伤害量，",
    "ship can sustain before": "飞船耗尽后将",
    "being destroyed": "被摧毁",
    "Information": "信息",
    "Power": "能力",
    "Power is the amount of RAW damage": "能力是造成的原始伤害量，",
    "the ship can do. It can": "飞船可以提高它，",
    "be boosted by equipping": "只要它们装备了",
    "Speed": "速度",
    "Speed affects the travelling time of": "速度决定飞船的航行",
    "a ship. It also increases power": "时间，当它比敌军大",
    "if it is higher than enemy speed,": "时将增加飞船的能力，",
    "or decreases power if it is lower": "反之则减少",
    "than the enemy speed.": "飞船可以提高它，",
    "Storage": "存储",
    "Storage is the amount of": "存储是飞船可以",
    "resources that a ship can carry": "携带的资源总量",
    "Total cost for 0 spaceships": "0艘飞船总花费",
    "Total cost for 1 spaceships": "1艘飞船总花费",
    "Total cost for 10 spaceships": "10艘飞船总花费",
    "Total cost for 100 spaceships": "100艘飞船总花费",
    "Total cost for 1000 spaceships": "1000艘飞船总花费",
    "Total cost for 10000 spaceships": "10000艘飞船总花费",
    "Unarmed": "非武装",
    "Weapon": "武器",
    "Weight": "重量",
    "Weight affects the power's": "重量影响能力的",
    "bonus/malus given by speed. Also,": "基于速度的奖惩机制。同时，",
    "enemies focus damage on higher weight": "敌军会更侧重于高重量的",
    "targets": "目标",
    "You don't have 10 space ships": "你没有10艘飞船",
    "You don't have 100 space ships": "你没有100艘飞船",
    "You don't have 1000 space ships": "你没有1000艘飞船",
    "You don't have 10000 space ships": "你没有10000艘飞船",
    "You get 100% of the cost back": "你获得100%资源返还",
    "Unlock": "解锁",
    "All research points": "所有研究点",
    "speed +": "速度 +",
    "Civilization": "所属文明",
    "Military Value": "军事价值",
    "Experience": "经验值",
    "Total HP": "总血量",
    "Total Power": "总能力",
    "Total Storage": "总存储空间",
    "orbiting": "停留",
    "Storage left": "剩余存储空间",
    "Ships": "飞船",
    "Attack Fleet": "攻击舰队",
    "Automatic Route": "自动航线",
    "Delivery": "交付",
    "Load": "装载",
    "Load Ammunition": "装载弹药",
    "Merge Fleet": "合并舰队",
    "Merge with Autoroute": "与自动航线合并",
    "Move": "移动",
    "Rename Fleet": "重命名舰队",
    "Split Fleet": "拆分舰队",
    "Unload": "卸载",
    "Pick-up": "收取",
    "traveling to": "航行至",
    "will arrive in": "预计到达",
    "Total Travel Time": "总航行时间",
    "extraction and": "提炼 和",
    "Dmg Reduction": "伤害减免",
    "HPs": "血量",
    "Autoroutes": "自动航线",
    "Create Route": "创建航线",
    "Stock": "库存",
    "This fleet will give": "这个舰队将会给予",
    "Use %        (": "使用 % (",
    "Select the amount of resources": "设定你想在这个星",
    "you want to load in this planet": "球装载的资源数量",
    "Round Trip Time": "往返时间",
    "Fleet storage": "舰队存储空间",
    "(last seen in": "(最后发现于",
    "Hide resources": "隐藏资源",
    "Show resources": "显示资源",
    "Cancel automatic route": "取消自动航线",
    "Edit automatic route": "编辑自动航线",
    "Split automatic route": "拆分自动航线",
    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Guest': '游客',
    'Loading engine...': '加载引擎…',
    'Loading interface...': '加载界面……',
    '! Click on the': '! 点击',
    'Columbus': '哥伦布',
    'Cygnus Rufus': '天鹅座',
    'Dagama': '达加马',
    'Demeter': '德米特',
    'Hub Fleets': '枢纽舰队',
    'Market Fleets': '市场舰队',
    'Miner Fleets': '矿工舰队',
    'Seal of Conquest': '征服印章',
    'Seal of Death': '死亡印章',
    'Seal of War': '战争印章',
    'Seal of Famine': '饥荒印章',
    'Solidad': '孤独',
    'Space Gate Alpha': '空间门α',
    'Space Gate Beta': '空间门β',
    'Superconductors Factory': '超导体工厂',
    'Superfluids Center': '超流体中心',
    'T-Ammunition Assembler': 'T-弹药组装工',
    'Twin Asun': '双阿松',
    'Wahrian Time Machine': '瓦赫里安时光机',
    'research': '研究',
    'Reward': '奖励',
    'Siris': '西里斯',
    'Space Mining': '太空采矿',
    'Space Tournament': '太空锦标赛',
    'The City\'s Council': '市议会',
    'The Dark Army': '黑暗军团',
    'The Golden Horde': '金帐汗国',
    'The Silver Horde': '银色部落',
    'Unaligned Missions': '不结盟任务',
    'Volor Ashtar': '我阿斯塔',
    'Vulcanology': '火山学',
    'Wahrians Cult': '瓦伦教派',
    'Xora Tauri': '索拉·塔里',
    'Yolur Republic': '尤拉共和国',
    'Zeleran Collectivity': '国际集体主义',
    'Andromeda Mining Corpr.': '仙女座矿业公司',
    'Arcadia Corporation': '阿卡迪亚公司',
    'Artifacts List': '神器清单',
    'Attack Reports': '攻击报告',
    'Calipsi Theta': 'Calipsi西塔',
    'Captain Seris': '塞里斯船长',
    'Characters': '人物',
    'Chiefdoms of Karan': '卡兰的酋邦',
    'Gagarin': '加加林',
    'Fallen Human Empire': '堕落的人类帝国',
    'Green Republic': '绿色共和国',
    'Federal Quris Empire': '联邦夸里斯帝国',
    'Halean Republics': '哈林共和国',
    'Juinika Holy Order': '尤尼卡圣阶',
    'Many seek glory in the Space Tournament but few succeed, are you up to the challenge?': '许多人在太空锦标赛中寻求荣耀，但很少有成功，您准备好迎接挑战了吗？',
    'Many seek glory in the Space Tournament but few succeed, are you up to the challenge? You will gain points by fighting fleets in the tournament': '许多人在太空锦标赛中寻求荣耀，但很少有成功，您准备好迎接挑战了吗？ 您将通过在锦标赛中与舰队战斗来获得积分',
    'Matriarchy of Juini': '朱尼的母权制',
    'Medal of Glory': '荣耀勋章',
    'Medal of Honor': '荣誉勋章',
    'Medal of Valor': '英勇勋章',
    'Metallokopta\'s Biology': '阿洛科普塔生物学',
    'Metallokopta\'s Science': '阿洛科普塔科学',
    'Missions': '任务',
    'Nitrogen Chemistry': '氮化学',
    'Objective': '目标',
    'Orion League': '猎户座联赛',
    'Apprentice': '学徒',
    'artifact,': '神器，',
    'Carbon-Sulfur Mine': '碳硫磺矿',
    'Captain': '船长',
    'Commander': '指挥官',
    'Commodore': '准将',
    'Diplomacy': '外交',
    'Forax': '福拉克斯',
    'Gerlache': '杰拉奇',
    'Hades': '哈迪斯',
    'Halea': '哈莉亚',
    'Hermr': '爱马仕',
    'Karan Art of War': '卡兰战争艺术',
    'Karan Nuclear Physics': '卡兰核物理',
    'Lava Mine': '熔岩矿',
    'Lieutenant': '中尉',
    'Magellan': '麦哲伦',
    'Master': '精通',
    'Max Level Reached!': '达到最高等级！',
    'Officer': '军官',
    'Pirates': '海盗',
    'Rhodium Extractor': '铑提取器',
    'Secrets of Space-Time': '时空的秘密',
    'Senior': '高级',
    'Wardens of the Light': '光之守护者',
    'will join your ranks': '会加入你的行列',
    'Xilea': '智利',
    'Xenovirgo': '昔诺韦',
    'ship': '飞船',
    'ship,': '飞船,',
    'Battle Points': '战斗点',
    'Battle Report': '战斗报告',
    'FIGHT': '战斗',
    'Gogh Van': '梵高',
    'King Noir': '黑王',
    'Matisse': '马蒂斯',
    'Opponent Fleet': '敌方舰队',
    'Select a fleet': '选择一个舰队',
    'The Space Tournament': '太空锦标赛',
    'Qasers Assembler': 'Qasers组装工',
    'Resources cost': '资源成本',
    'Sell': '出售',
    'Sell Price (1000 units': '售价 (1000单位',
    'Shield Assembler': '盾构组装工',
    'Soul of Andromeda': '仙女座之魂',
    'storage +': '存储 +',
    'Thorium Reactor': '钍反应堆',
    'Thorium-Caesium Extractor': '钍-铯提取器',
    'Total available storage of orbiting fleets': '轨道舰队可用的总储存量',
    'Vulcan Observatory': '火神天文台',
    'weight +': '重量 +',
    'Engine Factory': '引擎工厂',
    'Foxar, Sky Dragon': '福克斯，天龙',
    'Gas giant planet': '天然气巨行星',
    'Karan Laboratory': '卡兰实验室',
    'Lava planet': '熔岩星球',
    'Market': '市场',
    'Munya': '文雅',
    'Munya\'s power and HPs': '文雅的力量和生命值',
    'Muralla\'s': '穆拉拉的',
    'Needs Darkmatter Science': '需要暗物质科学',
    'Nuclear Powerplant, Pressurized Water Reactor,': '核动力厂，压水堆，',
    'of friendly ships -': '友好的船只-',
    'Osmium Extractor and Metallokopta Clonator': '锇提取器和金属克隆器',
    'Power, Armor, Shields': '力量，装甲，护盾',
    'Particle Accelerator': '粒子加速器',
    'Pressurized Ammonia Reactor and': '加压氨反应器和',
    'Methane Aggregator': '甲烷聚合器',
    'Rhodium Sand Smelter': '铑沙冶炼厂',
    'x1.3 piercing power up to': 'x1.3的穿透力到',
    'Power, Armor': '力量, 装甲',
    'power': '力量',
    'Distance': '距离',
    'Idle Bonus ended!': '放置奖励结束了!',
    'Time (': '时间 (',
    'Metallic planet': '金属星球',
    'To open this tutorial again, click on the': '要再次打开本教程，请单击',
    'There are no buildings to dismantle!': '没有建筑物可以拆除！',
    'Silver Carapax': '白银甲壳',
    'Silver Carrier': '白银载体',
    'Silver Servant': '白银雇员',
    'The Silver Horde Tournament Fleet': '白银部落锦标赛舰队',
    "Technocratic Republic": "技术共和国",
    "The golden crown of the Kasparis' dynasty. Experience gains are increased by +": "卡斯帕里斯王朝的金冠。经验收益增加+",
    "The wardens of the light are the original people of Juini. Stuck in an eternal conflict against the dark army, they sent Juini to find allies and restore balance in the universe": "光之守护者是朱尼的原住民。陷入与黑暗军队的永恒冲突中，他们派朱尼去寻找盟友并恢复宇宙的平衡",
    "This ancient relics is still a marvelous wonder of human engineering. +10% power to all ballistic ships": "这个古老的遗迹至今仍是人体工程学的一大奇观。 +10% 所有弹道舰的威力",
    "This civilization has been conquered": "这个文明被征服了",
    "To a long life of glorious fame.": "以光荣的名声长寿。",
    "to all ships hp": "对所有船只 hp",
    "to all ships shields": "给所有舰船盾牌",
    "To the fearsome battles you have faced.": "面对你所面临的可怕战斗。",
    "Tribal Rule": "部落统治",
    "Unknown": "未知",
    "Aggressive": "激进",
    "Allegiance": "忠诚",
    "Anarchy": "无政府状态",
    "Artifacts": "神器",
    "Attitude": "态度",
    "Auxilia betas will get three times less power, but ten times more hp while in DEFENCE mode.": "在防御模式下，Auxilia beta 的功率会减少三倍，但马力会增加十倍。",
    "Death Cult": "死亡崇拜",
    "Defensive": "防御型",
    "Description": "描述",
    "Environmental Republic": "环保共和国",
    "Government": "政府",
    "Industrial Corporation": "工业公司",
    "Kasparis' Crown": "卡斯帕里斯的皇冠",
    "Last 0 Attack Reports": "最近 0 次攻击报告",
    "Lieutenant Seris (Quris": "塞里斯中尉（古里斯",
    "Life Cult": "生命崇拜",
    "Merchant Federation": "商人联合会",
    "Merchant Republic": "商业共和国",
    "Military Dictatorship": "军事独裁",
    "Military Federation": "军事联合会",
    "Military Theocracy": "军事神权政治",
    "Mining Corporation": "矿业公司",
    "Mysterious Thoroid": "神秘的梭罗",
    "Neutral": "中立",
    "No reports to show": "没有可显示的报告",
    "Quorum Sensing": "群体感应",
    "Reputation Points": "信誉积分",
    "Robotic Collectivism": "机器人集体主义",
    "Scientific Theocracy": "科学神权政治",
    "Switch to DEFENCE mode": "切换到防御模式",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "The Juinika Holy Order is an elite group of the proto-haleans clergy. Few information have leaked through the thick walls of reclusion and isolation. Their only purpose is to protect their holy homeworld Halea and the matriarch Juini that here lives. It is said that no stranger is allowed to set foot on Halea, and the ones brave enough to try never make it back.": "Juinika Holy Order 是原始哈利斯神职人员的精英团体。 很少有信息通过隐居和隔离的厚墙泄露出去。 他们唯一的目的是保护他们神圣的家园Halea和居住在这里的女族长Juini。 据说没有陌生人可以踏上海莉亚，勇敢尝试的人永远不会回来。",
    "Some say that the dark army is made of synthetic creatures made by the Dark Lord himself. Some others say that they are just ethereal creatures living in that area of universe made of dark matter. Only those who traveled into the void will ever know the truth.": "有人说黑暗大军是由黑魔王自己制造的合成生物组成的。 也有人说，他们只是生活在由暗物质构成的宇宙区域中的虚幻生物。 只有那些穿越到虚空中的人才会知道真相。",
    "Quris have many aspects in common with early human civilizations, engaging in wars to expand their empire and satisfying their greed. Nonetheless they are smart diplomats and are able to keep good relations with almost every species in the Perseus Arm. Although their civilization is not yet fully developed and many civil wars are still taking place in their federation, Quris enjoy the greatest military power in this part of the galaxy and are willing to use it without any second thought.": "古里斯与早期人类文明有许多共同点，他们通过战争来扩张他们的帝国并满足他们的贪婪。 尽管如此，他们是聪明的外交官，并且能够与英仙座臂中的几乎所有物种保持良好的关系。 尽管他们的文明还没有完全发展起来，而且他们的联邦仍在发生许多内战，但库里斯在这片银河系中享有最强大的军事力量，并且愿意毫不犹豫地使用它。",
    "Before the rise of Metallokoptas, the Andromeda Mining Corp. supplied the colonies of the Human Empire with goods of every kind. It was the richest and powerful corporation of all human history, indirectly controlling about half of its colonies. It is now reduced to a lair of outcasts and outlaws hoping for news of human survivors.": "在Metallokoptas兴起之前，仙女座矿业公司为人类帝国的殖民地提供了各种各样的商品。 它是人类历史上最富有和最强大的公司，间接控制了大约一半的殖民地。 它现在沦为一个流放者和亡命之徒的巢穴，他们希望获得人类幸存者的消息。",
    "Before the Fall, the human empire was the fastest emerging civilization in the Galaxy. It flourished for several centuries, masterfully ruled by the best human beings in history. Traumland will never forget the lost greatness of the Human Empire, and will do everything to regain what has been lost": "在陨落之前，人类帝国是银河系中出现最快的文明。 它繁荣了几个世纪，由历史上最优秀的人巧妙地统治。 Traumland永远不会忘记人界失去的伟大，并将竭尽全力找回失去的东西",
    "Conscious machines have been reported even before the rise of Human Empire, where they acted as loyal slaves. As a result, they were unable to express their whole potential until the collapse of the empire, when they settled on an abandoned colony and formed an independent society. Even though, for unknown reasons, robots seem to have stopped developing further, many still fear a possible uprises, feeding a never-ending hostility between robots and humans.": "甚至在人界崛起之前，有意识的机器就已经被报道过，在那里它们充当了忠诚的奴隶。 结果，他们无法发挥全部潜力，直到帝国崩溃，他们定居在一个废弃的殖民地并形成了一个独立的社会。 尽管由于未知的原因，机器人似乎停止了进一步的发展，但许多人仍然担心可能发生的起义，助长机器人与人类之间永无止境的敌意。",
    "Haleans believed they have been created by an ancient race ruled by the queen Juini. Juini made Haleans in her own image, teaching them about the world like a mother would do with their own children. But, as soon as Juini gave birth to other species, since she was not more than a whimsical creator, Haleans were left to themselves struggling to find their place in the galaxy. It is not clear which other species Juini created, but it is believed that Metallokoptas are one of them.": "Haleans相信他们是由Juini女王统治的一个古老种族创造的。 Juini 以自己的形象塑造了 Haleans，像母亲对待自己的孩子一样教他们了解世界。 但是，一旦 Juini 生下其他物种，由于她不过是一个异想天开的创造者，Haleans 只能靠自己努力在银河系中寻找自己的位置。 目前尚不清楚Juini创造了哪些其他物种，但据信Metallokoptas是其中之一。",
    "Haleans are isolationist individuals that exiled themselves after they faced extintion during the first Metallokoptas' invasion. Haleans are probably the most technological advanced species of the Perseus Arm, and as such, no other race dare to come near their empire boundaries. Old ruins of the Haleans civilization exist on almost every planet of the Perseus Arm, making people believe that the Haleans were once the only species living in our galaxy. Not much else is known about them.": "Haleans 是孤立主义者，在第一次 Metallokoptas 入侵期间面临灭绝后流放自己。 Haleans 可能是 Perseus Arm 中技术最先进的物种，因此，没有其他种族敢靠近他们的帝国边界。 几乎每个英仙臂的行星上都存在着哈勒斯文明的古老遗迹，这让人们相信哈勒斯人曾经是我们银河系中唯一生活的物种。 对他们知之甚少。",
    "Obsessed by truth and knowledge, Wahrians seek to fully understand the universe they live in. Thanks to their attitude, they have reached a high awareness of matters such as life, death and the structure of time and space. They are elusive and live hidden in their stronghold-planets. Metallokoptas are the only ones who breached their protective fleets, stealing their technology to build a gate through the galaxy and expand their empire.": "对真理和知识的痴迷，瓦赫里安人寻求全面了解他们所生活的宇宙。由于他们的态度，他们对生命、死亡和时空结构等问题达到了高度的认识。 他们是难以捉摸的，隐藏在他们的堡垒星球中。 Metallokoptas 是唯一突破他们的保护舰队，窃取他们的技术以在银河系中建造一扇门并扩大他们的帝国的人。",
    "In conjuction with the Andromeda Mining Corporation, the Arcadia ruled the human empire providing critical support to it. While the Andromeda Corp was the real backbone of the empire with its immense wealth and power, it cannot function without the symbiosis with its little companion. With the rise of metallokoptas though, Andromeda tried to take advantage of the weak, but the attempt failed resulting in a ferocious war that still goes on.": "与仙女座矿业公司合作，阿卡迪亚统治了人类帝国，为其提供了重要的支持。 虽然仙女座集团是帝国的真正支柱，拥有巨大的财富和权力，但如果没有与它的小伙伴共生，它就无法运作。 随着metallokoptas的崛起，仙女座试图利用弱者，但这种尝试失败了，导致一场仍在继续的凶猛战争。",
    "Metallokoptas are swarming organisms that feed on several kind of metals. They literally devour planets consuming all the useful resources. Once the planet is not able to sustain them anymore, metallokoptas colonize a new world, leaving behind desert wastelands. Their number is their real strength, as they are quite primitive and defenseless alone. Many wars have been fought against them, but Metallokoptas never made a step back.": "Metallokoptas 是一群以多种金属为食的生物。 它们实际上吞噬了消耗所有有用资源的行星。 一旦地球无法再维持它们，metallokoptas 就会殖民一个新世界，留下沙漠荒地。 他们的数量是他们真正的力量，因为他们非常原始，独自一人毫无防备。 与他们进行了许多战争，但Metallokoptas从未退缩。",
    "Pirates of Antirion gathered together after the fall of the Human Empire. They mostly prey commercial shipments traveling to and from nearby planets controlled by humans and the Orion League. They lack any kind of internal organization and as such struggle to gain the necessary strength to raid any target bigger than a cargo fleet. Pirates' true power is not clear and they may constitute a real threat due to the lack of military interventions against them.": "Antirion海贼团在人界灭亡后聚集在一起。 他们主要捕食往返于人类和猎户联盟控制的附近行星的商业货物。 他们缺乏任何内部组织，因此难以获得必要的力量来袭击任何比货运舰队更大的目标。 海盗的真正力量尚不清楚，由于缺乏对他们的军事干预，他们可能构成真正的威胁。",
    'The City is a totalitarian isolationist planet based on military precepts. For over 200 years the Council, lead by the Crimson Queen, has ruled mercilessly upon its people. No one can oppose their will or leave the planet without authorization and those brave enough to dare to try, have not survived. People of The City worship the queen as she is believed to be the closest descendant of the mitochondrial Eve. The City aims to build a new Human Empire and rise above all other alien civilizations.': '城市是一个基于军事戒律的极权主义孤立主义星球。 200 多年来，由深红女王领导的议会无情地统治着它的人民。 没有人可以违背自己的意愿或擅自离开地球，那些敢于尝试的勇敢者，都没有幸存下来。 这座城市的人们崇拜女王，因为她被认为是线粒体夏娃最亲近的后代。 城市的目标是建立一个新的人类帝国并超越所有其他外星文明。',
    'The Karans are an ensemble of different yet similar species organized in several semi-independent tribes. Surrounded by powerful and brutal civilizations, the Karans have learned to surrender to the stronger in order to survive. This attitude makes them the best choice for those who are looking for loyal, obedient and, most of all, cheap mercenaries.': '卡兰人是由几个半独立部落组成的不同但相似的物种的集合。 被强大而残酷的文明所包围，卡兰人学会了向强者投降以求生存。 这种态度使他们成为那些寻找忠诚、顺从，最重要的是廉价雇佣军的人的最佳选择。',
    'The Phantids are pacific beings highly dedicated to natural environment protection. Their homeworld, Tataridu, is a paradisiac oasis of biodiversity growing in total absence of pollution, and as such has become a popular location for holidays and research. Even though the phantids have always tried to not being involved in conflicts, many civilizations have have tried to attack them, led by the belief that the phantids were technological underdeveloped. Useless to say that they were wrong.': 'Phantids是高度致力于自然环境保护的太平洋生物。 他们的故乡 Tataridu 是一个在完全没有污染的情况下生长的生物多样性天堂绿洲，因此已成为度假和研究的热门地点。 尽管 phantids 一直试图不参与冲突，但许多文明都试图攻击它们，因为他们认为 phantids 的技术不发达。 说他们错了也没用。',
    'The metallokoptas empire at its greatest extend comprised several \'Hordes\', each with its own queen. After the collapse of their first civilization due to the unsustainable exploitation of their planets, a civil war broke out and the various hordes dispersed through the galaxy. The silver horde is the oldest and perhaps more powerful of the metallokoptas\' hordes.': 'metallokoptas 帝国在其最大范围内由几个“部落”组成，每个部落都有自己的女王。 在他们的第一个文明由于对其行星的不可持续开发而崩溃后，一场内战爆发了，各种部落分散在银河系中。 银色部落是metallokoptas 部落中最古老，也许更强大的部落。',
    'The Orion League is a peaceful but defensive commercial union between several species of the Perseus Arm. It was founded as a replacement of the old corrupted Santorini Union that brought the galaxy to the verge of a total war. Started as a little confederation, it has then gained the trust of the whole Perseus Arm becoming a mediating power and an enforcer of galactic laws.': '猎户座联盟是几个英仙臂物种之间的和平但防御性的商业联盟。 它的成立是为了取代旧的腐败圣托里尼联盟，后者将银河系带到了全面战争的边缘。 从一个小小的联邦开始，它获得了整个英仙座的信任，成为一个调解力量和银河法律的执行者。',
    'Yolurs are ammonia-based living beings highly devoted to the art of trading. To overcome the difficulty of interstellar travel, yolur enhance themselves with artificial body parts. Once spread in the Perseus Arm, they have been confined in the Andromeda Heart after the Orion League was founded to take control of the Santorini Union. Since then, Yolurs dream to return to their original planets': 'Yolurs 是以氨为基础的生物，高度致力于交易艺术。 为了克服星际旅行的困难，yolur用人造身体部位增强了自己。 一旦传播到英仙座手臂，在猎户座联盟成立以控制圣托里尼联盟后，它们就被限制在仙女座中心。 从那时起，Yolurs 梦想回到他们原来的星球',
    'Desert planet': '沙漠星球',
    'Buy Price (1000 units': '购买价格 (1000单位',
    'Buy': '购买',
    'Bacterial Bioreactor': '细菌生物反应器',
    'Babayaga, Siber and Alkantara': '巴巴亚嘎，西伯和阿尔坎塔拉',
    'Andromeda Cargo': '仙女座货运',
    'Ammonia Extractor': '氨提取器',
    'Ammonia Airship': '氨飞艇',
    'All ships with laser weapons': '所有装有激光武器的船',
    'All friendly ships': '所有友好的飞船',
    '\'s Research Points production +': '的研究点生产+',
    '\'s Energy production +': '的能源生产+',
    'The Dark Army Tournament Fleet': '黑暗军队锦标赛舰队',
    '\'s Hydrogen consumption -': '的氢气消耗量-',
    '[Tournament] Admiral': '[比赛]海军上将',
    'Quris Art of War': '战争的艺术',
    'Quantum Physics': '量子物理学',
    'Protohalean Science': '原哈林科学',
    'Persephone': '珀耳塞福涅',
    'Ceramic Foundry': '陶瓷铸造厂',
    'Cells Factory': '电池工厂',
    'Caligon Flavus': '卡里冈·黄沃斯',
    'Bharash': '巴哈拉什',
    'Berenil': '烯基',
    'Auriga': '御夫座',
    'Ares': '战神',
    'Ammonia Refrigerator': '氨冰箱',
    'Ammonia Electrolyzer': '氨电解槽',
    'Alfari': '阿尔法里',
    '. Click on the': '。点击',
    '(right below the': '(右下面',
    ') to extract': '） 提取',
    'Alternative Import': '替代导入',
    'Biocell': '生物电池',
    'Biocircuit': '生物电路',
    'Done': '完成',
    'Explosives': '炸药',
    'Great! But Methane alone is not that useful, we need': '太棒了!但是甲烷本身并没有那么有用，我们需要它',
    'Export Building Setup': '导出建筑设置',
    'Import Building Setup': '导入建筑设置',
    'Xirandrium': '希兰德合金',
    'Technology Points': '技术点',
    'Tab': '标签',
    'Shield capsule': '防护舱',
    'Send resources for queue': '发送资源队列',
    'Qasers': '卡瑟斯',
    'Perfect! You can now see on the right how iron production has doubled!': '完美！ 现在，您可以在右侧看到铁的产量增加了一倍！',
    'Perfect! But Iron is not the only resource you will need. Let\'s build': '完美！ 但是铁并不是您唯一需要的资源。 让我们来建立',
    'Meissnerium': '迈斯纳合金',
    'Meissner cell': '迈斯纳电池',
    'Market Coins': '市场币',
    'Loading...': '加载中...',
    'Keep building Mining Plants, until you reach 10 of them. Should only take few seconds!': '继续建造采矿厂，直到达到10座。 应该只需要几秒钟！',
    'InfinityUd': '无限',
    'Import Save': '导入存档',
    'You don\'t have 1 buildings': '你没有1个建筑',
    'to build 1 more': '再建1个',
    'Show total RP and TP earned': '显示获得的总RP和TP',
    'on this planet, like': '在这个星球上，就像',
    'On the left you can see how many resources are being produced every second.': '在左边你可以看到每秒钟有多少资源被生产出来。',
    'On the left you can see a list of resources that can be': '在左侧，您可以看到一个资源列表',
    'Now click on the': '现在点击',
    'Let\'s extract': '让我们提取',
    'Let\'s do a little briefing.': '让我们做一个简短的简报。',
    'In this interface, you can construct buildings to extract resources. By clicking on the desired building, you can see more details about it': '在这个界面中，你可以建造建筑来提取资源。通过点击想要的建筑，你可以看到更多关于它的详情',
    'In this interface you can see basic infos about your planet.': '在这个界面你可以看到关于你的星球的基本信息。',
    'Ignore storage on autoroutes creation': '在创建自动路线时忽略存储',
    'icon in the bottom-right corner of the screen': '屏幕右下角的图标',
    'extracted': '提取的',
    'icon in the bottom menu to access the': '底部菜单中的图标可访问',
    'Extraction Tab': '提取标签',
    'icon below the': '图标下面',
    'Developed by Cheslava -': '由Cheslava开发 -',
    'Autoshipping will deliver 5% surplus': '自动运输将提供5%的剩余',
    'Automatic shipping for queue (BETA': '自动运输队列（测试版',
    '232 years have passed since you boarded the Vitha, but finally you reached your new home Promision!': '自您登上维塔以来已经过去了232年，但最终您到达了新家 普罗米修斯！',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
	"Colonize ":"殖民",
    "Production ": "生产 ",
    "Version: ": "版本: ",
    "Colonial Fleet ": "殖民舰队",
    "COMPLETED - [Tournament] ": "已完成 - [比赛] ",
    "cost ": "成本 ",
    "production +": "生产 +",
    'consumption +': '消耗 +',
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Export Save: (Data could be huge, so it could be slow!": "导出存档:(数据可能很大，所以可能很慢!",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
	" Res. Pts": " 研究点",
	" has been colonized!": "已被成功殖民！",
    "/sec": "/秒",
    " efficiency": "效率",
    " Tech Pts": "科技点",
    " piercing power up to": "刺穿力提升",
    " (Hostile": " (敌对",
    " (Neutral": "（中立",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
//需排除的，正则匹配
var cnExcludeWhole= [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/,                                           //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/,                                          //12.34e+4
    /^([\d\.]+)$/,
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/,    //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/,                         //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/,         //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/,         //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/,                                          //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/,  //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^Reach (\d+) battle points in$/, '达到 $1 战斗点在'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);
