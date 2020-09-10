import Response from '../response/model';
import { userField, uniqueUserSerializer } from './serializers';
import { checkUsername, checkPassword } from './check';
import { verifyaccount } from './db';

export function registertUser(req: Record<string, any>): Response {
  const errors = {
    username: 'ok',
    password: 'ok',
    name: 'ok',
    email: 'ok',
  };
  let error = false;

  if (!('username' in req)) {
    errors.username = 'Username is required';
    error = true;
  } else {
    const resp = checkUsername(req.username);
    if (resp.status !== 200) {
      error = true;
      errors.username = resp.body.detail;
    }
  }

  if (!('password' in req)) {
    errors.password = 'Password is required';
    error = true;
  } else {
    const resp = checkPassword(req.password);
    if (resp.status !== 200) {
      error = true;
      errors.password = resp.body.detail;
    }
  }

  if (!('email' in req)) {
    errors.email = 'Email is required';
    error = true;
  }

  if (error) {
    return new Response(500, errors);
  }

  const user = userField(req);
  user.save();
  user.create();

  return new Response(200, uniqueUserSerializer(user));
}

export async function makeLogin(req: Record<string, any>): Promise<any> {
  const errors = {
    username: 'ok',
    password: 'ok',
  };

  let error = false;

  if (!('username' in req)) {
    errors.username = 'Username is required';
    error = true;
  }

  if (!('password' in req)) {
    errors.password = 'Password is required';
    error = true;
  }

  if (error) {
    return new Response(500, errors);
  }

  const data = await verifyaccount(req);

  if (data.length === 0) {
    error = true;
  }

  const myPromisse = () => {
    return new Promise((resolve, reject) => {
      if (error) {
        reject(new Response(500, errors));
      }
      resolve(new Response(200, data[0]));
    });
  };
  return myPromisse();
}
