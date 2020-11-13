import { render, screen } from '@testing-library/react'
import HowWorks from '.'

describe('<HowWorks/>', () => {
  it('should render the heading', () => {
    const { container } = render(<HowWorks />)

    expect(screen.getByRole('heading', { name: /HowWorks/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
