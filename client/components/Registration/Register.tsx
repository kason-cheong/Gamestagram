// this is register page

import { useAuth0 } from '@auth0/auth0-react'
import { Form, useNavigate } from 'react-router-dom'

export default function Register() {
  const authUser = useAuth0().user
  const navigate = useNavigate()

  return (
    <>
      <h3>Register</h3>
      <section>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
            />
          </div>
          <div>
            <label htmlFor="text">User name</label>
            <input type="text" />
          </div>
        </form>
      </section>
    </>
  )
}
