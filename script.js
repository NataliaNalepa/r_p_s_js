"use strict";

const btnStart = document.querySelector(".btn--start");
const modal = document.querySelector(".settings-modal");
const player1 = document.querySelector("#player--0");
const player2 = document.querySelector("#player--1");
const name0 = document.querySelector("#name--0");
const name1 = document.querySelector("#name--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current = document.querySelector("#current");
const img0 = document.querySelector(".img--0");
const img1 = document.querySelector(".img--1");
const btnSubmit = document.querySelector(".btn--submit");
const btnPlay = document.querySelector(".btn--play");
const playerSection1 = document.querySelector(".player--0");
const playerSection2 = document.querySelector(".player--1");
const scoresSection = document.querySelector(".scores");

let names = [];
btnSubmit.disabled = true;

btnStart.addEventListener("click", function () {
  modal.classList.remove("hide");
  btnStart.classList.add("hide");
});

const validation = function () {
  if (player1.value !== "" && player2.value !== "") {
    btnSubmit.disabled = false;
  }
};

btnSubmit.addEventListener("click", function () {
  playerSection1.classList.remove("hide");
  playerSection2.classList.remove("hide");
  scoresSection.classList.remove("hide");
  modal.classList.add("hide");

  names[0] = player1.value;
  names[1] = player2.value;
  name0.textContent = names[0];
  name1.textContent = names[1];
});

const random = function () {
  const randomNumber = Math.trunc(Math.random() * 3) + 1;
  return randomNumber;
};

btnPlay.addEventListener("click", function () {
  const random1 = random();
  const random2 = random();
  let item1, item2;
  playerSection1.classList.remove("winner");
  playerSection2.classList.remove("winner");
  playerSection1.classList.remove("beaten");
  playerSection2.classList.remove("beaten");
  img0.classList.remove("hidden");
  score0.classList.remove("hidden");
  img1.classList.remove("hidden");
  score1.classList.remove("hidden");

  if (random1 === 1) {
    item1 = "papier";
    img0.src = `image-${random1}.jpg`;
  } else if (random1 === 2) {
    item1 = "kamień";
    img0.src = `image-${random1}.jpg`;
  } else {
    item1 = "nożyce";
    img0.src = `image-${random1}.jpg`;
  }

  if (random2 === 1) {
    item2 = "papier";
    img1.src = `image-${random2}.jpg`;
  } else if (random2 === 2) {
    item2 = "kamień";
    img1.src = `image-${random2}.jpg`;
  } else {
    item2 = "nożyce";
    img1.src = `image-${random2}.jpg`;
  }

  score0.textContent = item1;
  score1.textContent = item2;

  if (random1 === random2) {
    current.textContent = "DRAW";
    playerSection1.classList.add("winner");
    playerSection2.classList.add("winner");
  } else if (random1 === 1 && random2 === 2) {
    current.textContent = names[0];
    playerSection1.classList.add("winner");
    playerSection2.classList.add("beaten");
  } else if (random1 === 2 && random2 === 1) {
    current.textContent = names[1];
    playerSection2.classList.add("winner");
    playerSection1.classList.add("beaten");
  } else if (random1 === 1 && random2 === 3) {
    current.textContent = names[1];
    playerSection2.classList.add("winner");
    playerSection1.classList.add("beaten");
  } else if (random1 === 3 && random2 === 1) {
    current.textContent = names[0];
    playerSection1.classList.add("winner");
    playerSection2.classList.add("beaten");
  } else if (random1 === 2 && random2 === 3) {
    current.textContent = names[0];
    playerSection1.classList.add("winner");
    playerSection2.classList.add("beaten");
  } else if (random1 === 3 && random2 === 2) {
    current.textContent = names[1];
    playerSection2.classList.add("winner");
    playerSection1.classList.add("beaten");
  }
});
