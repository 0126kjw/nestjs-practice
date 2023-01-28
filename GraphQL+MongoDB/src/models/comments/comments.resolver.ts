import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment, CreateCommentInput } from './schemas/comments.schema';

@Resolver('Comment')
export class CommentResolver {
  constructor(private commentService: CommentsService) {}

  @Mutation(() => Comment)
  async addComment(@Args('comment') comment: CreateCommentInput) {
    return await this.commentService.addComment(comment);
  }
}
