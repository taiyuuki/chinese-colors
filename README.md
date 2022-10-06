<p align="center">
<img src="https://taiyuuki.github.io/Sophie-M/images/chinese_colors_logo.png" style="width:100px;" />
</p>


<h1 align="center">Chinese Colors</h1>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=taiyuuki.chinese-color">
<img alt="Marketplace Version" src="https://img.shields.io/visual-studio-marketplace/v/taiyuuki.chinese-color?color=%23813c85&label=Marketplace&logo=visual%20studio%20code"></a>
 <img alt="Visual Studio Marketplace Installs" src="https://img.shields.io/visual-studio-marketplace/i/taiyuuki.chinese-color">
 <a href="https://github.com/taiyuuki/chinese-colors"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/taiyuuki/chinese-colors?style=social"></a>
</p>


<p align="center">
VS Code扩展，以代码提示的方式列出预设的颜色——中国传统色。
</p>
<p align="center">
<img src="https://taiyuuki.github.io/Sophie-M/images/chinese_colors_preview.gif" style="width:100%;" /></p>


## 1. 使用

* 输入<span style="color:HotPink">`# + 颜色名`</span>即可列出预设的颜色，如果输入后没有反应请尝试 <span style="color:HotPink">`Ctrl + i`</span> 。

* 支持汉字、拼音。例如：输入<span style="color:HotPink">`#红`</span>或<span style="color:HotPink">`#hong`</span>，就会列出所有与红色相关的颜色。

## 2. 配置项

### 2.1 自定义颜色

在setting.json中编辑custom字段，可以添加自定的颜色，它是一个数组：

```json
{
    "custom": [
        { 
            "name": "我的颜色",
            "phonics": "wodeyanse",
            "rgb": [87, 204, 153] 
        }
    ]
}
```

* `name`：颜色名称，输入时被匹配。
* `phonics`：注音或拼音，输入时被匹配。
* `rgb`：rgb颜色值，由数字构成的数组，可以有alpha通道，例如：[87, 204, 153,  0.5]。

保存setting.json后，重启编辑器生效。

### 2.2 颜色格式

颜色代码默认采用`16进制`格式，如果想使用RGB格式，可以在设置中勾选“控制预设的中国色采用RGB格式”。

### 2.3 颜色预览

默认开启了颜色预览功能，并可以显示颜色名称，如果不需要预览，可以在设置面板中将“颜色预览”去除勾选。

### 2.4 日本传统色

插件内置了日本传统色选项，包含200+个颜色，输入罗马音或颜色名进行匹配。该选项默认关闭。

<h2 align="center"> 颜色一览</h2>

