document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    form.addEventListener("submit", function (event) {
        // Initialize an array to store error messages
        const errors = [];

        // Validation for username (minimum length of 3 characters)
        if (usernameInput.value.length < 3) {
            errors.push("Username must be at least 3 characters long.");
        }

        // Validation for email (must be a valid email format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            errors.push("Please enter a valid email address.");
        }

        // Validation for password (minimum length of 6 characters)
        if (passwordInput.value.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        }

        // Validation for password match
        if (passwordInput.value !== confirmPasswordInput.value) {
            errors.push("Passwords do not match.");
        }

        // If there are errors, prevent form submission and display them
        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            alert(errors.join("\n")); // Display error messages in an alert
        }
    });
});