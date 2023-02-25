const pizzaButton = document.querySelector("#pizza-button");
const sidesButton = document.querySelector("#sides-button");
const dessertsButton = document.querySelector("#desserts-button");

const pizzaMenu = document.querySelector("#pizza-menu");
const sidesMenu = document.querySelector("#sides-menu");
const dessertsMenu = document.querySelector("#desserts-menu");

pizzaButton.addEventListener("click", function() {
  pizzaMenu.style.display = "block";
  sidesMenu.style.display = "none";
  dessertsMenu.style.display = "none";
});

sidesButton.addEventListener("click", function() {
  pizzaMenu.style.display = "none";
  sidesMenu.style.display = "block";
  dessertsMenu.style.display = "none";
});

dessertsButton.addEventListener("click", function() {
  pizzaMenu.style.display = "none";
  sidesMenu.style.display = "none";
  dessertsMenu.style.display = "block";
});


