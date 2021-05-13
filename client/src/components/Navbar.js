import React from 'react'

function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark custom-nav'>
      <div className='container-fluid'>
        <ul className='navbar-nav nav-fill w-100'>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='#'>
              <i className='fas fa-bars'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Score
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdownMenuLink'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Tags
            </a>
            <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
              <li>
                <a className='dropdown-item' href='#'>
                  I guess
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  this will
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  map over the tags?
                </a>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <i className='fas fa-plus'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
