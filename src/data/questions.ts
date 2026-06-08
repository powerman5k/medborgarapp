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
  }
];
