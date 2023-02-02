import { Injectable } from '@nestjs/common';
import { CreateUserCommand } from 'src/application/ports/in/create-user.command';
import { CreateUserUseCase } from 'src/application/ports/in/create-user.use-case';
import { UserPersistencePort } from 'src/application/ports/out/user-persistence.port';
import { User } from 'src/domain/entities/user';

@Injectable()
export class CreateUserService implements CreateUserUseCase {
    constructor(private readonly userOut: UserPersistencePort) { }
    execute(data: CreateUserCommand): Promise<User> {
        const user: User = {
            email: data.email,
            username: data.username,
            createdAt: new Date()
        }
        return this.userOut.store(user);
    }
}
