import PropTypes from 'prop-types';

const Title = ({ content }) => {
  return (
    <h3 className="text-link text-[32px] font-extrabold text-center mt-10">{content}</h3>
  )
}

Title.propTypes = {
  content: PropTypes.string.isRequired,
};


export default Title
