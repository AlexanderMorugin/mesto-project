import { closePopup, profilePopup, placePopup, imagePopup } from './modal.js'

// ===================================================================================================

//  F U N C T I O N      C L O S E     P O P U P     A T     O V E R L A Y

// added after review 1
document.addEventListener("mousedown", function (event) {
  if (event.target == profilePopup) {
    closePopup(profilePopup);
  } else if (event.target == placePopup) {
    closePopup(placePopup);
  } else if (event.target == imagePopup) {
    closePopup(imagePopup);
  }
});


//  F U N C T I O N      C L O S E     P O P U P     A T     E S C A P E
// added after review 1
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(profilePopup);
    closePopup(placePopup);  
    closePopup(imagePopup);
  }
}
// added after review 2
//document.addEventListener('keydown', closeByEscape);

// ===================================================================================================

export { closeByEscape };