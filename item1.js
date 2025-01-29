var nick = "Mal";
var h = 62;
var w = 54;

var hconv1 = h%12;
var hconv2 = (h-hconv1)/12;
var wconv = w*2.205;

alert("Name: " +nick+ "\nHeight: " +hconv2+ "'" +hconv1+ "'" + "\nWeight: " +wconv+ " lbs"); 
