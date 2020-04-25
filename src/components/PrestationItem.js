import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { space } from './styles/functions'

const Title = styled.h3`
  font-size: 22px;
  font-weight: 400;
  font-family: Lato, sans-serif;
  color: #fff;
  margin: ${space(2)} 0;
`

const Content = styled.p`
  color: var(--light);
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.35;
`

const Button = styled(Link)`
  background-color: var(--primary);
  color: #fff;
  display: inline-block;
  padding: ${space(1.5)} ${space(2)};
  text-decoration: none;
  margin-top: auto;

  &:hover {
    background-color: var(--primary-darker);
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export default ({
  icon,
  title,
  content,
  buttonLink = '',
  buttonText = 'En savoir plus',
}) => (
  <Item>
    <img src={icon} alt={title} />
    <Title>{title}</Title>
    <Content>{content}</Content>
    {buttonLink && (
      <div style={{ marginTop: 'auto', paddingTop: space(2) }}>
        <Button to={buttonLink}>{buttonText}</Button>
      </div>
    )}
  </Item>
)
