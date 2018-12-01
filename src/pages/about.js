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
        <h2 style={{textAlign: 'center'}}>About Us...</h2>

        <h3 style={{textAlign: 'center'}}>Open Data :: Open Software :: Open Hardware :: Working Open</h3>
    <p>Participants can learn from local Open Leaders the basics of running open projects. We'll be “Working Open” through the weekend in hands-on workshops. Bring your energy and we’ll help you collaborate.</p>
    <p>This all started with a "Call for Leaders" on the EugeneTech Switcboard. The folks below stepped up.</p>
    <hr />
        <h3 style={{textAlign: 'center'}}>Leadership Team</h3>
        
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>{leaderCards}</div>
      </Layout>
    )
  }
}

export default About
