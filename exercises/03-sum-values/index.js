// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;


	let result = parseInt(stringA) + parseInt(stringB);
	let salida = document.querySelector('#resultNumber');
	salida.value = result;
	salida.innerHTML = result;

	//your code goes here
};
