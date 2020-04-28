import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from '../components/styles/Wrapper'

export default () => (
  <Wrapper>
    <h1>Prestations</h1>

    <div><Link to="/prestations/creation-site-web">Création de site web</Link></div>
    <div><Link to="/prestations/maintenance-site-internet">Maintenance site internet</Link></div>
  </Wrapper>
)
