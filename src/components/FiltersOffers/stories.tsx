import { Meta, Story } from '@storybook/react/types-6-0'
import { FilterProps } from 'Types'
import FiltersOffers from '.'

export default {
  title: 'FiltersOffers',
  component: FiltersOffers,
  args: {
    associates: [],
    citys: [],
    setCity: () => ({}),
    setAssociate: () => ({})
  }
} as Meta

export const Basic: Story<FilterProps> = (args) => <FiltersOffers {...args} />
