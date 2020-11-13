import { render, screen } from '@testing-library/react'
import SociaisSection from '.'

describe('<SociaisSection/>', () => {
  it('should render the heading', () => {
    const { container } = render(<SociaisSection />)

    expect(screen.getByRole('heading', { name: /SociaisSection/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
