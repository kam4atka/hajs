import {IsNotEmpty, IsString} from 'class-validator';

export default class EntityDtoForTest {
  @IsNotEmpty()
  @IsString()
  public title!: string;

  @IsNotEmpty()
  @IsString()
  public description!: string;
}
