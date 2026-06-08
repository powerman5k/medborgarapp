export type Topic = {
  id: string;
  title: string;
  description: string;
  icon: "map" | "landmark" | "vote" | "heart" | "globe";
};

export type Question = {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export const topics: Topic[] = [
  {
    id: "landet-sverige",
    title: "Landet Sverige",
    description: "Geografi, natur, befolkning och viktiga resurser.",
    icon: "map",
  },
  {
    id: "demokrati-styre",
    title: "Demokrati och styre",
    description: "Folkstyre, riksdag, regering, regioner och kommuner.",
    icon: "landmark",
  },
  {
    id: "val-rattigheter",
    title: "Val och rättigheter",
    description: "Rösträtt, grundlagar, friheter och medier.",
    icon: "vote",
  },
  {
    id: "valfard-historia",
    title: "Välfärd och historia",
    description: "Skatter, välfärd och Sveriges demokratiska utveckling.",
    icon: "heart",
  },
  {
    id: "omvarld-religion",
    title: "Omvärlden och religion",
    description: "EU, Nato, internationellt samarbete och religionsfrihet.",
    icon: "globe",
  },
];

export const questions: Question[] = [
  {
    id: "landet-1",
    topicId: "landet-sverige",
    question: "Vilka är Sveriges tre största sjöar?",
    options: [
      "Vänern, Vättern och Mälaren",
      "Siljan, Hjälmaren och Storsjön",
      "Mälaren, Torneträsk och Bolmen",
      "Vättern, Roxen och Åsnen",
    ],
    correctAnswer: "Vänern, Vättern och Mälaren",
    explanation:
      "Materialet beskriver Vänern, Vättern och Mälaren som Sveriges tre största sjöar.",
  },
  {
    id: "landet-2",
    topicId: "landet-sverige",
    question: "Vilket är Sveriges högsta berg?",
    options: ["Kebnekaise", "Sarektjåkkå", "Åreskutan", "Helags"],
    correctAnswer: "Kebnekaise",
    explanation:
      "Kebnekaise ligger i fjällen och beskrivs som Sveriges högsta berg, cirka 2 000 meter högt.",
  },
  {
    id: "landet-3",
    topicId: "landet-sverige",
    question: "Vilka tre stora landsdelar brukar Sverige delas in i?",
    options: [
      "Götaland, Svealand och Norrland",
      "Skåne, Uppland och Lappland",
      "Sydsverige, Mittsverige och Nordkalotten",
      "Götaland, Dalarna och Norrbotten",
    ],
    correctAnswer: "Götaland, Svealand och Norrland",
    explanation:
      "Sverige delas ofta in i Götaland i söder, Svealand i mitten och Norrland i norr.",
  },
  {
    id: "demokrati-1",
    topicId: "demokrati-styre",
    question: "Vad betyder demokrati i grunden?",
    options: ["Folkstyre", "Kungastyre", "Myndighetsstyre", "Domstolsstyre"],
    correctAnswer: "Folkstyre",
    explanation:
      "Demokrati betyder folkstyre och innebär att makten utgår från folket.",
  },
  {
    id: "demokrati-2",
    topicId: "demokrati-styre",
    question: "Hur många ledamöter har Sveriges riksdag?",
    options: ["349", "290", "21", "101"],
    correctAnswer: "349",
    explanation:
      "Riksdagen har 349 ledamöter som väljs vart fjärde år och beslutar om lagar och statens budget.",
  },
  {
    id: "demokrati-3",
    topicId: "demokrati-styre",
    question: "Vilka nivåer styr Sverige på, utöver påverkan från EU?",
    options: [
      "Statlig, regional och kommunal nivå",
      "Kunglig, militär och lokal nivå",
      "Nordisk, landskaplig och statlig nivå",
      "Domstolsnivå, skolnivå och vårdnivå",
    ],
    correctAnswer: "Statlig, regional och kommunal nivå",
    explanation:
      "Sverige styrs på statlig nivå, regional nivå genom regioner och kommunal nivå genom kommuner.",
  },
  {
    id: "val-1",
    topicId: "val-rattigheter",
    question: "Hur ofta hålls val till riksdag, regionfullmäktige och kommunfullmäktige?",
    options: ["Vart fjärde år", "Varje år", "Vart femte år", "Vart sjunde år"],
    correctAnswer: "Vart fjärde år",
    explanation:
      "De allmänna valen till riksdag, regioner och kommuner hålls vart fjärde år.",
  },
  {
    id: "val-2",
    topicId: "val-rattigheter",
    question: "Vilken ålder måste man ha fyllt för att rösta i svenska val?",
    options: ["18 år", "16 år", "20 år", "21 år"],
    correctAnswer: "18 år",
    explanation:
      "För att ha rätt att rösta ska man ha fyllt 18 år. Olika val har sedan olika regler för medborgarskap och folkbokföring.",
  },
  {
    id: "val-3",
    topicId: "val-rattigheter",
    question: "Vilka grundlagar skyddar det fria ordet i tryckt form och i medier?",
    options: [
      "Tryckfrihetsförordningen och yttrandefrihetsgrundlagen",
      "Successionsordningen och kommunallagen",
      "Regeringsformen och skollagen",
      "Brottsbalken och socialtjänstlagen",
    ],
    correctAnswer: "Tryckfrihetsförordningen och yttrandefrihetsgrundlagen",
    explanation:
      "Tryckfrihetsförordningen skyddar det fria ordet i tryckt form och yttrandefrihetsgrundlagen skyddar yttranden i bland annat radio, tv och webb.",
  },
  {
    id: "valfard-1",
    topicId: "valfard-historia",
    question: "Hur finansieras välfärden i Sverige till stor del?",
    options: ["Genom skatter", "Genom tullavgifter", "Genom privata gåvor", "Genom lotterier"],
    correctAnswer: "Genom skatter",
    explanation:
      "Välfärden finansieras genom skatter som går till staten, regionerna och kommunerna.",
  },
  {
    id: "valfard-2",
    topicId: "valfard-historia",
    question: "Vilket år hölls det första riksdagsvalet där både män och kvinnor fick rösta?",
    options: ["1921", "1909", "1951", "1995"],
    correctAnswer: "1921",
    explanation:
      "År 1921 genomfördes det första riksdagsvalet där både män och kvinnor fick rösta och kvinnor kunde bli riksdagsledamöter.",
  },
  {
    id: "valfard-3",
    topicId: "valfard-historia",
    question: "Vilken samhällsförändring tog fart i Sverige under 1800-talet?",
    options: [
      "Övergången från jordbrukssamhälle till industrisamhälle",
      "Övergången från demokrati till envälde",
      "Övergången från EU-medlemskap till nordiskt förbund",
      "Övergången från städer till enbart jordbruk",
    ],
    correctAnswer: "Övergången från jordbrukssamhälle till industrisamhälle",
    explanation:
      "Under 1800-talet växte industrier fram och många flyttade från landsbygden till städerna för att arbeta i fabriker.",
  },
  {
    id: "omvarld-1",
    topicId: "omvarld-religion",
    question: "När blev Sverige medlem i EU?",
    options: ["1995", "1949", "2003", "2024"],
    correctAnswer: "1995",
    explanation:
      "Sverige har varit medlem i Europeiska unionen sedan 1995.",
  },
  {
    id: "omvarld-2",
    topicId: "omvarld-religion",
    question: "När blev Sverige medlem i Nato?",
    options: ["2024", "1995", "1945", "1951"],
    correctAnswer: "2024",
    explanation:
      "Efter Rysslands angrepp på Ukraina 2022 ansökte Sverige och Finland om medlemskap. Sverige blev medlem i Nato 2024.",
  },
  {
    id: "omvarld-3",
    topicId: "omvarld-religion",
    question: "Vad innebär det att Sverige är en sekulär stat?",
    options: [
      "Att staten är religiöst neutral",
      "Att alla måste tillhöra Svenska kyrkan",
      "Att religion styr riksdagen",
      "Att religiösa samfund saknar rättigheter",
    ],
    correctAnswer: "Att staten är religiöst neutral",
    explanation:
      "En sekulär stat tar inte ställning för eller diskriminerar någon religion och garanterar religionsfrihet.",
  },
];
