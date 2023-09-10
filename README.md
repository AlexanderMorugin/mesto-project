<h1 align="center">Проектная работа "Mesto"</h1>

Учебный проект публикации изображений, курса Веб-разработчик Яндекс.Практикум.

![Mesto Demo](/mesto-readme-min.png)

## О проекте ##

(Первый месяц)
Проект корректно отображается на экранах популярных размеров шириной страницы в 320, 768, 1024 и 1280 пикселей.
Применена адаптивная верстка, в зависимости от размера экрана сайт и его содержимое становится то больше, то меньше.
Реализовано плавное сжатие сайта. Используются flexbox и grid элементы.
Проект структурирован согласно методологии БЭМ nested.
Все интерактивные элементы обладают состоянием наведения или фокуса.
В проекте используется локально подключенный шрифт 'Inter'.

(Второй месяц)
В проект добавлен JavaScript, с помощью которого открываются и закрываются модальные окна "Редактировать профиль",
"Новое место" и "Открытие попапа с картинкой". Подробней о каждом модальном окне:
- в окне "Редактировать профиль" возможно изменить имя пользователя и описание;
- в окне "Новое место" пользователь может добавить ссылку на картинку и написать ее название;
- в окне "Открытие попапа с картинкой" открывается картинка (размером 75vw и 75vh) и описанием.
Изначально, при загрузке сайта, появляются 6 картинок, хранящихся в массиве initialCards. Каждую картинку можно отметить "лайком"
и удалить.

(Третий месяц - валидация форм и инфраструктура)
В проект добавлено ещё больше функциональности: пользователь сможет поставить лайк карточке или удалить её. 
Разработана валидация всех форм. Улучшено UX при работе с попапами (закрытие попапа кликом на оверлей или нажатием на Esc или на Крестик).
Javascript код разделty на разные модули. Использованы директивы export/import.
Создан файл .gitignore, в который добавлены папки node_modules и dist. Создадано инфраструктурное окружение с помощью Webpack.

(Четвертый месяц - взаимодействие с сервером в проекте Mesto)
Проект подключен к учебному серверу. При загрузке сайта, карточки подтягиваются с сервера методом "Fetch", 
который создаёт запрос "GET" на сервер и возвращает его ответ с карточками. Так же реализован новый функционал:
- добавления новой карточки, с отправкой запроса на сервер методом POST;
- удаление своей карточки путем отправки запроса на сервер методом DELETE;
- изменение профиля и аватарки, с отправкой запроса на сервер методом PATCH;
- отображается количество лайков карточек, каждый лайк добавляется на сервер запросом PUT и удаляется запросом DELETE;
Так же добавлен улучшенный UX всех форм, при нажатии на кнопку "Создать", "Сохранить" и "Да" пользователь уведомляется 
о процессе загрузки и кнопки меняют текст на: "Создание...", «Сохранение...», пока данные загружаются на сервер.
При наведении указателя мыши на аватар, на нём появляется иконка редактирования. При клике открывается модальное окно.

## Технологии ##

### HTML 
* Семантические теги
### CSS
* Flexbox
* Grid Layout
* Адаптивная верстка с использованием медиа-запросов
* Позиционирование блоков и элементов
* Минификация CSS и автоматическое добавление вендорных префиксов
* БЭМ Nested
* Псевдоклассы CSS
### JavaScript
* Модульные окна с формой
* «Живая» валидация форм
* ES6-классы
* Асинхронный код: промисы и HTTP-запросы
* Минификация и транспиляция JS Babel
* API сервера Яндекс.Практикум
* Webpack

## Как запустить проект: ##
Клонирование репозитория
```
git clone https://github.com/AlexanderMorugin/mesto-project.git
```
Установка зависимостей
```
npm i webpack --save-dev
```
Запуск проекта
```
npm run build
npm run dev
```

## Макеты ##

Проект выполнен согласно макетам в Figma, находящимся по ссылкам:

[Макет 1](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1), [Макет 2](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1), [Макет 3](https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript.-Sprint-9), [Макет 4](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6)

--------
студент "Яндекс Практикум"\
курс "Веб-разработчик плюс"\
Александр Моругин\
сентябрь-декабрь 2022г.
