import React from 'react'
import PropTypes from 'prop-types'

const DefaultErrorFallBack = ({ resetBoundary }) => {
  return (
    <div>
      <div>기본 쿼리 FallBack</div>
      <button onClick={resetBoundary}>재시도</button>
    </div>
  )
}

DefaultErrorFallBack.propTypes = {
  resetBoundary: PropTypes.func,
}

export default DefaultErrorFallBack
