'use strict';
Object.assign(LIFE_REFS,{
hotung:{title:'何東家族：何東夫人醫局資源冊',url:'https://www.heritage.gov.hk/filemanager/heritage/en/content_192/Lady_Ho_Tung_Resource_Kit-Eng.pdf',note:'何東（1862—1956）及麥秀英的家庭與慈善活動有檔案背景；本路線主角是玩家，不是何東本人，也不取代真實後人。'},
hotungFamily:{title:'何東夫人醫局文物影響評估',url:'https://www.amo.gov.hk/filemanager/amo/common/form/HIA_Report_LHTWC.pdf',note:'麥秀英與張蓮覺的平妻安排被資料描述為特殊安排；不能由此推論當時所有華人皆可合法擁有三名正妻。'},
clara:{title:'東蓮覺苑檔案：何張蓮覺',url:'https://archives.tlky.org/our_people/lady-clara-ho-tung/',note:'何張蓮覺重視女性教育，東蓮覺苑1935年成立。本路線的玩家辦學與資助計畫為虛構，不冒稱取得真實機構所有權。'},
tang:{title:'國立公共資訊圖書館：唐紹儀',url:'https://edata.nlpi.edu.tw/CNH/Personage/personage.aspx?ID=0000162',note:'唐紹儀1874年列入第三批留美幼童，1881年回國，後從事交涉與公共事務。本路線不讓玩家自動取代他的真實公職。'},
cem:{title:'澳門文化局：香山籍留美幼童人文掠影',url:'https://www.icm.gov.mo/rc/viewer/pdfViewerParts/10077/2951',note:'留美幼童於1872—1875年分批赴美。年齡、選拔、年費和玩家候選人均為遊戲化；不把玩家增列進真實120人名冊。'},
custom:{title:'律政司：中國習慣法及1971年婚姻改革',url:'https://www.info.gov.hk/gia/general/200103/01/0301250.htm',note:'正妻、妾與其他婚姻形式須區分；改革於1971年10月7日生效。年度史實模式從1971年度保守關閉新增妾安排，原有成員不刪除；傳統延續模式則明示架空。'}
});
LIFE_COURSES.push({id:'cem',title:'留美幼童方向 · 遊戲候選學程',from:1872,to:1875,minAge:10,maxAge:16,gender:'男',chinese:true,level:1,target:2,years:10,fee:1,travel:4,english:10,study:20,place:'美國東北部',ref:'cem',award:'留美幼童方向修業紀錄（非歷史名冊或學位）'});
LIFE_JOBS.push({id:'comprador',title:'商館華務經紀（虛構職位）',from:1880,to:1997,wage:33,skill:40,english:45,level:1},{id:'diplomatic',title:'跨境交涉事務主管（虛構職位）',from:1882,to:1997,wage:38,skill:30,english:65,level:2});
const DYNASTY_ROUTES={
hotung:{title:'何東式 · 商業與家族教育',from:1880,to:1935,ref:'hotung',intro:'參考何東的跨文化商務及其家庭的慈善教育傳承。你建立的是自己的商業家族，不是接管何東財產或重演其私人生活。',steps:[
{title:'商館門前的雙語帳',year:1880,need:{age:16,english:25,study:25,cash:2},body:'一名虛構的商館帳房需要能理解中英文往來的人。你可以先從抄錄、核帳與傳譯做起，不用一次相遇就成為總買辦。',action:'接受文書與核帳訓練',effect:{cash:-2,english:8,skill:8},ref:'hotung'},
{title:'信用比招牌更重',year:1882,need:{english:45,skill:40,study:40,cash:4},body:'商號讓你參與一批跨境貨款的協調。你要列清責任、付款與資料來源；完成後可擔任遊戲中的華務經紀，這不是怡和的真實任命。',action:'以書面條件承接華務經紀工作',effect:{cash:-4,skill:7,social:6},job:'comprador',ref:'hotung'},
{title:'一家幾房，幾份未來',year:1890,need:{cash:6,family:true},body:'史料中的何東（Robert Ho Tung）、麥秀英與張蓮覺有特殊的家庭安排，不能當作所有人的一般法律。參考多方協商與後代教育的題材，你召開自己的家庭會議。每房的生活與教育要分開記錄，也要讓當事人說話；不要求你必須多娶，單一伴侶或已有子女的家庭也能走這條路。',action:'為全家設立教育與照顧計畫',effect:{cash:-6,social:5},familyStudy:6,ref:'hotungFamily'},
{title:'留給女孩的一盞燈',year:1935,need:{cash:12,study:50},body:'張蓮覺推動女子教育、東蓮覺苑於1935年成立的背景，讓你思考財產還能成為什麼。你可以資助一個虛構的女子讀寫計畫，為家族留下超過一間商號的故事。',action:'資助女子讀寫與家族教育',effect:{cash:-12,social:10,study:5},familyStudy:10,ref:'clara'}]},
tang:{title:'唐紹儀式 · 留學與交涉',from:1872,to:1912,ref:'tang',intro:'參考留美幼童到公共交涉工作的經歷。路線保存求學、召回、語言與文書的代價，不保證得到真實官職，也不改寫唐紹儀的人生。',steps:[
{title:'出洋之前，先讀懂一封信',year:1872,need:{age:10,english:10,study:20,cash:2},body:'唐紹儀（Tang Shaoyi）1874年赴美的故事提醒你：留學並非只是一張船票。先整理語言、家人同意、經費與回程安排。符合年代的華人男童可申請留美幼童方向；其他角色可走後來的UCL文科路線。',action:'完成出洋與語文準備',effect:{cash:-2,english:8,study:8},ref:'cem'},
{title:'修業，不一定等於畢業',year:1881,need:{overseas:true},body:'1881年召回的背景使部分留美學生未能按原先打算完成學業。你必須保留真實的修業紀錄，不能把未完成的課程寫成已取得學位。完成海外學程或持有本局召回紀錄，都能接續這一步。',action:'整理海外修業與返程紀錄',effect:{study:5,english:5},ref:'tang'},
{title:'把兩種語言放在同一張桌',year:1882,need:{english:65,study:60,skill:30,cash:2},body:'參考唐紹儀早期交涉工作的能力方向，你處理一宗虛構商務爭議。先核對名詞與當事人意願，再寫成雙方讀得懂的紀錄，並不代替真實外交官發言。',action:'完成一份跨境交涉紀錄',effect:{cash:-2,skill:8,social:6},job:'diplomatic',ref:'tang'},
{title:'1912年，選擇如何服務',year:1912,need:{social:40,study:65},body:'政局變動之際，家人與公共工作都向你提出要求。這條虛構路線讓你以交涉、教育和協調服務社群，不把歷史上的首任內閣總理職位直接交給玩家。',action:'建立自己的交涉與公共服務團隊',effect:{social:10,study:5},ref:'tang'}]}
};
LIFE_ENCOUNTERS.push({id:'hotung-context',from:1883,to:1938,place:'香港',chance:.23,minAge:18,title:'何東家族的商務與教育消息',ref:'hotung',body:'商館與公益場合傳來何東家族的消息。玩家遇到的是虛構的來訪者，並非一段已證實的私人會面。雙語能力、家族協商與女子教育，成了你可以選擇實踐的方向。',choices:[{label:'研究商業與教育傳承',effect:{study:6,skill:4},flag:'hotungInspiration'},{label:'量力以3點支持讀寫工作',effect:{cash:-3,social:7},flag:'hotungCharity'},{label:'記下消息，先做好自己的事',effect:{study:2},flag:'hotungNotes'}]},
{id:'tang-context',from:1881,to:1912,place:'香港',chance:.23,minAge:12,title:'唐紹儀與留學生的前路',ref:'tang',body:'一份來信談起留美學生返國後的處境，以及語言、文書與交涉工作的可能。你不必遇到唐紹儀本人，亦能沿這個方向建立自己的求學與工作路線。',choices:[{label:'整理留學與公共工作資料',effect:{study:6,english:4},flag:'tangInspiration'},{label:'練習中英文公牘',effect:{skill:5,english:5},flag:'tangWriting'},{label:'把消息留在家族紀錄',effect:{study:2},flag:'tangNotes'}]});
