import 'reflect-metadata';
import {Expose, Type} from 'class-transformer';

class Picture {
  @Expose()
  public src!: string;

  @Expose()
  public description!: string;
}

export class DestinationRDO {
  @Expose()
  public id!: string;

  @Expose()
  public description!: string;

  @Expose()
  public name!: string;

  @Expose()
  @Type(() => Picture)
  public pictures!: Picture[];
}

class OfferResponse {
  @Expose()
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public price!: number;
}

export class OffersRDO {
  @Expose()
  public type!: string;

  @Expose()
  @Type(() => OfferResponse)
  public offers!: OfferResponse[];
}

export class PointRDO {
  @Expose()
  public id!: string;

  @Expose()
  public 'base_price'!: number;

  @Expose()
  public 'date_from'!: string;

  @Expose()
  public 'date_to'!: string;

  @Expose()
  public destination!: string;

  @Expose()
  public offers!: string[];

  @Expose()
  public type!: string;
}
