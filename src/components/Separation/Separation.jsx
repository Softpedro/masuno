import separation from '../../assets/images/separation.svg'

const Separation = () => {
  return (
    <div className='relative flex justify-center mt-12'>
      <span className='absolute h-0.5 bg-blue w-full inset-0 m-auto'></span>
      <figure className='relative bg-white px-10'>
        <img src={separation} alt=""/>
      </figure>
    </div>
  )
}

export default Separation
