import SectionTitle from '../SectionTitle';

function OurHistory() {
  return (
    <section id="historia" className="flex flex-col md:flex-row md:items-center">
      <div className="p-8 pb-10 w-[100%] md:w-[40%] text-center text-blue">
        <SectionTitle>Nuestra Historia</SectionTitle>
      </div>
      <div className="container text-xl bg-blue text-white  w-[100%] md:w-[60%]">
        <p>
          Nuestra tradición inició en la ciudad de Cuernavaca, Morelos justo al lado de la imponente
          Glorieta de Emiliano Zapata; de ahí se desprende nuestro nombre, la esencia de un servicio
          de excelencia, con platillos de gran calidad y un ambiente familiar.
        </p>
        <br />
        <p>
          Nuestra misión es resaltar el estilo de la cocina regional, preparada a base de pescado y
          mariscos de la más alta calidad, frescura y variedad. Nuestros clientes fueron testigos de
          una nueva corriente en la preparación de alimentos y la evolu- ción para ofrecerte
          excelencia en nuestros platillos.
        </p>
        <br />
        <p>
          Parte de nuestra visión es el trascender como empresa familiar con el privilegio de
          servirte magníficos sabores del mar cerca de tu hogar en la icónica colonia Portales.
        </p>
      </div>
    </section>
  );
}

export default OurHistory;
