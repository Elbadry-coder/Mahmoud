//start jquery code--

//=============================  close and open side navebar ==============
$("#open").on("click", function () {
  $(".links_style").animate({ width: "toggle", paddingInline: "toggle" }, 500);
  $("#open").addClass("d-none");
  $("#close").removeClass("d-none");
});

$("#close").on("click", function () {
  $(".links_style").animate({ width: "toggle", paddingInline: "toggle" }, 500);
  $("#close").addClass("d-none");
  $("#open").removeClass("d-none");
});

//=============================  close and open side navebar ==============

//============================== Move to html pages  =================
$("#search").on("click", function () {
  window.location = "./search.html";
});
$("#categories").on("click", function () {
  window.location = "./categories.html";
});
$("#area").on("click", function () {
  window.location = "./area.html";
});
$("#ingredients").on("click", function () {
  window.location = "./ingredients.html";
});
$("#contact").on("click", function () {
  window.location = "./contact.html";
});

//end jqury code--

//start -- logic functions
//variables
let nameInput = document.getElementById("nameInput");

let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let ageInput = document.getElementById("ageInput");
let passwordInput = document.getElementById("passwordInput");
let repasswordInput = document.getElementById("repasswordInput");

let submitBtn = document.getElementById("submitBtn");

let btnContainer = document.getElementById("btnContainer");

//button validation
function buttonValidation() {
  if (
    nameValidation() &&
    emailValidation() &&
    phoneValidation &&
    ageValidation &&
    passwordValidation() &&
    repasswordValidation()
  ) {
    submitBtn.removeAttribute("disabled");
  }
}

btnContainer.addEventListener("mouseenter", function () {
  buttonValidation();
});

btnContainer.addEventListener("mouseleave", function () {
  submitBtn.setAttribute("disabled", "true");
});

//name validation
nameInput.addEventListener("input", function () {
  nameValidation();
});

//functions
function nameValidation() {
  let nameTest = nameInput.value;

  let nameRegex = /^\w{3,}$/;

  if (nameRegex.test(nameTest)) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    return true;
  } else {
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
    return false;
  }
}

//email validation
emailInput.addEventListener("input", function () {
  emailValidation();
});

//functions
function emailValidation() {
  let emailTest = emailInput.value;

  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailRegex.test(emailTest)) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    return true;
  } else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    return false;
  }
}

//phone validation
phoneInput.addEventListener("input", function () {
  phoneValidation();
});

//functions
function phoneValidation() {
  let phoneTest = phoneInput.value;

  let phoneRegex = /^01[0125]\d{8}$/;

  if (phoneRegex.test(phoneTest)) {
    phoneInput.classList.add("is-valid");
    phoneInput.classList.remove("is-invalid");
    return true;
  } else {
    phoneInput.classList.add("is-invalid");
    phoneInput.classList.remove("is-valid");
    return false;
  }
}

//age validation
ageInput.addEventListener("input", function () {
  ageValidation();
});

//functions
function ageValidation() {
  let ageTest = ageInput.value;

  let ageRegex = /^[2-9]{1}[0-9]{1}$/;

  if (ageRegex.test(ageTest)) {
    ageInput.classList.add("is-valid");
    ageInput.classList.remove("is-invalid");
    return true;
  } else {
    ageInput.classList.add("is-invalid");
    ageInput.classList.remove("is-valid");
    return false;
  }
}

//password validation
passwordInput.addEventListener("input", function () {
  passwordValidation();
});

//functions
function passwordValidation() {
  let passwordTest = passwordInput.value;

  let passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  if (passwordRegex.test(passwordTest)) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    return true;
  } else {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
    return false;
  }
}

//repassword Validation
repasswordInput.addEventListener("input", function () {
  repasswordValidation();
});

//functions
function repasswordValidation() {
  let repasswordTest = repasswordInput.value;

  let currentPassword = passwordInput.value;

  if (repasswordTest == currentPassword) {
    repasswordInput.classList.add("is-valid");
    repasswordInput.classList.remove("is-invalid");
    return true;
  } else {
    repasswordInput.classList.add("is-invalid");
    repasswordInput.classList.remove("is-valid");
    return false;
  }
}
