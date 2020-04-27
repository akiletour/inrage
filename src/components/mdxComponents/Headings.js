import React from 'react'
import styled, { keyframes } from 'styled-components'
import blackGrit from './blackgrit.png'
import whiteGrit from './whitegrit.png'

const gritty = keyframes`
  from {
    background-position: 0;
  }

  to {
    background-position: -600px;
  }
`

const headingSizes = {
  h2: 2.12,
  h3: 1.75,
  h4: 1.5,
  h5: 1.3,
  span: 2.12,
}

const HStyles = styled.h1`
  font-size: ${headingSizes.h1}rem;
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
  color: #fff;
`

export default function H(props) {
  return (
    <HStyles {...props}>
      <span className="grit">{props.children}</span>
    </HStyles>
  )
}

export { gritty }
