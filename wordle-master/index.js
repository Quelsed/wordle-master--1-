'use strict';

const BACKSPACE_KEY = 'Backspace';
const ENTER_KEY = 'Enter';
const WORD_LIST = ["КАЗАН",
"БАШКА",
"ТАТАР",
"ТУГАН",
"УЗГАН",
"КАДӘР",
"ТӨРЛЕ",
"БЕРГӘ",
"БҮГЕН",
"ХӘЗЕР",
"ӘЛЕГЕ",
"ТАГЫН",
"ХАЛЫК",
"АЕРЫМ",
"ДӘВАМ",
"ҮТКӘН",
"ЧЫГЫШ",
"ХӘБӘР",
"СУГЫШ",
"СОҢГЫ",
"КАБУЛ",
"МИЛЛИ",
"ЯРДӘМ",
"КИЛЕШ",
"АРТЫК",
"КӨРӘШ",
"МОНДА",
"РАЙОН",
"ҖИҢЕЛ",
"АННАН",
"ШӘҺӘР",
"ХАТЫН",
"КАРАР",
"ДӨНЬЯ",
"УКУЧЫ",
"МАТУР",
"ВАКЫТ",
"ЕЛЛЫК",
"БЕЛЕМ",
"ЯЗУЧЫ",
"ӨСТӘЛ",
"СПОРТ",
"ДӨРЕС",
"ЯТКАН",
"КЫЗЫЛ",
"ХАНЫМ",
"КАРЫЙ",
"ТАНЫШ",
"ТОРАК",
"УРТАК",
"ҖАВАП",
"БАТЫР",
"СОРАУ",
"ОЕШМА",
"ЧИТТӘ",
"ФИКЕР",
"БЕРАЗ",
"ТӨСЛЕ",
"МӨҺИМ",
"ҺАМАН",
"ГОМЕР",
"ХАЛКЫ",
"ТАВЫШ",
"ЗАКОН",
"ГАИЛӘ",
"ХӘРБИ",
"ӘДӘБИ",
"ИСЛАМ",
"ТӨРКИ",
"СОВЕТ",
"КИТАП",
"САЛЫМ",
"РӘСМИ",
"ТӨБӘК",
"ШӘХСИ",
"АЛТЫН",
"АНДЫЙ",
"ТАЛӘП",
"ҮЛГӘН",
"ИДАРӘ",
"КҮҢЕЛ",
"СӘЯСИ",
"ХОКУК",
"ЯЛГАН",
"БҮЛӘК",
"СӘҮДӘ",
"ТИМЕР",
"АКТИВ",
"БАСЫМ",
"УРМАН",
"БОРЫН",
"НЕФТЬ",
"ТЕАТР",
"ЧИШМӘ",
"КАРАШ",
"ФӘННИ",
"АШЛЫК",
"ҖӘЛЕП",
"МИЛЕК",
"ТИРӘН",
"МАЛАЙ",
"КАЛЫП",
"ӨЛКӘН",
"ДАИМИ",
"ТЫНЫЧ",
"КИНӘТ",
"КИҢӘШ",
"ГАСЫР",
"ҖИТДИ",
"ХАКЛЫ",
"НАЧАР",
"БАСМА",
"НЫКЛЫ",
"АВЫРУ",
"ӘЙБӘТ",
"КҮРШЕ",
"ГҮЗӘЛ",
"КИЧЕН",
"ТАРИХ",
"КӨЗГЕ",
"ВАТАН",
"АБЗЫЙ",
"ҮЗАРА",
"АВТОР",
"МӘЧЕТ",
"ТИГЕЗ",
"ТОННА",
"ҖЫРЧЫ",
"ЧИРАТ",
"ТӘМЛЕ",
"ЗАМАН",
"НИГЕЗ",
"КЫСКА",
"КАМИЛ",
"БАБАЙ",
"ГАЛИМ",
"КИЛЕН",
"БӘХЕТ",
"МИСАЛ",
"ҺӘЛАК",
"ТЫШКЫ",
"КАПКА",
"ТЫРЫШ",
"АКРЫН",
"РУСЧА",
"ОХШАШ",
"КАБАТ",
"САЛАМ",
"КӨМЕШ",
"ХӨКЕМ",
"ЙӨРӘК",
"ИПТӘШ",
"ЯЛГЫЗ",
"ТАБЫН",
"ТӨГӘЛ",
"ФАЙДА",
"ШӘХЕС",
"СУЛЫШ",
"СЕРЛЕ",
"ДРАМА",
"БАЛЫК",
"БҮТӘН",
"ЯЛГЫШ",
"КЫЗЫК",
"КИЧКЕ",
"БАЗАР",
"СӘХНӘ",
"ИХЛАС",
"ЧӘЧӘК",
"ЯНГЫН",
"ФАТИР",
"ҮРНӘК",
"ҖӘЙГЕ",
"КУНАК",
"ИҖАДИ",
"КҮЧМӘ",
"ГАДЕЛ",
"ФИЛЬМ",
"ӨСТЕН",
"ФИЗИК",
"БҮЛМӘ",
"ТАТЛЫ",
"ТӘҮГЕ",
"КАРГА",
"КАНАТ",
"ТАМЫР",
"ГАРӘП",
"СИРӘК",
"МИНУТ",
"ГОМУМ",
"ГАЯТЬ",
"ВАФАТ",
"ГӘЗИТ",
"МУЛЛА",
"СӘБӘП",
"КУШМА",
"ХОДАЙ",
"ИРТӘН",
"КАНУН",
"КАЛӘМ",
"КЕРЕМ",
"САРЫК",
"МАТДИ",
"ПАТША",
"ЧИБӘР",
"ЯЗМЫШ",
"ХИСАП",
"ЯҢГЫР",
"БУРЫЧ",
"ТЫГЫЗ",
"ПЕЧӘН",
"ЯУЛЫК",
"БҮЛЕК",
"КҮПЕР",
"КЫТАЙ",
"БАРЧА",
"ТӨРЕК",
"ӘЙБЕР",
"КЫШКЫ",
"КАНАЛ",
"САБАН",
"ТЕЛӘК",
"ТУЛАЙ",
"ТОТАШ",
"ИКМӘК",
"ТӨНГЕ",
"ГАЗИЗ",
"ГАҖӘП",
"МИРАС",
"БУЛАТ",
"ТАБИБ",
"МУЗЕЙ",
"ЛЕНИН",
"КОЛАК",
"ЗАРУР",
"ДИСТӘ",
"САБЫР",
"ЧИСТА",
"БАКЧА",
"СЕРИЯ",
"БОДАЙ",
"ҺӨНӘР",
"НЕЧКӘ",
"ХӘТЕР",
"ЧИТЕН",
"КАТЫШ",
"АЕРМА",
"НӘФИС",
"ИЛҺАМ",
"КУРКУ",
"ОПЕРА",
"ӘКРЕН",
"ТӨНЛӘ",
"АРАКЫ",
"БӘЙГЕ",
"АГРАР",
"КҮМЕР",
"МӨФТИ",
"ТӨРМӘ",
"ҖОМГА",
"ШТРАФ",
"ХӘЛӘЛ",
"ИРКЕН",
"НӘШЕР",
"МӘҢГЕ",
"ТОВАР",
"СӘФӘР",
"РӘХИМ",
"ЛИРИК",
"ШИКӘР",
"НЕМЕЦ",
"ОРГАН",
"САБЫЙ",
"ТАМЧЫ",
"ПОЧТА",
"УЗУЧЫ",
"ЛИДЕР",
"ЗАВОД",
"ҺӨҖҮМ",
"РОМАН",
"ЧОКЫР",
"БУРАН",
"САВЫМ",
"КИРТӘ",
"ДУЧАР",
"ФОРУМ",
"ВӘКИЛ",
"РИЗЫК",
"ЯНӘШӘ",
"АЛМАЗ",
"ХИМИЯ",
"КАЛЫН",
"КОРАЛ",
"БАЛЕТ",
"УҢГАН",
"НАМАЗ",
"ӘКИЯТ",
"ӘНКӘЙ",
"ТАМАК",
"РАДИО",
"КОЙМА",
"АРМИЯ",
"ЯМЬЛЕ",
"ЙОМЫШ",
"ГЕРОЙ",
"ФАРСЫ",
"САРЫФ",
"РӘСЕМ",
"БИЛЕТ",
"СУММА",
"КЫРЫС",
"СТАРТ",
"КАБАН",
"КАЙГЫ",
"ХӘКИМ",
"ОБЗОР",
"ТУГРЫ",
"НОМЕР",
"МУНЧА",
"САЛЛЫ",
"СОҢГА",
"ПОЕЗД",
"ДӘРЕС",
"КҮМӘК",
"ИЛАҺИ",
"РЕАЛЬ",
"КИБЕТ",
"КӨЙМӘ",
"ТАВЫК",
"ҮЗБӘК",
"САКЧЫ",
"КАБЕР",
"АЛЛАҺ",
"ШИМБӘ",
"УРАЗА",
"ХАРАП",
"ХИКӘЯ",
"БАРДА",
"КАЗЫЙ",
"ЧАСТЬ",
"ЗАКАЗ",
"ГАМӘЛ",
"ТУТАШ",
"ТАБАН",
"НӘСЕЛ",
"ЯРАЛЫ",
"ЯБЫЛУ",
"ЧӘЧКӘ",
"ФЕРМА",
"БАЛТА",
"ХӘТӘР",
"БИЛГЕ",
"ПӘРДӘ",
"ҮСМЕР",
"СУКЫР",
"НАМУС",
"ҮТКЕН",
"ГАЙРЕ",
"АДРЕС",
"РУБИН",
"ӘҮВӘЛ",
"ОЧРАК",
"ЭТНИК",
"КИСӘК",
"ТЕЗМӘ",
"АЛМАШ",
"АКЦИЯ",
"ЧЫРШЫ",
"ТЕЛЕМ",
"ГОРУР",
"БАКЫЙ",
"МИЧКӘ",
"ШӘРЫК",
"ТАКТА",
"ШОФЕР",
"ЯЛКЫН",
"САБЫН",
"АТАМА",
"ДЕЖУР",
"БАЯГЫ",
"ЮЛДАШ",
"САГЫШ",
"ЯТТАН",
"МОҢСУ",
"МОХИТ",
"КУЛАЙ",
"ИШАРӘ",
"ТОТАМ",
"ГӨНАҺ",
"ОРЛЫК",
"ШӘҺРИ",
"ҖӨМЛӘ",
"СӘЛӘТ",
"ТӨТЕН",
"НИКАХ",
"ПЫЯЛА",
"ӘТКӘЙ",
"БОЛЫТ",
"АЯНЫЧ",
"КЛАСС",
"НОКТА",
"ПЫЧАК",
"ӘХЛАК",
"ИФРАТ",
"ЧИМАЛ",
"ДӘЛИЛ",
"ЧАҢГЫ",
"БАКЫР",
"АРЗАН",
"ӘРСЕЗ",
"ДИНАР",
"ТӨЛКЕ",
"СУДЬЯ",
"ШАҺИТ",
"ЮНЬЛЕ",
"ФОРМА",
"ОБРАЗ",
"КУРАЙ",
"ГАДӘТ",
"АКСАК",
"ФРОНТ",
"ТАБАК",
"НУГАЙ",
"БОРЧУ",
"БОЗАУ",
"БОРАЙ",
"ЯШӘЕШ",
"ЧУВАШ",
"САБАК",
"ЯФРАК",
"ЧЫГЫМ",
"АУЛАК",
"ХАСИЛ",
"ЗИРАТ",
"АКТЫК",
"ТЕРӘК",
"АРХИВ",
"ТУЗАН",
"СУГАН",
"ФИНАЛ",
"ПРОЗА",
"ТУПАС",
"БЕРҮК",
"ТОРМА",
"КӨЛКЕ",
"ПЬЕСА",
"ӨЕЛЕП",
"АККОШ",
"ГРАММ",
"БОТКА",
"СИХРИ",
"ҖИТЕЗ",
"БАРЫШ",
"САРАЙ",
"ЗИРӘК",
"АРТКЫ",
"БӘНДӘ",
"ҖИРӘН",
"КЫСЫР",
"ГӘҖИТ",
"КАЛКУ",
"ТОМАН",
"ӘГЪЗА",
"АКТЕР",
"КЫЛЫЧ",
"ӨЛГЕР",
"КОЛАЧ",
"ФИРКА",
"НАРАТ",
"ЧИЛӘК",
"ҖИЛӘК",
"КЕЛӘМ",
"МАЙОР",
"ТӨЗЕК",
"КОРЫЧ",
"ГАЗАП",
"ФАРАЗ",
"СТЕНА",
"ЗАРАР",
"МИШӘР",
"ДАВЫЛ",
"ГАРИП",
"КИШЕР",
"МАМЫК",
"СТИЛЬ",
"ЧЕЧЕН",
"НАДАН",
"КАЗАХ",
"КЫМЫЗ",
"ГАЛӘМ",
"ХИМИК",
"ЛАТИН",
"ПИКЕТ",
"ТУРАН",
"МӘЗӘК",
"МОРАТ",
"АЛАМА",
"СЮЖЕТ",
"АНСАТ",
"ҮТМӘС",
"СЕЗОН",
"ТӨШКЕ",
"МИРЗА",
"АХМАК",
"ИСБАТ",
"ВИЗИТ",
"ОЧКЫЧ",
"СЫҢАР",
"ПОЭМА",
"СЫЗЫК",
"АБРУЙ",
"ПОЧЕТ",
"ТЕКСТ",
"МИЛКЕ",
"КАҺӘР",
"ИРТҮК",
"ҖИҢГИ",
"ПУНКТ",
"КАРТА",
"ҖИҺАН",
"ЙОМРЫ",
"КАМЫР",
"БОЛЫН",
"КАМЧЫ",
"ЧАГЫМ",
"ИРКӘМ",
"КАРАК",
"ОКЕАН",
"КАРЫШ",
"АКСЫЛ",
"ЯШЬЛИ",
"СЕНАЖ",
"КАЗНА",
"ЗАПАС",
"БИШЕК",
"ТӘҮБӘ",
"ЧИРЕК",
"ӘШӘКЕ",
"ПӨХТӘ",
"ВАГОН",
"БҮРЕК",
"МОРЗА",
"ҖЕГЕТ",
"ТОЙГЫ",
"ХӘЙЛӘ",
"ЧИРӘМ",
"ТӘҢКӘ",
"ҮРДӘК",
"ВОКАЛ",
"БАРАК",
"АЧКЫЧ",
"БӨДРӘ",
"ЙӨЗЕК",
"МАРҖА",
"ШЫРПЫ",
"ҖҮЛӘР",
"ЯЛКАУ",
"МОТОР",
"МӨДИР",
"ОСТАЗ",
"ТИШЕК",
"КӘКРЕ",
"АРТЫШ",
"ЛИНИЯ",
"ҖИҺАЗ",
"ГРИПП",
"ШӘРАБ",
"НИЗАГ",
"ХОЛКЫ",
"ОТРЯД",
"ТОНЫК",
"КАЛАЙ",
"МЕТРО",
"ХӘМЕР",
"ЧӘЧМӘ",
"ТАСМА",
"КИЛЕМ",
"ЧЕРЕК",
"ҖЕНСИ",
"КАШЫК",
"ЫНДЫР",
"ОТЧЕТ",
"СУРӘТ",
"КУЛАК",
"ЮМАРТ",
"КӨРӘК",
"БӘРДЕ",
"ЛИЦЕЙ",
"ҖИМЕШ",
"МАТДӘ",
"ТАКЫР",
"КОРАБ",
"ТАКСИ",
"КӨЛТӘ",
"ХӘРЕФ",
"ШӘҮЛӘ",
"БИСТӘ",
"ЭНДӘШ",
"АБЗАР",
"ҖӘЙМӘ",
"КӨЛӘЧ",
"ЗӘҺӘР",
"БӘЛЕШ",
"ТЫНГЫ",
"КЫЗЫЙ",
"КӨРӘН",
"ЮРГАН",
"БЕТОН",
"ШЕЛТӘ",
"ОКРУГ",
"КУПШЫ",
"ФИРМА",
"ЮРИСТ",
"ОРДЕН",
"ТИРЕС",
"САРАН",
"ЧЕБЕН",
"УСТАВ",
"СИМЕЗ",
"ОЧЕРК",
"ӘРМӘН",
"СПИРТ",
"АРЕСТ",
"КЕНӘЗ",
"ИБЛИС",
"БОМБА",
"СМЕНА",
"ДӘВЕР",
"КАДАК",
"ГӘҮДӘ",
"ХАЛӘТ",
"БОЛАН",
"ҖИЗНИ",
"ТОРБА",
"СӨЛГЕ",
"УПКЫН",
"АЙГЫР",
"ИФТАР",
"КУХНЯ",
"ТӨШЕМ",
"ТИРАЖ",
"ТУРГА",
"НОРМА",
"ТИПИК",
"ҖӘҺӘТ",
"РЕЖИМ",
"ПАУЗА",
"ОҖМАХ",
"КӘЛӘШ",
"ХӘЛФӘ",
"ЧЫРАЙ",
"ӨЛФӘТ",
"ӨЕРМӘ",
"ИНСАФ",
"ГАУГА",
"ЧЫБЫК",
"ТӨНЕН",
"ҖИЛЛЕ",
"КАШКА",
"МИЛӘШ",
"ЧЕГӘН",
"БОЗЫК",
"АДӘМИ",
"УЙМАК",
"РӘСҮЛ",
"ТАМГА",
"ЙОЗАК",
"ХӘВЕФ",
"СЪЕЗД",
"ЯКТАШ",
"ДОРФА",
"ИХАТА",
"КАДЕР",
"КОЧАК",
"ӘЙТЕМ",
"ХАКИМ",
"ЗӘВЫК",
"ЧҮКЕЧ",
"КОЛГА",
"ХАЛАТ",
"СУМКА",
"САВЫТ",
"КҮЛӘМ",
"РӘҖӘП",
"ИСПАН",
"ТУМАС",
"ТЫНЧУ",
"ШӘҺИТ",
"ДИВАР",
"СУЛЫК",
"ШАНЛЫ",
"СЕҢЕЛ",
"ПИЛОТ",
"МАТӘМ",
"НАХАК",
"КОЛЫН",
"ГӨМБӘ",
"КЕРПЕ",
"ГАРАЖ",
"БАНКА",
"ГАҖИЗ",
"ҮТКЕР",
"ВАТЫК",
"ЭТЛЕК",
"ДАИРӘ",
"КЫСАН",
"ИҢГӘН",
"РАДИЙ",
"ХӘРӘМ",
"ОЧКЫН",
"ВӘЗИР",
"БАШАК",
"САКАЛ",
"ЛАМПА",
"ПОЛЯК",
"КҮСӘК",
"ТӨЙМӘ",
"РЕЗИН",
"СЕМЬЯ",
"ӨЗГЕЧ",
"ТӘҢРЕ",
"ИДЕАЛ",
"ДИВАН",
"ЗАЛОГ",
"КӘСЕП",
"ТҮТӘЙ",
"ЧАЛГЫ",
"ФЕТНӘ",
"УТРАУ",
"КҮКӘЙ",
"ТӘМУГ",
"КАБАК",
"КАПЫЛ",
"ЧЫДАМ",
"КАЗЫК",
"СКЛАД",
"СИЛОС",
"АРКАН",
"СӘНӘК",
"ҖИЛЕМ",
"ОЛПАТ",
"КУБОК",
"ТОРНА",
"ТАРИФ",
"ШАШКА",
"КАЗАК",
"ФАРЫЗ",
"КӨЧЕК",
"БИЗӘК",
"БОЛАК",
"ЙОТЫМ",
"ТАҖИК",
"РОБОТ",
"КҮРКӘ",
"ЫШТАН",
"МӨГЕЗ",
"ЮАНЫЧ",
"МАССА",
"ЯУГИР",
"СӘЙЯР",
"СӨРӘН",
"ҖИТЕН",
"НӘЗЕК",
"КАТАР",
"КӨНЧЕ",
"ОПЕКА",
"ЙОНЛЫ",
"ДӘРЬЯ",
"ЧАТЫР",
"ФЛОРА",
"ЧАЛМА",
"ИНСАН",
"ЗЕНИТ",
"ЗОЛЫМ",
"ЭЛИТА",
"ИНКЯР",
"САЛМА",
"СОҢРА",
"МАҺИР",
"ИРМӘК",
"РАЗЫЙ",
"ЧИТӘН",
"ЛОГИК",
"КЕЛӘТ",
"ИНДУС",
"ВЗВОД",
"УЙГЫР",
"МӘКЕР",
"БОҖРА",
"АРТЫМ",
"МУЖИК",
"СУДНО",
"ӘҮЛИЯ",
"НОТЫК",
"КҮЧӘР",
"МӨҺЕР",
"АТЛАС",
"ФАКЕЛ",
"ХОЛЫК",
"КАДЕТ",
"КАДИМ",
"РИФМА",
"ПЫЛАУ",
"ЯКАЛЫ",
"ФУРАЖ",
"КОМИК",
"ЧАЛЫШ",
"ҮТӘЛИ",
"ҮРЧЕМ",
"ШУЛПА",
"ТУГАЙ",
"ДЗЮДО",
"ЧЕРЕМ",
"МЕЛЛА",
"СУСЫЛ",
"СЫНЫК",
"СОЛЫХ",
"ОБКОМ",
"МЕТОД",
"ӨЯНКЕ",
"АРЕНА",
"ӘФЬЮН",
"ПАЛАС",
"ЭЛМӘК",
"ЧАКМА",
"КУБЫЗ",
"ВАННА",
"КАТЫК",
"БАЛАН",
"ЛИМОН",
"ПЫЧКЫ",
"ЗВЕНО",
"ТҮШӘМ",
"ХӘРАМ",
"ПАРАД",
"ЛАПАС",
"САЙРА",
"КӨЗӘН",
"ХОЗУР",
"КАССА",
"ПАРТА",
"АЗГЫН",
"ХӘТФӘ",
"БӘБКӘ",
"ЗИҺЕН",
"КВОТА",
"САЛЮТ",
"ДОНОР",
"ТӘХЕТ",
"ТАРАК",
"БОТАК",
"ЮКЛЫК",
"АЙНЫК",
"МУКШЫ",
"ПАКЕТ",
"КАМЫШ",
"БӘРӘН",
"КНЯЗЬ",
"КЯФЕР",
"АМБАР",
"ЛАТЫШ",
"ЛИАНА",
"ВАЛЬС",
"ЭКРАН",
"ҖИҢСӘ",
"ҖИЛКӘ",
"ЫСПАЙ",
"НИЗАМ",
"ВАХТА",
"ХАСТА",
"СЫРМА",
"МАҖАР",
"СИХЕР",
"ЕРТЫК",
"КАМЫТ",
"БЕЛЕН",
"СӨҢГЕ",
"СХЕМА",
"ЕЛГЫР",
"НАСОС",
"ВИРУС",
"САГЫЗ",
"НӘФЕС",
"ЗАТОН",
"ЭТИКА",
"МЭРИЯ",
"ЧӘЧӘН",
"ҮКСЕЗ",
"ШАКШЫ",
"КҮМӘЧ",
"КЫРАУ",
"КӨНГЕ",
"ЕРМАК",
"КИБӘН",
"ЙОМЫК",
"КИНАЯ",
"ЯНЧЫК",
"ШАХТА",
"ХӘДИС",
"БАХЫР",
"КАНАУ",
"ОЛИМП",
"ПОЖАР",
"КАВЕМ",
"ЧИТЕК",
"КИТЕК",
"КЫСЫК",
"КОТКЫ",
"ЧЕБЕШ",
"ЧУЧКА",
"БОРЫЧ",
"КӘМИТ",
"ТИРМӘ",
"КУЗОВ",
"ВАРИС",
"КӘТТӘ",
"ШӨБҺӘ",
"ЙӨЗМӘ",
"МАНЕЖ",
"РӘВЕШ",
"АХШАМ",
"СҮРӘН",
"АЛАША",
"ТҮЗЕМ",
"САМБО",
"ИХСАН",
"БИРЕМ",
"ТОКЫМ",
"ТУТЫЙ",
"НАЛОГ",
"СМЕТА",
"КАЛАЧ",
"БӨКРЕ",
"САЛАТ",
"ҖЫЛАН",
"УЗМЫШ",
"ФИКРИ",
"БЫЙЫЛ",
"АГЕНТ",
"ПЕЛӘШ",
"ПРИНЦ",
"РУЧКА",
"КАКЧА",
"КҮЧЕМ",
"ВӘХШИ",
"АРШЫН",
"ОТЫРЫ",
"СИРАТ",
"АБОРТ",
"АЗГАН",
"КАРЫН",
"БӨҖӘК",
"ГАЯРЬ",
"ДЕГЕТ",
"КАЙЧЫ",
"ШАДРА",
"ТИРӘК",
"ЛЕММА",
"ТОТЫШ",
"ПРИЮТ",
"ШАЙБА",
"ХИРЫС",
"ЧҮМЕЧ",
"ТАМАН",
"ТЫРМА",
"ПАСХА",
"ДЕВИЗ",
"МОТИВ",
"ХИССИ",
"СӨЗӘК",
"ӘРЛӘН",
"ЛАЗЕР",
"ВЗНОС",
"РӘНҖҮ",
"ҺӘВӘС",
"ШАКАЛ",
"КОПИЯ",
"ТАГАН",
"ОТЕЛЬ",
"САВАП",
"КАГАН",
"ТАБУТ",
"ГАКЫЛ",
"ЗАЧЕТ",
"ШАТУН",
"ТУДЫК",
"СКВЕР",
"БАВЫР",
"УГЛАН",
"НӨСХӘ",
"КИСӘҮ",
"ЛАКЛЫ",
"ТУФЛИ",
"ТҮШӘК",
"ХӨРМӘ",
"БЕТЛЕ",
"ИНТИМ",
"ХАҖӘТ",
"ОРЧЫК",
"ЯЛСЫЗ",
"ЯТЬМӘ",
"МӘСӘЛ",
"МИНУС",
"СЫРГА",
"АБАГА",
"ХИЛАФ",
"СТЕНД",
"ЛАЧЫН",
"СӘҖДӘ",
"КОРЫМ",
"ПАРЧА",
"ЙӨГӘН",
"КАБЫК",
"БҮСЕР",
"УТРАК",
"ОПИСЬ",
"БОРМА",
"БҮКӘН",
"САЛОН",
"СУЗЫК",
"ҖИЛӘС",
"ЕЛТЫР",
"СӨЛЕК",
"БУКЧА",
"РЮМКА",
"БЕЛӘК",
"МАРЛЯ",
"БАГАЖ",
"ТАЛИЯ",
"БОГАУ",
"ЭҢГЕР",
"ФӘҺЕМ",
"МАРКА",
"ӘВӘРӘ",
"БӨРКҮ",
"ТОЛЫМ",
"ЧУЛАК",
"ТАНЦЫ",
"УКЛАУ",
"АКБУР",
"ШӨПШӘ",
"ИКОНА",
"НӘСЕР",
"ТӨКСЕ",
"КӘТҮК",
"ШПИОН",
"ТАНАУ",
"МОРҖА",
"ЧАБАР",
"БИТУМ",
"СМОТР",
"КЫСЛА",
"ФИНИШ",
"СӨРМӘ",
"КУЧЕР",
"БУРСА",
"БУДДА",
"БУГАЗ",
"КАЛАК",
"ПУЛАТ",
"ЧЕЛЛӘ",
"ТОТМА",
"КИОСК",
"ЧАПАН",
"ТӘРТӘ",
"ТОЗАК",
"ПАФОС",
"ДЕКАН",
"АСТМА",
"ФИДАИ",
"САЛПЫ",
"МАФИЯ",
"СИХӘТ",
"КӨЛЧӘ",
"ТИТУЛ",
"ТАРАН",
"ПОХОД",
"ВЕНГР",
"АНТИК",
"АВАНС",
"ШӘКЛИ",
"КОФТА",
"САСЫК",
"ЧЕРКИ",
"ДАМБА",
"РОЯЛЬ",
"ШЫМЧЫ",
"ШАМАН",
"СТРОЙ",
"ТӨШМӘ",
"СИДЕК",
"ПАЛАЧ",
"ТАБЫР",
"КАМӘР",
"НӘЛӘТ",
"ТУБАЛ",
"КӘРЛӘ",
"РАББИ",
"БАРЖА",
"ФАСАД",
"ЗЕБРА",
"ГУДОК",
"ИМГӘК",
"ЧОЛАН",
"ЯЛТЫР",
"ҺИҖРИ",
"МИФИК",
"ҖИЛЕН",
"ТОЛЫП",
"КАРУН",
"ТАЛОН",
"АКЦИЗ",
"КӨРПӘ",
"ЯСТЫК",
"ТӘГАМ",
"ЧИЧӘН",
"КАЧЫР",
"ГОЗЕР",
"МАДАМ",
"ГРУША",
"АЛИҺӘ",
"КОЙКА",
"ОПТИК",
"ЧАГАН",
"КАЧАК",
"ЗАЛИМ",
"ТҮТӘЛ",
"ЧУМАР",
"НӘЗЕР",
"МАҢКА",
"МӘЗИН",
"ИГАНӘ",
"ИНГУШ",
"КӘЛТӘ",
"АКБҮЗ",
"КЕФИР",
"СӘРВИ",
"КАБЫМ",
"ИМАНА",
"СИТСЫ",
"СӨАЛЬ",
"МИРАЖ",
"ХАКАС",
"ФАНЕР",
"КОМАЧ",
"ТАРАФ",
"ПАРОМ",
"БУФЕТ",
"КИРЗА",
"БЫРГЫ",
"КЕПКА",
"ЯТИМӘ",
"КАТАЙ",
"ЧУКЫР",
"КАЛҖА",
"ШОССЕ",
"КӨПШӘ",
"СӨРЕМ",
"КҮБЕК",
"ЧЫГЫР",
"ИМЧӘК",
"ТАЛАК",
"ТРЕСТ",
"БУКЕТ",
"ШӘКЕЛ",
"БУРЛЫ",
"ПОВАР",
"ҖӘТМӘ",
"ЧАТАН",
"ЧАТКЫ",
"БОРЧА",
"СУГЫМ",
"МОКЫТ",
"ГАФИЛ",
"ХОРДА",
"СЫЗЫМ",
"ҖИСЕМ",
"ӘЙРӘН",
"КАЙРЫ",
"ГОШЕР",
"ЧӘШКЕ",
"ТИТАН",
"КӨФЕР",
"БАЗЫК",
"ТӘТӘЙ",
"ФОКУС",
"МАТЧА",
"ГРАНД",
"КАРАТ",
"ЛИМИТ",
"АТАКА",
"ҮЛЧӘМ",
"СУСАР",
"ЭСТОН",
"МАЗУТ",
"БАНАН",
"МӘКАМ",
"ПАПКА",
"ҖИЛӘН",
"АЛЛЕЯ",
"МАЙНА",
"ЧӘНЧӘ",
"НАГАН",
"НӘҖЕС",
"ӨЙДӘШ",
"СЕНАТ",
"ИПСЕЗ",
"ХОББИ",
"МАСКА",
"АТЛЕТ",
"БАҖАЙ",
"КУТЫР",
"БӘБӘЙ",
"КЫЛЫЙ",
"КЕЧЕК",
"ССУДА",
"КОНТР",
"ҖӘДИТ",
"СУНАР",
"КЫРЫЙ",
"БУДКА",
"АФИША",
"АЛПАР",
"ДӘҺРИ",
"УЙГУР",
"КАКМА",
"ИСЛАХ",
"ЮШКЫН",
"ХӘЛВӘ",
"ӨММӘТ",
"КАВЫН",
"ФӘТВА",
"ҖЕНЕС",
"ЧАБАК",
"ПРОБА",
"МАНАС",
"КОТЫП",
"ТҮШКӘ",
"БОКАЛ",
"БУРЯТ",
"ӘРӘМӘ",
"КҮЛЕМ",
"КЛОУН",
"ЛАЗЕМ",
"АКУЛА",
"ТАВИС",
"РУМЫН",
"КОРМА",
"ДЕБЮТ",
"ТОРОС",
"СЕКТА",
"ЧИНАР",
"ОРДЕР",
"ОЛТАН",
"ЧАГЫР",
"БИРНӘ",
"ШПРИЦ",
"КИЛӘП",
"КУЛЬТ",
"ТИЗӘК",
"БИРӘН",
"КӘҮСӘ",
"ГАРУЗ",
"ТОМАТ",
"ШИФЕР",
"ЕВРЕЙ",
"СУБАЙ",
"ГОРЕФ",
"ЛӘГӘН",
"ЧЫПТА",
"ДЫМСУ",
"НАРЯД",
"ТОТЕМ",
"ПАЧКА",
"КУЛОН",
"РАЛЛИ",
"КАТЕР",
"САРУТ",
"АБЗАЦ",
"ПИРАТ",
"САТИН",
"САУНА",
"КАТОК",
"АЛЬФА",
"ЧУЛПЫ",
"ОДЕЯЛ",
"ЧЕЛӘН",
"БИКӘЧ",
"ШТУРМ",
"ЧҮПРӘ",
"ЛЫЧМА",
"НАЗЫМ",
"КАМЫЛ",
"АБХАЗ",
"ҖОФАР",
"ЧАБЫР",
"АКСЫМ",
"ГАЗОН",
"ДОМНА",
"БАНДА",
"ӘСБАП",
"САЖИН",
"ШАЛАШ",
"ИННЕК",
"СӘРДӘ",
"КАЛЫМ",
"ФИДИЯ",
"ЯҺҮДИ",
"САКАУ",
"ВИСКИ",
"ТЕЗИС",
"КӘРӘЗ",
"СЫЗМА",
"КИБӘК",
"СУКНО",
"ИШКӘК",
"ПОЧЫК",
"РЕГБИ",
"ҖАНЫЙ",
"ТУТЫК",
"ТИЯСЕ",
"МАЙКА",
"КАЮЛЫ",
"ДОЗОР",
"КӘМАЛ",
"ХӘТЕМ",
"НАНЫЙ",
"ДИСБЕ",
"ЫРГАК",
"ХИМАЯ",
"ЧӘНТИ",
"КАЮТА",
"СЕАНС",
"ГАЛОШ",
"КӨТЕК",
"АЗЛАП",
"РАЦИЯ",
"КАСКА",
"ЖУЛИК",
"ЙОНЧУ",
"БРОНЬ",
"ХӨТБӘ",
"ЧӘҮКӘ",
"КАРЕЛ",
"КАМКА",
"КҮРЕК",
"ХӨСЕТ",
"БИРГЕ",
"КӨЛСУ",
"ҖӘБЕР",
"ГОЛЬФ",
"ТОМАУ",
"ЧЕЛЕМ",
"ГАЗӘЛ",
"ПИЧӘТ",
"ТАКСА",
"МЕДИК",
"КӘПӘЧ",
"ШТОРМ",
"ЭПОХА",
"ЧӘРКӘ",
"ЯРГЫЧ",
"УЙНАК",
"КУЙЧЫ",
"ЯСМИН",
"ЕШЛЫК",
"ВӘЛҮК",
"ЗИРЕК",
"БЕРИШ",
"ҖАҺИЛ",
"ФРАЗА",
"ГАЗИК",
"ТЕНОР",
"АСАБА",
"ВӘЗЕН",
"ЭСКИЗ",
"ПРЕСС",
"КҮБӘҮ",
"БҮРТӘ",
"ТАКЫЯ",
"КРУИЗ",
"ОКЛАД",
"МОНАХ",
"КЫРКУ",
"ШАССИ",
"ТУГРА",
"СӘМӘН",
"БЕРЕТ",
"КИҢЧӘ",
"СӨННИ",
"ХУТОР",
"ИДИОТ",
"АЛИБИ",
"ӨРФИЯ",
"АЛБАН",
"БАЗИС",
"ДИЕТА",
"ФИКУС",
"ВКЛАД",
"ИТЛӘЧ",
"ЯКОРЬ",
"БИРЖА",
"КИСМӘ",
"АБРЕК",
"ЮРТАК",
"КУБИК",
"ГАЗЫЙ",
"НӘКЫШ",
"ГӨМАН",
"ПУШКА",
"ПЛАТА",
"ТИЛЧӘ",
"УКРОП",
"КАЛИЙ",
"СЛАЙД",
"ЛӘХЕТ",
"РОЛИК",
"БОРАУ",
"МОРЯК",
"КӘЙЛӘ",
"ЧОРМА",
"НӘШИР",
"ДОХОД",
"СЕРКӘ",
"КОМОД",
"ХӘЛИФ",
"НЕНЕЦ",
"ЧҮБЕК",
"КВАНТ",
"КАЛЕБ",
"КИШТӘ",
"КУКИШ",
"ТӘПӘН",
"УПТЫМ",
"ТАНГО",
"ПОЛЯР",
"ӨРЛЕК",
"БЕКОН",
"ЭРЕМӘ",
"ТӨРБӘ",
"РЕЛЬС",
"ТРУБА",
"ФЛЯГА",
"ШРИФТ",
"ТАЛИР",
"ТОТЫМ",
"ТАҢГЫ",
"ЯНТЫК",
"КАСТА",
"НИСБИ",
"ГӨЛӘП",
"РАДАР",
"КӘФЕН",
"ТҮМӘР",
"МЕТАН",
"ҖИҢГӘ",
"ОЕТКЫ",
"НАХАЛ",
"КАКАО",
"ИЗАФӘ",
"ФРАНК",
"СЛИВА",
"ЛОЯЛЬ",
"МАГИК",
"МАЗАР",
"ҺИНДИ",
"ФЕНОЛ",
"ХАМАН",
"ПОГОН",
"САМАН",
"ШӨРЕП",
"ГРУНТ",
"БӨРМӘ",
"БАЛАК",
"УТЛЫК",
"РИГАЯ",
"ШӘЛЛЕ",
"КӨШЕЛ",
"ЭМАЛЬ",
"ҖИСМИ",
"ШЫТЫМ",
"КРОСС",
"ТЕЗЕМ",
"ТЫШЧА",
"ӘФСЕН",
"ҖЫЙМА",
"МИСЛЕ",
"СПУРТ",
"БИДОН",
"ТИРАН",
"ЛЕНТА",
"ИНҖИЛ",
"РЭКЕТ",
"БОХАР",
"ОТПОР",
"ПОЛИС",
"ШӘРЕХ",
"ИНҖИР",
"АЛЧАК",
"ПИРОГ",
"БАРОН",
"КҮРӘН",
"ЮНКЕР",
"АФЕРА",
"КЫСМА",
"ГУМУС",
"ГРАФА",
"ХӘСИС",
"ЗАМОК",
"ЯСМЫК",
"АКТҮШ",
"САЙГА",
"КЕСӘЛ",
"САЗАН",
"АЛАЧА",
"ПРУСС",
"ГАЙКА",
"ШИРМА",
"ЧАЛЫМ",
"ГАРЕП",
"СОБОР",
"БУЛЛА",
"ЛИТЕР",
"КИСЕК",
"ТУПСА",
"КАБИЛ",
"АСТРА",
"ҖИРСҮ",
"РЕДИС",
"ОТБОЙ",
"СФЕРА",
"ЮКСЫЛ",
"СӘМУМ",
"ЛОГОС",
"СОНЕТ",
"СӘХРӘ",
"КАБИХ",
"ПАННО",
"ЖИЛЕТ",
"ЛӘҮКӘ",
"БОРЫС",
"ТУПИК",
"ЯРЧЫК",
"РОТОР",
"КӨРСИ",
"БҮЛЕМ",
"ЛОТОС",
"ДЕВОН",
"ЗӘРРӘ",
"БЕТЧӘ",
"КУПАЙ",
"БЕТЕМ",
"БЛАНК",
"КОРЫК",
"ЧЫТЫК",
"МӘЭЮС",
"ПУДРА",
"КӘБӘМ",
"РИМЛЫ",
"ЕГЕРЬ",
"ШТАМП",
"ФАХИШ",
"ҖАНАШ",
"ГӨСЛӘ",
"БРОНЯ",
"КАМИН",
"СУМСА",
"ОФСЕТ",
"ФЮРЕР",
"МӨРИТ",
"ЧУКЧА",
"МАНТЫ",
"ЫШТЫР",
"МАГИЯ",
"ШАЙКА",
"ПУЛЬС",
"АЗАРТ",
"СӨЗМӘ",
"ТУЙРА",
"ХӨҖҮМ",
"АСЛЫК",
"КУЗНА",
"МАЛЯР",
"ТӨРӘН",
"КОБРА",
"ӘРТИЛ",
"ФАСЫЛ",
"ВЫШКА",
"ТРАНС",
"БАГОР",
"СӘДӘП",
"КЕРӘН",
"ПЕГАС",
"ТОТКА",
"ТУТЫЯ",
"ШТРИХ",
"СОТЫЙ",
"ҖАРИЯ",
"ЖОКЕЙ",
"РУБКА",
"САПЕР",
"МАКЕТ",
"ТАЧКА",
"МӘДӘТ",
"ГАММӘ",
"МӘЛӘК",
"ТАНЕЦ",
"ДУБЛЬ",
"ТРИКО",
"КӨДРӘ",
"ЧОЛЫК",
"КУШУЧ",
"СЕТКА",
"КҮБӘК",
"СЫТЫК",
"РУПОР",
"ӘРВАХ",
"РАУНД",
"ВИЛЛА",
"ЭВЕНК",
"НАКАЗ",
"СЮИТА",
"МОПЕД",
"ТУРНЕ",
"АҢКАУ",
"ӨЯНӘК",
"ҖЫЛЫМ",
"РУНИК",
"КЫРМА",
"КОЛАН",
"ДУЭЛЬ",
"КАЛТА",
"СИПМӘ",
"ӨСЛҮП",
"ТИБЕН",
"ҖӨББӘ",
"ОЧКЫР",
"ЧУМАК",
"УНТЕР",
"БӘПКӘ",
"АЛГЫР",
"ЧЫТЫР",
"СЕҢЕР",
"ГИДАЙ",
"КОЙТЫ",
"КИЗӘК",
"ПАРИК",
"ЛАВКА",
"ТУБЫК",
"ДЕБЕТ",
"КОМАР",
"ЧЕЛЕК",
"ГӨРЗИ",
"ОТКЫР",
"ШИГЫЙ",
"ӘДРӘС",
"ХАЗАР",
"ШПАГА",
"БӘВЕЛ",
"ДОСЬЕ",
"ҺӘЙӘТ",
"ЛӘКАБ",
"АКШАР",
"КОТЫЙ",
"САВЫР",
"КУНЫШ",
"ҖЕБЕК",
"ЖИРАФ",
"ХӨҖРӘ",
"ВАРЯГ",
"СОСКЫ",
"АОРТА",
"АНДЫЗ",
"ТУГЫМ",
"ЗЕЛПЕ",
"КҮЧӘН",
"ПУЛЬТ",
"ХИТОН",
"КАРСТ",
"СИНОД",
"КӘМӘР",
"ЖЕТОН",
"ДЫМЫК",
"ТЫШАУ",
"РАМКА",
"АБУНӘ",
"МЕНЛА",
"ВӘКЫФ",
"РУЛОН",
"ЯГУАР",
"ШНАПС",
"ЛӘҮХӘ",
"СЕЛТЕ",
"ПАКУС",
"ТРЮМО",
"НАЗИР",
"ШЛАНГ",
"ЯНБАШ",
"ПУГАЧ",
"ШУМЕР",
"ШӨШЛЕ",
"ОАЗИС",
"ПОКЕР",
"ШПУНТ",
"ШОРТЫ",
"АЗИАТ",
"УРГЫЛ",
"БӘДӘН",
"ФӘХЕШ",
"ЭЛГЕЧ",
"ДЕБИТ",
"ЯБАГА",
"ФУЖЕР",
"БИАНА",
"СЫТКЫ",
"МЫЖЫК",
"УРГЫЧ",
"БУЛКА",
"ЛАРЕК",
"ӨЧАЯК",
"БӘЛӘК",
"АРАТА",
"ШАБАШ",
"ПАСТА",
"МАЖОР",
"КҮРЕМ",
"ДАГАН",
"КАПОТ",
"ЧЫҢЛЫ",
"СЕМИТ",
"СУСЫН",
"ПОЛЮС",
"МИНОР",
"ФӘЛӘК",
"КОЛУН",
"ШПАНА",
"ЧАБЫН",
"КУПОН",
"УРАМА",
"СОНОР",
"ЙОТМА",
"ЧӘЧБИ",
"ТЫРЫС",
"УМРАУ",
"ЛАКАН",
"ҖЕФЕТ",
"КОЖАН",
"ӘРГӘН",
"ФАЗАН",
"ЖАКЕТ",
"МАЧТА",
"КОКОС",
"БУФЕР",
"ӘНЧЕК",
"ТОНИК",
"НЕТТО",
"КОНУС",
"ВӨҖҮД",
"КӘВЕШ",
"ДЕКОР",
"АКМАЙ",
"ШКАЛА",
"ӨРКӘК",
"ФИШКА",
"КӘБАБ",
"КУШЫК",
"БЛУЗА",
"ЧАБАН",
"МӘҺӘР",
"ХИТАП",
"ОЯДАШ",
"ЕЛДАМ",
"БӘБӘК",
"ФАСОН",
"ТӘРӘТ",
"БОҖЫР",
"МАНСИ",
"ПЕШКА",
"СКЕТЧ",
"РАДОН",
"КАЙРА",
"НИЧЬЯ",
"ТУКАН",
"РАМПА",
"КРЕОЛ",
"КУРПЫ",
"КЫРПУ",
"НОГЫТ",
"ЙОЛЫМ",
"ТЕКМӘ",
"ЛАПТА",
"МУМИЯ",
"ИЯРМӘ",
"ОНИКС",
"НУКТА",
"ХӘСТӘ",
"ЯПКЫЧ",
"ТӨРЕМ",
"ГОНҖӘ",
"ГЕРЛЕ",
"ЗЕФИР",
"АЗМАН",
"АЛЕУТ",
"АМПЕР",
"БОРДО",
"КҮГӘН",
"СБРУЙ",
"БАЛКА",
"ТӘПӘЧ",
"БӘКӘЛ",
"ШАРИК",
"ҖИКӘН",
"КУБАН",
"ТАБОР",
"ФРЕНЧ",
"ХАМИТ",
"МИЗАН",
"ГАММА",
"КӘНДИ",
"БИСЕР",
"ҮЗБАШ",
"АПАРА",
"ТӨМСӘ",
"ЙОМАК",
"ЗАЕЗД",
"АНГАР",
"ТӨПСӘ",
"КОЛЕЯ",
"ГАВАЙ",
"ХИТИН",
"КУПОЛ",
"КОМЫК",
"ТЫРАЙ",
"ОМЕГА",
"ЛӘВӘШ",
"АВРАЛ",
"АТЛАМ",
"ЯЛПАК",
"ЭСТЕТ",
"ЧАРЫК",
"ӘТРАФ",
"АЛЫЧА",
"ФРЕОН",
"МӘМӘЙ",
"КИСКӘ",
"ТУРУН",
"НАНАЙ",
"ПРИМА",
"ТИСКИ",
"АЙМАК",
"ТАРМА",
"ЛӘТЧӘ",
"ЧАДРА",
"САҢАК",
"ТАБЛО",
"КАСЫК",
"ШИФОН",
"КЕЛЬТ",
"ЗӘНКИ",
"СҮСӘН",
"ГУСАР",
"МӘТЛЕ",
"ПИКАП",
"МАНГО",
"РЕДУТ",
"ХИППИ",
"ЧУМАН",
"ИФАДӘ",
"МОРЗЕ",
"КУТАН",
"ОБРЕЗ",
"ЧАТАК",
"ЗЕКЕР",
"ОСЕТР",
"КОКОН",
"АВЕНЮ",
"ТОПАЗ",
"МИСКИ",
"КАЙМА",
"СҮНЕК",
"ФАЯНС",
"БИЗОН",
"ДУКАТ",
"ЗАБОЙ",
"КУЛИЧ",
"ЕСАУЛ",
"ХУНТА",
"БОГЫЛ",
"ЛАЧМА",
"КАНОЭ",
"ФАУНА",
"РАЙФО",
"МАРАЛ",
"ГАБИД",
"ХӘШӘП",
"ГОБОЙ",
"БҮКСӘ",
"ИРКӘК",
"ТЫМЫК",
"НИШАН",
"ЯЛБЫР",
"ВУАЛЬ",
"ВИРАЖ",
"ДОГМА",
"ШТИЛЬ",
"ТРИЕР",
"ЯТКЫН",
"ДҮДӘК",
"МУЛЯЖ",
"ТАЛЫМ",
"УЙДЫК",
"КУРАЧ",
"ПЛИТА",
"ЧЕХОЛ",
"РАНЕЦ",
"ОПИУМ",
"ФУГАС",
"СВЕЧА",
"ГОТИК",
"ӘРМӘК",
"ТӨРПӘ",
"АСКЕТ",
"ЧӘКӘН",
"РЕНТА",
"РЕБУС",
"АСТАР",
"ЛАДЬЯ",
"ӨЛКӘР",
"ФИЛТӘ",
"ГЕТТО",
"ТРАКТ",
"ЛИКЕР",
"АРЕАЛ",
"БЕЛӘҮ",
"МИНЕР",
"ӘХВӘЛ",
"ФЛАНГ",
"ГАРЕШ",
"ДАМКА",
"БИНАР",
"КЫРПЫ",
"ЦИНГА",
"ЧАЧАК",
"ВИОЛА",
"ТАЛКЫ",
"ИЛҺАН",
"ОНЧЫЛ",
"СОСЛА",
"ТҮГЕМ",
"ЛАНКА",
"КОЛБА",
"ЛӘПЕК",
"ЛАЙКА",
"СЕМГА",
"ЛИМФА",
"ГЕЛИЙ",
"ТРАУР",
"ЛАКЕЙ",
"ТИПКЕ",
"АНОНС",
"АПОРТ",
"ПЕНАЛ",
"КИМИЯ",
"ЭФИОП",
"КУЗАК",
"РЫЧАГ",
"ФИНКА",
"КУНЫЧ",
"ЗАРЯД",
"СИГМА",
"КУЗЛА",
"РУПИЯ",
"НЕРПА",
"БИАТА",
"ХАНЖА",
"АЛСАН",
"КӨМӘН",
"НИРГӘ",
"ЭСКӘК",
"ИЛДӘШ",
"ИНӘКӘ",
"ЕВНУХ",
"КАМЕЯ",
"ПИЖОН",
"МАНИЯ",
"ТУМБА",
"ГУАШЬ",
"КЛИШЕ",
"ХӨЛЛӘ",
"САНӘМ",
"ЛАЙЛА",
"ҖЕЛЕК",
"ХИҖРИ",
"ЦИНИК",
"ГАРБИ",
"ЕРЕСЬ",
"КӨБӘК",
"ДЕНДИ",
"БАГЕТ",
"ВАФЛЯ",
"СЕЛЕН",
"ТЕМБР",
"ВОЛЬТ",
"ФЛОКС",
"ДӘЛИЯ",
"ТОҖЫМ",
"ЧЫРАК",
"ШПРОТ",
"ӨРПӘК",
"ГАНКА",
"ФАЛЬШ",
"БРАСС",
"ЛОКМА",
"КӘБЕН",
"КРЕДО",
"ТӘРӘЧ",
"ВАРАН",
"КАЙНЕ",
"БОНЗА",
"КУГЫН",
"БУХТА",
"МЕЛИС",
"КЫСЫМ",
"УХВАТ",
"ТАХТА",
"ТУРАК",
"МАХАУ",
"МЕТИЛ",
"МУТОН",
"ИВАСИ",
"ВЕЛЮР",
"ШАМБЫ",
"УТИЛЬ",
"ЛИПИД",
"ШӘҺСИ",
"МИМИК",
"ХОРЕЙ",
"РАХИТ",
"ВЕРФЬ",
"ЭЛЛИН",
"СУЗАН",
"ШӘҢГӘ",
"ЫРГЫМ",
"СИЗЕМ",
"КУРЫС",
"ЧИРӘП",
"КОТИК",
"ЛИНЗА",
"ТАЛКУ",
"МАНТО",
"ТОНУС",
"ТАКМА",
"ХОЛОП",
"ЮНИОР",
"РУМБА",
"ТӨРЧӘ",
"КАРГЫ",
"ТИКМӘ",
"НАЛЕТ",
"УЕНТЫ",
"ФЛИРТ",
"ТАЛЬК",
"КӘЛШӘ",
"ПЕСТӘ",
"ПИТОН",
"КАВЫМ",
"КҮНӘК",
"БИРКА",
"ТУРКА",
"КЫТАТ",
"КВАРЦ",
"ЯРПАЧ",
"ПОТАШ",
"ТАҢСУ",
"МӘКӘЙ",
"ПОМПА",
"ПЕШЕК",
"МАКАО",
"БАЙКА",
"НАРТА",
"ВОБЛА",
"КӘСЕР",
"ҺӘРБИ",
"КУШАК",
"ПАНДА",
"КОПЕР",
"СМЕРД",
"ЧӘЙЧЕ",
"БАТОН",
"МОККО",
"КАЛОШ",
"ЛЫКМА",
"КИСЕМ",
"РАНЧО",
"МИЧӘҮ",
"АМОРФ",
"ЛАБАЗ",
"ИНЕРТ",
"МУШКА",
"МОХЕР",
"ӨЙТҮР",
"ОКТАН",
"ДИНГО",
"КҮКШӘ",
"АРКАУ",
"ТАНЫК",
"ИҖАБИ",
"КЛЕРК",
"МИДИЯ",
"САЗАУ",
"ФИЛЕР",
"КОРЕЙ",
"КОРЯК",
"БАРИЙ",
"ПИЛОН",
"ШИКМӘ",
"ҖЕПСӘ",
"ГАМАК",
"ИГРЕК",
"КЕТӘК",
"ТОРЫК",
"КИЗИЛ",
"ФЫТЫР",
"КАТОД",
"ЛЕЙКА",
"ФЕТИШ",
"БУРКА",
"ХАНША",
"ТҮЛӘМ",
"БРИДЖ",
"РУЛЕТ",
"ГУЛЯШ",
"КАТЕТ",
"ИМБИР",
"ЧАЛКА",
"ТӨПКЕ",
"ӨРГЕЧ",
"МОДУС",
"ШУЛЕР",
"АНЧАР",
"ВОТЯК",
"БОЖАН",
"КЫЙАС",
"ХАРЧО",
"ЛОТОК",
"ЛЮПИН",
"ХӘЯТИ",
"БУБЕН",
"ЭГИДА",
"ҖИГЕМ",
"АФГАН",
"КЕРӘЧ",
"ИҢБАШ",
"ЛАДАН",
"ТАПИР",
"ЗУРАТ",
"ФАГОТ",
"ГӨБЛӘ",
"СОРГО",
"УЕЛМА",
"ПЛАТО",
"КАҺАН",
"БАТУН",
"ИЗГЕЧ",
"КАМСА",
"КИСТА",
"АРГОН",
"БУЙЧА",
"ҖӘЗБӘ",
"ВАКСА",
"ФАТУМ",
"ФУРОР",
"ТҮРГЕ",
"КОМСУ",
"ФАКИР",
"ФЕРЗЬ",
"ЗАМША",
"САРЖА",
"СПРУТ",
"БИЛӘМ",
"ЛЮТНЯ",
"РОНДО",
"ОЛЕИН",
"КАРЬЯ",
"БӘДӘЛ",
"КАТРӘ",
"КОСЫК",
"МУФТА",
"КУЙАН",
"ӘТРӘК",
"ДЕМОС",
"БИАГА",
"АТКЫЙ",
"НИМФА",
"КУШЫМ",
"ГИДРА",
"МУЛАТ",
"ЗАПАЛ",
"МӨШКӘ",
"ДЕБАТ",
"КЕЧУА",
"ШЫЛАН",
"РЕДАН",
"НӨКТӘ",
"ТАБУН",
"ШӘҺЕС",
"ХӘБӘШ",
"КУРИЯ",
"МАСОН",
"ТИЯРЕ",
"СИРОП",
"АМЕБА",
"ДӘХЕЛ",
"ИМГЕЧ",
"УЧЛАМ",
"МАЗЕР",
"ПУТАЛ",
"КҮЛЧӘ",
"КЛИНЧ",
"КАНВА",
"ХОЛУЙ",
"КУНЫК",
"СЕҢЛЕ",
"РИТОР",
"ӨРКӘЧ",
"ЧАЙАН",
"МАЧИН",
"КАШАК",
"ЙОНЧА",
"КУЛЧА",
"КАКЧЫ",
"БУТИЛ",
"ЭТЛӘЙ",
"ТИШЕМ",
"БРОНХ",
"КАННА",
"БАДЬЯ",
"ДЮШЕС",
"КОНКА",
"КЫТЫК",
"КИРКА",
"ЭПИКА",
"ЧУКОТ",
"ТУБУС",
"БӘЙӘН",
"ӨФЕЛЕ",
"БАВАР",
"ФОТОН",
"СЫЗГЫ",
"ТӘРӘШ",
"КОБЗА",
"ЛЕМУР",
"УКБАШ",
"ШХУНА",
"РЕЙКА",
"ШӨЛДИ",
"ИШКЕЧ",
"ҮРГЕН",
"КЫРАЧ",
"РИНИТ",
"КВАРК",
"ТӨРПЕ",
"ҮРӘЧӘ",
"КАЙАН",
"БАТАТ",
"ОМЛЕТ",
"ДРЕЛЬ",
"ШТАММ",
"МУРДА",
"ЯРГАК",
"ШЕЛЬФ",
"ВОЛАН",
"КИСАП",
"ЧЫЖЫМ",
"КАВЫЗ",
"ОРЕОЛ",
"ЙӨРЕМ",
"ТВИСТ",
"ТУНЕЦ",
"КАВЫК",
"ВИЗИР",
"ЛӘҢКӘ",
"ЭРЗАЦ",
"БИБЕК",
"ФРЕЗА",
"БҮЛБЕ",
"ТАФТА",
"ӨЙГЕЧ",
"БАНТУ",
"СӨЙӘК",
"ОКТЕТ",
"БАЙАН",
"ЦЕЗИЙ",
"ХӘЙӘТ",
"МИРРА",
"ҺӘТФӘ",
"КАШНЕ",
"ЧАРЫС",
"ҮЗЛЕК",
"ШТРЕК",
"ЦАНГА",
"ДРАГА",
"ВИЛКА",
"КҮГӘЛ",
"АББАТ",
"ШЫПАН",
"БАКРА",
"РИКША",
"ЧЕРВИ",
"КАЕРЫ",
"САКЛЯ",
"ОБРОК",
"ШЕРИФ",
"ДАЛИЯ",
"КЕНАФ",
"АЦТЕК",
"ИПРИТ",
"КЕШӘН",
"АМПИР",
"СЛЮДА",
"ӘГЪВА",
"НӘКӘС",
"ДӘФГА",
"КАРЫЗ",
"ХИНИН",
"УНЦИЯ",
"ЛАВРА",
"АВТОЛ",
"МАГМА",
"ӘҺЛАК",
"ЯСИГЪ",
"КАЗУС",
"АЯКЧУ",
"БАДӘН",
"ТУРАМ",
"СӘМИХ",
"КРОНА",
"ШАБЕР",
"КӨПКӘ",
"КЕГЛИ",
"КУЛСА",
"ҖӘНАП",
"ШПИЛЬ",
"ТАЛЕР",
"ТРИОД",
"ФИОРД",
"МОҺИТ",
"КӘМӘЛ",
"БОЙНЯ",
"ТРОМБ",
"НӘСӘП",
"ЛИМАН",
"СҮТЕК",
"БИВАК",
"НӘСЕХ",
"ТУЛАК",
"КОЗАУ",
"АПЕКС",
"КОЙАШ",
"ҺИМАЯ",
"ХОНСА",
"ТИПАЖ",
"ШТАМБ",
"ТӘПКЕ",
"ПЕННИ",
"ЛАТУК",
"КУБЫК",
"ЛАССО",
"ЛАГУН",
"АНКЕР",
"НОНЕТ",
"ПЫШЫН",
"ЧАПКЫ",
"ИШИАС",
"ӘКӘЛӘ",
"ПОЗЕР",
"МЕЗОН",
"ЛАФЕТ",
"ШАМОТ",
"ОМУЛЬ",
"БАКЕН",
"КАНСУ",
"ГУЦУЛ",
"КУРОК",
"ТИМОЛ",
"ПОЛИП",
"ФАЦЕТ",
"КОЛЕР",
"ҺӘЛӘЛ",
"ВӘҺШИ",
"СУШКИ",
"КӨРТИ",
"ХАМСА",
"ШЕШЕК",
"ХУРАЛ",
"ТЕКИН",
"ЭНЕКӘ",
"БЕКАС",
"КЫЛЫК",
"ПЕТИТ",
"ФИДЕР",
"ГАРЫС",
"МҮЛЧӘ",
"КОЖУХ",
"РАНЕТ",
"ФРАХТ",
];
const WORD_TRANSLATES_LIST = [];
const INDEX = getRandomIndex(WORD_LIST.length);
const WORD_OF_THE_DAY = WORD_LIST[INDEX];
const WORD_OF_THE_DAY_TRANSLATE = WORD_TRANSLATES_LIST[INDEX];
const FAV_WORDS = [];
console.log(WORD_OF_THE_DAY);

