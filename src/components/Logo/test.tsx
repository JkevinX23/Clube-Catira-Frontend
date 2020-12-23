import { screen } from '@testing-library/react'
import { renderWidthTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo/>', () => {
  it('should render a white label by default', () => {
    renderWidthTheme(<Logo />)
    expect(screen.getByLabelText(/Clube da Catira/i).parentElement).toHaveStyle(
      {
        width: '25rem'
      }
    )
  })
})
