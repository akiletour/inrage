import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon = styled.div`
  width: 146px;
  height: 146px;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    height: 44px;
    width: auto;

    path {
      fill: #fff;
    }
  }
`

const Title = styled.div`
  text-align: center;
  span {
    display: block;
    font-size: 1.8rem;
    color: #fff;
  }
`

export default ({ icon, number, title }) => (
  <Item>
    <Icon>{icon}</Icon>
    <Title>
      <span>{number}</span> {title}
    </Title>
  </Item>
)
