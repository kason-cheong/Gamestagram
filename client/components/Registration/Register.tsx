// this is register page

import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

import {
  addUser,
  getUserByAuth0Id,
  editUserById,
  getUserById,
} from '../../apis/apiClientUsers'
import { useUserStore } from '../../store/useUserStore'

export default function Register() {
  const currentUser = useUserStore((state) => state.currentUser)
  const setUser = useUserStore((state) => state.setUser)

  const { user, isLoading } = useAuth0()
  const [showRegister, setshowRegister] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [photoUrl, setPhotoUrl] = useState('')

  // useEffect(() => {
  //   if (user?.sub) {
  //     {
  //       fetchUser(user.sub)
  //     }
  //   }
  //   console.log(currentUser.id)
  // }, [user, showRegister, currentUser.id])

  // async function fetchUser(authId: string) {
  //   const userDB = await getUserByAuth0Id(authId)

  //   if (userDB) {
  //     setUser({
  //       id: userDB.id,
  //       userName: userDB.username,
  //       photoUrl: userDB.photoUrl,
  //       bio: userDB.bio,
  //       email: userDB.email,
  //     })
  //   } else {
  //     setshowRegister(true)
  //   }
  // }
  ;(';')
  ;('   ')
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (user && user.email && user.sub) {
      const form = event.currentTarget
      const formData = new FormData(form)
      const userName = formData.get('userName') as string
      const photoUrl = formData.get('photoUrl') as string
      const bio = formData.get('bio') as string

      const email = user?.email
      const auth0Id = user?.sub
      const newUser = {
        user_name: userName,
        photo_url: photoUrl,
        bio,
        email,
        auth0_Id: auth0Id,
      }

      await addUser(newUser)
      setshowRegister(false)
    } else {
      console.log('user not signed in')
    }
  }

  const handleClickImageButton = () => {
    setShowForm(!showForm)
  }

  async function handlePhotoUrlChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setPhotoUrl(event.target.value)
    console.log(photoUrl)

    const userAuthId = user?.sub
    const userId = await getUserByAuth0Id(userAuthId as string)
    console.log('user id: ', userId.id)
    console.log(photoUrl)
  }

  async function updateProfilePic() {
    const userAuthId = user?.sub
    const userId = await getUserByAuth0Id(userAuthId as string)
    // console.log('user id: ', userId.id)

    await editUserById(currentUser.id, photoUrl)
  }

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {showRegister && !isLoading ? (
        <>
          <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Register
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="userName" className="sr-only">
                      User name
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      autoComplete="userName"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="User name"
                    />
                  </div>

                  <div>
                    <label htmlFor="bio" className="sr-only">
                      Bio
                    </label>
                    <input
                      type="text"
                      id="bio"
                      name="bio"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Bio"
                    />
                  </div>
                  <div>
                    <label htmlFor="photoUrl" className="sr-only">
                      Photo Url
                    </label>
                    <input
                      type="photoUrl"
                      name="photoUrl"
                      id="photoUrl"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Photo Url"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </>
      ) : currentUser.userName ? (
        !isLoading && (
          <>
            <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-gray-900">
                    Profile
                  </h2>
                  <p className="mt-2 text-lg font-medium text-gray-900">
                    {currentUser.userName}
                  </p>
                  <img
                    src={currentUser.photoUrl}
                    alt="userPhoto"
                    className="mt-4 h-32 w-32 rounded-full mx-auto"
                  ></img>

                  <button onClick={handleClickImageButton}>
                    Update Profile Pic
                  </button>
                  {showForm && (
                    <form>
                      <label htmlFor="photoUrl">Image:</label>
                      <input
                        type="photoUrl"
                        name="photoUrl"
                        id="photoUrl"
                        placeholder="Update your Profile Pic"
                        value={photoUrl}
                        onChange={handlePhotoUrlChange}
                      ></input>
                      <button type="submit" onClick={updateProfilePic}>
                        Submit
                      </button>
                    </form>
                  )}

                  <p className="mt-1 text-md text-gray-500">
                    {currentUser.bio}
                  </p>
                  {/* <p>
                    Signed Up Since:{' '}
                    {currentUser.signedUpAt.toLocaleDateString()}
                  </p> */}
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        <p>Please log in</p>
      )}
    </>
  )
}
