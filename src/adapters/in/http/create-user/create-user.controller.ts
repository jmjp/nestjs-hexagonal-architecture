import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreateUserRequest } from 'src/application/dtos/create-user-request/create-user-request';
import { CreateUserCommand } from 'src/application/ports/in/create-user.command';
import { CreateUserUseCase } from 'src/application/ports/in/create-user.use-case';

@Controller('create-user')
export class CreateUserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase){}

    @Post()
    create(@Body() request: CreateUserRequest) {
        const command: CreateUserCommand = {
            email: request.email,
            username: request.username
        }
        return this.createUserUseCase.execute(command);
    }
}
