import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { AdaptersModule } from './adapters/adapters.module';
import { CreateUserController } from './adapters/in/http/create-user/create-user.controller';

@Module({
  imports: [DomainModule, ApplicationModule, AdaptersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
