
// cart start

const buttonCart   =   document.querySelector('.button-cart'),
      modalCart    =   document.querySelector('#modal-cart'),
      modalClose   =   document.querySelector('.modal-close');
 
//  открытие модального окна по клику кнопку cart и закрытие по клику кнопки Х
const openModal = function() {
	modalCart.classList.add('show');
};

const closeModal = function() {
	modalCart.classList.remove('show');
};

buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

// закрытие модального окна по клику вне окна  и по клику кнопки Х.

modalCart.addEventListener('click', function(event){
   if (event.target.classList.contains('overlay')) {
	   closeModal()
   }

//    if (event.target.classList.contains('modal-close')){
// 	   closeModal()
//    }
});

//cart end