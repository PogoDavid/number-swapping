//Attaching an event listener to the button with id 'submit-button'
document.getElementById('submit-button').addEventListener('click', () => {
    //Getting the value from the input field with id 'input-number'
    let numberFromInput = document.getElementById('input-number').value;

    //Splitting the input number into individual digits
    let digits = numberFromInput.split('');

    //Looping the input number into individual digits
    for (let i = 0; i < digits.length; i++) {
        //When the index is 1 (the second digit), swap it with the last digit
        if (i == 1) {
            let swapDigit = digits[i];
            digits[i] = digits[digits.length - 1];
            digits[digits.length - 1] = swapDigit;
            //Exiting the loop after the swap operation
            break;
        }
    }

    //Joining the digits array back into a string and converting it to an integer
    let swappedNumber = parseInt(digits.join(''));

    //Getting the element to display the result
    const displayResult = document.getElementById('result');

    //Setting the text content to display the original number and the swapped number
    displayResult.textContent = `
    Original Number: ${numberFromInput}
    Swapped Number: ${swappedNumber}
    `
})