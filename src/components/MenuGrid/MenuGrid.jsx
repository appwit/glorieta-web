import { useRef } from 'react';
import Link from 'next/link';

import MenuGridItem from '../MenuGridItem/MenuGridItem';
import SectionTitle from '../SectionTitle';
import menuItems from './data';

function MenuGrid() {
  return (
    <section id="menu">
      <div className="p-8 pb-10 w-[100%] max-w-[400px] text-blue mx-auto">
        <SectionTitle>Menú</SectionTitle>
      </div>
      <div className="my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5">
        {menuItems.map((item, i) => (
          <MenuGridItem key={item.id} item={item} i={i} />
        ))}
      </div>
    </section>
  );
}

export default MenuGrid;
