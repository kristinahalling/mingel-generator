// Datastruktur med innehåll på olika språk och kategorier
const translations = {
    sv: {
        title: "Mingel-generator",
        description: "Behöver du en bra inledningsfras? Klicka på knappen!",
        initialText: "Klicka på knappen för att få en samtalsöppnare!",
        followUpTitle: "Följdfråga",
        followUpInitial: "Klicka på knappen för en relevant följdfråga!",
        button1: "Ge mig en fras!",
        button2: "Ge mig en följdfråga!",
        categories: {
            all: "Alla",
            casual: "Casual",
            professional: "Professionell",
            fun: "Rolig",
            deep: "Djup"
        },
        starters: {
            casual: [
                {
                    fras: "Har du några roliga planer för helgen?",
                    foljdfragor: [
                        "Vad ser du mest fram emot?",
                        "Gör du något sådant ofta?",
                        "Ska du vara med någon speciell?",
                        "Vad brukar du annars göra på helgerna?"
                    ]
                },
                {
                    fras: "Vad är din favoritfilm eller serie just nu?",
                    foljdfragor: [
                        "Vad är det som gör den så bra?",
                        "Hur många gånger har du sett den?",
                        "Vilken karaktär gillar du mest?",
                        "Har du rekommenderat den till någon?"
                    ]
                },
                {
                    fras: "Har du läst någon bra bok på sistone?",
                    foljdfragor: [
                        "Vad handlade den om?",
                        "Vad fick dig att välja just den boken?",
                        "Vilken genre föredrar du?",
                        "Har du någon favorit­författare?"
                    ]
                },
                {
                    fras: "Kaffe eller te? Och varför?",
                    foljdfragor: [
                        "Hur dricker du det helst?",
                        "Hur många koppar dricker du per dag?",
                        "Har du alltid föredragit det?",
                        "Finns det någon speciell sort du älskar?"
                    ]
                },
                {
                    fras: "Vad skulle din drömhelg se ut?",
                    foljdfragor: [
                        "Var skulle du vara?",
                        "Vem skulle du vilja ha med dig?",
                        "Vad skulle du absolut inte göra?",
                        "Har du haft en helg som kommit nära det?"
                    ]
                }
            ],
            professional: [
                {
                    fras: "Vad jobbar du med? Tycker du om det?",
                    foljdfragor: [
                        "Hur hamnade du i den branschen?",
                        "Vad är det roligaste med ditt jobb?",
                        "Vad är den största utmaningen?",
                        "Är det vad du alltid velat göra?"
                    ]
                },
                {
                    fras: "Vad fick dig att komma hit idag?",
                    foljdfragor: [
                        "Hur hörde du talas om detta?",
                        "Vad hoppas du få ut av det?",
                        "Är detta något du gör ofta?",
                        "Har du träffat någon intressant än?"
                    ]
                },
                {
                    fras: "Vad är det mest intressanta du lärt dig nyligen?",
                    foljdfragor: [
                        "Hur kom du i kontakt med det?",
                        "Kommer du använda det till något?",
                        "Vad överraskade dig mest?",
                        "Har du delat det med någon annan?"
                    ]
                },
                {
                    fras: "Om du kunde lära dig en ny färdighet direkt, vad skulle det vara?",
                    foljdfragor: [
                        "Varför just den färdigheten?",
                        "Vad skulle du använda den till?",
                        "Har du försökt lära dig det tidigare?",
                        "Känner du någon som är bra på det?"
                    ]
                }
            ],
            fun: [
                {
                    fras: "Om du kunde ha middag med någon historisk person, vem skulle det vara?",
                    foljdfragor: [
                        "Varför just den personen?",
                        "Vad skulle du vilja fråga hen?",
                        "Vilken tidsperiod tycker du är mest fascinerande?",
                        "Vad tror du personen skulle tycka om vår tid?"
                    ]
                },
                {
                    fras: "Om du kunde bo var som helst i världen, var skulle det vara?",
                    foljdfragor: [
                        "Har du varit där tidigare?",
                        "Vad är det som lockar dig dit?",
                        "Skulle du vilja bo där permanent eller bara ett tag?",
                        "Vad skulle du sakna från där du bor nu?"
                    ]
                },
                {
                    fras: "Vad är det roligaste du gjort den senaste månaden?",
                    foljdfragor: [
                        "Var du med andra eller själv?",
                        "Hade du planerat det eller skedde det spontant?",
                        "Skulle du göra om det?",
                        "Vad gjorde det så roligt?"
                    ]
                },
                {
                    fras: "Om du hade en extra timme varje dag, vad skulle du göra?",
                    foljdfragor: [
                        "Varför just det?",
                        "Vad hindrar dig från att göra det nu?",
                        "Hur länge har du velat göra det?",
                        "Tror du det skulle förändra ditt liv?"
                    ]
                }
            ],
            deep: [
                {
                    fras: "Vad är det bästa som hänt dig den här veckan?",
                    foljdfragor: [
                        "Vad var det som gjorde det så speciellt?",
                        "Hur kändes det?",
                        "Hade du förväntat dig det?",
                        "Vem delade du det med först?"
                    ]
                },
                {
                    fras: "Vad är din största passion i livet?",
                    foljdfragor: [
                        "När upptäckte du den passionen?",
                        "Vad är det som gör det så meningsfullt?",
                        "Hur mycket tid lägger du på det?",
                        "Har du lärt dig något oväntat genom det?"
                    ]
                }
            ]
        }
    },
    en: {
        title: "Conversation Starter",
        description: "Need a great opening line? Click the button!",
        initialText: "Click the button to get a conversation starter!",
        followUpTitle: "Follow-up Question",
        followUpInitial: "Click the button for a relevant follow-up question!",
        button1: "Give me a line!",
        button2: "Give me a follow-up!",
        categories: {
            all: "All",
            casual: "Casual",
            professional: "Professional",
            fun: "Fun",
            deep: "Deep"
        },
        starters: {
            casual: [
                {
                    fras: "Do you have any fun plans for the weekend?",
                    foljdfragor: [
                        "What are you most looking forward to?",
                        "Do you do that kind of thing often?",
                        "Will you be with anyone special?",
                        "What do you usually do on weekends?"
                    ]
                },
                {
                    fras: "What's your favorite movie or series right now?",
                    foljdfragor: [
                        "What makes it so good?",
                        "How many times have you watched it?",
                        "Which character do you like best?",
                        "Have you recommended it to anyone?"
                    ]
                },
                {
                    fras: "Have you read any good books lately?",
                    foljdfragor: [
                        "What was it about?",
                        "What made you choose that book?",
                        "What genre do you prefer?",
                        "Do you have a favorite author?"
                    ]
                },
                {
                    fras: "Coffee or tea? And why?",
                    foljdfragor: [
                        "How do you like it best?",
                        "How many cups do you drink per day?",
                        "Have you always preferred it?",
                        "Is there a special variety you love?"
                    ]
                },
                {
                    fras: "What would your dream weekend look like?",
                    foljdfragor: [
                        "Where would you be?",
                        "Who would you want with you?",
                        "What would you absolutely not do?",
                        "Have you had a weekend that came close?"
                    ]
                }
            ],
            professional: [
                {
                    fras: "What do you do for work? Do you enjoy it?",
                    foljdfragor: [
                        "How did you get into that field?",
                        "What's the most fun part of your job?",
                        "What's the biggest challenge?",
                        "Is it what you always wanted to do?"
                    ]
                },
                {
                    fras: "What brought you here today?",
                    foljdfragor: [
                        "How did you hear about this?",
                        "What do you hope to get out of it?",
                        "Is this something you do often?",
                        "Have you met anyone interesting yet?"
                    ]
                },
                {
                    fras: "What's the most interesting thing you've learned recently?",
                    foljdfragor: [
                        "How did you come across it?",
                        "Will you use it for something?",
                        "What surprised you most?",
                        "Have you shared it with anyone?"
                    ]
                },
                {
                    fras: "If you could learn one new skill instantly, what would it be?",
                    foljdfragor: [
                        "Why that skill specifically?",
                        "What would you use it for?",
                        "Have you tried learning it before?",
                        "Do you know anyone who's good at it?"
                    ]
                }
            ],
            fun: [
                {
                    fras: "If you could have dinner with any historical figure, who would it be?",
                    foljdfragor: [
                        "Why that person specifically?",
                        "What would you want to ask them?",
                        "Which time period fascinates you most?",
                        "What do you think they'd think of our time?"
                    ]
                },
                {
                    fras: "If you could live anywhere in the world, where would it be?",
                    foljdfragor: [
                        "Have you been there before?",
                        "What draws you to that place?",
                        "Would you want to live there permanently or just for a while?",
                        "What would you miss from where you live now?"
                    ]
                },
                {
                    fras: "What's the most fun thing you've done in the past month?",
                    foljdfragor: [
                        "Were you with others or alone?",
                        "Did you plan it or was it spontaneous?",
                        "Would you do it again?",
                        "What made it so fun?"
                    ]
                },
                {
                    fras: "If you had an extra hour every day, what would you do?",
                    foljdfragor: [
                        "Why that specifically?",
                        "What's stopping you from doing it now?",
                        "How long have you wanted to do it?",
                        "Do you think it would change your life?"
                    ]
                }
            ],
            deep: [
                {
                    fras: "What's the best thing that happened to you this week?",
                    foljdfragor: [
                        "What made it so special?",
                        "How did it make you feel?",
                        "Did you expect it?",
                        "Who did you share it with first?"
                    ]
                },
                {
                    fras: "What's your biggest passion in life?",
                    foljdfragor: [
                        "When did you discover that passion?",
                        "What makes it so meaningful?",
                        "How much time do you spend on it?",
                        "Have you learned anything unexpected through it?"
                    ]
                }
            ]
        }
    }
};

