/**
 * Defines general methods for implementing the repository service.
 *
 * @paramType Entity - Type of entity
 * @paramType Index - The type of the identifier of the document stored in the database
 * @paramType Document - Type of document
 */

export interface RepositoryInterface<Entity, Index, Document> {
  /**
   * Create new collection
   *
   * @param entities - Array of entities
   */
  createCollection(entities: Entity[]): Promise<void>

  /**
   * Get collection
   */
  readCollection(): Promise<Document[] | null>

  /**
   * Create a new document in collection
   *
   * @param entity - Entity
   */
  create(entity: Entity): Promise<Document | null>

  /**
   * Get an document by unique id
   *
   * @param id - Unique document id
   */
  read(id: Index): Promise<Document | null>

  /**
   * Update an document by unique id
   *
   * @param entity - Entity
   */
  update(entity: Entity): Promise<Document | null>

  /**
   * Delete an document by unique id
   *
   * @param id - Unique document id
   */
  delete(id: Index): Promise<void>

  /**
   * Check for existence an document by unique id
   *
   * @param id - Unique document id
   */
  exists(id: Index): Promise<boolean>
}
