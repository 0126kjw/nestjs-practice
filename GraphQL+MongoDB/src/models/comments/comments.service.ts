import { Inject, Injectable } from '@nestjs/common';
import { Error, Model } from 'mongoose';
import {
  Comment,
  CreateCommentInput,
  DeleteCommentInput,
  FindCommentInput,
} from './schemas/comments.schema';

@Injectable()
export class CommentsService {
  constructor(
    @Inject('COMMENT_MODEL')
    private commentModel: Model<Comment>,
  ) {}

  async addComment(comment: CreateCommentInput): Promise<Comment> {
    return this.commentModel.create(comment);
  }

  async findComment(comment: FindCommentInput): Promise<Comment> {
    return this.commentModel.findById(comment.id);
  }

  async deleteComment(comment: DeleteCommentInput) {
    return this.commentModel.findByIdAndRemove(comment.id);
  }
}
