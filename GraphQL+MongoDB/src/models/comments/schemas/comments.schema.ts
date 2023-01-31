import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const CommentSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    author: String,
    content: String,
    userId: String,
    createAt: Date,
    updatedAt: Date,
  },
  { timestamps: true },
);

@ObjectType()
export class Comment extends Document {
  @Field()
  _id: string;

  @Field()
  author: string;

  @Field()
  content: string;

  @Field()
  userId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class CreateCommentInput {
  @Field()
  author: string;

  @Field()
  content: string;

  @Field()
  userId: string;
}

@ObjectType()
export class DeleteCommentInput {
  @Field()
  id: string;
  author: string;
}

@ObjectType()
export class FindCommentInput {
  @Field()
  id: string;
}
