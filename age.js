function calculateAge() {
    // Get the input values
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    // Validate day input
    if (day <= 0 || day > 31) {
        document.getElementById("result").innerText = "Error: Day must be between 1 and 31.";
        return; // Exit the function
    }

    // Validate month input
    if (month <= 0 || month > 12) {
        document.getElementById("result").innerText = "Error: Month must be between 1 and 12.";
        return; // Exit the function
    }

    // Validate year input
    if (year <= 0) {
        document.getElementById("result").innerText = "Error: Year must be a positive four-digit number.";
        return; // Exit the function
    }

    if (year.length !== 4) {
        document.getElementById("result").innerText = "Error: Year must be a four-digit number.";
        return; // Exit the function
    }

    // Get the current date
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1; // Months are 0-based, so we add 1
    var currentDay = today.getDate();

    // Calculate age
    var age = currentYear - year;

    // Adjust if the birthday hasn't occurred yet this year
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    // Display an error if the age is negative
    if (age < 0) {
        document.getElementById("result").innerText = "Error: The year you entered is in the future.";
    } else {
        // Display the result
        document.getElementById("result").innerText = "Your age is: " + age;
    }
}
