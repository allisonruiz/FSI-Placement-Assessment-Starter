let yourName = "Allison Ruiz"

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb');
const gbMinusBtn = document.querySelector('#minus-gb');
const ccPlusBtn = document.querySelector('#add-cc');
const ccMinusBtn = document.querySelector('#minus-cc');
const sugarPlusBtn = document.querySelector('#add-sugar');
const sugarMinusBtn =document.querySelector('#minus-sugar');

// Code to update name display
document.getElementById('credit').textContent = `Created by ${allisonRuiz}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
    if (quantity > 0) {
        quantity--;
        orderSummary = quantity
    }
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons