// import Button from 'components/Button'
import { ContactAssociateProps } from 'Types'
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon
} from 'styled-icons/boxicons-logos'
import { World as SiteIcon } from 'styled-icons/boxicons-regular'
import * as S from './styles'
import CardOffers from 'components/CardOffers'

const ContactAssociate = ({
  img,
  associate,
  description,
  contact,
  street,
  number,
  neighborhood,
  city,
  state,
  instagram,
  site,
  facebook,
  offers
}: ContactAssociateProps) => (
  <S.Wrapper>
    <S.Content>
      <S.WrapperImage>
        <S.Image src={img} role="img" />
        <S.IconsContainer>
          {facebook && (
            <S.IconWrapper
              onClick={() =>
                window.open(`https://www.facebook.com/${facebook}`, '_blank')
              }
            >
              <FacebookIcon />
            </S.IconWrapper>
          )}

          {instagram && (
            <S.IconWrapper>
              <InstagramIcon
                onClick={() =>
                  window.open(
                    `https://www.instagram.com/${instagram}`,
                    '_blank'
                  )
                }
              />
            </S.IconWrapper>
          )}

          {site && (
            <S.IconWrapper>
              <SiteIcon
                onClick={() => window.open(`https://${site}`, '_blank')}
              />
            </S.IconWrapper>
          )}
        </S.IconsContainer>
      </S.WrapperImage>
      <S.WrapperDetails>
        <S.Title>{associate}</S.Title>
        <S.Sub>{description}</S.Sub>
        <S.Sub>Contato comercial: {contact}</S.Sub>
        <S.Sub>
          {street}, {number}, {neighborhood}, {city}/{state}{' '}
        </S.Sub>
      </S.WrapperDetails>
    </S.Content>
    <S.WrapperOffers>
      <S.Title>Ofertas deste associado</S.Title>
      <S.WrapperCards>
        {offers && offers?.length > 0 ? (
          offers.map((prod) => {
            return (
              <CardOffers
                key={prod.id}
                id={prod.id}
                associateId={prod.Associated.id}
                associate={prod.Associated.fantasy_name}
                city={prod.Associated.Address.city}
                value={prod.value_offer}
                state={prod.Associated.Address.state}
                name={prod.title}
                img={prod.File.url}
                title={prod.title}
              />
            )
          })
        ) : (
          <S.Text>Este associado não possui nenhuma oferta ativa.</S.Text>
        )}
      </S.WrapperCards>
    </S.WrapperOffers>
  </S.Wrapper>
)

export default ContactAssociate
