'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { useGSAP } from '@gsap/react'
import Button from '@component/Button'
import NoScrollLink from '@component/NoScrollLink'
import NavPrimary from '@layout/NavPrimary'

gsap.registerPlugin(useGSAP, MorphSVGPlugin)

const furLightColor = '#FFF',
  furDarkColor = '#67b1e0',
  skinLightColor = '#ddf1fa',
  skinDarkColor = '#88c9f2',
  lettersSideLight = '#141414',
  lettersSideDark = '#000',
  lettersFrontLight = '#e47d21',
  lettersFrontDark = '#160E07',
  lettersStrokeLight = '#141414',
  lettersStrokeDark = '#031219',
  mouthShape1 =
    'M149 115.7c-4.6 3.7-6.6 9.8-5 15.6.1.5.3 1.1.5 1.6.6 1.5 2.4 2.3 3.9 1.7l11.2-4.4 11.2-4.4c1.5-.6 2.3-2.4 1.7-3.9-.2-.5-.4-1-.7-1.5-2.8-5.2-8.4-8.3-14.1-7.9-3.7.2-5.9 1.1-8.7 3.2z',
  mouthShape2 =
    'M161.2 118.9c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1 .4-2 1.1-2.7.7-.8 1.8-1.3 2.9-1.3 2.2 0 4 1.7 4 4z',
  mouthShape4 =
    'M149.2 116.7c-4.6 3.7-6.7 8.8-5.2 14.6.1.3.1.5.2.8.6 1.5 2.4 2.3 3.9 1.7l11.2-4.4 11.2-4.4c1.5-.6 2.3-2.4 1.7-3.9-.1-.3-.2-.5-.4-.7-2.8-5.2-8.2-7.2-14-6.9-3.6.2-5.9 1.1-8.6 3.2z'
