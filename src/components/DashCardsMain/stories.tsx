import { Meta, Story } from '@storybook/react/types-6-0'
import DashCardsMain, { DashCardsMainProps } from '.'

export default {
  title: 'DashCardsMain',
  component: DashCardsMain,
  args: {
    icon: 'associates',
    title: 'Associados',
    value: '512'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<DashCardsMainProps> = (args) => (
  <DashCardsMain {...args} />
)

export const parameters = {}