// Håll koll på nuvarande språk, kategori, mörkt läge och val
let currentLang = 'sv';
let currentCategory = 'all';
let darkMode = false;
let nuvarandeVal = null;
let history = [];

// Hämta element från HTML
const htmlElement = document.documentElement;
const titleElement = document.getElementById('main-title');
const beskrivningElement = document.getElementById('beskrivning');
const frasElement = document.getElementById('fras');
const knapp = document.getElementById('ny-fras-knapp');
const btnText1 = document.getElementById('btn-text-1');
const foljdfragaElement = document.getElementById('foljdfraga');
const foljdfragaKnapp = document.getElementById('ny-foljdfraga-knapp');
const btnText2 = document.getElementById('btn-text-2');
const followUpTitle = document.getElementById('follow-up-title');
const foljdfragorSektion = document.getElementById('foljdfragor-sektion');
const langSvBtn = document.getElementById('lang-sv');
const langEnBtn = document.getElementById('lang-en');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.querySelector('.dark-mode-icon');
const historyToggleBtn = document.getElementById('history-toggle');
const historyPanel = document.getElementById('history-panel');
const historyList = document.getElementById('history-list');
const historyCount = document.getElementById('history-count');
const clearHistoryBtn = document.getElementById('clear-history');
const historyEmptyMsg = document.getElementById('history-empty-msg');
const historyTitle = document.getElementById('history-title');
const historyToggleText = document.getElementById('history-toggle-text');

