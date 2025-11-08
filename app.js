let cat = document.getElementById("catButton");
let shopItem1 = document.getElementById("button-1");
let shopItem2 = document.getElementById("button-2");
let shopItem3 = document.getElementById("button-3");
let animation1 = document.getElementById("animation1");
let animation2 = document.getElementById("animation2");
let animation3 = document.getElementById("animation3");
let catImage = document.querySelector("img");


// display
let counterDisplay = document.getElementById("counter");
let hpsDisplay = document.getElementById("hps");

let happinessCount = 0;
let hpsCount = 2000;
let timeout = 500;

let hasItem1 = false;
let hasItem2 = false;
let hasItem3 = false;
let currentIdleSprite = "assets/default_idle.png";
let currentActionSprite = "assets/default_idle.gif";


// cat button
cat.addEventListener("click", function(){
    happinessCount++;
    updateDisplay();
    catImage.src = currentActionSprite;

    setTimeout(function() {
        catImage.src = currentIdleSprite;
    }, timeout);
})

// set passive happiness gain persecond
setInterval(function(){
    happinessCount += hpsCount;
    updateDisplay();
}, 1000);

shopItem1.addEventListener("click", function(){
    if (happinessCount >= 50) {
        happinessCount -=50;
        hpsCount +=1;
        hasItem1 = true;
        updateDisplay();
    } else {
        alert("Not enough happiness!");
    }
})

shopItem2.addEventListener("click", function(){
    if (happinessCount >= 250) {
        happinessCount -= 250;
        hpsCount += 10;
        hasItem2 = true;        
        updateDisplay();
    } else {
        alert("Not enough happiness!");
    }
})

shopItem3.addEventListener("click", function(){
    if (happinessCount >= 1000) {
        happinessCount -= 1000;
        hpsCount += 50;
        hasItem3 = true;        
        updateDisplay();
    } else {
        alert("Not enough happiness!");
    }
})

function updateDisplay() {
    counterDisplay.innerText = `${happinessCount.toLocaleString('us-US')} ❤️`;
    hps.innerText = `${hpsCount.toLocaleString('us-US')}/s`;

    if (hasItem1) {
        animation1.style.display = "inline-block";
        animation1.addEventListener("click", function () {
            currentActionSprite = "assets/default_toy.gif";
            currentIdleSprite = "assets/default_toy.png";
            timeout = 1000;
            catImage.src = currentIdleSprite;
        })
    } 
    
    if (hasItem2) {
        animation2.style.display = "inline-block";
        animation2.addEventListener("click", function () {
            currentActionSprite = "assets/default_totebag.gif";
            currentIdleSprite = "assets/default_totebag.png";
            timeout = 2000;
            catImage.src = currentIdleSprite;
        })
    } 

    if (hasItem3) {
        animation3.style.display = "inline-block";
        animation3.addEventListener("click", function () {
            currentActionSprite = "assets/default_mp3.gif";
            currentIdleSprite = "assets/default_mp3.png";
            timeout = 1000;
            catImage.src = currentIdleSprite;
        })
    } 
}

