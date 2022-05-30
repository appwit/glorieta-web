import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Menu | Marisquería La Glorieta</title>
        <meta
          name="description"
          content="Un lugar donde la comida es el máximo deleite. Garantizado por nuestra calidad y delicioso gusto. Ofrecemos pescados y mariscos de primera calidad, con máxima higiene, acompañados de un maravilloso servicio que brindamos con calidez, siempre manejando la excelencia en todos los sentidos."
        />
      </Head>

      <div className="p-8 pb-10 w-[100%] max-w-[400px] text-blue mx-auto">
        <h1 className="text-4xl text-center relative grid grid-cols-[1fr_auto_1fr] grid-rows-[23px_0] gap-2 font-bold after:content-[' '] after:block after:border-b-2 after:border-red after:border-solid before:content-[' '] before:block before:border-b-2 before:border-red before:border-solid">
          Menú
        </h1>
      </div>
    </>
  );
}

export default Home;
