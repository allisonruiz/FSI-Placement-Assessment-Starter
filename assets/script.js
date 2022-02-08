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
document.getElementById('credit').textContent = (`Created by ${yourName}`);

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function(e) {
        gb++;
        let gbQuantity = document.querySelector("#qty-gb");
        gbQuantity.textContent = gb
});
gbMinusBtn.addEventListener("click", function (e) {
    if (quantity > 0) {
    gb--;
    let gbQuantity = document.querySelector("#qty-gb");
    gbQuantity.textContent = gb
    }
} );

// TODO: Hook up event listeners for the rest of the buttons