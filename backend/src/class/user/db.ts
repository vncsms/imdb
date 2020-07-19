import * as db from '../../database/MongoHelper';

export async function getAllUsers(): Promise<unknown> {
  return db.getDB().collection('users').find({}).toArray();
}
