import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from '../../components/styles/Wrapper'

export default () => (
  <Wrapper>
    <h1>Prestation - Maintenance de site Internet</h1>

    <div>
      <Link to="/prestations/maintenance-site-internet/maintenance-wordpress">
        Maintenance WordPress
      </Link>
    </div>
    <div>
      <Link to="/prestations/maintenance-site-internet/maintenance-prestashop">
        Maintenance Prestashop
      </Link>
    </div>
  </Wrapper>
)
