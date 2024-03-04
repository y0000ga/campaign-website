# 立委競選官網

<img src="https://i.imgur.com/qUUgDdt.png" width="100%">

[Demo](<https://campaign-website-nine.vercel.app/>)

採用設計師 Jhen [設計稿](<https://www.figma.com/file/DCnuTZQ00D5VHiDkBLhxQ3/2023-The-F2E-%E7%AB%8B%E5%A7%94%E7%AB%B6%E9%81%B8%E5%AE%98%E7%B6%B2?type=design&node-id=139%3A170&mode=design&t=CatwhazQ74EoAcMU-1>)

## 作品說明

提供立委候選人形象 RWD 官網，不只能為候選人塑造優良形象，並且讓使用者可以獲得政見主張資訊且明確看到小額捐款的指引。

## 系統說明

### 版本

該專案於 Node.js v18.18.2 環境下進行開發

### 專案運行

運行專案步驟如下：

```
npm install
npm run dev
```

透過以上 command 將安裝所有 dependencies 並啟動 development server，隨後即可開始開發和預覽專案，進一步詳細資訊則參考專案的 package.json。

## 資料夾說明

```
├─app.vue            # 專案進入點
├─nuxt.config.ts     # Nuxt 設定黨
├─package.json       # 包含專案所有 dependencies 和 script
├─tsconfig.json      # typescript 設定檔
├─vitest.config.ts   # viteset 設定檔
├─utils              # 存放 stateless logic funtion
├─composables        # 存放 stateful logic function
├─stores             # 存放狀態管理庫
├─server             # 存放 server 端的 setting
├─public             # 存放不需要被編譯的靜態資源
├─plugins            # 存放定義 plugin 的 setting
├─pages              # 存放頁面元件並根據結構配置 route
├─middleware         # 存放 navigation guards
├─layouts            # 存放共用佈局元件
├─components         # 存放 Vue 共用元件
└assets              # 存放 CSS、字體、圖片等需要被 Vite 編譯的靜態資源
```

## 使用技術

1. Nuxt.js
2. Typescript
3. AOS (Animate on Scroll)
4. vuetify
5. pinia
6. swiper
7. lottie-web
8. nuxt-simple-robots
