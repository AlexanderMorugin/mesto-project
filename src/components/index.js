import '../pages/index.css';

import {
  initialCards
} from './data.js';

import {
  popup, profileTitle, profileSubtitle, profilePopup, profileEdit, profileClose, nameInput, jobInput, 
  placePopup, placeAdd, placeClose, addButton,
  imagePopup, imagePopupClose,
  openPopup, closePopup, submitForm
} from './modal.js';

import {
  elementContainer, templateImage, resetButton, templateTitle, titleInput, sourceInput, itemTemplate,
  addItem
} from './card.js';


import {
  showError, hideError, checkInputValidity, setEventListeners, hasInvalidInput, toggleButtonState, enableValidation
} from './validate.js';

import {
  keyHandler
} from './utils.js';

// ===================================================================================================

//  C R E A T E     C A R D S     A T     S T A R T
initialCards.forEach((element) => {
  elementContainer.append(addItem(element.link, element.name));
});
