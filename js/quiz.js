const cards = document.querySelectorAll(".plate");
const btnNext = document.querySelector("[data-nav='next']");
const btnPrev = document.querySelector("[data-nav='prev']");

//? Скрыть все карточки
cards.forEach(function (card) {
    card.classList.add('none');
})

let currentIndex = 0; //? Для перемещения по карточкам
let currentCard = 0; //? Для прогресса

// //? Скрываем кнопку назад на первой карточке
cards[0].querySelector('[data-nav="prev"]').remove();

// //? Показываем первую карточку
cards[currentIndex].classList.remove("none");
cards[currentIndex].classList.add("visible");

//? Запускаем прогресс бар c 0%
progressBar();

window.addEventListener('click', function (e) {
    
    if (e.target.closest('[data-nav="next"]')) {
        //? Запускаем функцию перелистывания карточки
        const result = checkAnswer(cards[currentIndex]);
        let answersWrapper = cards[currentIndex].querySelector('[data-answers]');

        if (result) {
        //? Увеличиваем прогресс 
            progressBar('next');

            this.setTimeout(function () {
        //? Скрываем текущую карточку
            cards[currentIndex].classList.remove("visible");
            
            setTimeout(function () {
                cards[currentIndex].classList.add("none");
                currentIndex = currentIndex + 1;
                cards[currentIndex].classList.remove("none");

                setTimeout(function () {
                    cards[currentIndex].classList.add("visible");
                }, 200);
            }, 500);

        //? Показываем следующую карточку
            cards[currentIndex].classList.add("visible");
        //? Убираем красную рамку, если ответ дан
            answersWrapper.classList.remove("required");
            }, 500);
        }
        else {
        //? Добавляем красную рамку при отсутствии ответа
            let answersWrapper = cards[currentIndex].querySelector('[data-answers]');
            answersWrapper.classList.add("required");
        }
    }

    if (e.target.closest('[data-nav="prev"]')) {
        //? Уменьшаем прогресс 
        progressBar('prev');

        this.setTimeout(function () {
            //? Скрываем текущую карточку
            cards[currentIndex].classList.remove("visible");

            setTimeout(function () {
                cards[currentIndex].classList.add("none");
                currentIndex = currentIndex - 1;
                cards[currentIndex].classList.remove("none");

                setTimeout(function () {
                    cards[currentIndex].classList.add("visible");
                }, 200);
            }, 500);
            
            //? Показываем предидущую карточку
            cards[currentIndex].classList.add("visible");
        }, 500)
    }
})

function checkAnswer(card) {
    
    //? Проверка на то что выбрана радиокнопка
    const radioBtns = card.querySelectorAll('input[type="radio"]');
    if (radioBtns.length > 0) {
        for (let choice of radioBtns) {
            if (choice.checked) return true;
        }
    }

    //? Проверка на то что выбран(ы) чекбоксы
    const checkboxBtns = card.querySelectorAll('input[type="checkbox"]');
    if (checkboxBtns.length > 0) {
        for (let choice of checkboxBtns) {
            if (choice.checked) return true;
        }
    }
}

function progressBar(direction = 'start') {
    if (direction === 'next') {
        currentCard = currentCard + 1;
    }
    if (direction === 'prev') {
        currentCard = currentCard - 1;
    }

    const progressValue = document.querySelectorAll('.progress__label strong');
    const progressLineBar = document.querySelectorAll('.progress__line-bar');
    const countableCards = document.querySelectorAll('[data-progress]').length;

    const progress = Math.round((currentCard * 100) / countableCards);
    console.log(progress);

    progressValue.forEach(function (item) {
        item.innerText = progress + '%'
    })

    progressLineBar.forEach(function (item) {
        item.style.width = progress + '%'
    })

}

//? Маска для телефона
mask('#tel');

const submitForm = document.querySelector('#submitForm');
const telInput = document.querySelector('#tel');

submitForm.onclick = function () {
    if (telInput.value === "+" || telInput.value.length < 6) {
        telInput.value = '';
    }
}

//? Фокус на чекбоксе
const checkBoxPolicy = document.querySelector('#policy');

checkBoxPolicy.addEventListener('focus', function () {
    this.closest('label').classList.add('hovered');
})

checkBoxPolicy.addEventListener('blur', function () {
    this.closest('label').classList.remove('hovered');
})