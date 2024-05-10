import { addNumber } from "./calculate";
import { substactNumber } from "./calculate";

const counter = document.querySelector('.counter--js');
const addButton = document.querySelector('.add--js');
const removeButton = document.querySelector('.remove--js');

let glasses = 0;

console.log(counter.innerHTML)

const key = new Date().toISOString().slice(0,10);

// if (localStorage.getItem(key)) {
//     glasses = parseInt(localStorage.getItem(key));
// }


const updateNumberDisplay = (value) =>{
    counter.innerHTML = value;
    localStorage.setItem(key, value)
}

updateNumberDisplay(glasses)


addButton.addEventListener('click', ()=> {
    glasses = glasses + 1;
    updateNumberDisplay(glasses);
})


removeButton.addEventListener('click', ()=> {
    if ( glasses >= 1) 
    {
        glasses = glasses -1;
        updateNumberDisplay(glasses);
    }
    else 
    {
        counter.textContent = 0
    }
})

