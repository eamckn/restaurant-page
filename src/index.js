import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';

loadHome();

const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");

function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

menuBtn.addEventListener('click', () => {
    clearContent();
    loadMenu();
});

homeBtn.addEventListener('click', () => {
    clearContent();
    loadHome();
})

//alert("Everything's bundled correctly! Cheers to that.");