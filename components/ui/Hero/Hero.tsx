import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  className?: string
  headline: string
  description: string
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
  return (
    <header className="header">
      <div className="first-container">
        <Image
          alt="Perle Féline Logo | Brand of séductive lingerie"
          src="/HeroRed.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="second-container">
        <h2 className="headline">Lingerie élégante et érotique</h2>
        <p className="description">
          Pour les femmes qui assument leur plaisir.
        </p>
      </div>
      <style jsx>{`
        .header {
          min-height: 75vh;
          position: relative;
        }
        .first-container {
          margin: 0;
          width: 100vw;
          height: 75vh;
          position: absolute;
        }
        .second-container {
          margin: 0;
          height: 75vh;
          position: absolute;
          z-index: 1;
          display: flex;
          flex-direction: column;
          padding-top: 5.5rem;
          padding-left: 2rem;
          color: white;
        }
        .headline {
          font-size: 2.4rem;
          font-weight: 300;
          margin-bottom: 0.2rem;
          text-shadow: 0px 1px #201e1e;
        }
        .description {
          font-size: 1.4rem;
          font-weight: 200;
          text-shadow: 0px 1px #201e1e;
          backdrop-filter: blur(12px);
          background: rgba(white, 0.2);
          display: inline-block
          text-overflow: ellipsis;
          word-wrap: break-word;
          overflow: hidden;
          max-height: 3.6em;
          line-height: 1.8em;
        }
      `}</style>
    </header>
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

export default Hero
