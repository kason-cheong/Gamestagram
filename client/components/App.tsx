import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import Home from './Home'
import Nav from './Nav'
import Events from './Events'
import Notice from './subcomponents/Notice'
import Boardgames from './Boardgames'
import { Route, Routes } from 'react-router-dom'
import EventDetail from './EventDetail'

import PageTransition from './subcomponents/PageTransition'

import Register from './Registration/Register'
import EditEvent from './EditEvent'

function App() {
  return (
    <>
      <Nav />
      <Notice />

      <Routes>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/events/:id"
          element={
            <PageTransition>
              <EventDetail />
            </PageTransition>
          }
        />
        <Route
          path="/boardgames"
          element={
            <PageTransition>
              <Boardgames />
            </PageTransition>
          }
        />
        <Route
          path="/events"
          element={
            <PageTransition>
              <Events />
            </PageTransition>
          }
        />
        <Route
          path="/events/:id/edit"
          element={
            <PageTransition>
              <EditEvent />
            </PageTransition>
          }
        />

        <Route path="/profile" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
