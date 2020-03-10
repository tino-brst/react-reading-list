export class Action {
  type;
  payload;

  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
  }
}