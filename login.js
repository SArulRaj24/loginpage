// Mock registered users
let users = JSON.parse(localStorage.getItem('users')) || {};

// Handle login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check if the username exists and the password matches
    if (users[username] && users[username] === password) {
        document.getElementById('login-message').style.color = "green";
        document.getElementById('login-message').innerText = "Login successful!";
    } else {
        document.getElementById('login-message').innerText = "Invalid username or password";
    }
});
