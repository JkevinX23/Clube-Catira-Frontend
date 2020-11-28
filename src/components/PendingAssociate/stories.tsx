import { Meta, Story } from '@storybook/react/types-6-0'
import PendingAssociate, { PendingAssociateProps } from '.'

export default {
  title: 'PendingAssociate',
  component: PendingAssociate,
  args: {
    associate: 'kevin',
    franchise: 'Moc1 - Eduardo'
  }
} as Meta

export const Basic: Story<PendingAssociateProps> = (args) => (
  <PendingAssociate {...args} />
)
