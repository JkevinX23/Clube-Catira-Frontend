import { render, screen } from '@testing-library/react'
import AssociateSection from '.'

describe('<AssociateSection/>', () => {
  it('should render the heading', () => {
    const { container } = render(<AssociateSection />)

    expect(screen.getByRole('heading', { name: /AssociateSection/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
