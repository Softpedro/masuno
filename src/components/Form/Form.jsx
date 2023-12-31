import iconForm from '../../assets/images/icon_form.png'
import captcha from '../../assets/images/captcha.png'
import adorno from '../../assets/images/adorno_form.svg'
import { useForm, Controller } from "react-hook-form"


const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: ""
    },
  })
  const onSubmit = () => {
    alert('datos correctos')
  }
  
  return (
    <div className="bg-white rounded-[32px] max-w-[640px] relative pt-[24px] pl-[34px] pb-[16px] pr-[48px] mt-[40px]">
      <img src={iconForm} alt="" className='absolute -top-[40px] right-0'/>
      <h5 className='text-2xl text-red font-extrabold mb-[35px]'>
        Completa tus datos
        <img src={adorno} alt="" />
      </h5>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='sm:flex mb-[13px]'>
          <div className='md:mr-3 flex-1 md:mb-0 mb-[13px] relative'>
            <label htmlFor="" className='form-label'>Nombres <span className='text-red'>*</span></label>
            <Controller
              name='firstName'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  className='form-text text-link focus:border-focus'
                  placeholder="Ingrese sus nombres"
                  value={value}
                  onChange={e => onChange(e.target.value)}
                />
              )}
            />
            {errors.firstName && <p className='form-error'>Este campo es requerido</p>}
          </div>
          <div className='md:ml-3 flex-1 relative'>
            <label htmlFor="" className='form-label'>Apellidos <span className='text-red'>*</span></label>
            <Controller
              name='lastName'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  className='form-text text-link focus:border-focus'
                  placeholder="Ingrese sus apellidos"
                  value={value}
                  onChange={e => onChange(e.target.value)}
                />
              )}
            />
            {errors.lastName && <p className='form-error'>Este campo es requerido</p>}
          </div>
        </div>
        <div className='sm:flex mb-[13px]'>
          <div className='md:mr-3 flex-1 md:mb-0 mb-[13px] relative'>
            <label htmlFor="" className='form-label'>Teléfono celular <span className='text-red'>*</span></label>
            <Controller
              name='phone'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  className='form-text text-link focus:border-focus'
                  placeholder="Ingrese su número telefonico"
                  value={value}
                  onChange={e => onChange(e.target.value)}
                />
              )}
            />
            {errors.phone && <p className='form-error'>Este campo es requerido</p>}
          </div>
          <div className='md:ml-3 flex-1 relative'>
            <label htmlFor="" className='form-label'>Correo electrónico <span className='text-red'>*</span></label>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  className='form-text text-link focus:border-focus'
                  placeholder="Ingrese su correo electrónico"
                  value={value}
                  onChange={e => onChange(e.target.value)}
                />
              )}
            />
            {errors.email && <p className='form-error'>Este campo es requerido</p>}
          </div>
        </div>
        <div className='sm:flex mb-[13px]'>
          <div className='md:mr-3 flex-1 md:mb-0 mb-[13px]'>
            <label htmlFor="" className='form-label'>Tus favoritos</label>
            <select name="" id="" className='form-select'>
              <option value="">Pollo, Cerdo, Embutidos...</option>
              <option value="">Pollo, Cerdo, Embutidos...</option>
              <option value="">Pollo, Cerdo, Embutidos...</option>
              <option value="">Pollo, Cerdo, Embutidos...</option>
            </select>
          </div>
          <div className='md:ml-3 flex-1'>
            <img src={captcha} alt="" />
            <input type="text" className='form-text focus:border-focus' placeholder="Ingrese captcha"/>
          </div>
        </div>
        <div className='mb-[2px]'>
          <input type="checkbox" id="terms"/>
          <label htmlFor="terms" className='form-label ml-[12px]'>
            Acepto los 
            <a href="" className='text-link font-bold'> Términos y políticas de privacidad</a>
          </label>
        </div>
        <div className='mb-[13px]'>
          <input type="checkbox" id="personals"/>
          <label htmlFor="personals" className='form-label ml-[12px]'>
            Acepto el   
            <a href="" className='text-link font-bold'> Uso de datos personales</a>
          </label>
        </div>
        <button type="submit" className='form-button'>Registrarme</button>
      </form>
      <p className='mt-6 text-center text-gray text-[14px]'>Aprovecha las mejores ofertas y descuentos en cerdo, congelados, embutidos <span className='text-red font-extrabold'>y mucho más.</span> No te pierdas de nada estos Cyberdays registrándote y obteniendo grandes descuentos exclusivos.</p>
    </div>
  )
}

export default Form
