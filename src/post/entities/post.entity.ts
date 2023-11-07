import { Inheritance } from '../../common/entity/inheritance.entity';
import { IsNotEmpty, Min, IsString } from 'class-validator';
export class Post extends Inheritance {
  @IsNotEmpty()
  title: string;
  @Min(5)
  name: string;
  @IsNotEmpty()
  logo: string;
  @Min(10)
  content: string;
}
