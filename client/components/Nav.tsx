import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from './subcomponents/Authenticated'

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { loginWithRedirect, logout } = useAuth0()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleLogIn = () => {
    console.log('log in function ran')
    loginWithRedirect()
  }

  const handleLogOut = () => {
    console.log('log out function ran')
    logout()
  }

  return (
    <>
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

            <IfNotAuthenticated>
              <div className="hidden md:block">
                <button onClick={handleLogIn}>Sign in</button>
              </div>
            </IfNotAuthenticated>

            <IfAuthenticated>
              <div className="hidden md:block">
                <button onClick={handleLogOut}>Sign out</button>
              </div>
            </IfAuthenticated>

            {/* <div className="hidden md:block">
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
                      <IfAuthenticated>
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          // onClick={() => logout({ returnTo: window.location.origin })}
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </IfAuthenticated>
                    </div>
                  )}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  )
}
