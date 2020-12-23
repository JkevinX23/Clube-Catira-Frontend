import { screen } from '@testing-library/react'
import { renderWidthTheme } from 'utils/tests/helpers'
import CardAssociates from '.'

const props = {
  img:
    'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
  name: 'Kevin LTDA',
  city: 'Montes Claros',
  state: 'MG'
}

describe('<CardAssociates/>', () => {
  it('should render corretly', () => {
    renderWidthTheme(<CardAssociates {...props} />)

    expect(
      screen.getByRole('heading', { name: /Kevin LTDA/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Montes Claros/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /MG/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Kevin LTDA/i })).toBeInTheDocument()
  })
})
