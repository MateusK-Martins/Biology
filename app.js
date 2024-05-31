
function createbubble() {
    const section = document.querySelector('section');
    const bubble = document.createElement('span');
    var si = Math.random() * 30 

    bubble.style.height = 20 + si + 'px';
    bubble.style.width = 20 + si + 'px';
    bubble.style.left = Math.random() * innerWidth + "px";

    section.appendChild(bubble);

    setTimeout(() => {
        bubble.remove()
    },4000)
}

setInterval(createbubble, 500)

const start = document.querySelector('#start');
const begin = document.querySelector('#begin')
const qui1 = document.querySelector('#qui1')
const qui2 = document.querySelector('#qui2')
const true = document.querySelector('#true')
var number = 0

qui1.classList.toggle('none');
qui2.classList.toggle('none');

start.addEventListener('click',()=>{
    begin.classList.toggle('end')
    let number = Math.random() * 2
    console.log(number)
    if(number > 0 && number < 1){
        qui1.classList.toggle('enter');
        qui1.classList.remove('none')
    }
    else if(number > 1 && number < 2){
        qui2.classList.toggle('enter');
        qui2.classList.remove('none');
    }
})


