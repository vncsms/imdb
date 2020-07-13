import express from 'express';
import { getAllUsers } from './db';

const userRouter = express();

userRouter.get('/', () => {
  getAllUsers().then(() => {});
});

export default userRouter;
