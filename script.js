//Retrieving all the DOM elements that we need from the form
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small"); // The querySelector() method of the Element interface returns the first element that is a descendant of the element
  small.innerText = message; // Personalizing our error message
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Email address checker
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(String(email).toLowerCase()));
  return re.test(String(email).toLowerCase()); //The test method returns true if the email supplied matches the regular expression
}

// Event listeners
form.addEventListener("submit", function (e) {
  //Listening for a submit event; when the event occurs, an event object is passed to the function as the first parameter
  e.preventDefault(); // Prevents form from being submitted

  if (username.value === "") {
    //If username field is empty, call a function that will cause error message to reveal itself
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    //If username field is empty, call a function that will cause error message to reveal itself
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Please input a valid email");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    //If username field is empty, call a function that will cause error message to reveal itself
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    //If username field is empty, call a function that will cause error message to reveal itself
    showError(password2, "Re-enter password");
  } else {
    showSuccess(password2);
  }
});
