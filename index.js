import '../pages/index.css';
import { closeByEscape } from './utils.js';
import { config, changeProfile } from './api.js';

import {
  profileTitle, profileSubtitle, profilePopup, profileEdit, profileClose, nameInput, jobInput, 
  placePopup, placeAdd, placeClose, addButton, userInput, descriptionInput,
  imagePopup, imagePopupClose,
  openPopup, closePopup, submitForm, submitAvatar, formAvatar, changeAvatarImg, avatarImage
} from './modal.js';

import { elementContainer, templateImage, resetButton, templateTitle, titleInput, sourceInput, itemTemplate, newPlace, deleteCard } from './card.js';
import { showError, hideError, isValid, setEventListeners, hasInvalidInput, toggleButtonState, enableValidation } from './validate.js';




// ===================================================================================================


//  S T A R T     O F     V A L I D A T I O N
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
});


//  C R E A T E     C A R D S     A T     S T A R T

// Promise.all([  
//let user;

//getCurrentUser()
  // .then(currentUser => {
  //   user = currentUser;
  //   return getInitialCards();
  // })
  // .then(cards => {
  //   //cards.forEach(card => addItem(card, user._id));
  //   //cards.forEach(card => addItem(link, name, card, user._id));
  //   //cards.forEach(card => addItem(element.link, element.name, user._id))
  // })



// if (cardOwnerId == userId) {
//   console.log('GOOD GOOD GOOD')
//   trashButton.classList.add('elements__trash_active')
// } else {
//   console.error('BAD BAD BAD')
//   trashButton.classList.remove('elements__trash_active')
// }


//const trashButton = document.querySelector('.elements__trash');

// let cardOwnerId;

// function getCardId() {
//   return fetch(`${config.baseUrl}/cards`, {
//     headers: {
//       authorization: config.headers.authorization,
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(res => res.json())
//   .then((objects) => {   
//     objects.forEach((object) => {
//       //console.log(object.owner._id)
//       cardOwnerId = object.owner._id;
//       // if (cardOwnerId == userId) {
//       //   console.log('GOOD')
//       //   trashButton.classList.add('elements__trash_active')
//       // } else {
//       //   console.error('BAD')
//       //   trashButton.classList.remove('elements__trash_active')
//       // }
//       //console.log(cardOwnerId);
//     }) 
//   })
//   .catch((err) => {
//     console.error(err); // выводим ошибку в консоль
//   });
// }
// getCardId()

//let userId;
//let currentUser;


function getCurrentUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Что то пошло не так');
    }
    return res;
  })
  .then(res => res.json())  
  .catch((error) => {
    console.error(error);
  });
}


function getInitialCards() { // Подтянули с сервера карточки и вставили в DOM
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
  .then(res => res.json())
  // .then((cards) => {      
  //   cards.forEach((card) => {
  //     elementContainer.append(addItem(card.link, card.name))  
  //     console.log(card);      
  //     console.log('Card Owner Name:', card.owner.name);  
  //     console.log('Card Owner ID:', card.owner._id); 
  //     console.log('Card ID:', card._id); 
  //     console.log('Card Name:', card.name);
  //     return cards; 
  //   })
  // })
  .catch((error) => {
    console.error(error);
  });
}



let user;
let cardItem;

getCurrentUser()
  .then(currentUser => {
    user == currentUser;
    // console.log('User Name:', currentUser.name);
    // console.log('User ID:', currentUser._id);
    return getInitialCards()
  })
  .then(cards => {
    cards.forEach((card) => {
      elementContainer.append(addItem(card.link, card.name));
      cardItem = card;
      console.log(cardItem); 
    // cards.forEach(card => addItem(card, user._id));
  })
})



// function createCard(card, userId) {
//   //...
//   addItem(link, name);
//   if (card.owner._id == userId) {
//     console.log('GREAT')
//   }
// }



function addItem(link, name) { // Функция создания карточки
  const itemTemplate = document.querySelector('#item-template').content;  
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true); 
  const itemPicture = document.querySelector('.popup__picture');
  const itemParagraph = document.querySelector('.popup__paragraph');
  const trashButton = itemTemplate.querySelector('.elements__trash');

  itemElement.querySelector('.elements__image').src = link;
  itemElement.querySelector('.elements__title').textContent = name;
  itemElement.querySelector('.elements__image').alt = name;
  itemElement.querySelector('.elements__heart').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__heart_theme_dark');
  });
  itemElement.querySelector('.elements__image').addEventListener('click', () => {
    itemPicture.src = link;
    itemPicture.alt = name;
    itemParagraph.textContent = name;
    openPopup(imagePopup);
  });
  // itemElement.querySelector('.elements__trash').addEventListener('click', () => {

    // if (cardOwnerId == userId) {
    //   console.log('GOOD')
    //   trashButton.classList.add('elements__trash_active')
    // } else {
    //   console.error('BAD')
    //   trashButton.classList.remove('elements__trash_active')
    // }    

    trashButton.addEventListener('click', () => {
    openPopup(surePopup);
    sureClose.addEventListener('click', () => {
      closePopup(surePopup);
    });
    formButtonSure.addEventListener('click', () => {
      itemElement.remove();
      closePopup(surePopup);
    });    
  });
  return itemElement;
}