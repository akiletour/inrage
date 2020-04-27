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

export default ({ articles }) => {
  if (!articles) return <p>Shooooot! No Post found!</p>

  return (
    <List>
      {articles &&
        articles.edges.map(({ node: post }) => (
          <Article key={post.id}>
            <Thumbnail>
              <Link to={`/blog${post.fields.slug}`}>
                <img src={Article1} alt="" />
              </Link>
              <Time>
                <div className="day">08</div>
                <div className="month">JAN</div>
              </Time>
            </Thumbnail>
            <h3>{post.frontmatter.title}</h3>
            <Excerpt>{post.excerpt}</Excerpt>
            <LinkInline to={`/blog${post.fields.slug}`}>
              Voir l'article
            </LinkInline>
          </Article>
        ))}
    </List>
  )
}
