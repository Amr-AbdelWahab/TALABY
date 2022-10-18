//Open And Close PopUp Window
let btnTrackMyPack = document.getElementById('btnTrackMyPack');
let btnClosePopUp = document.getElementById('closePopUp');
let packageTracking = document.getElementById('packageTracking');

let userTrackingBarcode = document.getElementById('trackerID');


//Open 

btnTrackMyPack.addEventListener('click', trackMyPack);

function trackMyPack (){
  
    packageTracking.classList.remove('disNon');
    setTimeout(scaleUp,50);
    function scaleUp (){
    packageTracking.classList.add('open');
  }

}


//Close 
btnClosePopUp.addEventListener('click', close);

function close (){
  packageTracking.classList.remove('open');
  setTimeout(scaleDn,200);
  function scaleDn (){
    packageTracking.classList.add('disNon');
  }
}


























let baseUrl = "https://www.postman.com/collections/0e3d8ad92d8f43ed41d2";

let packageTrackUrl = "https://apisv2.logestechs.com/api/guests/1/packages/tracking?barcode=";




      fetch(packageTrackUrl + userTrackingBarcode.value)
        .then(function(response){
        return response.json();
    })

        .then(function(data){

      // Barcode number
      // document.getElementById('userBarcode').innerHTML = userTrackingBarcode.value;
      document.getElementById('userBarcode').innerHTML = data.barcode;

      // Sender Name
      // let senderNameUser = data.senderFirstName +" "+ data.senderMiddleName;
      document.getElementById('senderName').innerHTML = data.fullSenderName;

      // Pack Info
      document.getElementById('weight').innerHTML = data.width + " كجم";
      document.getElementById('length').innerHTML = data.length + " سم";
      document.getElementById('width').innerHTML = data.width + " سم";
    })











