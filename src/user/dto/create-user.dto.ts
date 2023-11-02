import { Inheritance } from "src/common/dto/inheritance.dto";
export class CreateUserDto extends Inheritance {
    email: string;
    password: string;
}
