import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EmailService } from './email/email.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
