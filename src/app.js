/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let card = document.querySelector(".card");
  let num = document.querySelector(".number");
  let suits = ["hearts", "spades", "diamonds", "clubs"];
  let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let randomnumber = array => {
    return Math.floor(Math.random() * array.length);
  };
  card.classList.add(suits[randomnumber(suits)]);
  num.innerHTML = ranks[randomnumber(ranks)];
};
