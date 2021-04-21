import { Meta, Story } from '@storybook/react/types-6-0'
import DetailsOffer, { DetailsOfferProps } from '.'

export default {
  title: 'DetailsOffer',
  component: DetailsOffer,
  args: {
    img:
      'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
    offer: 'Programação de sites',
    value: 'Ctz 2000,00',
    associate: 'Kevin Developer',
    date: '22/07/2020',
    quantity: 'Ilimitado',
    sell: '5',
    description:
      'Essa é uma descrição de 173 caracteres escrita para testar o tamanho do design e se ficará tudo adequado.'
  }
} as Meta

export const Basic: Story<DetailsOfferProps> = (args) => (
  <DetailsOffer {...args} />
)
