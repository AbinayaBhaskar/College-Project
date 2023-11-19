import React from 'react'

const Footer = ({length}) => {
  return (
    <div>{length} task to complete {length===1?"task":"tasks"}</div>
  )
}

export default Footer