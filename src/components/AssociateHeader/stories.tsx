import { Meta, Story } from '@storybook/react/types-6-0'
import AssociateHeader, { AssociateHeaderProps } from '.'

export default {
  title: 'AssociateHeader',
  component: AssociateHeader,
  args: {
    associate: 'João Kevin',
    credits: '1500.00'
  }
} as Meta

export const Basic: Story<AssociateHeaderProps> = (args) => (
  <AssociateHeader {...args} />
)
