import { elementContainer, addItem, likesCount, formButtonSure, titleInput, sourceInput } from './card.js'
import { userInput, descriptionInput, sourceAvatar } from './modal.js'

import { cardId } from './index.js';

export function checkResponse(res) {  // Функция проверки ответа от сервера
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);  // если ошибка, отклоняем промис
  }
}

// ===================================================================================================

export const config = { // Авторизовались на сервере
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-17',
  headers: {
    authorization: 'b0d1ad3c-6217-4c66-b95d-59c36af81149',
    'Content-Type': 'application/json'
  }
}

// ===================================================================================================

//  F U N C T I O N      G E T     P R O F I L E
export function getCurrentUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    }
  })
  .then(res => checkResponse(res))
}

export function editCurrentUser() {
  return fetch(`${config.baseUrl}/users/me`, { // Отправили изменения на сервер данных профиля пользователя (имя, о себе) и вставили в DOM
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: userInput.value,
      about: descriptionInput.value,
    })
  })
  .then(res => checkResponse(res))   
}

export function editCurrentAvatar() {
  return fetch(`${config.baseUrl}/users/me/avatar`, { // Отправили изменения на сервер данных аватара пользователя и вставили в DOM
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: sourceAvatar.value
    })
  })
  .then(res => checkResponse(res))
};

export function addCard() {
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
  .then(res => checkResponse(res))
}

// ===================================================================================================

//  F U N C T I O N      G E T     C A R D S
export const getInitialCards = () => { // Подтянули с сервера карточки и вставили в DOM
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(res => checkResponse(res))
}

// ===================================================================================================

//  F U N C T I O N      D E L E T E     C A R D
export function removeCard(currentId) {  
  return fetch(`${config.baseUrl}/cards/${currentId}`, {
    method:'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
  })
  .then(res => checkResponse(res))
  .then(data => console.log(data))
}

// ===================================================================================================

//  F U N C T I O N      P U T     L I K E
export function putLike() {  
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method:'PUT',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({
    //   likes: 1
    // })
  })
  .then(res => checkResponse(res))
  .then((result) => {  
    console.log(result); 
  })
  .catch((err) => {
    console.error(err);
  });
}

// ===================================================================================================

//  F U N C T I O N      D E L E T E      L I K E
export function deleteLike() {  
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method:'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
  })
  .then(res => checkResponse(res))
  .catch((err) => {
    console.error(err);
  })
}