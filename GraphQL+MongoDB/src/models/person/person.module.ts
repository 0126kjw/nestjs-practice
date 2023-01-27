import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PersonProviders } from './person.providers';
import { PersonResolver } from './person.resolver';
import { PersonService } from './person.service';

@Module({
  imports: [DatabaseModule],
  providers: [PersonResolver, PersonService, ...PersonProviders],
})
export class PersonModule {}
