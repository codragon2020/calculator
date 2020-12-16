let num1 = '';
let num2 = '';
let operator = '';
let total = '';


$(document).ready(function() {
    // To determine whether a button or operator was clicked, I can compare e.target.innerHTML to see if it is between 0 and 9. 
    // If it is, the user clicked a number. If not, the user clicked an operator.
    $('button').on('click', function(e) {
        console.log('e', e.target.innerHTML);
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') {
            handleNumber(btn);
        } else {
            handleOperator(btn);
        }
    });
});

// Function to determine if num1 is assigned, if it is num2 will be assigned 
function handleNumber(num) {
    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }
    displayButton(num);
}

// Function to handle when an operator is pressed. If operator is empty, assign to operator, else call handleTotal function
function handleOperator(oper) {
    if (operator === '') {
        operator = oper;
    } else {
        handleTotal();
        operator = oper;
    }             
}

// Since we only update the display when the user presses a number
// we can call the “displayButton” function from within the “handleNumber” function.
function displayButton(btn) {
    $('.calc-result-input').text(btn);
}

// This function will create a total based on the operator pressed. 
// Since there are multiple operators that can be pressed, we will use a case statement to handle them.
function handleTotal() {
    switch (operator) {
        case '+':
            // Converts the strings to numbers
            total = +num1 + +num2;
            displayButton(total);
            break;
        case '-':
            total = +num1 - +num2;
            displayButton(total);
            break;
        case '/':
            total = +num1 / +num2;
            displayButton(total);
            break;
        case 'X':
            total = +num1 * +num2;
            displayButton(total);
            break;
    }
}