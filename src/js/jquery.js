/**
 * Created by chris.lampert on 08/06/2016.
 */

'use strict';

$(document).ready(function(){

	var buttonPlusMinus = $('#button-plus-minus');
	var buttonPercent = $('#button-percent');
	var buttonDivide = $('#button-divide');
	var buttonSeven = $('#button-seven');
	var buttonEight = $('#button-eight');
	var buttonNine = $('#button-nine');
	var buttonMultiply = $('#button-multiply');
	var buttonFour = $('#button-four');
	var buttonFive = $('#button-five');
	var buttonSix = $('#button-six');
	var buttonSubtraction = $('#button-subtraction');
	var buttonOne = $('#button-one');
	var buttonTwo = $('#button-two');
	var buttonThree = $('#button-three');
	var buttonAddition = $('#button-addition');
	var buttonZero = $('#button-zero');
	var buttonDecimal = $('#button-decimal');
	var buttonEquals = $('#button-equals');
	var calcScreen = $('#screen');
	var calculator = $('#calc-container');
	var calculation = '';
	var result;

	function clearScreen() {
		calcScreen.text('0');
	}

	$('#button-clear').click(function() {
		clearScreen();
	});

	$('#button-one').click(function() {
		$('#screen').text($('#button-one').val())
	});

});
