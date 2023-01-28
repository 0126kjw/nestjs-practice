import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CommentProviders } from './comments.providers';
import { CommentResolver } from './comments.resolver';
import { CommentsService } from './comments.service';

@Module({
  imports: [DatabaseModule],
  providers: [CommentResolver, CommentsService, ...CommentProviders],
})
export class CommentsModule {}
