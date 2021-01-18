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
        />
      </S.WrapperContent>
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default ShowOffer
