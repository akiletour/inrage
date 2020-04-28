import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { space } from './styles/functions'
import Logo from '../images/logo-inrage.png'
import { Wrapper } from './styles/Wrapper'

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  list-style: none;
  padding: 0;
`

const NavLi = styled.li`
  margin: 0 ${space(1)};

  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    font-size: 1.112em;
    padding: ${space(2)};
    transition: all 350ms;

    &:hover,
    &[aria-current='page'] {
      color: var(--primary);
    }
  }
`

const NavLiButton = styled(NavLi)`
  background: var(--primary);
  margin: 0;

  a {
    &:hover {
      color: #fff;
      background: var(--orange-darker);
    }
  }
`

const LogoWrap = styled.div`
  margin-right: auto;
`

const NavToggle = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;

  @media (min-width: 900px) {
    display: none;
  }
`

const NavContainer = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`

const NavWrapper = styled.div`
  width: 100%;
  transition: none;

  &.is-sticky {
    position: fixed;
    top: 0;
    left: 0;
    background: var(--darker);
    z-index: 100;
    transition: all 250ms;

    ${NavContainer} {
      padding: 0 ${space(2)};

      @media (max-width: 990px) {
        padding-top: ${space(2)};
        padding-bottom: ${space(2)};
      }
    }
  }

  @media (max-width: 990px) {
    ${NavUl} {
      display: none;
    }
  }
`

export default function Nav({ pageContext }) {
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)

  const handleScroll = () => {
    if (ref.current) {
      setSticky(
        window.pageYOffset >=
          (document.documentElement.clientWidth >= 900 ? 40 : 24)
      )
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll())
    return () => {
      window.removeEventListener('scroll', () => handleScroll())
    }
  }, [])

  return (
    <NavWrapper className={isSticky ? 'is-sticky' : ''} ref={ref}>
      <NavContainer>
        <LogoWrap>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img
              src={Logo}
              alt="Pascal GAULT - Freelance développeur sur La Rochelle"
            />
          </Link>
        </LogoWrap>
        <NavToggle onClick={() => console.log('toggling')}>
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="none" d="M0 0h40v40H0z" />
              <path
                d="M5 30h31v-3.31579H5V30zm8.85714-8.8421H36v-3.3158H13.85714v3.3158zM5 9v3.31579h31V9H5z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </NavToggle>
        <NavUl>
          <NavLi>
            <Link to="/a-propos-de-moi">À propos de moi</Link>
          </NavLi>
          <NavLi>
            <Link to="/prestations">Prestations</Link>
          </NavLi>
          <NavLi>
            <Link to="/portfolio">Portfolio</Link>
          </NavLi>
          <NavLi>
            <Link to="/blog/">Blog</Link>
          </NavLi>
          <NavLiButton>
            <Link to="/contact">Contactez-moi</Link>
          </NavLiButton>
        </NavUl>
      </NavContainer>
    </NavWrapper>
  )
}
