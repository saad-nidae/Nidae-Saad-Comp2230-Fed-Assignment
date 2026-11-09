// Survey form script
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