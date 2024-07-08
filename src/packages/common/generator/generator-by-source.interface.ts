/**
 * Defines general methods for implementing the generator by source service
 *
 * @paramType SourceCollection - Source collection data. This is usually pre-generated source data
 * @paramType SourceItem - Source item data.
 * @paramType Dto - Data transfer object.
 */
export interface GeneratorBySourceInterface<SourceCollection, SourceItem, Dto> {
  /**
   * Generate a new Dto for project entity.
   *
   * @param source - Source Data
   */
  getItem(source?: SourceItem): Dto

  /**
   * Returns a new array of Dto for project entity.
   * Usually use `getItem()` method to create Dto
   * which after add to array.
   *
   * @param sources - Sources Data
   * @param count - How many elements of the collection need to be generated.
   * Count is variable parameter. When generating based on the prepared `json`,
   * the number is limited by the length of the transmitted array.
   */
  getCollection(sources?: SourceCollection[], count?: number): Dto[]
}
