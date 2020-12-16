let num1 = '';
let num2 = '';
let operator = '';
let total = '';

$(document).ready(function() {
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

function handleNumber(num) {
    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }
}
