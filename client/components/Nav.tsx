import { NavLink } from 'react-router-dom'

export default function Nav() {
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
              <NavLink
                to="/profile"
                className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
              >
                Profile
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
