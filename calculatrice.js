function percentParse(percent){
	percent_string = percent.toString();
	percent_array = percent_string.split('');
	console.log(percent_string);
	for (var i = 0, n = percent_array.length; i < n; i++) {
		if(percent_array[i] === ','){
			percent_array[i] = '.';
		}
	}

	percent = percent_array.join('');

	return (percent / 100)
}

function frenchFormat(float_num){
	float_num_string = float_num.toString();
	float_num_array = float_num_string.split('');
	for (var i = 0, n = float_num_array.length; i < n; i++) {
		if(float_num_array[i] === '.'){
			float_num_array[i] = ',';
		}
	}
	console.log('french format: '+float_num_array.join(''));
	return float_num_array.join('')
}

function moneyRound(num){
	money_num = parseFloat(Math.ceil(num * 100) / 100).toFixed(2);
	return money_num
}

function calculateMonthly(montant, duree, taux){

	m = (montant * (taux/12)) / (1 - ( Math.pow((1 + (taux/12)), -duree)));
	return moneyRound(m)
}

function calculateTotalCost(montant, duree, mensualite){
	m = (mensualite * duree) - montant;
	return m
}

input_button.addEventListener('click', function(e){

	var c = parseFloat(document.getElementById("montant").value);

	var n = parseInt(document.getElementById("duree").value * 12);

	var t = percentParse(document.getElementById("interet").value) + percentParse(document.getElementById("assurance").value);

	var taux_assurance = percentParse(document.getElementById("assurance").value);

	var taux_interet = percentParse(document.getElementById("interet").value);

	console.log(taux_interet);
	console.log(taux_assurance);
	console.log(calculateMonthly(c, n, t));
	
	if(document.getElementById('output').innerHTML !== ''){
		document.getElementById('output').innerHTML = '';
	}

	document.getElementById('output').innerHTML = 'Mensualités : ' + frenchFormat(calculateMonthly(c, n, t)) + ' €<br />';
	document.getElementById('output').innerHTML += 'Coût total : ' + calculateTotalCost(c, n, calculateMonthly(c, n, t)) + ' €<br />';

})