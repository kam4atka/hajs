### `function createErrorObject()` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/util/create-error-object/create-error-object.ts)

Функция создания объекта ошибки

```ts
const error = createErrorObject(
  ServiceError.CommonError,
  'Not\'t found entity with id ...'
);
// or
const error = createErrorObject(
  ServiceError.ValidationError,
  'Data is wrong',
  [{
    property: 'price',
    messages: [
      'Price must be more than 100'
    ]
  }]
);
```

Параметры:

* Тип ошибки

```ts
serviceError: ServiceError
```

* Сообщение ошибки

```ts
message: string
```

* Детализация ошибки

```ts
details: ValidationErrorField[] = []
```

### `function fillDTO<T, V>(DTO, plainObject)` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/util/fill-dto/fill-dto.ts)

Функция создания Data Transfer Object (DTO, RDO)

```ts
const dto = function fillDTO(entityDTO, body);
// or
const rdo = function fillDTO(entityRDO, findedEntity);
```

Параметры:

* Класс Data Transfer Object (DTO, RDO)

```ts
DTO: ClassConstructor<T>
```

* Объект, содержащий данные для DTO или RDO

```ts
plainObject: V
```

### `function getFullServerPath(url: UrlType)` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/util/get-full-server-path/get-full-server-path.ts)

Функция формирования URL сервера

```ts
const serverUrl = getFullServerPath({
  protocol: 'http',
  host: 'localhost',
  port: '9000'
});
```

Параметры:

* Объект, с данными для формирования URL

```ts
urlParams: UrlType
```

### `function getRandomFloat(min: number, max: number)` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/util/get-random-float/get-random-float.ts)

Функция получения случайного числа с плавающей точкой из диапазона значений

```ts
const float = getRandomFloat(0.5, 5.5);
```

Параметры:

* Минимальное значение диапазона

```ts
min: number
```

* Максимальное значение диапазона

```ts
max: number
```

### `function getRandomInt(min: number, max: number)` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/util/get-random-int/get-random-int.ts)

Функция получения случайного целого числа из диапазона значений

```ts
const integer = getRandomFloat(1, 6);
```

Параметры:

* Минимальное значение диапазона

```ts
min: number
```

* Максимальное значение диапазона

```ts
max: number
```

### `function renderSpecHtml(url: string)` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/util/render-spec-html/render-spec-html.ts)

Функция формирования HTML страницы спецификации проекта

```ts
const html = renderSpecHtml('/var/local/spec/project.yml');
```

Параметры:

* Путь до файла спецификации в формате YML

```ts
url: string
```
