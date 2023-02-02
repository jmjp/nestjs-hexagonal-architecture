import { Injectable } from "@nestjs/common";
import { Database } from "src/application/database/database";
import { UserPersistencePort } from "src/application/ports/out/user-persistence.port";
import { User } from "src/domain/entities/user";

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