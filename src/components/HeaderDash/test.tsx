import { render, screen } from '@testing-library/react'
import HeaderDash from '.'

describe('<HeaderDash/>', () => {
  it('should render the heading', () => {
    const { container } = render(<HeaderDash />)

    expect(screen.getByRole('heading', { name: /HeaderDash/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
