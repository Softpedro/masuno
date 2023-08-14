import percentaje from '../../assets/images/image_percentaje.png'
import adorno from '../../assets/images/adorno_discount2.png'
import icon_scissors from '../../assets/images/scissors.svg'

const Ticket = () => {
  return (
    <div className="bg-white max-w-[550px] px-[13px] py-[13px] mt-[44px] m-auto md:ml-0">
      <div className="border-dashed border-2 border-[#003383] px-[20px] py-[20px] rounded-2xl">
        <h4 className="text-center text-pink text-[32px] font-semibold">
          Regístrate y obtén
          <img src={adorno} alt=""  className='block m-auto'/>
        </h4>
        <div className='md:flex items-center mt-3'>
          <img src={percentaje} alt="" className='m-auto'/>
          <div className='text-center md:text-left'>
            <p className='text-blue text-2xl font-semibold'>En tu primera <br /> compra de</p>
            <span className='text-pink font-extrabold text-2xl'>CYBER DAYS</span>
          </div>
        </div>
        <div className='mt-[23px]'>
          <p className='text-center text-blue mb-1 text-[14px]'>
            Aplicamos el descuento mediante un código que se te eviará a tu correo registrado.
          </p>
          <p className='text-center text-blue mb-1 text-[14px]'>
            Cupón válido del 28 al 30 de marzo.
          </p>
          <p className='text-center text-blue mb-1 text-[14px]'>
            *Aplican términos y condiciones
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ticket
