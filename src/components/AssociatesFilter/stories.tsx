import { Meta, Story } from '@storybook/react/types-6-0'
import Associates from '.'

type pageProps = {
  citys: string[]
  setFilter: (c: string) => void
}

export default {
  title: 'Associates',
  component: Associates,
  args: {
    citys: ['Montes Claros/MG', 'Fransico Sá/MG'],
    setFilter: () => ({})
  }
} as Meta

export const Basic: Story<pageProps> = (args) => <Associates {...args} />
