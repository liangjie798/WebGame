const characters = [
  {
    name: "李浩宇",
    role: "体育部部长",
    school: "西安外事学院工学院大数据技术大二学生",
    dorm: "十号楼",
    summary: "男，西安外事学院工学院体育部部长，喜欢打王者荣耀、玩抽象、打篮球，李瑞丹男朋友。",
    clues: ["体育部", "部长", "十号楼", "李瑞丹男朋友"],
  },
  {
    name: "邱国柱",
    role: "体育部副部长",
    school: "西安外事学院工学院电气工程及其自动化大二学生",
    dorm: "八号楼北",
    summary:
      "男，西安外事学院工学院体育部副部长，喜欢库里、打无畏契约（瓦）和三角洲，与苏桂玉为同班同学，李浩宇的前男友，暗恋苏桂玉，宿舍在八号楼北。",
    clues: ["体育部", "副部长", "八号楼北", "鱼化湖夜跑", "暗恋苏桂玉"],
  },
  {
    name: "王乐乐",
    role: "体育部副部长",
    school: "西安外事学院工学院计算机科学与技术大二学生",
    dorm: "11号楼",
    summary: "西安外事学院工学院体育部副部长，喜欢抽爱喜香烟和打麻将，宿舍在11号楼。",
    clues: ["体育部", "副部长", "11号楼"],
  },
  {
    name: "苏桂玉",
    role: "电气工程及其自动化大二班长",
    school: "工学院电气工程及其自动化大二班长",
    dorm: "7号楼",
    summary:
      "男，不是体育部人员，不参与体育部事务。喜欢吃美食、玩金铲铲之战，宿舍在7号楼。",
    clues: ["非体育部", "7号楼", "金铲铲之战", "不参与体育部事务"],
  },
  {
    name: "李瑞丹",
    role: "人文艺术学院学生会主席",
    school: "西安外事学院人文艺术学院学生会主席",
    dorm: "11号楼",
    summary:
      "女，李浩宇女朋友，不是体育部人员，不参与体育部事务，不喜欢吃蒸饺，喜欢吃小笼包，宿舍在11号楼。",
    clues: ["非体育部", "11号楼", "小笼包", "不吃蒸饺"],
  },
  {
    name: "高雨禾",
    role: "体育部部员",
    school: "西安外事学院工学院机器人工程专业大一学生",
    dorm: "4号楼",
    summary: "女，高锴女朋友，喜欢投喂高锴，爱打瓦，闫百慧舍友兼同班同学，宿舍在4号楼。",
    clues: ["体育部", "4号楼", "爱打瓦"],
  },
  {
    name: "高锴",
    role: "体育部部员",
    school: "大一学生",
    dorm: "十号楼",
    summary: "男，高雨禾男朋友，喜欢伟人著作，爱打篮球，脚底扎了钉子，在屁股上打了破伤风，宿舍在十号楼。",
    clues: ["体育部", "十号楼", "爱打篮球"],
  },
  {
    name: "闫百慧",
    role: "体育部部员",
    school: "大一学生",
    dorm: "4号楼",
    summary: "女，大一学生，与高雨禾同班同学兼舍友，宿舍在4号楼。",
    clues: ["体育部", "4号楼", "不参加周期赛"],
  },
  {
    name: "刘伊静",
    role: "体育部部员",
    school: "计算机科学与技术大一学生",
    dorm: "9号楼",
    summary: "女，外号拌面，会说辣椒炒肉拌面（湖南发音），与赵曼诗是舍友，宿舍在9号楼。",
    clues: ["体育部", "9号楼", "外号拌面"],
  },
  {
    name: "赵曼诗",
    role: "体育部部员",
    school: "工学院数据科学与大数据技术大一学生",
    dorm: "9号楼",
    summary: "女，外号408/曼曼，喜欢打瓦，与副部长邱国柱为老乡，宿舍在9号楼。",
    clues: ["体育部", "9号楼", "408/曼曼", "老乡"],
  },
  {
    name: "吴佳怡",
    role: "体育部部员",
    school: "物联网工程大一学生",
    dorm: "九号宿舍楼",
    summary:
      "女，正在备战计算机二级考试，外号羊驼，体育部吉祥物，与马爽、刘伊静、赵曼诗在同一宿舍楼（九号宿舍楼）。",
    clues: ["体育部", "九号宿舍楼", "羊驼", "吉祥物"],
  },
  {
    name: "马爽",
    role: "体育部部员",
    school: "电气工程及其自动化大一学生、班长",
    dorm: "9号楼",
    summary:
      "女，喜欢打无畏契约，被西安外事学院工学院学生权益部部员拐走，喜欢说额贼、滚（关中话发音）、哎呀，体育部部长李浩宇老乡，宿舍在9号楼。",
    clues: ["体育部", "9号楼", "李浩宇老乡", "无畏契约"],
  },
  {
    name: "苏嘉伟",
    role: "体育部部员",
    school: "电气工程及其自动化大一学生",
    dorm: "十号楼",
    summary: "男，与马爽为同班同学，曾因夜不归宿被导员谈话，妻管严，爱喝酒，宿舍在十号楼。",
    clues: ["体育部", "十号楼", "爱喝酒"],
  },
  {
    name: "蒋驭东",
    role: "体育部部员",
    school: "大一学生",
    dorm: "十号楼",
    summary:
      "男，喜欢抽芙蓉王，犀利的语言攻击，爱打篮球，想打无畏契约但是用的MacBook没办法打无畏契约，宿舍在十号楼。",
    clues: ["体育部", "十号楼", "MacBook", "芙蓉王"],
  },
  {
    name: "鲍施序",
    role: "体育部部员",
    school: "大一学生",
    dorm: "十号楼",
    summary: "男，喜欢玩无畏契约，无畏契约重度患者，网瘾少年，宿舍在十号楼。",
    clues: ["体育部", "十号楼", "无畏契约"],
  },
  {
    name: "刘瀚艇",
    role: "特别角色",
    school: "上帝、神",
    dorm: "八号楼北",
    summary: "男，上帝、神，是一个非常有能力的人，他可以帮助其他人，也可以帮助其他人解决问题，宿舍在八号楼北。",
    clues: ["特别角色", "八号楼北", "神秘支援"],
  },
];

