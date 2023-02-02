import { Module, forwardRef } from '@nestjs/common';
import { CreateUserService } from './services/create-user/create-user.service';
import { CreateUserUseCase } from './ports/in/create-user.use-case';
import { AdaptersModule } from 'src/adapters/adapters.module';
import { Database } from './database/database';

@Module({
  exports: [CreateUserUseCase, Database],
  imports: [forwardRef(() => AdaptersModule)],
  providers: [
    {
      provide: CreateUserUseCase,
      useClass: CreateUserService
    },
    Database
  ]
})
export class ApplicationModule { }
