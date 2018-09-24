const option1 = document.querySelector('.search-option--1');
const grid = document.querySelector('.grid-container');
const searchHeader = document.querySelector('.search-header');

option1.addEventListener('click', () => {
    console.log('to dziala');
    searchHeader.classList.add('hide');
    grid.classList.add('topBar');
});