const display = document.querySelector('#display')
const totalDisplay = document.querySelector('#total')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')


//Event Listeners
billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)

//console.log(display.innerHTML) //printes the text inside the tags
//console.log(billInput.value) //prints the value entered into the input

//billInput.value = 999.88 // Set the value to 999.88

// Declare calculate tip function
function calculateTip() {
    const billValue = parseFloat(billInput.value)
    const tipValue = parseInt(tipInput.value) 
    const peopleValue = parseInt(peopleInput.value)
    const tipAmount = parseFloat(billValue * tipValue / 100 / peopleValue)
    const totalAmount = parseFloat(billValue / peopleValue) + tipAmount
    display.innerHTML = tipAmount.toFixed(2)
    totalDisplay.innerHTML = totalAmount.toFixed(2)
}
calculateTip()