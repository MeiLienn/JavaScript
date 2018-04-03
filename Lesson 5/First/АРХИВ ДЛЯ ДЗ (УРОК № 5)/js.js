let p2=document.getElementsByClassName('menu-item')[2]; //Пункт второй
let p3=document.getElementsByClassName('menu-item')[1]; //Пункт третий
		
p3.parentNode.insertBefore(p2.parentNode.removeChild(p2),p3); //Перемещение

let p5 = document.createElement('li'); //Пятый пункт
p5.classList.add('menu-item');
p5.textContent = 'Пятый пункт';
p3.parentNode.appendChild(p5);

//Замена картинки
document.body.style.backgroundImage = "url('img/apple_true.jpg')"; 

//Вывод текста из элемента с изменениями
document.getElementById('title').innerHTML = 'Мы продаем только подлинную технику Apple';

//Удаление рекламы
let adv = document.querySelector('.adv').remove();

//Вопрос
let question = prompt("Как вы относитесь к технике Apple?","");

while (question == '' || question == null){
	question = prompt("Как вы относитесь к технике Apple?","");
}

let text = document.getElementById('prompt').textContent = question;