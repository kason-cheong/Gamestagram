import { render, screen } from '@testing-library/react'
import nock from 'nock'
import '@testing-library/jest-dom'

// import '@testing-library/jest-dom'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'

describe('Home', () => {
  it('should show an error message if inputs are not filled', async () => {
    nock('http://localhost/').get('/events').reply(200)
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(screen.findByRole('li')).toBeTruthy()
  })
})