const evidence = [
  {
    title: "事件1",
    text: "苏桂玉找邱国柱去吃阿丽娅新疆拌面（苏桂玉一次能吃7份）。",
  },
  {
    title: "事件2",
    text: "体育部周期赛为核心，体育部不参与比赛，但是充当裁判角色。",
  },
  {
    title: "事件3",
    text: "闫百慧、苏桂玉、李瑞丹不参与周期赛。",
  },
  {
    title: "事件4",
    text: "邱国柱每晚要在鱼化湖夜跑。",
  },
  {
    title: "着装要求",
    text: "体育部活动服装要求：佩戴西安外事学院工学院体育部工牌（挂脖吊绳式工牌）、穿依米青年志愿者服务队红色拉链马甲，后背印有依米青年志愿者服务队，前面左胸印有工学院字样。",
  },
];

const loreSources = [
  {
    title: "鱼化湖与校园文化景观",
    text:
      "学校公开介绍中提到，鱼化湖是标志性景观，校园内还有化鱼成龙石刻、雨花公主雕塑、思圣塔、正蒙书院等文化景观。",
    url: "https://www.xaiu.edu.cn/info/1030/17740.htm",
  },
  {
    title: "建校时间",
    text: "学校官网“关于我们”页面显示，西安外事学院创建于1992年。",
    url: "https://www.xaiu.edu.cn/wsjj/gywm.htm",
  },
  {
    title: "鱼化龙文化使命",
    text:
      "公开校园文化介绍里提到学校使命“仰信笃志、化鱼成龙”，校训为“明道、修身、利他、共荣”。",
    url: "https://www.xaiu.edu.cn/info/1030/17740.htm",
  },
  {
    title: "鱼化龙戏剧节",
    text:
      "学校近年的戏剧节公开报道里出现过《深宅惊梦》《失明症漫记》《奥菲利亚的影子剧院》等剧目，给本案的恐怖氛围提供了灵感。",
    url: "https://www.xaiu.edu.cn/info/1030/16923.htm",
  },
];

