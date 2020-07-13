import { MongoClient, Db } from 'mongodb';
import { MONGO_PORT, MONGO_DB_NAME } from '../imdb/settings';

const dbName = MONGO_DB_NAME;
const uri = `mongodb://localhost:${MONGO_PORT}`;
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db: Db | null = null;
let dbSession: MongoClient | null = null;

export const connect = async (): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    if (db) {
      resolve(db);
    } else {
      MongoClient.connect(uri, mongoOptions, (err, client: MongoClient) => {
        if (err) {
          reject(err);
        } else {
          resolve(client);
          dbSession = client;
          db = client.db(dbName);
        }
      });
    }
  });
};

export const disconnect = (): void => {
  if (dbSession) {
    dbSession.close();
  }
};

export const getDB = (): Db | null => {
  return db;
};
