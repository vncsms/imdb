import { MongoClient, ObjectID, Db } from 'mongodb';

const dbName = 'test';
const uri = 'mongodb://localhost:27017';
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

let db: (Db | null) = null;
let dbSession: (MongoClient | null) = null;

export const connect = async (): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    if (db) {
      resolve(db);
    }
    else {
      MongoClient.connect(
        uri, 
        mongoOptions,
        (err, client: MongoClient) => {
          if (err) {
            reject(err);
          }
          else {
            resolve(client);
            dbSession = client;
            db = client.db(dbName);
          }
        }
      );
    }
  });
};

export const disconnect = () => {
  if (dbSession) {
    dbSession.close();
  }
}

export const getDB = (): (Db|null) => {
  return db;
}
