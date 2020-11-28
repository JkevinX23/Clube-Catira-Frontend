import { render, screen } from '@testing-library/react'
import ReportCardDash from '.'

describe('<ReportCardDash/>', () => {
  it('should render the heading', () => {
    const { container } = render(<ReportCardDash />)

    expect(screen.getByRole('heading', { name: /ReportCardDash/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
