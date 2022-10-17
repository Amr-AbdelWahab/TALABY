let baseUrl = "https://www.postman.com/collections/0e3d8ad92d8f43ed41d2";

let packageTrackUrl = "https://apisv2.logestechs.com/api/guests/1/packages/tracking?barcode=";
let userTrackingBarcode = document.getElementById('trackerID');


fetch(packageTrackUrl + userTrackingBarcode.value)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data.destinationAddress.arabicCityName);
  console.log(data.senderFirstName + data.senderMiddleName);

  // Barcode number
document.getElementById('userBarcode').innerHTML = data.barcode;

  // Sender Name
  // let senderNameUser = data.senderFirstName +" "+ data.senderMiddleName;
  document.getElementById('senderName').innerHTML = data.fullSenderName;

  // Pack Info
  document.getElementById('weight').innerHTML = data.width + " كجم";
  document.getElementById('length').innerHTML = data.length + " سم";
  document.getElementById('width').innerHTML = data.width + " سم";

})







//Open And Close PopUp Window
let btnTrackMyPack = document.getElementById('btnTrackMyPack');
let packageTracking = document.getElementById('packageTracking');
let closePopUp = document.getElementById('closePopUp');
//Open 
btnTrackMyPack.addEventListener('click', trackMyPack);
function trackMyPack (){
  packageTracking.classList.remove('disNon');
  setTimeout(scaleUp,50);
  function scaleUp (){
    packageTracking.classList.add('open');
  }console.log(userTrackingBarcode.value);

}
//Close 
closePopUp.addEventListener('click', close);
function close (){
  packageTracking.classList.remove('open');
  setTimeout(scaleDn,200);
  function scaleDn (){
    packageTracking.classList.add('disNon');
  }
}

// Barcode number
document.getElementById('userBarcode').innerHTML = userTrackingBarcode.value;
