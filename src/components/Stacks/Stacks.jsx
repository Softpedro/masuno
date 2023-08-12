import Separation from "../Separation/Separation"
import { Container, Wrapper } from "../Styled/Components"
import logoContent from "../../assets/images/logo_content.svg"
import Title from "../Title/Title"
import Slider from "../Slider/Slider"

const Stacks = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Separation/>
          <img src={logoContent} alt="" className="block m-auto my-[50px]"/>
          <Title content={"Las mejores tecnologias de Más uno"}/>
        </Container>
      </Wrapper>
      <Slider/>
    </>
  )
}

export default Stacks
