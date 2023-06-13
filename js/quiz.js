const cards = document.querySelectorAll(".plate");
const btnNext = document.querySelector("[data-nav='next']");
const btnPrev = document.querySelector("[data-nav='prev']");

let currentIndex = 0;

// //? Скрываем кнопку назад на первой карточке
cards[0].querySelector('[data-nav="prev"]').remove();

// //? Показываем первую карточку
cards[currentIndex].classList.add("visible");

window.addEventListener('click', function (e) {
    
    if (e.target.closest('[data-nav="next"]')) {
        //? Скрываем текущую карточку
        cards[currentIndex].classList.remove("visible");
        currentIndex = currentIndex + 1;
        //? Показываем следующую карточку
        cards[currentIndex].classList.add("visible");

    }

    if (e.target.closest('[data-nav="prev"]')) {
        //? Скрываем текущую карточку
        cards[currentIndex].classList.remove("visible");
        currentIndex = currentIndex - 1;
        //? Показываем предидущую карточку
        cards[currentIndex].classList.add("visible");
    }
})

