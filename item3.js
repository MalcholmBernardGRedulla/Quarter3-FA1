let consent = confirm("Do you agree to share your personal information?");

if (consent) {
    console.log(personalInfo);
    document.write("<h2>Shared Information</h2>");
    document.write(personalInfo);
} else {
    console.log("User does not wish to share his/her information.");
    document.write("<h2>Consent Denied</h2><p>User does not wish to share his/her information.</p>");
}
