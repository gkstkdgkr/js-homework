import { emailReg, pwReg } from "./textReg.js";

const emailInput = document.querySelector("#userEmail");
const pwdInput = document.querySelector("#userPassword");
const loginBtn = document.querySelector(".btn-login");
const emailError = document.querySelector("#userEmailError");
const passwordError = document.querySelector("#userPasswordError");

const user = {
  id: "ggg@ggg.ggg",
  pw: "gggggg1@",
};

const handleClick = function (e) {
  e.preventDefault();
  const emailCheck = emailInput.value.trim();
  const pwdCheck = pwdInput.value.trim();

  if (emailReg(emailCheck) && pwReg(pwdCheck)) {
    if (emailCheck === user.id && pwdCheck === user.pw) {
      window.location.href = "welcome.html";
    } else {
      alert("아이디 혹은 비밀번호가 옳지 않습니다.");
    }
  } else {
    if (!emailReg(emailCheck)) {
      // emailInput.classList.add("is--invalid");
      emailError.style.display = "inline-block";
    } else {
      // emailInput.classList.remove("is--invalid");
      emailError.style.display = "none";
    }

    if (!pwReg(pwdCheck)) {
      // pwdInput.classList.add("is--invalid");
      passwordError.style.display = "inline-block";
    } else {
      // pwdInput.classList.remove("is--invalid");
      passwordError.style.display = "none";
    }
  }
};

const liveCheckingEmail = function () {
  const emailCheck = emailInput.value.trim();
  if (!emailReg(emailCheck)) {
    // emailInput.classList.add("is--invalid");
    emailError.style.display = "inline-block";
  } else {
    // emailInput.classList.remove("is--invalid");
    emailError.style.display = "none";
  }
};

const liveCheckingPwd = function () {
  const pwdCheck = pwdInput.value.trim();
  if (!pwReg(pwdCheck)) {
    // pwdInput.classList.add("is--invalid");
    passwordError.style.display = "inline-block";
  } else {
    // pwdInput.classList.remove("is--invalid");
    passwordError.style.display = "none";
  }
};

loginBtn.addEventListener("click", handleClick);
emailInput.addEventListener("input", liveCheckingEmail);
pwdInput.addEventListener("input", liveCheckingPwd);
