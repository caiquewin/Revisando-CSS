"use strict";

function esconderJq() {
  $("#item").hide();
}

function mostrarJq() {
  $("#item").show();
}

function mostrarJs() {
  document.getElementById('item2').style.display = 'block';
}

function esconderJs() {
  document.getElementById('item2').style.display = 'none';
}