import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import Home from './Home'
import Nav from './Nav'
import Events from './Events'
import Notice from './subcomponents/Notice'
import { Route, Routes } from 'react-router-dom'
import EventDetail from './EventDetail'

function App() {
  // const fruits = useAppSelector((state) => state.fruits)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [dispatch])

  return (
    <>
      <Nav />
      <Notice />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>
    </>
  )
}

export default App
