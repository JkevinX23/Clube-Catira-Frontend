import { Meta, Story } from '@storybook/react/types-6-0'
import HeaderDash, { HeaderDashProps } from '.'

export default {
  title: 'HeaderDash',
  component: HeaderDash,
  args: {
    name: 'Kevin',
    role: 'Administrador'
  }
} as Meta

export const Basic: Story<HeaderDashProps> = (args) => <HeaderDash {...args} />
