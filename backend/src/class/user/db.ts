import * as db from '../../database/MongoHelper';
import UserModel from './model';
import { uniqueUserSerializer } from './serializers';

export async function getAllUsers(): Promise<unknown> {
  return db.getDB().collection('users').find({}).toArray();
}

export async function insertUser(data: UserModel): Promise<unknown> {
  const user = uniqueUserSerializer(data);
  return db.getDB().collection('users').insert(user);
}

export async function verifyaccount(data: Record<string, any>): Promise<any> {
  return db
    .getDB()
    .collection('users')
    .find({ username: data.username, password: data.password })
    .toArray();
}
