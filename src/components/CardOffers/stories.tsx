import { Meta, Story } from '@storybook/react/types-6-0'
import CardOffers, { CardOffersProps } from '.'

export default {
  title: 'CardOffers',
  component: CardOffers,
  args: {
    img:
      'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
    associate: 'Pharaoh Agência de Marke.',
    city: 'Montes Claros',
    state: 'MG',
    value: '80,00',
    name: 'criação para rede social'
  }
} as Meta

export const Basic: Story<CardOffersProps> = (args) => <CardOffers {...args} />
