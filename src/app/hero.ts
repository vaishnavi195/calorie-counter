export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {}
}

export class login {
  constructor(public emailid: string, public password: string) {}
}
