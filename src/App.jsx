import './App.css'
import Form from './components/Form/Form'
import Discount from './components/Discount/Discount'
import { Wrapper, Container } from './components/Styled/Components'

function App() {
  return (
    <>
      <Wrapper bg={'#003383'}>
        <Container>
          <Discount/>
          <Form/>
        </Container>
      </Wrapper>
    </>
  )
}

export default App
