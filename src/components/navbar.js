import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block` }}>
    <Link
      to={props.to}
      activeStyle={{ background: '#33333388' }}
      style={{ color: 'white', textDecoration: 'none', padding: '1rem' }}
    >
      {props.children}
    </Link>
  </li>
)

const Navbar = ({ children }) => (
  <div>
    <ul style={{ listStyle: `none`, float: `right`, margin: 'auto' }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/projects">Projects</ListLink>
      <ListLink to="/sponsors">Sponsors</ListLink>
      <ListLink to="/about">About</ListLink>
    </ul>
  </div>
)

export default Navbar

// style={{
//   margin: 'auto',
//   display: 'flex',
//   justifyContent: 'space-around',
// }}
