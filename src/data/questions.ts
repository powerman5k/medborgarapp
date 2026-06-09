export type QuestionDifficulty = "easy" | "medium" | "hard";

export type QuestionType = "fact" | "scenario" | "truefalse";

export type Topic = {
  id: string;
  title: string;
  description: string;
  icon: "map" | "landmark" | "vote" | "heart" | "globe";
};

export type Question = {
  id: number;
  topicId: string;
  topic: string;
  difficulty: QuestionDifficulty;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export const topics: Topic[] = [
  {
    id: "landet-sverige",
    title: "Landet Sverige",
    description: "Geografi, natur, befolkning och viktiga resurser.",
    icon: "map"
  },
  {
    id: "demokrati-styre",
    title: "Demokrati och styre",
    description: "Folkstyre, riksdag, regering, regioner och kommuner.",
    icon: "landmark"
  },
  {
    id: "val-rattigheter",
    title: "Val och rättigheter",
    description: "Rösträtt, grundlagar, friheter och medier.",
    icon: "vote"
  },
  {
    id: "valfard-historia",
    title: "Välfärd och historia",
    description: "Skatter, arbetsliv, välfärd och Sveriges moderna historia.",
    icon: "heart"
  },
  {
    id: "omvarld-religion",
    title: "Omvärlden och religion",
    description: "EU, Nato, internationellt samarbete, religion och traditioner.",
    icon: "globe"
  },
  {
    id: "lag-och-ratt",
    title: "Lag och rätt",
    description: "Frågor om lag och rätt.",
    icon: "landmark"
  },
  {
    id: "demokrati",
    title: "Demokrati",
    description: "Frågor om demokrati.",
    icon: "landmark"
  },
  {
    id: "manskliga-rattigheter",
    title: "Mänskliga rättigheter",
    description: "Frågor om mänskliga rättigheter.",
    icon: "vote"
  },
  {
    id: "medier",
    title: "Medier",
    description: "Frågor om medier.",
    icon: "globe"
  },
  {
    id: "arbetsmarknad",
    title: "Arbetsmarknad",
    description: "Frågor om arbetsmarknad.",
    icon: "heart"
  },
  {
    id: "religion",
    title: "Religion",
    description: "Frågor om religion.",
    icon: "globe"
  },
  {
    id: "eu",
    title: "EU",
    description: "Frågor om eu.",
    icon: "globe"
  },
  {
    id: "barns-rattigheter",
    title: "Barns rättigheter",
    description: "Frågor om barns rättigheter.",
    icon: "vote"
  },
  {
    id: "minoriteter",
    title: "Minoriteter",
    description: "Frågor om minoriteter.",
    icon: "vote"
  },
  {
    id: "historia",
    title: "Historia",
    description: "Frågor om historia.",
    icon: "heart"
  },
  {
    id: "fn",
    title: "FN",
    description: "Frågor om fn.",
    icon: "globe"
  },
  {
    id: "forsvar",
    title: "Försvar",
    description: "Frågor om försvar.",
    icon: "globe"
  },
  {
    id: "traditioner",
    title: "Traditioner",
    description: "Frågor om traditioner.",
    icon: "globe"
  },
  {
    id: "geografi",
    title: "Geografi",
    description: "Frågor om geografi.",
    icon: "map"
  },
  {
    id: "miljo",
    title: "Miljö",
    description: "Frågor om miljö.",
    icon: "globe"
  }
];

export const questions: Question[] = [
  {
    id: 1,
    topicId: "landet-sverige",
    topic: "Landet Sverige",
    difficulty: "easy",
    type: "fact",
    question: "Vilket är det största landet i Norden?",
    options: [
      "Danmark",
      "Finland",
      "Sverige",
      "Norge"
    ],
    correctAnswer: 2,
    explanation: "Sverige är det största landet i Norden."
  },
  {
    id: 2,
    topicId: "landet-sverige",
    topic: "Landet Sverige",
    difficulty: "easy",
    type: "fact",
    question: "Vad heter Sveriges två största öar?",
    options: [
      "Öland och Gotland",
      "Gotland och Ven",
      "Öland och Orust",
      "Ven och Orust"
    ],
    correctAnswer: 0,
    explanation: "Sveriges två största öar är Gotland och Öland."
  },
  {
    id: 3,
    topicId: "landet-sverige",
    topic: "Landet Sverige",
    difficulty: "easy",
    type: "fact",
    question: "Vilket hav ligger vid Sveriges östra kust?",
    options: [
      "Nordsjön",
      "Östersjön",
      "Skagerrak",
      "Kattegatt"
    ],
    correctAnswer: 1,
    explanation: "Östersjön ligger vid Sveriges östra kust."
  },
  {
    id: 4,
    topicId: "landet-sverige",
    topic: "Landet Sverige",
    difficulty: "medium",
    type: "fact",
    question: "Vad bidrar till Sveriges relativt milda klimat?",
    options: [
      "Alperna",
      "Golfströmmen",
      "Östersjön",
      "Polcirkeln"
    ],
    correctAnswer: 1,
    explanation: "Golfströmmen och Nordatlantiska strömmen värmer upp klimatet."
  },
  {
    id: 5,
    topicId: "landet-sverige",
    topic: "Landet Sverige",
    difficulty: "easy",
    type: "fact",
    question: "Hur många regioner finns det i Sverige?",
    options: [
      "18",
      "20",
      "21",
      "25"
    ],
    correctAnswer: 2,
    explanation: "Sverige är indelat i 21 regioner."
  },
  {
    id: 6,
    topicId: "landet-sverige",
    topic: "Landet Sverige",
    difficulty: "easy",
    type: "fact",
    question: "Hur många kommuner finns det i Sverige?",
    options: [
      "250",
      "275",
      "290",
      "310"
    ],
    correctAnswer: 2,
    explanation: "Sverige har 290 kommuner."
  },
  {
    id: 7,
    topicId: "landet-sverige",
    topic: "Landet Sverige",
    difficulty: "medium",
    type: "fact",
    question: "Vilken är regionernas viktigaste uppgift?",
    options: [
      "Polis",
      "Skola",
      "Sjukvård",
      "Domstolar"
    ],
    correctAnswer: 2,
    explanation: "Regionerna ansvarar främst för hälso- och sjukvård."
  },
  {
    id: 8,
    topicId: "demokrati-styre",
    topic: "Demokrati och styre",
    difficulty: "easy",
    type: "fact",
    question: "Hur många ledamöter finns i riksdagen?",
    options: [
      "299",
      "349",
      "399",
      "449"
    ],
    correctAnswer: 1,
    explanation: "Riksdagen består av 349 ledamöter."
  },
  {
    id: 9,
    topicId: "demokrati-styre",
    topic: "Demokrati och styre",
    difficulty: "easy",
    type: "fact",
    question: "Hur ofta hålls val till riksdagen?",
    options: [
      "Vartannat år",
      "Var tredje år",
      "Vart fjärde år",
      "Var femte år"
    ],
    correctAnswer: 2,
    explanation: "Riksdagsval hålls vart fjärde år."
  },
  {
    id: 10,
    topicId: "demokrati-styre",
    topic: "Demokrati och styre",
    difficulty: "easy",
    type: "fact",
    question: "Vem väljer statsminister?",
    options: [
      "Kungen",
      "Folket direkt",
      "Riksdagen",
      "Domstolen"
    ],
    correctAnswer: 2,
    explanation: "Riksdagen väljer statsminister."
  },
  {
    id: 11,
    topicId: "demokrati-styre",
    topic: "Demokrati och styre",
    difficulty: "medium",
    type: "fact",
    question: "Vad kallas de partier som inte stödjer regeringen?",
    options: [
      "Majoriteten",
      "Oppositionen",
      "Regionerna",
      "Myndigheterna"
    ],
    correctAnswer: 1,
    explanation: "Partier som inte stödjer regeringen kallas opposition."
  },
  {
    id: 12,
    topicId: "demokrati-styre",
    topic: "Demokrati och styre",
    difficulty: "medium",
    type: "scenario",
    question: "Vilken myndighet ansvarar för skatter?",
    options: [
      "Migrationsverket",
      "Polisen",
      "Skatteverket",
      "JO"
    ],
    correctAnswer: 2,
    explanation: "Skatteverket ansvarar för skattefrågor."
  },
  {
    id: 13,
    topicId: "demokrati-styre",
    topic: "Demokrati och styre",
    difficulty: "medium",
    type: "scenario",
    question: "Vilken myndighet beslutar om föräldrapenning?",
    options: [
      "Försäkringskassan",
      "Arbetsförmedlingen",
      "Kommunen",
      "Polisen"
    ],
    correctAnswer: 0,
    explanation: "Försäkringskassan handlägger föräldrapenning."
  },
  {
    id: 14,
    topicId: "demokrati-styre",
    topic: "Demokrati och styre",
    difficulty: "medium",
    type: "fact",
    question: "Vilken statsskick har Sverige?",
    options: [
      "Republik",
      "Konstitutionell monarki",
      "Diktatur",
      "Federation"
    ],
    correctAnswer: 1,
    explanation: "Sverige är en konstitutionell monarki."
  },
  {
    id: 15,
    topicId: "demokrati-styre",
    topic: "Demokrati och styre",
    difficulty: "easy",
    type: "truefalse",
    question: "Har kungen politisk makt i Sverige?",
    options: [
      "Sant",
      "Falskt"
    ],
    correctAnswer: 1,
    explanation: "Kungen har ingen politisk makt."
  },
  {
    id: 16,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "easy",
    type: "fact",
    question: "Vilken ålder krävs för att rösta i svenska val?",
    options: [
      "16 år",
      "17 år",
      "18 år",
      "20 år"
    ],
    correctAnswer: 2,
    explanation: "Man måste ha fyllt 18 år."
  },
  {
    id: 17,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "easy",
    type: "fact",
    question: "Hur ofta hålls val till Europaparlamentet?",
    options: [
      "Vart tredje år",
      "Vart fjärde år",
      "Vart femte år",
      "Vart sjätte år"
    ],
    correctAnswer: 2,
    explanation: "EU-val hålls vart femte år."
  },
  {
    id: 18,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "medium",
    type: "truefalse",
    question: "Är svenska folkomröstningar bindande?",
    options: [
      "Sant",
      "Falskt"
    ],
    correctAnswer: 1,
    explanation: "Folkomröstningar är rådgivande."
  },
  {
    id: 19,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "hard",
    type: "fact",
    question: "Vilket år röstade Sverige om euron?",
    options: [
      "1995",
      "2000",
      "2003",
      "2010"
    ],
    correctAnswer: 2,
    explanation: "Folkomröstningen om euron hölls 2003."
  },
  {
    id: 20,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "medium",
    type: "fact",
    question: "Vad innebär hemliga val?",
    options: [
      "Ingen får veta hur du röstar",
      "Resultatet publiceras inte",
      "Riksdagen röstar i hemlighet",
      "Valdagen är hemlig"
    ],
    correctAnswer: 0,
    explanation: "Ingen annan ska kunna veta hur du röstar."
  },
  {
    id: 21,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "easy",
    type: "fact",
    question: "Hur många grundlagar har Sverige?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: 2,
    explanation: "Sverige har fyra grundlagar."
  },
  {
    id: 22,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "hard",
    type: "fact",
    question: "Vilken grundlag skyddar tryckta medier?",
    options: [
      "Regeringsformen",
      "Successionsordningen",
      "Tryckfrihetsförordningen",
      "Kommunallagen"
    ],
    correctAnswer: 2,
    explanation: "Tryckfrihetsförordningen skyddar tryckta medier."
  },
  {
    id: 23,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "hard",
    type: "fact",
    question: "Vilken grundlag skyddar yttrandefriheten i radio och tv?",
    options: [
      "Yttrandefrihetsgrundlagen",
      "Successionsordningen",
      "Brottsbalken",
      "Kommunallagen"
    ],
    correctAnswer: 0,
    explanation: "Yttrandefrihetsgrundlagen skyddar yttrandefriheten."
  },
  {
    id: 24,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "medium",
    type: "fact",
    question: "Vad innebär rättssäkerhet?",
    options: [
      "Alla behandlas lika inför lagen",
      "Alla får samma lön",
      "Alla röstar",
      "Alla får bidrag"
    ],
    correctAnswer: 0,
    explanation: "Rättssäkerhet innebär bland annat likhet inför lagen."
  },
  {
    id: 25,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "medium",
    type: "scenario",
    question: "Vem avgör om ett åtal ska väckas?",
    options: [
      "Domaren",
      "Polisen",
      "Åklagaren",
      "Kungen"
    ],
    correctAnswer: 2,
    explanation: "Åklagaren beslutar om åtal."
  },
  {
    id: 26,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "medium",
    type: "fact",
    question: "Vad kallas den person som anklagas för ett brott?",
    options: [
      "Vittne",
      "Domare",
      "Åtalad",
      "Jurist"
    ],
    correctAnswer: 2,
    explanation: "Den som anklagas kallas åtalad."
  },
  {
    id: 27,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "hard",
    type: "fact",
    question: "Från vilken ålder är man straffmyndig i Sverige?",
    options: [
      "13 år",
      "14 år",
      "15 år",
      "18 år"
    ],
    correctAnswer: 2,
    explanation: "Straffmyndighetsåldern är 15 år."
  },
  {
    id: 28,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "hard",
    type: "fact",
    question: "Vad är belastningsregistret?",
    options: [
      "Register över bostäder",
      "Register över vissa brottsdomar",
      "Register över skatter",
      "Register över pass"
    ],
    correctAnswer: 1,
    explanation: "Vissa brottsdomar registreras där."
  },
  {
    id: 29,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "medium",
    type: "fact",
    question: "Vad skyddar fria medier i Sverige?",
    options: [
      "Demokratin",
      "Kungahuset",
      "Kommunerna",
      "Skatteverket"
    ],
    correctAnswer: 0,
    explanation: "Fria medier är viktiga för demokratin."
  },
  {
    id: 30,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "hard",
    type: "fact",
    question: "Vad innebär offentlighetsprincipen?",
    options: [
      "Alla får rösta",
      "Myndigheters handlingar är ofta offentliga",
      "Alla tidningar är gratis",
      "TV är statlig"
    ],
    correctAnswer: 1,
    explanation: "Allmänna handlingar är i regel offentliga."
  },
  {
    id: 31,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "hard",
    type: "fact",
    question: "Vad innebär källkritik?",
    options: [
      "Att lita på allt",
      "Att kontrollera information och källor",
      "Att bara läsa tidningar",
      "Att undvika internet"
    ],
    correctAnswer: 1,
    explanation: "Man ska granska och kontrollera källor."
  },
  {
    id: 32,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "easy",
    type: "fact",
    question: "Vilken organisation antog FN:s allmänna förklaring om mänskliga rättigheter?",
    options: [
      "EU",
      "FN",
      "Nato",
      "Europarådet"
    ],
    correctAnswer: 1,
    explanation: "FN arbetar för mänskliga rättigheter."
  },
  {
    id: 33,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "easy",
    type: "fact",
    question: "Vad förbjuder diskrimineringslagen?",
    options: [
      "Val",
      "Demonstrationer",
      "Diskriminering",
      "Föreningar"
    ],
    correctAnswer: 2,
    explanation: "Diskriminering är förbjuden enligt lag."
  },
  {
    id: 34,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "easy",
    type: "fact",
    question: "Vad innebär jämställdhet?",
    options: [
      "Kvinnor och män ska ha samma rättigheter",
      "Alla ska ha samma jobb",
      "Alla ska ha samma lön",
      "Alla ska bo lika"
    ],
    correctAnswer: 0,
    explanation: "Jämställdhet handlar om lika rättigheter och möjligheter."
  },
  {
    id: 35,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "Vad kräver samtyckeslagen?",
    options: [
      "Vigsel",
      "Skriftligt avtal",
      "Frivilligt deltagande",
      "Tillstånd från myndighet"
    ],
    correctAnswer: 2,
    explanation: "Sex ska vara frivilligt."
  },
  {
    id: 36,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "easy",
    type: "fact",
    question: "När blev barnkonventionen svensk lag?",
    options: [
      "2010",
      "2015",
      "2020",
      "2024"
    ],
    correctAnswer: 2,
    explanation: "Barnkonventionen blev lag 2020."
  },
  {
    id: 37,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "easy",
    type: "fact",
    question: "Vilket land var först med att förbjuda barnaga?",
    options: [
      "Norge",
      "Danmark",
      "Sverige",
      "Finland"
    ],
    correctAnswer: 2,
    explanation: "Sverige förbjöd barnaga 1979."
  },
  {
    id: 38,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "easy",
    type: "fact",
    question: "Vilka är Sveriges urfolk?",
    options: [
      "Romer",
      "Samer",
      "Tornedalingar",
      "Sverigefinnar"
    ],
    correctAnswer: 1,
    explanation: "Samerna är erkända som urfolk."
  },
  {
    id: 39,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "easy",
    type: "fact",
    question: "Hur många nationella minoriteter finns i Sverige?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 2,
    explanation: "Det finns fem nationella minoriteter."
  },
  {
    id: 40,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "easy",
    type: "truefalse",
    question: "Är samkönade äktenskap tillåtna i Sverige?",
    options: [
      "Sant",
      "Falskt"
    ],
    correctAnswer: 0,
    explanation: "Det är tillåtet att gifta sig med någon av samma kön."
  },
  {
    id: 41,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "medium",
    type: "fact",
    question: "Vilken organisation representerar många arbetstagare?",
    options: [
      "LO",
      "EU",
      "FN",
      "JO"
    ],
    correctAnswer: 0,
    explanation: "LO är en facklig centralorganisation."
  },
  {
    id: 42,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "Vad är ett kollektivavtal?",
    options: [
      "En skatt",
      "Ett avtal om löner och villkor",
      "En lag",
      "Ett bidrag"
    ],
    correctAnswer: 1,
    explanation: "Kollektivavtal reglerar arbetsvillkor."
  },
  {
    id: 43,
    topicId: "val-rattigheter",
    topic: "Val och rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "Vem bestämmer normalt löner i Sverige?",
    options: [
      "Riksdagen",
      "Kungen",
      "Parterna på arbetsmarknaden",
      "EU"
    ],
    correctAnswer: 2,
    explanation: "Löner förhandlas mellan arbetsgivare och fack."
  },
  {
    id: 44,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "easy",
    type: "fact",
    question: "Vad finansierar skatterna bland annat?",
    options: [
      "Privata företag",
      "Välfärden",
      "Partierna",
      "EU"
    ],
    correctAnswer: 1,
    explanation: "Skatter finansierar välfärd som skola och sjukvård."
  },
  {
    id: 45,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "När fick kvinnor rösta i riksdagsval för första gången?",
    options: [
      "1909",
      "1918",
      "1921",
      "1945"
    ],
    correctAnswer: 2,
    explanation: "Första valet med kvinnlig rösträtt hölls 1921."
  },
  {
    id: 46,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vilken folkrörelse arbetade för kvinnors rösträtt?",
    options: [
      "Kvinnorörelsen",
      "Nykterhetsrörelsen",
      "Idrottsrörelsen",
      "Miljörörelsen"
    ],
    correctAnswer: 0,
    explanation: "Kvinnorörelsen drev frågan om rösträtt."
  },
  {
    id: 47,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "easy",
    type: "fact",
    question: "Vilket år blev Sverige medlem i EU?",
    options: [
      "1989",
      "1995",
      "2000",
      "2004"
    ],
    correctAnswer: 1,
    explanation: "Sverige blev medlem i EU 1995."
  },
  {
    id: 48,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vad kallas EU:s fria rörlighet för människor, varor, tjänster och kapital?",
    options: [
      "Fyra friheter",
      "Schengen",
      "Eurozonen",
      "Ministerrådet"
    ],
    correctAnswer: 0,
    explanation: "Det kallas de fyra friheterna."
  },
  {
    id: 49,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "easy",
    type: "fact",
    question: "Vilken organisation arbetar för fred och säkerhet i världen?",
    options: [
      "Nato",
      "FN",
      "EU",
      "LO"
    ],
    correctAnswer: 1,
    explanation: "FN arbetar för fred och säkerhet."
  },
  {
    id: 50,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "easy",
    type: "fact",
    question: "Vad innebär religionsfrihet?",
    options: [
      "Man måste tillhöra en religion",
      "Man får välja religion eller avstå",
      "Endast kristendom är tillåten",
      "Staten bestämmer religion"
    ],
    correctAnswer: 1,
    explanation: "Alla har rätt att välja religion eller ingen religion alls."
  },
  {
    id: 51,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vad kännetecknade Sveriges så kallade rekordår?",
    options: [
      "Hög arbetslöshet",
      "Stark ekonomisk tillväxt",
      "Många krig",
      "Minskad välfärd"
    ],
    correctAnswer: 1,
    explanation: "Rekordåren präglades av stark ekonomisk tillväxt och ökad levnadsstandard."
  },
  {
    id: 52,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "hard",
    type: "fact",
    question: "Under vilka år brukar rekordåren räknas?",
    options: [
      "1945–1976",
      "1914–1945",
      "1976–2000",
      "1995–2020"
    ],
    correctAnswer: 0,
    explanation: "Rekordåren syftar på perioden efter andra världskriget fram till 1970-talet."
  },
  {
    id: 53,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vilken reform gav arbetare rätt till lediga lördagar?",
    options: [
      "Föräldrapenning",
      "40-timmars arbetsvecka",
      "Barnbidrag",
      "Studiebidrag"
    ],
    correctAnswer: 1,
    explanation: "40-timmars arbetsveckan innebar bland annat lediga lördagar."
  },
  {
    id: 54,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "hard",
    type: "fact",
    question: "Hur lång betald semester fick arbetstagare under rekordåren?",
    options: [
      "Två veckor",
      "Tre veckor",
      "Fyra veckor",
      "Fem veckor"
    ],
    correctAnswer: 3,
    explanation: "Fem veckors betald semester blev en viktig del av välfärdsutbyggnaden."
  },
  {
    id: 55,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vad är barnbidrag ett exempel på?",
    options: [
      "Privat försäkring",
      "Socialt skyddsnät",
      "Skatt",
      "Lån"
    ],
    correctAnswer: 1,
    explanation: "Barnbidrag är en del av det svenska välfärdssystemet."
  },
  {
    id: 56,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "hard",
    type: "fact",
    question: "Vilken sektor arbetar cirka 70 procent av Sveriges arbetstagare inom?",
    options: [
      "Offentlig sektor",
      "Privat sektor",
      "Ideell sektor",
      "EU-sektorn"
    ],
    correctAnswer: 1,
    explanation: "Omkring 70 procent arbetar inom den privata sektorn."
  },
  {
    id: 57,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "hard",
    type: "fact",
    question: "Vilken organisation representerar privata arbetsgivare?",
    options: [
      "LO",
      "SACO",
      "Svenskt Näringsliv",
      "TCO"
    ],
    correctAnswer: 2,
    explanation: "Svenskt Näringsliv är den största arbetsgivarorganisationen för privata företag."
  },
  {
    id: 58,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vad är syftet med fackförbund?",
    options: [
      "Att driva skolor",
      "Att företräda arbetstagare",
      "Att samla skatter",
      "Att skapa lagar"
    ],
    correctAnswer: 1,
    explanation: "Fackförbund arbetar för medlemmarnas intressen på arbetsmarknaden."
  },
  {
    id: 59,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vilken organisation är en facklig centralorganisation?",
    options: [
      "EU",
      "FN",
      "LO",
      "JO"
    ],
    correctAnswer: 2,
    explanation: "LO är en av Sveriges största fackliga centralorganisationer."
  },
  {
    id: 60,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vad förhandlar fackförbund och arbetsgivare om?",
    options: [
      "Valresultat",
      "Löner och arbetsvillkor",
      "Skatter",
      "Medborgarskap"
    ],
    correctAnswer: 1,
    explanation: "De tecknar kollektivavtal om löner och arbetsvillkor."
  },
  {
    id: 61,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "easy",
    type: "fact",
    question: "Vad används skatter bland annat till?",
    options: [
      "Privata investeringar",
      "Välfärd",
      "Partibidrag",
      "Export"
    ],
    correctAnswer: 1,
    explanation: "Skatter finansierar skola, sjukvård och annan välfärd."
  },
  {
    id: 62,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "easy",
    type: "scenario",
    question: "Vilken nivå ansvarar främst för sjukvården?",
    options: [
      "EU",
      "Kommunen",
      "Regionen",
      "FN"
    ],
    correctAnswer: 2,
    explanation: "Regionerna ansvarar för hälso- och sjukvården."
  },
  {
    id: 63,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "easy",
    type: "scenario",
    question: "Vilken nivå ansvarar för äldreomsorg?",
    options: [
      "Kommunen",
      "EU",
      "Regionen",
      "Nato"
    ],
    correctAnswer: 0,
    explanation: "Äldreomsorg är ett kommunalt ansvar."
  },
  {
    id: 64,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "easy",
    type: "scenario",
    question: "Vilken nivå ansvarar för grundskolan?",
    options: [
      "Kommunen",
      "EU",
      "FN",
      "Domstolarna"
    ],
    correctAnswer: 0,
    explanation: "Kommunerna ansvarar för grundskolan."
  },
  {
    id: 65,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "easy",
    type: "fact",
    question: "Vad var Sverige före industrialiseringen?",
    options: [
      "Informationssamhälle",
      "Jordbrukssamhälle",
      "Industrisamhälle",
      "Servicesamhälle"
    ],
    correctAnswer: 1,
    explanation: "Sverige var länge ett jordbrukssamhälle."
  },
  {
    id: 66,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vilken folkrörelse arbetade mot alkoholmissbruk?",
    options: [
      "Arbetarrörelsen",
      "Nykterhetsrörelsen",
      "Miljörörelsen",
      "Idrottsrörelsen"
    ],
    correctAnswer: 1,
    explanation: "Nykterhetsrörelsen ville minska alkoholmissbruket."
  },
  {
    id: 67,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "hard",
    type: "fact",
    question: "Vilket år beslutades allmän rösträtt i Sverige?",
    options: [
      "1909",
      "1918",
      "1921",
      "1945"
    ],
    correctAnswer: 1,
    explanation: "Beslutet om allmän rösträtt fattades 1918."
  },
  {
    id: 68,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vilket år hölls det första riksdagsvalet där kvinnor fick rösta?",
    options: [
      "1909",
      "1918",
      "1921",
      "1930"
    ],
    correctAnswer: 2,
    explanation: "År 1921 fick kvinnor rösta i riksdagsvalet för första gången."
  },
  {
    id: 69,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Hur förhöll sig Sverige till första världskriget?",
    options: [
      "Deltog på Tysklands sida",
      "Deltog på Storbritanniens sida",
      "Var neutralt",
      "Var medlem i Nato"
    ],
    correctAnswer: 2,
    explanation: "Sverige förklarade sig neutralt under första världskriget."
  },
  {
    id: 70,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "hard",
    type: "fact",
    question: "Vad drabbade Sverige under första världskriget trots neutraliteten?",
    options: [
      "Översvämningar",
      "Matbrist",
      "Jordbävningar",
      "Inbördeskrig"
    ],
    correctAnswer: 1,
    explanation: "Kriget ledde till brist på mat och andra varor."
  },
  {
    id: 71,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "hard",
    type: "fact",
    question: "Vem gav skyddspass åt judar under andra världskriget?",
    options: [
      "Olof Palme",
      "Raoul Wallenberg",
      "Dag Hammarskjöld",
      "Gustav Vasa"
    ],
    correctAnswer: 1,
    explanation: "Raoul Wallenberg räddade många judar genom skyddspass."
  },
  {
    id: 72,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "hard",
    type: "fact",
    question: "Vilken organisation räddade människor med de vita bussarna?",
    options: [
      "FN",
      "EU",
      "Röda Korset",
      "Nato"
    ],
    correctAnswer: 2,
    explanation: "Röda Korset genomförde räddningsaktionen."
  },
  {
    id: 73,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vilket parti hade oftast regeringsmakten under rekordåren?",
    options: [
      "Moderaterna",
      "Centerpartiet",
      "Socialdemokraterna",
      "Miljöpartiet"
    ],
    correctAnswer: 2,
    explanation: "Socialdemokraterna styrde under större delen av perioden."
  },
  {
    id: 74,
    topicId: "valfard-historia",
    topic: "Välfärd och historia",
    difficulty: "medium",
    type: "fact",
    question: "Vad kallas utvecklingen där världen blir mer sammankopplad?",
    options: [
      "Industrialisering",
      "Globalisering",
      "Sekularisering",
      "Urbanisering"
    ],
    correctAnswer: 1,
    explanation: "Globalisering innebär ökat internationellt utbyte."
  },
  {
    id: 75,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vilket år blev Sverige medlem i EU?",
    options: [
      "1985",
      "1990",
      "1995",
      "2000"
    ],
    correctAnswer: 2,
    explanation: "Sverige gick med i EU 1995."
  },
  {
    id: 76,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "medium",
    type: "fact",
    question: "Vilket är syftet med EU-samarbetet enligt boken?",
    options: [
      "Skapa fred och stabilitet",
      "Avskaffa nationer",
      "Ersätta FN",
      "Skapa världsregering"
    ],
    correctAnswer: 0,
    explanation: "EU bildades för fred och stabilitet efter andra världskriget."
  },
  {
    id: 77,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "medium",
    type: "fact",
    question: "Vilken frihet innebär att EU-medborgare kan arbeta i andra EU-länder?",
    options: [
      "Yttrandefrihet",
      "Religionsfrihet",
      "En av de fyra friheterna",
      "Pressfrihet"
    ],
    correctAnswer: 2,
    explanation: "Fri rörlighet för personer är en av EU:s fyra friheter."
  },
  {
    id: 78,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "hard",
    type: "fact",
    question: "Vad arbetar Europarådet för?",
    options: [
      "Militärt försvar",
      "Mänskliga rättigheter",
      "Valutor",
      "Jordbruk"
    ],
    correctAnswer: 1,
    explanation: "Europarådet arbetar för mänskliga rättigheter, demokrati och rättsstat."
  },
  {
    id: 79,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vad står FN för?",
    options: [
      "Förenade Nationerna",
      "Förenta nationerna",
      "Fria nationer",
      "Federationen Norden"
    ],
    correctAnswer: 1,
    explanation: "FN betyder Förenta nationerna."
  },
  {
    id: 80,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "hard",
    type: "scenario",
    question: "Vilken svensk myndighet arbetar med internationellt utvecklingssamarbete?",
    options: [
      "JO",
      "Sida",
      "SCB",
      "CSN"
    ],
    correctAnswer: 1,
    explanation: "Sida arbetar för att minska fattigdom och förtryck."
  },
  {
    id: 81,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "hard",
    type: "fact",
    question: "När förde Sverige senast krig mot en annan stat?",
    options: [
      "1914",
      "1945",
      "1808–1809",
      "2022"
    ],
    correctAnswer: 2,
    explanation: "Senaste kriget mot en annan stat var mot Ryssland 1808–1809."
  },
  {
    id: 82,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "hard",
    type: "fact",
    question: "Vilket land förlorade Sverige i kriget 1808–1809?",
    options: [
      "Norge",
      "Finland",
      "Danmark",
      "Island"
    ],
    correctAnswer: 1,
    explanation: "Sverige förlorade Finland till Ryssland."
  },
  {
    id: 83,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "medium",
    type: "fact",
    question: "Vad kallades konflikten mellan västblocket och östblocket efter andra världskriget?",
    options: [
      "Vinterkriget",
      "Kalla kriget",
      "Nordiska kriget",
      "Sjuårskriget"
    ],
    correctAnswer: 1,
    explanation: "Konflikten kallades kalla kriget."
  },
  {
    id: 84,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vilket år blev Sverige medlem i Nato?",
    options: [
      "2022",
      "2023",
      "2024",
      "2025"
    ],
    correctAnswer: 2,
    explanation: "Sverige blev medlem i Nato 2024."
  },
  {
    id: 85,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vad är Nato?",
    options: [
      "EU:s parlament",
      "Militär allians",
      "FN-organ",
      "Fackförbund"
    ],
    correctAnswer: 1,
    explanation: "Nato är en försvarsallians."
  },
  {
    id: 86,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "hard",
    type: "fact",
    question: "Vad omfattar den allmänna värnplikten?",
    options: [
      "Endast män",
      "Endast kvinnor",
      "Alla män och kvinnor över 18 år",
      "Alla över 15 år"
    ],
    correctAnswer: 2,
    explanation: "Värnplikten omfattar både män och kvinnor."
  },
  {
    id: 87,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "hard",
    type: "fact",
    question: "Vad består Försvarsmakten av?",
    options: [
      "Polis och tull",
      "Armén, marinen och flygvapnet",
      "Kommuner och regioner",
      "EU och FN"
    ],
    correctAnswer: 1,
    explanation: "Försvarsmakten består av armén, marinen och flygvapnet."
  },
  {
    id: 88,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "hard",
    type: "scenario",
    question: "Vad är syftet med det civila försvaret?",
    options: [
      "Att ordna val",
      "Att samhället ska fungera vid kris eller krig",
      "Att bygga vägar",
      "Att driva företag"
    ],
    correctAnswer: 1,
    explanation: "Civilförsvaret ska hålla viktiga samhällsfunktioner igång."
  },
  {
    id: 89,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vad innebär att Sverige är en sekulär stat?",
    options: [
      "Staten är religiöst neutral",
      "Religion är förbjuden",
      "Alla måste vara kristna",
      "Kyrkan styr staten"
    ],
    correctAnswer: 0,
    explanation: "Staten tar inte ställning för någon religion."
  },
  {
    id: 90,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "hard",
    type: "fact",
    question: "Vilket år blev det möjligt att fritt välja religion eller ingen religion alls?",
    options: [
      "1860",
      "1900",
      "1951",
      "2000"
    ],
    correctAnswer: 2,
    explanation: "Religionsfrihetslagen från 1951 gav full religionsfrihet."
  },
  {
    id: 91,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "När skildes staten och Svenska kyrkan åt?",
    options: [
      "1951",
      "1979",
      "2000",
      "2020"
    ],
    correctAnswer: 2,
    explanation: "År 2000 skiljdes Svenska kyrkan från staten."
  },
  {
    id: 92,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vilket kristet samfund har flest medlemmar i Sverige?",
    options: [
      "Katolska kyrkan",
      "Ortodoxa kyrkan",
      "Svenska kyrkan",
      "Pingströrelsen"
    ],
    correctAnswer: 2,
    explanation: "Svenska kyrkan är fortfarande störst."
  },
  {
    id: 93,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vilken världsreligion är störst i världen?",
    options: [
      "Islam",
      "Judendom",
      "Kristendom",
      "Hinduism"
    ],
    correctAnswer: 2,
    explanation: "Kristendomen är världens största religion."
  },
  {
    id: 94,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "hard",
    type: "fact",
    question: "När fick judar fullständiga medborgerliga rättigheter i Sverige?",
    options: [
      "1700",
      "1800",
      "1870",
      "1951"
    ],
    correctAnswer: 2,
    explanation: "År 1870 fick judar fullständiga medborgerliga rättigheter."
  },
  {
    id: 95,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vilken högtid firas till minne av Jesu födelse?",
    options: [
      "Påsk",
      "Midsommar",
      "Jul",
      "Valborg"
    ],
    correctAnswer: 2,
    explanation: "Jul firas till minne av Jesu födelse."
  },
  {
    id: 96,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vilken högtid förknippas med midsommarstång och dans?",
    options: [
      "Jul",
      "Midsommar",
      "Påsk",
      "Lucia"
    ],
    correctAnswer: 1,
    explanation: "Midsommar är en av Sveriges mest kända traditioner."
  },
  {
    id: 97,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vilken högtid firas den 13 december?",
    options: [
      "Påsk",
      "Valborg",
      "Lucia",
      "Midsommar"
    ],
    correctAnswer: 2,
    explanation: "Luciadagen firas den 13 december."
  },
  {
    id: 98,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vilken högtid infaller på våren och förknippas med ägg och kycklingar?",
    options: [
      "Jul",
      "Påsk",
      "Lucia",
      "Alla helgons dag"
    ],
    correctAnswer: 1,
    explanation: "Påsken är en viktig kristen högtid."
  },
  {
    id: 99,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "Vilken tradition firas ofta den 30 april?",
    options: [
      "Midsommar",
      "Valborg",
      "Lucia",
      "Nationaldagen"
    ],
    correctAnswer: 1,
    explanation: "Valborgsmässoafton firas den 30 april."
  },
  {
    id: 100,
    topicId: "omvarld-religion",
    topic: "Omvärlden och religion",
    difficulty: "easy",
    type: "fact",
    question: "När firas Sveriges nationaldag?",
    options: [
      "1 maj",
      "6 juni",
      "24 december",
      "31 december"
    ],
    correctAnswer: 1,
    explanation: "Sveriges nationaldag firas den 6 juni."
  },
  {
    id: 101,
    topicId: "lag-och-ratt",
    topic: "Lag och rätt",
    difficulty: "hard",
    type: "scenario",
    question: "En 14-åring begår ett brott. Vem ansvarar normalt för åtgärder kring barnet?",
    options: [
      "Riksdagen",
      "Socialtjänsten",
      "EU",
      "Regionen"
    ],
    correctAnswer: 1,
    explanation: "Barn under straffmyndighetsåldern hanteras normalt av socialtjänsten."
  },
  {
    id: 102,
    topicId: "lag-och-ratt",
    topic: "Lag och rätt",
    difficulty: "medium",
    type: "scenario",
    question: "Fatima misstänks för ett brott. Vem avgör om åtal ska väckas?",
    options: [
      "Polisen",
      "Domaren",
      "Åklagaren",
      "Kommunen"
    ],
    correctAnswer: 2,
    explanation: "Det är åklagaren som beslutar om åtal ska väckas."
  },
  {
    id: 103,
    topicId: "demokrati",
    topic: "Demokrati",
    difficulty: "easy",
    type: "scenario",
    question: "Ali fyller 18 år veckan före valet. Får han rösta?",
    options: [
      "Ja",
      "Nej",
      "Bara i kommunval",
      "Bara i EU-val"
    ],
    correctAnswer: 0,
    explanation: "Personer som fyllt 18 år och uppfyller övriga krav har rösträtt."
  },
  {
    id: 104,
    topicId: "manskliga-rattigheter",
    topic: "Mänskliga rättigheter",
    difficulty: "medium",
    type: "scenario",
    question: "En arbetsgivare väljer bort en sökande på grund av religion. Vad kan detta vara?",
    options: [
      "Yttrandefrihet",
      "Diskriminering",
      "Demokrati",
      "Kollektivavtal"
    ],
    correctAnswer: 1,
    explanation: "Diskriminering på grund av religion är förbjuden enligt lag."
  },
  {
    id: 105,
    topicId: "medier",
    topic: "Medier",
    difficulty: "medium",
    type: "scenario",
    question: "En journalist begär ut dokument från en myndighet. Vilken princip stödjer detta?",
    options: [
      "Religionsfriheten",
      "Offentlighetsprincipen",
      "Värnplikten",
      "Rösträtten"
    ],
    correctAnswer: 1,
    explanation: "Offentlighetsprincipen ger insyn i myndigheters handlingar."
  },
  {
    id: 106,
    topicId: "arbetsmarknad",
    topic: "Arbetsmarknad",
    difficulty: "medium",
    type: "scenario",
    question: "Sara vill ha hjälp i en konflikt med sin arbetsgivare. Vilken organisation kan hjälpa henne?",
    options: [
      "FN",
      "Fackförbund",
      "Kommunfullmäktige",
      "EU"
    ],
    correctAnswer: 1,
    explanation: "Fackförbund hjälper medlemmar i arbetsrelaterade frågor."
  },
  {
    id: 107,
    topicId: "demokrati",
    topic: "Demokrati",
    difficulty: "hard",
    type: "scenario",
    question: "En person vill påverka politiken mellan valen. Vad är ett demokratiskt sätt?",
    options: [
      "Hota politiker",
      "Gå med i ett parti",
      "Hacka myndigheter",
      "Sprida lögner"
    ],
    correctAnswer: 1,
    explanation: "Partipolitiskt engagemang är ett demokratiskt sätt att påverka."
  },
  {
    id: 108,
    topicId: "religion",
    topic: "Religion",
    difficulty: "easy",
    type: "scenario",
    question: "Johan vill inte tillhöra någon religion. Är det tillåtet i Sverige?",
    options: [
      "Ja",
      "Nej",
      "Endast efter 18 år",
      "Endast efter ansökan"
    ],
    correctAnswer: 0,
    explanation: "Religionsfriheten omfattar även rätten att inte tillhöra någon religion."
  },
  {
    id: 109,
    topicId: "eu",
    topic: "EU",
    difficulty: "medium",
    type: "scenario",
    question: "Emma vill studera i ett annat EU-land. Vilken princip gör detta enklare?",
    options: [
      "Kollektivavtal",
      "De fyra friheterna",
      "Värnplikten",
      "Barnkonventionen"
    ],
    correctAnswer: 1,
    explanation: "EU:s fyra friheter underlättar studier och arbete mellan medlemsländer."
  },
  {
    id: 110,
    topicId: "barns-rattigheter",
    topic: "Barns rättigheter",
    difficulty: "medium",
    type: "scenario",
    question: "En kommun planerar en ny lekplats. Vad ska den särskilt tänka på enligt barnkonventionen?",
    options: [
      "Företagens vinst",
      "Barnets bästa",
      "Turism",
      "EU-regler"
    ],
    correctAnswer: 1,
    explanation: "Barnets bästa ska beaktas i beslut som påverkar barn."
  },
  {
    id: 111,
    topicId: "lag-och-ratt",
    topic: "Lag och rätt",
    difficulty: "easy",
    type: "fact",
    question: "Från vilken ålder är man straffmyndig i Sverige?",
    options: [
      "13 år",
      "14 år",
      "15 år",
      "18 år"
    ],
    correctAnswer: 2,
    explanation: "I Sverige är man straffmyndig från 15 års ålder."
  },
  {
    id: 112,
    topicId: "lag-och-ratt",
    topic: "Lag och rätt",
    difficulty: "medium",
    type: "scenario",
    question: "En person frias i domstol. Vad betyder det?",
    options: [
      "Personen får böter",
      "Personen anses oskyldig",
      "Personen får fängelse",
      "Personen blir av med medborgarskapet"
    ],
    correctAnswer: 1,
    explanation: "Att frias innebär att domstolen inte anser att skuld har bevisats."
  },
  {
    id: 113,
    topicId: "medier",
    topic: "Medier",
    difficulty: "easy",
    type: "fact",
    question: "Vad är en ansvarig utgivares uppgift?",
    options: [
      "Skriva alla artiklar",
      "Ansvara juridiskt för publiceringar",
      "Betala skatt",
      "Godkänna lagar"
    ],
    correctAnswer: 1,
    explanation: "Ansvarig utgivare är juridiskt ansvarig för innehållet som publiceras."
  },
  {
    id: 114,
    topicId: "medier",
    topic: "Medier",
    difficulty: "medium",
    type: "scenario",
    question: "En journalist använder flera oberoende källor innan publicering. Varför?",
    options: [
      "För att öka försäljningen",
      "För att följa källkritik",
      "För att undvika skatt",
      "För att följa EU-regler"
    ],
    correctAnswer: 1,
    explanation: "Journalister ska kontrollera uppgifter med flera oberoende källor."
  },
  {
    id: 115,
    topicId: "manskliga-rattigheter",
    topic: "Mänskliga rättigheter",
    difficulty: "easy",
    type: "fact",
    question: "Vad är målet med Sveriges jämställdhetspolitik?",
    options: [
      "Samma bostad åt alla",
      "Samma religion åt alla",
      "Lika rättigheter och möjligheter",
      "Samma yrke åt alla"
    ],
    correctAnswer: 2,
    explanation: "Kvinnor och män ska ha samma rättigheter och möjligheter."
  },
  {
    id: 116,
    topicId: "manskliga-rattigheter",
    topic: "Mänskliga rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "En person utsätts för våld av en familjemedlem. Hur ser svensk lag på detta?",
    options: [
      "Tillåtet i vissa fall",
      "Brottsligt",
      "En privat fråga",
      "Endast socialt problem"
    ],
    correctAnswer: 1,
    explanation: "Våld i nära relationer är ett brott."
  },
  {
    id: 117,
    topicId: "barns-rattigheter",
    topic: "Barns rättigheter",
    difficulty: "medium",
    type: "fact",
    question: "När blev barnkonventionen svensk lag?",
    options: [
      "2010",
      "2015",
      "2020",
      "2025"
    ],
    correctAnswer: 2,
    explanation: "Barnkonventionen blev lag i Sverige år 2020."
  },
  {
    id: 118,
    topicId: "barns-rattigheter",
    topic: "Barns rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "Föräldrar skiljer sig och tvistar om var barnet ska bo. Vad ska domstolen göra?",
    options: [
      "Endast lyssna på föräldrarna",
      "Fråga barnet vad det vill",
      "Låta kommunen avgöra",
      "Låta skolan bestämma"
    ],
    correctAnswer: 1,
    explanation: "Barnets åsikter ska beaktas i frågor som rör barnet."
  },
  {
    id: 119,
    topicId: "minoriteter",
    topic: "Minoriteter",
    difficulty: "easy",
    type: "fact",
    question: "Vilken grupp är erkänd som urfolk i Sverige?",
    options: [
      "Romer",
      "Sverigefinnar",
      "Samer",
      "Tornedalingar"
    ],
    correctAnswer: 2,
    explanation: "Samerna är Sveriges urfolk."
  },
  {
    id: 120,
    topicId: "minoriteter",
    topic: "Minoriteter",
    difficulty: "medium",
    type: "fact",
    question: "Vad heter samernas folkvalda parlament?",
    options: [
      "Riksdagen",
      "Regionfullmäktige",
      "Sametinget",
      "Nordiska rådet"
    ],
    correctAnswer: 2,
    explanation: "Sametinget representerar samerna i frågor om språk, kultur och identitet."
  },
  {
    id: 121,
    topicId: "arbetsmarknad",
    topic: "Arbetsmarknad",
    difficulty: "easy",
    type: "fact",
    question: "Vad gör en arbetsgivare?",
    options: [
      "Stiftar lagar",
      "Anställer och betalar lön",
      "Driver domstolar",
      "Utfärdar pass"
    ],
    correctAnswer: 1,
    explanation: "Arbetsgivaren anställer personal och betalar lön."
  },
  {
    id: 122,
    topicId: "arbetsmarknad",
    topic: "Arbetsmarknad",
    difficulty: "medium",
    type: "scenario",
    question: "En arbetsplats omfattas av kollektivavtal. Vad regleras där?",
    options: [
      "Bostadsköp",
      "Löner och arbetsvillkor",
      "Valresultat",
      "Passansökningar"
    ],
    correctAnswer: 1,
    explanation: "Kollektivavtal reglerar löner och arbetsvillkor."
  },
  {
    id: 123,
    topicId: "historia",
    topic: "Historia",
    difficulty: "easy",
    type: "fact",
    question: "Vilken rörelse arbetade för kvinnors rösträtt?",
    options: [
      "Kvinnorörelsen",
      "Idrottsrörelsen",
      "Miljörörelsen",
      "Handelsrörelsen"
    ],
    correctAnswer: 0,
    explanation: "Kvinnorörelsen kämpade för kvinnors rösträtt."
  },
  {
    id: 124,
    topicId: "historia",
    topic: "Historia",
    difficulty: "medium",
    type: "fact",
    question: "Vilket år genomfördes första valet där kvinnor fick rösta?",
    options: [
      "1909",
      "1918",
      "1921",
      "1945"
    ],
    correctAnswer: 2,
    explanation: "Valet 1921 var det första där kvinnor fick rösta."
  },
  {
    id: 125,
    topicId: "historia",
    topic: "Historia",
    difficulty: "medium",
    type: "scenario",
    question: "Sverige deltog inte militärt i första världskriget. Vad kallades denna hållning?",
    options: [
      "Neutralitet",
      "Allians",
      "Union",
      "Globalisering"
    ],
    correctAnswer: 0,
    explanation: "Sverige var neutralt under första världskriget."
  },
  {
    id: 126,
    topicId: "historia",
    topic: "Historia",
    difficulty: "easy",
    type: "fact",
    question: "Vem hjälpte judar med skyddspass under andra världskriget?",
    options: [
      "Olof Palme",
      "Raoul Wallenberg",
      "Dag Hammarskjöld",
      "Carl Bildt"
    ],
    correctAnswer: 1,
    explanation: "Raoul Wallenberg räddade många judar genom skyddspass."
  },
  {
    id: 127,
    topicId: "eu",
    topic: "EU",
    difficulty: "easy",
    type: "fact",
    question: "Vilket år blev Sverige medlem i EU?",
    options: [
      "1989",
      "1995",
      "2001",
      "2004"
    ],
    correctAnswer: 1,
    explanation: "Sverige blev medlem i EU år 1995."
  },
  {
    id: 128,
    topicId: "eu",
    topic: "EU",
    difficulty: "medium",
    type: "scenario",
    question: "Lisa vill arbeta i Spanien som svensk medborgare. Vad underlättar detta?",
    options: [
      "Barnkonventionen",
      "De fyra friheterna",
      "Värnplikten",
      "Offentlighetsprincipen"
    ],
    correctAnswer: 1,
    explanation: "EU:s fria rörlighet gör det lättare att arbeta i andra medlemsländer."
  },
  {
    id: 129,
    topicId: "fn",
    topic: "FN",
    difficulty: "easy",
    type: "fact",
    question: "Vad är ett av FN:s huvudsyften?",
    options: [
      "Bygga motorvägar",
      "Bevara fred och säkerhet",
      "Fastställa löner",
      "Utse regeringar"
    ],
    correctAnswer: 1,
    explanation: "FN arbetar för fred och säkerhet i världen."
  },
  {
    id: 130,
    topicId: "fn",
    topic: "FN",
    difficulty: "medium",
    type: "fact",
    question: "Vad heter den svenska myndighet som arbetar med internationellt bistånd?",
    options: [
      "CSN",
      "Sida",
      "SCB",
      "JO"
    ],
    correctAnswer: 1,
    explanation: "Sida arbetar med internationellt utvecklingssamarbete."
  },
  {
    id: 131,
    topicId: "forsvar",
    topic: "Försvar",
    difficulty: "easy",
    type: "fact",
    question: "Vad består Försvarsmakten av?",
    options: [
      "Kommuner och regioner",
      "Armén, marinen och flygvapnet",
      "Polis och tull",
      "Domstolar och åklagare"
    ],
    correctAnswer: 1,
    explanation: "Försvarsmakten består av armén, marinen och flygvapnet."
  },
  {
    id: 132,
    topicId: "forsvar",
    topic: "Försvar",
    difficulty: "medium",
    type: "fact",
    question: "Vilket år blev Sverige medlem i Nato?",
    options: [
      "2022",
      "2023",
      "2024",
      "2025"
    ],
    correctAnswer: 2,
    explanation: "Sverige blev medlem i Nato 2024."
  },
  {
    id: 133,
    topicId: "forsvar",
    topic: "Försvar",
    difficulty: "hard",
    type: "scenario",
    question: "Vilka omfattas av den allmänna värnplikten?",
    options: [
      "Endast män",
      "Endast kvinnor",
      "Alla män och kvinnor som fyllt 18 år",
      "Alla över 15 år"
    ],
    correctAnswer: 2,
    explanation: "Värnplikten omfattar både män och kvinnor."
  },
  {
    id: 134,
    topicId: "religion",
    topic: "Religion",
    difficulty: "easy",
    type: "fact",
    question: "Vad innebär religionsfrihet?",
    options: [
      "Man måste vara religiös",
      "Man får välja religion eller ingen religion",
      "Endast kristendom är tillåten",
      "Staten väljer religion"
    ],
    correctAnswer: 1,
    explanation: "Alla har rätt att välja religion eller att inte tro."
  },
  {
    id: 135,
    topicId: "religion",
    topic: "Religion",
    difficulty: "medium",
    type: "fact",
    question: "När skildes Svenska kyrkan från staten?",
    options: [
      "1951",
      "1979",
      "2000",
      "2020"
    ],
    correctAnswer: 2,
    explanation: "År 2000 skildes Svenska kyrkan från staten."
  },
  {
    id: 136,
    topicId: "religion",
    topic: "Religion",
    difficulty: "easy",
    type: "fact",
    question: "Vilket kristet samfund har flest medlemmar i Sverige?",
    options: [
      "Katolska kyrkan",
      "Ortodoxa kyrkan",
      "Svenska kyrkan",
      "Pingstkyrkan"
    ],
    correctAnswer: 2,
    explanation: "Svenska kyrkan är det största kristna samfundet i Sverige."
  },
  {
    id: 137,
    topicId: "traditioner",
    topic: "Traditioner",
    difficulty: "easy",
    type: "fact",
    question: "När firas Sveriges nationaldag?",
    options: [
      "1 maj",
      "6 juni",
      "24 december",
      "31 december"
    ],
    correctAnswer: 1,
    explanation: "Nationaldagen firas den 6 juni."
  },
  {
    id: 138,
    topicId: "traditioner",
    topic: "Traditioner",
    difficulty: "easy",
    type: "fact",
    question: "Vilken högtid firas den 13 december?",
    options: [
      "Påsk",
      "Lucia",
      "Valborg",
      "Midsommar"
    ],
    correctAnswer: 1,
    explanation: "Luciadagen firas den 13 december."
  },
  {
    id: 139,
    topicId: "traditioner",
    topic: "Traditioner",
    difficulty: "medium",
    type: "fact",
    question: "Vilken högtid förknippas med midsommarstång?",
    options: [
      "Jul",
      "Påsk",
      "Midsommar",
      "Alla helgons dag"
    ],
    correctAnswer: 2,
    explanation: "Midsommar firas ofta med midsommarstång och dans."
  },
  {
    id: 140,
    topicId: "traditioner",
    topic: "Traditioner",
    difficulty: "easy",
    type: "fact",
    question: "Vilken högtid firas till minne av Jesu födelse?",
    options: [
      "Påsk",
      "Jul",
      "Lucia",
      "Valborg"
    ],
    correctAnswer: 1,
    explanation: "Jul firas till minne av Jesu födelse."
  },
  {
    id: 141,
    topicId: "demokrati",
    topic: "Demokrati",
    difficulty: "medium",
    type: "scenario",
    question: "En väljare vill rösta utan att någon ser vilket parti som väljs. Vilken princip skyddar detta?",
    options: [
      "Yttrandefrihet",
      "Hemlig röstning",
      "Värnplikt",
      "Offentlighetsprincipen"
    ],
    correctAnswer: 1,
    explanation: "Valen i Sverige är hemliga."
  },
  {
    id: 142,
    topicId: "demokrati",
    topic: "Demokrati",
    difficulty: "hard",
    type: "scenario",
    question: "En politiker granskar regeringens arbete från oppositionen. Vilken roll har oppositionen?",
    options: [
      "Utse domare",
      "Granska regeringen",
      "Leda myndigheter",
      "Bestämma skatter ensam"
    ],
    correctAnswer: 1,
    explanation: "Oppositionens uppgift är att granska regeringen och föreslå alternativ politik."
  },
  {
    id: 143,
    topicId: "geografi",
    topic: "Geografi",
    difficulty: "easy",
    type: "fact",
    question: "Vilket hav ligger vid Sveriges östra kust?",
    options: [
      "Nordsjön",
      "Östersjön",
      "Atlanten",
      "Barents hav"
    ],
    correctAnswer: 1,
    explanation: "Östersjön ligger längs Sveriges östra kust."
  },
  {
    id: 144,
    topicId: "geografi",
    topic: "Geografi",
    difficulty: "easy",
    type: "fact",
    question: "Vilka är Sveriges två största öar?",
    options: [
      "Öland och Gotland",
      "Gotland och Ven",
      "Orust och Öland",
      "Ven och Orust"
    ],
    correctAnswer: 0,
    explanation: "Gotland och Öland är Sveriges största öar."
  },
  {
    id: 145,
    topicId: "miljo",
    topic: "Miljö",
    difficulty: "medium",
    type: "fact",
    question: "Vad är den största orsaken till dagens globala uppvärmning enligt forskningen?",
    options: [
      "Vulkaner",
      "Solstormar",
      "Människors utsläpp av växthusgaser",
      "Månens påverkan"
    ],
    correctAnswer: 2,
    explanation: "Människors utsläpp av växthusgaser driver klimatförändringarna."
  },
  {
    id: 146,
    topicId: "miljo",
    topic: "Miljö",
    difficulty: "medium",
    type: "scenario",
    question: "Vilken följd av klimatförändringar nämns för Sverige?",
    options: [
      "Fler översvämningar",
      "Mindre nederbörd överallt",
      "Färre värmeböljor",
      "Lägre havsnivåer"
    ],
    correctAnswer: 0,
    explanation: "Kraftiga regn och översvämningar kan bli vanligare."
  },
  {
    id: 147,
    topicId: "arbetsmarknad",
    topic: "Arbetsmarknad",
    difficulty: "hard",
    type: "scenario",
    question: "En arbetsgivare och ett fackförbund förhandlar om löner. Vad kallas resultatet?",
    options: [
      "Lag",
      "Budget",
      "Kollektivavtal",
      "Dom"
    ],
    correctAnswer: 2,
    explanation: "Parterna tecknar kollektivavtal."
  },
  {
    id: 148,
    topicId: "manskliga-rattigheter",
    topic: "Mänskliga rättigheter",
    difficulty: "medium",
    type: "scenario",
    question: "Två personer av samma kön vill gifta sig. Är detta tillåtet i Sverige?",
    options: [
      "Ja",
      "Nej",
      "Endast utomlands",
      "Endast borgerligt"
    ],
    correctAnswer: 0,
    explanation: "Samkönade äktenskap är tillåtna i Sverige."
  },
  {
    id: 149,
    topicId: "minoriteter",
    topic: "Minoriteter",
    difficulty: "medium",
    type: "fact",
    question: "Hur många nationella minoriteter erkänner Sverige?",
    options: [
      "Tre",
      "Fyra",
      "Fem",
      "Sex"
    ],
    correctAnswer: 2,
    explanation: "Sverige erkänner fem nationella minoriteter."
  },
  {
    id: 150,
    topicId: "minoriteter",
    topic: "Minoriteter",
    difficulty: "hard",
    type: "scenario",
    question: "En sverigefinne vill använda finska i kontakt med en myndighet inom ett förvaltningsområde. Är det möjligt?",
    options: [
      "Ja",
      "Nej",
      "Endast med tolk",
      "Endast i domstol"
    ],
    correctAnswer: 0,
    explanation: "Nationella minoriteter har särskilda språkliga rättigheter."
  },
  {
    id: 151,
    topicId: "demokrati",
    topic: "Demokrati",
    difficulty: "hard",
    type: "scenario",
    question: "En person tycker att ett politiskt beslut är dåligt. Vilket är det mest demokratiska sättet att försöka påverka beslutet?",
    options: [
      "Hot mot politiker",
      "Engagera sig politiskt eller kontakta folkvalda",
      "Vägra följa alla lagar",
      "Sprida falska uppgifter"
    ],
    correctAnswer: 1,
    explanation: "I en demokrati kan man påverka genom politiskt engagemang, debatt och kontakt med folkvalda."
  },
  {
    id: 152,
    topicId: "lag-och-ratt",
    topic: "Lag och rätt",
    difficulty: "hard",
    type: "scenario",
    question: "En person är misstänkt för brott men har ännu inte dömts. Hur ska personen betraktas?",
    options: [
      "Som skyldig",
      "Som oskyldig tills skuld bevisats",
      "Som dömd",
      "Som vittne"
    ],
    correctAnswer: 1,
    explanation: "Rättssäkerheten innebär att en person ska betraktas som oskyldig tills skuld bevisats."
  },
  {
    id: 153,
    topicId: "medier",
    topic: "Medier",
    difficulty: "hard",
    type: "scenario",
    question: "Du ser en sensationell nyhet på sociala medier. Vad är mest källkritiskt?",
    options: [
      "Dela direkt",
      "Kontrollera flera trovärdiga källor",
      "Fråga en vän",
      "Lita på antalet gilla-markeringar"
    ],
    correctAnswer: 1,
    explanation: "Källkritik innebär att kontrollera information med flera trovärdiga källor."
  },
  {
    id: 154,
    topicId: "manskliga-rattigheter",
    topic: "Mänskliga rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "En arbetsgivare vill bara anställa personer från en viss etnisk grupp. Hur bedöms detta normalt?",
    options: [
      "Tillåtet",
      "Diskriminering",
      "Yttrandefrihet",
      "Föreningsfrihet"
    ],
    correctAnswer: 1,
    explanation: "Diskriminering på grund av etnicitet är förbjuden."
  },
  {
    id: 155,
    topicId: "barns-rattigheter",
    topic: "Barns rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "Kommunen planerar att stänga en skolgård. Vad bör kommunen göra enligt barnkonventionen?",
    options: [
      "Enbart fråga vuxna",
      "Ta hänsyn till barns bästa och lyssna på barn",
      "Låta företag bestämma",
      "Fråga endast lärarna"
    ],
    correctAnswer: 1,
    explanation: "Barns bästa ska beaktas och barns åsikter ska få komma fram."
  },
  {
    id: 156,
    topicId: "arbetsmarknad",
    topic: "Arbetsmarknad",
    difficulty: "hard",
    type: "scenario",
    question: "En arbetsplats saknar kollektivavtal. Betyder det automatiskt att arbetsplatsen bryter mot lagen?",
    options: [
      "Ja",
      "Nej",
      "Endast i offentlig sektor",
      "Endast om facket kräver det"
    ],
    correctAnswer: 1,
    explanation: "Kollektivavtal är vanliga men inte obligatoriska enligt lag."
  },
  {
    id: 157,
    topicId: "religion",
    topic: "Religion",
    difficulty: "hard",
    type: "scenario",
    question: "En person vill byta religion. Vad säger svensk lag?",
    options: [
      "Det kräver myndighetsgodkännande",
      "Det är tillåtet genom religionsfriheten",
      "Det är förbjudet",
      "Det kräver domstolsbeslut"
    ],
    correctAnswer: 1,
    explanation: "Religionsfriheten innebär rätt att byta religion eller avstå från religion."
  },
  {
    id: 158,
    topicId: "demokrati",
    topic: "Demokrati",
    difficulty: "hard",
    type: "scenario",
    question: "En regering vill påverka vilka nyheter som får publiceras. Vilken demokratisk princip riskerar att skadas?",
    options: [
      "Tryckfrihet och yttrandefrihet",
      "Värnplikt",
      "Kommunalt självstyre",
      "Skattesystemet"
    ],
    correctAnswer: 0,
    explanation: "Fria medier är en viktig del av demokratin."
  },
  {
    id: 159,
    topicId: "lag-och-ratt",
    topic: "Lag och rätt",
    difficulty: "hard",
    type: "scenario",
    question: "En person döms för ett allvarligt brott. Vilken följd kan detta få även efter avtjänat straff?",
    options: [
      "Automatiskt förlorat medborgarskap",
      "Registrering i belastningsregistret",
      "Förbud att rösta",
      "Förbud att bo i Sverige"
    ],
    correctAnswer: 1,
    explanation: "Vissa allvarliga brott registreras i belastningsregistret."
  },
  {
    id: 160,
    topicId: "eu",
    topic: "EU",
    difficulty: "hard",
    type: "scenario",
    question: "En svensk flyttar till ett annat EU-land för att arbeta. Vilken princip gör detta möjligt?",
    options: [
      "Offentlighetsprincipen",
      "De fyra friheterna",
      "Värnplikten",
      "Barnkonventionen"
    ],
    correctAnswer: 1,
    explanation: "Fri rörlighet för personer är en av EU:s fyra friheter."
  },
  {
    id: 161,
    topicId: "manskliga-rattigheter",
    topic: "Mänskliga rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "En person utsätts för hedersrelaterat våld. Hur ser svensk lag på detta?",
    options: [
      "Tillåtet inom familjen",
      "Ett brott",
      "En religiös fråga",
      "En privat angelägenhet"
    ],
    correctAnswer: 1,
    explanation: "Hedersrelaterat våld och förtryck är brottsligt."
  },
  {
    id: 162,
    topicId: "forsvar",
    topic: "Försvar",
    difficulty: "hard",
    type: "scenario",
    question: "En allvarlig kris inträffar. Varför finns det civila försvaret?",
    options: [
      "För att ordna val",
      "För att viktiga samhällsfunktioner ska fungera",
      "För att driva företag",
      "För att ersätta regeringen"
    ],
    correctAnswer: 1,
    explanation: "Civilförsvaret ska hjälpa samhället att fungera vid kriser och krig."
  },
  {
    id: 163,
    topicId: "minoriteter",
    topic: "Minoriteter",
    difficulty: "hard",
    type: "scenario",
    question: "En myndighet vägrar använda ett nationellt minoritetsspråk där lagen ger rätt till det. Vad kan problemet vara?",
    options: [
      "Brott mot minoriteters rättigheter",
      "Brott mot värnplikten",
      "Brott mot EU",
      "Brott mot kollektivavtal"
    ],
    correctAnswer: 0,
    explanation: "Nationella minoriteter har särskilda språkliga rättigheter."
  },
  {
    id: 164,
    topicId: "demokrati",
    topic: "Demokrati",
    difficulty: "hard",
    type: "scenario",
    question: "Varför är oppositionen viktig i en demokrati?",
    options: [
      "För att styra domstolarna",
      "För att granska regeringen",
      "För att bestämma skatter ensam",
      "För att välja kung"
    ],
    correctAnswer: 1,
    explanation: "Oppositionen granskar regeringen och erbjuder alternativ politik."
  },
  {
    id: 165,
    topicId: "arbetsmarknad",
    topic: "Arbetsmarknad",
    difficulty: "hard",
    type: "scenario",
    question: "En arbetstagare blir medlem i ett fackförbund. Vad är huvudsyftet?",
    options: [
      "Att få rösträtt",
      "Att få stöd i arbetslivet",
      "Att slippa skatt",
      "Att få medborgarskap"
    ],
    correctAnswer: 1,
    explanation: "Fackförbund hjälper medlemmar i frågor som rör arbetet."
  },
  {
    id: 166,
    topicId: "religion",
    topic: "Religion",
    difficulty: "hard",
    type: "scenario",
    question: "En kommun vill gynna en viss religion framför andra. Hur stämmer det med Sveriges syn på religion?",
    options: [
      "Det stämmer väl",
      "Det strider mot principen om en sekulär stat",
      "Det krävs enligt lag",
      "Det beslutas av EU"
    ],
    correctAnswer: 1,
    explanation: "Sverige är en sekulär stat och ska vara religiöst neutral."
  },
  {
    id: 167,
    topicId: "medier",
    topic: "Medier",
    difficulty: "hard",
    type: "scenario",
    question: "En person lämnar uppgifter till media om missförhållanden. Vilket skydd finns?",
    options: [
      "Meddelarskydd",
      "Värnplikt",
      "Budgetskydd",
      "Rösträttsskydd"
    ],
    correctAnswer: 0,
    explanation: "Personer som lämnar uppgifter till media har ett starkt skydd."
  },
  {
    id: 168,
    topicId: "historia",
    topic: "Historia",
    difficulty: "hard",
    type: "scenario",
    question: "Varför var folkrörelserna viktiga för demokratins utveckling?",
    options: [
      "De krävde rättigheter och organiserade människor",
      "De styrde landet",
      "De avskaffade riksdagen",
      "De skapade EU"
    ],
    correctAnswer: 0,
    explanation: "Folkrörelserna spelade en viktig roll i kampen för demokrati."
  },
  {
    id: 169,
    topicId: "fn",
    topic: "FN",
    difficulty: "hard",
    type: "scenario",
    question: "Två länder riskerar att hamna i krig. Vilket av FN:s syften är mest relevant?",
    options: [
      "Öka handeln",
      "Bevara fred och säkerhet",
      "Sänka skatter",
      "Ordna val"
    ],
    correctAnswer: 1,
    explanation: "FN arbetar för fred och säkerhet i världen."
  },
  {
    id: 170,
    topicId: "lag-och-ratt",
    topic: "Lag och rätt",
    difficulty: "hard",
    type: "scenario",
    question: "Varför har den åtalade rätt till en försvarsadvokat?",
    options: [
      "För att rättegången ska vara rättvis",
      "För att fördröja processen",
      "För att sänka straffet",
      "För att hjälpa åklagaren"
    ],
    correctAnswer: 0,
    explanation: "Rätten till försvar är en viktig del av rättssäkerheten."
  },
  {
    id: 171,
    topicId: "manskliga-rattigheter",
    topic: "Mänskliga rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "En kvinna och en man gör samma arbete men får olika lön utan saklig grund. Vilken princip berörs?",
    options: [
      "Jämställdhet",
      "Värnplikt",
      "Religionsfrihet",
      "Kommunalt självstyre"
    ],
    correctAnswer: 0,
    explanation: "Sverige arbetar för lika lön för lika arbete."
  },
  {
    id: 172,
    topicId: "demokrati",
    topic: "Demokrati",
    difficulty: "hard",
    type: "scenario",
    question: "Varför hålls val med jämna mellanrum i en demokrati?",
    options: [
      "För att ge medborgarna möjlighet att påverka makten",
      "För att öka skatterna",
      "För att stärka domstolarna",
      "För att minska yttrandefriheten"
    ],
    correctAnswer: 0,
    explanation: "Regelbundna val gör att medborgarna kan utkräva ansvar."
  },
  {
    id: 173,
    topicId: "eu",
    topic: "EU",
    difficulty: "hard",
    type: "scenario",
    question: "Varför samarbetar EU-länder inom många olika områden?",
    options: [
      "För att bli starkare tillsammans",
      "För att avskaffa alla nationella lagar",
      "För att ersätta FN",
      "För att välja regering åt medlemsländerna"
    ],
    correctAnswer: 0,
    explanation: "EU bygger på tanken att medlemsländerna blir starkare tillsammans."
  },
  {
    id: 174,
    topicId: "forsvar",
    topic: "Försvar",
    difficulty: "hard",
    type: "scenario",
    question: "Vad är Försvarsmaktens huvudsakliga uppgift?",
    options: [
      "Driva sjukvård",
      "Skydda Sveriges territorium och självständighet",
      "Driva skolor",
      "Samla in skatter"
    ],
    correctAnswer: 1,
    explanation: "Försvarsmakten ska skydda Sverige och kunna bidra till internationella insatser."
  },
  {
    id: 175,
    topicId: "religion",
    topic: "Religion",
    difficulty: "hard",
    type: "scenario",
    question: "En elev möter undervisning om flera religioner i skolan. Varför?",
    options: [
      "För att alla ska välja samma religion",
      "För att öka förståelse, tolerans och respekt",
      "För att ersätta familjens värderingar",
      "För att staten ska välja religion"
    ],
    correctAnswer: 1,
    explanation: "Religionsundervisningen ska ge förståelse för olika religioner och livsåskådningar."
  },
  {
    id: 176,
    topicId: "demokrati",
    topic: "Demokrati",
    difficulty: "hard",
    type: "scenario",
    question: "En kommunpolitiker vill stoppa en fredlig demonstration bara för att hen inte håller med om budskapet. Vilken rättighet berörs?",
    options: [
      "Demonstrationsfriheten",
      "Värnplikten",
      "Näringsfriheten",
      "Arbetsrätten"
    ],
    correctAnswer: 0,
    explanation: "I Sverige har människor rätt att demonstrera fredligt."
  },
  {
    id: 177,
    topicId: "lag-och-ratt",
    topic: "Lag och rätt",
    difficulty: "hard",
    type: "scenario",
    question: "En domare dömer olika beroende på personens religion. Vilken princip bryts?",
    options: [
      "Likhet inför lagen",
      "Yttrandefrihet",
      "Valhemlighet",
      "Offentlighetsprincipen"
    ],
    correctAnswer: 0,
    explanation: "Alla ska behandlas lika inför lagen oavsett bakgrund."
  },
  {
    id: 178,
    topicId: "medier",
    topic: "Medier",
    difficulty: "hard",
    type: "scenario",
    question: "En myndighet vill hemlighålla alla dokument utan anledning. Vilken demokratisk princip försvagas?",
    options: [
      "Offentlighetsprincipen",
      "Religionsfriheten",
      "Föreningsfriheten",
      "Värnplikten"
    ],
    correctAnswer: 0,
    explanation: "Offentlighetsprincipen ger insyn i myndigheters arbete."
  },
  {
    id: 179,
    topicId: "manskliga-rattigheter",
    topic: "Mänskliga rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "En person nekas bostad enbart på grund av sin etniska bakgrund. Hur bedöms detta?",
    options: [
      "Diskriminering",
      "Jämställdhet",
      "Yttrandefrihet",
      "Demokrati"
    ],
    correctAnswer: 0,
    explanation: "Diskriminering på grund av etnicitet är förbjuden."
  },
  {
    id: 180,
    topicId: "barns-rattigheter",
    topic: "Barns rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "En lärare upptäcker att ett barn utsätts för våld hemma. Vad är viktigast enligt svensk lag?",
    options: [
      "Att inte lägga sig i",
      "Att skydda barnets rättigheter",
      "Att vänta tills barnet fyller 18",
      "Att endast informera grannar"
    ],
    correctAnswer: 1,
    explanation: "Barn ska skyddas mot alla former av våld."
  },
  {
    id: 181,
    topicId: "arbetsmarknad",
    topic: "Arbetsmarknad",
    difficulty: "hard",
    type: "scenario",
    question: "En anställd får hjälp av sitt fackförbund i en löneförhandling. Vad visar detta?",
    options: [
      "Hur arbetsmarknadens parter fungerar",
      "Hur domstolar fungerar",
      "Hur EU fungerar",
      "Hur kommuner fungerar"
    ],
    correctAnswer: 0,
    explanation: "Fack och arbetsgivare är arbetsmarknadens parter."
  },
  {
    id: 182,
    topicId: "religion",
    topic: "Religion",
    difficulty: "hard",
    type: "scenario",
    question: "En arbetsplats förbjuder alla religiösa uttryck utan saklig anledning. Vilken frihet kan påverkas?",
    options: [
      "Religionsfriheten",
      "Näringsfriheten",
      "Värnplikten",
      "Offentlighetsprincipen"
    ],
    correctAnswer: 0,
    explanation: "Religionsfriheten skyddar rätten att utöva sin tro."
  },
  {
    id: 183,
    topicId: "eu",
    topic: "EU",
    difficulty: "hard",
    type: "scenario",
    question: "En svensk student flyttar till Frankrike för studier. Vilket EU-samarbete gör detta enklare?",
    options: [
      "De fyra friheterna",
      "Nato",
      "FN",
      "Eurovision"
    ],
    correctAnswer: 0,
    explanation: "Fri rörlighet för personer underlättar studier i andra EU-länder."
  },
  {
    id: 184,
    topicId: "fn",
    topic: "FN",
    difficulty: "hard",
    type: "scenario",
    question: "Två länder försöker lösa en konflikt genom förhandling istället för krig. Vilket FN-mål stöds?",
    options: [
      "Fred och säkerhet",
      "Turism",
      "Valutapolitik",
      "Skogsbruk"
    ],
    correctAnswer: 0,
    explanation: "FN arbetar för fredliga lösningar på konflikter."
  },
  {
    id: 185,
    topicId: "forsvar",
    topic: "Försvar",
    difficulty: "hard",
    type: "scenario",
    question: "Ett omfattande strömavbrott drabbar landet. Vilken del av totalförsvaret hjälper till att hålla samhället igång?",
    options: [
      "Civilförsvaret",
      "EU-parlamentet",
      "Riksrevisionen",
      "Sametinget"
    ],
    correctAnswer: 0,
    explanation: "Civilförsvaret ska hjälpa viktiga samhällsfunktioner att fungera."
  },
  {
    id: 186,
    topicId: "minoriteter",
    topic: "Minoriteter",
    difficulty: "hard",
    type: "scenario",
    question: "En same vill bevara sitt språk och sin kultur. Vilken institution representerar samiska intressen?",
    options: [
      "Sametinget",
      "EU-kommissionen",
      "Regeringen",
      "Högsta domstolen"
    ],
    correctAnswer: 0,
    explanation: "Sametinget representerar den samiska befolkningen."
  },
  {
    id: 187,
    topicId: "historia",
    topic: "Historia",
    difficulty: "hard",
    type: "scenario",
    question: "Människor organiserar sig för att kräva rösträtt och bättre arbetsvillkor. Vad liknar detta?",
    options: [
      "Folkrörelserna",
      "Nato",
      "Kommunfullmäktige",
      "Regionval"
    ],
    correctAnswer: 0,
    explanation: "Folkrörelserna spelade en viktig roll i demokratins utveckling."
  },
  {
    id: 188,
    topicId: "demokrati",
    topic: "Demokrati",
    difficulty: "hard",
    type: "scenario",
    question: "Varför är fria val viktiga i en demokrati?",
    options: [
      "De ger medborgarna möjlighet att påverka makten",
      "De minskar behovet av lagar",
      "De ersätter domstolar",
      "De avskaffar oppositionen"
    ],
    correctAnswer: 0,
    explanation: "Fria val är grunden för folkstyret."
  },
  {
    id: 189,
    topicId: "lag-och-ratt",
    topic: "Lag och rätt",
    difficulty: "hard",
    type: "scenario",
    question: "En person anklagas för brott och får hjälp av en försvarsadvokat. Varför?",
    options: [
      "För att säkerställa en rättvis rättegång",
      "För att undvika domstol",
      "För att påverka val",
      "För att få bidrag"
    ],
    correctAnswer: 0,
    explanation: "Försvarsadvokaten är en viktig del av rättssäkerheten."
  },
  {
    id: 190,
    topicId: "medier",
    topic: "Medier",
    difficulty: "hard",
    type: "scenario",
    question: "En journalist avslöjar missbruk av offentliga medel. Vilken funktion har medierna då?",
    options: [
      "Granska makten",
      "Döma brottslingar",
      "Besluta lagar",
      "Utse ministrar"
    ],
    correctAnswer: 0,
    explanation: "Fria medier granskar personer och institutioner med makt."
  },
  {
    id: 191,
    topicId: "manskliga-rattigheter",
    topic: "Mänskliga rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "En arbetsplats betalar kvinnor mindre än män för samma arbete. Vilken princip utmanas?",
    options: [
      "Jämställdhet",
      "Religionsfrihet",
      "Värnplikt",
      "Kommunalt självstyre"
    ],
    correctAnswer: 0,
    explanation: "Lika lön för lika arbete är en viktig jämställdhetsfråga."
  },
  {
    id: 192,
    topicId: "barns-rattigheter",
    topic: "Barns rättigheter",
    difficulty: "hard",
    type: "scenario",
    question: "En kommun bygger ett nytt bostadsområde. Vad bör särskilt beaktas enligt barnkonventionen?",
    options: [
      "Barnets bästa",
      "Aktiekurser",
      "Turism",
      "EU-budget"
    ],
    correctAnswer: 0,
    explanation: "Barnets bästa ska beaktas i beslut som påverkar barn."
  },
  {
    id: 193,
    topicId: "arbetsmarknad",
    topic: "Arbetsmarknad",
    difficulty: "hard",
    type: "scenario",
    question: "Vem bestämmer normalt lönenivåer i Sverige?",
    options: [
      "Arbetsmarknadens parter",
      "Kungen",
      "FN",
      "Polisen"
    ],
    correctAnswer: 0,
    explanation: "Löner förhandlas oftast mellan arbetsgivare och fack."
  },
  {
    id: 194,
    topicId: "religion",
    topic: "Religion",
    difficulty: "hard",
    type: "scenario",
    question: "En elev vill inte delta i religiösa aktiviteter. Vilken rättighet är relevant?",
    options: [
      "Religionsfriheten",
      "Näringsfriheten",
      "Valfriheten",
      "Värnplikten"
    ],
    correctAnswer: 0,
    explanation: "Religionsfriheten inkluderar rätten att inte vara religiös."
  },
  {
    id: 195,
    topicId: "eu",
    topic: "EU",
    difficulty: "hard",
    type: "scenario",
    question: "Varför samarbetar EU-länder kring handel?",
    options: [
      "För att underlätta ekonomiskt samarbete",
      "För att ersätta nationella parlament",
      "För att avskaffa val",
      "För att styra skolor"
    ],
    correctAnswer: 0,
    explanation: "EU samarbetar inom bland annat handel och ekonomi."
  },
  {
    id: 196,
    topicId: "fn",
    topic: "FN",
    difficulty: "hard",
    type: "scenario",
    question: "Ett land bryter mot mänskliga rättigheter. Vilken organisation arbetar globalt med dessa frågor?",
    options: [
      "FN",
      "LO",
      "SKR",
      "TCO"
    ],
    correctAnswer: 0,
    explanation: "FN arbetar för mänskliga rättigheter världen över."
  },
  {
    id: 197,
    topicId: "forsvar",
    topic: "Försvar",
    difficulty: "hard",
    type: "scenario",
    question: "Vad är huvudsyftet med Sveriges militära försvar?",
    options: [
      "Skydda Sveriges territorium och självständighet",
      "Driva sjukvård",
      "Skapa lagar",
      "Hantera pensioner"
    ],
    correctAnswer: 0,
    explanation: "Försvarsmakten ska skydda landet och dess självständighet."
  },
  {
    id: 198,
    topicId: "minoriteter",
    topic: "Minoriteter",
    difficulty: "hard",
    type: "scenario",
    question: "Varför har nationella minoriteter särskilda rättigheter i Sverige?",
    options: [
      "För att skydda språk, kultur och identitet",
      "För att ge rösträtt",
      "För att minska skatter",
      "För att välja regering"
    ],
    correctAnswer: 0,
    explanation: "Sverige skyddar nationella minoriteters språk och kultur."
  },
  {
    id: 199,
    topicId: "historia",
    topic: "Historia",
    difficulty: "hard",
    type: "scenario",
    question: "Vilken förändring markerade Sveriges genombrott som demokrati?",
    options: [
      "Att kvinnor och män fick rösta i riksdagsval",
      "EU-medlemskapet",
      "Nato-medlemskapet",
      "Industrialiseringen"
    ],
    correctAnswer: 0,
    explanation: "Valet 1921 med allmän rösträtt markerade demokratins genombrott."
  },
  {
    id: 200,
    topicId: "demokrati",
    topic: "Demokrati",
    difficulty: "hard",
    type: "scenario",
    question: "Varför är det viktigt att människor får uttrycka sina åsikter fritt i en demokrati?",
    options: [
      "För att möjliggöra öppen debatt och påverkan",
      "För att undvika val",
      "För att ersätta lagar",
      "För att minska antalet partier"
    ],
    correctAnswer: 0,
    explanation: "Yttrandefrihet är en grundläggande del av ett demokratiskt samhälle."
  }
];