const missions = [
  {
    tag: "任务一",
    title: "接取任务：先找到回声的起点",
    objective: "调查器材室广播、湖边景观和历史残片，确定回声最先来自哪里。",
    opening: [
      {
        speaker: "旁白",
        tone: "narrator",
        text: "操场灯还没完全亮，器材室监控先传回一段失真的广播。画面里没有人，只有风。",
      },
      {
        speaker: "旧广播",
        tone: "echo",
        text: "不是操场先开始……是那片湖先听见了名字。",
      },
      {
        speaker: "档案室",
        tone: "clerk",
        text: "先别猜答案。去调查，再回来汇报。",
      },
    ],
    actions: [
      {
        id: "inspect-broadcast",
        label: "检查失真广播",
        type: "explore",
        clue: "事件4明确写着：邱国柱每晚要在鱼化湖夜跑",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "我先回看原始设定，事件4写得很直接：邱国柱每晚要在鱼化湖夜跑。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "很好，至少“鱼化湖”这个地点不是空穴来风，而是原设定里已经明确存在的行动轨迹。",
          },
        ],
      },
      {
        id: "inspect-lore",
        label: "翻阅景观公开资料",
        type: "explore",
        clue: "公开资料里最显眼的湖是鱼化湖",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "公开资料里反复出现鱼化湖，还和思圣塔、化鱼成龙石刻放在一起。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "这样一来，游戏里的湖边异闻就同时踩住了原设定事件4和公开资料灵感。",
          },
        ],
      },
      {
        id: "resolve-lake",
        label: "提交结论：回声起点是鱼化湖",
        type: "resolve",
        primary: true,
        requires: ["inspect-broadcast", "inspect-lore"],
        successSummary: "你确认回声的第一落点是鱼化湖。",
        successResponse: [
          {
            speaker: "你",
            tone: "player",
            text: "我确认了，回声最先指向的不是操场，而是鱼化湖；这和原设定里的夜跑地点完全一致。",
          },
          {
            speaker: "系统",
            tone: "system",
            text: "任务完成。新的异常标记已经在湖边石刻附近出现。",
          },
        ],
      },
      {
        id: "wrong-playground",
        label: "提交结论：回声起点是操场",
        type: "fail",
        response: [
          {
            speaker: "档案室",
            tone: "error",
            text: "不对，广播是在否定操场。先把资料看全。",
          },
        ],
      },
    ],
  },
  {
    tag: "解密关卡",
    title: "解密关卡：7份拌面的邀约",
    objective: "结合事件1与人物档案，确认主动发出阿丽娅新疆拌面邀约的人。",
    opening: [
      {
        speaker: "旁白",
        tone: "narrator",
        text: "器材箱里压着一张油渍便签，上面只写着“阿丽娅”“7份”“别迟到”。",
      },
      {
        speaker: "档案室",
        tone: "clerk",
        text: "这是第一道人物解密。不是找谁去吃，而是找谁发起了这次邀约。",
      },
    ],
    actions: [
      {
        id: "inspect-event1-note",
        label: "检查事件1原文",
        type: "explore",
        clue: "事件1写明：苏桂玉找邱国柱去吃阿丽娅新疆拌面",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "事件1原文直接写着：苏桂玉找邱国柱去吃阿丽娅新疆拌面。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "不错，主客关系已经有了轮廓。",
          },
        ],
      },
      {
        id: "inspect-seven-servings",
        label: "核对“7份”指向谁",
        type: "explore",
        clue: "苏桂玉一次能吃7份",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "便签上的“7份”不是随机数字，它对应苏桂玉一次能吃7份。",
          },
          {
            speaker: "旧广播",
            tone: "echo",
            text: "数字不是装饰，数字会指人。",
          },
        ],
      },
      {
        id: "inspect-classmate-link",
        label: "查看同班关系",
        type: "explore",
        clue: "苏桂玉与邱国柱是同班同学",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "档案也对上了，苏桂玉和邱国柱本来就是同班同学。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "那么这次约饭就不只是饮食偏好，而是关系链条上的起点。",
          },
        ],
      },
      {
        id: "resolve-inviter",
        label: "提交结论：邀约者是苏桂玉",
        type: "resolve",
        primary: true,
        requires: ["inspect-event1-note", "inspect-seven-servings", "inspect-classmate-link"],
        successSummary: "你确认事件1的主动邀约者是苏桂玉。",
        successResponse: [
          {
            speaker: "你",
            tone: "player",
            text: "这张便签最终指向苏桂玉，主动发起邀约的人是他。",
          },
          {
            speaker: "系统",
            tone: "system",
            text: "关卡破解。案件正式从“地点谜团”进入“人物链条”阶段。",
          },
        ],
      },
      {
        id: "wrong-inviter",
        label: "提交结论：邀约者是邱国柱",
        type: "fail",
        response: [
          {
            speaker: "档案室",
            tone: "error",
            text: "不对，事件1的主语很明确，先看谁找谁。",
          },
        ],
      },
    ],
  },
  {
    tag: "任务二",
    title: "接取任务：石刻上的暗号",
    objective: "调查湖边石刻与校园精神残片，找出被涂抹出来的核心词。",
    opening: [
      {
        speaker: "旁白",
        tone: "narrator",
        text: "你赶到湖边时，石刻表面像被人重新描过，红色痕迹还没干透。",
      },
      {
        speaker: "旧广播",
        tone: "echo",
        text: "先别找人，先找精神。找不到那四个字，你就听不懂下一段回声。",
      },
    ],
    actions: [
      {
        id: "inspect-stone",
        label: "查看湖边石刻",
        type: "explore",
        clue: "石刻与“化鱼成龙”有关",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "石刻名字里最醒目的，是“化鱼成龙”这四个字。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "这不像普通涂鸦，更像有人故意拿学校文化做暗号。",
          },
        ],
      },
      {
        id: "inspect-mission",
        label: "检索校园精神资料",
        type: "explore",
        clue: "学校使命里也出现“化鱼成龙”",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "公开资料写着“仰信笃志、化鱼成龙”，石刻和学校精神被人串到一起了。",
          },
          {
            speaker: "旧广播",
            tone: "echo",
            text: "你终于开始听懂我在说什么了。",
          },
        ],
      },
      {
        id: "resolve-stone",
        label: "提交结论：石刻暗号是化鱼成龙",
        type: "resolve",
        primary: true,
        requires: ["inspect-stone", "inspect-mission"],
        successSummary: "你识别了石刻上的核心暗号“化鱼成龙”。",
        successResponse: [
          {
            speaker: "你",
            tone: "player",
            text: "石刻真正要我认出的，是“化鱼成龙”。",
          },
          {
            speaker: "系统",
            tone: "system",
            text: "任务完成。旧档案室里出现了新的年份线索。",
          },
        ],
      },
      {
        id: "wrong-mingdao",
        label: "提交结论：石刻暗号是明道修身",
        type: "fail",
        response: [
          {
            speaker: "档案室",
            tone: "error",
            text: "不对，那是校训的一部分，不是湖边石刻的核心词。",
          },
        ],
      },
    ],
  },
  {
    tag: "任务三",
    title: "接取任务：找出年份锁",
    objective: "比对潮湿旧档案与学校公开介绍，找到回声被绑定的年份。",
    opening: [
      {
        speaker: "档案室",
        tone: "clerk",
        text: "潮湿的旧档案翻到最后一页时，纸像在发冷。上面写着：回声和学校第一次被命名在同一年。",
      },
      {
        speaker: "旁白",
        tone: "narrator",
        text: "这不只是恐怖氛围，更像有人故意把真实历史钉进今晚的案件里。",
      },
    ],
    actions: [
      {
        id: "inspect-history",
        label: "查看学校简介",
        type: "explore",
        clue: "学校创建于1992年",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "学校官网公开写明，创建时间是1992年。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "很好，年份开始和回声对上了。",
          },
        ],
      },
      {
        id: "inspect-old-file",
        label: "核对旧档案残页",
        type: "explore",
        clue: "旧档案用同一个年份绑定了回声",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "残页没有写全，但它确实在提示同一个建校年份。",
          },
          {
            speaker: "旧广播",
            tone: "echo",
            text: "把过去说出来，我才让你继续往前走。",
          },
        ],
      },
      {
        id: "resolve-year",
        label: "提交结论：年份是1992",
        type: "resolve",
        primary: true,
        requires: ["inspect-history", "inspect-old-file"],
        successSummary: "你解开了旧档案的年份锁：1992。",
        successResponse: [
          {
            speaker: "你",
            tone: "player",
            text: "年份锁我已经确认，是1992。",
          },
          {
            speaker: "系统",
            tone: "system",
            text: "任务完成。下一条回声开始指向一个真实存在的人。",
          },
        ],
      },
      {
        id: "wrong-year",
        label: "提交结论：年份是2000",
        type: "fail",
        response: [
          {
            speaker: "档案室",
            tone: "error",
            text: "对不上公开资料，也对不上残页逻辑。",
          },
        ],
      },
    ],
  },
  {
    tag: "任务四",
    title: "接取任务：锁定夜跑者",
    objective: "结合人物关系与行动轨迹，找出长期在鱼化湖边活动的人。",
    opening: [
      {
        speaker: "旁白",
        tone: "narrator",
        text: "当年份和石刻都对上后，广播里第一次插进了活人的喘息声。",
      },
      {
        speaker: "旧广播",
        tone: "echo",
        text: "我每晚都跑……跑过湖边，跑过塔影，跑过别人不敢回头看的地方。",
      },
    ],
    actions: [
      {
        id: "inspect-qiu",
        label: "查看邱国柱档案",
        type: "explore",
        clue: "邱国柱每晚在鱼化湖夜跑",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "邱国柱的档案最刺眼，他每晚都在鱼化湖夜跑。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "继续，把他和苏桂玉、李浩宇之间的关系一起看。",
          },
        ],
      },
      {
        id: "inspect-relations",
        label: "整理人物关系",
        type: "explore",
        clue: "邱国柱与苏桂玉、李浩宇关系复杂",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "他既和苏桂玉同班，又是李浩宇的前男友，这条人际线太浓了。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "人际关系和湖边轨迹重叠，嫌疑浓度足够高。",
          },
        ],
      },
      {
        id: "resolve-runner",
        label: "提交结论：夜跑者是邱国柱",
        type: "resolve",
        primary: true,
        requires: ["inspect-qiu", "inspect-relations"],
        successSummary: "你锁定了长期在湖边活动的关键人物：邱国柱。",
        successResponse: [
          {
            speaker: "你",
            tone: "player",
            text: "我锁定了，广播里的活人痕迹最像邱国柱。",
          },
          {
            speaker: "系统",
            tone: "system",
            text: "任务完成。器材室后门的数字锁已出现可推导线索。",
          },
        ],
      },
      {
        id: "wrong-runner",
        label: "提交结论：夜跑者是赵曼诗",
        type: "fail",
        response: [
          {
            speaker: "档案室",
            tone: "error",
            text: "赵曼诗和邱国柱是老乡，但夜跑习惯不在她身上。",
          },
        ],
      },
    ],
  },
  {
    tag: "解密关卡",
    title: "解密关卡：谁站在关系中心",
    objective: "根据同班、前任与暗恋信息，锁定邱国柱关系链中真正的中心人物。",
    opening: [
      {
        speaker: "旁白",
        tone: "narrator",
        text: "你把夜跑路线钉在地图上后，旁边的人际关系线忽然比湖边足迹更醒目。",
      },
      {
        speaker: "档案室",
        tone: "clerk",
        text: "这是一道关系解密。找出邱国柱所有异常情绪最终围着谁打转。",
      },
    ],
    actions: [
      {
        id: "inspect-qiu-classmate",
        label: "核对邱国柱的同班关系",
        type: "explore",
        clue: "邱国柱与苏桂玉是同班同学",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "邱国柱和苏桂玉是同班同学，这条线已经在设定里写明了。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "继续，单是同班还不够，还要看情感指向。",
          },
        ],
      },
      {
        id: "inspect-qiu-crush",
        label: "核对邱国柱的暗恋对象",
        type: "explore",
        clue: "邱国柱暗恋苏桂玉",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "邱国柱暗恋的对象也是苏桂玉，这条情感线没有第二个人。",
          },
          {
            speaker: "旧广播",
            tone: "echo",
            text: "你在找的不是最响的人，而是最让人反复回头的人。",
          },
        ],
      },
      {
        id: "inspect-qiu-ex",
        label: "核对邱国柱的前任关系",
        type: "explore",
        clue: "邱国柱是李浩宇的前男友，但情绪中心并不落在李浩宇身上",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "虽然邱国柱是李浩宇的前男友，但“同班”和“暗恋”两条线都更集中地指向苏桂玉。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "很好，这种交叉指向才是关系解密的关键。",
          },
        ],
      },
      {
        id: "resolve-center",
        label: "提交结论：关系中心是苏桂玉",
        type: "resolve",
        primary: true,
        requires: ["inspect-qiu-classmate", "inspect-qiu-crush", "inspect-qiu-ex"],
        successSummary: "你确认邱国柱关系链中最核心的名字是苏桂玉。",
        successResponse: [
          {
            speaker: "你",
            tone: "player",
            text: "如果把关系线压缩成一个中心点，那个人只能是苏桂玉。",
          },
          {
            speaker: "系统",
            tone: "system",
            text: "关卡破解。下一道锁将改用数字与宿舍分布来误导你。",
          },
        ],
      },
      {
        id: "wrong-center",
        label: "提交结论：关系中心是李浩宇",
        type: "fail",
        response: [
          {
            speaker: "档案室",
            tone: "error",
            text: "前任关系很显眼，但不等于中心关系。再看同班和暗恋指向。",
          },
        ],
      },
    ],
  },
  {
    tag: "任务五",
    title: "接取任务：拆开缺席者密码",
    objective: "利用缺席名单与宿舍楼号，拼出器材室后门密码。",
    opening: [
      {
        speaker: "旁白",
        tone: "narrator",
        text: "器材室后门终于松动，门锁面板上只剩几处被指甲抠过的数字印。",
      },
      {
        speaker: "旧广播",
        tone: "echo",
        text: "不在场的人，才最适合被借来伪装。",
      },
    ],
    actions: [
      {
        id: "inspect-absence",
        label: "查看缺席名单",
        type: "explore",
        clue: "不参加周期赛的是闫百慧、苏桂玉、李瑞丹",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "原设定事件3写得很清楚：闫百慧、苏桂玉、李瑞丹不参与周期赛。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "接下来别看名字，看楼号。",
          },
        ],
      },
      {
        id: "inspect-dorms",
        label: "核对三人的宿舍楼号",
        type: "explore",
        clue: "三人的楼号依次是4、7、11",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "三个人分别住4号楼、7号楼和11号楼。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "那串密码应该已经浮出来了。",
          },
        ],
      },
      {
        id: "resolve-code",
        label: "提交结论：门锁密码是4711",
        type: "resolve",
        primary: true,
        requires: ["inspect-absence", "inspect-dorms"],
        successSummary: "你还原了后门密码：4711。",
        successResponse: [
          {
            speaker: "你",
            tone: "player",
            text: "密码应该就是4711。",
          },
          {
            speaker: "系统",
            tone: "system",
            text: "任务完成。后门开启，里面藏着一张折叠外卖单。",
          },
        ],
      },
      {
        id: "wrong-code",
        label: "提交结论：门锁密码是7114",
        type: "fail",
        response: [
          {
            speaker: "档案室",
            tone: "error",
            text: "顺序错了。题目要求从小到大拼接。",
          },
        ],
      },
    ],
  },
  {
    tag: "解密关卡",
    title: "解密关卡：十号楼集群",
    objective: "根据宿舍分布找出体育部成员最密集的楼栋，判断哪一片区域最适合藏人和藏物。",
    opening: [
      {
        speaker: "旁白",
        tone: "narrator",
        text: "你解开4711后，器材室里摊开的宿舍名单开始像另一张地图，楼栋本身也变成了谜题。",
      },
      {
        speaker: "档案室",
        tone: "clerk",
        text: "如果有人要把裁判证临时转移，最适合下手的地方，往往是同类成员最密集的宿舍楼。",
      },
    ],
    actions: [
      {
        id: "inspect-ten-building",
        label: "统计十号楼成员",
        type: "explore",
        clue: "十号楼聚集了李浩宇、高锴、苏嘉伟、蒋驭东、鲍施序",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "十号楼里已经能数出李浩宇、高锴、苏嘉伟、蒋驭东、鲍施序五个人。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "这个数量已经开始可疑了，但还要和别的楼对比。",
          },
        ],
      },
      {
        id: "inspect-nine-building",
        label: "统计九号楼成员",
        type: "explore",
        clue: "九号楼虽然也有多人，但核心体育部集群仍不如十号楼",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "九号楼也有刘伊静、赵曼诗、马爽和吴佳怡，但密度和集中度仍然不如十号楼。",
          },
          {
            speaker: "旧广播",
            tone: "echo",
            text: "不是人多就够了，要看他们是不是同一类人。",
          },
        ],
      },
      {
        id: "inspect-building-pattern",
        label: "比对楼栋功能风险",
        type: "explore",
        clue: "十号楼是体育部成员最集中、最适合形成遮掩的区域",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "按分布看，十号楼不仅人多，而且体育部成员的集中程度最高，最适合形成天然掩护。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "很好，这就是楼栋解密的落点。",
          },
        ],
      },
      {
        id: "resolve-dorm-cluster",
        label: "提交结论：十号楼最可疑",
        type: "resolve",
        primary: true,
        requires: ["inspect-ten-building", "inspect-nine-building", "inspect-building-pattern"],
        successSummary: "你确认十号楼是体育部成员最密集、最适合藏匿线索的区域。",
        successResponse: [
          {
            speaker: "你",
            tone: "player",
            text: "如果要找掩护最强的楼栋，十号楼明显排在第一位。",
          },
          {
            speaker: "系统",
            tone: "system",
            text: "关卡破解。你已经开始从人物谜题进入空间谜题。",
          },
        ],
      },
      {
        id: "wrong-dorm-cluster",
        label: "提交结论：九号楼最可疑",
        type: "fail",
        response: [
          {
            speaker: "档案室",
            tone: "error",
            text: "九号楼人数不少，但体育部核心成员的集中度仍不如十号楼。",
          },
        ],
      },
    ],
  },
  {
    tag: "任务六",
    title: "接取任务：找出11号楼的影子",
    objective: "根据外卖单条件，在对话中识别真正借身份穿过人群的人。",
    opening: [
      {
        speaker: "旁白",
        tone: "narrator",
        text: "门锁弹开，里面是一张折了四层的外卖单。纸边压出一个几乎看不见的名字：浩宇。",
      },
      {
        speaker: "档案室",
        tone: "clerk",
        text: "11号楼、非体育部、不爱蒸饺、偏爱小笼包。把人找出来。",
      },
    ],
    actions: [
      {
        id: "inspect-takeout",
        label: "查看外卖单条件",
        type: "explore",
        clue: "目标住11号楼，偏爱小笼包，不爱蒸饺",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "条件够明确：11号楼、非体育部、小笼包、不吃蒸饺。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "再去人物档案里找关系锚点。",
          },
        ],
      },
      {
        id: "inspect-liruidan",
        label: "查看李瑞丹档案",
        type: "explore",
        clue: "李瑞丹完全符合外卖单条件",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "李瑞丹正好住11号楼，又不是体育部成员，口味也完全吻合。",
          },
          {
            speaker: "旧广播",
            tone: "echo",
            text: "借来的影子，比真正站在灯下的人更不容易被看见。",
          },
        ],
      },
      {
        id: "resolve-shadow",
        label: "提交结论：11号楼的影子是李瑞丹",
        type: "resolve",
        primary: true,
        requires: ["inspect-takeout", "inspect-liruidan"],
        successSummary: "你识破了被借来伪装的外部身份：李瑞丹。",
        successResponse: [
          {
            speaker: "你",
            tone: "player",
            text: "这张外卖单对应的人只能是李瑞丹。",
          },
          {
            speaker: "系统",
            tone: "system",
            text: "任务完成。最后的铁柜要求你同时说出历史暗号与现场身份。",
          },
        ],
      },
      {
        id: "wrong-shadow",
        label: "提交结论：11号楼的影子是王乐乐",
        type: "fail",
        response: [
          {
            speaker: "档案室",
            tone: "error",
            text: "王乐乐住11号楼，但他是体育部副部长，条件第一步就不成立。",
          },
        ],
      },
    ],
  },
  {
    tag: "终局任务",
    title: "终局任务：拼出通关语",
    objective: "收束历史暗号与现实着装规则，完成最终对话指认，打开铁柜。",
    opening: [
      {
        speaker: "旁白",
        tone: "narrator",
        text: "铁柜内侧刻着两层字。上层像旧训诫，下层像现场规章，像是过去和现在覆盖在同一块金属上。",
      },
      {
        speaker: "旧广播",
        tone: "echo",
        text: "只写精神，进不去。只写穿戴，也进不去。把它们一起说出来。",
      },
    ],
    actions: [
      {
        id: "inspect-spirit",
        label: "整理历史暗号",
        type: "explore",
        clue: "最终精神暗号是“仰信笃志”",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "学校使命里的精神口令，最后应当落在“仰信笃志”这四个字上。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "很好，还差现实身份条件。",
          },
        ],
      },
      {
        id: "inspect-uniform",
        label: "核对现场着装要求",
        type: "explore",
        clue: "服装要求包括工牌（挂脖吊绳式）和红色拉链马甲，且有前后印字",
        response: [
          {
            speaker: "你",
            tone: "player",
            text: "原设定写的是：佩戴西安外事学院工学院体育部工牌（挂脖吊绳式工牌），穿依米青年志愿者服务队红色拉链马甲，后背印有依米青年志愿者服务队，前面左胸印有工学院字样。",
          },
          {
            speaker: "档案室",
            tone: "clerk",
            text: "很好，最终身份条件现在已经和原设定全文完全对上了。",
          },
        ],
      },
      {
        id: "resolve-final",
        label: "完成终局对话：仰信笃志 + 工牌 + 红色拉链马甲",
        type: "resolve",
        primary: true,
        requires: ["inspect-spirit", "inspect-uniform"],
        successSummary: "你完整说出了最终通关语。",
        successResponse: [
          {
            speaker: "你",
            tone: "player",
            text: "最终通关语是：仰信笃志，工牌，红色拉链马甲。",
          },
          {
            speaker: "旧广播",
            tone: "echo",
            text: "门开了。你把历史、夜色和伪装都拼回了原位。",
          },
        ],
      },
      {
        id: "wrong-final",
        label: "完成终局对话：化鱼成龙 + 裁判哨",
        type: "fail",
        response: [
          {
            speaker: "档案室",
            tone: "error",
            text: "不够。这里只有历史意象，没有完整的现场身份。",
          },
        ],
      },
    ],
  },
];

