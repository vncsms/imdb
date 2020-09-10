import UGCModel from '../base/base';
import { insertUser } from './db';
import { getInsecureSHA1ofJSON } from '../base/utils';

export default class UserModel extends UGCModel {
  username: string;

  email: string;

  password: string;

  token: string;

  constructor() {
    super();
    this.username = '';
    this.email = '';
    this.password = '';
    this.token = '';
  }

  save(): void {
    super.save();
  }

  create(): void {
    this.save();
    this.token = getInsecureSHA1ofJSON('default');
    insertUser(this);
  }
}
