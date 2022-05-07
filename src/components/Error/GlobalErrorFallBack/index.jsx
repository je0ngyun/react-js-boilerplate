import React from 'react'
import { NotFoundError, UnauthorizedError } from '@api/error'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const GlobalErrorFallBack = ({ error }) => {
  let render = null
  ;(function () {
    switch (error?.constructor) {
      case UnauthorizedError:
        render = <Navigate to="/login?expire" />
        break
      case NotFoundError:
        render = <div>404 Error</div>
        break
    }
  })()
  return <>{render}</>
}

GlobalErrorFallBack.propTypes = {
  error: PropTypes.instanceOf(Error),
}

export default GlobalErrorFallBack
