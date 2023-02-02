import { CreateUserCommand } from "../in/create-user.command";

export abstract class UserPersistencePort {
    abstract store(data: User): Promise<User>
}