function calculator(){
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function(){
		personsSum = +this.value;
		total = (daysSum * personsSum)* 4000;
		if (restDays.value == '' || personsSum < 0 || daysSum < 0 || !(Number.isInteger(personsSum)) ){
			totalValue.innerHTML = 0;
		}else {
			totalValue.innerHTML = total;
		}
	});

	restDays.addEventListener('change', function(){
		daysSum = +this.value;
		total = (daysSum * personsSum)* 4000;
		if (persons.value == '' || daysSum < 0 || personsSum < 0 || !(Number.isInteger(daysSum)) ){
			totalValue.innerHTML = 0;
		}else {
			totalValue.innerHTML = total;
		}
	});

	place.addEventListener('change', function(){
		if (restDays.value == '' || persons.value == ''){
			totalValue.innerHTML = 0;
		} else{
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

}

module.exports = calculator;