颜色来自：[中国色](http://zhongguose.com/)，共收录500+颜色，这里只列出名称，具体请查看原网址。

|                             -                             |                            -                             |                            -                            |                           -                            |                           -                            |                           -                            |
| :-------------------------------------------------------: | :------------------------------------------------------: | :-----------------------------------------------------: | :----------------------------------------------------: | :----------------------------------------------------: | :----------------------------------------------------: |
|    <span  style="color:rgb(92, 34, 35)">暗玉紫</span>     | <span style="color:rgb(238, 162,  164)">牡丹粉红</span>  |    <span style="color:rgb(90, 25,  27)">栗紫</span>     | <span style="color:rgb(240, 124,  130)">香叶红</span>  |  <span style="color:rgb(90, 18,  22)">葡萄酱紫</span>  |   <span style="color:rgb(237, 90,  101)">艳红</span>   |
|     <span style="color:rgb(192, 72,  81)">玉红</span>     |    <span style="color:rgb(238, 63, 77)">茶花红</span>    |   <span style="color:rgb(192, 44, 56)">高粱红</span>    |   <span style="color:rgb(167, 83, 90)">满江红</span>   |  <span style="color:rgb(227, 180, 184)">鼠鼻红</span>  |  <span style="color:rgb(240, 161, 168)">合欢红</span>  |
|   <span style="color:rgb(241, 147,  156)">春梅红</span>   |    <span style="color:rgb(166, 27, 41)">苋菜红</span>    |    <span style="color:rgb(137, 78, 84)">烟红</span>     |   <span style="color:rgb(196, 90, 101)">莓红</span>    |   <span style="color:rgb(209, 26, 45)">鹅冠红</span>   |   <span style="color:rgb(194, 31, 48)">枫叶红</span>   |
|   <span style="color:rgb(222, 28,  49)">唐菖蒲红</span>   |     <span style="color:rgb(124, 24, 35)">枣红</span>     |    <span style="color:rgb(84, 30, 36)">猪肝紫</span>    |   <span style="color:rgb(76, 31, 36)">葡萄紫</span>    |  <span style="color:rgb(130, 32, 43)">暗紫苑红</span>  |    <span style="color:rgb(130, 17, 31)">殷红</span>    |
|   <span style="color:rgb(239, 71,  93)">草茉莉红</span>   |     <span style="color:rgb(77, 16, 24)">酱紫</span>      |   <span style="color:rgb(237, 85, 106)">山茶红</span>   |   <span style="color:rgb(122, 115, 116)">锌灰</span>   |   <span style="color:rgb(240, 55, 82)">海棠红</span>   |  <span style="color:rgb(230, 210, 213)">蓟粉红</span>  |
|   <span style="color:rgb(240, 201,  207)">石蕊红</span>   |    <span style="color:rgb(238, 39, 70)">淡曙红</span>    |     <span style="color:rgb(43, 18, 22)">李紫</span>     |   <span style="color:rgb(238, 72, 99)">石竹红</span>   |  <span style="color:rgb(231, 124, 142)">淡茜红</span>  |   <span style="color:rgb(80, 10, 22)">金鱼紫</span>    |
|  <span style="color:rgb(194, 124,  136)">山黎豆红</span>  |    <span style="color:rgb(115, 87, 92)">鼠背灰</span>    |  <span style="color:rgb(238, 72, 102)">淡蕊香红</span>  |   <span style="color:rgb(98, 22, 36)">甘蔗紫</span>    |  <span style="color:rgb(206, 87, 109)">月季红</span>   |  <span style="color:rgb(204, 22, 58)">尖晶玉红</span>  |
|    <span style="color:rgb(241, 196,  205)">水红</span>    |    <span style="color:rgb(238, 184, 195)">姜红</span>    |   <span style="color:rgb(133, 109, 114)">芦灰</span>    |   <span style="color:rgb(45, 12, 19)">茄皮紫</span>    |   <span style="color:rgb(54, 40, 43)">苍蝇灰</span>    |   <span style="color:rgb(191, 53, 83)">锦葵红</span>   |
|  <span style="color:rgb(236, 155,  173)">粉团花红</span>  |     <span style="color:rgb(99, 7, 28)">石竹紫</span>     |    <span style="color:rgb(48, 22, 28)">卵石紫</span>    |   <span style="color:rgb(238, 166, 183)">晶红</span>   |  <span style="color:rgb(233, 204, 211)">芝兰紫</span>  | <span style="color:rgb(235, 160, 179)">芍药耕红</span> |
|    <span style="color:rgb(79, 56,  62)">暮云灰</span>     |   <span style="color:rgb(237, 157, 178)">豇豆红</span>   |  <span style="color:rgb(236, 138, 164)">报春红</span>   |  <span style="color:rgb(236, 118, 150)">淡绛红</span>  | <span style="color:rgb(234, 114, 147)">凤仙花红</span> |  <span style="color:rgb(239, 130, 160)">霞光红</span>  |
|   <span style="color:rgb(236, 44,  100)">喜蛋红</span>    |  <span style="color:rgb(235, 80, 126)">夹竹桃红</span>   | <span style="color:rgb(235, 60, 112)">松叶牡丹红</span> |  <span style="color:rgb(234, 81, 127)">莲瓣红</span>   |  <span style="color:rgb(222, 120, 151)">白芨红</span>  |  <span style="color:rgb(181, 152, 161)">隐红灰</span>  |
|   <span style="color:rgb(237, 47,  106)">榲桲红</span>    |  <span style="color:rgb(197, 112, 139)">酢酱草红</span>  |    <span style="color:rgb(51, 20, 30)">火鹅紫</span>    |   <span style="color:rgb(98, 29, 52)">鹞冠紫</span>    |   <span style="color:rgb(239, 52, 115)">品红</span>    |   <span style="color:rgb(56, 33, 41)">磨石紫</span>    |
|     <span style="color:rgb(49, 15,  27)">墨紫</span>      |     <span style="color:rgb(56, 25, 36)">檀紫</span>      |  <span style="color:rgb(225, 108, 150)">初荷红</span>   |   <span style="color:rgb(149, 28, 72)">菜头紫</span>   |  <span style="color:rgb(98, 16, 46)">葡萄酒红</span>   |  <span style="color:rgb(224, 200, 209)">淡青紫</span>  |
|   <span style="color:rgb(209, 60,  116)">菠根红</span>    |    <span style="color:rgb(75, 30, 47)">海象紫</span>     |   <span style="color:rgb(236, 78, 138)">兔眼红</span>   |  <span style="color:rgb(222, 63, 124)">嫩菱红</span>   |  <span style="color:rgb(168, 69, 107)">洋葱紫</span>   | <span style="color:rgb(206, 94, 138)">吊钟花红</span>  |
|     <span style="color:rgb(70, 22,  41)">绀紫</span>      |   <span style="color:rgb(238, 44, 121)">紫荆红</span>    |  <span style="color:rgb(239, 73, 139)">扁豆花红</span>  | <span style="color:rgb(237, 227, 231)">马鞭草紫</span> |  <span style="color:rgb(236, 45, 122)">藏花红</span>   |   <span style="color:rgb(72, 41, 54)">斑鸠灰</span>    |
|    <span style="color:rgb(68, 14,  37)">古铜紫</span>     |   <span style="color:rgb(210, 86, 140)">丹紫红</span>    | <span style="color:rgb(233, 215, 223)">丁香淡紫</span>  |  <span style="color:rgb(210, 53, 125)">玫瑰红</span>   |   <span style="color:rgb(54, 41, 47)">古鼎灰</span>    |  <span style="color:rgb(210, 118, 163)">菱锰红</span>  |
|   <span style="color:rgb(192, 111,  152)">樱草紫</span>   |   <span style="color:rgb(204, 85, 149)">龙须红</span>    |  <span style="color:rgb(195, 86, 145)">电气石红</span>  |  <span style="color:rgb(186, 47, 123)">玫瑰紫</span>   |  <span style="color:rgb(155, 30, 100)">苋菜紫</span>   |    <span style="color:rgb(93, 63, 81)">紫灰</span>     |
|   <span style="color:rgb(78, 42,  64)">龙睛鱼紫</span>    |  <span style="color:rgb(188, 132, 168)">青蛤壳紫</span>  |  <span style="color:rgb(192, 142, 175)">萝兰紫</span>   |   <span style="color:rgb(65, 28, 53)">荸荠紫</span>    |  <span style="color:rgb(173, 101, 152)">豆蔻紫</span>  |  <span style="color:rgb(163, 92, 143)">扁豆紫</span>   |
|    <span style="color:rgb(104, 23,  82)">牵牛紫</span>    |    <span style="color:rgb(137, 66, 118)">芓紫</span>     |   <span style="color:rgb(126, 32, 101)">葛巾紫</span>   |   <span style="color:rgb(139, 38, 113)">青莲</span>    |  <span style="color:rgb(152, 54, 128)">芥花紫</span>   |  <span style="color:rgb(200, 173, 196)">凤信紫</span>  |
|   <span style="color:rgb(28, 13,  26)">深牵牛紫</span>    |    <span style="color:rgb(126, 22, 113)">魏紫</span>     |    <span style="color:rgb(30, 19, 29)">乌梅紫</span>    |  <span style="color:rgb(129, 60, 133)">桔梗紫</span>   | <span style="color:rgb(209, 194, 211)">淡牵牛紫</span> |   <span style="color:rgb(62, 56, 65)">剑锋紫</span>    |
|    <span style="color:rgb(129, 92,  148)">蕈紫</span>     |    <span style="color:rgb(128, 109, 158)">槿紫</span>    |  <span style="color:rgb(226, 225, 228)">芡食白</span>   |   <span style="color:rgb(50, 47, 59)">龙葵紫</span>    |  <span style="color:rgb(128, 118, 163)">藤萝紫</span>  |   <span style="color:rgb(53, 51, 60)">沙鱼灰</span>    |
|   <span style="color:rgb(34, 32,  46)">暗龙胆紫</span>    |    <span style="color:rgb(19, 17, 36)">暗蓝紫</span>     |   <span style="color:rgb(48, 47, 75)">野葡萄紫</span>   |   <span style="color:rgb(82, 82, 136)">野菊紫</span>   |   <span style="color:rgb(47, 47, 53)">水牛灰</span>    |  <span style="color:rgb(204, 204, 214)">远山紫</span>  |
|   <span style="color:rgb(116, 117,  155)">螺甸紫</span>   |    <span style="color:rgb(31, 32, 64)">晶石紫</span>     |  <span style="color:rgb(46, 49, 124)">满天星紫</span>   |  <span style="color:rgb(167, 168, 189)">淡蓝紫</span>  |  <span style="color:rgb(97, 100, 159)">山梗紫</span>   |   <span style="color:rgb(45, 46, 54)">牛角灰</span>    |
|    <span style="color:rgb(94, 97,  109)">鱼尾灰</span>    |    <span style="color:rgb(71, 72, 76)">瓦罐灰</span>     |     <span style="color:rgb(15, 20, 35)">钢蓝</span>     |   <span style="color:rgb(19, 24, 36)">燕颔蓝</span>    |   <span style="color:rgb(71, 81, 100)">鲸鱼灰</span>   |    <span style="color:rgb(43, 51, 62)">青灰</span>     |
|     <span style="color:rgb(28, 41,  56)">鸽蓝</span>      |     <span style="color:rgb(16, 31, 48)">暗蓝</span>      |     <span style="color:rgb(20, 35, 52)">钢青</span>     |   <span style="color:rgb(21, 85, 154)">海涛蓝</span>   |  <span style="color:rgb(15, 89, 164)">飞燕草蓝</span>  |    <span style="color:rgb(22, 97, 171)">靛青</span>    |
|   <span style="color:rgb(49, 112,  167)">安安蓝</span>    |   <span style="color:rgb(52, 108, 156)">海军蓝</span>    |   <span style="color:rgb(39, 117, 182)">景泰蓝</span>   |   <span style="color:rgb(43, 115, 175)">品蓝</span>    |  <span style="color:rgb(36, 116, 181)">尼罗蓝</span>   |  <span style="color:rgb(78, 124, 161)">蝶翅蓝</span>   |
|    <span style="color:rgb(35, 118,  183)">花青</span>     |     <span style="color:rgb(20, 74, 116)">鷃蓝</span>     |   <span style="color:rgb(147, 181, 207)">星蓝</span>    |   <span style="color:rgb(33, 119, 184)">虹蓝</span>    |  <span style="color:rgb(18, 107, 174)">柏林蓝</span>   |   <span style="color:rgb(23, 114, 180)">群青</span>    |
|   <span style="color:rgb(186, 204,  217)">云水蓝</span>   |  <span style="color:rgb(97, 154, 195)">羽扇豆蓝</span>   |   <span style="color:rgb(73, 92, 105)">战舰灰</span>    |  <span style="color:rgb(143, 178, 201)">晴山蓝</span>  |   <span style="color:rgb(86, 152, 195)">睛蓝</span>    |  <span style="color:rgb(17, 101, 154)">搪磁蓝</span>   |
|    <span style="color:rgb(41, 131,  187)">潮蓝</span>     |    <span style="color:rgb(22, 119, 179)">天蓝</span>     | <span style="color:rgb(196, 203, 207)">大理石灰</span>  | <span style="color:rgb(17, 119, 176)">牵牛花蓝</span>  |  <span style="color:rgb(36, 134, 185)">宝石蓝</span>   |  <span style="color:rgb(94, 121, 135)">淡蓝灰</span>   |
|    <span style="color:rgb(116, 120,  122)">嫩灰</span>    |   <span style="color:rgb(205, 209, 211)">银鱼白</span>   |    <span style="color:rgb(23, 129, 181)">釉蓝</span>    |  <span style="color:rgb(102, 169, 201)">涧石蓝</span>  |  <span style="color:rgb(208, 223, 230)">远天蓝</span>  |  <span style="color:rgb(47, 144, 185)">云山蓝</span>   |
|   <span style="color:rgb(138, 188,  209)">秋波蓝</span>   |   <span style="color:rgb(195, 215, 223)">井天蓝</span>   |   <span style="color:rgb(21, 139, 184)">鸢尾蓝</span>   |  <span style="color:rgb(216, 227, 231)">云峰白</span>  |   <span style="color:rgb(178, 187, 190)">星灰</span>   |   <span style="color:rgb(26, 148, 188)">钴蓝</span>    |
|    <span style="color:rgb(92, 179,  204)">碧青</span>     |     <span style="color:rgb(19, 72, 87)">苍蓝</span>      |    <span style="color:rgb(19, 44, 51)">深灰蓝</span>    |    <span style="color:rgb(33, 55, 61)">灰蓝</span>     |  <span style="color:rgb(176, 213, 223)">湖水蓝</span>  |   <span style="color:rgb(34, 162, 195)">海青</span>    |
|    <span style="color:rgb(71, 75,  76)">黄昏灰</span>     |    <span style="color:rgb(99, 187, 208)">霁青</span>     |   <span style="color:rgb(18, 110, 130)">玉鈫蓝</span>   |  <span style="color:rgb(15, 149, 176)">胆矾蓝</span>   |  <span style="color:rgb(20, 145, 168)">樫鸟蓝</span>   |   <span style="color:rgb(199, 210, 212)">鸥蓝</span>   |
|    <span style="color:rgb(30, 158,  179)">翠蓝</span>     |   <span style="color:rgb(59, 129, 140)">蜻蜓蓝</span>    |   <span style="color:rgb(14, 176, 201)">孔雀蓝</span>   |   <span style="color:rgb(41, 183, 203)">蔚蓝</span>    |  <span style="color:rgb(81, 196, 211)">瀑布蓝</span>   |   <span style="color:rgb(124, 171, 177)">闪蓝</span>   |
|   <span style="color:rgb(16, 174,  194)">甸子蓝</span>    |   <span style="color:rgb(100, 142, 147)">晚波蓝</span>   |  <span style="color:rgb(147, 213, 220)">清水蓝</span>   |  <span style="color:rgb(97, 113, 114)">夏云灰</span>   |  <span style="color:rgb(198, 230, 232)">海天蓝</span>  |  <span style="color:rgb(134, 157, 157)">虾壳青</span>  |
|    <span style="color:rgb(87, 195,  194)">石绿</span>     |    <span style="color:rgb(196, 215, 214)">穹灰</span>    |   <span style="color:rgb(18, 170, 156)">美蝶绿</span>   |   <span style="color:rgb(115, 124, 123)">垩灰</span>   |   <span style="color:rgb(18, 161, 130)">蓝绿</span>    |   <span style="color:rgb(27, 167, 132)">竹绿</span>    |
|   <span style="color:rgb(66, 134,  117)">亚丁绿</span>    |   <span style="color:rgb(192, 196, 195)">月影白</span>   |   <span style="color:rgb(36, 128, 103)">海王绿</span>   |   <span style="color:rgb(26, 59, 50)">深海绿</span>    |    <span style="color:rgb(49, 74, 67)">绿灰</span>     |  <span style="color:rgb(44, 150, 120)">青矾绿</span>   |
|     <span style="color:rgb(34, 62,  54)">苍绿</span>      |   <span style="color:rgb(73, 117, 104)">飞泉绿</span>    |    <span style="color:rgb(20, 30, 27)">莽丛绿</span>    |  <span style="color:rgb(105, 167, 148)">梧枝绿</span>  |   <span style="color:rgb(43, 174, 133)">铜绿</span>    | <span style="color:rgb(154, 190, 175)">草原远绿</span> |
|    <span style="color:rgb(69, 183,  135)">蛙绿</span>     |   <span style="color:rgb(146, 179, 165)">浪花绿</span>   |    <span style="color:rgb(31, 38, 35)">苷蓝绿</span>    |   <span style="color:rgb(131, 203, 172)">粉绿</span>   |  <span style="color:rgb(112, 136, 125)">淡绿灰</span>  |  <span style="color:rgb(85, 187, 138)">麦苗绿</span>   |
|     <span style="color:rgb(32, 161,  98)">翠绿</span>     |    <span style="color:rgb(64, 160, 112)">葱绿</span>     |   <span style="color:rgb(26, 104, 64)">荷叶绿</span>    |   <span style="color:rgb(97, 172, 133)">淡绿</span>    |  <span style="color:rgb(104, 184, 142)">田园绿</span>  |  <span style="color:rgb(164, 202, 182)">玉簪绿</span>  |
|    <span style="color:rgb(60, 149,  102)">蟾绿</span>     |   <span style="color:rgb(93, 190, 138)">蔻梢绿</span>    |   <span style="color:rgb(32, 127, 76)">薄荷绿</span>    |   <span style="color:rgb(238, 247, 242)">月白</span>   | <span style="color:rgb(87, 149, 114)">蛋白石绿</span>  |  <span style="color:rgb(185, 222, 201)">竹篁绿</span>  |
|    <span style="color:rgb(34, 148,  83)">孔雀绿</span>    |    <span style="color:rgb(32, 137, 77)">宫殿绿</span>    |    <span style="color:rgb(21, 35, 27)">云杉绿</span>    |   <span style="color:rgb(102, 193, 140)">毛绿</span>   |  <span style="color:rgb(164, 172, 167)">冰山蓝</span>  |   <span style="color:rgb(138, 152, 142)">明灰</span>   |
|    <span style="color:rgb(158, 204,  171)">明绿</span>    |   <span style="color:rgb(131, 167, 141)">松霜绿</span>   |   <span style="color:rgb(72, 91, 77)">白屈菜绿</span>   |   <span style="color:rgb(93, 101, 95)">狼烟灰</span>   |  <span style="color:rgb(110, 139, 116)">瓦松绿</span>  |  <span style="color:rgb(43, 49, 44)">槲寄生绿</span>   |
|   <span style="color:rgb(198, 223,  200)">淡翠绿</span>   |    <span style="color:rgb(65, 179, 73)">玉髓绿</span>    |    <span style="color:rgb(67, 178, 68)">鲜绿</span>     |    <span style="color:rgb(37, 61, 36)">油绿</span>     |   <span style="color:rgb(65, 174, 60)">宝石绿</span>   | <span style="color:rgb(173, 213, 162)">嘉陵水绿</span> |
|    <span style="color:rgb(94, 102,  91)">田螺绿</span>    |    <span style="color:rgb(140, 194, 105)">水绿</span>    |   <span style="color:rgb(91, 174, 35)">鹦鹉绿</span>    |  <span style="color:rgb(223, 236, 213)">艾背绿</span>  |   <span style="color:rgb(202, 211, 195)">艾绿</span>   |   <span style="color:rgb(159, 163, 154)">镍灰</span>   |
|  <span style="color:rgb(178, 207,  135)">橄榄石绿</span>  |    <span style="color:rgb(150, 194, 78)">芽绿</span>     |  <span style="color:rgb(240, 245, 229)">嫩菊绿</span>   |  <span style="color:rgb(183, 208, 122)">芦苇绿</span>  |   <span style="color:rgb(208, 222, 170)">姚黄</span>   |   <span style="color:rgb(55, 56, 52)">蒽油绿</span>    |
|   <span style="color:rgb(186, 207,  101)">苹果绿</span>   |   <span style="color:rgb(226, 231, 191)">海沬绿</span>   |  <span style="color:rgb(190, 201, 54)">橄榄黄绿</span>  | <span style="color:rgb(210, 217, 122)">槐花黄绿</span> |   <span style="color:rgb(226, 216, 73)">蝶黄</span>    |  <span style="color:rgb(255, 254, 248)">象牙白</span>  |
|    <span style="color:rgb(94, 83,  20)">橄榄绿</span>     |    <span style="color:rgb(255, 254, 249)">雪白</span>    |   <span style="color:rgb(173, 158, 85)">淡灰绿</span>   |  <span style="color:rgb(254, 215, 26)">佛手黄</span>   |   <span style="color:rgb(249, 244, 220)">乳白</span>   |  <span style="color:rgb(228, 191, 17)">香蕉黄</span>   |
|   <span style="color:rgb(210, 177,  22)">新禾绿</span>    |  <span style="color:rgb(251, 218, 65)">油菜花黄</span>   |   <span style="color:rgb(238, 208, 69)">秋葵黄</span>   |   <span style="color:rgb(241, 202, 23)">柚黄</span>    |   <span style="color:rgb(210, 180, 44)">草黄</span>    |  <span style="color:rgb(242, 206, 43)">硫华黄</span>   |
|    <span style="color:rgb(226, 192,  39)">姜黄</span>     |    <span style="color:rgb(100, 88, 34)">潭水绿</span>    |   <span style="color:rgb(252, 210, 23)">金瓜黄</span>   |  <span style="color:rgb(248, 223, 112)">麦秆黄</span>  |   <span style="color:rgb(223, 194, 67)">蒿黄</span>    |  <span style="color:rgb(248, 223, 114)">茉莉黄</span>  |
|    <span style="color:rgb(254, 209,  16)">藤黄</span>     |   <span style="color:rgb(221, 200, 113)">芒果黄</span>   |  <span style="color:rgb(255, 254, 250)">海参灰</span>   | <span style="color:rgb(134, 112, 24)">碧螺春绿</span>  |   <span style="color:rgb(136, 115, 34)">苔绿</span>    |  <span style="color:rgb(252, 211, 55)">柠檬黄</span>   |
|   <span style="color:rgb(142, 128,  75)">草灰绿</span>    |  <span style="color:rgb(254, 204, 17)">向日葵黄</span>   |   <span style="color:rgb(252, 203, 22)">素馨黄</span>   |  <span style="color:rgb(255, 201, 12)">乳鸭黄</span>   |   <span style="color:rgb(183, 174, 143)">月灰</span>   |  <span style="color:rgb(248, 216, 106)">葵扇黄</span>  |
|   <span style="color:rgb(251, 205,  49)">大豆黄</span>    |    <span style="color:rgb(252, 195, 7)">金盏黄</span>    |  <span style="color:rgb(233, 221, 182)">菊蕾白</span>   |  <span style="color:rgb(252, 197, 21)">黄连黄</span>   |  <span style="color:rgb(249, 236, 195)">杏仁黄</span>  |    <span style="color:rgb(232, 176, 4)">谷黄</span>    |
|   <span style="color:rgb(249, 193,  22)">木瓜黄</span>    |   <span style="color:rgb(249, 215, 112)">淡茧黄</span>   |   <span style="color:rgb(251, 200, 47)">雅梨黄</span>   |   <span style="color:rgb(241, 240, 237)">银白</span>   |   <span style="color:rgb(91, 73, 19)">棕榈绿</span>    | <span style="color:rgb(246, 196, 48)">鹦鹉冠黄</span>  |
|    <span style="color:rgb(183, 141,  18)">枯绿</span>     |   <span style="color:rgb(249, 189, 16)">浅烙黄</span>    |  <span style="color:rgb(249, 211, 103)">淡密黄</span>   |   <span style="color:rgb(217, 164, 14)">芥黄</span>    |  <span style="color:rgb(235, 177, 13)">栀子黄</span>   |  <span style="color:rgb(88, 71, 23)">暗海水绿</span>   |
|    <span style="color:rgb(247, 222,  152)">篾黄</span>    |   <span style="color:rgb(249, 241, 219)">蚌肉白</span>   |  <span style="color:rgb(244, 206, 105)">炒米黄</span>   |   <span style="color:rgb(254, 186, 7)">琥珀黄</span>   |   <span style="color:rgb(138, 105, 19)">灰绿</span>    |  <span style="color:rgb(135, 104, 24)">粽叶绿</span>   |
|    <span style="color:rgb(182, 164,  118)">尘灰</span>    |    <span style="color:rgb(252, 183, 10)">鼬黄</span>     |  <span style="color:rgb(240, 214, 149)">象牙黄</span>   |   <span style="color:rgb(135, 114, 62)">鲛青</span>    |  <span style="color:rgb(248, 232, 193)">豆汁黄</span>  |   <span style="color:rgb(214, 160, 29)">土黄</span>    |
| <span style="color:rgb(247, 218,  148)">香水玫瑰黄</span> |   <span style="color:rgb(234, 173, 26)">虎皮黄</span>    |   <span style="color:rgb(251, 182, 18)">鸡蛋黄</span>   |  <span style="color:rgb(181, 170, 144)">银鼠灰</span>  |  <span style="color:rgb(247, 244, 237)">鱼肚白</span>  | <span style="color:rgb(248, 188, 49)">初熟杏黄</span>  |
|   <span style="color:rgb(183, 139,  38)">山鸡黄</span>    |   <span style="color:rgb(229, 211, 170)">莲子白</span>   |   <span style="color:rgb(105, 94, 69)">蟹壳灰</span>    |  <span style="color:rgb(229, 183, 81)">沙石黄</span>   |  <span style="color:rgb(243, 191, 76)">甘草黄</span>   |   <span style="color:rgb(104, 94, 72)">燕羽灰</span>   |
|   <span style="color:rgb(251, 185,  41)">鹅掌黄</span>    |  <span style="color:rgb(249, 210, 125)">麦芽糖黄</span>  |  <span style="color:rgb(226, 193, 124)">浅驼色</span>   | <span style="color:rgb(180, 169, 146)">百灵鸟灰</span> |   <span style="color:rgb(246, 222, 173)">酪黄</span>   |  <span style="color:rgb(242, 230, 206)">荔肉白</span>  |
|   <span style="color:rgb(248, 224,  176)">淡肉色</span>   |    <span style="color:rgb(57, 55, 51)">河豚灰</span>     |   <span style="color:rgb(131, 94, 29)">蜴蜊绿</span>    |  <span style="color:rgb(248, 244, 237)">汉白玉</span>  |   <span style="color:rgb(252, 161, 4)">橙皮黄</span>   |  <span style="color:rgb(129, 95, 37)">莱阳梨黄</span>  |
|    <span style="color:rgb(252, 161,  6)">枇杷黄</span>    |   <span style="color:rgb(255, 166, 15)">金叶黄</span>    |    <span style="color:rgb(128, 99, 50)">苍黄</span>     |   <span style="color:rgb(251, 242, 227)">粉白</span>   |  <span style="color:rgb(251, 164, 20)">淡橘橙</span>   |  <span style="color:rgb(228, 223, 215)">珍珠灰</span>  |
|   <span style="color:rgb(130, 107,  72)">龟背黄</span>    |    <span style="color:rgb(218, 212, 203)">浅灰</span>    |   <span style="color:rgb(187, 181, 172)">铅灰</span>    |   <span style="color:rgb(187, 181, 172)">中灰</span>   |    <span style="color:rgb(255, 153, 0)">雄黄</span>    |   <span style="color:rgb(251, 185, 87)">蜜黄</span>    |
|   <span style="color:rgb(220, 145,  35)">风帆黄</span>    |  <span style="color:rgb(192, 147, 81)">桂皮淡棕</span>   |   <span style="color:rgb(244, 168, 58)">金莺黄</span>   |   <span style="color:rgb(247, 193, 115)">肉色</span>   |  <span style="color:rgb(231, 162, 63)">凋叶棕</span>   |   <span style="color:rgb(83, 60, 27)">古铜绿</span>    |
|  <span style="color:rgb(249, 232,  208)">落英淡粉</span>  |   <span style="color:rgb(222, 158, 68)">软木黄</span>    |  <span style="color:rgb(249, 203, 139)">瓜瓤粉</span>   |  <span style="color:rgb(249, 166, 51)">榴萼黄</span>   |  <span style="color:rgb(218, 164, 90)">玳瑁黄</span>   |   <span style="color:rgb(85, 59, 24)">焦茶绿</span>    |
|    <span style="color:rgb(81, 60,  32)">蟹壳绿</span>     |   <span style="color:rgb(152, 101, 36)">山鸡褐</span>    |  <span style="color:rgb(151, 132, 108)">猴毛灰</span>   |  <span style="color:rgb(227, 189, 141)">鹿角棕</span>  |   <span style="color:rgb(77, 64, 48)">淡松烟</span>    |  <span style="color:rgb(251, 139, 5)">万寿菊黄</span>  |
|   <span style="color:rgb(248, 195,  135)">蛋壳黄</span>   |    <span style="color:rgb(250, 142, 22)">杏黄</span>     |    <span style="color:rgb(80, 62, 42)">橄榄灰</span>    |    <span style="color:rgb(74, 64, 53)">鹤灰</span>     |  <span style="color:rgb(207, 204, 201)">玛瑙灰</span>  |  <span style="color:rgb(193, 178, 163)">淡银灰</span>  |
|    <span style="color:rgb(134, 126,  118)">瓦灰</span>    |    <span style="color:rgb(132, 124, 116)">夜灰</span>    |   <span style="color:rgb(252, 140, 35)">北瓜黄</span>   |  <span style="color:rgb(251, 236, 222)">荷花白</span>  |   <span style="color:rgb(79, 64, 50)">松鼠灰</span>    |  <span style="color:rgb(251, 238, 226)">淡米粉</span>  |
|    <span style="color:rgb(129, 119,  110)">深灰</span>    |   <span style="color:rgb(154, 136, 120)">海鸥灰</span>   |     <span style="color:rgb(93, 61, 33)">茶褐</span>     |    <span style="color:rgb(102, 70, 42)">驼色</span>    |   <span style="color:rgb(145, 128, 114)">银灰</span>   |  <span style="color:rgb(217, 145, 86)">鹿皮褐</span>   |
|   <span style="color:rgb(193, 101,  26)">槟榔综</span>    |    <span style="color:rgb(212, 196, 183)">晓灰</span>    |    <span style="color:rgb(190, 126, 74)">淡赭</span>    |   <span style="color:rgb(92, 55, 25)">古铜褐</span>    |   <span style="color:rgb(222, 118, 34)">麂棕</span>    |  <span style="color:rgb(219, 133, 64)">醉瓜肉</span>   |
|    <span style="color:rgb(128, 118,  110)">雁灰</span>    |   <span style="color:rgb(240, 156, 90)">鲑鱼红</span>    |    <span style="color:rgb(249, 125, 28)">橘橙</span>    |   <span style="color:rgb(242, 123, 31)">金黄</span>    |  <span style="color:rgb(248, 179, 127)">玫瑰粉</span>  | <span style="color:rgb(250, 126, 35)">美人焦橙</span>  |
|    <span style="color:rgb(249, 223,  205)">米色</span>    |   <span style="color:rgb(183, 160, 145)">蛛网灰</span>   |   <span style="color:rgb(148, 88, 51)">淡咖啡</span>    |  <span style="color:rgb(240, 148, 93)">海螺橙</span>   |   <span style="color:rgb(150, 77, 34)">岩石棕</span>   |   <span style="color:rgb(149, 68, 22)">芒果棕</span>   |
|   <span style="color:rgb(225, 103,  35)">陶瓷红</span>    |   <span style="color:rgb(252, 121, 48)">菠萝红</span>    |   <span style="color:rgb(207, 117, 67)">余烬红</span>   | <span style="color:rgb(248, 107, 29)">金莲花橙</span>  |   <span style="color:rgb(205, 98, 39)">火砖红</span>   | <span style="color:rgb(246, 220, 206)">初桃粉红</span> |
|     <span style="color:rgb(216, 89,  22)">铁棕</span>     | <span style="color:rgb(247, 207, 186)">介壳淡粉红</span> |   <span style="color:rgb(242, 118, 53)">蟹壳红</span>   |   <span style="color:rgb(228, 104, 40)">金驼</span>    |   <span style="color:rgb(252, 99, 21)">燕颔红</span>   |  <span style="color:rgb(183, 81, 29)">淡可可棕</span>  |
|   <span style="color:rgb(234, 137,  88)">晨曦红</span>    |   <span style="color:rgb(232, 180, 154)">玉粉红</span>   | <span style="color:rgb(251, 153, 104)">野蔷薇红</span>  |   <span style="color:rgb(237, 195, 174)">藕荷</span>   |   <span style="color:rgb(54, 52, 51)">长石灰</span>    |   <span style="color:rgb(139, 97, 77)">中红灰</span>   |
|   <span style="color:rgb(170, 106,  76)">火泥棕</span>    |     <span style="color:rgb(166, 82, 44)">绀红</span>     |   <span style="color:rgb(250, 93, 25)">莓酱红</span>    |   <span style="color:rgb(113, 54, 29)">丁香棕</span>   | <span style="color:rgb(184, 148, 133)">淡玫瑰灰</span> |  <span style="color:rgb(246, 140, 96)">瓜瓤红</span>   |
|  <span style="color:rgb(246, 173,  143)">淡藏花红</span>  |    <span style="color:rgb(115, 46, 18)">筍皮棕</span>    |   <span style="color:rgb(247, 205, 188)">润红</span>    |  <span style="color:rgb(239, 99, 43)">龙睛鱼红</span>  |   <span style="color:rgb(140, 75, 49)">淡土黄</span>   |   <span style="color:rgb(100, 72, 61)">珠母灰</span>   |
|   <span style="color:rgb(249, 114,  61)">芙蓉红</span>    |    <span style="color:rgb(207, 72, 19)">落霞红</span>    |   <span style="color:rgb(238, 128, 85)">法螺红</span>   |  <span style="color:rgb(248, 235, 230)">草珠红</span>  |    <span style="color:rgb(117, 49, 23)">咖啡</span>    |   <span style="color:rgb(96, 61, 48)">中灰驼</span>    |
|    <span style="color:rgb(136, 58,  30)">椰壳棕</span>    |    <span style="color:rgb(177, 75, 40)">蟹蝥红</span>    |   <span style="color:rgb(135, 61, 36)">淡豆沙</span>    |  <span style="color:rgb(246, 206, 193)">淡桃红</span>  |   <span style="color:rgb(91, 66, 58)">淡铁灰</span>    |   <span style="color:rgb(98, 73, 65)">石板灰</span>    |
|    <span style="color:rgb(103, 52,  36)">淡栗棕</span>    |     <span style="color:rgb(244, 62, 6)">银朱</span>      |   <span style="color:rgb(239, 111, 72)">草莓红</span>   | <span style="color:rgb(244, 199, 186)">洋水仙红</span> |    <span style="color:rgb(237, 81, 38)">朱红</span>    |   <span style="color:rgb(243, 71, 24)">榴花红</span>   |
|     <span style="color:rgb(242, 72,  27)">柿红</span>     |    <span style="color:rgb(101, 43, 28)">可可棕</span>    | <span style="color:rgb(238, 160, 140)">淡罂粟红</span>  |    <span style="color:rgb(240, 75, 34)">大红</span>    |   <span style="color:rgb(105, 42, 27)">柞叶棕</span>   |   <span style="color:rgb(241, 68, 29)">蜻蜓红</span>   |
|    <span style="color:rgb(119, 61,  49)">橡树棕</span>    |    <span style="color:rgb(238, 170, 156)">颊红</span>    |   <span style="color:rgb(240, 173, 160)">桃红</span>    |   <span style="color:rgb(134, 48, 32)">火岩棕</span>   | <span style="color:rgb(242, 231, 229)">淡藤萝紫</span> |    <span style="color:rgb(134, 38, 23)">赭石</span>    |
|    <span style="color:rgb(245, 57,  28)">铁水红</span>    |    <span style="color:rgb(240, 63, 36)">胭脂红</span>    |   <span style="color:rgb(243, 59, 31)">极光红</span>    |   <span style="color:rgb(242, 62, 35)">红汞红</span>   |   <span style="color:rgb(241, 60, 34)">萝卜红</span>   |    <span style="color:rgb(240, 90, 70)">曲红</span>    |
|   <span style="color:rgb(241, 118,  102)">谷鞘红</span>   |    <span style="color:rgb(241, 86, 66)">苹果红</span>    |    <span style="color:rgb(242, 90, 71)">桂红</span>     |   <span style="color:rgb(242, 185, 178)">粉红</span>   |   <span style="color:rgb(89, 38, 32)">暗驼棕</span>    |   <span style="color:rgb(222, 42, 24)">夕阳红</span>   |
|    <span style="color:rgb(237, 51,  33)">樱桃红</span>    |    <span style="color:rgb(240, 74, 58)">珊瑚红</span>    |    <span style="color:rgb(72, 37, 34)">火山棕</span>    |    <span style="color:rgb(92, 30, 25)">栗棕</span>     |   <span style="color:rgb(212, 37, 23)">鹤顶红</span>   |   <span style="color:rgb(241, 151, 144)">舌红</span>   |
|   <span style="color:rgb(171, 55,  47)">鹅血石红</span>   |     <span style="color:rgb(90, 31, 27)">酱棕</span>      |   <span style="color:rgb(237, 59, 47)">鱼鳃红</span>    |  <span style="color:rgb(189, 174, 173)">芦穗灰</span>  |   <span style="color:rgb(235, 38, 26)">丽春红</span>   |  <span style="color:rgb(172, 31, 24)">覆盆子红</span>  |
|    <span style="color:rgb(72, 51,  50)">海报灰</span>     |     <span style="color:rgb(72, 30, 28)">豆沙</span>      |  <span style="color:rgb(241, 144, 140)">榴子红</span>   |  <span style="color:rgb(236, 43, 36)">秋海棠红</span>  | <span style="color:rgb(239, 175, 173)">无花果红</span> |   <span style="color:rgb(242, 202, 201)">淡绯</span>   |
|    <span style="color:rgb(175, 46,  43)">玫瑰灰</span>    |    <span style="color:rgb(237, 72, 69)">淡菽红</span>    |   <span style="color:rgb(237, 51, 51)">枸枢红</span>    |    <span style="color:rgb(93, 49, 49)">貂紫</span>     |                                                        |                                                        |