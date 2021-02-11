import { Meta, Story } from '@storybook/react/types-6-0'
import CardAssociates, { CardAssociatesProps } from '.'

export default {
  title: 'CardAssociates',
  component: CardAssociates,
  args: {
    img:
      'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
    name: 'Kevin LTDA',
    city: 'Montes Claros',
    state: 'MG'
  }
} as Meta

export const Basic: Story<CardAssociatesProps> = (args) => (
  <CardAssociates {...args} />
)
