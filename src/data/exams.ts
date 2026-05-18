import type { Exam } from "@/types/exam";

const PREDISPITNI_TEST_1: Exam = {
  id: "predispitni-test-1",
  slug: "predispitni-test-1",
  title: "Predispitni test 1",
  description:
    "Prometni propisi — predispitni test broj 1. 38 pitanja, prolaz 32 boda, 30 minuta.",
  category: "Prometni propisi",
  pointsToPass: 32,
  initialTimeMinutes: 30,
  validationMode: "end",
  questions: [
    {
      id: "q1",
      title: "Što je kolnik?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title:
            "dio cestovne površine namijenjen u prvom redu za promet vozila, s jednom prometnom trakom ili više prometnih traka",
          isCorrect: false,
        },
        {
          title:
            "dio cestovne površine namijenjen u prvom redu za promet pješaka, s jednom pješačkom stazom ili više pješačkih staza",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q2",
      title: "Koliko kolničkih traka ima cesta u situaciji kao na slici?",
      image: "/exam-images/test-1/image2.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "jednu", isCorrect: false },
        { title: "dvije", isCorrect: false },
        { title: "tri", isCorrect: false },
      ],
    },
    {
      id: "q3",
      title: "Na čemu se mora temeljiti ponašanje sudionika u prometu?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "na međusobnom uvažavanju", isCorrect: false },
        { title: "na agresivnom ponašanju", isCorrect: false },
        { title: "na partnerskom odnosu", isCorrect: false },
      ],
    },
    {
      id: "q4",
      title: "Kojom se cestom kreće vozilo u situaciji kao na slici?",
      image: "/exam-images/test-1/image5.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "brzom cestom", isCorrect: false },
        { title: "autocestom", isCorrect: false },
        {
          title:
            "cestom namijenjenom isključivo za promet motornih vozila",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q5",
      title: "Što može povećati pozornost vozača za vrijeme vožnje?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "koncentracija na vožnju", isCorrect: false },
        { title: "predviđanje i očekivanje opasnosti", isCorrect: false },
        { title: "razgovor mobitelom", isCorrect: false },
      ],
    },
    {
      id: "q6",
      title: "Čime je određeno značenje prometnog znaka?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "položajem znaka uz cestu", isCorrect: false },
        { title: "oblikom prometnog znaka", isCorrect: false },
        { title: "simbolom na prometnom znaku", isCorrect: false },
      ],
    },
    {
      id: "q7",
      title:
        "Gdje se na cesti postavljaju prometni znakovi izričitih naredaba?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title:
            "neposredno na mjestima od kojih počinje obveza pridržavanja naredbe izražene znakom",
          isCorrect: false,
        },
        {
          title:
            "150 do 250 metara prije mjesta od kojeg počinje obveza pridržavanja naredbe izražene znakom",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q8",
      title: "Pomoću čega vozač procjenjuje brzinu svog vozila?",
      image: "/exam-images/test-1/image7.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "pomoću brzinomjera u vozilu", isCorrect: false },
        { title: "pomoću vizualnih i slušnih informacija", isCorrect: false },
        { title: "pomoću kretanja drugih vozila", isCorrect: false },
      ],
    },
    {
      id: "q9",
      title: "Kojom prometnom površinom se kreću pješaci na slici?",
      image: "/exam-images/test-1/image8.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "pješačkom stazom", isCorrect: false },
        { title: "obilježenim pješačkim prijelazom", isCorrect: false },
        { title: "nogostupom", isCorrect: false },
      ],
    },
    {
      id: "q10",
      title:
        "Što mora učiniti vozač prije započinjanja neke radnje vozilom u prometu?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title:
            "uvjeriti se da radnju može obaviti bez opasnosti za druge sudionike u prometu",
          isCorrect: false,
        },
        {
          title:
            "uvjeriti se da radnju može obaviti uz što manji razmak između vozila",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q11",
      title:
        "Smijete li se svojim vozilom kretati srednjom prometnom trakom na cesti u situaciji kao na slici?",
      image: "/exam-images/test-1/image10.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "smijete radi pretjecanja vozila koja se kreću sporije",
          isCorrect: false,
        },
        {
          title: "smijete kada se mora zaustaviti zbog kvara na vozilu",
          isCorrect: false,
        },
        {
          title:
            "ne smijete, jer je ta traka namijenjena samo za spora vozila",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q12",
      title:
        "Kako ćete postupiti ako je na semaforu upaljeno žuto trepteće svjetlo u situaciji kao na slici?",
      image: "/exam-images/test-1/image12.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "propustiti motocikl", isCorrect: false },
        { title: "propustiti autobus", isCorrect: false },
        { title: "voziti prije autobusa", isCorrect: false },
      ],
    },
    {
      id: "q13",
      title: "Zbog čega morate, u situaciji kao na slici, propustiti motocikl?",
      image: "/exam-images/test-1/image15.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "zbog toga što nailazim na cestu s prednošću prolaska",
          isCorrect: false,
        },
        { title: "zbog toga što nailazite s lijeve strane", isCorrect: false },
        { title: "zbog toga što zadržavate smjer vožnje", isCorrect: false },
      ],
    },
    {
      id: "q14",
      title: "S koje se strane, u pravilu, obavlja pretjecanje?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "s lijeve strane", isCorrect: false },
        { title: "s desne strane", isCorrect: false },
      ],
    },
    {
      id: "q15",
      title:
        "Što se ne smije činiti vozilom ako se vozi cestom na kojoj postoje najmanje dvije prometne trake za promet u istom smjeru i na kojima su kolone vozila u situaciji kao na slici?",
      image: "/exam-images/test-1/image18.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "kretati se lijevom prometnom trakom", isCorrect: false },
        { title: "kretati se desnom prometnom trakom", isCorrect: false },
        {
          title: "prelaziti vozilom iz trake u traku (voziti slalom)",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q16",
      title: "Kako ćete postupiti nakon ovoga prometnog znaka?",
      image: "/exam-images/test-1/image1.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "voziti ravno ili udesno", isCorrect: false },
        { title: "skrenuti ulijevo", isCorrect: false },
        { title: "voziti samo ravno", isCorrect: false },
      ],
    },
    {
      id: "q17",
      title: "O čemu vozača obavješćuje znak na slici?",
      image: "/exam-images/test-1/image3.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "pružanju cestovnih smjerova", isCorrect: false },
        { title: "udaljenosti do određenog mjesta", isCorrect: false },
        {
          title: "potvrdi smjera kretanja nakon prolaska raskrižja",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q18",
      title:
        "Kako se najavljuje približavanje vlaka svjetlosnim znakom na slici?",
      image: "/exam-images/test-1/image4.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "izmjenično paljenjem dvaju crvenih svjetala",
          isCorrect: false,
        },
        { title: "stalno upaljenim crvenim svjetlima", isCorrect: false },
        {
          title: "stalno upaljenim crvenim svjetlima i zvučnim znakovima",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q19",
      title: "Što označuje kosa crta na kolniku u situaciji kao na slici?",
      image: "/exam-images/test-1/image6.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title:
            "mjesto otvaranja prometne trake za vozila javnog prijevoza putnika",
          isCorrect: false,
        },
        {
          title:
            "mjesto otvaranja prometne trake za zaustavljanje vozila u nuždi",
          isCorrect: false,
        },
        {
          title: "mjesto otvaranja ulazne trake na brzoj cesti",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q20",
      title:
        "Što vozaču omogućuje prepoznavanje i izbjegavanje mogućih opasnih situacija tijekom vožnje?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "vožnja sa smanjenom pozornošću", isCorrect: false },
        { title: "vožnja maksimalno dopuštenom brzinom", isCorrect: false },
        { title: "pravodobno uočavanje prometne situacije", isCorrect: false },
      ],
    },
    {
      id: "q21",
      title:
        "Kako se morate ponašati u susretu s vozilima s pravom prednosti prolaska?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "smanjiti brzinu i povećati pozornost prema tim vozilima",
          isCorrect: false,
        },
        { title: "omogućiti prolazak tim vozilima", isCorrect: false },
        { title: "nastaviti vožnju povećanom brzinom", isCorrect: false },
      ],
    },
    {
      id: "q22",
      title:
        "Koliko iznosi najveća dopuštena brzina kretanja vozila koje vuče drugo neispravno vozilo?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "40 km na sat", isCorrect: false },
        { title: "50 km na sat", isCorrect: false },
        { title: "60 km na sat", isCorrect: false },
      ],
    },
    {
      id: "q23",
      title:
        "Kako ćete postupiti kada svojim vozilom ulazite sa ceste bez suvremenoga kolničkog zastora na cestu sa suvremenim kolničkim zastorom i kada ta cesta nije prometnim znakom označena kao cesta s prednošću prolaska?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "propustiti isključivo vozila koja nailaze s desne strane",
          isCorrect: false,
        },
        {
          title: "propustiti sva vozila koja se kreću tom cestom",
          isCorrect: false,
        },
        {
          title:
            "propustiti vozila koja dolaze isključivo iz suprotnog smjera",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q24",
      title: "Kako ćete postupiti u situaciji kao na slici?",
      image: "/exam-images/test-1/image9.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "propustiti crni automobil", isCorrect: false },
        { title: "propustiti crveni automobil", isCorrect: false },
        { title: "voziti prije crnog automobila", isCorrect: false },
      ],
    },
    {
      id: "q25",
      title:
        "Zbog čega morate, u situaciji kao na slici, propustiti vozilo koje nailazi iz suprotnog smjera?",
      image: "/exam-images/test-1/image11.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "zbog toga što zadržava smjer kretanja", isCorrect: false },
        {
          title: "zbog toga što nailazi cestom s prednošću prolaska",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q26",
      title: "Što se označuje svjetlosnim znakom na slici?",
      image: "/exam-images/test-1/image13.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "mjesto na kojemu se obavljaju radovi", isCorrect: false },
        { title: "prijelaz ceste preko željezničke pruge", isCorrect: false },
        {
          title:
            "raskrižje na kojemu se prometom upravlja prometnim svjetlima",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q27",
      title:
        "Što označuje žaruljica na instrument ploči sa simbolom kao na slici?",
      image: "/exam-images/test-1/image14.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "temperaturu rashladne tekućine", isCorrect: false },
        { title: "tlak motornog ulja", isCorrect: false },
        { title: "punjenje akumulatora", isCorrect: false },
      ],
    },
    {
      id: "q28",
      title:
        "Što označuje žaruljica na instrument ploči sa simbolom kao na slici?",
      image: "/exam-images/test-1/image16.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "uključena duga svjetla", isCorrect: false },
        { title: "uključena prednja svjetla za maglu", isCorrect: false },
        { title: "uključena kratka svjetla za maglu", isCorrect: false },
      ],
    },
    {
      id: "q29",
      title: "Kolika je najmanja dopuštena dubina utora guma?",
      type: "NUMBER",
      points: 1,
      measurementUnit: "mm",
      answers: [{ title: "1.6", isCorrect: true }],
    },
    {
      id: "q30",
      title: "Koja su bitna obilježja vožnje u gradu?",
      image: "/exam-images/test-1/image17.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "mala količina ispušnih plinova od vozila", isCorrect: false },
        { title: "velik broj prometnih znakova", isCorrect: false },
        { title: "različita struktura vozila", isCorrect: false },
      ],
    },
    {
      id: "q31",
      title: "Kako vozač, u situaciji kao na slici, može skrenuti udesno?",
      image: "/exam-images/test-1/image19.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "vozeći prometnom trakom uz desni rub kolnika",
          isCorrect: false,
        },
        {
          title:
            "prestrojavanjem u srednju prometnu traku i iz nje obaviti skretanje",
          isCorrect: false,
        },
        {
          title:
            "prestrojavanjem u krajnju lijevu prometnu traku i iz nje obaviti skretanje",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q32",
      title:
        "Na kojim se mjestima u prometu na cesti izvan naselja vozač ne smije vozilom zaustaviti?",
      image: "/exam-images/test-1/image20.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title:
            "na mjestima gdje bi položajem svoga vozila ugrožavao odvijanje prometa",
          isCorrect: false,
        },
        {
          title:
            "na mjestima gdje bi položajem svoga vozila ometao odvijanje prometa",
          isCorrect: false,
        },
        {
          title:
            "na mjestima gdje bi položajem svoga vozila poboljšao sigurnost prometa",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q33",
      title: "Što karakterizira vožnju izvan naselja?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "vožnja u kolonama i brojna pretjecanja", isCorrect: false },
        { title: "brojna i različita raskrižja", isCorrect: false },
        { title: "veće brzine vožnje", isCorrect: false },
      ],
    },
    {
      id: "q34",
      title: "Koji su najčešći uzroci događanja prometnih nesreća?",
      image: "/exam-images/test-1/image21.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "nedostatno vozačko iskustvo", isCorrect: false },
        { title: "vožnja neprilagođenom brzinom", isCorrect: false },
        { title: "vožnja pod utjecajem alkohola i droge", isCorrect: false },
        {
          title: "vožnja brzinom prilagođenom uvjetima vožnje",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q35",
      title:
        "Koji su najčešći razlozi događanja prometnih nesreća nalijetanjem na vozilo koje na cesti usporava i skreće?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "pogrešna procjena brzine vozila koje usporava",
          isCorrect: false,
        },
        { title: "vožnja na premalom razmaku iza vozila", isCorrect: false },
        { title: "vožnja na prevelikom razmaku iza vozila", isCorrect: false },
      ],
    },
    {
      id: "q36",
      title:
        "Što je dužan učiniti vozač vozila koje se kreće brzinom manjom od najveće dopuštene na cesti ili dijelu ceste, pa se zbog toga iza njega stvori kolona vozila?",
      image: "/exam-images/test-1/image22.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "gledati kako ga vozila pretječu", isCorrect: false },
        {
          title:
            "na prvom pogodnom mjestu isključiti se iz prometa i propustiti kolonu",
          isCorrect: false,
        },
        {
          title: "voziti što dulje sporo, kako bi se stvorila veća kolona",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q37",
      title: "Kako ćete postupiti u ovoj situaciji?",
      image: "/exam-images/test-1/image23.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "pogled usmjeriti prema sredini kolnika", isCorrect: false },
        {
          title: "pogled usmjeriti prema desnom rubu kolnika",
          isCorrect: false,
        },
        { title: "smanjiti brzinu vožnje", isCorrect: false },
      ],
    },
    {
      id: "q38",
      title:
        "Vozite po magli. Koja svjetla za osvjetljavanje ceste morate koristiti?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        { title: "svjetla za maglu ili kratka svjetla", isCorrect: false },
        { title: "prednja pozicijska svjetla", isCorrect: false },
        { title: "duga svjetla", isCorrect: false },
      ],
    },
  ],
};

