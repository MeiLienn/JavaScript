let budget,
	name,
	time,
	price;

function start(){
	budget = prompt("Ваш бюджет?", "");

	while (isNaN(budget) || budget == '' || budget == null){
		budget = prompt("Ваш бюджет?","");
	}

	name = prompt("Название вашего магазина?","").toUpperCase();
	time = 21;
}

start();
		
var mainList = {
	mlBudget: budget,
	shopName: name,
	shopGoods:[],
	employers:{},
	open: false,
	discount: false,
	shopItems: [],

	chooseGoods: function chooseGoods(){
			for (let i = 0; i < 3; i++) {
				let a = prompt("Какой тип товаров будем продавать?","");
				if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a!='' && a.length < 50) {
					console.log("Все ок!");
					mainList.shopGoods[i] = a;
				} else {
					i=i-1;
					}
			}	
	},

	workTime: function workTime(time){
			if (time<0){
				console.log('Такого не может быть');
				} else if (time>8 && time<20){
					console.log('Время работать');
					mainList.open = true;
					} else if (time<24){ 
						console.log('Слишком поздно или еще рано');
						} else {
							console.log('В сутках 24 часа');
							}
	},

	budgetPerDay: function budgetPerDay(budget){
				alert("Бюджет на 1 день: " + mainList.mlBudget/30);
	},

	discountSystem: function discountSystem(price, discount){
				if (mainList.discount){
					return price*0.8;
				}
	},

	hiringEmployees: function hiringEmployees(){
				let employeeName;
				for (let i=0; i<4; i++){
					employeeName = prompt("Введите имя сотрудника","");
					if ((typeof(employeeName)) === 'string' && (typeof(employeeName)) !== null && employeeName!='' && employeeName.length < 50){
						mainList.employers[i] = (i+1) + ' - ' + employeeName;	
					} else {
						i=i-1;
						}
				}
	},

	chooseShopItems: function chooseShopItems(){
		let items = prompt("Перечислите через запятую товары", "");
		while ((typeof(items)) !== 'string' || (typeof(items)) == null || items=='') {
			let items = prompt("Перечислите через запятую товары", "");
		}
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Добавьте еще товар",""));
		mainList.shopItems.sort();
	}

}



mainList.workTime(time);
mainList.budgetPerDay();
mainList.chooseGoods();
mainList.hiringEmployees();
mainList.chooseShopItems();

mainList.shopItems.forEach(function(item, i, arr) {
	alert("У нас вы можете купить: " + (i+1) + " - " + item);
});

console.log("Наш магазин включает в себя:")
for (let key in mainList){
	console.log(key);
}
