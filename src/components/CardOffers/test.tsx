import { render, screen } from '@testing-library/react'
import CardOffers from '.'

describe('<CardOffers/>', () => {
  it('should render the heading', () => {
    const { container } = render(<CardOffers />)

    expect(screen.getByRole('heading', { name: /CardOffers/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
