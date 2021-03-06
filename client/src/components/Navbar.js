import React from 'react'
import TagsDropdown from "../components/TagsDropdown";
import UserContextProvider from "../contexts/UserContext";
import { Link } from 'react-router-dom'



function NavBar (props) {

  return (
    <nav className='navbar navbar-expand-lg navbar-dark custom-nav'>
      <div className='container-fluid'>
        <ul className='navbar-nav nav-fill w-100'>
          <li className='nav-item'>
            <a
              className='nav-link active nav-item dropdown dropdown-toggle'
              aria-current='page'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <i className='fas fa-bars'></i>
            </a>
            <ul className='dropdown-menu bg-secondary p-2' aria-labelledby='dropdownMenuButton1'>
              <li>
                <a className='dropdown-item border-bottom border-dark p-2' href='#'>
                  account
                </a>
              </li>
              <li>
                <a className='dropdown-item border-bottom border-dark p-2' href='#'>
                  stats
                </a>
              </li>
            </ul>
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
            <UserContextProvider>
            <TagsDropdown />
            </UserContextProvider>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/upload'>
              <i className='fas fa-plus'></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
