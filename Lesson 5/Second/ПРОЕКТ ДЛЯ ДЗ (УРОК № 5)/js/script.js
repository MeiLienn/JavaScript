//Получить кнопку "Открыть магазин" через id
let openShopBtn = document.getElementById('open-btn');
console.log(openShopBtn);

//Получить все поля в левом меню через классы
let name = document.getElementsByClassName('name'),
	nameValue = document.getElementsByClassName('name-value'),
	//console.log(name[0]);

	budget = document.getElementsByClassName('budget'),
	budgetValue = document.getElementsByClassName('budget-value'),

	goods = document.getElementsByClassName('goods'),
	goodsValue = document.getElementsByClassName('goods-value'),

	items = document.getElementsByClassName('items'),
	itemsValue = document.getElementsByClassName('items-value'),

	employers = document.getElementsByClassName('employers'),
	employersValue = document.getElementsByClassName('employers-value'),

	discount = document.getElementsByClassName('discount'),
	discountValue = document.getElementsByClassName('discount-value'),

	isopen = document.getElementsByClassName('isopen'),
	isopenValue = document.getElementsByClassName('isopen-value');

//Получить поля категории товаров через класс
let goodsItem = document.getElementsByClassName('goods-item');

//Получить все 3 кнопки через Tag
let buttons = document.getElementsByTagName('button');

//Получить поля ввода товаров, времени и расчета бюджета через querySelector
let chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value');

//Получить поля имен сотрудников через querySelectorAll
let employeesNames = document.querySelectorAll('.hire-employers-item');
