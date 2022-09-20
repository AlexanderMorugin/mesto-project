//@ts-check
/*if (!popup) throw new Error('Ты не прав братан');*/ // Удовстоверяемся в сущности

/* Модальное окно 'Редактировать профиль' */

const popup = document.querySelector('.popup'); // Находим в DOM модальное окно "Редактировать профиль"
const submitButton = document.querySelector('.form__button'); // Находим в Модалке кнопку "Сохранить профиль"
const closeButton = document.querySelector('.popup__button-close'); // Находим в Модалке кнопку "Крестик - Закрыть модальное окно"

function openPopup() {  
  popup.classList.add('popup_opened');  
}; // Функция ОТКРЫТИЯ модального окна "Редактировать профиль", добавляем класс открытия

function closePopup() {
  popup.classList.remove('popup_opened');
}; // Функция ЗАКРЫТИЯ модального окна "Редактировать профиль", удаляем класс открытия

closeButton.addEventListener('click', closePopup); // Активируем Крестик закрывающий модальное окно "Редактировать профиль"


/* Профиль пользователя в HTML */

const editButton = document.querySelector('.profile__edit'); // Находим в DOM кнопку "Редактировать профиль"
editButton.addEventListener('click', openPopup); // Активируем кнопку "Редактировать профиль"


/* Вписываем в поля "Имя" и "О себе" */

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.

// Получите значение полей jobInput и nameInput из свойства value
const nameInput = document.querySelector('.form__item_type_name'); // Находим в Модалке поле формы "Имя"
const jobInput = document.querySelector('.form__item_type_description'); // Находим в Модалке поле формы "О себе"

// Выберите элементы, куда должны быть вставлены значения полей
const profileTitle = document.querySelector('.profile__title'); // Находим в DOM поле профиля "Жак-Ив Кусто"
const profileSubtitle = document.querySelector('.profile__subtitle'); // Находим в DOM поле профиля "Исследователь океана"
  
// Вставьте новые значения с помощью textContent
profileTitle.textContent = nameInput.value; // Вставляем текст из Модалки в разметку HTML
profileSubtitle.textContent = jobInput.value; // Вставляем текст из Модалки в разметку HTML

closePopup(); // Вызываем функцию закрытия Модалки, при нажатии кнопки "Сохранить"
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
popup.addEventListener('submit', formSubmitHandler); // Активируем Модалку - передаем все изменения текста в разметку HTML




// Модальное окно 'Новое место'

const popupPlace = document.querySelector('.place'); // Находим в DOM модальное окно "Новое место"
const buttonAddPlace = document.querySelector('.profile__add'); // Находим в DOM кнопку Плюс "Добавить новое место"
const elementContainer = document.querySelector('.elements'); // Находим в DOM контейнер карточек
const buttonClosePlace = document.querySelector('.close-place'); // Находим в Модалке кнопку Крестик "Закрыть модальное окно - новое место"
const buttonSubmitPlace = document.querySelector('.add-place'); // Находим в Модалке кнопку "Создать"

function openPopupPlace() {  
  popupPlace.classList.add('popup_opened');
}; // Функция ОТКРЫТИЯ модального окна "Новое место", добавляем класс открытия

function closePopupPlace() {
  popupPlace.classList.remove('popup_opened');
}; // Функция ЗАКРЫТИЯ модального окна "Новое место", удаляем класс открытия

buttonAddPlace.addEventListener('click', openPopupPlace); // Активируем кнопку "Добавить новое место"
buttonClosePlace.addEventListener('click', closePopupPlace); // Активируем кнопку Крестик "Закрыть модальное окно - новое место"
buttonSubmitPlace.addEventListener('click', closePopupPlace); // Активируем в Модалке кнопку "Создать"

// Добавление карточек

const card = elementContainer.querySelector('.elements__item');
const addButton = document.querySelector('.add-place');
const title = document.querySelector('.form__item_type_title');
const source = document.querySelector('.form__item_type_source');
const resetButton = document.querySelector('.elements__trash');

function addItem(titleValue, sourceValue) {
  const itemTemplate = document.querySelector('#item-template').content;
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true);

  itemElement.querySelector('.elements__image').src = sourceValue;
  itemElement.querySelector('.elements__image').addEventListener('click', openPopupImage);Ы
  itemElement.querySelector('.elements__title').textContent = titleValue;
  itemElement.querySelector('.elements__heart').addEventListener('click', function (evt) {  
    evt.target.classList.toggle('elements__heart_theme_dark');
  });
  itemElement.querySelector('.elements__trash').addEventListener('click', function() {
    itemElement.remove()
});

elementContainer.prepend(itemElement);
}

addButton.addEventListener('click', function () {
  addItem(title.value, source.value);
  title.value = '';
  source.value = '';
});


// При загрузке на странице должно быть 6 карточек, которые добавит JavaScript

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

  initialCards.forEach(function array (element) {
    const itemTemplate = document.querySelector('#item-template').content;
    const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true);  

    itemElement.querySelector('.elements__image').src = element.link;
    itemElement.querySelector('.elements__image').addEventListener('click', openPopupImage);
    
    itemElement.querySelector('.elements__title').textContent = element.name;   
    itemElement.querySelector('.elements__heart').addEventListener('click', function (evt) {  
      evt.target.classList.toggle('elements__heart_theme_dark');
    });
    itemElement.querySelector('.elements__trash').addEventListener('click', function() {
      itemElement.remove()
  });
 
  elementContainer.prepend(itemElement); 
  
});
 

// Модальное окно 'Открытие попапа с картинкой'

const popupImage = document.querySelector('.popup_image'); // Находим в DOM модальное окно "Открытие попапа с картинкой"
const buttonOpenImage = document.querySelector('.elements__image'); // Находим в DOM картинку, при нажатии которой открывается модальное окно "Открытие попапа с картинкой"
const buttonCloseImage = document.querySelector('.close-image'); // Находим в Модалке кнопку Крестик "Закрыть модальное окно"
const itemPicture = document.querySelector('.popup__picture'); // Находим в Модалке картинку
const itemParagraph = document.querySelector('.popup__paragraph'); // Находим в Модалке описание картинки

function openPopupImage() {   
  //itemPicture.src = picture.src;
  //itemParagraph.textContent = array.name;
  
  popupImage.classList.add('popup_opened');
};

function closePopupImage() {
  popupImage.classList.remove('popup_opened');
};

// buttonOpenImage.addEventListener('click', openPopupImage); // Активируем картинку, при нажатии которой открывается модальное окно "Открытие попапа с картинкой"
buttonCloseImage.addEventListener('click', closePopupImage); // Активируем кнопку Крестик "Закрыть модальное окно"




