title: Vercel+Freenom 搭建博客!

author: MrZeFr

tags:

- 白嫖
- 域名
- 服务器

categories:

- 白嫖
- 域名
- 服务器

date: 2021-09-30 19:50:00

---

### 前言

{% note success no-icon %}

本文从[杜老师说](https://dusays.com/386)转载的,杜老师不会所以我搞了个完整版的搭建自己的博客!
其实就是帮杜老师写的!

{% endnote %}

### 购买域名

首先先进入 freenom 官网: [https://my.freenom.com/domains.php](https://my.freenom.com/domains.php)

进入了就是这个界面

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-1.png#alt=MrZeFr)

为什么不能进中文版的呢？

因为中文版的检查可用性就是个标签！

之后输入您需要购买的域名比如: MrZeFr.ml 和 MrZeFr.tk

之后按下回车搜索！

然后就是这个界面:

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-2.png#alt=MrZeFr)

注意: 您输入您需要的域名之后一定要加上后缀比如: .ml 和.tk

然后点: Checkout

就进入了这个界面:

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-3.png#alt=MrZeFr)

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-4.png#alt=MrZeFr)

然后把这个 Period 改成: 12 Months @ FREE

意思就是十二个月

选好之后点: Continue

之后就是这个界面:

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-5.png#alt=MrZeFr)

登录的话点: "Click here to login"

即可登录！

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-6.png#alt=MrZeFr)

注意: Freenom 登陆界面的图片是随机的！

如果你没注册的话就需要注册一下

选择"Enter Your Email Address"

意思就是: 输入您的电子邮件地址

像我这个

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-7.png#alt=MrZeFr)

然后点: Verify My Email Address

Freenom 就会发一封邮件到你的邮箱里面

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-13.png#alt=MrZeFr)

点击 Freenom 发给你的链接即可,就会自动到注册的界面！

输入你的个人信息或者一顿瞎填！如果不会

由于我懒得填所以直接跳

下面是翻译

---

First Name: 名字

Last Name: 姓

Company Name: 公司名称

Address 1: 地址

Zip Code: 邮政编码

City: 城市

Country: 国家

State/Region: 州/地区

Phone Number: 电话号码

Email Address: 电子邮件

Password: 密码

Confirm Password: 确认密码

---

然后同意许可协议: I have read and agree to the

即可

买完之后 Freenom 会给你订单号

备注:(如果您不想记订单号的话也可以不记,但是我的建议是记下来！)

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-9.png#alt=MrZeFr)

之后滑到下面

点击 My Domains

意思就是我的域名

来到的是这个界面

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-10.png#alt=MrZeFr)

然后点: Manage Domain

意思是: 管理域名

来到这个界面

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-11.png#alt=MrZeFr)

点这个

![](/2021/09/30/%E7%99%BD%E5%AB%96%E9%A1%B6%E7%BA%A7%E5%9F%9F/MrZeFr-12.png#alt=MrZeFr)

Manage Freenom DNS

这个意思就是

管理 DNS

点进去就是域名解析了

找到服务器商拿到他给你的

---

A 解析记录

CNAME 解析记录

AAAA 解析记录

LOC 解析记录

MX 解析记录

NAPTR 解析记录

RP 解析记录

TXT 解析记录

填入即可

翻译如下:

name: 服务器提供商提供解析的名字 比如: www 也可以空着不填

Type: 服务器提供商的解析记录比如: A 记录,CNAME 解析记录,AAAA 解析记录 等等

TTL: 默认即可

Target: 服务器提供商给的解析的值比如:

Vercel 的:

A 记录: 76.76.21.21

CNAME 记录: cname.vercel-dns.com

---

### 用 Vercel 搭建博客

先注册 Vercel: [https://Vercel.com](https://Vercel.com)

注册完点![](https://cdn.jsdelivr.net/gh/SYSTEMWindows11/File@main/Vercel1.PNG#alt=MrZeFr)

New Project

选择你的存放源码的 Github 仓库

如果你不会上传源码请看: [https://www.jianshu.com/p/117c33a9dbf8](https://www.jianshu.com/p/117c33a9dbf8) 这篇文章!

选好之后点![](https://cdn.jsdelivr.net/gh/SYSTEMWindows11/File@main/Vercel2.PNG#alt=MrZeFr)

然后点击下面蓝色的: Deploy 开始部署请耐心等待!

部署完成之后就会出现一段烟花不用管点右上角那个就行了!之后来到主界面点右上角的 Settings 进入设置!

然后看到最左边那个栏![](https://cdn.jsdelivr.net/gh/SYSTEMWindows11/File@main/Vercel3.PNG#alt=MrZeFr)

Domains 来绑定你的域名当然 Vercel 也提供了域名,但是太长不好记!

在框框里输入你的域名即可,绑定 DNS 上面有了就是 Vercel 的!

### 结尾

这是一个非常简单的教程了!

我给的教程已经很详细了

如果你还不会

就加我 QQ 吧: 408853656
