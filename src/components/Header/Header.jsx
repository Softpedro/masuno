import logo from "../../assets/images/masuno_logo.png"
import { Wrapper } from "../Styled/Components"

const Header = () => {
  return (
    <Wrapper bg={"#1A36A8"}>
      <div className="py-[25px]">
        <img src={logo} alt="" className="block m-auto" />
      </div>
    </Wrapper>
  )
}

export default Header
