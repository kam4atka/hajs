### Logger

#### `interface LoggerInterface` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/logger/logger.interface.ts)

```ts
this.loggerService: LoggerInterface;
```

Методы:

* Вывод сообщения уровня `info`
```ts
info(message: string, ...args: unknown[]): void[];
```

* Вывод сообщения уровня `warn`
```ts
warn(message: string, ...args: unknown[]): void[];
```

* Вывод сообщения уровня `error`
```ts
error(message: string, ...args: unknown[]): void[];
```

* Вывод сообщения уровня `debug`
```ts
debug(message: string, ...args: unknown[]): void[];
```

#### `class LoggerService` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/logger/logger.service.ts)

```ts
this.loggerService: LoggerInterface = new LoggerService();
```

Методы:

* Вывод сообщения уровня `info`
```ts
this.loggerService.info('info message');
```

* Вывод сообщения уровня `warn`
```ts
this.loggerService.warn('warn message');
```

* Вывод сообщения уровня `error`
```ts
this.loggerService.error('error message');
```

* Вывод сообщения уровня `debug`
```ts
this.loggerService.debug('debug message');
```

### Generator

#### `interface GeneratorInterface<Dto>` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/generator/generator.interface.ts)

> `Dto` - тип, описывающий возвращаемую сущность

```ts
this.generatorService: GeneratorInterface<Dto>;
```

Методы:

* Генерация массива сущностей
```ts
getColletion(count: number): Dto[]
```

* Генерация отдельной сущности
```ts
getItem(): Dto
```

#### `interface GeneratorBySourceInterface<SourceCollection, SourceItem, Dto>` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/generator/generator-by-source.interface.ts)

Используется в случае, если генерация данных происходит на основании подготовленного `json` файла.

> `SourceCollection` - тип, описывающий данные, на основании которых требуется сгенерировать коллекцию Dto
>
> `SourceItem` - тип, описывающий данные, на основании которых требуется сгенерировать Dto
>
> `Dto` - тип, описывающий возвращаемую сущность

```ts
this.generatorService: GeneratorInterface<SourceCollection, SourceItem, Dto>;
```

Методы:

* Генерация массива сущностей
```ts
getColletion(sources?: SourceColletion[], count?: number): Dto[]
```

* Генерация отдельной сущности
```ts
getItem(source?: SourceItem): Dto
```

### Database

#### `interface DatabaseInterface<Database>` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/database/database.interface.ts)

> `Database` - тип, описывающий тип базы данных.

```ts
// Каждая строка типа описывает одну коллекцию.
type Database = {
 points?: Map<string, Point>,
 offers?: Map<string, Offer>
}

this.databaseService: DatabaseInterface<Database>;
```

Методы:

* Получение коллекций
```ts
read(): Promise<Database | null>
```

* Запись коллекций
```ts
write(collections: Database): Promise<void>
```

#### `class DatabaseService<Database>` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/database/database.service.ts)

> `Database` - тип, описывающий тип базы данных. Подробное описание типа можно найти в описании `DatabaseInterface`

```ts
this.databaseService: DatabaseInterface<Database> = new Database<Database>();
```

Методы:

* Получение коллекций
```ts
this.databaseService.read(): Promise<Database | null>
```

* Запись коллекций
```ts
this.databaseService.write(collections: Database): Promise<void>
```

### Repository

#### `interface RepositoryItemInterface<Entity, Index, Document>` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/repository/repository.interface.ts)

> `Entity` - тип, описывающий принимаемую сущность
>
> `Index` - тип уникального идентификатора сущности. Например, `string`, если используется `UUID`, или `number`, если в качестве `id` используются числа 
>
> `Document` - тип, описывающий возвращаемую из базы данных сущность

```ts
this.repositoryService: RepositoryItemInterface<Entity, string, Document>;
```

Методы:

* Создание коллекции сущностей
```ts
createCollection(entities: Entity[]): Promise<void>
```

* Получение коллекции сущностей
```ts
readCollection(): Promise<Document[] | null>
```

* Добавление новой сущности в коллекцию
```ts
create(entity: Entity): Promise<Document | null>
```

* Получение сущности из коллекции по уникальному идентификатору
```ts
read(id: Index): Promise<Document | null>
```

