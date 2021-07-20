addEventListener('load',inicio,false);

var num1, num2, operador, total;

function screen(evt) {
	document.getElementById('resultado').innerHTML =
	document.getElementById('resultado').innerHTML + evt.target.value;
}

function inicio() {
	for (var x = 0; x <= 9; x++) {
		document.getElementById('boton' + x).addEventListener('click', screen, false);
	}
}

function punto() {
	document.getElementById('resultado').innerHTML =
	document.getElementById('resultado').innerHTML + ".";
}

function borrarNumero(){
	document.getElementById('resultado').innerHTML = document.getElementById('resultado').innerHTML.slice(0, - 1);
}

function borrarLinea() {
	document.getElementById('resultado').innerHTML = "";
}

function reset() {
	location.reload();
}

function control(operacion) {
	if(operacion == 'sumar') {
		operador = '+';
		num1 = document.getElementById('resultado').innerHTML;
		borrarLinea();
	} else if(operacion == 'restar') {
		operador = '-';
		num1 = document.getElementById('resultado').innerHTML;
		borrarLinea();
	} else if(operacion == 'multiplicar') {
		operador = '*';
		num1 = document.getElementById('resultado').innerHTML;
		borrarLinea();
	} else if(operacion == 'dividir') {
		operador = '/';
		num1 = document.getElementById('resultado').innerHTML;
		borrarLinea();
	} else if(operacion == 'resultado') {
		num2 = document.getElementById('resultado').innerHTML;

	//switch operador
		switch (operador) {
			case '+':
				total = parseFloat(num1) + parseFloat(num2);
				total = total.toFixed(2);
				break;
			case '-':
				total = parseFloat(num1) - parseFloat(num2);
				total = total.toFixed(2);
				break;
			case '*':
				total = parseFloat(num1) * parseFloat(num2);
				total = total.toFixed(2);
				break;
			case '/':
				total = parseFloat(num1) / parseFloat(num2);
				total = total.toFixed(2);
				break;
		}
		
		document.getElementById('resultado').innerHTML = total;
	}
}