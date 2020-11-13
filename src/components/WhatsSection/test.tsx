import { render, screen } from '@testing-library/react'
import WhatsSection from '.'

describe('<WhatsSection/>', () => {
  it('should render the heading', () => {
    const { container } = render(<WhatsSection />)

    expect(screen.getByRole('heading', { name: /WhatsSection/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
