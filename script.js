// script.js

// Get the yes button from the document
const yesButton = document.getElementById('yesButton');

// Add event listener for the yes button
yesButton.addEventListener('click', function() {
    // Redirect to confirm.html when Yes button is clicked
    window.location.href = "newpage.html";
});
