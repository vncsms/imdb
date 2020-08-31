export default class Response {
  status: number;

  body: Record<string, string>;

  constructor(status: number, body: Record<string, string>) {
    this.status = status;
    this.body = body;
  }
}
