/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};






/*1 задание*/ 
const promoAdv = document.querySelectorAll('.promo__adv img');
promoAdv.forEach(item => {
    item.remove();
});

/*2 задание*/
const promoGenre = document.querySelector('.promo__genre');
promoGenre.innerText = 'драма';

/*3 задание*/
const promoBg = document.querySelector('.promo__bg');
const address = '../img/bg.jpg';
promoBg.style.background = `url(${address}) center center/cover no-repeat`;

/*4 и 5 задание*/
const movieList = document.querySelector('.promo__interactive-list');

movieList.innerHTML = '';

movieDB.movies.forEach((item, i) => {
    let HTML = `<li class="promo__interactive-item">${i+1} ${[item]}<div class="delete"></div></li>`;
    movieList.innerHTML += HTML;
    i++;
});
