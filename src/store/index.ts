import { createStore } from "vuex";

export default createStore({
  state: {
    isSide: false,
    groupInfo: {},
    taskGroup: [],
    noteList: [{
            text: "滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。",
            isStar: true
        },
        {
            text: `La trompe de l'éléphant, c'est pour ramasser les pistaches: pas besoin de se baisser. Le cou de la girafe, c'est pour brouter les astres: pas besoin de voler. La peau du caméléon, verte, bleue, mauve, blanche, selon sa volonté, c'est pour se cacher des animaux voraces: pas besoin de fuir. La carapace de la tortue, c'est pour dormir à l'intérieur, même l'hiver: pas besoin de maison. Le poème du poète, c'est pour dire tout cela et mille et mille et mille autres choses: pas besoin de comprendre.`,
            isStar: false
        },
        {
            text: "这是一个记事本可以用来为源响应式对象上的某个 property 新创建一个ref。然后，ref 可以被传递，它会保持对其源 property的响应式连接即使源 property 不存在，toRef 也会返回一个可用的ref。这使得它在使用可选 prop 时特别有用，可选 prop 并不会被 toRefs处理。这是一个记事本可以用来为源响应式对象上的某个 property 新创建一个ref。然后，ref 可以被传递，它会保持对其源 property的响应式连接即使源 property 不存在，toRef 也会返回一个可用的ref。这使得它在使用可选 prop 时特别有用，可选 prop 并不会被 toRefs处理。这是一个记事本可以用来为源响应式对象上的某个 property 新创建一个ref。然后，ref 可以被传递，它会保持对其源 property的响应式连接即使源 property 不存在，toRef 也会返回一个可用的ref。这使得它在使用可选 prop 时特别有用，可选 prop 并不会被 toRefs处理。",
            isStar: false
        },
        {
            text: "春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明！江流宛转绕芳甸，月照花林皆似霰；空里流霜不觉飞，汀上白沙看不见。江天一色无纤尘，皎皎空中孤月轮。江畔何人初见月？江月何年初照人？人生代代无穷已，江月年年望相似。不知江月待何人，但见长江送流水。白云一片去悠悠，青枫浦上不胜愁。谁家今夜扁舟子？何处相思明月楼？可怜楼上月裴回，应照离人妆镜台。玉户帘中卷不去，捣衣砧上拂还来。此时相望不相闻，愿逐月华流照君。鸿雁长飞光不度，鱼龙潜跃水成文。昨夜闲潭梦落花，可怜春半不还家。江水流春去欲尽，江潭落月复西斜。斜月沉沉藏海雾，碣石潇湘无限路。不知乘月几人归，落月摇情满江树。",
            isStar: false
        },
        {
            text: "汉皇重色思倾国，御宇多年求不得。杨家有女初长成，养在深闺人未识。天生丽质难自弃，一朝选在君王侧。回眸一笑百媚生，六宫粉黛无颜色。春寒赐浴华清池，温泉水滑洗凝脂。侍儿扶起娇无力，始是新承恩泽时。云鬓花颜金步摇，芙蓉帐暖度春宵。春宵苦短日高起，从此君王不早朝。承欢侍宴无闲暇，春从春游夜专夜。后宫佳丽三千人，三千宠爱在一身。金屋妆成娇侍夜，玉楼宴罢醉和春。姊妹弟兄皆列土，可怜光彩生门户。遂令天下父母心，不重生男重生女。骊宫高处入青云，仙乐风飘处处闻。缓歌慢舞凝丝竹，尽日君王看不足。渔阳鼙鼓动地来，惊破霓裳羽衣曲。九重城阙烟尘生，千乘万骑西南行。翠华摇摇行复止，西出都门百余里。六军不发无奈何，宛转蛾眉马前死。花钿委地无人收，翠翘金雀玉搔头。君王掩面救不得，回看血泪相和流。黄埃散漫风萧索，云栈萦纡登剑阁。峨嵋山下少人行，旌旗无光日色薄。蜀江水碧蜀山青，圣主朝朝暮暮情。行宫见月伤心色，夜雨闻铃肠断声。天旋地转回龙驭，到此踌躇不能去。马嵬坡下泥土中，不见玉颜空死处。君臣相顾尽沾衣，东望都门信马归。归来池苑皆依旧，太液芙蓉未央柳。芙蓉如面柳如眉，对此如何不泪垂。春风桃李花开夜，秋雨梧桐叶落时。西宫南苑多秋草，落叶满阶红不扫。梨园弟子白发新，椒房阿监青娥老。夕殿萤飞思悄然，孤灯挑尽未成眠。迟迟钟鼓初长夜，耿耿星河欲曙天。鸳鸯瓦冷霜华重，翡翠衾寒谁与共。悠悠生死别经年，魂魄不曾来入梦。临邛道士鸿都客，能以精诚致魂魄。为感君王辗转思，遂教方士殷勤觅。排空驭气奔如电，升天入地求之遍。上穷碧落下黄泉，两处茫茫皆不见。忽闻海上有仙山，山在虚无缥渺间。楼阁玲珑五云起，其中绰约多仙子。中有一人字太真，雪肤花貌参差是。金阙西厢叩玉扃，转教小玉报双成。闻道汉家天子使，九华帐里梦魂惊。揽衣推枕起徘徊，珠箔银屏迤逦开。云鬓半偏新睡觉，花冠不整下堂来。风吹仙袂飘飖举，犹似霓裳羽衣舞。玉容寂寞泪阑干，梨花一枝春带雨。含情凝睇谢君王，一别音容两渺茫。昭阳殿里恩爱绝，蓬莱宫中日月长。回头下望人寰处，不见长安见尘雾。惟将旧物表深情，钿合金钗寄将去。钗留一股合一扇，钗擘黄金合分钿。但令心似金钿坚，天上人间会相见。临别殷勤重寄词，词中有誓两心知。七月七日长生殿，夜半无人私语时。在天愿作比翼鸟，在地愿为连理枝。天长地久有时尽，此恨绵绵无绝期。",
            isStar: false
},],
    isSetInfo: false,
    isSetTheme: false
  },
  mutations: {
    // 获取组信息
    getGroupInfo(stat,item){
      stat.groupInfo = item
    },
    // 组列表
    groupList(stat,list){
      stat.taskGroup = list
    },
    addGroup(stat,item){
      stat.taskGroup.push(item as never)
    },
    delGroup(stat,id){
      const index = stat.taskGroup.findIndex((el: any) => el.id === parseInt(id))
      stat.taskGroup.splice(index,1)
    },
    // 切换侧滑栏
    toggleSide(stat){
      stat.isSide = !stat.isSide;   
    },
    // 关闭用户信息设置
    toggleSetInfo(stat){
      stat.isSetInfo = !stat.isSetInfo;
    },
    // 关闭主题切换
    toggleSetTheme(stat){
      stat.isSetTheme = !stat.isSetTheme;
    }
  }
})