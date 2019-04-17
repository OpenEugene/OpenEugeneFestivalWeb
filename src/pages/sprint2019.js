import React, { Component } from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layout'

import leaders from '../json/leaders'
// RegEx to clean emails: "What is your email address\?":.+

const avatarSrc = leaders.map(leader => {
  return `https://github.com/${leader['github id']}.png`
})


class Sprint2019 extends Component {
  render() {
 
    return (
      <Layout>
        <h2 style={{textAlign: 'center'}}>Sprint 2019</h2>

    <p>Part of the <a href="https://foundation.mozilla.org/en/opportunity/open-events-guide/about-the-2019-sprint-for-internet-health/">Mozilla Global Sprint for Internet Health</a> the following projects are participating in the</p>
    <hr />
        <h3 style={{textAlign: 'center'}}>Purpose</h3>
        <p>To help local open source projects in Eugene, OR gain visibility and traction from the greater open source community.</p>

        <h3 style={{textAlign: 'center'}}>Outcome</h3>
        <p>local open source projects are have clear paths to collaboration and have gained new collaborators.</p>
        <h3 style={{textAlign: 'center'}}>Process</h3>
        <ol><li>Project maintainers bring open source projects to the launch event</li>
        <li>Presenters talk about things like readme's, contributor guides, milestones, issues and roadmaps.</li>
        <li>Projects add issues for missing bits and labeled with "global-sprint" and "open-eugene"</li>
        <li>Repo given topics of "open-eugene" and "global-sprint" to participate in the</li>
        <li>Project maintainers bring stories to the finishing event and share.</li>
        </ol>
        
      </Layout>
    )
  }
}

export default Sprint2019
