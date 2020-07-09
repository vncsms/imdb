import { getInsecureSHA1ofJSON } from './utils';

export default class UGCModel {
  uid: string;
  date: Date;
  modifiedDate: Date;

  constructor() {
    this.uid = getInsecureSHA1ofJSON('default').substring(0,13);
    this.date = new Date();
    this.modifiedDate = new Date();
  }

  save() {
    this.modifiedDate = new Date();
  }
}