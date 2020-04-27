import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { ColorDark, ColorPrimary } from './GlobalStyles'
import { ReactComponent as ReadMoreIcon } from '../../images/readmore-icon.svg'
import { space } from './functions'

const PositionStyle = css`
  transform: scale(-1);
`

const DiagonalStyled = styled.svg`
  width: 100%;
  height: auto;
  display: block;

  path {
    shape-rendering: crispEdges;
  }

  ${props => props.position === 1 && PositionStyle}
`

const Cta = styled(Link)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 165px;
  height: 165px;
  background: red;
  border-radius: 50%;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  padding-top: ${space(4)};
  text-transform: uppercase;
  line-height: 1.4;
  flex-direction: column;
  align-items: center;
  transition: all 250ms;

  &:hover {
    color: var(--primary);
  }

  svg {
    width: 30px;
    height: auto;
    display: block;
    margin-bottom: ${space(1)};

    path {
      fill: currentColor;
    }
  }
`

export default ({
  position,
  pushColor = ColorPrimary,
  bgColor = ColorDark,
  readmoreLink = '',
  readmoreText = ['En savoir', <br />, 'plus'],
  style = '',
}) => (
  <div style={{ position: 'relative', ...style }}>
    <DiagonalStyled
      height="361"
      preserveAspectRatio="xMidYMax slice"
      viewBox="0 0 1920 361"
      width="1920"
      position={position}
    >
      <path d="M1349 234L1920 0v361H0z" fill={bgColor} />
      <path d="M1445 197L1920 4v249z" fill={pushColor} />
    </DiagonalStyled>
    {readmoreLink && (
      <Cta to={readmoreLink} style={{ backgroundColor: bgColor }}>
        <ReadMoreIcon />
        {Array.isArray(readmoreText)
          ? readmoreText.map((item, index) => (
              <Fragment key={index}>{item}</Fragment>
            ))
          : readmoreText}
      </Cta>
    )}
  </div>
)