export const EXAMS: Exam[] = [
  PREDISPITNI_TEST_1,
  {
    id: "prva-pomoc",
    slug: "prva-pomoc",
    title: "Prva pomoć — osnovni ispit",
    description:
      "Postupanje na mjestu nesreće, pružanje prve pomoći ozlijeđenima, pozivanje hitne službe.",
    category: "Prva pomoć",
    pointsToPass: 6,
    initialTimeMinutes: 12,
    validationMode: "instant",
    questions: [
      {
        id: "q1",
        title: "Koji je broj jedinstvenog europskog broja za hitne službe?",
        type: "NUMBER",
        points: 2,
        answers: [{ title: "112", isCorrect: true }],
      },
      {
        id: "q2",
        title: "Što je PRVO što treba učiniti na mjestu prometne nesreće?",
        type: "CHECKBOX",
        points: 2,
        isElimination: true,
        answers: [
          { title: "Osigurati mjesto nesreće", isCorrect: true },
          { title: "Pomaknuti ozlijeđene s ceste", isCorrect: false },
          { title: "Pozvati obitelj ozlijeđenog", isCorrect: false },
        ],
      },
      {
        id: "q3",
        title: "Koje su pravilne kompresije pri reanimaciji odrasle osobe?",
        type: "CHECKBOX",
        points: 3,
        answers: [
          { title: "30 kompresija, 2 udaha", isCorrect: true },
          { title: "15 kompresija, 1 udah", isCorrect: false },
          { title: "10 kompresija, 5 udaha", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "sigurnost-prometa",
    slug: "sigurnost-prometa",
    title: "Sigurnost prometa",
    description:
      "Provjera znanja o sigurnoj vožnji, opremi vozila i ponašanju u rizičnim situacijama.",
    category: "Sigurnost",
    pointsToPass: 5,
    initialTimeMinutes: 10,
    validationMode: "end",
    questions: [
      {
        id: "q1",
        title: "Sigurnosni pojas u osobnom automobilu obavezni su koristiti:",
        type: "CHECKBOX",
        points: 2,
        answers: [
          { title: "Samo vozač", isCorrect: false },
          { title: "Vozač i suvozač", isCorrect: false },
          { title: "Svi putnici", isCorrect: true },
        ],
      },
      {
        id: "q2",
        title:
          "Najmanja dubina utora gume na osobnom automobilu (u milimetrima) iznosi:",
        type: "NUMBER",
        points: 2,
        measurementUnit: "mm",
        answers: [{ title: "1.6", isCorrect: true }],
      },
      {
        id: "q3",
        title:
          "Što od navedenog je obvezna oprema u osobnom automobilu? (više točnih)",
        type: "CHECKBOX",
        points: 3,
        answers: [
          { title: "Sigurnosni prsluk", isCorrect: true },
          { title: "Sigurnosni trokut", isCorrect: true },
          { title: "Komplet prve pomoći", isCorrect: true },
          { title: "Termo deka", isCorrect: false },
        ],
      },
    ],
  },
];

export function getExamBySlug(slug: string): Exam | undefined {
  return EXAMS.find((e) => e.slug === slug);
}

export function getAllExams(): Exam[] {
  return EXAMS;
}
