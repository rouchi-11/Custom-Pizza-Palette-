
document.addEventListener("DOMContentLoaded", function() {
    var signUpButton = document.getElementById("signUpButton");


    signUpButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "pizza.html"; // Replace "index.html" with the URL of your main webpage
    });
});

