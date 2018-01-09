var x ="";
var y = "";
var op = "";

/**
	Code for updating and displaying the numerical display
**/
var display = document.getElementById("display");
display.innerHTML = "0";
document.getElementById("9").addEventListener("click", numberClick);
document.getElementById("8").addEventListener("click", numberClick);
document.getElementById("7").addEventListener("click", numberClick);
document.getElementById("6").addEventListener("click", numberClick);
document.getElementById("5").addEventListener("click", numberClick);
document.getElementById("4").addEventListener("click", numberClick);
document.getElementById("3").addEventListener("click", numberClick);
document.getElementById("2").addEventListener("click", numberClick);
document.getElementById("1").addEventListener("click", numberClick);
document.getElementById("0").addEventListener("click", numberClick);

function numberClick() {
	//If this is the first number being pressed, reset display
	if(display.innerHTML === "0" || display.innerHTML === "ERROR") {
		x = this.innerHTML;
		display.innerHTML = this.innerHTML;
	}
	//If this is the second operand, store appropriately in y variable
	else if(isNaN(parseInt(display.innerHTML.charAt(display.innerHTML.length - 1), 10))) {
		y = this.innerHTML;
		display.innerHTML += this.innerHTML;
	}
	else {
		if(op === "") {
			x += this.innerHTML;
		}
		else {
			y+= this.innerHTML;
		}
		display.innerHTML += this.innerHTML;
	}
}

/**
	Code for manipulating the operation buttons
	Clicking on an operation button should:
	A) Display the symbol for that operation
	B) Store the first operand
	C) Store the operation being performed and wait for the second operand
	
**/
document.getElementById("add").addEventListener("click", operatorClick);
document.getElementById("subtract").addEventListener("click", operatorClick);
document.getElementById("multiply").addEventListener("click", operatorClick);
document.getElementById("divide").addEventListener("click", operatorClick);
//Solving an operation
document.getElementById("equals").addEventListener("click", equalsClicked);

function equalsClicked() {
	x = operate(parseInt(x), parseInt(y), op);
	display.innerHTML = x;
	y = "";
	op = "";
}

function operatorClick() {
	if(op === "") {
		display.innerHTML += this.innerHTML;
		op = this.innerHTML;
	}
	else {
		var temp = this.innerHTML;
		equalsClicked();
		op = temp;
		display.innerHTML += op;
	}
}

/**
	Give user the option to clear the display
**/
document.getElementById("clear").addEventListener("click", function(){
	display.innerHTML = 0;
	x = "";
	y = "";
	op = "";
});


/**
	Code for perfomring the operations
**/

function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function mutliply(x, y) {
	return x * y;
}

function divide(x, y) {
	if(y === 0) {
		return "ERROR";
	}
	return x / y;
}

function operate(x, y, operator) {
	if(isNaN(x)) {
		return 0;
	}
	if(isNaN(y)) {
		return x;
	}
	switch(operator) {
		case "+":
			return add(x, y);
		break;
		case "-":
			return subtract(x, y);
		break;
		case "*":
			return mutliply(x, y);
		break;
		case "/":
			return divide(x, y);
		break;
	}
}