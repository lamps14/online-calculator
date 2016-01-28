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
	var calculation;


// Function to clear the calculator screen

function clearScreen() {
	calcScreen.innerHTML='0';
}

/*
* @description Updates the screen display
with the value of the button pressed
*/
function updateScreen(button) {
	if (Number(calcScreen.innerHTML) === 0) {
		calcScreen.innerHTML = button.value;
	} else {
		calcScreen.innerHTML += button.value;
	}
}

/*
* @description Gets the value displayed on the calculator screen
* and appends it to a string variable called calculation
*/
function getValue() {
	 	calculation = Number(calcScreen.innerHTML);
		clearScreen();
}

/*
* @description Evaluate the string 'calculation' as if it
* were numerical and display result on the calculator screen
*/
function calculate() {
	calculation += Number(calcScreen.innerHTML);

	var result = eval(calculation);
	calcScreen.innerHTML = result;
}


/*
* @event
* @description Event listener for the addition button
*/
buttonAddition.addEventListener('click', function(e) {
    getValue();
	calculation += buttonAddition.value;
});

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

/*
* @event
* @description Event listener for the equals button
*/
buttonEquals.addEventListener('click', function () {
	calculate();
    calculation = ""
})


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

buttonClear.addEventListener('click', function () {
	clearScreen();
});
