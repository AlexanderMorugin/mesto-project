import '../pages/index.css';
import { getCurrentUser, getInitialCards } from './api.js';
import { profileTitle, profileSubtitle, avatarImage } from './modal.js';
import { elementContainer, addItem } from './card.js';
import { enableValidation } from './validate.js';

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
export let userId;

  Promise.all([getInitialCards(), getCurrentUser()])
    .then(([cards, user]) => { 
      userId = user._id; 
      // console.log(user)
      profileTitle.textContent = user.name;
      profileSubtitle.textContent = user.about;

      avatarImage.src = user.avatar;

      cards.forEach((card) => {
        // elementContainer.append(addItem(card._id, card.owner._id, card.likes.length, card.link, card.name))
        elementContainer.append(addItem(card))
        console.log(card)
        // console.log(card.likes.length)
      });
    })
    .catch((err) => {
      console.error(err);
    })

