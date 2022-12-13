import { elementContainer, addItem, likesCount, formButtonSure } from './card.js'

// const myId = '9d671a48be30e53e5060a4df';

// ===================================================================================================

export const config = { // Авторизовались на сервере
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-17',
  headers: {
    authorization: 'b0d1ad3c-6217-4c66-b95d-59c36af81149',
    'Content-Type': 'application/json'
  }
}

export let currentUser;
export let currentUserId;

// ===================================================================================================

//  F U N C T I O N      G E T     P R O F I L E
export function getCurrentUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.ok) {
    return res.json();
    }    
    return Promise.reject(`Ошибка: ${res.status}`);  // если ошибка, отклоняем промис
  })
  .then(user => { 
    currentUser = user;
    currentUserId = user._id;
    // console.log(currentUser);
    // console.log(currentUserId);
  })
  .catch((err) => {
    console.error(err);
  });
}


export let currentCard;
export let currentCardId;
export let currentCardOwnerId;
export let currentCardLikes;
export let likesArr;

// ===================================================================================================

//  F U N C T I O N      G E T     C A R D S
export const getInitialCards = () => { // Подтянули с сервера карточки и вставили в DOM
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
    return res.json();
    }    
    return Promise.reject(`Ошибка: ${res.status}`);  // если ошибка, отклоняем промис
  })
  .then(cards => {    
    cards.forEach((card) => {
      elementContainer.append(addItem(card.link, card.name))
      currentCard = card;
      currentCardId = card._id;
      currentCardOwnerId = card.owner._id;
      currentCardLikes = card.likes;
      console.log(currentCard);
    })
      // return currentCard;    
  })
  .catch((err) => {
    console.error(err);
  });
}

// ===================================================================================================

//  F U N C T I O N      D E L E T E     C A R D
export function removeCard() {  
  cardDeleting(true);
  return fetch(`${config.baseUrl}/cards/${currentCardId}`, {
    method:'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
  })
  .then(res => {
    if (res.ok) {
    return res.json();
    }    
    return Promise.reject(`Ошибка: ${res.status}`);  // если ошибка, отклоняем промис
  })
  .catch((err) => {
    console.error(err);
  })
}

function cardDeleting(isDeleting) {
  if (isDeleting) {
    formButtonSure.textContent = 'Удаление...';
  } else {
    formButtonSure.textContent = 'Да';
  }
}

// ===================================================================================================

//  F U N C T I O N      P U T     L I K E
export function putLike() {  
  return fetch(`${config.baseUrl}/cards/likes/${currentCard._id}`, {
    method:'PUT',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({
    //   likes: 1
    // })
  })
  .then(res => {
    if (res.ok) {
    return res.json();
    }    
    return Promise.reject(`Ошибка: ${res.status}`);  // если ошибка, отклоняем промис
  })
  .then((result) => {  
    console.log(result); 
    // likesCount.textContent = result.likes
  })
  .catch((err) => {
    console.error(err);
  })
}

// ===================================================================================================

//  F U N C T I O N      D E L E T E      L I K E
export function deleteLike() {  
  return fetch(`${config.baseUrl}/cards/likes/${currentCardId}`, {
    method:'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
  })
  .then(res => {
    if (res.ok) {
    return res.json();
    }    
    return Promise.reject(`Ошибка: ${res.status}`);  // если ошибка, отклоняем промис
  })
  .catch((err) => {
    console.error(err);
  })
}