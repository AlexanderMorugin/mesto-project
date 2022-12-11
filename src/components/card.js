import { openPopup, closePopup, imagePopup, placePopup } from './modal.js';
import { config, getCurrentUser, getInitialCards, currentCardId, currentCardOwnerId, currentUserId, removeCard } from './api.js';

// ===================================================================================================

//  V A R I A B L E S     C A R D
export const elementContainer = document.querySelector('.elements');
// export const templateImage = document.querySelector('.elements__image');
// export const resetButton = document.querySelector('.elements__trash');
// export const templateTitle = document.querySelector('.elements__title');
//export const titleInput = document.querySelector('.form__input_type_title');
//export const sourceInput = document.querySelector('.form__input_type_source');
// export const itemTemplate = document.querySelector('#item-template').content;
// export const itemPicture = document.querySelector('.popup__picture');
// export const itemParagraph = document.querySelector('.popup__paragraph');
//export const formPlace = document.querySelector('.form__place');
export const formPlace = document.forms.place;
export const titleInput = formPlace.elements.title;
export const sourceInput = formPlace.elements.source;

//  V A R I A B L E S     S U R E
export const surePopup = document.querySelector('.popup_sure_open');
export const sureClose = document.querySelector('.popup_sure_close');
//export const formSure = document.querySelector('.form__sure');
export const formButtonSure = document.querySelector('.form__button_sure');
export const trashButton = document.querySelector('.elements__trash');
export const formSure = document.forms.sure;


// ===================================================================================================

//  F U N C T I O N S     C A R D
export function addItem(link, name) { // Функция создания карточки
  const itemTemplate = document.querySelector('#item-template').content;  
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true); 
  const itemPicture = document.querySelector('.popup__picture');
  const itemParagraph = document.querySelector('.popup__paragraph');
  const trashButton = itemElement.querySelector('.elements__trash');

  itemElement.querySelector('.elements__image').src = link;
  itemElement.querySelector('.elements__title').textContent = name;
  itemElement.querySelector('.elements__image').alt = name;
  itemElement.querySelector('.elements__heart').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__heart_theme_dark');
  });
  itemElement.querySelector('.elements__image').addEventListener('click', () => {
    itemPicture.src = link;
    itemPicture.alt = name;
    itemParagraph.textContent = name;
    openPopup(imagePopup);
  });

  if (currentCardOwnerId == currentUserId) {
    console.log('Add Trash Icon');
    trashButton.classList.add('elements__trash_active');
  }

    itemElement.querySelector('.elements__trash').addEventListener('click', () => { 
    openPopup(surePopup);
    sureClose.addEventListener('click', () => {
      closePopup(surePopup);
    });
    formButtonSure.addEventListener('click', () => {
      // if (event.target.classList.contains('elements__trash')) {
      removeCard();
      itemElement.remove();
      closePopup(surePopup);
    });
    // formButtonSure.addEventListener('click', () => {
    //   itemElement.remove();
    //   closePopup(surePopup);
    // });
      
  }); 
  return itemElement;
};



// ===================================================================================================

//  E V E N T     L I S T E N E R S     C A R D
formPlace.addEventListener('submit', function newPlace() {
  cardLoading(true);
  return fetch(`${config.baseUrl}/cards`, { // Добавление новой карточки на сервер и вставка в DOM
    method: 'POST',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: titleInput.value,
      link: sourceInput.value
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((result) => {
    console.log(result);
    titleInput.value = result.name,
    sourceInput.value = result.link,
    elementContainer.prepend(addItem(sourceInput.value, titleInput.value)),
    formPlace.reset();
    closePopup(placePopup);    
  })
  .catch((err) => {
    console.error(err); // выводим ошибку в консоль
  })
})

export const formButtonPlace = document.querySelector('.form__button_place')

function cardLoading(isLoading) {
  if (isLoading) {
    formButtonPlace.textContent = 'Создание...';
  } else {
    formButtonPlace.textContent = 'Создать';
  }
}


/* удаление лишних карточек */









