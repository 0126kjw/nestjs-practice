import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Error } from 'mongoose';
import { PersonService } from '../person/person.service';
import { CommentsService } from './comments.service';
import { Comment, CreateCommentInput } from './schemas/comments.schema';

@Resolver('Comment')
export class CommentResolver {
  constructor(
    private commentService: CommentsService,
    private personService: PersonService,
  ) {}

  @Mutation(() => Comment)
  async addComment(@Args('comment') comment: CreateCommentInput) {
    const validUserId = await this.personService.findUserId(comment.userId);
    if (!validUserId) {
      return Error.ValidationError.messages();
    }
    return await this.commentService.addComment(comment);
  }
}