const focusNames = new Set(["苏桂玉", "邱国柱", "李瑞丹", "闫百慧", "李浩宇"]);

window.APP_DATA = {
  characters,
  evidence,
  loreSources,
  missions,
  focusNames: [...focusNames],
};

if (document.querySelector("#dialogue-feed")) {

const STORAGE_KEY = "fishlake_echo_game_state_v1";

const state = {
  activeFilter: "all",
  currentMission: 0,
  solved: [],
  messages: [],
  discoveredClues: [],
  completedActions: [],
  locked: false,
};

function saveState() {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        currentMission: state.currentMission,
        solved: state.solved,
        messages: state.messages,
        discoveredClues: state.discoveredClues,
        completedActions: state.completedActions,
        locked: state.locked,
      })
    );
  } catch (_error) {
  }
}

function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    const missionCount = missions.length;
    const currentMission = Number.isInteger(parsed.currentMission) ? parsed.currentMission : 0;
    state.currentMission = Math.max(0, Math.min(currentMission, missionCount));
    state.solved = Array.isArray(parsed.solved)
      ? parsed.solved.filter((value) => Number.isInteger(value) && value >= 0 && value < missionCount)
      : [];
    state.messages = Array.isArray(parsed.messages) ? parsed.messages : [];
    state.discoveredClues = Array.isArray(parsed.discoveredClues) ? parsed.discoveredClues : [];
    state.completedActions = Array.isArray(parsed.completedActions) ? parsed.completedActions : [];
    state.locked = Boolean(parsed.locked);

    if (state.locked && state.solved.includes(state.currentMission) && state.currentMission < missionCount) {
      state.currentMission += 1;
      state.messages = [];
      state.discoveredClues = [];
      state.completedActions = [];
      state.locked = false;
    }
  } catch (_error) {
  }
}

