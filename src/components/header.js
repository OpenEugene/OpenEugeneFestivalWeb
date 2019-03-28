import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Navbar from './navbar'
import backgroundBox from '../images/gradient_pinkcubes.png'

const Header = ({ siteTitle }) => {
  const images = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "SponsorLogos/logo_emeralds.png" }) {
        childImageSharp {
          id
          fixed(width: 266, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div
      style={{
        background: `url(${backgroundBox})`,
        backgroundSize: 'cover',
        padding: '2rem',
        marginBottom: '1.45rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: '#2b2b2b',
              textDecoration: 'none',
              fontSize: '4rem',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h3>Presented By...</h3>
        <Img
          fixed={images.logo.childImageSharp.fixed}
          alt="Emerald Broadband Title Sponsor"
          critical
        />
      </div>
      <Navbar />
    </div>
  )
}

export default Header
