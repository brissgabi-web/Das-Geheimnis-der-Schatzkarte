import { StationData } from '../types/game';

export const MODAL_VERB_CHEAT_SHEET = [
  {
    infinitive: 'können',
    meaningHu: 'tud, képes valamire, -hat/-het',
    forms: {
      ich: 'kann',
      du: 'kannst',
      er_sie_es: 'kann',
      wir: 'können',
      ihr: 'könnt',
      sie_Sie: 'können',
    },
    note: 'Tőhangváltás E/1, E/2, E/3-ban: ö → a, nincs rag E/1 és E/3-ban!'
  },
  {
    infinitive: 'müssen',
    meaningHu: 'kell, szükséges, muszáj',
    forms: {
      ich: 'muss',
      du: 'musst',
      er_sie_es: 'muss',
      wir: 'müssen',
      ihr: 'müsst',
      sie_Sie: 'müssen',
    },
    note: 'Tőhangváltás E/1, E/2, E/3-ban: ü → u, nincs rag E/1 és E/3-ban!'
  },
  {
    infinitive: 'dürfen',
    meaningHu: 'szabad, engedélye van rá',
    forms: {
      ich: 'darf',
      du: 'darfst',
      er_sie_es: 'darf',
      wir: 'dürfen',
      ihr: 'dürft',
      sie_Sie: 'dürfen',
    },
    note: 'Tőhangváltás E/1, E/2, E/3-ban: ü → a, nincs rag E/1 és E/3-ban!'
  },
  {
    infinitive: 'sollen',
    meaningHu: 'kellene / kérésre vagy szabály szerint kell',
    forms: {
      ich: 'soll',
      du: 'sollst',
      er_sie_es: 'soll',
      wir: 'sollen',
      ihr: 'sollt',
      sie_Sie: 'sollen',
    },
    note: 'Nincs tőhangváltás! Nincs személyrag E/1 és E/3-ban!'
  },
  {
    infinitive: 'wollen',
    meaningHu: 'akar, szeretne, szándékozik',
    forms: {
      ich: 'will',
      du: 'willst',
      er_sie_es: 'will',
      wir: 'wollen',
      ihr: 'wollt',
      sie_Sie: 'wollen',
    },
    note: 'Tőhangváltás E/1, E/2, E/3-ban: o → i, nincs rag E/1 és E/3-ban!'
  }
];

