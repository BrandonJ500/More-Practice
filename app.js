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

//used to change the prompt into an int
//so we can add to our counter
let newUser = parseInt(userPompt);
//buttons append to new section
const Nsec = document.querySelector("#newSec");

//counter for total number of buttons
let total = 0;

//used to output the number of buttons
const h3 = document.querySelector("h3");
//adds buttons when clicked 
btn.addEventListener('click', () => {
  
    //dynamically creates buttons based 
    //on how many the user specifies 
    for(let i = 0; i < newUser;  i++){

        //creates the new button
       const newBtn = document.createElement("button");

       //adds the inner text
       newBtn.innerText = "click me";

       //sets every dynamically generated buttons id to nBtn
       newBtn.setAttribute("id", "nBtn");
       newBtn.style.backgroundColor = rand();
       //appends the button to the next section
       Nsec.appendChild(newBtn);
    }
    total = total + newUser;
    h3.innerText = `Number of buttons: ${total}`



} )

const reset = document.querySelector("#reset");

//resets all dynamically generatored buttons
reset.addEventListener("click", () => {
    //gets all dynamically generatored buttons by id 
    const allDBtns = document.querySelectorAll("#nBtn");

    //loops over all dyn buttons
    for(let b of allDBtns){

        //deletes them
        b.remove();
    }
    total = 0;
    h3.innerText = `Number of buttons: ${total}`
    const nPrompt = prompt("How many buttons would you like to make?")
    newUser = parseInt(nPrompt);
})


