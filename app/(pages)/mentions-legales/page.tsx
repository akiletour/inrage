import Layout from '@component/Layout'
import { RouteLink, getCanonicalUrl } from '@lib/router'

export const metadata = {
  title: 'Mentions légales - inRage',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.legals),
  },
}

const LegalTitle = ({ children }: { children: string }) => {
  return (
    <h2 className={'mt-6 mb-2 text-white font-bold text-3xl'}>{children}</h2>
  )
}

export default function Legals() {
  return (
    <Layout title="Mentions légales">
      <div className="container">
        <LegalTitle>Propriétaire du site</LegalTitle>
        <p>
          Pascal GAULT
          <br />
          Société : inRage SARL
          <br />
          Adresse : 10 rue Jean Perrin 17000 LA ROCHELLE
          <br />
          Courriel : contact(at)inrage.fr
          <br />
          Tél : +33 (0)6 82 96 38 39
          <br />
        </p>

        <LegalTitle>Crédits</LegalTitle>

        <p>Ce site a été conçu, créé et développé par Pascal GAULT</p>

        <LegalTitle>Droits d&apos;auteur</LegalTitle>

        <p>
          Le présent site constitue une œuvre de l’esprit au sens des
          dispositions des articles L 111-1 et suivants du Code de la Propriété
          Intellectuelle et, à ce titre, Pascal GAULT bénéficie en sa qualité
          d’auteur d’une protection et des droits réservés par la loi. À ce
          titre Pascal GAULT ne concède aucune de ses licences ni aucun autre
          droit que celui de consulter le site. Les noms et marques citées sont
          copyright de leurs auteurs respectifs.
        </p>

        <LegalTitle>Conditions d&apos;utilisations</LegalTitle>

        <p>
          L’utilisation de ce service est réservée à un usage strictement
          personnel et privé. Toute reproduction ou représentation partielle ou
          totale à d’autres fins sur un quelconque support est interdite, sauf
          autorisation expresse et préalable de Pascal GAULT en sa qualité
          d’auteur. Le non-respect de cette interdiction constitue une
          contrefaçon pouvant engager la responsabilité civile et pénale du
          contrefacteur à l’encontre duquel Pascal GAULT se réserve la
          possibilité de réclamer l’indemnisation de son entier préjudice.
        </p>

        <LegalTitle>Remarques</LegalTitle>

        <p>
          Ce site internet permet un accès aux données de Pascal GAULT dans son
          ensemble. Les données qui y sont publiées sont fournies à titre
          d’information et ne sont en aucun cas contractuelles, ainsi ces
          données peuvent inclure des références à des techniques utilisés par
          Pascal GAULT. Malgré tout le soin apporté à la rédaction de ce site,
          Pascal GAULT ne peut pas garantir que le site soit exempt
          d’inexactitude, d’erreur, d’omission, de dysfonctionnement ou
          d’indisponibilité. Pascal GAULT peut, à tout moment et sans préavis,
          apporter des améliorations ou des changements aux services décrits sur
          ce site.
        </p>

        <LegalTitle>Hébergement</LegalTitle>

        <p>
          Le site <span className="underline">inrage.fr</span> est hébergé sur
          l&apos;infrastructure de Vercel Inc.
        </p>
        <p>San Francisco Bay Area, West Coast, Western US</p>
        <p>
          <a
            className="text-orange"
            href="https://vercel.com/"
            target={'_blank'}
            rel="noreferrer"
          >
            www.vercel.com
          </a>
        </p>
      </div>
    </Layout>
  )
}
