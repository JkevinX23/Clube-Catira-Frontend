import { Meta, Story } from '@storybook/react/types-6-0'
import MyCredits, { MyCreditsProps } from '.'

export default {
  title: 'MyCredits',
  component: MyCredits,
  args: {
    credits: '150,00',
    spent: '100,00',
    sold: '0,00'
  }
} as Meta

export const Basic: Story<MyCreditsProps> = (args) => <MyCredits {...args} />
