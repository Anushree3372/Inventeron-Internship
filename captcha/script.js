let firstSubmit = true;
let generatedCaptcha = "";

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    if (firstSubmit) {
        // Generate simple captcha
        generatedCaptcha = Math.floor(1000 + Math.random() * 9000).toString();
        document.getElementById("captchaText").innerText = "Captcha: " + generatedCaptcha;

        document.getElementById("captchaSection").style.display = "block";
        firstSubmit = false;
    } 
    else {
        let userCaptcha = document.getElementById("captchaInput").value;

        if (userCaptcha === generatedCaptcha) {
            alert("Submitted successfully");
        } else {
            alert("Invalid captcha");
        }
    }
});
