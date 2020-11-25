import { render, screen } from '@testing-library/react'
import AssociateHeader from '.'

describe('<AssociateHeader/>', () => {
  it('should render the heading', () => {
    const { container } = render(<AssociateHeader />)

    expect(screen.getByRole('heading', { name: /AssociateHeader/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
