import React from 'react'
import styled from 'styled-components'
import { space } from './styles/functions'
import LinkInline from './styles/LinkInline'

const Item = styled.div`
  display: flex;
  align-items: center;

  img {
    flex: none;
    margin-right: ${space(2)};
  }
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 400;
  font-family: Lato, sans-serif;
  color: #fff;
`

const Content = styled.p`
  font-size: 16px;
  color: var(--light);
  font-weight: 300;
  line-height: 1.1875;
  margin: ${space(1)} 0 0;
`

export default ({ icon, title, content, ctaLink }) => (
  <Item>
    <img src={icon} alt={title} />
    <div>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <div style={{ marginTop: space(1) }}>
        <LinkInline to="/">En savoir plus</LinkInline>
      </div>
    </div>
  </Item>
)
