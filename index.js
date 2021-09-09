//Movement animation onj the card and container
const card = document.querySelector('.card');
const cointaner = document.querySelector('.container');


//Animate elements

const title = document.querySelector('.title');
const iphone = document.querySelector('.iphone img');
const buy = document.querySelector('.buy button');
const info = document.querySelector('.info h3');
const variant = document.querySelector('.variant');

//Moving animation event
cointaner.addEventListener('mousemove', (e)=>
{
    
    let xAxis = (window.innerWidth/2 - e.pageX)/20;
    let yAxis = (window.innerHeight/2 - e.pageY)/20;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate IN

cointaner.addEventListener(`mouseenter`, e=>
{
    card.style.transition = 'none';

    iphone.style.transform = "translateZ(150px)";
    title.style.transform = "translateZ(125px)";
    info.style.transform = "translateZ(100px)";
    variant.style.transform = "translateZ(75px)";
    buy.style.transform = "translateZ(60px)";
    
    
});

//Animate OUT

cointaner.addEventListener(`mouseleave`, e=>
{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    iphone.style.transform = "translateZ(0px)";
    info.style.transform = "translateZ(0px)";
    variant.style.transform = "translateZ(0px)";
    buy.style.transform = "translateZ(0px)";
});