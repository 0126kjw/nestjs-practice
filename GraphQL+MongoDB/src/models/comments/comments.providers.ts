import { Connection } from 'mongoose';
import { CommentSchema } from './schemas/comments.schema';

export const CommentProviders = [
  {
    provide: 'COMMENT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Comment', CommentSchema, 'Comment'),
    inject: ['DATABASE_CONNECTION'],
  },
];
