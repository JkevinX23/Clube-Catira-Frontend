import { Meta, Story } from '@storybook/react/types-6-0'
import ContactAssociate from '.'
import { ContactAssociateProps } from 'Types'

export default {
  title: 'ContactAssociate',
  component: ContactAssociate,
  args: {
    img:
      'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
    associate: 'Kevin Developer',
    contact: '(38) 99951-3227',
    street: 'Rua Trinta e dois',
    number: '92',
    neighborhood: 'Jardim Primavera',
    city: 'Montes Claros',
    state: 'MG',
    description:
      'Essa é uma descrição de 173 caracteres escrita para testar o tamanho do design e se ficará tudo adequado.'
  }
} as Meta

export const Basic: Story<ContactAssociateProps> = (args) => (
  <ContactAssociate {...args} />
)
