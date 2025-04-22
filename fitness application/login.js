document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Dummy credentials (Replace with backend/database)
    let validUser = {
        email: "arpanjain9009@gmail.com",
        password: "9009282225"
    };
    

    if (email === validUser.email && password === validUser.password) {
        document.getElementById("message").innerText = "Login Successful!";
        document.getElementById("message").style.color = "green";

        // Redirect to index.html after 2 seconds
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } else {
        document.getElementById("message").innerText = "Invalid Email or Password!";
        document.getElementById("message").style.color = "red";
    }
});


