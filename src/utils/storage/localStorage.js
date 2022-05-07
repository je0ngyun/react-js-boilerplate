import { localStorage } from './core'

export const setValueToLocalStorage = (key, data) => {
  if (!localStorage || localStorage === {}) {
    return
  }
  localStorage.setItem(key, JSON.stringify(data))
}

export const getValueFromLocalStorage = (key) => {
  const raw = localStorage.getItem(key)
  if (!raw) {
    return
  }
  return JSON.parse(raw)
}
