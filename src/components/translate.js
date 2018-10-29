
export const translate = (lang) => {
  const polish = [
    "O mnie",
    "Moje projekty",
    "Kontakt",
    "Witam, nazywam się",
    "i jestem front-end developerem", 
    "Stworzę dla Ciebie stronę internetową idealnie dopasowaną do Twoich potrzeb", //5
    "Od kilku lat intensywnie rozwijam swoją programistyczną pasję.",
    "Jestem absolwentem bootcampu prowadzonego przez CodersLab",
    "W swoich projektach uwzględniam wszystkie zaproponowane rozwiązania.",
    "Staram się stale rozwijać, tak aby efekty mojej pracy były coraz lepsze.",
    "W ostatnim czasie miałem okazję poznać React-Native czego efektem jest stworzenie gry", //10
    "Zapraszam do współpracy!",
    "wszelkie prawa zastrzeżone",
    "Gra Memoo",
    "dla Androida",
    "Pobierz plik APK", //15
    "Memoo to gra, w której musisz znaleźć pasujące do siebie pary. Odwracasz jedną płytkę i próbujesz znaleźć drugą pasującą do pierwszej.",
    "Gra posiada 3 poziomy trudności.",
    "Dostępne są 3 języki: polski, angielski oraz chorwacki",
    "Zobacz więcej"
  ];
  const english = [
    "About me",
    "My projects",
    "Contact",
    "Hello, I'm",
    "I'm a front-end developer",
    "I'll create for you a website ideally suited to your expectations", //5
    "I have been developing my programmatic passion for several years.",
    "I'm a graduate of bootcamp run by CodersLab:",
    "In my projects, I take into account all proposed solutions.",
    "I try to constantly develop, so that the results of my work will be better and better.",
    "Recently I had the opportunity to meet React-Native the result is the creation of the game", //10
    "I invite you to cooperation!",
    "all rigths reserved",
    "Memoo game",
    "for Android",
    "Download APK file", // 15
    "Memoo is a game where you need to match pairs of tiles. You turn over one tiles and try to find a matching tile.",
    "The game has 3 levels of difficulty.",
    "There are 3 languages available: Polish, English and Croatian.",
    "See more"
  ]
  const language = (lang === 'polish') ? polish : english;
  return (
    language
  )
}