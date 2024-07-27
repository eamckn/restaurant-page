import misoRamen from './menu-imgs/miso.png';
import shioRamen from './menu-imgs/shio.png';
import shoyuRamen from './menu-imgs/shoyu.png';
import kimchiRamen from './menu-imgs/kimchi.png';
import tsukemenRamen from './menu-imgs/tsukemen.png';
import specialRamen from './menu-imgs/special.png';


export default function loadMenu() {

    // Initialize icons
    const misoImage = new Image();
    misoImage.src = misoRamen;

    const shioImage = new Image();
    shioImage.src = shioRamen;

    const shoyuImage = new Image();
    shoyuImage.src = shoyuRamen;

    const kimchiImage = new Image();
    kimchiImage.src = kimchiRamen;

    const tsukemenImage = new Image();
    tsukemenImage.src = tsukemenRamen;

    const specialImage = new Image();
    specialImage.src = specialRamen;
    //

    const content = document.querySelector("#content");

    const menuGrid = document.createElement("div");
    menuGrid.setAttribute("id", "menu-grid")

    const misoItem = document.createElement("div");
    misoItem.className = "menu-item";
    misoItem.setAttribute("id", "miso");
    misoItem.appendChild(misoImage);
    const misoText = document.createElement("p");
    misoText.innerHTML = "Miso Ramen";
    misoItem.appendChild(misoText);

    const shioItem = document.createElement("div");
    shioItem.className = "menu-item";
    shioItem.setAttribute("id", "shio");
    shioItem.appendChild(shioImage);
    const shioText = document.createElement("p");
    shioText.innerHTML = "Shio Ramen";
    shioItem.appendChild(shioText);

    const shoyuItem = document.createElement("div");
    shoyuItem.className = "menu-item";
    shoyuItem.setAttribute("id", "shoyu");
    shoyuItem.appendChild(shoyuImage);
    const shoyuText = document.createElement("p");
    shoyuText.innerHTML = "Shoyu Ramen";
    shoyuItem.appendChild(shoyuText);

    const kimchiItem = document.createElement("div");
    kimchiItem.className = "menu-item";
    kimchiItem.setAttribute("id", "kimchi");
    kimchiItem.appendChild(kimchiImage);
    const kimchiText = document.createElement("p");
    kimchiText.innerHTML = "Kimchi Ramen";
    kimchiItem.appendChild(kimchiText);

    const tsukemenItem = document.createElement("div");
    tsukemenItem.className = "menu-item";
    tsukemenItem.setAttribute("id", "tsukemen");
    tsukemenItem.appendChild(tsukemenImage);
    const tsukemenText = document.createElement("p");
    tsukemenText.innerHTML = "Tsukemen";
    tsukemenItem.appendChild(tsukemenText);

    const specialItem = document.createElement("div");
    specialItem.className = "menu-item";
    specialItem.setAttribute("id", "special");
    specialItem.appendChild(specialImage);
    const specialText = document.createElement("p");
    specialText.innerHTML = "Chef's Special";
    specialItem.appendChild(specialText);

    let menu = [misoItem, shioItem, shoyuItem, kimchiItem, tsukemenItem, specialItem];

    for (let item of menu) {
        menuGrid.appendChild(item);
    }

    content.appendChild(menuGrid);
}