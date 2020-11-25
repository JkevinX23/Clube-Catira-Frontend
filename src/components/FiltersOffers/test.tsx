import { render, screen } from '@testing-library/react'
import FiltersOffers from '.'

describe('<FiltersOffers/>', () => {
  it('should render the heading', () => {
    const { container } = render(<FiltersOffers />)

    expect(screen.getByRole('heading', { name: /FiltersOffers/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
