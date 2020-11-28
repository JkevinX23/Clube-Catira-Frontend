import { render, screen } from '@testing-library/react'
import DashCardsMain from '.'

describe('<DashCardsMain/>', () => {
  it('should render the heading', () => {
    const { container } = render(<DashCardsMain />)

    expect(
      screen.getByRole('heading', { name: /DashCardsMain/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
