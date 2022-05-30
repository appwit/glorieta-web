import PropTypes from 'prop-types';

function Logo({ width = 150 }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      style={{
        width: '100%',
        maxWidth: width,
      }}
      className="transition-all duration-300 ease-in-out"
      alt="Marisquería La Glorieta"
      src="/img/logo.png"
    />
  );
}

Logo.propTypes = {
  width: PropTypes.number,
};

export default Logo;
