const images = [
    "선장_찐4.jpg",
    "선장_찐5.jpg",
    "선장_찐6.jpg",
    "슈퍼참치_찐1.jpg",
    "슈퍼참치_찐2.jpg",
    "슈퍼참치_찐3.jpg",
    "어부_진2.jpg",
    "어부_진3.jpg",
    "어부_진4.jpg",
    "어부_진6.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)]


const bgImage = document.createElement("img");
bgImage.src = `../img/${chosenImage}`

leftBg = document.querySelector(".left-container");
leftBg.appendChild(bgImage);

  
