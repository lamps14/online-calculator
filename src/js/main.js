/**
 * Created by chris.lampert on 28/01/2016.
 */

'use strict';


	var buttonClear = document.getElementById('button-clear');
	var buttonPlusMinus = document.getElementById('button-plus-minus');
	var buttonPercent = document.getElementById('button-percent');
	var buttonDivide = document.getElementById('button-divide');
	var buttonSeven = document.getElementById('button-seven');
	var buttonEight = document.getElementById('button-eight');
	var buttonNine = document.getElementById('button-nine');
	var buttonMultiply = document.getElementById('button-multiply');
	var buttonFour = document.getElementById('button-four');
	var buttonFive = document.getElementById('button-five');
	var buttonSix = document.getElementById('button-six');
	var buttonSubtraction = document.getElementById('button-subtraction');
	var buttonOne = document.getElementById('button-one');
	var buttonTwo = document.getElementById('button-two');
	var buttonThree = document.getElementById('button-three');
	var buttonAddition = document.getElementById('button-addition');
	var buttonZero = document.getElementById('button-zero');
	var buttonDecimal = document.getElementById('button-decimal');
	var buttonEquals = document.getElementById('button-equals');
	var calcScreen = document.getElementById('screen');
    var calculator = document.getElementById('calc-container')
	var calculation = '';
    var result;





/*
* @description Clears the calculator screen
*/
function clearScreen() {
	calcScreen.innerHTML='0';
}

/*
* @description Updates the screen display
* with the value of the button pressed
*/
function updateScreen(button) {

    calculationHandler();

    if (Number(calcScreen.innerHTML)===result) {
        result = 0;
        clearScreen();

    }

	if (Number(calcScreen.innerHTML) === 0) {
		calcScreen.innerHTML = button.value;
	} else {
		calcScreen.innerHTML += button.value;
	}

    if (calculation.substr(calculation.length-1, 1) === '+' || calculation.substr(calculation.length-1, 1) === '-' ||
    calculation.substr(calculation.length-1, 1) === '/' || calculation.substr(calculation.length-1, 1) === '*') {
        calcScreen.innerHTML = button.value
    }
}

/*
* @description Gets the value displayed on the calculator screen
* and appends it to a string variable called calculation
*/
function getValue() {
        calculationHandler();
	 	calculation = Number(calcScreen.innerHTML);
}


/*
* @description Evaluate the string 'calculation' as if it
* were numerical and display result on the calculator screen
*/
function calculate() {
	calculation += Number(calcScreen.innerHTML);
	result = eval(calculation);
	calcScreen.innerHTML = result;
	calculation = '';
    calculationHandler();
}



/*
* @event
* @description Event listener for the addition button
*/
buttonAddition.addEventListener('click', function() {
    getValue();
	calculation += buttonAddition.value;
});

function updateScreenWithKeyPress(keyValue) {

    if (Number(calcScreen.innerHTML)===result) {
        clearScreen();
    }

	if (Number(calcScreen.innerHTML) === 0) {
		calcScreen.innerHTML = keyValue;
	} else {
		calcScreen.innerHTML += keyValue;
	}

    if (calculation.substr(calculation.length-1, 1) === '+' || calculation.substr(calculation.length-1, 1) === '-' ||
    calculation.substr(calculation.length-1, 1) === '/' || calculation.substr(calculation.length-1, 1) === '*') {
        calcScreen.innerHTML = keyValue
    }
}

function calculationHandler() {

    if (calcScreen.innerHTML === result) {
        return;
    }
}


/*
* @event
* @description Event listener for the subtraction button
*/
buttonSubtraction.addEventListener('click', function() {
    getValue();
	calculation += buttonSubtraction.value;
});

/*
* @event
* @description Event listener for the multiplication button
*/
buttonMultiply.addEventListener('click', function() {
    getValue();
	calculation += buttonMultiply.value;
});

/*
* @event
* @description Event listener for the division button
*/
buttonDivide.addEventListener('click', function() {
    getValue();
	calculation += buttonDivide.value;
});

buttonPercent.addEventListener('click', function() {
	getValue();
	calculation += buttonPercent.value;
});


/*
* @event
* @description Event listener for the equals button
*/
buttonEquals.addEventListener('click', function () {
	calculate();
});

/*
* @event
* @description Event listeners for the number buttons
*/
buttonOne.addEventListener('click', function() {
    updateScreen(buttonOne);

});

buttonTwo.addEventListener('click', function() {
	updateScreen(buttonTwo);
});

buttonThree.addEventListener('click', function() {
	updateScreen(buttonThree);
});

buttonFour.addEventListener('click', function() {
	updateScreen(buttonFour);
});

buttonFive.addEventListener('click', function() {
	updateScreen(buttonFive);
});
buttonSix.addEventListener('click', function() {
	updateScreen(buttonSix);
});

buttonSeven.addEventListener('click', function() {
	updateScreen(buttonSeven);
});

buttonEight.addEventListener('click', function() {
	updateScreen(buttonEight);
});

buttonNine.addEventListener('click', function() {
	updateScreen(buttonNine);
});

buttonZero.addEventListener('click', function() {
	updateScreen(buttonZero);
});

buttonDecimal.addEventListener('click', function() {
	updateScreen(buttonDecimal);
});


buttonClear.addEventListener('click', function () {
	clearScreen();
});

buttonPlusMinus.addEventListener('click', function() {

	if (calcScreen.innerHTML.substr(0, 1) === '-') {
		calcScreen.innerHTML = calcScreen.innerHTML.substr(1, ((calcScreen.innerHTML.length)-1));
	} else {
		calcScreen.innerHTML = '-' + calcScreen.innerHTML;
	}

});

calculator.addEventListener('keypress', function(event) {
    switch (event.keyCode) {
        case 48:
            updateScreenWithKeyPress(0);
            break;
        case 49:
            updateScreenWithKeyPress(1);
            break;
        case 50:
            updateScreenWithKeyPress(2);
            break;
        case 51:
            updateScreenWithKeyPress(3);
            break;
        case 52:
            updateScreenWithKeyPress(4);
            break;
        case 53:
            updateScreenWithKeyPress(5);
            break;
        case 54:
            updateScreenWithKeyPress(6);
            break;
        case 55:
            updateScreenWithKeyPress(7);
            break;
        case 56:
            updateScreenWithKeyPress(8);
            break;
        case 57:
            updateScreenWithKeyPress(9);
            break;
        default:
            break;
    };
});
