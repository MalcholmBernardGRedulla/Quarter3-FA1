var FN = prompt("Type your first name: ");
var LN = prompt("Type your Last name: ");
var BY = parseInt(prompt("Type your birth year: "));

document.getElementById("GFA").innerText="Hello " +FN+ " " +LN+"! How does it feel to be " +(2025-BY)+ " years old?";