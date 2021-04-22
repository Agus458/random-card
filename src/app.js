/* eslint-disable */
import "./style.css";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let figure = ["♦", "♥", "♠", "♣"];

function generateRandom(rango) {
  return Math.floor(Math.random() * rango);
}

window.onload = function() {
  let card = document.querySelector(".card");
  let number = document.querySelector(".number");
  let figures = document.getElementsByClassName("figure");

  number.innerHTML = numbers[generateRandom(numbers.length)];
  let color = generateRandom(figure.length);
  figures[0].innerHTML = figure[color];
  figures[1].innerHTML = figure[color];

  if (figure[color] == "♦" || figure[color] == "♥") {
    card.classList.add("red");
  } else {
    card.classList.remove("red");
  }
};
