import {plainToInstance, ClassConstructor} from 'class-transformer';

/**
 * Converts plain (literal) object to class (constructor) object. Also works with arrays.
 *
 * @paramType T - The class that the object will be transformed into
 * @paramType V - Object to transform
 *
 * @example
 * ```ts
 * fillDTO(DTO, plainObject);
 * ```
 *
 * @returns The resulting class object obtained after converting an plain (literal) object to a class object
 *
 */
export function fillDTO<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(
    someDto,
    plainObject,
    {
      excludeExtraneousValues: true
    }
  );
}
