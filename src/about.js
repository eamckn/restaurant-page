export default function loadAbout() {

    const content = document.querySelector("#content");

    const aboutGrid = document.createElement("div");
    aboutGrid.setAttribute("id", "about-grid");

    const shopBio = document.createElement("div");
    shopBio.setAttribute("id", "shop-bio");
    const shopBioHeading = document.createElement("h2");
    const shopBioContent = document.createElement("p");
    shopBio.appendChild(shopBioHeading);
    shopBio.appendChild(shopBioContent);

    const ramenBio = document.createElement("div");
    ramenBio.setAttribute("id", "ramen-bio")
    const ramenBioHeading = document.createElement("h2");
    const ramenBioContent = document.createElement("p");
    ramenBio.appendChild(ramenBioHeading);
    ramenBio.appendChild(ramenBioContent);

    const atmosphereBio = document.createElement("div");
    atmosphereBio.setAttribute("id", "atmosphere-bio")
    const atmosphereBioHeading = document.createElement("h2");
    const atmosphereBioContent = document.createElement("p");
    atmosphereBio.appendChild(atmosphereBioHeading);
    atmosphereBio.appendChild(atmosphereBioContent);

    const missionBio = document.createElement("div");
    missionBio.setAttribute("id", "mission-bio")
    const missionBioHeading = document.createElement("h2");
    const missionBioContent = document.createElement("p");
    missionBio.appendChild(missionBioHeading);
    missionBio.appendChild(missionBioContent);

    shopBioHeading.innerHTML = "Who we are";
    ramenBioHeading.innerHTML = "Changing this for testing";
    atmosphereBioHeading.innerHTML = "Our atmosphere";
    missionBioHeading.innerHTML = "Our mission";

    shopBioContent.innerHTML = "Welcome to Ichiraku Ramen, the most beloved ramen shop in the Hidden Leaf Village! Established by Teuchi Ichiraku, Ichiraku Ramen has been a cherished destination for ramen lovers, including our most loyal customer, Lord Sixth Hokage Naruto Uzumaki.";
    ramenBioContent.innerHTML = "At Ichiraku Ramen, we pride ourselves on creating the most delicious and authentic ramen. From our rich and savory broth to our perfectly cooked noodles and mouthwatering toppings, every component is meticulously prepared. Our menu offers a variety of ramen dishes, ensuring there's something for everyone, whether you prefer a classic miso ramen or a hearty tonkotsu."
    atmosphereBioContent.innerHTML = "Our cozy and welcoming atmosphere provides the perfect setting for enjoying a comforting bowl of ramen with friends and family. Whether you're a ninja on a mission or simply looking for a satisfying meal, Ichiraku Ramen is the place to be. The warmth of our shop mirrors the warmth of our ramen, creating a space where everyone feels at home."
    missionBioContent.innerHTML = "To provide the best ramen experience in the Hidden Leaf Village, bringing joy and comfort to every customer with our delicious and authentic ramen dishes. Come join us and experience the warmth and flavor of Ichiraku Ramen, where every bowl is a story and every visit is a treasured memory. We look forward to serving you soon!"

    let bioArray = [shopBio, ramenBio, atmosphereBio, missionBio];

    content.appendChild(aboutGrid);

    for (const bio of bioArray) {
        bio.className = "bio-item";
        aboutGrid.appendChild(bio);
    }

}