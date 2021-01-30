import * as S from './styles'
import { useEffect, useState } from 'react'
import AssociateHeader, {
  AssociateHeaderProps
} from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import Footer from 'components/Footer'
import { showAssociateAssociate } from 'Context/Action/Associates'
import { toast } from 'react-toastify'
import ContactAssociate from 'components/ContactAssociate'

import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

type props = {
  id: number
  HeaderProps: AssociateHeaderProps
}

const ShowAssociate = ({ id, HeaderProps }: props) => {
  const [associate, setAssociate] = useState<any>()
  useEffect(() => {
    async function loadAssociate() {
      try {
        const { data } = await showAssociateAssociate(id)
        setAssociate(data)
      } catch (err) {
        console.log(err)
        toast.warn(
          'Algo de errado aconteceu, caso persista, contate o amdinistrador do sistema.'
        )
      }
    }
    loadAssociate()
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
            <Link href="/associado/associados">Associados</Link>
            {associate && (
              <Typography color="textPrimary">{associate.associate}</Typography>
            )}
          </Breadcrumbs>
        </S.Breadcrumbs>
      </S.WrapperBreadcrumbs>
      <S.WrapperContent>
        {associate && (
          <ContactAssociate
            associate={associate.associate}
            img={associate.img}
            description={associate.description}
            contact={associate.contact}
            street={associate.street}
            number={associate.number}
            neighborhood={associate.neighborhood}
            city={associate.city}
            state={associate.state}
            instagram={associate.instagram}
            site={associate.site}
            facebook={associate.facebook}
          />
        )}
      </S.WrapperContent>
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default ShowAssociate
