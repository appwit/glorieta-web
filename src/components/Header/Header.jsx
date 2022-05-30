import PropTypes from 'prop-types';
import Link from 'next/link';
import clsx from 'clsx';

import Logo from '../Logo';
import IconLink from '../IconLink';
import { Facebook, Instagram } from '../../icons';
import { useScrollPosition } from '../../hooks';

function Header() {
  const scrollPos = useScrollPosition();

  return (
    <header
      className={clsx(
        'fixed w-full z-40 transition-all duration-300 ease-in-out h-[100px] flex items-center',
        scrollPos >= 100 && 'bg-bg/50 backdrop-blur h-[60px]'
      )}
    >
      <div className="container flex items-center justify-between py-0 h-full">
        <Link href="/">
          <a className="flex items-center">
            <Logo width={scrollPos >= 100 ? 50 : 100} />
          </a>
        </Link>

        <div className="flex items-center">
          <nav className="text-md leading-6 font-semibold text-slate-700">
            <ul className="flex space-x-8">
              <li>Nuestra Historia</li>
              <li>Menú</li>
              <li>Contacto</li>
            </ul>
          </nav>
          <div className="flex items-center justify-end ml-5">
            <IconLink
              url="https://www.facebook.com/marisquerialaglorietaportales/"
              icon={Facebook}
            />
            <IconLink url="https://instagram.com" icon={Instagram} />
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
