import { fireEvent, screen } from '@testing-library/react'
import { renderWidthTheme } from 'utils/tests/helpers'
import Menu from '.'

describe('<Menu/>', () => {
  it('should render the menu', () => {
    renderWidthTheme(<Menu />)

    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWidthTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/Open Menu/i))

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/Close Menu/i))

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show registerbox when logged out ', () => {
    renderWidthTheme(<Menu />)

    expect(screen.queryByText(/Minha Conta/i)).not.toBeInTheDocument()
    expect(screen.getByText(/Login/i)).toBeInTheDocument()
    expect(screen.getByText(/Cadastre-se/i)).toBeInTheDocument()
  })

  it('should show wishlight and account when logged in ', () => {
    renderWidthTheme(<Menu username="Kevin" />)

    expect(screen.queryByText(/Login/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Cadastre-se/i)).not.toBeInTheDocument()
    expect(screen.getByText(/Minha Conta/i)).toBeInTheDocument()
  })
})
