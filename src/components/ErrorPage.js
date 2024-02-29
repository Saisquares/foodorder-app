import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div>
      <p>Error:   {error.error.message}</p>
      <p>Status:  {error.status} {error.statusText}</p>
      
    </div>
  )
}

export default ErrorPage