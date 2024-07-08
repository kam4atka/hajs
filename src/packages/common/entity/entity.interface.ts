/**
 * Defines general methods for implementing the entity
 *
 * @paramType Dto - Data transfer object
 * @paramType Entity - Type of entity
 */
export interface EntityInterface<Dto, Entity> {
  /**
   * Fill in the entity fields based on Dto.
   *
   * @param Dto - Data transfer object
   */
  fillEntity(dto?: Dto): void

  /**
   * Return a object by Entity.
   */
  toObject(): Entity
}
