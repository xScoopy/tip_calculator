const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')

console.log(display.innerHTML) //printes the text inside the tags
console.log(billInput.value) //prints the value entered into the input

//billInput.value = 999.88 // Set the value to 999.88

// Declare calculate tip function
function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipInput.value 

    const tipAmount = billValue * tipValue / 100

    display.innerHTML = tipAmount
}
calculateTip()