// In case we want to make the game difficult or easier
const MAX_NUMBER_OF_ATTEMPTS = 6;

const history = [];
let currentWord = '';

let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.close__popup');
let statsButton = document.querySelector('.stats');
let addButton = document.querySelector('.button__add');
let rightWord = document.querySelector('.right-word');
let loader = document.querySelector('.loader');
let container = document.querySelector('.container');
let statistics = document.querySelectorAll('div.statistic_element')

let wordText = document.getElementById('word');

// Get everything setup and the game responding to user actions.
const init = () => {

  const KEYBOARD_KEYS = ['ЙӨУКЕНГШЩӘЗҺҮ', 'ФЫВАПРОЛДЖҢХЦЭ', 'ЯЧСМИТҖБЮЬЪ'];

  // Grab the game board and the keyboard
  const gameBoard = document.querySelector('#board');
  const keyboard = document.querySelector('#keyboard');

  // Generate the game board and the keyboard
  generateBoard(gameBoard);
  generateBoard(keyboard, 3, 14, KEYBOARD_KEYS, true);

  // Setup event listeners
  document.addEventListener('keydown', event => onKeyDown(event.key));
  gameBoard.addEventListener('animationend', event => event.target.setAttribute('data-animation', 'idle'));
  keyboard.addEventListener('click', onKeyboardButtonClick);
}

