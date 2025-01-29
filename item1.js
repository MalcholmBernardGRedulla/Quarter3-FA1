let nickname = "Mal";
let heightInInches = 62;
let weightInKg = 54;

let heightInFeet = Math.floor(heightInInches / 12);
let remainingInches = heightInInches % 12;

let weightInPounds = (weightInKg * 2.20462).toFixed(2);

let personalInfo = `Name: ${nickname}<br>Height: ${heightInFeet}'${remainingInches}"<br>Weight: ${weightInPounds} lbs`;

alert(`Name: ${nickname}\nHeight: ${heightInFeet}'${remainingInches}"\nWeight: ${weightInPounds} lbs`);
