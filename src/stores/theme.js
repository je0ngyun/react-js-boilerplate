import { atom } from 'recoil'

export const ThemeFlag = {
  light: 'light',
  dark: 'dark',
}

export const themeState = atom({
  key: 'THEME_STATE',
  default: ThemeFlag.light,
})
