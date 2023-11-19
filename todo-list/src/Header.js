import React from 'react'

const Header = ({title}) => {
  return (
    <div>{title}</div>
  )
}
Header.defaultProps={
    title:"todo"
}
export default Header