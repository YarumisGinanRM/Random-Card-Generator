/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let simbolos = ["♦", "♥", "♠", "♣"];
  let valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let pinta = randomCard(simbolos);
  let valor = randomCard(valores);

  let iconoSuperiorIzquierdo = document.getElementById(
    "iconoSuperiorIzquierdo"
  );
  iconoSuperiorIzquierdo.textContent = pinta;

  let iconoInferiorDerecho = document.getElementById("iconoInferiorDerecho");
  iconoInferiorDerecho.textContent = pinta;

  let iconoCentral = document.getElementById("iconoCentral");
  iconoCentral.textContent = valor;

  function randomCard(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function color(array) {
    if (array == "♥" || array == "♦") {
      iconoInferiorDerecho.style.color = "red";
      iconoSuperiorIzquierdo.style.color = "red";
    } else {
      iconoInferiorDerecho.style.color = "black";
      iconoSuperiorIzquierdo.style.color = "black";
    }
  }

  console.log(color(pinta, valor));
  console.log("Hello Rigo from the console!");
};
