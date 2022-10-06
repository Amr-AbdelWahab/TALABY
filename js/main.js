// alert('alert');

// include
// function load(target, url) {
//     var r = new XMLHttpRequest();
//     r.open("GET", url, true);
//     r.onreadystatechange = function () {
//         if (r.readyState != 4 || r.status != 200) return;
//         target.innerHTML = r.responseText;
//     };
//     r.send();
// }

// let includes = Array.from(document.querySelectorAll('[data-include]'));
// includes.map(include => {
//     let file = include.dataset['include'] + '.html';
//     load(include, file);
// });




// Variable

let ham = document.getElementById('ham');
let links = document.getElementById('links');

ham.addEventListener('click', hamClick);

function hamClick () {
    ham.classList.toggle('active');
    links.classList.toggle('show');
};

let itemS = document.getElementById('links').getElementsByTagName('li');
// console.log(itemS);

for ( i = 0 ; i < itemS.length ; i++) {
    itemS[i].addEventListener('click', timing);
};

function timing () {
    setTimeout(hamClick, 400);
};





// الاسئلة الشائعة

let qaContainer = document.querySelectorAll('#qa li')

for ( i = 0 ; i < qaContainer.length ; i++) {
    qaContainer[i].addEventListener('click', showAnswer);
};

function showAnswer () {
    
    for ( i = 0 ; i < qaContainer.length ; i++) {
        qaContainer[i].classList.remove('showAnswer');
    };

    this.classList.toggle('showAnswer');
};


//---------
//   submit
//-----------

//Variable
// let submit = document.getElementById('submit');
// let numMassage = document.getElementById('numMassage');
// let maxInputNum = document.getElementById('maxInputNum');
// let form = document.getElementById('form');

// console.log(submit);

let numError = document.getElementById('numError');
console.log(numError);

function validatePhonNum() {
    let phoneNum = document.getElementById('phoneNum').value;
    

    if (phoneNum.length !== 10 ){
        numError.innerHTML = '*ادخل رقم الجوال ( مكون من 10 أرقام )';
        console.log(phoneNum);
    }else{
        numError.innerHTML = ""
    }
    
}