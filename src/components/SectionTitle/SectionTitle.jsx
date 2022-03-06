import PropTypes from 'prop-types';

function SectionTitle({ children }) {
  return (
    <h3 className="text-4xl text-center relative grid grid-cols-[1fr_auto_1fr] grid-rows-[23px_0] gap-2 font-bold after:content-[' '] after:block after:border-b-2 after:border-red after:border-solid before:content-[' '] before:block before:border-b-2 before:border-red before:border-solid">
      {children}
    </h3>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
