let baseUrl = "https://www.postman.com/collections/0e3d8ad92d8f43ed41d2"
fetch(baseUrl)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data.item[3]);
  let dfd = data.item[3];
  console.log(dfd)
})





//Open And Close PopUp Window
let btnTrackMyPack = document.getElementById('btnTrackMyPack');
let packageTracking = document.getElementById('packageTracking');
let closePopUp = document.getElementById('closePopUp');
//Open 
btnTrackMyPack.addEventListener('click', trackMyPack);
function trackMyPack (){
  packageTracking.classList.remove('disNon');
}
//Close 
closePopUp.addEventListener('click', close);
function close (){
  packageTracking.classList.add('disNon');
}