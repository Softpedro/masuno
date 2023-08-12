import iconDiscount from '../../assets/images/icon_banner.png'
import Ticket from '../Ticket/Ticket'
import adorno from '../../assets/images/adorno_discount1.svg'

const Discount = () => {
  return (
    <div>
      <div className='flex items-center mb-3.5'>
        <img src={iconDiscount} alt="" />
        <p className='text-white ml-4 uppercase text-2xl'>Es hora de</p>
      </div>
      <h2 className='text-white text-[56px] font-bold leading-none'>CYBER DAYS</h2>
      <div className='flex items-center mb-[20px]'>
        <span className='text-white text-[30px] uppercase mr-4 font-bold'>En</span>
        <p className='text-white relative text-[46px] font-bold'>
          Más uno
          <img src={adorno} alt="" className='absolute bottom-0 right-0'/>
        </p>
      </div>
      <div>
        <p className='text-white text-[28px]'>Del <strong>28</strong> al <strong>30</strong> de marzo</p>
      </div>
      <Ticket/>
    </div>
  )
}

export default Discount
