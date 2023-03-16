//selects button from the id
const btn = document.querySelector('#btn');

//random color generator
//random number generator between 0 and 255
const rand = () => {
    const r = Math.floor((Math.random() * 255) + 1);
    const g = Math.floor((Math.random() * 255) + 1);
    const b = Math.floor((Math.random() * 255) + 1);

    //returns and rgb color 
    return `rgb(${r},${g},${b})`
}

let userPompt = prompt("How many buttons to you want to create?");


const Nsec = document.querySelector("#newSec");

    
btn.addEventListener('click', () => {
  
    for(let i = 0; i < userPompt;  i++){
       const newBtn = document.createElement("button");
       newBtn.innerText = "click me";
       newBtn.setAttribute("id", "nBtn");
       Nsec.appendChild(newBtn);
    }

} )