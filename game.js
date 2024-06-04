const perg = document.querySelector('.perg');
const choices = Array.from(document.getElementsByClassName('content-choice'));
const nq = document.getElementById('q');
const p = document.getElementById('p');
const actualp = document.querySelector('.actualp'); // Corrigindo a seleção do elemento
const maxq = 3;
let available = [0, 0, 0];
let actual = 0;
let points = 0;

const questions = [
    {
        q: 1,
        perg: "Biologia",
        choices: ["ruim", "éeeeé..", "bom", "muito bom"],
        answer: 4
    },
    {
        q: 2,
        perg: "Evolucionismo é importante",
        choices: ["sim muito", "não", "acho que sim", "sla"],
        answer: 1
    },
    {
        q: 3,
        perg: "quem foi wallace",
        choices: ["sim muito", "não", "acho que sim", "sla"],
        answer: 4
    }
];

let gameOver = false;

function newq() {
    if (available.every(status => status === 1)) {
        gameOver = true;
        end();
        return;
    }

    let questionNumber;
    let ok = true;

    while (ok) {
        questionNumber = Math.floor(Math.random() * questions.length);
        actualq = questions[questionNumber];

        if (available[actualq.q - 1] === 0) {
            ok = false;
        }
    }

    perg.innerText = actualq.perg;
    actualp.textContent = `${actual + 1}/${questions.length}`; // Atualizando a exibição do número da pergunta
    p.textContent = points; // Atualizando a exibição dos pontos

    actual += 1;
    choices.forEach((choice, index) => {
        choice.innerText = actualq.choices[index];
        choice.classList.remove('correct', 'incorrect');
        choice.dataset.number = index + 1; // Atualizando o atributo de dataset para identificar a resposta
    });

    available[actualq.q - 1] = 1;
}

function handleChoice(event) {
    if (gameOver) return; // Evita que o usuário selecione uma opção após o término do jogo
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

function end() {
    if (gameOver === true) {
        // Aqui você pode fazer algo como mostrar uma mensagem com a pontuação final em vez de redirecionar
        console.log("Game Over. Pontuação Final:", points);
        // window.location.assign('end.html');
    }
}

function startgame() {
    newq();
    choices.forEach((choice) => {
        choice.addEventListener('click', handleChoice);
    });
}

startgame();

