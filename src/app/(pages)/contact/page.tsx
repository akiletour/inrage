import ContactForm from '@component/ContactForm';
import Layout from '@component/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="container flex flex-col sm:flex-row">
        <div className="flex-none sm:w-[260px] text-center sm:text-right mb-6 sm:mb-0 sm:mr-8">
          <div className="text-orange font-bold text-4xl">
            inRage <span className="font-light">SARL</span>
          </div>
          <p className="leading-6 text-lg text-gray-light mt-1">
            Développeur et créateur
            <br />
            Freelance sur La Rochelle
          </p>

          <p className="mt-5">
            Siret: 813 430 592 00010
            <br />
            NAF: 6201Z
            <br />
            Immatriculé au RCS :
            <br />
            La Rochelle 813 430 592
          </p>

          <p className="mt-2 mb-4">
            10 rue Jean Perrin
            <br />
            17000 LA ROCHELLE
          </p>

          <p className="leading-5">
            Vous n&apos;êtes pas fan des e-mails ?
            <br />
            N&apos;hésitez pas à me téléphoner pour discuter de votre projet
          </p>

          <div className="text-orange font-bold text-3xl mt-2">
            06 51 89 89 17
          </div>
          <div className="text-sm">du lundi au samedi de 10h à 19h</div>
        </div>
        <div className="flex-1">
          <ContactForm lg />
        </div>
      </div>
    </Layout>
  );
}
