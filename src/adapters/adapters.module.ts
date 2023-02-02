import { Module, forwardRef } from '@nestjs/common';
import { CreateUserController } from './in/http/create-user/create-user.controller';
import { ApplicationModule } from 'src/application/application.module';
import { UserPersistencePort } from 'src/application/ports/out/user-persistence.port';
import { CreateUserAdapter } from './out/createUserAdapter';

@Module({
    exports: [UserPersistencePort],
    imports: [forwardRef(() => ApplicationModule)],
    providers: [
        {
            provide: UserPersistencePort,
            useClass: CreateUserAdapter
        }
    ],
    controllers: [CreateUserController]
})
export class AdaptersModule {}
