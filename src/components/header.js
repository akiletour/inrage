import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../images/iledere-inrage.jpg'
import { Wrapper } from './styles/Wrapper'
import { space } from './styles/functions'
import Nav from './Nav'
import FooterImg from '../images/header-footer.svg'

const Welcome = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: 'Lato', sans-serif;

  span {
    display: block;
    color: #fff;

    &.site-brand {
      font-size: 95px;
      letter-spacing: -3px;
      font-weight: 300;
      color: var(--primary);

      @media (max-width: 435px) {
        font-size: 86px;
      }
    }

    &.site-author {
      font-size: 54px;
      font-weight: 400;
      font-family: 'Open Sans', sans-serif;

      @media (max-width: 435px) {
        font-size: 46px;
      }
    }

    &.site-punchline {
      font-weight: 700;
      font-size: 28px;
      letter-spacing: -0.5px;
      line-height: 1.4;
      max-width: 450px;
      margin-top: ${space(2)};

      @media (max-width: 455px) {
        font-size: 20px;
      }
    }
  }
`

const HeaderFooter = styled.div`
  width: 100%;
  margin-bottom: -1px;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }
`

const StyledHeader = styled.div`
  display: flex;
  background: url(${BackgroundImage});
  background-position: center center;
  background-size: cover;
  height: ${props => (props.isHome === true ? '900px' : '450px')};
  max-height: 100vh;
  padding-top: ${space(5)};
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    padding-top: ${space(3)};
  }
`

const Bounce = styled.div`
  margin-top: ${space(6)};
  width: 45px;
  height: 26px;
  position: relative;
  display: block;
  cursor: pointer;
  animation: scrollToBounce 1s ease infinite;

  @keyframes scrollToBounce {
    from {
      top: -5px;
    }

    25% {
      top: -20px;
    }

    50% {
      top: -5px;
    }

    75% {
      top: -10px;
    }

    to {
      top: -5px;
    }
  }
`

const Header = ({ siteTitle, pageContext, isHome }) => {
  const scrollTo = selector => {
    const element = document.querySelector(selector)

    if (element) {
      const wrapper = document.documentElement
      const count = element.offsetTop - wrapper.scrollTop - 84

      wrapper.scrollBy({
        behavior: 'smooth',
        top: count,
        left: 0,
      })

      return true
    }

    return false
  }
  return (
    <StyledHeader isHome={isHome}>
      <Wrapper style={{ flex: 1 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            alignItems: 'space-between',
          }}
        >
          <div style={{ height: 85, content: '' }}>
            <Nav pageContext={pageContext} />
          </div>
          {isHome && (
            <Welcome>
              <h1>
                <span className="site-brand">inRage</span>
                <span className="site-author">Pascal GAULT</span>
                <span className="site-punchline">
                  Développeur Freelance spécialisé dans la création de sites web
                </span>
              </h1>

              <Bounce onClick={() => scrollTo('#main-content')}>
                <svg
                  width="45"
                  height="26"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 45 26"
                >
                  <path
                    d="M44.226 3.678c0 .384-.148.724-.443 1.02l-20.65 20.65c-.296.295-.636.443-1.02.443s-.724-.148-1.02-.443L.444 4.698C.148 4.401 0 4.061 0 3.677s.148-.724.443-1.02L2.66.444C2.954.148 3.294 0 3.679 0c.383 0 .723.148 1.018.443L22.113 17.86 39.529.443C39.824.148 40.164 0 40.548 0c.384 0 .724.148 1.02.443l2.215 2.216c.295.295.443.635.443 1.02z"
                    fill="#FFF"
                    fillRule="nonzero"
                  />
                </svg>
              </Bounce>
            </Welcome>
          )}
        </div>
      </Wrapper>

      <HeaderFooter>
        <svg
          height="351"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 1920 351"
          width="1920"
        >
          <defs>
            <path d="M1350 224L1920 0v351H0z" id="a_header" />
            <path d="M475 0v240L0 186.666359z" id="c_header" />
          </defs>
          <g fillRule="evenodd" fill="none">
            <g>
              <mask fill="#fff" id="b_header">
                <use xlinkHref="#a_header" />
              </mask>
              <g fill="#252525" mask="url(#b_header)">
                <path d="M0 0h1920v351H0z" />
              </g>
            </g>
            <g transform="translate(1445 3)">
              <mask fill="#fff" id="d_header">
                <use xlinkHref="#c_header" />
              </mask>
              <g fill="#E57E21" mask="url(#d_header)">
                <path d="M0 0h475v241H0z" />
              </g>
            </g>
          </g>
        </svg>
      </HeaderFooter>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
