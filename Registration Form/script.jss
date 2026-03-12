document.getElementById("regForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (fname === "" || lname === "" || phone === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    if (phone.length !== 10) {
        alert("Enter valid phone number");
        return;
    }

    document.getElementById("msg").innerText = "Registration successful!";
});