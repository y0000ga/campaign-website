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
  title: "競選主張", route: "/about", icon: nav_about, activeIcon: nav_active_about
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
  [Dialog.SERVICE]: "民眾信箱"
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
}, {
  color: 'primary',
  icon: 'twitter'
}]

export const PROMOTION = ["為喵星人，護台灣！", "從喵的眼中，看見台灣！", "喵的未來，人的希望！"]

export const ADVOCATE = '候選人主張'

export const TAIWAN_FUTURE = "台灣的未來"

export const ADVOCATE_CONTENT = "畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。"


export const ACTIVITY = [
  {
    id: "activity_1", title: "參與台北寵物論壇，爭取貓咪友善環境", date: "2023/12/26", content: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！", subContent: ['這不僅是一場為了擁護貓咪權益而參與的論壇，更是一場為建立貓咪友善環境而奮鬥的冒險。', '在這個嘈雜的城市裡，許多貓咪因為種種原因而面臨著挑戰，包括遭受遺棄、缺乏適切的醫療照護，以及環境不友善的問題。因此，我們進入了寵物論壇，積極參與並推動改變，讓這座城市成為貓咪們更幸福的家園。', '身穿一襲輕盈的貓咪圖案T恤，我向著論壇的參與者們展示了一份關於貓咪友善環境的提案。首先，我呼籲大家加強對貓咪的認識，鼓勵領養而非購買，並推廣絕育的重要性，以減少流浪貓的數量。同時，我提出建立更多的貓咪友善公共空間，如貓咪咖啡廳、貓主題公園等，提供更多機會讓人們與貓咪互動，促進彼此之間的情感連結。', '這場論壇不僅讓我們能夠發表意見，更讓我們與其他熱愛貓咪的人們建立起深厚的交流。我在現場結識了一位貓飼養專家，她分享了許多關於貓咪照顧的實用建議，從飲食到玩具，讓我更了解如何提供最好的生活品質給我的毛茸寶貝。', '在論壇中，我也得知了一個關於志願服務團隊的計畫，他們致力於協助貓咪收容所提供更良好的環境和更多的關愛。我毫不猶豫地參與了這個團隊，期望能透過實際行動，讓更多的貓咪有機會找到一個永遠的家。', '我們相信，每一隻貓咪都應該擁有一個安全、溫馨且充滿愛的家。這不僅僅是一場論壇，更是一個集結力量的契機，為了打造一個貓咪友善的城市而努力。未來，我們將持續參與類似的活動，不斷倡導和實踐「貓咪至上」的理念，讓每一隻貓咪都能在這座城市中感受到無盡的關愛。', '', ''], imgSrc: seminar
  },
  { id: "activity_2", title: "收容所模特兒大比拼！", date: "2023/12/20", content: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！", subContent: ['這不僅是一場讓收容所的狗狗和貓咪展現風采的比拼，更是一場感動人心的活動，呼籲大眾給予這些可愛生命一個機會。', '長久以來，收容所一直是一個被忽視的角落，許多毛孩子默默地等待著一個機會，一個能夠真正被愛的家。為了改變這種現象，我們決定以舞台上的風采，將這些可愛的生命呈現給更多人。', '今天，收容所不再是一片寂靜。隨著音樂的節奏，來自收容所的狗狗和貓咪們在T字舞台上走來走去，展現出各種不同的風格和個性。有的毛孩子自信滿滿地走上舞台，有的則顯得害羞卻同樣可愛。他們身上的每一個動作，每一個眼神，都在述說著他們獨特的故事。', '這場「模特兒走秀」不僅是一場給予這群被遺忘的毛孩子關注的機會，更是一場感動人心的藝術表演。觀眾們紛紛拿出手機記錄下這些可愛瞬間，心中的愛心悄悄滋長。', '在活動現場，我們也邀請了一位知名寵物溝通師，進行與毛孩子的心靈對話。透過這種方式，我們更深入地了解了這些毛孩子的真實感受和期望。有些狗狗向觀眾傳達著對愛的渴望，而有些貓咪則表現出對一個安靜家庭的渴望。', '除了模特兒走秀，我們也設置了領養區，提供現場觀眾與這些可愛生命近距離接觸的機會。不少人在感受了毛孩子的溫暖後，紛紛決定展開領養程序，給予這些可憐的生命一個真正屬於牠們的家。', '這場活動讓我們看到了人與動物之間深刻的情感聯繫。透過模特兒走秀，我們成功喚起了大眾對於收容所毛孩子的興趣和愛心。我們希望這樣的活動能夠成為一個開端，讓更多人認識到，每一隻收容所的毛孩子都值得擁有一個充滿愛的家。未來，我們將繼續舉辦類似的活動，讓更多收容所的毛孩子找到愛的依歸，讓每一個故事都有一個幸福的結局。'], imgSrc: show },
  { id: "activity_3", title: "掃街模式開啟！帶著你的貓耳，來和我一起走！", date: "2023/12/24", content: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！", subContent: ["這是一場滿懷歡笑和驚奇的探險，我們以「掃街模式」的方式，穿梭在繁華的市區，與每一位喜歡可愛風格的朋友們互動。街上的氣氛熱烈非凡，彷彿置身於一個充滿夏日陽光和歡樂的童話世界。", "走在街頭，隨處可見戴著各式貓耳的行人，不論是年輕的孩童、時尚的青少年，還是成熟的大人，大家都沉浸在這場可愛風潮中。有的人戴著逗趣的貓耳髮箍，有的人選擇了搭配服裝的貓耳頭飾，每個人都展現著屬於自己獨特的貓咪風格。", "這次的掃街活動，更是吸引了不少狗狗的目光。有些主人特地為心愛的狗狗戴上可愛的貓耳，讓牠們也成為這場時尚派對的焦點。街上瀰漫著歡笑聲和狗狗們的歡快叫聲，讓整個街區都充滿了生機。", "不僅如此，我們還在街頭設置了一個特別的「貓耳握手區」，邀請大家齊聚一堂，分享彼此對貓咪風潮的熱愛。這裡成為了大家交流的樂園，每一位戴著貓耳的朋友都敞開心扉，分享著彼此對於貓耳文化的獨特見解和心得。", "在這場時尚掃街中，我們也邀請了一位專業的貓咪造型師，為戴著貓耳的參與者進行現場造型。不少人趁機改變了自己的髮型，讓整個活動增添了一份時尚與獨特。", "這次的「掃街模式」不僅讓人們感受到歡樂，更促使大家對於貓咪文化的關注。透過這樣的活動，我們期望喚起更多人對於貓咪的愛與關懷，同時也讓貓耳文化在城市中繼續發光發熱。", "未來，我們將持續舉辦類似的活動，為城市注入更多歡笑和愛的元素。無論你是喜歡可愛風格的愛貓人士，還是只是想要享受歡樂氛圍的大眾，都歡迎加入我們的「掃街模式」，一同走在這充滿愛和溫馨的城市街頭！"], imgSrc: walk },
]

export const POLICY = [
  {
    id: "policy_1",
    color: "#BEEADB", title: ["打造休閒天堂！", "推廣寵物娛樂休閒場所"], subTitle: "喵的福利", list: [{ title: "建立寵物友善公園", content: "在城市各處建立寵物友善公園，提供足夠的休憩區域和寵物遊樂設施。這不僅讓毛小孩有更多空間活動，也讓飼主們能在安全愉悅的環境中放鬆身心。" }, { title: "舉辦寵物友善活動", content: "組織各種寵物友善活動，如寵物遊行、寵物市集等，提供社區居民一個互動的平台。透過這些活動，不僅能增進飼主之間的交流，也能促進寵物與寵物之間的社交。" }, { title: "設立室內寵物活動場地", content: "在城市中設立室內的寵物活動場地，提供各種娛樂設施，如障礙物訓練區、寵物游泳池等，讓寵物在不受天氣影響的情況下，擁有更多運動和娛樂的機會。" }, { title: "支持寵物咖啡廳", content: "提供相關的政府支持，鼓勵開設寵物友善的咖啡廳。這不僅提供了一個輕鬆的社交場所，也為寵物主人們提供了一個可以一邊品味美食、一邊與毛小孩們共度時光的場所。" }, { title: "推動寵物友善商店認證", content: "創建寵物友善商店認證機制，鼓勵商店提供寵物友善服務，如提供水源、寵物進入許可等，以推動整個城市的寵物友善氛圍。" }, { title: "建立寵物志願服務團隊", content: "鼓勵組織寵物志願服務團隊，提供寵物陪伴、照顧等服務，尤其是針對有需要的社區成員，如老年人、殘障者等。這不僅讓寵物有更多社交機會，同時也為社區帶來更多愛的力量。" }], imgSrc: heaven
  },
  {
    id: "policy_2",
    color: "#F7ECE1", title: ["為毛孩子謀福利！", "推動寵物醫療保障方案"], subTitle: "喵的保障", list: [{ title: "創建寵物醫療保障基金", content: "建立一個專門的寵物醫療保障基金，用於補助低收入家庭的寵物醫療費用，確保每一隻毛孩子都能夠獲得及時且適切的醫療照護。" }, { title: "推動政府補助計畫", content: "提出政府補助計畫，鼓勵動物醫院提供低收入家庭優惠價格，同時降低寵物醫療服務的整體成本。透過政府資助，醫療負擔可減輕，提高寵物健康水平。" }, { title: "設立寵物健康保險", content: "推動建立寵物健康保險體系，提供不同種類的保障方案，包括預防接種、疾病治療、手術等。讓飼主可以根據需要選擇適合自己毛孩子的保障計畫。" }, { title: "訓練寵物急救志工隊伍", content: "建立寵物急救志工隊伍，進行寵物急救培訓，提高社區居民處置寵物急救情況的能力。同時，建立急救基地，提供免費的寵物急救服務。" }, { title: "鼓勵動物醫學研究", content: "增加對動物醫學研究的投資，推動更先進的醫療技術和藥物的開發，提升對於寵物疾病的治療水平，同時提高寵物的生存率和生活品質。" }, { title: "舉辦寵物健康宣導活動", content: "定期舉辦寵物健康宣導活動，向社區居民提供有關寵物保健知識，包括預防措施、日常護理等。提高飼主的寵物保健意識，減少疾病發生的可能性。" }], imgSrc: medical
  },
  {
    id: "policy_3",
    color: "#FFDDDD", title: ["推廣寵物飼養教育！", "讓愛更加專業"], subTitle: "喵的教育", list: [{ title: "舉辦寵物飼養講座", content: "建立定期的寵物飼養講座，邀請專業的寵物行為師、獸醫等進行分享。這將提供飼主有系統的寵物飼養知識，包括營養、行為管理等方面。" }, { title: "建立寵物飼養手冊", content: "編撰寵物飼養手冊，提供飼主基本的飼養指南。手冊包含飼養習慣、飲食建議、常見疾病預防等資訊，讓飼主隨時可以查閱。" }, { title: "推動寵物飼養培訓課程", content: "協助成立寵物飼養培訓課程，鼓勵飼主參與，學習如何與毛小孩溝通、基本的醫學知識等。提高飼主的專業水平，確保毛小孩得到適當的照顧。" }, { title: "設立寵物領養諮詢中心", content: "建立寵物領養諮詢中心，提供潛在飼主領養前的諮詢服務。透過專業人員的建議，確保領養的動物符合飼主的生活習慣，降低領養後的問題發生率。" }, { title: "鼓勵學校開設寵物教育課程", content: "推動學校開設寵物教育課程，從小培養孩子們對於寵物的尊重和愛護。這不僅是對孩子們的教育，也是對未來飼主的培養。" }, { title: "舉辦寵物飼主交流會", content: "定期舉辦寵物飼主交流會，提供一個飼主們分享經驗、解決問題的平台。透過交流，不同的飼主可以相互學習，建立更加專業的飼養經驗。" }], imgSrc: learn
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