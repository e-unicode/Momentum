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
bgImage.src = `${chosenImage}`

leftBg = document.querySelector(".left-container");
leftBg.appendChild(bgImage);

// document.body.style.backgroundImage = `url("img/${chosenImage}")`;

// const colors = [
//     "#ef5777",
//     "#575fcf",
//     "#4bcffa",
//     "#34e7e4",
//     "#0be881",
//     "#f53b57",
//     "#3c40c6",
//     "#0fbcf9",
//     "#00d8d6",
//     "#05c46b",
//     "#ffc048",
//     "#ffdd59",
//     "#ff5e57",
//     "#d2dae2",
//     "#485460",
//     "#ffa801",
//     "#ffd32a",
//     "#ff3f34"
//   ];
  
//   const bgButton = document.querySelector("#bg-btn");
  
//   function changeBgColor() {
//     const leftColor = colors[Math.floor(Math.random() * colors.length)];
//     const rightColor = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
//   }
  
//   bgButton.addEventListener("click", changeBgColor);
  