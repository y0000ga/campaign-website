const seminar = "" + __buildAssetsURL("seminar.30055a18.svg");
const walk = "" + __buildAssetsURL("walk.25b7fb93.svg");
const show = "" + __buildAssetsURL("show.c73e8f9f.svg");
const heaven = "" + __buildAssetsURL("policy-heaven.43f423d6.svg");
const learn = "" + __buildAssetsURL("policy-learn.e60d3f24.svg");
const medical = "" + __buildAssetsURL("policy-medical.989e5199.svg");
const donate = "" + __buildAssetsURL("donate.c6c78d8d.svg");
const mail = "" + __buildAssetsURL("mail.4ced524b.svg");
const LEGISLATOR = {
  name: "喵立翰",
  englishName: "Miao Li-Han"
};
const NAV = [{
  title: "候選人主張",
  route: "/about"
}, {
  title: "最新活動",
  route: "/activity"
}, {
  title: "政策議題",
  route: "/policy"
}, {
  title: "小額捐款",
  route: "/donate"
}, {
  title: "民眾服務信箱",
  route: "/service"
}];
const SOCIAL = [{
  color: "primary",
  icon: "facebook"
}, {
  color: "white",
  icon: "instagram",
  class: "bg-primary rounded-lg p-10"
}, {
  color: "primary",
  icon: "youtube"
}];
const PROMOTION = ["為喵星人，護台灣！", "從喵的眼中，看見台灣！", "喵的未來，人的希望！"];
const ADVOCATE = "候選人主張";
const TAIWAN_FUTURE = "台灣的未來";
const ADVOCATE_CONTENT = "畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。";
const ACTIVITY = [
  { title: "參與台北寵物論壇，爭取貓咪友善環境", date: "2023/12/26", content: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！", imgSrc: seminar },
  { title: "收容所模特兒大比拼！", date: "2023/12/20", content: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！", imgSrc: show },
  { title: "掃街模式開啟！帶著你的貓耳，來和我一起走！", date: "2023/12/24", content: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！", imgSrc: walk }
];
const POLICY = [
  {
    color: "#BEEADB",
    title: ["打造休閒天堂！", "推廣寵物休閒與娛樂場所"],
    subTitle: "喵的福利",
    list: [{ title: "設立寵物醫療基金", content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用" }, { title: "提供醫療補助", content: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力" }, { title: "合作動物醫院", content: "目前已有和超過 200 家動物醫院進行初步的合作討論" }],
    imgSrc: heaven
  },
  {
    color: "#F7ECE1",
    title: ["為毛孩子謀福利！", "推動寵物醫療保障方案"],
    subTitle: "喵的保障",
    list: [{ title: "設立寵物醫療基金", content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用" }, { title: "提供醫療補助", content: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力" }, { title: "合作動物醫院", content: "目前已有和超過 200 家動物醫院進行初步的合作討論" }],
    imgSrc: medical
  },
  {
    color: "#FFDDDD",
    title: ["推廣寵物飼養教育！", "讓愛更加專業"],
    subTitle: "喵的教育",
    list: [{ title: "設立寵物醫療基金", content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用" }, { title: "提供醫療補助", content: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力" }, { title: "合作動物醫院", content: "目前已有和超過 200 家動物醫院進行初步的合作討論" }],
    imgSrc: learn
  }
];
const ACTION = [
  { id: "donate", title: "小額支持喵喵", content: "您的小筆捐款，是每隻毛孩未來的大大動力！", button: "小額捐款", imgSrc: donate },
  { id: "mail", title: "民眾服務信箱", content: "親愛的鄉親，每一位市民的意見都是我們社區前進的原動力", button: "填寫表單", imgSrc: mail }
];
export {
  ADVOCATE as A,
  LEGISLATOR as L,
  NAV as N,
  POLICY as P,
  SOCIAL as S,
  TAIWAN_FUTURE as T,
  PROMOTION as a,
  ADVOCATE_CONTENT as b,
  ACTIVITY as c,
  ACTION as d
};
//# sourceMappingURL=constant-902bcd5d.js.map
