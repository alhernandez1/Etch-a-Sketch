const cont = document.querySelector(".container");
let numDivs = 16;


function createDivs() {
    for (let i = 0; i < numDivs; i++){
        for (let j = 0; j < numDivs; j++){
            let div1 = document.createElement('div');
            div1.className = ("div" + i);
            div1.textContent = i;
            cont.appendChild(div1);
        }
    }
}

createDivs();

// const hov = document.getElementsByClassName("div0");
// console.log(hov);

// hov.addEventListener("mouseenter", (event) => {
//     event.target.style.color = "green";
// });