import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PersonModule } from '../person/person.module';
import { CommentProviders } from './comments.providers';
import { CommentResolver } from './comments.resolver';
import { CommentsService } from './comments.service';

@Module({
  imports: [DatabaseModule, PersonModule],
  providers: [CommentResolver, CommentsService, ...CommentProviders],
})
export class CommentsModule {}
