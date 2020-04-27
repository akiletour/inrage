/* eslint react/jsx-props-no-spreading: 0 */
/* eslint jsx-a11y/alt-text: 0 */
import React from 'react'
import Img from 'gatsby-image'

export default function WhyDoINeedToMakeThisComponent({ image, ...theRest }) {
  console.log(image);
  if (!image) {
    return null
  }
  if (image.extension === 'gif') {
    return <img src={image.publicURL} {...theRest} />
  }
  return <Img fluid={image.childImageSharp.fluid} {...theRest} />
}
