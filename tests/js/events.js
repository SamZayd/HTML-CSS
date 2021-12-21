
let btn2 = document.querySelector('#b2');
let btn3 = document.querySelector('#b3');

let btn5 = document.querySelector('#b5');
let tex6 = document.querySelector('#t6');
let tex7 = document.querySelector('#t7');
let tex8 = document.querySelector('#t8');
let tex9 = document.querySelector('#t9');
const log = document.getElementById('values');

function btn(){
    document.getElementById('b1').style.backgroundColor ='#337ab7'
}
 
btn2.addEventListener('pointerover', () => btn2.style.backgroundColor = '#4cae4c')
btn3.addEventListener('pointerout', () => btn3.style.backgroundColor = '#c9302c')
function btndbl(){
    document.getElementById('b4').style.backgroundColor = '#772CBD'
}

btn5.addEventListener('pointerover', () => btn5.style.backgroundColor = '#EADF40')


tex6.addEventListener('focus', (event) => event.target.style.background = '#EF9FF4')
tex7.addEventListener('blur', (event) => event.target.style.backgroundColor = '#9FCCF4')
tex8.addEventListener('focusin', (event) => event.target.style.backgroundColor = '#B9F49F')
tex8.addEventListener('focusout', (event) => event.target.style.backgroundColor = '')

tex9.addEventListener('input', updateValue); function updateValue(e){log.textContent =e.target.value}

function myfun(){
    alert("Try all")
    
}
console.log("Working here");