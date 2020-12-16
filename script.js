let num1 = '';
let num2 = '';
let operator = '';
let total = '';

$(document).ready(function() {
    $('button').on('click', function(e) {
        console.log('e', e.target.innerHTML);
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') {
            console.log('number');
        } else {
            console.log('operator');
        }
    });
});