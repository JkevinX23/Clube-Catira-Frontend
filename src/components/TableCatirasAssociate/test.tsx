import { render, screen } from '@testing-library/react'
import TableCatirasAssociate from '.'

describe('<TableCatirasAssociate/>', () => {
  it('should render the heading', () => {
    const { container } = render(<TableCatirasAssociate />)

    expect(screen.getByRole('heading', { name: /TableCatirasAssociate/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
