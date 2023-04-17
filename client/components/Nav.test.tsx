import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Nav from './Nav'
import '@testing-library/jest-dom'

//Checks whether there are any console errors and checks whether "container" (navbar) is in the document
describe('Nav', () => {
  test('the nav bar is rendered without errors', () => {
    const spy = jest.spyOn(console, 'error')
    const { container } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    expect(container).toBeInTheDocument()
    expect(spy).not.toHaveBeenCalled()
    spy.mockRestore()
  })

  //Checks whether Nav component renders Events link
  test('renders "Events" link in the Navbar', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    const navLinks = screen.getAllByRole('link')
    const eventsLink = navLinks.find((link) => link.textContent === 'Events')

    expect(eventsLink).toBeInTheDocument()
  })

  //Checks whether Nav component has boardgame logo inside
  //Need help with checking whether image is sized correctly
  test('image is present in the navbar', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )

    const logoImage = screen.getByAltText('website logo')

    expect(logoImage).toBeInTheDocument()
  })

  //Checks whether Nav component renders Boardgames link
  test('renders "Boardgames" link in the Navbar', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    const navLinks = screen.getAllByRole('link')
    const boardgamesLink = navLinks.find(
      (link) => link.textContent === 'Boardgames'
    )
    expect(boardgamesLink).toBeInTheDocument()
  })
})
