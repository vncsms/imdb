import { Router } from 'express';
import usersRouter from '../class/user/router';

const routes = Router();
routes.use('/users', usersRouter);

export default routes;