function clearSavedState() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (_error) {
  }
}

const characterGrid = document.querySelector("#character-grid");
const evidenceList = document.querySelector("#evidence-list");
const loreList = document.querySelector("#lore-list");
const progressTrack = document.querySelector("#progress-track");
const progressCount = document.querySelector("#progress-count");
const puzzleIndex = document.querySelector("#puzzle-index");
const puzzleTag = document.querySelector("#puzzle-tag");
const puzzleTitle = document.querySelector("#puzzle-title");
const dialogueFeed = document.querySelector("#dialogue-feed");
const missionTitle = document.querySelector("#mission-title");
const missionStatus = document.querySelector("#mission-status");
const missionObjective = document.querySelector("#mission-objective");
const clueBadges = document.querySelector("#clue-badges");
const choiceList = document.querySelector("#choice-list");
const logList = document.querySelector("#log-list");
const finalPanel = document.querySelector("#final-panel");
const dialog = document.querySelector("#profile-dialog");
const dialogBody = document.querySelector("#dialog-body");
const closeDialogButton = document.querySelector("#close-dialog");
const startGameButton = document.querySelector("#start-game");
const restartButton = document.querySelector("#restart-btn");
const filterButtons = [...document.querySelectorAll(".filter-btn")];

function isSportsMember(character) {
  return character.role.includes("体育部");
}

