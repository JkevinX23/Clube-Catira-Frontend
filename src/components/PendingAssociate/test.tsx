import { render, screen } from '@testing-library/react'
import PendingAssociate from '.'

describe('<PendingAssociate/>', () => {
  it('should render the heading', () => {
    const { container } = render(<PendingAssociate />)

    expect(screen.getByRole('heading', { name: /PendingAssociate/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
