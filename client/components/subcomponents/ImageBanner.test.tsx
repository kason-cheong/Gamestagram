import { screen, render } from "@testing-library/react"
import ImageBanner from "./ImageBanner"
import nock from 'nock'
import "@testing-library/jest-dom"

describe('ImageBanner', () => {
  it('name should be displayed', async () => {
    //Arrange
    const header = {
      name:'Welcome to Gamestagram',
      url:'/home/kason/dev-academy/Gamestagram/server/public/pics/banner1.jpg'
    } 

    nock('http://localhost').get('/').reply(200, header)

    render(<ImageBanner name={header.name} url={header.url}/>)

    //Act
    const heading = await screen.getByRole('heading', { name: "Welcome to Gamestagram" })

    //Assert
    expect(heading).toHaveTextContent(/welcome to gamestagram/i)
  })
})