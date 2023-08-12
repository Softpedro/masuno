import PropTypes from 'prop-types';
import adorno from '../../assets/images/adorno_discount1.svg'

const Title = ({ content }) => {
  return (
    <h3 className="text-link text-[32px] font-extrabold text-center mt-10">
      {content}
      <img src={adorno} className='block m-auto' alt="" />
    </h3>
  )
}

Title.propTypes = {
  content: PropTypes.string.isRequired,
};


export default Title
