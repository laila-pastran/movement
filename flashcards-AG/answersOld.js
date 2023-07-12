const cards = document.querySelectorAll(".card__inner");

function setup() { 
  //let a = createA("../html-gameboards/kanade.html", 'Back to Gameboard!',"_self");
  //a.position(700,730);


}

function flipCard() {
    this.classList.toggle('is-flipped');
};

cards.forEach((card) =>card.addEventListener("click", flipCard));