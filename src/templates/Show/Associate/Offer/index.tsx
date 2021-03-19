/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles'
import { useEffect, useState } from 'react'
import { postOffers, showOffer } from 'Context/Action/Offer'
import { toast } from 'react-toastify'
import AssociateHeader, {
  AssociateHeaderProps
} from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import Footer from 'components/Footer'
import DetailsOffer from 'components/DetailsOffer'
import { FormatDateByFNS } from 'utils/Masks'
import { ShowOfferAssociateProps } from 'Types'

import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

type props = {
  id: number
  HeaderProps: AssociateHeaderProps
}

const ShowOffer = ({ id, HeaderProps }: props) => {
  const [file, setFile] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value_offer, setValueOffer] = useState<any>(0)
  const [consumer_cards, setConsumerCards] = useState(1)
  const [quantity, setQuantity] = useState(0)
  const [associate, setAssociate] = useState('')
  const [date, setDate] = useState('')
  const [sell, setSell] = useState(0)
  const [isDirect, setIsDirect] = useState(false)

  useEffect(() => {
    async function loadOffer() {
      const { data } = await showOffer(id)
      setTitle((data as ShowOfferAssociateProps).offer.title)
      setValueOffer((data as ShowOfferAssociateProps).offer.value_offer)
      setDescription((data as ShowOfferAssociateProps).offer.description || '')
      setConsumerCards((data as ShowOfferAssociateProps).offer.consumer_cards)
      setQuantity((data as ShowOfferAssociateProps).offer.quantity)
      setAssociate(
        (data as ShowOfferAssociateProps).offer.Associated.fantasy_name
      )
      setIsDirect(
        (data as ShowOfferAssociateProps).offer.directed_associate_id! > 0 ||
          false
      )
      setFile((data as ShowOfferAssociateProps).offer.File.url)
      setDate(
        FormatDateByFNS((data as ShowOfferAssociateProps).offer.createdAt)
      )
      setSell((data as ShowOfferAssociateProps).sell)
    }
    loadOffer()
  }, [id])

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <AssociateHeader
          associate={HeaderProps.associate}
          credits={HeaderProps.credits}
        />
      </S.WrapperHeader>
      <S.WrapperMenu>
        <AssociateMenu />
      </S.WrapperMenu>
      <S.WrapperBreadcrumbs>
        <S.Breadcrumbs>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="large" />}
            aria-label="breadcrumb"
          >
            <Link href="/home-associado">Home</Link>
            {isDirect && (
              <Link href="/associado/ofertas-direcionadas">
                Ofertas direcionadas
              </Link>
            )}
            {title && <Typography color="textPrimary">{title}</Typography>}
          </Breadcrumbs>
        </S.Breadcrumbs>
      </S.WrapperBreadcrumbs>
      <S.WrapperContent>
        <DetailsOffer
          key={id}
          id={id}
          associate={associate}
          img={file}
          offer={title}
          value={value_offer}
          quantity={quantity}
          date={date}
          description={description}
          sell={sell}
          consumer_cards={consumer_cards}
        />
      </S.WrapperContent>
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default ShowOffer
