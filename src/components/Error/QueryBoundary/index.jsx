import React, { Suspense } from 'react'
import { useQueryErrorResetBoundary } from 'react-query'
import ErrorBoundary from '@components/Error/ErrorBoundary'
import DefaultErrorFallBack from '@components/Error/DefaultQueryFallBack'
import { UnauthorizedError } from '@api/error'
import PropTypes from 'prop-types'

const defaultIgnoreError = [UnauthorizedError]

const QueryBoundary = ({
  children,
  loadingFallback,
  errorFallback,
  ignoreError = [],
}) => {
  const { reset } = useQueryErrorResetBoundary()
  return (
    <ErrorBoundary
      fallback={errorFallback || <DefaultErrorFallBack />}
      ignoreError={new Set([...defaultIgnoreError, ...ignoreError])}
      resetQuery={reset}
    >
      <Suspense fallback={loadingFallback || <></>}>{children}</Suspense>
    </ErrorBoundary>
  )
}

QueryBoundary.propTypes = {
  children: PropTypes.node,
  loadingFallback: PropTypes.node,
  errorFallback: PropTypes.node,
  ignoreError: PropTypes.array,
}

export default QueryBoundary
