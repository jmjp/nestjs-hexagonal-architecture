import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserCommand } from 'src/application/ports/in/create-user.command';
import { CreateUserUseCase } from 'src/application/ports/in/create-user.use-case';

@Controller('create-user')
export class CreateUserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase){}

    @Post()
    create(@Req() request: Request) {
        const command: CreateUserCommand = {
            email: request.body.email,
            username: request.body.username
        }
        return this.createUserUseCase.execute(command);
    }
}
