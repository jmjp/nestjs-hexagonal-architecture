import { CreateUserCommand } from "./create-user.command";

export abstract class CreateUserUseCase {
    abstract execute(data: CreateUserCommand): Promise<User>
}