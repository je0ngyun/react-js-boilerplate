import React, { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'

const initialState = { hasError: false, error: null }

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error }
  }

  resetBoundary = () => {
    this.props.resetQuery?.()
    this.setState(initialState)
  }

  componentDidCatch(error, errorInfo) {}

  isIgnoreError() {
    return this.props.ignoreError?.has(this.state.error?.constructor)
  }

  render() {
    if (this.state.hasError && !this.isIgnoreError()) {
      return cloneElement(this.props.fallback, {
        resetBoundary: this.resetBoundary,
        error: this.state.error,
      })
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  resetQuery: PropTypes.func,
  ignoreError: PropTypes.instanceOf(Set),
  fallback: PropTypes.node,
  children: PropTypes.node,
}
export default ErrorBoundary
