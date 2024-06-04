const perg = document.querySelector('.perg');
        const choices = Array.from(document.getElementsByClassName('content-choice'));
        console.log(choices);
        const nq = document.getElementById('q');
        const p = document.getElementById('p');

        let available = [0, 0, 0];
        var actual = 0;
        var pontos = 0;

        let cont = 0
        available.forEach(i =>{
            if(i === 0){
                cont += 1;
            }
        })

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
        let c = false;

        function newq() {
            upd();
            if (available.every(status => status === 1)) {
                c = true;
                return c;
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

        function correct() {
            let correct = 'correct';
            let incorrect = 'incorrect';
            choices.forEach((choice) => {
                choice.addEventListener('click', () => {
                    choices.forEach(c => c.classList.remove('correct', 'incorrect'));
                    if (parseInt(choice.dataset.number) === actualq.answer) {
                        choice.classList.add(correct);
                    } else {
                        choice.classList.add(incorrect);
                    }
                    setTimeout(()=>{
                        newq();
                        end();
                    },1000)
                    console.log(nq)
                    choices.forEach(c => c.removeEventListener('click', handleChoice));
                });
            });
        }

        function end(){
            if(c === true){
                window.location.assign('end.html');
                console.log(c)
            }
        }

        function startgame() {
            newq();
            correct();
        }

        function upd(){
            actual += 1;
            nq.textContent = `${actual}/${cont}`;
            p.innerHTML = `${pontos}`;
        }

        startgame();