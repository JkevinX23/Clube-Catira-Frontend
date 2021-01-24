import Button from 'components/Button'
import * as S from './styles'

type descProps = {
  site?: string
  facebook?: string
  instagram?: string
  description: string
}

const MyAccountDesc = ({
  site,
  facebook,
  instagram,
  description
}: descProps) => (
  <S.Wrapper>
    <S.WrapperField>
      <div>
        <S.Label>Site</S.Label>
        <S.Input value={site} />
      </div>
      <div>
        <S.Label>Facebook</S.Label>
        <S.Input value={facebook} />
      </div>
      <div>
        <S.Label>Instagram</S.Label>
        <S.Input value={instagram} />
      </div>
    </S.WrapperField>

    <S.WrapperField>
      <div>
        <S.Label>Sobre a empresa</S.Label>
        <S.TextArea value={description} />
      </div>
    </S.WrapperField>

    <Button background="black" size="xxsmall" radius="radius100">
      Atualizar
    </Button>
  </S.Wrapper>
)

export default MyAccountDesc
