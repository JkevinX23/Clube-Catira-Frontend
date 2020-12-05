import { Meta, Story } from '@storybook/react/types-6-0'
import DashNewAssociate, { DashNewAssociateProps } from '.'

export default {
  title: 'DashNewAssociate',
  component: DashNewAssociate,
  args: {
    associates: [
      { ref: 'Moc01 ', name: 'Joao kevin' },
      { ref: '277', name: 'Joao Rodrigues' }
    ]
  }
} as Meta

export const Basic: Story<DashNewAssociateProps> = (args) => (
  <DashNewAssociate {...args} />
)
