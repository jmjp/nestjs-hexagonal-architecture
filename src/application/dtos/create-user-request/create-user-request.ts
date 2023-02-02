import { IsEmail, IsNotEmpty, isNotEmpty } from "class-validator";

export class CreateUserRequest {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
