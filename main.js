const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");



window.onload = setTimeout(() => {

    let d = document.querySelector(".d");
    let loading2 = document.querySelector(".loading2");
    d.remove();
    loading2.remove();


}, 400);

//header



let logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    window.location.href = "index.html";

});

let Home = document.querySelector(".Home");
Home.addEventListener("click", () => {
    window.location.href = "index.html";

});

let about = document.querySelector(".about");
about.addEventListener("click", () => {
    window.location.href = "about.html";

});

let Our = document.querySelector(".Our");
Our.addEventListener("click", () => {
    window.location.href = "Our.html";

});

let Shop = document.querySelector(".Shop");
Shop.addEventListener("click", () => {
    window.location.href = "Shop.html";

});

let Content = document.querySelector(".Content");
Content.addEventListener("click", () => {
    window.location.href = "Content.html";

});



let login = document.querySelector(".login");
login.addEventListener("click", () => {
    window.location.href = "Login.html";

});

let Register = document.querySelector(".Register");
Register.addEventListener("click", () => {
    window.location.href = "Register.html";

});





///////////////////////////////////////////////////



//json shop
let shoploc = document.querySelector(".shopit");
fetch("data.json")
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        data.forEach(element => {
            shoploc.innerHTML += `<div class="product buy${element.id}">
            <img src="${element.link}" alt="">
            <div class="price">
                <h2 class="blue">$</h2>
                <h2>${element.price}</h2>
            </div>
            <h2 class="name">${element.name}</h2>
        </div>`
        });
    });
//////////////////////////////////////////

/////////////////The Code/////////////////
var buy1;

setInterval(() => {
    buy1 = document.querySelectorAll(".shopit .product");
}, 1);

setTimeout(() => {
    buy1.forEach((element, i) => {
        element.addEventListener("click", () => {
            window.location.href = `product.html#${i+1}`;
        });
    });
}, 100);
////////////The End of The Code//////////






let noumberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentslide = 0;
window.onresize = function() {
    slidewidth = slideimage[0].clientWidth;
    slidescontainer.style.height = `${slideimage[0].childNodes[1].height}px`;
    slidescontainerq.style.height = "248px";
}

// set up the slider
function init() {
    /*
    slideimage[0] = 0
    slideimage[0] = 100%
    slideimage[0] = 200%
    */
    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active");
    createnavigationdots();
}


init();

// crate navigation dots
function createnavigationdots() {
    for (let i = 0; i < noumberOfImages; i++) {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);
        dot.addEventListener("click", () => {
            gotoslide(i);
        });
    }
    navigationDots.children[0].classList.add("active");
};


//next button
nextBtn.addEventListener("click", () => {
    if (currentslide >= noumberOfImages - 1) {
        gotoslide(0);
        return;
    }
    currentslide++;
    gotoslide(currentslide);
});

//prev button
prevBtn.addEventListener("click", () => {
    if (currentslide <= 0) {
        gotoslide(noumberOfImages - 1);
        return;
    }
    currentslide--;
    gotoslide(currentslide);
});

//go to slide 
function gotoslide(slideNumber) {
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

    currentslide = slideNumber;

    setactiveclass();

}

// set active class
function setactiveclass() {
    //set active class for slide img
    let currentactive = document.querySelector(".slide-image.active");
    currentactive.classList.remove("active");
    slideImage[currentslide].classList.add("active");

    // set active class for navigation dots
    let currentdot = document.querySelector(".single-dot.active");
    currentdot.classList.remove("active");
    navigationDots.children[currentslide].classList.add("active");
}