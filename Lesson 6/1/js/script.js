//Получить кнопку "Открыть магазин" через id
let open = document.getElementById('open-btn');

//Получить все поля в левом меню через классы
let name = document.getElementsByClassName('name')[0],
	nameValue = document.getElementsByClassName('name-value')[0],


	budget = document.getElementsByClassName('budget')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],

	goods = document.getElementsByClassName('goods')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],

	items = document.getElementsByClassName('items')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],

	employers = document.getElementsByClassName('employers')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],

	discount = document.getElementsByClassName('discount')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],

	isopen = document.getElementsByClassName('isopen')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0];

//Получить поля категории товаров через класс
let goodsItem = document.getElementsByClassName('goods-item');

//Получить все 3 кнопки через Tag
let goodsBtn = document.getElementsByTagName('button')[1],
	budgetBtn = document.getElementsByTagName('button')[2],
	employeesBtn =  document.getElementsByTagName('button')[3];

//Получить поля ввода товаров, времени и расчета бюджета через querySelector
let chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),
	
	hireEmployersItem = document.querySelectorAll('.hire-employers-item');

let money,
	price;
//Кнопка "Открыть магазин"
open.addEventListener('click', () =>{
	money = +prompt("Ваш бюджет?", "");
	while (isNaN(money) || money == '' || money == null){
		money = prompt("Ваш бюджет?","");
	}
	budgetValue.textContent = money;
	nameValue.textContent = prompt("Название вашего магазина?","").toUpperCase();
});

//Категории товаров
goodsBtn.addEventListener('click', () => {
	for (let i = 0; i < goodsItem.length; i++) {
		let a = goodsItem[i].value;

		if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50) {
			console.log("Все ок!");
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		} else {
			i=i-1;
			}
	}
});

//Продукты через запятую
chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;
	if (isNaN(items) && items !='') {
		mainList.shopItems = items.split(", ");
		mainList.shopItems.sort();
		itemsValue.textContent = mainList.shopItems;
	}
});

//Время работы магазина
timeValue.addEventListener('change', () =>{
	let time = timeValue.value;
	if (time<0){
		console.log('Такого не может быть');
		mainList.open = false;
	} else if (time>8 && time<20){
		console.log('Время работать');
		mainList.open = true;
		} else if (time<24){ 
			console.log('Слишком поздно или еще рано');
			mainList.open = false;
			} else {
				console.log('В сутках 24 часа');
				mainList.open = false;
				}

	//Красим прямоугольник в зеленый
	if (mainList.open){
		isopenValue.style.backgroundColor = 'green';
	} else{
		isopenValue.style.backgroundColor = 'red';
		}
});

//Бюджет на день
budgetBtn.addEventListener('click', () => {
	countBudgetValue.value = money / 30;
});

//Список сотрудников
employeesBtn.addEventListener('click', () => {
	for (let i=0; i<hireEmployersItem.length; i++){
		let employeeName = hireEmployersItem[i].value;
		mainList.employers[i] = employeeName;	
		employersValue.textContent += mainList.employers[i] + ', ';
	}
});

const mainList = {
	mlBudget: money,
	shopName: name,
	shopGoods:[],
	employers:{},
	open: false,
	discount: false,
	shopItems: [],

	discountSystem: function discountSystem(price){
				if (mainList.discount){
					return price*0.8;
				}
	}

}