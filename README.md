# Восстановленный плагин bvi 
Исходный код и логика - https://github.com/veks/button-visually-impaired-javascript.
Периодически сюда буду добавляться правки.
Плагин подготовлен для интеграции, некоторые ошибки оригинальной репы исправлены.

Протестирован: 
- ✅1С-Битрикс, 
- ✅vue.js.

## Подключение

Основной файл плагина
script(src='./../build/js/bvi.js')

Файл в котором инициализируем и даем настройки для плагина
script(src='./../build/js/components/getBvi.js')

Основной файл стилей для плагина
link("global/helpers/bvi.css")

Файл в котором мы корректируем либо дополняем стили плагина
link("global/helpers/bviCustom.scss")

Тег head по итогу должен выглядеть примерно так:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <title>Visual impairment plugin</title>
    <link rel="shortcut icon" href="./../build/img/favicon.ico" type="image/png">
    <!-- здесь уже билдится bvi.css и bviCustom.scss их можно отдельно взять из репозитория -->
    <link rel="stylesheet" href="./../build/css/style.css">
    <script src="./../build/js/jquery.js"></script>
    <!-- js подключение -->
    <!-- Основной файл плагина -->
    <script src="./../build/js/bvi.js"></script>
    <!-- Файл в котором инициализируем и даем настройки для плагина -->
    <script src="./../build/js/components/getBvi.js"></script>
</head>
```

## Документацию
```
https://github.com/veks/button-visually-impaired-javascript
```

## Project setup
```
npm install
```
## Gulp build/develop
```
gulp
```
## Running on node version  18.12.1
