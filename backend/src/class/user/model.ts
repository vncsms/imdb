import UGCModel from '../base/base';

export default class UserModel extends UGCModel {
  username: string;

  name: string;

  lastname: string;

  email: string;

  password: string;

  constructor() {
    super();
    this.username = '';
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
  }

  save(): void {
    super.save();
  }
}
