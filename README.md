![ion.js](https://mcmraak.github.io/images/ionjs.png)

# ion.js - Simple ajax-wrapper for OctoberCMS(Laravel5)
Version: 1.0.1

## Requirements

jQuery v2.*
Twitter Bootstrap v2.* (Optionally, to control bootstrap modal windows)

## Very simple!

ion.js - This is an easy-to-use shell for working with AJAX-requests in OctoberCMS projects.

# Connect



## API

**DATA** - Источник данных в DOM
```
data=.formlogin
```
> Будут собраны все значения с элементов по селектору $(‘.formlogin’) в массив, где ключи массива name=? а значения value=? или text=?

**AJAX** - Адрес узла
```
ajax=/ajax;
```
> Данные будут отправлены в узел /ajax

**HTML** - Контейнер для вставки данных
```
html=#WS;
```
> Данные будут вставлены в контейнер по селектору $(‘#WS’) в формате html

**APPEND** - Добавить данные в конец контейнера.
```
APPEND=#WS;
```

**PREPEND** - Добавить данные в начало контейнера.
```
PREPEND=#WS;
```

**VAL** - Свои переменные которые будут переданы (перекроют DATA при совпадении ключей)
```
val='myvar':'AZAZA','myvar2':123;
```
> Добавить переменные в массив DATA

**GET** - Включение в запрос строки GET-Параметров
```
get=true;
```
> Если url на странице вида site.ru/foo/bar?page=1&filter=azaza то при использовании данного параметра к url ajax-запроса добавится ?page=1&filter=azaza ( пригодится при пагинации и сохранении параметров фильтра )

**RUN** - Запуск объявленной функции
```
run=myfunc();
```
> Запуск JavaScript-функции или кода, используется обычный eval()

**MODAL** - Открывает модальное окно twitter bootstrap (Если оно есть на странице)
```
modal=#MyModal;
```
> Контент возвращённый функцией AJAX вставляется в модальное окно с указанным id (в контейнер ‘.modal-content’)

```
modal=hide;
```
> Все модальные окна (с классом .modal) будут скрыты

**CLEAN** - Очищает значения полей или текст внутри эллеменов по селектору
```
clean=.myfilds;
```

**DEBUG** - Отправляет все возвращённые данные в консоль
```
debug=true;
```
> Режим отладки, всё что возвращает функция AJAX дублируется в консоль

**TYPE** - Определить нестандартный тип запроса
```
type=put;
type=delete;
```
> Возможность для restfull-контроллеров указать тип запроса, по умолчанию post (если нет post-данных то get)

**RELOAD** - Перезагрузить страницу через определённое время
```
reload=2;
```
> Перезагрузит страницу через 2 секунды

#FOR LARAVEL

Для организации CSRF-Защиты запросов, поместите во view следующий тег
```html
<meta name="csrf-token" content="{{ csrf_token() }}">
```
В результате чего заголовок каждого запроса с данной страницы будет дополнен csrf-токеном.

## License

ion.js is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
