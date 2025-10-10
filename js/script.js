//Waits for the document to load
document.addEventListener("DOMContentLoaded", function() {
    //Selects form items by their ID
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const contactMethodInput = document.getElementById("contactMethod");
    const messageInput = document.getElementById("message");

    //Checks that the name field is not empty. If it is, makes the field red.
    function checkName() {
        if (nameInput.value.trim().length > 0) {
            nameInput.style.backgroundColor = "white";
            nameInput.style.borderColor = "#f9c95b";
            return true;
        }
        else {
            nameInput.style.backgroundColor = "#F6D4D2";
            nameInput.style.borderColor = "red";
            return false;
        }
    }

    //Allows for numbers, parenthesis, dashes, and spaces when inputting phone numbers. If nothing is entered, turns the field red.
    function checkPhone() {
        //Makes sure only numbers—along with parenthesis, dashes, and spaces—can be put in the field.
        phoneInput.value = phoneInput.value.replace(/[^0-9()\-\s]/g, "");
        if (phoneInput.value.trim().length > 0) {
            phoneInput.style.backgroundColor = "white";
            phoneInput.style.borderColor = "#f9c95b";
            return true;
        }
        else {
            phoneInput.style.backgroundColor = "#F6D4D2";
            phoneInput.style.borderColor = "red";
            return false;
        }
    }

    //Sets a format for the email the user puts in. If format is incorrect, produces a red field.
    function checkEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailInput.value.trim())) {
            emailInput.style.backgroundColor = "white";
            emailInput.style.borderColor = "#f9c95b";
            return true;
        }
        else {
            emailInput.style.backgroundColor = "#F6D4D2";
            emailInput.style.borderColor = "red";
            return false;
        }
    }

    //Checks that the subject line is not empty. Otherwise, the field turns red.
    function checkSubject() {
        if (subjectInput.value.trim().length > 0) {
            subjectInput.style.backgroundColor = "white";
            subjectInput.style.borderColor = "#f9c95b";
            return true;
        }
        else {
            subjectInput.style.backgroundColor = "#F6D4D2";
            subjectInput.style.borderColor = "red";
            return false;
        }
    }

    //Checks that user selects one of the preferred contact methods. If not, field becomes red.
    function checkContactMethod() {
        if (contactMethodInput.value !== "") {
            contactMethodInput.style.backgroundColor = "white";
            contactMethodInput.style.borderColor = "#f9c95b";
            return true;
        }
        else {
            contactMethodInput.style.backgroundColor = "#F6D4D2";
            contactMethodInput.style.borderColor = "red";
            return false;
        }
    }

    //Check that the textarea is not empty. If nothing is written, makes the text field red.
    function checkMessage() {
        if (messageInput.value.trim().length > 0) {
            messageInput.style.backgroundColor = "white";
            messageInput.style.borderColor = "#f9c95b";
            return true;
        }
        else {
            messageInput.style.backgroundColor = "#F6D4D2";
            messageInput.style.borderColor = "red";
            return false;
        }
    }

    //Updates user input as they enter/select the fields.
    nameInput.addEventListener("input", checkName);
    phoneInput.addEventListener("input", checkPhone);
    emailInput.addEventListener("input", checkEmail);
    subjectInput.addEventListener("input", checkSubject);
    contactMethodInput.addEventListener("input", checkContactMethod);
    messageInput.addEventListener("input", checkMessage);

    //When user tries to submit, checks that all of the form items are valid.
    form.addEventListener("submit", function (event) {
        const validForm = checkName() && checkPhone() && checkEmail() && checkSubject() && checkContactMethod() && checkMessage();

        //If any field is not valid, message is not sent and user is asked to make corrections.
        if (!validForm) {
        event.preventDefault();
        alert("Please correct all invalid or red fields before submitting.")
        }
        else {
            //If all fields are valid, sends the message and alerts them that it went through.
            alert("Message sent successfully!");
        }
    });

});
