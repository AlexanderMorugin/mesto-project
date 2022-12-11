import { closePopup, profilePopup, placePopup, imagePopup, avatarPopup } from './modal.js';
import { surePopup } from './card.js';

// ===================================================================================================

//  F U N C T I O N      C L O S E     P O P U P     A T     O V E R L A Y
document.addEventListener("mousedown", function (event) {
  if (event.target == profilePopup) {
      closePopup(profilePopup);
  } else if (event.target == placePopup) {
      closePopup(placePopup);
  } else if (event.target == imagePopup) {
      closePopup(imagePopup);
  } else if (event.target == avatarPopup) {
      closePopup(avatarPopup);
  } else if (event.target == surePopup) {
    closePopup(surePopup);
  }
});


//  F U N C T I O N      C L O S E     P O P U P     A T     E S C A P E
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(profilePopup);
    closePopup(placePopup);  
    closePopup(imagePopup);
    closePopup(avatarPopup);
    closePopup(surePopup);
  }
}

// ===================================================================================================

export { closeByEscape };