import PropTypes from 'prop-types';

function Button(props) {
  Button.defaultProps = {
    name: '',
    className: '',
    onClick: () => {},
  };
  Button.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
  };
  const { name, className, onClick } = props;

  return (
    <button type="button" name={name} className={className} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
