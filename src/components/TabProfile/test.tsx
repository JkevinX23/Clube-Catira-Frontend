import { render, screen } from '@testing-library/react'
import TabProfile from '.'

describe('<TabProfile/>', () => {
  it('should render the heading', () => {
    const { container } = render(<TabProfile />)

    expect(screen.getByRole('heading', { name: /TabProfile/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
