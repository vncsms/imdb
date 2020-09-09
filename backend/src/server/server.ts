import express from 'express';
import cors from 'cors';
import * as db from '../database/MongoHelper';
import routes from './routes';
import { SERVER_PORT } from '../imdb/settings';

const app = express();
const PORT = SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, async () => {
  console.log(`Listening to port ${PORT} ✅`);
  try {
    await db.connect();
    console.info(`Connected to Mongo ✅`);
  } catch (err) {
    console.error(`Unable to connect to Mongo ⛔`, err);
  }
});
