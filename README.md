<p align="center">
<img src="https://s2.loli.net/2024/04/09/ZBLgfDyMUC3c2rl.png" style="width:80px;" />
</p>

<h1 align="center">国色</h1>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=taiyuuki.chinese-color">
<img alt="Marketplace Version" src="https://img.shields.io/visual-studio-marketplace/v/taiyuuki.chinese-color?color=%23813c85&label=Marketplace&logo=visual%20studio%20code"></a>
 <img alt="Visual Studio Marketplace Installs" src="https://img.shields.io/visual-studio-marketplace/i/taiyuuki.chinese-color">
  <img alt="Visual Studio Marketplace Installs" src="https://img.shields.io/visual-studio-marketplace/d/taiyuuki.chinese-color">
 <a href="https://github.com/taiyuuki/chinese-colors"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/taiyuuki/chinese-colors?style=social"></a>
</p>

<p align="center">
这是一个VS Code插件，提供对颜色代码的自动提示和补全，以及色卡展示。
</p>

<h2 align="center">代码提示和补全</h2>
<p align="center">
<img src="https://s2.loli.net/2024/04/09/LXDO7t5RWIzuF2c.gif" style="width:100%;" /></p>

<h2 align="center">色卡展示</h2>

<p align="center">
<img src="https://s2.loli.net/2025/04/21/NeKhZFltCEYDaqs.png" style="width:100%;" /></p>

网页版的色卡： [https://taiyuuki.github.io/chinese-colors](https://taiyuuki.github.io/chinese-colors)

VS Code内置的色卡：在 **命令面板** 中执行“Chinese Color Palette(打开中国色彩色卡)”，或者点击VS Code编辑界面标签栏右上角的小图标，即可查看所有颜色的色卡。

## 1. 使用

* 输入<span style="color:HotPink">`# + 颜色名`</span>即可列出预设的颜色。

* 支持汉字、拼音。例如：输入<span style="color:HotPink">`#红`</span>或<span style="color:HotPink">`#hong`</span>，就会列出所有与红色相关的颜色。

## 2. 配置项

### 2.1 自定义颜色

在settings.json中编辑chineseColors.custom字段，可以添加自定的颜色，它是一个数组：

```json
{
    "chineseColors.custom": [
        {
            "name": "我的颜色",
            "phonic": "wodeyanse",
            "rgb": [87, 204, 153]
        }
    ]
}
```

* `name`：颜色名称，输入时被匹配。
* `phonic`：注音或拼音，输入时被匹配。
* `rgb`：rgb颜色值，由数字构成的数组，可以有alpha通道，例如：[87, 204, 153,  0.5]。

如果保存后没有生效，可以重启编辑器试试。

### 2.2 颜色格式

颜色代码默认采用`16进制`格式，如果想使用RGB格式，可以在设置中勾选“控制预设的中国色采用RGB格式”。

### 2.3 颜色预览

默认开启了颜色预览功能，并可以显示颜色名称，如果不需要预览，可以在设置面板中将“颜色预览”去除勾选。

## 3 更新 v2.0.0

2.0.0更换了颜色来源，采用植物染色专家黄荣华整理的中国传统色，共700多种颜色，详情可以参考[黄荣华的博客](https://blog.sina.com.cn/s/articlelist_1250104222_8_1.html)。