// Kategoriknappar
const categoryButtons = {
    all: document.getElementById('cat-all'),
    casual: document.getElementById('cat-casual'),
    professional: document.getElementById('cat-professional'),
    fun: document.getElementById('cat-fun'),
    deep: document.getElementById('cat-deep')
};

const categoryTexts = {
    all: document.getElementById('cat-all-text'),
    casual: document.getElementById('cat-casual-text'),
    professional: document.getElementById('cat-professional-text'),
    fun: document.getElementById('cat-fun-text'),
    deep: document.getElementById('cat-deep-text')
};

// Funktion för att uppdatera UI-text baserat på språk
function updateUIText() {
    const t = translations[currentLang];
    htmlElement.lang = currentLang;
    titleElement.textContent = t.title;
    beskrivningElement.textContent = t.description;
    frasElement.textContent = t.initialText;
    followUpTitle.textContent = t.followUpTitle;
    btnText1.textContent = t.button1;
    btnText2.textContent = t.button2;

    // Uppdatera kategoritexter
    Object.keys(categoryTexts).forEach(key => {
        categoryTexts[key].textContent = t.categories[key];
    });

    // Uppdatera historiktexter
    historyToggleText.textContent = currentLang === 'sv' ? 'Historik' : 'History';
    historyTitle.textContent = currentLang === 'sv' ? 'Tidigare fraser' : 'Previous phrases';
    clearHistoryBtn.textContent = currentLang === 'sv' ? 'Rensa' : 'Clear';
    historyEmptyMsg.textContent = currentLang === 'sv'
        ? 'Ingen historik än. Generera en fras för att börja!'
        : 'No history yet. Generate a phrase to start!';

    // Återställ nuvarande val när språk ändras
    nuvarandeVal = null;
    foljdfragorSektion.setAttribute('hidden', '');
    renderHistory();
}

