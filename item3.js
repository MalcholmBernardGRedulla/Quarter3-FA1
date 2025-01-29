var nick = "Mal";
var h = 50;
var w = 54;

var hconv1 = h%12;
var hconv2 = (h-hconv1)/12;
var wconv = w*2.205;

const shareInfo = confirm("Do you agree to share your personal information?");
if (shareInfo) {
  console.log("Name: " +nick+ "\nHeight: " +hconv2+ "'" +hconv1+ "'" + "\nWeight: " +wconv+ " lbs");
} else {
  console.log("User does not wish to share his/her information.");
}