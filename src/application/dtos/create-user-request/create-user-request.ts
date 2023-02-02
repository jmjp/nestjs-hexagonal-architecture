import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserRequest {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
