"use strict"
const gamePlaces__Small = document.querySelector('.gamePlaces__Small');
const btn = document.querySelector('.btn');
const gamePlaces_gameOver = document.querySelector('.gamePlaces__gameOver');
const gamePlaces__gameStart = document.querySelector('.gamePlaces__gameStart');
const count =document.querySelector('#count');
let counter=0;
let timeoutId= null;
function handleClick() {
    let x = gamePlaces__Small.clientWidth - 350;
    x = x * Math.random();
    x = Math.floor(x);
    let y = gamePlaces__Small.clientHeight - 350;
    y = y * Math.random();
    y = Math.floor(y);
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
    counter++;
    count.textContent= counter;
    clearTimeout(timeoutId);
    timeoutId= setTimeout(gameOver, 2000)
}
btn.addEventListener('click', handleClick);
gamePlaces__gameStart.addEventListener('click',
    function () {
        gamePlaces__gameStart.classList.add('hidden')
        btn.classList.remove('hidden')
        count.classList.remove('hidden')
        timeoutId = setTimeout(gameOver, 2000)
        
    })
function gameOver(){
    gamePlaces_gameOver.classList.remove('hidden');
    btn.classList.add('hidden');
}