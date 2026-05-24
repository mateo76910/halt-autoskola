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
          title: "dio cestovne površine namijenjen u prvom redu za promet vozila, s jednom prometnom trakom ili više prometnih traka",
          isCorrect: true,
        },
        {
          title: "dio cestovne površine namijenjen u prvom redu za promet pješaka, s jednom pješačkom stazom ili više pješačkih staza",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q2",
      title: "Koliko kolničkih traka ima cesta u situaciji kao na slici?",
      image: "/exam-images/test-1/q2.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "jednu",
          isCorrect: false,
        },
        {
          title: "dvije",
          isCorrect: true,
        },
        {
          title: "tri",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q3",
      title: "Na čemu se mora temeljiti ponašanje sudionika u prometu?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "na međusobnom uvažavanju",
          isCorrect: true,
        },
        {
          title: "na agresivnom ponašanju",
          isCorrect: false,
        },
        {
          title: "na partnerskom odnosu",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q4",
      title: "Kojom se cestom kreće vozilo u situaciji kao na slici?",
      image: "/exam-images/test-1/q4.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "brzom cestom",
          isCorrect: false,
        },
        {
          title: "autocestom",
          isCorrect: true,
        },
        {
          title: "cestom namijenjenom isključivo za promet motornih vozila",
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
        {
          title: "koncentracija na vožnju",
          isCorrect: true,
        },
        {
          title: "predviđanje i očekivanje opasnosti",
          isCorrect: true,
        },
        {
          title: "razgovor mobitelom",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q6",
      title: "Čime je određeno značenje prometnog znaka?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "položajem znaka uz cestu",
          isCorrect: false,
        },
        {
          title: "oblikom prometnog znaka",
          isCorrect: true,
        },
        {
          title: "simbolom na prometnom znaku",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q7",
      title: "Gdje se na cesti postavljaju prometni znakovi izričitih naredaba?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "neposredno na mjestima od kojih počinje obveza pridržavanja naredbe izražene znakom",
          isCorrect: true,
        },
        {
          title: "150 do 250 metara prije mjesta od kojeg počinje obveza pridržavanja naredbe izražene znakom",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q8",
      title: "Kako ćete postupiti nakon ovoga prometnog znaka?",
      image: "/exam-images/test-1/q8.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "voziti ravno ili udesno",
          isCorrect: true,
        },
        {
          title: "skrenuti ulijevo",
          isCorrect: false,
        },
        {
          title: "voziti samo ravno",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q9",
      title: "O čemu vozača obavješćuje znak na slici?",
      image: "/exam-images/test-1/q9.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "pružanju cestovnih smjerova",
          isCorrect: false,
        },
        {
          title: "udaljenosti do određenog mjesta",
          isCorrect: true,
        },
        {
          title: "potvrdi smjera kretanja nakon prolaska raskrižja",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q10",
      title: "Kako se najavljuje približavanje vlaka svjetlosnim znakom na slici?",
      image: "/exam-images/test-1/q10.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "izmjenično paljenje dvaju crvenih svjetala",
          isCorrect: true,
        },
        {
          title: "stalno upaljenim crvenim svjetlima",
          isCorrect: false,
        },
        {
          title: "stalno upaljenim crvenim svjetlima i zvučnim znakovima",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q11",
      title: "Što označuje kosa crta na kolniku u situaciji kao na slici?",
      image: "/exam-images/test-1/q11.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "mjesto otvaranja prometne trake za vozila javnog prijevoza putnika",
          isCorrect: true,
        },
        {
          title: "mjesto otvaranja prometne trake za zaustavljanje vozila u nuždi",
          isCorrect: false,
        },
        {
          title: "mjesto otvaranja ulazne trake na brzoj cesti",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q12",
      title: "Što vozaču omogućuje prepoznavanje i izbjegavanje mogućih opasnih situacija tijekom vožnje?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "vožnja sa smanjenom pozornošću",
          isCorrect: false,
        },
        {
          title: "vožnja maksimalno dopuštenom brzinom",
          isCorrect: false,
        },
        {
          title: "pravodobno uočavanje prometne situacije",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q13",
      title: "Pomoću čega vozač procjenjuje brzinu svog vozila?",
      image: "/exam-images/test-1/q13.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "pomoću brzinomjera u vozilu",
          isCorrect: true,
        },
        {
          title: "pomoću vizualnih i slušnih informacija",
          isCorrect: true,
        },
        {
          title: "pomoću kretanja drugih vozila",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q14",
      title: "Kojom prometnom površinom se kreću pješaci na slici?",
      image: "/exam-images/test-1/q14.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "pješačkom stazom",
          isCorrect: false,
        },
        {
          title: "obilježenim pješačkim prijelazom",
          isCorrect: false,
        },
        {
          title: "nogostupom",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q15",
      title: "Što mora učiniti vozač prije započinjanja neke radnje vozilom u prometu?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "uvjeriti se da radnju može obaviti bez opasnosti za druge sudionike u prometu",
          isCorrect: true,
        },
        {
          title: "uvjeriti se da radnju može obaviti uz što manji razmak između vozila",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q16",
      title: "Smijete li se svojim vozilom kretati srednjom prometnom trakom na cesti u situaciji kao na slici?",
      image: "/exam-images/test-1/q16.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "smijete radi pretjecanja vozila koja se kreću sporije",
          isCorrect: true,
        },
        {
          title: "smijete kada se mora zaustaviti zbog kvara na vozilu",
          isCorrect: false,
        },
        {
          title: "ne smijete, jer je ta traka namijenjena samo za spora vozila",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q17",
      title: "Kako se morate ponašati u susretu s vozilima s pravom prednosti prolaska?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "smanjiti brzinu i povećati pozornost prema tim vozilima",
          isCorrect: true,
        },
        {
          title: "omogućiti prolazak tim vozilima",
          isCorrect: true,
        },
        {
          title: "nastaviti vožnju povećanom brzinom",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q18",
      title: "Koliko iznosi najveća dopuštena brzina kretanja vozilo koje vuče drugo neispravno vozilo?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "40 km na sat",
          isCorrect: true,
        },
        {
          title: "50 km na sat",
          isCorrect: false,
        },
        {
          title: "60 km na sat",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q19",
      title: "Kako ćete postupiti kada svojim vozilom ulazite sa ceste bez suvremenoga kolničkog zastora na cestu sa suvremenim kolničkim zastorom i kada ta cesta nije prometnim znakom označena kao cesta s prednošću prolaska?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "propustiti isključivo vozila koja nailaze s desne strane",
          isCorrect: false,
        },
        {
          title: "propustiti sva vozila koja se kreću tom cestom",
          isCorrect: true,
        },
        {
          title: "propustiti vozila koja dolaze isključivo iz suprotnog smjera",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q20",
      title: "Kako ćete postupiti u situaciji kao na slici?",
      image: "/exam-images/test-1/q20.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "propustiti crni automobil",
          isCorrect: false,
        },
        {
          title: "propustiti crveni automobil",
          isCorrect: true,
        },
        {
          title: "voziti prije crnog automobila",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q21",
      title: "Zbog čega morate, u situaciji kao na slici, propustiti vozilo koje nailazi iz suprotnog smjera?",
      image: "/exam-images/test-1/q21.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "zbog toga što zadržava smjer kretanja",
          isCorrect: true,
        },
        {
          title: "zbog toga što nailazi cestom s prednošću prolaska",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q22",
      title: "Kako ćete postupiti ako je na semaforu upaljeno žuto trepteće svjetlo u situaciji kao na slici?",
      image: "/exam-images/test-1/q22.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "propustiti motocikl",
          isCorrect: true,
        },
        {
          title: "propustiti autobus",
          isCorrect: false,
        },
        {
          title: "voziti prije autobusa",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q23",
      title: "Zbog čega morate, u situaciji kao na slici, propustiti motocikl?",
      image: "/exam-images/test-1/q23.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "zbog toga što nailazim na cestu s prednošću prolaska",
          isCorrect: true,
        },
        {
          title: "zbog toga što nailazite s lijeve strane",
          isCorrect: false,
        },
        {
          title: "zbog toga što zadržavate smjer vožnje",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q24",
      title: "S koje se strane, u pravilu, obavlja pretjecanje?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "s lijeve strane",
          isCorrect: true,
        },
        {
          title: "s desne strane",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q25",
      title: "Što se ne smije činiti vozilom ako se vozi cestom na kojoj postoje najmanje dvije prometne trake za promet u istom smjeru i na kojima su kolone vozila u situaciji kao na slici?",
      image: "/exam-images/test-1/q25.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "kretati se lijevom prometnom trakom",
          isCorrect: false,
        },
        {
          title: "kretati se desnom prometnom trakom",
          isCorrect: false,
        },
        {
          title: "prelaziti vozilom iz trake u traku (voziti slalom)",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q26",
      title: "Što se označuje svjetlosnim znakom na slici?",
      image: "/exam-images/test-1/q26.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "mjesto na kojemu se obavljaju radovi",
          isCorrect: false,
        },
        {
          title: "prijelaz ceste preko željezničke pruge",
          isCorrect: true,
        },
        {
          title: "raskrižje na kojemu se prometom upravlja prometnim svjetlima",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q27",
      title: "Što označuje žaruljica na instrument ploči sa simbolom kao na slici?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "temperaturu rashladne tekućine",
          isCorrect: false,
        },
        {
          title: "tlak motornog ulja",
          isCorrect: true,
        },
        {
          title: "punjenje akumulatora",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q28",
      title: "Što označuje žaruljica na instrument ploči sa simbolom kao na slici?",
      image: "/exam-images/test-1/q28.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "uključena duga svjetla",
          isCorrect: false,
        },
        {
          title: "uključena prednja svjetla za maglu",
          isCorrect: true,
        },
        {
          title: "uključena kratka svjetla za maglu",
          isCorrect: false,
        },
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
      image: "/exam-images/test-1/q30.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "mala količina ispušnih plinova od vozila",
          isCorrect: false,
        },
        {
          title: "velik broj prometnih znakova",
          isCorrect: true,
        },
        {
          title: "različita struktura vozila",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q31",
      title: "Kako vozač, u situaciji kao na slici, može skrenuti udesno?",
      image: "/exam-images/test-1/q31.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "vozeći prometnom trakom uz desni rub kolnika",
          isCorrect: true,
        },
        {
          title: "prestrojavanjem u srednju prometnu traku i iz nje obaviti skretanje",
          isCorrect: true,
        },
        {
          title: "prestrojavanjem u krajnju lijevu prometnu traku i iz nje obaviti skretanje",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q32",
      title: "Što karakterizira vožnju izvan naselja?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "vožnja u kolonama i brojna pretjecanja",
          isCorrect: true,
        },
        {
          title: "brojna i različita raskrižja",
          isCorrect: false,
        },
        {
          title: "veće brzine vožnje",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q33",
      title: "Koji su najčešći razlozi događanja prometnih nesreća nalijetanjem na vozilo koje na cesti usporava i skreće?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "pogrešna procjena brzine vozila koje usporava",
          isCorrect: true,
        },
        {
          title: "vožnja na premalom razmaku iza vozila",
          isCorrect: true,
        },
        {
          title: "vožnja na prevelikom razmaku iza vozila",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q34",
      title: "Što je dužan učiniti vozač vozila koje se kreće brzinom manjom od najveće dopuštene na cesti ili dijelu ceste, pa se zbog toga iza njega stvori kolona vozila?",
      image: "/exam-images/test-1/q34.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "gledati kako ga vozila pretječu",
          isCorrect: false,
        },
        {
          title: "na prvom pogodnom mjestu isključiti se iz prometa i propustiti kolonu",
          isCorrect: true,
        },
        {
          title: "voziti što dulje sporo, kako bi se stvorila veća kolona",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q35",
      title: "Na kojim se mjestima u prometu na cesti izvan naselja vozač ne smije vozilom zaustaviti?",
      image: "/exam-images/test-1/q35.jpeg",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "na mjestima gdje bi položajem svoga vozila ugrožavao odvijanje prometa",
          isCorrect: true,
        },
        {
          title: "na mjestima gdje bi položajem svoga vozila ometao odvijanje prometa",
          isCorrect: true,
        },
        {
          title: "na mjestima gdje bi položajem svoga vozila poboljšao sigurnost prometa",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q36",
      title: "Koji su najčešći uzroci događanja prometnih nesreća?",
      image: "/exam-images/test-1/q36.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "nedostatno vozačko iskustvo",
          isCorrect: true,
        },
        {
          title: "vožnja neprilagođenom brzinom",
          isCorrect: true,
        },
        {
          title: "vožnja pod utjecajem alkohola i droge",
          isCorrect: true,
        },
        {
          title: "vožnja brzinom prilagođenom uvjetima vožnje",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q37",
      title: "Kako ćete postupiti u ovoj situaciji?",
      image: "/exam-images/test-1/q37.png",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "pogled usmjeriti prema sredini kolnika",
          isCorrect: false,
        },
        {
          title: "pogled usmjeriti prema desnom rubu kolnika",
          isCorrect: true,
        },
        {
          title: "smanjiti brzinu vožnje",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q38",
      title: "Vozite po magli. Koja svjetla za osvjetljavanje ceste morate koristiti?",
      type: "CHECKBOX",
      points: 1,
      answers: [
        {
          title: "svjetla za maglu ili kratka svjetla",
          isCorrect: true,
        },
        {
          title: "prednja pozicijska svjetla",
          isCorrect: false,
        },
        {
          title: "duga svjetla",
          isCorrect: false,
        },
      ],
    },
  ],
};

export const EXAMS: Exam[] = [PREDISPITNI_TEST_1];

export function getExamBySlug(slug: string): Exam | undefined {
  return EXAMS.find((e) => e.slug === slug);
}

export function getAllExams(): Exam[] {
  return EXAMS;
}
