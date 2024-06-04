const perg = document.querySelector('.perg');
const choices = Array.from(document.getElementsByClassName('content-choice'));
const nq = document.getElementById('q');
const p = document.getElementById('p');
const actualp = document.querySelector('actualp');

let available = [0, 0, 0];
let actual = 0;
let points = 0;

let questions = [
    {
        q: 1,
        perg: "Biologia",
        choice1: "ruim",
        choice2: "éeeeé..",
        choice3: "bom",
        choice4: "muito bom",
        answer: 4
    },
    {
        q: 2,
        perg: "Evolucionismo é importante",
        choice1: "sim muito",
        choice2: "não",
        choice3: "acho que sim",
        choice4: "sla",
        answer: 1
    },
    {
        q: 3,
        perg: "quem foi wallace",
        choice1: "sim muito",
        choice2: "não",
        choice3: "acho que sim",
        choice4: "sla",
        answer: 4
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
        window.location.assign('end.html');
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
