import React, { Component } from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layout'

import leaders from '../json/leaders'
import LeaderCard from '../components/leaderCard'
// RegEx to clean emails: "What is your email address\?":.+

const avatarSrc = leaders.map(leader => {
  return `https://github.com/${leader['github id']}.png`
})

const leaderCards = leaders.map((leader, i) => {
  return <LeaderCard key={i} {...leader} avatar={avatarSrc[i]}/>
})
class About extends Component {
  render() {
 
    return (
      <Layout>
        <h2>About Us...</h2>
        <h3 style={{textAlign: 'center'}}>Leadership Team</h3>
        
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>{leaderCards}</div>
      </Layout>
    )
  }
}

export default About
