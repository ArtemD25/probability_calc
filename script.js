var outText = document.querySelector(".output-text"),
    outNum = document.querySelector(".output-num"),
    card1 = document.querySelector(".card_1"),
    goBack = document.querySelector(".back"),
    errorText = document.querySelector(".error-text"),
    button = document.querySelector(".btn"),
    probabilityResult = 1/36;


button.addEventListener("click", function() {
  var num = +document.querySelector(".input").value;

  calcProbability(num);
  moveCardToRight(num);
});

document.addEventListener("keydown", function(evt) {
  var num = +document.querySelector(".input").value;

  if (!card1.classList.contains("marginLeft") && evt.code === "Enter") {
    //початок
    calcProbability(num);
    moveCardToRight(num);
  } else if (card1.classList.contains("marginLeft") && evt.code === "Enter") {
    //вихід з результату
    moveCardToLeft();
    clearCalculatedProbability();
    resetProbabilityResult();
  } 
});

goBack.addEventListener("click", function() {
  moveCardToLeft();
  clearCalculatedProbability();
  resetProbabilityResult();
});

function calcProbability(num) {
  
  if (num <= 1) {
    return;
  } else {
  for (let i = 1; i < num; i++) {
    probabilityResult += (1/36 * Math.pow(35/36, i)); 
    }
}
}

function eraseError() {
  errorText.classList.remove("visible");
}

function moveCardToLeft() {
  card1.classList.remove("marginLeft");
}

function clearCalculatedProbability() {
  outNum.innerText = "";
}

function moveCardToRight(num) {

  if (num >= 1) {

    if (num == 1) {
      outText.innerText = "Probability of rolling two dice 1 time and obtaining a pair of sixes is:";
    } else if (num > 1) {
      outText.innerText = "Probability of rolling two dice " + num + " times and obtaining a pair of sixes is:";
    }
    card1.classList.add("marginLeft");
    outNum.innerText = (probabilityResult * 100).toFixed(1) + " %";

  } else {
    errorText.classList.add("visible");
    setTimeout(eraseError, 1500);;
  }
  document.querySelector(".input").value = "";
}

function resetProbabilityResult() {
  probabilityResult = 1/36;
}