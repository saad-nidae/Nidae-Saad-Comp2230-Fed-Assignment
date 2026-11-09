// Survey form script
// Step 1 : get the parts of the page we need
const form = document.getElementById("surveyForm");
const tableBody = document.getElementById("resultsBody");
const clearButton = document.getElementById("clearBtn");

function isNotEmpty(text) {
  if (text.trim() === "") {
    return false;
  } else {
    return true;
  }
}

function isValidEmail(text) {
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(text);
}

function isValidUsername(text) {
  // letters and numbers only, 4 to 12 characters
  const usernamePattern = /^[a-zA-Z0-9]{4,12}$/;
  return usernamePattern.test(text);
}

function isValidDate(text) {
  // must look like 25-12-2026
  const datePattern = /^\d\d-\d\d-\d{4}$/;
  return datePattern.test(text);
}

function isValidCode(text) {
  // must look like ABC-1234
  const codePattern = /^[A-Z]{3}-\d{4}$/;
  return codePattern.test(text);
}

function isSelected(text) {
  if (text === "") {
    return false;
  } else {
    return true;
  }
}

function hasCheckedOption(groupName) {
  const options = document.getElementsByName(groupName);
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      return true;
    }
  }
  return false;
}

function showError(spanId, message) {
  const span = document.getElementById(spanId);
  span.textContent = message;
}

function clearErrors() {
  const spans = document.getElementsByClassName("error");
  for (let i = 0; i < spans.length; i++) {
    spans[i].textContent = "";
  }
}
function saveTable() {
  localStorage.setItem("tableData", tableBody.innerHTML);
}

function loadTable() {
  const savedData = localStorage.getItem("tableData");
  if (savedData) {
    tableBody.innerHTML = savedData;
  }
}

// Step 5: when the user clicks submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  // get the values from the form
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const visitDate = document.getElementById("visitDate").value;
  const receiptCode = document.getElementById("receiptCode").value;
  const location = document.getElementById("location").value;
  const rating = document.getElementById("rating").value;
  const comments = document.getElementById("comments").value;

  // this stays true unless we find a mistake
  let formIsValid = true;

  if (!isNotEmpty(name)) {
    showError("fullNameError", "Please enter your name.");
    formIsValid = false;
  }

  if (!isNotEmpty(email)) {
    showError("emailError", "Please enter your email.");
    formIsValid = false;
  } else if (!isValidEmail(email)) {
    showError("emailError", "Please enter a valid email like name@example.com.");
    formIsValid = false;
  }

  if (!isValidUsername(username)) {
    showError("usernameError", "Use 4 to 12 letters or numbers only.");
    formIsValid = false;
  }

  if (!isValidDate(visitDate)) {
    showError("visitDateError", "Use the format DD-MM-YYYY, for example 25-12-2026.");
    formIsValid = false;
  }

  if (!isValidCode(receiptCode)) {
    showError("receiptCodeError", "Use the format ABC-1234.");
    formIsValid = false;
  }

  if (!hasCheckedOption("frequency")) {
    showError("frequencyError", "Please pick one option.");
    formIsValid = false;
  }

  if (!hasCheckedOption("orders")) {
    showError("ordersError", "Please pick at least one item.");
    formIsValid = false;
  }

  if (!isSelected(location)) {
    showError("locationError", "Please choose a location.");
    formIsValid = false;
  }

  if (rating < 1 || rating > 10 || rating === "") {
    showError("ratingError", "Please enter a number from 1 to 10.");
    formIsValid = false;
  }

  if (comments.trim().length < 10) {
    showError("commentsError", "Please write at least 10 characters.");
    formIsValid = false;
  }

  // stop here if something was wrong
  if (formIsValid === false) {
    return;
  }

  // find which radio button is picked
  let frequency = "";
  const frequencyOptions = document.getElementsByName("frequency");
  for (let i = 0; i < frequencyOptions.length; i++) {
    if (frequencyOptions[i].checked) {
      frequency = frequencyOptions[i].value;
    }
  }

  // find which checkboxes are picked
  let orders = "";
  const orderOptions = document.getElementsByName("orders");
  for (let i = 0; i < orderOptions.length; i++) {
    if (orderOptions[i].checked) {
      orders = orders + orderOptions[i].value + " ";
    }
  }

  // make a new row and fill it
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = name;
  row.appendChild(nameCell);

  const emailCell = document.createElement("td");
  emailCell.textContent = email;
  row.appendChild(emailCell);

  const usernameCell = document.createElement("td");
  usernameCell.textContent = username;
  row.appendChild(usernameCell);

  const dateCell = document.createElement("td");
  dateCell.textContent = visitDate;
  row.appendChild(dateCell);

  const codeCell = document.createElement("td");
  codeCell.textContent = receiptCode;
  row.appendChild(codeCell);

  const frequencyCell = document.createElement("td");
  frequencyCell.textContent = frequency;
  row.appendChild(frequencyCell);

  const ordersCell = document.createElement("td");
  ordersCell.textContent = orders;
  row.appendChild(ordersCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = location;
  row.appendChild(locationCell);

  const ratingCell = document.createElement("td");
  ratingCell.textContent = rating;
  row.appendChild(ratingCell);

  const commentsCell = document.createElement("td");
  commentsCell.textContent = comments;
  row.appendChild(commentsCell);

  // add the row to the table, save it, and empty the form
  tableBody.appendChild(row);
  saveTable();
  form.reset();
});

// Step 6: clear button
clearButton.addEventListener("click", function () {
  tableBody.innerHTML = "";
  localStorage.removeItem("tableData");
});

// Step 7: show saved rows when the page opens
loadTable();
