Задание: Написать примитивный Task Manager
Должен быть реализован следующий функционал:
Создание, Редактирование, Удаление


Взаимодействие c API:
Получения списка:
url: https://test.megapolis-it.ru/api/list

type: GET

Модель: Object<data: Array, length: Number, success: Bool, error: String>

Описание: Метод вернёт список всех задач


Создание:
url: https://test.megapolis-it.ru/api/list

type: POST

Модель(Request): Object<title: String>

Модель(Response): Object<id: Number, success: Bool, error: String>

Описание: Метод создаст новую запись и вернет ее идентификатор


Редактирование:
url: https://test.megapolis-it.ru/api/list/{ID}

type: POST

Модель(Request): Object<title: String>

Модель(Response): Object<success: Bool, error: String>

Описание: Метод изменит данные


Удаление:
url: https://test.megapolis-it.ru/api/list/{ID}

type: DELETE

Модель(Response): Object<success: Bool, error: String>

Описание: Метод удаляет запись


Дизайн https://www.figma.com/file/GXn6kfjXDTTtbuRkT4XvuV/Тестовое-задание
