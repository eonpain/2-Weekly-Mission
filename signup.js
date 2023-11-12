let inputfocus = document.querySelector("#email-input");
let emailform = document.querySelector("#email-form");
let email_null = document.createElement("p");
let email_frame_wrong = document.createElement("p");
let exist_email = document.createElement("p");
let wrong_pw_frame = document.createElement("p");
let emailframe = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
let repwd_btn = document.querySelector("#repwd-btn");
let re_pw_form = document.querySelector("#re-pw-form");

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

let pw_input = document.querySelector("#password-input");
let passwordform = document.querySelector("#pw-form");

pw_input.addEventListener("focusout", pwfocusout);
let onlynum = /^\d+$/;
let onlytext = /^[a-zA-Z]+$/;

function pwfocusout() {
  if (
    pw_input.value.length < 8 ||
    onlynum.test(pw_input.value) ||
    onlytext.test(pw_input.value)
  ) {
    pw_input.style.borderColor = "var(--red)";
    wrong_pw_frame.innerHTML =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    wrong_pw_frame.classList.add("email-error-text");
    passwordform.append(wrong_pw_frame);
  } else {
    pw_input.style.borderColor = "var(--gray20)";
  }
}

let re_pw_input = document.querySelector("#re-pw-input");
let repasswordform = document.querySelector("#re-pw-form");

re_pw_input.addEventListener("focusout", pwdconfirm);

function pwdconfirm() {
  if (re_pw_input.value !== pw_input.value) {
    if (repwd_btn.nextElementSibling !== null) {
    } else {
      re_pw_input.style.borderColor = "var(--red)";
      let not_equal = document.createElement("p");
      not_equal.innerHTML = "비밀번호가 일치하지 않아요.";
      not_equal.classList.add("email-error-text");
      repasswordform.append(not_equal);
    }
  } else {
    if (repwd_btn.nextElementSibling !== null) {
      let lastChild = re_pw_form.lastChild;
      re_pw_form.removeChild(lastChild);
      re_pw_input.style.borderColor = "var(--gray20)";
    } else {
      re_pw_input.style.borderColor = "var(--gray20)";
    }
  }
}

let signup_btn = document.querySelector("#signup-btn");
signup_btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    inputfocus.value === "" ||
    pw_input.value.length < 8 ||
    onlynum.test(pw_input.value) ||
    onlytext.test(pw_input.value) ||
    re_pw_input.value !== pw_input.value
  ) {
    alert("잘못된 입력값이 있습니다. 다시 확인하세요");
  } else if (
    inputfocus.value !== "" &&
    pw_input.value.length >= 8 &&
    emailframe.test(inputfocus.value) === true &&
    re_pw_input.value === pw_input.value
  ) {
    let newURL = "index.html";
    location.href = newURL;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password-input");
  const toggleBtn = document.getElementById("toggleBtn");
  toggleBtn.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("re-pw-input");
  const toggleBtn = document.getElementById("toggleBtn");
  toggleBtn.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});
