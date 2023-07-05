let firstName = "Jane";
let lastName = "Jacobs";
let isEditing = false;

function handleFormSubmit(e) {
  e.preventDefault();
  setIsEditing(!isEditing);
}

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
}

function setFirstName(value) {
  firstName = value;
  updateDOM();
}

function setLastName(value) {
  lastName = value;
  updateDOM();
}

function setIsEditing(value) {
  isEditing = value;
  updateDOM();
}

function updateDOM() {
  if (isEditing) {
    editButton.textContent = "Save Profile";
    // TODO: show inputs, hide content
    firstNameInput.style = "";
    firstNameText.style = "display: none";
    lastNameInput.style = "";
    lastNameText.style = "display: none";
  } else {
    editButton.textContent = "Edit Profile";
    // TODO: hide inputs, show content
    firstNameInput.style = "display: none";
    firstNameText.style = "";
    lastNameInput.style = "display: none";
    lastNameText.style = "";
  }
  // TODO: update text labels
  firstNameText.innerText = firstName;
  lastNameText.innerText = lastName;
  helloText.innerText = `Hello, ${firstName} ${lastName}`;
}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "";
}

let form = document.getElementById("form");
let editButton = document.getElementById("editButton");
let firstNameInput = document.getElementById("firstNameInput");
let firstNameText = document.getElementById("firstNameText");
let lastNameInput = document.getElementById("lastNameInput");
let lastNameText = document.getElementById("lastNameText");
let helloText = document.getElementById("helloText");
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
