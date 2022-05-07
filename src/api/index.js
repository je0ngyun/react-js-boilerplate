import { userDataRemote } from './remote/user'

const provideAPIService = () => {
  const userService = userDataRemote()
  return {
    userService,
  }
}

export const api = provideAPIService()
