const langBtn = document.getElementById('lang-btn');
let lang = 'lv';

const translations = {
  lv: {
    title: 'Mājaslapa par mani',
    name: 'Čau, esmu Marija!',
    desc: 'Frontend izstrādātāja, ceļotāja un mūzikas mīļotāja.',
    navAbout: 'Par mani',
    navInterests: 'Intereses',
    navProjects: 'Projekti',
    navTech: 'Tehnoloģijas',
    navTravel: 'Ceļojumi',
    navMusic: 'Mūzika',
    navContact: 'Saziņa',
    navGoals: 'Mērķi',
    aboutTitle: 'Par mani',
    aboutText1: 'Man ir 18 gadi, mācos par programmētāju Rīgā un sapņoju kļūt par promoteri. Man patīk veidot mājaslapas un klausīties mūziku.',
    aboutText2: 'Interesants fakts: es šļupstu uz burta "s", bet tas netraucē rakstīt kodu!',
    interestsTitle: 'Intereses',
    interest1: 'Grāmatu lasīšana',
    interest2: 'Dizains',
    interest3: 'Ceļošana',
    interest4: 'Fotografēšana',
    interest5: 'Spēles: Minecraft, Sims',
    interest6: 'Mūzika',
    projectsTitle: 'Mani projekti',
    project1: 'Spēle par desiņām un suši',
    techTitle: 'Tehnoloģijas',
    travelTitle: 'Ceļojumi',
    travel1: 'Biju: Polija, Lietuva',
    travel2: 'Vēlos apmeklēt: Spānija, Norvēģija, Zviedrija, Somija',
    musicTitle: 'Mīļākā mūzika',
    song1: 'POSHLAYA MOLLY — TMSTS',
    song2: 'NOIZE MC — MAKE SOME NOIZE',
    song3: 'OXXXYMIRON — FATA MORGANA',
    contactTitle: 'Saziņa',
    contactText: 'Raksti uz',
    or: 'vai',
    goalsTitle: 'Mērķi',
    goal1: 'Iemācīties vācu valodu',
    goal2: 'Ceļot vasarā 2025',
    goal3: 'Palaist savu mājaslapu',
    secretBtn: 'Nenospied',
    secretMsg: 'Tu atradi slepeno faktu: es varu dzert kafiju 3 reizes dienā un nejūtos nogurusi ☕'
  },
  en: {
    title: 'Personal Website',
    name: "Hi, I'm Maria!",
    desc: 'Frontend developer, traveler and music lover.',
    navAbout: 'About Me',
    navInterests: 'Interests',
    navProjects: 'Projects',
    navTech: 'Technologies',
    navTravel: 'Travel',
    navMusic: 'Music',
    navContact: 'Contact',
    navGoals: 'Goals',
    aboutTitle: 'About Me',
    aboutText1: "I'm 18, studying programming in Riga and dreaming of becoming a promoter. I like creating websites and listening to music.",
    aboutText2: "Fun fact: I lisp on the letter \"s\", but it doesn't stop me from writing code!",
    interestsTitle: 'Interests',
    interest1: 'Reading books',
    interest2: 'Design',
    interest3: 'Traveling',
    interest4: 'Photography',
    interest5: 'Games: Minecraft, Sims',
    interest6: 'Music',
    projectsTitle: 'My Projects',
    project1: 'Sausage and Sushi Game',
    techTitle: 'Technologies',
    travelTitle: 'Travel',
    travel1: 'Visited: Poland, Lithuania',
    travel2: 'Want to visit: Spain, Norway, Sweden, Finland',
    musicTitle: 'Favourite Music',
    song1: 'POSHLAYA MOLLY — TMSTS',
    song2: 'NOIZE MC — MAKE SOME NOIZE',
    song3: 'OXXXYMIRON — FATA MORGANA',
    contactTitle: 'Contact',
    contactText: 'Write to',
    or: 'or',
    goalsTitle: 'Goals',
    goal1: 'Learn German',
    goal2: 'Travel in summer 2025',
    goal3: 'Launch my website',
    secretBtn: 'Do not press',
    secretMsg: 'You found the secret fact: I can drink coffee 3 times a day and not feel tired ☕'
  }
};

function translatePage() {
  const dict = translations[lang];
  document.title = dict.title;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key]) el.innerText = dict[key];
  });
  langBtn.innerText = lang === 'lv' ? 'English' : 'Latviešu';
}

langBtn.addEventListener('click', () => {
  lang = lang === 'lv' ? 'en' : 'lv';
  translatePage();
});

// Секретная кнопка
document.getElementById('secret-btn').addEventListener('click', () => {
  const msg = document.getElementById('hidden-message');
  msg.style.display = msg.style.display === 'block' ? 'none' : 'block';
});

// Начальный перевод
translatePage();
