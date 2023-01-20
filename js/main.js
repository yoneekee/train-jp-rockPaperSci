const comItems = document.querySelectorAll("#com ul li");
const playerItems = document.querySelectorAll("#player ul li");

function random() {
  for (let i = 0; i < 3; i++) {
    comItems[i].style.display = "none";
  }

  const num = parseInt(Math.random() * comItems.length);
  comItems[num].style.display = "block";
}

setInterval(random, 20);
