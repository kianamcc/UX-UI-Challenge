// Validation script for the form
const password = document.getElementById("password");
const eyeIcon = document.getElementById("eye-icon");
const danger = document.getElementById("danger-icon");
const closeBtn = document.getElementById("close-icon");
const formSubmitted = document.getElementById("form-submitted");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

// use class
// lighthouse

/* onblur event validation */
email.onblur = function () {
  if (email.value === "" || email.value === null) {
    danger.style.display = "block";
    email.style.border = "1px solid #FF0000";
    email.style.background =
      "linear-gradient(0deg, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.1)), #FFFFFF";
    email.style.boxShadow =
      "box-shadow: inset 0px 0px 10px rgba(255, 0, 0, 0.5)";
  } else {
    danger.style.display = "none";
    email.style.border = "none";
    email.style.background = "#FFFFFF";
    email.style.boxShadow = "none";
  }
};

password.onblur = function () {
  if (password.value === "" || password.value === null) {
    eyeIcon.setAttribute("src", "./assets/danger-circle-icon.svg");
    password.style.border = "1px solid #FF0000";
    password.style.background =
      "linear-gradient(0deg, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.1)), #FFFFFF";
    password.style.boxShadow =
      "box-shadow: inset 0px 0px 10px rgba(255, 0, 0, 0.5)";
  } else {
    eyeIcon.setAttribute("src", "./assets/eye-show-icon.svg");
    password.style.border = "none";
    password.style.background = "#FFFFFF";
    password.style.boxShadow = "none";
  }
};

/* Form validation */
form.addEventListener("submit", (e) => {
  if (email.value === "" || email.value === null) {
    danger.style.display = "block";
    email.style.border = "1px solid #FF0000";
    e.preventDefault();
  }
  if (password.value === "" || password.value === null) {
    eyeIcon.setAttribute("src", "./assets/danger-circle-icon.svg");
    password.style.border = "1px solid #FF0000";
    e.preventDefault();
  } else if (
    email.value !== "" &&
    email.value !== null &&
    password.value !== "" &&
    password.value !== null
  ) {
    e.preventDefault();
    form.style.display = "none";
    formSubmitted.style.display = "flex";
    form.reset();
  }
});

/* Show/hide password */
eyeIcon.addEventListener("click", (e) => {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.setAttribute("src", "./assets/eye-hide-icon.svg");
  } else {
    password.type = "password";
    eyeIcon.setAttribute("src", "./assets/eye-show-icon.svg");
  }
});

/* Close button after form submission */
closeBtn.addEventListener("click", () => {
  formSubmitted.style.display = "none";
  form.style.display = "flex";
});
