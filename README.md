## [spa-food-project DEMO](https://maximmorenko.github.io/spa-food-project)

## Небольшой сервис с едой. Реализован поиск по категориям и переключением между страницами с использованием (SPA).

## [API](https://www.themealdb.com/api.php)

## [Сертификат](https://www.udemy.com/certificate/UC-76e27f78-5f2a-48fe-8b32-c80bca3f9d89/)

![](https://github.com/maximmorenko/spa-food-project/blob/master/assets/screen.jpg)

# Установка реакт приложения
npx create-react-app . (установит в текущую папку)
# Очистка реакт
название, описание в html и manifest
# подключаем библиотеку CSS google

# <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

# подключаем иконки

# <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

иконки вставляем через парный тег <i class="material-icons">сюда подбираем нужное слово на сайте</i>

# прелоадер шапку и футер возьмем из проекта movies

# установка пятой веврсии реакт дом роутер
npm i react-router-dom@5.2.0

# базовый роутинг
1. React Router помогает нам направлять пользователей к нужному компоненту.
мы можем использовать маршрутизацию на стороне клиента для создания одностраничного приложения (SPA), 
которое позволяет перемещаться между различными страницами без обновления браузера.
2. подключили несколько страниц плюс NotFound


# добавляем сслки в шапке на страницы
чтобы приложение не перезагружалось при смене страниц, используем компонент Link и его атрибут to (пувть) вместо тега а

# чтобы заработал компонент Link обновляю версию до 5.3.3 (npm i react-router-dom@5.3.3)

# 4 хука
1. useHistory Первый хук useHistory позволяет нам получить доступ к объекту history. Затем мы можем вызывать такие методы объекта history, как goBack или push. Метод goBack позволяет перенаправить пользователя к предыдущему маршруту в стеке истории. Например, если пользователь перейдет со страницы Home на страницу Shop, а затем нажмет кнопку для возврата назад (“Go Back”), он снова будет перенаправлен на страницу Home.
2. useParams возвращает объект пары key/value (ключ/значение) параметров URL. Используйте его для доступа к match.params 
текущего <Route>. Это гораздо более чистый способ доступа к параметрам URL.
3. useLocation Хук useLocation возвращает объект location, представляющий текущий URL. Его можно рассматривать как useState, который возвращает новое местоположение при каждом изменении URL. Этот хук можно использовать, например, чтобы вызвать событие просмотра новой страницы для инструмента веб-аналитики.
4. Хук useRouteMatch пытается сопоставить текущий URL таким же образом, как и <Route>. В основном он полезен для получения доступа к данным соответствия без фактического рендеринга <Route>

# вложенный роутинг
1. компонент Роут можно сделать парным и вложить в него дочерний компонет, через который можно передавать пропсы:
<Route exact path='/'>
    <Home cb={cb}/>
<Roure>

# API (themealdb)
https://www.themealdb.com/api.php
# настройка методов (функций получени разного рода инфо из API с использованием Async/await)

# Главная страница с категориями блюд

# Cтраница категории блюд

# кнопка назад useHistory

# Cтраница рецепта блюда

# Реализация поиска с возможностью обновления (наращиваания) адресной строки

# публикация проекта
1. добавлеем поле в корневой объект файла package.json 
"homepage": "https://maximmorenko.github.io/spa-food-project";
2. добавлеем поле 'script' корневого объекта в файле package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
3. Для того чтобы роутинг работал мы должны у компонента Router добавить атрибут baseName=''
 и указать ему значение (путь нашей главной страницы) /spa-food-project
4. переносим ключ с енв локал на гитхаб в секреты (настройки проекта => новый секрет)
5. устанавливаем npm install gh-pages -D (-D это то же самое что и --save-dev)
6. сохраняем изменения git add -A
7. запускаем диплой npm run deploy
# ссылка на проект https://maximmorenko.github.io/spa-food-project/




