var budget = prompt("Ваш бюджет?");
		var name = prompt("Название вашего магазина?");
		
		var mainList = {
			mlBudget: budget,
			shopName: name,
			shopGoods:[],
			employers:{},
			open: true
		}

		let check = true;

		for (let i = 0; i < 3; i++) {
			let a = prompt("Какой тип товаров будем продавать?");
			if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a!='' && a.length < 50) {
				console.log("Все ок!");
				mainList.shopGoods[i] = a;
				check = true;
			} else {
				check = false;
				while (!check){
					console.log("Что-то не так");
					alert("Введите название товара верно");
					a = prompt("Какой тип товаров будем продавать?");
					if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a!='' && a.length < 50){
						check = true;
						mainList.shopGoods[i] = a;
					}
				}
			  }	
		}

		/*let i = 0;
		while (i<3) {
			let a = prompt("Какой тип товаров будем продавать?");
			if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a!='' && a.length < 50) {
				console.log("Все ок!");
				mainList.shopGoods[i] = a;
				check = true;
			} else {
				check = false;
				while (!check){
					console.log("Что-то не так");
					alert("Введите название товара верно");
					a = prompt("Какой тип товаров будем продавать?");
					if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a!='' && a.length < 50){
						check = true;
						mainList.shopGoods[i] = a;
					}
				}
			  }	
			i++;
		}*/

		/*do {
			let a = prompt("Какой тип товаров будем продавать?");
			if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a!='' && a.length < 50) {
				console.log("Все ок!");
				mainList.shopGoods[i] = a;
				check = true;
			} else {
				check = false;
				while (!check){
					console.log("Что-то не так");
					alert("Введите название товара верно");
					a = prompt("Какой тип товаров будем продавать?");
					if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a!='' && a.length < 50){
						check = true;
						mainList.shopGoods[i] = a;
					}
				}
			  }	
			i++;
		} while (i<3); */

		//console.log(mainList.shopGoods[0]);
		//console.log(mainList.shopGoods[1]);
		//console.log(mainList.shopGoods[2]);

		alert("Бюджет на 1 день: " + mainList.mlBudget/30);

		let time = 19;
		if (time<0){
			console.log('Такого не может быть');
		} else if (time>8 && time<20){
			console.log('Время работать');
		} else if (time<24){ 
			console.log('Слишком поздно или еще рано');
		} else {
			console.log('В сутках 24 часа');
		}