// Funktion för att få alla fraser från vald kategori
function getStartersForCategory() {
    const t = translations[currentLang];

    if (currentCategory === 'all') {
        // Slå ihop alla kategorier
        const allStarters = [];
        Object.keys(t.starters).forEach(category => {
            allStarters.push(...t.starters[category]);
        });
        return allStarters;
    } else {
        return t.starters[currentCategory];
    }
}

// Funktion som väljer en slumpmässig fras
function visaSlumpmassigFras() {
    const t = translations[currentLang];
    const starters = getStartersForCategory();

    // Välj ett slumpmässigt index
    const slumpmassigIndex = Math.floor(Math.random() * starters.length);

    // Spara det nuvarande valet
    nuvarandeVal = starters[slumpmassigIndex];

    // Visa frasen
    frasElement.textContent = nuvarandeVal.fras;

    // Lägg till i historik
    addToHistory(nuvarandeVal.fras);

    // Återställ följdfrågetexten
    foljdfragaElement.textContent = t.followUpInitial;

    // Visa följdfrågor-sektionen
    foljdfragorSektion.removeAttribute('hidden');
}

// Lägg till fras i historik
function addToHistory(fras) {
    // Lägg till i början av arrayen
    history.unshift(fras);

    // Behåll max 20 fraser
    if (history.length > 20) {
        history = history.slice(0, 20);
    }

    // Spara i localStorage
    localStorage.setItem('phraseHistory', JSON.stringify(history));

    // Uppdatera UI
    updateHistoryCount();
    renderHistory();
}

// Uppdatera historikräknaren
function updateHistoryCount() {
    historyCount.textContent = history.length;
}

// Rendera historiklistan
function renderHistory() {
    if (history.length === 0) {
        historyEmptyMsg.style.display = 'block';
        historyList.querySelectorAll('.history-item').forEach(item => item.remove());
        return;
    }

    historyEmptyMsg.style.display = 'none';
    historyList.innerHTML = '';

    history.forEach((fras, index) => {
        const item = document.createElement('button');
        item.className = 'history-item';
        item.textContent = fras;
        item.onclick = () => loadFromHistory(fras);
        historyList.appendChild(item);
    });
}

