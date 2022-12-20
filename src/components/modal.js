import { closeByEscape, profileLoading, avatarLoading } from './utils.js';
import { editCurrentUser, editAvatar } from './api.js';

//  V A R I A B L E S     P R O F I L E
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const profilePopup = document.querySelector('.popup_profile_open');
export const profileEdit = document.querySelector('.profile__edit');
export const profileClose = document.querySelector('.popup_profile_close');
export const formProfile = document.forms.profile;
export const userInput = formProfile.elements.user;
export const descriptionInput = formProfile.elements.description;
export const formButtonProfile = document.querySelector('.form__button_profile')

//  V A R I A B L E S     P L A C E
export const placePopup = document.querySelector('.popup_place_open');
export const placeAdd = document.querySelector('.profile__add');
export const placeClose = document.querySelector('.popup_place_close');
export const formButtonPlace = document.querySelector('.form__button_place');

//  V A R I A B L E S     I M A G E
export const imagePopup = document.querySelector('.popup_image_open');
export const imagePopupClose = document.querySelector('.popup_image_close');

//  V A R I A B L E S     A V A T A R
export const avatarEdit = document.querySelector('.profile__avatar-edit');
export const avatarImage = document.querySelector('.profile__avatar-image');
export const avatarPopup = document.querySelector('.popup_avatar_open');
export const formButtonAvatar = document.querySelector('.form__button_avatar');
export const avatarPopupClose = document.querySelector('.popup_avatar_close');
export const formAvatar = document.forms.avatar;
export const sourceAvatar = formAvatar.elements.srcavatar;

// ===================================================================================================

//  F U N C T I O N S     U N I V E R S A L
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

// ===================================================================================================

//  F U N C T I O N S     P R O F I L E
export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileLoading(true);
  editCurrentUser(userInput.value, descriptionInput.value)
    .then((userData) => {
      console.log(userData);
      profileTitle.textContent = userData.name,
      profileSubtitle.textContent = userData.about
      closePopup(profilePopup);
    })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => formButtonProfile.textContent = 'Сохранить')
}

// ===================================================================================================

//  F U N C T I O N S     A V A T A R
export function changeAvatarImg() {
  avatarLoading(true);
  editAvatar(sourceAvatar.value)
    .then((userData) => {
      console.log(userData);
      avatarImage.src = userData.avatar;      
      formAvatar.reset();
      closePopup(avatarPopup);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => formButtonAvatar.textContent = 'Сохранить')
}

// ===================================================================================================

//  E V E N T     L I S T E N E R S     P R O F I L E
profileEdit.addEventListener('click', () => {
  openPopup(profilePopup);
  userInput.value = profileTitle.textContent;
  descriptionInput.value = profileSubtitle.textContent; 
});

profileClose.addEventListener('click', () => {
  closePopup(profilePopup);
});

formProfile.addEventListener('submit', handleProfileFormSubmit);

//  E V E N T     L I S T E N E R S     P L A C E
placeAdd.addEventListener('click', () => {
  openPopup(placePopup);
  formButtonPlace.disabled = true;
  formButtonPlace.classList.add('form__button_disabled');
});

placeClose.addEventListener('click', () => {
  closePopup(placePopup);
});

//  E V E N T     L I S T E N E R S     I M A G E
imagePopupClose.addEventListener('click', () => {
  closePopup(imagePopup);
});

//  E V E N T     L I S T E N E R S     A V A T A R
avatarEdit.addEventListener('click', () => {
  openPopup(avatarPopup);
  formButtonAvatar.disabled = true;
  formButtonAvatar.classList.add('form__button_disabled');
});

avatarPopupClose.addEventListener('click', () => {
  closePopup(avatarPopup);
});

formAvatar.addEventListener('submit', () => {
  changeAvatarImg();
});
  