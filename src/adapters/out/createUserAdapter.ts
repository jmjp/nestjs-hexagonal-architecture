import { Injectable } from "@nestjs/common";
import { Database } from "src/application/database/database";
import { CreateUserCommand } from "src/application/ports/in/create-user.command";
import { UserPersistencePort } from "src/application/ports/out/user-persistence.port";

@Injectable()
export class CreateUserAdapter implements UserPersistencePort {
    constructor(private readonly database: Database) { }
    async store(data: User): Promise<User> {
        return this.database.user.create({
            data: {
                email: data.email,
                username: data.username,
            }
        })
    }

}