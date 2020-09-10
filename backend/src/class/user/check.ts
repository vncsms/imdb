import Response from '../response/model';

export function checkUsername(username: string): Response {
  if (username.length < 6) {
    return new Response(400, { detail: 'Field to short' });
  }

  if (username.length > 10) {
    return new Response(400, { detail: 'Field to long' });
  }

  return new Response(200, { detail: 'Sucess' });
}

export function checkPassword(password: string): Response {
  if (password.length < 8) {
    return new Response(400, { detail: 'Field to short' });
  }

  if (password.length > 30) {
    return new Response(400, { detail: 'Field to long' });
  }

  return new Response(200, { detail: 'Sucess' });
}
