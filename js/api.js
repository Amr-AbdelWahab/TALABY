// Base url
let baseUrl = "https://www.postman.com/collections/0e3d8ad92d8f43ed41d2";
let packageTrackUrl =
  "https://apisv2.logestechs.com/api/guests/1/packages/tracking?barcode=";

  //Open And Close PopUp Window
let btnTrackMyPack = document.getElementById("btnTrackMyPack");
let btnClosePopUp = document.getElementById("closePopUp");
let packageTracking = document.getElementById("packageTracking");

let inputTrackingBarcode = document.getElementById("trackerID");
let packError = document.getElementById("packError");



//Track My Pack
let userBarcodeInput;

btnTrackMyPack.addEventListener("click", trackMyPack);


function trackMyPack() {
  userBarcodeInput = inputTrackingBarcode.value;
  if ( userBarcodeInput == "") {
    packError.innerHTML = "*برجاء إدخال رقم الطرد"
  }else{
    fetchPackageData();
    openPopUp();
    }
}



function fetchPackageData  (){
  userBarcodeInput = inputTrackingBarcode.value;

  fetch(packageTrackUrl + userBarcodeInput)
    .then(function (response) {
      return response.json();
    })
  
    .then(function (data) {
      // Barcode number
      if (data.barcode == undefined){
        document.getElementById("userBarcode").innerHTML = "رقم الشحنة غير صحيح";
      }else{
        document.getElementById("userBarcode").innerHTML = data.barcode;
      }
  
      // Pack Info
      document.getElementById("weight").innerHTML = data.width + " كجم";
      document.getElementById("length").innerHTML = data.length + " سم";
      document.getElementById("width").innerHTML = data.width + " سم";
  
      // Sender Name
      // let senderNameUser = data.senderFirstName +" "+ data.senderMiddleName;
      document.getElementById("senderName").innerHTML = data.fullSenderName;
      document.getElementById("senderPhone").innerHTML = data.senderPhone;
  
      // Receiver Name
      document.getElementById("receiverName").innerHTML = data.fullReceiverName;
      document.getElementById("receiverPhone").innerHTML = data.receiverPhone;
    });
}



//Open PopUp Window
function openPopUp() {
  packageTracking.classList.remove("disNon");
  setTimeout(scaleUp, 50);
  function scaleUp() {
    packageTracking.classList.add("open");
  }
}

//Close PopUp Window
btnClosePopUp.addEventListener("click", closePopUp);

function closePopUp() {
  packageTracking.classList.remove("open");
  setTimeout(scaleDn, 200);
  function scaleDn() {
    packageTracking.classList.add("disNon");
  }
}