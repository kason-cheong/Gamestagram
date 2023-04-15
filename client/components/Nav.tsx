import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from './subcomponents/Authenticated'

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { user, loginWithRedirect, logout } = useAuth0()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleLogIn = () => {
    console.log('log in function ran')

    loginWithRedirect({
      redirectUri: 'http://localhost:3000',
    })
  }

  const handleSignUp = () => {
    console.log('sign up function ran')
    loginWithRedirect({
      redirectUri: 'http://localhost:3000/register',
    })
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
                <button className='mr-5' onClick={handleLogIn}>Sign in</button>
                <button className='ml-5 mr-2swws' onClick={handleSignUp}>Sign up</button>
              </div>
            </IfNotAuthenticated>

            <IfAuthenticated>
              <div className="relative">
                <button onClick={toggleDropdown}>
                  {user?.name}
                  <svg
                    className="w-4 h-4 inline-block ml-1 mb-1 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  ></svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
                    <NavLink
                      to="/my-events"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      My Events
                    </NavLink>
                    <button
                      onClick={handleLogOut}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </IfAuthenticated>
          </div>
        </div>
      </nav>
    </>
  )
}
