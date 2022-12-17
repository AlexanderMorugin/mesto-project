import { openPopup, closePopup, imagePopup, placePopup } from './modal.js';
import { config, removeCard, putLike, deleteLike, addCard } from './api.js';
import { checkResponse, cardLoading } from './utils.js';
import { cardId, userMeId, cardOwnerId, cardLikesLength } from './index.js';

// ===================================================================================================

//  V A R I A B L E S     C A R D
export const elementContainer = document.querySelector('.elements');
export const formPlace = document.forms.place;
export const titleInput = formPlace.elements.title;
export const sourceInput = formPlace.elements.source;
export const formButtonPlace = document.querySelector('.form__button_place');

//  V A R I A B L E S     S U R E
export const surePopup = document.querySelector('.popup_sure_open');
export const sureClose = document.querySelector('.popup_sure_close');
export const formButtonSure = document.querySelector('.form__button_sure');
export const trashButton = document.querySelector('.elements__trash');
export const formSure = document.forms.sure;

// ===================================================================================================

//  F U N C T I O N S     C A R D
export function addItem(link, name) { // Функция создания карточки
  const itemTemplate = document.querySelector('#item-template').content;  
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true); 
  const cardImage = itemElement.querySelector('.elements__image');
  const cardImageText = itemElement.querySelector('.elements__title');
  const trashButton = itemElement.querySelector('.elements__trash');
  const likeButton = itemElement.querySelector('.elements__heart');
  const likesCount = itemElement.querySelector('.elements__heart-count');
  const picPopup = document.querySelector('.popup__picture');
  const picTextPopup = document.querySelector('.popup__paragraph');

  itemElement.dataset.id = cardId;

  const currentId = itemElement.dataset.id

  cardImage.src = link;
  cardImageText.textContent = name;
  cardImage.alt = name;

  let likes = 1;

  if (cardLikesLength !== 0) {
    likeButton.classList.add('elements__heart_theme_dark')
    likesCount.textContent = cardLikesLength;
  }

  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__heart_theme_dark'); 
    if (likeButton.classList.contains('elements__heart_theme_dark')) {
      putLike(currentId)
        .then((result) => {  
          console.log(result); 
          likesCount.textContent = likes++; 
        }) 
        .catch((err) => {
          console.error(err);
        });       
    } else {
      deleteLike(currentId)
      .then((result) => {  
        console.log(result); 
        likesCount.textContent = likes--;
        likesCount.textContent = null;
      })
      .catch((err) => {
        console.error(err);
      })
    }
  });

  cardImage.addEventListener('click', () => {
    picPopup.src = link;
    picPopup.alt = name;
    picTextPopup.textContent = name;
    openPopup(imagePopup);
  });
   
  if (cardOwnerId === userMeId) {
    trashButton.classList.add('elements__trash_active'); 
    }

  trashButton.addEventListener('click', () => { 
    itemElement.remove();
    removeCard(currentId)
      .catch((err) => {
        console.error(err);
      })
      console.log(cardId) 
  });
  return itemElement;
};

// ===================================================================================================

//  E V E N T     L I S T E N E R S     C A R D
formPlace.addEventListener('submit', function newPlace() {
  cardLoading(true);
  addCard(titleInput.value, sourceInput.value)
    .then((checkResponse) => {
      console.log(checkResponse);
      elementContainer.prepend(addItem(sourceInput.value, titleInput.value)),
      formPlace.reset();
      closePopup(placePopup);    
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => formButtonPlace.textContent = 'Создать')
})