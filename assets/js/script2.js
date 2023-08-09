
/**
 * declare all the Calculator variables
 */

let calcButtons = document.querySelector('.calc-buttons');
let buttons = calcButtons.querySelectorAll('button');
let display = document.getElementsByClassName("display")[0];

let operator = '';
let operand1 = '';
let operand2 = '';
let operation = false;

buttons.forEach(button => {
    button.addEventListener('click', function () {
        let buttonValue = button.getAttribute('data-value');
        switch (buttonValue) {
            case 'AC':
                display.value = '';
                clearvalues();
                document.getElementsByClassName('display')[0].focus();
                break;
            case 'DEL':
                display.value = display.value.slice(0, -1);
                document.getElementsByClassName('display')[0].focus();
                break;
            case '%':
                if (operand1 !== '' && operator !== '' && !operation) {
                    operand2 = display.value;
                    display.value = calculate();
                    operand1 = display.value;
                    operator = '%';
                    operation = true;
                } else {
                    if (display.value === '') {
                        break;
                    } else {
                        operand1 = display.value;
                        operator = '%';
                        operation = true;
                    }
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '/':
                if (operand1 !== '' && operator !== '' && !operation) {
                    operand2 = display.value;
                    display.value = calculate();
                    operand1 = display.value;
                    operator = '/';
                    operation = true;
                } else {
                    if (display.value === '') {
                        break;
                    }
                    else {
                        operand1 = display.value;
                        operator = '/';
                        operation = true;
                    }
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '1':
                if (operation) {
                    display.value = '1';
                    operation = false;
                } else {
                    display.value += "1";
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '2':
                if (operation) {
                    display.value = '2';
                    operation = false;
                } else {
                    display.value += "2";
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '3':
                if (operation) {
                    display.value = '3';
                    operation = false;
                } else {
                    display.value += "3";
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '4':
                if (operation) {
                    display.value = '4';
                    operation = false;
                } else {
                    display.value += "4";
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '5':
                if (operation) {
                    display.value = '5';
                    operation = false;
                } else {
                    display.value += "5";
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '6':
                if (operation) {
                    display.value = '6';
                    operation = false;
                } else {
                    display.value += "6";
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '7':
                if (operation) {
                    display.value = '7';
                    operation = false;
                } else {
                    display.value += "7";
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '8':
                if (operation) {
                    display.value = '8';
                    operation = false;
                } else {
                    display.value += "8";
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '9':
                if (operation) {
                    display.value = '9';
                    operation = false;
                } else {
                    display.value += "9";
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '0':
                if (operation || display.value === "") {
                    return;
                } else {
                    display.value += "0";
                }
                break;
            case '00':
                if (operation || display.value === "") {
                    return;

                } else {
                    display.value += "00";
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '*':
                if (operand1 !== '' && operator !== '' && !operation) {
                    operand2 = display.value;
                    display.value = calculate();
                    operand1 = display.value;
                    operator = '*';
                    operation = true;
                } else {
                    if (display.value === '') {
                        break;
                    } else {
                        operand1 = display.value;
                        operator = '*';
                        operation = true;
                    }
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '+':
                if (operand1 !== '' && operator !== '' && !operation) {
                    operand2 = display.value;
                    display.value = calculate();
                    operand1 = display.value;
                    operator = '+';
                    operation = true;
                } else {
                    if (display.value === '') {
                        break;
                    } else {
                        operand1 = display.value;
                        operator = '+';
                        operation = true;
                    }
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '-':
                if (operand1 !== '' && operator !== '' && !operation) {
                    operand2 = display.value;
                    display.value = calculate();
                    operand1 = display.value;
                    operator = '-';
                    operation = true;
                } else {
                    if (display.value === '') {
                        break;
                    } else {
                        operand1 = display.value;
                        operator = '-';
                        operation = true;
                    }
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '.':
                if (operator != '' && operation) {
                    display.value = '.';
                    operation = false;
                } else {
                    if (display.value == '') {
                        display.value += '0.'
                    }
                    else if (display.value.includes(".")) {
                        break;
                    }

                    else {
                        display.value += ".";
                    }
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            case '=':
                if (operand1 === '' || operator === '') {
                    break;
                } else {
                    operand2 = display.value;
                    let result = calculate();
                    display.value = result;
                    operand1 = result;
                    operation = true;
                }
                document.getElementsByClassName('display')[0].focus();
                break;
            default:
                break;
        }
    });
});

function calculate() {
    if (operator === "/") {
        output = parseFloat(operand1) / parseFloat(operand2);
    } else if (operator === '%') {
        output = (parseFloat(operand1) * parseFloat(operand2)) / 100;
    } else if (operator === '*') {
        output = parseFloat(operand1) * parseFloat(operand2);
    } else if (operator === '-') {
        output = parseFloat(operand1) - parseFloat(operand2);
    } else if (operator === '+') {
        output = parseFloat(operand1) + parseFloat(operand2);
    }
    clearvalues();
    return (output);
}

function clearvalues() {
    operator = '';
    operand1 = '';
    operand2 = '';
}

document.addEventListener("keyup", function(event) {
    let keyPressed = event.key;
    switch (keyPressed) {
        case 'escape':
            display.value = '';
            clearvalues();
            break;
        case '%':
            if (operand1 !== '' && operator !== '' && !operation) {
                operand2 = display.value.slice(0, -1);;
                display.value = calculate();
                operand1 = display.value;
                operator = '%';
                operation = true;
            } else {
                if (display.value === '') {
                    break;
                } else {
                    operand1 = display.value.slice(0, -1);
                    operator = '%';
                    operation = true;
                    display.value = '';
                }
            }
            break;
        case '/':
            if (operand1 !== '' && operator !== '' && !operation) {
                operand2 = display.value.slice(0, -1);
                display.value = calculate();
                operand1 = display.value;
                operator = '/';
                operation = true;
            } else {
                if (display.value === '') {
                    break;
                }
                else {
                    operand1 = display.value.slice(0, -1);
                    operator = '/';
                    operation = true;
                    display.value = '';
                }
            }
            break;
        case '*':
            if (operand1 !== '' && operator !== '' && !operation) {
                operand2 = display.value.slice(0, -1);;
                display.value = calculate();
                operand1 = display.value;
                operator = '*';
                operation = true;
            } else {
                if (display.value === '') {
                    break;
                } else {
                    operand1 = display.value.slice(0, -1);;
                    operator = '*';
                    operation = true;
                    display.value = '';
                }
            }

            break;
        case '+':
            if (operand1 !== '' && operator !== '' && !operation) {
                operand2 = display.value.slice(0, -1);;
                display.value = calculate();
                operand1 = display.value;
                operator = '+';
                operation = true;
            } else {
                if (display.value === '') {
                    break;
                } else {
                    operand1 = display.value.slice(0, -1);;
                    operator = '+';
                    operation = true;
                    display.value = '';
                }
            }
            display.value = ""
            break;
        case '-':
            if (operand1 !== '' && operator !== '' && !operation) {
                operand2 = display.value.slice(0, -1);;
                display.value = calculate();
                operand1 = display.value;
                operator = '-';
                operation = true;
            } else {
                if (display.value === '') {
                    break;
                } else {
                    operand1 = display.value.slice(0, -1);;
                    operator = '-';
                    operation = true;
                    display.value = '';
                }
            }
            break;
        case 'Enter':
            if (operand1 === '' || operator === '') {
                break;
            } else {
                operand2 = display.value;
                let result = calculate();
                display.value = result;
                operand1 = result;
                operation = true;
            }
            break;
        default:
            break;
    }
});