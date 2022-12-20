//  F O R M S     &     V A L I D A T I O N

export const showInputError = (formElement, inputElement, errorMessage, settings) => {  // Ошибка есть - показываем действия
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(settings.inputErrorClass);  
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
}

export const hideInputError = (formElement, inputElement, settings) => {  // Ошибки нет - убираем действия
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(settings.errorClass);
}

export const isValid = (formElement, inputElement, settings) => {  // Функция проверяет валидность всех полей
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

export const hasInvalidInput = (inputList) => {  // Функция принимает массив полей формы и возвращает true, если в нём хотя бы одно поле не валидно, и false, если все валидны.
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

export const toggleButtonState = (inputList, buttonElement, settings) => {  // Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
};

export const setEventListeners = (formElement, settings) => {  // Добавление обработчиков всем полям формы
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

export const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formElement) => { 
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
  });
    setEventListeners(formElement, settings);
}); 
};
