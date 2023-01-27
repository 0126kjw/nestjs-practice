import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreatePersonInput,
  DeletePersonInput,
  Person,
  UpdatePersonInput,
} from 'src/models/person/schemas/person.schema';
import { PersonService } from './person.service';

@Resolver('Person')
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query(() => [Person])
  async getAllPerson() {
    return await this.personService.findAll();
  }

  @Mutation(() => Person)
  async addPerson(@Args('person') person: CreatePersonInput) {
    return await this.personService.addPerson(person);
  }

  @Mutation(() => Person)
  async deletePerson(@Args('person') person: DeletePersonInput) {
    return await this.personService.deletePerson(person);
  }

  @Mutation(() => Person)
  async updatePerson(
    @Args('id') id: string,
    @Args('person') person: UpdatePersonInput,
  ) {
    return await this.personService.updatePerson(id, person);
  }
}
