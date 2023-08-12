import { Container, Wrapper } from "../Styled/Components"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import logo from "../../assets/images/masuno_logo.png"

const Footer = () => {
  return (
    <Wrapper bg={"#1A36A8"}>
      <Container>
        <div className="md:flex justify-between md:px-[100px] pt-[70px] pb-[90px]">
          <div className="md:m-0 mb-10">
            <img src={logo} alt="" className="mb-[35px]"/>
            <strong className="text-[20px] text-white">Nosotros</strong>
            <p className="text-white">Somos Mas uno</p>
          </div>
          <div className="md:m-0 mb-10">
            <strong className="text-[20px] text-white mb-5 block">Te informamos</strong>
            <ul>
              <li className="text-white text-[14px] mb-2">Preguntas frecuentes</li>
              <li className="text-white text-[14px] mb-2">Términos y condiciones</li>
              <li className="text-white text-[14px] mb-2">Medios de pago</li>
              <li className="text-white text-[14px] mb-2">Políticas de entrega</li>
              <li className="text-white text-[14px] mb-2">Libro de reclamaciones</li>
              <img src="" alt="" />
            </ul>
          </div>
          <div>
            <strong className="text-[20px] text-white">Contáctanos</strong>
            <div className="flex mb-10 mt-6">
              <FaPhoneAlt color={"#fff"}/>
              <span className="text-white ml-4">0000-0000</span>
            </div>
            <ul className="flex">
              <li className="w-[44px] h-[44px] bg-white rounded-full flex justify-center items-center mx-3">
                <FaFacebookF color={"#1A36A8"}/>
              </li>
              <li className="w-[44px] h-[44px] bg-white rounded-full flex justify-center items-center mx-3">
                <FaTwitter color={"#1A36A8"}/>
              </li>
              <li className="w-[44px] h-[44px] bg-white rounded-full flex justify-center items-center mx-3">
                <FaLinkedinIn color={"#1A36A8"}/>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Footer
