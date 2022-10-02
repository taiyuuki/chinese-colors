<p align="center">
<img src="https://taiyuuki.github.io/Sophie-M/images/chinese_colors_logo.png" style="width:100px;" />
</p>


<h1 align="center">Chinese Colors</h1>

<p align="center">
<img src="https://img.shields.io/github/package-json/v/taiyuuki/chinese-colors?style=for-the-badge">
</p>

<p align="center">
VSCode扩展，以代码提示的方式列出预设的颜色——中国传统色。
</p>
<p align="center">
<img src="https://taiyuuki.github.io/Sophie-M/images/chinese_colors_preview.gif" style="width:100%;" />
</p>


## 使用方法

* 输入<span style="color:HotPink">`# + 颜色名`</span>即可列出预设的颜色，如果输入后没有反应请尝试 <span style="color:HotPink">`Ctrl + i`</span> 。

  * 支持汉字、拼音。例如：输入<span style="color:HotPink">`#红`</span>或<span style="color:HotPink">`#hong`</span>，就会列出所有与红色相关的颜色，由于是模糊匹配，使用拼音时不保证100%精确。
* 不支持英文，原因是这些颜色没有对应的英文名称。
  * 内置了日本传统色选项，支持使用罗马音、颜色名进行匹配。该选项默认是关闭的。
* 颜色代码默认采用`16进制`格式，如果想使用RGB格式，可以在设置面板中搜索“RGB”，勾选“控制预设的中国色采用RGB格式”。
* 支持颜色预览并显示颜色名称，如果不需要预览，可以在设置面板中将“颜色预览”去除勾选。

## 自定义颜色

在设置面板中，可以添加自定义颜色：

在setting.json中编辑custom字段，它是一个数组，每一项对应一个颜色：

```json
{
    "custom": [
        {
            "name": "我的颜色",
            "phonics": "wodeyanse",
            "hex": "#55cc99",
            "rgb": [87, 204, 153]
        }
    ]
}
```

* `name`：颜色名称，输入时被匹配。
* `phonics`：注音或拼音，输入时被匹配。
* `hex`：16进制颜色值，可以有alpha通道，例如：“#55cc9980”;
* `rgb`：rgb值，由数字构成的数组，可以有alpha通道，例如：[87, 204, 153,  0.5];

保存setting.json后，重启编辑器生效。

## 颜色一览

