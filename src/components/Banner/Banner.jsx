
import Discount from '../Discount/Discount'
import Form from '../Form/Form'
import { Wrapper, Container } from '../Styled/Components'

const Banner = () => {
  return (
    <Wrapper bg={'#1A36A8'}>
      <Container>
        <div className='justify-between items-start pb-[64px] lg:flex block pt-[173px]'>
          <div className='flex-1 mr-2'>
            <Discount />
          </div>
          <div className='flex-1 ml-2'>
            <Form />
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Banner
