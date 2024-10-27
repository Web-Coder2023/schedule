// Находим все контейнеры слайдеров и инициализируем их независимо
document.querySelectorAll('.events__container').forEach((container, index) => {
    // Уникальный селектор для текущего скроллбара
    const scrollbar = container.querySelector('.events__scrollbar');
    
    // Инициализация Swiper для текущего контейнера с уникальным скроллбаром
    new Swiper(container.querySelector('.events__list'), {
        direction: "horizontal",
        slidesPerView: 'auto',
        spaceBetween: 55,
        speed: 900,
        scrollbar: {
            el: scrollbar,
            draggable: true,
        },
    });
});
