import Image from 'next/image';

export default function Prestations() {
  return (
    <div className="flex relative container mt-6 lg:-mt-12">
      <div className="hidden lg:block overflow-hidden absolute lg:right-[60%]">
        <div className="w-[697px] h-[736px] relative">
          <Image
            className="max-h-[736px]"
            src="/images/presentation-prestations.png"
            width={697}
            height={736}
            alt="Création de site Internet sur la rochelle"
          />
        </div>
      </div>
      <div className="lg:ml-[45%] relative lg:h-[736px] flex items-center">
        <div>

          <h2 className="uppercase font-bold text-white text-2xl leading-7">
            CRÉATION DE SITE INTERNET SUR LA ROCHELLE
            <span className="font-light block text-xl">ET PARTOUT EN FRANCE</span>
          </h2>

          <div className="text-gray-light text-xl mt-4">
            <p>
              Je vous accompagne de A à Z dans la création de votre site internet et vous propose
              la solution idéale pour répondre à vos problématiques techniques, graphiques et
              budgétaires.
            </p>
            <p>
              Afin de mener à bien votre projet, j’analyse en détail les besoins de votre activité
              pour identifier vos enjeux et y répondre le plus efficacement par une solution
              sur-mesure.
            </p>
          </div>

          <p className="mt-2">
            Je reste constamment à l&apos;affût des nouvelles technologies web et assure une veille
            graphique régulière afin de vous proposer les fonctionnalités les plus récentes et
            performantes, au sein d’un design élégant et percutant.
          </p>
          <p className="mt-2">
            Je suis en mesure d’intervenir sur tous types de projets (boutique,
            site vitrine, apps...) grâce à mon expertise sur des CMS variés, tels que Joomla,
            Prestashop ou encore Wordpress. Et comme la création d’un site internet ne s’achève pas
            à sa mise en ligne, j’assure le support technique de votre outil 7j/7 et vous propose
            des offres de maintenance TMA pour le protéger tout au long de l’année.
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      pageTitle: 'Prestations sous WordPress, Prestashop et Symfony',
    },
  };
}
