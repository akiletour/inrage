import React from 'react'
import { Wrapper } from '../components/styles/Wrapper'
import SectionTitle from '../components/SectionTitle'

export default () => (
  <Wrapper>
    <SectionTitle title="Voici ma nouvelle section" as={1}>
      Bonjour les gens, comment allez vous ?
    </SectionTitle>
  </Wrapper>
)
