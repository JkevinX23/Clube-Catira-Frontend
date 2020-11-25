import { render, screen } from '@testing-library/react'
import SearchTableField from '.'

describe('<SearchTableField/>', () => {
  it('should render the heading', () => {
    const { container } = render(<SearchTableField />)

    expect(screen.getByRole('heading', { name: /SearchTableField/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
