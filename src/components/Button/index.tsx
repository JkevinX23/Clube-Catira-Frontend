import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  background?: 'white' | 'green' | 'orange' | 'blue' | 'black' | 'red'
  radius?: 'radius100' | 'radius200' | 'radius300'
  fullWidth?: boolean
  disabled?: boolean
  onClick?: () => void
}

const Button = ({
  children,
  size = 'small',
  background = 'orange',
  radius = 'radius300',
  fullWidth = false,
  disabled = false,
  onClick
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    background={background}
    radius={radius}
    fullWidth={fullWidth}
    disabled={disabled}
    onClick={onClick}
  >
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
