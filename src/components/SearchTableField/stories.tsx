import { Meta, Story } from '@storybook/react/types-6-0'
import SearchTableField, { SearchTableFieldProps } from '.'

export default {
  title: 'SearchTableField',
  component: SearchTableField
} as Meta

export const Basic: Story<SearchTableFieldProps> = (args) => (
  <SearchTableField {...args} />
)
