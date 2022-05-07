import styled from 'styled-components'
import { slideUp, slideDown, fadeIn, fadeOut } from '@styles/utils/animation'

export const StSidebarItem = styled.div`
  button {
    border: none;
    background-color: transparent;
    padding: 0;
  }
  div {
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-name: ${slideDown('0px', '-30%')};
  }
`
