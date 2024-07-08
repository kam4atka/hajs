/**
 * Defines general methods for implementing the service.
 *
 * The service works with the repository and sends all
 * requests to the repository.
 *
 * @paramType Dto - Data transfer object
 * @paramType Index - The type of the identifier of the document stored in the database
 * @paramType Document - Type of document
 */

export interface ServiceInterface<Dto, Index, Document> {
  /**
   * Request to create new collection
   *
   * @param dtos - Array of Dto
   */
  set(dtos: Dto[]): Promise<void>

  /**
   * Request an array of document collection
   */
  get(): Promise<Document[]>

  /**
   * Request an document by unique document id
   *
   * @param id - Unique document id
   */
  getById(id: Index): Promise<Document | null>

  /**
   * Request to create new document
   *
   * @param dto - Data transfer object
   */
  create(dto: Dto): Promise<Document | null>

  /**
   * Request to update an existing document
   *
   * @param id - Unique document id
   * @param dto - Data transfer object
   */
  update(id: Index, dto: Dto): Promise<Document | null>

  /**
   * Request to delete document
   *
   * @param id - Unique document id
   */
  delete(id: Index): Promise<void>

  /**
   * Request to verify of the existence of an document by unique id
   *
   * @param id - Unique document id
   */
  exists(id: Index): Promise<boolean>
}
