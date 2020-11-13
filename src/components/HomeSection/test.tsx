import { render, screen } from '@testing-library/react'
import HomeSection from '.'

describe('<HomeSection/>', () => {
  it('should render the heading', () => {
    const { container } = render(<HomeSection />)

    expect(
      screen.getByRole('heading', { name: /HomeSection/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
