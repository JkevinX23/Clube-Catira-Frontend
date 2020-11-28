import { render, screen } from '@testing-library/react'
import DashNewAssociate from '.'

describe('<DashNewAssociate/>', () => {
  it('should render the heading', () => {
    const { container } = render(<DashNewAssociate />)

    expect(screen.getByRole('heading', { name: /DashNewAssociate/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
