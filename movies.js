const movieGrid = document.querySelector('.movie-grid');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const scrollAmount = 240; 

rightArrow.addEventListener('click', () => {
    movieGrid.scrollLeft += scrollAmount;
});

leftArrow.addEventListener('click', () => {
    movieGrid.scrollLeft -= scrollAmount;
});