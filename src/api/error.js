export class NotFoundError extends Error {
  constructor(message) {
    super(message)
    this.code = 404
    this.name = 'Not Found Error'
  }
}

export class UnauthorizedError extends Error {
  constructor(message) {
    super(message)
    this.code = 401
    this.name = 'Unauthorized Error'
  }
}
