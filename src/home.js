
export default function loadHome() {

    const content = document.querySelector("#content");

    const welcomeMsg = document.createElement("div");
    welcomeMsg.setAttribute("id", "welcome");
    welcomeMsg.innerHTML = "Step into the world of Naruto and enjoy Konoha’s favorite ramen at Ichiraku Ramen! Our cozy shop serves delicious, authentic ramen that shinobi and ramen lovers adore. Whether you’re a seasoned jonin or a ramen enthusiast, our rich broths, perfect noodles, and fresh toppings will delight your taste buds. Join us at Ichiraku Ramen for a tasty adventure!";

    content.appendChild(welcomeMsg);
    
}