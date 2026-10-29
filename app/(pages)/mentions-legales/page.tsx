import Link from 'next/link'

import Reveal from '@component/home/Reveal'
import Layout from '@component/Layout'
import { RouteLink, getCanonicalUrl } from '@lib/router'
import { breadcrumbJsonLd, serializeJsonLd } from '@util/seo-generators'

export const metadata = {
  title: 'Mentions légales | inRage',
  description:
    'Mentions légales du site inrage.fr, édité par inRage SARL, Pascal Gault, développeur web freelance à La Rochelle.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.legals),
  },
}

const SECTIONS = [
  { id: 'editeur', title: 'Éditeur du site' },
  { id: 'droits', title: 'Droits d’auteur' },
  { id: 'utilisation', title: 'Conditions d’utilisation' },
  { id: 'remarques', title: 'Remarques' },
  { id: 'cookies', title: 'Cookies et mesure d’audience' },
  { id: 'hebergement', title: 'Hébergement' },
]

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 leading-7 text-white/85">{children}</div>
    </section>
  )
}

export default function Legals() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd([
        { name: 'Mentions légales', item: getCanonicalUrl(RouteLink.legals) },
      ]),
    ],
  }

  return (
    <Layout
      hero={
        <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-16 md:pb-20">
          <div className="home-beam top-[30%] -left-[20%]" aria-hidden />
          <div className="container pt-6 md:pt-12">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
                Mentions légales
              </h1>
            </Reveal>
            <Reveal i={1}>
              <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
                Qui édite inrage.fr, où il est hébergé, ce que vous pouvez en
                faire et comment son audience est mesurée.
              </p>
            </Reveal>
          </div>
        </section>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="container pt-4 pb-20 md:pb-28 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="mb-12 lg:mb-0">
          <nav aria-label="Sections" className="lg:sticky lg:top-28">
            <p className="text-sm font-medium text-white">Sur cette page</p>
            <ol className="mt-4 space-y-2 border-l border-white/10">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm leading-6 text-(--home-muted) transition-colors hover:border-(--home-orange) hover:text-white"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="max-w-[68ch] space-y-14">
          <Section id="editeur" title="Éditeur du site">
            <p>
              inRage SARL, représentée par Pascal Gault
              <br />
              10-14 rue Jean Perrin, 17000 La Rochelle
              <br />
              Siret 813 430 592 00010, RCS La Rochelle
              <br />
              Courriel : contact(at)inrage.fr, téléphone :{' '}
              <a href="tel:0682963889" className="home-link">
                06 82 96 38 89
              </a>
            </p>
            <p>Ce site a été conçu, créé et développé par Pascal Gault.</p>
          </Section>

          <Section id="droits" title="Droits d’auteur">
            <p>
              Le présent site constitue une œuvre de l’esprit au sens des
              articles L 111-1 et suivants du Code de la propriété
              intellectuelle. Pascal Gault bénéficie, en sa qualité d’auteur, de
              la protection et des droits réservés par la loi et ne concède
              aucune licence ni aucun autre droit que celui de consulter le
              site. Les noms et marques cités appartiennent à leurs
              propriétaires respectifs.
            </p>
          </Section>

          <Section id="utilisation" title="Conditions d’utilisation">
            <p>
              L’utilisation de ce site est réservée à un usage strictement
              personnel et privé. Toute reproduction ou représentation,
              partielle ou totale, à d’autres fins et sur quelque support que ce
              soit est interdite sans l’autorisation expresse et préalable de
              Pascal Gault. Le non-respect de cette interdiction constitue une
              contrefaçon pouvant engager la responsabilité civile et pénale du
              contrefacteur.
            </p>
          </Section>

          <Section id="remarques" title="Remarques">
            <p>
              Les informations publiées sur ce site sont fournies à titre
              indicatif et ne sont pas contractuelles. Malgré le soin apporté à
              leur rédaction, Pascal Gault ne peut garantir que le site soit
              exempt d’inexactitude, d’erreur, d’omission ou d’indisponibilité,
              et peut à tout moment et sans préavis modifier les services qui y
              sont décrits.
            </p>
          </Section>

          <Section id="cookies" title="Cookies et mesure d’audience">
            <p>
              Ce site utilise Google Tag Manager et Google Analytics 4 pour
              mesurer son audience. Ces outils ne déposent de cookies qu’après
              votre accord, donné dans le bandeau affiché à la première visite.
              Sans accord, seuls des signaux anonymes, sans cookie ni
              identifiant, sont envoyés à Google (mode consentement).
            </p>
            <p>
              Votre choix est conservé treize mois sur votre navigateur et peut
              être modifié à tout moment depuis le lien « Gérer les cookies » en
              pied de page.
            </p>
          </Section>

          <Section id="hebergement" title="Hébergement">
            <p>
              Le site inrage.fr est hébergé sur les serveurs d’inRage, installés
              dans une baie du centre de données OVHcloud de Gravelines (Nord,
              France). Les données ne quittent pas la France.
            </p>
            <p>
              OVH SAS, 2 rue Kellermann, 59100 Roubaix, France,{' '}
              <a
                href="https://www.ovhcloud.com/fr/"
                target="_blank"
                rel="noreferrer"
                className="home-link"
              >
                www.ovhcloud.com
              </a>
              . Le détail de l’infrastructure est décrit sur la page{' '}
              <Link href={RouteLink.prestationHosting} className="home-link">
                hébergement de site internet
              </Link>
              .
            </p>
          </Section>
        </div>
      </div>
    </Layout>
  )
}
