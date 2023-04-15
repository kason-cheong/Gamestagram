import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import Home from './Home'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import EventDetail from './EventDetail'
import Register from './Registration/Register'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Register />} />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>
    </>
  )
}

export default App
