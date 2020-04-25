import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Article1 from '../images/articles/search-and-replace-tool.png'
import { space } from './styles/functions'
import LinkInline from './styles/LinkInline'

const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0 ${space(2)};

  h3 {
    font-size: 24px;
    font-family: Lato, sans-serif;
    line-height: 1.416666667;
    min-height: 70px;
    color: #fff;
    margin: 10px 0 0;
  }

  ${LinkInline} {
    justify-self: flex-start;
    margin-top: ${space(2)};
  }
`

const Thumbnail = styled.div`
  position: relative;
  width: 100%;

  > a {
    text-decoration: none;
    color: inherit;
    display: block;

    img {
      width: 100%;
      height: auto;
      filter: grayscale(99%);
      transition: all 250ms;
      display: block;
    }

    &:hover {
      img {
        filter: grayscale(0);
      }
    }
  }
`

const Time = styled.div`
  position: absolute;
  left: ${space(1)};
  top: ${space(1)};
  background-color: var(--primary);

  .day {
    color: #fff;
    font-size: 28px;
    line-height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }

  .month {
    background-color: #fff;
    text-transform: uppercase;
    line-height: 25px;
    text-align: center;
    color: var(--primary);
    width: 50px;
  }
`

const Excerpt = styled.div`
  font-size: 16px;
  color: #999;
  line-height: 21px;
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 ${space(-2)};

  ${Article} {
    margin-top: ${space(3)};
  }
`

export default () => {
  console.log('list article')

  return (
    <List>
      <Article>
        <Thumbnail>
          <Link to="/">
            <img src={Article1} alt="" />
          </Link>
          <Time>
            <div className="day">08</div>
            <div className="month">JAN</div>
          </Time>
        </Thumbnail>
        <h3>Changer les URLs dans votre base de données</h3>
        <Excerpt>
          Depuis que j’ai mis la main sur l’outil wp-cli de WordPress, et
          particulièrement search-replace permettant de manipuler la base de
          données de WordPress depuis le terminal. Je cherchais un outil pour
          mes autres CMS. Quand on rappatri la base de données de production en
          local pour avoir une version à jour. Il est pas évident…
        </Excerpt>
        <LinkInline to="/">Voir l'article</LinkInline>
      </Article>
      <Article>
        <Thumbnail>
          <Link to="/">
            <img src={Article1} alt="" />
          </Link>
          <Time>
            <div className="day">08</div>
            <div className="month">JAN</div>
          </Time>
        </Thumbnail>
        <h3>Changer les URLs dans votre base de données</h3>
        <Excerpt>
          Depuis que j’ai mis la main sur l’outil wp-cli de WordPress, et
          particulièrement search-replace permettant de manipuler la base de
          données de WordPress depuis le terminal. Je cherchais un outil pour
          mes autres CMS. Quand on rappatri la base de données de production en
          local pour avoir une version à jour. Il est pas évident…
        </Excerpt>
        <LinkInline to="/">Voir l'article</LinkInline>
      </Article>
    </List>
  )
}
