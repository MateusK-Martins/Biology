const perg = document.querySelector('.perg');
const choices = Array.from(document.getElementsByClassName('content-choice'));
console.log(choices);
const pontos = document.getElementById('acertos');


let currentquestions = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        perg: "Biologia",
        choice1: "ruim",
        choice2: "éeeeé..",
        choice3: "bom",
        choice4: "muito bom",
        answer: 1
    },
    {
        perg: "evolucionismo é importante",
        choice1: "sim muito",
        choice2: "não",
        choice3: "acho que sim",
        choice4: "sla",
        answer: 1
    },
    {
        perg: "pq voce esta aqui",
        choice1: "participo da equipe",
        choice2: "não sei",
        choice3: "acessei pelo link",
        choice4: "sou professor",
        answer: 3
    },
]
const correctBonus = 10;
const maxQuestions = 3;

getnewquestion = ()=>{
    if(availableQuestions.length === 0 || questionCounter > maxQuestions){
        return window.location.assign('end.html')
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentquestions = availableQuestions[questionIndex];
    perg.innerText = currentquestions.perg;

    choices.forEach(choice =>{
        const number = choice.dataset.number
        choice.innerText = currentquestions['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        if (selectedAnswer == currentquestions.answer) {
            score += correctBonus;
        }

        const classtoaply = selectedAnswer == currentquestions.answer ? 'correct' : 'incorrect';

        selectedChoice.parentElement.classList.add(classtoaply);
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classtoaply);
            getnewquestion();
        },1000)




    });
});

startgame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getnewquestion();
}

startgame()



