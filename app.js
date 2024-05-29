
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
const qui = document.querySelector('#qui')

start.addEventListener('click',()=>{
    begin.classList.toggle('end')
    qui.style.display = 'block'
})