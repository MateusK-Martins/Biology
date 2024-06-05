const perg = document.querySelector('.perg');
const choices = Array.from(document.getElementsByClassName('content-choice'));
const nq = document.getElementById('q');
const p = document.getElementById('p');
const actualp = document.querySelector('actualp');

let available = [0, 0, 0,0,0,0,0,0,0,0];
let actual = 0;
let points = 0;

let questions = [
    {
        "q": 1,
        "perg": "Sobre o que foi a pesquisa de Darwin?",
        "choice1": "Saúde mental",
        "choice2": "Pesquisa religiosa",
        "choice3": "Lamarck",
        "choice4": "Evolução dos seres vivos",
        "answer": 4
    },
    {
        "q": 2,
        "perg": "Quem criou a lei de uso e desuso?",
        "choice1": "Lamarck",
        "choice2": "Darwin",
        "choice3": "Wallace",
        "choice4": "outros...",
        "answer": 1
    },
    {
        "q": 3,
        "perg": "Para qual ilha Darwin viajou?",
        "choice1": "Tibe",
        "choice2": "Chipre",
        "choice3": "Galápagos",
        "choice4": "Madagascar",
        "answer": 3,
    },
    {
        "q": 4,
        "perg": "Qual alternativa define a lei de uso e desuso?",
        "choice1": "Órgãos que não são usados atrofiam e os usados se desenvolvem",
        "choice2": "A evolução de um determinado órgão é definida pelo seu uso",
        "choice3": "Órgãos usados desaparecem com o tempo",
        "choice4": "A seleção natural determina quais órgãos são usados",
        "answer": 1
    },
    {
        "q": 5,
        "perg": "Se um gato perder parte da cauda, sua prole vai nascer sem a mesma parte. Esta afirmação está de acordo com os pensamentos de quem?",
        "choice1": "Wallace",
        "choice2": "Darwin",
        "choice3": "Lamarck",
        "choice4": "outros...",
        "answer": 3
    },
    {
        "q": 6,
        "perg": "Qual a alternativa incorreta?",
        "choice1": "Lei de uso e desuso pertence a Lamarck",
        "choice2": "Darwin desenvolveu a teoria da seleção natural",
        "choice3": "Darwin viajou para Madagascar para suas pesquisas",
        "choice4": "Galápagos é associada às pesquisas de Darwin",
        "answer": 3
    },
    {
        "q": 7,
        "perg": "Qual é o título do livro mais famoso de Darwin?",
        "choice1": "A Origem das Espécies",
        "choice2": "A Evolução das Espécies",
        "choice3": "A Teoria da Evolução",
        "choice4": "Seleção Natural",
        "answer": 1
    },
    {
        "q": 8,
        "perg": "Qual era a profissão de Darwin antes de se tornar naturalista?",
        "choice1": "Médico",
        "choice2": "Teólogo",
        "choice3": "Engenheiro",
        "choice4": "Geólogo",
        "answer": 2
    },
    {
        "q": 9,
        "perg": "Quem foi contemporâneo de Darwin e também propôs uma teoria similar de evolução?",
        "choice1": "Lamarck",
        "choice2": "Wallace",
        "choice3": "Malthus",
        "choice4": "Lyell",
        "answer": 2
    },
    {
        "q": 10,
        "perg": "Qual destes conceitos é fundamental para a teoria de Darwin?",
        "choice1": "Mutação genética",
        "choice2": "Seleção natural",
        "choice3": "Hibridização",
        "choice4": "Reprodução assexuada",
        "answer": 2
    }
    
];

let actualq;
let gameOver = false;

function newq() {
    upd();
    if (available.every(status => status === 1)) {
        gameOver = true;
        end();
        return; 
    }

    let questionNumber;
    let ok = true;

    while (ok) {
        questionNumber = Math.floor(Math.random() * questions.length) + 1; 
        actualq = questions.find(obj => obj.q === questionNumber);

        if (available[actualq.q - 1] === 0) {
            ok = false;
        }
    }

    perg.innerText = actualq.perg;
    choices.forEach((choice, index) => {
        choice.innerText = actualq[`choice${index + 1}`];
        choice.classList.remove('correct', 'incorrect');
    });

    available[actualq.q - 1] = 1;
    console.log(available, ' ', actualq.q);
}

function handleChoice(event) {
    const selectedChoice = event.target;
    choices.forEach(c => c.classList.remove('correct', 'incorrect'));
    if (parseInt(selectedChoice.dataset.number) === actualq.answer) {
        selectedChoice.classList.add('correct');
        points += 1;
    } else {
        selectedChoice.classList.add('incorrect');
    }
    setTimeout(() => {
        newq();
    }, 1000);
}

function correct() {
    choices.forEach((choice) => {
        choice.addEventListener('click', handleChoice);
    });
}

function end() {
    if (gameOver === true) {
        window.location.assign('index.html');
        console.log(gameOver)
    }
}

function startgame() {
    newq();
    correct();
}

function upd() {
    actual += 1;
    nq.textContent = `${actual}/${questions.length}`;
    p.innerHTML = `${points}`;
}

startgame();
