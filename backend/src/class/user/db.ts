import * as db from '../../database/MongoHelper';

export async function getAllUsers(): Promise<any[]> {
  return db
    .getDB()
    ?.collection('users')
    .find({})
    .toArray((err, documents) => {
      if (err) {
        console.log('Something went wrong ⛔', err);
        return [];
      }
      console.log(documents, 1);
      return documents;
    });
}
