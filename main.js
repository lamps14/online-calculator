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
	var tempValue;
	var secondValue;
	var calculation;

function clearScreen() {
	calcScreen.innerHTML='0';
}

function updateScreen(button) {
	if (Number(calcScreen.innerHTML) === 0) {
		calcScreen.innerHTML = button.innerHTML;
	} else {
		calcScreen.innerHTML += button.innerHTML;
	}
}


function getValue() {
	 	tempValue = Number(calcScreen.innerHTML);
		clearScreen();
}

function calculate() {
	var value1= tempValue;
	var value2 = Number(calcScreen.innerHTML);
	var operator;

	switch (calculation) {
		case '?':
			operator = '-';
			break
		case '×':
			operator = '*';
			break;
		case '÷':
			operator = '/';
			break;
		case '+':
			operator = '+';
			break;
		default:
			break;
	}
	console.log('calculation: ' + calculation);
	console.log('operator: ' + operator);
	var result = eval(value1 + operator + value2);
	calcScreen.innerHTML = result;



}



buttonAddition.addEventListener('click', function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement,
		text = target.textContent || text.innerText;
	calculation = target.innerHTML;
	getValue();
});

buttonSubtraction.addEventListener('click', function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement,
		text = target.textContent || text.innerText;
	calculation = target.innerHTML;
	getValue();
});

buttonMultiply.addEventListener('click', function(f) {
	f = f || window.event;
	var target = f.target || f.srcElement,
		text = target.textContent || text.innerText;
	calculation = target.innerHTML;
	getValue();
});

buttonDivide.addEventListener('click', function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement,
		text = target.textContent || text.innerText;
	calculation = target.innerHTML;
	getValue();
});

buttonEquals.addEventListener('click', function () {
	calculate();
})

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

buttonClear.addEventListener('click', function () {
	clearScreen();
});