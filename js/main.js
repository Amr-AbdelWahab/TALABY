// alert('alert');

// Variable
let ham = document.getElementById('ham');
let links = document.getElementById('links');

ham.addEventListener('click', hamClick);

function hamClick () {
    ham.classList.toggle('active');
    links.classList.toggle('show');
}


let itemS = document.getElementById('links').getElementsByTagName('li');
console.log(itemS);

for ( i = 0 ; i < itemS.length ; i++) {
    itemS[i].addEventListener('click', timing);
}

function timing () {
    setTimeout(hamClick, 400);
}