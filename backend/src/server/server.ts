import express from 'express';

import * as db from '../database/MongoHelper';

const app = express();
const PORT = 3333;

app.get('/users', () => {
  console.log('teste');
});

app.get('/inventory', (req, res) => {
  db.getDB()
    ?.collection('inventory')
    .find({})
    .toArray((err, documents) => {
      if (err) {
        console.log('Something went wrong ⛔', err);
        return {};
      }
      console.log(documents);
      return res.json(documents);
    });
});

app.listen(PORT, async () => {
  console.log(`Listening to port ${PORT} ✅`);
  try {
    await db.connect();
    console.info(`Connected to Mongo ✅`);
  } catch (err) {
    console.error(`Unable to connect to Mongo ⛔`, err);
  }
});
