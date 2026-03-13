function checkNumber() {
    try {
        let value = document.getElementById("numberInput").value;

        if (value === "") {
            throw "Input cannot be empty!";
        }

        if (isNaN(value)) {
            throw "Please enter a valid number!";
        }

        document.getElementById("result").innerHTML =
            "Valid number: " + value;

    } catch (error) {
        document.getElementById("result").innerHTML =
            "Error: " + error;
    }
}
