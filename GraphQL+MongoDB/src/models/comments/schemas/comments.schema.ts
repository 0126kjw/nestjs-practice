import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const CommentSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: String,
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
  name: string;

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
  name: string;

  @Field()
  content: string;

  @Field()
  userId: string;
}
