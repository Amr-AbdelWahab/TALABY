let apiBtn = document.getElementById('apiBtn');
apiBtn.addEventListener('click', apidata );
let signUpUrl = "https://apisv2.logestechs.com/api/companies/driver/signup";


function apidata (){
  fetch(signUpUrl);

  console.log(response);

}