export class ClientError {
  constructor(public error: any) {}
}

export class ValidationError {
  constructor(public errors: string[]) {}
}
