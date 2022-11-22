//  V A R I A B L E S     P R O F I L E
const popup = document.querySelector('.popup');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profilePopup = document.querySelector('.popup_profile_open');
const profileEdit = document.querySelector('.profile__edit');
const profileClose = document.querySelector('.popup_profile_close');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_description');

//  V A R I A B L E S     P L A C E
const placePopup = document.querySelector('.popup_place_open');
const placeAdd = document.querySelector('.profile__add');
const placeClose = document.querySelector('.popup_place_close');
const addButton = document.querySelector('.popup_place_add');

//  V A R I A B L E S     I M A G E
const imagePopup = document.querySelector('.popup_image_open');
const imagePopupClose = document.querySelector('.popup_image_close');

// ===================================================================================================

//  F U N C T I O N S     U N I V E R S A L
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

//  F U N C T I O N S     P R O F I L E
function submitForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
};

// ===================================================================================================

//  E V E N T     L I S T E N E R S     P R O F I L E
profileEdit.addEventListener('click', () => {
  openPopup(profilePopup);
});

profileClose.addEventListener('click', () => {
  closePopup(profilePopup);
});

profilePopup.addEventListener('submit', submitForm);

//  E V E N T     L I S T E N E R S     P L A C E
placeAdd.addEventListener('click', () => {
  openPopup(placePopup);
});

placeClose.addEventListener('click', () => {
  closePopup(placePopup);
});

addButton.addEventListener('click', () => {
  closePopup(placePopup);
});

//  E V E N T     L I S T E N E R S     I M A G E
imagePopupClose.addEventListener('click', () => {
  closePopup(imagePopup);
});

// ===================================================================================================

export {
  popup, profileTitle, profileSubtitle, profilePopup, profileEdit, profileClose, nameInput, jobInput, 
  placePopup, placeAdd, placeClose, addButton,
  imagePopup, imagePopupClose,
  openPopup, closePopup, submitForm
};