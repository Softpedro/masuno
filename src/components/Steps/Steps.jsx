import Separation from "../Separation/Separation"
import { Wrapper, Container } from "../Styled/Components"
import Title from "../Title/Title"
import Step from "../Step/Step"
import step1 from "../../assets/images/step1.svg"
import step2 from "../../assets/images/step2.svg"
import step3 from "../../assets/images/step3.svg"

const data = [
  {
    image: step1,
    title: 'Paso 1',
    categoria: 'Regístrate',
    description: 'Completa el formulario con tus datos personales y acepta los términos.'
  },
  {
    image: step2,
    title: 'Paso 2',
    categoria: 'Recibe un cupón',
    description: 'Recibirás un correo electrónico donde podrás ver el cupón de descuento.'
  },
  {
    image: step3,
    title: 'Paso 3',
    categoria: 'Empieza a ahorrar',
    description: '¡Y listo! Podrás usarlo del 28 al 30 de Marzo por compras en nuestra tienda online.'
  }
]

const Steps = () => {
  return (
    <Wrapper>
      <Container>
        <Separation/>
        <Title content={'¿Como obtengo el descuento por Cyber Days?'}/>
        <p className="mt-2 text-center text-2xl text-gray">
          Para adquirir nuestro descuento especial por
          <span className="text-red font-extrabold">&nbsp;Cyber Days&nbsp;</span>
          sigue los siguientes pasos
        </p>
        <div className="md:flex md:flex-row mt-[50px] flex flex-col">
          {data.map((item, index) => {
            const { image, title, categoria, description } = item
            return <Step title={title} image={image} categoria={categoria} description={description} key={index}/>
          })}
        </div>
      </Container>
    </Wrapper>
  )
}

export default Steps
