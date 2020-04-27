import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { space } from './styles/functions'

const StyledButton = styled(Link)`
  background-color: var(--primary);
  color: #fff;
  padding: ${space(2)} ${space(2)};
  display: inline-flex;
  font-size: 16px;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background-color: var(--primary-darker);
  }
`

export default props => <StyledButton>{props.children}</StyledButton>
