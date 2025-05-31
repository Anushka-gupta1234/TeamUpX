// // // // Updated script.js

// // // document.addEventListener('DOMContentLoaded', function() {
// // //     const loginForm = document.getElementById("loginForm");
// // //     const registerForm = document.getElementById("registerForm");

// // //     loginForm.addEventListener("submit", async function(event) {
// // //         event.preventDefault();
// // //         const email = document.getElementById("loginEmail").value.trim();
// // //         const password = document.getElementById("loginPassword").value.trim();

// // //         if (!email || !password) {
// // //             alert("Please fill in all fields");
// // //             return;
// // //         }

// // //         try {
// // //             const response = await fetch("http://localhost:5000/api/users/login", {
// // //                 method: "POST",
// // //                 headers: { "Content-Type": "application/json" },
// // //                 body: JSON.stringify({ email, password })
// // //             });

// // //             const data = await response.json();
// // //             if (!response.ok) throw new Error(data.message);

// // //             localStorage.setItem("authToken", data.accessToken);
// // //             window.location.href = "profile.html";
// // //         } catch (error) {
// // //             alert(error.message);
// // //             console.error("Login error:", error);
// // //         }
// // //     });

// // //     registerForm.addEventListener("submit", async function(event) {
// // //         event.preventDefault();
// // //         const username = document.getElementById("username").value.trim();
// // //         const email = document.getElementById("registerEmail").value.trim();
// // //         const password = document.getElementById("registerPassword").value.trim();

// // //         if (!username || !email || !password) {
// // //             alert("Please fill in all fields");
// // //             return;
// // //         }

// // //         try {
// // //             const response = await fetch("http://localhost:5000/api/users/register", {
// // //                 method: "POST",
// // //                 headers: { "Content-Type": "application/json" },
// // //                 body: JSON.stringify({ username, email, password })
// // //             });

// // //             const data = await response.json();
// // //             if (!response.ok) throw new Error(data.message);

// // //             alert("Registration successful! Please log in.");
// // //             toggleForm();
// // //         } catch (error) {
// // //             alert(error.message);
// // //             console.error("Registration error:", error);
// // //         }
// // //     });

// // //     // Fetch and display user profile
// // //     async function fetchUserProfile() {
// // //         const token = localStorage.getItem("authToken");
// // //         if (!token) {
// // //             console.error("No token found, redirecting to login...");
// // //             window.location.href = "../index.html";
// // //             return;
// // //         }

// // //         try {
// // //             const response = await fetch("http://localhost:5000/api/users/current", {
// // //                 method: "GET",
// // //                 headers: {
// // //                     "Authorization": `Bearer ${token}`,
// // //                     "Content-Type": "application/json"
// // //                 }
// // //             });

// // //             if (!response.ok) throw new Error("Failed to fetch user data");

// // //             const user = await response.json();
// // //             console.log("User Data:", user);
// // //             document.getElementById("username").textContent = user.username;
// // //             document.getElementById("email").textContent = user.email;
// // //         } catch (error) {
// // //             console.error("Error fetching user data:", error);
// // //             alert("Failed to fetch user data");
// // //         }
// // //     }

// // //     if (window.location.pathname.includes("profile.html")) {
// // //         fetchUserProfile();
// // //     }
// // // });

// // // function toggleForm() {
// // //     document.getElementById("loginForm").style.display =
// // //         document.getElementById("loginForm").style.display === "none" ? "block" : "none";
// // //     document.getElementById("registerForm").style.display =
// // //         document.getElementById("registerForm").style.display === "none" ? "block" : "none";
// // // }

// // async function fetchUserProfile() {
// //     const token = localStorage.getItem("authToken");
// //     if (!token) {
// //         console.error("No token found, redirecting to login...");
// //         window.location.href = "../index.html";
// //         return;
// //     }

// //     try {
// //         const response = await fetch("http://localhost:5000/api/users/current", {
// //             method: "GET",
// //             headers: {
// //                 "Authorization": `Bearer ${token}`,
// //                 "Content-Type": "application/json"
// //             }
// //         });

// //         if (!response.ok) throw new Error("Failed to fetch user data");

// //         const user = await response.json();
// //         console.log("User Data:", user);
// //         document.getElementById("username").textContent = user.username;
// //         document.getElementById("email").textContent = user.email;
// //     } catch (error) {
// //         console.error("Error fetching user data:", error);
// //         alert("Failed to fetch user data");
// //     }
// // }

// // if (window.location.pathname.includes("profile.html")) {
// //     fetchUserProfile();
// // };


// document.addEventListener("DOMContentLoaded", () => {
//     fetchUserProfile();

//     document.getElementById("updateProfileForm").addEventListener("submit", updateProfile);
// });

// async function fetchUserProfile() {
//     const token = localStorage.getItem("authToken");
//     if (!token) {
//         alert("Please login first");
//         window.location.href = "../index.html";
//         return;
//     }

//     try {
//         const response = await fetch("http://localhost:5000/api/users/current", {
//             headers: {
//                 "Authorization": `Bearer ${token}`
//             }
//         });

//         const user = await response.json();
//         document.getElementById("username").textContent = user.username;
//         document.getElementById("email").textContent = user.email;
//     } catch (err) {
//         alert("Error fetching profile");
//         console.error(err);
//     }
// }

// function showEditForm() {
//     document.getElementById("editProfileForm").style.display = "block";
// }

// async function updateProfile(e) {
//     e.preventDefault();
//     const token = localStorage.getItem("authToken");

//     const newUsername = document.getElementById("newUsername").value;
//     const newEmail = document.getElementById("newEmail").value;
//     const newPassword = document.getElementById("newPassword").value;

//     const updateData = {};
//     if (newUsername) updateData.username = newUsername;
//     if (newEmail) updateData.email = newEmail;
//     if (newPassword) updateData.password = newPassword;

//     try {
//         const response = await fetch("http://localhost:5000/api/users/update", {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`
//             },
//             body: JSON.stringify(updateData)
//         });

//         const data = await response.json();
//         if (!response.ok) throw new Error(data.message || "Update failed");

//         alert("Profile updated successfully!");
//         location.reload();
//     } catch (err) {
//         alert(err.message);
//         console.error("Update error:", err);
//     }
// }

// function logout() {
//     localStorage.removeItem("authToken");
//     window.location.href = "../index.html";
// }



const user = JSON.parse(localStorage.getItem("user"));
if (!user || !user.accessToken) {
    alert("Please log in to create your profile.");
    window.location.href = "../login/login.html";
}

document.getElementById("profileForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
        fullName: form.fullName.value,
        college: form.college.value,
        yearOfStudy: form.yearOfStudy.value,
        bio: form.bio.value,
        skills: form.skills.value.split(',').map(s => s.trim()),
        pastExperience: form.pastExperience.value,
        achievements: form.achievements.value,
        resume: form.resume.value,
        github: form.github.value,
        linkedIn: form.linkedIn.value
    };

    try {
        const res = await fetch("/api/profile/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.accessToken}`,
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) throw new Error("Profile creation failed");
        const profile = await res.json();
        alert("Profile created!");
        window.location.href = "profile.html"; // or any page you want to go next
    } catch (err) {
        alert(err.message);
    }
});
