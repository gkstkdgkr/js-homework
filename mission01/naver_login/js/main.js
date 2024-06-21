const emailInput = document.querySelector("#userEmail");
const pwdInput = document.querySelector("#userPassword");
const loginBtn = document.querySelector(".btn-login");
const errorPage = document.querySelector(".error-message");

const user = {
  id: "ggg@ggg.ggg",
  pw: "gggggg1@",
};

const handleClick = function (e) {
  e.preventDefault();
  const emailCheck = emailInput.value.trim();
  const pwdCheck = pwdInput.value.trim();

  if (emailReg(emailCheck)) {
    if (emailCheck === user.id && pwdCheck === user.pw) {
      window.location.href = "welcome.html";
    } else {
      alert("아이디 혹은 비밀번호가 옳지 않습니다.");
    }
  } else {
    errorPage.style.display = "inline-block";
  }
};

loginBtn.addEventListener("click", handleClick);

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
