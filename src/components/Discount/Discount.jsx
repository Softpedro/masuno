import iconDiscount from '../../assets/images/icon_banner.png'


const Discount = () => {
  return (
    <div>
      <div className='flex'>
        <img src={iconDiscount} alt="" />
        <p className='text-white'>Es hora de</p>
      </div>
      <h2>CYBER DAYS</h2>
      <div>
        <span>En</span>
        <p>Más uno</p>
      </div>
      <div>
        <p>Del 28 al 30 de marzo</p>
      </div>
    </div>
  )
}

export default Discount
