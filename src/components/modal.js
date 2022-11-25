import { closeByEscape } from './utils.js';

//  V A R I A B L E S     P R O F I L E
//const popup = document.querySelector('.popup');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profilePopup = document.querySelector('.popup_profile_open');
const profileEdit = document.querySelector('.profile__edit');
const profileClose = document.querySelector('.popup_profile_close');
const userInput = document.querySelector('.form__input_type_user');
const descriptionInput = document.querySelector('.form__input_type_description');
// added after review 1
const formProfile = document.querySelector('.form__profile')

//  V A R I A B L E S     P L A C E
const placePopup = document.querySelector('.popup_place_open');
const placeAdd = document.querySelector('.profile__add');
const placeClose = document.querySelector('.popup_place_close');
// added after review 1
const formButtonPlace = document.querySelector('.form__button_place')
const formPlace = document.querySelector('.form__place')

//  V A R I A B L E S     I M A G E
const imagePopup = document.querySelector('.popup_image_open');
const imagePopupClose = document.querySelector('.popup_image_close');

// ===================================================================================================

//  F U N C T I O N S     U N I V E R S A L
function openPopup(popup) {
  popup.classList.add('popup_opened');
  // added after review 1
  document.addEventListener('keydown', closeByEscape);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  // added after review 1
  document.removeEventListener('keydown', closeByEscape);
};

//  F U N C T I O N S     P R O F I L E
function submitForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = userInput.value;
  profileSubtitle.textContent = descriptionInput.value;
  closePopup(profilePopup);
};

// ===================================================================================================

//  E V E N T     L I S T E N E R S     P R O F I L E
profileEdit.addEventListener('click', () => {
  openPopup(profilePopup);
  // added after review 2
  userInput.value = profileTitle.textContent;
  descriptionInput.value = profileSubtitle.textContent; 
});

profileClose.addEventListener('click', () => {
  closePopup(profilePopup);
});

// added after review 1
formProfile.addEventListener('submit', submitForm);

//  E V E N T     L I S T E N E R S     P L A C E
placeAdd.addEventListener('click', () => {
  openPopup(placePopup);
  // added after review 1
  formButtonPlace.disabled = true;
  formButtonPlace.classList.add('form__button_disabled');
});

placeClose.addEventListener('click', () => {
  closePopup(placePopup);
});
/*
// added after review 1
formPlace.addEventListener('submit', () => {
  closePopup(placePopup);
});
*/
//  E V E N T     L I S T E N E R S     I M A G E
imagePopupClose.addEventListener('click', () => {
  closePopup(imagePopup);
});

// ===================================================================================================

export {
  profileTitle, profileSubtitle, profilePopup, profileEdit, profileClose, userInput, descriptionInput, 
  placePopup, placeAdd, placeClose, imagePopup, imagePopupClose, openPopup, closePopup, submitForm
};