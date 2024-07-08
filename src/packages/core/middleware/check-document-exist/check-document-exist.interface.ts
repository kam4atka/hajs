/**
 * Defines general methods for implementing the Service for CheckDocumentMiddleware
 */
export interface CheckDocumentExistInterface {
  /**
   * Check the existence of the document
   *
   * @param documentId - Unique document id
   */
  exists(documentId: string): Promise<boolean>;
}
