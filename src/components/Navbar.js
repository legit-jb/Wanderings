import React from 'react'

function Navbar () {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div class='container-fluid'>
        <ul class='navbar-nav justify-content-between'>
          <li class='nav-item'>
            <a class='nav-link active' aria-current='page' href='#'>
              <i class='fas fa-bars'></i>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Score
            </a>
          </li>
          <li class='nav-item dropdown'>
            <a
              class='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdownMenuLink'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Tags
            </a>
            <ul class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
              <li>
                <a class='dropdown-item' href='#'>
                  I guess
                </a>
              </li>
              <li>
                <a class='dropdown-item' href='#'>
                  this will
                </a>
              </li>
              <li>
                <a class='dropdown-item' href='#'>
                  map over the tags?
                </a>
              </li>
            </ul>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              <i class='fas fa-plus'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
