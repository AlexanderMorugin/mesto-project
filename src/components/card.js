import { openPopup, imagePopup } from './modal.js';

// ===================================================================================================

//  V A R I A B L E S     C A R D
const elementContainer = document.querySelector('.elements');
const templateImage = document.querySelector('.elements__image');
const resetButton = document.querySelector('.elements__trash');
const templateTitle = document.querySelector('.elements__title');
const titleInput = document.querySelector('.form__input_type_title');
const sourceInput = document.querySelector('.form__input_type_source');
const itemTemplate = document.querySelector('#item-template').content;
const itemPicture = document.querySelector('.popup__picture');
const itemParagraph = document.querySelector('.popup__paragraph');
// added after review 1
const formPlace = document.querySelector('.form__place');

// ===================================================================================================

//  F U N C T I O N S     C A R D
function addItem(link, name) { // Функция создания карточки
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true); 

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
  itemElement.querySelector('.elements__trash').addEventListener('click', () => {
    itemElement.remove();
  });
  return itemElement;
};

// ===================================================================================================

//  E V E N T     L I S T E N E R S     C A R D
// added after review 1
formPlace.addEventListener('submit', () => {
  elementContainer.prepend(addItem(sourceInput.value, titleInput.value));
  sourceInput.value = '';
  titleInput.value = '';
});

// ===================================================================================================

export {
  elementContainer, templateImage, resetButton, templateTitle, titleInput, sourceInput, itemTemplate, itemPicture, itemParagraph,
  addItem
};