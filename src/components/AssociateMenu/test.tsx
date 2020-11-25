import { render, screen } from '@testing-library/react'
import AssociateMenu from '.'

describe('<AssociateMenu/>', () => {
  it('should render the heading', () => {
    const { container } = render(<AssociateMenu />)

    expect(screen.getByRole('heading', { name: /AssociateMenu/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
