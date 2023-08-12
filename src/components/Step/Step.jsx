import PropTypes from 'prop-types';

const Step = (props) => {
  
  return (
    <div className='w-full'>
      <p className='text-link text-[32px] font-bold text-center mb-[18px]'>{props.title}</p>
      <figure className='bg-link w-[244px] h-[244px] rounded-full flex justify-center items-center m-auto border-solid border-[#BBBBBB] border-8'>
        <img src={props.image} alt="" />
      </figure>
      <span className='mt-[30px] block text-center text-[32px] text-link font-bold'>{props.categoria}</span>
      <p className='mt-[26px] text-center max-w-[360px] m-auto'>{props.description}</p>
    </div>
  )
};

Step.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Step
