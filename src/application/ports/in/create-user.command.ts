export class CreateUserCommand {
    constructor(
        readonly username: string,
        readonly email: string
    ) { }
}