// js/story.js
const story = {
  start: [
    { type: 'bg',    name: 'room_evening' },
    { type: 'bgm',   name: 'daily_low' },
    { type: 'say',   who: null,  text: '三月的南方，回南天总是不期而至。墙壁渗水，被褥潮湿，连空气里都仿佛能拧出一把黏腻的水。' },
    { type: 'say',   who: 'lh',  text: '为了备考，我搬进了这座老旧的海棠公寓404室。' },
    { type: 'say',   who: 'lh',  text: '空间很小，隔音很差。在这座被白雾隔绝的孤岛上，陪伴我的只有桌上堆成小山的习题册。' },
    { type: 'sfx',   name: 'knock' },
    { type: 'say',   who: null,  text: '门外传来了极轻的敲门声。在这个时间，在这个鬼天气里……' },
    { type: 'bg',    name: 'genkan' },
    { type: 'show',  char: 'xq', expr: 'normal' },
    { type: 'say',   who: 'xq',  text: '淮君，晚上好呀。' },
    { type: 'say',   who: 'xq',  text: '今天也要全部吃完哦。' },
    { type: 'say',   who: 'lh',  text: '晓晴？你怎么这个点过来了……外面雾这么大。' },
    { type: 'say',   who: 'xq',  text: '因为担心你一个人不好好吃晚饭嘛。而且，从这里走到你这儿，其实一点也不远哦。' },
    { type: 'bg',    name: 'room_warm' },
    { type: 'cg',    name: 'bento_warm' },
    { type: 'say',   who: 'lh',  text: '谢谢你……其实你不用每天都跑一趟的。' },
    { type: 'say',   who: 'xq',  text: '桌上怎么这么乱，我帮你收拾一下吧。' },
    { type: 'say',   who: null,  text: '她伸出手，把桌上乱放的橡皮和草稿纸归拢。顺手拿起桌角的钥匙时，动作顿了一下。' },
    { type: 'say',   who: null,  text: '她将钥匙拿起来看了一眼，又安安静静地放回了桌角原处。' },
    { type: 'say',   who: 'xq',  text: '钥匙放在老地方，不要乱丢哦。要是弄丢了，我会很困扰的。' },
    { type: 'say',   who: 'lh',  text: '嗯，我知道了。' },
    { type: 'say',   who: null,  text: '她走到窗边，看着窗外浓重的白雾，轻轻哈了一口气，让玻璃多了一层白汽。' },
    { type: 'say',   who: 'xq',  text: '如果雾一直不散就好了……' },
    { type: 'say',   who: 'lh',  text: '诶？为什么？' },
    { type: 'say',   who: null,  text: '窗外恰好有一瞬雾气变薄，远处路灯的轮廓隐约闪了一下。她飞快地扫了一眼窗外，语气却毫无波澜，甚至笑得更甜了。' },
    { type: 'say',   who: 'xq',  text: '这样的话，我就能每天都理所当然地来找你了呀。' },
    { type: 'hide',  char: 'xq' },
    { type: 'bg',    name: 'room_night' },
    { type: 'bgm',   name: 'suspense_light' },
    { type: 'say',   who: null,  text: '晓晴已经离开。桌上留下了空空如也的保温盒。我坐在书桌前，翻开了那本平日用来记错题的日记本。' },
    { type: 'menu',  prompt: '请写下你对今天这一切的直观感受：',
      options: [
        { text: '她今天很正常。',              effects: { trust: 1, diary: '她今天很正常。' } },
        { text: '总觉得哪里怪怪的。',          effects: { flag: 'day1_flagged', diary: '总觉得哪里怪怪的。' } },
        { text: '我是不是压力太大出现幻觉了？', effects: { flag: 'day1_anxious', diary: '我是不是压力太大出现幻觉了？' } },
        { text: '……（合上日记本，什么也没写）', effects: { diary: null } }
      ],
      next: 'day1_end'
    }
  ],
  
  day1_end: [
    { type: 'say', who: null, text: '日记本自动合上。镜头拉向窗外，浓重的白雾正在一点点顺着窗缝爬进屋里。' },
    { type: 'sfx', name: 'barefoot_walk' },
    { type: 'say', who: null, text: '走廊外，隐约传来了赤脚踩在湿漉漉地砖上的声音：啪嗒……啪嗒……' },
    { type: 'say', who: null, text: '我拉上被子，试图把这恼人的声音隔绝在梦境之外……' },
    { type: 'jump', label: 'day2' } 
  ],

  day2: [
    { type: 'bg', name: 'room_evening' },
    { type: 'bgm', name: 'daily_low' },
    { type: 'say', who: null, text: '第二天。雾比昨天更浓了。' },
    { type: 'say', who: null, text: '我下楼去扔垃圾，在一楼碰到了正在擦拭窗户的管理员阿姨。' },
    { type: 'show', char: 'aunt', expr: 'normal' },
    { type: 'say', who: 'aunt', text: '小陆啊，脸色怎么这么差？没睡好？' },
    { type: 'say', who: 'lh', text: '啊，阿姨好。可能有点认床吧。' },
    { type: 'say', who: 'aunt', text: '这栋楼啊，一到回南天就邪性。以前住过的人，分不清哪个是人，哪个是影……' },
    { type: 'say', who: 'aunt', text: '晚上听到敲门，千万别看猫眼，知道吗？' },
    { type: 'condition', check: 'flags.day1_anxious', trueLabel: 'day2_aunt_extra', falseLabel: 'day2_continue' }
  ],

  day2_aunt_extra: [
    { type: 'say', who: 'aunt', text: '特别是你啊，整天闷在屋里看书。这楼里住久了，人都容易疑神疑鬼的。' },
    { type: 'jump', label: 'day2_continue' }
  ],

  day2_continue: [
    { type: 'say', who: 'lh', text: '……好的，谢谢阿姨。' },
    { type: 'hide', char: 'aunt' },
    { type: 'bg', name: 'room_night' },
    { type: 'bgm', name: 'suspense_light' },
    { type: 'say', who: null, text: '傍晚，晓晴照例来送了便当。' },
    { type: 'say', who: null, text: '今天她进门时，屋里除了泥土的湿气，似乎还混杂着一丝极淡的、铁锈般的腥甜。' },
    { type: 'show', char: 'xq', expr: 'normal' },
    { type: 'say', who: 'xq', text: '淮君，今天也要全部吃完哦。' },
    { type: 'say', who: null, text: '她笑起来还是那么温柔，但我总觉得，自己好像忘了什么重要的事情。' },
    { type: 'hide', char: 'xq' },
    { type: 'say', who: null, text: '她走后，我再次翻开日记本。瞳孔猛地收缩——' },
    { type: 'say', who: null, text: '昨天我写字的那一页下面，多出了一行字。那绝对不是我的笔迹。' },
    { type: 'say', who: null, text: '字迹歪歪扭扭，像是什么东西用水汽凝结在纸上写成的：“她今天碰了你的左手，但晓晴右手上有一颗小痣。”' },
    { type: 'say', who: 'lh', text: '这是……谁写的？她碰过这本日记？' },
    { type: 'say', who: null, text: '窗外的浓雾似乎又厚重了一分，隐隐传来了寻人广播的声音……' },
    { type: 'jump', label: 'day3' }
  ],

  day3: [
    { type: 'bg', name: 'room_warm' },
    { type: 'bgm', name: 'daily_low' },
    { type: 'say', who: null, text: '第三天傍晚。' },
    { type: 'show', char: 'xq', expr: 'smile' },
    { type: 'say', who: 'xq', text: '淮君，今天在学校怎么样？' },
    { type: 'say', who: 'lh', text: '还行。就是……突然有点怀念小时候。' },
    { type: 'say', who: 'lh', text: '你还记得我们小时候在河边抓鱼那件事吗？我记得那次我不小心掉水里了，你还在岸上笑我。' },
    { type: 'say', who: 'xq', text: '当然记得呀。' },
    { type: 'say', who: 'xq', text: '（B1）不过那条河……我记得是往左拐的吧？我们当时是在左边的浅滩抓的鱼。' },
    { type: 'say', who: null, text: '我愣了一下。' },
    { type: 'say', who: 'lh', text: '左拐？不对啊，那条河明明是往右拐的。而且掉进水里的是你，我拉你上来的。' },
    { type: 'say', who: null, text: '晓晴脸上的笑容突然僵硬了。整整两秒钟，她就那样直勾勾地盯着我，眼神空洞得像一具没有灵魂的躯壳。' },
    { type: 'say', who: 'xq', text: '……是吗？那可能是我记错了吧。' },
    { type: 'say', who: null, text: '她迅速恢复了温柔的神态，仿佛刚才那可怕的停顿根本不存在。' },
    { type: 'say', who: null, text: '为了缓解尴尬，她站起身，开始帮我整理桌上散落的复习资料。' },
    { type: 'say', who: null, text: '她顺手拿起了我桌角的钥匙。这一次，她没有像昨天那样放回原处，而是拉开书桌最深处的抽屉，把钥匙扔了进去。' },
    { type: 'say', who: 'xq', text: '钥匙放在老地方，不要乱丢哦。' },
    { type: 'say', who: null, text: '（老地方……明明是你今天才把钥匙放进去的。）' },
    { type: 'say', who: null, text: '她走到窗边，看着外面白茫茫的雾。' },
    { type: 'say', who: 'xq', text: '（D1）如果雾一直不散就好了。' },
    { type: 'say', who: 'lh', text: '诶？为什么？' },
    { type: 'say', who: null, text: '就在这时，窗外的浓雾似乎被风吹开了一瞬，远处路灯的轮廓隐约闪了一下。' },
    { type: 'say', who: null, text: '晓晴飞快地转过头，死死盯着那处变薄的雾气，眼神里闪过一丝我从未见过的阴冷。但当她回过头时，又是那副甜美的笑容。' },
    { type: 'say', who: 'xq', text: '这样的话，我就能每天都理所当然地来找你了呀。' },
    { type: 'hide', char: 'xq' },
    { type: 'bg', name: 'room_night' },
    { type: 'bgm', name: 'suspense_light' },
    { type: 'say', who: null, text: '深夜。我躺在床上，翻来覆去睡不着。' },
    { type: 'say', who: null, text: '右手的小痣……往右拐的河……还有被扔进抽屉深处的钥匙。' },
    { type: 'say', who: null, text: '到底是我疯了，还是这个世界疯了？' },
    { type: 'sfx', name: 'radio' },
    { type: 'say', who: null, text: '窗外，隐约传来警车和社区的广播声：“近日我县连续发生高中生失踪案，请广大居民夜间锁好门窗……”' },
    { type: 'say', who: null, text: '我拉开窗帘。' },
    { type: 'say', who: null, text: '雾已经浓到完全看不见对面的楼房了。整座公寓，就像是漂浮在白色深渊里的一叶孤舟。' },
    { type: 'jump', label: 'day4' }
  ],

  day4: [
    { type: 'bg', name: 'room_evening' },
    { type: 'bgm', name: 'daily_low' },
    { type: 'say', who: null, text: '第四天。' },
    { type: 'say', who: null, text: '我不能再这样坐以待毙了。' },
    { type: 'say', who: null, text: '我下楼找到了正在打扫走廊的管理员阿姨。' },
    { type: 'show', char: 'aunt', expr: 'normal' },
    { type: 'say', who: 'lh', text: '阿姨，咱们这栋楼的地下室，是不是有个废弃的旧水井？' },
    { type: 'say', who: 'aunt', text: '……你问这个干什么？' },
    { type: 'say', who: 'lh', text: '我昨晚听见下面有声音。您有地下室的钥匙吗？我想去看看。' },
    { type: 'say', who: 'aunt', text: '（眼神闪躲）没有！锁链早就锈死了，打不开的。你个备考的学生，别管这些闲事！' },
    { type: 'hide', char: 'aunt' },
    { type: 'say', who: null, text: '阿姨匆匆走开了，脚步比平时快得多。她在隐瞒什么。' },
    { type: 'bg', name: 'room_warm' },
    { type: 'bgm', name: 'suspense_light' },
    { type: 'say', who: null, text: '傍晚，晓晴像往常一样推门进来。' },
    { type: 'show', char: 'xq', expr: 'normal' },
    { type: 'say', who: 'xq', text: '淮君，今天也要全部吃完哦。' },
    { type: 'say', who: null, text: '她放下饭盒，却没有像往常一样立刻去整理桌子。她站在我面前，静静地看着我。' },
    { type: 'say', who: 'xq', text: '淮君……你最近，是不是在背着我查些什么？' },
    { type: 'say', who: null, text: '她的语气很轻，但那双眼睛却像能看穿我的灵魂。' },
    { type: 'menu', prompt: '我要怎么回答？',
      options: [
        { text: '“没有，我怎么会不信你。”', effects: { trust: 1 }, next: 'day4_escape' },
        { text: '“我在找真正的晓晴。”', effects: { clues: 1, trust: -1 }, next: 'day4_confront' }
      ]
    }
  ],

  day4_escape: [
    { type: 'say', who: null, text: '我避开了她的视线，违心地说出了这句话。' },
    { type: 'say', who: 'xq', text: '是吗……那就好。' },
    { type: 'say', who: null, text: '她笑了，笑得很开心。' },
    { type: 'say', who: null, text: '那天晚上，出奇的安静。没有水滴声，没有脚步声，也没有寻人广播。' },
    { type: 'say', who: null, text: '我睡了一个久违的好觉。但在梦里，我总觉得有什么极其重要的东西，正在一点点离我远去。' },
    { type: 'jump', label: 'day4_midnight' }
  ],

  day4_confront: [
    { type: 'say', who: null, text: '我抬起头，死死盯着她的眼睛，说出了这句话。' },
    { type: 'say', who: null, text: '屋里的空气瞬间降到了冰点。' },
    { type: 'say', who: null, text: '晓晴脸上的笑容消失了。她面无表情地看着我，眼底没有一丝高光。' },
    { type: 'say', who: 'xq', text: '……你在说什么呀，淮君。我不就站在你面前吗？' },
    { type: 'say', who: null, text: '她的声音没有任何起伏。' },
    { type: 'say', who: null, text: '那天晚上，窗外的风刮得像鬼哭狼嚎。我总觉得，那双冰冷的眼睛在黑暗中盯了我一整夜。' },
    { type: 'jump', label: 'day4_midnight' }
  ],

  day4_midnight: [
    { type: 'bg', name: 'room_night' },
    { type: 'bgm', name: 'suspense_light' },
    { type: 'say', who: null, text: '深夜。' },
    // 这里用到了升级后的条件判断
    { type: 'condition', check: 'trust >= 1', trueLabel: 'day4_night_soft', falseLabel: 'day4_night_hard' }
  ],

  day4_night_soft: [
    { type: 'say', who: null, text: '我起夜去洗手间。' },
    { type: 'say', who: null, text: '路过梳妆镜时，我发现镜面上蒙着一层厚厚的水汽。' },
    { type: 'say', who: null, text: '水汽中，似乎有什么东西被写在了上面。' },
    { type: 'jump', label: 'day4_mirror' }
  ],

  day4_night_hard: [
    { type: 'say', who: null, text: '我猛地从床上惊醒。' },
    { type: 'say', who: null, text: '刚才……好像有一个湿漉漉的身影站在床头？' },
    { type: 'say', who: null, text: '我打开灯，房间里空无一人。只有洗手间的梳妆镜上，起了一层厚厚的白雾。' },
    { type: 'jump', label: 'day4_mirror' }
  ],

   day4_mirror: [
    { type: 'say', who: null, text: '我走近镜子，擦去水汽。' },
    { type: 'say', who: null, text: '上面写着一个字。' },
    { type: 'say', who: null, text: '是用手指在水汽上划出来的：“淮”。' },
    { type: 'say', who: null, text: '是我的名字。' },
    { type: 'say', who: null, text: '但是……这个字的偏旁部首，写得完全不对。' },
    { type: 'say', who: null, text: '“淮”字的右半边，理应是先写“亻”，再写“圭”。可这个字，却是先写了“一”，再乱拼凑上去的。' },
    { type: 'say', who: 'lh', text: '这是……谁写的？' },
    { type: 'say', who: null, text: '如果是晓晴写的，她从小练书法，绝对不可能犯这种笔顺错误。' },
    { type: 'say', who: null, text: '除非……写字的东西，根本不懂人类的笔顺，它只是在临摹。' },
    // 跳转到 Day 5
    { type: 'jump', label: 'day5' }
  ],

  // ===== 新增 Day 5 =====
  day5: [
    { type: 'bg', name: 'room_evening' },
    { type: 'bgm', name: 'suspense_light' },
    { type: 'say', who: null, text: '第五天。' },
    { type: 'say', who: null, text: '傍晚，门外没有响起熟悉的敲门声。' },
    { type: 'say', who: null, text: '我打开门，门外没有人，只有一个孤零零的保温盒放在地上。' },
    { type: 'cg', name: 'bento_mud' },
    { type: 'say', who: null, text: '我打开盖子，里面没有热腾腾的饭菜，只有一盒冰冷的、混着腥臭味的黑色泥土。' },
    { type: 'say', who: null, text: '铁锈味和泥土的湿气瞬间填满了整个走廊。' },
    { type: 'say', who: null, text: '我必须去地下室。' },
    
    { type: 'bg', name: 'basement' },
    { type: 'say', who: null, text: '深夜，我撬开了生锈的锁链，走进了地下室。' },
    { type: 'say', who: null, text: '这里阴暗潮湿，空气中弥漫着浓烈的水汽。' },
    { type: 'say', who: null, text: '在废弃的水井旁，我停下了脚步。' },
    { type: 'say', who: null, text: '“呼……呼……”' },
    { type: 'say', who: null, text: '井底传来了微弱的呼吸声。' },
    { type: 'say', who: null, text: '而在我身后，传来了一声极轻的呢喃：' },
    { type: 'show', char: 'xq', expr: 'normal' },
    { type: 'say', who: 'xq', text: '淮君……你在这里做什么呀？' },
    { type: 'jump', label: 'day6' }
  ],

  // ===== 新增 Day 6（终局） =====
  day6: [
    { type: 'bg', name: 'room_night' },
    { type: 'bgm', name: 'suspense_light' },
    { type: 'sfx', name: 'thunder' },
    { type: 'say', who: null, text: '第六天。' },
    { type: 'say', who: null, text: '暴雨倾盆，公寓彻底断电。' },
    { type: 'say', who: null, text: '我猛地从床上惊醒，浑身冷汗。' },
    { type: 'say', who: null, text: '昨晚在地下室发生的一切……是梦吗？' },
    { type: 'say', who: null, text: '“咔哒。”' },
    { type: 'say', who: null, text: '门锁被转动了。' },
    { type: 'show', char: 'xq', expr: 'wet' }, 
    { type: 'say', who: 'xq', text: '淮君，外面打雷好可怕，我来陪你吧。' },
    { type: 'say', who: null, text: '她浑身湿透，头发紧紧贴在脸上，水珠顺着下巴滴落。' },
    { type: 'say', who: null, text: '她的手里，提着一个熟悉的保温盒。' },
    { type: 'say', who: 'xq', text: '只要把外面的世界都切碎，雾就不会散了，对吧？' },
    { type: 'say', who: null, text: '我必须做出最后的选择。' },
    
    { type: 'menu', prompt: '最后的抉择',
      options: [
        { text: '推开她，冲向地下室救出真正的晓晴。', next: 'end_check_true' },
        { text: '放弃抵抗，吃下她带来的便当。', next: 'end_yandere' },
        { text: '极度恐惧，转身向门外逃跑。', next: 'end_bad' }
      ]
    }
  ],

  // 判断真结局条件
  end_check_true: [
    { type: 'say', who: null, text: '我一把推开她，冲进了暴雨中的地下室。' },
    { type: 'say', who: null, text: '井口的铁链已经被我砸开。我顺着手电筒的光往下看——' },
    // 核心机制：如果线索 >= 2（或者3），才能真正救出人；否则会被幻象吞噬
    { type: 'condition', check: 'clues >= 2', trueLabel: 'end_true', falseLabel: 'end_bad_in_basement' }
  ],

  // 【真结局】破雾迎日
  end_true: [
    { type: 'bg', name: 'basement' },
    { type: 'say', who: null, text: '井底，真的晓晴虚弱地靠在墙壁上，手腕上满是勒痕。' },
    { type: 'say', who: null, text: '在看清是我的那一刻，那个一直跟在我身后的“晓晴”发出了凄厉的尖叫，化作了一滩腥臭的泥水。' },
    { type: 'bg', name: 'sunny' },
    { type: 'bgm', name: 'sunny_theme' },
    { type: 'say', who: null, text: '第二天。回南天结束了。' },
    { type: 'say', who: null, text: '久违的阳光穿透云层，洒进了404室。' },
    { type: 'show', char: 'xq', expr: 'smile' },
    { type: 'say', who: 'xq', text: '淮君，我们走吧。' },
    { type: 'say', who: 'lh', text: '嗯。' },
    { type: 'say', who: null, text: '我们牵着手，走出了这座被迷雾笼罩的孤岛。' },
        { type: 'end', id: 'true', title: '破雾迎日', text: '【真·恋爱结局：破雾迎日光】\n\n你克服了恐惧，救出了真实的她。\n阳光照亮了新的生活。' }
  ],

  // 【病娇结局】迷雾的永生
  end_yandere: [
    { type: 'say', who: null, text: '我放弃了挣扎。' },
    { type: 'say', who: null, text: '她温柔地笑了，把一勺温热的汤喂到了我的嘴边。' },
    { type: 'say', who: null, text: '味道还是那么熟悉，带着一丝极淡的铁锈味。' },
    { type: 'say', who: null, text: '我咽了下去。视线开始模糊，身体失去了力气。' },
    { type: 'bg', name: 'fog' },
    { type: 'say', who: null, text: '“咔哒。”' },
    { type: 'say', who: null, text: '我听见她反锁了公寓的大门。' },
    { type: 'say', who: 'xq', text: '这样，就再也没有人能打扰我们了。' },
    { type: 'say', who: null, text: '窗外的浓雾彻底吞没了海棠公寓。从此，再也没有人见过404室的住户。' },
    // 核心回显机制
    { type: 'say', who: null, text: '桌上那本日记翻到了第一页：' },
    { type: 'say', who: null, text: '“' + (gameState.wrote_history[0] || '我什么也没写。') + '”' },
    { type: 'say', who: null, text: '下面多了一行陌生的笔迹：' },
    { type: 'say', who: null, text: '“他今天也很正常。”' },
        { type: 'end', id: 'yandere', title: '迷雾的永生', text: '【病娇结局：迷雾的永生】\n\n你沉溺在虚假的温柔中，\n选择与这座公寓永远留在了一起。' }
  ],

  // 【坏结局】无人生还
  end_bad: [
    { type: 'bg', name: 'room_night' },
    { type: 'say', who: null, text: '我惊恐地推开她，拉开房门向走廊狂奔。' },
    { type: 'say', who: null, text: '但走廊里的雾太浓了。浓得我看不见楼梯，看不见出口。' },
    { type: 'say', who: null, text: '我听见身后传来赤脚踩在湿地砖上的声音：啪嗒……啪嗒……' },
    { type: 'say', who: null, text: '声音越来越近。' },
    { type: 'sfx', name: 'scare' },
    { type: 'say', who: null, text: '“抓到你了。”' },
        { type: 'end', id: 'bad_run', title: '消失的404', text: '【坏结局：消失的404】\n\n你被迷雾吞噬了。\n海棠公寓404室重新贴出了招租广告……' }
  ],

  // 分支：选了下井但没有收集线索
  end_bad_in_basement: [
    { type: 'say', who: null, text: '我跳下井底，却发现下面空无一物。' },
    { type: 'say', who: null, text: '刚才的呼吸声，不过是水流滴落的回声。' },
    { type: 'say', who: null, text: '“淮君，你在这里干什么？”' },
    { type: 'say', who: null, text: '我回过头。晓晴站在井口，面无表情地看着我。' },
    { type: 'say', who: null, text: '不……那不是晓晴。' },
    { type: 'say', who: null, text: '那是无数个在雾天失踪的人，拼凑出来的“幻影”。' },
    { type: 'say', who: null, text: '泥土封住了井口。' },
        { type: 'end', id: 'bad_well', title: '无人生还', text: '【坏结局：无人生还】\n\n线索不足，你无法分辨真实与虚假。\n成为了404室的又一个传说。' }
  ]
};