import 'reflect-metadata';
import {describe, test, expect, beforeEach} from 'vitest';
import {DatabaseService} from './database.service.js';

type Document = {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
  count: number;
};

const document = {
  id: 'uuid-id',
  title: 'Document\'s title',
  description: 'Document\'s description',
  isFavorite: true,
  count: 5
};

type Database = {
  entities: Map<string, Document>
};

const nameCollection = 'entities';

describe('The database must write and read the data correctly', () => {
  let databaseService: DatabaseService<Database>;

  beforeEach(() => {
    databaseService = new DatabaseService<Database>();
  });

  test(
    'The method "read()" should return "null" when no collection is initialized',
    async () => {
      expect(await databaseService.read()).toBeNull();
    }
  );

  test(
    'The method "read()" should return collections as object with key "entities" and value is Map object when collection is initialized',
    async () => {
      const createdCollection = new Map<string, Document>();

      databaseService.write({
        [nameCollection]: createdCollection
      });

      const collections = await databaseService.read();

      expect(collections).not.toBeNull();
      expect(collections).toBeTypeOf('object');
      expect(collections).toStrictEqual({
        [nameCollection]: new Map<string, Document>()
      });
    }
  );

  test(
    'The method "read()" should return collection as Map object with size 0 when collection is initialized and this collection is empty.',
    async () => {
      const createdCollection = new Map<string, Document>();

      databaseService.write({
        [nameCollection]: createdCollection
      });

      const collections = await databaseService.read();

      const collection = (collections)
        ? collections[nameCollection]
        : null;

      expect(collection).not.toBeNull();
      expect(collection).toBeTypeOf('object');
      expect(collection).toEqual(new Map());
      expect(collection?.size).toBe(0);
    }
  );

  test(
    'The method "read()" should return document when collection is initialized and document writted in collection.',
    async () => {
      const createdCollection = new Map<string, Document>();
      createdCollection.set(document.id, document);

      databaseService.write({
        [nameCollection]: createdCollection
      });

      const collections = await databaseService.read();

      const collection = (collections)
        ? collections[nameCollection]
        : null;

      expect(collection).not.toBeNull();
      expect(collection?.get(document.id)).toStrictEqual(document);
      expect(collection?.size).toBe(1);
    }
  );
});
