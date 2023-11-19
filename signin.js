const inputfocus = document.querySelector("#email-input");
const emailform = document.querySelector("#email-form");
const email_null = document.createElement("p");
const email_frame_wrong = document.createElement("p");
const exist_email = document.createElement("p");
const emailframe = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const email_pwd = document.querySelector("#email-pwd");
const newURL = "index.html";

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
    email_pwd.value === "sprint101"
  ) {
    const newMember = {
      email: "test@codeit.com",
      password: "sprint101",
    };

    const signInEndpoint = "https://bootcamp-api.codeit.kr/api/sign-in";

    fetch(signInEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMember),
    })
      .then((response) => response.json())
      .then((make) => {
        console.log(make.data.accessToken);
        const signuptoken = make.data.accessToken;
        localStorage.setItem("accessToken", signuptoken);
        const result = localStorage.getItem("accessToken");
    if (result) 
        // 성공적으로 로그인되었으므로 "/folder" 페이지로 이동
        {let newURL = "index.html";
        location.href = newURL;}
        return;
      });
  }
}

// const newMember = {
//   email: "test@codeit.com",
//   password: "sprint101",
// };

// const signInEndpoint = "https://bootcamp-api.codeit.kr/api/sign-in";

// fetch(signInEndpoint, {
//   method: "POST",
//   body: JSON.stringify(newMember),
// })
//   .then((response) => response.text())
//   .then((result) => {console.log(result);});
