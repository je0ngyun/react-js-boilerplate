import {
  setValueToLocalStorage,
  getValueFromLocalStorage,
} from './localStorage'

export const setThemeToStorage = (theme) => {
  setValueToLocalStorage('theme', theme)
}

export const getThemeFromStorage = () => {
  return getValueFromLocalStorage('theme')
}

export const setAccessTokenToStorage = (token) => {
  setValueToLocalStorage('token', token)
}

export const getAccessTokenFromStorage = () => {
  return getValueFromLocalStorage('token')
}
