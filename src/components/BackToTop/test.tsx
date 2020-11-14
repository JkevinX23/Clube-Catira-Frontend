import { render, screen } from '@testing-library/react'
import BackToTop from '.'

describe('<BackToTop/>', () => {
  it('should render the heading', () => {
    const { container } = render(<BackToTop />)

    expect(screen.getByRole('heading', { name: /BackToTop/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
