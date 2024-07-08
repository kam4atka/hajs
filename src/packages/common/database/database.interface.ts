/**
 * Defines general methods for implementing the database service
 *
 * @paramType Database - Types of collections
 *
 * @example
 * Type of database:
 * ```ts
 * type Database = {
 *  points?: Map<string, Bouquet>,
 *  hotels?: Map<string, Cart>
 * }
 * ```
 */
export interface DatabaseInterface<Database> {
  /**
   * Read all collections from database
   *
   * @example
   * Output data:
   * ```ts
   * {
   *  points: Map<string, Bouquet>,
   *  hotels: Map<string, Cart>
   * }
   * ```
   */
  read(): Promise<Database | null>

  /**
   * Write collections into database
   *
   * @param collections - object as Database
   *
   * @example
   * Input data:
   * ```ts
   * collections: Database = {
   *  points: Map<string, Bouquet>,
   *  hotels: Map<string, Cart>
   * }
   * ```
   */
  write(collections: Database): Promise<void>
}
