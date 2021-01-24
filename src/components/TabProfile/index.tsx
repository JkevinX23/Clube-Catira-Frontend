import { useState } from 'react'
import MyAccountDesc from 'components/MyAccountDesc'
import MyAccountInfo from 'components/MyAccountInfo'
import MyAccountSeg from 'components/MyAccountSeg'
import * as S from './styles'

export type TabProfileProps = {
  img: string
  fantasy_name: string
  category: string
  contact: string
  city: string
  state: string
  street: string
  number: string
  neighborhood: string
  representative_name: string
  email: string
  site?: string
  facebook?: string
  instagram?: string
  description: string
}
const TabProfile = ({
  img,
  fantasy_name,
  category,
  contact,
  city,
  state,
  street,
  number,
  neighborhood,
  representative_name,
  email,
  site,
  facebook,
  instagram,
  description
}: TabProfileProps) => {
  const [selected, setSelected] = useState(1)

  return (
    <S.Wrapper>
      <S.WrapperNav>
        <S.NavButton
          style={selected === 1 ? { color: '#7c7c7c', background: '#eee' } : {}}
          onClick={() => setSelected(1)}
        >
          Informações Gerais
        </S.NavButton>
        <S.NavButton
          style={selected === 2 ? { color: '#7c7c7c', background: '#eee' } : {}}
          onClick={() => setSelected(2)}
        >
          {' '}
          Descrição
        </S.NavButton>
        <S.NavButton
          style={selected === 3 ? { color: '#7c7c7c', background: '#eee' } : {}}
          onClick={() => setSelected(3)}
        >
          {' '}
          Segurança
        </S.NavButton>
      </S.WrapperNav>

      <S.WrapperContent>
        {selected === 1 && (
          <MyAccountInfo
            img={img}
            fantasy_name={fantasy_name}
            category={category}
            contact={contact}
            city={city}
            state={state}
            street={street}
            number={number}
            neighborhood={neighborhood}
            representative_name={representative_name}
            email={email}
          />
        )}
        {selected === 2 && (
          <MyAccountDesc
            site={site}
            facebook={facebook}
            instagram={instagram}
            description={description}
          />
        )}
        {selected === 3 && <MyAccountSeg />}
      </S.WrapperContent>
    </S.Wrapper>
  )
}

export default TabProfile
