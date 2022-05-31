import SectionTitle from '../SectionTitle';

function Contact() {
  return (
    <section className="">
      <div className="p-8 pb-10 w-[100%] max-w-[400px] text-blue mx-auto">
        <SectionTitle>Contacto</SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <iframe
          className="w-[100%] min-h-[350px] h-[100%] border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1216058617497!2d-99.14812828499389!3d19.363886486923352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffb536c08fcd%3A0x963d05deb8b5664e!2sMarisquer%C3%ADa%20La%20Glorieta!5e0!3m2!1ses-419!2smx!4v1653963979181!5m2!1ses-419!2smx"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="px-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit possimus,
            dolore qui consequatur ex consectetur a, cumque laudantium labore ut veniam eveniet
            doloremque velit molestiae quod, totam natus blanditiis.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
