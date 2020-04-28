import React from 'react'
import { Wrapper } from '../../components/styles/Wrapper'
import {Link} from "gatsby";

export default () => (
  <Wrapper>
    <h1>Prestation - Création de site web</h1>

    <div><Link to="/prestations/creation-site-web/site-wordpress">Site WordPress</Link></div>
    <div><Link to="/prestations/creation-site-web/site-prestashop">Site Prestashop</Link></div>
  </Wrapper>
)
