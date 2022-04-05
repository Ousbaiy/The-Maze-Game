const nextButton = document.querySelector(".next-button");
// Svg mazes
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
//Ui Messages
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");
// End Game
const scaryPicture = document.querySelector(".scary-picture");
const screamSound = document.querySelector(".scream-sound");

const collisionCheck = (value) => {
  if (value === "maze-border") alert("You Lost...Try Again");
  if (value === "finish") {
    nextButton.style.opacity = 1;
    nextButton.style.pointerEvents = "all";
    levelOne.style.pointerEvents = "none";
  }
  if (value === "end-game") {
    screamSound.play();
    scaryPicture.style.display = "block";
  }
};

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});

nextButton.addEventListener("click", () => {
  levelOne.style.display = "none";
  levelTwo.style.display = "block";
  nextButton.style.opacity = 0;
  nextButton.style.pointerEvents = "none";
  uiLevel.textContent = "Level 2";
  uiMessage.textContent = "Finish It...";
});
