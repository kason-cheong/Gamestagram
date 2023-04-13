import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import Home from './Home'

function App() {
  // const fruits = useAppSelector((state) => state.fruits)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [dispatch])

  return (
    <>
      <Home />
    </>
  )
}

export default App
