function modal(){
	let more =  document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

//Модальное окно для кнопок "Узнать подробнее"
	let descriptionBtn = document.querySelectorAll('.description-btn');

	for(let i=0; i<descriptionBtn.length; i++){
		descriptionBtn[i].addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
			});
	}

}

module.exports = modal;