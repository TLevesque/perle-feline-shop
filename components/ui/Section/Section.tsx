import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Section.module.css'
import Link from 'next/link'
import Image from 'next/image'

interface SectionProps {
  className?: string
  headline: string
  description: string
}

const Section: FC<SectionProps> = ({ headline, description }) => {
  return (
    <section className="section">
      <div className="second-container">
        <h2 className="headline">
          Découvrez une nouvelle source de plaisir...
        </h2>
        <p className="description">...au sein de notre catalogue 👇</p>
      </div>
      <style jsx>{`
        .section {
          min-height: 16vh;
          position: relative;
          background-color: #292021;
        }
        .second-container {
          margin: 0;
          width: 100vw;
          height: 16vh;
          position: absolute;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-left: 1.8rem;
          color: white;
        }
        .headline {
          font-size: 1.8rem;
          font-style: italic;
          font-weight: 300;

           {
            /* background: linear-gradient(
            to bottom,
            #cfc09f 22%,
            #634f2c 24%,
            #cfc09f 26%,
            #cfc09f 27%,
            #ffecb3 40%,
            #3a2c0f 78%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; */
          }
        }

         {
          /* h1:after {
          background: none;
          content: attr(data-heading);
          left: 0;
          top: 0;
          z-index: -1;
          position: absolute;
          text-shadow: -1px 0 1px #c6bb9f, 0 1px 1px #c6bb9f,
            5px 5px 10px rgba(0, 0, 0, 0.4), -5px -5px 10px rgba(0, 0, 0, 0.4);
        } */
        }
        .description {
          font-size: 1.3rem;
          font-weight: 200;
        }
      `}</style>
    </section>
  )
  // @media only screen and (max-width: 900px) {
  //   .first-container {
  //     width: 65vw;
  //   }
  //   .center {
  //     font-size: 1.2em;
  //   }
  // }
  // @media only screen and (max-width: 600px) {
  //   .first-container {
  //     width: 80vw;
  //   }
  //   .center {
  //     font-size: 0.9em;
  //   }
  // }
}

export default Section
