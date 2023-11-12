let inputfocus = document.querySelector("#email-input");
let emailform = document.querySelector("#email-form");
let email_null = document.createElement("p");
let email_frame_wrong = document.createElement("p");
let exist_email = document.createElement("p");
let emailframe = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
let email_pwd = document.querySelector("#email-pwd");

inputfocus.addEventListener("focusout", emailfocusout);

function emailfocusout() {
  if (inputfocus.value === "") {
    if (inputfocus.nextElementSibling !== null) {
      let lastChild = emailform.lastChild;
      emailform.removeChild(lastChild);
      email_null.innerHTML = "이메일을 입력해주세요";
      email_null.classList.add("email-error-text");
      emailform.append(email_null);
    } else {
      inputfocus.style.borderColor = "var(--red)";
      email_null.innerHTML = "이메일을 입력해주세요";
      email_null.classList.add("email-error-text");
      emailform.append(email_null);
    }
  } else if (emailframe.test(inputfocus.value) !== true) {
    if (inputfocus.nextElementSibling !== null) {
      let lastChild = emailform.lastChild;
      emailform.removeChild(lastChild);
      email_frame_wrong.innerHTML = "올바른 이메일 주소가 아닙니다";
      email_frame_wrong.classList.add("email-error-text");
      emailform.append(email_frame_wrong);
    } else {
      inputfocus.style.borderColor = "var(--red)";
      email_frame_wrong.innerHTML = "올바른 이메일 주소가 아닙니다";
      email_frame_wrong.classList.add("email-error-text");
      emailform.append(email_frame_wrong);
    }
  } else if (inputfocus.value === "test@codeit.com") {
    if (inputfocus.nextElementSibling !== null) {
      let lastChild = emailform.lastChild;
      emailform.removeChild(lastChild);
      let exist_email = document.createElement("p");
      exist_email.innerHTML = "이미 사용 중인 이메일입니다";
      exist_email.classList.add("email-error-text");
      emailform.append(exist_email);
    } else {
      inputfocus.style.borderColor = "var(--red)";
      let exist_email = document.createElement("p");
      exist_email.innerHTML = "이미 사용 중인 이메일입니다";
      exist_email.classList.add("email-error-text");
      emailform.append(exist_email);
    }
  } else if (inputfocus.nextElementSibling !== null) {
    let lastChild = emailform.lastChild;
    emailform.removeChild(lastChild);
    inputfocus.style.borderColor = "var(--gray20)";
  } else {
    inputfocus.style.borderColor = "var(--gray20)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("email-pwd");
  const toggleBtn = document.getElementById("toggleBtn");
  toggleBtn.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.classList.add("crossed-eye");
    } else {
      passwordInput.type = "password";
      toggleBtn.classList.remove("crossed-eye");
    }
  });
});

let signin_btn = document.querySelector("#signin-btn");
signin_btn.addEventListener("click", loginpass);

function loginpass(event) {
  event.preventDefault();
  if (
    inputfocus.value === "test@codeit.com" &&
    email_pwd.value === "codeit101"
  ) {
    let newURL = "index.html";
    location.href = newURL;
  }
}
