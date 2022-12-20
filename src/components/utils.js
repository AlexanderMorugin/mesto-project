import { closePopup, formButtonProfile, formButtonAvatar } from './modal.js';
import { surePopup, formButtonPlace } from './card.js';
 
const popups = document.querySelectorAll('.popup');

// ===================================================================================================

//  F U N C T I O N      C L O S E     P O P U P     A T     O V E R L A Y
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    })
})

//  F U N C T I O N      C L O S E     P O P U P     A T     E S C A P E
export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
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

// export function renderLoading(isLoading, button, buttonText='Сохранить', loadingText='Сохранение...') {
//   if (isLoading) {
//     button.textContent = loadingText;
//   } else {
//     button.textContent = buttonText;
//   }
// }

// function cardDeleting(isDeleting) {
//   if (isDeleting) {
//     formButtonSure.textContent = 'Удаление...';
//   }
// }