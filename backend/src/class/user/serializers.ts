import UserModel from './model';

export function uniqueUserSerializer(user: UserModel): Record<string, any> {
  const serializer = {
    username: user.username,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
  };

  return serializer;
}

export function userField(user: Record<string, any>): UserModel {
  const userModel = new UserModel();

  userModel.username = user.username;
  userModel.name = user.name;
  userModel.lastname = user.lastname;
  userModel.email = user.email;
  userModel.password = user.password;

  return userModel;
}
