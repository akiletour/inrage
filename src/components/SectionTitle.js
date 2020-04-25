import React from 'react'
import styled from 'styled-components'

const SectionTitleStyled = styled.div`
  color: #fff;
  text-align: center;

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    text-align: left;
  }

  p {
    color: var(--light);
    line-height: 23px;
    font-size: 16px;
    display: flex;
    align-items: center;
    margin: 8px 0 0;

    @media (min-width: 800px) {
      margin-top: 0;
      font-size: 18px;

      &::before {
        width: 2px;
        height: 120px;
        background-color: var(--light);
        content: '';
        transform: skewX(-35deg);
        margin: 0 70px;
        flex: none;
      }
    }
  }
`

const Heading = styled.h1`
  color: #fff;
  font-size: 34px;
  font-weight: 900;
  flex: none;
  margin: 0;
  font-family: Lato, sans-serif;
`

export default function SectionTitle({ as, title, children }) {
  return (
    <SectionTitleStyled>
      <Heading as={`h${as}`} className="heading">
        {title}
      </Heading>
      <p>{children}</p>
    </SectionTitleStyled>
  )
}
