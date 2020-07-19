import router from 'express';
import { getAllUsers } from './db';

const userRouter = router();

userRouter.get('/', (req, response) => {
  getAllUsers().then(res => {
    response.send(res);
  });
});

userRouter.post('/', (req, res) => {
  console.log(req.body);
  // res.send(user_id + ' ' + token + ' ' + geo);
  res.send('POST request to the homepage');
});

export default userRouter;
