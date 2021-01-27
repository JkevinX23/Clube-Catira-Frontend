import { render, screen } from '@testing-library/react'
import CreateOfferAssociate from '.'

describe('<CreateOfferAssociate/>', () => {
  it('should render the heading', () => {
    const { container } = render(<CreateOfferAssociate />)

    expect(
      screen.getByRole('heading', { name: /CreateOfferAssociate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
