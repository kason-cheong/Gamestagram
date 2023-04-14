import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import Home from './Home'
import Nav from './Nav'

function App() {
  // const fruits = useAppSelector((state) => state.fruits)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [dispatch])

  return (
    <>
      <Nav />
      <Home />
    </>
  )
}

export default App
