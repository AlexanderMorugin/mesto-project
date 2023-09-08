(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}e.d({},{x:()=>f});var n={baseUrl:"https://nomoreparties.co/v1/plus-cohort-17",headers:{authorization:"b0d1ad3c-6217-4c66-b95d-59c36af81149","Content-Type":"application/json"}},r=document.querySelector(".elements"),o=document.forms.place,c=o.elements.title,a=o.elements.source,u=document.querySelector(".form__button_place"),s=document.querySelector(".popup__picture"),l=document.querySelector(".popup__paragraph");function i(e){var r=document.querySelector("#item-template").content.querySelector(".elements__item").cloneNode(!0),o=r.querySelector(".elements__image"),c=r.querySelector(".elements__title"),a=r.querySelector(".elements__trash"),u=r.querySelector(".elements__heart"),i=r.querySelector(".elements__heart-count");return o.src=e.link,c.textContent=e.name,o.alt=e.name,0!==e.likes.length&&(u.classList.add("elements__heart_theme_dark"),i.textContent=e.likes.length),u.addEventListener("click",(function(r){var o;u.classList.contains("elements__heart_theme_dark")?function(e){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:n.headers}).then((function(e){return t(e)}))}(e._id).then((function(e){i.textContent=e.likes.length,r.target.classList.toggle("elements__heart_theme_dark")})).catch((function(e){console.error(e)})):(o=e._id,fetch("".concat(n.baseUrl,"/cards/likes/").concat(o),{method:"PUT",headers:n.headers}).then((function(e){return t(e)}))).then((function(e){i.textContent=e.likes.length,r.target.classList.toggle("elements__heart_theme_dark")})).catch((function(e){console.error(e)}))})),o.addEventListener("click",(function(){s.src=e.link,s.alt=e.name,l.textContent=e.name,j(E)})),e.owner._id==f&&a.classList.add("elements__trash_active"),a.addEventListener("click",(function(){var o;(o=e._id,fetch("".concat(n.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:n.headers}).then((function(e){return t(e)}))).then((function(e){r.remove()})).catch((function(e){console.error(e)}))})),r}function d(e){"Escape"===e.key&&P(document.querySelector(".popup_opened"))}document.querySelector(".popup_sure_open"),document.querySelector(".popup_sure_close"),document.querySelector(".form__button_sure"),document.querySelector(".elements__trash"),document.forms.sure,o.addEventListener("submit",(function(){var e,s;u.textContent="Создание...",(e=c.value,s=a.value,fetch("".concat(n.baseUrl,"/cards"),{method:"POST",headers:n.headers,body:JSON.stringify({name:e,link:s})}).then((function(e){return t(e)}))).then((function(e){console.log(e),r.prepend(i(e)),o.reset(),P(C)})).catch((function(e){console.error(e)})).finally((function(){return u.textContent="Создать"}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&P(e),t.target.classList.contains("popup__button-close")&&P(e)}))}));var m,f,_=document.querySelector(".profile__title"),p=document.querySelector(".profile__subtitle"),h=document.querySelector(".popup_profile_open"),y=document.querySelector(".profile__edit"),v=document.forms.profile,b=v.elements.user,S=v.elements.description,q=document.querySelector(".form__button_profile"),C=document.querySelector(".popup_place_open"),L=document.querySelector(".profile__add"),g=document.querySelector(".form__button_place"),E=document.querySelector(".popup_image_open"),k=document.querySelector(".profile__avatar-edit"),x=document.querySelector(".profile__avatar-image"),A=document.querySelector(".popup_avatar_open"),U=document.querySelector(".form__button_avatar"),w=document.forms.avatar,O=w.elements.srcavatar;function j(e){e.classList.add("popup_opened"),document.addEventListener("keydown",d)}function P(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",d)}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}y.addEventListener("click",(function(){j(h),b.value=_.textContent,S.value=p.textContent})),v.addEventListener("submit",(function(e){var r,o;e.preventDefault(),q.textContent="Сохранение...",(r=b.value,o=S.value,fetch("".concat(n.baseUrl,"/users/me"),{method:"PATCH",headers:n.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return t(e)}))).then((function(e){console.log(e),_.textContent=e.name,p.textContent=e.about,P(h)})).catch((function(e){console.error(e)})).finally((function(){return q.textContent="Сохранить"}))})),L.addEventListener("click",(function(){j(C),g.disabled=!0,g.classList.add("form__button_disabled")})),k.addEventListener("click",(function(){j(A),U.disabled=!0,U.classList.add("form__button_disabled")})),w.addEventListener("submit",(function(){var e;U.textContent="Сохранение...",(e=O.value,fetch("".concat(n.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:n.headers,body:JSON.stringify({avatar:e})}).then((function(e){return t(e)}))).then((function(e){console.log(e),x.src=e.avatar,w.reset(),P(A)})).catch((function(e){console.error(e)})).finally((function(){return U.textContent="Сохранить"}))})),m={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},Array.from(document.querySelectorAll(m.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}(n,r,t)}))}))}(e,m)})),Promise.all([fetch("".concat(n.baseUrl,"/cards"),{headers:n.headers}).then((function(e){return t(e)})),fetch("".concat(n.baseUrl,"/users/me"),{headers:n.headers}).then((function(e){return t(e)}))]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];f=a._id,_.textContent=a.name,p.textContent=a.about,x.src=a.avatar,c.forEach((function(e){r.append(i(e)),console.log(e)}))})).catch((function(e){console.error(e)}))})();