import { data } from "./data.js";

const list = document.querySelectorAll(".nav ul li");
const visualImg = document.querySelector(".visual img");
const nickName = document.querySelector(".nickName");

function changeCharacter(color, name, alt) {
  visualImg.src = `./assets/${name.toLowerCase()}.jpeg`;
  visualImg.alt = alt;
  nickName.textContent = name;

  document.body.style.background = `linear-gradient(to bottom, ${color[0]}, ${color[1]})`;
}
function changeSelect(item, index) {
  item.addEventListener("click", () => {
    list.forEach((li) => li.classList.remove("is-active"));

    item.classList.add("is-active");

    const { color, name, alt } = data[index];

    changeCharacter(color, name, alt);
  });
}

list.forEach((item, index) => {
  changeSelect(item, index);
});
/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/