* Обновление сущности в коллекции
```ts
update(entity: Entity): Promise<Document | null>
```

* Удаление сущности из коллекции по уникальному идентификатору
```ts
delete(id: Index): Promise<void>
```

* Проверка наличия сущности в коллекции по уникальному идентификатору
```ts
exists(id: Index): Promise<boolean>
```

### Service

#### `interface ServiceInterface<Dto, Index, Document>` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/service/service.interface.ts)

> `Dto` - тип, описывающий принимаемую сущность
>
> `Index` - тип уникального идентификатора сущности. Например, `string`, если используется `UUID`, или `number`, если в качестве `id` используются числа 
>
> `Document` - тип, описывающий возвращаемую из базы данных сущность

```ts
this.customService: ServiceInterface<Dto, Index, Document>;
```

Методы:

* Запись массива сущностей
```ts
set(dtos: Dto[]): Promise<void>
```

* Получение массива сущностей
```ts
get(): Promise<Document[]>
```

* Получение сущности по уникальному идентификатору
```ts
getById(id: Index): Promise<Document | null>
```

* Добавление новой сущности
```ts
create(dto: Dto): Promise<Document | null>
```

* Обновление сущности
```ts
update(id: Index, dto: Dto): Promise<Document | null>
```

* Удаление сущности
```ts
delete(id: Index): Promise<void>
```

* Проверка наличия сущности по уникальному идентификатору
```ts
exists(id: Index): Promise<boolean>
```

### Controller

#### `interface ControllerInterface` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/controller/controller.interface.ts)

```ts
this.customController: ControllerInterface;
```

Методы:

* Добавление нового маршрута
```ts
addRoute(route: RouteInterface): void
```

* Отправка общего ответа на запрос клиента
```ts
send<Rdo>(res: Response, statusCode: number, data: Rdo): void
```

* Отправка ответа, содержащего html-код, на запрос клиента
```ts
sendHtml<T>(res: Response, statusCode: number, data: T): void
```

* Отправка ответа со статусом 200 ('OK') на запрос клиента
```ts
ok<Rdo>(res: Response, data: Rdo): void
```

* Отправка ответа со статусом 201 ('CREATED') на запрос клиента
```ts
created<Rdo>(res: Response, data: Rdo): void
```

* Отправка ответа со статусом 204 ('NO_CONTENT') на запрос клиента
```ts
noContent<T>(res: Response, data: T): void
```

#### `abstract class Controller` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/controller/controller.service.ts)

> Обратите внимание! Если вы получаете данные от клиента, не забудьте подключить `middleware` для обработки `json` - `express.use(express.json)`.

```ts
export default class ItemController extends Controller {
  ...
}

const itemController = new ItemController(logger);
```

Методы:

* Добавление нового маршрута
```ts
export default class ItemController extends Controller {
  ...

  constructor(...) {
    this.addRoute({
      path: '/item',
      method: HttpMethod.Get,
      handler: this.getItem,
      middlewares: [new CheckAuthMiddleware()]
    });

    ...
```

* Отправка общего ответа на запрос клиента
```ts
export default class ItemController extends Controller {
  ...

  public async getItem(req: Request, res: Response) {
    const lastItem = await this.itemService.getLastItem();
    this.send(res, HttpCode.OK, fillDTO(ItemRdo, lastItem));
  }

  ...
```

* Отправка ответа, содержащего html-код, на запрос клиента
```ts
export default class ItemController extends Controller {
  ...

  public async getItem(req: Request, res: Response) {
    const htmlCode = '<html> ... </html>';
    this.send(res, HttpCode.OK, htmlCode);
  }

  ...
```

* Отправка ответа со статусом 200 ('OK') на запрос клиента
```ts
export default class ItemController extends Controller {
  ...

  public async getItem(req: Request, res: Response) {
    const lastItem = await this.itemService.getLastItem();
    this.ok(res, fillDTO(ItemRdo, lastItem));
  }

  ...
```

* Отправка ответа со статусом 201 ('CREATED') на запрос клиента
```ts
export default class ItemController extends Controller {
  ...

  public async createItem(req: Request, res: Response) {
    const {body} = req;

    const createdItem = await this.itemService.create(body);
    this.created(res, fillDTO(ItemRdo, createdItem));
  }

  ...
```

