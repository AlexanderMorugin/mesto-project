import { openPopup, closePopup, imagePopup, placePopup } from './modal.js';
import { removeCard, putLike, deleteLike, addCard } from './api.js';
import { cardLoading } from './utils.js';
import { userId } from './index.js';

// ===================================================================================================

//  V A R I A B L E S     C A R D
export const elementContainer = document.querySelector('.elements');
export const formPlace = document.forms.place;
export const titleInput = formPlace.elements.title;
export const sourceInput = formPlace.elements.source;
export const formButtonPlace = document.querySelector('.form__button_place');
const picPopup = document.querySelector('.popup__picture');
const picTextPopup = document.querySelector('.popup__paragraph');

//  V A R I A B L E S     S U R E
export const surePopup = document.querySelector('.popup_sure_open');
export const sureClose = document.querySelector('.popup_sure_close');
export const formButtonSure = document.querySelector('.form__button_sure');
export const trashButton = document.querySelector('.elements__trash');
export const formSure = document.forms.sure;

// ===================================================================================================

//  F U N C T I O N S     C A R D
export function addItem(card) { // Функция создания карточки
  const itemTemplate = document.querySelector('#item-template').content;  
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true);
  const cardImage = itemElement.querySelector('.elements__image');
  const cardImageText = itemElement.querySelector('.elements__title');
  const trashButton = itemElement.querySelector('.elements__trash');
  const likeButton = itemElement.querySelector('.elements__heart');
  const likesCount = itemElement.querySelector('.elements__heart-count');

  cardImage.src = card.link;
  cardImageText.textContent = card.name;
  cardImage.alt = card.name;

  if (card.likes.length !== 0) {
    likeButton.classList.add('elements__heart_theme_dark');
    likesCount.textContent = card.likes.length;     
  }

  likeButton.addEventListener('click', (evt) => {
    if (!likeButton.classList.contains('elements__heart_theme_dark')) {  
      putLike(card._id)
        .then((likeData) => { 
          likesCount.textContent = likeData.likes.length  // длина массива - это и есть кол-во лайков
          evt.target.classList.toggle('elements__heart_theme_dark');
        })
        .catch((err) => {
          console.error(err);
        })
      } else {
        deleteLike(card._id)
          .then((likeData) => {  
            likesCount.textContent = likeData.likes.length  // длина массива - это и есть кол-во лайков
            evt.target.classList.toggle('elements__heart_theme_dark');
          })
          .catch((err) => {
            console.error(err);
          })
      }
  });

  cardImage.addEventListener('click', () => {
    picPopup.src = card.link;
    picPopup.alt = card.name;
    picTextPopup.textContent = card.name;
    openPopup(imagePopup);
  });
   
  if (card.owner._id == userId) {
    trashButton.classList.add('elements__trash_active'); 
    }

  trashButton.addEventListener('click', () => { 
    
  removeCard(card._id)
    .then(data => {
      itemElement.remove()
    })    
    .catch((err) => {
      console.error(err);
    })
  });
  return itemElement;
};

// ===================================================================================================

//  E V E N T     L I S T E N E R S     C A R D
formPlace.addEventListener('submit', function newPlace() {
  cardLoading(true);
  addCard(titleInput.value, sourceInput.value)
    .then((cardData) => {  //  и в этих данных все есть: кол-во лайков, имя, ссылка и тд
      console.log(cardData);
      elementContainer.prepend(addItem(cardData)),
      formPlace.reset();
      closePopup(placePopup);    
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => formButtonPlace.textContent = 'Создать')
})