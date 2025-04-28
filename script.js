// JavaScript Code for Interactive Web Page
        // Event Handling
        document.getElementById("clickButton").addEventListener("click", function() {
        alert("Welcome to PLP Academy!");
        });

        document.addEventListener("DOMContentLoaded", () => {
            const hoverButton = document.getElementById("hoverButton");
            if (hoverButton) {
                hoverButton.addEventListener("mouseover", () => {
                    hoverButton.style.backgroundColor = "green";
                });
                hoverButton.addEventListener("mouseout", () => {
                    hoverButton.style.backgroundColor = "blue";
                });
            }
        });

        document.getElementById("inputField").addEventListener("keypress", function(event) {
        console.log("Key pressed: " + event.key);
        });

        document.getElementById("secretButton").addEventListener("dblclick", function() {
        alert("Hello Gentle coder, You are a Genius!");
        });

        let timer;
        document.getElementById("secretButton").addEventListener("mousedown", function() {
        timer = setTimeout(() => {
            alert("Long press action!");
        }, 1000);
        });
        document.getElementById("secretButton").addEventListener("mouseup", function() {
        clearTimeout(timer);
        });

        // Interactive Elements
        document.getElementById("changeButton").addEventListener("click", function() {
        this.textContent = "You are pretty!";
        this.style.backgroundColor = "orange";
        });

        const images = document.querySelectorAll(".gallery img");
        images.forEach(image => {
        image.addEventListener("click", function() {
            alert("You clicked: " + this.alt);
        });
        });

        const accordions = document.querySelectorAll(".accordion");
        accordions.forEach(accordion => {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            panel.style.display = panel.style.display === "block" ? "none" : "block";
        });
        });

        // Password Feedback
        document.getElementById("password").addEventListener("input", function() {
        const feedback = document.getElementById("passwordFeedback");
        const password = this.value;
        if (password.length < 8) {
            feedback.textContent = "Password is too short!";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Password is strong!";
            feedback.style.color = "green";
        }
        });

        // Form Validation
        function validateForm() {
        const name = document.getElementById("name").value;
        if (name === "") {
            alert("Name is required!");
            return false;
        }
        return true;
        }

        function validateEmail() {
        const email = document.getElementById("email").value;
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regex.test(email)) {
            alert("Please enter a valid email!");
            return false;
        }
        return true;
        }

        function validatePassword() {
        const password = document.getElementById("password").value;
        if (password.length < 8) {
            alert("Password must be at least 8 characters long!");
            return false;
        }
        return true;
        }