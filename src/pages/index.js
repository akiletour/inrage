import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import SectionTitle from '../components/SectionTitle'
import { Wrapper } from '../components/styles/Wrapper'
import IntroSkill from '../components/IntroSkill'
import Diagonal from '../components/styles/Diagonal'
import FullSize from '../components/styles/FullSize'
import { space } from '../components/styles/functions'
import { ColorDarker, ColorPrimary } from '../components/styles/GlobalStyles'
import LastProjectSlider from '../components/LastProjectsSlider'
import InnerPrestationList from '../components/InnerPrestationList'
import BackgroundKeyppoints from '../images/yohann-tilotti_bloody-sky.jpg'
import { ReactComponent as CoffeeIcon } from '../images/icons/coffee.svg'
import { ReactComponent as CompanyIcon } from '../images/icons/company.svg'
import IconKeypoint from '../components/styles/IconKeypoint'
import BlogList from '../components/BlogList'
import 'slick-carousel/slick/slick.css'

const ListKeypoints = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  justify-items: center;
  > * {
    align-self: center;
  }
`

const IndexPage = ({ data }) => (
  <Wrapper>
    <SEO title="Home" />
    <SectionTitle as={2} title="À propos">
      Développeur Freelance créatif et innovant basé au coeur de La Rochelle et
      spécialisé dans la création de site Internet.
    </SectionTitle>

    <IntroSkill />

    <FullSize style={{ marginTop: space(3), backgroundColor: '#000' }}>
      <Diagonal position={1} />
      <Wrapper style={{ color: 'white', textAlign: 'center' }}>
        <h2>Besoin d'une estimation de votre site et/ou de sa maintenance</h2>
        <p>
          Simple et en toute transparence, découvrez notre outil pour estimer le
          coût de votre projet. Si le budget est dans l’ordre de prix de vos
          attentes, nous pouvons vous faire une proposition commerciale et
          définir ensemble un cahier des charges complet de vos fonctionnalités.
        </p>
      </Wrapper>
      <Diagonal bgColor={ColorDarker} />
    </FullSize>

    <FullSize style={{ backgroundColor: ColorDarker }}>
      <Wrapper>
        <SectionTitle as={2} title="Projets">
          Consultez mes dernières créations, atteignant tous, l’esthétique du
          détail et de la fonctionnalité qui me démarque du reste en tant que
          développeur Freelance.
        </SectionTitle>
      </Wrapper>

      <div style={{ padding: space(3), paddingBottom: 0 }}>
        <LastProjectSlider slidesToShow={5} />
      </div>

      <Diagonal
        readmoreLink="/"
        readmoreText={['Voir tous', <br />, 'les projets']}
        pushColor={ColorDarker}
        style={{ marginTop: '-40px' }}
      />
    </FullSize>

    <SectionTitle as={2} title="Expertises">
      Je fournis une large gamme de services axée sur les résultats pour les
      marques, assurer leur présence en ligne pour refléter réellement leurs
      objectifs et leurs inspirations.
    </SectionTitle>

    <InnerPrestationList />

    <FullSize>
      <div
        style={{
          backgroundSize: 'cover',
          backgroundPosition: '24%',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${BackgroundKeyppoints})`,
        }}
      >
        <Diagonal position={1} />
        <Wrapper>
          <ListKeypoints>
            <IconKeypoint
              icon={<CoffeeIcon />}
              number={2356}
              title="tasses à café"
            />
            <IconKeypoint
              icon={<CompanyIcon />}
              number={352}
              title="projects"
            />
            <IconKeypoint
              icon={<CompanyIcon />}
              number="15 années"
              title="d'expérience"
            />
            <IconKeypoint
              icon={<CompanyIcon />}
              number="+150 idées"
              title="à développer avec vous"
            />
          </ListKeypoints>
        </Wrapper>
        <Diagonal bgColor={ColorDarker} />
      </div>
    </FullSize>

    <FullSize style={{ backgroundColor: ColorDarker }}>
      <Wrapper>
        <SectionTitle as={2} title="Articles">
          Passionnés par les nouvelles technologies, j'adore partager mes
          compétences et mes découvertes avec des personnes qui ont cette même
          passion pour le web !
        </SectionTitle>

        {data.allMdx && <BlogList articles={data.allMdx} />}
      </Wrapper>
      <Diagonal
        readmoreLink="/blog/"
        readmoreText={['Voir tous', <br />, 'les articles']}
      />
    </FullSize>

    <SectionTitle as={2} title="Contact">
      Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant
      le formulaire ci-dessous, je serais ravis de vous répondre.
    </SectionTitle>
  </Wrapper>
)
export default IndexPage

export const pageQuery = graphql`
  query latestArticles($skip: Int! = 0) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      filter: { fields: { collection: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            collection
            slug
          }
          frontmatter {
            title
            date
            category
          }
        }
      }
    }
  }
`
