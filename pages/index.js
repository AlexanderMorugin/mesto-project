//@ts-check

/* --- --- --- --- --- --- --- --- --- --- --- --- --- все глобальные переменные --- --- --- --- --- --- --- --- --- --- --- --- --- */

// --- Переменные --- Модальное окно "Редактировать профиль" --- //

const popup = document.querySelector('.popup'); // Находим в DOM универсальный класс для всех модальных окон

const profilePopup = document.querySelector('.profile-open'); // Находим в DOM модальное окно "Редактировать профиль"
const profileEdit = document.querySelector('.profile__edit'); // Находим в DOM кнопку "Редактировать профиль"
const profileSubmit = document.querySelector('.form__button'); // Находим в Модалке кнопку "Сохранить профиль"
const profileClose = document.querySelector('.profile-close'); // Находим в Модалке кнопку "Крестик - Закрыть модальное окно"
const nameInput = document.querySelector('.form__item_type_name'); // Находим в Модалке поле формы "Имя"
const jobInput = document.querySelector('.form__item_type_description'); // Находим в Модалке поле формы "О себе"
const profileTitle = document.querySelector('.profile__title'); // Находим в DOM поле профиля "Жак-Ив Кусто"
const profileSubtitle = document.querySelector('.profile__subtitle'); // Находим в DOM поле профиля "Исследователь океана"

// --- Переменные --- Модальное окно "Новое место" --- //

const placePopup = document.querySelector('.place-open'); // Находим в DOM модальное окно "Новое место"
const placeAdd = document.querySelector('.profile__add'); // Находим в DOM кнопку Плюс "Добавить новое место"
const placeClose = document.querySelector('.place-close'); // Находим в Модалке кнопку Крестик "Закрыть модальное окно - новое место"
const addButton = document.querySelector('.place-add'); // Находим в Модалке кнопку "Создать"
const elementContainer = document.querySelector('.elements'); // Находим в DOM контейнер карточек           
const resetButton = document.querySelector('.elements__trash'); // Кнопка "Удалить" в Template
const templateImage = document.querySelector('.elements__image'); // Картинка в Template
const templateTitle = document.querySelector('.elements__title'); // Текст в Template
const titleInput = document.querySelector('.form__item_type_title'); // Поле ввода текста в модалке
const sourceInput = document.querySelector('.form__item_type_source'); // Поле ввода ссылки в модалке
const itemTemplate = document.querySelector('#item-template').content; // Template

// --- Переменные --- Модальное окно 'Открытие попапа с картинкой' --- //

const popupImage = document.querySelector('.popup_image'); // Находим в DOM модальное окно "Открытие попапа с картинкой"
const buttonOpenImage = document.querySelector('.elements__image'); // Находим в DOM картинку, при нажатии которой открывается модальное окно "Открытие попапа с картинкой"
const buttonCloseImage = document.querySelector('.close-image'); // Находим в Модалке кнопку Крестик "Закрыть модальное окно"
const itemPicture = document.querySelector('.popup__picture'); // Находим в Модалке картинку
const itemParagraph = document.querySelector('.popup__paragraph'); // Находим в Модалке описание картинки


/* --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- все функции --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- */

// --- Функции --- Универсальные --- //

function openPopup(popup) { // Универсальная функция ОТКРЫТИЯ для любого модального окна
  popup.classList.add('popup_opened');
};

function closePopup(popup) { // Универсальная функция ЗАКРЫТИЯ для любого модального окна
  popup.classList.remove('popup_opened');
};

// --- Функции --- Модальное окно "Редактировать профиль" --- //

function submitForm(evt) { // Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.
  
  profileTitle.textContent = nameInput.value; // Вставляем текст из Модалки в разметку HTML
  profileSubtitle.textContent = jobInput.value; // Вставляем текст из Модалки в разметку HTML

  closePopup(profilePopup); // Вызываем функцию закрытия Модалки, при нажатии кнопки "Сохранить"
};

// --- Функции --- Модальное окно "Новое место" --- //

function addItem(link, name) { // Функция создания карточки
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true); 

  itemElement.querySelector('.elements__image').src = link;
  itemElement.querySelector('.elements__title').textContent = name; 
  itemElement.querySelector('.elements__heart').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__heart_theme_dark');
  });
  itemElement.querySelector('.elements__image').addEventListener('click', () => {
    itemPicture.src = sourceValue;
    itemParagraph.textContent = titleValue;
    openPopupImage();
  });
  itemElement.querySelector('.elements__trash').addEventListener('click', () => {
    itemElement.remove();
  });
  return itemElement;
  };

  // --- Функции --- Модальное окно "Просмотр картинки" --- //

  function openPopupImage() {  
    popupImage.classList.add('popup_opened');
  };
  
  function closePopupImage() {
    popupImage.classList.remove('popup_opened');
  };


/* --- --- --- --- --- --- --- --- --- --- --- --- --- --- все слушатели событий --- --- --- --- --- --- --- --- --- --- --- --- --- --- */

// --- Слушатели событий --- Модальное окно "Редактировать профиль" --- //

profileEdit.addEventListener('click', () => { // Активируем кнопку "Редактировать профиль"
  openPopup(profilePopup);
});

profileClose.addEventListener('click', () => { // Активируем Крестик закрывающий модальное окно "Редактировать профиль"
  closePopup(profilePopup);
});

profilePopup.addEventListener('submit', submitForm); // Активируем Модалку "Редактировать профиль" - передаем все изменения текста в разметку HTML


// --- Слушатели событий --- Модальное окно "Новое место" --- //

placeAdd.addEventListener('click', () => { // Активируем кнопку "Плюс - Добавить новое место"
  openPopup(placePopup);
});

placeClose.addEventListener('click', () => { // Активируем кнопку Крестик "Закрыть модальное окно - новое место"
  closePopup(placePopup);
});

addButton.addEventListener('click', () => { // Активируем в Модалке кнопку "Создать"
  closePopup(placePopup);
});

// --- Слушатели событий --- в DOM "Новое место" --- //

addButton.addEventListener('click', () => { // Активируем в DOM кнопку "Добавить новое место"
  elementContainer.prepend(addItem(sourceInput.value, titleInput.value));
  source.value = '';
  title.value = '';
});

// --- Слушатели событий --- Модальное окно "Просмотр картинки" --- //

buttonCloseImage.addEventListener('click', closePopupImage); // Активируем кнопку Крестик "Закрыть модальное окно"


/* --- --- --- --- --- --- вызов функций и запуск циклов которые должны стартовать во время загрузки страницы --- --- --- --- --- --- */

initialCards.forEach((element) => {
  elementContainer.append(addItem(element.link, element.name));
});