// Ladda fras från historik
function loadFromHistory(fras) {
    // Hitta frasen i alla kategorier
    const t = translations[currentLang];
    let foundStarter = null;

    Object.keys(t.starters).forEach(category => {
        const starter = t.starters[category].find(s => s.fras === fras);
        if (starter) {
            foundStarter = starter;
        }
    });

    if (foundStarter) {
        nuvarandeVal = foundStarter;
        frasElement.textContent = foundStarter.fras;
        foljdfragaElement.textContent = translations[currentLang].followUpInitial;
        foljdfragorSektion.removeAttribute('hidden');

        // Stäng historikpanelen
        historyPanel.setAttribute('hidden', '');
    }
}

// Toggle historikpanel
function toggleHistory() {
    if (historyPanel.hasAttribute('hidden')) {
        historyPanel.removeAttribute('hidden');
    } else {
        historyPanel.setAttribute('hidden', '');
    }
}

// Rensa historik
function clearHistory() {
    history = [];
    localStorage.removeItem('phraseHistory');
    updateHistoryCount();
    renderHistory();
}

// Funktion som väljer en slumpmässig följdfråga
function visaSlumpmassigFoljdfraga() {
    const t = translations[currentLang];

    // Kontrollera att vi har ett val
    if (!nuvarandeVal) {
        foljdfragaElement.textContent = currentLang === 'sv'
            ? "Välj först en inledningsfras!"
            : "Choose an opening line first!";
        return;
    }

    // Välj en slumpmässig följdfråga
    const foljdfragor = nuvarandeVal.foljdfragor;
    const slumpmassigIndex = Math.floor(Math.random() * foljdfragor.length);

    // Visa följdfrågan
    foljdfragaElement.textContent = foljdfragor[slumpmassigIndex];
}

// Funktion för att byta språk
function changeLanguage(lang) {
    currentLang = lang;

    // Uppdatera aktiv knapp
    if (lang === 'sv') {
        langSvBtn.classList.add('active');
        langEnBtn.classList.remove('active');
    } else {
        langEnBtn.classList.add('active');
        langSvBtn.classList.remove('active');
    }

    // Uppdatera all text
    updateUIText();
}

// Funktion för att byta kategori
function changeCategory(category) {
    currentCategory = category;

    // Uppdatera aktiva knappar
    Object.keys(categoryButtons).forEach(key => {
        if (key === category) {
            categoryButtons[key].classList.add('active');
            categoryButtons[key].setAttribute('aria-selected', 'true');
        } else {
            categoryButtons[key].classList.remove('active');
            categoryButtons[key].setAttribute('aria-selected', 'false');
        }
    });

    // Återställ fras och dölj följdfrågor när kategori byts
    const t = translations[currentLang];
    frasElement.textContent = t.initialText;
    nuvarandeVal = null;
    foljdfragorSektion.setAttribute('hidden', '');
}

// Event listeners för knappar
knapp.addEventListener('click', visaSlumpmassigFras);
foljdfragaKnapp.addEventListener('click', visaSlumpmassigFoljdfraga);

// Event listeners för språkbyten
langSvBtn.addEventListener('click', () => changeLanguage('sv'));
langEnBtn.addEventListener('click', () => changeLanguage('en'));

// Event listeners för kategoribyten
Object.keys(categoryButtons).forEach(key => {
    categoryButtons[key].addEventListener('click', () => changeCategory(key));
});

// Funktion för att toggla mörkt läge
function toggleDarkMode() {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.classList.add('dark-mode');
        darkModeIcon.textContent = '○';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        darkModeIcon.textContent = '●';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Event listener för mörkt läge
darkModeToggle.addEventListener('click', toggleDarkMode);

// Event listeners för historik
historyToggleBtn.addEventListener('click', toggleHistory);
clearHistoryBtn.addEventListener('click', clearHistory);

// Initiera med svenska
updateUIText();

// Ladda historik från localStorage
const savedHistory = localStorage.getItem('phraseHistory');
if (savedHistory) {
    history = JSON.parse(savedHistory);
    updateHistoryCount();
    renderHistory();
}

// Kontrollera om användaren föredrar mörkt läge
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled' ||
    (savedDarkMode === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    toggleDarkMode();
}
