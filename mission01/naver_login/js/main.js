import { emailReg, pwReg } from "./textReg.js";

const emailInput = document.querySelector("#userEmail");
const pwdInput = document.querySelector("#userPassword");
const loginBtn = document.querySelector(".btn-login");
const errorMessage = document.querySelector(".error-message");

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
      emailInput.classList.add("is--invalid");
    } else {
      emailInput.classList.remove("is--invalid");
    }

    if (!pwReg(pwdCheck)) {
      pwdInput.classList.add("is--invalid");
    } else {
      pwdInput.classList.remove("is--invalid");
    }
  }
};

const liveCheckingEmail = function () {
  const emailCheck = emailInput.value.trim();
  if (!emailReg(emailCheck)) {
    emailInput.classList.add("is--invalid");
  } else {
    emailInput.classList.remove("is--invalid");
  }
};

const liveCheckingPwd = function () {
  const pwdCheck = pwdInput.value.trim();
  if (!pwReg(pwdCheck)) {
    pwdInput.classList.add("is--invalid");
  } else {
    pwdInput.classList.remove("is--invalid");
  }
};

loginBtn.addEventListener("click", handleClick);
emailInput.addEventListener("input", liveCheckingEmail);
pwdInput.addEventListener("input", liveCheckingPwd);
