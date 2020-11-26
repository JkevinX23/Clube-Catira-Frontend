import { render, screen } from '@testing-library/react'
import MyAccountInfo from '.'

describe('<MyAccountInfo/>', () => {
  it('should render the heading', () => {
    const { container } = render(<MyAccountInfo />)

    expect(screen.getByRole('heading', { name: /MyAccountInfo/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
