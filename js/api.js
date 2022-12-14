// Base url
let baseUrl = "https://www.postman.com/collections/0e3d8ad92d8f43ed41d2";
let packageTrackUrl =
  "https://apisv2.logestechs.com/api/guests/1/packages/tracking?barcode=";

  //Open And Close PopUp Window
let btnTrackMyPack = document.getElementById("btnTrackMyPack");
let btnClosePopUp = document.getElementById("closePopUp");
let packageTracking = document.getElementById("packageTracking");

let infoBoxes = document.querySelectorAll('.box');
let inputTrackingBarcode = document.getElementById("trackerID");
let packError = document.getElementById("packError");

let bodyLang = document.querySelector('body').dataset.lang;
console.log(bodyLang);

//Track My Pack
let userBarcodeInput;

btnTrackMyPack.addEventListener("click", trackMyPack);


function trackMyPack() {
  userBarcodeInput = inputTrackingBarcode.value;
  if ( userBarcodeInput == "") {
    if (bodyLang) {
      packError.innerHTML = "*please insert the Package number"
    }else{
    packError.innerHTML = "*برجاء إدخال رقم الطرد"
    }
  }else{
    packError.innerHTML = ""
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
      //! Barcode number Checker
      if (data.barcode == undefined){
        infoBoxes.forEach((box) =>{
          box.classList.add('disNon');
        })
        document.getElementById("userBarcode").innerHTML = "*رقم الشحنة غير صحيح";
        document.getElementById("userBarcode").classList.add('errText');
      }else{
        infoBoxes.forEach((box) =>{
          box.classList.remove('disNon');
        });


        //! Barcode number
        document.getElementById("userBarcode").innerHTML = data.barcode;
        document.getElementById("userBarcode").classList.remove('errText');

        if (bodyLang) {
          //* Pack Info
          document.getElementById("weight").innerHTML = data.width + " kg.";
          document.getElementById("length").innerHTML = data.length + " cm.";
          document.getElementById("width").innerHTML = data.width + " cm.";
          document.getElementById("height").innerHTML = data.height + " cm.";
          document.getElementById("quantity").innerHTML = data.quantity ;
          document.getElementById("cost").innerHTML = data.cost + " SAR.";

        }else{
          //* Pack Info
          document.getElementById("weight").innerHTML = data.width + " كجم";
          document.getElementById("length").innerHTML = data.length + " سم";
          document.getElementById("width").innerHTML = data.width + " سم";
          document.getElementById("height").innerHTML = data.height + " سم";
          document.getElementById("quantity").innerHTML = data.quantity ;
          document.getElementById("cost").innerHTML = data.cost + " ريال";
        }
              
          //* Sender 
          document.getElementById("senderName").innerHTML = data.fullSenderName;
          document.getElementById("senderPhone").innerHTML = data.senderPhone;
      
          //* Receiver 
          document.getElementById("receiverName").innerHTML = data.fullReceiverName;
          document.getElementById("receiverPhone").innerHTML = data.receiverPhone;
          document.getElementById("receiverAddressCountry").innerHTML = data.destinationAddress.country;
          document.getElementById("receiverAddressRegion").innerHTML = data.destinationAddress.arabicRegionName;
          document.getElementById("receiverAddressVillage").innerHTML = data.destinationAddress.arabicVillageName;

      }
    });
}



//Open PopUp Package Tracking Window
function openPopUp() {
  packageTracking.classList.remove("disNon");
  setTimeout(scaleUp, 50);
  function scaleUp() {
    packageTracking.classList.add("open");
  }
}

//Close PopUp Package Tracking Window
btnClosePopUp.addEventListener("click", closePopUp);

function closePopUp() {
  packageTracking.classList.remove("open");
  setTimeout(scaleDn, 200);
  function scaleDn() {
    packageTracking.classList.add("disNon");
  }
}

