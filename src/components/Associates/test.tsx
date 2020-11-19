import { render, screen } from '@testing-library/react'
import Associates from '.'

describe('<Associates/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Associates />)

    expect(screen.getByRole('heading', { name: /Associates/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