export const STATIONS_DATA: StationData[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. ÁLLOMÁS – A TITOKZATOS ISKOLATÁSKA
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    titleHu: 'A titokzatos iskolatáska',
    subtitleHu: '1. állomás',
    themeDe: 'Névelők (Artikel: ein, eine, einen, der, die, das, den)',
    iconName: 'backpack',
    mapPieceName: 'Az Iskolatáska Térképrészlete',
    mapLocationName: 'Névelők kapuja',
    mapCoords: { x: 14.8, y: 23.5 },
    descriptionHu: 'A padláson egy poros iskolatáskára bukkantál. A benne rejlő titkos térképdarabhoz helyesen kell kiválasztanod az iskolai eszközök névelőit!',
    instructionsGlobalHu: 'Egészítsd ki a mondatot a megfelelő névelővel! A mondat jelentéséhez több helyes névelő is illeszkedhet.',
    questions: [
      {
        id: 'st1_q1',
        type: 'article-choice',
        instructionHu: 'Egészítsd ki a mondatot a megfelelő névelővel!',
        questionDe: 'Ich brauche ___ Bleistift.',
        sentenceWithBlank: 'Ich brauche ___ Bleistift.',
        options: ['ein', 'eine', 'einen', 'der', 'die', 'das', 'den'],
        acceptedAnswers: ['einen', 'den'],
        explanationHu: 'A Bleistift hímnemű főnév (der Bleistift). A "brauchen" ige tárgyesetet (Akkusativ) vonz: határozatlan névelővel "einen Bleistift", határozott névelővel "den Bleistift".'
      },
      {
        id: 'st1_q2',
        type: 'article-choice',
        instructionHu: 'Egészítsd ki a mondatot a megfelelő névelővel!',
        questionDe: 'Das ist ___ Schere.',
        sentenceWithBlank: 'Das ist ___ Schere.',
        options: ['ein', 'eine', 'einen', 'der', 'die', 'das', 'den'],
        acceptedAnswers: ['eine', 'die'],
        explanationHu: 'A Schere nőnemű főnév (die Schere). A "Das ist..." szerkezet után alanyeset (Nominativ) áll: határozatlan névelővel "eine Schere", határozottal "die Schere".'
      },
      {
        id: 'st1_q3',
        type: 'article-choice',
        instructionHu: 'Egészítsd ki a mondatot a megfelelő névelővel!',
        questionDe: 'Lara hat ___ Heft.',
        sentenceWithBlank: 'Lara hat ___ Heft.',
        options: ['ein', 'eine', 'einen', 'der', 'die', 'das', 'den'],
        acceptedAnswers: ['ein', 'das'],
        explanationHu: 'A Heft semlegesnemű főnév (das Heft). A "haben" ige után semlegesnemben a tárgyeset megegyezik az alanyesettel: "ein Heft" vagy "das Heft".'
      },
      {
        id: 'st1_q4',
        type: 'article-choice',
        instructionHu: 'Egészítsd ki a mondatot a megfelelő névelővel!',
        questionDe: 'Ich suche ___ Kugelschreiber.',
        sentenceWithBlank: 'Ich suche ___ Kugelschreiber.',
        options: ['ein', 'eine', 'einen', 'der', 'die', 'das', 'den'],
        acceptedAnswers: ['einen', 'den'],
        explanationHu: 'A Kugelschreiber hímnemű (der Kugelschreiber). A "suchen" ige tárgyesetet (Akkusativ) vonz: "einen Kugelschreiber" vagy "den Kugelschreiber".'
      },
      {
        id: 'st1_q5',
        type: 'article-choice',
        instructionHu: 'Egészítsd ki a mondatot a megfelelő névelővel!',
        questionDe: '___ Computer ist neu.',
        sentenceWithBlank: '___ Computer ist neu.',
        options: ['ein', 'eine', 'einen', 'der', 'die', 'das', 'den'],
        acceptedAnswers: ['der'],
        explanationHu: 'A Computer hímnemű (der Computer), és a mondat alanyaként alanyesetben (Nominativ) áll határozott formában: "der Computer ist neu".'
      },
      {
        id: 'st1_q6',
        type: 'article-choice',
        instructionHu: 'Egészítsd ki a mondatot a megfelelő névelővel!',
        questionDe: 'Wo ist ___ Tafel?',
        sentenceWithBlank: 'Wo ist ___ Tafel?',
        options: ['ein', 'eine', 'einen', 'der', 'die', 'das', 'den'],
        acceptedAnswers: ['die'],
        explanationHu: 'A Tafel (iskolai tábla) nőnemű főnév (die Tafel). A létezést kifejező kérdésben a tábla határozott és alanyesetben van: "Wo ist die Tafel?".'
      },
      {
        id: 'st1_q7',
        type: 'article-choice',
        instructionHu: 'Egészítsd ki a mondatot a megfelelő névelővel!',
        questionDe: 'Ich brauche ___ Lineal.',
        sentenceWithBlank: 'Ich brauche ___ Lineal.',
        options: ['ein', 'eine', 'einen', 'der', 'die', 'das', 'den'],
        acceptedAnswers: ['ein', 'das'],
        explanationHu: 'A Lineal semlegesnemű főnév (das Lineal). A "brauchen" ige tárgyesetet vonz, semlegesnemben a tárgyeset alakja: "ein Lineal" vagy "das Lineal".'
      },
      {
        id: 'st1_q8',
        type: 'article-choice',
        instructionHu: 'Egészítsd ki a mondatot a megfelelő névelővel!',
        questionDe: 'Suchst du ___ Bleistift?',
        sentenceWithBlank: 'Suchst du ___ Bleistift?',
        options: ['ein', 'eine', 'einen', 'der', 'die', 'das', 'den'],
        acceptedAnswers: ['einen', 'den'],
        explanationHu: 'A Bleistift hímnemű főnév, itt a kérdés tárgyaként tárgyesetben (Akkusativ) áll: "einen" vagy "den".'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 2. ÁLLOMÁS – AZ ELVESZETT ÓRAREND
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    titleHu: 'Az elveszett órarend',
    subtitleHu: '2. állomás',
    themeDe: 'A hét napjai és tantárgyak (Wochentage und Schulfächer)',
    iconName: 'calendar',
    mapPieceName: 'Az Órarend Térképrészlete',
    mapLocationName: 'Napok ösvénye',
    mapCoords: { x: 36.9, y: 21.0 },
    descriptionHu: 'A folyosó végén a földön egy széttépett órarend lapjai hevernek. Rakd össze a napokat és párosítsd a tantárgyakat a második térképdarabért!',
    instructionsGlobalHu: 'Oldd meg a hét napjait visszaállító feladványokat, majd találd ki a leírásokhoz tartozó tantárgyakat!',
    questions: [
      // A) A hét napjai
      {
        id: 'st2_q1',
        type: 'anagram-input',
        instructionHu: 'A térképen összekeveredtek a betűk. Írd be a hét napjának helyes német nevét!',
        questionDe: 'GATNOM',
        scrambledText: 'GATNOM',
        acceptedAnswers: ['Montag'],
        hint: 'A hét első tanítási napja (hétfő).',
        explanationHu: 'GATNOM összekevert betűiből a helyes német napnév: Montag (hétfő).'
      },
      {
        id: 'st2_q2',
        type: 'anagram-input',
        instructionHu: 'A térképen összekeveredtek a betűk. Írd be a hét napjának helyes német nevét!',
        questionDe: 'GATNEIDS',
        scrambledText: 'GATNEIDS',
        acceptedAnswers: ['Dienstag'],
        hint: 'A hét második napja (kedd).',
        explanationHu: 'GATNEIDS összekevert betűiből a helyes nap: Dienstag (kedd).'
      },
      {
        id: 'st2_q3',
        type: 'anagram-input',
        instructionHu: 'A térképen összekeveredtek a betűk. Írd be a hét napjának helyes német nevét!',
        questionDe: 'WOTMITCH',
        scrambledText: 'WOTMITCH',
        acceptedAnswers: ['Mittwoch'],
        hint: 'A hét közepe (szerda - a "hét közepe" szó szerint).',
        explanationHu: 'WOTMITCH összekevert betűiből a helyes nap: Mittwoch (szerda, Mitte + Woche).'
      },
      {
        id: 'st2_q4',
        type: 'anagram-input',
        instructionHu: 'A térképen összekeveredtek a betűk. Írd be a hét napjának helyes német nevét!',
        questionDe: 'GATSRENOND',
        scrambledText: 'GATSRENOND',
        acceptedAnswers: ['Donnerstag'],
        hint: 'A hét negyedik napja (csütörtök).',
        explanationHu: 'GATSRENOND összekevert betűiből a helyes nap: Donnerstag (csütörtök).'
      },
      {
        id: 'st2_q5',
        type: 'anagram-input',
        instructionHu: 'A térképen összekeveredtek a betűk. Írd be a hét napjának helyes német nevét!',
        questionDe: 'GATIREF',
        scrambledText: 'GATIREF',
        acceptedAnswers: ['Freitag'],
        hint: 'A hét ötödik, várva várt napja (péntek).',
        explanationHu: 'GATIREF összekevert betűiből a helyes nap: Freitag (péntek).'
      },
      {
        id: 'st2_q6',
        type: 'anagram-input',
        instructionHu: 'A térképen összekeveredtek a betűk. Írd be a hét napjának helyes német nevét!',
        questionDe: 'GATSAMS',
        scrambledText: 'GATSAMS',
        acceptedAnswers: ['Samstag'],
        hint: 'A hétvége első pihenőnapja (szombat).',
        explanationHu: 'GATSAMS összekevert betűiből a helyes nap: Samstag (szombat).'
      },
      {
        id: 'st2_q7',
        type: 'anagram-input',
        instructionHu: 'A térképen összekeveredtek a betűk. Írd be a hét napjának helyes német nevét!',
        questionDe: 'GATNNOS',
        scrambledText: 'GATNNOS',
        acceptedAnswers: ['Sonntag'],
        hint: 'A vasárnap (a nap napja: Sonne + Tag).',
        explanationHu: 'GATNNOS összekevert betűiből a helyes nap: Sonntag (vasárnap).'
      },
      // B) Tantárgyak
      {
        id: 'st2_q8',
        type: 'single-choice',
        instructionHu: 'Melyik tantárgyra illik az állítás? Válaszd ki a megfelelőt!',
        questionDe: 'Wir rechnen.',
        options: ['Deutsch', 'Mathematik', 'Sport', 'Musik', 'Biologie'],
        correctAnswer: 'Mathematik',
        contextHu: 'rechnen = számolni',
        explanationHu: '"Wir rechnen." = Számolunk. Ez a Mathematik (matematika) órára jellemző.'
      },
      {
        id: 'st2_q9',
        type: 'single-choice',
        instructionHu: 'Melyik tantárgyra illik az állítás? Válaszd ki a megfelelőt!',
        questionDe: 'Wir spielen Fußball.',
        options: ['Deutsch', 'Mathematik', 'Sport', 'Musik', 'Biologie'],
        correctAnswer: 'Sport',
        contextHu: 'Fußball spielen = focizni',
        explanationHu: '"Wir spielen Fußball." = Focizunk. Ez a Sport (testnevelés) órához illik.'
      },
      {
        id: 'st2_q10',
        type: 'single-choice',
        instructionHu: 'Melyik tantárgyra illik az állítás? Válaszd ki a megfelelőt!',
        questionDe: 'Wir lernen über Tiere und Pflanzen.',
        options: ['Deutsch', 'Mathematik', 'Sport', 'Musik', 'Biologie'],
        correctAnswer: 'Biologie',
        contextHu: 'Tiere und Pflanzen = állatok és növények',
        explanationHu: '"Wir lernen über Tiere und Pflanzen." = Állatokról és növényekről tanulunk. Ez a Biologie (biológia) tantárgy.'
      },
      {
        id: 'st2_q11',
        type: 'single-choice',
        instructionHu: 'Melyik tantárgyra illik az állítás? Válaszd ki a megfelelőt!',
        questionDe: 'Wir lesen deutsche Texte.',
        options: ['Deutsch', 'Mathematik', 'Sport', 'Musik', 'Biologie'],
        correctAnswer: 'Deutsch',
        contextHu: 'deutsche Texte = német szövegek',
        explanationHu: '"Wir lesen deutsche Texte." = Német szövegeket olvasunk. Ez természetesen a Deutsch (német nyelv) tantárgy.'
      },
      {
        id: 'st2_q12',
        type: 'single-choice',
        instructionHu: 'Melyik tantárgyra illik az állítás? Válaszd ki a megfelelőt!',
        questionDe: 'Wir singen und spielen Instrumente.',
        options: ['Deutsch', 'Mathematik', 'Sport', 'Musik', 'Biologie'],
        correctAnswer: 'Musik',
        contextHu: 'singen = énekelni, Instrumente = hangszerek',
        explanationHu: '"Wir singen und spielen Instrumente." = Éneklünk és hangszereken játszunk. Ez a Musik (ének-zene) óra.'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 3. ÁLLOMÁS – AZ IGÉK BARLANGJA
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    titleHu: 'Az igék barlangja',
    subtitleHu: '3. állomás',
    themeDe: 'Módbeli segédigék ragozása és jelentése (Modalverben)',
    iconName: 'mountain',
    mapPieceName: 'A Barlang Térképrészlete',
    mapLocationName: 'Segédigék tornya',
    mapCoords: { x: 64.0, y: 23.5 },
    descriptionHu: 'A hegy gyomrában egy kőkapu áll. A barlang kapuját a módbeli segédigék nyitják: mutasd meg, hogy ismered a jelentésüket és ragozásukat!',
    instructionsGlobalHu: 'A barlang kapuját a módbeli segédigék nyitják. Gyakorold a jelentésüket és a ragozásukat! (Használhatod a jobb felső "Puska" gombot segítségül.)',
    questions: [
      // A) Az öt ige jelentése
      {
        id: 'st3_q1',
        type: 'single-choice',
        instructionHu: 'Mi a megadott német módbeli segédige magyar jelentése?',
        questionDe: 'können',
        options: ['tud, képes valamire', 'kell, szükséges', 'szabad, engedélye van rá', 'akar, szeretne'],
        correctAnswer: 'tud, képes valamire',
        explanationHu: 'A "können" jelentése: tud, képes valamire, -hat/-het (fizikai vagy szellemi képesség, lehetőség).'
      },
      {
        id: 'st3_q2',
        type: 'single-choice',
        instructionHu: 'Mi a megadott német módbeli segédige magyar jelentése?',
        questionDe: 'müssen',
        options: ['kell, szükséges', 'tud, képes rá', 'szabad, engedélye van', 'kellene'],
        correctAnswer: 'kell, szükséges',
        explanationHu: 'A "müssen" jelentése: kell, szükséges, muszáj (külső vagy belső kényszer, elengedhetetlen dolog).'
      },
      {
        id: 'st3_q3',
        type: 'single-choice',
        instructionHu: 'Mi a megadott német módbeli segédige magyar jelentése?',
        questionDe: 'dürfen',
        options: ['szabad, engedélye van rá', 'kell, muszáj', 'akar, szeretne', 'képes rá'],
        correctAnswer: 'szabad, engedélye van rá',
        explanationHu: 'A "dürfen" jelentése: szabad, engedélye van rá. (Tagadva: "nicht dürfen" = tilos!).'
      },
      {
        id: 'st3_q4',
        type: 'single-choice',
        instructionHu: 'Mi a megadott német módbeli segédige magyar jelentése?',
        questionDe: 'sollen',
        options: [
          'kellene / valakinek a kérésére vagy előírása szerint kell',
          'tud, képes rá',
          'szabad, engedélye van',
          'akar, kíván'
        ],
        correctAnswer: 'kellene / valakinek a kérésére vagy előírása szerint kell',
        explanationHu: 'A "sollen" jelentése: kellene, kötelesség, feladat (más kérésére, orvos tanácsára vagy előírás szerint).'
      },
      {
        id: 'st3_q5',
        type: 'single-choice',
        instructionHu: 'Mi a megadott német módbeli segédige magyar jelentése?',
        questionDe: 'wollen',
        options: ['akar, szeretne', 'kell, szükséges', 'szabad', 'tud'],
        correctAnswer: 'akar, szeretne',
        explanationHu: 'A "wollen" jelentése: akar, szándékozik, szeretne.'
      },
      // B) Öt ragozási kérdés
      {
        id: 'st3_q6',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a megadott személyhez és igéhez tartozó helyesen ragozott alakot!',
        questionDe: 'ich + können',
        options: ['kann', 'könne', 'kannst', 'könnt'],
        correctAnswer: 'kann',
        explanationHu: 'A können ragozása E/1-ben tőhangváltós és nincs személyragja: ich kann.'
      },
      {
        id: 'st3_q7',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a megadott személyhez és igéhez tartozó helyesen ragozott alakot!',
        questionDe: 'du + müssen',
        options: ['musst', 'müsst', 'muss', 'musste'],
        correctAnswer: 'musst',
        explanationHu: 'A müssen ragozása E/2-ben: ü → u tőhangváltás és -st személyrag: du musst.'
      },
      {
        id: 'st3_q8',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a megadott személyhez és igéhez tartozó helyesen ragozott alakot!',
        questionDe: 'er + dürfen',
        options: ['darf', 'dürft', 'darft', 'dürfen'],
        correctAnswer: 'darf',
        explanationHu: 'A dürfen ragozása E/3-ban: ü → a tőhangváltás, és E/1-hez hasonlóan nincs személyragja: er darf.'
      },
      {
        id: 'st3_q9',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a megadott személyhez és igéhez tartozó helyesen ragozott alakot!',
        questionDe: 'wir + sollen',
        options: ['sollen', 'sollt', 'sollem', 'sollst'],
        correctAnswer: 'sollen',
        explanationHu: 'Többes szám 1. személyben (wir) a módbeli segédigék visszakapják a főnévi igenév alakját: wir sollen.'
      },
      {
        id: 'st3_q10',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a megadott személyhez és igéhez tartozó helyesen ragozott alakot!',
        questionDe: 'ihr + wollen',
        options: ['wollt', 'willt', 'wollen', 'wöllet'],
        correctAnswer: 'wollt',
        explanationHu: 'Többes szám 2. személyben (ihr) a tőhang változatlan, és a rag -t: ihr wollt.'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 4. ÁLLOMÁS – A SEGÉDIGÉK HÍDJA
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    titleHu: 'A segédigék hídja',
    subtitleHu: '4. állomás',
    themeDe: 'Módbeli segédigék a mondatban',
    iconName: 'bridge',
    mapPieceName: 'A Híd Térképrészlete',
    mapLocationName: 'Jelentések hídja',
    mapCoords: { x: 83.8, y: 48.0 },
    descriptionHu: 'Egy vad hegyi folyón vezet át a függőhíd. Minden deszka akkor szilárdul meg, ha a mondatba illő helyes igealakot választod!',
    instructionsGlobalHu: 'Válaszd ki a zárójelben megadott ige helyesen ragozott alakját!',
    questions: [
      {
        id: 'st4_q1',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a zárójelben megadott ige helyesen ragozott alakját!',
        questionDe: 'Ich ___ heute für den Test lernen. (müssen)',
        targetVerbInfinitive: 'müssen',
        options: ['muss', 'musst', 'müssen', 'müsst'],
        correctAnswer: 'muss',
        explanationHu: 'Az alany az "Ich" (E/1). A müssen alakja E/1-ben: ich muss.'
      },
      {
        id: 'st4_q2',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a zárójelben megadott ige helyesen ragozott alakját!',
        questionDe: 'Anna ___ sehr gut Klavier spielen. (können)',
        targetVerbInfinitive: 'können',
        options: ['kann', 'kannst', 'können', 'könnt'],
        correctAnswer: 'kann',
        explanationHu: 'Anna harmadik személyben van (sie, E/3). A können E/3 alakja rag nélkül: Anna kann.'
      },
      {
        id: 'st4_q3',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a zárójelben megadott ige helyesen ragozott alakját!',
        questionDe: 'Wir ___ am Samstag ins Kino gehen. (wollen)',
        targetVerbInfinitive: 'wollen',
        options: ['wollen', 'will', 'willst', 'wollt'],
        correctAnswer: 'wollen',
        explanationHu: 'Az alany a "Wir" (T/1). A wollen ragozása T/1-ben megegyezik az infinitivvel: wir wollen.'
      },
      {
        id: 'st4_q4',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a zárójelben megadott ige helyesen ragozott alakját!',
        questionDe: 'Die Schüler ___ im Unterricht nicht telefonieren. (dürfen)',
        targetVerbInfinitive: 'dürfen',
        options: ['dürfen', 'darf', 'darfst', 'dürft'],
        correctAnswer: 'dürfen',
        explanationHu: 'A "Die Schüler" többes szám harmadik személyű alany (sie, T/3), ezért az alak: dürfen.'
      },
      {
        id: 'st4_q5',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a zárójelben megadott ige helyesen ragozott alakját!',
        questionDe: 'Du ___ deine Hausaufgaben machen. (sollen)',
        targetVerbInfinitive: 'sollen',
        options: ['sollst', 'soll', 'sollt', 'sollen'],
        correctAnswer: 'sollst',
        explanationHu: 'Az alany a "Du" (E/2). A sollen alakja E/2-ben: du sollst.'
      },
      {
        id: 'st4_q6',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a zárójelben megadott ige helyesen ragozott alakját!',
        questionDe: '___ ihr am Mittwoch in den Club gehen? (wollen)',
        targetVerbInfinitive: 'wollen',
        options: ['Wollt', 'Will', 'Willst', 'Wollen'],
        correctAnswer: 'Wollt',
        explanationHu: 'Az alany az "ihr" (T/2). A wollen alakja T/2-ben: Wollt ihr...?'
      },
      {
        id: 'st4_q7',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a zárójelben megadott ige helyesen ragozott alakját!',
        questionDe: 'Paul ___ heute seiner Mutter helfen. (müssen)',
        targetVerbInfinitive: 'müssen',
        options: ['muss', 'musst', 'müssen', 'müsst'],
        correctAnswer: 'muss',
        explanationHu: 'Paul egyes szám harmadik személy (er, E/3). A müssen alakja E/3-ban: Paul muss.'
      },
      {
        id: 'st4_q8',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a zárójelben megadott ige helyesen ragozott alakját!',
        questionDe: 'Meine Freunde ___ am Wochenende Fußball spielen. (wollen)',
        targetVerbInfinitive: 'wollen',
        options: ['wollen', 'will', 'willst', 'wollt'],
        correctAnswer: 'wollen',
        explanationHu: 'A "Meine Freunde" (a barátaim) többes szám (T/3), ezért az igealak: wollen.'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 5. ÁLLOMÁS – A MONDATOK LABIRINTUSA
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    titleHu: 'A mondatok labirintusa',
    subtitleHu: '5. állomás',
    themeDe: 'Mondatalkotás módbeli segédigékkel (Satzbau mit Modalverben)',
    iconName: 'compass',
    mapPieceName: 'A Labirintus Térképrészlete',
    mapLocationName: 'Mondatok romjai',
    mapCoords: { x: 56.9, y: 53.0 },
    descriptionHu: 'Egy sövény-labirintusba érkeztél. Csak akkor találsz ki, ha a szókártyákból a német szórendnek megfelelően építed fel a mondatokat!',
    instructionsGlobalHu: 'Alkosd meg a német mondatot! A módbeli segédigét ragozd helyesen. Kijelentő mondatban a ragozott ige a második helyen áll, a másik ige pedig a mondat végére kerül. Eldöntendő kérdésben a ragozott ige az első helyen áll.',
    questions: [
      {
        id: 'st5_q1',
        type: 'sentence-builder',
        instructionHu: 'Kattints a szókártyákra a helyes sorrendben! (Mindkét természetes német szórendet elfogadjuk.)',
        questionDe: 'ich / heute / Mathe / lernen / müssen',
        promptTokens: ['ich', 'heute', 'Mathe', 'lernen', 'müssen'],
        wordCards: ['Ich', 'Heute', 'heute', 'ich', 'muss', 'müsst', 'Mathe', 'lernen'],
        acceptedSentences: [
          'Ich muss heute Mathe lernen.',
          'Heute muss ich Mathe lernen.'
        ],
        explanationHu: 'Helyes megoldás: "Ich muss heute Mathe lernen." (vagy "Heute muss ich Mathe lernen."). A ragozott módbeli segédige (muss) a 2. helyen áll, a másik ige (lernen) a mondat végére kerül főnévi igenévben.'
      },
      {
        id: 'st5_q2',
        type: 'sentence-builder',
        instructionHu: 'Kattints a szókártyákra a helyes sorrendben!',
        questionDe: 'Laura / am Samstag / ins Kino / gehen / wollen',
        promptTokens: ['Laura', 'am Samstag', 'ins Kino', 'gehen', 'wollen'],
        wordCards: ['Laura', 'am Samstag', 'Am Samstag', 'will', 'wollt', 'ins Kino', 'gehen'],
        acceptedSentences: [
          'Laura will am Samstag ins Kino gehen.',
          'Am Samstag will Laura ins Kino gehen.'
        ],
        explanationHu: 'Helyes megoldás: "Laura will am Samstag ins Kino gehen." (vagy "Am Samstag will Laura ins Kino gehen."). A ragozott segédige (will) a 2. helyen, a gehen pedig a mondat legvégén áll.'
      },
      {
        id: 'st5_q3',
        type: 'sentence-builder',
        instructionHu: 'Kattints a szókártyákra a helyes sorrendben! Figyelj, ez eldöntendő kérdés!',
        questionDe: 'du / mir / helfen / können / ?',
        promptTokens: ['du', 'mir', 'helfen', 'können', '?'],
        wordCards: ['Kannst', 'kannst', 'du', 'mir', 'helfen', 'könnt', '?'],
        acceptedSentences: [
          'Kannst du mir helfen?'
        ],
        explanationHu: 'Helyes megoldás: "Kannst du mir helfen?". Eldöntendő kérdésben a ragozott ige (Kannst) az 1. helyen áll, a főnévi igenév (helfen) a mondat végére kerül.'
      },
      {
        id: 'st5_q4',
        type: 'sentence-builder',
        instructionHu: 'Kattints a szókártyákra a helyes sorrendben!',
        questionDe: 'wir / im Unterricht / nicht / essen / dürfen',
        promptTokens: ['wir', 'im Unterricht', 'nicht', 'essen', 'dürfen'],
        wordCards: ['Wir', 'im Unterricht', 'Im Unterricht', 'dürfen', 'wir', 'nicht', 'essen', 'darf'],
        acceptedSentences: [
          'Wir dürfen im Unterricht nicht essen.',
          'Im Unterricht dürfen wir nicht essen.'
        ],
        explanationHu: 'Helyes megoldás: "Wir dürfen im Unterricht nicht essen." (vagy "Im Unterricht dürfen wir nicht essen."). A ragozott segédige (dürfen) a 2. helyen, a tiltott cselekvés (essen) a mondat legvégén áll.'
      },
      {
        id: 'st5_q5',
        type: 'sentence-builder',
        instructionHu: 'Kattints a szókártyákra a helyes sorrendben!',
        questionDe: 'Peter / ein Referat / schreiben / sollen',
        promptTokens: ['Peter', 'ein Referat', 'schreiben', 'sollen'],
        wordCards: ['Peter', 'soll', 'sollt', 'ein Referat', 'schreiben'],
        acceptedSentences: [
          'Peter soll ein Referat schreiben.'
        ],
        explanationHu: 'Helyes megoldás: "Peter soll ein Referat schreiben.". Peter (E/3) után az ige "soll" a 2. helyen, a kiselőadás megírása (schreiben) pedig a mondat végén szerepel.'
      },
      {
        id: 'st5_q6',
        type: 'sentence-builder',
        instructionHu: 'Kattints a szókártyákra a helyes sorrendben! Figyelj az eldöntendő kérdés szórendjére!',
        questionDe: 'ihr / am Wochenende / Fußball / spielen / wollen / ?',
        promptTokens: ['ihr', 'am Wochenende', 'Fußball', 'spielen', 'wollen', '?'],
        wordCards: ['Wollt', 'ihr', 'am Wochenende', 'Fußball', 'spielen', 'will', '?'],
        acceptedSentences: [
          'Wollt ihr am Wochenende Fußball spielen?'
        ],
        explanationHu: 'Helyes megoldás: "Wollt ihr am Wochenende Fußball spielen?". A kérdés élén a ragozott ige (Wollt), az alany (ihr), és a mondat zárásaként az igazi cselekvés (spielen) áll.'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 6. ÁLLOMÁS – LENA REJTÉLYES NAPJA
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    titleHu: 'Lena rejtélyes napja',
    subtitleHu: '6. állomás',
    themeDe: 'Olvasott szöveg értése (Leseverstehen)',
    iconName: 'book-open',
    mapPieceName: 'Lena Naplójának Térképrészlete',
    mapLocationName: 'Lena naplója',
    mapCoords: { x: 30.0, y: 63.5 },
    descriptionHu: 'Egy nyitva hagyott naplót találtál a könyvtár asztalán. Olvasd el Lena szerdai napjának leírását, és válaszolj a kérdésekre a 6. darabért!',
    instructionsGlobalHu: 'Olvasd el Lena beszámolóját, majd válaszolj a kérdésekre! A szöveg a feladatok közben is bármikor elolvasható.',
    readingPassageTitleDe: 'Lenas Mittwoch',
    readingPassageDe: `Hallo! Ich heiße Lena und bin 15 Jahre alt. Heute ist Mittwoch. Ich habe sechs Stunden. In der ersten Stunde habe ich Deutsch, dann Mathematik und Englisch. Nach der Pause habe ich Biologie, Sport und Musik.

Am Nachmittag muss ich meine Hausaufgaben machen. Ich soll auch für den Mathetest lernen. Um fünf Uhr will ich meine Freundin Mia treffen. Wir wollen zusammen in ein Café gehen. Aber ich darf nicht lange bleiben, denn morgen muss ich früh aufstehen. Am Abend kann ich noch ein bisschen Musik hören.`,
    questions: [
      // A) Richtig oder falsch?
      {
        id: 'st6_q1',
        type: 'boolean-choice',
        instructionHu: 'Igaz vagy hamis az állítás a szöveg alapján? (Richtig / Falsch)',
        questionDe: 'Heute ist Donnerstag.',
        statementDe: 'Heute ist Donnerstag.',
        correctAnswer: false, // Falsch
        explanationHu: 'Hamis (Falsch). A szövegben ez áll: "Heute ist Mittwoch."'
      },
      {
        id: 'st6_q2',
        type: 'boolean-choice',
        instructionHu: 'Igaz vagy hamis az állítás a szöveg alapján? (Richtig / Falsch)',
        questionDe: 'Lena hat sechs Stunden.',
        statementDe: 'Lena hat sechs Stunden.',
        correctAnswer: true, // Richtig
        explanationHu: 'Igaz (Richtig). A szöveg szerint: "Ich habe sechs Stunden."'
      },
      {
        id: 'st6_q3',
        type: 'boolean-choice',
        instructionHu: 'Igaz vagy hamis az állítás a szöveg alapján? (Richtig / Falsch)',
        questionDe: 'Sie hat heute keinen Sport.',
        statementDe: 'Sie hat heute keinen Sport.',
        correctAnswer: false, // Falsch
        explanationHu: 'Hamis (Falsch). A szünet után Sport órája is van: "Nach der Pause habe ich Biologie, Sport und Musik."'
      },
      {
        id: 'st6_q4',
        type: 'boolean-choice',
        instructionHu: 'Igaz vagy hamis az állítás a szöveg alapján? (Richtig / Falsch)',
        questionDe: 'Am Nachmittag muss sie Hausaufgaben machen.',
        statementDe: 'Am Nachmittag muss sie Hausaufgaben machen.',
        correctAnswer: true, // Richtig
        explanationHu: 'Igaz (Richtig). A szövegben: "Am Nachmittag muss ich meine Hausaufgaben machen."'
      },
      {
        id: 'st6_q5',
        type: 'boolean-choice',
        instructionHu: 'Igaz vagy hamis az állítás a szöveg alapján? (Richtig / Falsch)',
        questionDe: 'Sie will Mia treffen.',
        statementDe: 'Sie will Mia treffen.',
        correctAnswer: true, // Richtig
        explanationHu: 'Igaz (Richtig). Lena ezt írja: "Um fünf Uhr will ich meine Freundin Mia treffen."'
      },
      {
        id: 'st6_q6',
        type: 'boolean-choice',
        instructionHu: 'Igaz vagy hamis az állítás a szöveg alapján? (Richtig / Falsch)',
        questionDe: 'Sie darf lange im Café bleiben.',
        statementDe: 'Sie darf lange im Café bleiben.',
        correctAnswer: false, // Falsch
        explanationHu: 'Hamis (Falsch). A szöveg pontosan ezt mondja: "Aber ich darf nicht lange bleiben, denn morgen muss ich früh aufstehen."'
      },
      // B) Antworte kurz
      {
        id: 'st6_q7',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a helyes választ a szöveg alapján!',
        questionDe: 'Was muss Lena am Nachmittag machen?',
        options: ['Ihre Hausaufgaben.', 'Musik hören.', 'Lange im Café bleiben.', 'Ins Kino gehen.'],
        correctAnswer: 'Ihre Hausaufgaben.',
        explanationHu: 'A szöveg szerint: "Am Nachmittag muss ich meine Hausaufgaben machen."'
      },
      {
        id: 'st6_q8',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a helyes választ a szöveg alapján!',
        questionDe: 'Für welchen Test soll sie lernen?',
        options: ['Für den Mathetest.', 'Für den Biologietest.', 'Für den Deutschtest.', 'Für den Englischtest.'],
        correctAnswer: 'Für den Mathetest.',
        explanationHu: 'A szöveg alapján: "Ich soll auch für den Mathetest lernen."'
      },
      {
        id: 'st6_q9',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a helyes választ a szöveg alapján!',
        questionDe: 'Wen will sie treffen?',
        options: ['Ihre Freundin Mia.', 'Ihren Bruder Paul.', 'Ihre Deutschlehrerin.', 'Ihren Freund Peter.'],
        correctAnswer: 'Ihre Freundin Mia.',
        explanationHu: 'A szöveg szerint barátnőjével találkozik: "Um fünf Uhr will ich meine Freundin Mia treffen."'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 7. ÁLLOMÁS – A TITKOS TALÁLKOZÓ
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    titleHu: 'A titkos találkozó',
    subtitleHu: '7. állomás',
    themeDe: 'Wie geht’s? – kérdések és válaszok (Begrüßung und Befinden)',
    iconName: 'users',
    mapPieceName: 'A Titkos Kulcs Térképrészlete',
    mapLocationName: 'Kincsesöböl',
    mapCoords: { x: 82.9, y: 79.5 },
    descriptionHu: 'A kincshez vezető utolsó kapunál más kincskeresőkkel és a gondnokkal találkozol. Figyelj a tegezésre és a magázásra az utolsó térképdarab megszerzéséhez!',
    instructionsGlobalHu: 'Találkoztál más kincskeresőkkel. Válaszd ki, melyik válasz illik a kérdéshez! Figyelj arra, hogy tegezésről vagy magázásról van szó.',
    questions: [
      {
        id: 'st7_q1',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a beszédhelyzethez illő helyes választ!',
        questionDe: 'Egy barátod ezt kérdezi: „Wie geht’s dir?” Melyik válasz illik hozzá?',
        contextHu: 'Figyeld a tegezést (dir)!',
        options: [
          'Danke, gut. Und dir?',
          'Danke, sehr gut. Und Ihnen?',
          'Nicht so gut, Herr Müller.',
          'Auf Wiedersehen!'
        ],
        correctAnswer: 'Danke, gut. Und dir?',
        explanationHu: 'Mivel a barátod tegezve kérdezte („Wie geht’s dir?”), te is visszategezed: „Danke, gut. Und dir?” Az „Und Ihnen?” magázó forma lenne.'
      },
      {
        id: 'st7_q2',
        type: 'single-choice',
        instructionHu: 'Válaszd ki a beszédhelyzethez illő helyes választ!',
        questionDe: 'Herr Müllernek magázva teszed fel a kérdést: „Wie geht es Ihnen, Herr Müller?” Melyik válasz illik hozzá?',
        contextHu: 'Figyeld a magázást (Ihnen)!',
        options: [
          'Danke, sehr gut. Und Ihnen?',
          'Danke, gut. Und dir?',
          'Tschüss, bis morgen!',
          'Es geht, und du?'
        ],
        correctAnswer: 'Danke, sehr gut. Und Ihnen?',
        explanationHu: 'Herr Müller felnőtt, akivel udvarias, magázó viszonyban vagyunk. Válaszában ő is visszamagáz: „Danke, sehr gut. Und Ihnen?”.'
      },
      {
        id: 'st7_q3',
        type: 'single-choice',
        instructionHu: 'Válaszd ki azt a német kifejezést, amelynek jelentése: „Nem túl jól.”!',
        questionDe: 'Egy barátod kérdezi: „Hallo! Wie geht’s?” Melyik válasz jelentése: „Nem túl jól.”?',
        contextHu: 'Keresd a „Nem túl jól.” jelentésű választ!',
        options: [
          'Nicht so gut.',
          'Sehr gut!',
          'Ausgezeichnet!',
          'Prima!'
        ],
        correctAnswer: 'Nicht so gut.',
        explanationHu: 'A „Nicht so gut.” pontos jelentése: Nem olyan jól / Nem túl jól. A többi lehetőség nagyon pozitív (Sehr gut = nagyon jó, Prima/Ausgezeichnet = kiváló).'
      },
      {
        id: 'st7_q4',
        type: 'single-choice',
        instructionHu: 'Válaszd ki azt a német kifejezést, amelynek jelentése: „Megvagyok.”!',
        questionDe: 'Valaki ezt kérdezi: „Wie geht’s?” Melyik válasz jelentése: „Megvagyok.”?',
        contextHu: 'Keresd a „Megvagyok / Elmegy.” jelentésű választ!',
        options: [
          'Es geht.',
          'Super!',
          'Schlecht!',
          'Guten Tag!'
        ],
        correctAnswer: 'Es geht.',
        explanationHu: 'Az „Es geht.” jelentése: Megvagyok / Elvagyok / Elmegy. A „Super!” jelentése szuper, a „Schlecht!” pedig rossz.'
      }
    ]
  }
];
