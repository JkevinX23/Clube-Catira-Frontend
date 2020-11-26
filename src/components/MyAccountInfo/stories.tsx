import { Meta, Story } from '@storybook/react/types-6-0'
import MyAccountInfo, { MyAccountInfoProps } from '.'

export default {
  title: 'MyAccountInfo',
  component: MyAccountInfo,
  args: {
    img:
      'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
    fantasy_name: 'Kevin LTDA',
    category: 'Software Developer',
    contact: '38 98858-9832',
    city: 'Montes Claros',
    state: 'MG',
    street: 'Rua trinta e dois',
    neighborhood: 'Jardim Primavera',
    representative_name: 'João Kevin Gomes Rodrigues',
    email: 'kevingomesr@gmail.com'
  }
} as Meta

export const Basic: Story<MyAccountInfoProps> = (args) => (
  <MyAccountInfo {...args} />
)
