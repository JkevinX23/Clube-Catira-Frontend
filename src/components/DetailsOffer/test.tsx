import { render, screen } from '@testing-library/react'
import DetailsOffer from '.'

describe('<DetailsOffer/>', () => {
  it('should render the heading', () => {
    const { container } = render(<DetailsOffer />)

    expect(screen.getByRole('heading', { name: /DetailsOffer/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
