import { Router } from 'express';
import { getAllUsers } from './db';
import { registertUser, makeLogin } from './views';

const userRouter = Router();

userRouter.get('/', (req, response) => {
  getAllUsers().then(res => {
    response.send(res);
  });
});

userRouter.post('/', (req, res) => {
  const resp = registertUser(req.body);
  res.status(resp.status).send(resp.body);
});

userRouter.post('/login', (req, res) => {
  makeLogin(req.body).then(data => {
    res.status(data.status).send(data.body);
  });
});

export default userRouter;
