import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    const [hamburgerMenu, setHamburgerMenu]= useState(false)

    const toggleMenu = () => {
    setHamburgerMenu(!hamburgerMenu)
  }

  return (
    <nav className='mx-auto flex h-20 text-black justify-between bg-lime-400'>
      <div className='flex flex-row w-2/3'>
      <div className='mx-auto w-1/5 md:py-8'>
        <h2>Makueni Valley <br/> Farm</h2>
      </div>

      <div className='hidden md:flex mx-auto w-3/5 space-x-24 justify-center py-8'>
        <h2> About</h2>
        <h2> Services</h2>
        <h2> Gallery</h2>
      </div>

      <div className='md:hidden w-1/5'>
        <button className="text-red-600 bg-red hover:text-black focus:outline-none"
          onClick={toggleMenu}
          >
             <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                { hamburgerMenu ? (
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
                )}
              </svg>
        </button>

      </div>
      </div>
    <div className='w-1/3'>
      {
        hamburgerMenu && (
          <div className='md:hidden'>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-black hover:text-lime-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-black hover:text-lime-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="text-black hover:text-lime-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Gallery
              </Link>
            </div>
            </div>)}
    </div>

    </nav>
  )
}

export default NavBar