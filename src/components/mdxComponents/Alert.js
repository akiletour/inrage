import React from 'react'
import styled from 'styled-components'
import { space } from '../styles/functions'
import { ReactComponent as AlertIcon } from '../../images/icons/alert.svg'

const AlertStyled = styled.div`
  background-color: var(--darker);
  padding: ${space(3)} ${space(2)};
  color: #e74c3c;
  display: flex;
  align-items: center;
  margin: ${space(4)} 0;

  svg {
    width: 80px;
    height: auto;
    margin-right: ${space(2)};

    path {
      fill: #e74c3c;
    }
  }
`

export default props => (
  <AlertStyled>
    <AlertIcon />
    {props.children}
  </AlertStyled>
)
