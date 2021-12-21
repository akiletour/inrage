import PropTypes from 'prop-types';
import LoadIcon from './icons/Load';

export default function Button({
  className, submit, isLoading, children,
}) {
  return (
    <button disabled={isLoading} type={submit ? 'submit' : 'button'} className={`button relative ${className}`}>
      {isLoading && (
      <div className="absolute inset-0 bg-orange-dark justify-center z-10 flex items-center">
        <LoadIcon />
      </div>
      )}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  submit: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  isLoading: false,
  submit: false,
};
