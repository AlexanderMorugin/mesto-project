
export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export function request(url, options) {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(url, options).then(checkResponse)
}

// ===================================================================================================

export const config = {
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
    headers: config.headers
  })
  .then(res => checkResponse(res))
}

export function editCurrentUser(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
  .then(res => checkResponse(res))   
}

export function editAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .then(res => checkResponse(res))
};

export function addCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
  .then(res => checkResponse(res))
}

// ===================================================================================================

//  F U N C T I O N      G E T     C A R D S
export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(res => checkResponse(res))
}

// ===================================================================================================

//  F U N C T I O N      D E L E T E     C A R D
export function removeCard(cardId) {  
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method:'DELETE',
    headers: config.headers,
  })
  .then(res => checkResponse(res))
}

// ===================================================================================================

//  F U N C T I O N      P U T     L I K E
export function putLike(cardId) {  
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method:'PUT',
    headers: config.headers,
  })
  .then(res => checkResponse(res))
}

// ===================================================================================================

//  F U N C T I O N      D E L E T E      L I K E
export function deleteLike(cardId) {  
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method:'DELETE',
    headers: config.headers,
  })
  .then(res => checkResponse(res))
}