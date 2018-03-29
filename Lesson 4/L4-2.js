function sum(){
	let num = +prompt("Сколько массивов включить внутрь?","");
	let length = +prompt("Длина массива");
//В задании написано  "Заполняет их несколькими произвольными числами (не больше 5) и выводит сумму элементов этого массива"
//Я не совсем поняла, это длина массива не более 5, или рандомные числа не более 5
//Поэтому задала переменную length

	let array = [];

	function getRandomInRange(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	for ( let i=0; i<num; i++){
		let arr = [];
		for(let j=0; j<length; j++){
			arr[j] = getRandomInRange(0,5);
		}
		array[i]=arr;
	}

	console.log(array);

	let result = 0;

	for (let i=0; i<num; i++){
		for (let j = 0; j < array[i].length; j++){
			result += array[i][j];
		}
	}

	console.log(result);
	return result;
}

let res = sum();
alert("Сумма элементов массива: " + result);