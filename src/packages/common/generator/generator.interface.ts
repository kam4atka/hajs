/**
 * Defines general methods for implementing the generator service
 *
 * @paramType Dto - Data transfer object.
 */
export interface GeneratorInterface<Dto> {
  /**
   * Generate a new Dto for project entity.
   */
  getItem(): Dto

  /**
   * Returns a new array of Dto for project entity.
   * Usually use `getItem()` method to create Dto
   * which after add to array.
   *
   * @param count - How many elements of the collection need to be generated
   */
  getCollection(count: number): Dto[]
}
