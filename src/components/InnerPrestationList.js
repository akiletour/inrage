import React from 'react'
import styled from 'styled-components'
import PrestationItemInline from './PrestationItemInline'
import ExpertiseJoomla from '../images/expertise-joomla.png'
import { space } from './styles/functions'

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${space(-1)};

  > * {
    width: 50%;
    margin-top: ${space(5)};
    padding: 0 ${space(1)};
  }
`

export default () => (
  <List>
    <PrestationItemInline
      icon={ExpertiseJoomla}
      title="Joomla"
      content="Joomla est un CMS puissant en terme de pérénité, modularité et de puissance dans la gestion de contenu et de l’ajout de vos développement spécifique."
      ctaLink="/"
    />
    <PrestationItemInline
      icon={ExpertiseJoomla}
      title="Joomla"
      content="Joomla est un CMS puissant en terme de pérénité, modularité et de puissance dans la gestion de contenu et de l’ajout de vos développement spécifique."
      ctaLink="/"
    />
    <PrestationItemInline
      icon={ExpertiseJoomla}
      title="Joomla"
      content="Joomla est un CMS puissant en terme de pérénité, modularité et de puissance dans la gestion de contenu et de l’ajout de vos développement spécifique."
      ctaLink="/"
    />
    <PrestationItemInline
      icon={ExpertiseJoomla}
      title="Joomla"
      content="Joomla est un CMS puissant en terme de pérénité, modularité et de puissance dans la gestion de contenu et de l’ajout de vos développement spécifique."
      ctaLink="/"
    />
  </List>
)
