import { render, screen } from '@testing-library/react'
import CardPendingOffDash from '.'

describe('<CardPendingOffDash/>', () => {
  it('should render the heading', () => {
    const { container } = render(<CardPendingOffDash />)

    expect(screen.getByRole('heading', { name: /CardPendingOffDash/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
