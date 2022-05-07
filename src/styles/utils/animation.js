import { keyframes } from 'styled-components'

export const slideUp = (y) => keyframes`
  from {
    transform: translateY(${y});
  }
  to {
    transform: translateY(0px);
  }
`

export const slideDown = (y, start = '0px') => keyframes`
    0% {
        transform : translateY(${start}) 
    }
    100% {
        transform : translateY(${y})
    }
`

export const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`
