const quotes = [
    {
        quote: "쇼코는 정말 우스워서 웃는 게 아니라, 공감을 해서  고개를 끄덕이는 게 아니라, 그냥 상대 를 편하게 하기 위해서 그런 포즈를 취하는 것 같았다.",
        author: "쇼코의 미소, 최은영",
    },
    {
        quote: "꿈. 그것은 허영심, 공명심, 인정욕구, 복수심 같은 더 러운 마음들을 뒤집어쓴 얼룩덜룩한 허울에 불과했다.",
        author: "쇼코의 미소, 최은영",
    },
    {
        quote: "내 욕망이 그들보다 더 컸으 면 컸지 결코 더 작지 않았지만 나는 마치 이 일이 절실 하지 않은 것처럼 연기했다.",
        author: "쇼코의 미소, 최은영",
    },
    {
        quote: "재능이 없는 이들이 꿈이라 는 허울을 잡기 시작하는 순간, 그 허울은 천천히 삶을 좀먹어간다.",
        author: "쇼코의 미소, 최은영",
    },
]

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;