// Loan object
function Loan(c, n, ti, ta){
	this.montant_pret = c
	this.duree = n
	this.taux_interet = ti
	this.taux_assurance = ta
}

// Public methods
Loan.prototype.calculateTotalInsurance = function(){
	return this.montant_pret * this.taux_assurance * (this.duree / 12)
}

Loan.prototype.calculateMonthlyInsurance = function(){
	return this.calculateTotalInsurance() / this.duree
}

Loan.prototype.calculateMonthlyInterest = function(){
	return (this.montant_pret * (this.taux_interet/12)) / (1 - ( Math.pow((1 + (this.taux_interet/12)), -this.duree)))
}

Loan.prototype.calculateTotalInterest = function(){
	return this.calculateMonthlyInterest() * this.duree
}

Loan.prototype.calculateMonthlyCombined = function(){
	return this.calculateMonthlyInsurance() + this.calculateMonthlyInterest()
}

Loan.prototype.calculateTotalCombined = function(){
	return this.calculateMonthlyCombined() * this.duree
}

Loan.prototype.calculateTotalCost = function(){
	return this.calculateTotalCombined() - this.montant_pret
}

// Amount to borrow with x per month object
function AmountToBorrow(c, n, ti){
	this.mensualite = c
	this.duree = n
	this.taux_interet = ti
}

// Public methods
AmountToBorrow.prototype.calculateAmountPossible = function(){
	return this.mensualite / ((this.taux_interet/12) * Math.pow(1 + (this.taux_interet/12), this.duree) / (Math.pow(1 + (this.taux_interet/12), this.duree) -1))
}

// Formatting functions
function commasToPoints(number){
	number_array = number.split('')
	for (var i = 0, n = number_array.length; i < n; i++) {
		if(number_array[i] === ','){
			number_array[i] = '.'
		}
	}
	return number_array.join('')
}

function pointsToCommas(number){
	number_array = number.toString().split('')
	for (var i = 0, n = number_array.length; i < n; i++) {
		if(number_array[i] === '.'){
			number_array[i] = ','
		}
	}
	return number_array.join('')
}

function moneyRound(num){
	return parseFloat(Math.ceil(num * 100) / 100).toFixed(2);
	
}

function percentageConverter(percent){
	return percent / 100
}

