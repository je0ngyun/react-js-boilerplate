import { authState, loginUserState } from '@stores/loginUser'
import { useRecoilState } from 'recoil'
import { setAccessTokenToStorage } from '@utils/storage'

export function useLoginUser() {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState)
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authState)

  const saveLoginUser = (userInfo) => {
    setLoginUser(userInfo)
    setIsAuthenticated(true)
    setAccessTokenToStorage(userInfo.token)
  }

  return {
    ...loginUser,
    isAuthenticated,
    saveLoginUser,
  }
}
