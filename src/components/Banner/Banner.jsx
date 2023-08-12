
import Discount from '../Discount/Discount'
import Form from '../Form/Form'
import { Wrapper, Container } from '../Styled/Components'

const Banner = () => {
  return (
    <Wrapper bg={'#1A36A8'}>
      <Container>
        <div className='flex justify-between items-start pt-[55px] pb-[64px]'>
          <Discount />
          <Form />
        </div>
      </Container>
    </Wrapper>
  )
}

export default Banner
