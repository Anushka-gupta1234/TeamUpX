// document.getElementById("sendLetter").addEventListener("click", function (event) {
// event.preventDefault(); 

// const nameInput = document.querySelector("input[type='text']");
// const emailInput = document.querySelector("input[type='email']");
// const messageInput = document.querySelector("textarea");

// document.querySelectorAll(".error-message").forEach(el => el.remove());

// let isValid = true;

// if (nameInput.value.trim() === "") {
//     showError(nameInput, "Name is required");
//     isValid = false;
// }

// if (emailInput.value.trim() === "") {
//     showError(emailInput, "Email is required");
//     isValid = false;
// } else if (!validateEmail(emailInput.value)) {
//     showError(emailInput, "Enter a valid email");
//     isValid = false;
// }

// if (messageInput.value.trim() === "") {
//     showError(messageInput, "Message cannot be empty");
//     isValid = false;
// }

// if (isValid) {
//     const feedbackData = {
//     name: nameInput.value.trim(),
//     email: emailInput.value.trim(),
//     message: messageInput.value.trim()
//     };

//     fetch('/feedback', {  
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(feedbackData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Feedback submitted:', data);
//         document.body.classList.add("sent");
//     })
//     .catch(error => {
//         console.error('Error submitting feedback:', error);
//     });
// }
// });

// function showError(inputElement, message) {
// const error = document.createElement("p");
// error.className = "error-message";
// error.style.color = "red";
// error.style.fontSize = "0.9rem";
// error.style.margin = "5px 0";
// error.innerText = message;
// inputElement.parentNode.appendChild(error);
// }

// // Email validation function
// function validateEmail(email) {
// return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }


document.getElementById("sendLetter").addEventListener("click", function (event) {
    event.preventDefault();
  
    const nameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const messageInput = document.querySelector("textarea");
  
    // Remove previous error messages
    document.querySelectorAll(".error-message").forEach(el => el.remove());
  
    let isValid = true;
  
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required");
      isValid = false;
    }
  
    if (emailInput.value.trim() === "") {
      showError(emailInput, "Email is required");
      isValid = false;
    } else if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Enter a valid email");
      isValid = false;
    }
  
    if (messageInput.value.trim() === "") {
      showError(messageInput, "Message cannot be empty");
      isValid = false;
    }
  
    if (isValid) {
      const feedbackData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
      };
  
      fetch('/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Feedback submitted:', data);
  
        // Show thank you message
        const resultMessage = document.createElement("p");
        resultMessage.className = "result-message centered";
        resultMessage.textContent = "Thank you for your message!";
        resultMessage.style.color = "green";
        resultMessage.style.fontSize = "1rem";
        resultMessage.style.marginTop = "20px";
        document.querySelector(".wrapper").appendChild(resultMessage);
  
        // Alert and redirect to homepage after short delay
        setTimeout(() => {
          alert("Feedback submitted!");
          window.location.href = "/"; // Redirect to homepage
        }, 1000); // 1-second delay so user sees thank-you message
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
        alert("Something went wrong. Please try again later.");
      });
    }
  });
  
  function showError(inputElement, message) {
    const error = document.createElement("p");
    error.className = "error-message";
    error.style.color = "red";
    error.style.fontSize = "0.9rem";
    error.style.margin = "5px 0";
    error.innerText = message;
    inputElement.parentNode.appendChild(error);
  }
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  