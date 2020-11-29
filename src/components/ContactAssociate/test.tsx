import { render, screen } from '@testing-library/react'
import ContactAssociate from '.'

describe('<ContactAssociate/>', () => {
  it('should render the heading', () => {
    const { container } = render(<ContactAssociate />)

    expect(screen.getByRole('heading', { name: /ContactAssociate/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
