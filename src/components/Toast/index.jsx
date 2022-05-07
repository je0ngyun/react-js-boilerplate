import React from 'react'
import { StToast } from './style'
import PropTypes from 'prop-types'

const Toast = React.forwardRef(({ content }, ref) => {
  return <StToast ref={ref}>{content}</StToast>
})

Toast.displayName = 'Toast'
Toast.propTypes = {
  content: PropTypes.string,
}

export default Toast
