import * as commons from './commons'

import { lightColors } from './lightColor'
import { darkColors } from './darkColor'

export const lightTheme = {
  colors: lightColors,
  ...commons,
}

export const darkTheme = {
  colors: darkColors,
  ...commons,
}
