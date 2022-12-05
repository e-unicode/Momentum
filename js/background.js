const images = [
    "jin1.jpg",
    "jin2.jpg",
    "jin3.jpg",
    "jin4.jpg",
    "jin5.jpg",
    "jin6.jpg",
    "jin7.jpg",
    "jin8.jpg",
    "jin9.jpg",
    "jin10.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)]


const bgImage = document.createElement("img");
bgImage.src = "./img/" + chosenImage;

leftBg = document.querySelector(".left-container");
leftBg.appendChild(bgImage);

  
