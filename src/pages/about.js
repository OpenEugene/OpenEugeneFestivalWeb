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

        <h3>Open Data :: Open Software :: Open Hardware :: Open Projects</h3>
    <p>Participants can learn from Mozilla Open Leaders the basics of running open projects. Various local projects from teams at the University of Oregon (Open Data), Downtown Eugene artists (Open Hardware), Local Software Companies (Open Source Software) will be “Working Open” through the weekend in hands-on workshops. Bring your own projects and we’ll help you pick the right open source or creative commons license to help share your work with the world. Bring your energy and we’ll help you collaborate.</p>
    <hr />
        <h3 style={{textAlign: 'center'}}>Leadership Team</h3>
        
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>{leaderCards}</div>
      </Layout>
    )
  }
}

export default About
