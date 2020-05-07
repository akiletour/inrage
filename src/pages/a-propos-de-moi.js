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
import Character from '../components/Character'

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
  margin-top: ${space(5)};

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

const CharacterWrapper = styled.div`
  display: flex;
  margin-top: ${space(8)};
  line-height: 1.5em;

  h3 {
    color: #fff;
    font-size: 24px;
  }
`

const Networks = styled.div`
  display: grid;
  grid-gap: ${space(2)};
  grid-auto-flow: column;
  justify-content: flex-start;

  svg path {
    transition: all 350ms;
  }

  a:hover {
    svg {
      path {
        fill: var(--primary);
      }
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
            <div style={{ marginTop: space(5) }}>
              <Button to="/contact/">Contactez-moi</Button>
            </div>
          </Intro>
        </Wrapper>

        <Diagonal
          bgColor={ColorDarker}
          pushColor={ColorDark}
          style={{ marginTop: -140 }}
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
        <Diagonal
          readmoreLink="/"
          readmoreText={['Voir tous', <br />, 'les projets']}
        />
      </FullSize>

      <SectionTitle as={2} title="En savoir plus">
        Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant
        le formulaire de la page contact, je serai ravi de vous répondre.
      </SectionTitle>

      <CharacterWrapper>
        <Character />
        <div style={{ marginLeft: space(4) }}>
          <h3>Pascal GAULT</h3>
          <p>
            Dès mon plus jeune âge, je commence à découvrir le monde du
            développement en créant mes premiers sites liés à mes associations
            de jeux vidéos. C’est à partir de cette époque que j’ai continué
            dans cette voie pour me professionnaliser dans la création numérique
            et en faire mon métier sur La Rochelle.
          </p>

          <p>
            L’art et la technologie ont toujours été deux inspirations de ma vie
            courante. Je viens d’un milieu artistique, qui a fusionné avec la
            technologie pour finir par évoluer dans le développement web.
          </p>

          <p>
            Je suis guidé par la passion, le souci du détail individuel,
            structuré et organisé. Je suis impatient de voir où ma carrière va
            m’emmener dans les mois ou les années à venir.
          </p>

          <p>
            Je continue à travailler et apprendre tous les jours, trouver de
            nouvelles technologies pour faire évoluer cette passion; et pouvoir
            appliquer cela tous les jours dans mon travail.
          </p>

          <h3>Ce site</h3>

          <p>
            Ce site est mon croquis numérique, mon journal et mon air de jeu
            dans l’expérimentation de nouvelles technologies. Je suis
            constamment en train d’y implémenter de nouvelles fonctionnalités,
            et parfois même faire des erreurs. Tout pour un seul objectif,
            continuer d’apprendre.
          </p>
          <p>
            J’espère que les gens qui visiteront mon portfolio aimeront autant
            que j’ai apprécié de le développer. En espérant qu’ils trouveront de
            l’inspiration et pourquoi pas, nous permettre de travailler
            ensemble.
          </p>

          <h3>Mes réseaux sociaux</h3>
          <Networks>
            <a
              href="https://www.facebook.com/inragefr"
              target="_blank"
              title="Facebook"
              rel="noreferrer noopener"
            >
              <svg
                height={60}
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M400 32H48C21.4903 32 0 53.4903 0 80v352c0 26.5097 21.4903 48 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400c26.5097 0 48-21.4903 48-48V80c0-26.5097-21.4903-48-48-48z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/akiletour"
              target="_blank"
              title="Twitter"
              rel="noreferrer noopener"
            >
              <svg
                height={60}
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3-18.2715-12.1536-29.2359-32.6556-29.2-54.6 0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/akiletour/"
              target="_blank"
              title="LinkedIn"
              rel="noreferrer noopener"
            >
              <svg
                height={60}
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
            <a
              href="https://www.malt.fr/profile/pascalgault"
              target="_blank"
              title="Malt"
              rel="noreferrer noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="60"
                viewBox="0 0 26 26"
              >
                <path
                  fill="#fff"
                  d="M9.662 22.319c0 2.217 1.427 3.471 3.201 3.478.005 0-.004 0 0 0 1.768 0 3.227-1.69 3.234-3.478l-3.236-3.312-3.199 3.312zM8.525 3.604a3.18 3.18 0 00-2.254-1.002 3.18 3.18 0 00-2.295.902 3.281 3.281 0 00-.099 4.599l.48.507 6.803.03 1.095-1.098-3.73-3.938zm13.38 14.127l-.48-.507-6.803-.03-1.094 1.097 3.729 3.938a3.198 3.198 0 004.55.1 3.282 3.282 0 00.098-4.598zm.25-8.028l-6.521 6.478 6.917.03h.014a3.18 3.18 0 002.265-.943c.608-.606.95-1.433.952-2.296.007-1.793-1.39-3.315-3.627-3.269zM3.23 9.623h-.015a3.177 3.177 0 00-2.264.942A3.25 3.25 0 000 12.861c-.004.869.162 3.266 3.68 3.266l6.468-6.474-6.917-.03zM22.045 3.74a3.195 3.195 0 00-4.55-.019L3.756 17.492a3.281 3.281 0 00-.02 4.6 3.195 3.195 0 004.551.019l13.739-13.77a3.282 3.282 0 00.02-4.6m-5.67-.264c0-2.216-1.426-3.47-3.2-3.477-.005 0 .004 0 0 0-1.768 0-3.227 1.689-3.234 3.478l3.236 3.311 3.199-3.312z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/akiletour/"
              target="_blank"
              rel="noreferrer noopener"
              title="Github"
            >
              <svg
                height={60}
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          </Networks>
        </div>
      </CharacterWrapper>
    </Wrapper>
  )
}
