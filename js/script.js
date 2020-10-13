let button = document.querySelector('.buttons__link--no');
let buttonsLabel = document.querySelectorAll('.popup__label');
let popup = document.querySelector('.popup');
let buttonClose = document.querySelector('.popup__back');
let popupYes = document.querySelector('.popup__yes button');


button.addEventListener('click', function() {
  popup.classList.add('active');
});
buttonClose.addEventListener('click', function() {
  popup.classList.remove('active');
});


for (let buttonLabel of buttonsLabel) {
  buttonLabel.addEventListener('click', function() {
    let parent = buttonLabel.parentNode;
    parent.classList.add('popup__parent')
    parent.innerHTML = '';
    let popupElement = document.createElement('p');
    popupElement.textContent = 'Спасибо, что поделились!';
    popupElement.classList.add('popup__result');
    parent.appendChild(popupElement);
  });
}


popupYes.addEventListener('click', function(e) {
  e.preventDefault();
  let popupBlock = popupYes.parentNode.parentNode.querySelector('.popup__block');
  let popupInfo = popupYes.parentNode.parentNode.querySelector('.popup__info');
  console.log(popupYes.parentNode.parentNode);
  popupBlock.innerHTML = '';
  popupInfo.innerHTML = '';
  let popupElement = document.createElement('p');
  popupElement.textContent = 'Спасибо, что подписались на нашу рассылку!';
  popupElement.classList.add('popup__result');
  popupBlock.appendChild(popupElement);
});
