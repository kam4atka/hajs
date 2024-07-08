# HA.JS

Фреймворк для создания REST-API. Данный проект построен на базе курса «Node.js. Профессиональная разработка REST API» [HTML Академии](https://htmlacademy.ru/).

## Особенности фреймворка

* Создание адаптированных REST API для учебных проектов;
* Полная типизация проекта;
* Хранение данных в памяти;
* Использование внедрения зависимостей (DI);
* Использование ES-модулей (CommonJs не поддерживается).

## Принципы фреймворка

* Разделение ответственности на слои приложения;
* Стандартизация движения данных между слоями (DTO, RDO, Entity);
* Все что должно быть типизировано, должно быть типизировано.

## Сборка проекта

```ts
npm run build
```

## Запуск тестов

```ts
npm run test
```

## Линтинг кода

```ts
npm run lint
```

## Документация

Документацию вы можете найти по следующей [ссылке](https://github.com/kam4atka/hajs/blob/main/docs/readme.md)

## Использование

```ts
import { LoggerInterface } from '.../hajs/common';

class Service {
  public loggerService!: LoggerInterface;

  constructor(logger: LoggerInterface) {
    this.loggerService = logger;
  }

  public init() {
    this.loggerService.info('Initialize Service');
  }
}
```

## Внесение изменений

- Клонируй / обнови актульную версию репозитория

  ```bash
  git clone git@github.com:kam4atka/hajs.git

  # or

  cd ./hajs
  git pull origin main
  ```

- Создай новую ветку для внесения изменений.

  Обрати внимание:

  - именование веток и коммитов следует формулировать согласно [соглашения о именовании](https://www.conventionalcommits.org/ru/v1.0.0/)
  - коммиты не следует делать большими. С большими коммитами не удобно проводить ревью кода

  ```bash
  # .../hajs

  git checkout -b fix/update-tests-for-database-service
  ```

- После внесения изменений отправь созданную ветку в репозиторий и создай **Pull Request**

  ```bash
  # .../hajs

  git push origin fix/update-tests-for-database-service
  ```

- После ревью **Pull Request** слей **Pull Request** с веткой **main** с объединением коммитов (**Squash and merge**)
