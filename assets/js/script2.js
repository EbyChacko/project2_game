
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
let output;
let deleted = false;

display.focus();  /* it will keep the focus always on the display */


/**
 *  add event listeners to each of the cbutton click in the calculator
 */
buttons.forEach(button => {
    button.addEventListener('click', function () {
        let buttonValue = button.getAttribute('data-value');
        switch (buttonValue) {
            case 'AC':
                display.value = '';
                clearvalues();
                break;
            case 'DEL':
                if(deleted){
                    display.value="";
                    deleted = false;
                }
                display.value = display.value.slice(0, -1);
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
                break;
            case '1':
                if (operation) {
                    display.value = '1';
                    operation = false;
                } else {
                    display.value += "1";
                }
                break;
            case '2':
                if (operation) {
                    display.value = '2';
                    operation = false;
                } else {
                    display.value += "2";
                }
                break;
            case '3':
                if (operation) {
                    display.value = '3';
                    operation = false;
                } else {
                    display.value += "3";
                }
                break;
            case '4':
                if (operation) {
                    display.value = '4';
                    operation = false;
                } else {
                    display.value += "4";
                }
                break;
            case '5':
                if (operation) {
                    display.value = '5';
                    operation = false;
                } else {
                    display.value += "5";
                }
                break;
            case '6':
                if (operation) {
                    display.value = '6';
                    operation = false;
                } else {
                    display.value += "6";
                }
                break;
            case '7':
                if (operation) {
                    display.value = '7';
                    operation = false;
                } else {
                    display.value += "7";
                }
                break;
            case '8':
                if (operation) {
                    display.value = '8';
                    operation = false;
                } else {
                    display.value += "8";
                }
                break;
            case '9':
                if (operation) {
                    display.value = '9';
                    operation = false;
                } else {
                    display.value += "9";
                }
                break;
            case '0':
                if (operation) {
                    display.value = "0";
                }
                else if (display.value === "" || display.value === '0') {
                    break;
                } else {
                    display.value += "0";
                }
                break;
            case '00':
                if (operation) {
                    display.value = "0";
                }
                if (display.value === "" || display.value === "0") {
                    break;
                } else {
                    display.value += "00";
                }
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
                break;
            case '.':
                if (operation) {
                    display.value = '0.';
                    operation = false;
                } else {
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
                }
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
                break;
            default:
                break;
        }
    });
});


/**
 * 
 * @returns this function calculate the operations in the calculator
 */

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
    deleted=true;
    return (output);


}

/**
 * this function clear the values of oprands and operator
 */
function clearvalues() {
    operator = '';
    operand1 = '';
    operand2 = '';
}

/* it prevent the default events to happen */
document.addEventListener('keydown', function (event) {
    event.preventDefault();
});

/* It clear the display field and clear all the values saved in the operands and operators when "Esc key" pressed */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        display.value = '';
        clearvalues();
    }
});

/**
 * add event listeners to key press events for the calculator
 */
document.addEventListener("keydown", function (event) {
    let keyPressed = event.key;
    switch (keyPressed) {
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
                    operation = true;;
                }
            }
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
            }56
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
            if (operation) {
                display.value = '0';
            } else if (display.value === "") {
                return;
            } else {
                display.value += "0";
            }
            break;
        case '.':
            if (operation) {
                display.value = '0.';
                operation = false;
            } else {
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
            }
        default:
            break;
    }
});