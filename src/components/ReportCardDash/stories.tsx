import { Meta, Story } from '@storybook/react/types-6-0'
import ReportCardDash, { ReportCardDashProps } from '.'

export default {
  title: 'ReportCardDash',
  component: ReportCardDash,
  args: {
    direct: 15,
    pending: 12
  }
} as Meta

export const Basic: Story<ReportCardDashProps> = (args) => (
  <ReportCardDash {...args} />
)
