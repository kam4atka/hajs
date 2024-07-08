import 'reflect-metadata';
import {injectable} from 'inversify';
import {Low, Memory} from 'lowdb';
import {DatabaseInterface} from './database.interface.js';

/**
 * Read and write data to the database
 *
 * @paramType Database - Types of collections
 */
@injectable()
export class DatabaseService<Database> implements DatabaseInterface<Database> {
  private database!: Low<Database>;

  constructor() {
    this.database = new Low(new Memory<Database>());
  }

  /**
   * Read all collections from database
   */
  public async read() {
    await this.database.read();
    return this.database.data;
  }

  /**
   * Write collections into database
   *
   * @param collections - object as Database
   */
  public async write(collections: Database) {
    this.database.data = collections;
    await this.database.write();
  }
}
