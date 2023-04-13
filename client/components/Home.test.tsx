import { render, screen } from '@testing-library/react'

// import '@testing-library/jest-dom'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'

describe('Home', () => {
  it('should show an error message if inputs are not filled', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(screen.findByRole('li')).toBeTruthy()
  })
})
