import seminar from '~/assets/image/seminar.svg'
import walk from '~/assets/image/walk.svg'
import show from '~/assets/image/show.svg'
import heaven from '~/assets/image/policy-heaven.svg'
import learn from '~/assets/image/policy-learn.svg'
import medical from '~/assets/image/policy-medical.svg'
import donate from '~/assets/image/donate.svg'
import mail from '~/assets/image/mail.svg'
import nav_about from '~/assets/image/icon/nav/about.svg'
import nav_activity from '~/assets/image/icon/nav/activity.svg'
import nav_donate from '~/assets/image/icon/nav/donate.svg'
import nav_service from '~/assets/image/icon/nav/service.svg'
import nav_policy from '~/assets/image/icon/nav/policy.svg'
import nav_active_about from '~/assets/image/icon/nav/active/about.svg'
import nav_active_activity from '~/assets/image/icon/nav/active/activity.svg'
import nav_active_donate from '~/assets/image/icon/nav/active/donate.svg'
import nav_active_service from '~/assets/image/icon/nav/active/service.svg'
import nav_active_policy from '~/assets/image/icon/nav/active/policy.svg'

export const LEGISLATOR = {
  name: "喵立翰",
  englishName: "Miao Li-Han"
}

export const NAV = [{
  title: "立翰主張", route: "/about", icon: nav_about, activeIcon: nav_active_about
}, {
  title: "最新活動", route: "/activity", icon: nav_activity, activeIcon: nav_active_activity
}, {
  title: "政策議題", route: "/policy", icon: nav_policy, activeIcon: nav_active_policy
}, {
  title: "小額捐款", route: "/donate", icon: nav_donate, activeIcon: nav_active_donate
}, {
  title: "服務信箱", route: "/service", icon: nav_service, activeIcon: nav_active_service
  }]

export const DIALOG_TITLE = {
  [Dialog.POLICY]: "政策議題",
  [Dialog.ACTIVITY]: "最新活動",
  [Dialog.DONATE]: "小額捐款",
  [Dialog.SERVICE]:"服務信箱"
  }

export const SOCIAL = [{
  color: "primary",
  icon: "facebook"
}, {
  color: "white",
  icon: "instagram",
  class: "bg-primary rounded-lg p-10"
}, {
  color: "primary",
  icon: "youtube"
}]

export const PROMOTION = ["為喵星人，護台灣！", "從喵的眼中，看見台灣！", "喵的未來，人的希望！"]

export const ADVOCATE = '候選人主張'

export const TAIWAN_FUTURE = "台灣的未來"

export const ADVOCATE_CONTENT = "畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。"


export const ACTIVITY = [
  { id:"activity_1",title: "參與台北寵物論壇，爭取貓咪友善環境", date: "2023/12/26", content: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！", imgSrc: seminar },
  { id:"activity_2",title: "收容所模特兒大比拼！", date: "2023/12/20", content: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！", imgSrc: show },
  { id:"activity_3",title: "掃街模式開啟！帶著你的貓耳，來和我一起走！", date: "2023/12/24", content: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！", imgSrc: walk },
]

export const POLICY = [
  {id:"policy_1",
    color: "#BEEADB", title: ["打造休閒天堂！", "推廣寵物休閒與娛樂場所"], subTitle: "喵的福利", list: [{ title: "設立寵物醫療基金", content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用" }, { title: "提供醫療補助", content: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力" }, { title: "合作動物醫院", content: "目前已有和超過 200 家動物醫院進行初步的合作討論" }], imgSrc: heaven
  },
  {
    id: "policy_2",
    color: "#F7ECE1", title: ["為毛孩子謀福利！", "推動寵物醫療保障方案"], subTitle: "喵的保障", list: [{ title: "設立寵物醫療基金", content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用" }, { title: "提供醫療補助", content: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力" }, { title: "合作動物醫院", content: "目前已有和超過 200 家動物醫院進行初步的合作討論" }], imgSrc: medical
  },
  {
    id: "policy_3",
    color: "#FFDDDD", title: ["推廣寵物飼養教育！", "讓愛更加專業"], subTitle: "喵的教育", list: [{ title: "設立寵物醫療基金", content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用" }, { title: "提供醫療補助", content: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力" }, { title: "合作動物醫院", content: "目前已有和超過 200 家動物醫院進行初步的合作討論" }], imgSrc: learn
  },
]

export const ACTION = [
  { id: Dialog.DONATE, title: "小額支持喵喵", content: "您的小筆捐款，是每隻毛孩未來的大大動力！", button: "小額捐款", imgSrc: donate }, { id: Dialog.SERVICE, title: "民眾服務信箱", content: "親愛的鄉親，每一位市民的意見都是我們社區前進的原動力", button: "填寫表單", imgSrc: mail }
]

export const DONATE_PLAN = [
  { id: "d1", title: "喵星人之友", amount: 600, count: 1211 },
  { id: "d2", title: "喵星大使", amount: 6000, count: 111 },
  { id: "d3", title: "喵星傳奇", amount: 60000, count: 2711 },
  { id: "d4", title: "自訂贊助金額", amount: 0, count: 0 }
]