import logo from "../../assets/images/masuno_logo.png"

const Header = () => {
  return (
    <div className="py-[25px] fixed bg-blueDark w-full z-10">
      <img src={logo} alt="" className="block m-auto" />
    </div>
  )
}

export default Header
