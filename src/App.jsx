import './App.css'
import Form from './components/Form/Form'
import Discount from './components/Discount/Discount'
import { Wrapper, Container } from './components/Styled/Components'

function App() {
  return (
    <>
      <Wrapper bg={'#1A36A8'}>
        <Container>
          <div className='flex justify-between items-start pt-[55px] pb-[64px]'>
            <Discount/>
            <Form/>
          </div>
        </Container>
      </Wrapper>
    </>
  )
}

export default App
