import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadContact from './contact.js';

loadHome();

const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const contactBtn = document.querySelector("#contact");

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

aboutBtn.addEventListener('click', () => {
    clearContent();
    loadAbout();
})

contactBtn.addEventListener('click', () => {
    clearContent();
    loadContact();
})

//alert("Everything's bundled correctly! Cheers to that.");