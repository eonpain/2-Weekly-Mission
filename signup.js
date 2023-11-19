const inputfocus = document.querySelector("#email-input");
const emailform = document.querySelector("#email-form");
const exist_email = document.createElement("p");
// const wrong_pw_frame = document.createElement("p");
const emailframe = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const pw_form = document.querySelector("#pw-form");
const repwd_btn = document.querySelector("#repwd-btn");
const re_pw_form = document.querySelector("#re-pw-form");
const pw_input = document.querySelector("#password-input");
const passwordform = document.querySelector("#pw-form");

inputfocus.addEventListener("focusout", emailfocusout);

// onChange 이벤트 추가

function emailfocusout() {
  //오류메세지 이미 있을 때 삭제
  if (document.querySelector(".email-error")) {
    console.log("dfdf");
    emailform.removeChild(document.querySelector(".email-error"));
    inputfocus.classList.remove("border-red");
  }
  // 이메일 입력안했을 때
  if (!inputfocus.value) {
    console.log("asd");
    inputfocus.classList.add("border-red");
    const email_null = document.createElement("p");
    email_null.classList.add("email-error-text");
    email_null.classList.add("email-error");
    email_null.innerHTML = "이메일을 입력해주세요";
    emailform.append(email_null);
    return null;
  }

  // 이메일 값 검증
  if (!emailframe.test(inputfocus.value)) {
    console.log("qq");
    inputfocus.classList.add("border-red");
    const email_frame_wrong = document.createElement("p");
    email_frame_wrong.innerHTML = "올바른 이메일 주소가 아닙니다";
    email_frame_wrong.classList.add("email-error-text");
    email_frame_wrong.classList.add("email-error");
    emailform.append(email_frame_wrong);
    return null;
  }
  //이메일 중복 검증

  const emailDup = {
    email: inputfocus.value,
  };

  fetch("https://bootcamp-api.codeit.kr/api/check-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailDup),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("errorr");
        throw new Error("Response Error"); // 에러 객체에 응답을 추가
      }
      return response.json();
    })
    .then((result) => {
      if (!result.exists) {
        console.log("정상적으로 이루어짐");
        let newURL = "index.html";
        // location.href = newURL;
      } else {
        throw new Error("중복 에러");
      }
    })
    .catch((err) => {
      console.log("err.response");
      console.log(err);
      inputfocus.classList.add("border-red");
      const email_frame_wrong = document.createElement("p");
      email_frame_wrong.innerHTML = "중복된 이메일입니다.";
      email_frame_wrong.classList.add("email-error-text");
      email_frame_wrong.classList.add("email-error");
      emailform.append(email_frame_wrong);
    });
}

pw_input.addEventListener("focusout", pwfocusout);
let onlynum = /^\d+$/;
let onlytext = /^[a-zA-Z]+$/;

function pwfocusout() {
  if (document.querySelector(".password-error")) {
    pw_form.removeChild(document.querySelector(".password-error"));
    pw_input.classList.remove("border-red");
  }
  if (
    pw_input.value.length < 8 ||
    onlynum.test(pw_input.value) ||
    onlytext.test(pw_input.value) ||
    pw_input.value === ""
  ) {
    const wrong_pw_frame = document.createElement("p");
    wrong_pw_frame.innerHTML =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    pw_input.classList.add("border-red");
    wrong_pw_frame.classList.add("email-error-text");
    wrong_pw_frame.classList.add("password-error");
    passwordform.append(wrong_pw_frame);
    return null;
  }
}

const re_pw_input = document.querySelector("#re-pw-input");
const repasswordform = document.querySelector("#re-pw-form");

re_pw_input.addEventListener("focusout", pwdconfirm);

function pwdconfirm() {
  if (document.querySelector(".repwd-error")) {
    re_pw_form.removeChild(document.querySelector(".repwd-error"));
    re_pw_input.classList.remove("border-red");
  }
  if (re_pw_input.value !== pw_input.value) {
    re_pw_input.classList.add("border-red");
    const not_equal = document.createElement("p");
    not_equal.innerHTML = "비밀번호가 일치하지 않아요.";
    not_equal.classList.add("email-error-text");
    not_equal.classList.add("repwd-error");
    repasswordform.append(not_equal);
    return null;
  }
}

const signup_btn = document.querySelector("#signup-btn");
signup_btn.addEventListener("click", signupcheck);

function signupcheck(event) {
  const emailval = inputfocus.value;
  const pwval = pw_input.value;
  const repwval = re_pw_input.value;

  if (
    document.querySelector(".email-error") ||
    document.querySelector(".password-error") ||
    document.querySelector(".repwd-error")
    // emailval === "" ||
    // pwval.length < 8 ||
    // onlynum.test(pwval) ||
    // onlytext.test(pwval) ||
    // repwval !== pwval
  ) {
    event.preventDefault();
    alert("이메일 혹은 비밀번호를 제대로 입력하세요.");
    return null;
  }
  // 회원가입 API 엔드포인트
  const signUpEndpoint = "https://bootcamp-api.codeit.kr/api/sign-up";

  // POST 요청에 필요한 데이터 구성
  const signUpData = {
    email: emailval,
    password: pwval,
    passwordConfirm: repwval,
  };

  // POST 요청 보내기
  fetch(signUpEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
  })
    .then((response) => {
      // 응답이 성공인 경우
      if (response.ok) {
        return response.json();
      } else {
          // event.preventDefault();
          // 응답이 실패한 경우 에러 처리
          throw new Error("회원가입에 실패했습니다.");
        }})
        .then((make) => {
        console.log(make.data.accessToken);
        const signuptoken = make.data.accessToken;
        localStorage.setItem("accessToken", signuptoken);
        const result = localStorage.getItem("accessToken");
    if (result) 
        // 성공적으로 회원가입되었으므로 "/folder" 페이지로 이동
        {let newURL = "index.html";
        location.href = newURL;}
        return;
      })
    .catch((error) => {
      // 에러 발생 시 콘솔에 출력 또는 사용자에게 알림을 추가할 수 있음
      console.error("Error:", error.message);
      alert("회원가입에 실패했습니다.");
    });
}

// if (
//   inputfocus.value === "" ||
//   pw_input.value.length < 8 ||
//   onlynum.test(pw_input.value) ||
//   onlytext.test(pw_input.value) ||
//   re_pw_input.value !== pw_input.value
// ) {
//   alert("잘못된 입력값이 있습니다. 다시 확인하세요");
//   event.preventDefault();
// } else {
//   let newURL = "index.html";
//   // location.href = newURL;
// }

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
