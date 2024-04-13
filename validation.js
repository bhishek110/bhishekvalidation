var myname = document.getElementById("name");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var msg = document.getElementById("msg");
var spanName = document.querySelector(".name-error");
var spanPhone = document.querySelector(".phone-error");
var spanEmail = document.querySelector(".email-error");
var spanMsg = document.querySelector(".msg-error");
var msgError = document.querySelector(".error");

function validateName() {
  if (myname.value === '') {
    spanName.textContent = "Name is required";
    spanName.setAttribute("class", "name-error");
  } else {
    var i = document.createElement("i");
    spanName.innerHTML = "<i></i>";
    i.setAttribute("class", "fa-solid fa-circle-check");
    spanName.appendChild(i);
  }
}

function validatePhone() {
  if (phone.value === '' || phone.value.length <10 || phone.value.length >10) {
    spanPhone.textContent = "Phone is required";
    spanPhone.setAttribute("class", "phone-error");
  } else {
    var i = document.createElement("i");
    spanPhone.innerHTML = "<i></i>";
    i.setAttribute("class", "fa-solid fa-circle-check");
    spanPhone.appendChild(i);
  }
}

function validateEmail() {
  if (email.value === '') {
    spanEmail.textContent = "E-mail is required";
    spanEmail.setAttribute("class", "email-error");
  } else {
    var i = document.createElement("i");
    spanEmail.innerHTML = "<i></i>";
    i.setAttribute("class", "fa-solid fa-circle-check");
    spanEmail.appendChild(i);
  }
}

function validateMsg() {
  if (msg.value === '' || msg.value.length <30) {
    spanMsg.textContent = "Message should contain atleast 30 characters";
    spanMsg.setAttribute("class", "msg-error");
  } else {
    var i = document.createElement("i");
    spanMsg.innerHTML = "<i></i>";
    i.setAttribute("class", "fa-solid fa-circle-check");
    spanMsg.appendChild(i);
  }
}

function submit() {
  if (myname.value === '' || phone.value === '' || email.value === '' || msg.value === '') {
    validateName();
    validatePhone();
    validateEmail();
    validateMsg();
    msgError.textContent = "Before clicking submit you need to fill the form";
    setTimeout(function() {
      msgError.textContent = "";
    }, 3000);
  } else {
    spanName.textContent = '';
    spanPhone.textContent = '';
    spanEmail.textContent = ''; 
    spanMsg.textContent = '';
  }
}
