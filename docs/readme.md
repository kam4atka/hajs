# HA.JS

Фреймворк для создания REST приложений учебных проектов. Данный проект построен на базе курса «Node.js. Профессиональная разработка REST API».

Фреймворк технически разделён на отдельные пакеты, собирающие модули по характеру их использования:

* [Common](https://github.com/kam4atka/hajs/blob/main/docs/packages/common.md) - Интерфейсы и классы, обеспечивающие работу общих сервисов приложения.
* [Core](https://github.com/kam4atka/hajs/blob/main/docs/packages/core.md) - Интерфейсы и классы, обеспечивающие работу специфических сервисов приложения.
* [Enum](https://github.com/kam4atka/hajs/blob/main/docs/packages/enum.md) - Общие перечисления, используемые в каждом проекте.
* [Type](https://github.com/kam4atka/hajs/blob/main/docs/packages/type.md) - Общие типы, используемые в каждом проекте.
* [Util](https://github.com/kam4atka/hajs/blob/main/docs/packages/util.md) - Общие функции, используемые в каждом приложении.

Фреймворк логически разделён на слои, которые решают разные задачи и выполняют разные функции в приложении:

* [Generator](https://github.com/kam4atka/hajs/blob/main/docs/packages/common.md#generator) - Генерация и подготовка проектных данных.
* [Middleware](https://github.com/kam4atka/hajs/blob/main/docs/packages/core.md#middleware) - Валидация входящих данных, проверка заголовков авторизации и т.п.
* [Controller](https://github.com/kam4atka/hajs/blob/main/docs/packages/common.md#controller) - Обеспечение обработки входящих запросов от клиента и формирование ответы на запрос.
* [Service](https://github.com/kam4atka/hajs/blob/main/docs/packages/common.md#service) - Обработка и подготовка данных для хранения в базе данных или передачи клиенту по запросу.
* [Repository](https://github.com/kam4atka/hajs/blob/main/docs/packages/common.md#repository) - Реализация механизмов работы с базой данных.
* [Database](https://github.com/kam4atka/hajs/blob/main/docs/packages/common.md#database) - Хранение проектных данных.

## Основные рабочие цепочки

Работа REST API предусматривает две рабочие цепочки:

  * Инициализация приложения

    В учебных проектах используются специально подготовленные проектные данные, с которыми работаю студенты. Данная цепочка включает в себя этап генерации проектных данных проекта. Валидация данных не включена в данную цепочку, поскольку данные подготавливаются самостоятельно.

  * Обработка входящих запросов

    Стандартная обработка входящих запросов от клиента и ответов клиенту. Предусматривает валидацию входных данных от клиента.

#### Инициализация приложения

Схема движения данных:

![Инициализация приложения](/docs/assets/initialize.png)

#### Обработка входящих запросов

Схема движения данных: 

- создание и обновление данных

![Создание и обновление данных](/docs/assets/create-update.png)

- чтение и удаление данных

![Чтение и удаление данных](/docs/assets/read-delete.png)