* Отправка ответа со статусом 204 ('NO_CONTENT') на запрос клиента
```ts
export default class ItemController extends Controller {
  ...

  public async deleteItem(req: Request, res: Response) {
    const {params} = req;
    const {id} = params;

    await this.itemService.delete(id);
    this.created(res, id);
  }

  ...
```

### ExceptionFilter

> Обратите внимание! Чтобы исключить потерю контекста, контекст необходимо "привязывать".
>
```ts
this.expressApp = express();
this.exceptionFilter = new ExceptionFilter(this.logger);

this.expressApp.use(
  this.exceptionFilter.catch.bind(this.exceptionFilter)
);
```

> Обратите внимание! Важна очередность объявления фильтров исключений. Последним должен объявляться `BaseExceptionFilter`.
>
```ts
public initExceptionFilters() {
  const httpExceptionFilter = new HttpExceptionFilter(this.logger);
  this.expressApp.use(httpExceptionFilter.catch.bind(httpExceptionFilter));

  const validationExceptionFilter = new ValidationExceptionFilter(this.logger);
  this.expressApp.use(validationExceptionFilter.catch.bind(validationExceptionFilter));

  const baseExceptionFilter = new BaseExceptionFilter(this.logger);
  this.expressApp.use(baseExceptionFilter.catch.bind(baseExceptionFilter));
}
```

#### `interface ExceptionFilterInterface` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/exception/exception-filter/exception-filter.interface.ts)

```ts
this.exceptionFilter: ExceptionFilterInterface;
```

Методы:

* Обработка ошибки и вызов соответствующего обработчика ошибок
```ts
catch(error: Error, req: Request, res: Response, next: NextFunction): void
```

#### `class HttpExceptionFilter` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/exception/exception-filter/http.exception-filter.ts)

```ts
this.httpExceptionFilter: ExceptionFilterInterface = new HttpExceptionFilter(this.logger);
```

Методы:

* Обработка ошибки и вызов соответствующего обработчика ошибок
```ts
this.httpExceptionFilter.catch(httpError, req, res, next)
```

#### `class ValidationExceptionFilter` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/exception/exception-filter/validation.exception-filter.ts)

```ts
this.validationExceptionFilter: ExceptionFilterInterface = new ValidationExceptionFilter(this.logger);
```

Методы:

* Обработка ошибки и вызов соответствующего обработчика ошибок
```ts
this.httpExceptionFilter.catch(validationError, req, res, next)
```

#### `class BaseExceptionFilter` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/exception/exception-filter/base.exception-filter.ts)

```ts
this.baseExceptionFilter: ExceptionFilterInterface = new BaseExceptionFilter(this.logger);
```

Методы:

* Обработка ошибки и вызов соответствующего обработчика ошибок
```ts
this.baseExceptionFilter.catch(error, req, res, next)
```

### Scheduler

#### `interface SchedulerInterface` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/scheduler/scheduler.interface.ts)

```ts
this.schedulerService: SchedulerInterface;
```

Методы:

* Создание задачи
```ts
create(): () => void
```

* Запуск задачи
```ts
start(): () => void
```

#### `class SchedulerService` [[link]](https://github.com/kam4atka/hajs/blob/main/src/packages/common/scheduler/scheduler.service.ts)

> Обратите внимание! Время задачи задаётся в следующем формате:
>
> Секунды: 0-59
> Минуты: 0-59
> Часы: 0-23
> День месяца: 1-31
> Месяцы: 0-11 (Jan-Dec)
> День недели: 0-6 (Sun-Sat)
>
> Например,
> `'00 00 00 * * *'` - каждый день в 00 часов 00 минут
> `'00 10 * * * *'` - каждый час в 10 минут
> и т.д.

```ts
type JobType = {
  jobName: string,
  jobTime: string,
  timezone: string,
  callback: () => void
}

this.schedulerService: SchedulerInterface = new SchedulerService(job: JobType);
```

Методы:

* Создание новой задачи
```ts
this.databaseService.create(): void
```

* Запуск задачи
```ts
this.databaseService.start(): void
```
