import React from 'react'

// Header function w/ deconstructed prop
function Header({ title }) {
  return (
    <header className='grocery--list-header'>
        <h1 className="grocery--list-title">{ title }</h1>        
    </header>
  )
}

// This is a default prop if none was provided
Header.defaultProps = {
    title: 'Groceries List'
}
export default Header