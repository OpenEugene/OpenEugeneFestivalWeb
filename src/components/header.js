import React from 'react'
import { Link } from 'gatsby'
import Navbar from './navbar';
import backgroundBox from '../images/BackgroundBox.png'
import logo from '../images/SponsorLogos/logo_emeralds.png'
const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `url(${backgroundBox})` ,
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
            fontSize: '4rem'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <h3>Presented By...</h3>
        <img src={logo} alt="Logo" />
    </div>
    <Navbar />
  </div>
)

export default Header
