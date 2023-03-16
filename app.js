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

//prompts the user to ask how many buttons they want to make
//saves the number in userPrompt
let userPompt = prompt("How many buttons to you want to create?");

//buttons append to new section
const Nsec = document.querySelector("#newSec");

//adds buttons when clicked 
btn.addEventListener('click', () => {
  
    //dynamically creates buttons based 
    //on how many the user specifies 
    for(let i = 0; i < userPompt;  i++){

        //creates the new button
       const newBtn = document.createElement("button");

       //adds the inner text
       newBtn.innerText = "click me";

       //sets every dynamically generated buttons id to nBtn
       newBtn.setAttribute("id", "nBtn");

       //appends the button to the next section
       Nsec.appendChild(newBtn);
    }

} )