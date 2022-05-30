import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

function MenuGridItem({ item, i }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/menu#${item.id}`}>
      <a
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={clsx(
          'w-full min-h-[250px] rounded-lg overflow-hidden relative',
          i === 15 && 'md:col-start-2'
        )}
      >
        <div
          style={{
            background: `url('/img/${item.img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className={clsx(
            'absolute w-full h-full z-0 transition-all',
            !isHovered ? 'scale-105' : 'scale-125'
          )}
        />
        <p className="absolute w-full p-3 bg-red text-white text-center top-[50%] translate-y-[-50%]">
          {item.lable}
        </p>
      </a>
    </Link>
  );
}

export default MenuGridItem;
