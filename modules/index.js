import { KEY_MAP, COLORS, SOUNDS } from "./constants.js";

const pads = document.querySelectorAll(".pad");
const visual = document.querySelector(".visual");

const playSound = (sounds, ind) => {
  let sound = sounds[ind];
  let audio = new Audio(sound);
  audio.load();
  audio.play();
};

const animatePad = (index) => {
  pads[index].style.animation = `dance 0.1s ease`;
  pads[index].addEventListener("animationend", function () {
    pads[index].style.animation = "none";
  });
};

const createBubble = (index) => {
  const bubble = document.createElement("div");
  visual.appendChild(bubble);

  // bubble.classList.add(`pad${index + 1}`); //рабочий костыль
  // bubble.style.animation = `jump 0.5s ease`;
  // bubble.addEventListener("animationend", function () {
  //   bubble.style.animation = "none";
  // });

  // console.log(pads[index].className);

  bubble.classList.add(pads[index].className.split(" ")[0]);
  bubble.style.animation = `jump 0.5s ease`;
  bubble.addEventListener("animationend", function () {
    bubble.style.animation = "none";
  });
};

const play = (index) => {
  playSound(SOUNDS, index);
  animatePad(index);
  createBubble(index);
};

const keyPressHandler = ({ key }) => {
  switch (key) {
    case KEY_MAP.kick:
      play(0);
      break;
    case KEY_MAP.cymbal:
      play(1);
      break;
    case KEY_MAP.snare:
      play(2);
      break;
    case KEY_MAP.openHat:
      play(3);
      break;
    case KEY_MAP.longCrash:
      play(4);
      break;
    case KEY_MAP.hitHat:
      play(5);
      break;

    default:
      console.error("Error!!! Wrong a key");
      break;
  }
};

document.addEventListener("keypress", keyPressHandler);
