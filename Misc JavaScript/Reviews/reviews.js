// local reviews data
const reviews = [
    {
        id: 1,
        name: "Dougie Hamilton | #19",
        job: "First Line Defenseman",
        img: "./dougie.jpg",
        text:
            "Aenean nec arcu eu sapien hendrerit suscipit vitae ut quam. Integer varius euismod nisi non eleifend. Curabitur vel ligula vel.",
    },
    {
        id: 2,
        name: "Sebastian Aho | #20",
        job: "First Line Center",
        img: "./aho.jpg",
        text:
            "Fusce faucibus tortor sit amet nulla volutpat ultrices. Sed semper metus id felis maximus, sit amet tincidunt mauris facilisis. Curabitur.",
    },
    {
        id: 3,
        name: "Andrei Svechnikov | #37",
        job: "Third Line Left Wing",
        img: "./svech.jpg",
        text:
            "Praesent sed ultricies ligula. Sed eget erat non massa mattis eleifend sed tincidunt sapien. Phasellus sem erat, volutpat id venenatis.",
    },
    {
        id: 4,
        name: "Alex Nedeljkovic | #39",
        job: "Goaltender",
        img: "./ned.jpg",
        text:
            "Nunc tincidunt, ex quis viverra iaculis, ex ipsum aliquet neque, id consectetur massa mauris eget turpis. Vestibulum tempor velit ut."
    },
    {
        id: 5,
        name: "Vincent Trocheck | #16",
        job: "Second Line Center",
        img: "./trocheck.jpg",
        text:
            "Duis tellus eros, pellentesque id sem vitae, blandit tristique tortor. Suspendisse a tempor nulla. Morbi ornare tellus et condimentum dictum."
    },
];

// select items
const img = document.getElementById("player-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPlayer(currentItem);
});

// show player based on item

function showPlayer(player)
{
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next player

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1)
    {
        currentItem = 0;
    }
    showPlayer();
});

// show previous player

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0)
    {
        currentItem = reviews.length - 1;
    }
    showPlayer();
});

// show random player

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPlayer();
});