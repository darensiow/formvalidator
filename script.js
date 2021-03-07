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

// Function that capitalizes field names
function getFieldName(input) {
  return input.id[0].toUpperCase() + input.id.slice(1);
}

// Function takes an array of DOM elements and checks each element for its validity
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(
        input,
        `${getFieldName(input)} is required` // To print out the names of the DOM elements in capital case, e.g. Username, Email, Password
      );
    } else {
      showSuccess(input);
    }
  });
}

// A callback function that ensures the lengths of the username and password are not too short nor too long
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must contain at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} cannot contain more than ${max} characters`
    );
  }
}

// Event listeners
form.addEventListener("submit", function (e) {
  //Listening for a submit event; when the event occurs, an event object is passed to the function as the first parameter
  e.preventDefault(); // Prevents form from being submitted

  //Instead of using multiple if statements, we'll use a function that will apply the showError, showSuccess functions on the array of DOM elements
  checkRequired([username, email, password, password2]);

  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
});
