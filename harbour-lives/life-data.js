'use strict';
const LIFE_REFS={
education:{title:'香港記憶：戰前教育',url:'https://www.hkmemory.hk/en/collections-education-about.html',note:'私塾、教會、官立及民辦教育並存，入學受年齡、性別、語言與家計影響。讀書班不是正式學歷的替代證明。'},
central:{title:'中央書院：古物古蹟辦事處',url:'https://www.amo.gov.hk/en/heritage-trails/greater-bay-area-education-trail/theme-b/central-school/index.html',note:'1862年開辦，為華人男童提供西式教育。本版將校名統一標為中央書院／後來皇仁書院，不混用後來名稱作早期正式名稱。'},
paul:{title:'聖保羅書院校史',url:'https://heritage.spc.edu.hk/trail/checkpoint.php',note:'1851年創校；本版僅開放至1940年的早期路線，未把戰時或復校後的班級安排當作完全相同制度。'},
hku:{title:'香港大學校史',url:'https://www.hku.hk/en/about-hku/history',note:'1911年成立，1912年收生；1921年首次招收女生，1941—1945年教學受戰爭中斷。課程年期與錄取門檻在遊戲中簡化。'},
med:{title:'港大醫學院歷史節點',url:'https://135-med.hku.hk/milestones',note:'西醫書院1887年成立，孫中山與江英華於1892年畢業。結業不自動等於任何年代的醫師執業資格。'},
cuhk:{title:'香港中文大學：成立歷程',url:'https://www.lib.cuhk.edu.hk/en/libraries/ugallery/zonea/founding/',note:'中大於1963年成立，不能提前安排角色入讀；本版以四年文科學程模擬當年的一路升學方向。'},
free:{title:'教育局：普及教育發展',url:'https://www.edb.gov.hk/attachment/en/curriculum-development/kla/technology-edu/resources/hmsc/resource-kit/Booklet%2011_E_2022.pdf',note:'1971年免費小學與1978年九年免費教育為重要節點。免費不表示沒有生活或教材成本，亦不代表所有私校免費。'},
ucl:{title:'UCL官方歷史時間線',url:'https://about.ucl.ac.uk/ucl-timeline/',note:'UCL於1826年成立，1828年開始教學；1878年正式開放女性學位教育。本版海外路線僅模擬文科方向，不套用於當時女性醫學招生。'},
sun:{title:'香港大學圖書館：孫中山在香港',url:'https://www.lib.hku.hk/syshk/',note:'孫中山1887—1892年在西醫書院求學。個人與玩家的相遇、交談及關係為虛構，不增寫真實人物未有記載的引言。'},
alliance:{title:'新加坡國家圖書館：同盟會與革命網絡',url:'https://biblioasia.nlb.gov.sg/all-sections/vol-11-issue-4-jan-mar-2016-singapore-chinese-revolution-nanyang-republic/',note:'同盟會於1905年成立。此處是相關刊物與虛構支持者的接觸，不假定孫中山在這段時間可以自由出入香港。'},
taiping:{title:'加州大學出版社：香港客家社群與洪仁玕',url:'https://publishing.cdlib.org/ucpressebooks/public/book/christian-souls-and-chinese-spirits-a-hakka-community-in-hong-kong.html',note:'洪仁玕1852年曾赴香港，後與太平天國相關。只在1853—1857年的在港背景安排虛構見聞，不把洪秀全寫成常居香港。'},
marriage:{title:'政府檔案處：婚姻制度沿革',url:'https://www.grs.gov.hk/ws/online/wedding/en/sec2/index.html',note:'1971年10月7日起的新婚姻受改革後制度規管。早期共同生活不自動構成有效婚姻；不同形式與既有關係不能只按血統分流。'},
war:{title:'政府檔案處：日佔時期',url:'https://www.grs.gov.hk/ws/online/80VWR/en/home/index.html',note:'1941—1945年日佔期間生活、行政與供應改變；本版只有簡化戰時收支及教學中斷，未實裝完整日佔法律與配給。'}
};
// Requirements, time, cost, probabilities and resulting abilities are gameplay abstractions.
const LIFE_COURSES=[
{id:'reading',title:'私塾／家庭讀寫',from:1842,to:1970,minAge:6,maxAge:40,level:0,target:1,years:4,fee:2,english:0,study:0,place:'香港',ref:'education',award:'基礎讀寫進度（非學校文憑）'},
{id:'primary',title:'官立／資助小學',from:1971,to:1997,minAge:6,maxAge:15,level:0,target:1,years:6,fee:0,english:0,study:0,place:'香港',ref:'free',award:'小學階段完成'},
{id:'paul',title:'聖保羅書院 · 早期路線',from:1851,to:1940,minAge:11,maxAge:22,gender:'男',level:1,target:2,years:5,fee:3,english:15,study:20,place:'香港',ref:'paul',award:'中等學業進度（歷史課程簡化）'},
{id:'central',title:'中央書院／後來皇仁書院',from:1862,to:1940,minAge:11,maxAge:22,gender:'男',chinese:true,level:1,target:2,years:5,fee:3,english:20,study:25,place:'香港',ref:'central',award:'中等學業進度（歷史課程簡化）'},
{id:'bridge',title:'成人中英文讀書班',from:1842,to:1997,minAge:16,maxAge:80,level:0,target:2,years:4,fee:2,english:0,study:0,place:'香港',ref:'education',award:'升學準備完成（虛構讀書班，非認可中學文憑）'},
{id:'secondary',title:'本地資助中學 · 初高中銜接',from:1946,to:1997,minAge:11,maxAge:24,level:1,target:2,years:6,fee:3,english:15,study:20,place:'香港',ref:'free',award:'中等學業進度'},
{id:'medical',title:'香港西醫書院',from:1887,to:1911,minAge:17,maxAge:50,gender:'男',level:2,target:3,years:5,fee:6,english:65,study:60,place:'香港',ref:'med',award:'西醫書院學程結業（不自動取得執業資格）'},
{id:'hku',title:'香港大學 · 文科方向',from:1912,to:1997,femaleFrom:1921,minAge:17,maxAge:65,level:2,target:3,years:4,fee:6,english:65,study:60,place:'香港',ref:'hku',award:'香港大學文科學程完成（遊戲化）'},
{id:'cuhk',title:'香港中文大學 · 文科方向',from:1963,to:1997,minAge:17,maxAge:65,level:2,target:3,years:4,fee:5,english:40,study:60,place:'香港',ref:'cuhk',award:'香港中文大學文科學程完成（遊戲化）'},
{id:'ucl',title:'英國留學 · UCL文科方向',from:1828,to:1997,femaleFrom:1878,minAge:18,maxAge:65,level:2,target:3,years:4,fee:8,travel:10,english:65,study:60,place:'倫敦',ref:'ucl',award:'海外文科學程完成（遊戲化）'}
];
const LIFE_JOBS=[
{id:'labour',title:'一般散工',from:1842,to:1997,wage:14,skill:0,level:0},
{id:'clerk',title:'商號文員',from:1842,to:1997,wage:21,skill:25,english:35,level:1},
{id:'shipping',title:'航運帳務',from:1842,to:1997,wage:27,skill:45,english:60,level:2},
{id:'teacher',title:'讀寫教學／教育助理',from:1842,to:1997,wage:25,skill:35,english:35,level:2},
{id:'factory',title:'工廠技工',from:1950,to:1997,wage:24,skill:35,level:1},
{id:'graduate',title:'畢業生行政職',from:1912,to:1997,wage:34,skill:35,english:55,level:3}
];
const LIFE_ENCOUNTERS=[
{id:'taiping-news',from:1851,to:1864,place:'香港',chance:.28,title:'遠方戰事，眼前家書',ref:'taiping',body:'太平天國戰事的消息隨來往者傳入海港。一位虛構的旅人想託你打聽失聯親屬；有人卻把每位新來者都當成同一陣營。你可以幫忙整理尋人消息，也可以先守住自己的家計。',choices:[{label:'協助核對家書與尋人資料',effect:{study:4,social:4},flag:'helpedFamilies'},{label:'量力提供2點暫住支援',effect:{cash:-2,social:7},flag:'shelteredTraveller'},{label:'保留盤纏，只記錄已核對消息',effect:{study:2},flag:'carefulNews'}]},
{id:'hong-rengan',from:1853,to:1857,place:'香港',chance:.25,title:'洪仁玕在港時的一次見聞',ref:'taiping',body:'在教讀寫者與來往旅人的談話中，你有機會接觸洪仁玕在香港活動背景下的消息。這段交會是原創虛構：他不向你透露未有史料支持的秘密，你也無法憑一次交談改寫太平天國。',choices:[{label:'聽取教育與見聞，另查來源',effect:{study:6,english:3},flag:'hongRenganContext'},{label:'協助陌生家庭閱讀信件',effect:{social:6},flag:'letterHelp'},{label:'禮貌告辭，回到日常工作',effect:{skill:3},flag:'keptRoutine'}]},
{id:'sun-student',from:1887,to:1892,place:'香港',chance:.45,minStudy:25,title:'西醫書院附近的孫中山',ref:'sun',body:'你在西醫書院附近碰到求學中的孫中山（Sun Yat-sen）。這是符合年代背景的虛構機遇，不是已證實的私人會面；對話以敘述呈現，不捏造名人原話。你看見的首先是一位正在學醫的年輕人。',choices:[{label:'談讀書與醫學教育',effect:{study:8,english:4},flag:'sunEducation'},{label:'介紹街坊的讀寫互助',effect:{social:8},flag:'sunCommunity'},{label:'只在日記留下見聞',effect:{study:3},flag:'sunDiary'}]},
{id:'tongmenghui',from:1905,to:1911,place:'香港',chance:.40,minAge:18,title:'同盟會相關刊物與來信',ref:'alliance',body:'一名虛構的商旅帶來1905年後同盟會相關刊物與討論。這是與消息及支持者的接觸，不保證孫中山本人在香港出現，也不自動把你登記為歷史組織成員。不同立場都可能影響你的家庭關係。',choices:[{label:'閱讀並比較不同立場',effect:{study:7,social:3},flag:'allianceReader'},{label:'以3點支持識字與公共討論',effect:{cash:-3,social:7},flag:'publicDiscussion'},{label:'保持距離，照顧家庭',effect:{health:4},flag:'familyFirst'}]}
];
