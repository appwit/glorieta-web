import Link from 'next/link';
import PropTypes from 'prop-types';

function IconLink({ url, icon: Icon }) {
  return (
    <Link href={url}>
      <a className="fill-white hover:fill-gray ml-3" rel="noopener noreferrer" target="_blank">
        <Icon />
      </a>
    </Link>
  );
}

IconLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default IconLink;
