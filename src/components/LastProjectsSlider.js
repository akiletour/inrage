import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ProjectImagine from '../images/hp-slider-imagine.png'
import SliderArrow from '../images/sliderArrow.svg'

const Image = styled.img`
  width: 100%;
  height: auto;
`

const Arrow = styled.div`
  background: url(${SliderArrow}) no-repeat center center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transform: translateY(-50%)
    ${props => (props.direction === 'right' ? 'scaleX(-1)' : '')};
  position: absolute;
  top: 50%;
  left: ${props => (props.direction === 'right' ? 'auto' : '-8px')};
  right: ${props => (props.direction === 'right' ? '-8px' : 'auto')};
`

export default ({ slidesToShow }) => (
  <Slider
    infinite
    speed={500}
    slidesToShow={slidesToShow}
    prevArrow={<Arrow />}
    nextArrow={<Arrow direction="right" />}
    style={{ padding: '0 50px' }}
  >
    <div style={{ margin: '0 8px' }}>
      <h3>
        <Image src={ProjectImagine} alt="" />
      </h3>
    </div>
    <div style={{ margin: '0 8px' }}>
      <h3>
        <Image src={ProjectImagine} alt="" />
      </h3>
    </div>
    <div style={{ margin: '0 8px' }}>
      <h3>
        <Image src={ProjectImagine} alt="" />
      </h3>
    </div>
    <div style={{ margin: '0 8px' }}>
      <h3>
        <Image src={ProjectImagine} alt="" />
      </h3>
    </div>
    <div style={{ margin: '0 8px' }}>
      <h3>
        <Image src={ProjectImagine} alt="" />
      </h3>
    </div>
    <div style={{ margin: '0 8px' }}>
      <h3>
        <Image src={ProjectImagine} alt="" />
      </h3>
    </div>
    <div style={{ margin: '0 8px' }}>
      <h3>
        <Image src={ProjectImagine} alt="" />
      </h3>
    </div>
    <div style={{ margin: '0 8px' }}>
      <h3>
        <Image src={ProjectImagine} alt="" />
      </h3>
    </div>
    <div style={{ margin: '0 8px' }}>
      <h3>
        <Image src={ProjectImagine} alt="" />
      </h3>
    </div>
  </Slider>
)
