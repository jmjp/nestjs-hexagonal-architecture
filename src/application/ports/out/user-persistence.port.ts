import { User } from "src/domain/entities/user";

export abstract class UserPersistencePort {
    abstract store(data: User): Promise<User>
}