// alert('alert');

// include
function load(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML = r.responseText;
    };
    r.send();
}

let includes = Array.from(document.querySelectorAll('[data-include]'));
includes.map(include => {
    let file = include.dataset['include'] + '.html';
    load(include, file);
});




// Variable

let ham = document.getElementById('ham');
let links = document.getElementById('links');

ham.addEventListener('click', hamClick);

function hamClick () {
    ham.classList.toggle('active');
    links.classList.toggle('show');
};

let itemS = document.getElementById('links').getElementsByTagName('li');
console.log(itemS);

for ( i = 0 ; i < itemS.length ; i++) {
    itemS[i].addEventListener('click', timing);
};

function timing () {
    setTimeout(hamClick, 400);
};




// let body = document.getElementsByTagName('div');
// for ( i = 0 ; i < body.length ; i++) {
//     body[i].addEventListener('click', timing5);
// };

// function timing5 () {
//     setTimeout(hamOff, 400);
// }


// function hamOff () {
//     ham.classList.remove('active');
//     links.classList.remove('show');
// };


// الاسئلة الشائعة

let qaContainer = document.getElementById('qa').getElementsByTagName('li');

for ( i = 0 ; i < qaContainer.length ; i++) {
    qaContainer[i].addEventListener('click', showAnswer);
};

function showAnswer () {
    
    // for ( i = 0 ; i < qaContainer.length ; i++) {
    //     qaContainer[i].classList.remove('showAnswer');
    // };


    
    this.classList.toggle('showAnswer');
};

