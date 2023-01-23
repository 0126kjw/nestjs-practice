import * as mongoose from 'mongoose';

const DATABASE_NAME = 'GraphQL';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(`${process.env.MONGODB_URL}/${DATABASE_NAME}`),
  },
];
