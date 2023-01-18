import {
  initialCards
} from './data.js';

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


import {
  showError, hideError, checkInputValidity, setEventListeners, hasInvalidInput, toggleButtonState
} from './validate.js';


// ===================================================================================================

//  C R E A T E     C A R D S     A T     S T A R T
initialCards.forEach((element) => {
  elementContainer.append(addItem(element.link, element.name));
});

//  S T A R T     O F     V A L I D A T I O N
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));  
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
    setEventListeners(formElement);
}); 
};

enableValidation();
