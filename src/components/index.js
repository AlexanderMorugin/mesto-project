import '../pages/index.css';
import { initialCards } from './data.js';
import { closeByEscape } from './utils.js';

import {
  profileTitle, profileSubtitle, profilePopup, profileEdit, profileClose, nameInput, jobInput, 
  placePopup, placeAdd, placeClose, addButton,
  imagePopup, imagePopupClose,
  openPopup, closePopup, submitForm
} from './modal.js';

import {
  elementContainer, templateImage, resetButton, templateTitle, titleInput, sourceInput, itemTemplate,
  addItem
} from './card.js';


import { showError, hideError, isValid, setEventListeners, hasInvalidInput, toggleButtonState, enableValidation } from './validate.js';



// ===================================================================================================

//  C R E A T E     C A R D S     A T     S T A R T
initialCards.forEach((element) => {
  elementContainer.append(addItem(element.link, element.name));
});

//  S T A R T     O F     V A L I D A T I O N
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
});
