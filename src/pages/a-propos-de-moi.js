import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Wrapper } from '../components/styles/Wrapper'
import Button from '../components/Button'
import FullSize from '../components/styles/FullSize'
import Diagonal from '../components/styles/Diagonal'
import { ColorDark, ColorDarker } from '../components/styles/GlobalStyles'
import SectionTitle from '../components/SectionTitle'
import { space } from '../components/styles/functions'
import LinkInline from '../components/styles/LinkInline'
import LogoMDM from '../images/experiences/moonscoop_digital_media.png'
import LogoMegami from '../images/experiences/megami-productions.png'
import LogoCOS from '../images/experiences/comonscreen.png'
import LogoKamelab from '../images/experiences/kamelab.png'

const Intro = styled.div`
  h1 {
    color: #fff;
    font-family: Lato, sans-serif;
    font-size: 1.9em;
    text-transform: uppercase;
    line-height: 1.2;

    span {
      font-weight: 300;
      display: block;
      font-size: 0.9em;
    }
  }

  p {
    &:first-of-type {
      font-size: 1.24rem;
      color: #b3b3b3;
    }
  }
`

const Exp = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${space(4)};

  .image {
    margin-right: ${space(3)};
    width: 210px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 130px;
      height: auto;
    }
  }

  .info {
    &__function {
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      line-height: 1.5;
    }

    &__title {
      text-transform: uppercase;
      color: #fff;
      line-height: 1.4;
      font-family: Poppins, sans-serif;
    }

    &__date {
      display: grid;
      align-items: center;
      grid-auto-flow: column;
      grid-gap: ${space(1)};
      justify-items: flex-start;
      justify-content: flex-start;
      margin-bottom: ${space(2)};

      span {
        display: flex;
        align-items: center;

        + span {
          &::before {
            content: 'x';
            color: var(--primary);
            margin-right: ${space(1)};
            font-size: 14px;
          }
        }
      }
    }

    &__projects {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: ${space(2)};
      grid-gap: ${space(1)};
    }
  }
`

export default () => {
  const items = [
    {
      image: LogoMDM,
      position: 'Développeur Joomla',
      title: 'Moonscoop Digital Media, La Rochelle, France',
      date: 2008,
      duration: '4 ans',
      content:
        "Membre d'une équipe de 3 développeurs. Développement de site client basé sur le CMS Joomla et PHP.",
      projects: [
        {
          title: 'KZPlay',
          link: 'https://animedigitalnetwork.fr/',
        },
      ],
    },
    {
      image: LogoMegami,
      position:
        'Développeur Joomla, WordPress, Prestashop et administrateur système',
      title: 'Moonscoop Digital Media, La Rochelle, France',
      date: 2012,
      duration: '7 ans',
      content: [
        'Responsable de toute la partie Web et réseau de la société. Développeur et Intégrateur.',
        <br />,
        "Gestion et maintenance de l'architecture des serveurs AWS, Debian, Docker.",
      ],
      projects: [
        {
          title: 'Colmax',
          link: '/portfolio',
        },
        {
          title: 'Mes Lentilles Discount',
          link: '/portfolio',
        },
      ],
    },
    {
      image: LogoCOS,
      position:
        'Développeur Joomla, WordPress, Prestashop et administrateur système',
      title: "Com' On Screen, La Rochelle / Paris, France",
      date: 2012,
      duration: '7 ans',
      content: [
        'Responsable de toute la partie Web et réseau de la société. Développeur et Intégrateur.',
        <br />,
        "Gestion et maintenance de l'architecture des serveurs AWS, Debian, Docker.",
      ],
      projects: [
        {
          title: 'ESC Distribution',
          link: '/portfolio',
        },
        {
          title: 'Plastoy',
          link: '/portfolio',
        },
        {
          title: 'CTF Performance',
          link: '/portfolio',
        },
        {
          title: 'Decroly',
          link: '/portfolio',
        },
        {
          title: 'Dernier bar avant la fin du monde',
          link: '/portfolio',
        },
      ],
    },
    {
      image: LogoKamelab,
      position: 'Développeur WordPress, Prestashop et DevOps',
      title: 'Kamélab, La Rochelle, France',
      date: 'Depuis 2018',
      duration: '',
      content: [
        'Responsable technique, développeur, DevOps et co-gérant de la société Kamélab aux côtés de',
        <br />,
        'notre spécialiste webmarketing Johann Hébert et notre graphiste Romain Ouvrard.',
      ],
      projects: [
        {
          title: 'La Motte Aubert',
          link: '/portfolio',
        },
        {
          title: 'La ferme des sens',
          link: '/portfolio',
        },
        {
          title: 'Kamélab',
          link: '/portfolio',
        },
      ],
    },
  ]
  return (
    <Wrapper>
      <FullSize>
        <Wrapper>
          <Intro>
            <h1>
              Pascal GAULT, Développeur et Créateur{' '}
              <span>Freelance basé à La Rochelle</span>
            </h1>
            <p>
              Développeur Web depuis 15 ans dans les agences web à La Rochelle.
              Expert dans le développement et spécialisé sur Symfony, WordPress
              et Prestashop. Je travaille aujourd'hui en tant que Développeur
              Web Freelance à La Rochelle.
            </p>
            <p>
              Une de mes plus importantes et gratifiantes décisions pour ma
              carrière que j’ai faite. De ce fait, j’ai l’opportunité de
              travailler sur les différents aspects de la conception, de la
              stratégie, de la gestion et de la planification jusqu’à la
              production complète de ce projet.
            </p>
            <p>
              Je suis aussi devenu plus intéressé par l’aspect commercial des
              projets, de plus en plus conscient de l’importance d’intégrer les
              décisions commerciales responsables de l’atteinte des objectifs
              d’affaires.
            </p>
            <p>
              Un projet, des questions ? N'hésitez pas à me contacter pour en
              discuter !
            </p>
            <Button to="/contact/">Contactez-moi</Button>
          </Intro>
        </Wrapper>

        <Diagonal
          bgColor={ColorDarker}
          pushColor={ColorDark}
          style={{ marginTop: -100 }}
        />
      </FullSize>

      <FullSize style={{ backgroundColor: ColorDarker }}>
        <Wrapper>
          <SectionTitle as={2} title="Expériences">
            La liste de mes expériences professionnelles que j'ai acquise au fil
            de mes années de Développeur en tant que salarié et indépendant.
          </SectionTitle>

          <div>
            {items.map(
              (
                {
                  image,
                  position,
                  title,
                  duration,
                  date,
                  content,
                  projects = [],
                },
                index
              ) => (
                <Exp key={index}>
                  <div className="image">
                    <img src={image} alt="" />
                  </div>
                  <div className="info">
                    <div className="info__function">{position}</div>
                    <div className="info__title">{title}</div>
                    <div className="info__date">
                      <span>{date}</span>
                      <span>{duration}</span>
                    </div>
                    <div className="info__desc">
                      {Array.isArray(content)
                        ? content.map((contentItem, ckey) => (
                            <Fragment key={ckey}>{contentItem}</Fragment>
                          ))
                        : content}
                    </div>
                    <div className="info__projects">
                      {projects.map((project, pKey) => (
                        <div key={pKey}>
                          <LinkInline to={project.link}>
                            {project.title}
                          </LinkInline>
                        </div>
                      ))}
                    </div>
                  </div>
                </Exp>
              )
            )}
          </div>
        </Wrapper>
      </FullSize>
    </Wrapper>
  )
}
