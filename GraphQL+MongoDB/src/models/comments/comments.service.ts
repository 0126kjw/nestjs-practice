import { Inject, Injectable } from '@nestjs/common';
import { Error, Model } from 'mongoose';
import { Comment, CreateCommentInput } from './schemas/comments.schema';

@Injectable()
export class CommentsService {
  constructor(
    @Inject('COMMENT_MODEL')
    private commentModel: Model<Comment>,
  ) {}

  async addComment(comment: CreateCommentInput): Promise<Comment> {
    return this.commentModel.create(comment);
  }
}
