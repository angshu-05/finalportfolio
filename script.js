document.addEventListener("DOMContentLoaded", function() {
    const userName = prompt("Hello! What's your name?");
    const phoneNumberElement = document.getElementById("phone-number");
    phoneNumberElement.style.display = "none";

    if (userName) {
        const knowsAngshuman = confirm(`Hi ${userName}, do you know Angshuman?`);
        
        if (knowsAngshuman) {
            const enteredNumber = prompt("Please enter Angshuman's phone number to verify:");
            
            if (enteredNumber && enteredNumber.trim() === "7318786843") {
                phoneNumberElement.style.display = "inline-block";
            } else {
                alert("Incorrect phone number!");
                phoneNumberElement.style.display = "none";
            }
        } else {
            phoneNumberElement.style.display = "none";
        }
    }
});