export default function Custom404() {
  const yetiSVG = useRef(null)

  useGSAP(() => {
    // Fonctions de changement d'état
    function goDark() {
      gsap.set('#light', { visibility: 'hidden' })

      gsap.set('.lettersSide', {
        fill: lettersSideDark,
        stroke: lettersStrokeDark,
      })
      gsap.set('.lettersFront', {
        fill: lettersFrontDark,
        stroke: lettersStrokeDark,
      })
      gsap.set('#lettersShadow', { opacity: 0.05 })

      gsap.set('.hlFur', { fill: furDarkColor })
      gsap.set('.hlSkin', { fill: skinDarkColor })
    }

    function goLight() {
      gsap.set('#light', { visibility: 'visible' })

      gsap.set('.lettersSide', {
        fill: lettersSideLight,
        stroke: lettersStrokeLight,
      })
      gsap.set('.lettersFront', {
        fill: lettersFrontLight,
        stroke: lettersStrokeLight,
      })
      gsap.set('#lettersShadow', { opacity: 0.2 })

      gsap.set('.hlFur', { fill: furLightColor })
      gsap.set('.hlSkin', { fill: skinLightColor })
    }

    // Timeline des mouvements de la bouche
    const chatterTL = gsap.timeline({ paused: true, repeat: -1, yoyo: true })
    chatterTL
      .to(
        ['#mouthBG', '#mouthPath', '#mouthOutline'],
        {
          duration: 0.1,
          morphSVG: mouthShape4,
        },
        0
      )
      .to('#chin', { duration: 0.1, y: 1.5 }, 0)

    // Timeline principale du yéti
    const yetiTL = gsap.timeline({
      paused: true,
      repeat: -1,
      repeatDelay: 0,
      delay: 0,
    })

    yetiTL
      .add(() => {
        chatterTL.play()
      }, 0)

      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 7 }, 2.5)
      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 0 }, 2.575)
      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 7 }, 2.65)
      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 0 }, 2.725)
      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 7 }, 2.8)
      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 0 }, 2.875)

      .add(goLight, 3.2)
      .add(goDark, 3.3)
      .add(goLight, 3.4)

      .add(() => {
        chatterTL.pause()
        gsap.to(['#mouthBG', '#mouthPath', '#mouthOutline'], {
          duration: 0.1,
          morphSVG: mouthShape1,
        })
      }, 3.2)

      .to(
        ['#mouthBG', '#mouthPath', '#mouthOutline'],
        { duration: 0.25, morphSVG: mouthShape2 },
        5
      )
      .to('#tooth1', { duration: 0.1, y: -5 }, 5)
      .to(
        '#armR',
        {
          duration: 0.5,
          x: 10,
          y: 30,
          rotation: 10,
          transformOrigin: 'bottom center',
          ease: 'quad.out',
        },
        4
      )
      .to(
        ['#eyeL', '#eyeR'],
        {
          duration: 0.25,
          scaleX: 1.4,
          scaleY: 1.4,
          transformOrigin: 'center center',
        },
        5
      )

      .add(goDark, 8)
      .add(goLight, 8.1)
      .add(goDark, 8.3)
      .add(goLight, 8.4)
      .add(goDark, 8.6)

      .to(
        ['#mouthBG', '#mouthPath', '#mouthOutline'],
        { duration: 0.25, morphSVG: mouthShape1 },
        9
      )
      .to('#tooth1', { duration: 0.1, y: 0 }, 9)
      .to(
        '#armR',
        {
          duration: 0.5,
          x: 0,
          y: 0,
          rotation: 0,
          transformOrigin: 'bottom center',
          ease: 'quad.out',
        },
        9
      )
      .to(
        ['#eyeL', '#eyeR'],
        {
          duration: 0.25,
          scaleX: 1,
          scaleY: 1,
          transformOrigin: 'center center',
        },
        9
      )

      .add(() => {
        chatterTL.play()
      }, 9.25)

      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 7 }, 11.5)
      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 0 }, 11.575)
      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 7 }, 11.65)
      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 0 }, 11.725)
      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 7 }, 11.8)
      .to(['#armL', '#flashlightFront'], { duration: 0.075, x: 0 }, 11.875)

    // Initialisation
    goDark()
    yetiTL.play()
  }, [])

  return (
    <div className="">
      <NavPrimary isSticky />
      <div className="min-h-[900px] relative overflow-hidden flex justify-center max-[1300px]:justify-end">
        <div className="max-md:hidden">
          <svg
            ref={yetiSVG}
            id="yetiSVG"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 470"
            className="w-[600] h-[470px] overflow-hidden absolute left-0 top-0"
          >
            <linearGradient
              id="flashlightGrad"
              x1="126.5842"
              x2="90.5842"
              y1="176.5625"
              y2="213.5625"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#333" />
              <stop offset=".076" stopColor="#414141" />
              <stop offset=".2213" stopColor="#555" />
              <stop offset=".3651" stopColor="#626262" />
              <stop offset=".5043" stopColor="#666" />
              <stop offset=".6323" stopColor="#606060" />
              <stop offset=".8063" stopColor="#4e4e4e" />
              <stop offset="1" stopColor="#333" />
            </linearGradient>
            <path fill="#2c2c2a" d="M0 0h600v470H0z" />
            <g id="pillow">
              <path
                fill="#e57e21"
                d="M241.3 124.6c-52.9 28.6-112.6 48-181.8 54.4-40.9 6.8-64.6-82.3-31.9-106.6C84 43.8 144.8 26.2 209.4 18c32.8 13 48.5 75.3 31.9 106.6z"
              />
              <path
                fill="none"
                stroke="#001726"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M52.8 91.3c10 7.4 25.4 50.7 16.1 65.8M241.3 124.6c-52.9 28.6-112.6 48-181.8 54.4-40.9 6.8-64.6-82.3-31.9-106.6C84 43.8 144.8 26.2 209.4 18c32.8 13 48.5 75.3 31.9 106.6z"
              />
              <path
                fill="#e57e21"
                stroke="#001726"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M201.9 21.9c4.9-8 14.1-11.3 20.6-7.3s7.7 13.7 2.8 21.7"
              />
              <path
                fill="#e57e21"
                stroke="#001726"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M242.1 103.1c1.8.3 3.6.9 5.3 1.8 8.4 4.1 12.6 13 9.3 19.8s-12.9 9-21.3 4.9c-1.9-.9-3.6-2.1-5-3.4"
              />
              <path
                fill="#e57e21"
                stroke="#001726"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M70.3 172c.2 1.4.2 2.8.1 4.3-.8 9.4-8.3 16.4-16.7 15.6S39.2 183 40 173.7c.1-1.6.5-3.1 1-4.5"
              />
              <path
                fill="#e57e21"
                stroke="#001726"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M20.9 85.1c-4.1-5-5.1-11.6-2.1-16.9 4.1-7.2 14-9.2 22.1-4.6 3.7 2.1 6.4 5.2 7.9 8.6"
              />
            </g>
            <g id="yeti">
              <path
                id="bodyBG"
                fill="#67B1E0"
                d="M80.9 291.4l-17.1-72.8c-6.3-27 10.4-54 37.4-60.3l93.1-29.6c26.5-8.1 54.6 6.8 62.7 33.3l21.9 71.5"
              />
              <path
                className="hlFur"
                id="hlBody"
                fill="#FFF"
                d="M67.1 232.7c15.6-8.7 27.7-23.7 38-38.7 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 6.5-6.5 12-14 18-21-6.4-.6-12.9 0-19.4 2l-93.1 29.6c-27 6.3-43.7 33.4-37.4 60.3l3.2 14.1z"
              />
              <path
                id="bodyOutline"
                fill="none"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M80.9 291.4l-17.1-72.8c-6.3-27 10.4-54 37.4-60.3l93.1-29.6c26.5-8.1 54.6 6.8 62.7 33.3l21.9 71.5"
              />
              <path
                fill="#67B1E0"
                d="M197.5 132.4l-11.2-47.9c-6.3-26.7-32.7-44.1-59.5-38.2-27.4 6-44.5 33.1-38.1 60.3l13.6 56.2"
              />
              <path
                className="hlFur"
                id="hlHead"
                fill="#FFF"
                d="M100.4 132.3l7.4 29.8 89.7-28.8-11.4-48.9c-1.6-6.8-4.5-12.9-8.4-18.3-9.6-7.9-28.5-12.9-46.9-8.5-24.9 5.9-34.5 23.6-38.1 37.9-.8.8-3.8 3-5.1 5.4.2 1.9.5 3.7 1 5.6l7 28.8 4.8-3z"
              />
              <path
                fill="#67B1E0"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M182.1 71.6c3.8 3.6 7 7.7 9.5 12-1.8.4-3.6.9-5.3 1.6 3.2 2.9 5.7 6.3 7.6 9.9-1.1.3-2.2.7-3.3 1.1 2.5 3.5 4.3 7.4 5.4 11.5-.8-.5-2.2-.8-3.3-1"
              />
              <path
                fill="none"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M197.5 132.4l-11.2-47.9c-6.3-26.7-32.7-44.1-59.5-38.2-27.4 6-44.5 33.1-38.1 60.3l13.6 56.2"
              />
              <g>
                <ellipse
                  cx="85.8"
                  cy="120.4"
                  fill="#88C9F2"
                  rx="11.5"
                  ry="11.5"
                  transform="rotate(-66.265 85.7992 120.4318)"
                />
                <path
                  className="hlSkin"
                  id="hlEar"
                  fill="#DDF1FA"
                  d="M80.4 122.2c-1.3-5.5 1.6-11.1 6.6-13.2-1.3-.1-2.6-.1-3.9.3-6.2 1.5-10 7.7-8.5 13.9s7.7 10 13.9 8.5c.7-.2 1.3-.4 1.9-.6-4.7-.6-8.9-4-10-8.9z"
                />
                <path
                  fill="#88C9F2"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M84.2 116.6c-2.2.5-3.6 2.8-3 5 .5 2.2 2.8 3.6 5 3"
                />
                <ellipse
                  cx="85.8"
                  cy="120.4"
                  fill="none"
                  stroke="#265D85"
                  strokeWidth="2.5"
                  rx="11.5"
                  ry="11.5"
                  transform="rotate(-66.265 85.7992 120.4318)"
                />
                <path
                  className="hlFur"
                  fill="#FFF"
                  d="M106 130.3l-12 3.6 1.2-11.4-6.3-.1 6-12h-5.4l9.6-8.4z"
                />
                <path
                  className="hlFur"
                  fill="#FFF"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M92.1 96.4c-5.1 5.9-8.4 11.7-10 17 4.2-1.2 8.5-2.2 12.8-3-4.2 4.8-6.7 9.5-7.6 13.8 2.7-.7 5.4-1.3 8-1.7-2.3 4.8-2.8 9.2-1.7 13.3 1.4-1 4-2.4 6.1-3.4"
                />
              </g>
              <path
                className="hlSkin"
                id="face"
                fill="#DDF1FA"
                d="M169.1 70.4l7.3 23.4c9.4 26.8-1.8 45-20 50.7s-37.8-5.1-45.8-30.1L103.3 91"
              />
              <path
                id="chin"
                fill="none"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M152.4 147.5c3.8 1 8 1.4 12.3 1.1-.5-1.4-1-2.9-1.6-4.3 3.8.6 7.9.7 12.1.1l-3.3-4.8c3.1-.6 6.3-1.6 9.5-3.1-1.4-1.6-2.8-3.1-4.2-4.6"
              />
              <path
                className="hlFur"
                id="eyebrow"
                fill="#FFF"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M100.9 89.8c7.6 3.5 15.9 6.1 24.7 7.7 1.1-3.3 2.1-6.6 3-9.9 5.5 2.3 11.3 4.1 17.5 5.4.2-3.3.4-6.5.4-9.7 4.5.7 9.2 1.1 14 1.1-.5-3.4-1.1-6.7-1.7-10 4.5-1.9 9-4.2 13.3-6.9"
              />
              <g id="eyeL">
                <circle cx="135.9" cy="105.3" r="3.5" fill="#265D85" />
                <circle cx="133.7" cy="103.5" r="1" fill="#FFF" />
              </g>
              <g id="eyeR">
                <circle cx="163.2" cy="96.3" r="3.5" fill="#265D85" />
                <circle cx="160.9" cy="94.5" r="1" fill="#FFF" />
              </g>
              <path
                id="nose"
                fill="#265D85"
                d="M149.3 101.2l4.4-1.6c1.8-.6 3.6 1 3.1 2.9l-1.1 3.9c-.4 1.6-2.3 2.2-3.6 1.3l-3.3-2.3c-1.7-1.1-1.3-3.5.5-4.2z"
              />
              <path
                fill="#67B1E0"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M112.4 55.9c.9-4.3 3.8-9.2 8.8-13.7 1.4 2.3 2.8 4.7 4.1 7.1 2.3-4.8 6.9-9.8 13.8-14.1-.1 3.4-.3 6.8-.6 10.1 4.4-3 10.2-5.7 17.3-7.6-1.7 3.6-3.7 7.2-5.9 10.8"
              />
              <g id="mouth">
                <path
                  id="mouthBG"
                  fill="#265D85"
                  d="M149 115.7c-4.6 3.7-6.6 9.8-5 15.6.1.5.3 1.1.5 1.6.6 1.5 2.4 2.3 3.9 1.7l11.2-4.4 11.2-4.4c1.5-.6 2.3-2.4 1.7-3.9-.2-.5-.4-1-.7-1.5-2.8-5.2-8.4-8.3-14.1-7.9-3.7.2-5.9 1.1-8.7 3.2z"
                />
                <g>
                  <defs>
                    <path
                      id="mouthPath"
                      d="M149 115.7c-4.6 3.7-6.6 9.8-5 15.6.1.5.3 1.1.5 1.6.6 1.5 2.4 2.3 3.9 1.7l11.2-4.4 11.2-4.4c1.5-.6 2.3-2.4 1.7-3.9-.2-.5-.4-1-.7-1.5-2.8-5.2-8.4-8.3-14.1-7.9-3.7.2-5.9 1.1-8.7 3.2z"
                    />
                  </defs>
                  <clipPath id="mouthClipPath">
                    <use overflow="visible" xlinkHref="#mouthPath" />
                  </clipPath>
                  <g clipPath="url(#mouthClipPath)">
                    <ellipse
                      cx="160.8"
                      cy="133.2"
                      fill="#CC4A6C"
                      rx="13"
                      ry="8"
                      transform="rotate(-21.685 160.775 133.1613)"
                    />
                    <ellipse
                      cx="158.4"
                      cy="127.1"
                      fill="#FFF"
                      opacity=".1"
                      rx="5"
                      ry="1.5"
                      transform="rotate(-21.685 158.3808 127.126)"
                    />
                    <path
                      id="tooth1"
                      fill="#FFF"
                      d="M161.5 116.1l-3.7 1.5c-1 .4-2.2-.1-2.6-1.1l-1.5-3.7 7.4-3 1.5 3.7c.5 1 0 2.2-1.1 2.6z"
                    />
                    <path
                      id="tooth2"
                      fill="#FFF"
                      d="M151.8 128.9l-1.9.7c-1 .4-1.5 1.6-1.1 2.6l1.1 2.8 5.6-2.2-1.1-2.8c-.5-1-1.6-1.5-2.6-1.1z"
                    />
                    <path
                      id="tooth3"
                      fill="#FFF"
                      d="M158.3 126.3l-1.9.7c-1 .4-1.5 1.6-1.1 2.6l1.1 2.8 5.6-2.2-1.1-2.8c-.5-1-1.6-1.5-2.6-1.1z"
                    />
                  </g>
                </g>
                <path
                  id="mouthOutline"
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M149 115.7c-4.6 3.7-6.6 9.8-5 15.6.1.5.3 1.1.5 1.6.6 1.5 2.4 2.3 3.9 1.7l11.2-4.4 11.2-4.4c1.5-.6 2.3-2.4 1.7-3.9-.2-.5-.4-1-.7-1.5-2.8-5.2-8.4-8.3-14.1-7.9-3.7.2-5.9 1.1-8.7 3.2z"
                />
              </g>
              <g id="armR">
                <path
                  className="hlSkin"
                  fill="#DDF1FA"
                  d="M158.4 116.9l-.7.3c-3.7 1.5-5.5 5.7-4.1 9.4l1.2 2.9c1.7 4.4 6.7 6.5 11.1 4.8l1.4-.5"
                />
                <path
                  fill="#A9DDF3"
                  d="M154.8 129.1l.7 1.8c1 2.5 5.4 3.1 5.4 3.1l-2-5.1c-.3-.7-1.1-1.1-1.8-.8l-2.3 1z"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M158.4 116.9l-.7.3c-3.7 1.5-5.5 5.7-4.1 9.4l1.2 2.9c1.7 4.4 6.7 6.5 11.1 4.8l1.4-.5"
                />
                <path
                  className="hlSkin"
                  fill="#DDF1FA"
                  stroke="#265D85"
                  strokeWidth="2.5"
                  d="M167.7 113.2l-.7.3c-3.7 1.5-5.5 5.7-4.1 9.4l1.2 2.9c1.7 4.4 6.7 6.5 11.1 4.8l1.4-.5"
                />
                <path
                  className="hlSkin"
                  fill="#DDF1FA"
                  stroke="#265D85"
                  strokeWidth="2.5"
                  d="M177 109.4l-.7.3c-3.7 1.5-5.5 5.7-4.1 9.4l1.2 2.9c1.7 4.4 6.7 6.5 11.1 4.8l1.4-.5"
                />
                <path
                  fill="#88C9F2"
                  d="M162.3 128.6l18.6 46.7 37.2-14.8-17.9-44.8"
                />
                <path
                  className="hlSkin"
                  fill="#DDF1FA"
                  d="M206.5 130.7l-5.9-15.1-37.9 13 6.4 17.4c10 1.6 34.6-6.3 37.4-15.3z"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M162.3 128.6l18.6 46.7 37.2-14.8-15.3-38.3"
                />
                <path
                  className="hlSkin"
                  fill="#DDF1FA"
                  d="M190.8 119l-1.5-3.7c-2-5.1-7.9-7.6-13-5.6l5.2 12.9"
                />
                <path
                  className="hlSkin"
                  fill="#DDF1FA"
                  d="M203.5 123.8l-1.5-3.7c-2-5.1-7.9-7.6-13-5.6l5.2 12.9"
                />
                <path
                  fill="#A9DDF3"
                  d="M200.4 119.4l-.7-1.8c-1-2.5-5.4-3.1-5.4-3.1l1.9 4.8c.3.8 1.3 1.3 2.1.9l2.1-.8z"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M203.5 123.8l-1.5-3.7c-2-5.1-7.9-7.6-13-5.6"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M193.7 126.4l-4.4-11.1c-2-5.1-7.9-7.6-13-5.6"
                />
                <path
                  fill="#67B1E0"
                  d="M219.6 160.1c-1.5-6.2-3.2-13.2-5.1-21.1-2.8 2.1-5.6 4.5-8.3 7.4-2-1.8-4.1-3.7-6.2-5.7-2.4 3.6-4.6 7.7-6.7 12.1-3-1.9-6-3.9-9.2-6-1.4 2.9-2.7 6-4 9.2-4.7-.6-9.4-1.1-14.2-1.7 5.4 8 10.3 15.2 14.7 21.5"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M219.6 160.1c-1.5-6.2-3.2-13.2-5.1-21.1-2.8 2.1-5.6 4.5-8.3 7.4-2-1.8-4.1-3.7-6.2-5.7-2.4 3.6-4.6 7.7-6.7 12.1-3-1.9-6-3.9-9.2-6-1.4 2.9-2.7 6-4 9.2-4.7-.6-9.4-1.1-14.2-1.7 5.4 8 10.3 15.2 14.7 21.5"
                />
                <path
                  fill="none"
                  stroke="#3A5E77"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M160.9 125l2 5.1"
                />
                <path
                  className="hlSkin"
                  fill="#DDF1FA"
                  d="M172.2 126.4l-1.5-3.7c-2-5.1-7.9-7.6-13-5.6l5.2 12.9"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M160.5 124l2.4 6.1"
                />
                <path
                  className="hlSkin"
                  fill="#DDF1FA"
                  d="M181.5 122.7L180 119c-2-5.1-7.9-7.6-13-5.6l5.2 12.9"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M181.5 122.7L180 119c-2-5.1-7.9-7.6-13-5.6"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M172.2 126.4l-1.5-3.7c-2-5.1-7.9-7.6-13-5.6"
                />
              </g>
              <g id="armL">
                <path
                  fill="#67B1E0"
                  d="M50.9 156.7c-12 35.8-7.8 69.6 8.3 101.9 12.1 22.7 37 14.1 39.5-11.8v-65l-47.8-25.1z"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M50.9 156.7c-12 35.8-7.8 69.6 8.3 101.9 10 22.3 37.3 15.1 39.5-11.8v-65l-47.8-25.1z"
                />
                <path
                  fill="none"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="20"
                  d="M59.3 143.8l34.3 33.9"
                />
                <path
                  fill="#4D4D4D"
                  d="M58.4 133.9l15.9 15.9-.9.9-16.5-16.5c.5-.2 1-.3 1.5-.3z"
                />
                <path
                  fill="#1A1A1A"
                  d="M71.2 169.6l-20.1-20c-2.4-3.7-2.5-8.1.1-11.7l23.1 22.2"
                />
                <path
                  fill="#4D4D4D"
                  d="M80.5 156.4l16 15.9-.9.9-16.5-16.5c.5-.1 1-.2 1.4-.3z"
                />
                <path
                  fill="#1A1A1A"
                  d="M74.2 160.1L86 171.4l-2 11-10.2-10.1c-2.4-4.4-2.5-8.5.4-12.2z"
                />
                <path
                  fill="#88C9F2"
                  d="M65.9 164.8c-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 3-1.2 3.9-4.9 1.9-7.4-5.8-7.2-16.1-9.9-25-5.7-9.4 4.4-14.1 15.3-10.9 25.2"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M67.9 168.3c-1.1-1.2-2-3.6-2-3.6-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 3-1.2 3.9-4.9 1.9-7.4-5.8-7.2-16.1-9.9-25-5.7-9.4 4.4-14.1 15.3-10.9 25.2"
                />
                <path
                  fill="#88C9F2"
                  d="M69.9 168.7c-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 3-1.2 3.9-4.9 1.9-7.4-5.8-7.2-16.1-9.9-25-5.7-9.4 4.4-14.1 15.3-10.9 25.2"
                />
                <path
                  fill="#67B1E0"
                  d="M49.9 155l2.7 12.7.2 11.8 5 8.6 9.5-1.8 2-8.7-6.9.6 1.7-11.7-6.6 2.8 1-13.8-4.6 2.9z"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M71.9 172.3c-1.1-1.2-2-3.6-2-3.6-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 3-1.2 3.9-4.9 1.9-7.4-5.8-7.2-16.1-9.9-25-5.7"
                />
                <path
                  className="hlSkin"
                  id="hlHandL"
                  fill="#DDF1FA"
                  d="M101.7 156.9c-5.8-7.2-16.1-9.9-25-5.7-5.9 2.8-9.9 8.1-11.3 14.1l-1-.9-6.2 4.2c5.5 18.1 19.3 25.4 30.4 21l1.2-9.1c-6 2.4-12.7-.7-14.9-6.8-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 2.9-1.3 3.8-5 1.8-7.5z"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M89.7 180.5c-6 2.4-12.7-.7-14.9-6.8"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M76.9 177.3c-1.1-1.2-2-3.6-2-3.6-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 3-1.2 3.9-4.9 1.9-7.4-5.8-7.2-16.1-9.9-25-5.7"
                />
                <path
                  className="hlFur"
                  id="hlArmL"
                  fill="#FFF"
                  d="M98.8 202.8l-1.4-8.7-5.2.7-7.2-11.5-6.8 9-3.9-9.3-7.5 4.8 3.5-11.4-7.1 1.9 2.7-13.5-7.8 4.9c-11.7 26.5-3.6 52.5 1.7 66.6 15.5-6.4 30.3-21.9 39-33.5z"
                />
                <path
                  fill="#A9DDF3"
                  d="M101 161.2l-2.4-2.2c.2-1.6-.2-2.7-.8-3.9l2.6 2.5c.8.8 1 2.2.6 3.6z"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M66.9 187.8l3.5-11.4-7.2 1.9 2.6-13.9-7.5 4.5 1.2-15.5-5.5 4.2"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M54 157.6l-5.6-5.6 2.7 14.7"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M67.1 188l7.3-5 3.8 9.3"
                />
                <path
                  fill="none"
                  stroke="#265D85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M78.2 192.3l6.8-9 7.1 11.5"
                />
              </g>
            </g>
            <g
              id="fingersBackL"
              style={{ visibility: 'hidden' }}
              fill="#88C9F2"
              stroke="#265D85"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2.5"
            >
              <path d="M149.2 177.5l-5.6-23.3c-.6-2.7 1-5.4 3.7-6 2.7-.6 5.4 1 6 3.7l4.4 18.4c.6 2.7-1 5.4-3.7 6l-4.8 1.2M139.4 179.8l-5.6-23.3c-.6-2.7 1-5.4 3.7-6 2.7-.6 5.4 1 6 3.7l5.6 23.3-9.7 2.3z" />
              <path d="M128.6 177.3l-4.4-18.4c-.6-2.7 1-5.4 3.7-6 2.7-.6 5.4 1 6 3.7l5.6 23.3-4.9 1.2c-2.7.5-5.4-1.2-6-3.8z" />
            </g>
            <g
              id="fingersBackR"
              style={{ visibility: 'hidden' }}
              fill="#88c9f2"
              stroke="#265D85"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2.5"
            >
              <path d="M215.5 152l-15.9-17.9c-1.8-2.1-1.6-5.2.4-7.1 2.1-1.8 5.2-1.6 7.1.4l12.6 14.2c1.8 2.1 1.6 5.2-.4 7l-3.8 3.4" />
              <path d="M208 158.6l-15.9-17.9c-1.8-2.1-1.6-5.2.4-7.1 2.1-1.8 5.2-1.6 7.1.4l15.9 17.9-7.5 6.7z" />
              <path d="M197.2 161.5l-12.6-14.2c-1.8-2.1-1.6-5.2.4-7.1 2.1-1.8 5.2-1.6 7.1.4l15.9 17.9-3.7 3.3c-2.1 2-5.2 1.8-7.1-.3z" />
            </g>
            <g id="blanket">
              <path
                d="M1.2 271.4C6.6 262 13 253.1 22.4 248c10.3-5.5 22.5-5.5 33.7-8.8 21.8-6.5 37.5-25.2 50.3-43.9 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 10.1-10.2 17.9-22.8 29-32 7.9-6.6 18.7-14.7 29.5-13.7 13.9 1.2 25 5.8 38.5-1.5 28.1-15.2 27.8-60.6 56.2-75.1 16.2-8.3 36.9-3.6 52.6-12.7 5.4-3.2 9.8-7.7 13.9-12.5h128.5l-350.8 209L1.3 363l-.1-91.6z"
                opacity=".1"
              />
              <path
                fill="#252525"
                d="M0 281.6c5.3-9.2 11.5-17.9 20.7-22.8 10.3-5.5 22.5-5.5 33.7-8.8 21.8-6.5 37.5-25.2 50.3-43.9 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 10.1-10.2 17.9-22.8 29-32 7.9-6.6 18.7-14.7 29.5-13.7 13.9 1.2 25 5.8 38.5-1.5 28.1-15.2 27.8-60.6 56.2-75.1 16.2-8.3 36.9-3.6 52.6-12.7C411 19.1 417.1 8.4 424.9.3H700v570H0V281.6z"
              />
              <path
                fill="#e57e21"
                d="M0 281.6c5.3-9.2 11.6-17.9 20.8-22.8 10.3-5.5 22.5-5.5 33.7-8.8 21.8-6.5 37.5-25.2 50.3-43.9 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 10.1-10.2 17.9-22.8 29-32 7.9-6.6 18.7-14.7 29.5-13.7 13.9 1.2 25 5.8 38.5-1.5 28.1-15.2 27.8-60.6 56.2-75.1 16.2-8.3 36.9-3.6 52.6-12.7 9.8-5.7 15.9-16.4 23.7-24.6h100.4c-3.5 2.8-7.3 5.3-11.4 7.2-11.6 5.4-23 6.6-34.9 1.9-10.5-4.2-22.3 2.4-30.1 10.6-7.8 8.2-14 18.3-23.7 24-15.7 9.1-36.4 4.4-52.6 12.7-28.4 14.6-28.2 60-56.2 75.1-13.5 7.3-24.6 2.8-38.5 1.5-10.8-1-21.5 7.1-29.5 13.7-11.2 9.2-18.9 21.8-29 32-2.7 2.7-5.7 5.4-9.3 6.9-4.5 1.9-9.6 1.7-14.5 1.7-17.3.2-35.4 3.8-48.6 15-7.4 6.3-12.8 14.7-18.3 22.7-12.9 18.7-28.6 37.4-50.3 43.9-11.2 3.4-23.4 3.3-33.7 8.8-11.9 6.4-18.9 19-25.2 31-8.2 15.3-11.6 30-19.6 44.7v-72z"
              />
              <path
                fill="none"
                stroke="#001726"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                d="M1.2 283c5.3-9.3 11.8-18 21.1-23 10.3-5.5 22.5-5.5 33.7-8.8 21.8-6.5 37.5-25.2 50.3-43.9 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 10.1-10.2 17.9-22.8 29-32 7.9-6.6 18.7-14.7 29.5-13.7 13.9 1.2 25 5.8 38.5-1.5 28.1-15.2 27.8-60.6 56.2-75.1 16.2-8.3 36.9-3.6 52.6-12.7 9.8-5.7 15.9-16.4 23.7-24.5"
              />
              <path
                fill="none"
                stroke="#001726"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                d="M1.2 355c8-14.7 11.7-29.4 19.9-44.9 6.3-11.9 13.3-24.6 25.2-31 10.3-5.5 22.5-5.5 33.7-8.8 21.8-6.5 37.5-25.2 50.3-43.9 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 10.1-10.2 17.9-22.8 29-32 7.9-6.6 18.7-14.7 29.5-13.7 13.9 1.2 25 5.8 38.5-1.5 28.1-15.2 27.8-60.6 56.2-75.1 16.2-8.3 36.9-3.6 52.6-12.7 9.8-5.7 15.9-15.8 23.7-24s19.6-14.8 30.1-10.6c11.9 4.8 23.2 3.5 34.9-1.9 4-1.9 7.7-4.4 11.2-7.1"
              />
              <path
                d="M111.2 197.2s50.7 23.9 90.8 43.1c14.2 6.8 18 25.4 7.5 37.2-7.6 8.5-20.2 10.4-30 4.5l-89.9-54.7 21.6-30.1z"
                opacity=".03"
              />
              <path
                d="M12.1 266s53.5 64.8 94.7 114c11.7 13.9 1.8 35.1-16.4 35.1-7.1 0-13.8-3.6-17.8-9.5L0 296.5v-13.2L12.1 266z"
                opacity=".03"
              />
              <path
                d="M155.7 170.1s111.4 46.9 171.1 69c3.5 1.3 7.4 0 9.4-3.2 2.7-4.2.9-9.9-3.8-11.7-33.5-12.8-147.3-56-147.3-56l-29.4 1.9z"
                opacity=".03"
              />
              <path
                d="M255.9 114.7S349 145.6 412 176c2.1 1 4.6.6 6.2-1 2.8-2.7 1.9-7.5-1.7-9-23.3-9.6-94.3-38.6-131.1-50.4-.1.1-10.2 1.9-29.5-.9z"
                opacity=".03"
              />
              <path
                d="M356.6 34.9l152.1 49.3c2.2.7 4.5.6 6.7-.2 8.7-3.4 8.2-15.9-.7-18.6l-121-36.8-37.1 6.3z"
                opacity=".03"
              />
            </g>
            <g id="fingersFrontL" style={{ visibility: 'hidden' }}>
              <path
                fill="#88C9F2"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                d="M146.2 165.1l2.8 11.6c.6 2.7 3.3 4.3 6 3.7 2.7-.6 4.3-3.3 3.7-6l-1.6-6.8c-.6-2.7-3.3-4.3-6-3.7l-4.9 1.2"
              />
              <path
                fill="#A9DDF3"
                d="M151.4 173.8l.5 2.2c.3 1.1 1.3 1.7 2.4 1.5 1.1-.3 1.7-1.3 1.5-2.4l-.5-2.2-3.9.9z"
              />
              <path
                fill="#88C9F2"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                d="M136.5 167.4l2.8 11.6c.6 2.7 3.3 4.3 6 3.7 2.7-.6 4.3-3.3 3.7-6l-2.8-11.6-9.7 2.3z"
              />
              <path
                fill="#A9DDF3"
                d="M141.7 176.2l.5 2.2c.3 1.1 1.3 1.7 2.4 1.5 1.1-.3 1.7-1.3 1.5-2.4l-.5-2.2-3.9.9z"
              />
              <path
                fill="#88C9F2"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                d="M127.9 174.6l1.6 6.8c.6 2.7 3.3 4.3 6 3.7 2.7-.6 4.3-3.3 3.7-6l-2.8-11.6-4.9 1.2c-2.6.5-4.2 3.2-3.6 5.9z"
              />
              <path
                fill="#A9DDF3"
                d="M131.9 178.5l.5 2.2c.3 1.1 1.3 1.7 2.4 1.5 1.1-.3 1.7-1.3 1.5-2.4l-.5-2.2-3.9.9z"
              />
            </g>
            <g id="fingersFrontR" style={{ visibility: 'hidden' }}>
              <path
                fill="#88c9f2"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                d="M207.1 142.5l7.9 8.9c1.8 2.1 5 2.3 7.1.4 2.1-1.8 2.3-5 .4-7.1l-4.6-5.2c-1.8-2.1-5-2.2-7-.4l-3.8 3.4"
              />
              <path
                fill="#A9DDF3"
                d="M215.8 147.7l1.5 1.7c.7.8 2 .9 2.8.2.8-.7.9-2 .2-2.8l-1.5-1.7-3 2.6z"
              />
              <path
                fill="#88c9f2"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                d="M199.6 149.1l7.9 8.9c1.8 2.1 5 2.3 7.1.4 2.1-1.8 2.3-5 .4-7.1l-7.9-8.9-7.5 6.7z"
              />
              <path
                fill="#A9DDF3"
                d="M208.3 154.4l1.5 1.7c.7.8 2 .9 2.8.2.8-.7.9-2 .2-2.8l-1.5-1.7-3 2.6z"
              />
              <path
                fill="#88c9f2"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                d="M195.4 159.5l4.6 5.2c1.8 2.1 5 2.3 7.1.4 2.1-1.8 2.3-5 .4-7.1l-7.9-8.9-3.7 3.3c-2.1 1.9-2.3 5-.5 7.1z"
              />
              <path
                fill="#A9DDF3"
                d="M200.8 161l1.5 1.7c.7.8 2 .9 2.8.2.8-.7.9-2 .2-2.8l-1.5-1.7-3 2.6z"
              />
            </g>
            <g id="flashlightFront">
              <path
                fill="#1A1A1A"
                d="M83.9 181.4l4.6 26.4 34.6-33.6-24.5-6.2c-8.9-2.6-16.6 3.9-14.7 13.4z"
              />
              <path
                fill="#333"
                d="M91.9 167.8l20.5 7.4-.5 1.2-21.4-8.2c.5-.2 1-.3 1.4-.4z"
              />
              <path d="M86 171.4c-2 2.5-3 6-2.2 10l4.6 26.4 11.4-11.1L86 171.4z" />
              <path
                fill="url(#flashlightGrad)"
                d="M99.1 183.7c-10.6 9.4-13.4 21.4-9 28.5 4.3 6.8 18 3 28.6-6.4s14.9-23.7 8.8-29c-6.9-6.1-17.8-2.6-28.4 6.9z"
              />
              <path
                fill="#B3B3B3"
                d="M101.6 185.7c-8.2 7.3-11.9 18.2-8.8 23.1 2.6 4.1 13.6-1.1 21.8-8.4s13.6-18.1 9.9-21.6c-4.4-4.2-14.7-.4-22.9 6.9z"
              />
            </g>
          </svg>

          <svg
            id="lightSVG"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 470"
            className="w-[600] h-[470px] overflow-visible absolute left-0 top-0"
          >
            <filter id="white-glow">
              <feFlood
                result="flood"
                floodColor="#ffffff"
                floodOpacity=".6"
              ></feFlood>
              <feComposite
                in="flood"
                result="mask"
                in2="SourceGraphic"
                operator="in"
              ></feComposite>
              <feMorphology
                in="mask"
                result="dilated"
                operator="dilate"
                radius="3"
              ></feMorphology>
              <feGaussianBlur
                in="dilated"
                result="blurred"
                stdDeviation="8"
              ></feGaussianBlur>
              <feMerge>
                <feMergeNode in="blurred"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <g id="light" style={{ visibility: 'hidden' }}>
              <path
                filter="url(#white-glow)"
                fill="#F8FFE8"
                d="M122.2 177.4c-5.2-1.6-13.6 2.1-20.6 8.3-7.7 6.8-11.4 16.8-9.3 22.1L421 1683h1534V733L122.2 177.4z"
              />
              <path
                opacity="0.7"
                fill="#FFFFFF"
                d="M101.6,185.7c-8.2,7.3-11.9,18.2-8.8,23.1c2.6,4.1,13.6-1.1,21.8-8.4s13.6-18.1,9.9-21.6 C120.1,174.6,109.8,178.4,101.6,185.7z"
              />
            </g>
            <g id="four04">
              <g opacity=".2" id="lettersShadow">
                <path d="M233.2 408.6l30.6 46.3-51.9 46 22.2 25.8 125.2 37.6 45.1-18.7-45.5-51.9 12.1-18.1-25.3-30.8-26.2-6.5-27.5-37.7z" />
                <path d="M328.9 467.6S391.4 601.5 505 558c88.3-33.8-69.2-108.2-85-116.5-15.8-8.3-76.8 6.9-76.8 6.9l-14.3 19.2z" />
                <path d="M474.2 515.1L505 558l-20.6 50.6 22.3 25.8 162.5 27 48.4-24.3-60.2-42.7 19.1-12.1-38.4-37.4-32.3.6-72-30.3z" />
              </g>
              <path
                className="lettersSide"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                fill="#3A7199"
                d="M269.2 316l-17.9 6 15.4.8 19.2-6.4zM220.3 371l12.4 37.8 14 7.4-13.3-40.7zM214.4 317.4c-.3-.8-.5-1.6-.8-2.4-.3-.8-.5-1.7-.8-2.5-.3-.9-.5-1.7-.8-2.6-.3-.9-.6-1.8-.8-2.8-.3-.9-.6-1.9-.8-2.9-.3-1-.6-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-2-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-1.9-.8-2.8-.2-.9-.5-1.8-.7-2.7-.2-.9-.5-1.7-.7-2.6l-.6-2.4-10.9 2.8c.2.7.4 1.5.6 2.3l.6 2.4c.2.8.4 1.6.7 2.5s.5 1.7.7 2.6c.2.9.5 1.8.7 2.7.2.9.5 1.8.7 2.7.2.9.5 1.8.7 2.7.2.9.5 1.8.7 2.7.2.9.5 1.8.8 2.7.3.9.5 1.8.8 2.7.3.9.5 1.8.8 2.7.3.9.5 1.8.8 2.7.3.9.5 1.7.8 2.6.3.8.5 1.7.8 2.5.2.8.5 1.6.7 2.3.2.8.5 1.5.7 2.2l6.3 19.3-28.8 9.7 10 2.6 31-10.4-6.8-21zM162.6 243.7l-25 119.5 10.7 32.2 7.6 6.5-11.5-34.7 26.9-128.8z"
              />
              <path
                className="lettersFront"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                fill="#67B1E0"
                d="M266.7 322.8l19.2-6.5 12.1 37.2-19.2 6.5 13.2 40.6-45.2 15.6-13.3-40.7-77.5 26.4-11.5-34.8 26.9-128.8 61.5-19.9 33.8 104.4zm-62-38.9c-.3-1-.5-1.9-.8-2.8-.2-.9-.5-1.8-.7-2.7-.2-.9-.5-1.7-.7-2.6l-.6-2.4-1.1.4c-.1 1.6-.2 3.2-.4 4.8-.1 1.6-.3 3.2-.4 4.7-.1 1.6-.3 3.1-.5 4.7s-.3 3.1-.5 4.7-.4 3.1-.5 4.7c-.2 1.6-.4 3.2-.6 4.7l-.6 4.8-.6 4.8-6.4 36.8 31-10.4-6.8-20.8c-.3-.8-.5-1.6-.8-2.4-.3-.8-.5-1.7-.8-2.5-.3-.9-.5-1.7-.8-2.6-.3-.9-.6-1.8-.8-2.8-.3-.9-.6-1.9-.8-2.9-.3-1-.6-1.9-.8-2.9-.3-1-.6-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-2-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.5-.9-.8-1.9-1-2.8"
              />
              <path
                className="lettersSide"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                fill="#3A7199"
                d="M390 347.5c-.1-1.9-.3-3.8-.5-5.5-.2-1.7-.4-3.4-.7-4.9-.3-1.5-.5-2.9-.9-4.3-.3-1.3-.7-2.5-1.1-3.6-.4-1.1-.8-2.1-1.3-3.1-.5-.9-.9-1.8-1.5-2.5-.5-.8-1.1-1.4-1.7-2-.6-.6-1.2-1.1-1.8-1.5-.6-.4-1.3-.7-2-1.1-.7-.3-1.4-.6-2-.8l-2.1-.6c-.7-.2-1.5-.3-2.2-.3h-14.3 1.6l2.1.3c.7.1 1.3.3 2 .5.6.2 1.3.5 1.9.8.6.3 1.2.6 1.8 1 .6.4 1.2.8 1.7 1.3s1.1 1.1 1.5 1.8c.5.7.9 1.5 1.4 2.3.4.9.8 1.8 1.2 2.8.4 1 .7 2.2 1 3.4.3 1.2.6 2.5.8 4 .2 1.4.4 2.9.6 4.5.2 1.6.3 3.3.4 5.1.1 1.8.2 3.8.2 5.8 0 2.1 0 4.3-.1 6.7-.1 2.4-.2 4.9-.4 7.6-.2 2.7-.4 5.5-.7 8.4-.3 2.9-.6 5.7-.9 8.4-.3 2.7-.7 5.2-1 7.5-.4 2.4-.8 4.6-1.2 6.7-.4 2.1-.8 4-1.3 5.8-.5 1.8-.9 3.5-1.4 5.1s-1 3.1-1.5 4.5-1 2.7-1.6 3.9c-.5 1.2-1.1 2.3-1.6 3.3-.3.5-.5.9-.8 1.4-.1.1-.2.3-.3.4-.2.3-.4.6-.6.8-.1.2-.2.3-.3.5-.2.2-.3.5-.5.7-.1.1-.2.3-.4.4-.2.2-.3.4-.5.6l-.4.4-.5.5c-.1.1-.3.2-.4.3-.2.1-.3.3-.5.4-.1.1-.3.2-.4.3-.2.1-.3.2-.5.3-.1.1-.3.2-.4.2-.3.2-.5.3-.8.4-.6.3-1.3.5-2 .7h-.1c-.6.2-1.3.4-1.9.5h-.1c-.6.1-1.3.2-1.9.2H349c-.7-.1-1.3-.2-2-.3h-.1c-.6-.1-1.3-.3-1.9-.5h-.1c-.6-.2-1.2-.5-1.8-.8-.6-.3-1.2-.7-1.8-1.1 0 0-.1 0-.1-.1 0 0-.1 0-.1-.1 0 0-.1 0-.1-.1 0 0-.1 0-.1-.1l11 8.3.1.1.1.1s.1 0 .1.1c0 0 .1 0 .1.1.3.2.6.4 1 .6.3.2.6.4 1 .5.3.2.6.3.9.4.3.1.7.3 1 .4h.2l.9.3c.3.1.7.2 1.1.3h.2c.3.1.6.1.9.2.4.1.7.1 1.1.1H363c.3 0 .5 0 .8-.1.3 0 .5-.1.8-.1.1 0 .2 0 .3-.1h.2c.1 0 .2 0 .3-.1.3-.1.5-.1.8-.2.3-.1.5-.1.8-.2.1 0 .1 0 .2-.1.1 0 .2-.1.3-.1.2-.1.4-.1.6-.2.2-.1.4-.2.6-.2l.6-.3c.1 0 .1-.1.2-.1s.1-.1.2-.1.1-.1.2-.1.1-.1.2-.1.1-.1.2-.1c.1-.1.3-.2.4-.3.2-.1.4-.2.6-.4.1 0 .1-.1.2-.1.1-.1.2-.1.2-.2.1-.1.2-.1.3-.2.1-.1.2-.2.3-.2.1-.1.3-.2.4-.4.2-.2.4-.3.5-.5l.3-.3c.1-.1.1-.1.1-.2l.2-.2c.1-.1.2-.3.4-.4.1-.2.3-.3.4-.5.2-.2.4-.5.6-.7.1-.1.2-.2.3-.4 0 0 0-.1.1-.1l.1-.1c.2-.2.3-.5.5-.8.1-.2.2-.3.3-.5l.9-1.5c.6-1.1 1.2-2.2 1.8-3.5.6-1.3 1.1-2.7 1.7-4.2.5-1.5 1.1-3.1 1.6-4.8.5-1.7 1-3.5 1.5-5.5.5-1.9 1-4 1.4-6.3s.9-4.6 1.3-7.2c.4-2.6.8-5.3 1.1-8.1.4-2.9.7-5.9 1-9 .3-3.2.6-6.2.8-9 .2-2.9.3-5.6.4-8.1.1-2.6.1-5 .1-7.2.1-1.6 0-3.7-.1-5.6zM325.4 293.8c.7-.6 1.3-1.2 2-1.8.2-.2.4-.4.6-.5.8-.7 1.7-1.4 2.6-2.1.2-.1.4-.3.6-.4.7-.5 1.4-1.1 2.2-1.6.3-.2.5-.4.8-.5.8-.5 1.7-1.1 2.5-1.6.1-.1.2-.1.3-.2 1-.6 1.9-1.1 2.9-1.6.2-.1.3-.2.5-.3.9-.5 1.9-.9 2.9-1.3.1-.1.3-.1.4-.2 1-.4 2-.9 3.1-1.2.4-.2.9-.3 1.3-.5.1 0 .2-.1.4-.1.4-.1.8-.3 1.2-.4.1 0 .1 0 .2-.1.5-.1 1-.3 1.5-.4h.1c.5-.1 1-.3 1.5-.4l-11.1 2.7c-.1 0-.3.1-.4.1-.1 0-.3.1-.4.1-.1 0-.3.1-.4.1h-.1c-.1 0-.2.1-.3.1-.3.1-.7.2-1 .3h-.1-.1c-.2.1-.5.1-.7.2-.1 0-.2.1-.4.1-.1 0-.1 0-.2.1-.1 0-.1 0-.2.1-.1 0-.2.1-.3.1-.3.1-.6.2-1 .3-.6.2-1.2.4-1.8.7-.4.2-.7.3-1.1.5-.1.1-.2.1-.4.2-.1 0-.2.1-.3.1-.6.3-1.1.5-1.7.8-.2.1-.5.2-.7.4-.1 0-.2.1-.3.1-.1 0-.1.1-.2.1-.2.1-.3.2-.5.3-.7.4-1.5.8-2.2 1.2-.1.1-.2.1-.3.2-.6.4-1.2.7-1.8 1.1-.2.1-.4.3-.6.4-.1.1-.2.1-.3.2-.1.1-.3.2-.4.3-.7.5-1.3.9-2 1.4-.2.1-.4.3-.5.4-.1.1-.1.1-.2.1-.7.6-1.5 1.2-2.2 1.8-.1 0-.1.1-.2.1-.1.1-.3.2-.4.4-.4.3-.7.6-1.1 1-.3.2-.5.5-.8.7-.2.2-.4.4-.7.6-.8.7-1.5 1.5-2.3 2.3-1.7 1.8-3.2 3.7-4.8 5.7-1.5 2-3 4.2-4.3 6.5-1.4 2.3-2.7 4.7-3.9 7.3-1.2 2.6-2.4 5.3-3.4 8.1-1.1 2.8-2.1 5.8-3 8.9-.9 3.1-1.7 6.3-2.4 9.6s-1.3 6.8-1.9 10.4c-.5 3.6-1 7.3-1.3 11.1-.4 3.8-.6 7.5-.7 11.2-.1 3.6-.2 7.1-.1 10.5.1 3.4.3 6.7.6 9.9s.7 6.3 1.3 9.3c.5 3 1.2 5.9 1.9 8.6.7 2.8 1.5 5.4 2.4 8 .9 2.5 1.9 5 3 7.3s2.3 4.5 3.6 6.6c.4.7.9 1.4 1.3 2.1.4.7.9 1.3 1.4 2s.9 1.3 1.4 1.9l1.5 1.8 8.3 9.9c-.5-.6-1.1-1.3-1.6-2s-1-1.3-1.5-2l-1.5-2.1c-.5-.7-1-1.5-1.4-2.2-1.4-2.3-2.7-4.6-3.9-7.1-1.2-2.5-2.3-5.1-3.2-7.8-1-2.7-1.9-5.6-2.6-8.6-.8-3-1.4-6.1-2-9.3-.6-3.2-1-6.5-1.3-10-.3-3.4-.5-7-.6-10.7-.1-3.7-.1-7.5.1-11.3.1-3.9.4-7.9.8-12s.9-8.1 1.4-12c.6-3.9 1.3-7.6 2-11.2.8-3.6 1.6-7 2.6-10.4 1-3.3 2-6.5 3.2-9.6 1.2-3.1 2.4-6 3.7-8.7 1.3-2.8 2.7-5.4 4.2-7.9s3-4.8 4.7-7c1.6-2.2 3.3-4.2 5.1-6.1.8-.9 1.6-1.7 2.4-2.5.2-.3.4-.5.6-.7z"
              />
              <path
                className="lettersFront"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                fill="#67B1E0"
                d="M436.1 339.3c.5 3.1 1 6.4 1.3 9.8.3 3.4.5 6.9.6 10.4.1 3.6 0 7.3-.1 11.1-.2 3.8-.4 7.8-.8 11.8-.4 4.1-.9 8-1.5 11.8-.6 3.8-1.3 7.5-2 11-.8 3.5-1.6 6.9-2.6 10.2-1 3.3-2 6.4-3.1 9.5-1.1 3-2.4 5.9-3.6 8.7-1.3 2.8-2.7 5.4-4.1 7.9-1.4 2.5-3 4.9-4.6 7.1-1.6 2.2-3.3 4.3-5 6.3-1.8 2-3.6 3.8-5.5 5.5-1.9 1.7-3.8 3.3-5.8 4.7-2 1.4-4.1 2.7-6.2 3.9-2.1 1.2-4.3 2.2-6.6 3.1-2.3.9-4.6 1.7-6.9 2.3-2.3.6-4.7 1.1-7.2 1.5-2.4.3-4.9.6-7.4.6-2.5.1-5.1 0-7.7-.2-2.6-.2-5.2-.5-7.7-1s-4.9-1.1-7.3-1.8c-2.4-.7-4.6-1.6-6.8-2.6s-4.3-2.1-6.4-3.4c-2.1-1.3-4-2.6-5.9-4.1-1.9-1.5-3.7-3.1-5.4-4.9-1.7-1.8-3.4-3.6-4.9-5.6-1.6-2-3-4.1-4.4-6.4-1.4-2.3-2.7-4.6-3.9-7.1-1.2-2.5-2.3-5.1-3.2-7.8-1-2.7-1.9-5.6-2.6-8.6-.8-3-1.4-6.1-2-9.3-.6-3.2-1-6.5-1.3-10-.3-3.4-.5-7-.6-10.7-.1-3.7-.1-7.5.1-11.3.1-3.9.4-7.9.8-12s.9-8.1 1.4-12c.6-3.9 1.3-7.6 2-11.2.8-3.6 1.6-7 2.6-10.4 1-3.3 2-6.5 3.2-9.6 1.2-3.1 2.4-6 3.7-8.7 1.3-2.8 2.7-5.4 4.2-7.9s3-4.8 4.7-7c1.6-2.2 3.3-4.2 5.1-6.1 1.8-1.9 3.6-3.7 5.5-5.3 1.9-1.6 3.9-3.1 5.9-4.5 2-1.4 4.1-2.6 6.3-3.7 2.1-1.1 4.4-2.1 6.6-2.9 2.3-.8 4.6-1.5 6.9-2.1 2.4-.5 4.8-1 7.2-1.2 2.5-.3 5-.4 7.5-.4 2.6 0 5.2.1 7.8.4 2.6.3 5.1.7 7.6 1.2s4.9 1.2 7.2 1.9c2.3.8 4.6 1.6 6.8 2.7 2.2 1 4.3 2.1 6.4 3.4 2.1 1.3 4 2.6 5.9 4.1 1.9 1.5 3.7 3.1 5.4 4.8 1.7 1.7 3.3 3.6 4.9 5.6 1.5 2 3 4.1 4.3 6.3 1.4 2.2 2.6 4.6 3.8 7 1.2 2.4 2.2 5 3.2 7.7.9 2.7 1.8 5.5 2.5 8.4.5 3 1.1 6 1.7 9.1zm-52 69.5c.5-1.9 1-4 1.4-6.3.4-2.2.9-4.6 1.3-7.2.4-2.6.8-5.3 1.1-8.1.4-2.9.7-5.9 1-9 .3-3.2.6-6.2.8-9 .2-2.9.3-5.6.4-8.1.1-2.6.1-5 .1-7.2 0-2.3-.1-4.3-.2-6.3-.1-1.9-.3-3.8-.5-5.5-.2-1.7-.4-3.4-.7-4.9-.3-1.5-.5-2.9-.9-4.3-.3-1.3-.7-2.5-1.1-3.6-.4-1.1-.8-2.1-1.3-3.1-.5-.9-.9-1.8-1.5-2.5-.5-.8-1.1-1.4-1.7-2-.6-.6-1.2-1.1-1.8-1.5-.6-.4-1.3-.7-2-1.1-.7-.3-1.4-.6-2-.8l-2.1-.6c-.7-.2-1.5-.3-2.2-.3-.8-.1-1.5-.1-2.2-.1-.7 0-1.5.1-2.2.2-.7.1-1.5.2-2.2.4-.7.2-1.4.4-2.1.7-.7.3-1.4.6-2.1 1.1-.7.5-1.4 1-2 1.6-.7.6-1.3 1.4-1.9 2.2-.6.8-1.2 1.7-1.8 2.8-.6 1-1.2 2.1-1.8 3.4-.6 1.2-1.1 2.6-1.7 4-.5 1.5-1.1 3-1.6 4.7-.5 1.7-1 3.5-1.5 5.4-.5 1.9-.9 4-1.4 6.2-.4 2.2-.9 4.6-1.2 7.1-.4 2.5-.8 5.2-1.1 8.1-.3 2.9-.7 5.9-1 9.1-.3 3.2-.6 6.2-.8 9.1-.2 2.9-.3 5.6-.4 8.2-.1 2.6-.1 5-.1 7.3s.1 4.4.2 6.4.3 3.9.4 5.7c.2 1.8.4 3.5.7 5 .3 1.6.5 3 .9 4.4.3 1.4.7 2.6 1.1 3.8.4 1.2.8 2.2 1.3 3.2s.9 1.9 1.5 2.6c.5.8 1.1 1.5 1.6 2.1.6.6 1.2 1.1 1.8 1.6.6.4 1.3.8 2 1.2.7.3 1.3.6 2 .9l2.1.6c.7.2 1.5.3 2.2.3.7.1 1.5.1 2.2 0 .7 0 1.5-.1 2.2-.2.7-.1 1.5-.3 2.2-.5.7-.2 1.4-.5 2.1-.8.7-.3 1.4-.7 2.1-1.2.7-.5 1.4-1.1 2-1.8.7-.7 1.3-1.5 1.9-2.4.6-.9 1.2-1.8 1.8-2.9.6-1.1 1.2-2.2 1.8-3.5.6-1.3 1.1-2.7 1.7-4.2.5-1.5 1.1-3.1 1.6-4.8.6-1.9 1.1-3.7 1.6-5.6"
              />
              <path
                className="lettersSide"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                fill="#3A7199"
                d="M548.6 448.8l-18.7-2.8 13.4 7.7 20.1 2.9zM480.2 475.8l-6 39.3 9.2 13 6.4-42.4zM499.1 425.2c.1-.8.3-1.6.4-2.5.1-.8.3-1.7.4-2.6.1-.9.3-1.8.5-2.7.2-.9.3-1.9.5-2.9s.4-1.9.5-2.9c.2-1 .4-2 .6-2.9l.6-3 .6-3 .6-3 .6-3c.2-1 .4-2 .6-2.9.2-1 .4-2 .6-2.9.2-1 .4-1.9.6-2.8l.6-2.7c.2-.9.4-1.7.6-2.6.2-.8.4-1.7.5-2.5l-10.9-2.4c-.2.7-.3 1.5-.5 2.3-.2.8-.3 1.6-.5 2.4-.2.8-.3 1.7-.5 2.5-.2.9-.4 1.7-.5 2.6l-.6 2.7-.6 2.7-.6 2.7c-.2.9-.4 1.8-.6 2.8-.2.9-.4 1.8-.6 2.8-.2.9-.4 1.8-.5 2.8-.2.9-.3 1.8-.5 2.7-.2.9-.3 1.8-.5 2.7-.2.9-.3 1.8-.5 2.6-.1.9-.3 1.7-.4 2.5-.1.8-.3 1.6-.4 2.4-.1.8-.2 1.5-.4 2.3l-3.1 20.1-30-4.4 7.8 6.9 32.3 4.7 3.3-21.5zM486.2 336.1l-76.3 95.3-5 33.7 3.8 9.2 5.5-36.2 82.1-102.8z"
              />
              <path
                className="lettersFront"
                stroke="#265D85"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.5"
                fill="#67B1E0"
                d="M543.3 453.7l20.1 2.9-6 38.6-20-2.8-6.5 42.1-47.4-6.5 6.5-42.3-81.1-11.4 5.4-36.2 82.2-102.8 63.8 9.9-17 108.5zm-37.7-62.8c.2-1 .4-1.9.6-2.8l.6-2.7c.2-.9.4-1.7.6-2.6.2-.8.4-1.7.5-2.5l-1.2-.2c-.8 1.4-1.6 2.7-2.5 4.1s-1.7 2.7-2.5 4c-.8 1.3-1.7 2.7-2.5 4-.9 1.3-1.7 2.6-2.6 4-.9 1.3-1.7 2.6-2.6 3.9-.9 1.3-1.8 2.6-2.7 4s-1.8 2.7-2.7 4-1.8 2.7-2.7 4L463.6 442l32.3 4.7 3.3-21.6c.1-.8.3-1.6.4-2.5.1-.8.3-1.7.4-2.6.1-.9.3-1.8.5-2.7.2-.9.3-1.9.5-2.9s.4-1.9.5-2.9c.2-1 .4-2 .6-2.9l.6-3 .6-3 .6-3 .6-3c.2-1 .4-2 .6-2.9.1-.8.3-1.8.5-2.8"
              />
            </g>
          </svg>
        </div>
        <div className="relative pt-[5rem] px-4 text-center max-[1300px]:text-right max-md:text-center">
          <div className="text-4xl font-bold text-white mb-2 tracking-wider">
            Hello ?? Il y a quelqu&apos;un ?!?
          </div>
          <p className="max-w-2xl max-lg:pl-[25rem] max-md:pl-0 mb-2">
            Nous savons que c&apos;est inquiétant, mais la page que vous essayez
            de consulter n&apos;a pas été trouvée. Peut-être s&apos;agissait-il
            simplement d&apos;un mauvais{' '}
            <span className="line-through">lien</span> rêve ?
          </p>

          <NoScrollLink href="/" passHref>
            <Button>Retour à la page d&apos;accueil</Button>
          </NoScrollLink>
        </div>
      </div>
    </div>
  )
}
