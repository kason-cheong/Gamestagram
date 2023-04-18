import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Nav from './Nav'
import '@testing-library/jest-dom'
import { IfAuthenticated } from './subcomponents/Authenticated'

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

  //Checks whether img element contains right image
  test('the website logo img element is present in the document', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    const displayedImage = document.querySelector('img') as HTMLImageElement
    expect(displayedImage.src).toContain('/pics/temporary-logo.png')
  })

  //Checks whether Nav component has boardgame logo inside
  test('image alt text is present in the navbar', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )

    const logoImage = screen.getByAltText('website logo')

    expect(logoImage).toBeInTheDocument()
  })
  test('renders "Profile" link in the dropdown menu when authenticated', () => {
    // Simulate authenticated user
    const user = { name: 'Test User', photoUrl: '/path/to/photo' }
    render(
      <MemoryRouter>
        <IfAuthenticated user={user}>
          <Nav />
        </IfAuthenticated>
      </MemoryRouter>
    )

    // Simulate click event on dropdown button to open the dropdown menu
    const dropdownButton = screen.getByText(user.name)
    fireEvent.click(dropdownButton)

    // Check if the "Profile" link is present in the dropdown menu
    const navLinks = screen.getAllByRole('link')
    const profileLink = navLinks.find((link) => link.textContent === 'Profile')
    expect(profileLink).toBeInTheDocument()
  })
})