const showMessage = (message) => {
  const toast = document.createElement('li');

  toast.textContent = message;
  toast.className = 'toast';

  document.querySelector('.toaster ul').prepend(toast);
  //Здесь изменяется время отображения сообщения

  setTimeout(() => toast.classList.add('fade'), 2000);

  toast.addEventListener('transitionend', (event) => event.target.remove());
}

const checkGuess = (guess, word) => {
  const guessLetters = guess.split('');
  const wordLetters = word.split('');
  const remainingWordLetters = [];
  const remainingGuessLetters = [];

  // Find the current active row
  const currentRow = document.querySelector(`#board ul[data-row='${history.length}']`);

  // First, let's get all the columns in the current row set up with some base values
  currentRow.querySelectorAll('li').forEach((element, index) => {
    element.setAttribute('data-status', 'none');
    element.setAttribute('data-animation', 'flip');

    // Each letter should start its animation twice as late as the letter before it
    element.style.animationDelay = `${index * 300}ms`;
    element.style.transitionDelay = `${index * 400}ms`;
  });

  // Second iteration finds all the valid letters
  // and creates a list of leftover letters
  wordLetters.forEach((letter, index) => {
    if (guessLetters[index] === letter) {
      currentRow.querySelector(`li:nth-child(${index + 1})`)
        .setAttribute('data-status', 'valid');

      document
        .querySelector(`[data-key='${letter}']`)
        .setAttribute('data-status', 'valid');

        remainingWordLetters.push(false);
        remainingGuessLetters.push(false);
    } else {
      remainingWordLetters.push(letter);
      remainingGuessLetters.push(guessLetters[index]);
    }
  });

  // Third iteration finds all the misplaced letters
  remainingWordLetters.forEach(letter => {
    // Skip this iteration, since the letter
    // was already found in the previous phase
    if (letter === false) return;

    if (remainingGuessLetters.indexOf(letter) !== -1) {
      const column = currentRow
        .querySelector(`li:nth-child(${remainingGuessLetters.indexOf(letter) + 1})`);

      column.setAttribute('data-status', 'invalid');

      const keyboardKey = document.querySelector(`[data-key='${letter}']`);

      if (keyboardKey.getAttribute('data-status') !== 'valid') {
        keyboardKey.setAttribute('data-status', 'invalid');
      }
    }
  });

  // Fourth iteration finds all the letters on the keyboard
  // that are absent from the word.
  guessLetters.forEach(letter => {
    const keyboardKey = document.querySelector(`[data-key='${letter}']`);

    if (keyboardKey.getAttribute('data-status') === 'empty') {
      keyboardKey.setAttribute('data-status', 'none');
    }
  });

  if (guess === word){
    showMessage('Котлыйм, дөрес!');
    updateValues(true);
    translate(word);
    return;
  }


  history.push(currentWord);

  if (history.length === MAX_NUMBER_OF_ATTEMPTS && guess!==word){
    showMessage('Кызганыч, сез сүз тапмадыгыз.');
    updateValues(false);
    translate(word)
    return;
  }
  currentWord = '';
}

