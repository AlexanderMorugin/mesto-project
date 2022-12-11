import { elementContainer, addItem } from './card.js'

// const myId = '9d671a48be30e53e5060a4df';
// console.log(myId);

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

export function getCurrentUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(user => { 
    currentUser = user;
    currentUserId = user._id;
    // console.log(currentUser);
    // console.log(currentUserId);
  })
  .catch((err) => {
    console.error(err); // выводим ошибку в консоль
  });
}

const trashButton = document.querySelector('.elements__trash');

export let currentCard;
export let currentCardId;
export let currentCardOwnerId;

export const getInitialCards = () => { // Подтянули с сервера карточки и вставили в DOM
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
  })
  .then(cards => {    
    cards.forEach((card) => {
      elementContainer.append(addItem(card.link, card.name))
      currentCard = card;
      currentCardId = card._id;
      currentCardOwnerId = card.owner._id;
      console.log(currentCard); 
      console.log('currentCardId -', currentCardId); 
      console.log('currentCardOwnerId -', currentCardOwnerId); 
      return currentCard;
    })
  })
  .catch((err) => {
    console.error(err);
  });
}

export function removeCard() {  
  // currentCardId = '6394fbe74e63d41cd42277f5';

  fetch(`${config.baseUrl}/cards/` + currentCardId, {
    method:'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },  
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch((err) => {
    console.error(err); // выводим ошибку в консоль
  })
}

// .then(res => {
//   if (res.ok) { console.log("HTTP request successful") }
//   else { console.log("HTTP request unsuccessful") }
//   return res
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))
// }
// removeCard()



// // Лайк и удаление
// cardList.addEventListener("click", function(event) {
//   // Поставить/снять лайк
//   if (event.target.classList.contains("place-card__like-icon")) {
//     Card.like(event.target);
//   }
//   // Удалить карточку
//   if (event.target.classList.contains("place-card__delete-icon")) {
//     Card.remove(event.target);
//   }
// });