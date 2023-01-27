import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import {
  CreatePersonInput,
  DeletePersonInput,
  Person,
  UpdatePersonInput,
} from './schemas/person.schema';

@Injectable()
export class PersonService {
  constructor(
    @Inject('PERSON_MODEL')
    private personModel: Model<Person>,
  ) {}

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async addPerson(person: CreatePersonInput): Promise<Person> {
    return this.personModel.create(person);
  }

  async deletePerson(person: DeletePersonInput) {
    return this.personModel.findByIdAndRemove(person.id);
  }

  async updatePerson(id: string, person: UpdatePersonInput) {
    return this.personModel.findByIdAndUpdate(id, person, { new: true });
  }
}
