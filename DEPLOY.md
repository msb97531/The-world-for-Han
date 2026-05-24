# ElevateMind — 部署指南

> 中英双语深度内容平台 · 静态网站 · 可直接部署

---

## 📁 目录结构

```
deploy/
├── index.html              ← 英文版首页
├── about.html              ← 英文版关于页
├── advertise.html          ← 英文版广告合作
├── privacy.html            ← 英文版隐私政策
├── terms.html              ← 英文版使用条款
├── membership.html         ← 英文版会员计划
├── css/
│   └── style.css           ← 全局样式（含暗色模式）
├── js/
│   └── main.js             ← 交互脚本（进度条、主题、Cookie、返回顶部）
├── articles/               ← 28 篇英文深度文章
├── categories/             ← 8 个英文分类页
├── trailblazers/           ← 7 位英文人物专题
├── audio/                  ← 音频占位目录
├── books/                  ← 书籍占位目录
├── deep-dives/             ← 深度专题占位目录
├── guides/                 ← 指南占位目录
│
└── cn/                     ← 中文版（完整镜像结构）
    ├── index.html          ← 中文版首页
    ├── about.html
    ├── css/style.css
    ├── js/main.js
    ├── articles/           ← 27 篇中文深度文章
    ├── categories/         ← 7 个中文分类页
    └── trailblazers/       ← 7 位中文人物专题
```

---

## 🚀 部署方式（三选一）

### 方式一：Vercel（推荐）

1. 把 `deploy/` 文件夹内所有文件压缩为 `elevatemind.zip`
2. 访问 [vercel.com](https://vercel.com) → 注册/登录（可用 GitHub 账号）
3. 点击 **"Add New Project"** → **"Import Git Repository"** 或拖拽上传
4. 选择 **Framework Preset: `Other`**（纯静态）
5. 点击 **Deploy**，30 秒内上线
6. 绑定自定义域名：`elevatemind.io`（在 Project Settings → Domains 添加）

> Vercel 免费版包含：
> - 全球 CDN 加速
> - 自动 HTTPS
> - 自定义域名
> - 每月 100GB 带宽

---

### 方式二：Netlify（拖拽部署）

1. 把 `deploy/` 文件夹内所有文件压缩为 `elevatemind.zip`
2. 访问 [netlify.com](https://netlify.com) → 登录
3. 拖拽 `elevatemind.zip` 到部署区域
4. 立即获得 `xxx.netlify.app` 域名
5. 在 **Site Settings → Domain Management** 绑定自定义域名

---

### 方式三：Cloudflare Pages

1. 把 `deploy/` 文件夹内所有文件压缩为 `elevatemind.zip`
2. 访问 [dash.cloudflare.com](https://dash.cloudflare.com) → Workers & Pages
3. 点击 **"Create a Project"** → **"Pages"** → 上传 `elevatemind.zip`
4. 选择 **Framework Preset: `None`**
5. 部署完成，绑定域名在 Pages 项目的 **Custom Domains**

> Cloudflare Pages 优势：全球 300+ 节点，中国大陆访问速度最优

---

## 🔗 语言切换

| 位置 | 英文版 → 中文版 | 中文版 → 英文版 |
|------|-----------------|-----------------|
| 导航栏 | 无（直接访问 `/cn/`） | 无（直接访问 `/`） |
| 页脚 | `🇨🇳 简体中文` → `/cn/` | `🇺🇸 English` → `/` |
| 文章页 | 每篇英文文章底部有中文链接 | 每篇中文文章底部有英文链接 |

---

## 💰 广告位配置

网站已预留以下广告位，替换为实际广告代码即可：

| 位置 | 尺寸 | CSS Class |
|------|------|-----------|
| 页面顶部横幅 | 728×90 | `.ad-header` |
| 文章内嵌 | 自适应 | `.ad-in-content` |
| 页面底部 | 自适应 | `.ad-in-content` |

**接入方式：**
1. 注册 [Google AdSense](https://www.google.com/adsense)
2. 获取广告单元代码
3. 替换对应 `<div class="ad-unit">` 中的 `<p>xxx 广告位</p>` 内容

---

## 📧 Newsletter 订阅

目前为模拟表单，接入真实邮件服务：

| 服务 | 接入方式 |
|------|----------|
| ConvertKit | 替换 form action URL |
| Mailchimp | 替换 form action + 添加隐藏字段 |
| Substack | 链接到 Substack 订阅页 |
| Beehiiv | 嵌入 Beehiiv 表单代码 |

---

## 🛠 后续扩展建议

1. **搜索功能**：添加 Algolia DocSearch 或 Fuse.js 客户端搜索
2. **评论系统**：接入 Giscus（GitHub Discussions）或 Disqus
3. **分析统计**：添加 Google Analytics 4 或 Plausible（隐私友好）
4. **PWA**：添加 `manifest.json` 和 Service Worker，支持离线阅读
5. **RSS 订阅**：为文章分类生成 RSS feed
6. **SEO**：添加 `sitemap.xml` 和结构化数据（JSON-LD）

---

## 📊 内容统计

| 指标 | 英文版 | 中文版 |
|------|--------|--------|
| 深度文章 | 28 篇 | 27 篇 |
| 人物专题 | 7 位 | 7 位 |
| 分类页面 | 8 个 | 7 个 |
| 功能页面 | 6 个 | 6 个 |
| 总 HTML 文件 | 49 | 47 |

---

*部署包已就绪，选择上方任一方式即可上线。*
