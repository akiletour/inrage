import React from 'react'
import styled from 'styled-components'
import { space } from './styles/functions'
import PrestationItem from './PrestationItem'
import ImageMakeWebsite from '../images/prestation-creation-site-internet.png'
import ImageMaintenanceTMA from '../images/prestation-infogerance-tma-maintenance.png'
import ImageHosting from '../images/prestation-hebergement-optimise-rapide.png'

const Highlight = styled.div`
  color: #fff;
  font-weight: 900;
  line-height: 1.3em;
  font-size: 24px;
  font-family: Lato, sans-serif;
  margin: ${space(7)} ${space(5)} ${space(5)};
  text-align: center;

  @media (max-width: 800px) {
    font-size: 18px;
    margin: ${space(3)} 0;
  }
`

const PrestationList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  align-items: stretch;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    > * + * {
      margin-top: ${space(5)};
    }
  }

  > * {
    padding: 0 ${space(2)};
  }
`

export default () => (
  <>
    <Highlight>
      Je suis entouré d'une équipe fondée de créatifs, designers et
      développeurs. Nous travaillons ensemble pour créer des choses inspirantes
      et engagées.
    </Highlight>

    <PrestationList>
      <PrestationItem
        key="pre-item-1"
        icon={ImageMakeWebsite}
        title={['Conception / Refonte', <br />, 'de sites Internet']}
        content="Sites vitrines, associatifs, e-commerce ou dédiés. Je vous accompagne dès la genèse de votre projet pour vous proposer des solutions puissantes et performantes et répondre le plus efficacement aux enjeux de votre activité. Je suis expert dans la création de site sur les CMS Joomla, WordPress et Prestashop."
        buttonLink="/#test"
      />
      <PrestationItem
        key="pre-item-2"
        icon={ImageMaintenanceTMA}
        title={['Maintenance &', <br />, 'Infogérance']}
        content="La maintenance d’un site internet s’avère complexe lorsqu’on ne dispose pas du bagage technique nécessaire voire le temps de s’en occuper. Pour ces tâches délicates et chronophages, je vous propose de prendre le relai et d’assurer pour vous la gestion de vos sauvegardes, ainsi que la maintenance et la sécurité de votre serveur dans sa globalité."
        buttonLink="/#test"
      />
      <PrestationItem
        key="pre-item-3"
        icon={ImageHosting}
        title={['Hébergement optimisé &', <br />, 'ultra rapide']}
        content="Lorsque vous souhaitez mettre en ligne un site, il est nécessaire de choisir une offre d’hébergement parmis une foule d’offres et de prestataires. Nos offres d’hébergement sont transparentes et sans frais cachés. Un expert de notre partenaire Dutiko analyse votre projet ainsi que votre demande pour vous proposer l’offre idéale pour la nature de votre site web."
        buttonLink="/#test"
      />
    </PrestationList>
  </>
)
