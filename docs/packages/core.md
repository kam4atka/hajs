### Error

#### `class HttpError` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/error/http/http-error.ts)

```ts
new HttpError(
  httpStatusCode: number,
  message: string,
  detail?: string
);
```

Пример:

```ts
new HttpError(
  404,
  'Can\'t find the entity.',
  '[Controller] - Get Entity'
);
```

#### `class ValidationError` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/error/validation/validation-error.ts)

```ts
new ValidationError(
  message: string,
  errors: ValidationErrorField[]
);
```

Пример:

```ts
new ValidationError(
  'Validation error ...',
  [{
    property: 'price',
    messages: [
      'Price must be more than 100'
    ]
  }]
);
```

### Middleware

#### `interface MiddlewareInterface` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/middleware/middleware.interface.ts)

```ts
this.customMiddleware: MiddlewareInterface
```

Методы:

* Обработчик middleware
```ts
execute: (req: Request, res: Response, next: NextFunction) => void;
```

#### `interface CheckDocumentExistInterface` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/middleware/check-document-exist/check-document-exist.interface.ts)

> Данный интерфейс используется в `CheckDocumentExistMiddleware`.

```ts
this.service: CheckDocumentExistInterface
```

Свойства:

* Уникальный идентификатор сущности
```ts
documentId: string
```

Методы:

* Обработчик middleware
```ts
exists(documentId: string): Promise<boolean>;
```

#### `class checkApiVersion` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/middleware/check-api-version/check-api-version.middleware.ts)

Проверка поддержки версии API, указанной в параметре строки запроса. Актуально для REST-API, обслуживающих работу нескольких версий API.

```ts
new CheckAuthMiddleware();
```

Методы:

* Обработчик middleware
```ts
async execute(req: Request, res: Response, next: NextFunction): Promise<void>
```

#### `class CheckBasicAuthMiddleware` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/middleware/check-basic-auth/check-basic-auth.middleware.ts)

Проверка базовой авторизации. Проверяет наличие заголовка `Authorization Basic ...`.

```ts
new CheckAuthMiddleware();
```

Методы:

* Обработчик middleware
```ts
async execute(req: Request, res: Response, next: NextFunction): Promise<void>
```

#### `class CheckDocumentExistMiddleware` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/middleware/check-document-exist/check-document-exist.middleware.ts)

Проверка наличия сущности.

```ts
new CheckItemExistMiddleware(this.service, 'Document', 'documentId');
```

Свойства:

* Сервис, отвечающий за проверку наличия сущности

```ts
service: CheckItemExistInterface
```

* Имя сущности. Используется для описания ошибки

```ts
documentName: string
```

* Имя параметра в запросе от клиента.

```ts
paramName: string
```

Методы:

* Обработчик middleware
```ts
async execute(req: Request, res: Response, next: NextFunction): Promise<void>
```

#### `class CheckProjectExistMiddleware` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/middleware/check-project-exist/check-project-exist.middleware.ts)

Проверка наличия проекта. Актуально для REST-API, обслуживающих работу нескольких проектов.

```ts
new CheckProjectExistMiddleware(Projects);
```

Свойства:

* Перечисление названий проектов
```ts
projects: {[key: string]: string}
```

Методы:

* Обработчик middleware
```ts
async execute(req: Request, res: Response, next: NextFunction): Promise<void>
```

#### `class CheckSimpleJWTMiddleware` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/middleware/check-simple-jwt/check-simple-jwt.middleware.ts)

Проверка простого варианта JWT авторизации. Проверяет наличие заголовка `x-token`.

```ts
new CheckAuthTokenMiddleware();
```

Методы:

* Обработчик middleware
```ts
async execute(req: Request, res: Response, next: NextFunction): Promise<void>
```

#### `class ParseSimpleJWTMiddleware` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/middleware/parse-simple-jwt/parse-simple-jwt.middleware.ts)

Парсинг простого варианта JWT авторизации. Записывает значение электронного адреса в свойство `response.locals.authEmail`, полученное из токена в заголовке `x-token`.

```ts
new CheckAuthTokenMiddleware();
```

Методы:

* Обработчик middleware
```ts
async execute(req: Request, res: Response, next: NextFunction): Promise<void>
```

#### `class ValidateDtoMiddleware` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/middleware/validate-dto/validate-dto.middleware.ts)

Валидация данных от клиента.

```ts
new ValidateDtoMiddleware(DTO);
```

Свойства:

* Data Transfer Object (DTO)
```ts
dto: ClassConstructor<object>
```

Методы:

* Обработчик middleware
```ts
async execute(req: Request, res: Response, next: NextFunction): Promise<void>
```

### Route

#### `interface RouteInterface` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/core/route/route.interface.ts)

```ts
this.route: RouteInterface;
```

Свойства:

* Путь маршрута
```ts
path: string
```

* Метода маршрута
```ts
method: HttpMethod
```

* Список middlewares, которые обрабатывают запрос до передачи данных методу `handler()`
```ts
middlewares?: MiddlewareInterface[]
```

Методы:

* Обработчик маршрута
```ts
  handler: (req: Request, res: Response, next: NextFunction) => void;
```
