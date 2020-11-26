import { render, screen } from '@testing-library/react'
import MyAccountDesc from '.'

describe('<MyAccountDesc/>', () => {
  it('should render the heading', () => {
    const { container } = render(<MyAccountDesc />)

    expect(screen.getByRole('heading', { name: /MyAccountDesc/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
