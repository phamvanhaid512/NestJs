import { Inheritance } from 'src/common/dto/inheritance.dto';
import { IsEmail, IsNotEmpty, IsString, Min ,Max} from 'class-validator';
export class CreateUserDto extends Inheritance {
  @IsNotEmpty()
  public name: string;
  @IsNotEmpty()

  public password: string;
  @IsString()
  public address: string;
}
