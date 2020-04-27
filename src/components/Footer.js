import React from 'react'
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Wrapper } from './styles/Wrapper'
import Img from './Img'
import { space } from './styles/functions'
import Button from './Button'

const Footer = styled.div`
  background-color: var(--darker);
  font-size: 14px;
  padding-bottom: ${space(5)};

  .copyright {
    margin-bottom: ${space(1)};
  }

  .phone {
    color: var(--primary);
    font-size: 2rem;
    text-align: right;
    margin: ${space(2)} 0;
  }

  .legals {
    text-align: right;
    color: var(--light);
    line-height: 1.4em;
  }

  img {
    display: block;
  }

  ${Wrapper} {
    display: flex;
    justify-content: space-between;

    ul {
      display: grid;
      grid-auto-flow: column;
      grid-gap: ${space(2)};
      list-style: none;
      padding: 0;
      margin: ${space(2)} 0;

      > li > a {
        color: var(--primary);
        text-decoration: none;
      }
    }
  }
`

const FooterWave = styled.div`
  overflow: hidden;
  margin-top: ${space(5)};
  svg {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;

    .parallax > use {
      animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }

    .parallax > use:nth-child(1) {
      animation-delay: -2s;
      animation-duration: 7s;
    }

    .parallax > use:nth-child(2) {
      animation-delay: -3s;
      animation-duration: 10s;
    }

    .parallax > use:nth-child(3) {
      animation-delay: -4s;
      animation-duration: 13s;
    }

    .parallax > use:nth-child(4) {
      animation-delay: -5s;
      animation-duration: 20s;
    }

    @keyframes move-forever {
      0% {
        transform: translate3d(-90px, 0, 0);
      }

      100% {
        transform: translate3d(85px, 0, 0);
      }
    }
  }
`

export default () => (
  <>
    <FooterWave>
      <svg
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(20,20,20,0.7" />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(20,20,20,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(20,20,20,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#141414" />
        </g>
      </svg>
    </FooterWave>
    <Footer>
      <Wrapper>
        <div>
          <img
            height={67}
            src="/inragemono.png"
            alt="Voici le test de mon image"
          />
          <ul>
            <li>
              <Link to="/">À propos de moi</Link>
            </li>
            <li>
              <Link to="/">Prestations</Link>
            </li>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Contactez-moi</Link>
            </li>
          </ul>
          <div className="copyright">
            © 2008-{new Date().getFullYear()} - inRage SAS. Tous droits
            réservés.
          </div>
          <Link to="/">Mentions légales</Link>
        </div>
        <div style={{ textAlign: 'right', paddingTop: space(2) }}>
          <Button to="/contact">Demande de devis</Button>
          <div className="phone">06 51 89 89 17</div>
          <div className="legals">
            SIRET : 813 430 592 00010
            <br />
            R.C.S : La Rochelle 813 430 592
            <br />
            10-14 rue Jean Perrin, 17000 LA ROCHELLE
          </div>
        </div>
      </Wrapper>
    </Footer>
  </>
)
