import { Meta, Story } from '@storybook/react/types-6-0'
import CardPendingOffDash, { CardPendingOffDashProps } from '.'

export default {
  title: 'CardPendingOffDash',
  component: CardPendingOffDash,
  args: {
    associates: [
      {
        franchise: 'Moc - Kevin',
        associate: 'Joao Rodrigues'
      },

      {
        franchise: 'Moc - Kevin',
        associate: 'Joao Rodrigues'
      },
      {
        franchise: 'Moc - Kevin',
        associate: 'Joao Rodrigues'
      }
    ]
  }
} as Meta

export const Basic: Story<CardPendingOffDashProps> = (args) => (
  <CardPendingOffDash {...args} />
)
