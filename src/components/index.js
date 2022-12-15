import '../pages/index.css';
import { closeByEscape } from './utils.js';
import { config, changeProfile, getCurrentUser, getInitialCards, checkResponse, removeCard } from './api.js';

import {
  profileTitle, profileSubtitle, profilePopup, profileEdit, profileClose, nameInput, jobInput, 
  placePopup, placeAdd, placeClose, addButton, userInput, descriptionInput,
  imagePopup, imagePopupClose,
  openPopup, closePopup, submitForm, submitAvatar, formAvatar, changeAvatarImg, avatarImage
} from './modal.js';

import { elementContainer, templateImage, resetButton, templateTitle, titleInput, sourceInput, itemTemplate, addItem, newPlace } from './card.js';
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
export let cardId, userMeId, cardOwnerId; 

  Promise.all([getInitialCards(), getCurrentUser()])
    .then(([cards, user]) => { 
      userMeId = user._id; 
      
      cards.forEach((card) => {
        elementContainer.append(addItem(card.link, card.name))
        cardId = card._id;
        cardOwnerId = card.owner._id;
        console.log(card)
      });
    });
