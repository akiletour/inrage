import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import LinkInlineIcon from '../../images/link-inline.svg'
import { space } from './functions'
import { ColorPrimary } from './GlobalStyles'

const Bounce = keyframes`
  0%,
  100% {
    background-position-x: 100%;
  }
  50% {
    background-position-x: 98%;
  }
`

const LinkInline = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  background: url(${LinkInlineIcon}) no-repeat 100% 50%;
  padding-right: ${space(3)};
  transition: all 250ms;

  &:hover {
    color: ${ColorPrimary};
    animation: ${Bounce} 0.5s ease-in-out infinite;
  }
`

export default LinkInline
