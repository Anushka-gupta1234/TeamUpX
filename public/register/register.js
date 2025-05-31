// // Toggle between Login and Register Forms
// function toggleForm() {
//     let loginForm = document.getElementById("loginForm");
//     let registerForm = document.getElementById("registerForm");
//     let formTitle = document.getElementById("formTitle");

//     if (loginForm.style.display === "none") {
//         loginForm.style.display = "block";
//         registerForm.style.display = "none";
//         formTitle.innerText = "Login";
//     } else {
//         loginForm.style.display = "none";
//         registerForm.style.display = "block";
//         formTitle.innerText = "Register";
//     }
// }

// // Register form event listener
// document.getElementById("registerForm").addEventListener("submit", async function(event) {
//     event.preventDefault(); // Prevent default form submission

//     const username = document.getElementById("username").value;
//     const email = document.getElementById("registerEmail").value;
//     const password = document.getElementById("registerPassword").value;

//     const response = await fetch("http://localhost:5000/api/users/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, email, password })
//     });

//     const data = await response.json();
    
//     if (response.ok) {
//         alert("User registered successfully!");
//         toggleForm(); // Switch to login form
//     } else {
//         alert("Error: " + data.error); // Assuming error message is in the "error" field
//     }
// });

// // Login form event listener
// // document.getElementById("loginForm").addEventListener("submit", async function(event) {
// //     event.preventDefault();

// //     const email = document.getElementById("loginEmail").value;
// //     const password = document.getElementById("loginPassword").value;

// //     const response = await fetch("http://localhost:5000/api/users/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, password })
// //     });

// //     const data = await response.json();
    
// //     if (response.ok) {
// //         alert("Login successful!");
// //         window.location.href = "./index.html";  
// //     } else {
// //         alert("Error: " + data.error);
// //     }
// // });


// // document.getElementById("loginForm").addEventListener("submit", async function(event) {
// //     event.preventDefault();

// //     const email = document.getElementById("loginEmail").value;
// //     const password = document.getElementById("loginPassword").value;

// //     console.log("Login form submitted with:", email, password);  // Debugging log

// //     try {
// //         const response = await fetch("http://localhost:5000/api/users/login", {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({ email, password })
// //         });

// //         const data = await response.json();
// //         console.log("Response received:", data);  // Debugging log

// //         if (response.ok) {
// //             alert("Login successful!");
// //             window.location.href = "../index.html";
// //         } else {
// //             alert("Error: " + (data.error || "Unknown error")); // Handle missing error messages
// //         }
// //     } catch (error) {
// //         console.error("Fetch error:", error);
// //         alert("Something went wrong. Check the console for details.");
// //     }
// // });


// document.getElementById("loginForm").addEventListener("submit", async function(event) {
//     event.preventDefault();

//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     const response = await fetch("http://localhost:5000/api/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password })
//     });

//     const data = await response.json();
    
//     if (response.ok) {
//         alert("Login successful!");

//         // Save the token and user data in localStorage
//         localStorage.setItem("userToken", data.token);
//         localStorage.setItem("userEmail", email);  // Optional, if you need the email

//         // Redirect to homepage
//         window.location.href = "../index.html";  
//     } else {
//         alert("Error: " + data.error);
//     }
// });






// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Login & Register</title>
//     <link rel="stylesheet" href="register.css">
// </head>
// <body>

//     <div class="container">
//         <h2 id="formTitle">Login</h2>
        
//         <!-- Login Form -->
//         <form id="loginForm">
//             <div class="form-group">
//                 <label>Email</label>
//                 <input type="email" id="loginEmail" placeholder="Enter Email" required>
//             </div>
//             <div class="form-group">
//                 <label>Password</label>
//                 <input type="password" id="loginPassword" placeholder="Enter Password" required>
//             </div>
//             <button class="btn" type="submit">Login</button>
//             <p class="toggle-link">Don't have an account? <a onclick="toggleForm()">Register</a></p>
//         </form>

//         <!-- Register Form (Hidden Initially) -->
//         <form id="registerForm" style="display: none;">
//             <div class="form-group">
//                 <label>Full Name</label>
//                 <input type="text" id="username" placeholder="Enter Username" required>
//             </div>
//             <div class="form-group">
//                 <label>Email</label>
//                 <input type="email" id="registerEmail" placeholder="Enter Email" required>
//             </div>
//             <div class="form-group">
//                 <label>Password</label>
//                 <input type="password" id="registerPassword" placeholder="Enter Password" required>
//             </div>
//             <button class="btn" type="submit">Register</button>
//             <p class="toggle-link">Already have an account? <a onclick="toggleForm()">Login</a></p>
//         </form>
//     </div>

//     <!-- Link to external JavaScript file -->
//     <script src="register.js"></script>
// </body>
// </html>


document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    if (res.ok) {
        alert('Registration successful');
        window.location.href = '/login/login.html';
    } else {
        alert(data.message || 'Registration failed');
    }
});


