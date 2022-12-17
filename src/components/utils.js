import { closePopup, profilePopup, placePopup, imagePopup, avatarPopup, formButtonProfile, formButtonAvatar } from './modal.js';
import { surePopup, formButtonPlace } from './card.js';

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
export function closeByEscape(evt) {
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

//  A P I

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export function cardLoading(isLoading) {
  if (isLoading) {
    formButtonPlace.textContent = 'Создание...';
  }
}

export function profileLoading(isLoading) {
  if (isLoading) {
    formButtonProfile.textContent = 'Сохранение...';
  }
}

export function avatarLoading(isLoading) {
  if (isLoading) {
    formButtonAvatar.textContent = 'Сохранение...';
  }
}

// function cardDeleting(isDeleting) {
//   if (isDeleting) {
//     formButtonSure.textContent = 'Удаление...';
//   }
// }