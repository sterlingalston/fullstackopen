import React from 'react'

const Notification = ({ message, theclass }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={theclass}>
      {message}
    </div>
  )
}

export default Notification