import { render, screen } from '@testing-library/react'
import MyAccountSeg from '.'

describe('<MyAccountSeg/>', () => {
  it('should render the heading', () => {
    const { container } = render(<MyAccountSeg />)

    expect(screen.getByRole('heading', { name: /MyAccountSeg/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
