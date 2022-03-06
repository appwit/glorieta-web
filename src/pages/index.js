import Head from 'next/head';

import Header from '../components/Header';
import Hero from '../components/Hero';
import OurHistory from '../components/OurHistory';

function Home() {
  return (
    <>
      <Head>
        <title>Marisquería La Glorieta</title>
        <meta
          name="description"
          content="Un lugar donde la comida es el máximo deleite. Garantizado por nuestra calidad y delicioso gusto. Ofrecemos pescados y mariscos de primera calidad, con máxima higiene, acompañados de un maravilloso servicio que brindamos con calidez, siempre manejando la excelencia en todos los sentidos."
        />
      </Head>
      <Header />

      <Hero />
      <OurHistory />
    </>
  );
}

export default Home;
