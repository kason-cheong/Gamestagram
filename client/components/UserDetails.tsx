import { useParams } from 'react-router-dom'
import { getUserById } from '../apis/apiClientUsers'
import { useEffect, useState } from 'react'
import { UserDeets } from '../../models/Users'

export default function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState<UserDeets>({
    id: 0,
    username: '',
    email: '',
    bio: '',
    photoUrl: '',
  })
  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getUserById(Number(id)).then((user) => {
      setUser(user)
    })
  }, [])

  return (
    <>
      {user.username}
      {user.email}
      {user.bio}
      <img src={`${user.photoUrl}`} alt={`${user.username}`} />
    </>
  )
}
