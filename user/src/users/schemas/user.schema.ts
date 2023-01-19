import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class User {
  @Prop({
    default: new Date(),
    type: mongoose.Schema.Types.Date,
  })
  createdAt: Date;

  @Prop({
    default: new Date(),
    type: mongoose.Schema.Types.Date,
  })
  updatedAt: Date;

  @Prop()
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  signupVerifyToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
