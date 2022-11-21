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
//------------

//Variable
// let submit = document.getElementById('submit');
let form = document.getElementById('form');
let phonError = document.getElementById('phonError');
let idError = document.getElementById('idError');
let submitError = document.getElementById('submitError');


// validate user Phon Number
function validatePhonNum() {
    let phoneNum = document.getElementById('phoneNum').value;

    if (phoneNum.length !== 10 ){
        phonError.innerHTML = '*ادخل رقم الجوال ( مكون من 10 أرقام )';
    }else{
        phonError.innerHTML = "";
        console.log(phoneNum + "is valid");
    }
};
// validate user ID Number
function validateIdNum() {
    let idNum = document.getElementById('idNum').value;

    if (idNum.length !== 10 ){
        idError.innerHTML = '*ادخل رقم الهوية ( مكون من 10 أرقام )';
    }else{
        idError.innerHTML = "";
        console.log(idNum + "is valid");
    }
};

//Check validation before Submit
let userPhoneNum = document.getElementById('phoneNum');
let userIdNum = document.getElementById('idNum');

form.onsubmit = function (e) {
    let userPhone = false;
    let userID = false;
    // console.log( userIdNum );

    if (userPhoneNum.value.length === 10 ) {
        userPhone = true;
    }
    if (userIdNum.value.length === 10  ) {
        userID = true;        
    }
    if (userPhone === false || userID === false ){
        e.preventDefault();
        submitError.innerHTML = '*برجاء التأكد من ادخال جميع البيانات المطلوبة';
        console.log( "User Phone should be 10 digits" );
    }
}



