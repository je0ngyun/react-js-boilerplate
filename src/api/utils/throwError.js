import { NotFoundError, UnauthorizedError } from '../error'

export const throwError = (error) => {
  const status = error?.response?.status
  switch (status) {
    case 401:
      throw new UnauthorizedError('권한이 없는 사용자입니다.')
    default:
      throw error
  }
}
