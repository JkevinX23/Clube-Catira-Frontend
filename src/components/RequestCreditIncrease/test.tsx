import { render, screen } from '@testing-library/react'
import RequestCreditIncrease from '.'

describe('<RequestCreditIncrease/>', () => {
  it('should render the heading', () => {
    const { container } = render(<RequestCreditIncrease />)

    expect(
      screen.getByRole('heading', { name: /RequestCreditIncrease/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