const onKeyboardButtonClick = (event) => {
  if (event.target.nodeName === 'LI') {
    onKeyDown(event.target.getAttribute('data-key'));
  }
}
const updateValues = (win) =>{
    let streak = localStorage.getItem('streak_count');
    let max_streak = localStorage.getItem('max_streak');
    if(+streak > +max_streak){
        max_streak = streak;
        localStorage.setItem('max_streak', max_streak);
    }
    if(win){
        const victories = localStorage.getItem('victories_count');
        localStorage.setItem('victories_count', +victories + 1);
        localStorage.setItem('streak_count', +streak + 1);
    }else{
        const loses = localStorage.getItem('loses_count');
        localStorage.setItem('loses_count', +loses + 1);
        localStorage.setItem('streak_count', '0');
    }
}
const onKeyDown = (key) => {
  // Don't allow more than 6 attempts to guess the word
  if (history.length >= MAX_NUMBER_OF_ATTEMPTS) return;

  // Find the current active row
  const currentRow = document.querySelector(`#board ul[data-row='${history.length}']`);

  // Find the next empty column in the current active row
  let targetColumn = currentRow.querySelector('[data-status="empty"]');

  if (key === BACKSPACE_KEY) {
    if (targetColumn === null) {
      // Get the last column of the current active row
      // as we are on the last column
      targetColumn = currentRow.querySelector('li:last-child');
    } else {
      // Find the previous column, otherwise get the first column
      // so we always have a column to operate on
      targetColumn = targetColumn.previousElementSibling ?? targetColumn;
    }

    // Clear the column of its content
    targetColumn.textContent = '';
    targetColumn.setAttribute('data-status', 'empty');

    // Remove the last letter from the currentWord
    currentWord = currentWord.slice(0, -1);

    return;
  }

  if (key === ENTER_KEY) {
    if (currentWord.length < 5) {
      showMessage('Сез сүзне тулысынча кертмәдегез!');
      return;
    }

    if (currentWord.length === 5 && WORD_LIST.includes(currentWord)) {
      checkGuess(currentWord, WORD_OF_THE_DAY);
    }
    else {
      currentRow.setAttribute('data-animation', 'invalid');
      showMessage('Шундый сүз бармыни?');
    }
    return;
  }


  // We have reached the 5-letter limit for the guess word
  if (currentWord.length >= 5) return;

  const upperCaseLetter = key.toUpperCase();

  // Add the letter to the next empty column
  // if the provided letter is between A-Z
  if (/^[А-Ә]$/.test(upperCaseLetter) || /^[А-Я]$/.test(upperCaseLetter) || /^[А-Ө]$/.test(upperCaseLetter)) {
    currentWord += upperCaseLetter;

    targetColumn.textContent = upperCaseLetter;
    targetColumn.setAttribute('data-status', 'filled');
    targetColumn.setAttribute('data-animation', 'pop');
  }
}
const translate = (word) => {
    loader.classList.remove('inactive');
    popupBg.classList.add('active');
    popup.classList.add('active');
    container.classList.add('inactive');
    let url = `https://translate.tatar/translate?lang=${parseInt(1)}&text=${encodeURI(word)}`
    let translation = null;
    const parser = new DOMParser();
    fetch(url)
        .then(response => response.text())
        .then(function (data) {
            translation = parser.parseFromString(data, 'text/xml');
            try{
                translation = translation.getElementsByTagName('translation')[0].childNodes[0].data;
                renderStats(word, translation);
            }catch (e){
                translate_other(word)
            }
        });
}
const translate_other = (word) => {
    loader.classList.remove('inactive');
    popupBg.classList.add('active');
    popup.classList.add('active');
    container.classList.add('inactive');
    let url = `https://translate.tatar/translate?lang=${parseInt(1)}&text=${encodeURI(word)}`
    fetch(url)
        .then(response => response.text())
        .then(function(data){
            renderStats(word, data);
        })
}
const renderStats = (word, translation_of_the_word) => {
    loader.classList.add('inactive');
    container.classList.remove('inactive');
    wordText.innerHTML = word + ' - ' + translation_of_the_word;
    statistics[0].querySelector('.statistic_value').innerHTML = +localStorage.getItem('victories_count');
    if(+localStorage.getItem('loses_count') === 0){
        statistics[1].querySelector('.statistic_value').innerHTML = '0%';
    }else{
        statistics[1].querySelector('.statistic_value').innerHTML = +localStorage.getItem('victories_count') / +localStorage.getItem('loses_count') * 100 + '%';
    }
    statistics[2].querySelector('.statistic_value').innerHTML = +localStorage.getItem('streak_count');
    statistics[3].querySelector('.statistic_value').innerHTML = +localStorage.getItem('max_streak');

}
const generateBoard = (board, rows = 6, columns = 5, keys = [], keyboard = false) => {
  for (let row = 0; row < rows; row++) {
    const elmRow = document.createElement('ul');

    elmRow.setAttribute('data-row', row);

    for (let column = 0; column < columns; column++) {
      const elmColumn = document.createElement('li');
      elmColumn.setAttribute('data-status', 'empty');
      elmColumn.setAttribute('data-animation', 'idle');

      if (keyboard && keys.length > 0) {
        const key = keys[row].charAt(column);
        elmColumn.textContent = key;
        elmColumn.setAttribute('data-key', key);
      }

      // Skip adding any keyboard keys to the UI that are empty
      if (keyboard && elmColumn.textContent === '') continue;

      elmRow.appendChild(elmColumn);
    }

    board.appendChild(elmRow);
  }

  if (keyboard) {
    const enterKey = document.createElement('li');
    enterKey.setAttribute('data-key', ENTER_KEY);
    enterKey.textContent = ENTER_KEY;
    board.lastChild.prepend(enterKey);

    const backspaceKey = document.createElement('li');
    backspaceKey.setAttribute('data-key', BACKSPACE_KEY);
    backspaceKey.textContent = BACKSPACE_KEY;
    board.lastChild.append(backspaceKey);
  }
}

// Call the initialization function when the DOM is loaded to get
// everything setup and the game responding to user actions.
document.addEventListener('DOMContentLoaded', init);
closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    setTimeout(function () {
        rightWord.classList.remove('inactive');
        addButton.classList.remove('inactive');
    }, 500)

});
document.addEventListener('click', (e) => {
    if(e.target === popupBg){
        popupBg.classList.remove('active');
        popup.classList.remove('active');
        setTimeout(function() {
            rightWord.classList.remove('inactive');
            addButton.classList.remove('inactive');
        }, 500)
    }
});
statsButton.addEventListener('click', ()=>{
    loader.classList.add('inactive')
    addButton.classList.add('inactive')
    rightWord.classList.add('inactive');
    popupBg.classList.add('active');
    popup.classList.add('active');
})
addButton.addEventListener('click', () => {

});
// Based on the max length of the Array. Return a random items index
// within the Array's length.
function getRandomIndex (maxLength) {
  return Math.floor(Math.random() * Math.floor(maxLength));
}