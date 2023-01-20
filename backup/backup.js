<script>
let sel = 0;
const result = document.querySelector("#result");
const resultList = document.createElement("ul");
//result.innerHTML = "<ul></ul>";
//const resultList = document.querySelector("#result ul");
result.appendChild(resultList);

const comList = document.querySelectorAll("#com ul li"); // 배열처럼 생겨먹은 유사 배열  NodeList
const players = document.querySelectorAll("#player ul li"); // 배열처럼 생겨먹은 유사 배열  NodeList
const playersList = document.querySelector("#player ul"); // 배열처럼 생겨먹은 유사 배열  NodeList
const cover = document.querySelector("#cover");
const btnRestart = document.querySelector("#btnRestart");

// for (let i = 0; i < comList.length; i++) {
//   comList[i].style.display = "none";
// }

//console.log(comList);

let count = 0;
//비동기 실행... 나중에  setInterval, setTimeout, node에 걸린 이벤트, ajax
const comChoice = () => {
  comList.forEach((element, index) => {
    element.style.display = "none";
  });
  sel = Math.floor(Math.random() * 3); //0 ~ 2.99999999
  comList[sel].style.display = "block"; //0,1,2
};
comChoice();
let clearIdx = setInterval(comChoice, 30);
let gameIdx;
players.forEach((element, index) => {
  element.addEventListener("click", () => {
    clearInterval(clearIdx); // 멈추기
    element.classList.add("on");
    playersList.classList.add("prevent");
    console.log(sel, "====", index);

    //다른거 li에 있는 class on 지우기...
    if (sel === index) {
      //console.log("비김");
      // const li = document.createElement("li");
      // li.classList.add("draw");
      // li.textContent = "D";
      // resultList.appendChild(li);
      resultList.innerHTML += `<li class="draw">D</li>`;
    } else if (
      (sel === 0 && index === 1) ||
      (sel === 1 && index === 2) ||
      (sel === 2 && index === 0)
    ) {
      //console.log("이김");
      resultList.innerHTML += `<li class="win">W</li>`;
    } else {
      //console.log("짐");
      resultList.innerHTML += `<li class="lose">L</li>`;
    }
    gameIdx = setTimeout(() => {
      clearIdx = setInterval(comChoice, 30);
      element.classList.remove("on");
      playersList.classList.remove("prevent");
    }, 1000);
    count++;
    if (count >= 3) {
      clearTimeout(gameIdx);
      cover.style.display = "flex";
      btnRestart.addEventListener("click", () => {
        cover.style.display = "none";
        count = 0;
        resultList.innerHTML = "";
        gameIdx = setTimeout(() => {
          clearIdx = setInterval(comChoice, 30);
          element.classList.remove("on");
          playersList.classList.remove("prevent");
        }, 1000);
      });
    }
  });
});
</script>