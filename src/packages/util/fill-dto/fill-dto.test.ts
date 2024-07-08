import {describe, test, expect} from 'vitest';
import {fillDTO} from './fill-dto.js';
import {
  DestinationRDO,
  OffersRDO,
  PointRDO
} from './rdo-to-test.js';

describe('Function "fillDTO()" must return the correct object if the function receives', () => {
  test(
    'Function "fillDTO()" should return the correct destination object',
    () => {
      const inputDestination = {
        id: 'uuid',
        description: 'description',
        name: 'Name',
        pictures: [{
          src: 'image link',
          description: 'image description'
        }]
      };

      expect(fillDTO(
        DestinationRDO,
        inputDestination
      ))
        .toEqual(inputDestination);

      expect(fillDTO(
        DestinationRDO,
        {
          ...inputDestination,
          name: 100
        }
      ))
        .not
        .toEqual(inputDestination);
    });

  test(
    'Function "fillDTO()" should return the correct list of offers',
    () => {
      const offerType = 'train';

      const offer = {
        _type: offerType,
        id: 'uuid',
        title: 'offer title',
        price: 'offer price'
      };

      const validInputOffers = {
        type: offerType,
        offers: [
          {
            id: offer.id,
            title: offer.title,
            price: offer.price
          }
        ]
      };

      expect(fillDTO(
        OffersRDO,
        validInputOffers
      ))
        .toEqual(validInputOffers);

      expect(fillDTO(
        OffersRDO,
        {
          ...validInputOffers,
          type: 'bus'
        }
      ))
        .not
        .toEqual(validInputOffers);
    });

  test(
    'Function "fillDTO()" should return the correct point object',
    () => {
      const inputPoint = {
        id: 'uuid',
        'base_price': 100,
        'date_from': '2023-02-05T12:00:00',
        'date_to': '2023-02-06T12:00:00',
        destination: 'point destination',
        offers: ['point offer'],
        type: 'train'
      };

      expect(fillDTO(
        PointRDO,
        inputPoint
      ))
        .toEqual(inputPoint);

      expect(fillDTO(
        PointRDO,
        {
          ...inputPoint,
          type: 'bus'
        }
      ))
        .not
        .toEqual(inputPoint);
    });
});
