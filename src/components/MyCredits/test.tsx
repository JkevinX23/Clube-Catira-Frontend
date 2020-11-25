import { render, screen } from '@testing-library/react'
import MyCredits from '.'

describe('<MyCredits/>', () => {
  it('should render the heading', () => {
    const { container } = render(<MyCredits />)

    expect(
      screen.getByRole('heading', { name: /MyCredits/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
