$(document).ready(function(){

//Я не понимаю, как получить кнопку "Расписание туров"

	$('.main_btna, .main_btn').on('click', function(){
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');

	});

	$('.close').on('click', function(){
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	})

});