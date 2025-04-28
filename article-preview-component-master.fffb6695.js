const popEl = document.querySelector(".article__social-popup");
const btnEl = document.querySelector(".article__share-button");
console.log(popEl);
btnEl.addEventListener("click", (e)=>{
    popEl.classList.toggle("article__social-popup--hidden");
    btnEl.classList.toggle("btn--active");
});