颜色来自：[中国色](http://zhongguose.com/)，共收录500+颜色，这里只列出名称，具体请查看原网址。

|                      -                      |                      -                      |                      -                      |                      -                      |                       -                        |                      -                       |
| :-----------------------------------------: | :-----------------------------------------: | :-----------------------------------------: | :-----------------------------------------: | :--------------------------------------------: | :------------------------------------------: |
|    <span  style="color:#5c2223"> 暗玉紫 </span>    |   <span style="color:#eea2a4"> 牡丹粉红  </span>   |   <span style="color:#5a191"> 栗紫  </span>    |    <span style="color:#f07c82"> 香叶红 </span>     |    <span style="color:#5a1216"> 葡萄酱紫  </span>     |      <span style="color:#ed5a65"> 艳红 </span>      |
|     <span style="color:#c04851"> 玉红  </span>     |    <span style="color:#ee3f4d"> 茶花红 </span>     |    <span style="color:#c02c38"> 高粱红 </span>     |    <span style="color:#a7535a"> 满江红 </span>     |   <span style="color:#e3span4span8"> 鼠鼻红 </span>   |     <span style="color:#f0a1a8"> 合欢红 </span>     |
|    <span style="color:#f1939c"> 春梅红  </span>    |   <span style="color:#a61span29"> 苋菜红 </span>   |     <span style="color:#894e54"> 烟红 </span>      |     <span style="color:#c45a65"> 莓红 </span>      |      <span style="color:#d11a2d"> 鹅冠红 </span>      |     <span style="color:#c21f30"> 枫叶红 </span>     |
|   <span style="color:#de1c31"> 唐菖蒲红  </span>   |     <span style="color:#7c1823"> 枣红 </span>      |    <span style="color:#541e24"> 猪肝紫 </span>     |    <span style="color:#4c1f24"> 葡萄紫 </span>     |   <span style="color:#82202"> 暗紫苑红 </span>    |      <span style="color:#82111f"> 殷红 </span>      |
|   <span style="color:#ef475d"> 草茉莉红  </span>   |     <span style="color:#4d1018"> 酱紫 </span>      |    <span style="color:#ed556a"> 山茶红 </span>     |     <span style="color:#7a7374"> 锌灰 </span>      |      <span style="color:#f03752"> 海棠红 </span>      |     <span style="color:#e6d2d5"> 蓟粉红 </span>     |
|    <span style="color:#f0c9cf"> 石蕊红  </span>    |    <span style="color:#ee2746"> 淡曙红 </span>     |    <span style="color:#2span1216"> 李紫 </span>    |    <span style="color:#ee4863"> 石竹红 </span>     |      <span style="color:#e77c8e"> 淡茜红 </span>      |     <span style="color:#500a16"> 金鱼紫 </span>     |
|   <span style="color:#c27c88"> 山黎豆红  </span>   |    <span style="color:#73575c"> 鼠背灰 </span>     |   <span style="color:#ee4866"> 淡蕊香红 </span>    |    <span style="color:#621624"> 甘蔗紫 </span>     |      <span style="color:#ce5777"> 月季红 </span>      |    <span style="color:#cc163a"> 尖晶玉红 </span>    |
|     <span style="color:#f1c4cd"> 水红  </span>     |    <span style="color:#eespan8c3"> 姜红 </span>    |     <span style="color:#856d72"> 芦灰 </span>      |    <span style="color:#2d0c13"> 茄皮紫 </span>     |    <span style="color:#36282"> 苍蝇灰 </span>     |   <span style="color:#spanf3553"> 锦葵红 </span>    |
| <span style="color:#ec9spanad"> 粉团花红  </span>  |    <span style="color:#63071c"> 石竹紫 </span>     |    <span style="color:#30161c"> 卵石紫 </span>     |    <span style="color:#eea6span7"> 晶红 </span>    |      <span style="color:#e9ccd3"> 芝兰紫 </span>      | <span style="color:#espana0span3"> 芍药耕红 </span> |
|    <span style="color:#4f383e"> 暮云灰  </span>    |   <span style="color:#ed9dspan2"> 豇豆红 </span>   |    <span style="color:#ec8aa4"> 报春红 </span>     |    <span style="color:#ec7696"> 淡绛红 </span>     |     <span style="color:#ea7293"> 凤仙花红 </span>     |     <span style="color:#ef82a0"> 霞光红 </span>     |
|    <span style="color:#ec2c64"> 喜蛋红  </span>    |  <span style="color:#espan507e"> 夹竹桃红 </span>  | <span style="color:#espan3c70"> 松叶牡丹红 </span> |    <span style="color:#ea517f"> 莲瓣红 </span>     |      <span style="color:#de7897"> 白芨红 </span>      |   <span style="color:#span598a1"> 隐红灰 </span>    |
|    <span style="color:#ed2f6a"> 榲桲红  </span>    |  <span style="color:#c5708"> 酢酱草红 </span>  |    <span style="color:#33141e"> 火鹅紫 </span>     |    <span style="color:#621d34"> 鹞冠紫 </span>     |       <span style="color:#ef3473"> 品红 </span>       |     <span style="color:#382129"> 磨石紫 </span>     |
|   <span style="color:#310f1"> 墨紫  </span>    |     <span style="color:#381924"> 檀紫 </span>      |    <span style="color:#e16c96"> 初荷红 </span>     |    <span style="color:#951c48"> 菜头紫 </span>     |     <span style="color:#62102e"> 葡萄酒红 </span>     |     <span style="color:#e0c8d1"> 淡青紫 </span>     |
|    <span style="color:#d13c74"> 菠根红  </span>    |   <span style="color:#4span1e2f"> 海象紫 </span>   |    <span style="color:#ec4e8a"> 兔眼红 </span>     |    <span style="color:#de3f7c"> 嫩菱红 </span>     |    <span style="color:#a8456"> 洋葱紫 </span>     |    <span style="color:#ce5e8a"> 吊钟花红 </span>    |
|     <span style="color:#461629"> 绀紫  </span>     |    <span style="color:#ee2c79"> 紫荆红 </span>     |  <span style="color:#ef498"> 扁豆花红 </span>  |   <span style="color:#ede3e7"> 马鞭草紫 </span>    |      <span style="color:#ec2d7a"> 藏花红 </span>      |     <span style="color:#482936"> 斑鸠灰 </span>     |
|    <span style="color:#440e25"> 古铜紫  </span>    |    <span style="color:#d2568c"> 丹紫红 </span>     |   <span style="color:#e9d7df"> 丁香淡紫 </span>    |    <span style="color:#d2357d"> 玫瑰红 </span>     |      <span style="color:#36292f"> 古鼎灰 </span>      |     <span style="color:#d276a3"> 菱锰红 </span>     |
|    <span style="color:#c06f98"> 樱草紫  </span>    |    <span style="color:#cc5595"> 龙须红 </span>     |   <span style="color:#c35691"> 电气石红 </span>    | <span style="color:#spana2f7"> 玫瑰紫 </span>  |    <span style="color:#9span1e64"> 苋菜紫 </span>     |      <span style="color:#5d3f51"> 紫灰 </span>      |
|   <span style="color:#4e2a40"> 龙睛鱼紫  </span>   |  <span style="color:#spanc84a8"> 青蛤壳紫 </span>  |    <span style="color:#c08eaf"> 萝兰紫 </span>     |    <span style="color:#411c35"> 荸荠紫 </span>     |      <span style="color:#ad6598"> 豆蔻紫 </span>      |     <span style="color:#a35c8f"> 扁豆紫 </span>     |
|    <span style="color:#681752"> 牵牛紫  </span>    |     <span style="color:#894276"> 芓紫 </span>      |    <span style="color:#7e2065"> 葛巾紫 </span>     |    <span style="color:#8span2671"> 青莲 </span>    |      <span style="color:#983680"> 芥花紫 </span>      |     <span style="color:#c8adc4"> 凤信紫 </span>     |
|   <span style="color:#1c0d1a"> 深牵牛紫  </span>   |     <span style="color:#7e1671"> 魏紫 </span>      |    <span style="color:#1e131d"> 乌梅紫 </span>     |    <span style="color:#813c85"> 桔梗紫 </span>     |     <span style="color:#d1c2d3"> 淡牵牛紫 </span>     |     <span style="color:#3e3841"> 剑锋紫 </span>     |
|     <span style="color:#815c94"> 蕈紫  </span>     |     <span style="color:#806d9e"> 槿紫 </span>      |    <span style="color:#e2e1e4"> 芡食白 </span>     |   <span style="color:#322f3"> 龙葵紫 </span>   |      <span style="color:#8076a3"> 藤萝紫 </span>      |     <span style="color:#35333c"> 沙鱼灰 </span>     |
|   <span style="color:#22202e"> 暗龙胆紫  </span>   |    <span style="color:#131124"> 暗蓝紫 </span>     |  <span style="color:#302f4"> 野葡萄紫 </span>  |    <span style="color:#525288"> 野菊紫 </span>     |      <span style="color:#2f2f35"> 水牛灰 </span>      |     <span style="color:#ccccd6"> 远山紫 </span>     |
|  <span style="color:#74759"> 螺甸紫  </span>   |    <span style="color:#1f2040"> 晶石紫 </span>     |   <span style="color:#2e317c"> 满天星紫 </span>    |   <span style="color:#a7a8spand"> 淡蓝紫 </span>   |      <span style="color:#61649f"> 山梗紫 </span>      |     <span style="color:#2d2e36"> 牛角灰 </span>     |
|    <span style="color:#5e616d"> 鱼尾灰  </span>    |    <span style="color:#47484c"> 瓦罐灰 </span>     |     <span style="color:#0f1423"> 钢蓝 </span>      |    <span style="color:#131824"> 燕颔蓝 </span>     |      <span style="color:#475164"> 鲸鱼灰 </span>      |    <span style="color:#2span333e"> 青灰 </span>     |
|     <span style="color:#1c2938"> 鸽蓝  </span>     |     <span style="color:#101f30"> 暗蓝 </span>      |     <span style="color:#142334"> 钢青 </span>      |    <span style="color:#15559a"> 海涛蓝 </span>     |     <span style="color:#0f59a4"> 飞燕草蓝 </span>     |    <span style="color:#1661a"> 靛青 </span>     |
|    <span style="color:#3170a7"> 安安蓝  </span>    |    <span style="color:#346c9c"> 海军蓝 </span>     |   <span style="color:#2775span6"> 景泰蓝 </span>   |    <span style="color:#2span73af"> 品蓝 </span>    |    <span style="color:#2474span5"> 尼罗蓝 </span>     |     <span style="color:#4e7ca1"> 蝶翅蓝 </span>     |
|   <span style="color:#2376span7"> 花青  </span>    |     <span style="color:#144a74"> 鷃蓝 </span>      |    <span style="color:#93span5cf"> 星蓝 </span>    |    <span style="color:#2177span8"> 虹蓝 </span>    |    <span style="color:#126spanae"> 柏林蓝 </span>     |    <span style="color:#1772span4"> 群青 </span>     |
|  <span style="color:#spanaccd9"> 云水蓝  </span>   |   <span style="color:#619ac3"> 羽扇豆蓝 </span>    |    <span style="color:#495c69"> 战舰灰 </span>     |   <span style="color:#8fspan2c9"> 晴山蓝 </span>   |       <span style="color:#5698c3"> 睛蓝 </span>       |     <span style="color:#11659a"> 搪磁蓝 </span>     |
|  <span style="color:#2983span"> 潮蓝  </span>  |    <span style="color:#1677span3"> 天蓝 </span>    |  <span style="color:#c4cspancf"> 大理石灰 </span>  |  <span style="color:#1177span0"> 牵牛花蓝 </span>  |    <span style="color:#2486span9"> 宝石蓝 </span>     |     <span style="color:#5e7987"> 淡蓝灰 </span>     |
|     <span style="color:#74787a"> 嫩灰  </span>     |    <span style="color:#cdd1d3"> 银鱼白 </span>     |    <span style="color:#1781span5"> 釉蓝 </span>    |    <span style="color:#66a9c9"> 涧石蓝 </span>     |      <span style="color:#d0dfe6"> 远天蓝 </span>      |   <span style="color:#2f90span9"> 云山蓝 </span>    |
|  <span style="color:#8aspancd1"> 秋波蓝  </span>   |    <span style="color:#c3d7df"> 井天蓝 </span>     | <span style="color:#158spanspan8"> 鸢尾蓝 </span>  |    <span style="color:#d8e3e7"> 云峰白 </span>     | <span style="color:#span2spanspanspane"> 星灰 </span> |    <span style="color:#1a94spanc"> 钴蓝 </span>     |
|   <span style="color:#5cspan3cc"> 碧青  </span>    |     <span style="color:#134857"> 苍蓝 </span>      |    <span style="color:#132c33"> 深灰蓝 </span>     |     <span style="color:#21373d"> 灰蓝 </span>      |    <span style="color:#span0d5df"> 湖水蓝 </span>     |      <span style="color:#22a2c3"> 海青 </span>      |
|  <span style="color:#474span4c"> 黄昏灰  </span>   |  <span style="color:#63spanspand0"> 霁青 </span>   |    <span style="color:#126e82"> 玉鈫蓝 </span>     |   <span style="color:#0f95span0"> 胆矾蓝 </span>   |      <span style="color:#1491a8"> 樫鸟蓝 </span>      |      <span style="color:#c7d2d4"> 鸥蓝 </span>      |
|   <span style="color:#1e9espan3"> 翠蓝  </span>    |   <span style="color:#3span818c"> 蜻蜓蓝 </span>   |   <span style="color:#0espan0c9"> 孔雀蓝 </span>   |  <span style="color:#29span7c"> 蔚蓝 </span>   |      <span style="color:#51c4d3"> 瀑布蓝 </span>      |   <span style="color:#7caspanspan1"> 闪蓝 </span>   |
|    <span style="color:#10aec2"> 甸子蓝  </span>    |    <span style="color:#648e93"> 晚波蓝 </span>     |    <span style="color:#93d5dc"> 清水蓝 </span>     |    <span style="color:#617172"> 夏云灰 </span>     |      <span style="color:#c6e6e8"> 海天蓝 </span>      |     <span style="color:#869d9d"> 虾壳青 </span>     |
|     <span style="color:#57c3c2"> 石绿  </span>     |     <span style="color:#c4d7d6"> 穹灰 </span>      |    <span style="color:#12aa9c"> 美蝶绿 </span>     |    <span style="color:#737c7"> 垩灰 </span>    |       <span style="color:#12a182"> 蓝绿 </span>       |    <span style="color:#1spana784"> 竹绿 </span>     |
|    <span style="color:#428675"> 亚丁绿  </span>    |    <span style="color:#c0c4c3"> 月影白 </span>     |    <span style="color:#248067"> 海王绿 </span>     |   <span style="color:#1a3span32"> 深海绿 </span>   |       <span style="color:#314a43"> 绿灰 </span>       |     <span style="color:#2c9678"> 青矾绿 </span>     |
|     <span style="color:#223e36"> 苍绿  </span>     |    <span style="color:#497568"> 飞泉绿 </span>     |   <span style="color:#141e1"> 莽丛绿 </span>   |    <span style="color:#69a794"> 梧枝绿 </span>     |     <span style="color:#2spanae85"> 铜绿 </span>      |  <span style="color:#9aspaneaf"> 草原远绿 </span>   |
|   <span style="color:#45span787"> 蛙绿  </span>    |   <span style="color:#92span3a5"> 浪花绿 </span>   |    <span style="color:#1f2623"> 苷蓝绿 </span>     |    <span style="color:#83cspanac"> 粉绿 </span>    |      <span style="color:#70887d"> 淡绿灰 </span>      |  <span style="color:#55spanspan8a"> 麦苗绿 </span>  |
|     <span style="color:#20a162"> 翠绿  </span>     |     <span style="color:#40a070"> 葱绿 </span>      |    <span style="color:#1a6840"> 荷叶绿 </span>     |     <span style="color:#61ac85"> 淡绿 </span>      |    <span style="color:#68span88e"> 田园绿 </span>     |   <span style="color:#a4caspan6"> 玉簪绿 </span>    |
|     <span style="color:#3c9566"> 蟾绿  </span>     |   <span style="color:#5dspane8a"> 蔻梢绿 </span>   |    <span style="color:#207f4c"> 薄荷绿 </span>     |     <span style="color:#eef7f2"> 月白 </span>      |     <span style="color:#579572"> 蛋白石绿 </span>     |   <span style="color:#span9dec9"> 竹篁绿 </span>    |
|    <span style="color:#229453"> 孔雀绿  </span>    |    <span style="color:#20894d"> 宫殿绿 </span>     |   <span style="color:#15231"> 云杉绿 </span>   |     <span style="color:#66c18c"> 毛绿 </span>      |      <span style="color:#a4aca7"> 冰山蓝 </span>      |      <span style="color:#8a988e"> 明灰 </span>      |
|   <span style="color:#9ecca"> 明绿  </span>    |    <span style="color:#83a78d"> 松霜绿 </span>     |  <span style="color:#485span4d"> 白屈菜绿 </span>  |    <span style="color:#5d655f"> 狼烟灰 </span>     |    <span style="color:#6e8span74"> 瓦松绿 </span>     |  <span style="color:#2span312c"> 槲寄生绿 </span>   |
|    <span style="color:#c6dfc8"> 淡翠绿  </span>    |   <span style="color:#41span349"> 玉髓绿 </span>   |    <span style="color:#43span244"> 鲜绿 </span>    |     <span style="color:#253d24"> 油绿 </span>      |      <span style="color:#41ae3c"> 宝石绿 </span>      |    <span style="color:#add5a2"> 嘉陵水绿 </span>    |
|  <span style="color:#5e665"> 田螺绿  </span>   |     <span style="color:#8cc269"> 水绿 </span>      |   <span style="color:#5spanae23"> 鹦鹉绿 </span>   |    <span style="color:#dfecd5"> 艾背绿 </span>     |       <span style="color:#cad3c3"> 艾绿 </span>       |      <span style="color:#9fa39a"> 镍灰 </span>      |
| <span style="color:#span2cf87"> 橄榄石绿  </span>  |     <span style="color:#96c24e"> 芽绿 </span>      |    <span style="color:#f0f5e5"> 嫩菊绿 </span>     |   <span style="color:#span7d07a"> 芦苇绿 </span>   |       <span style="color:#d0deaa"> 姚黄 </span>       |     <span style="color:#373834"> 蒽油绿 </span>     |
|  <span style="color:#spanacf65"> 苹果绿  </span>   |   <span style="color:#e2e7spanf"> 海沬绿 </span>   |  <span style="color:#spanec936"> 橄榄黄绿 </span>  |   <span style="color:#d2d97a"> 槐花黄绿 </span>    |       <span style="color:#e2d849"> 蝶黄 </span>       |     <span style="color:#fffef8"> 象牙白 </span>     |
|    <span style="color:#5e5314"> 橄榄绿  </span>    |     <span style="color:#fffef9"> 雪白 </span>      |    <span style="color:#ad9e5f"> 淡灰绿 </span>     |    <span style="color:#fed71a"> 佛手黄 </span>     |       <span style="color:#f9f4dc"> 乳白 </span>       |   <span style="color:#e4spanf11"> 香蕉黄 </span>    |
|  <span style="color:#d2span116"> 新禾绿  </span>   |  <span style="color:#fspanda41"> 油菜花黄 </span>  |    <span style="color:#eed045"> 秋葵黄 </span>     |     <span style="color:#f1ca17"> 柚黄 </span>      |     <span style="color:#d2span42c"> 草黄 </span>      |   <span style="color:#f2ce2"> 硫华黄 </span>    |
|     <span style="color:#e2c027"> 姜黄  </span>     |    <span style="color:#645822"> 潭水绿 </span>     |    <span style="color:#fcd217"> 金瓜黄 </span>     |    <span style="color:#f8df70"> 麦秆黄 </span>     |       <span style="color:#dfc243"> 蒿黄 </span>       |     <span style="color:#f8df72"> 茉莉黄 </span>     |
|     <span style="color:#ffd111"> 藤黄  </span>     |    <span style="color:#ddc871"> 芒果黄 </span>     |    <span style="color:#fffefa"> 海参灰 </span>     |   <span style="color:#867018"> 碧螺春绿 </span>    |       <span style="color:#887322"> 苔绿 </span>       |     <span style="color:#fcd337"> 柠檬黄 </span>     |
|  <span style="color:#8e804"> 草灰绿  </span>   |   <span style="color:#fecc11"> 向日葵黄 </span>    |   <span style="color:#fccspan16"> 素馨黄 </span>   |    <span style="color:#ffc90c"> 乳鸭黄 </span>     |     <span style="color:#span7ae8f"> 月灰 </span>      |     <span style="color:#f8d86a"> 葵扇黄 </span>     |
|  <span style="color:#fspancd31"> 大豆黄  </span>   |    <span style="color:#fcc307"> 金盏黄 </span>     |   <span style="color:#e9ddspan6"> 菊蕾白 </span>   |    <span style="color:#fcc515"> 黄连黄 </span>     |      <span style="color:#f7e8aa"> 杏仁黄 </span>      |    <span style="color:#e8span004"> 谷黄 </span>     |
|    <span style="color:#f9c116"> 木瓜黄  </span>    |    <span style="color:#f9d770"> 淡茧黄 </span>     |   <span style="color:#fspanc82f"> 雅梨黄 </span>   |     <span style="color:#f1f0ed"> 银白 </span>      |    <span style="color:#5span4913"> 棕榈绿 </span>     |    <span style="color:#f6c430"> 鹦鹉冠黄 </span>    |
|   <span style="color:#span78d12"> 枯绿  </span>    |   <span style="color:#f9spand10"> 浅烙黄 </span>   |    <span style="color:#f9d367"> 淡密黄 </span>     |     <span style="color:#d9a40e"> 芥黄 </span>      |   <span style="color:#espanspan10d"> 栀子黄 </span>   |    <span style="color:#584717"> 暗海水绿 </span>    |
|     <span style="color:#f7de98"> 篾黄  </span>     |   <span style="color:#f9f1d"> 蚌肉白 </span>   |    <span style="color:#f4ce69"> 炒米黄 </span>     |   <span style="color:#fespana07"> 琥珀黄 </span>   |       <span style="color:#8a6913"> 灰绿 </span>       |     <span style="color:#876818"> 粽叶绿 </span>     |
|   <span style="color:#span6a476"> 尘灰  </span>    |    <span style="color:#fcspan70a"> 鼬黄 </span>    |    <span style="color:#f0d695"> 象牙黄 </span>     |     <span style="color:#87723e"> 鲛青 </span>      |      <span style="color:#f8e8c1"> 豆汁黄 </span>      |      <span style="color:#d6a01d"> 土黄 </span>      |
|  <span style="color:#f7da94"> 香水玫瑰黄  </span>  |    <span style="color:#eaad1a"> 虎皮黄 </span>     | <span style="color:#fspanspan612"> 鸡蛋黄 </span>  |   <span style="color:#span5aa90"> 银鼠灰 </span>   |      <span style="color:#f7f4ed"> 鱼肚白 </span>      |  <span style="color:#f8spanc31"> 初熟杏黄 </span>   |
| <span style="color:#span78span26"> 山鸡黄  </span> |    <span style="color:#e5d3aa"> 莲子白 </span>     |    <span style="color:#695e45"> 蟹壳灰 </span>     |   <span style="color:#e5span751"> 沙石黄 </span>   |    <span style="color:#f3spanf4c"> 甘草黄 </span>     |     <span style="color:#685e48"> 燕羽灰 </span>     |
| <span style="color:#fspanspan929"> 鹅掌黄  </span> |   <span style="color:#f9d27d"> 麦芽糖黄 </span>    |    <span style="color:#e2c17c"> 浅驼色 </span>     |  <span style="color:#span4a992"> 百灵鸟灰 </span>  |       <span style="color:#f6dead"> 酪黄 </span>       |     <span style="color:#f2e6ce"> 荔肉白 </span>     |
|  <span style="color:#f8e0span0"> 淡肉色  </span>   |    <span style="color:#393733"> 河豚灰 </span>     |    <span style="color:#835e1d"> 蜴蜊绿 </span>     |    <span style="color:#f8f4ed"> 汉白玉 </span>     |      <span style="color:#fca104"> 橙皮黄 </span>      |    <span style="color:#815f25"> 莱阳梨黄 </span>    |
|    <span style="color:#fca106"> 枇杷黄  </span>    |    <span style="color:#ffa60f"> 金叶黄 </span>     |     <span style="color:#806332"> 苍黄 </span>      |    <span style="color:#fspanf2e3"> 粉白 </span>    |    <span style="color:#fspana414"> 淡橘橙 </span>     |     <span style="color:#e4dfd7"> 珍珠灰 </span>     |
|  <span style="color:#826span48"> 龟背黄  </span>   |    <span style="color:#dad4c"> 浅灰 </span>    | <span style="color:#spanspanspan5ac"> 铅灰 </span> | <span style="color:#spanspanspan5ac"> 中灰 </span> |       <span style="color:#ff9900"> 雄黄 </span>       |   <span style="color:#fspanspan957"> 蜜黄 </span>   |
|    <span style="color:#dc9123"> 风帆黄  </span>    |   <span style="color:#c09351"> 桂皮淡棕 </span>    |    <span style="color:#f4a83a"> 金莺黄 </span>     |     <span style="color:#f7c173"> 肉色 </span>      |      <span style="color:#e7a23f"> 凋叶棕 </span>      |   <span style="color:#533c1"> 古铜绿 </span>    |
|   <span style="color:#f9e8d0"> 落英淡粉  </span>   |    <span style="color:#de9e44"> 软木黄 </span>     | <span style="color:#f9cspan8"> 瓜瓤粉 </span>  |    <span style="color:#f9a633"> 榴萼黄 </span>     |      <span style="color:#daa45a"> 玳瑁黄 </span>      |   <span style="color:#553span18"> 焦茶绿 </span>    |
|    <span style="color:#513c20"> 蟹壳绿  </span>    |    <span style="color:#986524"> 山鸡褐 </span>     |    <span style="color:#97846c"> 猴毛灰 </span>     |   <span style="color:#e3spand8d"> 鹿角棕 </span>   |      <span style="color:#4d4030"> 淡松烟 </span>      | <span style="color:#fspan8span05"> 万寿菊黄 </span> |
|    <span style="color:#f8c387"> 蛋壳黄  </span>    |     <span style="color:#f28e16"> 杏黄 </span>      |    <span style="color:#503e2a"> 橄榄灰 </span>     |     <span style="color:#4a4035"> 鹤灰 </span>      |      <span style="color:#cfccc9"> 玛瑙灰 </span>      |   <span style="color:#c1span2a3"> 淡银灰 </span>    |
|     <span style="color:#867e76"> 瓦灰  </span>     |     <span style="color:#847c74"> 夜灰 </span>      |    <span style="color:#fc8c23"> 北瓜黄 </span>     |   <span style="color:#fspanecde"> 荷花白 </span>   |      <span style="color:#4f4032"> 松鼠灰 </span>      |   <span style="color:#fspaneee2"> 淡米粉 </span>    |
|     <span style="color:#81776e"> 深灰  </span>     |    <span style="color:#9a8878"> 海鸥灰 </span>     |     <span style="color:#5d3d21"> 茶褐 </span>      |     <span style="color:#66462a"> 驼色 </span>      |       <span style="color:#918072"> 银灰 </span>       |     <span style="color:#d99156"> 鹿皮褐 </span>     |
|    <span style="color:#c1651a"> 槟榔综  </span>    |    <span style="color:#d4c4span7"> 晓灰 </span>    |    <span style="color:#spane7e4a"> 淡赭 </span>    |    <span style="color:#5c3719"> 古铜褐 </span>     |       <span style="color:#de7622"> 麂棕 </span>       |   <span style="color:#dspan8540"> 醉瓜肉 </span>    |
|     <span style="color:#80766e"> 雁灰  </span>     |    <span style="color:#f09c5a"> 鲑鱼红 </span>     |     <span style="color:#f97d1c"> 橘橙 </span>      |    <span style="color:#f26span1f"> 金黄 </span>    |    <span style="color:#f8span37f"> 玫瑰粉 </span>     |    <span style="color:#fa7e23"> 美人焦橙 </span>    |
|     <span style="color:#f9e9cd"> 米色  </span>     |   <span style="color:#span7a091"> 蛛网灰 </span>   |    <span style="color:#945833"> 淡咖啡 </span>     |    <span style="color:#f0945d"> 海螺橙 </span>     |      <span style="color:#964d22"> 岩石棕 </span>      |     <span style="color:#954416"> 芒果棕 </span>     |
|    <span style="color:#e16723"> 陶瓷红  </span>    |    <span style="color:#fc7930"> 菠萝红 </span>     |    <span style="color:#cf7543"> 余烬红 </span>     |  <span style="color:#f86span1d"> 金莲花橙 </span>  |      <span style="color:#cd6227"> 火砖红 </span>      |    <span style="color:#f6dcce"> 初桃粉红 </span>    |
|     <span style="color:#d85916"> 铁棕  </span>     | <span style="color:#f7cfspana"> 介壳淡粉红 </span> |    <span style="color:#f27635"> 蟹壳红 </span>     |     <span style="color:#e46828"> 金驼 </span>      |      <span style="color:#fc6315"> 燕颔红 </span>      |  <span style="color:#span7511d"> 淡可可棕 </span>   |
|    <span style="color:#ea8958"> 晨曦红  </span>    |   <span style="color:#e8span49a"> 玉粉红 </span>   |  <span style="color:#fspan9968"> 野蔷薇红 </span>  |     <span style="color:#edc3ae"> 藕荷 </span>      |      <span style="color:#363433"> 长石灰 </span>      |   <span style="color:#8span614d"> 中红灰 </span>    |
|    <span style="color:#aa6a4c"> 火泥棕  </span>    |     <span style="color:#a6522c"> 绀红 </span>      |    <span style="color:#fa5d19"> 莓酱红 </span>     |    <span style="color:#71361d"> 丁香棕 </span>     |   <span style="color:#span89485"> 淡玫瑰灰 </span>    |     <span style="color:#f68c60"> 瓜瓤红 </span>     |
|   <span style="color:#f6ad8f"> 淡藏花红  </span>   |    <span style="color:#732e12"> 筍皮棕 </span>     |    <span style="color:#f7cdspanc"> 润红 </span>    |  <span style="color:#ef632"> 龙睛鱼红 </span>  |    <span style="color:#8c4span31"> 淡土黄 </span>     |     <span style="color:#64483d"> 珠母灰 </span>     |
|    <span style="color:#f9723d"> 芙蓉红  </span>    |    <span style="color:#cf4813"> 落霞红 </span>     |    <span style="color:#ee8055"> 法螺红 </span>     |   <span style="color:#f8espane6"> 草珠红 </span>   |       <span style="color:#753117"> 咖啡 </span>       |     <span style="color:#603d30"> 中灰驼 </span>     |
|    <span style="color:#883a1e"> 椰壳棕  </span>    | <span style="color:#span14span28"> 蟹蝥红 </span>  |    <span style="color:#873d24"> 淡豆沙 </span>     |    <span style="color:#f6cec1"> 淡桃红 </span>     |    <span style="color:#5span423a"> 淡铁灰 </span>     |     <span style="color:#624941"> 石板灰 </span>     |
|    <span style="color:#673424"> 淡栗棕  </span>    |     <span style="color:#f43e06"> 银朱 </span>      |    <span style="color:#ef6f48"> 草莓红 </span>     |  <span style="color:#f4c7spana"> 洋水仙红 </span>  |       <span style="color:#ed5126"> 朱红 </span>       |     <span style="color:#f34718"> 榴花红 </span>     |
|   <span style="color:#f2481"> 柿红  </span>    |   <span style="color:#652span1c"> 可可棕 </span>   |   <span style="color:#eea08c"> 淡罂粟红 </span>    |    <span style="color:#f04span22"> 大红 </span>    |    <span style="color:#692a1"> 柞叶棕 </span>     |     <span style="color:#f1441d"> 蜻蜓红 </span>     |
|    <span style="color:#773d31"> 橡树棕  </span>    |     <span style="color:#eeaa9c"> 颊红 </span>      |     <span style="color:#f0ada0"> 桃红 </span>      |    <span style="color:#863020"> 火岩棕 </span>     |     <span style="color:#f2e7e5"> 淡藤萝紫 </span>     |      <span style="color:#862617"> 赭石 </span>      |
|    <span style="color:#f5391c"> 铁水红  </span>    |    <span style="color:#f03f24"> 胭脂红 </span>     |   <span style="color:#f33span1f"> 极光红 </span>   |    <span style="color:#f23e23"> 红汞红 </span>     |      <span style="color:#f13c22"> 萝卜红 </span>      |      <span style="color:#f05a46"> 曲红 </span>      |
|    <span style="color:#f17666"> 谷鞘红  </span>    |    <span style="color:#f15642"> 苹果红 </span>     |     <span style="color:#f25a47"> 桂红 </span>      |  <span style="color:#f2span9span2"> 粉红 </span>   |      <span style="color:#592620"> 暗驼棕 </span>      |     <span style="color:#de2a18"> 夕阳红 </span>     |
|    <span style="color:#ed3321"> 樱桃红  </span>    |    <span style="color:#f04a3a"> 珊瑚红 </span>     |    <span style="color:#482522"> 火山棕 </span>     |     <span style="color:#5c1e19"> 栗棕 </span>      |      <span style="color:#d42517"> 鹤顶红 </span>      |      <span style="color:#f19790"> 舌红 </span>      |
| <span style="color:#aspan372f"> 鹅血石红  </span>  |    <span style="color:#5a1f1"> 酱棕 </span>    |   <span style="color:#ed3span2f"> 鱼鳃红 </span>   |   <span style="color:#spandaead"> 芦穗灰 </span>   |    <span style="color:#espan261a"> 丽春红 </span>     |    <span style="color:#ac1f18"> 覆盆子红 </span>    |
|    <span style="color:#483332"> 海报灰  </span>    |     <span style="color:#481e1c"> 豆沙 </span>      |    <span style="color:#f1908c"> 榴子红 </span>     |  <span style="color:#ec2span24"> 秋海棠红 </span>  |     <span style="color:#efafad"> 无花果红 </span>     |      <span style="color:#f2cac9"> 淡绯 </span>      |
| <span style="color:#4span2e2"> 玫瑰灰  </span> |    <span style="color:#ed4845"> 淡菽红 </span>     |    <span style="color:#ed3333"> 枸枢红 </span>     |     <span style="color:#5d3131"> 貂紫 </span>      |                                                |                                              |
