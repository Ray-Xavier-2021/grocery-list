import React from 'react'

const Footer = ({ length }) => {
    // Set variable for date
    const today = new Date()
  return (
    <footer className='grocery--list-footer'>
        <p>{ length } List {length === 1 ? 'item' : 'items'}</p>
        <br />
        <small className="grocery--footer-title">Copyright &copy; {today.getFullYear()} Hanley Development. All rights reserved.</small>
    </footer>
  )
}

export default Footer
