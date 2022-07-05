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
подключили несколько страниц плюс NotFound

# добавляем сслки в шапке на страницы
чтобы приложение не перезагружалось при смене страниц, используем компонент Link и его атрибут to (пувть) вместо тега а

# чтобы заработал компонент Link обновляю версию до 5.3.3 (npm i react-router-dom@5.3.3)