function matchesFilter(character) {
  if (state.activeFilter === "sports") {
    return isSportsMember(character);
  }

  if (state.activeFilter === "outsider") {
    return !isSportsMember(character);
  }

  if (state.activeFilter === "focus") {
    return focusNames.has(character.name);
  }

  return true;
}

function currentMissionData() {
  return missions[state.currentMission];
}

function isFinished() {
  return state.currentMission >= missions.length;
}

function renderCharacters() {
  if (!characterGrid) {
    return;
  }

  const filtered = characters.filter(matchesFilter);
  characterGrid.innerHTML = filtered
    .map(
      (character, index) => `
        <article class="character-card" data-name="${character.name}" style="animation-delay:${index * 30}ms">
          <p class="character-meta">${character.role}</p>
          <h3>${character.name}</h3>
          <div class="tag-list">
            ${character.clues
              .slice(0, 3)
              .map((item) => `<span class="tag">${item}</span>`)
              .join("")}
          </div>
          <p class="character-detail"><strong>宿舍：</strong>${character.dorm}</p>
          <p class="character-detail"><strong>档案摘要：</strong>${character.summary}</p>
        </article>
      `
    )
    .join("");

  [...document.querySelectorAll(".character-card")].forEach((card) => {
    card.addEventListener("click", () => {
      const target = characters.find((item) => item.name === card.dataset.name);
      openProfile(target);
    });
  });
}

