var navItems = document.querySelectorAll("#nav-bar a");
var interval;


var progressBar = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById("skills-container");
window.addEventListener("scroll",checkScroll);
// var animationDone = false;
// function initialiseBars(){
//     for (let bars of progressBar ) {
//         bars.style.width = 0 + "%";
//     }
// }
// //initialiseBars();

// function completeBars() {
//     for (let bars of progressBar) {
//         let targetWidth = bars.getAttribute("percent");
//         let currentWidth = 0;
//         var interval = setInterval(function() {
//             if (currentWidth > targetWidth)
//             {
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             bars.style.width = currentWidth + '%';
//         },6);
//     }
// }

// function checkScroll() {
//     let coordinates = skillsContainer.getBoundingClientRect();
//     if (!animationDone && coordinates.top <= window.innerHeight)
//     {
//         animationDone = true;
//         completeBars();
//     }else if (coordinates.top > window.innerHeight) 
//     {
//         animationDone = false;
//         initialiseBars();
//     }
// }

function fillBar(bar) {
    let targetWidth = bar.getAttribute("percent");
    let currentWidth = 0;
    let interval = setInterval(function() {
        if (currentWidth > targetWidth)
        {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    },6);
}
function initialiseBar(bar) {
    bar.style.width = 0 + '%';
}
function checkScroll() {
    for (let bar of progressBar){
        let coordinate = bar.getBoundingClientRect();
        if ((bar.getAttribute("animDone") == "false" ) && coordinate.top <= window.innerHeight)
        {
            bar.setAttribute("animDone", "true");
            fillBar(bar);
        }
        else if (coordinate.top > window.innerHeight) 
        {
            bar.setAttribute("animDone","false");
            initialiseBar(bar);
        }
    }
}

var endPoint = 0;

for(let i=0; i<navItems.length;i++) {
    navItems[i].addEventListener('click',function(event) {
        
        var targetId = this.textContent.trim().toLowerCase();
        if (targetId == 'contact')
            endPoint = 200;
        else
            endPoint = 0;
        event.preventDefault();
        var targetSection = document.getElementById(targetId);
        interval = setInterval(scrollVertically, 5, targetSection);
    });
}

function scrollVertically(targetSection) {
    var targetCoordinates = targetSection.getBoundingClientRect();
    if (targetCoordinates.top<=endPoint)
    {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,20);
}
