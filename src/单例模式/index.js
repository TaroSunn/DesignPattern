export class Login {
  constructor() {
    if(!Login.instance) {
      Login.instance = this
    }
    return Login.instance
  }
}
