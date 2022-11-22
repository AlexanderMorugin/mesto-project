import { closePopup, profilePopup, placePopup, imagePopup } from './modal.js'

// ===================================================================================================

//  F U N C T I O N      C L O S E     P O P U P     A T     O V E R L A Y
window.onclick = function (event) {
  if (event.target == profilePopup) {
    closePopup(profilePopup);
  } else if (event.target == placePopup) {
    closePopup(placePopup);
  } else if (event.target == imagePopup) {
    closePopup(imagePopup);
  }
}

//  F U N C T I O N      C L O S E     P O P U P     A T     E S C A P E
function keyHandler(evt) {
  if (evt.key === 'Escape') {
    closePopup(profilePopup); 
    closePopup(placePopup);  
    closePopup(imagePopup);
  }
}

document.addEventListener('keydown', keyHandler);

// ===================================================================================================

export { keyHandler };