function renderEvidence() {
  if (!evidenceList) {
    return;
  }

  evidenceList.innerHTML = evidence
    .map(
      (item) => `
        <article class="evidence-item">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderLoreSources() {
  if (!loreList) {
    return;
  }

  loreList.innerHTML = loreSources
    .map(
      (item) => `
        <article class="lore-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <a href="${item.url}" target="_blank" rel="noreferrer">查看公开来源</a>
        </article>
      `
    )
    .join("");
}

function renderProgress() {
  if (!progressTrack || !progressCount) {
    return;
  }

  progressTrack.innerHTML = missions
    .map((mission, index) => {
      const solved = state.solved.includes(index);
      const active = index === state.currentMission && !isFinished();
      const className = solved ? "rail-step solved" : active ? "rail-step active" : "rail-step";

      return `
        <article class="${className}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${mission.title}</strong>
        </article>
      `;
    })
    .join("");

  progressCount.textContent = `${state.solved.length} / ${missions.length} 项任务已完成`;
}

function renderMessages() {
  if (!dialogueFeed) {
    return;
  }

  dialogueFeed.innerHTML = state.messages
    .map(
      (message) => `
        <article class="message ${message.tone}">
          <span class="message-speaker">${message.speaker}</span>
          <div class="message-text">${message.text}</div>
        </article>
      `
    )
    .join("");

  dialogueFeed.scrollTop = dialogueFeed.scrollHeight;
}

function appendMessage(speaker, text, tone = "narrator") {
  state.messages.push({ speaker, text, tone });
  renderMessages();
}

function renderClues() {
  if (!clueBadges) {
    return;
  }

  if (state.discoveredClues.length === 0) {
    clueBadges.innerHTML = '<span class="tag">暂无，先执行上方调查动作</span>';
    return;
  }

  clueBadges.innerHTML = state.discoveredClues
    .map((clue) => `<span class="clue-badge">${clue}</span>`)
    .join("");
}

function actionUnlocked(action) {
  if (!action.requires || action.requires.length === 0) {
    return true;
  }

  return action.requires.every((requiredId) => state.completedActions.includes(requiredId));
}

function missingRequirements(action) {
  if (!action.requires || action.requires.length === 0) {
    return [];
  }

  const mission = currentMissionData();
  return action.requires
    .filter((requiredId) => !state.completedActions.includes(requiredId))
    .map((requiredId) => mission.actions.find((item) => item.id === requiredId)?.label)
    .filter(Boolean);
}

function renderChoices() {
  if (!choiceList) {
    return;
  }

  const mission = currentMissionData();

  choiceList.innerHTML = mission.actions
    .filter((action) => !state.completedActions.includes(action.id) || action.type === "fail")
    .map((action) => {
      const primaryClass = action.primary ? " primary" : "";
      const lockedByFlow = state.locked;
      const unmet = missingRequirements(action);
      const title = unmet.length > 0 ? `需要先完成：${unmet.join("、")}` : "";

      return `
        <button
          class="choice-btn${primaryClass}"
          data-action-id="${action.id}"
          ${lockedByFlow ? "disabled" : ""}
          ${title ? `title="${title}"` : ""}
          type="button"
        >
          ${action.label}
        </button>
      `;
    })
    .join("");

  [...document.querySelectorAll(".choice-btn")].forEach((button) => {
    button.addEventListener("click", () => {
      const action = mission.actions.find((item) => item.id === button.dataset.actionId);
      runAction(action);
    });
  });
}

function renderMission() {
  const mission = currentMissionData();
  if (!puzzleIndex || !puzzleTag || !puzzleTitle || !missionTitle || !missionStatus || !missionObjective) {
    return;
  }

  puzzleIndex.textContent = `第 ${state.currentMission + 1} 章`;
  puzzleTag.textContent = mission.tag;
  puzzleTitle.textContent = mission.title;
  missionTitle.textContent = mission.title;
  missionStatus.textContent = "调查中";
  missionObjective.textContent = mission.objective;
  state.messages = [...mission.opening];
  state.discoveredClues = [];
  state.completedActions = [];
  state.locked = false;
  renderMessages();
  renderClues();
  renderChoices();
  saveState();
}

function renderRestoredMission() {
  const mission = currentMissionData();
  if (!mission || !puzzleIndex || !puzzleTag || !puzzleTitle || !missionTitle || !missionStatus || !missionObjective) {
    return;
  }

  puzzleIndex.textContent = `第 ${state.currentMission + 1} 章`;
  puzzleTag.textContent = mission.tag;
  puzzleTitle.textContent = mission.title;
  missionTitle.textContent = mission.title;
  missionStatus.textContent = state.locked ? "已完成" : "调查中";
  missionStatus.className = state.locked ? "mission-status done" : "mission-status";
  missionObjective.textContent = mission.objective;

  if (state.messages.length === 0) {
    state.messages = [...mission.opening];
  }

  renderMessages();
  renderClues();
  renderChoices();
}

function renderLog() {
  if (!logList) {
    return;
  }

  if (state.solved.length === 0) {
    logList.innerHTML =
      '<article class="log-entry"><strong>任务待接取</strong><p>点击任务动作开始调查，剧情会通过对话逐步展开。</p></article>';
    return;
  }

  logList.innerHTML = state.solved
    .map((index) => {
      const mission = missions[index];
      const resolveAction = mission.actions.find((action) => action.type === "resolve");

      return `
        <article class="log-entry">
          <strong>${mission.title}</strong>
          <p>${resolveAction?.successSummary ?? "任务完成。"}</p>
        </article>
      `;
    })
    .join("");
}

function openProfile(character) {
  if (!dialog || !dialogBody) {
    return;
  }

  dialogBody.innerHTML = `
    <article class="profile-pane">
      <p class="eyebrow">Profile</p>
      <h2>${character.name}</h2>
      <p class="character-meta">${character.role}</p>
      <div class="tag-list">
        ${character.clues.map((item) => `<span class="tag">${item}</span>`).join("")}
      </div>
      <div class="dialog-grid">
        <section class="dialog-section">
          <strong>身份</strong>
          <p>${character.school}</p>
        </section>
        <section class="dialog-section">
          <strong>宿舍</strong>
          <p>${character.dorm}</p>
        </section>
        <section class="dialog-section">
          <strong>人物设定</strong>
          <p>${character.summary}</p>
        </section>
        <section class="dialog-section">
          <strong>侦查价值</strong>
          <p>把这份档案和线索墙、任务对话一起交叉比对，很多动作会因此变得清晰。</p>
        </section>
      </div>
    </article>
  `;
  dialog.showModal();
}

function markClue(action) {
  if (action.clue && !state.discoveredClues.includes(action.clue)) {
    state.discoveredClues.push(action.clue);
  }
}

function runAction(action) {
  if (state.locked) {
    return;
  }

  const unmet = missingRequirements(action);
  if (unmet.length > 0) {
    appendMessage("档案室", `这一步还不能定论。你还需要先完成：${unmet.join("、")}。`, "clerk");
    saveState();
    return;
  }

  if (action.type === "explore") {
    (action.response || []).forEach((message) => {
      appendMessage(message.speaker, message.text, message.tone);
    });

    if (!state.completedActions.includes(action.id)) {
      state.completedActions.push(action.id);
    }
    markClue(action);
    renderClues();
    renderChoices();
    saveState();
    return;
  }

  if (action.type === "fail") {
    (action.response || []).forEach((message) => {
      appendMessage(message.speaker, message.text, message.tone);
    });

    saveState();
    return;
  }

  (action.successResponse || action.response || []).forEach((message) => {
    appendMessage(message.speaker, message.text, message.tone);
  });

  state.locked = true;
  if (!state.completedActions.includes(action.id)) {
    state.completedActions.push(action.id);
  }
  state.solved.push(state.currentMission);
  missionStatus.textContent = "已完成";
  missionStatus.style.background = "rgba(139, 211, 127, 0.14)";
  missionStatus.style.borderColor = "rgba(139, 211, 127, 0.24)";
  missionStatus.style.color = "#d8f7d2";
  renderLog();
  renderProgress();
  renderChoices();
  saveState();

  window.setTimeout(() => {
    state.currentMission += 1;

    if (isFinished()) {
      showEnding();
      return;
    }

    missionStatus.removeAttribute("style");
    renderMission();
    renderProgress();
  }, 900);
}

function showEnding() {
  if (!finalPanel) {
    return;
  }

  finalPanel.classList.remove("hidden");
  puzzleIndex.textContent = "案件完结";
  puzzleTag.textContent = "已结案";
  puzzleTitle.textContent = "你已完成全部调查任务";
  missionTitle.textContent = "终局已完成";
  missionStatus.textContent = "结案";
  missionObjective.textContent = "裁判证已追回，鱼化湖边的回声暂时沉寂。";
  state.messages = [
    {
      speaker: "旧广播",
      tone: "echo",
      text: "门开了。你把历史、夜色和伪装都拼回了原位。",
    },
    {
      speaker: "旁白",
      tone: "system",
      text: "全部任务完成。裁判证被找回，但鱼化湖边最后那一阵电流声，像还在等下一次入夜。",
    },
  ];
  renderMessages();
  clueBadges.innerHTML =
    '<span class="clue-badge">终局结论：仰信笃志 + 工牌 + 红色拉链马甲</span>';
  choiceList.innerHTML = "";
  renderProgress();
  saveState();
}

function restartGame() {
  clearSavedState();
  state.currentMission = 0;
  state.solved = [];
  state.messages = [];
  state.discoveredClues = [];
  state.completedActions = [];
  state.locked = false;
  finalPanel.classList.add("hidden");
  missionStatus.removeAttribute("style");
  renderMission();
  renderProgress();
  renderLog();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.activeFilter = button.dataset.filter;
    renderCharacters();
  });
});

if (startGameButton) {
  startGameButton.addEventListener("click", () => {
    document.querySelector(".case-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (closeDialogButton && dialog) {
  closeDialogButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    if (!isInDialog) {
      dialog.close();
    }
  });
}

if (restartButton) {
  restartButton.addEventListener("click", restartGame);
}

loadState();
renderCharacters();
renderEvidence();
renderLoreSources();
renderProgress();
renderLog();

if (isFinished()) {
  showEnding();
} else if (state.solved.length > 0 || state.messages.length > 0 || state.discoveredClues.length > 0 || state.completedActions.length > 0) {
  renderRestoredMission();
} else {
  renderMission();
}
}
