import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-10-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-gray-800">
              <img
                className="rounded-full w-20 h-20"
                src="./pics/temporary-logo.png"
                alt="website logo"
              ></img>
            </NavLink>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/events"
                  className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-xl font-medium"
                >
                  Events
                </NavLink>
                <NavLink
                  to="/boardgames"
                  className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-xl font-medium "
                >
                  Boardgames
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <NavLink
                  to="/profile"
                  className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium cursor-pointer"
                  onClick={toggleDropdown}
                >
                  Profile
                </NavLink>
                {dropdownOpen && (
                  <div className="absolute top-10 right-0 z-50 w-48 py-2 mt-1 bg-white rounded-md shadow-lg">
                    <NavLink
                      to="/my-events"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={toggleDropdown}
                    >
                      My Events
                    </NavLink>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      // onClick={() => logout({ returnTo: window.location.origin })}
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
