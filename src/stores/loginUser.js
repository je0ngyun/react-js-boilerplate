import { atom } from 'recoil'

export const loginUserState = atom({
  key: 'loginUserState',
  default: {
    id: -1,
    accessToken: '',
    username: '',
    userID: '',
    userEmail: '',
  },
})

export const authState = atom({
  key: 'authState',
  default: false,
})
